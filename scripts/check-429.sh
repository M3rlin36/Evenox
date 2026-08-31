#!/usr/bin/env bash
# Diagnostic doux evenox.ca — HTTP 429 / 403.
# Une requête à la fois, délai >= 1,5 s, User-Agent honnête.
# Arrêt immédiat sur 403 ou 429. Ne pas relancer en boucle.
set -euo pipefail

BASE_URL="${BASE_URL:-https://evenox.ca}"
DELAY_SEC="${DELAY_SEC:-2}"
UA="Evenox-429-check/1.0 (+https://github.com/M3rlin36/Evenox; evenox.ca@gmail.com)"

# Chemins demandés : accueil, contact, login, robots, sitemap.
PATHS=(
  /
  /contact/
  /wp-login.php
  /robots.txt
  /sitemap_index.xml
)

echo "=== check-429 ==="
echo "cible     : ${BASE_URL}"
echo "délai     : ${DELAY_SEC}s entre chaque URL"
echo "user-agent: ${UA}"
echo "règle     : STOP immédiat si 403 ou 429 (ne pas relancer)"
echo

print_interesting_headers() {
  local hdrs="$1"
  # mawk n'a pas IGNORECASE — comparer en minuscules.
  # Préfixes : x-hcdn-* / x-litespeed-* (pas seulement « x-hcdn: »).
  echo "$hdrs" | awk '
    {
      l = tolower($0)
      if (l ~ /^(retry-after:|x-hcdn-|x-litespeed-|x-qc-|x-turbo-charged-by:|server:|platform:|x-powered-by:|cf-ray:)/)
        print "    " $0
    }'
}

check_one() {
  local path="$1"
  local url="${BASE_URL}${path}"
  local tmp hdrs body_file http_code retry_after

  tmp="$(mktemp)"
  body_file="$(mktemp)"
  trap 'rm -f "$tmp" "$body_file"' RETURN

  # HEAD d'abord (léger). Si l'hôte refuse HEAD (405/501), un GET suit.
  http_code="$(
    curl -sS -D "$tmp" \
      --max-time 25 --connect-timeout 10 \
      -A "$UA" \
      -H "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" \
      -o "$body_file" \
      -w "%{http_code}" \
      -X HEAD \
      "$url" || true
  )"

  if [[ -z "$http_code" || "$http_code" == "000" ]]; then
    echo "FAIL  ${url}  (pas de réponse / timeout)"
    echo "STOP  réseau ou hôte injoignable — on n'insiste pas."
    return 2
  fi

  if [[ "$http_code" == "405" || "$http_code" == "501" ]]; then
    : > "$tmp"
    http_code="$(
      curl -sS -D "$tmp" \
        --max-time 25 --connect-timeout 10 \
        -A "$UA" \
        -H "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" \
        -o "$body_file" \
        -w "%{http_code}" \
        "$url" || true
    )"
  fi

  hdrs="$(tr -d '\r' < "$tmp")"
  retry_after="$(echo "$hdrs" | awk 'tolower($0) ~ /^retry-after:/{sub(/^[^:]+:[ \t]*/,""); print; exit}')"

  printf "%s  %s\n" "$http_code" "$url"
  print_interesting_headers "$hdrs"
  if [[ -n "$retry_after" ]]; then
    echo "    → attendre Retry-After=${retry_after} avant toute autre requête"
  fi

  if [[ "$http_code" == "429" ]]; then
    echo
    echo "STOP  429 Too Many Requests — rate-limit Hostinger / plan à bout."
    echo "      Corps souvent vide (CDN hCDN). Ne pas relancer ce script."
    echo "      Attendre 15–60 min (ou la valeur Retry-After). Voir docs/http-429.md"
    return 29
  fi

  if [[ "$http_code" == "403" ]]; then
    echo
    echo "STOP  403 — défi / blocage (souvent page JS Hostinger CDN)."
    echo "      Un vrai Chrome passe parfois ; curl doit s'arrêter. Ne pas relancer."
    echo "      Voir docs/http-429.md"
    return 3
  fi

  return 0
}

first=1
for path in "${PATHS[@]}"; do
  if [[ "$first" -eq 1 ]]; then
    first=0
  else
    sleep "$DELAY_SEC"
  fi
  check_one "$path" || exit $?
done

echo
echo "OK  aucune réponse 403/429 sur cet échantillon. Site joignable depuis cette IP."
echo "    Si un visiteur Chrome voit encore 429 : couche plan / CDN — docs/http-429.md"
