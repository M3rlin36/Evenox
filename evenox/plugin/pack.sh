#!/usr/bin/env bash
set -euo pipefail
root="$(cd "$(dirname "$0")" && pwd)"
cd "$root"
zip -r evenox-cta-calculateurs.zip evenox-cta-calculateurs \
  -x "*.DS_Store"
echo "OK $root/evenox-cta-calculateurs.zip"
