# Campagnes Google Ads Évenox — V2 approfondie

**Date :** 29 août 2026  
**Règles non négociables :**  
1. Objectif = **leads / bookings**, pas notoriété.  
2. Landing **forfait** = seulement intention **clé en main / tout inclus / forfait / livré-placé**.  
3. Search générique item/ville = pages **location**.  
4. Search only au lancement (pas Display / PMax tant que Search n’est pas rentable).

**Références :** Event Hawk (intent), structure party rental (1 ad group = 1 intent), landings evenox.ca scorées, concurrent Les Ballounes (prix chaise ~6,25 $, cueillette multi-points).

---

## 1. Structure du compte (vue d’ensemble)

```
Compte Évenox
│
├── CAMPAGNE 1 — Mobilier Search          [40 % budget]
│   ├── AG1 Express 72h
│   ├── AG2 Chaises — geo (Laval, Ste-Thérèse, Blainville…)
│   ├── AG3 Tables & chaises — hub location
│   └── AG4 Clé en main / forfait mobilier     ← mots restreints
│
├── CAMPAGNE 2 — Jeux Search              [30 % budget]
│   ├── AG1 Gonflables — hub + geo
│   ├── AG2 Jeux géants / hub ville
│   └── AG3 Forfait fête enfants clé en main   ← mots restreints
│
├── CAMPAGNE 3 — Photobooth Search        [25 % budget]
│   ├── AG1 Photobooth location + geo
│   ├── AG2 Vidéobooth 360
│   └── AG3 Forfait photobooth clé en main     ← mots restreints
│
└── CAMPAGNE 4 — Corpo Search (phase 2)   [5 % test → ↑ oct–déc]
    ├── AG1 5 à 7 / party bureau
    └── AG2 Party Noël / gala
```

**Réseaux :** Search Network ON · Display Network OFF · Partners OFF au début.  
**Localisation :** Presence in (pas « interest ») · rayon **~35–40 km** Ste-Thérèse **ou** liste villes (à confirmer).  
**Langue :** Français.  
**Annonces :** RSA (Responsive Search Ads), 1–2 par ad group.  
**Match :** Phrase + Exact au lancement ; Broad Match **interdit** jusqu’à 30+ conversions.

---

## 2. Budget proposé (exemple 1 000 $/mois ≈ 33 $/jour)

| Campagne | $/jour | $/mois | Rôle |
| --- | --- | --- | --- |
| C1 Mobilier | 13 $ | 400 $ | Cash + volume (Express + location) |
| C2 Jeux | 10 $ | 300 $ | Weekends familles / écoles |
| C3 Photobooth | 8 $ | 250 $ | Ticket élevé |
| C4 Corpo | 2 $ | 50 $ | Apprentissage (↑ en nov) |
| **Total** | **33 $** | **1 000 $** | |

Si budget **600 $/mois** : coupe C4, C1=250, C2=200, C3=150.  
Si **1 500 $/mois** : C1=550, C2=450, C3=400, C4=100.

**Enchères :** Maximize conversions (si tag OK) sinon Maximize clicks avec plafond CPC 1,50–3,50 $ selon catégorie, puis bascule Target CPA après 20–30 conv.

---

## 3. CAMPAGNE 1 — Mobilier Search

### AG1 — Express 72h
**Intent :** urgence, prix fixe, 20/50/100 places.  
**Landing :** `https://evenox.ca/`  
**Mots-clés (phrase sauf indication) :**
```
"location chaises urgent"
"location tables chaises urgent"
"louer chaises cette fin de semaine"
"location chaises 72h"
"tables chaises express"
"location chaises Sainte-Thérèse urgent"
"location chaises Laval urgent"
[location tables chaises express]
```
**Négatifs AG :** forfait, clé en main, mariage (optionnel), chapiteau  
**RSA titres :**
1. Tables & chaises Express 72h  
2. Dès 90 $ — prix fixe  
3. Ste-Thérèse · Laval · Terrebonne  
4. Sans soumission — c’est affiché  
5. Réservation rapide Évenox  
**Desc :** Besoin de chaises en 72 h ? Forfaits 20, 50 ou 100 places à prix fixe. Zone limitée. Paiement à la réservation.  
**Sitelinks :** Express · Contact · Tables & chaises · Avis Google

