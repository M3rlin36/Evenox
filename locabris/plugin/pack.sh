#!/bin/sh
set -eu
ROOT="$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/plugin/locabris-correctifs/modules"
mkdir -p "$DEST"
cp "$ROOT/modules/soumission.html" "$DEST/"
cp "$ROOT/modules/contact.html" "$DEST/"
cp "$ROOT/modules/privacy.html" "$DEST/"
cp "$ROOT/modules/simples.html" "$DEST/"
cp "$ROOT/modules/shop-footer.css" "$DEST/"
cd "$ROOT/plugin"
rm -f locabris-correctifs.zip
zip -r locabris-correctifs.zip locabris-correctifs -x "*.DS_Store"
echo "packed $ROOT/plugin/locabris-correctifs.zip"
