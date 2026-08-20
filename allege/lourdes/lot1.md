# Lot 1 — les trois fiches les plus lourdes

Propositions d'allègement. Rien n'a été modifié sur evenox.ca : les pages ont été lues,
les coupes sont proposées ici.

Arbitrage d'Alexandre du 20 août 2026 : « il y a vraiment trop de matériel, il faudrait tout
simplifier — mais faut pas trop en faire non plus. »

## Comment c'est compté et vérifié

- **Mots.** Contenu principal seulement (`<main>`), en-tête, menu et pied de page retirés.
  Même méthode pour l'avant et l'après, donc les deux chiffres sont comparables entre eux.
  Repère : la fiche de référence `chaise-pliante` donne **853 mots** avec cette méthode
  pour les 796 mots annoncés — la méthode compte environ 7 % de plus (libellés de
  carrousel, cellules de tableau). Les pourcentages retirés ne sont pas affectés.
- **Rien n'a été réécrit.** Chaque phrase conservée est celle qui était là, au mot. Les
  seules opérations appliquées sont : supprimer un bloc, supprimer une phrase entière,
  ne garder que les N premières cartes, ne garder que certaines lignes d'un tableau. Quand
  une coupe supplémentaire aurait cassé la phrase restante (majuscule, sujet), la coupe
  s'arrête là.
- **Vérifié à la machine.** Chaque phrase de plus de trois mots du texte allégé a été
  recherchée, au mot, dans le texte de la page d'origine : 48 phrases sur la fiche 1,
  56 sur la fiche 2, 52 sur la fiche 3. Toutes présentes, à deux exceptions près, qui sont
  des coupes à l'intérieur d'une phrase, détaillées au point 5 de la fiche 2.
- **Premier écran.** Chaque fiche a été ouverte à 375 × 667 px (Chrome, iPhone SE), puis
  la version allégée a été rendue dans le vrai gabarit — les blocs coupés retirés du DOM —
  et remesurée. Les positions verticales sont donc mesurées, pas estimées.
