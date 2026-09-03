# Calculateur chapiteaux (squelette tables-chaises)

Même format que `/tables-chaises/` et `/jeux-tc/` : wizard une question à la fois, prescription, courriel obligatoire avant les totaux.

## Fichiers
- `catalogue.json` — 32 produits, prix confirmés uniquement
- `zones.json` — FSA → [ville, km]
- `ch-section.html` / `ch-wizard.js` / `ch-core.js` / `ch-styles.css`
- `build.py` — assemble `../test-chapiteaux-tc.html` et `payload.txt`
- `verifier.py` — catalogue + payload WP + 3 prescriptions

## Prix figés
- Marquise 10×10 = **300 $** (pas 275 $)
- Bar portatif = **120 $** — le bar courbé à DEL n’existe pas
- Poids de chapiteau retirés : ancrage au sol
- Installation incluse dans le prix du chapiteau

## Build
```
python chapiteaux-tc/build.py
python chapiteaux-tc/verifier.py
```

`verifier.py` assemble le payload, refuse `&&` / lignes vides / 275 $,
rejoue les 3 prescriptions, puis exécute `selftest.js` (jsdom) sur le HTML généré.

Le payload WordPress est sur une ligne, sans `&&`, sans lignes vides.
