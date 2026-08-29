# Evenox — outils locaux

Catalogue, générateur de payload Divi, et tests Playwright.
**Aucun déploiement**, aucun POST WordPress, aucune écriture sur evenox.ca.

## Tests

```bash
npm install
npx playwright install chromium
npx playwright test
```

Chromium seulement. Les specs ouvrent `assistant-jeux/test-local.html` en `file://`
(pas de serveur, réseau coupé, fetch stubbé, payloads marqués `TEST`).

Détail des scénarios 1–10 : `tests/README.md`.

`assistant-evenement/` et `calculateur-fete.html` sont absents de ce clone
(404 en ligne). Tests 1–5 (ev) et le volet ev du test 10 : `skip` —
relancer quand `ev-widget.js` arrive. Ne pas inventer ce widget.

## Build / lint / catalogue

```bash
node scripts/verifier-catalogue.js
node scripts/build.js assistant-jeux
node scripts/lint-payload.js assistant-jeux
node scripts/build-test-local.js
```

`build.js assistant-evenement` échoue tant que le dossier manque (voulu).
Décisions §6 (zones, seuil 449/500, destination des leads, conflits de prix) :
ouvertes, non tranchées ici.
