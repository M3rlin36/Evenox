# Calculateur jeux gonflables (squelette tables-chaises)

Même format que chapiteaux / tables-chaises : wizard une question à la fois,
prescription, courriel obligatoire avant les totaux.

## Filtre anniversaire
Garçon / fille / mixte — demandé par Alexandre. Les thèmes viennent du **nom**
du produit. Aucun prix inventé.

## Prescription
Le château le moins cher du thème. On n’invente pas un deuxième jeu selon
le nombre d’enfants.

| Thème | Ouverture | Prix |
|---|---|---|
| Fille | Princesses | 120 $ |
| Garçon | Château du Prince | 100 $ |
| Mixte | Forteresse | 100 $ |

## Source des prix
`gonflables-blob1.js` (page live) + `assistant-jeux/jw-widget.js`, extraits
sur `cursor/catalogue-conflits-6384`. 30 produits.

## Build
```
python gonflables-tc/build.py
python gonflables-tc/verifier.py
```

Payload WordPress : une ligne, sans `&&`, sans lignes vides.