---

### AG2 — Chaises geo (1 ad group par ville prioritaire, ou 1 AG multi-ville si budget serré)

**Priorité villes Ads (proximité entrepôt) :**  
1. Sainte-Thérèse 2. Laval 3. Blainville 4. Terrebonne (si tu livres) 5. Mirabel  

| Ville | Landing | Exemples mots-clés |
| --- | --- | --- |
| Laval | `/location-chaises-laval/` | "location chaises Laval", "louer chaises Laval", "chaises pliantes location Laval", [location de chaises à Laval] |
| Ste-Thérèse | `/location-chaises-sainte-therese/` | "location chaises Sainte-Thérèse", "louer chaises Ste-Thérèse" |
| Blainville | `/location-chaises-blainville/` | "location chaises Blainville" |
| Montréal | `/location-chaises-montreal/` | **bid plus bas** (concurrence + distance) |

**RSA angle location (pas forfait) :**  
- Titre : Location de chaises à Laval  
- Titre : Chiavari, pliantes, Martha  
- Titre : Prix en ligne · livraison dispo  
- Titre : Réservation 24/7  
**Desc :** Louez vos chaises à Laval dès [prix page]. Livraison dès 100 $. Réservez en ligne chez Évenox.  

**Négatifs AG :** clé en main, forfait, tout inclus, livré placé (→ ces termes vont en AG4)

---

### AG3 — Tables & chaises hub location
**Landing :** `/location-tables-chaises/`  
*(H1 site parle déjà « livrées, placées, ramassées » — c’est OK comme **service location** ; le hub **forfait prix 649+** reste AG4.)*

```
"location tables et chaises"
"location tables chaises"
"louer tables et chaises"
"location table chaise Rive-Nord"
"location tables chaises Montréal"
[location de tables et chaises]
```

**RSA :** Location tables et chaises | Prix en ligne | Livraison dispo | Évenox Rive-Nord  

---

### AG4 — Clé en main / forfait mobilier ⚠️ INTENT STRICT
**Landing :** `/forfaits-tables-chaises/` ou `/forfait-mobilier-reception/` (649 $)  
**Uniquement si le mot-clé contient un signal forfait :**

```
"forfait tables chaises"
"location tables chaises clé en main"
"tables chaises tout inclus"
"tables chaises livré placé"
"forfait mobilier événement"
"location mobilier clé en main Laval"
"chaises tables forfait livraison installation"
[forfait tables et chaises]
[location tables chaises clé en main]
```

**RSA :**  
- Forfaits tables & chaises dès 649 $  
- Livré, placé, ramassé  
- Nappes incluses  
- Un prix clair — Évenox  

**Si Search Terms montre `location chaises Laval` sans forfait → négatif dans AG4, reste en AG2.**

---

## 4. CAMPAGNE 2 — Jeux Search

### AG1 — Gonflables location (+ geo)
**Landings :**  
- Hub : `/location-jeux-gonflables/`  
- Laval : `/location-jeux-gonflables-laval/`  
- Blainville / St-Eustache : pages ville si actives  

```
"location jeux gonflables"
"location château gonflable"
"jeux gonflables Laval"
"château gonflable location Laval"
"location gonflable Rive-Nord"
"jeux gonflables Sainte-Thérèse"
"location jeux gonflables Mirabel"
[location de jeux gonflables]
[jeux gonflables Laval]
```

**RSA :** Location jeux gonflables dès 100 $ | Montage / désinfection | Laval & Rive-Nord | Réserve en ligne  

**Négatifs AG :** forfait, clé en main, tout inclus, acheter, vente, usagé, DIY

---

### AG2 — Jeux hub / géants ville
**Landings :** `/jeux-laval/`, `/jeux-rive-nord/`, `/jeux/`  
```
"location jeux géants Laval"
"jeux géants location Rive-Nord"
"location jeux extérieurs Laval"
```

---

### AG3 — Forfait fête enfants clé en main ⚠️
**Landing :** `/forfaits-fete-enfants/` ou `/forfait-jeux-essentiel/` (499 $)

