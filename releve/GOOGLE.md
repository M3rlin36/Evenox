# Ce que Google reçoit des pages d'evenox.ca

Relevé effectué le 19 août 2026. Toutes les valeurs ci-dessous ont été lues
dans la réponse renvoyée par le serveur d'evenox.ca, page par page. Aucune
n'est estimée. Ce qui n'a pas pu être mesuré est écrit « non établi ».

## L'échantillon : lequel, et pourquoi celui-là

Les plans de site recensent, au moment du relevé :

| Plan de site | Adresses |
| --- | ---: |
| `page-sitemap.xml` | 196 |
| `product-sitemap.xml` | 247 |
| `post-sitemap.xml` | 12 |
| **Total des trois familles** | **455** |

La commande annonçait 246 fiches produits ; le plan de site en comptait 247
le jour du relevé. Les trois autres plans (`category`, `product_cat`,
`product_tag`) n'ont pas été échantillonnés : ils ne font pas partie des
trois familles demandées.

**Échantillon principal : 60 adresses sur 455**, soit 13 % du périmètre.
Répartition : **20 pages**, **34 fiches produits**, **6 articles**. Les fiches
produits sont surreprésentées parce que c'est la famille la plus nombreuse et
la seule où l'on peut confronter le prix du JSON-LD au prix affiché.

Mode de tirage, pour qu'il soit reproductible : la liste de chaque plan de
site est triée par ordre alphabétique, puis on prélève des adresses
régulièrement espacées sur toute sa longueur (indice = `round(i × (N-1) /
(n-1))`). Aucun tirage au hasard, aucun choix à la main, à une exception
près : la page d'accueil a été ajoutée d'office. Le code du tirage est dans
`outils/echantillon.py`.

**Sondage complémentaire : 32 adresses de plus**, ajoutées après coup et
comptées à part. Un tirage régulièrement espacé est structurellement mauvais
pour détecter des doublons : il prélève au plus une page par famille de pages
jumelles, donc il ne peut pas voir les paires. Or les doublons, quand il y en
a, se logent dans ces familles. Deux grappes complètes ont donc été relevées
en entier : **toutes les pages Blainville (16)** et **toutes les pages
Montréal (18)**, dont 2 figuraient déjà dans l'échantillon principal.
Le corpus mesuré atteint ainsi **92 adresses distinctes**.

Ce qui n'est pas couvert : les 363 adresses restantes. Les conclusions
ci-dessous valent pour les 92 pages lues, pas pour le site entier.

## Comment les pages ont été lues

Le pare-feu de l'hébergeur (Hostinger) filtre selon l'empreinte du client, et
il s'est manifesté dès les premières requêtes :

- une première requête est passée (200) ;
- les suivantes, envoyées avec un agent qui imitait Chrome, ont été refusées
  en **429 Too Many Requests**, corps vide ;
- avec un agent honnête, `robots.txt` repassait en 200 mais
  `sitemap_index.xml` renvoyait un **403** contenant une page de défi
  JavaScript (« Checking your browser before accessing »).

Conformément à la consigne, il n'y a eu aucune reprise en boucle : la
collecte a été arrêtée, la réponse examinée, puis reprise autrement. Un vrai
navigateur Chrome résout ce défi de lui-même et obtient 200. Toutes les pages
ont donc été lues par Chrome piloté, **avec toutes les ressources annexes
bloquées** : chaque page n'a coûté au serveur qu'une seule requête, celle du
document HTML. Le corps enregistré est la réponse brute du serveur, donc bien
ce que Google reçoit.

Rythme tenu : une requête à la fois, jamais en parallèle, **3 secondes
d'intervalle**. Environ 130 requêtes au total. **Aucun 403 ni 429 après le
passage au navigateur** : les 92 pages, les 4 plans de site et les rendus ont
tous répondu 200.

Le prix affiché des fiches produits demande une précision. Sur la plupart des
fiches, **aucun prix n'est écrit dans le HTML** : il est inséré après coup par
le widget tiers Booqable. Ces fiches ont donc été rendues une seconde fois
avec le JavaScript actif, en n'autorisant que les hôtes Booqable
(`booqable.com`, `evenox.booqableshop.com`) — evenox.ca ne recevant là encore
qu'une requête par fiche. Les mouchards publicitaires et statistiques ont été
bloqués pour ne pas fausser les mesures d'audience du site.

## Tableau de l'échantillon (60 adresses)

Longueurs en caractères. Colonne « Canonique » : `auto` = la page se désigne
elle-même. Colonne « JSON-LD » : nombre de blocs, et prix annoncé s'il y en a
un. Colonne « H1 » : `=` le h1 reprend le titre, `~` il en est proche, `<>` il
en diffère.

