# Recherche des sources absentes

`assistant-evenement/` (ev-widget) et `calculateur-fete.html` restent
**introuvables**. Rien n’a été inventé. Le vérificateur ignore ces chemins
s’ils n’existent pas sur disque.

Les ~95 produits persona et la grille du calculateur de fête
(`expressActif: false`) vivent seulement dans `C:\Users\Admin\Evenox`
chez Alexandre. Quand ils sont copiés ici : `node scripts/integrer-sources.js`
(voir `DROP-IN.md`).

## Où on a cherché (passes 1–3, 2026-08-29)

| Endroit | Résultat |
|---|---|
| Workspace `/workspace` et `/tmp` (caches live, 404 HTML) | Aucun `ev-widget*` / `calculateur-fete*` source |
| Toutes les branches git (`git ls-tree -r` sur chaque ref) | Aucun de ces chemins n’a jamais été commité |
| Drive (titres + `fullText` `ev-widget` / `expressActif` / `calculateur-fete`) | 0 fichier source (Ads pack seulement) |
| Gmail (pièces `filename:js`/`html`, sujets widget/calculateur) | 0 pièce jointe |
| Notion (CURSOR-BRIEF, ev-widget, 49289, expressActif) | Pages ops / Ads — pas le JS |
| Slack public (`ev-widget`, `calculateur-fete`, `assistant-evenement`) | 0 message |
| GitHub `M3rlin36` (code `ev-widget.js`, `expressActif`, `calculateur-fete`) | Repo Evenox uniquement, fichiers absents |
| Sitemap Yoast `page-sitemap.xml` (226 pages publiées) | Aucun slug `assistant-evenement` ni `calculateur*` |

## GET publics evenox.ca

3 s minimum entre requêtes. Stop 403/429 — aucun 403/429 sur ces passes.

### 1re passe

`/assistant-evenement/`, `/calcule-ton-evenement/`, `/calculateur-fete/`,
`/calculateur/`, `/calculer-mon-evenement/` → **404**.

### 2e passe

`/calculateur-de-fete/`, `/calculateur-evenement/`, `/calcule-ta-fete/`,
`/assistant-persona/`, `/calculateur-secteur/`, `/calculateur-secteur-v2/` → **404**.

REST `pages?search=assistant` : pages déjà au catalogue (décor, jeux géants,
jeux extérieurs 4839, chapiteaux). Pas de slug `assistant-evenement`
(la page §7 est draft / pas encore créée).

REST `pages?search=calculateur` : tables-chaises 6569, forfaits — déjà extraits.
Pas de `calculateur-fete`.

### 3e passe (nouveaux chemins)

Fichiers / uploads :

| URL | HTTP |
|---|---|
| `/calculateur-fete.html` | **404** |
| `/assistant-evenement/ev-widget.js` | **404** |
| `/wp-content/uploads/ev-widget.js` | **404** |
| `/wp-content/uploads/calculateur-fete.html` | **404** |

Slugs :

| URL | HTTP |
|---|---|
| `/configurateur-evenement/` | **404** |
| `/estimateur-evenement/` | **404** |
| `/assistant-fete/` | **404** |
| `/calcule-ton-prix/` | **404** |
| `/calcule-mon-evenement/` | **404** |

REST public (200, corps `[]` = aucune page/média) :

- `pages?slug=assistant-evenement` → `[]`
- `pages?search=persona` → `[]`
- `media?search=widget` → `[]`
- `media?search=calculateur` → `[]`

REST `pages?search=calcule` → 5 pages photobooth déjà au sitemap
(`photobooth-classique-*`, `photobooth-360-*`). Le mot « calcule » apparaît
dans le HTML Divi ; **aucun** `ev-widget`, `expressActif`, ni `calculateur-fete`.

HTML des configurateurs déjà extraits (accueil, forfaits, jeux, tables) :
aucun commentaire ni `atob` qui embarque ev ou le calculateur de fête.