```
"forfait fête enfants"
"forfait anniversaire clé en main"
"fête enfants tout inclus"
"forfait jeux gonflables"
"location jeux clé en main"
"party enfants forfait livraison"
"anniversaire clé en main Laval"
[forfait fête d'enfants]
[forfait jeux gonflables]
```

**RSA :** Forfaits fête d’enfants dès 499 $ | Tout inclus, livré chez toi | Gonflables + jeux + gourmandises | Évenox  

---

## 5. CAMPAGNE 3 — Photobooth Search

### AG1 — Location photobooth + geo
**Landings :** `/photobooth/`, `/location-photobooth-laval/`, `…-montreal/`, `…-rive-nord/`, `…-terrebonne/`, `…-blainville/`

```
"location photobooth"
"location photobooth Laval"
"photobooth Montréal location"
"louer photobooth Rive-Nord"
"photo booth location Laval"
[location photobooth Laval]
[location de photobooth]
```

**RSA :** Location photobooth dès 599 $ | Laval · Montréal · Rive-Nord | Photos & partage | Évenox  

**Négatifs AG :** forfait (→ AG3), miroir (si tu n’as pas), acheter, cabine occasion

---

### AG2 — Vidéobooth 360
**Landing :** `/location-videobooth-360/` ou `/photobooth-360/`

```
"location vidéobooth 360"
"photobooth 360 Laval"
"vidéobooth 360 Montréal"
"360 photo booth location"
[vidéobooth 360]
[location photobooth 360]
```

**RSA :** Vidéobooth 360 dès 799 $ | Animateur inclus | Clips sur le téléphone | Dates limitées  

---

### AG3 — Forfait photobooth clé en main ⚠️
**Landing :** `/forfaits-photobooth/`

```
"forfait photobooth"
"photobooth clé en main"
"photobooth tout inclus"
"forfait vidéobooth 360"
"photobooth avec animateur forfait"
"location photobooth clé en main"
[forfait photobooth]
```

**RSA :** Forfaits photobooth dès 599 $ | Animateur + install inclus | Classique ou 360 | Réserve ta date  

---

## 6. CAMPAGNE 4 — Corpo (phase 2 / saison)

Naturellement « clé en main » — OK forfait.

| AG | Mots-clés | Landing |
| --- | --- | --- |
| 5 à 7 / party bureau | "animation 5 à 7 entreprise", "party de bureau clé en main", "forfait 5 à 7" | `/forfait-5-a-7-equipe/`, `/forfait-party-de-bureau/`, `/forfaits-corporatif/` |
| Noël / gala | "party Noël entreprise", "gala corporatif animation", "forfait party Noël" | `/forfait-party-de-noel-entreprise/`, `/forfait-gala-signature/` |

Activer **budget ↑ octobre–décembre**.

---

## 7. Négatifs partagés (liste compte)

```
acheter
achat
vente
à vendre
usagé
occasion
kijiji
marketplace
diy
tutoriel
emploi
salaire
job
pdf
gratuit téléchargement
réparation
manuel
compresseur
fabricant
wholesale
ikea
costco
```

**Négatifs zone (si tu n’y livres pas / trop cher) :**  
`Longueuil`, `Rive-Sud`, `Brossard`, `Québec`, `Gatineau`, `Ottawa` (sauf si tu confirmes Ottawa)

**Négatifs intention forfait → à ajouter dans les AG location** (pour forcer le bon AG) :  
dans AG location : `clé en main`, `forfait`, `tout inclus`  
dans AG forfait : **ne pas** négativer ces termes.

---

## 8. Annonces — angles vs Les Ballounes

| Concurrent typique | Angle Évenox |
| --- | --- |
| Chaise ~6,25 $ / événement, multi-cueillette | Prix clair + **Express 72h** + forfaits livré-placé si intent |
| Gros inventaire gonflables | Clé en main / forfait fête **quand** ils le cherchent ; sinon prix dès 100 $ + montage |
| Photobooth add-ons | Prix forfait dès 599 $ + animateur (sur pages forfait) |

Ne pas attaquer sur « moins cher » (guide de marque). Attaquer sur **clarté + local + clé en main quand demandé**.

---

## 9. Extensions (toutes campagnes)

