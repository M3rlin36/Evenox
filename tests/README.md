# Tests Playwright

Harnais local sur les `test-local.html` autonomes. **Aucun serveur.** Rien n’est envoyé vers evenox.ca : les leads sont interceptés dans la page (`TEST`) et toute requête non-`file://` est abortée.

## Relancer

```bash
npm install
npx playwright install chromium
npx playwright test
```

Depuis la racine du dépôt. Un seul navigateur suffit (Chromium).

Régénérer la page de test jw après un changement de widget :

```bash
node scripts/build-test-local.js
```

## Scénarios (brief §5.3)

| # | Widget | Statut |
|---|---|---|
| 1–5 | ev | `skip` — `assistant-evenement` absent |
| 6 | jw | panier mixte gonflables + arcade + géants |
| 7 | jw | prix révélé → 1 envoi `evx_soumission` ; 2ᵉ affichage = dédup |
| 8 | jw | `?jeux=gonflables` présélectionne |
| 9 | jw | JS off : 3 cartes-liens (on ne les suit pas) |
| 10 | jw | J4P = 35 km → livraison 275 $ (100 + 7×25). ev skip |

`calculateur-fete.html` est absent : pas de spec inventée.

Prix du panier = ceux de `jw-widget.js` (Moyen Bouncer 120, Pac-Man 100,
Connect 4 80, Fast & Furious 140, Air hockey 120). Flipper et stocks à 2
n’existent pas dans ce fichier — on ne les invente pas.

A11y (C4) : `tests/a11y-jw.spec.js` (axe-core, 375px, clavier). ev et
calculateur : skip.

## Ouvert

- Pas de widget ev ni de `test-local.html` persona : 1–5 et le volet ev du 10 restent skippés.
- Le widget jw n’applique pas de plancher 300 $ sur le total (formule livraison seulement, inchangée).