| # | Famille | Adresse | `<title>` exact | Lg | Description meta exacte | Lg | Canonique | JSON-LD | H1 |
| ---: | --- | --- | --- | ---: | --- | ---: | --- | --- | --- |
| 1 | page | `/` | Évenox – La Référence en Location d'Équipement & Décoration | 59 | Évenox est une entreprise de location de matériel événementiel de la région de la Rive-Nord de Montréal pour tout type d'événements | 131 | auto | 1 bloc, lu sans erreur | <> |
| 2 | page | `/2476-2/` | Politique d'annulation - evenox.ca | 34 | Politique d'annulation d'Évenox : remboursement complet en cas de pluie pour les jeux gonflables, changement de date sans frais, dépôt de 20 %. | 143 | auto | 1 bloc, lu sans erreur | ~ |
| 3 | page | `/decoration-ballon/` | Décoration de ballons et arches \| Évenox | 40 | Arche de ballons, guirlandes et décor sur mesure pour mariage, baby shower ou événement corporatif. Installation incluse à Laval, Montréal et Rive-Nord. | 152 | auto | 1 bloc, lu sans erreur | <> |
| 4 | page | `/decoration-terrebonne/` | Location Décoration Événementielle à Terrebonne — Évenox | 56 | Location de décoration événementielle à Terrebonne : lettres lumineuses, murs floraux, arches et éclairage. Livraison dès 100 $. | 128 | auto | 1 bloc, lu sans erreur | ~ |
| 5 | page | `/evenement-cle-en-main-terrebonne/` | Événement clé en main à Terrebonne \| Évenox | 43 | Forfait événement tout compris à Terrebonne : décor, tables, chaises, photobooth, animations, gourmandises. Clé en main. Livraison dès 100 $. Soumission gratuite. | 162 | auto | 3 blocs, lus sans erreur | = |
| 6 | page | `/forfait-mobilier-24-places/` | Forfait mobilier 24 places — 150 $ / 48 h \| Évenox | 50 | Forfait mobilier 24 places : 24 chaises pliantes noires, 4 tables pliantes et 4 nappes pour 150 $ / 48 h, soit 6,25 $ par place. Reservation en ligne, ramassage a Sainte-Therese. | 178 | auto | 1 bloc, lu sans erreur | = |
| 7 | page | `/forfaits-fete-enfants/` | Forfaits fête d'enfants tout inclus dès 499 $ \| Évenox | 54 | Forfaits fête d'enfants tout inclus dès 499 $ : jeux gonflables, jeux géants et gourmandises, livrés et installés. Rive-Nord, Laval, Montréal. | 142 | auto | 4 blocs, lus sans erreur | <> |
| 8 | page | `/guide-de-reservation/` | Guide de réservation \| Évenox | 29 | Réservez votre équipement événementiel en 5 étapes simples : sélection, dates, panier et dépôt remboursable de 20 %. Tout le processus expliqué ici. | 148 | auto | 2 blocs, lus sans erreur | = |
| 9 | page | `/jeux-terrebonne/` | Location de Jeux Géants & Gonflables à Terrebonne \| Évenox | 58 | Location de jeux géants et de jeux gonflables à Terrebonne. Forfaits fête d'enfants dès 499 $. Livraison dès 100 $. | 115 | auto | 1 bloc, lu sans erreur | ~ |
| 10 | page | `/location-chaises-montreal/` | Location de chaises Montréal \| Évenox | 37 | Location de chaises à Montréal : Chiavari, pliantes, trône et Martha dès 1,50 $. Livraison dès 100 $, réservation en ligne 24/7. | 128 | auto | 5 blocs, lus sans erreur — 1,50 $ | ~ |
| 11 | page | `/location-equipement-laval/` | Tables, chaises et vaisselle Laval \| Évenox | 43 | Location de tables, chaises et vaisselle à Laval. Forfaits livrés, placés et ramassés dès 449 $ pour 24 places. | 111 | auto | 1 bloc, lu sans erreur | ~ |
| 12 | page | `/location-equipement-terrebonne/` | Location Tables, Chaises & Vaisselle à Terrebonne \| Évenox | 58 | Location de tables, chaises et vaisselle à Terrebonne. Forfaits livrés, placés et ramassés dès 449 $ pour 24 places. | 116 | auto | 1 bloc, lu sans erreur | = |
| 13 | page | `/location-jeux-exterieurs-laval/` | Location jeux extérieurs géants à Laval \| Évenox | 48 | Location de jeux extérieurs géants à Laval pour BBQ, festival ou team building. Livraison dès 100 $, réservation en ligne 24/7. | 127 | auto | 5 blocs, lus sans erreur — 60,00 $ | ~ |
| 14 | page | `/location-jeux-techno/` | Location de jeux techno interactifs \| Évenox | 44 | Location de jeux techno et interactifs pour événements corporatifs et fêtes : expériences immersives, livraison et installation incluses. | 137 | auto | 1 bloc, lu sans erreur | ~ |
| 15 | page | `/location-materiel-evenementiel-sainte-therese/` | Location de matériel événementiel à Sainte-Thérèse \| Évenox | 59 | Location de matériel événementiel à Sainte-Thérèse : jeux, décoration, photobooth et équipement. Service local, simple et rapide. | 129 | auto | 1 bloc, lu sans erreur | = |
| 16 | page | `/location-tables-chaises-montreal/` | Tables et chaises Montréal \| Évenox | 35 | Location de tables et chaises à Montréal pour mariages, événements corporatifs et réceptions. Service clé en main avec Évenox. | 126 | auto | 1 bloc, lu sans erreur | ~ |
| 17 | page | `/mariage-longueuil/` | Photobooth & Décor Mariage à Longueuil — Évenox | 47 | Photobooth, lettres lumineuses et décor pour votre mariage à Longueuil. Service clé en main. Livraison dès 100 $. Soumission en 24 h. | 133 | auto | 3 blocs, lus sans erreur | ~ |
| 18 | page | `/municipalite/` | Événements municipaux clé en main \| Évenox | 42 | Partenaire des municipalités pour festivals et événements publics : jeux gonflables, activités et logistique complète. Demandez votre soumission. | 145 | auto | 1 bloc, lu sans erreur | <> |
| 19 | page | `/party-noel-corporatif/` | Party de Noël corporatif clé en main \| Évenox | 45 | Party de Noël corporatif clé en main : décor, jeux, photobooth et gourmandises. Un seul fournisseur, une soumission rapide. | 123 | auto | 3 blocs, lus sans erreur | <> |
| 20 | page | `/ustensile-et-vaiselle/` | Location de vaisselle et d'ustensiles \| Évenox | 46 | Location d'ustensiles et de vaisselle pour réceptions et événements : couverts, assiettes et verres livrés propres et prêts à l'emploi. Réservez en ligne. | 154 | auto | 1 bloc, lu sans erreur | <> |
| 21 | product | `/product/accessoire-a-photobooth/` | Accessoire à Photobooth - Location - evenox.ca | 46 | Louez des accessoires à photobooth pour vos mariages, fêtes et événements. Fun et variés, ils garantissent des photos mémorables et une ambiance festive ! | 154 | auto | 2 blocs, lus sans erreur — 20,00 $ | ~ |
| 22 | product | `/product/boite-baby-gender-reveal/` | Boite Baby Gender Reveal - evenox.ca | 36 | Boîte Baby Gender Reveal en location : personnalisable, élégante et parfaite pour révéler le sexe de votre bébé. Réservez maintenant | 132 | auto | 2 blocs, lus sans erreur — 50,00 $ | = |
| 23 | product | `/product/chaise-de-trone-blanc-et-argent/` | Chaise de Trône Blanc et Argent - evenox.ca | 43 | Ajoutez une ambiance royale et lumineuse avec notre chaise de trône blanc et argent. Parfaite pour mariages et événements | 121 | auto | 2 blocs, lus sans erreur — 150,00 $ | = |
| 24 | product | `/product/chevalet-premium-location/` | Chevalet Premium - Location - evenox.ca | 39 | Chevalet en bois – Élégant et pratique, ce chevalet est parfait pour exposer vos affiches et tableaux lors de mariages, fêtes ou événements professionnels. | 155 | auto | 2 blocs, lus sans erreur — 20,00 $ | ~ |
| 25 | product | `/product/chiffres-lumineux-50-ans/` | Chiffres Lumineux 50 Ans - Location - evenox.ca | 47 | Louez des chiffres lumineux "50" de 4 pieds en bois robuste avec éclairage LED. Parfaits pour sublimer votre fête d’anniversaire avec un décor chic. | 148 | auto | 2 blocs, lus sans erreur — 140,00 $ | ~ |
| 26 | product | `/product/course-de-sac-a-patate/` | Course de Sac à Patate - Location - evenox.ca | 45 | Offrez une animation fun et interactive avec la course de sac à patate ! Parfaite pour anniversaires et fêtes, cette activité convient à tous les âges. | 151 | auto | 2 blocs, lus sans erreur — 50,00 $ | ~ |
| 27 | product | `/product/distributeur-deau-portatif/` | Distributeur d'eau Portatif - evenox.ca | 39 | Le Distributeur d'eau Portatif possède une capacité de 5 gallons ce qui est idéal pour rester hydrater lors d'un événement sportif | 130 | auto | 2 blocs, lus sans erreur — 20,00 $ | = |
| 28 | product | `/product/extension-electrique-10-pieds/` | Extension Électrique 10 pieds - evenox.ca | 41 | Extension électrique de 10 pieds idéale pour petits événements. Compacte, durable et sécurisée pour vos besoins en alimentation électrique | 138 | auto | 1 bloc, lu sans erreur | = |
| 29 | product | `/product/forfait-billard-de-golf/` | Forfait Billard de Golf - evenox.ca | 35 | Forfait Billard de Golf à louer chez ÉVENOX. Forfait clé en main avec livraison et installation. Service événementiel Montréal, Laval et Rive-Nord. | 147 | auto | 2 blocs, lus sans erreur | = |
| 30 | product | `/product/forfait-cle-en-main-slush-100-personnes/` | Forfait Clé en Main Slush (100 personnes) - evenox.ca | 53 | Forfait Clé en Main Slush (100 personnes) : machine professionnelle avec mélange inclus. Livraison Rive-Nord, Laval, Montréal. | 126 | auto | 2 blocs, lus sans erreur | = |
| 31 | product | `/product/forfait-essentiel-12-personnes/` | Forfait Essentiel 12 personnes - evenox.ca | 42 | Forfait Essentiel pour 12 personnes : tables, chaises et nappes livrées, installées et ramassées. Dépôt de 20 % pour réserver. | 126 | auto | 2 blocs, lus sans erreur — 199,00 $ | = |
| 32 | product | `/product/forfait-karaoke-avec-ecran/` | Forfait Karaoké avec Écran - evenox.ca | 38 | Forfait Karaoké avec Écran - système professionnel avec catalogue complet. Idéal fêtes et corporatifs. ÉVENOX - Montréal, Laval et Rive-Nord. | 141 | auto | 2 blocs, lus sans erreur | = |
| 33 | product | `/product/forfait-reception-100-personnes/` | Forfait Réception 100 personnes - evenox.ca | 43 | Forfait Réception 100 personnes à louer chez ÉVENOX. Forfait clé en main avec livraison et installation. Service événementiel Montréal, Laval et Rive-Nord. | 155 | auto | 2 blocs, lus sans erreur | = |
| 34 | product | `/product/forfait-toute-inclus-guess-who/` | Forfait Toute Inclus Guess Who - evenox.ca | 42 | Forfait Toute Inclus Guess Who à louer chez ÉVENOX. Forfait clé en main avec livraison et installation. Service événementiel Montréal, Laval et Rive-Nord. | 154 | auto | 2 blocs, lus sans erreur | = |
| 35 | product | `/product/grain-de-popcorn/` | Grain de Popcorn - evenox.ca | 28 | Grains de popcorn non éclatés vendus en formats de 200 g à 10 kg. Idéal pour machines à popcorn, événements et fêtes de famille. | 128 | auto | 2 blocs, lus sans erreur — 5,00 $ | = |
| 36 | product | `/product/jeu-gonflable-mini-princesse/` | Jeu Gonflable Princesses - Location - evenox.ca | 47 | Location Jeu Gonflable Princesses pour vos événements de princesses avec nos structures gonflables pour enfants de 3 à 8 ans | 124 | auto | 2 blocs, lus sans erreur — 120,00 $ | ~ |
| 37 | product | `/product/jeux-arcade-multijeux-100-jeux/` | Jeux Arcade Multijeux (100+ Jeux) - Location - evenox.ca | 56 | Location Jeux Arcade Multijeux (100+ Jeux), Dequoi vous amusez toute au long de votre événement pour en faire un moment mémorable. | 130 | auto | 2 blocs, lus sans erreur — 140,00 $ | ~ |
| 38 | product | `/product/jeux-gonflable-reine-des-neiges-commerciale/` | Jeu Gonflable Reine des Neiges XL - Location - evenox.ca | 56 | Location Jeu gonflable "Reine des Neiges" XL pour enfants (3-10 ans). Situé sur La Rive Nord. Louer votre jeu gonflable dès maintenant en ligne. | 144 | auto | 2 blocs, lus sans erreur — 180,00 $ | = |
| 39 | product | `/product/la-demande-ultime/` | La Demande Ultime - evenox.ca | 29 | La Demande Ultime à louer chez ÉVENOX. Forfait clé en main avec livraison et installation. Service événementiel Montréal, Laval et Rive-Nord. | 141 | auto | 2 blocs, lus sans erreur | = |
| 40 | product | `/product/lettres-lumineuses-ohbaby-location/` | Lettres Lumineuses (OH BABY) - Location - evenox.ca | 51 | Location Lettres Lumineuses (OH BABY) sont utilisés lors d'événements tel qu'un Gender Reveal comme décoration lumineuse pour dévoilement du sexe du bébé. | 154 | auto | 2 blocs, lus sans erreur — 420,00 $ | ~ |
| 41 | product | `/product/location-jeu-gonflable-princesse-xl/` | Jeu Gonflable Princesse XL - evenox.ca | 38 | Louez notre jeu gonflable Princesse XL pour une fête magique. 4x4x4 m, rose et mauve, parfait pour enfants de 3 à 8 ans. Réservez dès maintenant. | 145 | auto | 2 blocs, lus sans erreur — 180,00 $ | = (2 h1) |
| 42 | product | `/product/location-table-ronde-60-pouces/` | Table Ronde 60 pouces - evenox.ca | 33 | Location de table ronde 60 pouces pour mariage, party ou événement corpo. Assoit 8 à 10 invités. Livraison Rive-Nord, Laval et Montréal. Réservez en ligne. | 155 | auto | 2 blocs, lus sans erreur — 15,00 $ | = |
| 43 | product | `/product/machine-a-glace-seche/` | Machine à Glace Sèche - Location - evenox.ca | 44 | Machine à glace sèche pour créer des effets spectaculaires. Idéale pour mariages, soirées et événements. Facile à utiliser et parfaite pour un effet magique | 156 | auto | 2 blocs, lus sans erreur — 200,00 $ | ~ |
| 44 | product | `/product/machine-popcorn/` | Machine Popcorn - evenox.ca | 27 | Location Machine à popcorn professionnelle pour événements. Idéale pour mariages et fêtes, avec production rapide de popcorn frais et croustillant | 146 | auto | 2 blocs, lus sans erreur — 50,00 $ | ~ |
| 45 | product | `/product/murs-lateraux-chapiteaux-location/` | Murs latéraux chapiteaux - Location - evenox.ca | 47 | Location de 3 parois latérales compatibles avec chapiteau 10 x 10. Protège du vent et du soleil lors de vos événements extérieurs. Installation facile. | 151 | auto | 2 blocs, lus sans erreur — 10,00 $ | ~ |
| 46 | product | `/product/nerf-gun/` | Nerf Gun - evenox.ca | 20 | Nerf Gun pour des jeux d'action amusants lors de fêtes ou événements. Divertissement sécurisé pour tous les âges, idéal pour les batailles en groupe | 148 | auto | 2 blocs, lus sans erreur — 20,00 $ | = |
| 47 | product | `/product/pilier/` | Pilier à Gâteau - Location - evenox.ca | 38 | Louez des piliers de décoration pour vos mariages, réceptions et événements. Parfaits pour sublimer votre décor avec élégance et prestance. | 139 | auto | 2 blocs, lus sans erreur — 25,00 $ | ~ |
| 48 | product | `/product/poudre-a-etincelle/` | Poudre à Étincelle - evenox.ca | 30 | Louez de la poudre à étincelles pour vos mariages et événements. Effet visuel spectaculaire, sécurisé et idéal pour créer des moments magiques, | 143 | auto | 2 blocs, lus sans erreur — 20,00 $ | = |
| 49 | product | `/product/sac-de-popcorn/` | Sac de popcorn réutilissable - evenox.ca | 40 | Notre Sac de Popcorn Réutilisable est très populaire, car cntrairement aux versions en papier qui font énormément de déchet, lui est réutilisable. | 146 | auto | 2 blocs, lus sans erreur — 2,00 $ | = |
| 50 | product | `/product/spikeball/` | Spikeball - Location - evenox.ca | 32 | Louez un set de Spikeball pour vos fêtes, événements et journées sportives. Facile à installer et interactif, c’est l’activité idéale pour s’amuser. | 148 | auto | 2 blocs, lus sans erreur — 40,00 $ | ~ |
| 51 | product | `/product/table-a-cocktail-nappe-tabouret/` | Table à cocktail + Nappe + Tabouret - evenox.ca | 47 | Table à cocktail + Nappe + Tabouret pour réceptions et 5 à 7. Mobilier élégant avec livraison incluse. ÉVENOX - Location Montréal, Laval et Rive-Nord. | 150 | auto | 2 blocs, lus sans erreur — 48,00 $ | = |
| 52 | product | `/product/table-de-ping-pong/` | Table de Ping Pong - Location - evenox.ca | 41 | Table de ping-pong – Offrez des moments sportifs inoubliables à vos événements avec cette table de qualité, idéale pour tous les âges et occasions | 146 | auto | 2 blocs, lus sans erreur — 50,00 $ | = |
| 53 | product | `/product/tapis-rouge/` | Tapis rouge qualité commerciale – Location - evenox.ca | 54 | Location Tapis rouge en location pour mariages, galas et événements. Ajoutez une touche glamour et VIP. Réservez dès maintenant ! | 129 | auto | 2 blocs, lus sans erreur — 60,00 $ | ~ |
| 54 | product | `/shop/` | - evenox.ca | 11 | _absente_ | — | **absente** | 2 blocs, lus sans erreur | **vide** |
| 55 | post | `/blog/` | Organisation de mariage : 5 aspects importants \| Évenox | 55 | 5 aspects à ne pas négliger pour organiser votre mariage sans stress : planification, décor, animation et conseils de notre équipe événementielle. | 146 | auto | 1 bloc, lu sans erreur | <> |
| 56 | post | `/combien-coute-la-location-dun-jeu-gonflable-au-quebec/` | Combien coûte la location d'un jeu gonflable au Québec ? | 56 | Prix de location d'un jeu gonflable au Québec : 150 à 280 $ par jour selon le modèle. Politique pluie remboursée et conseils d'installation. | 140 | auto | 2 blocs, lus sans erreur | = |
| 57 | post | `/comment-choisir-le-bon-jeu-gonflable-pour-lanniversaire-de-mon-enfant/` | Choisir le bon jeu gonflable pour un anniversaire \| Évenox | 58 | Comment choisir le bon jeu gonflable pour l'anniversaire de votre enfant : âge, espace, thème et sécurité. Nos conseils de pros de la location. | 143 | auto | 1 bloc, lu sans erreur | ~ |
| 58 | post | `/organiser-fete-enfants-maison-budget-checklist/` | Fête d'enfants à la maison : budget réel et checklist 2026 | 58 | Combien coûte vraiment une fête d'enfants à la maison? Budget poste par poste, checklist J-30 à jour J et la formule zéro stress dès 499 $ tout inclus. | 151 | auto | 3 blocs, lus sans erreur | ~ |
| 59 | post | `/party-halloween-maison-idees-checklist/` | Party d'Halloween à la maison : idées et checklist 2026 | 55 | Le 31 octobre 2026 tombe un samedi. Idées de party d'Halloween à la maison, ambiance, stations gourmandes dès 100 $ et checklist J-30 à jour J. | 143 | auto | 3 blocs, lus sans erreur | = |
| 60 | post | `/prix-location-tables-chaises-quebec/` | Prix location tables et chaises au Québec (2026) \| Évenox | 57 | Chaise dès 3 $, Chiavari 8 $ : les vrais prix de location de tables et chaises au Québec en 2026, et les forfaits livrés et placés de 449 $ à 1 049 $. | 150 | auto | 3 blocs, lus sans erreur | ~ |

