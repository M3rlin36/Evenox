# Relevé — Articles de blogue et page des conditions de location

Relevé effectué le 19 août 2026. Source unique : le site public evenox.ca, consulté en
lecture seule. Aucune connexion, aucune modification, aucune commande, aucune donnée
personnelle saisie.

## Méthode et limites

- Requêtes séquentielles, une à la fois, avec 2 à 3 secondes d'intervalle. 25 requêtes au
  total — 4 sitemaps et 21 pages — toutes en HTTP 200. Aucun 403, aucun blocage.
- Pages récupérées : `sitemap_index.xml`, `post-sitemap.xml`, `page-sitemap.xml`,
  `product-sitemap.xml`, les 12 URL du sitemap des articles, `/conditions-de-location-evenox/`,
  `/livraison/`, `/guide-de-reservation/`, `/forfait-jeux-essentiel/` et 5 fiches produits.
- Le nombre de mots est celui du corps de l'article, mesuré après retrait du gabarit
  (signature, catégorie, encart « La suite logique », formulaire de commentaire). C'est un
  ordre de grandeur, pas un décompte éditorial officiel.
- **Non vérifié** : les 241 autres fiches produits (le `product-sitemap.xml` en compte 246),
  les pages de forfaits autres que Jeux Essentiel, et donc la majorité des prix cités dans les
  articles. Tout prix que je n'ai pas confronté à une fiche est signalé « non vérifié » et non
  « faux ».

### Correction au périmètre annoncé

La mission annonçait huit articles. Le `post-sitemap.xml` en contient **douze**. L'un d'eux
porte le slug `/blog/` : ce n'est pas un index, c'est un vrai article de février 2025 sur
l'organisation d'un mariage. L'index du blogue est une page distincte, `/blogue/`, qui figure
au `page-sitemap.xml`. Les douze sont traités ci-dessous.

---

## Les faits de référence, et ce que le site en dit lui-même

Avant de juger les articles, j'ai cherché où le site énonce ces règles. Deux pages les portent,
et elles ne disent pas la même chose.

`/livraison/` **confirme mot pour mot les faits établis** :

> 100,00 $ pour les dix premiers kilomètres depuis notre entrepôt de Sainte-Thérèse.
> 7,00 $ par kilomètre supplémentaire au-delà de 10 km, jusqu'à 40 km.
> Au-delà de 40 km : soumission sur mesure.
> Le tarif couvre l'aller. **Les prix affichés sur les fiches produits sont ceux du ramassage
> à l'entrepôt : la livraison s'ajoute.**
> Ramassage sans frais […] au 215, boulevard René-A.-Robert, local 100, Sainte-Thérèse.

La fiche produit `lettre-illuminee-marquee-letter` reprend cette grille et cette adresse à
l'identique. C'est la seule des cinq fiches consultées qui le fasse.

En face, `/forfait-jeux-essentiel/` affiche une ligne « Livraison + ramassage — **Gratuit**
dans la zone Rive-Nord, Laval, Montréal 0-20 km », chiffrée à 240 $ dans le calcul de valeur.
La fiche `photobooth-avec-animation` affirme « **La livraison est incluse** dans tous nos
forfaits ».

Conséquence pour la partie 1 : quand un article écrit « livraison incluse », il ne fabule pas,
il recopie ce que disent les pages de forfaits. **Le problème n'est donc pas seulement
éditorial, il est en amont.** Corriger les douze articles sans corriger les pages de forfaits
laisserait la contradiction intacte. Je le signale sans trancher lequel des deux régimes est le
bon : les faits établis disent que « livraison gratuite » et « livraison incluse » sont
interdites, donc ce sont les pages de forfaits qui s'en écartent.

Enfin, **aucune occurrence de « Mirabel » dans aucune des 21 pages récupérées.** Sur ce point,
le site est propre.

---

# PARTIE 1 — LES DOUZE ARTICLES

## Tableau de verdict

| # | Titre | Date de publication | Sujet | Mots | Verdict |
|---|---|---|---|---|---|
| 1 | Combien coûte la location d'un jeu gonflable au Québec ? | 12 juil. 2026 | Prix gonflables | 253 | **À retirer** |
| 2 | Comment choisir le bon jeu gonflable pour l'anniversaire de mon enfant ? | 10 févr. 2025 | Choix gonflable | 289 | **À retirer** |
| 3 | Combien coûte la location d'un photobooth au Québec ? | 12 juil. 2026 | Prix photobooth | 309 | À corriger |
| 4 | Combien coûte la location de tables et chaises au Québec en 2026 ? | 24 juil. 2026 | Prix mobilier | 1 408 | À corriger |
| 5 | Quel jeu gonflable choisir selon l'âge des enfants | 25 juil. 2026 | Choix gonflable | 1 980 | À corriger |
| 6 | Organiser une fête d'enfants à la maison : budget réel et checklist (2026) | 24 juil. 2026 | Budget fête enfants | 1 580 | À corriger |
| 7 | Party d'Halloween à la maison : idées et checklist (2026) | 25 juil. 2026 | Halloween | 2 455 | À corriger (urgent, saisonnier) |
| 8 | 10 idées d'activités pour un 5 à 7 d'entreprise réussi (2026) | 25 juil. 2026 | 5 à 7 corporatif | 2 610 | À corriger |
| 9 | Party de bureau de Noël : le guide de planification 2026 | 24 juil. 2026 | Party de Noël | 1 415 | À corriger |
| 10 | Combien coûte la location de lettres lumineuses géantes au Québec en 2026 ? | 25 juil. 2026 | Prix lettres | 1 899 | À corriger (léger) |
| 11 | Les meilleurs endroits pour une demande en mariage inoubliable | 18 févr. 2025 | Idées demande | 349 | À corriger |
| 12 | 5 Aspects les plus important lors de l'organisation de votre Mariage (slug `/blog/`) | 7 févr. 2025 | Organisation mariage | 466 | À corriger |

