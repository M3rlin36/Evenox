# Table de soccer chez Evenox — relevé du 19 août 2026

Question posée : un article facturé 250 $ alors que le catalogue de réservation
annoncerait 80 $. Hypothèse à vérifier : deux tables de soccer différentes, une petite et
une grande, qu'on confondrait — ou une seule table vendue au prix de l'autre.

Ce document ne contient que ce qui a été relevé sur les pages publiques, le 19 août 2026.
Tout ce qui n'a pas été mesuré est écrit « non établi ».

---

## 1. Les pages trouvées

Recherche menée de deux façons, comme demandé :

- **par le sitemap** — `sitemap_index.xml` → `product-sitemap.xml` (247 produits),
  `page-sitemap.xml` (196 pages), `post-sitemap.xml` (12 articles). Les 455 adresses ont
  été filtrées hors ligne sur `soccer|baby|foot|kicker|futbol`.
- **par le moteur de recherche du site** — `?s=soccer&post_type=product`,
  `?s=baby-foot&post_type=product`, `?s=table+de+soccer` (pages 1 et 2), et
  `?s=table+de+soccer&sentence=1` (recherche sur la phrase exacte, sans pagination :
  3 résultats seulement).

Quatre pages d'evenox.ca parlent d'une table de soccer ou d'un baby-foot. Les voici.

| # | Adresse | Titre exact | Prix affiché | Prix barré | Durée annoncée | Dimensions | Joueurs | Photo |
|---|---|---|---|---|---|---|---|---|
| A | `https://evenox.ca/product/table-de-soccer-geant-1-v-1/` | **Table de Soccer Géant 1 v 1** | **250,00 $ CA** (`price: "250.00"` dans le JSON-LD, `pp: '250'` dans le suivi de page, badge « Promo ! » sur la fiche) | **300,00 $ CA** (`ListPrice: "300.00"` dans le JSON-LD ; la vignette boutique affiche 300 $ barré puis 250 $) | « 48 h au tarif de base » ; « la durée standard de location est de 48 heures » ; au-delà, frais de 50 % du montant initial | table **124 × 81,5 × 71 cm** ; bancs joueurs 38 × 69 × 39,5 cm ; espace de jeu recommandé 195 × 81,5 cm ; poids ≈ 23,5 kg | « Jeu de soccer interactif **1 contre 1** » ; **2 bancs intégrés** ; « à partir de 6 ans » | 1024 × 1024 px. Caisson d'acier noir à plateau vitré, gazon vert imprimé de lignes de terrain, filet à mailles sur les deux longs côtés, un ballon posé sur le gazon, et **deux bancs à coussin rouge, un de chaque côté**. Aucune barre, aucune figurine. → **une table pour deux joueurs face à face**, pas une grande table à plusieurs. Nom du fichier : `ChatGPT-Image-Mar-11-2026-09_16_22-AM-1.png`. |
| B | `https://evenox.ca/product/location-table-de-baby-foot/` | **Table de Baby Foot en Location** | **120,00 $ CA** (`price: "120.00"`, `pp: '120'`). La page écrit deux formats : **résidentiel 120,00 $ / 24 h** et **commerciale 160,00 $ / 24 h** | aucun (pas de badge « Promo », pas de `ListPrice` dans le JSON-LD) | **24 h**, tarif de base ; deux jours = × 2. La page insiste : « 24 h, et non 48 h comme nos autres jeux de table » | **non établi** — la page écrit elle-même « à relever », « rien n'est mesuré ni pesé à l'entrepôt ». Seule indication d'espace : « espace minimum recommandé : 6 pi x 4 pi » | **non établi** — la page écrit « aucun nombre de joueurs n'est écrit nulle part dans notre catalogue » | 500 × 500 px. **Baby-foot classique** : caisson noir sur quatre pieds carrés, **barres traversantes garnies de figurines bleues et blanches**, poignées noires des deux côtés, ouverture rectangulaire sur le flanc, et **quatre balles posées à côté du plateau** (deux ballons noir et blanc, deux balles rouges). Le nombre exact de barres n'est pas comptable de façon sûre sur une source de 500 px, même agrandie : **non établi**, et la page l'inscrit elle-même « à relever ». La page dit aussi que c'est « une planche de vente du fabricant », pas une photo de l'unité. |
| C | `https://evenox.ca/location-jeux-geants/` | Location de jeux géants pour événements (page de renvoi, pas une fiche produit) | l'article y est listé à **250 $**, sous le nom **Table de Soccer Géant 1 v 1**, avec la mention « Baby-foot humain, 1 contre 1 » | aucun | non affichée sur cette page | non affichées | « 1 contre 1 » | même fichier image que la page A. Aucun baby-foot à barres n'est proposé sur cette page. |
| D | `https://evenox.ca/product/soccer-bulle/` | Soccer Bulle – Location (40 $) | — | — | — | — | — | La phrase « la table de soccer » n'apparaît que dans une note interne de la feuille de style de la page, qui la cite comme **un autre article**. Aucun prix de table de soccer sur cette page. |

