# Google Ads : campagnes Search Evenox (FR-QC)

Fichiers à importer dans Google Ads Editor (Compte > Importer > À partir d'un fichier). Tous les fichiers sont en UTF-8 avec BOM.
Toutes les campagnes sont créées **en veille (Paused)**. Il faut les relire avant de les activer.

| Ordre | Fichier | Contenu |
|---|---|---|
| 1 | `campaigns.csv` | 3 campagnes : budget, enchères, langue `fr`, ciblage par **présence**, une ligne par lieu ciblé |
| 2 | `ad_groups.csv` | 14 groupes d'annonces |
| 3 | `keywords.csv` | 240 mots clés, chacun en expression (Phrase) et en exact (Exact), 14 à 18 par groupe |
| 4 | `rsa_ads.csv` | 14 annonces RSA. Chacune a 15 titres et 4 descriptions. H1 est épinglé en position 1 (thème du groupe) |
| 5 | `negatives.csv` | 75 négatifs au niveau campagne : enfants et gonflables, isolation corpo/mariage, isolation de la marque, Evenko |
| 6 | `negatives_shared_list.csv` + `negatives_shared_list_links.csv` | Liste partagée « Evenox – Négatifs universels » (145 termes) et son association aux 3 campagnes |
| 7 | `assets_sitelinks.csv`, `assets_callouts.csv`, `assets_structured_snippets.csv` | Liens annexes, accroches et extraits structurés au niveau campagne. `assets.csv` regroupe les trois pour référence |

Si Editor ne reconnaît pas la liste partagée à l'import, créez-la dans **Bibliothèque partagée > Listes de mots clés à exclure**. Collez la colonne `Keyword`, puis associez la liste aux 3 campagnes.

## Campagnes

| Campagne | Budget/jour | Enchères | Zones |
|---|---|---|---|
| SRCH \| Corporatif \| FR | 100 $ | Maximiser les conversions. **Passer en CPA cible après 30 conversions en 30 jours.** CPA cible de départ = CPA observé x 1,1 | Montréal, Laval, Longueuil, Terrebonne, Mirabel, MRC Thérèse-De Blainville (Sainte-Thérèse, Blainville, Boisbriand, Rosemère, Lorraine, Bois-des-Filion, Sainte-Anne-des-Plaines), MRC Deux-Montagnes (Saint-Eustache, Deux-Montagnes, Sainte-Marthe-sur-le-Lac, Pointe-Calumet, Saint-Joseph-du-Lac, Oka, Saint-Placide). Ciblage par présence |
| SRCH \| Mariage & privé haut de gamme \| FR | 60 $ | Idem | Idem |
| SRCH \| Marque \| FR | 10 $ | Maximiser les clics, CPC max 2,50 $ | Province de Québec |

- **Réseaux :** Recherche Google seulement. Partenaires du Réseau de Recherche et Réseau Display désactivés.
- **Ciblage par présence :** la colonne `Targeting method = Location of presence` doit l'appliquer. Vérifiez-le dans Paramètres > Lieux > Options. La valeur Google par défaut, « Présence ou intérêt », laisse passer des clics de partout.
- **Noms de lieux :** les noms de lieux (p. ex. `Sainte-Therese,Quebec,Canada`) doivent être reconnus par Editor. Il signale les lieux non résolus à l'import. Corrigez-les avec l'outil de recherche de lieux.
- **Calendrier recommandé :** lundi à vendredi de 7 h à 21 h, samedi de 9 h à 17 h pour Corporatif. Tous les jours de 8 h à 22 h pour Mariage. Ajustez après 4 semaines de données.
- **Conversions principales :** formulaire de soumission envoyé, clic sur le numéro de téléphone et appel de 60 s et plus. Les conversions améliorées (Enhanced Conversions) sont requises. Importez ensuite les étapes hors ligne « soumission qualifiée » et « contrat signé », puis optimisez sur ces étapes.

## Isolation du trafic (sculpting)

- Le Corporatif exclut `mariage`, `enfant`, les gonflables et les fêtes d'enfant.
- Le Mariage exclut `party de bureau`, `5 à 7`, `team building`, `corporatif`, ainsi que les achats de mariage hors offre (robe, bague, photographe…).
- Les deux campagnes non-marque excluent `evenox`, `évenox` et `evenox.ca`. Les recherches de marque restent ainsi dans la campagne Marque.
- La Marque exclut `evenko` et ses variantes. La liste universelle les exclut aussi.

## À FAIRE AVANT LANCEMENT (bloquant)

1. **Remplacer `[N]`** dans le titre « Note 4,8/5 – [N] avis Google » par le nombre réel d'avis vérifié (3 caractères max pour rester sous 30). Avant l'import, supprimez ce titre de toutes les RSA ou corrigez-le partout (rechercher-remplacer dans `rsa_ads.csv`).
2. **Vérifier les mentions de clients** « Clients : RBC, PwC, Desjardins ». Il faut obtenir une autorisation écrite de chaque client, car l'usage de marques de tiers dans un texte d'annonce peut être contesté. Sinon, remplacez le titre par « Choisi par de grandes banques » ou « Clients corporatifs majeurs ».
3. **Confirmer les promesses opérationnelles :**
   - « Soumission en moins de 24 h »
   - « Facturation net 30 »
   - « Préposé sur place » (cabine photo et Gala)
   - Chapiteau 20x40 offert
   - « Chaises Chiavari »
   - Plus de 1 000 événements
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
| https://evenox.ca/mariage | TO-CREATE |
| https://evenox.ca/mariage/decoration | TO-CREATE |
| https://evenox.ca/mariage/arche-lettres-lumineuses | TO-CREATE |
| https://evenox.ca/mariage/chapiteau | TO-CREATE |
| https://evenox.ca/mariage/mobilier | TO-CREATE |
| https://evenox.ca/mariage/photobooth | TO-CREATE |
| https://evenox.ca/evenement-prive | TO-CREATE |
| https://evenox.ca/soumission | TO-CREATE (formulaire autonome) |
| https://evenox.ca/realisations | TO-CREATE (galerie de vrais montages) |

   Chaque page doit afficher le prix « à partir de ». Elle ne doit montrer **aucun** article enfant ou gonflable bas de gamme, puisque l'objectif est de filtrer les mauvais prospects. Le formulaire doit poser au minimum ces questions : type d'événement, date, nombre d'invités, budget, entreprise ou particulier.
5. **Loi 96 :** toutes les annonces sont en français. « Party », « 5 à 7 » et « clé en main » sont des usages admis au Québec. Le texte des annonces n'utilise ni « premium » ni « devis ». « Photobooth » apparaît seulement dans les mots clés, les URL et les chemins, là où les recherches réelles l'emploient. Les annonces disent « cabine photo ».

## Revue des 30 premiers jours

- **Chaque semaine :** relire le rapport des termes de recherche et ajouter les négatifs (bricolage, enfant, prix bas, emplois). Comptez environ 10 à 20 ajouts par semaine au début.
- **Jour 14 :** mettre en veille les mots clés avec 0 conversion et un coût supérieur à 2 fois le CPA cible.
- **Jour 30, ou à 30 conversions :** passer au CPA cible. Si le Corporatif plafonne en part d'impressions (budget perdu > 20 %) avec un CPA sous la cible, augmenter le budget de 20 % par semaine au maximum.
- **Après le 15 décembre :** réduire le message « Dates de décembre limitées » et basculer vers « Party des Fêtes en janvier » et les 5 à 7 de l'hiver.

Script de validation (longueurs, doublons, conflits négatifs/positifs) : dans le scratchpad de la session, hors dépôt.
