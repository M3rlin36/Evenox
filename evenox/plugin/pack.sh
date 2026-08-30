#!/bin/sh
set -eu
ROOT="$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/plugin/evenox-formulaire/modules"
mkdir -p "$DEST"
cp "$ROOT/modules/tables-chaises.html" "$DEST/"
cd "$ROOT/plugin"
rm -f evenox-formulaire.zip
zip -r evenox-formulaire.zip evenox-formulaire -x "*.DS_Store"
echo "packed $ROOT/plugin/evenox-formulaire.zip"
