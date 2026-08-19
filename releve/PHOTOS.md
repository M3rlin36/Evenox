# Relevé des photos de fiches produits — evenox.ca

Relevé fait le 19 août 2026. Auteur : agent Cursor, mandaté pour regarder les images
des fiches produits, et non leurs noms de fichier.

## Ce qui a été fait, et comment

Le sitemap `https://evenox.ca/sitemap_index.xml` renvoie vers `product-sitemap.xml`,
qui contient **247 adresses : la page boutique et 246 fiches produits**. C'est le
chiffre relevé, pas un chiffre repris.

**Je n'ai pas examiné les 246 fiches. J'en ai pris 40**, soit 16 % du catalogue.
C'est un échantillon annoncé, pas un balayage tronqué : les 206 fiches restantes
n'ont pas été ouvertes et ce relevé ne dit rien d'elles.

Les 40 fiches ont été choisies pour couvrir les huit familles demandées :

| Famille | Fiches retenues |
|---|---|
| Chaises | 6 |
| Tables | 5 |
| Nappes | 4 |
| Jeux gonflables | 5 |
| Machines à friandises | 6 |
| Décor | 5 |
| Éclairage | 5 |
| Jeux de table | 4 |

La liste nominative est le tableau plus bas. Deux fiches ont été retenues
délibérément parce qu'elles portaient les deux erreurs déjà connues de la maison :
la chaise pliante blanche et la table ronde de 48 pouces.

