# Relevé des boutons « Ajouter au panier » — fiches produits d'evenox.ca

**Relevé fait le 19 août 2026** (heures UTC), en une seule session, depuis un navigateur
Chrome piloté. **Constat seulement : rien n'a été modifié sur evenox.ca**, aucune session
n'a été ouverte, aucune commande passée, aucune coordonnée ni moyen de paiement saisi.

## Ce que j'ai trouvé

**24 boutons morts, répartis sur 13 fiches**, parmi les 30 fiches que j'ai pu visiter.

Ces 24 boutons se ressemblent tous : ils s'affichent normalement, ils portent le libellé
« Ajouter au panier », ils reçoivent bien le clic — et il ne part **aucune** requête réseau,
le panier ne change pas d'une ligne, aucun message n'apparaît à l'écran. La console, elle,
porte une erreur JavaScript non rattrapée.

L'identifiant qu'ils portent **existe** chez Booqable, mais il ne désigne pas ce que le
bouton sait traiter : il désigne un **article individuel** (`"type":"products"`, par exemple
« Mur à Champagne - Demi Cercle Blanc ») au lieu du **groupe de produits**
(`"type":"product_groups"`, par exemple « Chaises Chiavari »). Le partage est net et sans
exception sur les 39 boutons relevés :

| Ce que l'identifiant du bouton désigne au catalogue | Nombre de boutons | Résultat observé au clic |
|---|---|---|
| article individuel (`products`) | 24 | rien ne se passe, pour les 24 |
| groupe de produits (`product_groups`) | 7 | ajout au panier réussi, pour les 7 |
| identifiant texte (embed hérité, ex. `chaise-pliante`) | 8 | ajout au panier réussi, pour les 8 |

En tout : **39 boutons relevés sur 27 fiches**. À cela s'ajoutent **3 fiches sans aucun bouton
d'ajout** : ni composant, ni embed, rien dans la source. Ce ne sont donc pas des boutons morts,
c'est une absence de bouton.

## Le tableau

Une ligne par bouton. Les 24 boutons morts d'abord, puis les fiches sans bouton, puis les
boutons qui fonctionnent.

Un mot sur les verdicts. Aucun bouton n'est classé **MUET** : chaque bouton qui ne fait rien à
l'écran est accompagné d'une erreur de console, il est donc classé **ERREUR**, la catégorie la
plus précise des deux. Pour le visiteur, la différence est nulle — il clique, il ne se passe
rien, aucun message ne l'avertit. **AUCUN BOUTON** n'est pas un quatrième verdict de bouton :
c'est un constat sur la fiche, qui n'en porte aucun.

