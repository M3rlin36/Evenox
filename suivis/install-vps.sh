#!/usr/bin/env bash
# Greffe le cahier Obsidian + Grok sur le VPS, sans remplacer le serveur prod.
# À lancer EN SSH / Terminal Hostinger, depuis n'importe où.

set -euo pipefail

ROOT="${1:-}"
if [ -z "$ROOT" ]; then
  ROOT="$(find /var/www /opt /home /root /srv -name 'app.js' -path '*/js/app.js' 2>/dev/null | head -1 | xargs -r dirname | xargs -r dirname)"
fi
if [ -z "$ROOT" ] || [ ! -d "$ROOT" ]; then
  echo "Dossier suivis introuvable. Relance : $0 /chemin/vers/suivis"
  exit 1
fi

JS="$ROOT/js"
if [ ! -f "$JS/app.js" ]; then
  JS="$ROOT/public/js"
fi
if [ ! -f "$JS/app.js" ]; then
  echo "Pas de js/app.js sous $ROOT"
  exit 1
fi

HERE="$(cd "$(dirname "$0")" && pwd)"
STAMP="$(date +%Y%m%d-%H%M%S)"
BAK="$ROOT/sauvegarde-greffe-$STAMP"
mkdir -p "$BAK"
cp -a "$JS/app.js" "$JS/vue-journal.js" "$JS/fiche.js" "$JS/vue-client.js" "$JS/noyau.js" "$BAK/" 2>/dev/null || true
echo "Sauvegarde : $BAK"

cp "$HERE/greffe-prod/app.js" "$JS/app.js"
cp "$HERE/greffe-prod/vue-journal.js" "$JS/vue-journal.js"
cp "$HERE/greffe-prod/fiche.js" "$JS/fiche.js"
cp "$HERE/greffe-prod/vue-client.js" "$JS/vue-client.js"
cp "$HERE/greffe-prod/noyau.js" "$JS/noyau.js"

# Modules à côté du serveur Express
SRV="$(dirname "$(find "$ROOT" /opt /var/www /home /root -name 'server.js' -o -name 'index.js' 2>/dev/null | head -1)")"
if [ -n "$SRV" ] && [ -d "$SRV" ]; then
  cp "$HERE/grok.js" "$HERE/obsidian.js" "$HERE/greffe-routes.js" "$SRV/"
  if [ -f "$SRV/server.js" ] && ! grep -q 'greffe-routes' "$SRV/server.js"; then
    printf '\ntry { require("./greffe-routes")(app, typeof exigerSession === "function" ? exigerSession : null); } catch (e) { console.error("greffe Grok/Obsidian:", e && e.message); }\n' >> "$SRV/server.js"
    echo "Greffe ajoutée à $SRV/server.js"
  fi
fi

if command -v pm2 >/dev/null; then
  pm2 restart all || true
elif command -v systemctl >/dev/null; then
  systemctl restart suivis 2>/dev/null || systemctl restart evenox 2>/dev/null || true
fi

echo "Greffe posée. Ouvre https://evenoxpos.cloud/suivis/ → Journal."
echo "Le serveur de production n'a pas été remplacé."