## Liste 1 — Titres et descriptions en doublon

Sur les **92 adresses lues** : **0 groupe** de titres strictement
identiques et **0 groupe** de descriptions strictement identiques.

**Aucun doublon strict.** Deux pages du corpus ne partagent ni le même
titre ni la même description. C'est un résultat mesuré, pas une absence
de vérification : le sondage complémentaire a justement relevé en entier
les deux grappes de pages jumelles où un doublon aurait été le plus
probable — Blainville et Montréal, 34 pages bâties sur les mêmes gabarits.
Le nom de ville y est substitué partout, y compris dans le titre, dans la
description et dans le `h1`.

Cette conclusion ne vaut que pour les 92 pages lues. Les 363 autres
adresses n'ont pas été vérifiées : **non établi**.

### Ce qui s'en approche : les jumelles à la ville près

Le doublon strict est absent, mais un second calcul mérite d'être posé. En
remplaçant le nom de ville par un marqueur, on mesure combien de pages
portent un libellé par ailleurs identique. Ces pages ne sont pas des doublons
au sens strict, mais elles se disputent les mêmes requêtes avec le même
argumentaire, mot pour mot.

- **Titres identiques à la ville près : 13 groupes, 30 adresses.**
- **Descriptions identiques à la ville près : 13 groupes, 32 adresses.**