| Adresse | Texte du bouton | Identifiant porté | Ce que l'identifiant désigne au catalogue Booqable | Verdict observé | Erreur exacte |
|---|---|---|---|---|---|
| `/product/distributeur-de-boisson/` | « Ajouter au panier » | `cef25930-d5a2-44db-b225-05e9881cc498`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, article individuel (`products`)<br>« Distributeur de boisson » | **ERREUR** | console : `TypeError: Cannot read properties of undefined (reading 'id')` (relevée au chargement, une fois par bouton) ; au clic : aucune requête, panier inchangé, aucun message à l'écran |
| `/product/dunk-tank/` | « Ajouter au panier » | `2b8597bf-a35c-46c9-ac35-6a784659d86a`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, article individuel (`products`)<br>« Dunk Tank » | **ERREUR** | console : `TypeError: Cannot read properties of undefined (reading 'id')` (relevée au chargement, une fois par bouton) ; au clic : aucune requête, panier inchangé, aucun message à l'écran |
| `/product/fontaine-de-chocolat/` <br>_(bouton 1 sur 2)_ | « Ajouter au panier » | `9d4f0c35-e0a0-4729-866e-1c5f99408294`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, article individuel (`products`)<br>« Fontaine de Chocolat - 4 Étages (3-4kg chocolat au lait) » | **ERREUR** | console : `TypeError: Cannot read properties of undefined (reading 'id')` (relevée au chargement, une fois par bouton) ; au clic : aucune requête, panier inchangé, aucun message à l'écran |
| `/product/fontaine-de-chocolat/` <br>_(bouton 2 sur 2)_ | « Ajouter au panier » | `84677368-a46d-459d-81a9-72176ca6ae9b`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, article individuel (`products`)<br>« Fontaine de Chocolat - 7 Étages (6-7kg chocolat au lait) » | **ERREUR** | console : `TypeError: Cannot read properties of undefined (reading 'id')` (relevée au chargement, une fois par bouton) ; au clic : aucune requête, panier inchangé, aucun message à l'écran |
| `/product/generatrice-a-essence-location/` <br>_(bouton 1 sur 2)_ | « Ajouter au panier » | `11f45f8c-443a-40e1-8b4d-5f53fc5ca9ad`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, article individuel (`products`)<br>« Génératrice à Essence - 1200 watts » | **ERREUR** | console : `TypeError: Cannot read properties of undefined (reading 'id')` (relevée au chargement, une fois par bouton) ; au clic : aucune requête, panier inchangé, aucun message à l'écran |
| `/product/generatrice-a-essence-location/` <br>_(bouton 2 sur 2)_ | « Ajouter au panier » | `0ce22dc8-f439-4ebc-81cc-da9584be93b1`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, article individuel (`products`)<br>« Génératrice à Essence - 3650 watts » | **ERREUR** | console : `TypeError: Cannot read properties of undefined (reading 'id')` (relevée au chargement, une fois par bouton) ; au clic : aucune requête, panier inchangé, aucun message à l'écran |
| `/product/guess-who-geant/` <br>_(bouton 1 sur 2)_ | « Ajouter au panier » | `8191d780-0094-4fe3-9693-60717645db25`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, article individuel (`products`)<br>« Guess Who Géant - Régulier » | **ERREUR** | console : `TypeError: Cannot read properties of undefined (reading 'id')` (relevée au chargement, une fois par bouton) ; au clic : aucune requête, panier inchangé, aucun message à l'écran |
| `/product/guess-who-geant/` <br>_(bouton 2 sur 2)_ | « Ajouter au panier » | `66977f82-8734-41d6-8e8b-d393feba07fc`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, article individuel (`products`)<br>« Guess Who Géant - Personnalisation Complète » | **ERREUR** | console : `TypeError: Cannot read properties of undefined (reading 'id')` (relevée au chargement, une fois par bouton) ; au clic : aucune requête, panier inchangé, aucun message à l'écran |
| `/product/haut-parleur-speaker/` <br>_(bouton 1 sur 2)_ | « Ajouter au panier » | `a9bfe70c-c564-45fd-bc9f-6f0c0fb47917`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, article individuel (`products`)<br>« Haut Parleur / Speaker - 100W, ION Audio Total PA Apex » | **ERREUR** | console : `TypeError: Cannot read properties of undefined (reading 'id')` (relevée au chargement, une fois par bouton) ; au clic : aucune requête, panier inchangé, aucun message à l'écran |
| `/product/haut-parleur-speaker/` <br>_(bouton 2 sur 2)_ | « Ajouter au panier » | `7da35377-d009-4b6e-8256-3b3a565f8b13`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, article individuel (`products`)<br>« Haut Parleur / Speaker - 2500W, ALTO TS415 » | **ERREUR** | console : `TypeError: Cannot read properties of undefined (reading 'id')` (relevée au chargement, une fois par bouton) ; au clic : aucune requête, panier inchangé, aucun message à l'écran |
| `/product/lumiere-led/` | « Ajouter au panier » | `619538e1-b3df-4313-b0d3-1951c218ca94`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, article individuel (`products`)<br>« Lumière LED multi-couleur » | **ERREUR** | console : `TypeError: Cannot read properties of undefined (reading 'id')` (relevée au chargement, une fois par bouton) ; au clic : aucune requête, panier inchangé, aucun message à l'écran |
| `/product/machine-a-creme-glacee-molle/` | « Ajouter au panier » | `130274cc-bb61-4dba-a3e7-1cc7d77b6040`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, article individuel (`products`)<br>« Machine à Crème Glacée Molle » | **ERREUR** | console : `TypeError: Cannot read properties of undefined (reading 'id')` (relevée au chargement, une fois par bouton) ; au clic : aucune requête, panier inchangé, aucun message à l'écran |
| `/product/machine-hot-dog/` | « Ajouter au panier » | `c995e4bd-95a2-40e1-9d1b-31b6d4767012`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, article individuel (`products`)<br>« Machine Hot-Dog » | **ERREUR** | console : `TypeError: Cannot read properties of undefined (reading 'id')` (relevée au chargement, une fois par bouton) ; au clic : aucune requête, panier inchangé, aucun message à l'écran |
| `/product/mur-a-champagne/` <br>_(bouton 1 sur 7)_ | « Ajouter au panier » | `57646cd8-b00d-4c56-abc5-b7a2afc9194c`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, article individuel (`products`)<br>« Mur à Champagne - Mur à Champagne Demi Cercle Blanc » | **ERREUR** | console : `TypeError: Cannot read properties of undefined (reading 'id')` (relevée au chargement, une fois par bouton) ; au clic : aucune requête, panier inchangé, aucun message à l'écran |
| `/product/mur-a-champagne/` <br>_(bouton 2 sur 7)_ | « Ajouter au panier » | `85f8c5db-e3a7-4b8d-a374-6a47e9b8619f`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, article individuel (`products`)<br>« Mur à Champagne - Mur à Champagne Demi Cercle Crème » | **ERREUR** | console : `TypeError: Cannot read properties of undefined (reading 'id')` (relevée au chargement, une fois par bouton) ; au clic : aucune requête, panier inchangé, aucun message à l'écran |
| `/product/mur-a-champagne/` <br>_(bouton 3 sur 7)_ | « Ajouter au panier » | `ea0cadb0-6c23-4f31-99ec-a6571c469fa3`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, article individuel (`products`)<br>« Mur à Champagne - Mur à Champagne Demi Cercle Noire » | **ERREUR** | console : `TypeError: Cannot read properties of undefined (reading 'id')` (relevée au chargement, une fois par bouton) ; au clic : aucune requête, panier inchangé, aucun message à l'écran |
| `/product/mur-a-champagne/` <br>_(bouton 4 sur 7)_ | « Ajouter au panier » | `13762af1-8cad-4179-9c77-0dcd9123e3d4`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, article individuel (`products`)<br>« Mur à Champagne - Mur à Champagne Demi Cercle Brun » | **ERREUR** | console : `TypeError: Cannot read properties of undefined (reading 'id')` (relevée au chargement, une fois par bouton) ; au clic : aucune requête, panier inchangé, aucun message à l'écran |
| `/product/mur-a-champagne/` <br>_(bouton 5 sur 7)_ | « Ajouter au panier » | `b7a76863-b821-46e2-9cdb-2f65130f733d`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, article individuel (`products`)<br>« Mur à Champagne - Mur à Champagne Carré Blanc » | **ERREUR** | console : `TypeError: Cannot read properties of undefined (reading 'id')` (relevée au chargement, une fois par bouton) ; au clic : aucune requête, panier inchangé, aucun message à l'écran |
| `/product/mur-a-champagne/` <br>_(bouton 6 sur 7)_ | « Ajouter au panier » | `fafe7f95-c718-4031-b8c0-f01a49607428`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, article individuel (`products`)<br>« Mur à Champagne - Mur à Champagne Carré Crème » | **ERREUR** | console : `TypeError: Cannot read properties of undefined (reading 'id')` (relevée au chargement, une fois par bouton) ; au clic : aucune requête, panier inchangé, aucun message à l'écran |
| `/product/mur-a-champagne/` <br>_(bouton 7 sur 7)_ | « Ajouter au panier » | `40933909-a32a-44c0-886c-e1a4662ebe5a`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, article individuel (`products`)<br>« Mur à Champagne - Mur à Champagne Carré Noire » | **ERREUR** | console : `TypeError: Cannot read properties of undefined (reading 'id')` (relevée au chargement, une fois par bouton) ; au clic : aucune requête, panier inchangé, aucun message à l'écran |
| `/product/rechaud/` | « Ajouter au panier » | `32e70679-0de6-44b1-a0a6-84e021579fa4`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, article individuel (`products`)<br>« Réchaud » | **ERREUR** | console : `TypeError: Cannot read properties of undefined (reading 'id')` (relevée au chargement, une fois par bouton) ; au clic : aucune requête, panier inchangé, aucun message à l'écran |
| `/product/soccer-bulle/` <br>_(bouton 1 sur 2)_ | « Ajouter au panier » | `1455fa9c-b7ae-4137-ac07-5a89a00ec12e`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, article individuel (`products`)<br>« Soccer Bulle - Bulle Unitaire (Format Enfant) » | **ERREUR** | console : `TypeError: Cannot read properties of undefined (reading 'id')` (relevée au chargement, une fois par bouton) ; au clic : aucune requête, panier inchangé, aucun message à l'écran |
| `/product/soccer-bulle/` <br>_(bouton 2 sur 2)_ | « Ajouter au panier » | `fcffc889-2d25-40dc-bc22-580b517fc1d8`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, article individuel (`products`)<br>« Soccer Bulle - Bulle Unitaire (Format Adolescent et Adulte) » | **ERREUR** | console : `TypeError: Cannot read properties of undefined (reading 'id')` (relevée au chargement, une fois par bouton) ; au clic : aucune requête, panier inchangé, aucun message à l'écran |
| `/product/tabouret-de-bar-noire-en-metal/` | « Ajouter au panier » | `ac62383f-6afa-448a-8759-a6f94a0a7ea9`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, article individuel (`products`)<br>« Tabouret de Bar Noire en Métal » | **ERREUR** | console : `TypeError: Cannot read properties of undefined (reading 'id')` (relevée au chargement, une fois par bouton) ; au clic : aucune requête, panier inchangé, aucun message à l'écran |
| `/product/demande-en-mariage-lultime/` | — | — | — | **AUCUN BOUTON** | aucune erreur : il n'y a pas de bouton d'ajout sur la fiche |
| `/product/neon-marry-me/` | — | — | — | **AUCUN BOUTON** | aucune erreur : il n'y a pas de bouton d'ajout sur la fiche |
| `/product/plan-de-table-mariage-personalisable/` | — | — | — | **AUCUN BOUTON** | aucune erreur : il n'y a pas de bouton d'ajout sur la fiche |
| `/product/chaise-chiavari/` | « Ajouter au panier » | `e6563821-81b1-4e9c-a53c-419053e2ef4f`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, groupe de produits (`product_groups`)<br>« Chaises Chiavari » | **FONCTIONNE** | aucune |
| `/product/chaise-emmanuelle/` | « Ajouter au panier » | `8edaee87-62a7-4079-8218-b450650c4aa5`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, groupe de produits (`product_groups`)<br>« Chaise Emmanuelle » | **FONCTIONNE** | aucune |
| `/product/chaise-martha/` | « Ajouter au panier » | `c4450e55-ea58-4bcb-ae8b-00f6f89e192c`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, groupe de produits (`product_groups`)<br>« Chaise Martha » | **FONCTIONNE** | aucune |
| `/product/chaise-pliante/` <br>_(bouton 1 sur 2)_ | « Ajouter au panier » | `chaise-pliante`<br>(pas un UUID : identifiant texte, attribut `data-id`) | sans objet : identifiant texte, non interrogeable par UUID | **FONCTIONNE** | aucune |
| `/product/chaise-pliante/` <br>_(bouton 2 sur 2)_ | « Ajouter au panier » | `fd2aceec-7b25-4039-b6fa-6c5e11565e30`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, groupe de produits (`product_groups`)<br>« Chaise Pliante » | **FONCTIONNE** | aucune |
| `/product/extension-electrique-10-pieds/` | « Ajouter au panier » | `extension-electrique-10-pieds`<br>(pas un UUID : identifiant texte, attribut `data-id`) | sans objet : identifiant texte, non interrogeable par UUID | **FONCTIONNE** | aucune |
| `/product/fourchette-a-souper-2/` | « Ajouter au panier » | `fourchette-a-souper-6c404985-c795-4a47-87f1-2c558f7252c8`<br>(pas un UUID : identifiant texte, attribut `data-id`) | sans objet : identifiant texte, non interrogeable par UUID | **FONCTIONNE** | aucune |
| `/product/jeu-gonflable-minions/` | « Ajouter au panier » | `be8819bb-4087-4c42-8ff1-f1cc6193af85`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, groupe de produits (`product_groups`)<br>« Jeu Gonflable Minions » | **FONCTIONNE** | aucune |
| `/product/jeux-gonflable-forteresse/` | « Ajouter au panier » | `258b205a-1760-4927-ba78-c2545555903d`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, groupe de produits (`product_groups`)<br>« Jeux Gonflable Forteresse » | **FONCTIONNE** | aucune |
| `/product/jeux-gonflable-moyen-bouncer/` | « Ajouter au panier » | `jeux-gonflable-moyen-bouncer`<br>(pas un UUID : identifiant texte, attribut `data-id`) | sans objet : identifiant texte, non interrogeable par UUID | **FONCTIONNE** | aucune |
| `/product/lettre-illuminee-marquee-letter/` | « Ajouter au panier » | `marquee-letter`<br>(pas un UUID : identifiant texte, attribut `data-id`) | sans objet : identifiant texte, non interrogeable par UUID | **FONCTIONNE** | aucune |
| `/product/location-table-de-baby-foot/` | « Ajouter au panier » | `table-de-baby-foot`<br>(pas un UUID : identifiant texte, attribut `data-id`) | sans objet : identifiant texte, non interrogeable par UUID | **FONCTIONNE** | aucune |
| `/product/poids-de-support-pour-chapiteau-lot-de-4/` | « Ajouter au panier » | `2ee03bc8-380f-4e67-b848-47db2f87100d`<br>(UUID, attributs `product-id` et `data-evx-uuid`) | HTTP 200, groupe de produits (`product_groups`)<br>« Poids de Support Chapiteau » | **FONCTIONNE** | aucune |
| `/product/table-air-hockey-en-location/` | « Ajouter au panier » | `table-air-hockey`<br>(pas un UUID : identifiant texte, attribut `data-id`) | sans objet : identifiant texte, non interrogeable par UUID | **FONCTIONNE** | aucune |
| `/product/tic-tac-toe-geant/` | « Ajouter au panier » | `tic-tac-toe-geant`<br>(pas un UUID : identifiant texte, attribut `data-id`) | sans objet : identifiant texte, non interrogeable par UUID | **FONCTIONNE** | aucune |

