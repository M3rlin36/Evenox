# Le tunnel de commande d'evenox.ca, parcouru comme un client

Relevé du 19 août 2026. Le tunnel a été parcouru deux fois : une fois sur écran d'ordinateur
(1440 px), une fois sur écran de téléphone (375 px, iPhone, tactile).

**Arrêt volontaire :** aucune commande n'a été créée, aucune coordonnée réelle, aucune carte,
aucun paiement saisi. Le parcours s'arrête à l'écran de caisse, avant l'étape « Payment ».
L'étape 2 de la caisse n'a pas été atteinte : elle exige un formulaire de coordonnées rempli.

---

## Ce qu'il faut savoir avant de lire

Le tunnel n'est pas celui qu'on croit. Le site tourne sur WordPress avec WooCommerce
(906 références WooCommerce chargées sur chaque page), mais **le tunnel réel est celui de
Booqable**, un logiciel de location hébergé ailleurs, inséré dans les pages sous forme de
composants (`<bq-product-button>`, `<bq-date-picker>`, `<bq-product-price>`).

Conséquence directe : à partir du panier, le client **quitte evenox.ca** pour
`evenox.booqableshop.com`. Ce n'est ni une sous-page ni un cadre intégré : c'est un autre
domaine, une autre mise en page, une autre langue par endroits.

Le WooCommerce, lui, est resté branché à moitié. Vérifié :

- WooCommerce déclare comme adresse de panier `"cart_url":"https://evenox.ca"`, c'est-à-dire
  la page d'accueil — ce que WooCommerce renvoie quand aucune page panier n'est configurée.
- Les 196 pages publiées du site ont été listées : **aucune page panier, aucune page commande,
  aucune page compte**. Les adresses `/panier/`, `/cart/`, `/commander/`, `/checkout/`,
  `/commande/`, `/paiement/` répondent toutes 404.
- L'API WooCommerce déclare pourtant 11 produits « Chiffres » achetables, à 140,00 $ et
  70,00 $, avec le bouton « Ajouter au panier » prévu.

Sur les trois fiches produits examinées, aucun formulaire WooCommerce d'ajout au panier n'est
affiché : le client ne rencontre donc pas ce cul-de-sac depuis ces fiches. Mais un système de
vente achetable sans page de panier reste branché sur le site.

---

# Partie 1 — Le parcours sur écran d'ordinateur

## Écran 1 — La fiche produit

Point de départ : `https://evenox.ca/product/chiffres-lumineux-geants-marquee-number/`
(« Chiffres lumineux géants »). HTTP 200.

Ce que la page annonce, dans l'ordre, dans la colonne de réservation :

1. Le prix : **70,00 $** (format correct), « / chiffre · 48 h ».
2. Un bouton de dates : **« Sélectionnez une période de location — Voir les prix et la
   disponibilité »** (420 × 72 px).
3. Dix lignes, une par chiffre de 0 à 9, chacune avec le nombre d'exemplaires en stock
   (`0 ×3`, `1 ×3`, `2 ×4`, `3 ×2`, `4 ×1`, `5 ×3`, `6 ×2`, `7 ×1`, `8 ×1`, `9 ×1`),
   un compteur de quantité et un bouton **« Ajouter au panier »** (191 × 52 px).
4. Sous les boutons : « Réservez avec 20 % du total. Le solde au ramassage. » puis « Dollars
   canadiens, taxes en sus. Sans frais cachés. Paiement par carte de crédit seulement, en
   ligne. »
5. Un lien « Politique et conditions de location ».

**Champs demandés à cet écran : aucun**, sinon les dix compteurs de quantité — qui n'ont
aucune étiquette (`label` vide), donc rien n'indique ce que compte le chiffre « 1 » affiché
dedans.

La page promet deux fois que la suite se passe au panier : « La disponibilité à votre date,
elle, s'affiche au panier » et « **Le total exact s'affiche au panier**, avant tout
engagement. »

