# Evenox — outils locaux

Catalogue, générateur de payload Divi, et tests Playwright.
**Aucun déploiement**, aucun POST WordPress, aucune écriture sur evenox.ca.

## État

| Fait | Bloqué |
|---|---|
| C1–C5 pour **jw** (catalogue, build, Playwright, a11y, filet) | `assistant-evenement/ev-widget.*` et `calculateur-fete.html` : sur le PC seulement (`DROP-IN.md`) |
| CI GitHub : `.github/workflows/tests.yml` appelle `npm run ci` (catalogue, contrats outils, lint jw, Playwright) | §6 : constantes dans `lib/evx-decisions.js` + `DECISIONS.md` — **drapeaux actifs à `null` / `false`** |

Rien n’a été inventé. ev / calculateur : 3 passes, toujours absents (`RAPPORT-RECHERCHE.md`).

## Dépôt des sources PC

```bash
npm run integrer
```

Exit 2 tant que `assistant-evenement/ev-widget.*` manque (voulu). Checklist : `DROP-IN.md`.

## Tests

```bash
npm install
npx playwright install chromium
npm test
```

Même porte que la CI (`.github/workflows/tests.yml` appelle `npm run ci`) :

```bash
npm run ci
```

`npm run test:outils` refuse un payload / `test-local.html` périmé
(`--check`) et vérifie que lint §4 échoue vraiment sur les 4 règles.

Chromium seulement. Les specs ouvrent `assistant-jeux/test-local.html` en `file://`
(pas de serveur, réseau coupé, fetch stubbé, payloads marqués `TEST`).

Détail des scénarios 1–10 : `tests/README.md`.

Tests 1–5 (ev) et le volet ev du test 10 : `skip` —
relancer quand `ev-widget.js` arrive, puis écrire les sélecteurs DOM
(ne pas les inventer avant). `calculateur-fete.html` : pas de spec inventée.

## Build / lint / catalogue

```bash
npm run verifier:catalogue
npm run build:jw
npm run lint:payload
npm run build:test-local
```

`npm run build:ev` / `lint:payload:ev` échouent tant que le dossier manque (voulu).
`node scripts/build.js assistant-jeux --check` refuse un `payload.txt` désaligné.
Filet des leads : `lib/evx-envoi.js` + `WEBHOOK.md` (destination §6.3 ouverte).
Décisions §6 : `lib/evx-decisions.js` + `DECISIONS.md` (paramétrables, non tranchées).