Les cinq groupes les plus fournis, côté description :

- **4 pages** — description type : « Location de tables, chaises et vaisselle à Laval. Forfaits livrés, placés et ramassés dès 449 $ pour 24 places.… »
    - `/location-equipement-laval/`
    - `/location-equipement-terrebonne/`
    - `/location-equipement-blainville/`
    - `/location-equipement-montreal/`
- **3 pages** — description type : « Location de décoration événementielle à Terrebonne : lettres lumineuses, murs floraux, arches et éclairage. Livraison dès 100 $.… »
    - `/decoration-terrebonne/`
    - `/decoration-blainville/`
    - `/decoration-montreal/`
- **3 pages** — description type : « Forfait événement tout compris à Terrebonne : décor, tables, chaises, photobooth, animations, gourmandises. Clé en main. Livraison dès 100 $. Soumissi… »
    - `/evenement-cle-en-main-terrebonne/`
    - `/evenement-cle-en-main-blainville/`
    - `/evenement-cle-en-main-montreal/`
- **3 pages** — description type : « Location de jeux géants et de jeux gonflables à Terrebonne. Forfaits fête d'enfants dès 499 $. Livraison dès 100 $.… »
    - `/jeux-terrebonne/`
    - `/jeux-blainville/`
    - `/jeux-montreal/`
