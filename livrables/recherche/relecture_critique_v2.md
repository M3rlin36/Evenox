# Red team v2 — Plan Google Ads Évenox (audit du 2026-10-07)

**Périmètre.** J'ai relu le plan, le script, les 8 CSV (UTF-16 avec BOM, séparés par des tabulations) et le guide d'import.
- J'ai relancé `python3 -I build_google_ads.py` : rc=0. Le script affiche 5 campagnes, 14 groupes, 126 mots-clés, 14 annonces responsives et 661 négatifs. Les CSV régénérés sont identiques octet pour octet aux CSV livrés. Les chiffres du plan concordent (126, 661, 14, 8 liens annexes, 8 accroches, 300 $).
- J'ai téléchargé en direct ces pages : accueil, /nos-forfaits-tout-inclus, /location-photobooth-montreal, /lettres-lumineuses/, /team-building-activitecorpo/, /mariage/, /faq/, /contact/, /a-propos/. J'ai aussi téléchargé, comme pages de remplacement possibles, /forfaits-mariage/, /forfaits-corporatif/, /photobooth-360/ et /forfaits-photobooth/.
- J'ai comparé les colonnes avec l'aide officielle d'Editor (answer/57747, téléchargée).
- Je n'ai modifié aucun livrable.

---

## BLOQUANT

### B1. Deux URL finales redirigent en 301 et perdent le GCLID (vérifié en direct)
- `https://evenox.ca/nos-forfaits-tout-inclus?gclid=TEST123` redirige en 301 vers `https://evenox.ca/nos-forfaits-tout-inclus/`, **sans les paramètres**. C'est WordPress qui fait la redirection (en-tête `x-redirect-by: WordPress`).
- Même chose pour `/location-photobooth-montreal`.
- Les URL qui ont déjà une barre oblique finale gardent `?gclid=` : /lettres-lumineuses/, /team-building-activitecorpo/, /forfaits-mariage/, /photobooth-360/.
- **Ce qui est touché :**
  - 8 groupes d'annonces sur 14 : Fête de Noël, Décor mariage, Photobooth corporatif, Photobooth, Photobooth mariage, Holiday party (EN), Photo booth (EN), Corporatif Québec ;
  - 2 liens annexes : « Forfaits photobooth » et « Forfaits corporatifs ».
- **Conséquences :**
  - Le GCLID, le GBRAID et le WBRAID ne sont jamais déposés : la conversion « Demande de soumission » ne peut pas être attribuée.
  - Les champs cachés GCLID du bloquant n° 3 restent vides, et l'import des leads qualifiés devient impossible.
  - Le test du faux lead peut même réussir sur une page avec barre oblique, puis échouer en production.
- **Correctif dans le script :**
  ```python
  "forfaits": "https://evenox.ca/nos-forfaits-tout-inclus/",
  "photobooth": "https://evenox.ca/location-photobooth-montreal/",
  ```
  Remplacer aussi l'URL codée en dur dans `SITELINKS_FR` et `SITELINKS_EN`, `"https://evenox.ca/nos-forfaits-tout-inclus"`, par `URL["forfaits"]`.
- Ajouter ce contrôle au script : `assert all(u.endswith("/") for u in URL.values())`.
- Ajouter une ligne au guide d'import, étape 9 : « Ouvrir chaque URL finale avec `?gclid=test` : l'URL affichée doit encore contenir `gclid=test` ».

---

## IMPORTANT

### I1. « Photobooth avec préposé » à côté de « Party de Bureau 1 995 $ » (Fête de Noël)
- Le titre « Party de Bureau 1 995 $ » est épinglé en position 2. Le titre « Photobooth avec préposé » peut sortir en position 3.
- Sur la page, le photobooth avec préposé n'est inclus que dans le **Gala Signature à 2 495 $** (« Le Gala Signature ajoute le photobooth premium avec préposé »). La combinaison laisse croire que le forfait à 1 995 $ inclut le photobooth.
- **Correctif :** remplacer le titre « Photobooth avec préposé » par **« Gala Signature + photobooth »** (27 caractères).

