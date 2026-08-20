# Lot 3 — alléger trois fiches lourdes

Arbitrage d'Alexandre du 20 août 2026 : « il y a vraiment trop de matériel, il faudrait tout
simplifier — mais faut pas trop en faire non plus. »

Propositions seulement. **Rien n'a été modifié sur evenox.ca** : les trois fiches ont été lues
(HTTP 200, une requête à la fois), et l'allègement est reconstruit en local pour être mesuré.

## Les trois fiches

| Fiche | Avant | Après | Retiré |
|---|---|---|---|
| [Jeu de Tétris Géant](https://evenox.ca/product/jeu-de-tetris-geant/) | 2 924 mots | 628 mots | **79 %** |
| [Jeu pong géant](https://evenox.ca/product/jeu-pong-geant/) | 2 791 mots | 708 mots | **75 %** |
| [Basket Pong](https://evenox.ca/product/basket-pong/) | 2 675 mots | 704 mots | **74 %** |
| _Référence : [chaise pliante](https://evenox.ca/product/chaise-pliante/)_ | _759 mots_ | — | — |

## Méthode

- **Comptage.** Mots du contenu de la fiche (le bloc `.evx-page`), en excluant la navigation
  Divi et le pied de page, qui ne sont pas sur la fiche. La chaise pliante donne 759 mots avec
  ce compteur (796 avec celui d'Alexandre : même texte, compteur un peu différent). Les trois
  fiches sont comptées avec le même compteur, avant et après, donc les pourcentages tiennent.
- **On coupe.** Chaque phrase conservée est celle qui était là, mot pour mot. Quand une phrase
  a été raccourcie, les mots qui restent sont dans leur ordre d'origine ; aucune tournure n'a
  été refaite. Quelques phrases ont été **déplacées** (d'une section supprimée vers le
  tableau) : c'est signalé chaque fois, et le texte déplacé est intact.
- **Rien d'ajouté.** Aucun chiffre, aucune mesure, aucune mention de livraison n'a été
  introduite. Voir la note sur la livraison au bas du document.
- **Premier écran.** Mesuré dans Chrome à 375 × 667 px (iPhone SE), en position réelle sur la
  page, en-tête Divi comprise. L'« avant » et l'« après » sont mesurés avec le même outil, sur
  la page réelle et sur sa reconstruction locale — vérifié : la copie locale donne les mêmes
  positions au pixel que la page en ligne. Les deux widgets Booqable, qui ne s'exécutent pas
  hors du site, sont remplacés par des blocs de la **hauteur mesurée en ligne** : 72 px pour le
  sélecteur de dates, 150 px pour le bloc d'ajout au panier, dont les 52 px du bas sont le
  bouton lui-même. Leur texte n'est pas compté dans les mots.
- **Une contrainte déjà écrite dans le code du site.** La feuille de style des fiches porte
  cette note : « MOBILE (< 700 px) LA GALERIE PASSE SOUS LA CARTE DE RÉSERVATION. Contrainte de
  référence jamais négociée : à 375 px le prix doit rester dans les 700 PREMIERS PIXELS. » Les
  trois fiches la violent aujourd'hui (prix à 895, 964 et 905 px).

---

# 1. Jeu de Tétris Géant

**Adresse.** https://evenox.ca/product/jeu-de-tetris-geant/
**Avant : 2 924 mots.** → **Après : 628 mots. 79 % retiré.**

C'est la fiche la plus lourde des trois, et c'est aussi celle où presque rien n'est établi :
ni la taille, ni le poids, ni le nombre de pièces, ni même si le jeu est géant. L'essentiel du
volume était consacré à répéter cette absence, sur cinq blocs différents. Elle est maintenant
écrite une fois, dans le tableau.

## 1.1 Le texte allégé, prêt à relire

> ### Jeu de Tétris Géant
>
> **Nous n'avons aucune photo de ce jeu**, et le mot « géant » du titre n'est établi nulle part
> chez nous.
>
> ---
> **$50.00** / jeu · 2 Jours
>
> `[ compteur de quantité + Ajouter au panier — widget Booqable ]`
>
> **Prix pour ramassage à notre entrepôt de Sainte-Thérèse.** Le montage n'est pas compris.
>
> Vos dates — on affiche ce qui est libre
>
> `[ sélecteur de dates ]`
>
> **Réservez avec 20 % du total.** Le solde au ramassage.
>
> Dollars canadiens, taxes en sus. Paiement par carte de crédit seulement, en ligne.
>
> [Politique et conditions de location](https://evenox.ca/conditions-de-location-evenox/)
>
> Le tarif selon la durée — 2 jours : tarif de base · 3 jours : × 1,5 · 1 semaine : × 2 ·
> 4 semaines : × 4
> ---
>
> ### Ce qui encadre l'usage
>
> - **Un adulte surveille, en tout temps**
> - **Les limites d'âge et de nombre s'appliquent** — Pour cet article, **aucune limite d'âge
>   et aucun nombre de joueurs ne sont écrits nulle part dans notre catalogue**. Nous n'en
>   inventerons pas : demandez-les-nous au 514-559-1893.
> - **Le jeu revient sec**
> - **On compte le jeu devant vous, au départ et au retour** — Vous signez le décompte.
> - **Une pièce manquante se facture** — « Un bris ou une pièce manquante : coût de réparation,
>   ou valeur de remplacement si l'article n'est pas réparable ». « L'usure normale ne se
>   facture jamais. »
> - **La protection facultative ne couvre pas les pièces non retournées** — La protection bris
>   accidentel coûte 8 % du montant de la location et s'ajoute avant le ramassage. Nos
>   conditions listent ce qu'elle ne couvre pas : « la négligence, le vol, la perte, les pièces
>   non retournées, les frais de retard ».
>
> ### Ce qui est vérifié
>
> | Caractéristique | Ce qui est vérifié |
> |---|---|
> | Article | Jeux de Tétris — c'est le nom exact au catalogue de location, **sans le mot « géant »**. Un seul article, sans variante. |
> | Jeu géant ou jeu de table | **Non établi** — le titre de cette fiche dit « géant », **le catalogue ne le dit pas**, et **la seule image de notre dossier montre un jeu de table du commerce**. Le mot « géant » n'apparaît ni dans son nom, ni dans son code interne, ni dans son adresse, ni dans sa description. Appelez le 514-559-1893 : on va le monter et le mesurer. |
> | Le nombre de pièces | **Non établi** — notre catalogue ne décrit pas le contenu de cet article. **Aucune pièce, aucun bloc et aucun dé n'existent séparément dans tout le catalogue, et aucun forfait n'en ajoute.** Le décompte signé au ramassage fait foi. |
> | La hauteur atteinte | **Non établie** — rien n'est mesuré à l'entrepôt. |
> | Les dimensions d'une pièce et l'espace de jeu | Longueur et épaisseur d'une pièce, emprise au sol de la base, dégagement à prévoir autour : **rien n'est mesuré à l'entrepôt**. |
> | Le matériau | Bois, plastique, mousse : **notre catalogue ne l'écrit pas**, et nous n'avons aucune photo prise chez nous pour le voir. |
> | L'usage à l'extérieur | **Notre catalogue ne tranche ni le vent, ni la pluie, ni le type de sol pour cet article**. |
> | Ce dans quoi le jeu repart | Sac, boîte, caisse : notre catalogue n'en fait aucune mention et aucune photo ne le montre. |
> | Marque lue à l'agrandissement | TETRIS TUMBLE — lue sur le socle, sur le seul fichier du dossier. Aucun nom de fabricant de matériel événementiel, aucun numéro de modèle, aucune dimension. |
> | Tarif | 50,00 $ pour 48 h · aucun rabais de quantité |
> | Ramassage | Entrepôt de Sainte-Thérèse — 215, boulevard René-A.-Robert |
>
> ### Souvent loué avec
>
> Un seul ramassage, un seul dépôt.
>
> Jenga Géant 40,00 $ · 48 h — Cornhole 40,00 $ · 48 h — Basket Pong 80,00 $ · 48 h —
> Tug of War 20,00 $ · 48 h
>
> ### Une question avant de réserver ?
>
> Deux champs obligatoires, deux facultatifs. Pour réserver, tout se passe en haut de page.
>
> _(formulaire : nom, téléphone, courriel, date de l'événement, message)_
>
> Pour tout ce qui n'est pas écrit ici, il y a le téléphone. 514-559-1893

## 1.2 Les faits conservés

| | |
|---|---|
| **Prix** | 50,00 $ / jeu, affiché dans la carte et redit une fois au tableau |
| **Durée réelle** | 48 h (« 2 Jours » au sélecteur). Au-delà : 3 jours × 1,5 · 1 semaine × 2 · 4 semaines × 4 |
| **Dépôt** | 20 % du total, solde au ramassage, taxes en sus, carte de crédit seulement, en ligne |
| **Ramassage** | Entrepôt de Sainte-Thérèse — 215, boulevard René-A.-Robert |
| **Sécurité** | Adulte en tout temps · limites d'âge, de poids et de nombre à respecter, **et aucune n'est écrite pour cet article** |
| **Ce qui n'est PAS fourni** | Le montage. Aucune pièce, aucun bloc, aucun dé ne s'ajoutent à la commande |
| **Frais possibles** | Pièce manquante ou bris : réparation ou valeur de remplacement · l'usure normale ne se facture jamais · protection bris 8 %, qui ne couvre ni la négligence, ni le vol, ni la perte, ni les pièces non retournées, ni les frais de retard |
| **Retour** | Le jeu revient sec · décompte signé au départ et au retour |
| **Dimensions / poids** | **Aucune : rien n'est mesuré.** Les cinq lignes qui le disent sont conservées (jeu géant ou de table, nombre de pièces, hauteur, dimensions d'une pièce et espace, matériau) |
| **Lien** | Politique et conditions de location |
| **Compléments** | 4 (Jenga Géant, Cornhole, Basket Pong, Tug of War) |

## 1.3 Ce qui est coupé, par motif

**Dit deux fois ou plus (1 060 mots).**
- La section « Le point le plus important » (251 mots) : le titre « géant » non confirmé était
  déjà dans le tableau. Sa seule phrase unique (« Le mot “géant” n'apparaît ni dans son nom, ni
  dans son code interne, ni dans son adresse, ni dans sa description ») a été **déplacée** dans
  la ligne du tableau.
- La liste « Ce qui n'est pas relevé » (388 mots, 8 points) : cinq de ses huit points
  répétaient une ligne du tableau. Les quatre faits qui n'étaient qu'ici (dimensions d'une
  pièce et espace de jeu, matériau, usage à l'extérieur, ce dans quoi le jeu repart) sont
  devenus quatre lignes du tableau, texte intact.
- La section « Quatre questions / Ce qu'il faut demander » (593 mots) : les quatre réponses
  reprenaient le tableau, la carte de réservation et le bloc sécurité. Le paiement d'aujourd'hui
  (20 %, carte de crédit) et les multiplicateurs de durée restent dans la carte.
- Dans la carte : « Le total exact s'affiche au panier, avant tout engagement. »

**Les sur-titres (« ça fait trop de titres »).** « Avant de réserver », « La fiche », « Ce qui
n'est pas relevé », « À ajouter » : quatre étiquettes posées au-dessus d'un vrai titre.

**L'attribution des conditions.** Les six lignes « Source : Conditions de location d'Évenox,
relues le 18 août 2026 », la phrase d'introduction du bloc sécurité, et les « Nos conditions
disent : » devant chaque citation. Le **lien** vers les conditions reste dans la carte.

**Le matériel de production photo (334 mots).** L'encadré « Aucune photo de ce jeu », la légende
du fichier écarté, les six vignettes « À produire » et la consigne de tournage (cadrage 1:1,
1200 px, fond blanc). C'est une commande de travail pour le photographe, publiée sur la fiche
client. Le fait — nous n'avons pas de photo — reste dans la phrase sous le titre.

**La méthode interne (159 + 61 mots).** Le paragraphe qui explique le classement des
compléments (42 lignes de location, 11 commandes distinctes, égalités départagées par date) et
la ligne de tableau « Constance du tarif » (37 locations sur 37, les 42 lignes relues une par
une). Le prix est affiché ; son historique d'audit n'est pas un fait produit.

**Les lignes de tableau nommées par Alexandre.** « Variantes » (il n'y en a aucune : la ligne
disparaît), « Montage » (déjà dans la carte, juste sous le prix), « L'espace à prévoir »
(doublon de la ligne sur les dimensions).

**Deux compléments au-delà de quatre.** Jeu Gonflable Parcours d'Obstacle (160,00 $) et
Connect 4 Géant (60,00 $).

**Une formulation avantageuse.** « Sans frais cachés. », dans la carte. La fiche liste juste en
dessous des frais possibles (pièce manquante, retard, protection à 8 %). Coupé, pas corrigé.

**Un libellé rendu inutile par son propre widget.** « Combien de jeux ? », posé au-dessus du
bouton. Le compteur de quantité est à l'intérieur du composant Booqable — c'est le code de la
fiche de référence qui l'écrit : « Le compteur de quantité est encastré dans ce composant : il
ne s'ajoute pas à côté, sous peine de doublon. » Sur la chaise pliante, ce libellé est d'ailleurs
resté seul au-dessus d'un bloc vide.

## 1.4 Ce qui est faux ou douteux — signalé, pas corrigé

1. **Le titre contredit le catalogue.** La fiche s'appelle « Jeu de Tétris Géant », le catalogue
   de location dit « Jeux de Tétris », et la seule image du dossier montre un jeu de table du
   commerce marqué TETRIS TUMBLE. La fiche le dit elle-même. Le titre et l'adresse de la page
   n'ont pas été touchés.
2. **Le prix s'affiche en format anglophone.** Le code de la fiche écrit `default-price="50,00 $"`,
   mais le composant Booqable affiche **`$50.00`** à l'écran — sur cette fiche comme sur la
   chaise pliante (`$4.00`). La fiche écrit « Dollars canadiens » et « 50,00 $ » dans sa prose.
   Deux formats pour un même montant sur le même écran.
3. **Trois dates pour un même document.** Le bloc sécurité dit que les conditions ont été
   « mises à jour le 16 août 2026 » et, six lignes plus bas, qu'elles ont été « relues le
   18 août 2026 » ; la consigne d'Alexandre parle d'un relevé du 17 août. Les deux mentions
   disparaissent de toute façon.
4. **Un complément classé sur une commande future.** Tug of War est le 4ᵉ des compléments — donc
   il survit à la coupe — et la fiche explique qu'il passe devant les deux derniers uniquement
   parce que « la commande la plus récente du tug of war est un brouillon daté du 18 septembre
   2026 ». Un brouillon, à une date postérieure à aujourd'hui, sert à départager un classement.
5. **« Aucune photo » et « le seul fichier au dossier ».** La phrase sous le titre dit que nous
   n'avons aucune photo de ce jeu ; le tableau parle de « la seule image de notre dossier ». Il
   y a bien un fichier, il a été écarté. Les deux affirmations tiennent ensemble, mais lues à la
   suite elles se cognent.
6. **Une absence présentée comme une vérification.** Le titre du tableau est « Ce qui est
   vérifié », et neuf de ses onze lignes disent qu'on ne sait pas. Le titre n'a pas été touché.

## 1.5 Le premier écran à 375 px

Mesuré dans Chrome à 375 × 667 px. La ligne de pli est à **667 px**.

**Avant** — dans le premier écran, il n'y a que le titre et le paragraphe sous le titre. Le prix
est à un écran et demi, le bouton à plus de deux écrans.

| Élément | Position | Dans le premier écran ? |
|---|---|---|
| Titre « Jeu de Tétris Géant » | 256 → 296 px | oui |
| Le paragraphe sous le titre (6 lignes) | 298 → 451 px | oui |
| Encadré « Aucune photo de ce jeu » | 467 → 741 px | commence, coupé par le bas |
| Légende du fichier écarté | 759 → 867 px | non |
| **Le prix** | **895 px** | **non** |
| Sélecteur de dates | 1 143 px | non |
| **Bouton « Ajouter au panier »** | **1 533 → 1 585 px** | **non** |
| Lien vers les conditions | 1 839 px | non |
| Le tarif selon la durée | 1 942 px | non |
| Les 6 vignettes « À produire » | 2 240 px | non |
| La consigne de tournage | 2 426 → 3 098 px | non |

**Après** — le prix, sa durée et le bouton tiennent tous les trois, et il reste de la place.

| Élément | Position | Dans le premier écran ? |
|---|---|---|
| Titre « Jeu de Tétris Géant » | 256 → 296 px | oui |
| La phrase sous le titre (3 lignes) | 298 → 400 px | oui |
| **Le prix « $50.00 / jeu · 2 Jours »** | **434 → 468 px** | **oui** |
| **Bouton « Ajouter au panier »** | **573 → 625 px** | **oui** |
| « Prix pour ramassage… Le montage n'est pas compris. » | 644 px | oui, commence |
| Sélecteur de dates | 850 px | non |
| Lien vers les conditions | 1 151 px | non |
| Le tarif selon la durée | 1 254 px | non |

Le prix passe de 895 à 434 px, donc largement sous les 700 px que la feuille de style du site
s'impose à elle-même. Deux choses l'expliquent, et une seule est du texte. Le texte : la phrase
sous le titre passe de 6 lignes à 3, et les 382 px d'encadré « aucune photo » et de légende
disparaissent. La mise en page : le bouton a été remonté juste sous le prix, comme sur la fiche
de référence, au lieu d'être placé après le sélecteur de dates.

Pour comparaison, la fiche de référence (chaise pliante) met son prix à **628 px** et son bouton
à **729 px** : le prix arrive tout juste sur le pli, le bouton tombe en dessous. La photo, entre
la phrase et la carte, y prend la place. Ici il n'y a pas de photo à placer.

---

# 2. Jeu pong géant

**Adresse.** https://evenox.ca/product/jeu-pong-geant/
**Avant : 2 791 mots.** → **Après : 708 mots. 75 % retiré.**

Cette fiche a une vraie photo prise chez nous, et c'est la seule chose qui y est établie. Le
reste — combien de gobelets, avec quoi on lance, quelle surface — n'est nulle part, et la fiche
le disait quatre fois : dans la phrase sous le titre, dans le tableau, dans la liste « Ce qui
n'est pas relevé », puis dans les questions. Une fois suffit.

## 2.1 Le texte allégé, prêt à relire

> ### Jeu pong géant
>
> Le pong sorti de la table et posé par terre : deux camps de gobelets géants qui se font face.
>
> _(voir le signalement 2.4-1 sur le mot « géants »)_
>
> ---
> **$150.00** / jeu · 2 Jours
>
> `[ compteur de quantité + Ajouter au panier — widget Booqable ]`
>
> **Prix pour ramassage à notre entrepôt de Sainte-Thérèse.** Le montage n'est pas compris.
>
> Vos dates — on affiche ce qui est libre
>
> `[ sélecteur de dates ]`
>
> **Réservez avec 20 % du total.** Le solde au ramassage.
>
> Dollars canadiens, taxes en sus. Paiement par carte de crédit seulement, en ligne.
>
> [Politique et conditions de location](https://evenox.ca/conditions-de-location-evenox/)
>
> Le tarif selon la durée — 2 jours : tarif de base · 3 jours : × 1,5 · 1 semaine : × 2 ·
> 4 semaines : × 4
> ---
>
> _(la photo du jeu, sans légende)_
>
> ### Ce qui encadre l'usage
>
> - **Un adulte surveille, en tout temps**
> - **Les limites d'âge et de nombre s'appliquent** — Pour cet article, **aucune limite d'âge
>   et aucun nombre de joueurs ne sont écrits nulle part dans notre catalogue**. Nous n'en
>   inventerons pas : demandez-les-nous au 514-559-1893.
> - **Le jeu revient sec**
> - **On compte le jeu devant vous, au départ et au retour** — Vous signez le décompte.
> - **Une pièce manquante se facture** — « Un bris ou une pièce manquante : coût de réparation,
>   ou valeur de remplacement si l'article n'est pas réparable ». « L'usure normale ne se
>   facture jamais. »
> - **La protection facultative ne couvre pas les pièces non retournées** — La protection bris
>   accidentel coûte 8 % du montant de la location et s'ajoute avant le ramassage. Nos
>   conditions listent ce qu'elle ne couvre pas : « la négligence, le vol, la perte, les pièces
>   non retournées, les frais de retard ».
>
> ### Ce qui est vérifié
>
> | Caractéristique | Ce qui est vérifié |
> |---|---|
> | Article | Jeu Pong Géant — un seul article au catalogue, sans variante |
> | Le nombre de gobelets fournis | **Non établi** — **notre catalogue ne décrit pas le contenu de cet article**. Aucun gobelet n'existe séparément dans tout le catalogue, et aucun forfait n'en ajoute. Appelez le 514-559-1893, on va sortir le jeu et compter. |
> | La balle | **Non établie** — **aucune balle n'apparaît sur notre photo**, et rien chez nous ne dit s'il en part une avec le jeu, ni laquelle. Le catalogue ne connaît qu'une balle de golf, des balles colorées de piscine et un ballon de soccer : **aucun de ces articles n'est rattaché à ce jeu**, et aucun forfait ne les y ajoute. |
> | Les dimensions et l'espace de jeu | **Non établies** — hauteur et diamètre d'un gobelet, distance entre les deux camps, surface totale : **rien n'est mesuré à l'entrepôt**. |
> | Gobelets visibles sur notre photo | Douze — deux groupes de six, en triangle, se faisant face. C'est ce qu'on voit sur une photo, pas un inventaire certifié : le décompte signé au ramassage fait foi. |
> | Étuis visibles sur notre photo | Trois — un long étui posé au sol entre les deux camps, deux étuis dressés. |
> | Le lestage | Sur notre photo, les gobelets sont en plastique rigide et posés vides sur la neige : ce ne sont pas des structures gonflables. Mais **rien chez nous n'établit s'il faut les lester**, ni avec quoi, ni combien. |
> | L'usage à l'extérieur et le vent | Notre photo a été prise dehors, dans un parc, sur la neige. **Cela montre un usage, cela ne l'autorise pas** : notre catalogue ne tranche ni le vent, ni la pluie, ni le type de sol pour cet article. |
> | Ce qu'il y a dans les étuis | **Ils n'ont pas été ouverts ni inventoriés pour cette page**, et notre catalogue n'en fait aucune mention. |
> | Marque lisible | Volley Pong — lue à l'agrandissement sur les trois étuis. Les gobelets ne portent aucun marquage. Aucun nom de fabricant, aucun numéro de modèle, aucune dimension. |
> | Tarif | 150,00 $ pour 48 h · aucun rabais de quantité |
> | Ramassage | Entrepôt de Sainte-Thérèse — 215, boulevard René-A.-Robert |
>
> ### Souvent loué avec
>
> Un seul ramassage, un seul dépôt.
>
> Table de Baby Foot — à partir de 120,00 $ · 24 h · résidentiel ; format commercial 160,00 $ —
> Table Air Hockey 120,00 $ · 48 h · 7 pieds, commercial ou résidentiel — Table de Ping Pong
> 50,00 $ · 48 h — Cornhole 40,00 $ · 48 h · jeu de poches
>
> ### Une question avant de réserver ?
>
> Deux champs obligatoires, deux facultatifs. Pour réserver, tout se passe en haut de page.
>
> _(formulaire : nom, téléphone, courriel, date de l'événement, message)_
>
> Pour tout ce qui n'est pas écrit ici, il y a le téléphone. 514-559-1893

## 2.2 Les faits conservés

| | |
|---|---|
| **Prix** | 150,00 $ / jeu, affiché dans la carte et redit une fois au tableau |
| **Durée réelle** | 48 h (« 2 Jours » au sélecteur). Au-delà : 3 jours × 1,5 · 1 semaine × 2 · 4 semaines × 4 |
| **Dépôt** | 20 % du total, solde au ramassage, taxes en sus, carte de crédit seulement, en ligne |
| **Ramassage** | Entrepôt de Sainte-Thérèse — 215, boulevard René-A.-Robert |
| **Sécurité** | Adulte en tout temps · limites d'âge, de poids et de nombre à respecter, **et aucune n'est écrite pour cet article** · lestage non établi · le catalogue ne tranche ni le vent, ni la pluie, ni le sol |
| **Ce qui n'est PAS fourni** | Le montage. La balle : rien ne dit qu'il en part une. Aucun gobelet et aucune balle ne s'ajoutent à la commande |
| **Frais possibles** | Pièce manquante ou bris : réparation ou valeur de remplacement · l'usure normale ne se facture jamais · protection bris 8 %, qui ne couvre ni la négligence, ni le vol, ni la perte, ni les pièces non retournées, ni les frais de retard |
| **Retour** | Le jeu revient sec · décompte signé au départ et au retour |
| **Dimensions / poids** | **Non établis** : hauteur et diamètre d'un gobelet, distance entre les camps, surface totale. Les seuls nombres conservés sont ceux qu'on voit sur la photo — **douze gobelets, trois étuis** — avec la réserve d'origine (« pas un inventaire certifié ») |
| **Lien** | Politique et conditions de location |
| **Compléments** | 4 (Baby Foot, Air Hockey, Ping Pong, Cornhole) |

## 2.3 Ce qui est coupé, par motif

**Dit deux fois ou plus (954 mots).**
- La liste « Ce qui n'est pas relevé » (497 mots, 8 points) : cinq de ses huit points reprenaient
  une ligne du tableau. Les trois faits qui n'étaient qu'ici — le lestage, l'usage à l'extérieur
  et le vent, ce qu'il y a dans les étuis — sont devenus trois lignes du tableau, texte intact.
- La section « Quatre questions / Ce qu'il faut demander » (457 mots) : les quatre réponses
  reprenaient le tableau et la carte.
- Dans la carte : « Le total exact s'affiche au panier, avant tout engagement. »
- La légende de la photo (« Notre photo, prise dehors, en hiver. Douze gobelets, deux groupes de
  six. Trois étuis marine marqués Volley Pong. Aucune balle dans le cadre. ») : ses quatre
  chiffres et son absence de balle sont déjà quatre lignes du tableau.

**Les sur-titres.** « Avant de réserver », « La fiche », « Ce qui n'est pas relevé »,
« À ajouter ».

**L'attribution des conditions.** Les six lignes « Source : Conditions de location d'Évenox,
relues le 18 août 2026 », l'introduction du bloc sécurité, et les « Nos conditions disent : »
devant chaque citation. Le lien vers les conditions reste dans la carte.

**Le matériel de production photo (216 mots).** Les six vignettes « À produire » et la consigne
de tournage. La photo, elle, reste : c'est la seule preuve du produit sur cette fiche.

**La méthode interne (161 + 74 mots).** Le paragraphe qui explique le classement des compléments
(47 lignes, 16 commandes distinctes) et la ligne « Constance du tarif ».

**Le jargon d'outil.** « sa fiche Booqable n'a aucune description, aucun extrait, aucune note ».
Le nom du logiciel de réservation n'apprend rien au client, et la ligne dit déjà « notre
catalogue ne décrit pas le contenu de cet article ».

**Les lignes de tableau nommées par Alexandre.** « Variantes » (aucune), « Montage » (déjà dans
la carte).

**Deux compléments au-delà de quatre.** Dunk Tank (100,00 $) et Connect 4 Géant (60,00 $).

**Une formulation avantageuse.** « Sans frais cachés. »

**Un libellé rendu inutile par son widget.** « Combien de jeux ? » — voir 1.3.

**Une queue de phrase devenue fausse par la coupe.** La ligne « Étuis visibles sur notre photo »
finissait par « c'est l'une des six vues à produire » ; les six vues n'existent plus sur la
fiche, donc la queue part. Ce qu'elle disait est repris par la ligne « Ce qu'il y a dans les
étuis ».

## 2.4 Ce qui est faux ou douteux — signalé, pas corrigé

1. **« Gobelets géants », dans la seule phrase que je garde.** Cette phrase est la seule de toute
   la fiche qui dise ce qu'est le produit, donc je la garde. Mais elle affirme une taille, et le
   tableau écrit trois lignes plus bas que la hauteur et le diamètre d'un gobelet ne sont mesurés
   nulle part. Le titre de la fiche porte le même mot. Je ne l'ai pas touché. **Si vous préférez
   le silence à la formulation avantageuse, c'est cette phrase qu'il faut retirer** — et il n'y
   aura alors plus de phrase sous le titre.
2. **Le prix s'affiche deux fois, et en format anglophone.** Le composant Booqable rend
   **`$150.00`** — pas « 150,00 $ » comme l'écrit la prose de la fiche juste au-dessus, qui
   précise « Dollars canadiens ». Et le montant apparaît deux fois dans la carte, à 70 px
   d'écart : une fois sur la ligne de prix de la fiche, une fois à l'intérieur du bloc d'ajout au
   panier, qui affiche « 2 Jours $150.00 Ajouter au panier ».
3. **« 44 locations sur 44 … aucun écart » et « les trois seules lignes à un autre montant ».**
   La même ligne de tableau annonce une constance parfaite sur 44 locations, puis décrit trois
   lignes facturées autrement sur les 47 du dossier. C'est expliqué (une bascule tarifaire datée
   du 3 juillet 2024), mais les deux affirmations se lisent mal ensemble. La ligne part de toute
   façon.
4. **Le premier des compléments est caché.** Le paragraphe de méthode dit : « Un article plus
   haut placé ne figure pas ici : il n'a aucune page sur ce site. » La liste est donc présentée
   comme un classement de commandes réelles, alors que son premier de classe est retiré. En
   coupant le paragraphe, on efface aussi l'aveu. Je le signale plutôt que de le réécrire.
5. **Un tableau intitulé « Ce qui est vérifié » dont la moitié des lignes dit « Non établi ».**
   Le titre n'a pas été touché. Même remarque que sur la fiche 1.
6. **La date des conditions.** Même flottement que sur la fiche 1 : les six lignes « Source »
   disent « relues le 18 août 2026 ».

## 2.5 Le premier écran à 375 px

**Avant** — le premier écran ne contient que le titre et le paragraphe sous le titre, qui fait
onze lignes à lui seul. Le prix est à un écran et demi.

| Élément | Position | Dans le premier écran ? |
|---|---|---|
| Titre « Jeu pong géant » | 256 → 296 px | oui |
| Le paragraphe sous le titre (11 lignes) | 298 → 578 px | oui, et il le remplit |
| La photo du jeu | 594 → 786 px | non |
| Légende de la photo | 804 → 936 px | non |
| **Le prix** | **964 px** | **non** |
| Sélecteur de dates | 1 246 px | non |
| **Bouton « Ajouter au panier »** | **1 636 → 1 688 px** | **non** |
| Lien vers les conditions | 1 942 px | non |
| Le tarif selon la durée | 2 045 px | non |

**Après.** Ici il y a un arbitrage à rendre, parce que la fiche a une photo et que la photo prend
de la place. Deux dispositions, mesurées toutes les deux.

**A — on ne touche pas à la mise en page** (le texte seul est allégé) :

| Élément | Position | Dans le premier écran ? |
|---|---|---|
| Titre | 256 → 296 px | oui |
| La phrase sous le titre (2 lignes) | 298 → 400 px | oui |
| La photo du jeu | 416 → 608 px | oui, entière |
| **Le prix** | **636 → 704 px** | **oui, il commence à 636** |
| **Bouton « Ajouter au panier »** | **809 → 861 px** | **non — 142 px sous le pli** |

**B — la carte de réservation passe au-dessus de la photo sur mobile** (mise en page seulement,
aucun texte touché) :

| Élément | Position | Dans le premier écran ? |
|---|---|---|
| Titre | 256 → 296 px | oui |
| La phrase sous le titre (2 lignes) | 298 → 400 px | oui |
| **Le prix « $150.00 / jeu · 2 Jours »** | **434 → 502 px** | **oui** |
| **Bouton « Ajouter au panier »** | **607 → 659 px** | **oui** |
| « Prix pour ramassage… Le montage n'est pas compris. » | 678 px | non, de 11 px |
| La photo du jeu | 1 576 px | non |

**Ce que ça coûte, dit franchement.** En A, le bouton reste sous le pli quoi qu'on coupe : à
375 px, l'en-tête du site (256 px), le titre, une phrase et la photo (192 px) occupent déjà
598 px. Aucune coupe de texte ne peut ramener le bouton au-dessus de 667 px tant que la photo est
avant la carte. En B, le prix et le bouton entrent tous les deux, mais la photo tombe après toute
la carte, à 1 576 px : le client voit le prix avant de voir le jeu. **B respecte la consigne, A
respecte la photo.** C'est l'arbitrage à rendre, et je ne le rends pas à votre place.

---

# 3. Basket Pong

**Adresse.** https://evenox.ca/product/basket-pong/
**Avant : 2 675 mots.** → **Après : 704 mots. 74 % retiré.**

Le tarif de cette fiche est le plus régulier des trois, et son contenu le moins documenté :
combien de ballons, quelle taille, de l'eau ou de l'air. Deux photos sont au dossier et elles ne
montrent pas la même chose. Les deux restent, parce que quatre lignes du tableau parlent de
l'une et de l'autre.

## 3.1 Le texte allégé, prêt à relire

> ### Basket Pong
>
> Les seaux à lancer, en format géant.
>
> _(voir le signalement 3.4-1 sur le mot « géant »)_
>
> ---
> **$80.00** / jeu · 2 Jours
>
> `[ compteur de quantité + Ajouter au panier — widget Booqable ]`
>
> **Prix pour ramassage à notre entrepôt de Sainte-Thérèse.** Le montage n'est pas compris.
>
> Vos dates — on affiche ce qui est libre
>
> `[ sélecteur de dates ]`
>
> **Réservez avec 20 % du total.** Le solde au ramassage.
>
> Dollars canadiens, taxes en sus. Paiement par carte de crédit seulement, en ligne.
>
> [Politique et conditions de location](https://evenox.ca/conditions-de-location-evenox/)
>
> Le tarif selon la durée — 2 jours : tarif de base · 3 jours : × 1,5 · 1 semaine : × 2 ·
> 4 semaines : × 4
> ---
>
> _(notre photo, sans légende)_
>
> _(la planche de catalogue du fabricant)_
> **La planche de catalogue du fabricant.** Elle montre deux ballons et un sac ; elle n'a pas été
> prise chez nous, et rien ne dit qu'elle décrit notre exemplaire.
>
> ### Ce qui encadre l'usage
>
> - **Un adulte surveille, en tout temps**
> - **Les limites d'âge et de nombre s'appliquent** — Pour cet article, **aucune limite d'âge
>   et aucun nombre de joueurs ne sont écrits nulle part dans notre catalogue**. Nous n'en
>   inventerons pas : demandez-les-nous au 514-559-1893.
> - **Le jeu revient sec**
> - **On compte le jeu devant vous, au départ et au retour** — Vous signez le décompte.
> - **Une pièce manquante se facture** — « Un bris ou une pièce manquante : coût de réparation,
>   ou valeur de remplacement si l'article n'est pas réparable ». « L'usure normale ne se
>   facture jamais. »
> - **La protection facultative ne couvre pas les pièces non retournées** — La protection bris
>   accidentel coûte 8 % du montant de la location et s'ajoute avant le ramassage. Nos
>   conditions listent ce qu'elle ne couvre pas : « la négligence, le vol, la perte, les pièces
>   non retournées, les frais de retard ».
>
> ### Ce qui est vérifié
>
> | Caractéristique | Ce qui est vérifié |
> |---|---|
> | Article | Basket Pong — un seul article au catalogue, sans variante |
> | Le nombre de ballons | **Non établi** — notre catalogue ne décrit pas le contenu de cet article, et **nos deux photos se contredisent : la nôtre n'en montre aucun, celle du fabricant en montre deux**. Aucun ballon de basket n'existe séparément dans tout le catalogue, et aucun forfait n'en ajoute. Appelez le 514-559-1893, on va sortir le jeu et compter. |
> | La taille des ballons | **Non établie** — aucune taille n'est écrite ni mesurée chez nous, et une impression d'échelle sur une photo de catalogue n'est pas une mesure. |
> | De l'eau ou de l'air | **Non établi** — sur notre photo, les seaux sont en plastique rigide et posés vides : ce ne sont pas des structures gonflables. Mais **rien chez nous ne dit s'il faut les lester**, ni avec quoi, ni combien. |
> | Seaux visibles sur notre photo | Douze — deux groupes de six, disposés en triangle et se faisant face. C'est ce qu'on voit sur une photo, pas un inventaire certifié : le décompte signé au ramassage fait foi. |
> | Les dimensions d'un seau et l'espace de jeu | Hauteur et diamètre d'un seau, distance entre les deux groupes, surface totale à prévoir : **rien n'est mesuré à l'entrepôt**. |
> | L'alimentation électrique | **Aucune alimentation n'est documentée chez nous pour cet article**, et rien sur nos photos n'en laisse voir. |
> | L'usage à l'extérieur | Notre photo a été prise dehors, sous un chapiteau, sur de l'asphalte. **Cela montre un usage, cela ne l'autorise pas** : notre catalogue ne tranche ni le vent, ni la pluie, ni le type de sol pour cet article. |
> | Le sac et ce qui part avec le jeu | La photo de catalogue montre un sac de transport noir marqué BASKETPONG. **La nôtre ne le montre pas**, et notre catalogue n'en fait aucune mention. |
> | Marque lisible | BASKETPONG — lue à l'agrandissement sur les seaux, les ballons et le sac, sur les deux photos. Aucun nom de fabricant, aucun numéro de modèle, aucune dimension. |
> | Tarif | 80,00 $ pour 48 h · aucun rabais de quantité |
> | Ramassage | Entrepôt de Sainte-Thérèse — 215, boulevard René-A.-Robert |
>
> ### Souvent loué avec
>
> Un seul ramassage, un seul dépôt.
>
> Cornhole 40,00 $ · 48 h — Jenga Géant 40,00 $ · 48 h — Connect 4 Géant 60,00 $ · 48 h —
> Jeu Putterball 50,00 $ · 48 h
>
> ### Une question avant de réserver ?
>
> Deux champs obligatoires, deux facultatifs. Pour réserver, tout se passe en haut de page.
>
> _(formulaire : nom, téléphone, courriel, date de l'événement, message)_
>
> Pour tout ce qui n'est pas écrit ici, il y a le téléphone. 514-559-1893

## 3.2 Les faits conservés

| | |
|---|---|
| **Prix** | 80,00 $ / jeu, affiché dans la carte et redit une fois au tableau |
| **Durée réelle** | 48 h (« 2 Jours » au sélecteur). Au-delà : 3 jours × 1,5 · 1 semaine × 2 · 4 semaines × 4 |
| **Dépôt** | 20 % du total, solde au ramassage, taxes en sus, carte de crédit seulement, en ligne |
| **Ramassage** | Entrepôt de Sainte-Thérèse — 215, boulevard René-A.-Robert |
| **Sécurité** | Adulte en tout temps · limites d'âge, de poids et de nombre à respecter, **et aucune n'est écrite pour cet article** · lestage non établi · le catalogue ne tranche ni le vent, ni la pluie, ni le sol |
| **Ce qui n'est PAS fourni** | Le montage. Le nombre et la taille des ballons ne sont pas établis. Aucun ballon de basket ne s'ajoute à la commande. Rien ne dit dans quoi le jeu repart |
| **Frais possibles** | Pièce manquante ou bris : réparation ou valeur de remplacement · l'usure normale ne se facture jamais · protection bris 8 %, qui ne couvre ni la négligence, ni le vol, ni la perte, ni les pièces non retournées, ni les frais de retard |
| **Retour** | Le jeu revient sec · décompte signé au départ et au retour |
| **Dimensions / poids** | **Non établis** : hauteur et diamètre d'un seau, distance entre les groupes, surface totale, taille des ballons. Le seul nombre conservé est celui qu'on voit sur la photo — **douze seaux** — avec sa réserve d'origine |
| **Lien** | Politique et conditions de location |
| **Compléments** | 4 (Cornhole, Jenga Géant, Connect 4 Géant, Jeu Putterball) |

## 3.3 Ce qui est coupé, par motif

**Dit deux fois ou plus (1 034 mots).**
- La liste « Ce qui n'est pas relevé » (470 mots, 8 points) : quatre de ses huit points
  reprenaient une ligne du tableau. Les quatre faits qui n'étaient qu'ici — dimensions d'un seau
  et espace de jeu, alimentation électrique, usage à l'extérieur, le sac — sont devenus quatre
  lignes du tableau, texte intact.
- La section « Quatre questions / Ce qu'il faut demander » (564 mots).
- Dans la carte : « Le total exact s'affiche au panier, avant tout engagement. »
- La légende de notre photo (« Notre photo, prise à l'entrepôt. Deux groupes de six seaux. Aucun
  ballon dans le cadre. ») : ses deux constats sont déjà deux lignes du tableau. Celle de la
  planche du fabricant reste : elle porte l'avertissement, et lui seul.

**Les sur-titres.** « Avant de réserver », « La fiche », « Ce qui n'est pas relevé »,
« À ajouter ».

**L'attribution des conditions.** Les six lignes « Source : … relues le 18 août 2026 »,
l'introduction du bloc sécurité, et les « Nos conditions disent : ». Le lien reste dans la carte.

**Le matériel de production photo (198 mots).** Les six vignettes « À produire » et la consigne
de tournage.

**La méthode interne (125 + 44 mots).** Le paragraphe qui explique le classement des compléments
(63 lignes, 18 commandes distinctes) et la ligne « Constance du tarif ».

**Les lignes de tableau nommées par Alexandre.** « Variantes » (aucune), « Montage » (déjà dans
la carte).

**Deux compléments au-delà de quatre.** Lancer de hache (40,00 $) et Soccer Bulle (à partir de
40,00 $).

**Une formulation avantageuse.** « Sans frais cachés. », et dans la section supprimée : « Ce
tarif est le plus stable de notre catalogue : 63 locations sur 63 au même montant depuis juin
2024. »

**Un libellé rendu inutile par son widget.** « Combien de jeux ? » — voir 1.3.

## 3.4 Ce qui est faux ou douteux — signalé, pas corrigé

1. **« En format géant », dans la seule phrase que je garde.** Comme sur la fiche 2 : la phrase
   affirme une taille, et le tableau écrit que la hauteur et le diamètre d'un seau ne sont
   mesurés nulle part. Ici le titre de la fiche, lui, ne dit pas « géant ». **Si vous voulez le
   silence plutôt que la formulation avantageuse, c'est cette phrase qu'il faut retirer** — et
   il ne restera plus de phrase sous le titre.
2. **Les mêmes conditions citées de deux façons sur la même page.** Le bloc sécurité cite
   « Respectez les limites d'âge, de poids et de nombre indiquées » ; la liste « Ce qui n'est pas
   relevé » cite, du même document, « les limites de nombre indiquées » — sans l'âge ni le poids.
   Sur les deux autres fiches, la même clause est citée deux fois de façon identique. L'une des
   deux citations de cette fiche est donc tronquée ; je ne sais pas laquelle est fidèle et je ne
   l'ai pas corrigée. La version longue est celle qui reste.
3. **Le prix s'affiche deux fois, et en format anglophone.** `$80.00` à l'écran, « 80,00 $ » dans
   la prose, « Dollars canadiens » juste en dessous ; et le montant apparaît une fois sur la
   ligne de prix, une fois dans le bloc d'ajout au panier.
4. **La fiche publie une image dont elle dit qu'elle ne prouve rien.** La planche du fabricant
   est affichée avec, en légende, « elle n'a pas été prise chez nous, et rien ne dit qu'elle
   décrit notre exemplaire », et le tableau ajoute que les deux photos se contredisent. Je l'ai
   gardée parce que quatre lignes du tableau y renvoient (le nombre de ballons, leur taille, le
   sac, la marque) : la retirer casserait ces quatre lignes. Mais publier une image déclarée non
   fiable est une décision, pas un fait, et elle vous revient.
5. **Un tableau intitulé « Ce qui est vérifié » dont la moitié des lignes dit « Non établi ».**
6. **La ligne que je couperais si vous en voulez une de moins.** « L'alimentation électrique ».
   Pour douze seaux de plastique et des ballons, poser la question du courant électrique crée un
   doute que la fiche ne peut pas lever. Je l'ai gardée parce que la retirer retire un fait
   (nous ne l'avons pas documenté), mais c'est la première que j'enlèverais.

## 3.5 Le premier écran à 375 px

**Avant** — le premier écran s'arrête au milieu du paragraphe sous le titre.

| Élément | Position | Dans le premier écran ? |
|---|---|---|
| Titre « Basket Pong » | 256 → 296 px | oui |
| Le paragraphe sous le titre (8 lignes) | 298 → 502 px | oui |
| Notre photo | 518 → 774 px | commence, coupée par le bas |
| Légende de notre photo | 792 → 877 px | non |
| **Le prix** | **905 px** | **non** |
| Sélecteur de dates | 1 153 px | non |
| **Bouton « Ajouter au panier »** | **1 543 → 1 595 px** | **non** |
| Lien vers les conditions | 1 849 px | non |
| La planche du fabricant | 2 258 px | non |

**Après, A — mise en page inchangée :**

| Élément | Position | Dans le premier écran ? |
|---|---|---|
| Titre | 256 → 296 px | oui |
| La phrase sous le titre (1 ligne) | 298 → 349 px | oui |
| Notre photo | 365 → 621 px | oui, entière |
| **Le prix** | **649 → 683 px** | **oui, il commence à 649** |
| **Bouton « Ajouter au panier »** | **788 → 840 px** | **non — 121 px sous le pli** |

**Après, B — la carte passe au-dessus de la photo sur mobile :**

| Élément | Position | Dans le premier écran ? |
|---|---|---|
| Titre | 256 → 296 px | oui |
| La phrase sous le titre (1 ligne) | 298 → 349 px | oui |
| **Le prix « $80.00 / jeu · 2 Jours »** | **383 → 417 px** | **oui** |
| **Bouton « Ajouter au panier »** | **522 → 574 px** | **oui** |
| « Prix pour ramassage… Le montage n'est pas compris. » | 593 → 708 px | oui, commence |
| Sélecteur de dates | 799 px | non |
| Notre photo | 1 490 px | non |

Même arbitrage que sur la fiche 2, et il se joue au même endroit : la photo fait 256 px, l'en-tête
du site 256 px. Avec la photo devant, le prix entre (649 px) mais le bouton non. Avec la carte
devant, les deux entrent, et la photo passe après la carte.

---

# Vérifications passées sur les trois textes

**Rien n'a été réécrit, et je l'ai fait vérifier par la machine.** Chaque suite de six mots du
texte allégé a été cherchée dans le texte d'origine de la même fiche. Les seules suites qui n'y
sont pas sont les **points de raccord** — l'endroit exact où une phrase a été raccourcie ou
déplacée — et chacun correspond à une coupe listée plus haut :

| Raccord | La coupe qui l'a créé |
|---|---|
| « …taxes en sus. Paiement par carte… » | « Sans frais cachés. » retiré entre les deux |
| « …et de nombre s'appliquent. Pour cet article, aucune limite… » | le « Nos conditions disent : » et la citation retirés |
| « …se facture. « Un bris ou une pièce manquante… » | le « Nos conditions : » retiré |
| « …un jeu de table du commerce. Le mot « géant » n'apparaît… » | phrase déplacée depuis la section supprimée (fiche 1) |
| « …aucun forfait n'en ajoute. Le décompte signé… » | « la recherche a été faite dans les deux sens » retiré |
| « …le contenu de cet article. Aucun gobelet n'existe… » | la mention du logiciel retirée (fiche 2) |
| « Ce qu'il y a dans les étuis — Ils n'ont pas été ouverts… » | la première phrase du point retirée (fiche 2) |
| « Deux champs obligatoires… Pour réserver, tout se passe… » | la phrase du milieu retirée |

**Zéro mot inventé** sur les trois fiches. Aucun chiffre, aucune mesure, aucune date n'a été
ajoutée.

**Les formules interdites sont absentes** des trois textes : « livraison incluse », « livraison
gratuite », « montage compris », « annulation gratuite 7 jours », « report sans frais en cas de
pluie », « remplacement pendant l'événement ». Aucune ne figurait sur les fiches d'origine non
plus ; les trois écrivent au contraire « Le montage n'est pas compris », et cette phrase reste.

**Mirabel n'apparaît nulle part.** Le ramassage est écrit deux fois par fiche et toujours de la
même façon : entrepôt de Sainte-Thérèse, 215, boulevard René-A.-Robert.

**Le dépôt, les taxes et le lien** sont présents sur les trois : 20 % du total, solde au
ramassage, taxes en sus, et le lien vers la politique et les conditions de location.

# Deux points à trancher, qui dépassent les trois fiches

**1. La livraison : je n'ai rien ajouté, et c'est délibéré.** Votre consigne donne les faits
(100 $ pour les 10 premiers km, puis 7 $/km jusqu'à 40 km, au-delà soumission). **Aucune des
trois fiches ne parle de livraison**, ni en bien ni en mal : elles écrivent seulement que le prix
est un tarif de ramassage. Comme la règle est « on n'ajoute jamais rien », je n'ai pas introduit
la grille de livraison. Le code de la fiche de référence dit d'ailleurs la même chose en propres
termes : « On n'écrit TOUJOURS aucun prix, aucune zone et aucun délai de livraison — rien n'est
documenté. » Si vous voulez cette grille sur les fiches, c'est un ajout, et il vous revient de le
demander explicitement — la ligne serait alors la même partout, avec le lien vers les conditions.

**2. La disposition sur mobile, pour les deux fiches qui ont une photo.** Le prix et le bouton
n'entrent tous les deux dans le premier écran que si la carte de réservation passe **au-dessus**
de la photo. Mesuré : c'est vrai pour le pong (bouton à 607 px au lieu de 809) comme pour le
basket (522 px au lieu de 788). Le prix, lui, entre dans les deux dispositions. La fiche 1 n'a pas
de photo, donc elle n'a pas ce problème. Je propose la carte en premier, mais la photo se retrouve
alors après toute la carte, et ce choix-là est le vôtre.

# Ce qui reste identique sur les trois fiches, et volontairement

La carte de réservation, le bloc « Ce qui encadre l'usage » (six lignes) et le formulaire sont
mot pour mot les mêmes d'une fiche à l'autre : ce sont les conditions de la maison, pas la
description du produit. Ce qui distingue une fiche de l'autre tient dans une phrase, un tableau
et quatre compléments.