- **Livraison.** Aucune des trois fiches n'écrit de tarif de livraison. Le tarif dicté
  (100 $ pour les 10 premiers km, puis 7 $/km jusqu'à 40 km, au-delà soumission) n'a donc
  pas été ajouté : on n'ajoute rien. Il est signalé par fiche, à décider.
- **Rythme.** Une requête à la fois, deux secondes entre deux. Aucun 403 : les trois fiches
  et la fiche de référence ont répondu 200.
- **Refaire les mesures.** Les outils sont dans `tools/` : la liste des coupes de chaque fiche
  (`ops_*.json`), le compte de mots (`compter.py`), le rendu et la mesure à 375 px
  (`apres.py`), et la vérification au mot (`verifier.py`).

## Les trois fiches d'un coup d'œil

| Fiche | Mots avant | Mots après | Retiré | Hauteur de page à 375 px | Prix dans le 1er écran | Bouton dans le 1er écran |
| --- | --- | --- | --- | --- | --- | --- |
| Table de ping-pong | 2 418 | **475** | −80 % | 18 129 → 7 495 px | 745 → **643 : oui** | 1 387 → 1 010 : non |
| Table d'air hockey | 2 680 | **563** | −79 % | 20 421 → 8 702 px | 745 → **643 : oui** | 1 533 → 1 058 : non |
| Table de baby-foot | 2 809 | **508** | −82 % | 20 808 → 7 711 px | 770 → **643 : oui** | 2 673 → 1 342 : non |
| *Référence : chaise pliante* | *853* | — | — | — | — | — |

Total : **7 907 mots → 1 546**, soit 6 361 mots retirés. Les trois fiches passent sous la
fiche de référence, parce que trois de ses blocs n'existent pas ici (forfaits, autres modèles,
et un bloc de questions que je propose de retirer — voir l'arbitrage de la fiche 1).

**Le prix entre dans le premier écran sur les trois fiches. Le bouton, non**, sur aucune des
trois : après coupe, il ne reste plus de texte à retirer au-dessus de lui. Ce qui l'empêche,
c'est 242 px d'en-tête de site et 250 px de photo. Le détail est mesuré au point 7 de chaque
fiche.

---

# Fiche 1 — Table de ping-pong

## 1. Adresse et mots AVANT

- **Adresse :** https://evenox.ca/product/table-de-ping-pong/ (HTTP 200)
- **Mots AVANT : 2 418**
- Hauteur de la page à 375 px : **18 129 px**

## 2. Le texte allégé complet, prêt à relire

> Tout ce qui suit est au mot ce qui est déjà sur la fiche. Les crochets décrivent un
> élément d'interface, pas du texte à écrire.

---

# Table de ping-pong

Une table pliante de marque Penn.

[photo] La photo du fabricant. Elle n'a pas été prise à notre entrepôt.

**50,00 $** / table · [durée affichée par le composant : « 2 Jours »]

Prix pour ramassage à notre entrepôt de Sainte-Thérèse. **Le montage n'est pas compris.**

[sélecteur de dates]

[bouton : 2 Jours · 50,00 $ · Ajouter au panier]

**Réservez avec 20 % du total.** Le solde au ramassage.

Dollars canadiens, taxes en sus. Paiement par carte de crédit seulement, en ligne.

[lien] Politique et conditions de location

**Le tarif selon la durée**

[2 jours *tarif de base* · 3 jours *× 1,5* · 1 semaine *× 2* · 4 semaines *× 4*]

AVANT DE RÉSERVER

## Ce qui encadre l'usage

- **Un adulte surveille, en tout temps**
- **Les limites d'âge et de nombre s'appliquent** — Pour cet article, aucune limite d'âge
  n'est écrite nulle part dans notre catalogue. Nous n'en inventerons pas une :
  demandez-la-nous au 514-559-1893.
- **Le matériel revient propre, sec et complet** — Nos conditions : « à l'heure convenue,
  propre, sec et complet », et pour les jeux « Retournez les jeux secs. Un jeu rangé humide
  moisit ».
- **Une pièce manquante se facture** — Nos conditions : « Un bris ou une pièce manquante :
  coût de réparation, ou valeur de remplacement si l'article n'est pas réparable ».
  « L'usure normale ne se facture jamais. »
- **La protection facultative ne couvre pas les pièces non retournées** — La protection bris
  accidentel coûte 8 % du montant de la location. Nos conditions listent ce qu'elle ne couvre
  pas : « la négligence, le vol, la perte, les pièces non retournées, les frais de retard ».

LA FICHE

## Ce qui est vérifié

| Caractéristique | Ce qui est vérifié |
| --- | --- |
| Ce qui est fourni | **Non établi** — ni le nombre de raquettes, ni le nombre de balles, ni la présence du filet. Appelez le 514-559-1893, on va sortir la table et compter. |
| Ramassage | Entrepôt de Sainte-Thérèse — 215, boulevard René-A.-Robert |

CE QUI N'EST PAS RELEVÉ

- Les dimensions de la table dépliée
- Le poids
- L'espace de jeu à prévoir
- À l'intérieur ou à l'extérieur

À AJOUTER

## Souvent loué avec

Un seul ramassage, un seul dépôt.

| | Prix | Durée |
| --- | --- | --- |
| Table de Baby Foot | À partir de 120,00 $ | 24 h · modèle résidentiel ; commerciale 160,00 $ |
| Lancer de hache | 40,00 $ | 48 h |
| Jeu Putterball | 50,00 $ | 48 h |
| Table Air Hockey | 120,00 $ | 48 h · deux modèles 7 pieds, même prix |

## Une question avant de réserver ?

Deux champs obligatoires, deux facultatifs. Pour réserver, tout se passe en haut de page.

[formulaire : Votre nom (obligatoire) · Votre téléphone (obligatoire) · Votre courriel
(facultatif) · Date de votre événement (AAAA-MM-JJ) (obligatoire) · Où la table sera
installée, et vos questions · Envoyer ma question]

Pour tout ce qui n'est pas écrit ici, il y a le téléphone. 514-559-1893

---

## 3. Mots APRÈS et pourcentage retiré

- **Mots APRÈS : 475**
- **Retiré : 1 943 mots, soit 80 %**
- Hauteur de la page à 375 px : 18 129 px → **7 495 px** (−59 %)

## 4. La liste des faits conservés

| Fait | Où il reste |
| --- | --- |
| Prix : 50,00 $ / table | premier écran, bloc prix |
| Durée réelle : 48 h (« 2 Jours » dans le composant) | premier écran, sous le prix |
| Multiplicateurs : 3 jours × 1,5 · 1 semaine × 2 · 4 semaines × 4 | une seule fois, sous le bouton |
| Bouton d'ajout au panier | bloc prix |
| Ce qui est fourni : **non établi** — ni raquettes, ni balles, ni filet, avec le téléphone | tableau |
| Le montage **n'est pas compris** | ligne sous le prix |
| Ramassage : entrepôt de Sainte-Thérèse, 215, boulevard René-A.-Robert | tableau, une seule fois |
| Dépôt de 20 %, solde au ramassage, taxes en sus, carte de crédit seulement en ligne | bloc prix |
| Sécurité : un adulte surveille, en tout temps | Ce qui encadre l'usage |
| Âge : aucune limite d'âge écrite dans le catalogue pour cet article, demandez-la au téléphone | Ce qui encadre l'usage |
| Retour propre, sec et complet ; les jeux se retournent secs | Ce qui encadre l'usage |
| Frais : bris ou pièce manquante = réparation ou valeur de remplacement ; usure normale jamais facturée | Ce qui encadre l'usage |
| Frais : protection bris accidentel 8 %, et ce qu'elle ne couvre pas (négligence, vol, perte, pièces non retournées, frais de retard) | Ce qui encadre l'usage |
| Dimensions dépliée, poids, espace de jeu à prévoir : **non relevés** | Ce qui n'est pas relevé |
| Intérieur ou extérieur : non tranché | Ce qui n'est pas relevé |
| Marque : Penn | la phrase sous le titre |
| Photo : celle du fabricant, pas prise à l'entrepôt | légende de la photo |
| Lien vers les conditions | bloc prix |

Aucun fait n'a disparu de la page. Ce qui a disparu, ce sont les répétitions, les sources
et le raisonnement.

## 5. Ce que j'ai coupé, par motif

| Motif | Ce qui part | Mots |
| --- | --- | --- |
| **Trop de titres sous le titre** — la phrase sous le H1 redisait le prix, la durée, le ramassage et le contenu de la section suivante | 2 des 3 phrases de la phrase d'accroche : « 50,00 $ pour 48 h, ramassage à Sainte-Thérèse. » et « Ce qui vient avec la table n'est pas établi : c'est écrit plus bas, sans détour. » | ≈ 30 |
| **Notes de production, pas du texte client** | les six vignettes « À produire » (Le compte, Les raquettes, Le filet, L'échelle, Le pliage, L'état) et le paragraphe « Six vues à produire… 1200 px minimum, fond blanc uni » | ≈ 200 |
| **Méthode interne** | « Une étiquette a été cherchée sur la photo du dossier… quatre zones recadrées et agrandies… » et « Pourquoi cette liste est aussi longue… nous choisissons le silence — et le téléphone. » | ≈ 260 |
| **Sources répétées** — dicté : disparaît | les six lignes « Source : Conditions de location d'Évenox, relues le 17 août 2026 », plus le chapeau « Les six points ci-dessous viennent tous du même endroit : nos conditions de location… » | ≈ 120 |
| **Encadrement de l'usage : garder ce qui protège** | le point « On compte le matériel devant vous, et vous signez le décompte » (procédure, elle est dans les conditions, et le lien y va), et les commentaires en fin de point : « Une table rentrée mouillée… », « Une balle et une raquette sont des pièces. », « Une raquette perdue reste donc à votre charge, protection ou non. », « Nos conditions l'écrivent deux fois… pour les jeux géants » | ≈ 150 |
| **Déjà dit ailleurs sur la même page** | lignes de tableau « Article », « Marque », « Tarif », « Montage » ; libellés « Vos dates — on affiche ce qui est libre » et « Ajouter la table » (le bouton le dit) ; « Le total exact s'affiche au panier, avant tout engagement. » ; dans « Ce qui n'est pas relevé », les intitulés « Le nombre de raquettes », « Le nombre de balles » et « Le filet », qui répètent mot pour mot la ligne « Ce qui est fourni » du tableau | ≈ 100 |
| **Pliage** — dicté | l'intitulé « L'encombrement une fois pliée, et le transport » | 8 |
| **Variantes : il n'y en a pas** — dicté | ligne de tableau « Variantes : Aucune — un seul modèle, un seul prix. Le montant ci-dessus ne dépend d'aucun choix. » | ≈ 20 |
| **Raisonnement derrière un fait déjà écrit** | les huit explications de « Ce qui n'est pas relevé » (quatre intitulés restent, la démonstration part), et la preuve de catalogue dans la cellule « Ce qui est fourni » | ≈ 640 |
| **Souvent loué avec : quatre maximum** — dicté | les cartes « Jeu de poches & Cornhole » et « Chaise Pliante Brune », et le paragraphe de classement « sur les 86 locations… réparties sur 69 dossiers… 13 fois » | ≈ 120 |
| **Bloc entier hors de la liste des six blocs à garder** | toute la section « Quatre questions / Ce qu'il faut demander » et ses 4 questions dépliables | ≈ 750 |
| **Formulation avantageuse** | « Sans frais cachés. » — voir le point 6 | 4 |

### La seule décision à arbitrer

La section **« Ce qu'il faut demander »** (4 questions) est la plus grosse coupe à elle
seule : 750 mots. Elle ne figure pas dans la liste des six blocs qui restent, et aucun fait
n'y était unique — prix, durée, multiplicateurs, montage non compris, paiement par carte :
tout est déjà en haut de page. Mais la fiche de référence, elle, garde son bloc de
questions. **Si tu en veux une seule, c'est « Qu'est-ce qui vient avec la table ? »** —
c'est la question de cette page. Elle coûterait environ 130 mots.

## 6. Faux ou douteux — signalé, pas corrigé

1. **« Sans frais cachés. »** — écrit dans le bloc prix, sur une page qui annonce par
   ailleurs : coût de réparation ou valeur de remplacement pour une pièce manquante, frais
   de retard, et une protection facultative à 8 %. Formulation avantageuse. Je l'ai retirée,
   je ne l'ai pas remplacée.
2. **Le prix s'affiche en format américain.** Le composant Booqable rend « $50.00 » alors
   que toute la fiche écrit « 50,00 $ ». Vérifié à l'écran, sur le bouton comme sur le prix.
   Non corrigeable depuis la page (le formatage vient du composant) : c'est un réglage de
   boutique.
3. **Deux unités de durée sur le même écran.** Le texte écrit « 48 h », le composant écrit
   « 2 Jours ». Même durée, deux écritures, à 40 px l'une de l'autre.
4. **L'adresse de ramassage est incomplète sur la fiche** : « 215, boulevard
   René-A.-Robert », sans « local 100 ». Le pied de page du site, lui, écrit « 215 Boulevard
   René-A.-Robert, Sainte-Thérèse QC J7E 4L1 (Local 100) ». Je n'ai pas complété la ligne
   de la fiche. Aucune mention de Mirabel nulle part : vérifié.
5. **Aucun tarif de livraison sur la fiche**, et une note interne dans le code de la page
   affirme même « il n'y a pas de livraison, tout se ramasse à Sainte-Thérèse » — ce qui
   contredit le tarif dicté (100 $ pour les 10 premiers km, puis 7 $/km jusqu'à 40 km,
   au-delà soumission). Je n'ai rien ajouté. À arbitrer : la ligne de livraison doit-elle
   exister sur les fiches ?
6. **Contradiction entre deux pages du site, écrite noir sur blanc dans la fiche** : « Un
   texte de notre boutique annonce une hauteur précise : personne ne l'a vérifiée, et nous
   ne la reprenons pas. » Autrement dit, une description de boutique publie une hauteur que
   cette fiche refuse de reprendre. Non corrigé ; l'intitulé « Les dimensions de la table
   dépliée » reste dans « Ce qui n'est pas relevé ».
7. **Quatre affirmations non publiées, consignées dans le code de la page** (hauteur
   réglable de 76,2 cm, moitiés carrées autoportantes, « pliable, donc déjà assemblé »,
   « déplier les pieds, fixer le filet »). Elles restent non publiées.
8. **Écart de prix consigné dans le code de la page** : 3 lignes de commande sur 86 ont été
   facturées 25,00 $ au lieu de 50,00 $ (rabais au dossier). Le prix affiché reste 50,00 $.
9. **Forme, pas fond** : après coupe, le tableau « Ce qui est vérifié » ne compte plus que
   deux lignes. Le titre promet plus que le tableau ne donne. Je ne l'ai pas retitré — c'est
   à toi de dire si ces deux lignes deviennent du texte courant.

## 7. Le premier écran à 375 px

Mesuré à 375 × 667 px. Le seuil est 667 px : au-delà, il faut défiler.

**AVANT** — l'écran contient : le bandeau téléphone/courriel, le logo et le menu (0 → 242),
le titre (256), la phrase d'accroche sur **six lignes** (298 → 451), et le haut de la photo,
coupée par le bord de l'écran (467 → 667, sur 250 px de haut).

| Élément | Position AVANT | Dans le premier écran ? |
| --- | --- | --- |
| Titre | 256 | oui |
| Phrase sous le titre | 298 (153 px de haut) | oui |
| Photo | 467 | à moitié |
| **Prix** | **745** | **non — 78 px trop bas** |
| Durée sous le prix | 785 | non |
| Sélecteur de dates | 1 027 | non |
| **Bouton Ajouter au panier** | **1 319** (le bouton cliquable à 1 387) | **non — 720 px trop bas** |
| Lien vers les conditions | 1 693 | non |

**APRÈS** — l'écran contient : le bandeau, le logo et le menu, le titre (256), la phrase
sur **deux lignes** (298 → 349), **la photo en entier** (365 → 615), et **le prix** (643).

| Élément | Position APRÈS | Dans le premier écran ? |
| --- | --- | --- |
| Titre | 256 | oui |
| Phrase sous le titre | 298 (51 px de haut) | oui |
| Photo | 365 → 615 | **oui, en entier** |
| **Prix** | **643** | **oui** |
| Durée sous le prix | 683 | non — 16 px trop bas |
| Sélecteur de dates | 852 | non |
| **Bouton Ajouter au panier** | **942** (cliquable à 1 010) | **non — 275 px trop bas** |
| Lien vers les conditions | 1 292 | non |

**Le bouton ne rentre pas, et ce n'est plus le texte qui l'en empêche.** Ce qui occupe le
premier écran après coupe : 242 px d'en-tête de site, 90 px de titre et de phrase, 250 px de
photo. Il ne reste que 85 px pour le prix, sa durée et le bouton.

Test fait, mesuré : en descendant la photo **sous** le bloc de prix (une ligne de CSS dans
le gabarit mobile, pas une coupe de texte), le prix remonte à **383**, le sélecteur de dates
à **592**, et le bloc du bouton commence à **682** — le bouton cliquable est à **750**. Il
manque encore 83 px. Sans toucher à l'en-tête du site ni aux marges du bloc de prix, le
bouton ne peut pas entrer dans le premier écran à 375 px.

---

# Fiche 2 — Table d'air hockey

## 1. Adresse et mots AVANT

- **Adresse :** https://evenox.ca/product/table-air-hockey-en-location/ (HTTP 200)
- **Mots AVANT : 2 680**
- Hauteur de la page à 375 px : **20 421 px**

## 2. Le texte allégé complet, prêt à relire

---

# Table d'air hockey

Une table de marque VEVOR, en deux modèles au même prix.

[photo] La photo du fabricant. Elle n'a pas été prise à notre entrepôt.

**120,00 $** / table · [durée affichée par le composant : « 2 Jours »]

Prix pour ramassage à notre entrepôt de Sainte-Thérèse. **Le montage n'est pas compris.**

[sélecteur de dates]

[sélecteur de modèle : 7 pieds (résidentiel) · 7 pieds (commerciale)]

[bouton : 2 Jours · 120,00 $ · Ajouter au panier]

**Réservez avec 20 % du total.** Le solde au ramassage.

Dollars canadiens, taxes en sus. Paiement par carte de crédit seulement, en ligne.

[lien] Politique et conditions de location

**Le tarif selon la durée**

[2 jours *tarif de base* · 3 jours *× 1,5* · 1 semaine *× 2* · 4 semaines *× 4*]

AVANT DE RÉSERVER

## Ce qui encadre l'usage

- **Un adulte surveille, en tout temps**
- **Les limites d'âge et de nombre s'appliquent** — Pour cet article, aucune limite d'âge
  n'est écrite nulle part dans notre catalogue. Nous n'en inventerons pas une :
  demandez-la-nous au 514-559-1893.
- **Le matériel revient propre, sec et complet** — Nos conditions : « à l'heure convenue,
  propre, sec et complet », et pour les jeux « Retournez les jeux secs. Un jeu rangé humide
  moisit ».
- **Une pièce manquante se facture** — Nos conditions : « Un bris ou une pièce manquante :
  coût de réparation, ou valeur de remplacement si l'article n'est pas réparable ».
  « L'usure normale ne se facture jamais. »
- **La protection facultative ne couvre pas les pièces non retournées** — La protection bris
  accidentel coûte 8 % du montant de la location. Nos conditions listent ce qu'elle ne couvre
  pas : « la négligence, le vol, la perte, les pièces non retournées, les frais de retard ».

LA FICHE

## Ce qui est vérifié

| Caractéristique | Ce qui est vérifié |
| --- | --- |
| Ce qui est fourni | **Non établi** — ni le nombre de palets, ni le nombre de poussoirs. Appelez le 514-559-1893, on va sortir la table et compter. |
| Ce qui distingue les deux modèles | **Non établi** — dans notre catalogue, les deux modèles ne diffèrent que par leur nom. Si le choix compte pour vous, appelez avant de réserver. |
| Alimentation électrique | **À relever** — la table a une soufflerie, donc elle se branche. Ni la tension, ni la puissance, ni la longueur du cordon ne sont relevées chez nous. Prévoyez une prise ; pour le reste, appelez. |
| Dimensions | **À relever** — longueur, largeur, hauteur de jeu : rien n'est mesuré à l'entrepôt, et la photo ne porte aucune référence d'échelle |
| Poids | **À relever** — ni pesée, ni estimée |
| Ramassage | Entrepôt de Sainte-Thérèse — 215, boulevard René-A.-Robert |

CE QUI N'EST PAS RELEVÉ

- Le bruit de la soufflerie
- L'espace de jeu à prévoir

À AJOUTER

## Souvent loué avec

Un seul ramassage, un seul dépôt.

| | Prix | Durée |
| --- | --- | --- |
| Table de Baby Foot | À partir de 120,00 $ | 24 h · modèle résidentiel ; commerciale 160,00 $ |
| Jeu de poches & Cornhole | 40,00 $ | 48 h |
| Table de Ping Pong | 50,00 $ | 48 h |
| Jeu Putterball | 50,00 $ | 48 h |

## Une question avant de réserver ?

Deux champs obligatoires, deux facultatifs. Pour réserver, tout se passe en haut de page.

[formulaire : Votre nom (obligatoire) · Votre téléphone (obligatoire) · Votre courriel
(facultatif) · Date de votre événement (AAAA-MM-JJ) (obligatoire) · Où la table sera
installée, et vos questions · Envoyer ma question]

Pour tout ce qui n'est pas écrit ici, il y a le téléphone. 514-559-1893

---

## 3. Mots APRÈS et pourcentage retiré

- **Mots APRÈS : 563**
- **Retiré : 2 117 mots, soit 79 %**
- Hauteur de la page à 375 px : 20 421 px → **8 702 px** (−57 %)

## 4. La liste des faits conservés

| Fait | Où il reste |
| --- | --- |
| Prix : 120,00 $ / table, identique sur les deux modèles | premier écran, bloc prix, et la phrase sous le titre |
| Durée réelle : 48 h (« 2 Jours » dans le composant) | premier écran, sous le prix |
| Multiplicateurs : 3 jours × 1,5 · 1 semaine × 2 · 4 semaines × 4 | une seule fois, sous le bouton |
| Bouton d'ajout au panier, avec le choix du modèle | bloc prix |
| Deux modèles : 7 pieds (résidentiel) et 7 pieds (commerciale) | une seule fois : le sélecteur du bouton |
| Ce qui est fourni : **non établi** — ni palets, ni poussoirs, avec le téléphone | tableau |
| Ce qui distingue les deux modèles : **non établi**, ils ne diffèrent que par leur nom | tableau |
| Le montage **n'est pas compris** | ligne sous le prix |
| Ramassage : entrepôt de Sainte-Thérèse, 215, boulevard René-A.-Robert | tableau, une seule fois |
| Dépôt de 20 %, solde au ramassage, taxes en sus, carte de crédit seulement en ligne | bloc prix |
| Sécurité : un adulte surveille, en tout temps | Ce qui encadre l'usage |
| Âge : aucune limite d'âge écrite dans le catalogue pour cet article, demandez-la au téléphone | Ce qui encadre l'usage |
| Retour propre, sec et complet ; les jeux se retournent secs | Ce qui encadre l'usage |
| Frais : bris ou pièce manquante = réparation ou valeur de remplacement ; usure normale jamais facturée | Ce qui encadre l'usage |
| Frais : protection bris accidentel 8 %, et ce qu'elle ne couvre pas | Ce qui encadre l'usage |
| Électricité : la table a une soufflerie, elle se branche ; prévoyez une prise ; tension, puissance et cordon non relevés | tableau |
| Dimensions et poids : **à relever** | tableau |
| Bruit de la soufflerie, espace de jeu : **non relevés** | Ce qui n'est pas relevé |
| Marque : VEVOR | la phrase sous le titre |
| Photo : celle du fabricant, pas prise à l'entrepôt | légende de la photo |
| Lien vers les conditions | bloc prix |

## 5. Ce que j'ai coupé, par motif

| Motif | Ce qui part | Mots |
| --- | --- | --- |
| **Trop de titres sous le titre** | 2 des 3 phrases de la phrase d'accroche : « 120,00 $ pour 48 h, ramassage à Sainte-Thérèse. » et « Ce qui vient avec la table n'est pas établi : c'est écrit plus bas, sans détour. » | ≈ 30 |
| **Notes de production, pas du texte client** | les six vignettes « À produire » (Le compte, Les palets, Les poussoirs, Les deux modèles, La prise, L'échelle) et le paragraphe « Six vues à produire… 1200 px minimum » | ≈ 210 |
| **Méthode interne** | « Une étiquette a été cherchée sur la photo du dossier… cinq zones recadrées et agrandies jusqu'à huit fois… » et « Pourquoi cette liste est aussi longue… nous choisissons le silence — et le téléphone. » | ≈ 280 |
| **Sources répétées** — dicté : disparaît | les six lignes « Source : Conditions de location d'Évenox… » et le chapeau « Les six points ci-dessous viennent tous du même endroit… » | ≈ 120 |
| **Encadrement de l'usage : garder ce qui protège** | le point « On compte le matériel devant vous, et vous signez le décompte » (procédure : elle est dans les conditions, et le lien y va), et les commentaires de fin de point : « Une table à soufflerie rentrée humide… », « Un palet et un poussoir sont des pièces. », « Un palet perdu reste donc à votre charge, protection ou non. », « Nos conditions l'écrivent deux fois… pour les jeux et les arcades » | ≈ 170 |
| **Variantes : une seule fois** — dicté | la ligne de tableau « Modèles : Deux — nommés au catalogue “7 pieds (commerciale)” et “7 pieds (résidentiel)”… Les deux sont à 120,00 $. » (le sélecteur du bouton affiche déjà les deux noms), la ligne de prix « Les deux modèles sont au même prix : ce montant ne dépend pas de votre choix. », le libellé « Choisir le modèle et ajouter la table », et l'intitulé « Ce qui distingue “commerciale” de “résidentiel” » dans la liste du bas | ≈ 90 |
| **Déjà dit ailleurs sur la même page** | lignes de tableau « Article », « Marque », « Tarif », « Montage », « Puissance de la soufflerie » (la ligne Alimentation le dit déjà) ; libellé « Vos dates — on affiche ce qui est libre » ; « Le total exact s'affiche au panier, avant tout engagement. » ; les intitulés « Le nombre de palets », « Le nombre de poussoirs », « Les dimensions de la table », « L'alimentation électrique et le cordon » qui répètent le tableau | ≈ 130 |
| **Pliage** — dicté | l'intitulé « Le poids, et si elle se plie » (le poids reste au tableau) | 8 |
| **Raisonnement derrière un fait déjà écrit** | les huit explications de « Ce qui n'est pas relevé » (deux intitulés restent), la preuve de catalogue dans la cellule « Ce qui est fourni », l'énumération « même prix, même structure tarifaire, même photo, même description, aucun poids, aucune propriété » | ≈ 700 |
| **Souvent loué avec : quatre maximum** — dicté | les cartes « Table Beer Pong » et « Jeux Arcade Multijeux », et le paragraphe de classement « les 64 lignes… 17 commandes distinctes… 4 fois » | ≈ 130 |
| **Bloc entier hors de la liste des six blocs à garder** | toute la section « Quatre questions / Ce qu'il faut demander » et ses 4 questions dépliables | ≈ 850 |
| **Formulation avantageuse** | « Sans frais cachés. » | 4 |

Même arbitrage que sur la fiche 1 : si tu veux garder une question, c'est « Qu'est-ce qui
vient avec la table ? ». La deuxième candidate ici serait « Quelle différence entre le modèle
commercial et le résidentiel ? », mais son contenu est déjà dans la ligne de tableau « Ce qui
distingue les deux modèles ».

### Les deux seules coupes faites à l'intérieur d'une phrase, sur les trois fiches

Elles sont ici, et les voici en entier pour que tu puisses les refuser :

| Avant | Après |
| --- | --- |
| « Non établi — **et ce n'est pas une formule de prudence :** dans notre catalogue, les deux modèles ne diffèrent que par leur nom. » | « Non établi — dans notre catalogue, les deux modèles ne diffèrent que par leur nom. » |
| « Ni la tension, ni la puissance, ni la longueur du cordon ne sont relevées chez nous**, et la plaque signalétique n'est pas lisible sur la photo**. » | « Ni la tension, ni la puissance, ni la longueur du cordon ne sont relevées chez nous. » |

Aucun mot n'a été ajouté ni déplacé : dans les deux cas, un segment a été retiré et la
ponctuation qui restait était déjà là.

## 6. Faux ou douteux — signalé, pas corrigé

1. **« Sans frais cachés. »** — même formulation avantageuse que sur la fiche 1, sur une page
   qui annonce par ailleurs réparation, valeur de remplacement, frais de retard et protection
   à 8 %. Retirée, pas remplacée.
2. **Écart de prix important, consigné dans le code de la page et jamais publié.** Sur les
   64 lignes de facturation relevées : 100,00 $ quarante fois, 180,00 $ treize fois,
   120,00 $ onze fois. **Le montant le plus fréquemment facturé est 100,00 $, alors que la
   fiche affiche 120,00 $.** La note interne explique qu'une bonne part vient d'un ancien
   article renommé (« Table Air Hockey - 5 pieds »), mais qu'il reste sept lignes à 100,00 $
   sous les noms actuels, inexpliquées, et treize lignes à 180,00 $ toutes en commerciale,
   toutes facturées sur 48 h. Je n'ai rien corrigé : la fiche continue d'afficher 120,00 $.
   C'est le point qui mérite ton arbitrage avant tout le reste.
3. **Le prix du groupe est à zéro dans le catalogue.** Le prix ne vit que sur les deux
   variantes (120,00 $ chacune). La fiche affiche le bon montant, mais elle l'affiche par un
   attribut écrit à la main : si le composant se met à lire le groupe, il affichera 0,00 $.
4. **Deux formats de prix sur le même écran.** Le bloc du haut écrit « 120,00 $ » ; le bouton
   Booqable écrit « $120.00 ». Vu à l'écran, avant comme après.
5. **Deux unités de durée sur le même écran** : « 48 h » dans le texte, « 2 Jours » dans le
   composant.
6. **Deux libellés coupés à 375 px, avant comme après ma coupe** : le sélecteur de modèle
   affiche « Sélectionner une vari » (texte tronqué) et le bouton affiche « Ajouter au
   panie ». Ce n'est pas causé par les coupes : c'est déjà comme ça sur la fiche en ligne.
7. **« 7 pieds » n'est pas une mesure.** La fiche elle-même l'écrit dans sa version longue :
   c'est un nom de catalogue. Après coupe, les noms de modèles restent dans le sélecteur
   (« 7 pieds (résidentiel) », « 7 pieds (commerciale) ») pendant que la ligne « Dimensions »
   du tableau dit « à relever ». Contradiction apparente, non corrigée : les deux sont vraies,
   mais elles se lisent mal ensemble.
8. **Deux modèles, deux prix, une seule différence : le nom.** La fiche l'écrit noir sur
   blanc. Ce n'est pas faux, c'est simplement un état du catalogue à corriger ailleurs qu'ici.
9. **L'adresse de ramassage est incomplète** : « 215, boulevard René-A.-Robert », sans
   « local 100 ». Non complétée. Aucune mention de Mirabel : vérifié.
10. **Aucun tarif de livraison sur la fiche**, et la même note interne que sur la fiche 1
    (« il n'y a pas de livraison, tout se ramasse à Sainte-Thérèse »), qui contredit le tarif
    dicté. Rien n'a été ajouté.
11. **Description de boutique non reprise** (elle parle de Laval et de la Rive-Nord et promet
    une expérience « simple et sans stress »). Elle reste non reprise.

## 7. Le premier écran à 375 px

**AVANT** — l'écran contient : le bandeau téléphone/courriel, le logo et le menu (0 → 242),
le titre (256), la phrase d'accroche sur **six lignes** (298 → 451), et le haut de la photo,
coupée (467 → 667).

| Élément | Position AVANT | Dans le premier écran ? |
| --- | --- | --- |
| Titre | 256 | oui |
| Phrase sous le titre | 298 (153 px de haut) | oui |
| Photo | 467 | à moitié |
| **Prix** | **745** | **non — 78 px trop bas** |
| Durée sous le prix | 785 | non |
| Ligne de prix (ramassage, montage, deux modèles) | 821 (190 px de haut) | non |
| Sélecteur de dates | 1 101 | non |
| Sélecteur de modèle | 1 417 | non |
| **Bouton Ajouter au panier** | **1 533** | **non — 866 px trop bas** |
| Lien vers les conditions | 1 839 | non |

**APRÈS** — l'écran contient : le bandeau, le logo et le menu, le titre (256), la phrase sur
**deux lignes** (298 → 349), **la photo en entier** (365 → 615), et **le prix** (643).

| Élément | Position APRÈS | Dans le premier écran ? |
| --- | --- | --- |
| Titre | 256 | oui |
| Phrase sous le titre | 298 (51 px de haut) | oui |
| Photo | 365 → 615 | **oui, en entier** |
| **Prix** | **643** | **oui** |
| Durée sous le prix | 683 | non — 16 px trop bas |
| Ligne de prix (ramassage, montage) | 719 (115 px, une phrase de moins) | non |
| Sélecteur de dates | 852 | non |
| Sélecteur de modèle | 942 | non |
| **Bouton Ajouter au panier** | **1 058** | **non — 391 px trop bas** |
| Lien vers les conditions | 1 339 | non |

Mesuré aussi, en descendant la photo **sous** le bloc de prix (une ligne de CSS mobile, pas
une coupe de texte) : prix à **383**, durée à **423**, ligne de prix à **459**, sélecteur de
dates à **592** — tout dans le premier écran. Le sélecteur de modèle tombe à **682** et le
bouton à **798**. Comme sur la fiche 1, le bouton reste dehors : cette fiche a un sélecteur
de modèle de plus, ce qui coûte 116 px, et l'en-tête du site en prend déjà 242.

---

# Fiche 3 — Table de baby-foot

## 1. Adresse et mots AVANT

- **Adresse :** https://evenox.ca/product/location-table-de-baby-foot/ (HTTP 200)
- **Mots AVANT : 2 809** — la plus lourde des trois
- Hauteur de la page à 375 px : **20 808 px**

## 2. Le texte allégé complet, prêt à relire

---

# Table de baby-foot

24 h, et non 48 h comme nos autres jeux de table.

[photo] La photo du fabricant. Elle n'a pas été prise à notre entrepôt.

**120,00 $** / table · [durée affichée par le composant : « 1 jour »]

**Prix pour ramassage à notre entrepôt de Sainte-Thérèse.** Le montant ci-dessus est celui du
format résidentiel, le moins cher des deux. **Le montage n'est pas compris.**

**Les deux formats**

| Format | Prix |
| --- | --- |
| Résidentiel | 120,00 $ / 24 h |
| Commerciale | 160,00 $ / 24 h |

[sélecteur de dates]

[sélecteur de format : Résidentiel · Commerciale]

[bouton : 1 jour · 120,00 $ · Ajouter au panier]

**Réservez avec 20 % du total.** Le solde au ramassage.

Dollars canadiens, taxes en sus. Paiement par carte de crédit seulement, en ligne.

[lien] Politique et conditions de location

**Le tarif selon la durée**

[1 jour *24 h · tarif de base* · 2 jours *× 2*]

AVANT DE RÉSERVER

## Ce qui encadre l'usage

- **Un adulte surveille, en tout temps**
- **Les limites d'âge et de nombre s'appliquent** — Pour cet article, aucune limite d'âge et
  aucun nombre de joueurs ne sont écrits nulle part dans notre catalogue. Nous n'en
  inventerons pas : demandez-les-nous au 514-559-1893.
- **Le matériel revient propre, sec et complet** — Nos conditions : « à l'heure convenue,
  propre, sec et complet », et pour les jeux « Retournez les jeux secs. Un jeu rangé humide
  moisit ».
- **Une pièce manquante se facture** — Nos conditions : « Un bris ou une pièce manquante :
  coût de réparation, ou valeur de remplacement si l'article n'est pas réparable ».
  « L'usure normale ne se facture jamais. »
- **La protection facultative ne couvre pas les pièces non retournées** — La protection bris
  accidentel coûte 8 % du montant de la location. Nos conditions listent ce qu'elle ne couvre
  pas : « la négligence, le vol, la perte, les pièces non retournées, les frais de retard ».

LA FICHE

## Ce qui est vérifié

| Caractéristique | Ce qui est vérifié |
| --- | --- |
| Ce qui est fourni | **Non établi** — le nombre de balles n'est écrit nulle part. Appelez le 514-559-1893, on va sortir la table et compter. |
| Marque | **À relever** |
| Dimensions, poids, hauteur de jeu | **À relever** — rien n'est mesuré ni pesé à l'entrepôt |
| Ramassage | Entrepôt de Sainte-Thérèse — 215, boulevard René-A.-Robert |

CE QUI N'EST PAS RELEVÉ

- Le nombre de joueurs, et le nombre de barres
- L'espace de jeu à prévoir

À AJOUTER

## Souvent loué avec

Un seul ramassage, un seul dépôt.

| | Prix | Durée |
| --- | --- | --- |
| Table Air Hockey | 120,00 $ | 48 h · deux modèles 7 pieds, même prix |
| Jeu de poches & Cornhole | 40,00 $ | 48 h |
| Table de Ping Pong | 50,00 $ | 48 h |
| Jeu Putterball | 50,00 $ | 48 h |

## Une question avant de réserver ?

Deux champs obligatoires, deux facultatifs. Pour réserver, tout se passe en haut de page.

[formulaire : Votre nom (obligatoire) · Votre téléphone (obligatoire) · Votre courriel
(facultatif) · Date de votre événement (AAAA-MM-JJ) (obligatoire) · Où la table sera
installée, et vos questions · Envoyer ma question]

Pour tout ce qui n'est pas écrit ici, il y a le téléphone. 514-559-1893

---

## 3. Mots APRÈS et pourcentage retiré

- **Mots APRÈS : 508**
- **Retiré : 2 301 mots, soit 82 %**
- Hauteur de la page à 375 px : 20 808 px → **7 711 px** (−63 %)

## 4. La liste des faits conservés

| Fait | Où il reste |
| --- | --- |
| Prix : 120,00 $ (résidentiel) et 160,00 $ (commerciale) | bloc prix, et le bloc « Les deux formats » |
| Le montant affiché est celui du format le moins cher | ligne sous le prix — indispensable, sinon le 120,00 $ trompe |
| **Durée réelle : 24 h**, et non 48 h comme les autres jeux de table | la phrase sous le titre, le composant (« 1 jour ») et le bloc de durée |
| Journée supplémentaire : 2 jours × 2 | bloc de durée, une seule fois |
| Bouton d'ajout au panier, avec le choix du format | bloc prix |
| Deux formats : Résidentiel, Commerciale | le bloc « Les deux formats » et le sélecteur du bouton |
| Ce qui est fourni : **non établi** — le nombre de balles n'est écrit nulle part, avec le téléphone | tableau |
| Le montage **n'est pas compris** | ligne sous le prix |
| Ramassage : entrepôt de Sainte-Thérèse, 215, boulevard René-A.-Robert | tableau, une seule fois |
| Dépôt de 20 %, solde au ramassage, taxes en sus, carte de crédit seulement en ligne | bloc prix |
| Sécurité : un adulte surveille, en tout temps | Ce qui encadre l'usage |
| Âge et nombre : aucune limite d'âge, aucun nombre de joueurs écrits au catalogue | Ce qui encadre l'usage |
| Retour propre, sec et complet ; les jeux se retournent secs | Ce qui encadre l'usage |
| Frais : bris ou pièce manquante = réparation ou valeur de remplacement ; usure normale jamais facturée | Ce qui encadre l'usage |
| Frais : protection bris accidentel 8 %, et ce qu'elle ne couvre pas | Ce qui encadre l'usage |
| Dimensions, poids, hauteur de jeu : **à relever** | tableau |
| Marque : **à relever** | tableau |
| Nombre de joueurs et de barres, espace de jeu : **non relevés** | Ce qui n'est pas relevé |
| Photo : celle du fabricant, pas prise à l'entrepôt | légende de la photo |
| Lien vers les conditions | bloc prix |

## 5. Ce que j'ai coupé, par motif

| Motif | Ce qui part | Mots |
| --- | --- | --- |
| **Trop de titres sous le titre** — la phrase d'accroche faisait quatre phrases et sept lignes de téléphone | « Deux formats. », « 120,00 $ ou 160,00 $ pour 24 h, ramassage à Sainte-Thérèse. », « Ce qui vient avec la table n'est pas établi : c'est écrit plus bas, sans détour. » — il reste la seule phrase que rien ne redit ailleurs : « 24 h, et non 48 h comme nos autres jeux de table. » | ≈ 30 |
| **Notes de production, pas du texte client** | les six vignettes « À produire » (Le compte, Les balles, L'échelle, La hauteur, Le dessous, L'état) et le paragraphe « Six vues à produire… 1200 px minimum » | ≈ 220 |
| **Méthode interne** | « Une étiquette a été cherchée sur la photo du dossier, et cette fois elle ne se lit pas… agrandi vingt-quatre fois, il reste une tache… » et « Pourquoi cette liste est aussi longue… nous choisissons le silence — et le téléphone. » | ≈ 300 |
| **Durée : la mention « 24 h » revenait 17 fois dans le texte** (comptées ligne par ligne) — il en reste 5 : la phrase sous le titre, les deux formats, le bloc de durée, et le « 1 jour » écrit par le composant | le paragraphe « La durée de base est de 24 h, pas de 48 h. Si vous avez consulté une autre fiche de jeu de table chez nous — ping-pong, air hockey, cornhole — vous y avez lu 48 h… Regardez bien vos dates avant de valider. » et la ligne de tableau « Durée » — la phrase sous le titre, le composant et le bloc de durée le disent déjà | ≈ 130 |
| **Durées et multiplicateurs** — dicté | la ligne de tableau « Journée supplémentaire » (le bloc de durée écrit « 2 jours × 2 ») | ≈ 35 |
| **Unités en inventaire** — dicté | les deux phrases d'inventaire du bloc des formats : « Deux unités au registre d'inventaire, les deux marquées en stock au 18 août 2026. Seul le calendrier dit ce qui est libre à votre date. » et celle du format commercial (voir le point 6, à confirmer) | ≈ 90 |
| **Variantes : une seule fois** — dicté | les lignes de tableau « Variantes » et « Tarif » : le bloc « Les deux formats » et le sélecteur du bouton portent déjà les deux noms et les deux montants | ≈ 50 |
| **Encadrement de l'usage : garder ce qui protège** | le point « On compte le matériel devant vous, et vous signez le décompte », et les commentaires de fin de point : « Un caisson de baby-foot est en panneau de bois : rentré humide, il gonfle. », « Une balle de baby-foot est une pièce, et c'est la plus petite de toutes. », « Une balle perdue reste donc à votre charge, protection ou non. », « Nos conditions l'écrivent deux fois… pour les jeux géants » | ≈ 160 |
| **Déjà dit ailleurs sur la même page** | lignes de tableau « Article », « Montage », « Nombre de joueurs » (le point sur l'âge et le nombre le dit déjà) ; libellés « Vos dates — on affiche ce qui est libre » et « Ajouter la table » ; « Le total exact s'affiche au panier, avant tout engagement. » ; les intitulés « Le nombre de balles », « Les dimensions de la table », « La hauteur de jeu », « Le poids, et le transport », « La marque » qui répètent le tableau | ≈ 140 |
| **Pliage** — dicté | l'intitulé et l'explication « Le pliage, et l'encombrement » (voir le point 6) | ≈ 70 |
| **Hors de la liste des six blocs à garder** | la ligne de tableau « Forfait qui la contient : Un seul, le Forfait Jeux Gonflable Le Basique… Il n'y ajoute aucune balle. » | ≈ 30 |
| **Raisonnement derrière un fait déjà écrit** | les huit explications de « Ce qui n'est pas relevé » (deux intitulés restent), et la preuve de catalogue dans la cellule « Ce qui est fourni » | ≈ 620 |
| **Souvent loué avec : quatre maximum** — dicté | les cartes « Jeux Arcade Multijeux » et « Table Pliante », et le paragraphe de classement « 17 commandes distinctes… 3 fois » | ≈ 110 |
| **Bloc entier hors de la liste des six blocs à garder** | toute la section « Quatre questions / Ce qu'il faut demander » et ses 4 questions dépliables | ≈ 900 |
| **Formulation avantageuse** | « Sans frais cachés. » | 4 |

## 6. Faux ou douteux — signalé, pas corrigé

1. **La coupe que je te demande de confirmer.** Le bloc des formats écrivait, pour le format
   commercial : « **Aucune unité n'est rattachée à ce format** dans notre registre d'inventaire
   au 18 août 2026, alors que le format est ouvert à la réservation et qu'il est sorti 10 fois
   depuis avril. Appelez avant de compter dessus : 514-559-1893. » Tu as dicté que
   « Unités en inventaire » disparaît, donc je l'ai retiré. Mais c'est la seule phrase du site
   qui prévienne qu'on peut réserver, à 160,00 $, un format auquel aucune unité n'est
   rattachée. Si une seule ligne d'inventaire doit survivre sur les trois fiches, c'est
   celle-là.
2. **Une phrase devenue fausse par la coupe : je l'ai retirée, je ne l'ai pas corrigée.**
   Sous les compléments, la fiche écrivait « Attention à la durée : **les six** sont à 48 h,
   le baby-foot est à 24 h. Une commande qui mélange les deux ne se rend pas le même jour. »
   Avec quatre cartes au lieu de six, « les six » devient faux. Je l'ai donc coupée. Si tu
   veux garder l'avertissement — il est utile — il faut le réécrire toi-même, et je ne le
   fais pas à ta place.
3. **« Sans frais cachés. »** — même formulation avantageuse que sur les deux autres fiches.
   Retirée, pas remplacée.
4. **Le prix s'affiche en format américain** : « $120.00 » dans le composant et sur le bouton,
   « 120,00 $ » partout ailleurs sur la fiche. Vu à l'écran.
5. **Deux durées écrites différemment sur le même écran** : « 24 h » dans le texte et dans le
   bloc de durée, « 1 jour » dans le composant.
6. **Écart de prix, relevé non pas ici mais dans la note interne des deux autres fiches** :
   sur 64 lignes de facturation du baby-foot, 120,00 $ vingt-deux fois, **100,00 $ vingt
   fois**, 160,00 $ dix fois, 200,00 $ six fois, 240,00 $ six fois. Le montant de 100,00 $ ne
   correspond à aucune des deux variantes du catalogue. Rien n'a été corrigé : la fiche
   affiche 120,00 $ et 160,00 $.
7. **Le pliage.** La fiche écrivait : « Est-ce que cette table se plie ? Nous ne l'affirmons
   pas. Un ancien libellé d'inventaire l'a laissé entendre ; il a été retiré depuis, et
   personne ici n'a plié l'unité pour le vérifier. » Tu as dicté que « Pliage » part, donc
   c'est parti — mais la fiche n'écrit plus rien sur l'encombrement d'une table qu'il faut
   venir chercher soi-même.
8. **Deux formats, deux prix, et rien qui dise ce qui les distingue.** La fiche l'écrivait
   dans sa version longue (« notre catalogue ne le décrit pas »). Après coupe, il reste deux
   montants et deux noms. Ce n'est pas faux, mais c'est un état du catalogue à corriger
   ailleurs qu'ici.
9. **Aucune marque n'est établie** : le badge du caisson est illisible parce que la photo au
   dossier ne fait que 500 px. La ligne du tableau dit « à relever » ; je n'ai rien deviné.
10. **L'adresse de ramassage est incomplète** : « 215, boulevard René-A.-Robert », sans
    « local 100 ». Non complétée. Aucune mention de Mirabel : vérifié.
11. **Aucun tarif de livraison sur la fiche.** Contrairement aux deux autres, cette page ne
    porte aucune note interne à ce sujet. Rien n'a été ajouté.
12. **Cette fiche n'a aucune note de travail dans son code**, là où les deux autres en ont
    une longue. Ce n'est pas une erreur, c'est une différence de fabrication : les écarts de
    prix du baby-foot ne sont consignés que sur les pages du ping-pong et de l'air hockey.

## 7. Le premier écran à 375 px

**AVANT** — l'écran contient : le bandeau téléphone/courriel, le logo et le menu (0 → 242),
le titre (256), la phrase d'accroche sur **sept lignes** (298 → 477), et les 175 premiers
pixels de la photo (492 → 667, sur 250 px de haut). Le prix était à **770**, le bouton à **2 673** : il fallait
défiler **quatre écrans** pour ajouter la table au panier.

| Élément | Position AVANT | Dans le premier écran ? |
| --- | --- | --- |
| Titre | 256 | oui |
| Phrase sous le titre | 298 (179 px de haut, 7 lignes) | oui |
| Photo | 492 | à peine |
| **Prix** | **770** | **non — 103 px trop bas** |
| Durée sous le prix | 810 | non |
| Ligne de prix (ramassage, format le moins cher, montage) | 846 | non |
| Paragraphe « La durée de base est de 24 h, pas de 48 h » | 1 031 | non |
| Bloc « Les deux formats » (avec l'inventaire) | 1 483 → 2 160 | non |
| Sélecteur de dates | 2 265 | non |
| **Bouton Ajouter au panier** | **2 673** | **non — 2 006 px trop bas** |

**APRÈS** — l'écran contient : le bandeau, le logo et le menu, le titre (256), la phrase sur
**deux lignes** (298 → 349), **la photo en entier** (365 → 615), et **le prix** (643).

| Élément | Position APRÈS | Dans le premier écran ? |
| --- | --- | --- |
| Titre | 256 | oui |
| Phrase sous le titre (la durée de 24 h) | 298 (51 px de haut) | oui |
| Photo | 365 → 615 | **oui, en entier** |
| **Prix** | **643** | **oui** |
| Durée sous le prix | 683 | non — 16 px trop bas |
| Ligne de prix (ramassage, format le moins cher, montage) | 719 | non |
| Bloc « Les deux formats » | 902 → 1 100 | non |
| Sélecteur de dates | 1 136 | non |
| **Bouton Ajouter au panier** | **1 342** | **non — 675 px trop bas** |
| Lien vers les conditions | 1 623 | non |

Le bouton remonte de **2 673 à 1 342 px** : de quatre écrans de défilement à un seul. Mesuré
aussi, en descendant la photo sous le bloc de prix (une ligne de CSS mobile, pas une coupe de
texte) : prix à **383**, durée à **423**, ligne de prix à **459**, bloc des deux formats à
**642** — tout dans le premier écran, et le bouton à **1 082**. Sur les trois fiches, c'est
celle où le bouton reste le plus loin, parce qu'elle porte en plus un bloc de deux formats et
un sélecteur.