Écartés après lecture du slug et du titre, parce qu'ils ne sont ni une table ni un
baby-foot : `soccer-dart-gonflable-geant` (60 $), `soccer-bulle` (40 $),
`forfait-soccer-bulle`, `ballon-soccer` (5 $).

Deux recoupements de vocabulaire, relevés sans en tirer de conclusion, parce qu'ils sont
les seuls endroits où les deux articles se touchent par les mots :

- la page C décrit l'article à 250 $ comme un « **Baby-foot** humain, 1 contre 1 », alors
  que l'article à 120 $ s'appelle « Table de **Baby Foot** en Location » ;
- l'article s'appelle « Table de Soccer **Géant** 1 v 1 » sur la boutique et « Table de
  Soccer 1 v 1 », sans « Géant », dans le catalogue de réservation.

### Le catalogue de réservation

La fiche A porte un bouton de réservation
`<div class="booqable-product-button" data-id="table-de-soccer-1-v-1">`. Le catalogue de
réservation d'Evenox est donc un Booqable, à `evenox.booqableshop.com`. Il a été lu, en
lecture seule, sans compte et sans commande.

| Article du catalogue | Titre dans le catalogue | Prix affiché | Durée affichée | Variantes |
|---|---|---|---|---|
| `/products/table-de-soccer-1-v-1` (id `c21b638c-188e-4986-ac39-86ddfafe2db8`) | **Table de Soccer 1 v 1** (sans le mot « Géant ») | `default-price="$250.00"` | `default-label="1 jour"` | **aucun sélecteur de variante** sur la page |
| `/products/table-de-baby-foot` (id `0493cb4c-f124-41c3-aa96-73d68016a2a4`) | **Table de Baby Foot** | `default-price="$120.00"` | `default-label="1 jour"` | **un sélecteur de variante** est présent |

La photo du catalogue (`content.booqablecdn.com/.../591f7eb2-.../upload.png`) et celle de
la boutique sont **la même image** : mêmes 1024 × 1024 px, mêmes bancs rouges, même
ballon, même cadrage. Les octets diffèrent (recompression), l'image non.

**La vitrine du catalogue a été énumérée jusqu'au bout** : 7 pages de liste de 50 articles
(la 8e revient vide, et la 7e ne porte plus de lien vers une suivante), soit **350 articles
distincts**. Un seul porte un nom de table de soccer (`table-de-soccer-1-v-1`), un seul un
nom de baby-foot (`table-de-baby-foot`). Aucun deuxième format, aucune « petite » et aucune
« grande » table de soccer. Cette énumération ne voit que ce qui est **publié sur la
vitrine** : un article archivé ou masqué n'y apparaîtrait pas.

---

## 2. Conclusion, en trois lignes

1. **Deux articles distincts existent bel et bien, mais ce ne sont pas deux tables de
   soccer de tailles différentes** : d'un côté une table de jeu 1 contre 1 à 250 $ (deux
   bancs, 124 cm, aucune barre ni figurine), de l'autre un baby-foot classique à barres et
   figurines à 120 $ en résidentiel et 160 $ en commercial. Les photos et les descriptions
   ne montrent pas le même objet.
2. **Pour la table de soccer 1 v 1, il n'y a qu'un seul article** : un seul slug parmi les
   350 publiés au catalogue de réservation, sans variante, et le catalogue y affiche
   **250,00 $** — exactement le montant facturé. Sur ce point, l'hypothèse d'une confusion
   entre deux tables n'est pas confirmée par ce qui est publié.