## Ce qui s'est passé, clic par clic

La colonne se lit comme un compte rendu de ce qui a été enregistré dans le navigateur pendant
les 7 secondes qui ont suivi chaque clic.

| Adresse | Identifiant | Ce qui a été observé au clic |
|---|---|---|
| `/product/distributeur-de-boisson/` | `cef25930-d5a2-44db-b225-05e9881cc498` | clic reçu par le bouton (événements `pointerdown` et `click` enregistrés sur le déclencheur), puis aucune requête réseau, panier inchangé |
| `/product/dunk-tank/` | `2b8597bf-a35c-46c9-ac35-6a784659d86a` | clic reçu par le bouton (événements `pointerdown` et `click` enregistrés sur le déclencheur), puis aucune requête réseau, panier inchangé |
| `/product/fontaine-de-chocolat/` | `9d4f0c35-e0a0-4729-866e-1c5f99408294` | clic reçu par le bouton (événements `pointerdown` et `click` enregistrés sur le déclencheur), puis aucune requête réseau, panier inchangé |
| `/product/fontaine-de-chocolat/` | `84677368-a46d-459d-81a9-72176ca6ae9b` | clic reçu par le bouton (événements `pointerdown` et `click` enregistrés sur le déclencheur), puis aucune requête réseau, panier inchangé |
| `/product/generatrice-a-essence-location/` | `11f45f8c-443a-40e1-8b4d-5f53fc5ca9ad` | clic reçu par le bouton (événements `pointerdown` et `click` enregistrés sur le déclencheur), puis aucune requête réseau, panier inchangé |
| `/product/generatrice-a-essence-location/` | `0ce22dc8-f439-4ebc-81cc-da9584be93b1` | clic reçu par le bouton (événements `pointerdown` et `click` enregistrés sur le déclencheur), puis aucune requête réseau, panier inchangé |
| `/product/guess-who-geant/` | `8191d780-0094-4fe3-9693-60717645db25` | clic reçu par le bouton (événements `pointerdown` et `click` enregistrés sur le déclencheur), puis aucune requête réseau, panier inchangé |
| `/product/guess-who-geant/` | `66977f82-8734-41d6-8e8b-d393feba07fc` | clic reçu par le bouton (événements `pointerdown` et `click` enregistrés sur le déclencheur), puis aucune requête réseau, panier inchangé |
| `/product/haut-parleur-speaker/` | `a9bfe70c-c564-45fd-bc9f-6f0c0fb47917` | clic reçu par le bouton (événements `pointerdown` et `click` enregistrés sur le déclencheur), puis aucune requête réseau, panier inchangé |
| `/product/haut-parleur-speaker/` | `7da35377-d009-4b6e-8256-3b3a565f8b13` | clic reçu par le bouton (événements `pointerdown` et `click` enregistrés sur le déclencheur), puis aucune requête réseau, panier inchangé |
| `/product/lumiere-led/` | `619538e1-b3df-4313-b0d3-1951c218ca94` | clic reçu par le bouton (événements `pointerdown` et `click` enregistrés sur le déclencheur), puis aucune requête réseau, panier inchangé |
| `/product/machine-a-creme-glacee-molle/` | `130274cc-bb61-4dba-a3e7-1cc7d77b6040` | clic reçu par le bouton (événements `pointerdown` et `click` enregistrés sur le déclencheur), puis aucune requête réseau, panier inchangé |
| `/product/machine-hot-dog/` | `c995e4bd-95a2-40e1-9d1b-31b6d4767012` | clic reçu par le bouton (événements `pointerdown` et `click` enregistrés sur le déclencheur), puis aucune requête réseau, panier inchangé |
| `/product/mur-a-champagne/` | `57646cd8-b00d-4c56-abc5-b7a2afc9194c` | clic reçu par le bouton (événements `pointerdown` et `click` enregistrés sur le déclencheur), puis aucune requête réseau, panier inchangé |
| `/product/mur-a-champagne/` | `85f8c5db-e3a7-4b8d-a374-6a47e9b8619f` | clic reçu par le bouton (événements `pointerdown` et `click` enregistrés sur le déclencheur), puis aucune requête réseau, panier inchangé |
| `/product/mur-a-champagne/` | `ea0cadb0-6c23-4f31-99ec-a6571c469fa3` | clic reçu par le bouton (événements `pointerdown` et `click` enregistrés sur le déclencheur), puis aucune requête réseau, panier inchangé |
| `/product/mur-a-champagne/` | `13762af1-8cad-4179-9c77-0dcd9123e3d4` | clic reçu par le bouton (événements `pointerdown` et `click` enregistrés sur le déclencheur), puis aucune requête réseau, panier inchangé |
| `/product/mur-a-champagne/` | `b7a76863-b821-46e2-9cdb-2f65130f733d` | clic reçu par le bouton (événements `pointerdown` et `click` enregistrés sur le déclencheur), puis aucune requête réseau, panier inchangé |
| `/product/mur-a-champagne/` | `fafe7f95-c718-4031-b8c0-f01a49607428` | clic reçu par le bouton (événements `pointerdown` et `click` enregistrés sur le déclencheur), puis aucune requête réseau, panier inchangé |
| `/product/mur-a-champagne/` | `40933909-a32a-44c0-886c-e1a4662ebe5a` | clic reçu par le bouton (événements `pointerdown` et `click` enregistrés sur le déclencheur), puis aucune requête réseau, panier inchangé |
| `/product/rechaud/` | `32e70679-0de6-44b1-a0a6-84e021579fa4` | clic reçu par le bouton (événements `pointerdown` et `click` enregistrés sur le déclencheur), puis aucune requête réseau, panier inchangé |
| `/product/soccer-bulle/` | `1455fa9c-b7ae-4137-ac07-5a89a00ec12e` | clic reçu par le bouton (événements `pointerdown` et `click` enregistrés sur le déclencheur), puis aucune requête réseau, panier inchangé |
| `/product/soccer-bulle/` | `fcffc889-2d25-40dc-bc22-580b517fc1d8` | clic reçu par le bouton (événements `pointerdown` et `click` enregistrés sur le déclencheur), puis aucune requête réseau, panier inchangé |
| `/product/tabouret-de-bar-noire-en-metal/` | `ac62383f-6afa-448a-8759-a6f94a0a7ea9` | clic reçu par le bouton (événements `pointerdown` et `click` enregistrés sur le déclencheur), puis aucune requête réseau, panier inchangé |
| `/product/chaise-chiavari/` | `e6563821-81b1-4e9c-a53c-419053e2ef4f` | clic → `POST /api/boomerang/cart_bookings` HTTP 200, la réponse renvoie le panier mis à jour, total augmenté (nombre de lignes non relu à ce passage) |
| `/product/chaise-emmanuelle/` | `8edaee87-62a7-4079-8218-b450650c4aa5` | clic → `POST /api/boomerang/cart_bookings` HTTP 200, panier à 5 ligne(s) après le clic |
| `/product/chaise-martha/` | `c4450e55-ea58-4bcb-ae8b-00f6f89e192c` | clic → `POST /api/boomerang/cart_bookings` HTTP 200, panier à 3 ligne(s) après le clic |
| `/product/chaise-pliante/` | `chaise-pliante` | clic → `POST /api/boomerang/cart_bookings` HTTP 200, panier 0 → 1 ligne(s) |
| `/product/chaise-pliante/` | `fd2aceec-7b25-4039-b6fa-6c5e11565e30` | clic → `POST /api/boomerang/cart_bookings` HTTP 200, panier 0 → 1 ligne(s) |
| `/product/extension-electrique-10-pieds/` | `extension-electrique-10-pieds` | clic → `POST /api/boomerang/cart_bookings` HTTP 200, panier à 4 ligne(s) après le clic |
| `/product/fourchette-a-souper-2/` | `fourchette-a-souper-6c404985-c795-4a47-87f1-2c558f7252c8` | clic → `POST /api/boomerang/cart_bookings` HTTP 200, panier à 1 ligne(s) après le clic, variante choisie avant le clic : « Or » |
| `/product/jeu-gonflable-minions/` | `be8819bb-4087-4c42-8ff1-f1cc6193af85` | clic → `POST /api/boomerang/cart_bookings` HTTP 200, panier à 8 ligne(s) après le clic |
| `/product/jeux-gonflable-forteresse/` | `258b205a-1760-4927-ba78-c2545555903d` | clic → `POST /api/boomerang/cart_bookings` HTTP 200, panier à 6 ligne(s) après le clic |
| `/product/jeux-gonflable-moyen-bouncer/` | `jeux-gonflable-moyen-bouncer` | clic → `POST /api/boomerang/cart_bookings` HTTP 200, panier à 11 ligne(s) après le clic |
| `/product/lettre-illuminee-marquee-letter/` | `marquee-letter` | clic → `POST /api/boomerang/cart_bookings` HTTP 200, la réponse renvoie le panier mis à jour, total augmenté (nombre de lignes non relu à ce passage), variante choisie avant le clic : « A » |
| `/product/location-table-de-baby-foot/` | `table-de-baby-foot` | clic → `POST /api/boomerang/cart_bookings` HTTP 200, panier à 9 ligne(s) après le clic, variante choisie avant le clic : « Résidentiel » |
| `/product/poids-de-support-pour-chapiteau-lot-de-4/` | `2ee03bc8-380f-4e67-b848-47db2f87100d` | clic → `POST /api/boomerang/cart_bookings` HTTP 200, panier à 2 ligne(s) après le clic |
| `/product/table-air-hockey-en-location/` | `table-air-hockey` | clic → `POST /api/boomerang/cart_bookings` HTTP 200, panier à 10 ligne(s) après le clic, variante choisie avant le clic : « 7 pieds (résidentiel) » |
| `/product/tic-tac-toe-geant/` | `tic-tac-toe-geant` | clic → `POST /api/boomerang/cart_bookings` HTTP 200, panier à 7 ligne(s) après le clic |

