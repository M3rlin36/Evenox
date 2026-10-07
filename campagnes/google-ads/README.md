# Google Ads : campagnes Search Evenox (FR-QC)

Fichiers générés par `outils/build_google_ads.py` pour **Google Ads Editor 2.13** (version courante, juillet 2026 ; 2.11 et plus fonctionnent aussi). Tous les CSV sont en UTF-8 avec BOM, séparateur virgule, en-têtes en anglais (Editor exige des en-têtes anglais, sans tenir compte de la casse ni des espaces).
Toutes les campagnes sont créées **en veille (Paused)**. Les groupes, mots clés et annonces sont « Enabled », mais rien ne diffuse tant que la campagne reste en veille.

## Fichiers

| Fichier | Contenu | À importer ? |
|---|---|---|
| `import_editor_complet.csv` | **Fichier principal.** 3 campagnes (budget, enchères, réseaux, langue `fr`, ciblage par présence, statut Paused), 41 lieux avec `Location ID`, 14 groupes, 240 lignes de mots clés (120 termes en Phrase + Exact), 14 annonces RSA (15 titres, 4 descriptions, H1 épinglé en position 1), 75 négatifs de campagne | Oui, en premier |
| `assets_sitelinks.csv` | 16 liens annexes au niveau campagne | Oui |
| `assets_callouts.csv` | 20 accroches au niveau campagne | Oui |
| `assets_structured_snippets.csv` | 3 extraits structurés (en-têtes `Services` / `Types`, valeurs séparées par `;`) | Oui |
| `negatives_shared_list.csv` + `negatives_shared_list_links.csv` | Liste partagée « Evenox – Négatifs universels » (145 termes, expression) et son association aux 3 campagnes | Essayer ; sinon repli manuel (étape 6) |
| `negatives_shared_list.txt` | Les 145 termes de la liste partagée, un par ligne, au format expression (`"terme"`) | Repli manuel seulement |
| `campaigns.csv`, `ad_groups.csv`, `keywords.csv`, `rsa_ads.csv`, `negatives.csv` | Le même contenu que le fichier principal, découpé par entité | Seulement si l'import du fichier principal échoue (importer dans cet ordre) |
| `assets.csv` | Vue d'ensemble des 3 types de composantes | **Non** (référence ; colonnes mélangées) |

Les composantes (assets) restent dans des fichiers séparés : leurs colonnes `Description line 1/2` sont des alias des colonnes `Description 1/2` des annonces, et Editor les confondrait dans un fichier combiné.

## Procédure d'import (Google Ads Editor)

