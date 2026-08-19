#!/usr/bin/env bash
# Collecteur séquentiel : une requête à la fois, pause entre chaque.
# Arrêt immédiat si un 403 est reçu.
set -u
LIST="$1"
OUTDIR="$2"
DELAY="${3:-2.5}"
mkdir -p "$OUTDIR"
LOG="$OUTDIR/_http.log"
: > "$LOG"

while IFS= read -r url; do
  [ -z "$url" ] && continue
  slug=$(printf '%s' "$url" | sed 's|https\?://evenox.ca/||; s|/$||; s|/|__|g')
  [ -z "$slug" ] && slug="__ACCUEIL__"
  out="$OUTDIR/$slug.html"
  if [ -s "$out" ]; then
    echo "SKIP $url"
    continue
  fi
  sleep "$DELAY"
  code=$(curl -sS --max-time 60 -A "Mozilla/5.0 (compatible; EvenoxAudit/1.0; relevé interne)" \
          -w "%{http_code}" -o "$out" "$url")
  size=$(wc -c < "$out" 2>/dev/null || echo 0)
  echo -e "$code\t$size\t$url" | tee -a "$LOG"
  if [ "$code" = "403" ] || [ "$code" = "429" ]; then
    echo "=== ARRET : code $code sur $url ==="
    echo -e "STOP\t$code\t$url" >> "$LOG"
    exit 9
  fi
done < "$LIST"
echo "=== TERMINE ==="