## Comment j'ai mesuré, et ce qui rend ce relevé opposable

Le site tourne sur WordPress (thème Divi, WooCommerce 11.0.1) et le panier n'est pas celui de
WooCommerce : c'est Booqable, chargé par
`https://80d162e7-40ac-434b-8da4-b2fd5bc86599.assets.booqable.com/v2/booqable.js`, qui parle
à la boutique du marchand sur `evenox.booqableshop.com`. Deux constructions de bouton
cohabitent sur les fiches :

- l'**embed hérité** `<div class="booqable-product-button" data-id="...">`, dont
  l'identifiant est un identifiant texte (`chaise-pliante`, `marquee-letter`) ;
- le **composant** `<bq-product-button product-id="UUID" data-evx-uuid="UUID">`, qui rend son
  bouton dans un shadow DOM ouvert.

Quatre précautions expliquent pourquoi je donne ces verdicts comme des faits et non comme des
impressions.

**1. J'ai cliqué pour de vrai, et j'ai vérifié que le clic arrivait.** Le clic est un clic de
souris aux coordonnées du centre du bouton, après l'avoir ramené à l'écran. Comme le bouton du
composant vit dans un shadow DOM, j'ai posé un témoin (écouteurs `pointerdown` et `click` en
phase de capture) **sur le déclencheur lui-même**, et j'ai fait un test d'impact traversant les
shadow roots pour savoir ce qui se trouvait réellement sous le curseur. Sur les 24 boutons
morts, le témoin a enregistré le clic et le test d'impact a confirmé que l'élément visé était
bien le bouton : ils ne sont pas morts parce que j'aurais cliqué à côté.