### I2. Lettres : « Love : 240 $ » et « Oui : 210 $ » combinés avec des promesses d'installation (Lettres lumineuses mariage, Lettres lumineuses)
- Sur /lettres-lumineuses/, 240 $ et 210 $ sont des **prix d'ensemble à l'unité**. La page précise : « À l'unité tu montes toi-même. À partir de Célébration, on livre et on installe. »
- L'installation n'est incluse que dans **Célébration (380 $, 3 à 4 caractères)** et **Signature (500 $)**, et la livraison y est « en sus : 100 $ jusqu'à 10 km, puis 7 $/km ».
- Pourtant, la même annonce contient « Love : 240 $ les 4 lettres », « Oui : 210 $ les 3 lettres », « Installation sur place » et « Livrées, montées, reprises ». La description 4, « Livraison et installation par notre équipe… », peut s'afficher avec la description 1, « Love 240 $, Oui 210 $ ».
- **Correctif pour LETTRES_MARIAGE :**
  - Titre « Installation sur place » → **« Célébration 380 $ installé »** (26).
  - Titre « Livrées, montées, reprises » → **« Ramassage gratuit en boutique »** (29).
  - Description 1 → **« Lettres de 4 pi pour votre mariage : Love 240 $ ou Oui 210 $ (à ramasser), mot au choix. »** (88).
  - Description 4 → **« Forfait Célébration 380 $ ou Signature 500 $ : livrées et installées par notre équipe. »** (86).
- **Correctif pour LETTRES :** remplacer le titre « Love : 240 $ les 4 lettres » par **« Love 240 $ à ramasser »** (21), ou garder Love et remplacer « Installation sur place » par « Célébration 380 $ installé ».
- **Correctif pour LETTRES_CORPO :** « Installation sur place » est acceptable avec Signature 500 $ (« Équipe sur place »). Le garder.

### I3. Promesses absentes de /team-building-activitecorpo/ (titres, descriptions et lien annexe)
- **« Mini tournoi de jeux géants »** (titre) et le lien annexe **« Jeux géants en mini tournoi »** n'apparaissent que sur /nos-forfaits-tout-inclus et /forfaits-corporatif/, pas sur la page de team building.
  - Correctif du titre : **« Jeux intérieurs et extérieurs »** (29, présent sur la page).
  - Correctif du lien annexe, description 1 : **« Jeux intérieurs et extérieurs »**.
- **« Net 30 sur approbation »** (titre) et la description 3 « Bon de commande et net 30… » sont absents de la page.
  - Correctif du titre : **« Soumission rapide et claire »** (27, présent sur la page).
  - Correctif de la description 3 : **« Montréal, Laval et la Rive-Nord. Jeux intérieurs et extérieurs, photobooth sur place. »** (85).
- **Description 2** « Jeux géants, lettres lumineuses et photobooth… » : la page ne parle pas de lettres lumineuses.
  - Correctif : **« Photobooth, jeux géants et zones d'animation pour vos 5 à 7 et fêtes de bureau. »** (79).
- La page ne mentionne pas non plus « Montréal, Laval, Rive-Nord », « 4,8/5 » ni « 1 000 événements ». C'est acceptable en titre, mais il faudrait demander l'ajout d'une ligne de preuve sociale sur la page.

### I4. Net 30 et bon de commande : la FAQ seule ne suffit pas pour les pages de destination actuelles
- La formulation complète, « Sur approbation de crédit… bon de commande, sans dépôt… facturation nette 30 jours », n'existe que sur /faq/.
- Sur /nos-forfaits-tout-inclus, net 30 n'apparaît que comme **« Bonus : Facturation nette 30 » du Gala Signature**. La page dit aussi « facture PO ».
- Le titre « Net 30 sur approbation » (Fête de Noël, Lettres lumineuses corporatif, Team building) présente donc comme générale une condition que la page de destination réserve au Gala. La politique de Google ne refusera probablement pas l'annonce, mais l'incohérence est visible par le client.
- Sur /lettres-lumineuses/ et /team-building-activitecorpo/, on ne trouve ni net 30 ni bon de commande.
- **Correctif :**
  1. Ajouter sur le site, sous les forfaits corporatifs et sur la page team building, la phrase : « Entreprises : bon de commande et facturation nette 30 jours sur approbation de crédit. »
  2. En attendant, garder « Net 30 » seulement dans le groupe Fête de Noël. Dans Lettres lumineuses corporatif, remplacer le titre par **« Votre logo, votre mot »**. Remplacer aussi la description 4 de Lettres lumineuses corporatif par **« Mot au choix jusqu'à 18 caractères, installé et repositionné par notre équipe sur place. »** (88).

