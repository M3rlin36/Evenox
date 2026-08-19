# Allègement des pages de vente — evenox.ca

Trois pages de vente allégées, un fichier par page. Une page de vente vend une catégorie ou une
occasion, pas un article : son seul travail est d'amener le client vers la fiche du produit qui
l'intéresse.

| Page | Avant | Après | Retiré | Fichier |
|---|---|---|---|---|
| https://evenox.ca/location-chaises/ | 1 225 mots | 441 mots | 64 % | [`location-chaises.md`](location-chaises.md) |
| https://evenox.ca/decoration-ballon/ | 1 394 mots | 472 mots | 66 % | [`decoration-ballon.md`](decoration-ballon.md) |
| https://evenox.ca/party-noel-corporatif/ | 1 425 mots | 577 mots | 60 % | [`party-noel-corporatif.md`](party-noel-corporatif.md) |

Total : 4 044 mots avant, 1 490 après. **63 % retiré.**

Rien n'a été modifié sur evenox.ca. Les pages ont été lues en lecture seule le 19 août 2026.

---

## Comment les trois pages ont été choisies

Le sitemap (`https://evenox.ca/sitemap_index.xml` puis `page-sitemap.xml`) contient 196 pages.
`/location-chaises/` était imposée. Pour les deux autres, j'ai mesuré les deux familles demandées
au complet — les 14 pages « décoration… » et les 18 pages d'occasion (mariage, graduation, party de
Noël corporatif) — et gardé la plus longue de chacune. Je n'ai pas mesuré les 196 pages : le
pare-feu de l'hébergeur a banni une adresse IP aujourd'hui, et mesurer les familles concernées
suffisait à répondre à la question.

**Rythme des requêtes** : une seule requête à la fois, jamais en parallèle, 2,5 secondes d'attente
minimum entre deux, avec arrêt immédiat programmé au premier 403. 36 requêtes au total — les deux
sitemaps et 34 pages — aucun 403, aucun code autre que 200.

## Longueurs mesurées (page entière, menu et pied de page compris)

Le classement ci-dessous sert au choix des pages. Les chiffres « avant » du tableau du haut
portent, eux, sur la zone éditoriale seule (menu du site, 72 mots, et pied de page, 41 mots,
exclus), puisque c'est la seule zone qu'un allègement de page touche.

| Page | Mots |
|---|---|
| party-noel-corporatif | 1 538 |
| decoration-ballon | 1 507 |
| conditions-de-location-evenox | 1 436 |
| location-chaises | 1 338 |
| mariage-rive-nord | 1 135 |
| mariage-montreal | 1 114 |
| mariage-longueuil | 1 114 |
| mariage-blainville | 1 114 |
| mariage-terrebonne | 1 112 |
| mariage-laval | 1 112 |
| location-decoration-evenementielle | 1 062 |
| party-noel-corporatif-rive-nord | 938 |
| party-noel-corporatif-montreal | 919 |
| party-noel-corporatif-longueuil | 919 |
| party-noel-corporatif-blainville | 919 |
| party-noel-corporatif-terrebonne | 917 |
| party-noel-corporatif-laval | 917 |
| decoration-sainte-therese | 908 |
| decoration-longueuil | 907 |
| decoration-brossard | 907 |
| decoration-terrebonne | 906 |
| decoration-rive-nord | 906 |
| decoration-laval | 906 |
| decoration-blainville | 906 |
| decoration-montreal | 905 |
| decoration-mascouche | 905 |
| mariage | 878 |
| graduation-rive-nord | 853 |
| graduation-montreal | 833 |
| graduation-laval | 831 |
| graduation-prom | 808 |
| decoration-cle-en-main | 454 |
| decorations-mariage | 393 |
| decoration-de-ballons | 358 |

La page des conditions de location est mesurée pour référence : elle n'est pas une page de vente et
n'a pas été allégée. C'est elle qui sert de source aux vérifications faites dans les trois fichiers.

**Ce que le classement montre au passage** : les six pages « mariage-*ville* » comptent entre
1 112 et 1 135 mots, les six pages « party-noel-corporatif-*ville* » entre 917 et 938, les neuf
pages « decoration-*ville* » entre 905 et 908. Chaque famille est le même texte décliné, à deux ou
trois mots près. Ce qui est décidé sur `/decoration-ballon/` et `/party-noel-corporatif/` se
transpose donc mécaniquement à une vingtaine de pages. Ce n'était pas demandé ici, mais c'est là
que se trouve le reste du gain.