Aucun article n'est à garder tel quel.

---

## Le détail, article par article

### 1. `/combien-coute-la-location-dun-jeu-gonflable-au-quebec/` — À RETIRER

Publié le 12 juillet 2026, modifié le 19 août 2026 (aujourd'hui). 253 mots.

C'est l'article le plus dangereux des douze. Il promet trois fois, en 253 mots, un
remboursement météo que les conditions de location refusent explicitement.

L'article dit :

> Chez Évenox, les structures thématiques se louent installation comprise, avec une politique
> pluie qui vous rembourse à 100 %.
> […] si la météo annonce de la pluie le jour de votre événement, la location est annulée
> automatiquement et **entièrement remboursée, dépôt inclus**. Vous ne payez jamais pour une
> fête gâchée par la météo.

La page des conditions, section 5, dit :

> La météo **n'est pas un motif d'annulation** : le matériel a été réservé, retiré de notre
> inventaire et préparé pour votre date.

Ce n'est pas une nuance de formulation, c'est l'inverse. Une seule de ces deux pages peut être
opposée à un client, et c'est celle qui lui est le plus favorable.

Deuxième problème, indépendant : « les structures thématiques se louent **installation
comprise** ». La fiche produit du Mickey Mouse, le gonflable le plus cher du catalogue, dit
noir sur blanc : « **L'installation n'est pas comprise dans ce tarif.** »

Troisième : « La livraison et l'installation sont-elles incluses ? **Oui** » — formule
interdite, et contredite par `/livraison/`.

Ce qui est exact : le dépôt de 20 %, et le prix du Mickey Mouse à 280 $, confirmé par sa fiche.
Les autres prix cités (modèles d'entrée dès 100 $, Palmiers 180 $, Licorne et Mario Bros 200 $)
n'ont pas été vérifiés.

**Pourquoi retirer plutôt que corriger** : une fois retirées la promesse de remboursement,
l'installation comprise et la livraison incluse, il reste un tableau de quatre prix. Il n'y a
plus d'article. Et l'article n° 5 couvre déjà le sujet en 1 980 mots.

### 2. `/comment-choisir-le-bon-jeu-gonflable-pour-lanniversaire-de-mon-enfant/` — À RETIRER

Publié le 10 février 2025. 289 mots.

Même faute que le n° 1, en plus court :

> En cas de pluie : annulation automatique et remboursement complet, dépôt inclus
> […] Livraison, installation et récupération incluses à Laval, Montréal et sur la Rive-Nord.

Deux formules interdites en deux lignes, dont la promesse de remboursement météo.

Ce qui est bon, et qu'il faudrait sauver ailleurs : les modèles nommés (Reine des Neiges XL,
Pat Patrouille XL, Avengers, Forteresse, Terrain de Basket, Parcours d'Obstacle) existent tous
au catalogue — je les ai retrouvés dans le `product-sitemap.xml`. Le découpage par âge est
propre.

**Pourquoi retirer** : l'article n° 5, publié en juillet 2026, traite exactement le même sujet
avec sept fois plus de contenu et une réponse météo, elle, conforme aux conditions. Garder les
deux, c'est entretenir un doublon dont la version périmée est aussi la plus fausse.

### 3. `/combien-coute-la-location-dun-photobooth-au-quebec/` — À CORRIGER

Publié le 12 juillet 2026. 309 mots.

À corriger, précisément :

- **« les forfaits photobooth débutent à 599 $ »** et « Mariage — Dès 599 $ ». La fiche produit
  `photobooth-avec-animation` dit « débutent à partir de **600 $** ». Un dollar d'écart, mais
  deux sources qui se contredisent sur le prix d'appel. À aligner sur la fiche, ou à corriger
  la fiche.
- Encart de bas de page : « Photobooth premium et vidéobooth 360, **livrés et installés** avec
  un préposé sur place ». À reformuler sans présenter la livraison comme acquise.
- « Les accessoires […] ajoutent environ 20 $ à la facture » : non vérifié.

Ce qui est correct : le dépôt de 20 %, la mention du ramassage possible, et — c'est à noter —
le conseil « La livraison. Plusieurs entreprises facturent un supplément selon la distance.
**Vérifiez toujours si c'est inclus dans le forfait.** » C'est le seul passage de tout le
blogue qui traite la livraison comme une variable plutôt que comme un acquis. Il est juste. Il
faudrait le compléter en donnant la grille d'Évenox au lieu de renvoyer le lecteur à sa propre
vigilance.

### 4. `/prix-location-tables-chaises-quebec/` — À CORRIGER

Publié le 24 juillet 2026. 1 408 mots.

C'est l'article qui contient l'erreur la plus reproduite du blogue : **une grille de livraison
qui n'existe nulle part ailleurs sur le site.**

> Les prix des forfaits mobilier couvrent la zone de 0 à 20 km autour de notre entrepôt de
> Sainte-Thérèse […] Au-delà, un ajustement de secteur s'applique selon la distance :
> **-100 $** pour les secteurs les plus proches, **+100 $** pour les secteurs intermédiaires,
> **+200 $** pour les secteurs les plus éloignés.

Rien de tout cela ne correspond aux faits établis (100 $ pour 10 km, puis 7 $/km jusqu'à 40 km,
puis soumission). La grille est de surcroît incohérente avec elle-même : elle annonce que le
prix couvre déjà 0 à 20 km, puis prévoit un rabais de 100 $ « pour les secteurs les plus
proches », qui sont déjà couverts. Cette grille est reprise telle quelle dans les articles n° 7
et n° 8.

Autres corrections :

- « La livraison est-elle incluse dans le prix de location ? Dans les forfaits mobilier, oui :
  livraison, placement complet […] **inclus dans le prix affiché** ». Formule interdite.
- **Heures de ramassage** : « lundi au vendredi 12 h à 18 h, samedi 9 h à 12 h, dimanche 9 h à
  13 h ». La page `/livraison/` dit tout autre chose : « Heures d'ouverture (tous les jours) —
  Matin 8 h – 10 h. Soir 17 h – 19 h. » Deux horaires incompatibles. Je ne sais pas lequel est
  le bon : **non établi.**
- L'adresse n'est jamais donnée en entier (« notre entrepôt de Sainte-Thérèse »), alors que le
  numéro de local, 100, fait partie de l'adresse de ramassage officielle.
- Encart final : « ton total **livré**, placé et ramassé ».

Ce qui est vérifié et exact : chaise pliante blanche 3 $, chaise Chiavari 8 $ — les deux fiches
produits confirment. Les prix des quatre forfaits mobilier (449 / 649 / 849 / 1 049 $) et les
prix par place n'ont pas été vérifiés.

### 5. `/choisir-jeu-gonflable-selon-age/` — À CORRIGER

Publié le 25 juillet 2026. 1 980 mots.

Le meilleur des trois articles sur les gonflables, et de loin. Sa réponse météo est exemplaire
et compatible avec les conditions :

> Un gonflable mouillé devient glissant, donc on ne fait pas jouer les enfants dessus sous la
> pluie. Le mieux est de nous appeler […] dès que la météo se gâte […] Prépare aussi un plan B
> intérieur.

Aucune promesse de remboursement. C'est exactement le ton à généraliser.

À corriger :

- « le forfait Jeux Essentiel à 499 $ combine 1 gonflable au choix et 4 jeux géants,
  **livraison, installation, montage et démontage inclus** » — puis, plus loin, « tout est
  inclus : livraison, installation, montage et démontage » et « **livraison, installation et
  démontage inclus** ». Trois occurrences de formules interdites.
- Encart final : « le **prix livré** s'affiche immédiatement ».
- **Contradiction de prix avec l'article n° 1** : ici, « les prix individuels tournent autour
  de **140 $ à 200 $** par jour selon le modèle », répété dans la FAQ. L'article n° 1 annonce
  « entre **100 $ et 280 $** par jour ». La fiche du Mickey Mouse affiche 280 $, donc la
  fourchette 140–200 $ est trop basse au moins par le haut. Les deux articles doivent citer la
  même fourchette, et cette fourchette doit être relevée sur les fiches.
- « la Zone Arcade avec 3 jeux au choix à 299 $ la fin de semaine » : non vérifié.

### 6. `/organiser-fete-enfants-maison-budget-checklist/` — À CORRIGER

Publié le 24 juillet 2026. 1 580 mots.

Bon article de fond : le budget poste par poste (gâteau 25–60 $, déco 30–80 $, bouffe
40–100 $, sacs 3–5 $/enfant) est présenté comme une estimation générale, pas comme un tarif
Évenox — c'est honnête et ça ne pose pas de problème.

À corriger :

- « avec livraison, installation, montage et démontage inclus », puis « Livraison,
  installation, montage, démontage — **tout est compris dans le prix affiché** », puis « La
  livraison, l'installation, le montage et le démontage sont compris dans le prix affiché ».
  Trois occurrences.
- « Tous les forfaits sont **livrés et installés** sur la Rive-Nord, à Laval et à Montréal. »
- La FAQ sur le ramassage est en revanche bien tournée : « Le ramassage à Sainte-Thérèse […]
  est possible pour plusieurs équipements loués à la carte ». À conserver, en ajoutant
  l'adresse complète.

Le prix du forfait Jeux Essentiel (499 $, valeur 760 $) est confirmé par la page
`/forfait-jeux-essentiel/`. Les forfaits Jeux Premium (599 $) et Méga Fête (1 099 $) n'ont pas
été vérifiés.

### 7. `/party-halloween-maison-idees-checklist/` — À CORRIGER, EN PRIORITÉ

Publié le 25 juillet 2026. 2 455 mots. L'article porte sur un événement qui a lieu dans
73 jours ; c'est le seul du lot dont la correction a une échéance.

**Vérifié exact** : « Le 31 octobre 2026 tombe un samedi ». C'est le cas. Toute la prémisse de
l'article tient.

À corriger :

- La grille de secteur fautive de l'article n° 4, reprise intégralement : « -100 $ entre 0 et
  10 km, +100 $ entre 20 et 30 km, +200 $ entre 30 et 40 km ».
- « Est-ce que la **livraison et l'installation sont incluses** ? Nos forfaits tout inclus
  comprennent la livraison, l'installation, le montage et le démontage » ; et plus haut
  « livraison et installation **comprises** ».
- « des prix individuels d'environ 140 $ à 200 $ par jour » — même sous-estimation qu'à
  l'article n° 5.
- Prix non vérifiés, à confirmer avant republication : machines à gourmandises dès 100 $ (slush
  1 saveur 100 $, 2 saveurs 200 $, 3 saveurs 250 $), Zone Arcade 3 jeux 299 $ la fin de
  semaine, vidéobooth 360 de 599 $ à 1 499 $, Forfait Photobooth Signature 1 499 $, forfait
  mobilier dès 449 $, table pliante ~10 $, nappe ~10 $.
- Note : la chaise pliante blanche à 3 $ et la lettre lumineuse à 70 $ citées ici sont, elles,
  confirmées par les fiches.

Le reste — les couches d'ambiance, la checklist J-30/J-7/jour J, les consignes électriques
(DDFT, rallonges extérieures homologuées) — est solide et ne demande rien.

### 8. `/idees-activites-5-a-7-entreprise/` — À CORRIGER

Publié le 25 juillet 2026. 2 610 mots. Le plus long du blogue.

À corriger :

- Troisième reprise de la grille de secteur fautive, cette fois deux fois dans le même article
  (corps et FAQ) : « L'ajustement de secteur est de -100 $ entre 0 et 10 km, +100 $ entre 20 et
  30 km et +200 $ entre 30 et 40 km. »
- « avec **livraison, installation, montage et démontage inclus** » ; « Les forfaits
  corporatifs **incluent la livraison**, l'installation, le montage et le démontage » ; « les
  forfaits mobilier comprennent la livraison, le placement, les nappes et le ramassage ».
- Encart final : « **prix livré** ».
- Prix à l'unité cités : « la chaise pliante blanche est à 3 $, la chaise Chiavari à 8 $ »
  — confirmés. « la table pliante autour de 10 $ et la nappe autour de 10 $ » — la fiche de la
  chaise pliante affiche, dans son bloc « souvent loué avec », table pliante 6 pi à 10,00 $ et
  nappe 6 pi blanche à 10,00 $, nappe noire à 8,00 $. L'article est donc juste pour la table et
  la nappe blanche, imprécis pour la noire.
- « le forfait 5 à 7 d'Équipe à 1 195 $ », « attestation d'assurance et facture conforme » :
  non vérifiés. L'attestation d'assurance mérite une vérification particulière — c'est un
  engagement contractuel envers des gestionnaires d'immeubles, et la page des conditions n'en
  parle nulle part.

### 9. `/party-de-bureau-noel-guide-planification-2026/` — À CORRIGER

Publié le 24 juillet 2026, modifié le 16 août 2026. 1 415 mots.

L'échéancier (décider en septembre, réserver en octobre) est encore parfaitement d'actualité au
19 août. L'article n'est pas périmé ; il est en avance, ce qui est le bon moment pour le
corriger.

À corriger :

- « La livraison et l'installation sont-elles incluses ? **Oui. Tous nos forfaits corporatifs
  incluent la livraison, l'installation et le démontage.** » ; « animation, décor, livraison et
  installation **inclus** » ; « livraison et installation **incluses** ». Trois occurrences.
- « le vidéobooth 360, offert en forfaits **dès 599 $** » — à rapprocher du « à partir de
  600 $ » de la fiche photobooth. Produits distincts, mais deux prix d'appel voisins et
  divergents circulent : à trancher.
- Prix non vérifiés : Party de Bureau 1 995 $, Gala Signature 2 495 $, 5 à 7 d'Équipe 1 195 $,
  Zone Arcade 299 $, machines à gourmandises dès 100 $. La lettre lumineuse « dès 70 $ la
  lettre » est confirmée par sa fiche.
- L'« environ 40 $ par personne » est une division du forfait par 50 personnes : le calcul est
  transparent et se tient, à condition que le prix du forfait soit exact.
- L'attestation d'assurance est mentionnée six fois, « incluse dans tous nos forfaits
  corporatifs ». Même remarque qu'à l'article n° 8 : engagement lourd, absent des conditions.

### 10. `/prix-location-lettres-lumineuses-quebec/` — À CORRIGER (LÉGER)

Publié le 25 juillet 2026. 1 899 mots. **C'est le meilleur article du blogue**, et le seul
dont le corps ne contient aucune formule interdite.

Il traite la livraison exactement comme il faut :

> Le tarif de 70 $ le caractère correspond à la location des lettres elles-mêmes. La livraison,
> le montage et le démontage **se valident selon ton secteur**, ton horaire et le type de salle.

Le tarif de 70 $ le caractère et toute la grille de calcul (2 lettres 140 $, 4 lettres 280 $,
5 lettres 350 $, 6 lettres 420 $) sont **confirmés à l'identique par la fiche produit**
`lettre-illuminee-marquee-letter`. C'est le seul endroit du blogue où j'ai trouvé une
concordance parfaite entre article et fiche.

Deux corrections seulement :

- L'encart de bas de page contredit tout le reste : « Le prix se calcule pendant que tu tapes,
  **livraison comprise**. » Formule interdite, et elle défait en cinq mots la prudence de
  1 899 mots.
- L'article explique que la livraison « se valide selon ton secteur » sans jamais donner la
  grille — alors que la fiche produit de la lettre, elle, l'affiche en toutes lettres
  (100 $ / 10 km, puis 7 $/km jusqu'à 40 km, puis soumission). C'est une occasion manquée
  plutôt qu'une faute : la donnée existe, elle est juste, il suffirait de la reprendre.

Prix de forfaits non vérifiés : Décor WOW 899 $, Soirée Signature 1 449 $, 5 à 7 d'Équipe
1 195 $, Mariage Signature 1 899 $, Party de Bureau 1 995 $.

### 11. `/les-meilleurs-endroits-pour-une-demande-en-mariage-inoubliable/` — À CORRIGER

Publié le 18 février 2025. 349 mots.

Aucune promesse tarifaire, aucune formule interdite. Un seul problème, mais il est de fond :

> Installation discrète au lieu de votre choix, **partout au Québec**

Les faits établis plafonnent la livraison à 40 km, au-delà desquels tout passe par soumission.
Or l'article recommande le belvédère du Mont-Royal, la Chute Montmorency, la Terrasse Dufferin,
la Place Royale, les Plaines d'Abraham, le village de Tremblant et l'Auberge du Lac Taureau,
puis promet d'installer « partout au Québec ». Quatre de ces lieux sont dans la région de
Québec, à plus de 250 km de Sainte-Thérèse.

À noter, et ce n'est pas la faute de l'article : la page `/livraison/` écrit elle aussi
« partout au Québec et jusqu'à Ottawa » et liste « Ottawa / Outaouais » parmi les régions
desservies, dans la même page qui plafonne la grille à 40 km. L'article ne fait que répéter une
promesse que le site se fait à lui-même. À trancher en amont.

Second point, moins grave : la plupart des lieux cités sont des sites publics ou protégés
(parc du Mont-Royal, parc de la Chute-Montmorency, Plaines d'Abraham, Vieux-Québec). Y installer
un tapis rouge, des poteaux, des chandelles et des lettres lumineuses alimentées demande des
autorisations. L'article n'en dit rien et laisse entendre que c'est un simple choix de client.
Une phrase suffirait.

### 12. `/blog/` — « 5 Aspects les plus important lors de l'organisation de votre Mariage » — À CORRIGER

Publié le 7 février 2025. 466 mots.

Quatre problèmes, dont trois de forme :

- **Faute d'accord dans le titre H1**, visible sur la page et dans le sitemap : « 5 Aspects les
  plus **important** ». Devrait être « importants ».
- **Collision d'URL** : l'article occupe `/blog/` alors que l'index du blogue est `/blogue/`.
  Un article de fond squatte l'adresse la plus naturelle pour la section. À déplacer vers un
  slug descriptif, avec redirection.
- « Tables, chaises Chiavari, nappes et vaisselle **livrées et installées** » : la livraison est
  à nouveau présentée comme acquise.
- Sur le fond : trois des cinq sections (la robe de mariée, le menu, le thème) ne concernent en
  rien la location d'équipement. L'article est un billet de tendances générique. Il n'est pas
  faux, il est hors sujet pour une entreprise de location. Si on le garde, c'est comme page
  d'accroche, et il faudrait alors qu'il mène quelque part de plus précis que
  « soumission gratuite ».

---

## Les trois corrections qui règlent le plus de cas

Si l'on ne devait faire que trois choses :

1. **Supprimer les deux promesses de remboursement météo** (articles n° 1 et n° 2). C'est le
   seul écart qui expose directement l'entreprise, parce qu'il promet de l'argent que les
   conditions refusent de rendre.
2. **Trancher la question de la livraison une seule fois, en amont**, puis propager. Onze des
   douze articles portent au moins une formule de type « livraison incluse », « livraison
   comprise », « montage inclus » ou « prix livré » — mais les pages de forfaits et une fiche
   produit disent la même chose. Corriger les articles seuls ne réglerait rien.
3. **Supprimer la grille de secteur -100 $ / +100 $ / +200 $** des articles n° 4, 7 et 8, et la
   remplacer par la grille réelle de `/livraison/`.

---

# PARTIE 2 — LA PAGE DES CONDITIONS DE LOCATION

**URL** : `https://evenox.ca/conditions-de-location-evenox/`
Trouvée dans `page-sitemap.xml`. Lue en entier.
Publiée le 21 juillet 2026. `dateModified` : 19 août 2026, 20 h 20 UTC. Bandeau affiché :
« Mise à jour : 16 août 2026 ».
1 291 mots dans le bloc de conditions. Onze sections numérotées, plus un résumé et un sommaire.

## 1. Est-elle complète ?

Sur les douze points demandés :

| Point | Présent ? | Où, et ce qu'elle dit |
|---|---|---|
| Dépôt | Oui | §1 et §2 — 20 % à la réservation ; rien n'est réservé tant qu'il n'est pas payé |
| Solde | Oui | §2 — le reste à la réception, « dû que vous soyez présent ou non » |
| Taxes | Oui | §2 et résumé — « en sus des prix affichés » |
| Mode de paiement | Oui | §2 — carte de crédit seulement, en ligne ; ni comptant, ni chèque, ni Interac ; carte conservée au dossier |
| Annulation | Oui | §4 — la section la plus détaillée : frise à quatre paliers, tableau à cinq lignes, crédit valable 12 mois |
| Retard | Oui | §7 — 50 % de la valeur de location par tranche de 24 h, avec exemple chiffré |
| Dommages | Oui | §8 — usure normale jamais facturée ; réparation ou remplacement ; ampoule 5 $ ; vol avec rapport de police sous 48 h |
| Nettoyage | **Partiel** | §7 et §11 — retour « propre, sec et complet », nappes non lavées, nettoyage excessif d'une machine 50 $, vaisselle rincée. Aucune clause générale de nettoyage |
| Responsabilité | Oui | §6 — le client répond du matériel ; plafond : « notre responsabilité ne dépasse jamais le montant de votre location » |
| **Livraison** | **Absente** | **Zéro occurrence de « livr » dans les 1 291 mots** |
| Ramassage | **Partiel** | §3 couvre la prise de possession à l'entrepôt ; §7 couvre le retour par le client. Rien sur la reprise par Évenox après une livraison |
| Météo | Oui | §5 — pas un motif d'annulation ; déplacement sur site sans frais ; report sur alerte d'Environnement Canada |

### Ce qui manque

**La livraison, entièrement.** C'est le trou principal. La page ne contient pas une seule fois
la racine « livr ». La section 3 s'intitule « Où je prends le matériel ? » et ne décrit que le
ramassage à l'entrepôt. Or la meta description de cette même page annonce au lecteur et aux
moteurs : « Conditions de location Evenox : dépôt, **livraison**, ramassage, météo et
annulation. » La page promet une clause qu'elle ne contient pas.

Conséquence concrète : aucune règle contractuelle ne couvre ce qui se passe une fois le camion
arrivé. Qui doit être présent, ce qui arrive si personne n'y est, qui répond du matériel entre
la livraison et le début de l'événement, ce qui se passe si le site est inaccessible, et à
quelle heure la reprise a lieu. Le §2 prévoit bien de porter le solde à la carte si le client
est absent, mais c'est une clause de paiement, pas une clause de livraison.

**Le pendant du ramassage après livraison.** Le §7 décrit un client qui rapporte le matériel.
Il ne décrit pas Évenox qui vient le reprendre. Le matériel doit-il être rassemblé, plié, sorti ?
Que se passe-t-il s'il ne l'est pas ?

**Les paliers de durée.** Les cinq fiches consultées facturent toutes selon un barème de durée,
et aucune n'utilise le même : ×1,5 / ×2 / ×4 à partir de 48 h pour la chaise pliante et la
lettre, les mêmes multiplicateurs à partir de 24 h pour la Chiavari, « ×0,5 en sus par journée
de plus » à partir de 26 h pour le Mickey Mouse, et 50 % du montant initial au-delà de 48 h pour
le photobooth. Les conditions n'en disent pas un mot, alors que c'est le mécanisme qui détermine
le prix de toute location de plus d'une journée.

**L'assurance matériel à 20 $.** Elle est vendue à l'étape 4 du panier, « fortement
recommandée » selon `/guide-de-reservation/`, listée dans les services complémentaires de
`/livraison/`. Le §8 facture les bris et les remplacements sans jamais mentionner qu'une
couverture existe, ni ce qu'elle change.

**Les deux autres services complémentaires** : installation à 20 $ (jusqu'à 3 articles et
moins de 300 lb) et livraison à heure exacte à 100 $, tous deux sur `/livraison/`. Absents.

**Klarna.** `/guide-de-reservation/` propose « Paiement en 4 fois sans intérêt avec Klarna » à
l'étape 6. Le §2 dit « carte de crédit seulement ».

**Clauses juridiques usuelles, toutes absentes** : âge minimum du locataire, force majeure hors
météo, droit applicable et juridiction en cas de litige, traitement des renseignements
personnels, droit à l'image pour les photos prises sur les lieux. Je les signale comme absentes,
sans me prononcer sur leur nécessité — ce n'est pas à moi d'en juger.

### Une incohérence interne à la page

Le résumé « L'essentiel en six lignes » affirme :

> Nous gardons votre date **5 jours sans frais**, le temps que vous décidiez.

Ce délai de cinq jours n'apparaît **dans aucune des onze sections**. Le §1 dit au contraire que
tant que le dépôt n'est pas payé, rien n'est réservé et que quelqu'un d'autre peut louer les
mêmes articles. Le résumé promet donc une réservation gratuite de cinq jours que le corps du
document contredit.

### Un point de vigilance sur la formulation

Le §5 emploie deux fois « report **sans frais** » :

> Alerte d'Environnement Canada, ou conditions qui rendent l'utilisation dangereuse : vous avez
> droit à un report sans frais.
> Un report vers une autre date est sans frais tant que le matériel n'a pas été préparé et
> chargé, sur avis écrit d'au moins 24 heures.

Lues en entier, ces clauses sont encadrées et ne disent pas « report sans frais en cas de
pluie » : le même paragraphe commence par « La météo n'est pas un motif d'annulation ». Mais
les mots « report sans frais » y figurent, et ils font partie des formules interdites. Sortis de
leur contexte — dans un extrait, une capture d'écran, une citation par un client — ils
promettent plus que ce que le document accorde. Je le signale comme un risque de formulation,
pas comme une faute.

## 2. Est-elle cohérente avec les fiches produits ?

Cinq fiches vérifiées : `chaise-pliante-blanche`, `chaise-chiavari`,
`location-jeu-gonflable-mickey-mouse`, `lettre-illuminee-marquee-letter`,
`photobooth-avec-animation`. J'ai ajouté `/livraison/`, `/guide-de-reservation/` et
`/forfait-jeux-essentiel/`, qui portent des règles de même nature.

**Ce qui concorde.** Quatre des cinq fiches (toutes sauf le photobooth) affichent le même bloc,
mot pour mot conforme au §2 : « Réservez avec 20 % du total. Le solde au ramassage. Dollars
canadiens, taxes en sus. Sans frais cachés. Paiement par carte de crédit seulement, en ligne. »
Elles renvoient toutes vers « Politique et conditions de location ». Sur le dépôt, le solde, les
taxes et le mode de paiement, la chaîne tient.

**Les contradictions**, signalées sans être corrigées :

**a) Mode de paiement du solde.** Fiche `photobooth-avec-animation` :

> Le solde peut être réglé : par **carte de crédit** (la même carte ou une autre), en **argent
> comptant**, par **virement bancaire**, par **carte de débit**

Conditions §2 : « Par carte de crédit seulement, en ligne. Nous n'acceptons ni comptant, ni
chèque, ni virement Interac. » Contradiction frontale, sur le point le plus opérationnel du
document.

**b) Livraison incluse ou facturée.** Fiche photobooth : « **La livraison est incluse** dans
tous nos forfaits ». Page `/forfait-jeux-essentiel/` : « Livraison + ramassage — **Gratuit**
dans la zone Rive-Nord, Laval, Montréal 0-20 km ». Page `/livraison/` : « Les prix affichés sur
les fiches produits sont ceux du ramassage à l'entrepôt : **la livraison s'ajoute** », 100 $ pour
10 km puis 7 $/km. Les conditions, muettes, n'arbitrent pas.

**c) Installation comprise ou non.** Trois régimes coexistent : fiche Mickey Mouse,
« L'installation n'est pas comprise dans ce tarif » ; fiche photobooth, « Chaque forfait inclut
l'installation, le démontage et l'animation » ; conditions §11 pour la décoration, « Le montage
et le démontage, c'est nous ». Ces trois énoncés peuvent tous être vrais s'ils visent des
catégories différentes, mais rien ne le dit : les conditions n'établissent la règle que pour la
décoration et laissent le reste sans réponse.

**d) Paliers de durée, tous différents et tous absents des conditions.** Chaise pliante blanche :
base 2 jours (48 h), puis ×1,5 / ×2 / ×4. Chaise Chiavari : base **24 h**, puis ×1,5 / ×2 / ×4.
Lettre illuminée : base 2 jours. Mickey Mouse : base **26 h**, la fiche précisant elle-même
« Le palier "1 jour" couvre 26 h, et non 48 h comme le mobilier ». Photobooth : « durée standard
48 heures ». Cinq barèmes pour cinq produits, et aucune mention dans les conditions.

