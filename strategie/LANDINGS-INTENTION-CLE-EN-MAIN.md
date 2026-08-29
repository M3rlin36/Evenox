# Mapping Ads corrigé — forfaits = intention « clé en main » seulement

**Correction Alexandre (29 août 2026) :**  
Les pages **forfait** ne doivent **pas** recevoir le trafic Search générique (`location chaises Laval`, `jeux gonflables`, etc.).  
Le forfait convertit quand la personne cherche déjà **clé en main / tout inclus / livré-placé / forfait**.

Sinon : mauvaise intention → bounce → CPA pourri.

---

## Règle d’or

| Intention de recherche | Type de page | Exemple URL |
| --- | --- | --- |
| Louer un **item** / catégorie / ville | Catalogue, page ville, Express, fiche produit | `/location-chaises-laval/`, `/`, `/location-jeux-gonflables/` |
| **Clé en main** / forfait / tout inclus / livré+placé+ramassé | Page forfait / hub forfaits | `/forfaits-tables-chaises/`, `/forfait-jeux-essentiel/` |

**Mot-clés qui autorisent une landing forfait (au moins 1 signal) :**  
`clé en main`, `tout inclus`, `forfait`, `livré placé`, `livraison installation`, `package`, `clés en main`, parfois `avec installation` + événement.

**Mot-clés qui restent sur pages location (PAS forfait) :**  
`location chaises`, `location tables`, `jeux gonflables Laval`, `photobooth Laval`, `château gonflable`, prix unitaire, marque item.

---

## Nouveau mapping campagne → page

### C1 — Mobilier / Express

| Groupe d’annonces | Exemples requêtes | Landing |
| --- | --- | --- |
| Express urgence | urgent, 72h, cette fin de semaine + chaises/tables | **`/`** (Express) |
| Location chaises/tables + ville | location chaises Laval, tables Sainte-Thérèse | **`/location-chaises-laval/`**, **`/location-chaises-sainte-therese/`**, **`/location-tables-chaises/`** |
| Location générique | location tables et chaises Rive-Nord | **`/location-tables-chaises/`** |
| **Clé en main / forfait mobilier seulement** | forfait tables chaises, location clé en main tables, livré placé ramassé, tout inclus chaises | **`/forfaits-tables-chaises/`** ou **`/forfait-mobilier-reception/`** (649 $) |

### C2 — Jeux

| Groupe | Requêtes | Landing |
| --- | --- | --- |
| Location gonflable / jeux + ville | jeux gonflables Laval, château gonflable Rive-Nord | **`/location-jeux-gonflables/`**, **`/location-jeux-gonflables-laval/`**, **`/jeux-laval/`**, **`/jeux-rive-nord/`** |
| Catalogue / item | nom de thème, gonflable dès 100 $ | catalogue ou fiche produit |
| **Clé en main / forfait fête seulement** | forfait anniversaire clé en main, fête enfants tout inclus, forfait jeux | **`/forfaits-fete-enfants/`**, **`/forfait-jeux-essentiel/`** |

### C3 — Photobooth

| Groupe | Requêtes | Landing |
| --- | --- | --- |
| Location photobooth + ville | photobooth Laval, location photobooth Montréal | **`/location-photobooth-laval/`**, **`/photobooth/`**, **`/location-photobooth-montreal/`** |
| Vidéobooth 360 | vidéobooth 360, photobooth 360 | **`/location-videobooth-360/`** ou **`/photobooth-360/`** |
| **Forfait / clé en main / animateur tout inclus** | forfait photobooth, photobooth clé en main, photobooth tout inclus animateur | **`/forfaits-photobooth/`** |

> Beaucoup de forfaits photobooth Évenox **sont** déjà « clé en main » (animateur, install).  
> Mais en Search : si la requête est juste `photobooth Laval`, commence par la **page location/ville** ; réserve le hub forfaits aux requêtes forfait/clé en main **ou** au remarketing.

### C4 — Corpo

Les pages corpo sont par nature forfait/clé en main → OK si la requête contient corpo/5à7/party bureau/gala/Noel entreprise.  
Pas pour `location chaises` générique.

---

## Structure Google Ads (ad groups)

```
Campagne Search Mobilier
├── AG Express 72h          → evenox.ca/
├── AG Location chaises GEO → location-chaises-{ville}/
├── AG Location tables      → location-tables-chaises/
└── AG Clé en main forfait  → forfaits-tables-chaises/   ← mots-clés restreints

Campagne Search Jeux
├── AG Gonflables GEO       → location-jeux-gonflables[-ville]/
├── AG Jeux hub             → jeux/ ou jeux-{ville}/
└── AG Forfait clé en main  → forfaits-fete-enfants/     ← mots-clés restreints

Campagne Search Photobooth
├── AG Location GEO         → location-photobooth-{ville}/ ou photobooth/
├── AG 360                  → location-videobooth-360/
└── AG Forfait clé en main  → forfaits-photobooth/       ← mots-clés restreints
```

---

## Listes de mots-clés « forfait / clé en main » (exemples)

**Mobilier**  
- "location tables chaises clé en main"  
- "forfait tables chaises"  
- "tables chaises livré placé"  
- "location mobilier événement tout inclus"  

**Jeux**  
- "forfait anniversaire clé en main"  
- "fête enfants tout inclus"  
- "forfait jeux gonflables"  
- "location jeux clé en main Laval"  

**Photobooth**  
- "forfait photobooth"  
- "photobooth clé en main"  
- "photobooth tout inclus"  
- "location photobooth avec animateur" (proche clé en main)

Tout le reste → pages **location**, pas forfait.

---

## Upsell (après le clic location)

La personne arrive sur **location** (prix item / ville).  
Au téléphone / form / page :  
« On a aussi le **forfait clé en main** livré-placé à 649 $ — tu veux que je te le calcule ? »

Ça respecte l’intention Search **et** pousse le panier moyen.

---

## Impact sur le doc landings précédent

`LANDINGS-ADS-BONNES-PAGES.md` listait les meilleures **pages forfait** (qualité page).  
Celle-ci impose **quand** les utiliser (qualité intention).  
Les deux ensemble : bonne page **+** bonne intention.