## Comment les mots ont été comptés

Même méthode avant et après, pour que le pourcentage veuille dire quelque chose : tous les nœuds
de texte visibles du corps de la page, dans l'ordre d'affichage, hors scripts, styles, commentaires
HTML et adresses des liens. Les doublons de texte exact ne sont comptés qu'une fois par nœud.

Le chiffre de 1 393 mots annoncé pour `/location-chaises/` et celui de 1 338 obtenu ici décrivent
la même page ; l'écart vient de la méthode de comptage.

## Vérification

Les trois textes allégés passent un contrôle automatique
([`allege/outils/verifier.py`](../outils/README.md)) : **226 phrases sur 226 se retrouvent mot pour
mot dans la page d'origine**, et les trois longueurs annoncées correspondent au comptage. Le
contrôle accepte qu'une phrase soit le recollage de fragments voisins de la page — un titre que le
constructeur de pages coupe en trois éléments, un prix séparé de son unité — mais refuse toute
réécriture, tout changement d'ordre et tout mot ajouté. Éprouvé en modifiant volontairement un
prix, un pourcentage de dépôt et en ajoutant une phrase inventée : les trois ont été détectés.

## Les règles appliquées, dans l'ordre de priorité

1. **On coupe, on ne réécrit pas.** Chaque fait conservé est celui qui était là, mot pour mot :
   aucun prix reformulé, aucune mesure arrondie, aucune condition adoucie, aucune garantie résumée.
   Les seuls mots ajoutés sont des intertitres et un lien vers la page des conditions de location.
   Ils sont comptés dans les « après » et déclarés dans chaque fichier.
2. **Entre une formulation avantageuse et le silence, le silence.** Aucune coupe ne rend une page
   plus flatteuse qu'elle ne l'était.
3. **Ce qui ne se coupe jamais** : le prix, son unité et sa durée réelle ; le tarif de livraison
   au complet ; l'adresse de ramassage ; le dépôt et les modalités de paiement ; les limites de
   sécurité ; ce qui n'est pas fourni ; les frais possibles. Quand l'un de ces faits était absent
   de la page, il est déclaré absent — il n'a pas été ajouté.
4. **Les promesses d'installation non tranchées sont laissées et signalées**, jamais reformulées.
   Quand la même promesse revenait cinq fois, la plus large est conservée mot pour mot et les
   répétitions sont listées avec leur libellé exact.
5. **Interdit de sortir de la coupe** : « livraison incluse », « livraison gratuite », « montage
   compris », « annulation gratuite 7 jours », « report sans frais en cas de pluie »,
   « remplacement pendant l'événement ». Là où ces formulations existaient déjà et contredisaient
   un tarif ou une condition écrite ailleurs sur le site, elles sont retirées et signalées, pas
   corrigées.
6. **Le référencement** : les mots qui disent ce qu'on loue et où sont conservés. Chaque fichier en
   dresse la liste. Les mots absents d'une page (« Laval » sur `/location-chaises/`,
   « Sainte-Thérèse » sur `/party-noel-corporatif/`) n'y ont pas été ajoutés.

## Ce qui est signalé, non corrigé

Chaque fichier se termine par la liste des faits faux, contradictoires ou douteux trouvés en
coupant. Les trois plus lourds :

- **`/decoration-ballon/`** : « Chaque forfait comprend la livraison, l'installation et le
  démontage » cohabite avec le tarif de livraison, écrit deux fois sur la même page. Et la zone de
  service est annoncée à 20 km dans un endroit, à 40 km dans l'autre.
- **`/party-noel-corporatif/`** : « Tout inclus, sans supplément », avec « Livraison » en première
  pastille, cohabite avec « Livraison en sus : 100,00 $ jusqu'à 10 km… ». Le forfait comprend une
  ligne « Livraison + ramassage — 240 $ ». Et une garantie promet le remplacement d'un équipement
  pendant la soirée, ce que les conditions de location contredisent.
- **`/location-chaises/`** : les onze prix sont affichés « / jour » alors que la FAQ dit que la
  location standard couvre 48 heures. Le même inventaire est annoncé à 10 et à 11 modèles, et le
  compteur d'événements réussis affiche 0.