**e) Frais de prolongation.** Fiche photobooth : « Toute prolongation au-delà de 48 h entraînera
des frais supplémentaires équivalents à **50 % du montant initial** ». Conditions §7 : « chaque
tranche de **24 h** coûte 50 % de la **valeur de location de l'article** ». Ni la même unité de
temps, ni la même assiette de calcul.

**f) Sort du dépôt en cas d'annulation.** `/livraison/`, étape 5 : « Ce dépôt […] **n'est pas
remboursable en argent**, mais il vous est crédité pendant 12 mois si vous annulez. »
`/guide-de-reservation/` : « En cas d'annulation, un **crédit magasin** vous sera offert. »
Conditions §4 : « Jusqu'à 14 jours avant — Vous annulez et récupérez **la moitié de votre dépôt
en argent** — ou la totalité en crédit. » Les deux pages de service nient un remboursement en
argent que les conditions accordent.

**g) Heures de ramassage et de retour.** `/livraison/` : ouverture tous les jours, 8 h – 10 h et
17 h – 19 h ; ramassage la veille 17 h – 19 h ou le jour même 8 h – 10 h ; retour le soir
17 h – 19 h ou le lendemain 8 h – 10 h. Article de blogue n° 4 : lundi au vendredi 12 h – 18 h,
samedi 9 h – 12 h, dimanche 9 h – 13 h. Conditions §7 : « à l'heure convenue », sans horaire.
Trois versions, dont deux incompatibles.