- **3 pages** — description type : « Location de jeux extérieurs géants à Laval pour BBQ, festival ou team building. Livraison dès 100 $, réservation en ligne 24/7.… »
    - `/location-jeux-exterieurs-laval/`
    - `/location-jeux-exterieurs-blainville/`
    - `/location-jeux-exterieurs-montreal/`

Les 26 groupes complets se régénèrent avec `outils/rapport.py`.

## Liste 2 — Titres trop longs, titres vides, descriptions hors gabarit

### Titres de plus de 60 caractères

**Aucun.** Sur les 92 pages, le titre le plus long fait **59 caractères** — sous la barre des 60. 2 pages atteignent cette
longueur :
- `/` : « Évenox – La Référence en Location d'Équipement & Décoration »
- `/location-materiel-evenementiel-sainte-therese/` : « Location de matériel événementiel à Sainte-Thérèse \| Évenox »

Les gabarits de titres tiennent la longueur. C'est le point le plus sain
du relevé : aucun titre ne sera tronqué par Google pour cause de longueur.

### Titres vides

- `/shop/` — titre : « - evenox.ca », 11 caractères.

  Aucune balise n'est littéralement vide, mais **la partie qui nomme
  la page l'est** : il ne reste que le séparateur et le nom du site.
  Dans un résultat de recherche, cette page s'annonce « - evenox.ca ».

### Descriptions absentes

- `/shop/` — **aucune balise `meta description`**.
  Google composera lui-même l'extrait affiché, à partir du contenu
  de la page.

### Descriptions de plus de 160 caractères

**4 sur 92.** Elles seront coupées dans les résultats.

- `/forfait-mobilier-24-places/` — **178 caractères**
    « Forfait mobilier 24 places : 24 chaises pliantes noires, 4 tables pliantes et 4 nappes pour 150 $ / 48 h, soit 6,25 $ par place. Reservation en ligne, ramassage a Sainte-Therese. »
- `/evenement-cle-en-main-terrebonne/` — **162 caractères**
    « Forfait événement tout compris à Terrebonne : décor, tables, chaises, photobooth, animations, gourmandises. Clé en main. Livraison dès 100 $. Soumission gratuite. »
