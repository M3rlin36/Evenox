# Déployer les bons calculateurs sur « Monter mon forfait »

Le site live est WordPress / Divi sur [evenox.ca](https://evenox.ca). Les pages catalogue
réutilisent le même bloc `evx-fin` avec un lien figé vers
[location-tables-chaises](https://evenox.ca/location-tables-chaises/). Ce plugin
réécrit uniquement `a.evx-fin-1` selon la page.

Inventaire live (3 sept. 2026) : **21 pages** ont le bouton. Les pages ville
(`jeux-laval`, `decoration-montreal`, etc.) n’ont **pas** ce bouton aujourd’hui ;
un repli par mot-clé les couvrirait si le bloc `evx-fin` y est ajouté.

On ne duplique pas les gros widgets Divi (`jx-calc`, `jg-calc`, `tc-calc`, …)
sur chaque catalogue. Seule `/decoration/` a déjà le calculateur sur la page
(`href="#calculateur"`). Ailleurs, le bouton envoie vers la landing dédiée.

## Voie rapide (plugin)

1. Générer le zip : `evenox/plugin/pack.sh`
2. WordPress → Extensions → Ajouter → Téléverser `plugin/evenox-cta-calculateurs.zip`
3. Activer **Evenox CTA Calculateurs**
4. LiteSpeed → Purge All
5. Vérifier :
   - https://evenox.ca/jeux-geants-interactifs/ → calculateur jeux géants
   - https://evenox.ca/location-jeux-gonflable/ → calculateur gonflables
   - https://evenox.ca/friandises-confiseries/ → calculateur machines gourmandises
   - https://evenox.ca/mur-decoratif/ → calculateur décoration événementielle

Le header, le footer, la grille produits et le téléphone restent. Seul le `href`
du bouton mauve change.

## Correspondance (21 catalogues live)

| Page catalogue | Calculateur |
| --- | --- |
| `/jeux-geants-interactifs/` | `/location-jeux-geants/#configurateur` |
| `/jeux-et-activites/` | `/location-jeux-geants/#configurateur` |
| `/jeux-geants/` | `/location-jeux-geants/#configurateur` |
| `/location-jeu-interieur/` | `/location-jeux-geants/#configurateur` |
| `/jeux-de-table/` | `/location-jeux-geants/#configurateur` |
| `/location-jeux-gonflable/` | `/location-jeux-gonflables/#configurateur` |
| `/location-jeux-exterieur/` | `/location-jeux-exterieurs/#assistant-jeux` |
| `/location-jeux-techno/` | `/location-arcade/#configurateur` |
| `/decoration/` | `#calculateur` (déjà sur la page) |
| `/decoration-cle-en-main/` | `/location-decoration-evenementielle/#configurateur` |
| `/decoration-de-ballons/` | `/decoration/#calculateur` |
| `/decoration-decor-de-table/` | `/location-decoration-evenementielle/#configurateur` |
| `/decoration-tapis-accueil/` | `/location-decoration-evenementielle/#configurateur` |
| `/decoration-lettres-neons/` | `/lettres-lumineuses/#configurateur` |
| `/mur-decoratif/` | `/location-decoration-evenementielle/#configurateur` |
| `/friandises-confiseries/` | `/machines-gourmandises/#configurateur` |
| `/equipement/` | `/location-tables-chaises/#calculateur` |
| `/location-chaise-pliante/` | `/location-tables-chaises/#calculateur` |
| `/location-tables-rive-nord/` | `/location-tables-chaises/#calculateur` |
| `/ustensile-et-vaiselle/` | `/location-tables-chaises/#calculateur` (le kit tables inclut la vaisselle) |
| `/equipement-technique/` | `/configurateur/` |

## Fallback Divi (sans plugin)

Dans le module Code de la page, remplacer uniquement le `href` de
`a.evx-fin-1` par l’URL du tableau. Ne pas toucher au `tel:`.

## Tests locaux

```bash
python3 evenox/tests/test_mapping.py
```