**h) Assurance matériel.** Vendue 20 $ au panier et « fortement recommandée ». Le §8 énonce le
régime de responsabilité pour les bris sans jamais y faire allusion. Un client qui a payé
l'assurance ne trouve, dans le document contractuel, aucune trace de ce qu'il a acheté.

**i) Zone desservie.** `/livraison/` : « nous livrons […] **partout au Québec et jusqu'à
Ottawa** », avec « Ottawa / Outaouais » parmi les régions — dans la page même qui plafonne la
grille tarifaire à 40 km. Les conditions ne définissent aucune zone.

**j) Adresse de ramassage.** Conditions §3 et pied de page : « 215, boulevard René-A.-Robert,
Sainte-Thérèse (Québec) J7E 4L1 ». `/livraison/` et la fiche de la lettre illuminée :
« 215, boulevard René-A.-Robert, **local 100**, Sainte-Thérèse ». **Le numéro de local manque
dans les conditions**, alors que c'est le document censé dire au client où se présenter.

**k) Contradictions internes aux fiches elles-mêmes** (hors du champ des conditions, mais elles
affaiblissent la même chaîne) :
- `chaise-pliante-blanche` : titre « 3,00 $ / chaise », meta description « à partir de
  **2,25 $**/chaise ». Tableau « Charge maximale 300 lb », meta description « **225 lb** de
  capacité ».