### I5. Les accroches et les liens annexes sont identiques dans toutes les campagnes
- La campagne **Événements privés** (couples, fêtes privées) reçoit :
  - les accroches « Bon de commande accepté » et « Net 30 sur approbation » ;
  - les liens annexes « Forfaits corporatifs » et « Team building ».
  
  Or cette même campagne exclut « entreprise », « corporatif » et « team building » en négatifs.
- La campagne **Corporatif** reçoit le lien annexe « Mariages ».
- L'accroche « Installation clé en main » s'affiche aussi sous les annonces de lettres à 240 $, où le client monte lui-même, et la FAQ dit : « installation… à 50 $ de l'heure ».
- **Correctif dans le script :** créer `CALLOUTS_PRIVES` et `SITELINKS_PRIVES`.
  - Accroches : « Soumission en 24 h », « Note Google 4,8/5 », « Plus de 1 000 événements », « Prix affichés en ligne », « Réservation en ligne », « Ramassage gratuit en boutique », « Photos illimitées », « Dépôt de 20 % seulement ».
  
    Attention : « % » est interdit par la règle de marque. Remplacer donc « Dépôt de 20 % seulement » par « Dépôt réduit à la réservation », ou retirer cette accroche.
  - Liens annexes : retirer « Forfaits corporatifs » et « Team building ». Les remplacer par « Forfaits mariage » (https://evenox.ca/forfaits-mariage/, « Décor WOW, Soirée Signature », « Forfaits 899 $ à 1 899 $ ») et « Vidéobooth 360 » (https://evenox.ca/photobooth-360/, « Clip au ralenti pour chaque invité », « 799 $, 1 099 $ ou 1 499 $ »).
  - Retirer « Installation clé en main » des accroches de la campagne Événements privés.

### I6. Décor mariage arrive sur une page dont le titre principal est corporatif
- /nos-forfaits-tout-inclus a pour titre « Forfaits corporatifs 1 195 $ à 2 495 $ ». Un couple qui tape « location décoration mariage » arrive donc sur une page corporative.
- La page /forfaits-mariage/ existe : elle présente Décor WOW 899 $, Soirée Signature 1 449 $ et **Mariage Signature 1 899 $**, avec le préposé et l'installation incluse.
- **Correctif :**
  - Ajouter `"forfaits_mariage": "https://evenox.ca/forfaits-mariage/"` et l'utiliser pour Décor mariage.
  - Titre épinglé en position 2 : **« Forfaits 899 $ à 1 899 $ »** (24).
  - Titre « Forfaits à prix affiché » → **« Mariage Signature 1 899 $ »** (25).
  - Ajouter la ligne du forfait Mariage Signature au tableau des prix du plan.

### I7. Mots-clés « location mur floral » et « location mur de fleurs » (Décor mariage)
- La personne cherche un mur à la carte, à 200 $ selon la FAQ. L'annonce lui vend un forfait de 899 $ minimum, et la page des forfaits ne loue pas le mur seul.
- Résultat attendu : des clics payés à 3 $ pour un panier de 200 $.
- **Correctif :** retirer ces 2 mots-clés, ou créer un groupe « Mur floral » vers la fiche produit du mur avec le prix de 200 $.

### I8. Vidéobooth 360 placé dans le groupe Photobooth
- Les mots-clés « location vidéobooth 360 » et « photobooth 360 » déclenchent une annonce dont le titre épinglé est « Forfaits 599 $ à 999 $ ».
- Les vrais prix du 360 sont 799 $, 1 099 $ et 1 499 $ (FAQ et /photobooth-360/). La page photobooth affiche aussi « Découverte 599 $ », ce qui crée une incohérence de plus sur le site.
- **Correctif :** créer un groupe « Vidéobooth 360 » vers https://evenox.ca/photobooth-360/.
  - Titres épinglés : « Location vidéobooth 360 » (position 1) et **« Forfaits 799 $ à 1 499 $ »** (24, position 2).
  - Y déplacer ces 2 mots-clés et ajouter l'exact [location vidéobooth 360].

### I9. Les mots-clés de décor corporatif arrivent sur la page des lettres
- Les mots-clés « décoration gala corporatif », « décor événement corporatif », « décor activation de marque », « décoration lancement de produit » et l'exact [décoration gala corporatif] mènent à /lettres-lumineuses/.
- Cette page s'adresse au grand public : tutoiement, LOVE, BABY, PROM, jeu de rabais, aucune mention d'entreprise. Les titres « Pour galas et lancements » et « Activations de marque » n'y figurent pas.
- **Correctif :** déplacer ces 5 mots-clés dans un groupe « Décor corporatif » vers https://evenox.ca/forfaits-corporatif/. Cette page contient « mini tournoi », 1 195 $, 1 995 $, 2 495 $ et le préposé, et elle est distincte des URL des liens annexes. Sinon, supprimer ces mots-clés.

### I10. Le lien annexe « Mariages » mène vers /mariage/, dont les prix contredisent les annonces
- /mariage/ affiche « Essentiel **À partir de 599$**, Photobooth classique (**3h**) » et « Premium À partir de 999$, Photobooth miroir (4h) ».
- Les annonces et /location-photobooth-montreal disent **3 h = 799 $** (et 2 h = 599 $).
- **Correctif :** URL du lien annexe → `https://evenox.ca/forfaits-mariage/`, avec les descriptions « Décor WOW, Soirée Signature » et « Forfaits 899 $ à 1 899 $ ».
- Dans le bloquant n° 6 du plan, ajouter : « /mariage/ : aligner Essentiel sur 2 h à 599 $ ou retirer la grille ».

### I11. La livraison est-elle incluse dans le prix des forfaits ? Le site se contredit (risque lié à la Loi sur la protection du consommateur)
- Les pages ne disent pas la même chose :

  | Page | Livraison |
  |---|---|
  | /nos-forfaits-tout-inclus (FAQ) | « La livraison est en sus : 100 $… 7 $/km » |
  | /mariage/ | « Livraison en sus » |
  | /forfaits-mariage/ | « Le prix affiché est le prix complet… Aucun frais surprise » |
  | /lettres-lumineuses/ (Célébration et Signature, « installés ») | « Livraison en sus » |

- Un forfait installé ne peut pas exister sans livraison. Afficher 899 $, 1 449 $, 380 $ ou 500 $ à des consommateurs alors que la livraison est obligatoire et facturée à part pose un risque au regard de l'art. 224 c) de la LPC (prix total).
- **Correctif :**
  - Le client tranche : livraison incluse jusqu'à 40 km dans les forfaits (comme pour le photobooth), ou prix qui l'intègrent.
  - En attendant, ne pas activer la campagne Événements privés avec 899 $, 1 449 $, 380 $ et 500 $ sans validation.
  - Ajouter cette décision à la section 10 du plan, point 2.

### I12. Épinglage : un seul titre par position épinglée
- Les épinglages sont **valides** : chaque position épinglée a au moins un titre, et les 13 titres non épinglés couvrent la position 3.
- Mais un seul titre en position 1 dans les 14 annonces fige l'annonce et donne une efficacité « Faible » ou « Moyenne ». Par exemple, le mot-clé « party de bureau » affiche toujours « Fête de Noël d'entreprise ».
- **Correctif :** passer `pins` en liste et épingler 2 titres par position.
  - Fête de Noël, position 1 : « Fête de Noël d'entreprise » et **« Party de bureau clé en main »** (27).
  - Photobooth, position 1 : « Location photobooth » et « Borne photo à louer ».
  - Lettres lumineuses, position 1 : « Location lettres lumineuses » et « Lettres géantes de 4 pi ».
  - Décor mariage, position 2 : « Forfaits 899 $ à 1 899 $ » et « Soirée Signature 1 449 $ ».
  - Faire de même pour les autres groupes.
  
  Pour le format, accepter `pins={0:1, 7:1, 2:2}`. Le CSV gère déjà plusieurs titres par position, puisqu'il écrit « 1 » dans chaque colonne « Headline N position ».

### I13. Déclaration « publicité politique de l'UE » absente des lignes de campagne
- Depuis septembre 2025, la création de campagnes exige cette déclaration (champ `contains_eu_political_advertising` dans l'API). Les CSV n'ont pas de colonne pour elle, et l'aide 57747 ne la liste pas encore.
- **Correctif dans le guide d'import, étape 7 :** « Si Editor signale "Déclaration de publicité politique de l'UE requise", sélectionner les 5 campagnes > Publicité politique de l'UE : **Ne contient pas** ».

### I14. Négatifs : il manque des négatifs informationnels pour la saison des Fêtes
- « party des fêtes » en expression (campagne Corporatif) va capter, en décembre, de gros volumes à faible intention : « jeux pour party des fêtes », « thème party de bureau », « quoi porter party de bureau », « invitation party des fêtes », « party des fêtes famille ». Aucun négatif ne les bloque.
- **Correctif, à ajouter à NEG_CORPO :** « jeux pour », « jeu pour », « thème », « quoi porter », « tenue », « invitation », « discours », « famille », « entre amis », « recette », « traiteur », « buffet », « souper », « musique », « playlist », « dj », « quilles », « bowling », « laser », « paintball », « rallye », « cabane à sucre », « golf ».
- Puis relancer le contrôle des conflits. Attention : « golf » et « famille » ne touchent aucun mot-clé, à vérifier.
- **À ajouter à NEG_COMPTE :** « ipad », « imprimante », « jean coutu », « pharmaprix », « photo passeport », « père noël », « bois » (pour les lettres en bois à acheter), « rive-sud », « longueuil », « brossard ».

---

## MINEUR

1. **Le mot « borne » n'apparaît sur aucune page du site.** Mots-clés touchés : « borne photo entreprise », « location borne photo », « borne photo mariage », « location borne photo mariage ». Titres touchés : « Borne photo à louer », « Borne photo pour entreprise », « Borne photo pour mariage », « Photobooth et borne photo ».
   - Correctif : demander au client d'ajouter « borne photo » dans le H2 de /location-photobooth-montreal/. Sinon, attendre un niveau de qualité plus bas sur ces mots-clés.
2. **« Activations de marque »** (Photobooth corporatif, Lettres lumineuses corporatif) et le mot-clé « photobooth activation de marque » n'apparaissent sur aucune page de destination.
   - Correctif du titre : **« Votre logo sur les photos »** (25). La page photobooth dit : « l'overlay… votre logo ».
3. **« Consolidation d'équipe »** (mot-clé et titre) n'est pas sur la page team building, qui dit « cohésion d'équipe ».
   - Correctif : à garder, mais demander l'ajout du terme sur la page.
4. **« Impressions en option »** et la description 2 « Impressions illimitées… en option » (Photobooth mariage) contredisent /location-photobooth-montreal (« Impressions illimitées dès le Signature »). La FAQ, elle, dit 179 $ en option. Le site se contredit.
   - Correctif du titre : **« Galerie photo incluse »** (21). Correctif de la description 2 : **« Photos et vidéos illimitées, backdrop personnalisable et galerie remise après l'événement. »** (90).
   - Demander aussi au client d'harmoniser le site.
5. **« Plus de 1 000 événements »** (titre et description 4 de Décor mariage) : la page des forfaits dit « Des centaines d'événements ».
   - Correctif : demander au client d'aligner la page, ou retirer la mention de Décor mariage tant que la page de destination reste /nos-forfaits-tout-inclus.
6. **« Décembre se réserve tôt »** et « Les vendredis de décembre partent vite » ne sont pas sur la page. La page dit « les fins de semaine partent 3 à 4 semaines d'avance ».
   - Correctif de la description 4 : « Installation discrète, ramassage par notre équipe. En haute saison, réservez 3 à 4 semaines d'avance. » Cette phrase compte plus de 90 caractères ; la version courte est **« Installation discrète et ramassage par notre équipe. Réservez 3 à 4 semaines d'avance. »** (87).
7. **Le lien annexe « À propos d'Évenox » promet des choses absentes de /a-propos/.** « Plus de 1 000 événements » et « Entreprise de Sainte-Thérèse » ne figurent pas dans le corps de la page. La page dit aussi « Livraison en option » et « prix… accessibles à tous », ce qui contredit le positionnement haut de gamme.
   - Correctif des descriptions : **« Entreprise familiale depuis 2022 »** (32) et **« Entrepôt à Sainte-Thérèse »**. Mieux encore : remplacer ce lien par « Vidéobooth 360 » (/photobooth-360/).
8. **« Livraison incluse 40 km »** (titre) se lit mal. La page dit exactement « Livraison incluse (40 km) ».
   - Correctif : **« Livraison incluse (40 km) »** (25). Même correction en anglais : « Delivery included (40 km) ».
9. **Français.** « Montréal, Laval et Rive-Nord » apparaît sans article dans 5 descriptions : MARQUE description 4, TEAMBUILDING description 3, LETTRES_CORPO description 3, LETTRES description 3, DECOR description 3.
   - Correctif : **« Montréal, Laval et la Rive-Nord »**.
   - « clés en main » (TEAMBUILDING description 1) contre « clé en main » ailleurs : harmoniser en **« clé en main »**.
   - « Net 30 » est du jargon comptable anglais. En titre ou en accroche, préférer **« Facturation à 30 jours »** (22), si l'on garde l'idée.
   - Description 2 de Photobooth mariage : le mot « souvenir » est répété deux fois (le correctif 4 le règle).
10. **Une partie des contrôles du script ne s'applique pas aux liens annexes ni aux accroches.** BANNED et la règle des majuscules ne vérifient que les annonces. La fonction `px()` remplace par simple sous-chaîne : changer « 195 $ » modifierait aussi « 1 195 $ ».
    - Correctif : appliquer `check_text()` aux liens annexes et aux accroches, et utiliser `re.sub(r'(?<![\d ])' + re.escape(ancien), …)`.
11. **URL inutilisées ou codées en dur.** `URL["mariage"]` n'est jamais utilisée, et 5 URL de liens annexes sont écrites en dur.
    - Correctif : faire passer toutes les URL par le dictionnaire `URL` (voir aussi B1).
12. **La campagne Québec-Lévis (en pause) contredit le plan.**
    - Elle réintroduit le titre « Québec et Lévis », que le plan dit avoir retiré parce que le site ne le confirme pas.
    - Elle reçoit le lien annexe « Jusqu'à 40 km de Sainte-Thérèse ».
    - Des mots-clés photobooth et lettres y déclenchent une annonce de fête de Noël.
    - Correctif : retirer C_QC de l'import. Le plan dit déjà : « lead de Québec n'est pas servable ».
13. **Campagne EN (en pause).** Ses annonces mènent à des pages 100 % françaises, et les noms de forfaits sont traduits (« Office Party Package ») alors que le site ne les a pas en anglais.
    - Correctif : à documenter dans la section « Pourquoi la campagne EN reste en pause ».
14. **Langue.** Le script affirme que « le ciblage linguistique n'existe plus en Search depuis le 30 sept. 2026 ». Je n'ai pas pu le vérifier, et l'aide d'Editor liste encore la colonne « Languages ».
    - Correctif : si le champ apparaît dans Editor, régler « Français ; Anglais » à l'étape 6 du guide.
15. **Format décimal.** Les budgets et les CPC sont écrits avec un point (10.00, 2.50).
    - Correctif, à ajouter au guide (étape 5) : « Dans l'aperçu, confirmer 10,00 $ et 2,50 $, et non 1 000 $ ni 250 $ ».
16. **Points vérifiés et conformes aux CSV :**
    - « Networks = Google Search » est une valeur documentée (Recherche seulement).
    - « Maximum CPC bid limit » est une colonne documentée.
    - « Campaign Negative Phrase » est le format des exports d'Editor ; l'aide indique « Campaign negative ». Contrôle à faire dans l'aperçu : 661 négatifs de type « Négatif de campagne – Expression ».
    - « Callout text », « Link Text » et « Description Line 1 » sont documentés, et « Description 1 » en est un alias valide dans le fichier combiné.
    - Le fichier commence bien par le BOM FF FE (UTF-16 LE).
    - Recommandation : préférer l'import pas à pas au fichier 0 combiné, parce que les colonnes Description 1 et 2 et Final URL y sont partagées entre les annonces et les liens annexes.
17. **Liste incomplète des pages à nettoyer** (bloquant n° 6 du plan : « dès » et « à partir de »). Il faut ajouter :
    - /nos-forfaits-tout-inclus (filtres « dès 1 195 $ », « dès 899 $ », « dès 51 $ ») ;
    - /team-building-activitecorpo/ (« À partir de 300 $ de location ») ;
    - /forfaits-mariage/ (« dès 899 $ ») ;
    - /forfaits-photobooth/ (balise title « dès 599$ »).
18. **Les prix des forfaits sont des « prix de lancement ».** /nos-forfaits-tout-inclus dit : « Profitez-en pendant qu'il est en vigueur ».
    - Correctif, à ajouter à la routine du lundi (section 6) : « Vérifier que 1 195 / 1 995 / 2 495 / 899 / 1 449 $ sont toujours affichés ; sinon mettre à jour `PRIX` et relancer ».
19. **Formulation du plan sur la zone.** Le plan dit « Ta livraison s'arrête à 40 km » (section 2). La FAQ dit « au-delà de 40 km, soumission sur mesure », et la page des forfaits parle d'une « zone élargie pour les événements corporatifs ».
    - Correctif : « Ta livraison standard couvre 40 km ; au-delà, c'est sur soumission ».
20. **Accroche « Réservation en ligne ».** Elle est vraie pour la boutique (Booqable, accueil). Mais la page photobooth dit « Aucun paiement en ligne », et la page lettres fonctionne sur demande, avec confirmation en 24 h.
    - Correctif : acceptable dans la campagne Marque ; dans les campagnes Corporatif et Privés, remplacer par **« Prix affichés en ligne »** (déjà présente) ou **« Réponse le jour même »**.

---

## Promesses confirmées sur la page de destination (aucune action)

**/nos-forfaits-tout-inclus**
- Prix : 5 à 7 d'équipe 1 195 $, Party de Bureau 1 995 $, Gala Signature 2 495 $, Décor WOW 899 $, Soirée Signature 1 449 $.
- Contenu des forfaits : « 5 lettres lumineuses géantes », mur floral, étincelles froides, « photobooth premium avec préposé ».
- Service et modalités : « Tout installé et ramassé », « Installation discrète », « Prix affiché », « facture PO » (bon de commande), « soumission en 24 h ».

**/location-photobooth-montreal**
- Forfaits : Essentiel 2 h 599 $, Signature 3 h 799 $, Prestige 4 h 999 $, « duo Signature… 1 798 $ ».
- Inclusions : « Livraison… incluse jusqu'à 40 km », « Photos illimitées », vidéobooth 360.
- Preuve sociale : 1000+, 4.8/5.
- Délai : « Soumission en 24h ».

**/lettres-lumineuses/**
- Prix : Célébration 380 $, Signature 500 $, « LOVE 240 $ les 4 lettres », « OUI 210 $ les 3 lettres ».
- Format : lettres de 4 pieds.
- Délai : « Réponse en 24 heures ».
- Note : 4.8/5.

**Autres pages**
- /faq/ : « Jusqu'à 40 km de Sainte-Thérèse » ; net 30 et bon de commande sur approbation de crédit.
- /contact/ : « 24h », « 1000+ ».
- Accueil : « Plus de 1 000 événements depuis 2022 », « 4,8/5 sur Google, sur 52 avis », réservation en ligne.