Plus bas, un formulaire de contact séparé (« Une question avant de réserver ? ») : 5 champs,
3 obligatoires (nom, téléphone, date de l'événement au format **AAAA-MM-JJ**), 2 facultatifs.
Ce formulaire n'est pas le tunnel ; il ne mène pas à une commande.

### Ce qui casse ici : les dix boutons « Ajouter au panier » ne font rien

Testé deux fois, dont une avec un vrai clic de souris à la position du bouton :

- le clic atteint bien le bouton (l'écouteur d'événement se déclenche, `isTrusted: true`) ;
- le bouton n'est pas désactivé (`disabled: false`) ;
- **aucune requête réseau ne part** — zéro appel à Booqable ;
- le bouton ne change pas d'état, aucun message, aucune erreur, aucune animation ;
- le panier reste sur « Votre panier est vide », vérifié 12 secondes après le clic.

Le geste central de la page ne produit rien et ne dit rien.

Signal technique relevé : les dix boutons portent des identifiants produits que la boutique
Booqable ne connaît pas. Interrogée directement, l'API répond **404** pour ces identifiants,
sur `/api/boomerang/product_groups/<id>` comme sur `/api/boomerang/products/<id>`. Les dix
appels `.../recommendations` déclenchés au chargement de la page répondent 404 eux aussi.
À titre de comparaison, l'identifiant d'une autre fiche (table pliante) répond 200 sur les
mêmes points d'accès.

## Écran 2 — La fenêtre « Options de location » (1re étape)

Déclenchée par le bouton de dates. Fenêtre modale par-dessus la page, fond assombri.

Contenu : deux onglets, **« Cueillette »** et **« Période de location »**. Sous l'onglet
Cueillette, un choix en deux tuiles : **« Cueillette »** (sélectionné) et **« Livraison »**.
Puis l'adresse du point de retrait : « Entrepôt Sainte-Thérèse — 215 boulevard René A Robert,
215 Bd René-A.-Robert, Sainte-Thérèse Quebec J7E 4L1 Canada » (l'adresse est écrite deux fois
dans la même ligne). En bas : **« Annuler »** et **« Passer aux dates → »**.

**Champs : aucun.** C'est un choix à deux tuiles.

**C'est ici qu'apparaît la livraison — et elle n'annonce rien.** En cliquant « Livraison »,
la fenêtre se réduit à « Options de location / Livraison / Période de location / Cueillette /
Livraison / Annuler / Passer aux dates ». Le bloc d'adresse de l'entrepôt disparaît et **rien
ne le remplace** : aucun champ d'adresse, aucun prix, aucune zone desservie, aucun délai.
Vérifié : zéro champ de formulaire apparaît dans la fenêtre après ce choix.

La fiche produit, elle, chiffrait la livraison : « 100,00 $ pour les 10 premiers kilomètres,
puis 7,00 $ du kilomètre jusqu'à 40 km ; au-delà, soumission sur mesure. » Au moment où le
client choisit « Livraison » dans le tunnel, aucun de ces chiffres n'est rappelé.

## Écran 3 — La fenêtre « Options de location » (2e étape : les dates)

**C'est ici, et seulement ici, que les dates de location sont demandées** — après le choix
cueillette/livraison, avant tout ajout au panier.

Contenu, de haut en bas :

- une ligne d'étiquettes : **« Duration »** avec un menu déroulant réglé sur **« 1 day »** ;
- **« à partir de »** [date] [heure] · **« Jusqu'au »** [date] [heure] · **« × Clear »** ;
- la mention **« Format: dd-mm-yyyy »** ;
- quatre mois de calendrier (juillet à octobre 2026 dans le document, deux visibles à la
  fois), en-têtes de colonnes **« SUN MON TUE WED THU FRI SAT »**, titres de mois
  **« August 2026 »**, **« September 2026 »** ;
- les jours passés sont barrés, le jour courant souligné ;
- en bas : **« Annuler »** et **« Apply »**.

**Champs : 4** (deux dates, deux heures) plus le menu « Duration ». Aucun n'est marqué
obligatoire au sens technique.

Ce qui n'est pas expliqué : **le bouton « Apply » reste gris et inactif tant que les deux
heures ne sont pas choisies**, et rien ne le dit. Mesuré : avec les deux dates remplies
(13-09-2026 et 14-09-2026) et les deux heures vides, `Apply` est `disabled`. Il ne s'active
qu'après le choix de l'heure de début **et** de l'heure de fin. Le client qui a rempli ses
deux dates voit un bouton mort sans savoir pourquoi.

Après validation (13-09-2026 10:00 → 14-09-2026 17:00), la page enregistre la période
(`PUT /api/1/cart`) et le bouton de dates affiche **« 13-09-2026 10:00 14-09-2026 17:00 »**,
en jj-mm-aaaa — alors que le formulaire de contact de la même page réclame l'AAAA-MM-JJ.

Le prix affiché ne bouge pas : 70,00 $. Les dix boutons « Ajouter au panier » restent
inertes : nouveau clic, toujours zéro requête, panier toujours vide.

## Écran 4 — Le panier latéral

Il n'y a **aucun lien « panier » dans la page** : ni dans le menu, ni dans l'en-tête. Vérifié :
zéro composant `bq-cart`, `bq-cart-button`, `bq-cart-count` sur la fiche, et le seul lien
contenant « cart » pointe vers `booqable.com` (la publicité de l'éditeur). Le panier n'est
accessible que par une **pastille flottante de 60 × 60 px en bas à droite de l'écran**.

Ouverte, elle affiche un panneau de 340 px de large. Avec le panier vide :

```
MA COMMANDE
13-09-2026, 10:00
14-09-2026, 17:00
Votre panier est vide
POURSUIVRE LES ACHATS
Powered by Booqable
```

Depuis la fiche « Chiffres lumineux géants », le parcours s'arrête là : impossible d'y mettre
quoi que ce soit.

### Reprise sur une autre fiche, pour pouvoir continuer

Pour atteindre la caisse, le parcours a été repris depuis
`https://evenox.ca/product/lettre-illuminee-marquee-letter/` (« Lettre illuminée », 70,00 $).
Cette fiche fonctionne autrement : un menu déroulant **« Sélectionner une variante »**
(les lettres A à Z et « & »), un libellé de durée **« 2 Jours »**, un prix **« $70.00 »**, et
un bouton « Ajouter au panier » ordinaire.

Premier clic sans variante choisie : rien ne se passe, puis le message **« Choisissez une
variante à ajouter à votre panier. »** apparaît dans la zone. Le bouton répond donc, ici.
Après avoir choisi la lettre « A », le clic fonctionne : l'article entre au panier.

Deux remarques sur cette fiche :

- **Dans le menu des lettres, l'ordre est faux** : « … R S T **V U** W X Y Z & ». Le V passe
  avant le U.
- La fiche « Table pliante » (`/product/table-pliante/`), elle, n'a **aucun** bouton d'ajout
  Booqable : seulement un affichage de prix. Les cartes « Voir et réserver » y mènent quand
  même.

## Écran 5 — Le panier latéral, rempli

```
MA COMMANDE
13-09-2026, 10:00
14-09-2026, 17:00
Marquee Letter - A
disponible
- 1 +
$70.00
Assurance Matériel ( Usure / Graffigne / Bris mineur )   ($20.00)
Couverture de Déménagement                               ($6.00)
Extension Électrique 50 pieds                            ($5.00)
Nettoyage du Matériel (Jeux Gonflable)                   ($40.00)
Sangle Arrimage (Strap)                                  ($5.00)
Ramassage en magasin (Sainte-Thérèse)
Sous-total   $70.00
VOIR LE PANIER
COMMANDE
Powered by Booqable
```

**Champs : aucun**, hormis les six cases à cocher des services et le compteur de quantité.

Ce qu'on constate à cet écran :

- L'article s'appelle **« Marquee Letter - A »**, en anglais. La fiche d'où il vient
  s'intitule « Lettre illuminée ».
- **Tous les montants sont au format américain** : `$70.00`, `$20.00`, `$6.00`, `$5.00`,
  `$40.00`. Vérifié : aucun montant au format québécois dans ce panneau.
- **Aucune taxe** n'est affichée, ni annoncée. Le mot « taxe » n'apparaît pas.
- **Aucune mention du dépôt de 20 %.** Le mot « dépôt » n'apparaît pas non plus. La promesse
  de la fiche produit (« Le total exact s'affiche au panier, avant tout engagement ») n'est pas
  tenue : le panier montre un sous-total hors taxes et rien d'autre.
- On propose **« Nettoyage du Matériel (Jeux Gonflable) — $40.00 »** à quelqu'un qui loue une
  lettre lumineuse.
- **« Ramassage en magasin (Sainte-Thérèse) »** est une case à cocher sans prix affiché, au
  milieu de cinq cases payantes — on ne sait pas si elle coûte quelque chose.

## Écran 6 — La page Panier, sur un autre domaine

« VOIR LE PANIER » est un lien vers **`https://evenox.booqableshop.com/carts/<id>`**. Le
client change de site.

Ce qu'il trouve : une page blanche, sans en-tête Evenox, sans menu, sans numéro de téléphone,
sans pied de page. En haut, **un logo qui n'est pas celui d'Evenox** : un personnage de dessin
animé violet. Puis :

- un bandeau de dates : « à partir de 13-09-2026 10:00 » / « Jusqu'au 14-09-2026 17:00 » ;
- « Panier », l'article « Marquee Letter / A / disponible », quantité 1, **$70.00** ;
- un encadré « Services complémentaires » : les six mêmes cases, prix en `$20.00`, `$6.00`,
  `$5.00`, `$40.00`, `$5.00`, et « Ramassage en magasin (Sainte-Thérèse) » sans prix ;
- « Code de réduction » + « Appliquer » ;
- « Sous-total **$70.00** » ;
- « Commande » et « Poursuivre les achats ».

**Toujours aucune taxe, toujours aucun dépôt de 20 %.**

Et, imprimé sur la page, en bas à gauche, **un fragment de code : `})`**. Vérifié dans le
document : c'est un nœud de texte rattaché directement au `<body>`, visible à l'écran. Il
réapparaît sur la page de connexion et sur la caisse.

## Écran 7 — Le mur de connexion

« Commande » ne mène pas à la caisse. Il mène à :

```
https://evenox.booqableshop.com/customers/login?cart_id=<id>&locale=en&redirect_uri=/checkouts/<id>
```

Contenu :

- « **Se connecter** — Connectez-vous à votre compte »
- **Courriel**, **Mot de passe** (2 champs)
- « Vous avez oublié votre mot de passe ? »
- bouton « Se connecter »
- en dessous, en plus petit : « **Continuer en tant qu'invité** »

**Réponse à la question « faut-il créer un compte ? »** : non, mais on le demande d'abord. La
connexion est présentée comme le chemin normal ; le passage sans compte est le lien secondaire
sous le champ de mot de passe. Aucune phrase n'explique pourquoi un compte serait utile, ni
qu'on peut s'en passer sans perdre son panier.

À noter dans l'adresse : **`locale=en`**. La caisse est demandée en anglais.

## Écran 8 — La caisse, étape 1 sur 2 (« Details »)

`https://evenox.booqableshop.com/checkouts/<id>?force_guest_checkout=true`

En haut : « **Back to cart** », puis le fil d'étapes « **① Details** — ② Payment ». En anglais.

Colonne de gauche, dans l'ordre :

| Section | Champs |
|---|---|
| **Contact** | Nom\*, Courriel\* |
| **Adresse\*** | Pays\* (menu, « Canada »), Ligne d'adresse 1\*, Ligne d'adresse 2, Ville\*, Province\* (menu, « Select… »), Code postal\* |
| — | Numéro Téléphone\* (indicatif + numéro), Notes |
| **Adresse de livraison** | Ligne d'adresse 1\*, Ligne d'adresse 2, Ville\*, Province\* (« Select… »), Code postal\* |
| — | ☐ Utiliser une autre adresse de facturation |
| **Mode de livraison** | « Saisissez une adresse de livraison pour voir les options disponibles. » |
| — | ☐ Je souhaite recevoir des courriels de marketing et des mises à jour. |
| — | ☐ J'accepte les conditions générales · « En savoir plus » |
| — | bouton **« Continuer vers la caisse »** |

**Décompte : 15 champs à remplir et 3 cases à cocher, sur un seul écran** (19 contrôles de
formulaire au total dans la page, dont trois servent aux menus Pays / Province / indicatif
téléphonique). **12 étiquettes portent un astérisque, et nulle part sur la page l'astérisque
n'est expliqué** — vérifié : aucune mention « obligatoire », « requis » ou « \* = ». Aucun de
ces champs ne porte l'attribut HTML `required` : le contrôle se fait ailleurs, l'astérisque est
purement décoratif.

**Le client qui a choisi la cueillette doit quand même remplir une « Adresse de livraison »**
dont quatre champs sur cinq sont marqués d'un astérisque. Rien ne dit qu'elle est inutile pour
un ramassage à l'entrepôt. Et « Mode de livraison » renvoie à un état vide : pour voir les
options, il faut d'abord taper une adresse.

Colonne de droite — **c'est ici, et seulement ici, que l'argent est dit en entier** :

```
Votre commande                    Modifier
13-09-2026 10:00 → 14-09-2026 17:00
1x Marquee Letter                  $70.00
A
+ Have a coupon code?
Sous-total                         $70.00
Livraison                          -
Taxe                               $10.48
Total                              $80.48
Total dû maintenant                $16.10
   20 % du montant de la commande, hors dépôt de garantie
Total dû plus tard                 $64.38
})
```

- **Les taxes apparaissent pour la première fois ici** : une seule ligne, « Taxe $10.48 ».
  Pas de TPS ni de TVQ séparées. (10,48 $ sur 70,00 $ = 14,97 %, cohérent avec le taux
  combiné québécois.)
- **Le dépôt de 20 % est expliqué pour la première fois ici**, en deux endroits : la ligne
  « Total dû maintenant $16.10 — 20 % du montant de la commande, hors dépôt de garantie », et
  un paragraphe dans la colonne de gauche : « Pour confirmer votre commande, il y aura
  uniquement un dépôt de 20% du montant total qui sera demandé. Puis, la balance **pourra être
  payer** le jour même du ramassage ou de la réception du matériel. » (faute dans le texte
  original).
- Le 20 % est calculé sur le total **taxes incluses** : 20 % de 80,48 $ = 16,10 $, reste
  64,38 $. Ce n'est écrit nulle part ; la fiche produit dit « 20 % du total », sans préciser.
- **Le total à payer passe de 70,00 $ (au panier) à 80,48 $ (à la caisse)** sans qu'aucun
  écran intermédiaire n'ait annoncé le montant des taxes.
- « Have a coupon code? » en anglais, à côté de « Code de réduction » en français sur la page
  précédente.

Le bouton « En savoir plus », sous « J'accepte les conditions générales », déplie le texte des
conditions sur place (il est donc lisible — ce n'est pas un lien mort). Mais **ce qu'il déplie
ne parle pas du produit loué**. Extraits, pour une location de lettre lumineuse :

> « En cas de pluie, la décision se prendra la journée même de l'événement par Évenox. Sachez
> qu'il n'est pas dans notre intérêt de prêtez un jeux gonflable qui sera de retour plein
> d'eau. »
>
> « Le matériel devra être remis dans l'état qu'il a été prêté, soit sec, propre et bien roulé
> […] vous aurez des frais de 20% du montant total pour un nettoyage en profondeur. »
>
> « En cas d'annulation de votre part, il y aura un frais de 20% pour l'annulation de votre
> commande. »

Trois « 20 % » différents cohabitent donc à la même étape : le dépôt de 20 %, des frais
d'annulation de 20 %, des frais de nettoyage de 20 %. Rien ne les distingue. Le nom de
l'entreprise y est écrit **« Événox »** et **« Évenox »** dans le même bloc.

## Écran 9 — Étape 2 « Payment » : non atteinte

Le bouton « Continuer vers la caisse » exige le formulaire de coordonnées rempli. Le parcours
s'arrête là, conformément à la consigne. **Ce qui se passe à l'étape « Payment » n'est pas
établi** : mode de paiement offert, présence d'un dépôt de garantie chiffré, message de
confirmation, courriel envoyé — rien de tout cela n'a été vu.

---

# Partie 2 — Le même parcours sur écran de téléphone (375 px)

Émulation iPhone, 375 × 812, tactile, français canadien.

**Ce qui va bien, mesuré :** aucune page ne déborde horizontalement (`scrollWidth` =
`clientWidth` sur les trois fiches, sur la page panier et sur la caisse). Les cases du
calendrier sont des boutons de 51 × 51 px, largement assez grands. La liste des heures, qui
paraît hors écran dans le document avant son animation, s'affiche bien en entier à l'écran
une fois ouverte. Le panneau du panier occupe 360 px sur 375 et ne coupe rien.

## Écran 1 (téléphone) — La fiche « Chiffres lumineux géants »

**Le bouton « Ajouter au panier » devient un carré de 46 × 52 px qui n'affiche plus
que « A… ».**

Mesuré : le texte dans le document est bien « Ajouter au panier », le bouton mesure 46 px de
large, l'étiquette interne 18 px, et la coupure est faite par `text-overflow: ellipsis`. Sur
les dix lignes de chiffres, le geste d'achat se réduit donc à une pastille violette marquée
d'une lettre. Et ce bouton ne fait toujours rien.

## Écrans 2 et 3 (téléphone) — La fenêtre de dates

La fenêtre s'ouvre en plein écran (375 × 812) et reste lisible : « Duration / 1 day », les
deux dates, les deux heures, le mois, la grille, « Annuler » et « Apply ». Les mêmes mots
anglais qu'à l'ordinateur, dans le même mélange.

**La bulle de clavardage (64 × 64 px, en bas à gauche) se superpose au coin inférieur gauche
de la fenêtre de dates.** Mesuré : elle occupe 16→80 px en largeur, 730→794 px en hauteur ;
les boutons « Annuler » (148→255) et « Apply » (267→359) restent libres. Elle ne bloque donc
pas la validation, mais elle flotte par-dessus la fenêtre modale.

## Écran 5 (téléphone) — Le panier latéral

Contenu identique à l'ordinateur, lisible, sans débordement. Un problème de doigt :
**les boutons de quantité « − » et « + » mesurent 25 × 25 px.** Les deux boutons d'action
(« VOIR LE PANIER », « COMMANDE ») font 330 × 38 px — 38 px de haut, sous le seuil habituel
de 44.

## Écran 6 (téléphone) — La page Panier

Correctement empilée sur une colonne, lisible. Les montants restent en `$70.00`, `$20.00`,
`$40.00`. **Le fragment `})` est visible en bas à gauche de l'écran**, sous le bouton
« Poursuivre les achats ».

## Écran 8 (téléphone) — La caisse

Les mêmes 19 contrôles de formulaire, dont **8 font moins de 44 px de haut**.

Deux choses propres au téléphone :

- **Le titre « Contact » et la phrase « Vous avez déjà un compte ? » se touchent, sans aucun
  espace.** Mesuré : « Contact » occupe x = 16 à 93 px, la phrase commence exactement à
  x = 93 px — **écart horizontal : 0 px**. La phrase se casse sur deux lignes et **le point
  d'interrogation se retrouve seul sur la deuxième ligne**. Le lien « Se connecter » se casse
  également en deux lignes.
- Le récapitulatif d'argent est replié dans un bandeau intitulé **« Order & Price Details »**
  — en anglais — qui affiche `$16.10`, le montant du dépôt, comme chiffre de tête. Le total
  réel (80,48 $) est caché jusqu'au dépliage.

---

# Partie 3 — Les frictions, de la plus coûteuse à la plus bénigne

### 1. Sur la fiche « Chiffres lumineux géants », les dix boutons « Ajouter au panier » ne font absolument rien

Ce que j'ai observé : clic de souris réel sur le bouton du chiffre 1, événement reçu par le
bouton (`isTrusted: true`), bouton non désactivé — **zéro requête réseau**, aucun message,
aucun changement visuel, panier toujours « vide » 12 secondes après. Répété avant et après
avoir choisi une période de location : même résultat. Le panier ouvert confirme : « Votre
panier est vide ». Les identifiants produits portés par ces dix boutons reçoivent **404** de
l'API Booqable, alors que celui d'une autre fiche reçoit 200 sur le même point d'accès.
Coût : la page vitrine la plus travaillée du site ne peut rien vendre, en silence.

### 2. Le panier ne montre ni les taxes ni le dépôt, alors que la fiche promet le contraire

Ce que j'ai observé : la fiche produit écrit « **Le total exact s'affiche au panier**, avant
tout engagement ». Le panier latéral et la page Panier affichent « Sous-total $70.00 » et
rien d'autre : aucune ligne de taxe, aucune mention de dépôt (les mots « taxe » et « dépôt »
sont absents des deux écrans, vérifié). Le vrai total, 80,48 $, et le vrai montant à payer
tout de suite, 16,10 $, n'apparaissent qu'après le mur de connexion, à l'écran de caisse.
Coût : le client découvre 10,48 $ de taxes au dernier écran, après avoir été invité à créer
un compte.

### 3. Tous les montants passent au format américain dès qu'on entre dans le tunnel

Ce que j'ai observé : sur la fiche « Table pliante », le composant de prix porte l'attribut
`default-price="10,00 $"` — la bonne écriture est fournie — et affiche **`$10.00`** une fois
initialisé (`initialized=true`). Sur la fiche « Lettre illuminée » : **`$70.00`**. Puis dans
le panier : `$70.00`, `$20.00`, `$6.00`, `$5.00`, `$40.00`. Puis à la caisse : `$70.00`,
`$10.48`, `$80.48`, `$16.10`, `$64.38`. Aucun montant au format québécois dans le panier ni à
la caisse. Le reste du site, lui, écrit correctement « 70,00 $ », « 140,00 $ », « 100,00 $ ».

### 4. Le panier fait quitter evenox.ca pour un autre domaine, sans identité Evenox

Ce que j'ai observé : « VOIR LE PANIER » pointe vers `https://evenox.booqableshop.com/carts/<id>`
et « COMMANDE » vers `https://evenox.booqableshop.com/customers/login?...`. Ces pages n'ont
ni en-tête, ni menu, ni pied de page, ni numéro de téléphone du site. Le logo affiché est un
personnage de dessin animé violet, qui n'est pas la marque Evenox. Coût : au moment de payer,
le client ne reconnaît plus le commerçant.

### 5. On demande de se connecter entre le panier et la caisse

Ce que j'ai observé : « COMMANDE » mène à un écran « Se connecter — Connectez-vous à votre
compte » avec courriel et mot de passe. Le passage sans compte existe mais s'appelle
« Continuer en tant qu'invité » et se trouve sous le champ de mot de passe, en texte
secondaire. Rien n'explique qu'un compte n'est pas nécessaire. L'adresse de cette page
contient `locale=en`.

### 6. Sur téléphone, le bouton d'achat de la fiche chiffres affiche « A… »

Ce que j'ai observé, à 375 px : bouton de 46 × 52 px, étiquette interne de 18 px, coupure par
`text-overflow: ellipsis`, texte réel « Ajouter au panier ». Dix lignes, dix pastilles
violettes marquées « A… ». (Sur la fiche « Lettre illuminée », le même bouton fait 144 px et
son texte tient : le problème est propre à la mise en page de la fiche chiffres.)

### 7. Le calendrier des dates est à moitié en anglais

Ce que j'ai observé, à l'écran, mêlé au français « à partir de / Jusqu'au / L'heure /
Annuler » : **« Duration »**, **« 1 day »**, **« Clear »**, **« Apply »**,
**« Format: dd-mm-yyyy »**, **« SUN MON TUE WED THU FRI SAT »**, **« July 2026 »**,
**« August 2026 »**, **« September 2026 »**, **« October 2026 »**. Identique sur ordinateur
et sur téléphone.

### 8. Le bouton « Apply » reste mort sans dire pourquoi

Ce que j'ai observé : les deux dates saisies (13-09-2026 et 14-09-2026), les deux heures
vides → « Apply » est `disabled`. Aucun message n'indique qu'il manque les heures. Le bouton
s'active dès que les deux heures sont choisies.

### 9. Choisir « Livraison » n'annonce rien du tout

Ce que j'ai observé : dans la fenêtre « Options de location », le passage de « Cueillette » à
« Livraison » fait disparaître le bloc d'adresse de l'entrepôt et n'ajoute **aucun champ**
(zéro champ de formulaire dans la fenêtre après ce choix), aucun prix, aucune zone, aucun
délai. Les chiffres pourtant écrits sur la fiche (100,00 $ / 10 km, puis 7,00 $ du km jusqu'à
40 km) ne sont rappelés nulle part dans le tunnel. À la caisse, « Mode de livraison » affiche
« Saisissez une adresse de livraison pour voir les options disponibles » — c'est-à-dire que le
prix de la livraison n'est connu qu'après avoir tapé son adresse, à la dernière étape.

### 10. La caisse réclame une adresse de livraison même pour un ramassage

Ce que j'ai observé : le panier porte « Ramassage en magasin (Sainte-Thérèse) », et la caisse
affiche quand même une section « Adresse de livraison » avec « Ligne d'adresse 1\* », « Ville\* »,
« Province\* », « Code postal\* ». Rien ne dit qu'on peut la laisser vide.

### 11. Un fragment de code, `})`, est imprimé sur trois écrans du tunnel

Ce que j'ai observé : un nœud de texte « `})` » rattaché directement au `<body>`, visible à
l'écran en bas à gauche, sur la page Panier, sur la page de connexion et sur la page de
caisse. Visible aussi bien à 1440 px qu'à 375 px.

### 12. Les conditions qu'on doit accepter parlent d'un autre produit

Ce que j'ai observé : pour louer une lettre lumineuse, le texte déplié sous « J'accepte les
conditions générales » traite de pluie, de jeux gonflables (« un jeux gonflable qui sera de
retour plein d'eau ») et de matériel à rendre « sec, propre et bien roulé ». Il annonce en
outre **20 % de frais d'annulation** et **20 % de frais de nettoyage**, à la même étape où
l'on demande un **dépôt de 20 %**, sans que rien ne distingue les trois.

### 13. Sur téléphone, le titre « Contact » et la phrase de connexion se touchent

Ce que j'ai observé, à 375 px : « Contact » occupe x = 16→93 px, « Vous avez déjà un compte ? »
commence à x = 93 px, écart nul ; la phrase se casse en deux lignes avec le point
d'interrogation seul sur la seconde ; « Se connecter » se casse aussi en deux lignes.

### 14. Deux durées différentes pour la même location

Ce que j'ai observé : pour la période 13-09 10:00 → 14-09 17:00, la fiche « Lettre illuminée »
affiche **« 2 Jours »**, le tableau des tarifs de la fiche chiffres appelle le palier de base
**« 48 h »**, et le panier renvoyé par l'API porte `charge_label: "1 jour"` quand le calcul de
prix porte `charge_label: "2 Jours"`. Le client ne peut pas savoir ce qu'il paie comme durée.

### 15. Les dates s'écrivent en jj-mm-aaaa dans le tunnel, en AAAA-MM-JJ dans le formulaire de la même page

Ce que j'ai observé : le tunnel affiche « 13-09-2026 » et annonce « Format: dd-mm-yyyy » ; le
formulaire de questions de la fiche produit demande « Date de votre événement (AAAA-MM-JJ) ».

### 16. Le panier propose des services qui ne concernent pas l'article

Ce que j'ai observé : pour une lettre lumineuse, le panier propose « Nettoyage du Matériel
(Jeux Gonflable) — $40.00 » et « Couverture de Déménagement — $6.00 ». Et
« Ramassage en magasin (Sainte-Thérèse) » figure parmi les cases sans aucun prix affiché, à
côté de cinq cases payantes.

### 17. Le panier n'est atteignable que par une pastille flottante

Ce que j'ai observé : aucun lien panier dans le menu ni dans l'en-tête ; zéro composant
`bq-cart-button` sur la page ; le seul lien contenant « cart » mène à `booqable.com`. Le
panier s'ouvre uniquement par une pastille de 60 × 60 px en bas à droite.

### 18. Les astérisques d'obligation ne sont expliqués nulle part

Ce que j'ai observé : 12 étiquettes sur 18 portent un astérisque à la caisse ; aucune mention
« obligatoire » ou « requis » sur la page ; et aucun des 19 champs ne porte l'attribut HTML
`required`.

### 19. Sur téléphone, des cibles trop petites pour un doigt

Ce que j'ai observé : boutons de quantité du panier 25 × 25 px ; boutons « VOIR LE PANIER » et
« COMMANDE » hauts de 38 px ; 8 des 19 champs de la caisse hauts de moins de 44 px.

### 20. Dans le menu des lettres, le V passe avant le U

Ce que j'ai observé : « … R S T **V U** W X Y Z & » dans le menu « Sélectionner une variante ».

### 21. Des notes de production internes sont affichées au client, à côté du bouton de réservation

Ce que j'ai observé sur la fiche « Chiffres lumineux géants », visible à l'écran : « **À
produire — 3 vues** / Trois photos à produire. 1. Un chiffre seul […] 3. L'arrière — le dos du
caisson […] Dans les trois cas : cadrage carré 1:1, 1200 px minimum, fond blanc uni, sujet
entier dans le cadre, aucune ombre portée au sol. » Ce sont des consignes à un photographe,
affichées en face de la colonne de réservation.

### 22. La même fiche dit ne pas connaître des mesures qu'elle donne juste en dessous

Ce que j'ai observé sur la fiche chiffres : « La hauteur, le poids et tout ce qui touche à
l'électricité **n'ont pas encore été relevés** : ils sont marqués « à relever », et personne ne
vous en donnera un chiffre approximatif. » Puis, dans le tableau qui suit : « Hauteur et
largeur — **4 pi × 2 pi** », « Poids — **environ 15 lb** », « **10 ampoules de 7 W, soit
environ 70 W** ». Et plus bas encore : « la hauteur, la largeur, la consommation et le type de
fiche **n'ont pas été relevés à l'entrepôt**, et nous n'allons pas vous en donner une valeur
approximative ». C'est de la vitrine, pas du tunnel, mais c'est lu juste avant de réserver.

### 23. Erreurs techniques discrètes, sans effet visible pour le client

Ce que j'ai observé : dix réponses **404** de l'API Booqable au chargement de la fiche
chiffres ; une erreur de console `[cartstack] Timeout waiting for cartstack_updatecart` ; une
réponse **400** répétée de `tracking.refersion.com/start` sur toutes les pages ; et une
réponse **503** relevée une fois sur l'adresse de la caisse, sans que la page cesse de
s'afficher.

### 24. Fautes de français dans le tunnel

Ce que j'ai observé, dans les textes de la caisse et des conditions : « la balance pourra
**être payer** », « il n'est pas dans notre intérêt de **prêtez** un **jeux** gonflable », et
le nom de l'entreprise écrit « **Événox** » et « **Évenox** » dans le même bloc de texte.

---

# Partie 4 — Ce qui n'est pas établi

- **L'étape 2 « Payment » de la caisse.** Non atteinte : elle exige des coordonnées réelles.
  Mode de paiement, dépôt de garantie chiffré, écran de confirmation, courriel de
  confirmation : non établis.
- **Le prix réel de la livraison dans le tunnel.** Il n'apparaît qu'après saisie d'une adresse
  de livraison, ce qui n'a pas été fait. La ligne « Livraison » de la caisse affichait « - ».
- **Ce que devient le total avec un service coché** (assurance, sangle, etc.) : aucune case
  n'a été cochée.
- **Le comportement du tunnel sur les autres fiches produits.** Trois fiches examinées
  (« Chiffres lumineux géants », « Table pliante », « Lettre illuminée ») sur un catalogue
  bien plus large. Trois comportements différents ont été constatés : boutons inertes, absence
  de bouton, tunnel fonctionnel. La proportion de chaque cas dans le catalogue n'est pas
  établie.
- **Le sort du panier WooCommerce.** Aucun formulaire WooCommerce d'ajout au panier n'a été
  rencontré sur les trois fiches ; l'existence d'un chemin client vers ce cul-de-sac n'est pas
  établie.
- **La disponibilité réelle à une date donnée.** Le tunnel a affiché « disponible » pour la
  lettre A du 13 au 14 septembre 2026 ; aucun cas d'indisponibilité n'a été provoqué.
- **Le comportement sur un vrai téléphone.** Tout ce qui est écrit en partie 2 vient d'une
  émulation à 375 px avec entrées tactiles, pas d'un appareil physique.
- **Le taux de taxe appliqué.** 10,48 $ sur 70,00 $ donne 14,97 %, ce qui correspond au taux
  combiné québécois, mais la caisse n'affiche qu'une ligne « Taxe » sans détail TPS/TVQ : le
  détail n'est pas établi.

---

# Annexe — Méthode

- Tout a été fait en lecture seule. Rien n'a été modifié sur evenox.ca. Aucun compte utilisé,
  aucune commande créée, aucune coordonnée ni moyen de paiement saisi.
- Un seul article a été mis dans un panier — c'était l'objet du relevé. Un panier n'est pas une
  commande : il n'a pas été validé.
- Navigateur Chrome piloté, une requête à la fois, avec des pauses entre les chargements de
  pages. Environ vingt chargements de pages d'evenox.ca en tout, répartis sur la durée.
- **Un 403 a bien été rencontré**, une fois, sur la fiche « Chiffres lumineux géants ». Il ne
  venait pas d'un excès de requêtes : le navigateur piloté annonçait alors
  `HeadlessChrome/148` dans son en-tête `User-Agent`, et le pare-feu de l'hébergeur le refuse.
  La page d'accueil, interrogée une seule fois juste après avec un en-tête de navigateur
  ordinaire, a répondu 200. Le relevé a repris avec l'en-tête corrigé, sans nouvelle
  tentative en boucle et sans autre 403 par la suite. Aucun 403 sur la page d'accueil.
- Les mesures de largeur, de hauteur, de débordement et de chevauchement viennent des
  rectangles réels calculés par le navigateur, pas d'une appréciation à l'œil. Les textes cités
  sont copiés du rendu, y compris à l'intérieur des composants Booqable (shadow DOM).
- Plateforme relevée : WordPress 7.0.4, WooCommerce 11.0.1, hébergement Hostinger, et Booqable
  v2 (`storeProvider: 'wordpress'`, boutique `evenox.booqableshop.com`, sans domaine
  personnalisé).
