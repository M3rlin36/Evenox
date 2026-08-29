# Rapport de conflits — prix Évenox

Généré le 2026-08-29. Aucun conflit n'est tranché : c'est une décision d'affaires (§6 du brief).

## Couverture

| | |
|---|---|
| Observations lues | 257 |
| Produits fusionnés | 171 |
| Produits à prix unique | 169 |
| Produits en conflit (même id, prix différents) | 2 |
| Assistant jeux (catégorie) | 70 |

## Sources absentes de ce clone

Le brief les nomme. Elles n'étaient pas dans le dépôt GitHub. Rien n'a été inventé à leur place.

- `assistant-evenement/ev-widget.js`
- `calculateur-fete.html`

## Conflits de prix (même identifiant)

Triés par écart en $ décroissant.

### 1. Seuil de livraison incluse (forfait) (`seuil-livraison-incluse`) — écart 51 $

- `kit-wizard-decoded.js` L1179 → **449 $**
- `kit-wizard-decoded.js` L1188 → **449 $**
- `CURSOR-BRIEF.md` L162 → **449 $**
- `CURSOR-BRIEF.md` L162 → **500 $**
- `page-nos-forfaits-secteur.js` L25 → **500 $**

### 2. Connect 4 Géant (`connect-4-geant`) — écart 20 $

- `jeux-geants-blob1.js` L104 → **60 $**
- `assistant-jeux/jw-widget.js` L165 → **80 $**
- `page-location-jeux-exterieurs-cartes.html` L2 → **80 $**

## Les 3 conflits déjà nommés dans le brief

### 1. Connect 4 géant — 80 $ vs 60 $

Décision ouverte (§6). Ne pas publier un seul prix tant que ce n'est pas tranché.

- `jeux-geants-blob1.js` L104 → **60 $**
- `assistant-jeux/jw-widget.js` L165 → **80 $**
- `page-location-jeux-exterieurs-cartes.html` L2 → **80 $**

### 2. Express 72 h (210 $ / 50 pers) vs Réception (649 $ / 48 pers)

Ce ne sont pas le même id : deux offres de capacité voisine, prix très différents. Le brief les signale comme conflit d'affaires, pas comme une dérive de catalogue.

- Express 50 pers — `CURSOR-BRIEF.md` L99 → **210 $**
- Réception 48 pers — `kit-wizard-decoded.js` L15 → **649 $**
- Réception 48 pers — `CURSOR-BRIEF.md` L88 → **649 $**

Écart : **439 $** pour ~50 places. Non tranché.

### 3. Seuil de livraison incluse — 449 $ vs 500 $

Les deux montants apparaissent (forfait mobilier dès 449 $ vs widget secteur « dès 500 $ »). Même page métier, deux règles. Non tranché.

- seuil-livraison-incluse — `kit-wizard-decoded.js` L1179 → **449 $**
- seuil-livraison-incluse — `kit-wizard-decoded.js` L1188 → **449 $**
- seuil-livraison-incluse — `CURSOR-BRIEF.md` L162 → **449 $**
- seuil-livraison-incluse — `CURSOR-BRIEF.md` L162 → **500 $**
- seuil-livraison-incluse — `page-nos-forfaits-secteur.js` L25 → **500 $**

## Autres écarts utiles (pas le même id)

Commentaire interne du kit wizard : « 115 exemplaires en stock » pour la table 6 pi, alors que `STOCK.rect6` vaut **105**. Le catalogue retient 105 (la constante), et note le commentaire comme écart documentaire — pas un second prix.

`expressActif: false` est cité dans le brief pour `calculateur-fete.html`, fichier absent de ce clone. Rien à extraire.

## Décisions en attente (rappel §6)

1. Zones Montréal / Longueuil / Brossard / Gatineau — transport sur mesure, jamais un ajustement inventé.
2. Seuil 449 $ ou 500 $.
3. Destination des leads — hors chantier 1.
4. Tous les conflits de ce rapport, y compris Connect 4 et Express vs Réception.