**2. Le panier a été lu à la source, pas deviné à l'écran.** Avant et après chaque clic, j'ai
interrogé le panier du marchand
(`GET evenox.booqableshop.com/api/1/cart?...`) et compté ses lignes. Un bouton n'est déclaré
`FONCTIONNE` que si deux choses sont vraies en même temps : un `POST /api/boomerang/cart_bookings`
revenu en HTTP 200, **et** une ligne de plus dans le panier. Exception à signaler : pour les
deux premières fiches observées, `/product/lettre-illuminee-marquee-letter/` et
`/product/chaise-chiavari/`, ma sonde de panier échouait encore ; la preuve tient alors au
panier que la réponse du `POST` renvoie elle-même, dont le total est passé de zéro à un montant
non nul pour la première et a augmenté pour la seconde. Le tableau le dit ligne par ligne
plutôt que de lisser la différence.

**3. Deux passages indépendants.** Le premier passage a relevé et cliqué ; le deuxième a
refait, avec les témoins de réception, les 13 fiches en défaut et les 3 fiches sans bouton.
Les deux passages donnent les mêmes résultats, y compris la même erreur de console au même
endroit.

**4. Une reprise finale, côte à côte, en images.** Pour montrer la différence telle qu'un
visiteur la vivrait, j'ai refait une dernière fois deux fiches déjà visitées, cette fois sans
bloquer les images : `/product/mur-a-champagne/` (bouton mort) et `/product/chaise-chiavari/`
(bouton fonctionnel). Sur la première, le panier reste à 0 ligne et 0 au total avant comme
après le clic, la seule requête partie est une relecture du panier, et la console porte
`TypeError: Cannot read properties of undefined (reading 'id')`. Sur la seconde, le clic
déclenche `POST /api/boomerang/cart_bookings` en HTTP 200, le total du panier passe de 0 à un
montant non nul, le panier « MA COMMANDE » s'ouvre avec l'article dedans, et Booqable enchaîne
en demandant le mode de récupération et les dates. **Je me suis arrêté là** : aucune date
renseignée, aucun passage en caisse.