- `chaise-chiavari` : fiche « Résine **transparente** — la seule offerte », meta description
  « chaise chiavari **blanche ou noire** ». Meta description « **Livraison** à Laval, Montréal
  et alentours », corps « Prix pour ramassage à notre entrepôt ».
- `lettre-illuminee-marquee-letter` : corps rigoureux et conforme, meta description « Service
  Clé en Main incluant **livraison et Installation** ».

Dans les trois cas, le corps de la fiche est à jour et la meta description ne l'est pas.

## 3. Est-elle lisible ?

**Mesures relevées.** 1 291 mots. 120 phrases. Moyenne de 10,8 mots par phrase. Seulement deux
phrases dépassent 30 mots. Structure : 1 titre H1, 14 titres H2, 4 titres H3, 16 listes,
1 tableau, et seulement 6 paragraphes courants.

**Y a-t-il un sommaire ?** Oui. Un sommaire complet de onze entrées, chacune reliée par une
ancre fonctionnelle vers sa section (`#evx-comment-je-reserve`,
`#evx-si-j-annule-qu-est-ce-que-je-perds`, etc.).

**Verdict : la page est lisible, et nettement plus qu'un document contractuel ordinaire.** Les
titres sont formulés en questions de client (« Combien je paie, et quand ? », « Si j'annule,
qu'est-ce que je perds ? »), le texte passe par des listes plutôt que par des paragraphes, le
§7 donne un exemple chiffré (« Une table louée 10 $ revient à 15 $ après 24 h »), et la §4 est
doublée d'une frise chronologique et d'un tableau. La date de mise à jour est affichée. Rien à
reprocher sur le fond de la forme.

### Ce que je changerais à la forme, sans toucher au fond

1. **Dégonfler la triple redondance d'ouverture.** Avant d'atteindre la section 1, le lecteur
   voit trois fois la même information : le bandeau de chiffres-clés (20 % / 7 jours / 24 h),
   puis « L'essentiel en six lignes », puis le sommaire. Puis, à la section 4, la frise reprend
   une quatrième fois les mêmes seuils. Un seul de ces blocs suffit avant le sommaire.
2. **Section 4 : choisir entre la frise et le tableau.** Ils disent la même chose l'un après
   l'autre. La frise est plus lisible, le tableau plus précis (il distingue l'annulation totale
   de la réduction partielle). Fusionner, ou garder le tableau seul.
