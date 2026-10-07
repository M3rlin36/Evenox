# Audit de ta campagne actuelle — ce qu'on garde, ce qu'on change, ce qu'on coupe

*Préparé le 7 octobre 2026, sans accès au compte Google Ads. Sources : données publiques (Centre de transparence des annonces Google, code source d'evenox.ca, conteneur Google Tag Manager public).*

> **Légende de fiabilité**
> - **[CONSTATÉ]** : vu directement (annonce affichée, code du site, réponse du serveur).
> - **[DÉDUIT]** : conclusion probable tirée des indices publics, à confirmer dans le compte.
> - **[À CONFIRMER]** : seulement les exports du compte (section 7) peuvent trancher.

---

## 1. En 30 secondes

1. **Tes pubs ne sont plus diffusées depuis le 23 septembre 2026 [CONSTATÉ].** Aucune des 38 annonces du compte n'a été vue après cette date. Il faut vérifier pourquoi : campagne en pause, budget, paiement refusé ou annonces refusées.
2. **38 annonces en 18 mois : 14 sur des fêtes d'enfants ou de l'équipement à petit panier, 7 sur les tables et chaises, 8 sur la cabine photo, 4 sur la déco ou le mariage, 5 de marque ou génériques [CONSTATÉ].** Les produits à petit panier : gonflables, crème glacée molle, génératrice, popcorn, lancer de hache, laser tag, chaises à 1,50 $. **Aucune annonce corporative dédiée** : les seules mentions sont « corpo » dans une variante d'E02 et « team building » dans E23. **Aucune ne parle de party des Fêtes, de 5 à 7, de gala ou de forfaits corporatifs à 1 195–2 495 $.** C'est l'inverse de ton créneau payant.
3. **Positionnement « rabais » qui contredit le haut de gamme [CONSTATÉ]** : « prix mini », « dès 1,50 $ », codes EVENOX10, EVENOX 20 $, 10 % de rabais, « Offre limitée », une mascotte kangourou en dessin animé et un gonflable Minnie Mouse (personnage Disney).
4. **Trois problèmes de langue et de conformité [CONSTATÉ]** : le préfixe anglais « **Learn more |** » est encore actif sur l'annonce la plus récente (vue jusqu'au 23 sept.). On trouve aussi « tables cheap », « Marquee Letter », des accessoires photo en anglais (« HOT MESS », « TEAM GROOM ») et des fautes (« c'est régler », « Personne Se Souvient pas », « &amp; »).
5. **Des pubs ont été diffusées en France [CONSTATÉ]** : 4 annonces, entre avril 2025 et le 23 septembre 2026. C'est de l'argent dépensé hors marché, signe que le ciblage géographique est mal réglé.
6. **Prix et promesses incohérents avec le site [CONSTATÉ]** : la cabine photo est annoncée à 599 $ « tout inclus », à 650 $ pour 2 h et à 599 $ pour 3 h ailleurs. L'annonce dit « 1000+ » alors qu'une autre dit « 500 événements ». Une pub promet « Pas de surprise sur la facture » alors que la livraison est tantôt incluse, tantôt 100 $ + 7 $/km.
7. **Mesure des conversions fragile [CONSTATÉ dans le code]** : deux comptes Google Ads différents sont présents sur le site (AW-16529262834 dans GTM, AW-16776285171 via l'extension Google pour WooCommerce). Une seule conversion « lead », sans qualification. Le consentement est refusé par défaut **seulement en Europe**, donc pas au Québec (Loi 25). Le pixel OpenAI se charge sans consentement. Le pixel Meta de base est absent.

**Verdict global : on ne « répare » pas la campagne actuelle, on la remplace.** On garde le compte, son historique et 6 angles qui marchent bien (réponse en 24 h, prix fixe, cabine photo clé en main), réécrits dans la nouvelle structure à 6 campagnes. Tout le reste est mis en pause (pas supprimé).

---

## 2. Méthode et limites

| Source | Résultat |
|---|---|
| **Centre de transparence des annonces Google** | **OK.** Annonceur « Alexandre Séguin », ID `AR16986025301202960385`, vérifié au Canada. J'ai interrogé l'interface interne (`adstransparency.google.com/anji/_/rpc/SearchService/SearchCreatives` et `LookupService/GetCreativeById`) : **38 créations** au total (37 vues au Canada, 1 vue seulement en France). Formats : 25 texte, 7 image, 6 vidéo. Pour chaque annonce, j'ai lu le texte rendu, toutes les variantes, les dates de 1re et dernière diffusion et les pays (avec la tranche d'impressions UE quand l'annonce a été vue en Europe). Pour les vidéos, j'ai lu les titres, l'URL affichée et la vidéo YouTube liée. |
| **Limites du Centre de transparence** | Il ne donne **ni les dépenses, ni les clics, ni les mots-clés, ni l'URL finale exacte**. Il donne seulement l'URL ou le chemin affiché. Il ne nomme ni la campagne ni le groupe d'annonces. Les annonces de recherche montrent une combinaison de titres parmi d'autres, pas les 15 titres. La date « dernière diffusion » peut avoir 24 à 48 h de retard. |
| **Bibliothèque publicitaire Meta** (facebook.com/ads/library, Canada, « Evenox ») | **Bloquée** (HTTP 403, connexion obligatoire), aussi par WebFetch. → **À vérifier à la main** : Pays = Canada, Tous les types de pub, recherche « Évenox » et « Evenox ». Note : tu publies depuis un **profil personnel**, pas une Page d'entreprise (voir `correctifs-urgents.md` #12). Une pub Meta exige une Page, donc il est probable qu'aucune pub Meta ne tourne. |
| **TikTok** (library.tiktok.com, Creative Center) | La bibliothèque TikTok ne couvre que l'**Europe, le Royaume-Uni et la Suisse** (obligation DSA). Le Canada n'y est pas, donc rien de vérifiable. L'API a répondu « System busy ». Le Creative Center ne montre que les meilleures pubs par industrie, pas un annonceur précis. Aucun pixel TikTok sur le site, donc **aucune campagne TikTok probable**. |
| **evenox.ca** | 13 pages d'atterrissage téléchargées (version mobile). J'ai lu le conteneur GTM public `GTM-PP2W2TX9`. PageSpeed Insights était bloqué (quota de l'API dépassé). J'ai donc mesuré le temps de réponse serveur et le poids des pages. |

---

## 3. Inventaire des annonces (38 créations)

Classées de la plus récente à la plus ancienne (date de dernière diffusion). « Jours » = nombre de jours de diffusion indiqué par Google. **Vert** = verdict GARDER, **jaune** = MODIFIER, **rouge** = COUPER (détail en section 4).

### 3a. Annonces actives au cours des 60 derniers jours (avant l'arrêt du 23 sept.)

| # | ID (CR…) | Format | 1re → dernière diffusion | Pays | Texte principal (tel qu'affiché) | URL affichée | Angle | Problèmes | Verdict |
|---|---|---|---|---|---|---|---|---|---|
| E01 | 09001374737921736705 | Texte + image | 2026-03-19 → **2026-09-23** (174 j) | Canada **+ France** (2026-03-20 → 09-21) | « Montréal Laval Rive-Nord - Pas de Surprise Sur la Facture » / « **Tables cheap = événement cheap.** Nos clients nous choisissent parce qu'ils remarquent. 5… » · liens : « Location Tables & Chaises », « Voir Nos 200+ Produits » | evenox.ca | Prix fixe / qualité | Anglicisme « cheap » (2×) : Loi 96 et ton peu premium. Description tronquée (« 5… »). « Pas de surprise » contredit la politique de livraison incohérente du site (factcheck 12d). Majuscules à chaque mot. **Diffusée en France.** | **MODIFIER** |
| E02 | 10610323981548388353 | Texte + image (3 variantes) | 2026-08-12 → **2026-09-23** (37 j) | Canada | « **Learn more \|** Location Photobooth Montreal - Soumission Gratuite 24h » · « En savoir plus \| Location photobooth Rive-Nord - **Des** 599$ Tout Inclus » · « 3 fournisseurs appelés, aucun rappel? Chez Évenox on répond en 24h. Photobooth clé en main » | **/formulaire** | Rapidité de réponse + cabine photo | **« Learn more » en anglais encore actif.** « Des 599$ » au lieu de « Dès 599 $ ». « Montreal » sans accent. « Tout inclus » contredit la livraison facturée. **evenox.ca/formulaire renvoie une erreur 404** : si c'est l'URL finale, les clics arrivent sur « Page not found » [À CONFIRMER]. 599 $ = 2 h numérique sur le site, alors que la variante promet « impression instantanée ». | **MODIFIER** |
| E03 | 09150041251301556225 | Texte (2 variantes) | 2026-09-22 → 2026-09-23 (2 j) | **France seulement** | « Location Tables & Chaises - Soumission 24h Pas 3 Jours » · « Installation incluse et matériel inspecté… » · « …forfaits événementiels clé en main et prix fixes. » | evenox.ca | Rapidité | **Diffusée uniquement en France** : 100 % de dépense perdue. « Installation incluse » contredit la FAQ (installation à 50 $/h si au contrat). | **COUPER** (angle repris dans E02 réécrite) |
| E04 / E06 / E07 | 07356225723218001921 · 04609099494632456193 · 02223607863102668801 | Texte (marque) | 2025-07 → 2026-08-29/30 (224–241 j) | Canada | « Évenox » / « La Référence en Location d'Équipement & Décoration » | evenox.ca | Marque | Une seule ligne, pas d'offre, « & » au lieu de « et ». Ces 3 annonces semblent sortir de la même campagne de marque ou d'un composant automatique [DÉDUIT]. | **MODIFIER** → groupe « Evenox – Marque » |
| E05 | 09738921958103318529 | Image (Display/PMax, 3 variantes) | 2025-08-14 → 2026-08-30 (288 j) | Canada | « Location Matériel d'Événement » / « Réservation 24/7 sur le site web, » (virgule finale) | evenox.ca | Générique | **Photo fournisseur avec la marque « VEVOR »** (machines à étincelles), texte coupé par la virgule, photo d'anniversaire « 50 » + ballons violets. Rien de premium ni de corporatif. | **COUPER** |
| E08 | 05131794678093447169 | Texte | 2026-04-06 → 2026-08-12 (95 j) | Canada | « Location Photobooth Montreal - Soumission Gratuite 24h » / « À partir de 599$. Photos illimitées, livraison et installation. Un appel et **c'est régler**. » | evenox.ca | Cabine photo / simplicité | Faute (« réglé »). « Montreal » sans accent. Livraison présentée comme incluse à 599 $ (à aligner sur la politique de livraison). | **MODIFIER** |
| E09 | 02592966598063030273 | Texte + image + liens | 2026-03-31 → 2026-08-05 (121 j) | Canada | « Gonflable + Jeux Dès 499$ - Offre Limitée \| Réservez Tôt » / « Gonflable XL + 2 jeux géants + slush + popcorn. Tout inclus dès 499$. On livre dans 20 km » | evenox.ca | Fête d'enfants | Segment enfants à petit panier, hors cible. « Offre limitée » sans date (risque de pratique trompeuse, LPC art. 224). « On livre dans 20 km » contredit le rayon de 40 km de /livraison. | **COUPER** |
| E10 | 11819912322585985025 | Texte | 2026-03-26 → 2026-07-21 (95 j) | Canada | « **Personne Se Souvient pas Photo** - Animateur Dédié pour la Soirée » / « Forfait 2h dès **650$** : photos illimitées, impression HD, galerie QR, backdrop et animateur. » | evenox.ca | Cabine photo + animateur | Titre incompréhensible et sans le « ne ». **650 $ / 2 h n'existe pas sur le site** (Classique 2 h = 599 $ numérique, 3 h avec impression = 799 $). « backdrop » est un anglicisme (« toile de fond »). | **MODIFIER** |

### 3b. Annonces arrêtées entre mars et mai 2026

| # | ID (CR…) | Format | 1re → dernière diffusion | Texte principal | URL affichée | Angle | Problèmes | Verdict |
|---|---|---|---|---|---|---|---|---|
| E11 | 12182581216486096897 | Image (3 var.) | 2026-05-14 → 05-19 | « Location Photobooth Montréal » / « 2h Photobooth Tout Inclus 650$ » / « 3 fournisseurs appelés… » / « Les samedis d'été partent vite. Vidéobooth 360° boomerang… » | evenox.ca | Cabine photo (mariage) | **Accessoires en anglais à l'image** (« HOT MESS », « TEAM GROOM », « BEST WEDDING EVER ») : Loi 96. Prix de 650 $ absent du site. « Vidéobooth », « boomerang » : anglicismes. | **COUPER** (l'angle passe à Meta avec une photo réelle) |
| E12 | 09401525502176395265 | Image (3 var.) | 2026-03-31 → 04-28 | « Personne Se Souvient pas Photo » + **mascotte kangourou en dessin animé** | evenox.ca | Cabine photo | Visuel enfantin, aucune preuve, titre fautif. | **COUPER** |
| E13 | 09584413868294144001 | Image (3 var.) | 2026-04-02 → 04-28 | « Montréal Laval Rive-Nord » / « Réservez Votre Date » / « Devis gratuit en 24h. Location de gonflables **dès 100$** » | evenox.ca | Gonflables / fête populaire | **Gonflable Minnie Mouse** (propriété intellectuelle de Disney, risque de refus ou de plainte). Prix d'appel à 100 $. « Devis » (France) au lieu de « soumission » (Québec). | **COUPER** |
| E14 | 07299388187607040001 | Texte | 2026-02-09 → 04-28 | « Chaises de Party à Louer - Évenox - Sainte-Thérèse » / « 1000 + locations! Chaises pliantes, tables, tentes… Devis gratuit en 24h… **Installation incluse.** » | evenox.ca/location/chaise (redirige vers la **chaise Chiavari**) | Mobilier | « Chaises pliantes » mais la page montre la Chiavari à 8 $ : pas de correspondance. « Installation incluse » contredit la FAQ. « 1000 + locations » ≠ « 1 000 événements ». | **MODIFIER** → « Mobilier mariage » |
| E15 | 02848533507410493441 | Texte | 2026-03-14 → 03-30 | « **Marché—**Location Jeux Montreal - Réservation en ligne 24/7 » / « Location jeux **&amp;amp;** activités pour événement. **Service municipal approuvé.** Prix transparent. » | evenox.ca | Municipalités / marchés | Bogue HTML visible (« &amp;amp; »). « Service municipal approuvé » est une allégation invérifiable. | **COUPER** |
| E16 | 14214414975891406849 | Vidéo (YouTube auto) | 2025-08-15 → 2026-03-30 | « Lettres Lumineuses Mariage » · vidéo « Évenox – Décoration lumineuse à Laval » | evenox.ca/marquee-letter/ (→ /lettres-lumineuses/) | Déco mariage | Vidéo générée automatiquement par Google. Chemin en anglais (« marquee-letter »). | **COUPER** (l'angle « lettres lumineuses » passe au groupe « Arche / lettres lumineuses ») |
| E17 | 03172545427903873025 | Texte + image (3 var.) | 2026-01-10 → 03-30 | « Génératrice à Essence - Location - evenox.ca » / « Génératrice portable Champion 3 650 W… » | evenox.ca | Équipement | Hors positionnement. **L'image (mur de fleurs + couple en tenue de soirée) n'a aucun rapport** avec une génératrice. | **COUPER** |
| E18 | 11592056817110220801 | Image (Discover/Demand Gen) | 2026-01-09 → 03-30 | « Photobooth clé en main » / « Photobooth clé en main : livraison, installation et service professionnel. » | evenox.ca | Cabine photo clé en main | Propre et cohérent. Seul défaut : « photobooth » (préférer « cabine photo »). | **GARDER** (texte) → « Photobooth 360 corporatif » ; image → Meta |
| E19 | 00373236652341985281 | Texte (2 var.) | 2026-01-10 → 03-30 | « Machine à Crème Glacée Molle - Location » | evenox.ca | Équipement | Hors positionnement, « succès garanti » (allégation). | **COUPER** |
| E20 | 04204868374007644161 | Texte | 2025-08-20 → 03-30 | « Location de chaises pliantes à Mirabel, Laval et Rive-Nord » / « Location de **Marquee Letter** : des décorations lumineuses… Louez vos chaises… » | http://www.evenox.ca/ | Mobilier | Titre (chaises) et description (lettres) mélangés. Anglais. URL en http. | **COUPER** |
| E21 | 05110238958789328897 | Texte + liens | 2025-09-18 → 03-30 | « Lancer de hache - location » / « …idéal pour **tous les âges** » | evenox.ca | Activité | Risque de sécurité (« tous les âges ») et hors positionnement. | **COUPER** |
| E22 | 13430686411917361153 | Image | 2026-03-12 → 03-30 | « Installation Complète Incluse » / « **Plus de 500 événements** réussis. Jeux garantis amusants. Professionnel depuis 2022. » + enfants sur gonflable | evenox.ca | Fête d'enfants | « 500 » contredit « 1 000+ » sur le site. Segment enfants. | **COUPER** |
| E23 | 14380021656330436609 | Texte + image + prix | 2025-08-16 → 03-30 | « Laser Tag - evenox.ca » / « …fêtes, team building… » + prix « dès 70,00 $ » | evenox.ca | Activité | **Image d'anniversaire « 70 » sans rapport.** « Team building » (anglais). | **COUPER** |
| E24 | 16025863509388558337 | Texte (2 var.) | 2025-04-10 → 03-23 | « Location rapide et flexible - Service clé en main rapide » / « Louez déco de mariage, fête ou pro… » | evenox.ca/location/événement (**404**) | Générique | « Rapide » en double. Chemin qui mène à une erreur 404 s'il est aussi l'URL finale. **Diffusée en France** (avr. 2025 → mars 2026). | **COUPER** |
| E25 | 05689264321964539905 | Texte (2 var.) | 2026-02-19 → 03-12 | « Location Photobooth Bal - Clé en Main – Sans Stress » / « Disponibilité limitée mai-juin… » | evenox.ca | Bal des finissants | Saisonnier, segment parents et ados. | **COUPER** (réévaluer en février 2027 dans « Événement privé ») |
| E26 | 11032152785775755265 | Texte + image | 2026-01-06 → 03-09 | « Zéro stress, tout est inclus - Photobooth avec animation » / « …photobooth clé en main à Laval, sans stress Offrez… » | evenox.ca | Cabine photo + animation | Ponctuation manquante. « Tout est inclus » est risqué tant que la politique de livraison n'est pas tranchée. | **MODIFIER** |
| E27 | 10809381465016500225 | Vidéo (auto) | 2025-07-01 → 03-07 | « Promo : Code EVENOX = 20 $ » | evenox.ca | Rabais | Rabais en vedette, à l'opposé du premium. | **COUPER** |
| E28 | 18091181752956485633 | Image (3 var.) | 2025-04-12 → 03-06 | « Réservez dès maintenant » / « Location décoration Laval » / « …profitez de **10 % de rabais**… » + lettres « SOFIA » | evenox.ca | Déco anniversaire | Rabais. **Diffusée en France** (avr. 2025 → mars 2026). | **COUPER** |

### 3c. Annonces arrêtées entre octobre 2025 et janvier 2026

| # | ID (CR…) | Format | Période | Texte principal | Angle | Problèmes | Verdict |
|---|---|---|---|---|---|---|---|
| E29 | 00659729774352007169 | Texte + image + prix | 2025-09-18 → 2026-01-08 | « Location de Jeux Gonflables à Mirabel & Rive Nord » / « Fêtes, écoles… rabais spécial » + image de **jeu de poches** | Gonflables | Image sans rapport, « rabais spécial » vague. | **COUPER** |
| E30 | 09670264397615857665 | Vidéo (auto) | 2025-09-20 → 2026-01-08 | « Offrez à vos invités des jeux géants et arcades rétro pour des fêtes inoubliables » · CTA anglais `BOOK_NOW` | Jeux / arcades | Vidéo automatique, titre trop long. | **MODIFIER** → « Team building / jeux géants corporatif » |
| E31 | 07316594488019779585 | Vidéo (auto) | 2025-08-15 → 2026-01-08 | « Location de jeux géants » · vidéo « Fêtes d'enfants et événements » | Enfants | Segment enfants. | **COUPER** |
| E32 | 15376960368337223681 | Texte + image | 2025-08-16 → 2026-01-08 | « Location de jeux gonflables - **Rabais 10$ Code EVENOX10** » + image d'arcade corporative | Gonflables | Rabais. L'image corporative est gaspillée sur une annonce enfants. | **COUPER** |
| E33 | 09129989122738356225 | Texte + liens + prix (2 var.) | 2025-09-18 → 2025-12-29 | « Chapiteau 10 x 10 » / « …idéal pour mariages… » | Chapiteau | Un 10 x 10 ne loge pas un mariage (promesse trompeuse). Prix « dès 70 $ ». | **COUPER** (remplacée par le groupe « Chapiteau mariage ») |
| E34 | 06438022025263972353 | Texte + 4 liens | 2025-07-30 → 2025-12-28 | « Location de tables et chaises - Réservation en ligne 24/7 » / « …**à prix mini**… Louez vos chaises **dès 1,50 $** » | Mobilier bas prix | Positionnement discount explicite. | **COUPER** |
| E35 | 01036290791510638593 | Vidéo (auto) | 2025-09-20 → 2025-12-10 | « Machine à popcorn à louer » → /friandises-confiseries/ | Friandises | Petit panier. | **COUPER** |
| E36 / E37 | 04239352056541872129 · 06052157696625344513 | Texte + image | 2025-08-14 → 2025-11-06 | « Tables et chaises à louer - Service de location » · « Fêtes et articles de fêtes - Réservation 24/7 » / « …spécialiste de la location chaises… » | Mobilier | « Location **de** chaises » (mot manquant). « Articles de fêtes » fait penser à un magasin à 1 $. | **COUPER** |
| E38 | 13927825895722057729 | Vidéo (auto) | 2025-09-20 → 2025-10-24 | « Réservez dès maintenant » · vidéo « Mur de fleur en location Laval » → /decoration/ | Déco | Vidéo automatique, faute (« Mur de fleur**s** »). | **COUPER** (le mur de fleurs devient un mot-clé du groupe « Location déco mariage ») |

### 3d. Ce que l'inventaire révèle

| Constat | Détail | Fiabilité |
|---|---|---|
| **Diffusion arrêtée depuis le 23 sept. 2026** | La dernière diffusion de toutes les annonces est ≤ 2026-09-23 (le 7 oct., 14 jours plus tard, rien de nouveau). | CONSTATÉ (la cause est À CONFIRMER) |
| **Répartition par segment** | Enfants, gonflables, jeux et équipement à petit panier : 14 (E09, E13, E15, E17, E19, E21, E22, E23, E27, E29, E30, E31, E32, E35). Tables et chaises : 7 (E01, E03, E14, E20, E34, E36, E37). Cabine photo : 8 (E02, E08, E10, E11, E12, E18, E25, E26). Déco, mariage, chapiteau : 4 (E16, E28, E33, E38). Marque ou générique : 5 (E04, E05, E06, E07, E24). **Corporatif : 0 annonce dédiée.** | CONSTATÉ |
| **Diffusion en France** | E01, E03, E24, E28 (tranche d'impressions UE affichée : « 1000 »). | CONSTATÉ |
| **Prix annoncés différents** | Cabine photo : 599 $ « tout inclus », 650 $/2 h, « dès 599 $ » sur le site (2 h numérique), 599 $ « 3 h » sur /mariage (factcheck 12c). Gonflables : 70 $, 100 $, 499 $. Rabais : 10 $, 20 $, 10 %. | CONSTATÉ |
| **Chiffres de preuve différents** | « 1000 + locations », « Plus de 500 événements », site « 1 000 événements depuis 2022 », « 200+ produits ». | CONSTATÉ |
| **« Devis » au lieu de « soumission »** | E13, E14 : vocabulaire de France, moins naturel au Québec. | CONSTATÉ |

---

## 4. Verdicts et réécritures exactes

**Règles appliquées :**
- **GARDER** = on garde le texte presque tel quel et on l'ajoute au groupe d'annonces indiqué de `campagnes/google-ads/rsa_ads.csv`.
- **MODIFIER** = on garde l'angle, avec la réécriture ci-dessous (titres ≤ 30 caractères, descriptions ≤ 90, longueurs vérifiées).
- **COUPER** = mettre en pause, puis ne jamais réactiver.

Toutes les réécritures utilisent « cabine photo » plutôt que « photobooth » : c'est le terme recommandé par l'OQLF, et la Loi 96 s'applique. On garde « photobooth » **comme mot-clé**, pas dans le texte affiché.

### 4a. À ajouter dans la nouvelle structure

| Source | Verdict | Groupe d'annonces cible (`rsa_ads.csv`) | Titres à ajouter (car.) | Descriptions à ajouter (car.) | Condition |
|---|---|---|---|---|---|
| E01 « Pas de surprise sur la facture » | MODIFIER | **SRCH \| Corporatif \| FR › Fournisseur événementiel clé en main**, et aussi **Party des Fêtes / fête de bureau** | « Prix fixe, aucune surprise » (26) | « Un prix fixe par écrit avant l'événement. Aucun frais caché sur la facture finale. » (82) · « Tables et nappes haut de gamme livrées et montées. Vos invités voient la différence. » (84) | **Seulement après la décision sur la politique de livraison** (COMPTE-RENDU §5 bis, n° 1). Sinon, c'est une promesse fausse. |
| E02 « 3 fournisseurs appelés, aucun rappel? » | MODIFIER | **Corporatif › Photobooth 360 corporatif** et **Mariage & privé › Photobooth mariage** | « Cabine photo à louer Rive-Nord » (30) · « Réponse en 24 h, garantie » (25) · « Cabine photo dès 599 $ » (22) | « Trois fournisseurs appelés, aucun rappel? Chez Évenox, on vous répond en 24 h. » (78) | Promesse de 24 h à confirmer (§5 bis, n° 5). **URL finale = page qui existe** (pas /formulaire). Retirer « Learn more ». |
| E08 « Un appel et c'est réglé » | MODIFIER | **Mariage & privé › Photobooth mariage** | « Location cabine photo Montréal » (30) · « Soumission gratuite en 24 h » (27) | « Formule Classique 2 h à 599 $ (numérique), photos illimitées. On s'occupe de tout. » (82) | Le prix et la durée doivent être identiques sur /forfaits-photobooth/ et /mariage/ (aujourd'hui, 2 h sur l'un et 3 h sur l'autre). |
| E10 « Animateur dédié » | MODIFIER | **Mariage & privé › Photobooth mariage** | « Cabine photo avec animateur » (27) | « Classique Signature 3 h à 799 $ : photos imprimées que vos invités rapportent. » (78) | Confirmer qu'un préposé ou animateur est inclus à 799 $. **Retirer le 650 $** partout. |
| E14 « Chaises de party » | MODIFIER | **Mariage & privé › Mobilier mariage** | « Chaises Chiavari à louer » (24) · « Chiavari à 8 $ la chaise » (24) | « Chaises Chiavari transparentes à 8 $ par chaise pour 48 h. Entrepôt à Sainte-Thérèse. » (85) | URL finale = page mobilier mariage. **Pas** de « chaises pliantes » ni d'« installation incluse ». |
| E18 « Photobooth clé en main » | GARDER (texte) | **Corporatif › Photobooth 360 corporatif** | « Cabine photo clé en main » (24) | « Cabine photo clé en main : livraison, installation et service professionnel. » (76) | Remplacer « photobooth » par « cabine photo ». La photo (groupe de collègues) sert dans Meta. |
| E26 « Zéro stress » | MODIFIER | **Corporatif › Photobooth 360 corporatif** | « Cabine photo et animation » (25) | « Cabine photo clé en main à Laval : on installe, on anime et on démonte. Zéro gestion. » (85) | Pas de « tout est inclus » tant que la livraison n'est pas tranchée. |
| E30 « Jeux géants et arcades rétro » | MODIFIER | **Corporatif › Team building / jeux géants corporatif** | « Jeux géants et arcades rétro » (28) | « Jeux géants et arcades rétro livrés et montés au bureau pour votre party d'équipe. » (82) | En annonce texte RSA, pas en vidéo générée par Google. |
| E04 / E06 / E07 (marque) | MODIFIER | **SRCH \| Marque \| FR › Evenox – Marque** | « Évenox – Site officiel » (22) | « La référence en location d'équipement et de décoration événementielle à Rive-Nord. » (82) | Choisir **une** graphie : le site dit « Évenox », `rsa_ads.csv` dit « Evenox ». Recommandé : « Évenox » partout dans les textes, les deux graphies en mots-clés. |

> Si tu ajoutes ces titres, garde le maximum de 15 titres et de 4 descriptions par RSA : remplace d'abord les titres génériques en double (« Clé en main, de A à Z », « Laval, Montréal et Rive-Nord »). Les 3 titres « [N] avis Google », « Clients : RBC, PwC, Desjardins » et « Facturation net 30 jours » restent conditionnels aux décisions du §5 bis.

### 4b. À couper (29 créations)

E03, E05, E09, E11, E12, E13, E15, E16, E17, E19, E20, E21, E22, E23, E24, E25, E27, E28, E29, E31, E32, E33, E34, E35, E36, E37, E38, plus la version actuelle d'E01 et d'E02 une fois leur réécriture en ligne.

**Raisons regroupées :**
1. **Hors cible** : enfants, gonflables, génératrice, crème glacée, popcorn, lancer de hache, laser tag, bal (17 annonces).
2. **Discount** : rabais, codes promo, « prix mini », « dès 1,50 $ » (6).
3. **Conformité** : anglais, personnage Disney, marque VEVOR, allégations invérifiables (6).
4. **Images sans rapport** avec le produit (5).

> **Où vont les gonflables et les petits produits?** Ils restent vendus par la **boutique Booqable** et le référencement naturel, **sans budget payant** dans le plan à 300 $/jour. Si tu tiens à les annoncer plus tard, ce sera une 7e campagne séparée, à petit budget (≤ 10 $/jour), avec sa propre conversion « achat Booqable », pour ne jamais polluer l'apprentissage des campagnes corporatif et mariage. Ce n'est pas recommandé avant que les 6 campagnes aient chacune 30 conversions par mois.

---

## 5. Structure de la campagne actuelle : ce que les indices publics révèlent

| # | Problème probable | Indices | Fiabilité |
|---|---|---|---|
| 1 | **Une ou deux campagnes « fourre-tout »** (probablement **Performance Max** liée au flux de produits WooCommerce, plus une campagne Recherche) qui mélangent enfants, mariage, corporatif et équipement | Formats texte, image, Discover et vidéo dans le même compte. Prix produits affichés (« Afficher 4 prix à partir de 70,00 $ CA »). **6 vidéos YouTube générées automatiquement**, chacune publiée sur une chaîne « Évenox » différente (signature typique des vidéos créées par Google pour PMax). Extension « Google for WooCommerce » (Google Listings & Ads) installée sur le site. 6 identifiants de groupes ou ensembles d'éléments différents pour les seules vidéos. | DÉDUIT (fort) |
| 2 | **Ciblage géographique « Présence ou intérêt »** (ou aucun ciblage sur une campagne) | 4 annonces diffusées en France sur 17 mois. | DÉDUIT (fort) |
| 3 | **Composants automatiques activés** (titres générés, textes d'appel à l'action, vidéos auto, et peut-être AI Max ou la « personnalisation du texte ») | « Learn more \| » et « En savoir plus \| » en préfixe. CTA vidéo `BOOK_NOW`. Images associées sans rapport (génératrice + couple en tenue de soirée, laser tag + ballons « 70 »). | DÉDUIT (fort) |
| 4 | **Annonces de produits plutôt qu'annonces d'intention** : une annonce par article du catalogue (génératrice, crème glacée, popcorn, chapiteau 10 x 10) au lieu de groupes par besoin (party des Fêtes, gala, mariage) | Les titres reprennent les fiches produits (« Génératrice à Essence - Location - evenox.ca »). | DÉDUIT |
| 5 | **Conversion unique non qualifiée** : un gonflable à 200 $ et un gala à 2 495 $ comptent pareil, donc l'algorithme cherche les leads les moins chers (enfants) | Le conteneur GTM n'a qu'une balise de conversion Google Ads (`AW-16529262834 / Nc-uCJjXz84cEPKR4sk9`) sur l'événement `conversion_lead`, déclenchée par **tout** formulaire réussi. Pas de valeur, pas de conversions améliorées. | CONSTATÉ (code) |
| 6 | **Deux comptes Google Ads** reliés au site | `AW-16529262834` (GTM, conversion « lead ») et `AW-16776285171` (extension WooCommerce, événements e-commerce). Si la PMax tourne dans le compte 16776285171, **elle ne voit probablement pas les leads** comme conversion. | CONSTATÉ (code) / impact À CONFIRMER |
| 7 | **Deux propriétés GA4** | `G-BCHQ23SBRF` (événement `generate_lead`) et `G-Y0K5N2WSNP` (« Achat Booqable »). La balise `generate_lead` attend l'événement `lead_submit`, **qu'aucune page ne déclenche** : GA4 ne compte probablement **aucun** lead. | CONSTATÉ (code) |
| 8 | **Réseau Display / Discover actif** pour un service local à forte intention | 7 annonces image (format « Ouvrir ») et 1 annonce Discover. | DÉDUIT |
| 9 | **Pas de campagne corporative ni de calendrier saisonnier** | Aucune annonce Party des Fêtes en 2025 (oct.–déc.) alors que le compte diffusait. | CONSTATÉ |

---

## 6. Pages d'atterrissage et suivi : constats

### 6a. Balises sur evenox.ca (toutes les pages testées)

| Élément | Constat | Risque | Correctif |
|---|---|---|---|
| Google Tag Manager | `GTM-PP2W2TX9` présent | — | Garder, c'est la base du nouveau suivi |
| Google Ads | `AW-16529262834` via GTM (conversion « lead » sur `conversion_lead`). `AW-16776285171` via l'extension WooCommerce (page_view, e-commerce). | Deux comptes, attribution éclatée | Choisir **un** compte principal (celui qui a l'historique, voir §7). Dans l'extension, relier le même compte ou désactiver ses balises. |
| GA4 | `G-BCHQ23SBRF` et `G-Y0K5N2WSNP` | Données divisées, `generate_lead` ne se déclenche jamais | Une seule propriété, événements `lead_tous` / `lead_qualifie` (voir `tracking-setup.md` §2) |
| **Consentement** | `gtag('consent','default', denied)` **seulement pour l'UE, le R.-U. et la Suisse**. WP Consent API présent, mais `consent_type: ""` et **aucune bannière**. | **Loi 25** : au Québec, tout part sans consentement | Bannière de consentement + Consent Mode v2 avec refus par défaut **pour le Canada** (`tracking-setup.md` §1) |
| Pixel OpenAI (`oaiq`) | Chargé au `gtm.init` **sans condition de consentement**. Script maison qui capture le courriel haché (SHA-256) dans un témoin `evx_oaiq_user`. | Loi 25 (profilage sans consentement) | Charger seulement après acceptation, `oaiq("consent", false)` avant l'init (factcheck #6) |
| Pixel Meta | **Code de base absent.** La balise « Lead » GTM ne s'exécute que si `fbq` existe, donc elle ne part jamais. | Aucune conversion Meta mesurée | Installer le pixel et CAPI via la Page d'entreprise (`tracking-setup.md` §4) |
| TikTok, Microsoft UET, Clarity | Absents | — | UET à ajouter avec Microsoft Ads (semaine 2) |
| Conversion « lead » | Déclenchée par tout formulaire AJAX réussi (et par un envoi n8n même avec le statut 0, donc même si l'envoi a peut-être échoué), ou par /merci. Une fois par session. | Gonflable = gala. Faux positifs possibles. | Remplacer par `lead_tous` (secondaire) + `lead_qualifie` (principal, routes A et B) |
| Langue | `lang="fr-FR"` | Signal France (cohérent avec la diffusion en France) | `fr-CA` (correctif n° 13) |

### 6b. Pages pointées par les annonces

| URL affichée dans l'annonce | Réponse | Correspondance avec le message | Formulaire / CTA |
|---|---|---|---|
| evenox.ca/ (la plupart des annonces) | 200, réponse serveur 0,32 s (cache LiteSpeed) | **Faible** : H1 « Location de jeux et équipements événementiels », et les boutons mènent à jeux, tables, machine à bonbons. Aucune page ne reprend « Pas de surprise sur la facture ». | **Pas de formulaire** sur l'accueil. 60 scripts. |
| **/formulaire** (E02, annonce la plus récente) | **404 « Page not found »** | Nulle, si c'est l'URL finale | — |
| **/location/événement** (E24) | **404** | Nulle, si c'est l'URL finale | — |
| /location/chaise (E14) | Redirige vers /product/chaise-chiavari/ | Mauvaise : l'annonce dit « chaises pliantes », la page montre une Chiavari à 8 $ | Fiche produit, 77 scripts (la plus lourde) |
| /decoration/ (E38) → /decoration-cle-en-main/ | 200, **réponse serveur 1,7 s** (page hors cache) | Moyenne | Bon formulaire qualifiant (type d'événement, date, **nombre d'invités**, éléments, thème, cueillette ou livraison, ville). C'est le meilleur du site. |
| /marquee-letter/ → /lettres-lumineuses/ | 200 | Bonne (« dès 70 $ ») | 2 formulaires. Dont un « Débloquer le levier » (prénom, courriel, site) : **vérifier qu'il ne déclenche pas la conversion lead.** |
| /friandises-confiseries/, /jeux-geants-interactifs/ | 200 | Bonne, mais segment hors cible | Formulaire qualifiant, comme la décoration |
| /party-bureau-corporatif/ (aucune annonce n'y mène) | 200 | — | Formulaire à 6 champs sans budget ni nombre d'invités. Bouton « Demande de **Soumision** » (faute). |
| /forfaits-corporatif/ (aucune annonce n'y mène) | 200 | — | **Aucun formulaire sur la page** |

**Vitesse (indices, PageSpeed indisponible) :**
- Hébergement Hostinger + cache LiteSpeed, temps de réponse serveur de 0,2 à 0,5 s quand la page est en cache. C'est bon.
- Points faibles : 51 à 77 scripts par page (Divi, WooCommerce, Jetpack, Mailchimp, Booqable, deux GA4, deux AW) et jusqu'à 78 images sur /jeux-geants-interactifs/.
- À mesurer à la main : pagespeed.web.dev en mobile sur l'accueil, /party-bureau-corporatif/ et /decoration-cle-en-main/. Cible : LCP < 2,5 s.

### 6c. Les URL finales du nouveau plan n'existent pas encore

| URL de `rsa_ads.csv` | État le 7 oct. |
|---|---|
| /corporatif, /corporatif/party-des-fetes, /corporatif/5-a-7, /evenement-prive | **404** |
| /corporatif/gala | 301 → /gala-corporatif/ (à vérifier, ok si la page convient) |
| /corporatif/photobooth-360, /mariage/photobooth | 301 → /photobooth-360/ |
| /mariage/decoration | 301 → **/decoration-ballon/** (mauvaise page pour la déco mariage haut de gamme) |
| /soumission | 301 → /soumission-grand-evenement/ |

→ **Bloquant** : créer les pages (`operations/landing-*.md`) **ou** remplacer ces URL dans `rsa_ads.csv` par des pages existantes **avant** l'import dans Google Ads Editor. Sinon, les annonces seront refusées (« Destination introuvable ») ou atterriront sur une 404.

---

## 7. Plan de migration : de la campagne actuelle aux 6 campagnes

### Principes
- **Ne rien supprimer.** On met en **pause**. Une campagne supprimée perd son historique consultable et ses réglages. Le compte garde son historique de qualité et de facturation, et les conversions passées restent dans les rapports.
- **Garder le même compte Google Ads** (celui qui a le plus d'historique de dépenses et de conversions, voir l'export n° 1). Ne pas créer de compte neuf.
- **Ne pas supprimer les actions de conversion existantes** : les passer en **secondaires** (« ne pas inclure dans les conversions »). On garde ainsi l'historique comparatif, sans que l'ancienne conversion non qualifiée guide les enchères.
- **Une seule variable à la fois** pendant 14 jours après le lancement : pas de changement de stratégie d'enchères et de textes le même jour.

### Ordre des opérations

| Jour | Action | Pourquoi |
|---|---|---|
| **J-5 à J-1** | 1. **Exporter tout** (section 8) avant de toucher quoi que ce soit. 2. Trouver pourquoi la diffusion a cessé le 23 sept. (Facturation › Résumé ; Campagnes › État ; Règles ; annonces refusées). 3. Corriger les P0 de `correctifs-urgents.md` : bannière Loi 25, faute « Soumision », politique de livraison, vérification de l'annonceur comme entreprise. 4. Créer ou rediriger les pages de §6c. 5. Dans GTM : créer `lead_tous` et `lead_qualifie`, puis tester l'envoi (route A et route B). | Sans mesure qualifiée, les nouvelles campagnes apprendraient sur de mauvais signaux |
| **J0 (matin)** | **Mettre en pause** : toutes les campagnes PMax, Display, Demand Gen et Vidéo, plus les groupes ou annonces des créations COUPER (§4b). **Retirer** les composants automatiques : Paramètres du compte › Composants automatiques → désactiver. Désactiver AI Max / l'expansion de l'URL finale si actifs. **Renommer** les anciennes campagnes avec le préfixe `ZZ_ANCIEN_2025 \|` (elles restent visibles et triables). | Arrête la dépense hors cible et le « Learn more » |
| **J0** | Actions de conversion : l'ancienne « lead » (`Nc-uCJjXz84cEPKR4sk9`) → **secondaire**. `lead_qualifie` → **principale**, `lead_tous` → secondaire. Objectif de compte = `lead_qualifie` seulement. | L'algorithme optimise sur des leads qualifiés dès le départ |
| **J0 (après-midi)** | Importer `campagnes/google-ads/import_editor_complet.csv` (Google Ads Editor). Lancer **SRCH \| Corporatif \| FR** (100 $) et **SRCH \| Marque \| FR** (10 $). Ciblage = **Présence** seulement (déjà dans `campaigns.csv`). Exclure la France et tout pays hors Canada (par sécurité, la présence suffit). | Saison des Fêtes : chaque jour compte |
| **J0** | Si une **ancienne campagne Recherche de marque** existe et a un bon historique (taux de clics élevé, Quality Score 7+), la garder **active à 5 $/jour pendant 14 jours** en parallèle de la nouvelle « Marque », **avec la même liste de mots-clés exclus**, puis la mettre en pause. | Évite un trou de visibilité sur ton nom pendant l'apprentissage. Sans historique utile, la mettre en pause tout de suite. |
| **J0** | Ajouter les 3 listes d'exclusion (`negatives_shared_list.csv`). Ajouter aussi en exclusion, au niveau du compte : gonflable, jeux gonflables, fête d'enfant, anniversaire enfant, génératrice, crème glacée, popcorn, lancer de hache, laser tag (sauf si tu veux un groupe Team building avec ces activités). | Empêche les nouvelles campagnes de retomber sur le trafic enfants |
| **J1–J3** | Vérifier les termes de recherche et la remontée des conversions (test réel d'un formulaire route A). Lancer **Meta — Leads** (80 $) dès que la Page d'entreprise et le pixel sont prêts. | Règle du jour 7 du compte rendu |
| **J7** | Lancer **SRCH \| Mariage & privé haut de gamme \| FR** (60 $), Microsoft Ads (import, 20 $), ChatGPT Ads (30 $). | Ordre du COMPTE-RENDU §5 |
| **J14** | Comparer les nouveaux coûts par lead qualifié à l'historique (exports). Mettre en pause l'ancienne campagne de marque si elle tournait encore. **Ne pas réactiver PMax** avant 30 `lead_qualifie` par mois sur le compte. | Règles couper / augmenter |
| **J30** | Bilan : ce qui reste des anciennes campagnes reste en pause (ne pas supprimer avant 12 mois, pour la comparaison d'une année sur l'autre). | Historique conservé |

### Ce qu'il ne faut PAS faire
- Supprimer les anciennes campagnes, les anciennes conversions ou les audiences de remarketing (les listes se vident si elles ne sont plus alimentées, mais restent réutilisables).
- Supprimer le lien Merchant Center / WooCommerce : on peut seulement mettre la PMax en pause. Le flux reste utile pour une éventuelle campagne boutique plus tard.
- Réutiliser les vidéos générées automatiquement par Google, ou laisser « Composants automatiques » activé (source du « Learn more »).
- Lancer les RSA tant que « [N] avis Google » contient encore « [N] ».

---

## 8. Données à exporter du compte Google Ads (pour finir l'audit)

**Période :** du **1er avril 2025** (1re annonce : 2025-04-10) au **6 octobre 2026**, **segmentée par mois**. Ajouter aussi un export des **90 derniers jours** (8 juillet → 6 oct. 2026) pour les rapports 1 à 6.
**Format :** CSV ou Google Sheets (bouton ⤓ **Télécharger** au-dessus de chaque tableau).
**Astuce :** les menus changent souvent. Tape le nom du rapport dans la **barre de recherche** en haut de Google Ads.

| # | Rapport | Chemin (interface 2026) | Colonnes à inclure |
|---|---|---|---|
| 0 | **Numéro du compte** | En haut à droite (format 123-456-7890), plus Outils › Configuration › **Comptes associés** › Google Merchant Center et Google Analytics | Me dire si le compte est lié à `AW-16529262834` ou à `AW-16776285171` (Outils › Mesure › Conversions › une conversion › Configuration des balises) |
| 1 | **Campagnes** | Campagnes › **Campagnes** | Campagne, État, **Type de campagne**, Budget, Stratégie d'enchères, Impressions, Clics, CTR, CPC moy., Coût, Conversions, Coût/conv., Taux de conv., Valeur de conv., **Toutes les conv.**, Part d'impressions recherche, PI perdue (budget), PI perdue (classement). Segment : **Mois**. |
| 2 | **Paramètres des campagnes** | Campagnes › sélectionner toutes › **Paramètres** (ou Google Ads Editor › Compte › Exporter › Exporter le compte entier en CSV) | Réseaux (partenaires de recherche, Display), **Options de ciblage géographique (Présence vs Présence ou intérêt)**, zones ciblées et exclues, langues, calendrier de diffusion, appareils, AI Max / expansion de l'URL finale. **L'export Editor complet est le plus utile : il contient tout.** |
| 3 | **Groupes d'annonces / ensembles d'éléments** | Campagnes › **Groupes d'annonces** ; pour PMax : Campagnes › **Groupes d'éléments** | Mêmes colonnes que le n° 1, par groupe |
| 4 | **Annonces et composants** | Campagnes › **Annonces** ; Campagnes › **Composants** (vue « tableau », niveau composant) ; pour PMax : **Combinaisons** | Annonce, État, **Statut d'approbation**, URL finale, Titres et descriptions, Impressions, Clics, Coût, Conv. ; pour les composants : Type, Texte, **Source (annonceur vs créé automatiquement)**, Performance |
| 5 | **Termes de recherche** | Campagnes › Insights et rapports › **Termes de recherche** (ou Mots-clés › Termes de recherche) ; pour PMax : Insights › **Catégories de termes de recherche** | Terme de recherche, Type de correspondance, Campagne, Groupe d'annonces, Mot-clé, Impressions, Clics, Coût, Conversions. **C'est le rapport le plus important.** |
| 6 | **Mots-clés** | Campagnes › Audiences, mots-clés et contenu › **Mots-clés de recherche** | Mot-clé, Correspondance, État, **Niveau de qualité** (et ses 3 composantes), CPC max, Impr., Clics, Coût, Conv. ; plus l'onglet **Mots-clés à exclure** |
| 7 | **Lieux** | Campagnes › **Lieux** › onglet **« Correspond à »** (lieux réels des utilisateurs, pas seulement ceux ciblés) | Pays, Région, Ville, Impr., Clics, Coût, Conv. → mesure la dépense en France et hors Rive-Nord/Laval/Montréal |
| 8 | **Emplacements** (Display, YouTube, PMax) | Campagnes › Insights et rapports › **Où les annonces ont été diffusées** (ou Rapports › Rapports prédéfinis › Emplacements) | Emplacement, Type, Impr., Clics, Coût, Conv. |
| 9 | **Actions de conversion** | Outils › Mesure › **Conversions** › Récapitulatif | Nom, **Source**, Catégorie, **Principale ou secondaire**, Comptabilisation (une / toutes), Fenêtre, Valeur, État de la balise, conversions améliorées (oui/non). Plus une capture de l'**objectif de compte**. |
| 10 | **Conversions par action** | Campagnes › Campagnes › Segment › Conversions › **Action de conversion** | Campagne × Action de conversion × Mois : Conversions, Toutes les conv., Valeur |
| 11 | **Appareils, horaire** | Campagnes › **Appareils** ; Campagnes › **Calendrier de diffusion** (onglets Jour et Heure) | Impr., Clics, Coût, Conv. par appareil, jour et heure |
| 12 | **Historique des modifications** | Campagnes › **Historique des modifications** (ou Outils › Historique des modifications) | Date, Utilisateur, Campagne, Modification. **Période : du 1er sept. au 6 oct. 2026** → explique l'arrêt du 23 sept. |
| 13 | **Facturation** | Outils › Facturation › **Résumé** et **Transactions** | Paiements refusés, suspension, solde (capture d'écran) |
| 14 | **Diagnostic et règles** | Campagnes › Vue d'ensemble › **Diagnostic** (ou État de la campagne) ; Outils › **Règles** | Capture de l'état et des règles automatiques actives |
| 15 | **Hors Google Ads** | CRM ou carnet de commandes | Pour chaque contrat signé depuis avril 2025 : date, montant, type (corporatif, mariage, privé, enfants), **source** (Google, Facebook, référence, Booqable). Sert à calculer le coût réel par contrat. |

**Accès en lecture (option la plus rapide) :** Outils › **Accès et sécurité** › bouton **+** › rôle **Lecture seule** › mon courriel de travail. Ça remplace les exports 1 à 14.

---

## 9. Résumé des actions, par priorité

1. **Aujourd'hui** : faire les exports de la section 8 (surtout les n° 2, 5, 7, 9 et 12) et trouver la cause de l'arrêt du 23 sept.
2. **Avant toute relance** : mettre en pause la PMax et le Display, désactiver les composants automatiques (« Learn more »), passer le ciblage en **Présence**, faire de l'ancienne conversion une conversion **secondaire**.
3. **Avant l'import des CSV** : pages d'atterrissage existantes (§6c), `lead_qualifie` fonctionnel, bannière Loi 25, décision sur la livraison.
4. **Lancement** : Corporatif + Marque en premier (saison des Fêtes), avec les 8 réécritures de la section 4a ajoutées aux RSA.