**Avant de commencer**
1. Ouvrir Google Ads Editor 2.13 (Aide > À propos pour voir la version ; mettre à jour si inférieure à 2.11, la colonne `EU political ads` n'existant pas avant).
2. Sélectionner le compte Evenox, puis **Compte > Obtenir les modifications récentes** (Get recent changes) pour partir d'une copie à jour. Publier ou rejeter toute modification en attente : Editor refuse l'import s'il y en a.
3. Corriger d'abord les points bloquants de la section « À FAIRE AVANT LANCEMENT » (notamment `[N]` dans un titre), puis relancer `python3 -I outils/build_google_ads.py` et `python3 -I outils/validate_ads.py` (0 erreur attendue).

**Import**
4. **Compte > Importer > À partir d'un fichier…** (Account > Import > From file…) et choisir `import_editor_complet.csv`.
   - À l'écran d'aperçu, vérifier que chaque en-tête est reconnu (aucune colonne « Ignorer / non mappée »). Si une colonne n'est pas reconnue, choisir le bon en-tête dans la liste déroulante. Le seul en-tête un peu risqué est `EU political ads` : s'il n'est pas reconnu, l'ignorer et régler le champ à la main (étape 8).
   - Cliquer **Importer**, puis **Examiner les modifications importées** et **Conserver les modifications proposées**. L'aperçu n'affiche que 100 lignes, mais tout le fichier est importé.
5. Recommencer l'étape 4 avec `assets_sitelinks.csv`, puis `assets_callouts.csv`, puis `assets_structured_snippets.csv`.
6. Liste de négatifs partagée : importer `negatives_shared_list.csv`, puis `negatives_shared_list_links.csv`. Si Editor ne reconnaît pas les colonnes `Shared Set Name` / `Shared Set Type` (format non documenté par Google), annuler cet import et faire le **repli manuel** :
   - **Bibliothèque partagée > Listes de mots clés à exclure > + Ajouter**, nom : `Evenox – Négatifs universels` ;
   - dans la liste, **Ajouter plusieurs mots clés à exclure** et coller le contenu de `negatives_shared_list.txt` (les guillemets donnent la correspondance de type expression) ;
   - **Mots clés et ciblage > Listes de mots clés à exclure de la campagne > Ajouter**, et associer la liste aux 3 campagnes.

**Vérifications après import (avant de publier)**
7. Cliquer **Vérifier les modifications** (Check changes) et corriger toute erreur ou tout avertissement.
8. Pour chacune des 3 campagnes, dans le panneau d'édition :
   - Statut = **En veille** ; Type = Réseau de Recherche ; **Réseaux** : Recherche Google seulement (Partenaires du Réseau de Recherche et Réseau Display décochés) ;
   - Budget : 100 $ / 60 $ / 10 $ par jour ; Stratégie d'enchères : Maximiser les conversions / Maximiser les conversions / Maximiser les clics avec **limite de CPC max 2,50 $** (Marque) ;
   - Langues : français seulement ;
   - **Options de lieux** : Ciblage = « Présence : personnes se trouvant dans vos zones ciblées », Exclusion = « Présence » ;
   - **Annonces politiques de l'UE** : « Ne contient pas d'annonces politiques de l'UE » (le régler à la main si la colonne n'a pas été reconnue) ;
   - Lieux : 20 lieux pour Corporatif et Mariage, Québec (province) pour Marque. Aucun lieu « non résolu » : Editor utilise la colonne `Location ID` (identifiants officiels Google, fichier geotargets du 2026-08-12).