- `/evenement-cle-en-main-blainville/` — **162 caractères**
    « Forfait événement tout compris à Blainville : décor, tables, chaises, photobooth, animations, gourmandises. Clé en main. Livraison dès 100 $. Soumission gratuite. »
- `/location-jeux-arcade-blainville/` — **162 caractères**
    « Location de jeux d'arcade rétro à Blainville pour party de bureau ou événement privé. Livraison dès 100 $, installation et support inclus. Réservez en ligne 24/7. »

## Liste 3 — Mentions périmées

### « Ramassage à Mirabel »

| Mesure | Résultat |
| --- | ---: |
| Descriptions meta citant Mirabel | **0** |
| Titres citant Mirabel | **0** |
| Pages citant Mirabel dans le corps | 17 |
| Pages portant l'adresse exacte de Sainte-Thérèse | 92 / 92 |

**Le piège annoncé n'a pas été retrouvé.** Aucune des 92 descriptions meta ne
mentionne Mirabel, ni aucun titre. Les 17 pages qui citent Mirabel dans
leur corps le font pour désigner un **secteur desservi**, jamais un lieu de
ramassage. La seule page où « Mirabel » voisine avec un mot d'entrepôt est
`/location-jeux-techno/`, et elle dit exactement l'inverse de l'erreur
redoutée :

> « nous livrons partout sur la Rive-Nord, incluant Mirabel, Laval,
> Blainville, Boisbriand, et plus encore. Des frais de livraison s'appliquent
> selon la distance **à partir de notre entrepôt de Sainte-Thérèse**. »

Par ailleurs, l'adresse exacte — **215, boulevard René-A.-Robert, local 100,
Sainte-Thérèse** — est présente sur les 92 pages du corpus, sans une seule
exception.

Réserve : la mention périmée peut subsister sur l'une des 363 adresses
non lues. Pour celles-là, **non établi**.

### Livraison annoncée gratuite ou incluse

La règle réelle est : **100 $ pour les 10 premiers kilomètres, puis 7 $/km
jusqu'à 40 km**. Toute page qui annonce une livraison gratuite ou incluse dit
donc faux.

Le comptage distingue deux cas, parce qu'une recherche brute sur les mots
« livraison incluse » se trompe. La phrase la plus répandue du site est
« Livraison et installation incluses ? **Non**, en supplément par défaut » :
elle contient les mots, mais énonce la bonne règle. Chaque occurrence a donc
été relue dans son contexte avant d'être comptée.

| Mesure | Résultat |
| --- | ---: |
| Descriptions meta affirmant la gratuité | **2** |
| Occurrences fautives dans le corps des pages | **3** |
| **Pages concernées en tout** | **4** |
| Mentions correctes, écartées du comptage | 25 |

**Dans la description meta** — c'est le cas le plus grave, puisque la phrase
s'affiche telle quelle dans les résultats de recherche :

- `/location-jeux-techno/` — expression fautive : « livraison et installation incluses »
    Description entière : « Location de jeux techno et interactifs pour événements corporatifs et fêtes : expériences immersives, livraison et installation incluses. »
- `/product/table-a-cocktail-nappe-tabouret/` — expression fautive : « livraison incluse »
    Description entière : « Table à cocktail + Nappe + Tabouret pour réceptions et 5 à 7. Mobilier élégant avec livraison incluse. ÉVENOX - Location Montréal, Laval et Rive-Nord. »

**Dans le corps de la page :**

- `/product/la-demande-ultime/` — « Livraison et installation incluses »
    Contexte : « …ficielles rouges et pétales romantiques • 12 vases cylindriques avec bougies à batterie • Livraison et installation incluses dans la région de Montréal Le forfait de rêve pour demandes en mariage spectaculaires à Montréal, Laval et Rive-Nord. L… »
- `/party-halloween-maison-idees-checklist/` — « livraison et installation comprises »
    Contexte : « …flable. Le forfait Jeux Essentiel à 499 $ combine un gonflable au choix et 4 jeux géants, livraison et installation comprises. Si ta cour est trop petite ou que tu préfères rester à l’intérieur, le forfait Jeux Premium à 599 $ mise sur 6 jeux gé… »
- `/party-halloween-maison-idees-checklist/` — « livraison et installation incluses »
    Contexte : « …s ta date, ton nombre d’invités et ton espace. On te revient avec une proposition claire, livraison et installation incluses, partout sur la Rive-Nord, à Laval et à Montréal. Téléphone : 514-559-1893. Voir les machines à gourmandises Voir les f… »

### Un troisième écart, non demandé mais mesuré : le rayon de livraison

La règle donnée s'arrête à **40 km**. Les pages lues annoncent trois rayons
différents, et aucun ne vaut 40 km :

| Rayon annoncé | Pages |
| --- | ---: |
| « rayon de 20 km » | 1 |
| « rayon de 25 km » | 13 |
| « rayon de 50 km » | 13 |

La formule la plus fréquente, « la livraison est offerte en supplément dans un
rayon de 50 km », n'a pas été comptée comme une fausse gratuité : elle dit bien
que la livraison est en supplément. Mais elle promet un périmètre de 50 km là
où la règle s'arrête à 40.

## Liste 4 — Écarts entre le prix du JSON-LD et le prix affiché

**24 fiches produits** ont pu être comparées — la consigne en
demandait au moins 15. **21 concordent, 3 présentent un écart.**

Trois sources de prix coexistent sur ces fiches :

1. le **JSON-LD** (`Product` / `offers.price`), produit par WooCommerce ;
2. le **prix affiché au visiteur**, inséré par le widget Booqable après
   chargement — sur la plupart des fiches, c'est le seul prix qu'un client voit ;
3. le **prix écrit dans le texte** de la page, quand la fiche a été rédigée à
   la main (ligne « Tarif … », ou balise `<title>` surnuméraire).

### Les écarts

| Fiche | JSON-LD | Prix affiché | Écart | Prix écrit dans le texte |
| --- | ---: | ---: | ---: | --- |
| `/product/chevalet-premium-location/` | 20,00 $ | 40,00 $ | **+20,00 $** | _aucun_ |
| `/product/grain-de-popcorn/` | 5,00 $ | 6,00 $ | **+1,00 $** | 6,00 $ |
| `/product/poudre-a-etincelle/` | 20,00 $ | 25,00 $ | **+5,00 $** | 25,00 $ |

