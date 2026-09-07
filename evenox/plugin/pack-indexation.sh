#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"
rm -f evenox-indexation.zip
zip -r evenox-indexation.zip evenox-indexation -x '*.DS_Store'
echo "Wrote $ROOT/evenox-indexation.zip"