9. Groupes d'annonces : 14 au total (7 Corporatif, 6 Mariage, 1 Marque). Mots clés : 240 lignes, en Phrase et en Exact. Négatifs de campagne : 75, de type « Expression négative de campagne ».
10. Annonces : 14 RSA, chacune avec 15 titres et 4 descriptions ; le titre 1 est épinglé en position 1 (icône d'épingle) ; chemins d'affichage et URL finales corrects ; force de l'annonce affichée sans erreur.
11. Composantes : 16 liens annexes, 20 accroches, 3 extraits structurés, rattachés aux bonnes campagnes.
12. **Publier** (Post). Puis, dans l'interface Web, refaire un contrôle rapide de l'étape 8 et des conversions (section « Conversions » plus bas).

**Ce qu'Editor ne fait pas par CSV ici (à régler à la main)**
- **Calendrier de diffusion** : non inclus dans le CSV. Le créer dans Paramètres de la campagne > Calendrier de diffusion (voir « Calendrier recommandé »).
- **Objectifs de conversion** de la campagne (`lead_qualifie` comme principale) : à régler dans l'interface Web.
- **Passage au CPA cible** après 30 `lead_qualifie` sur 30 jours : manuel (la colonne `Comment` de chaque campagne le rappelle).
- Liste de négatifs partagée : repli manuel ci-dessus si l'import CSV échoue.

**Si l'import par fichier pose problème** : ouvrir le CSV dans un éditeur de texte (pas Excel, qui peut abîmer les accents et les « 1 195 $ »), tout copier, puis **Compte > Importer > Coller du texte** (Paste text). Si le fichier principal échoue, importer les fichiers par entité dans cet ordre : `campaigns.csv`, `ad_groups.csv`, `keywords.csv`, `rsa_ads.csv`, `negatives.csv`, puis les composantes.

## Campagnes

| Campagne | Budget/jour | Enchères | Zones |
|---|---|---|---|
| SRCH \| Corporatif \| FR | 100 $ | Maximiser les conversions. **Passer en CPA cible après 30 conversions en 30 jours.** CPA cible de départ = CPA observé x 1,1 | Montréal, Laval, Longueuil, Terrebonne, Mirabel, MRC Thérèse-De Blainville (Sainte-Thérèse, Blainville, Boisbriand, Rosemère, Lorraine, Bois-des-Filion, Sainte-Anne-des-Plaines), MRC Deux-Montagnes (Saint-Eustache, Deux-Montagnes, Sainte-Marthe-sur-le-Lac, Pointe-Calumet, Saint-Joseph-du-Lac, Oka, Saint-Placide), Saint-Jérôme. Ciblage par présence |
| SRCH \| Mariage & privé haut de gamme \| FR | 60 $ | Idem | Idem |
| SRCH \| Marque \| FR | 10 $ | Maximiser les clics, CPC max 2,50 $ | Province de Québec |

- **Réseaux :** Recherche Google seulement. Partenaires du Réseau de Recherche et Réseau Display désactivés.
- **Ciblage par présence :** les colonnes `Targeting method` et `Exclusion method` = `Location of presence` l'appliquent. Vérifiez-le dans Paramètres > Lieux > Options. La valeur Google par défaut, « Présence ou intérêt », laisse passer des clics de partout. C'est la cause probable des 4 anciennes annonces diffusées en France (audit-campagne-actuelle.md §5) : passer aussi les anciennes campagnes en « Présence » avant de les mettre en veille, et ne jamais choisir « Présence ou intérêt » dans une nouvelle campagne.
- **Lieux :** chaque lieu est fourni avec son nom canonique Google et son `Location ID` (Criteria ID) tirés du fichier officiel geotargets. On cible la version « City » quand Google en a deux (p. ex. Montréal 1002604 et non la « Municipality » 9196770). Pour ajouter un lieu, chercher son ID dans https://developers.google.com/google-ads/api/data/geotargets.
- **Calendrier recommandé :** lundi à vendredi de 7 h à 21 h, samedi de 9 h à 17 h pour Corporatif. Tous les jours de 8 h à 22 h pour Mariage. Ajustez après 4 semaines de données.
- **Conversions (voir `operations/tracking-setup.md`, section 3) :** principale = `lead_qualifie` (formulaire, routes A et B), avec conversions améliorées. Secondaires (observation) = `lead_tous`, `appel_60s` (devient principale après 30 jours si au moins 50 % des appels écoutés sont qualifiés). Phase 2 : import hors ligne de `depot_paye`. Ne pas mettre le clic sur le téléphone en conversion principale.

## Isolation du trafic (sculpting)

- Le Corporatif exclut `mariage`, `enfant`, les gonflables et les fêtes d'enfant.
- Le Mariage exclut `party de bureau`, `5 à 7`, `team building`, `corporatif`, ainsi que les achats de mariage hors offre (robe, bague, photographe…).
- Les deux campagnes non-marque excluent `evenox`, `évenox` et `evenox.ca`. Les recherches de marque restent ainsi dans la campagne Marque.
- La Marque exclut `evenko` et ses variantes. La liste universelle les exclut aussi.

## À FAIRE AVANT LANCEMENT (bloquant)

0. **Vérifier la note sur la fiche Google** (4,8/5 et 52 avis selon le site, non vérifié sur Google même ; le site affiche aussi 4,9). Si la note réelle diffère, remplacer « 4,8/5 » partout dans `outils/build_google_ads.py` (titres, descriptions, accroches), puis régénérer.
1. **Remplacer `[N]`** dans le titre « Note 4,8/5 – [N] avis Google » par le nombre réel d'avis vérifié (3 caractères max pour rester sous 30). Corrigez-le dans `outils/build_google_ads.py` (listes `CORP_COMMON_H`, `MAR_COMMON_H` et groupe Marque), puis régénérez les CSV. Sinon, retirez ce titre avant l'import : une annonce importée avec « [N] » serait diffusée telle quelle.
2. **Vérifier les mentions de clients** « Clients : RBC, PwC, Desjardins ». Il faut obtenir une autorisation écrite de chaque client, car l'usage de marques de tiers dans un texte d'annonce peut être contesté. Sinon, remplacez le titre par « Choisi par de grandes banques » ou « Clients corporatifs majeurs ».
3. **Confirmer les promesses opérationnelles :**
   - « Soumission en moins de 24 h »
   - « Facturation net 30 »
   - « Préposé sur place » (cabine photo et Gala)
   - Chapiteau 20x40 offert
   - « Chaises Chiavari »
   - Plus de 1 000 événements (le site affiche aussi « 500+ » : une seule valeur, voir correctifs-urgents.md n° 5)
   - « Montage le jour même » (déco mariage) et « Plancher et éclairage en option » (lien annexe Chapiteaux)
   - « Dates de décembre limitées » et « Été 2027 : dates limitées » : à retirer si ce n'est pas vrai au moment de la diffusion
3b. **Prix (vérifiés par la contre-vérification) :**
   - Corporatif : 1 195 $ / 1 995 $ / 2 495 $.
   - **Mariage = forfaits déco** : 899 $ / 1 449 $ / Mariage Signature 1 899 $.
   - **599 $ et 999 $ = forfaits cabine photo** (Essentiel dès 599 $ ; le palier de 999 $ ne doit pas être nommé « Premium » dans les annonces, en vertu de la Loi 96).
   - Aucune annonce ne dit « mariage dès 599 $ ».
3c. **Livraison et installation : À HARMONISER SUR LE SITE (client).**
   - Le site se contredit : certaines pages disent « livraison incluse », alors que la page /livraison/ indique 100 $ pour les 10 premiers km, puis 7 $/km, et 50 $/h pour l'installation.
   - Les annonces ne promettent donc **jamais** « livraison incluse » ni « installation incluse ». Elles disent « Livré, monté et démonté », « Livraison, installation et démontage par notre équipe » ou « Service clé en main ».
   - Une fois le site harmonisé (p. ex. livraison incluse dans un rayon de X km pour les forfaits), on pourra ajouter un titre « Livraison incluse (X km) ».
4. **Créer les pages de destination (TO-CREATE)**, en français, chacune avec un formulaire de soumission qualifiant :

| URL | Statut |
|---|---|
| https://evenox.ca/corporatif | TO-CREATE |
| https://evenox.ca/corporatif/party-des-fetes | TO-CREATE (priorité 1, saison du T4) |
| https://evenox.ca/corporatif/5-a-7 | TO-CREATE |
| https://evenox.ca/corporatif/gala | TO-CREATE |
| https://evenox.ca/corporatif/team-building | TO-CREATE |
| https://evenox.ca/corporatif/photobooth-360 | TO-CREATE |
| https://evenox.ca/corporatif/activation-de-marque | TO-CREATE |
| https://evenox.ca/mariage | **EXISTE déjà** (page indexée). Utilisée par les liens annexes « Forfaits mariage ». À corriger avant le lancement : correctifs-urgents.md, n° 8 (forfaits cabine photo présentés comme « forfaits mariage », palier nommé « Premium ») |
| https://evenox.ca/mariage/decoration | TO-CREATE |
| https://evenox.ca/mariage/arche-lettres-lumineuses | TO-CREATE |
| https://evenox.ca/mariage/chapiteau | TO-CREATE |
| https://evenox.ca/mariage/mobilier | TO-CREATE |
| https://evenox.ca/mariage/photobooth | TO-CREATE |
| https://evenox.ca/evenement-prive | TO-CREATE |
| https://evenox.ca/soumission | TO-CREATE (formulaire autonome) |
| https://evenox.ca/realisations | TO-CREATE (galerie de vrais montages) |

   Gabarits : `operations/landing-corporatif.md` pour `/corporatif` et ses 6 sous-pages ; `operations/landing-mariage.md` pour les 5 sous-pages `/mariage/...` ; `operations/landing-evenement-prive.md`, `operations/landing-soumission.md` et `operations/landing-realisations.md` pour les 3 autres. Si `/evenement-prive` n'est pas publiée (décision COMPTE-RENDU §5 bis, n° 7), mettre en veille le groupe « Événement privé clé en main » et retirer le lien annexe « Fêtes privées ». Tant que `/realisations` n'a pas 3 études de cas réelles, retirer le lien annexe « Réalisations ».
   **Redirections existantes à supprimer avant de publier (audit-campagne-actuelle.md §6c) :** aujourd'hui, `/corporatif/gala` → `/gala-corporatif/`, `/corporatif/photobooth-360` et `/mariage/photobooth` → `/photobooth-360/`, `/mariage/decoration` → `/decoration-ballon/` et `/soumission` → `/soumission-grand-evenement/` (301). Retirer ces règles dans l'extension de redirection (ou Yoast) au moment de publier chaque nouvelle page, puis vérifier que l'URL finale répond 200 (la seule redirection acceptable est l'ajout de la barre oblique finale par WordPress, p. ex. `/soumission` → `/soumission/`).
   Chaque page doit afficher le prix « à partir de ». Elle ne doit montrer **aucun** article enfant ou gonflable bas de gamme, puisque l'objectif est de filtrer les mauvais prospects. Le formulaire doit poser au minimum ces questions : type d'événement, date, nombre d'invités, budget, entreprise ou particulier.