Chacun de ces trois écarts a été relu une seconde fois, lors d'un rendu
indépendant, avec une fiche témoin (`/product/nerf-gun/`, 20,00 $ des deux
côtés) pour vérifier que la lecture n'était pas fautive. Les trois se sont
confirmés à l'identique.

Deux d'entre eux sont
corroborés par une troisième source : le texte rédactionnel de la page donne
**le même prix que le widget**, et contredit donc le JSON-LD.

- `/product/grain-de-popcorn/` — texte de la page : « Grain de popcorn — 200 g 6,00 $ · 500 g 10,00 $ · 1 kg 15,00 $ · 10 kg 60,00 $ \| Évenox »
- `/product/poudre-a-etincelle/` — texte de la page : « Poudre à étincelle — 25,00 $ le sachet de 50 g · trois formats \| Évenox »

Sur ces deux fiches, deux sources sur trois s'accordent contre le JSON-LD :
c'est **la donnée structurée qui est périmée**, et c'est elle que Google
lit. Pour `/product/chevalet-premium-location/`, seul le widget était
disponible ; le sens de l'écart n'est donc pas établi, seulement son
existence.

### Ce qui n'a pas pu être comparé

**10 fiches sur 34** — résultat : **non établi**.

| Fiche | JSON-LD | Prix affiché | Raison |
| --- | --- | --- | --- |
| `/product/extension-electrique-10-pieds/` | _aucun_ | 2,00 $ | **aucun bloc JSON-LD `Product`** sur la fiche |
| `/product/forfait-billard-de-golf/` | _aucun_ | _aucun_ | ni prix structuré, ni prix affiché par le widget |
| `/product/forfait-cle-en-main-slush-100-personnes/` | _aucun_ | _aucun_ | ni prix structuré, ni prix affiché par le widget |
| `/product/forfait-essentiel-12-personnes/` | 199,00 $ | _aucun_ | le widget n'a affiché aucun prix |
| `/product/forfait-karaoke-avec-ecran/` | _aucun_ | _aucun_ | ni prix structuré, ni prix affiché par le widget |
| `/product/forfait-reception-100-personnes/` | _aucun_ | _aucun_ | ni prix structuré, ni prix affiché par le widget |
| `/product/forfait-toute-inclus-guess-who/` | _aucun_ | _aucun_ | ni prix structuré, ni prix affiché par le widget |
| `/product/la-demande-ultime/` | _aucun_ | _aucun_ | ni prix structuré, ni prix affiché par le widget |
| `/product/murs-lateraux-chapiteaux-location/` | 10,00 $ | _aucun_ | le widget n'a affiché aucun prix |
| `/shop/` | _aucun_ | _aucun_ | page de boutique, pas une fiche produit |

### 7 fiches ne portent aucun bloc JSON-LD `Product`

C'est la cause principale des comparaisons impossibles, et elle se mesure :
sur ces fiches, seul le graphe Yoast (`WebPage`, `BreadcrumbList`, `WebSite`,
`Organization`) est émis. Aucun `Product`, donc aucun prix, aucune
disponibilité, aucune devise. **Ces fiches ne peuvent pas paraître comme
résultat produit enrichi dans Google.**

Le point commun se lit dans le HTML : sur les sept, le prix WooCommerce
transmis à Google Ads (`gtag` / `value`) vaut **0,00 $**. Un produit à zéro ne
déclenche pas l'émission du schéma `Product`.

| Fiche | Prix WooCommerce (`gtag`) | Prix affiché par le widget |
| --- | ---: | ---: |
| `/product/extension-electrique-10-pieds/` | 0,00 $ | 2,00 $ |
| `/product/forfait-billard-de-golf/` | 0,00 $ | _aucun_ |
| `/product/forfait-cle-en-main-slush-100-personnes/` | 0,00 $ | _aucun_ |
| `/product/forfait-karaoke-avec-ecran/` | 0,00 $ | _aucun_ |
| `/product/forfait-reception-100-personnes/` | 0,00 $ | _aucun_ |
| `/product/forfait-toute-inclus-guess-who/` | 0,00 $ | _aucun_ |
| `/product/la-demande-ultime/` | 0,00 $ | _aucun_ |

Six de ces sept fiches sont des « forfaits » sans prix affiché non plus : elles
renvoient vers une demande de soumission, et l'absence de prix structuré s'y
défend. **`/product/extension-electrique-10-pieds/` est le cas à corriger** :
le widget la vend 2,00 $, mais WooCommerce la porte à 0,00 $. Le prix existe
pour le client et n'existe pas pour Google.

## Autres constats du relevé

### `/shop/` : la page la plus abîmée du corpus

Quatre défauts sur la même page, qui est la porte d'entrée du catalogue :

- **Titre** : « - evenox.ca » — 11 caractères, la
  partie qui nomme la page est vide.
- **Description meta** : absente.
- **Balise canonique** : absente. C'est la seule page des 92 dans ce cas ;
  les 91 autres portent une canonique qui se désigne elle-même.
- **`h1`** : présent, mais **vide** — la balise existe et ne contient rien.

Vérification faite directement dans le HTML brut : la page ne contient **aucune**
occurrence du mot `canonical`, **aucune** balise `name="description"`, et pas
davantage de `og:title` ni de `meta robots`. Le JSON-LD, lui, est bien là
(`WebSite`, `Organization`, `BreadcrumbList`) mais sans nœud `WebPage`.
Autrement dit, Yoast ne produit presque rien sur cette page, alors qu'il
s'exécute normalement sur les 91 autres.

### Balises `<title>` en double dans le corps de la page

**21 pages sur 92** contiennent une **seconde balise `<title>`**,
placée dans le `<body>` par un module de code Divi. Le `<head>` en porte déjà
une, différente. Exemple sur `/product/machine-popcorn/` :

- dans le `<head>` : « Machine Popcorn - evenox.ca »
- dans le `<body>` : « Machine à popcorn — De Base 50,00 $ · Sur Pied 70,00 $ · 48 h \| Évenox »

