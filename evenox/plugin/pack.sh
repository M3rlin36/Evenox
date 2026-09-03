#!/bin/sh
set -eu
ROOT="$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)"
cd "$ROOT/plugin"
rm -f evenox-cta-jeux-geants.zip
zip -r evenox-cta-jeux-geants.zip evenox-cta-jeux-geants -x "*.DS_Store"
echo "packed $ROOT/plugin/evenox-cta-jeux-geants.zip"