Un détail de méthode qui a son importance. Le navigateur utilisé est Chrome 148 en mode
« headless », mais il annonce un agent utilisateur de Chrome ordinaire, et ce n'est pas un
maquillage gratuit : lors d'un essai fait **sans** en-tête d'agent utilisateur explicite — donc
avec la mention `HeadlessChrome` par défaut — la fiche `/product/chaise-chiavari/` est revenue
en HTTP 200 mais **sans aucun élément `bq-*` dans le DOM**, et bien plus légère. Toutes les
mesures retenues ici ont donc été faites avec un agent utilisateur de Chrome ordinaire, celui
d'un visiteur. Pourquoi la page diffère selon l'agent annoncé : **non établi**, je ne l'ai pas
cherché, cela sortait du mandat.

Le choix des 30 fiches, lui, n'a rien d'un tirage au sort : `product-sitemap.xml` déclare
**246 fiches produits**, j'ai lu leur contenu par l'API publique de WooCommerce
(`/wp-json/wc/store/v1/products`) pour repérer celles qui portent un bouton, puis j'ai vérifié
au catalogue Booqable les 138 UUID distincts cités dans ces fiches, afin de visiter en priorité
celles qui avaient le plus de chances d'être en défaut. Deux limites à dire tout de suite :
cette API renvoie le contenu filtré, et elle **supprime les éléments personnalisés** `bq-*` —
la source vue par l'API est donc trompeuse, ce qui est exactement la raison pour laquelle seul
le comportement observé dans le navigateur compte ici. Et le critère qui a fini par tout
expliquer (article individuel contre groupe de produits) n'est pas celui qui m'a servi à
choisir : ma sélection n'était qu'une heuristique.