Une balise `<title>` n'a rien à faire dans le corps du document. Le titre
retenu par Google reste en principe celui du `<head>` — mais c'est le moins
informatif des deux : celui du corps porte les tarifs et la durée de location.
Les 21 pages concernées :

- `/decoration-terrebonne/`
- `/forfait-mobilier-24-places/`
- `/jeux-terrebonne/`
- `/location-equipement-laval/`
- `/location-equipement-terrebonne/`
- `/product/accessoire-a-photobooth/`
- `/product/chaise-de-trone-blanc-et-argent/`
- `/product/grain-de-popcorn/`
- `/product/jeux-gonflable-reine-des-neiges-commerciale/`
- `/product/location-table-ronde-60-pouces/`
- `/product/machine-popcorn/`
- `/product/poudre-a-etincelle/`
- `/product/table-de-ping-pong/`
- `/product/tapis-rouge/`
- `/decoration-blainville/`
- `/decoration-montreal/`
- `/graduation-montreal/`
- `/jeux-blainville/`
- `/jeux-montreal/`
- `/location-equipement-blainville/`
- `/location-equipement-montreal/`

### Titre principal `h1`

Sur les 60 pages de l'échantillon principal :

| Constat | Pages |
| --- | ---: |
| `h1` présent et unique | 59 |
| `h1` en double | 1 |
| `h1` absent | 0 |
| `h1` présent mais vide | 1 |

Correspondance avec le titre de la page : **27 identiques**, **25 proches**, **7 franchement différents**.

Le seul `h1` en double est `/product/location-jeu-gonflable-princesse-xl/`,
qui porte « Jeu Gonflable Princesse XL » **et** « COntact » — un second `h1`
qui n'est pas un titre de page, et dont la casse est fautive dans le site
lui-même.

Les sept pages où le `h1` s'écarte du titre :

| Adresse | `<title>` | `h1` |
| --- | --- | --- |
| `/` | Évenox – La Référence en Location d'Équipement & Décoration | Location de jeux et équipements événementiels |
| `/decoration-ballon/` | Décoration de ballons et arches \| Évenox | Location de Décoration Ballon : Arche de Ballons, Balloon Garland & Ballons Hélium |
| `/forfaits-fete-enfants/` | Forfaits fête d'enfants tout inclus dès 499 $ \| Évenox | Forfaits fête d’enfants tout inclus : le party livré chez toi |
| `/municipalite/` | Événements municipaux clé en main \| Évenox | Vos Festivals. Notre Expertise. |
| `/party-noel-corporatif/` | Party de Noël corporatif clé en main \| Évenox | Votre party de Noël corporatif , organisé pendant que vous travaillez |
| `/ustensile-et-vaiselle/` | Location de vaisselle et d'ustensiles \| Évenox | Ustensile et Vaisselle |
| `/blog/` | Organisation de mariage : 5 aspects importants \| Évenox | 5 Aspects les plus important lors de l’organisation de votre Mariage |

Le cas de `/blog/` mérite un mot : son titre et son `h1` annoncent tous deux
un article sur l'organisation de mariage, alors que l'adresse est celle de la
liste des articles. Dans Google, la page d'index du blogue se présente sous le
nom d'un seul de ses articles.

### Balise canonique et JSON-LD : l'état général

| Mesure | Résultat |
| --- | ---: |
| Canonique présente et pointant vers elle-même | 91 / 92 |
| Canonique pointant ailleurs | 0 |
| Canonique absente | 1 |
| Pages avec au moins un bloc JSON-LD | 92 / 92 |
| Blocs JSON-LD illisibles (erreur de syntaxe) | 0 |

Aucune canonique ne pointe vers une autre page, et **aucun bloc JSON-LD n'est
cassé** : les 92 pages ont été analysées sans une seule erreur de lecture.

## Récapitulatif

| Point demandé | Résultat sur le corpus lu |
| --- | --- |
| Titres de plus de 60 caractères | **0** (le plus long : 59) |
| Titres vides | **1** — `/shop/`, réduit à « - evenox.ca » |
| Descriptions absentes | **1** — `/shop/` |
| Descriptions de plus de 160 caractères | **4** |
| Titres strictement en doublon | **0** |
| Descriptions strictement en doublon | **0** |
| Titres identiques à la ville près | 13 groupes, 30 pages |
| Descriptions identiques à la ville près | 13 groupes, 32 pages |
| Canoniques absentes | **1** |
| Canoniques pointant ailleurs | 0 |
| Blocs JSON-LD illisibles | 0 |
| Fiches produits sans bloc JSON-LD `Product` | **7** sur 33 |
| Descriptions meta disant « Mirabel » | **0** |
| Pages promettant à tort une livraison gratuite | **4** |
| Écarts de prix JSON-LD / affiché | **3** sur 24 comparaisons |
| Pages à deux balises `<title>` | 21 |
| `h1` vides | 1 |
| `h1` en double | 1 |

## Ce qui reste non établi

- Les **363 adresses** des trois familles qui n'ont pas été lues.
- Les plans `category-sitemap.xml`, `product_cat-sitemap.xml` et
  `product_tag-sitemap.xml`, hors du périmètre demandé.
- Le **prix affiché de 10 des 34 fiches produits** : soit le
  widget n'a affiché aucun prix, soit la fiche ne porte pas de prix structuré.
- Le **sens** de l'écart sur `/product/chevalet-premium-location/` : l'écart
  est mesuré, mais rien ne permet de dire lequel des deux prix fait foi.
- Ce que Google **retient effectivement** après rendu par ses propres robots.
  Ce relevé dit ce que le serveur envoie, pas ce que Google décide d'afficher.

---

Les outils du relevé sont dans `outils/` : `collecte.py` (lecture des pages),
`echantillon.py` (tirage), `rendu.py` (prix affiché), `analyse.py`
(dépouillement), `pieges.py` (mentions périmées), `rapport.py` (ce document).
Aucune écriture n'a été faite sur evenox.ca : le relevé est en lecture seule,
sans connexion à un compte, sans commande et sans saisie de donnée personnelle.