5. **Loi 96 :** toutes les annonces sont en français. « Party », « 5 à 7 » et « clé en main » sont des usages admis au Québec. Le texte des annonces n'utilise ni « premium » ni « devis ». « Photobooth », « team building » et « lounge » apparaissent seulement dans les mots clés et les URL, là où les recherches réelles les emploient. Le texte visible des annonces (titres, descriptions, chemins d'affichage, composantes) dit « cabine photo », « consolidation d'équipe » ou « activité d'équipe », et « coin salon ».

## Revue des 30 premiers jours

- **Chaque semaine :** relire le rapport des termes de recherche et ajouter les négatifs (bricolage, enfant, prix bas, emplois). Comptez environ 10 à 20 ajouts par semaine au début.
- **Jour 14 :** mettre en veille les mots clés avec 0 `lead_qualifie` et plus de 300 $ dépensés (2 fois la cible de 150 $ par lead qualifié du plan).
- **Après 30 `lead_qualifie` sur 30 jours (pas avant) :** passer au CPA cible (CPA observé × 1,1).
- **Augmenter :** +20 % par semaine au maximum, seulement si le coût par lead qualifié est inférieur à 100 $ et le taux de signature d'au moins 25 % (règle commune de COMPTE-RENDU.md §4 et du CRM), et si la campagne perd des impressions faute de budget (> 20 %). Le total reste à 300 $/jour : la hausse est prise sur la campagne au pire coût par lead qualifié.
- **Réduire :** aucun lead qualifié ou coût par lead qualifié > 300 $ au jour 30 → −30 %.
- **Après le 15 décembre :** réduire le message « Dates de décembre limitées » et basculer vers « Party des Fêtes en janvier » et les 5 à 7 de l'hiver.

Les CSV sont générés par `outils/build_google_ads.py` : modifier le script, puis le relancer, plutôt que d'éditer les CSV à la main. Validation (longueurs, mots interdits, doublons, conflits négatifs/positifs) : `python3 -I outils/validate_ads.py`, depuis la racine du dépôt.
