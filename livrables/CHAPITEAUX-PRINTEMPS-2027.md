# Campagne Chapiteaux, printemps 2027

Préparée le 7 octobre 2026, à importer au **début de mars 2027**.

- Script : `scripts/build_chapiteaux_2027.py` (autonome, `build_google_ads.py` n'est pas modifié)
- Fichiers : `google-ads-editor-printemps-2027/` (même format que l'import principal : UTF-16, tabulations ; `0_import_complet.csv` contient tout)

## Contenu

- **Campagne** : « S-FR | Chapiteaux (printemps 2027) ». Réseau Recherche seulement, **en pause**, Maximiser les clics, CPC max 3,00 $, budget 40,00 $/jour.
- **5 groupes d'annonces**, qui envoient tous vers `/chapiteaux-structures-evenementielles/` :
  - Location chapiteau générique
  - Chapiteau mariage
  - Chapiteau par taille (10x10 à 30x30)
  - Chapiteau fête et réception
  - Chapiteau par ville (Laval, Rive-Nord, Montréal, Blainville, Sainte-Thérèse, etc.)
- **Mots-clés** : 87 mots-clés en français, en expression et en exact.
- **Annonces** : une RSA par groupe (15 titres, 4 descriptions). Les prix sont ceux du site au 7 oct. 2026 :
  - marquises : 10x10 300 $, 10x15 350 $, 10x20 et 15x15 400 $, 15x20 450 $, 20x20 500 $, 15x30 650 $, 20x30 700 $, 20x40 800 $, 30x30 1 000 $ ;
  - forfaits : Élégant 712 $ (40 invités) et Majestueux 1 224 $ (80 invités) ;
  - murs : 50 $ ;
  - livraison : 100 $ pour les 10 premiers km, puis 7 $/km jusqu'à 40 km.
- **Montage** : les annonces ne disent jamais « installation incluse » pour une location à la carte. Le montage coûte 50 $/h par employé et n'est inclus que dans les forfaits. Le script refuse toute phrase qui dirait le contraire.
- **166 négatifs de campagne**, en deux blocs :
  - la liste du compte : emplois, aubaines, achat et usagé, DIY, hors offre, France ;
  - des négatifs propres aux chapiteaux : abri d'auto, abri tempo, carport, toile de remplacement, tente-roulotte, cirque, Rona, Home Depot, villes hors zone, marque.
- **Extensions** : 5 liens annexes, chacun vers une page différente de la page de destination, et 8 accroches.
- **Contrôles du script** :
  - limites de caractères ;
  - pas de %, pas de « à partir de », pas de « dès » ;
  - pas de mots en majuscules ;
  - tout montant en $ doit figurer dans la grille du site ;
  - pas de « montage inclus » hors forfait ;
  - pas de doublons ;
  - pas de conflit entre un négatif et un mot-clé.

  Le script sort en erreur (code 1) au premier problème. Dernière exécution : OK.

## Pourquoi mars

L'étude de la demande (`recherche/research_11_demand.md`, Google Trends Québec sur 5 ans, moyenne de « location chapiteau » et « location tente ») donne cet indice mensuel :

| Jan | Fév | Mar | Avr | Mai | Juin | Juil | Août | Sep | Oct-Déc |
|---|---|---|---|---|---|---|---|---|---|
| 9 | 18 | 24 | 26 | 65 | 98 | **100** | 58 | 10 | 0 |

Les recherches démarrent en mars, explosent en mai et culminent en juin et juillet. La réservation précède l'événement de plusieurs semaines : il faut être en ligne **avant** le pic.

Deux mises en garde tirées de la même étude :

- Le terme « location chapiteau » est en baisse sur 5 ans (indice annuel de 27 à 12). Les volumes sont estimés : il faut les valider avec le Planificateur de mots-clés au moment de l'import.
- Concurrence locale : Les Ballounes affiche des prix plus bas (10x10 à 80 $) et Abris Crystal est fort sur « chapiteau ». On mise sur le montage par l'équipe, les forfaits avec mobilier et les prix affichés.

## Calendrier et budget

| Période | Budget/jour | Repère dans l'étude (enveloppe Chapiteaux) | Action |
|---|---|---|---|
| 1er au 7 mars | 0 $ (en pause) | n/d | Importer, faire les vérifications ci-dessous, tester un faux lead |
| 8 au 31 mars | 40 $ | 1 365 $/mois, environ 45 $/j | Activer ; nettoyer les termes de recherche chaque semaine |
| Avril | 50 à 65 $ | 2 002 $/mois, environ 67 $/j | Monter si le coût par lead est acceptable |
| Mai | 75 à 85 $ | 2 548 $/mois, environ 83 $/j | Pic des recherches ; envisager le CPC cible ou Maximiser les conversions après 15 conversions ou plus |
| Juin | 85 $ | 2 548 $/mois, environ 85 $/j | Pic des mariages et des fêtes |
| Juillet | 65 $ | 2 002 $/mois, environ 65 $/j | Les dates d'août se réservent |
| Août | 35 $ | 1 092 $/mois, environ 35 $/j | Fin de saison |
| Septembre | Pause | 546 $/mois | Arrêter vers le 10 sept. (indice 10), puis rien d'octobre à février |

Le budget importé est de 40 $/jour. Chaque palier se monte à la main dans Google Ads. Ne pas augmenter tant que le suivi des conversions (formulaire de soumission) n'est pas confirmé.

## À vérifier sur le site avant l'import

1. **Grille de prix** sur `/chapiteaux-structures-evenementielles/` et `/faq/` :
   - les 10 formats ;
   - les forfaits Élégant 712 $ et Majestueux 1 224 $, toujours affichés avec le même contenu ;
   - les murs à 50 $.

   Si un prix a changé, mettre à jour `GRILLE`, `FORFAITS` et `PRIX` dans le script, relancer, puis réimporter.
2. **Livraison** : 100 $ pour les 10 premiers km, puis 7 $/km jusqu'à 40 km. Le centre-ville de Montréal est sur devis.
3. **Montage** : toujours 50 $/h par employé, et toujours inclus dans les forfaits.
4. **Capacités** : 20x20 pour 40 personnes, 20x40 pour 80, maximum 90 invités. Au-delà, ce sont des tentes à pôle sur soumission.
5. **Incohérences sur la page au 7 oct. 2026**, à corriger :
   - l'extincteur est à 25 $ dans le configurateur, mais à 35 $ dans la section « En supplément » ;
   - une phrase dit que le prix du configurateur « couvre la location et la livraison », alors que la livraison est facturée en sus.
6. **Configurateur et formulaire** : ils fonctionnent sur mobile, le lead arrive bien et la conversion Google Ads se déclenche (faux lead).
7. **URL** : la page répond toujours en 200 avec la barre oblique finale. Les pages des liens annexes répondent aussi : `/location-tables-chaises/`, `/mariage/`, `/faq/`, `/contact/`, `/a-propos/`.
8. **Paramètres absents des CSV**, à régler dans Editor après l'import :
   - zone : rayon de 40 km autour de Sainte-Thérèse, en ciblant les personnes « présentes » dans la zone ;
   - date de début : 8 mars ; date de fin : 10 sept. 2027 ;
   - calendrier de diffusion.