### Rythme tenu

Le pare-feu de l'hébergeur ayant banni une adresse IP le jour même, chaque requête vers
`evenox.ca` a été mise dans une file unique et relâchée **une à la fois, avec au moins 1,2 s
d'écart**, jamais en parallèle. Images, polices et vidéos ont été bloquées pour ne pas les
demander. Les requêtes vers les CDN tiers (`booqable.com`, `booqableshop.com`, Google) ne
passent pas par cette file : elles ne sont pas servies par l'hébergeur d'evenox.ca.

Total vers `evenox.ca` : **1 829 requêtes par le navigateur** (80 + 1 024 + 596 + 41 selon les
journaux des quatre passages d'observation, plus 88 pour la reprise en images) et une dizaine
en ligne de commande. **Aucun 403 n'a été rencontré.** La page d'accueil a été vérifiée en
HTTP 200 au début du relevé, en cours de route et à la fin.

### Traces laissées, puisqu'il y en a

Cliquer « Ajouter au panier » a une conséquence : **17 ajouts ont réussi** (16 pendant les
passages d'observation, 1 pendant la reprise en images), répartis sur **5 paniers temporaires
anonymes** de Booqable, créés par le navigateur au fil des passages.
Ce sont des paniers de session, pas des réservations : aucune commande n'a été créée, aucun
compte utilisé, aucune coordonnée ni donnée de paiement saisie, et je n'ai jamais atteint la
caisse.

## Ce qui n'est pas la cause, même si ça y ressemble

Deux signaux apparaissent dans la console ou le réseau et n'expliquent rien. Je les écris pour
qu'ils ne fassent pas perdre de temps :

- **`HTTP 404` sur `/api/boomerang/product_groups/<UUID>/recommendations`**, avec la réponse
  `{"errors":[{"code":"resources_not_found","status":"404","title":"Resource(s) not found"}]}`.
  Ce 404 se produit bien sur les 13 fiches en défaut — mais il se produit **aussi** sur
  `/product/poids-de-support-pour-chapiteau-lot-de-4/`, dont le bouton fonctionne et ajoute au
  panier. Il ne distingue donc pas les deux cas.
- **`[cartstack] Timeout waiting for cartstack_updatecart`**, émis par `booqable.js`. On le
  trouve sur les fiches en défaut **comme** sur les fiches qui fonctionnent, y compris juste
  avant un ajout réussi.

Le seul signal de console qui accompagne exactement les 24 boutons morts, et aucun des 15
boutons qui fonctionnent, est l'erreur JavaScript non rattrapée
`TypeError: Cannot read properties of undefined (reading 'id')`, levée une fois par bouton au
chargement de la fiche.

## Ce que je n'ai pas pu tester, et pourquoi

**Les 216 autres fiches produits.** Le budget était de 30 pages et je l'ai tenu : 30 fiches
`/product/` visitées sur les 246 déclarées. **L'ampleur réelle du problème sur tout le
catalogue reste donc non établie**, et ce relevé ne prétend pas être la liste complète. Il
donne en revanche un critère mécanique pour la dresser fiche par fiche : lire l'UUID porté par
`bq-product-button`, puis demander au catalogue
`GET https://evenox.booqableshop.com/api/boomerang/items/<UUID>` si le `type` renvoyé est
`products` (bouton mort) ou `product_groups` (bouton fonctionnel). Je n'ai pas appliqué ce
critère aux 216 fiches restantes.

**La suite du tunnel.** Panier → réservation → paiement : rien de tout cela n'a été testé, et
c'était exclu du mandat. Qu'un ajout réussisse ne dit donc rien de ce qui se passe ensuite.

**Un seul navigateur, un seul format.** Chrome 148 en mode « headless », fenêtre 1440 × 1200,
images et polices bloquées. Pas de test sur un vrai téléphone, ni sur Safari ou Firefox. Le
comportement sur mobile n'est pas établi.

**Les dates de location.** Je n'ai renseigné aucune date au calendrier. Ce qui est mesuré :
les 15 boutons qui fonctionnent ont fonctionné **sans** date. Ce qui n'est pas mesuré : l'effet
qu'aurait une date renseignée sur les 24 boutons morts.

**Le côté administration.** Je n'ai aucun accès à WordPress, à Divi ni au compte Booqable. Je
ne peux donc pas dire quel gabarit pose ces UUID, qui les a posés, ni depuis quand ces boutons
sont morts. **Depuis quand : non établi.**

**Le manque à gagner.** Combien de ventes ces 24 boutons ont coûté : **non établi**. Cela
demanderait des données d'audience et de conversion que je n'ai pas relevées et auxquelles je
n'ai pas accès.

**Un bouton a dû être reprisé.** Sur `/product/chaise-pliante/`, le second bouton a d'abord
donné un essai **non concluant** : le test d'impact a montré que le clic était intercepté par
`div.rental-options-backdrop.is-visible`, un voile ouvert par le clic précédent sur le premier
bouton de la même fiche. Repris seul, sur une page fraîche, ce bouton **fonctionne** (`POST
cart_bookings` en HTTP 200, panier de 0 à 1 ligne). C'est ce second essai qui est retenu au
tableau. Aucun autre bouton n'a été gêné de cette façon : sur les autres fiches à plusieurs
boutons, aucun ajout n'avait réussi, donc aucun voile ne s'était ouvert.

**Les 3 fiches sans bouton.** Sur `/product/plan-de-table-mariage-personalisable/`,
`/product/neon-marry-me/` et `/product/demande-en-mariage-lultime/`, la source ne contient ni
`booqable-product-button` ni `bq-product-button` : il n'y a pas de bouton d'ajout à tester. Les
trois portent un calendrier Booqable et un formulaire de demande. **Si un bouton devrait s'y
trouver, je ne peux pas le dire** : cela relève d'une intention commerciale, pas d'une mesure.

**Aucun prix, aucune mesure, aucun délai** n'est repris dans ce document. Les montants que
l'API a renvoyés pendant les essais ne sont pas des prix publics vérifiés, et je ne les
transforme pas en tarifs.

## Les 13 fiches où j'ai relevé au moins un bouton mort

- `https://evenox.ca/product/distributeur-de-boisson/`
- `https://evenox.ca/product/dunk-tank/`
- `https://evenox.ca/product/fontaine-de-chocolat/`
- `https://evenox.ca/product/generatrice-a-essence-location/`
- `https://evenox.ca/product/guess-who-geant/`
- `https://evenox.ca/product/haut-parleur-speaker/`
- `https://evenox.ca/product/lumiere-led/`
- `https://evenox.ca/product/machine-a-creme-glacee-molle/`
- `https://evenox.ca/product/machine-hot-dog/`
- `https://evenox.ca/product/mur-a-champagne/`
- `https://evenox.ca/product/rechaud/`
- `https://evenox.ca/product/soccer-bulle/`
- `https://evenox.ca/product/tabouret-de-bar-noire-en-metal/`

## Pièces jointes

- `releve/observations.json` — le relevé brut, bouton par bouton : identifiant, ce qu'il
  désigne au catalogue, témoin de réception du clic, requêtes observées, état du panier avant
  et après.
- `releve/reprise-en-images.json` — ce qui a été mesuré pendant la reprise finale des deux
  fiches mises en regard : état du panier avant et après, requêtes parties au clic, erreurs.
- `releve/outils/audit.js` — le script d'observation exécuté, avec sa file d'attente à une
  requête pour `evenox.ca`, ses témoins de clic et son test d'impact traversant le shadow DOM.
  Il est là pour que le relevé soit refaisable à l'identique, y compris sur les 216 fiches
  restantes.
