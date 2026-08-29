# Evenox — outils locaux

Catalogue, générateur de payload Divi, et tests Playwright.
**Aucun déploiement**, aucun POST WordPress, aucune écriture sur evenox.ca.

## État

| Fait | Bloqué |
|---|---|
| C1–C5 pour **jw** (catalogue, build, Playwright, a11y, filet) | `assistant-evenement/ev-widget.*` et `calculateur-fete.html` : sur le PC seulement (`DROP-IN.md`) |
| CI GitHub : `.github/workflows/tests.yml` (Chromium + catalogue + lint) | §6 : zones, seuil 449/500, destination des leads, conflits de prix — **ne pas trancher ici** |

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

Même porte que la CI :

```bash
npm run ci
```

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
Filet des leads : `lib/evx-envoi.js` + `WEBHOOK.md` (destination §6.3 ouverte).