3. **L'origine du 80 $ est non établie.** Aucun montant de 80 $ n'a été trouvé pour une
   table de soccer ni pour un baby-foot, ni sur les pages publiques d'evenox.ca ni sur les
   350 articles publiés au catalogue de réservation. Je ne peux donc pas dire à quel article
   ni à quelle ligne il correspond.

---

## 3. Ce qui reste à vérifier par quelqu'un qui a accès au catalogue

Ces points sont hors de portée d'une lecture publique. Aucun n'est deviné ici.

1. **D'où vient le 80 $.** Quel article, quelle ligne de commande, quelle date. Deux
   pistes, notées telles quelles, sans conclusion : la page `location-jeux-geants` affiche
   **Basket Pong à 80 $** ; et une note interne laissée dans la feuille de style de la
   fiche baby-foot écrit « Missisipi — Booqable 120,00 $, **80,00 $ observé** ». Reste à
   savoir si l'un des deux a été confondu avec la table de soccer, ou si le 80 $ vient
   d'ailleurs.
2. **La durée réellement facturée pour la table de soccer 1 v 1.** La fiche boutique
   annonce **48 h au tarif de base** ; le catalogue de réservation affiche **« 1 jour »**
   pour le même article. Les deux ne peuvent pas être vrais en même temps. À trancher sur
   la structure de prix de l'article (`charge_length` / structure de durée), comme cela a
   été fait pour le baby-foot.
3. **Le 300 $ barré.** Il est écrit dans la fiche boutique (`ListPrice`), mais le catalogue
   de réservation n'affiche que 250 $. Reste à vérifier si un tarif de 300 $ a existé dans
   le catalogue, et à quelle date il a basculé.
4. **Le format commercial du baby-foot (160 $).** La fiche écrit qu'aucune unité n'est
   rattachée à ce format au registre d'inventaire, alors qu'il est ouvert à la
   réservation. À confirmer au registre.
5. **Le lien exact entre la fiche boutique et l'article du catalogue.** Il n'a été
   constaté que par l'identifiant du bouton de réservation (`table-de-soccer-1-v-1`) et
   par la photo identique. La correspondance des deux enregistrements doit être vue côté
   administration.
6. **Les mesures manquantes du baby-foot** : longueur, largeur, hauteur de jeu, nombre de
   barres, nombre de joueurs, nombre de balles remises. Rien de tout cela n'est écrit sur
   la page, qui le dit elle-même.
7. **Les deux noms de l'article.** « Table de Soccer Géant 1 v 1 » sur la boutique, « Table
   de Soccer 1 v 1 » au catalogue. Si un jour deux fiches ont porté ces deux noms, le
   catalogue le dira ; publiquement, un seul article existe aujourd'hui.
8. **Les articles non publiés.** Mon énumération ne couvre que la vitrine du catalogue. S'il
   existe une seconde table de soccer archivée, masquée, ou réservée à l'usage interne, elle
   m'est invisible. C'est la seule façon dont l'hypothèse des deux tables pourrait encore
   tenir, et seul l'accès au catalogue permet de la fermer.

---

## 4. Méthode, et ce qui n'a pas été fait

**Requêtes sur evenox.ca : 13 pages HTML/XML** (4 sitemaps, 5 pages de résultats de
recherche, 3 fiches produits, 1 page de renvoi), **plus 2 images** et une redirection.
Budget de 15 pages respecté. Sur `evenox.booqableshop.com` et son CDN, hôtes distincts :
12 requêtes. **Une requête à la fois, jamais en parallèle, au moins 2 secondes entre
deux. Aucun code 403 n'a été rencontré, et aucune requête n'a été réessayée en boucle.**
Le seul code non-200 est un 404 sur `evenox.booqableshop.com/products?q=soccer`, une
adresse de recherche qui n'existe pas sur ce catalogue.

Rien n'a été modifié sur evenox.ca ni sur le catalogue de réservation. Aucune connexion à
un compte, aucune commande, aucun panier, aucune coordonnée, aucun moyen de paiement.
Toutes les lectures sont anonymes et publiques.

Les prix relevés sont ceux affichés le 19 août 2026. Les fiches portent une date de
dernière modification récente (`lastmod` du 19 août 2026 pour les deux fiches) : un prix
peut avoir changé après ce relevé.