3. **Numéroter les clauses de façon citable.** Les sections portent des numéros (1 à 11) mais
   les règles à l'intérieur n'en ont pas. Impossible de dire à un client « voyez le point 7.3 ».
   Pour un document opposable, une numérotation à deux niveaux vaudrait mieux que des puces.
4. **Unifier le registre.** Les titres sont à la première personne du singulier (« Comment
   **je** réserve ? », « Où **je** prends le matériel ? ») et le corps est au vouvoiement
   (« **Vous** êtes responsable du matériel »). Le lecteur change de personne à chaque titre.
   Choisir l'un des deux.
5. **Regrouper les sections voisines.** Les §9 (frais après l'événement) et §10 (solde impayé)
   traitent tous deux de la facturation postérieure. Les §7 (retour) et §8 (bris) se lisent
   ensemble. On passerait de onze sections à neuf sans rien retirer.
6. **Offrir une version imprimable ou PDF.** La page se termine par « Le contrat que vous signez
   contient les conditions complètes […] Elles vous sont remises avec le matériel. » Le lecteur
   qui veut emporter ou archiver ce qu'il vient de lire n'a aucun moyen de le faire.
7. **Ajouter un numéro de version à côté de la date.** Le bandeau dit « Mise à jour : 16 août
   2026 » alors que la page a été modifiée le 19 août à 20 h 20 UTC. Une date saisie à la main
   dérive ; un numéro de version et une date générée automatiquement ne dérivent pas.

---

## AVERTISSEMENT — cette page est générée, ne la modifiez pas dans WordPress

Le balisage confirme la mise en garde. Tout le contenu de la page est enveloppé dans des classes
propriétaires cohérentes — `evx-cond`, `evx-hero`, `evx-tete`, `evx-intro`, `evx-chiffres`,
`evx-chiffre`, `evx-resume`, `evx-somm`, `evx-frise`, `evx-tab`, `evx-tab-enrobe`, `evx-note`,
`evx-maj`, `evx-contact`, `evx-tel`, `evx-n`, `evx-s` — et les ancres de sections sont des
slugs dérivés automatiquement des titres, y compris dans leur translittération des apostrophes
(`#evx-si-j-annule-qu-est-ce-que-je-perds`, `#evx-des-frais-apres-l-evenement`). Le document
porte aussi un marqueur `<!-- EVX-RICH-LINKS -->`. Ce sont des signatures de production
programmatique, pas d'une saisie dans l'éditeur WordPress.

**Toute correction saisie dans WordPress serait écrasée à la prochaine exécution du script.**
Les modifications listées ci-dessus doivent être faites dans la source qui génère la page, puis
régénérées.

Je n'ai pas trouvé ce script : le dépôt ne contient qu'un `README.md`. Localiser la source est
donc le préalable à toute correction, et je ne peux pas indiquer où elle se trouve —
**non établi**.

---

## Ce que je n'ai pas vérifié

Pour que la liste soit honnête :

- 241 des 246 fiches produits, et toutes les pages de forfaits sauf Jeux Essentiel. La majorité
  des prix cités dans les articles n'a donc pas de contrepartie vérifiée, et je les ai signalés
  comme tels article par article.
- Lequel des deux horaires de ramassage est le bon : **non établi.**
- Si l'attestation d'assurance est réellement fournie avec les forfaits corporatifs : **non
  établi.** Elle est mentionnée douze fois au total dans les articles n° 8 et n° 9, et absente
  des conditions.
- Le contenu du contrat papier signé par le client, auquel la page renvoie. Je n'en ai vu que
  la mention.
- Le comportement réel du panier, du calcul de livraison et du paiement : les vérifier aurait
  exigé de créer une commande et de saisir des coordonnées. Je me suis arrêté avant.