Pour chaque fiche : la page a été téléchargée, les images propres à la fiche ont
été isolées du carrousel « souvent loué avec » (qui montre d'autres produits et
n'appartient pas à la fiche), puis **chaque image a été téléchargée, ouverte et
regardée**. Les largeurs annoncées ci-dessous sont celles du fichier, mesurées avec
Pillow, pas celles de l'attribut `width` du gabarit.

Le point mérite un exemple, parce qu'il tranche dans les deux sens :

- `nappe-de-table-noire` : le nom de la fiche dit « noire ». Le fichier ouvert
  montre une nappe **blanche** (pixel central 249, 249, 251).
- `nappe-a-table-ronde-6-pieds` : le fichier s'appelle
  `Capture-decran-2025-01-28-085641.png`, ce qui laisse craindre une capture
  d'écran. Ouvert, il montre un détourage propre sur fond blanc pur sur les quatre
  bords. Le nom mentait dans l'autre sens.

**Rythme.** Une requête à la fois, jamais en parallèle, avec une pause d'au moins
2,5 secondes. 98 requêtes en tout : 2 sitemaps, 41 pages (une fiche a servi de
sondage de structure et a donc été appelée deux fois), 55 images. **Aucun 403,
aucun 429** : les 98 requêtes ont répondu 200. Rien n'a été modifié sur evenox.ca,
aucun compte n'a été utilisé, aucune commande n'a été créée.

## Les 40 fiches

Le nombre de « vues » compte les **photos distinctes**, pas les balises `img` : une
même photo servie en 1299 px et en 600 px reste une vue.

| # | Fiche (adresse) | Famille | Vues | Photo principale (px) | Plus grand fichier | Verdict |
|---|---|---|---|---|---|---|
| 1 | [/product/chaise-pliante-blanche/](https://evenox.ca/product/chaise-pliante-blanche/) | Chaises | 1 | 500 × 500 | 500 px | Conforme. Réserve : 500 px, image très douce. |
| 2 | [/product/chaise-pliante/](https://evenox.ca/product/chaise-pliante/) | Chaises | 1 | 1280 × 1280 | 1280 px | Conforme. |
| 3 | [/product/chaise-chiavari/](https://evenox.ca/product/chaise-chiavari/) | Chaises | 1 | 500 × 500 | 500 px | Conforme. Réserve : 500 px. |
| 4 | [/product/chaise-martha/](https://evenox.ca/product/chaise-martha/) | Chaises | 1 | 1024 × 1024 | 1024 px | Conforme. |
| 5 | [/product/chaise-emmanuelle/](https://evenox.ca/product/chaise-emmanuelle/) | Chaises | 1 | 600 × 600 | 600 px | Conforme sur l'objet. Réserve : photo utile de 382 px seulement (bandes blanches), prise en extérieur. |
| 6 | [/product/chaise-de-trone-noire-et-or/](https://evenox.ca/product/chaise-de-trone-noire-et-or/) | Chaises | 1 | 700 × 819 | 700 px | Conforme. |
| 7 | [/product/table-pliante-ronde-4-pieds/](https://evenox.ca/product/table-pliante-ronde-4-pieds/) | Tables | 0 | aucune | — | **Sans photo** — assumé et expliqué par la fiche. |
| 8 | [/product/location-table-ronde-60-pouces/](https://evenox.ca/product/location-table-ronde-60-pouces/) | Tables | 1 | 700 × 700 | 700 px | Conforme. |
| 9 | [/product/table-pliante/](https://evenox.ca/product/table-pliante/) | Tables | 1 | 500 × 500 | 500 px | Conforme. Réserve : 500 px ; le format 8 pi annoncé n'est pas montré. |
| 10 | [/product/location-table-en-bois-pliante/](https://evenox.ca/product/location-table-en-bois-pliante/) | Tables | 1 | 980 × 980 | 980 px | Conforme. Le format 8 pi annoncé n'est pas montré. |
| 11 | [/product/table-a-cocktail/](https://evenox.ca/product/table-a-cocktail/) | Tables | 1 | 500 × 500 | 500 px | Écart **signalé par la fiche** : seconde colonne visible, fourniture « à relever ». |
| 12 | [/product/nappe-de-table-noire/](https://evenox.ca/product/nappe-de-table-noire/) | Nappes | 2 | 1299 × 974 | 1299 px | **Écart signalé par la fiche** : adresse « noire », photo principale blanche. |
| 13 | [/product/nappe-a-table-ronde-6-pieds/](https://evenox.ca/product/nappe-a-table-ronde-6-pieds/) | Nappes | 1 | 600 × 364 | 600 px | **Écart non signalé** : l'image montre une nappe, le texte décrit une table. |
| 14 | [/product/nappe-table-a-cocktail/](https://evenox.ca/product/nappe-table-a-cocktail/) | Nappes | 3 | 500 × 500 | 500 px | **Écart non signalé** : accessoires non fournis sur 3 vues. 2 alt vides. |
| 15 | [/product/table-a-cocktail-nappe/](https://evenox.ca/product/table-a-cocktail-nappe/) | Nappes | 0 | aucune | — | **Sans photo** — gabarit WooCommerce, image d'attente. |
| 16 | [/product/location-jeu-gonflable-licorne/](https://evenox.ca/product/location-jeu-gonflable-licorne/) | Jeux gonflables | 2 | 500 × 500 | 500 px | Conforme. Réserve : 500 px, 1 alt vide. |
| 17 | [/product/jeux-gonflable-reine-des-neiges-commerciale/](https://evenox.ca/product/jeux-gonflable-reine-des-neiges-commerciale/) | Jeux gonflables | 2 | 768 × 1024 | 768 px | Conforme. 1 alt vide ; 2e vue recadrée. |
| 18 | [/product/location-jeu-gonflable-mario-bros/](https://evenox.ca/product/location-jeu-gonflable-mario-bros/) | Jeux gonflables | 5 | 500 × 500 | 500 px | Conforme. Réserve : 500 px, 4 alt vides sur 5. |
| 19 | [/product/jeu-gonflable-spiderman/](https://evenox.ca/product/jeu-gonflable-spiderman/) | Jeux gonflables | 1 | 500 × 500 | 500 px | Conforme. Réserve : 500 px, vue unique. |
| 20 | [/product/jeux-gonflable-parcours-dobstacle/](https://evenox.ca/product/jeux-gonflable-parcours-dobstacle/) | Jeux gonflables | 1 | 768 × 1024 | 768 px | Conforme. |
| 21 | [/product/machine-barbe-a-papa/](https://evenox.ca/product/machine-barbe-a-papa/) | Machines à friandises | 1 | 1000 × 1000 | 1000 px | **Écart non signalé** : accessoires visibles non décrits. Logo VEVOR. |
| 22 | [/product/machine-popcorn/](https://evenox.ca/product/machine-popcorn/) | Machines à friandises | 2 | 500 × 500 | 500 px | **Écart non signalé** : cabinets pleins de maïs soufflé non compris. Logo VEVOR. |
| 23 | [/product/machine-a-slush/](https://evenox.ca/product/machine-a-slush/) | Machines à friandises | 3 | 500 × 500 | 1600 px | **Écart non signalé** : verres remplis, fruits, scène de cuisine avec une personne. Logos VEVOR. |
| 24 | [/product/machine-a-creme-glacee-molle/](https://evenox.ca/product/machine-a-creme-glacee-molle/) | Machines à friandises | 1 | 500 × 500 | 500 px | Conforme. Réserve : 500 px. |
| 25 | [/product/fontaine-de-chocolat/](https://evenox.ca/product/fontaine-de-chocolat/) | Machines à friandises | 1 | 500 × 500 | 500 px | Conforme — 7 disques comptés. Réserve : 500 px. |
| 26 | [/product/machine-a-popcorn-avec-grain/](https://evenox.ca/product/machine-a-popcorn-avec-grain/) | Machines à friandises | 0 | aucune | — | **Sans photo** — gabarit WooCommerce, image d'attente. |
| 27 | [/product/mur-de-fleur/](https://evenox.ca/product/mur-de-fleur/) | Décor | 3 | 600 × 900 | 600 px | **Écart non signalé** : proportions, décor et chaises non loués par Évenox. |
| 28 | [/product/arche-decoration/](https://evenox.ca/product/arche-decoration/) | Décor | 3 | 500 × 449 | 500 px | **Écart non signalé** : garnitures florales et voile non annoncés. |
| 29 | [/product/tapis-rouge/](https://evenox.ca/product/tapis-rouge/) | Décor | 1 | 980 × 1307 | 980 px | Conforme sur l'objet. Poteaux visibles, **démentis explicitement** par la fiche. |
| 30 | [/product/petale-de-fleur-rouge-lot-de-100/](https://evenox.ca/product/petale-de-fleur-rouge-lot-de-100/) | Décor | 1 | 320 × 295 | 320 px | **Écart non signalé** : titre « pétale », image de roses entières. 320 px. |
| 31 | [/product/poids-de-support-pour-chapiteau-lot-de-4/](https://evenox.ca/product/poids-de-support-pour-chapiteau-lot-de-4/) | Décor | 1 | 2000 × 1891 | 2000 px | Conforme — 4 housses comptées. Chapiteau du schéma déclaré non compris. |
| 32 | [/product/lettre-illuminee-marquee-letter/](https://evenox.ca/product/lettre-illuminee-marquee-letter/) | Éclairage | 3 | 980 × 1307 | 980 px | **Écart non signalé** : décors de ballons non compris ; marque tierce visible. 2 alt vides. |
| 33 | [/product/chiffres-lumineux-50-ans/](https://evenox.ca/product/chiffres-lumineux-50-ans/) | Éclairage | 2 | 600 × 800 | 600 px | **Écart non signalé** : ballons et décor non compris. Alt générique dupliqué. |
| 34 | [/product/neon-marry-me/](https://evenox.ca/product/neon-marry-me/) | Éclairage | 1 | 500 × 500 | 500 px | **Écart non signalé, grave** : l'enseigne photographiée n'affiche pas le texte annoncé. |
| 35 | [/product/guirlande-lumiere/](https://evenox.ca/product/guirlande-lumiere/) | Éclairage | 1 | 600 × 600 | 600 px | **Écart non signalé** : gros plan ne montrant aucune des caractéristiques annoncées. |
| 36 | [/product/chiffres-illuminees-40/](https://evenox.ca/product/chiffres-illuminees-40/) | Éclairage | 0 | aucune | — | **Sans photo** — gabarit WooCommerce, image d'attente. |
| 37 | [/product/table-air-hockey-en-location/](https://evenox.ca/product/table-air-hockey-en-location/) | Jeux de table | 1 | 768 × 768 | 768 px | Conforme. Réserve : logo et slogan VEVOR très visibles. |
| 38 | [/product/location-table-de-baby-foot/](https://evenox.ca/product/location-table-de-baby-foot/) | Jeux de table | 1 | 500 × 500 | 500 px | Conforme. Réserve : 500 px ; un seul des deux formats montré. |
| 39 | [/product/connect-4-geant/](https://evenox.ca/product/connect-4-geant/) | Jeux de table | 1 | 1032 × 1120 | 1032 px | **Écart non signalé** : l'alt affirme une hauteur que l'image contredit. |
| 40 | [/product/table-de-poker-8-places-location/](https://evenox.ca/product/table-de-poker-8-places-location/) | Jeux de table | 1 | 600 × 600 | 600 px | Conforme — 8 porte-verres comptés. Alt générique ; marque VEVOR. |

## Les désaccords, du plus grave au plus bénin

Le critère de classement est simple : le risque que le client commande une chose et
en reçoive une autre.

Les treize premiers sont des désaccords **que la fiche ne signale pas**. Le lecteur
n'a aucun avertissement.

### 1. `neon-marry-me` — l'enseigne photographiée n'affiche pas le texte annoncé

- **Ce que dit le texte** : titre « Néon Marry Me ». Description : « Néon "Marry Me"
  … mesurant 68 cm x 40 cm ».
- **Ce que montre l'image** : une enseigne au néon blanc qui écrit, en deux lignes
  cursives et en anglais, **« Will you marry me? »**. Le texte est parfaitement
  lisible sur les pixels. Ce n'est pas la même enseigne que celle annoncée.
- Sont aussi dans le cadre, et ne sont annoncés nulle part : une peluche de mouton,
  un bouquet de fleurs séchées rouges, un tapis crème à poils longs, un rideau de
  velours.
- **Proportions** : le panneau d'acrylique occupe environ 390 × 175 px dans une
  image de 500 × 500, soit un rapport de 2,2 pour 1. Le format annoncé, 68 × 40 cm,
  donne 1,7 pour 1. L'écart est net, mais je ne peux pas exclure une part de
  perspective : la mesure au ruban reste à faire, elle n'est pas établie ici.
- **Alt** : « Néon Marry Me ». Il recopie le titre et ne rapporte pas le texte qu'on
  lit sur l'enseigne.

### 2. `nappe-a-table-ronde-6-pieds` — la fiche décrit un autre article que celui photographié

- **Ce que dit le texte** : titre « Nappe à Table Ronde 120'' ». Puis, dans le
  corps : « Diamètre : 6 pieds (183 cm) », « Matériau : Plateau en plastique robuste
  ou bois selon le modèle, avec structure métallique pliable », « Capacité : 8 à
  10 personnes assises confortablement », « Louez notre table pliante ronde de
  6 pieds ». La catégorie affichée est « Tables ».
- **Ce que montre l'image** : une **nappe** ronde noire drapée sur une table ronde et
  retombant jusqu'au sol. C'est bien une nappe.
- Le texte décrit donc une table pliante — plateau, piétement, capacité d'assise —
  là où l'image montre une nappe. Les deux ne peuvent pas être justes ensemble.
  S'ajoute un désaccord de cote interne : 120 pouces au titre, 6 pieds (72 pouces)
  dans le corps.
- **Alt** : « Nappe Ronde pour Tables Rondes ». Générique.
- **Largeur** : 600 px. Le nom de fichier commence par `Capture-decran`, mais les
  pixels montrent un détourage propre : blanc pur sur les quatre bords. Le nom
  inquiétait à tort.

### 3. `mur-de-fleur` — les proportions montrées ne sont pas celles annoncées, et le décor autour n'est pas loué

- **Ce que dit le texte** : « Dimensions : 8 pieds x 8 pieds » — donc un carré.
  Inclusions : « Mur de fleurs complet », « Structure incluse ». Rien d'autre.
- **Ce que montrent les images** (trois, toutes 600 × 900). Mesuré en posant une
  grille de repérage sur les fichiers :

  | Vue | Mur mesuré dans l'image | Rapport largeur/hauteur |
  |---|---|---|
  | rouge | ≈ 469 × 325 px | 1,44 : 1 |
  | blanc | ≈ 446 × 325 px | 1,37 : 1 |
  | rose | ≈ 369 × 332 px | 1,11 : 1 |

  Un mur de 8 pi × 8 pi donnerait 1 : 1. Deux des trois vues sont nettement plus
  larges que hautes, et les trois ne s'accordent pas entre elles pour un produit
  annoncé en une seule dimension. La perspective explique une part de l'écart, pas
  un rapport de 1,44.
- **Ce qui est montré et n'est pas dans les inclusions** : lustres à pampilles,
  guirlandes guinguette, draperies, tables rondes nappées, dressages complets
  (assiettes de présentation dorées, verrerie, couverts, bougies), centres de table
  floraux.
- **Le point le plus sérieux** : les trois images montrent des **chaises Chiavari
  dorées**. La chaise Chiavari qu'Évenox loue est en **résine transparente** — je
  l'ai ouverte et regardée sur sa propre fiche, `chaise-chiavari`. Le modèle montré
  n'est pas celui du catalogue. C'est, sous une autre forme, l'erreur de la chaise
  blanche.
- Les trois images ont l'apparence de rendus générés. L'image générée est permise
  depuis le 18 août 2026 ; le problème n'est pas là, il est dans ce qu'elles
  montrent.

### 4. `petale-de-fleur-rouge-lot-de-100` — ce ne sont pas des pétales, et le lot n'est pas vérifiable

- **Ce que dit le texte** : titre « Pétale de Fleur Rouge (lot de 100) ».
  « Quantité : 100 fleurs ».
- **Ce que montre l'image** : des **roses entières** en mousse, têtes complètes avec
  leurs corolles enroulées. Pas des pétales. J'en compte de l'ordre de 25 à 30 dans
  le cadre, et le tas est coupé net sur les bords gauche, droit et haut : **le
  compte de 100 ne peut pas être vérifié sur cette image**.
- **Largeur** : 320 × 295 px. C'est la plus petite image du relevé, et de loin.
- **Alt** : « Lot de 100 Fleurs rouges ». Il affirme un nombre que l'image ne montre
  pas.

### 5. `machine-a-slush` — trois photos qui montrent surtout ce qui n'est pas fourni

- **Ce que dit le texte** : « Le sirop, les verres, les pailles et les couvercles ne
  sont pas compris ».
- **Ce que montrent les images** :
  - *1 cuve* — la cuve pleine de slush orange, une chope de verre remplie posée sur
    l'égouttoir, deux oranges et un quartier d'orange à côté.
  - *2 cuves* — une scène domestique entière : comptoir de bois, **une femme accoudée
    à l'arrière-plan**, un saladier de tomates, un citron, une assiette garnie, deux
    chopes remplies et un verre de boisson verte.
  - *3 cuves* — trois cuves pleines et **trois verres à margarita** remplis et
    garnis, en composition détourée.
- Les trois textes alternatifs décrivent l'appareil avec exactitude, mais aucun ne
  mentionne les verres remplis, les fruits, la scène de cuisine ni la personne.
- **Marque** : VEVOR lisible sur les couvercles et le bandeau des modèles 2 et
  3 cuves.

### 6. `machine-popcorn` — les deux photos montrent la machine pleine

- **Ce que dit le texte** : « Le maïs, les sacs et les bols ne sont pas compris — ils
  se louent à part ».
- **Ce que montrent les images** : les deux cabinets, *De Base* et *Sur Pied*, sont
  remplis de maïs soufflé jusqu'au bac de service, pelle à l'intérieur.
- Les deux alt décrivent le caisson, le capot et le chaudron. Ni l'un ni l'autre ne
  signale que la machine est montrée pleine d'un consommable non fourni.
- **Marque** : VEVOR sur le chaudron et le bac de service des deux modèles.

### 7. `machine-barbe-a-papa` — des accessoires dans le cadre, dont la fourniture n'est pas établie

- **Ce que dit le texte** : la fiche réclame elle-même une photo « Ce qui part avec
  la machine … pour que la liste des accessoires cesse d'être "à relever" ». Elle
  reconnaît donc ne pas savoir ce qui est fourni.
- **Ce que montre l'image** : à gauche de la machine, posés sur le même fond blanc et
  dans le même cadre, **un outil en T d'acier inoxydable, une petite pièce noire et
  deux fusibles**. Un lecteur pressé les comptera dans la location.
- **Alt** : il décrit le corps rose, la cuve, le panneau de commande et le tiroir. Il
  ne dit pas un mot de ces quatre objets.
- **Marque** : « VEVOR® » et « Cotton Candy Machine » imprimés en grand sur la
  carrosserie.

### 8. `arche-decoration` — deux arches sur trois sont photographiées garnies

- **Ce que dit le texte** : « Matériau : Métal ou bois, selon le modèle choisi.
  Dimensions : Différentes tailles disponibles. » Pas un mot sur des fleurs, pas un
  mot sur un voile.
- **Ce que montrent les images** :
  - *Arche en coeur* — arche dorée en cœur avec deux gros bouquets automnaux (roses
    orangées, feuillages bordeaux) et un voile blanc drapé.
  - *Demi Arche* — arche dorée avec deux garnitures florales roses et blanches. Et
    l'image montre une arche **complète**, les deux pieds au sol, ce que le nom
    « demi » ne laisse pas attendre.
  - *Arche Ronde* — cercle doré nu, sans garniture.
- Deux vues suggèrent donc que les fleurs partent avec l'arche, la troisième
  suggère le contraire, et la fiche ne tranche pas.
- **Alt** : trois libellés recopiés du titre.

### 9. `connect-4-geant` — le texte alternatif affirme une hauteur que l'image contredit

- **Ce que dit l'alt** : « … plus haute qu'une femme adulte … ».
- **Ce que montre l'image**, mesuré sur grille : le sommet du jeu est à y ≈ 285 et son
  pied à y ≈ 980 ; la femme debout derrière a le sommet du crâne à y ≈ 30 et ses
  chaussures apparaissent vers y ≈ 840. Le haut de la grille lui arrive à la
  poitrine. Elle est plus grande que le jeu — et comme elle se tient **derrière**,
  donc plus loin de l'objectif, l'écart réel est encore plus grand que l'écart
  mesuré.
- La grille est bien de 7 colonnes sur 6 rangées, conforme au jeu annoncé.
- Cet écart ne se lit que dans l'attribut alt, jamais dans le texte visible : il
  touche donc exclusivement les personnes qui naviguent au lecteur d'écran, qui
  sont aussi celles qui ne peuvent pas se corriger en regardant la photo.

### 10. `nappe-table-a-cocktail` — trois vues, trois dressages non fournis

- **Ce que dit le texte** : « Housse ajustée qui habille la table à cocktail jusqu'au
  sol. Trois couleurs : noire, blanche, rouge. »
- **Ce que montrent les images** : *noire* — deux flûtes de champagne remplies, un
  seau à glace métallique avec sa bouteille, des pétales sur le plateau ; *blanche* —
  un bouquet de roses blanches en vase et deux flûtes remplies ; *rouge* — le même
  bouquet et les mêmes flûtes.
- Seul l'alt de la vue noire signale ces objets, et il le fait bien. Les deux autres
  vues n'ont **aucun** texte alternatif : rien n'avertit qui ne voit pas l'image.

### 11. `lettre-illuminee-marquee-letter` — décors complets et marque tierce dans le cadre

- **Ce que dit le texte** : « Lettre géante à ampoules, de A à Z. Le prix est par
  lettre. »
- **Ce que montrent les images** : *SOFIA* sur une scène, sous une arche de ballons
  dorés et blancs ; *« BG »* au centre d'une installation de ballons qui couvre tout
  un mur ; *« TDLRN »* dans une salle où l'on lit distinctement, au fond, l'enseigne
  d'une marque tierce — **CHAMPAGNE TAITTINGER** — ainsi que des écrans et une
  enseigne « BUSKER ».
- Aucun de ces décors de ballons n'est loué avec la lettre, et la fiche ne le dit
  pas. Deux des trois vues n'ont **aucun** texte alternatif.
- À noter pour la troisième vue : le fichier s'appelle `lettre-seule.jpg` et montre
  **deux** lettres. Le nom ne vaut rien ; les pixels disent deux.

### 12. `chiffres-lumineux-50-ans` — décor non compris, alt dupliqué

- **Ce que dit le texte** : « Hauteur : 4 pieds (122 cm) », « Matériau : Bois robuste
  et durable », « Éclairage Incandescent intégré ».
- **Ce que montrent les images** : deux photos réelles du « 50 » allumé. La première
  est encadrée de deux bouquets de ballons dorés, blancs et cuivrés ; la seconde est
  prise dans un café, avec ballons verts et blancs, plantes suspendues, radiateur et
  cadre au mur. Rien de tout cela n'est loué avec les chiffres, et la fiche ne le
  précise pas.
- Les deux images portent **exactement le même** texte alternatif, recopié du titre.
- La hauteur de 4 pi **n'est pas vérifiable** sur ces images : aucune ne contient de
  référence d'échelle exploitable. Le matériau (bois peint, joints visibles) et
  l'éclairage (ampoules blanc chaud) sont, eux, cohérents avec ce qui est écrit.

### 13. `guirlande-lumiere` — un gros plan qui ne montre aucune des trois caractéristiques annoncées

- **Ce que dit le texte** : « LED blanc chaud **ou multicolore** selon vos
  préférences » ; « Longueur : plusieurs formats disponibles » ; « Alimentation :
  branchements électriques **ou à piles** ».
- **Ce que montre l'image** : un cadrage serré sur quatre ou cinq douilles et
  ampoules à filament, blanc chaud uniquement, sur fond clair. La guirlande est
  coupée aux deux bords. On n'y voit ni option multicolore, ni longueur, ni fiche
  d'alimentation, ni boîtier à piles. Aucune des trois caractéristiques annoncées
  n'est montrée.
- Sur les pixels : les corps de douille n'ont pas la même géométrie d'une douille à
  l'autre, les colliers de câble sont asymétriques et comme fondus, et un câble
  d'arrière-plan fusionne avec celui du premier plan. L'image a l'apparence d'un
  rendu généré. Je décris ce que je vois ; je ne le prouve pas.

---

Les cinq suivants sont des écarts **que la fiche signale elle-même**. L'image montre
bien autre chose que le produit seul, mais le lecteur est averti en toutes lettres.
Ils sont donc bénins, et je les note pour être complet, pas pour être corrigés en
priorité.

### 14. `nappe-de-table-noire` — adresse « noire », photo blanche

L'adresse de la fiche contient « nappe-de-table-noire » et la photo principale
montre, aux pixels, une nappe **blanche** (pixel central 249, 249, 251 ; fichier
1299 × 974). La seconde vue montre une nappe rouge (500 × 375). Aucune photo de la
nappe noire.

La fiche le dit sans détour : « Une photo manque, et on le dit : la nappe noire n'a
aucune photographie à elle. Les images que nous avions sous ce nom montrent soit une
nappe blanche, soit une teinte brune. » Le titre visible est neutre — « Nappe de
table — 6 et 8 pi » — et la légende sous l'image précise « Photo : la nappe blanche,
60 × 102 po ». Il reste que l'adresse de la page annonce une couleur que l'image ne
montre pas.

### 15. `table-a-cocktail` — une seconde colonne dans le cadre

La photo montre la table **et une seconde colonne chromée plus courte posée à
côté**. La fiche l'écrit deux fois : dans son tableau, ligne « Colonnes fournies :
À relever — la photo du fournisseur en montre deux, de longueurs différentes ; nous
n'avons pas encore vérifié ce qui part avec la table ». Et l'alt le dit aussi. Rien
à reprocher au traitement ; la photo, elle, reste ambiguë.

### 16. `tapis-rouge` — poteaux et cordons

La photo montre le tapis déroulé **bordé de huit poteaux dorés et de cordons de
velours rouge**, dans un hall vitré, avec des tables à cocktail à paillettes en
arrière-plan. La fiche dément explicitement : « Poteaux et cordons : Non inclus dans
le prix du tapis ». L'alt les décrit. Écart montré, mais démenti.

### 17. `poids-de-support-pour-chapiteau-lot-de-4` — le chapiteau du schéma

**J'ai compté les housses : quatre.** Le lot annoncé est de quatre. Conforme. À
droite, un schéma montre une housse sanglée au pied d'un chapiteau ; la fiche
précise « Le chapiteau du schéma n'est pas compris : il se loue à part ».

### 18. `table-air-hockey-en-location` et `location-table-de-baby-foot` — accessoires visibles, contenu non établi

L'air hockey montre deux poussoirs et deux palets rouges sur la surface ; le
baby-foot montre quatre balles posées à côté de la table. Les deux fiches écrivent
« Ce qui vient avec la table n'est pas établi », et les deux textes alternatifs
comptent et décrivent ces accessoires avec exactitude. Ce sont les deux meilleurs
alt du relevé.

## Les fiches sans photo

Quatre fiches sur les quarante examinées n'affichent **aucune** photo du produit.
Deux situations très différentes.

**Une fiche qui assume et explique.**

| Fiche | Ce qu'elle affiche |
|---|---|
| [`table-pliante-ronde-4-pieds`](https://evenox.ca/product/table-pliante-ronde-4-pieds/) | « Aucune vue disponible », et la raison : « La seule image au dossier de cette table est une image générée. Nous ne l'affichons pas. » Puis quatre emplacements de photos à produire, avec le cahier des charges. |

C'est la table ronde de 48 pouces — la seconde erreur connue de la maison. Elle est
traitée. À noter tout de même : **le sitemap annonce 11 images pour cette fiche**
alors que la page n'en affiche aucune. Le sitemap n'a pas suivi.

**Trois fiches abandonnées sur le gabarit WooCommerce d'origine**, qui affichent
l'image d'attente grise du logiciel (`woocommerce-placeholder.png`, alt « En attente
de l'image du produit ») :

| Fiche | Catégorie affichée |
|---|---|
| [`table-a-cocktail-nappe`](https://evenox.ca/product/table-a-cocktail-nappe/) | « Uncategorized » |
| [`machine-a-popcorn-avec-grain`](https://evenox.ca/product/machine-a-popcorn-avec-grain/) | « Uncategorized » |
| [`chiffres-illuminees-40`](https://evenox.ca/product/chiffres-illuminees-40/) | « Uncategorized » |

Ces trois-là ne disent pas qu'il manque une photo : elles montrent un carré gris sans
commentaire. Elles partagent un autre trait — un texte de vente générique qui promet
des choses que le reste du site contredit. `table-a-cocktail-nappe` annonce
« Livraison et installation simples » et « Hauteur standard 42 pouces », alors que la
fiche `table-a-cocktail` mesure **41,5 po** et que le site répète partout que le
ramassage à l'entrepôt est le seul mode prévu. `machine-a-popcorn-avec-grain` promet
« Huile et assaisonnements fournis » et « Guide d'utilisation détaillé inclus », que
je n'ai vus nulle part ailleurs. Ces trois points sortent du périmètre photo ; je les
signale sans les avoir instruits.

Sur l'ensemble du catalogue : **40 des 246 fiches n'ont aucune entrée image dans le
sitemap**. C'est une piste, pas un constat — le cas de `table-pliante-ronde-4-pieds`,
qui annonce 11 images et n'en montre aucune, prouve que le sitemap et la page ne
disent pas la même chose. Il faudrait ouvrir ces 40 pages pour conclure. Je ne l'ai
pas fait.

## Les textes alternatifs

Sur les **55 photos distinctes** examinées :

| État de l'attribut `alt` | Nombre |
|---|---|
| Absent ou vide | 10 |
| Recopié du titre, sans description | 8 |
| Descriptif | 37 |

Les 10 alt vides se concentrent sur les vues secondaires : `nappe-table-a-cocktail`
(vues blanche et rouge), `location-jeu-gonflable-licorne` (vue en cour),
`jeux-gonflable-reine-des-neiges-commerciale` (2ᵉ vue),
`location-jeu-gonflable-mario-bros` (**4 vues sur 5**),
`lettre-illuminee-marquee-letter` (2 vues sur 3).

Les 8 alt recopiés du titre : `nappe-a-table-ronde-6-pieds`, les trois vues
d'`arche-decoration`, `petale-de-fleur-rouge-lot-de-100`, `neon-marry-me`,
`guirlande-lumiere`, `table-de-poker-8-places-location`.

Les 37 alt descriptifs sont, pour la plupart, remarquablement précis : ils nomment la
couleur, la forme, le nombre d'éléments et jusqu'à la marque visible. Deux réserves,
déjà dites : celui de `connect-4-geant` affirme une hauteur que l'image contredit, et
plusieurs alt de machines omettent les accessoires et les consommables présents dans
le cadre.

## Qualité des fichiers

| Constat | Nombre de fiches concernées (sur 40) |
|---|---|
| Photo principale de moins de 600 px de large | 16 |
| Photo principale de 1000 px ou plus | 6 |
| Logo ou marque de fabricant lisible dans l'image | 5 |
| Aucune photo | 4 |

Les 16 fiches plafonnées sous 600 px : `chaise-pliante-blanche`, `chaise-chiavari`,
`table-pliante`, `table-a-cocktail`, `nappe-table-a-cocktail`,
`location-jeu-gonflable-licorne`, `location-jeu-gonflable-mario-bros`,
`jeu-gonflable-spiderman`, `machine-popcorn`, `machine-a-slush` (vue principale
seulement — les vues 2 et 3 cuves montent à 1600 et 1200 px),
`machine-a-creme-glacee-molle`, `fontaine-de-chocolat`, `arche-decoration`,
`petale-de-fleur-rouge-lot-de-100`, `neon-marry-me`, `location-table-de-baby-foot`.
Plusieurs fiches l'écrivent elles-mêmes et bornent l'affichage en conséquence.

**Marques de fabricant lisibles** : VEVOR sur `machine-barbe-a-papa` (logo et
mention « Cotton Candy Machine » imprimés en grand), `machine-popcorn` (deux vues),
`machine-a-slush` (vues 2 et 3 cuves), `table-air-hockey-en-location` (logo **et
slogan** « TOUGH TOOLS, HALF PRICE » sur le panneau de pied),
`table-de-poker-8-places-location` (petite plaque sur l'entretoise). Sur
`location-table-de-baby-foot`, une marque figure sur le flanc du caisson mais elle
est **illisible** à la définition disponible : je ne l'identifie pas.

Aucun filigrane superposé — du type bandeau ou logo semi-transparent posé par-dessus
la photo — n'a été trouvé sur les 55 images. Les marques relevées sont imprimées sur
les appareils eux-mêmes.

**Déformation et flou.** Aucune image déformée (étirée hors de son rapport d'origine)
n'a été trouvée. Deux cas de cadrage à signaler : `chaise-emmanuelle` est une photo
verticale insérée dans un carré de 600 px par ajout de bandes blanches — la photo
utile ne fait que **382 px de large** ; `petale-de-fleur-rouge-lot-de-100` est un
recadrage serré de 320 px dont le sujet est coupé sur trois bords. Les images les
plus douces au toucher sont `nappe-de-table-noire` (vue blanche) et
`chaise-pliante-blanche` : ce sont des détourages sur blanc à contours lisses, ce qui
explique une bonne part de la mesure.

## Ce que je n'ai pas établi

Par honnêteté, et parce que la règle du chantier l'exige :

- **206 fiches sur 246 n'ont pas été ouvertes.** Ce relevé ne dit rien d'elles.
- **Aucune cote n'a été mesurée dans le monde réel.** Les dimensions annoncées —
  8 pi × 8 pi pour le mur de fleur, 4 pi pour les chiffres lumineux, 68 × 40 cm pour
  le néon, 14 pi pour le château gonflable, 60 po pour la table ronde — n'ont pas de
  référence d'échelle exploitable dans les photos. Les rapports que je donne sont des
  rapports **mesurés dans l'image**, en pixels ; ils signalent un désaccord, ils ne le
  chiffrent pas en pieds.
- **Je n'ai pas établi l'origine des images.** Quand j'écris qu'une image « a
  l'apparence d'un rendu généré », c'est une description de ce que je vois dans les
  pixels, pas une conclusion. De même, je n'affirme d'aucune image qu'elle est une
  photo de fournisseur, sauf là où la fiche l'écrit elle-même.
- **Je n'ai pas vérifié l'inventaire.** Quand je dis que les chaises Chiavari dorées
  du `mur-de-fleur` ne sont pas au catalogue, je compare avec la fiche
  `chaise-chiavari`, qui montre et décrit une chaise en résine transparente. Je n'ai
  pas consulté l'inventaire réel d'Évenox.
- **Le compte des roses** de `petale-de-fleur-rouge-lot-de-100` est un ordre de
  grandeur lu sur une image rognée, pas un dénombrement.
- **Aucun prix, aucun délai, aucune quantité de stock** n'a été repris comme un fait
  vérifié dans ce relevé.

## Reproduire ce relevé

Le relevé n'a laissé aucune trace sur evenox.ca. Les fichiers de travail — pages,
images, mesures — ont été gardés hors du dépôt. La méthode tient en quatre points :
lire le sitemap produits, isoler les images propres à la fiche du carrousel des
produits liés, télécharger chaque image et **l'ouvrir**, puis comparer avec le titre,
la couleur, les cotes et les quantités écrites sur la page. Une requête à la fois,
au moins deux secondes et demie entre deux, et arrêt immédiat au premier 403.
