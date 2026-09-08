#!/usr/bin/env bash
# Prépare le paquet à poser sur le VPS : greffe (fichiers live + cahier Grok/Obsidian).
# Ne copie PAS le server.js de démo.

set -euo pipefail
cd "$(dirname "$0")"
DEST="${1:-/tmp/evenox-suivis-vps}"
rm -rf "$DEST"
mkdir -p "$DEST/greffe-prod"

cp greffe-prod/*.js "$DEST/greffe-prod/"
cp grok.js obsidian.js greffe-routes.js install-vps.sh "$DEST/"

cat > "$DEST/A-COPIER.txt" <<'TXT'
C’est l’écran « Fait aujourd’hui / Journal » de la démo, greffé
sur le site live — pas un remplacement du serveur Booqable.

Sur le VPS (Terminal Hostinger ou SSH), depuis ce dossier :

  bash install-vps.sh
  # ou : bash install-vps.sh /chemin/vers/le/service/suivis

Ensuite :
  - Journal → bouton « Écrire le cahier dans Obsidian »
  - Rail : · Grok · Obsidian quand les modules sont là
  - Fiche : « Demander à Grok » (sans XAI_API_KEY = copie)

Environnement optionnel :
  XAI_API_KEY=…        (console.x.ai)
  OBSIDIAN_VAULT=…     (coffre Obsidian ou Drive File Stream)

Ne pas copier server.js de la démo par-dessus la production.
TXT

echo "Paquet prêt : $DEST"
find "$DEST" -type f | sort