- **Call :** 514-559-1893  
- **Sitelinks :** Jeux gonflables · Photobooth · Tables & chaises · Contact · Forfaits (page hub forfaits, pas forcer)  
- **Callouts :** Prix en ligne · Réservation 24/7 · Rive-Nord & Laval · Note 4,8/5 · Livraison dispo  
- **Structured snippets :** Types = Chaises, Tables, Gonflables, Photobooth, Jeux géants  

---

## 10. Tracking (obligatoire avant scale)

| Conversion | Priorité |
| --- | --- |
| Clic appel | P1 |
| Submit `/contact/` ou demande soumission | P1 |
| Début checkout Booqable shop | P2 |
| Dépôt / paiement | P3 (idéal) |

Enhanced conversions si possible.  
Import offline (booking confirmé) = gold après 2–4 sem.

---

## 11. Calendrier d’optimisation (30 jours)

| Semaine | Actions |
| --- | --- |
| 0 | Tag + conversions + 3 campagnes live + négatifs |
| 1 | Search Terms chaque 2 jours → négatifs ; pause mots 0 conv + $ brûlé |
| 2 | RSA : garder top CTR ; ajuster landings si bounce élevé |
| 3 | ↑ budget winners ; ↓ ou pause losers ; vérifier stock weekends |
| 4 | Décider Target CPA ; évent. activer C4 corpo |

**Règles pause stock :**  
- Photobooth weekends full → pause C3 ou bid ↓ 80 %  
- Chaises saturées samedi → pause Express / AG chaises weekend (ad schedule)

**Ad schedule départ :** Lun–Dim 8h–22h ; enchère +20 % jeu–dim si la plupart des bookings weekend.

---

## 12. CSV mental — Final URL par AG (résumé)

| AG | Final URL |
| --- | --- |
| Express | https://evenox.ca/ |
| Chaises Laval | https://evenox.ca/location-chaises-laval/ |
| Chaises Ste-Thérèse | https://evenox.ca/location-chaises-sainte-therese/ |
| Tables-chaises location | https://evenox.ca/location-tables-chaises/ |
| Mobilier **clé en main** | https://evenox.ca/forfaits-tables-chaises/ |
| Gonflables hub | https://evenox.ca/location-jeux-gonflables/ |
| Gonflables Laval | https://evenox.ca/location-jeux-gonflables-laval/ |
| Jeux Laval | https://evenox.ca/jeux-laval/ |
| Fête enfants **clé en main** | https://evenox.ca/forfaits-fete-enfants/ |
| Photobooth location | https://evenox.ca/photobooth/ ou page ville |
| Photobooth Laval | https://evenox.ca/location-photobooth-laval/ |
| 360 | https://evenox.ca/location-videobooth-360/ |
| Photobooth **forfait** | https://evenox.ca/forfaits-photobooth/ |
| 5 à 7 | https://evenox.ca/forfait-5-a-7-equipe/ |
| Party Noël | https://evenox.ca/forfait-party-de-noel-entreprise/ |

---

## 13. Risques / pièges (approfondissement)

1. **`/location-tables-chaises/`** mentionne déjà livré-placé → ne pas confondre avec hub forfait 649 $. AG3 = location service ; AG4 = forfait prix packagé.  
2. Pages ville chaises affichent dès **1,50 $** — Ads location OK ; upsell forfait **au téléphone**.  
3. Volume « clé en main » Search est **plus bas** que « location X » → budget forfait AG = petit % ; ne pas s’attendre à 50 leads forfait/sem.  
4. Les Ballounes + Eventuum saturent mots génériques → **geo précis + Express + forfait exact** = différenciation.  
5. Sans réponse lead &lt; 1 h, tout le reste est inutile.

---

## 14. Livrables liés

- Intention forfait : `LANDINGS-INTENTION-CLE-EN-MAIN.md`  
- Catalogue pages : `LANDINGS-ADS-BONNES-PAGES.md`  
- Questions lancement : `CAMPAGNES-ADS-SPECS-ET-QUESTIONS.md`  
- Objectifs produits : `OBJECTIFS-ADS-ET-PRODUITS.md`

**Prochaine étape ops :** répondre budget/zone/stock → export mots-clés Google Ads Editor (CSV) prêt à importer.
