#!/usr/bin/env bash
# Prépare le dossier à copier sur le VPS Hostinger.
# Ce script n'a pas SSH. Il construit le paquet. Alexandre le pose.

set -euo pipefail
cd "$(dirname "$0")"
DEST="${1:-/tmp/evenox-suivis-vps}"
rm -rf "$DEST"
mkdir -p "$DEST/public/js" "$DEST/public/css"

cp public/js/*.js "$DEST/public/js/"
cp public/css/app.css "$DEST/public/css/"
cp grok.js gabarits.js mailer.js livre-du-jour.js appliquer.js obsidian.js "$DEST/"

cat > "$DEST/A-COPIER.txt" <<'TXT'
Sur le VPS (SSH), depuis le dossier du service suivis :

  1. Copier public/js/* et public/css/app.css par-dessus les fichiers servis sous /suivis/
  2. Copier grok.js gabarits.js mailer.js obsidian.js à côté du serveur Express
  3. Brancher les routes comme dans server.js :
       POST /api/dossier/:id/grok
       POST /api/client/:id/grok
       POST /api/obsidian/exporter
  4. Environnement du service :
       XAI_API_KEY=…          (console.x.ai)
       OBSIDIAN_VAULT=…       (dossier ouvert dans Obsidian, ou Drive File Stream)
  5. Relancer le service Express / pm2 / systemd
  6. Ouvrir le même dossier dans Obsidian (Open folder as vault)
     ou le dossier Drive « Obsidian — Contexte agents »

Le code Express + Booqable + Gmail du VPS n’est pas dans GitHub.
Ne pas remplacer le serveur de production par server.js (démo).
TXT

echo "Paquet prêt : $DEST"
find "$DEST" -type f | sort
