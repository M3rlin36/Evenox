# Evenox — outils locaux

Catalogue, générateur de payload Divi, et tests Playwright.
**Aucun déploiement**, aucun POST WordPress, aucune écriture sur evenox.ca.

## État après chantiers 1–5

jw (assistant jeux) est prêt. ev (persona) et le calculateur de fête
**ne sont pas dans ce clone** et **ne sont pas en ligne** (404, 3 passes :
`RAPPORT-RECHERCHE.md`). Rien n’a été inventé.

Pour les déposer depuis `C:\Users\Admin\Evenox` : **`DROP-IN.md`**.

```bash
node scripts/integrer-sources.js
```

Exit 2 tant que `assistant-evenement/ev-widget.*` manque (voulu).

## Tests

```bash
npm install
npx playwright install chromium
npx playwright test
```

Chromium seulement. Les specs ouvrent `assistant-jeux/test-local.html` en `file://`
(pas de serveur, réseau coupé, fetch stubbé, payloads marqués `TEST`).

Détail des scénarios 1–10 : `tests/README.md`.

Tests 1–5 (ev) et le volet ev du test 10 : `skip` —
relancer quand `ev-widget.js` arrive, puis écrire les sélecteurs DOM
(ne pas les inventer avant). `calculateur-fete.html` : pas de spec inventée.

## Build / lint / catalogue

```bash
node scripts/verifier-catalogue.js
node scripts/build.js assistant-jeux
node scripts/lint-payload.js assistant-jeux
node scripts/build-test-local.js
```

`build.js assistant-evenement` échoue tant que le dossier manque (voulu).
Filet des leads : `lib/evx-envoi.js` + `WEBHOOK.md` (destination §6.3 ouverte).
Décisions §6 (zones, seuil 449/500, destination des leads, conflits de prix) :
ouvertes, non tranchées ici.
