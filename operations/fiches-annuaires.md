# Fiches d'annuaires — textes prêts à copier-coller

> Pour l'adjoint(e) (ADJ) et le propriétaire (PROP). Correspond aux jours 4 à 10 de geo-chatgpt.md et aux correctifs 17 à 20 de correctifs-urgents.md.
> But : **les mêmes faits, mot pour mot, partout** (Google, Bing, Apple, Yelp, Three Best Rated, WeddingWire, Tourisme Montréal, CCI). Les assistants IA (ChatGPT, Copilot, Gemini) recoupent ces fiches : une seule incohérence (adresse « Laval », Gmail, 4,8 vs 4,9) suffit à faire baisser la confiance.
> Français du Québec. Aucun mot anglais dans les textes publiés (« cabine photo », « consolidation d'équipe », « haut de gamme », « soumission »). Aucune mention d'alcool. Les noms de catégories entre parenthèses en anglais servent seulement à **retrouver** la catégorie dans l'interface ; ils ne sont pas publiés.

---

## 1. NAP de référence (à copier à l'identique partout)

| Champ | Valeur unique | Remarque |
|---|---|---|
| Nom | **Évenox** | Nom réel de l'entreprise, sans mots-clés ajoutés (« Évenox location Laval » est interdit par Google et peut faire suspendre la fiche). Si un système refuse les accents : « Evenox ». |
| Nom légal (si demandé) | Évenox inc. | — |
| Adresse, ligne 1 | 215, boul. René-A.-Robert | Si le champ n'accepte pas la virgule : `215 boul. René-A.-Robert` |
| Adresse, ligne 2 | local 100 | Champ « Unité / Suite » |
| Ville | Sainte-Thérèse | **Jamais « Laval »** (erreur actuelle sur WeddingWire) |
| Province | Québec (QC) | — |
| Code postal | J7E 4L1 | — |
| Téléphone | 514-559-1893 · format international +1 514-559-1893 | Numéro principal partout ; **pas** de numéro de suivi d'appels dans les annuaires (tracking-setup.md) |
| Courriel | info@evenox.ca | **Seulement après** la migration hors Gmail (correctifs-urgents.md, n° 4). Avant : laisser vide plutôt que d'inscrire l'adresse Gmail. |
| Site Web | `https://evenox.ca/` + paramètres UTM du tableau ci-dessous | — |
| Horaire | Lundi au vendredi 9 h – 18 h · samedi 9 h – 13 h · dimanche fermé **[à confirmer]** | Identique au schéma (schema-jsonld.md) et au site |
| Fondation | 2022 | — |
| Zone desservie | Rive-Nord (Sainte-Thérèse, Blainville, Boisbriand, Rosemère, Lorraine, Bois-des-Filion, Mirabel, Saint-Eustache, Deux-Montagnes, Terrebonne, Saint-Jérôme), Laval, Montréal | — |
| Note et avis | **[NOTE]** / 5 sur **[N]** avis Google | Ne jamais l'écrire dans une description (ça se périme). Le vérifier sur la fiche. |
| Nombre d'événements | **[500+ / 1 000+]** | Un seul chiffre, décidé par PROP (correctifs-urgents.md, n° 5). Ne pas l'utiliser tant qu'il n'est pas tranché. |

**Lien du site par annuaire** (conventions de tracking-setup.md, section 7) :

| Annuaire | URL à inscrire |
|---|---|
| Google Business Profile | `https://evenox.ca/?utm_source=gbp&utm_medium=organic_local&utm_campaign=fiche` |
| Bing Places | `https://evenox.ca/?utm_source=bing&utm_medium=organic_local&utm_campaign=fiche` |
| Apple Business Connect | `https://evenox.ca/?utm_source=apple&utm_medium=organic_local&utm_campaign=fiche` |
| Yelp | `https://evenox.ca/?utm_source=yelp&utm_medium=referral&utm_campaign=fiche` |
| WeddingWire.ca | `https://evenox.ca/mariage/?utm_source=weddingwire&utm_medium=referral&utm_campaign=fiche` |
| Three Best Rated | `https://evenox.ca/` (sans paramètres : formulaire de nomination) |
| meet.mtl.org | `https://evenox.ca/?utm_source=tourisme_mtl&utm_medium=referral&utm_campaign=fiche` |
| CCI Thérèse-De Blainville | `https://evenox.ca/?utm_source=cci_tdb&utm_medium=referral&utm_campaign=fiche` |

---

## 2. Textes de base (réutilisés d'une fiche à l'autre)

### 2.1 Description longue — **669 caractères** (limite Google : 750, espaces compris ; compté au script)

> Règles de Google pour ce champ : pas d'URL, pas de prix, pas de promotion, pas de majuscules abusives. Le texte ci-dessous les respecte.

```
Évenox est une entreprise de location d'équipement événementiel clé en main fondée en 2022 à Sainte-Thérèse, sur la Rive-Nord de Montréal. Nous desservons la Rive-Nord, Laval et Montréal. Pour les entreprises : 5 à 7 d'équipe, party des Fêtes, gala, remise de prix, consolidation d'équipe et activation de marque. Pour les mariages et les fêtes privées : lettres lumineuses géantes, mur floral, étincelles froides, cabine photo et cabine vidéo 360 avec préposé, chapiteaux et mobilier. Notre équipe livre, installe, teste et démonte tout : un seul fournisseur, une seule facture. Forfaits à prix affichés, réponse rapide et bon de commande accepté pour les entreprises.
```

### 2.2 Description courte — **208 caractères** (pour les champs limités à 250)

```
Location d'équipement événementiel clé en main à Sainte-Thérèse : partys de bureau, galas, mariages et fêtes privées. Décor, cabine photo avec préposé, installation et démontage. Rive-Nord, Laval et Montréal.
```

### 2.3 Paragraphe d'identité (pages À propos, Yelp « Historique », WeddingWire, CCI)

Celui de geo-chatgpt.md (« Modèle de paragraphe d'identité »), **sans** la note Google si le champ n'est pas mis à jour chaque mois, et avec la phrase de livraison **[LIVRAISON]** seulement une fois la politique décidée.

---

## 3. Google Business Profile

### 3.1 Catégories (maximum 10 : 1 principale + 9 secondaires)

| Rang | Catégorie (libellé français de l'interface) | Pour la retrouver | Pourquoi |
|---|---|---|---|
| **Principale** | Service de location de matériel pour fêtes | Party equipment rental service | Le cœur de l'activité ; la catégorie principale pèse le plus dans le classement local |
| 2 | Planificateur d'événements | Event planner | Recherches « clé en main », « organisation » |
| 3 | Service de location de cabines photo | Photo booth (rental) | Recherches « cabine photo / photobooth » |
| 4 | Service de location de tentes | Tent rental service | Chapiteaux |
| 5 | Service de location de mobilier | Furniture rental service | Chaises Chiavari, tables |
| 6 | Service de mariage | Wedding service | Couples |
| 7 | Société de gestion d'événements | Event management company | Corporatif |
| 8 | Fournisseur de décorations pour fêtes / événements | Party / event decor supplier | Décor, lettres lumineuses |

> Les libellés français exacts peuvent varier ; si un libellé n'existe pas, taper le terme anglais dans le champ de recherche et choisir la catégorie proposée. Ne pas ajouter de catégorie sans rapport (ex. « Traiteur », « Bar »). Après le changement de catégorie principale, surveiller le classement 2 semaines.

### 3.2 Zone desservie (maximum 20)

Sainte-Thérèse · Blainville · Boisbriand · Rosemère · Lorraine · Bois-des-Filion · Sainte-Anne-des-Plaines · Mirabel · Saint-Eustache · Deux-Montagnes · Sainte-Marthe-sur-le-Lac · Terrebonne · Saint-Jérôme · Laval · Montréal

L'adresse reste **visible** (ramassage gratuit à l'entrepôt pour la boutique).

### 3.3 Services (section « Services », avec prix et description de 300 caractères maximum)

| Service | Prix à inscrire | Description (≤ 300 caractères) |
|---|---|---|
| 5 à 7 d'équipe | Fixe : 1 195 $ | Pour 20 à 60 personnes, au bureau : 5 jeux géants en mini tournoi, lettres lumineuses (jusqu'à 5 caractères), tableau de tournoi à vos couleurs. Installation discrète pendant les heures de bureau et démontage. |
| Party de bureau (party des Fêtes) | Fixe : 1 995 $ | Pour 40 à 120 personnes : lettres lumineuses, mur floral, 5 jeux géants, machine à maïs soufflé à votre image et 2 moments d'étincelles froides. Coordination avec votre gestionnaire d'immeuble. |
| Gala Signature | Fixe : 2 495 $ | Gala, remise de prix ou party de Noël de 75 à 150 personnes : tout le Party de bureau, plus une cabine photo haut de gamme avec préposé, photos illimitées et galerie livrée le lendemain. |
| Décor WOW (mariage ou fête privée) | Fixe : 899 $ | 5 lettres lumineuses géantes, mur floral et 1 moment d'étincelles froides. Installation sécuritaire et démontage par notre équipe. Vidéo au ralenti et galerie photo par code QR. |
| Soirée Signature | Fixe : 1 449 $ | Tout le Décor WOW, plus une cabine photo haut de gamme avec préposé, photos illimitées et impressions sur place, gabarit photo personnalisé et album numérique. |
| Mariage Signature | Fixe : 1 899 $ | Lettres lumineuses et initiales des mariés, mur floral, 2 moments d'étincelles froides, cabine photo haut de gamme avec préposé et coordination directe avec votre salle de réception. |
| Cabine photo avec préposé | À partir de : 599 $ | Cabine photo classique animée par un préposé, impressions sur place et gabarit à vos couleurs. Pour mariages, fêtes privées et événements d'entreprise. |
| Cabine photo miroir avec préposé | À partir de : 999 $ | Cabine photo miroir de 4 h avec préposé : photos illimitées, impressions sur place et gabarit personnalisé. |
| Cabine vidéo 360 | À partir de : **[599 $ ou 799 $ — à harmoniser]** | Cabine vidéo 360 avec préposé et partage instantané, habillage à vos couleurs. Idéale pour un gala, un lancement ou une activation de marque. |
| Activation de marque | Aucun prix (sur soumission) | Cabine vidéo 360, lettres lumineuses et mobilier aux couleurs de votre marque, pour un lancement, un salon ou un kiosque. Montage et démontage hors des heures d'ouverture. |
| Location de chapiteau 20' × 40' | À partir de : 800 $ (+ montage) | Chapiteau 20' × 40' pour jusqu'à 80 invités assis, monté et démonté par notre équipe. Mobilier et décor en option. |
| Chaises Chiavari blanches | 8 $ par chaise (7 $ dès 100) | Chaises Chiavari blanches livrées et placées selon votre plan de salle. |

> Le site écrit « popcorn » ; la fiche Google peut dire « maïs soufflé » (terme recommandé par l'OQLF). Harmoniser le site au même terme dès que possible.
> **Livraison :** ne pas écrire « livraison incluse » dans les services tant que la politique **[LIVRAISON]** n'est pas décidée.

### 3.4 Attributs et autres champs

- Date d'ouverture : 2022 (mois réel **[à confirmer]**).
- Attributs à cocher s'ils sont vrais : « Accepte les rendez-vous », « Paiement par carte de crédit », « Prise de rendez-vous en ligne » (si Calendly est en place).
- Bouton de réservation / lien de rendez-vous : `https://evenox.ca/soumission/?utm_source=gbp&utm_medium=organic_local&utm_campaign=soumission`.
- Questions et réponses : publier soi-même 3 questions de la FAQ (budget d'un party de bureau, délai de réservation d'un mariage, région desservie), avec les réponses **exactes** des pages d'atterrissage.
- Photos : 10 photos réelles au départ (3 corporatif, 3 mariage, 2 installations, logo, façade ou entrepôt), puis 2 par semaine. Aucune image de banque, aucun gonflable pour enfants en couverture.

### 3.5 Quatre publications (« Posts »)

> Règles : 1 500 caractères maximum (viser 300 à 600) ; **pas de numéro de téléphone dans le texte** (Google refuse souvent ces publications ; le bouton « Appeler » suffit) ; une vraie photo par publication ; aucun verre ni bouteille visible. Publier 1 fois par semaine, en alternant corporatif et mariage selon la saison.

**Publication 1 — Nouveauté (octobre–novembre) · Party des Fêtes**
- Photo : party de bureau réel, lettres lumineuses allumées.
- Texte :
```
Votre party des Fêtes est réglé en un appel. Décor, lettres lumineuses, jeux géants, machine à maïs soufflé à votre image et étincelles froides pour la remise de prix : nous installons pendant les heures de bureau ou après 17 h, et nous repartons avec tout. Forfait Party de bureau pour 40 à 120 personnes, une seule facture, bon de commande accepté. Les jeudis, vendredis et samedis de décembre partent en premier : vérifiez votre date dès maintenant.
```
- Bouton : **En savoir plus** → `https://evenox.ca/corporatif/party-des-fetes/?utm_source=gbp&utm_medium=organic_local&utm_campaign=post_fetes`

**Publication 2 — Nouveauté · Réalisation récente (à refaire après chaque événement autorisé)**
- Photo : la meilleure photo de l'étude de cas (landing-realisations.md).
- Texte (gabarit, remplir avec des faits réels) :
```
Montage de la semaine : [type d'événement] pour [N] invités à [Ville]. [Équipement principal] installé en [durée], testé avant l'arrivée des invités et démonté [le soir même / le lendemain]. Merci à [client, avec autorisation] pour sa confiance! Toutes les photos et l'horaire du montage sont dans nos réalisations.
```
- Bouton : **En savoir plus** → `https://evenox.ca/realisations/[slug]/?utm_source=gbp&utm_medium=organic_local&utm_campaign=post_realisation`

**Publication 3 — Nouveauté (décembre–mai) · Mariages 2027**
- Photo : réception de mariage réelle, initiales lumineuses.
- Texte :
```
Mariage en 2027? Les samedis de juillet à octobre se réservent de 6 à 12 mois d'avance. Nos trois forfaits décor à prix fixe comprennent les lettres lumineuses géantes, le mur floral et les étincelles froides de la première danse ; la Soirée Signature et le Mariage Signature ajoutent la cabine photo avec préposé. Une seule cabine photo avec préposé par soir : la première demande confirmée obtient la date.
```
- Bouton : **En savoir plus** → `https://evenox.ca/mariage/?utm_source=gbp&utm_medium=organic_local&utm_campaign=post_mariage`

**Publication 4 — Offre · Gala et remise de prix (janvier–mars, saison des galas)**
- Type : **Offre** (titre + dates de début et de fin obligatoires).
- Titre : `Gala Signature : décor et cabine photo avec préposé`
- Dates : [date de début] au [date de fin]
- Texte :
```
Gala de reconnaissance, remise de prix ou soirée d'équipe de 75 à 150 personnes : le forfait Gala Signature réunit le décor, les lettres lumineuses, les jeux géants, les étincelles froides et une cabine photo haut de gamme avec préposé, avec la galerie photo livrée le lendemain. Une seule facture, nette 30 jours sur approbation de crédit.
```
- Conditions (champ « Conditions générales ») : `Prix avant taxes. Sous réserve de disponibilité. Livraison selon la politique en vigueur.`
- Bouton : **Réserver** → `https://evenox.ca/corporatif/gala/?utm_source=gbp&utm_medium=organic_local&utm_campaign=post_gala`

> Une publication « Offre » doit décrire une offre réelle ; sans rabais, garder le type **Nouveauté**. Ne pas inventer de rabais ni de date limite.

---

## 4. Bing Places for Business

1. bingplaces.com → **Importer depuis Google Business Profile** (après avoir terminé la section 3). Vérifier chaque champ importé.
2. Nom, adresse, téléphone, horaire : section 1.
3. Catégories : **Location d'équipement pour fêtes** (Party equipment rental) en principale ; **Planificateur d'événements** (Event planning), **Location de tentes** (Tent rental), **Location de mobilier** (Furniture rental).
4. Description : texte 2.1 (669 caractères). La limite de Bing Places n'a pas pu être confirmée ; si le champ refuse le texte, utiliser le texte 2.2 (208 caractères).
5. Site Web : URL du tableau de la section 1. Photos : les mêmes 10 que sur Google.
6. Ensuite : Bing Webmaster Tools → importer depuis la Search Console → plan du site → **IndexNow** (correctifs-urgents.md, n° 17).

---

## 5. Apple Business Connect (Plans et Siri)

1. businessconnect.apple.com → réclamer le lieu « Évenox » à l'adresse de la section 1 (vérification par téléphone ou document).
2. Catégorie principale : **Location d'équipement pour fêtes** (Party Equipment Rental) ; secondaire : **Planificateur d'événements** (Event Planner).
3. **À propos** : texte 2.2 (208 caractères). Les sources ne s'entendent pas sur la limite (250 ou 500 caractères) : le texte court passe dans les deux cas.
4. Liens d'action : **Site Web** (URL de la section 1) ; **Appeler**.
5. Photo de couverture : réception de mariage ou party de bureau réel (horizontal). Logo.
6. « Vitrine » (Showcase), facultatif : reprendre la publication 1 ou 3 de la section 3.5 (texte court, une photo, un lien).

---

## 6. Yelp (biz.yelp.ca)

1. Réclamer ou créer la fiche « Évenox » à Sainte-Thérèse (section 1). Langue de la fiche : français.
2. Catégories (3 maximum) : **Location de matériel de fête** (Party Equipment Rentals) · **Location de cabines photo** (Photo Booth Rentals) · **Planification d'événements et services** (Event Planning & Services).
3. **Spécialités** (1 500 caractères maximum) :
```
Évenox loue et installe l'équipement de vos événements, clé en main : un seul fournisseur, une seule facture. Pour les entreprises : 5 à 7 d'équipe avec jeux géants, party des Fêtes, gala et remise de prix, activation de marque. Pour les mariages et les fêtes privées : lettres lumineuses géantes, mur floral, étincelles froides, cabine photo classique ou miroir avec préposé, cabine vidéo 360, chapiteaux, chaises Chiavari et coins salon. Notre équipe livre, installe, teste tout avant l'arrivée des invités et démonte après la fête. Forfaits à prix affichés sur notre site. Bon de commande accepté pour les entreprises. Nous desservons la Rive-Nord, Laval et Montréal.
```
4. **Historique** (1 000 caractères maximum) — « Fondée en 2022 » :
```
Évenox a été fondée en 2022 à Sainte-Thérèse par Alexandre Séguin, avec une idée simple : qu'une entreprise ou un couple puisse confier tout le décor et l'animation de son événement à une seule équipe, à un prix connu d'avance. Depuis, nous installons des partys de bureau, des galas, des mariages et des fêtes privées partout sur la Rive-Nord, à Laval et à Montréal.
```
5. **Rencontrez le propriétaire** : « Alexandre Séguin, fondateur. [1 à 2 phrases réelles : parcours, ce qu'il aime de son métier.] »
6. **Avis :** Yelp **interdit de solliciter des avis** (même sans incitatif). Ne jamais envoyer de lien Yelp en demandant un avis. Écrire seulement « Vous nous trouverez aussi sur Yelp » dans le pied de courriel (correctifs-urgents.md, n° 19). Ne pas utiliser les modèles de la section 10 pour Yelp.

---

## 7. Three Best Rated (threebestrated.ca)

1. Page « Add / Nominate a business » (gratuit). Une nomination par ville : **Laval**, **Montréal**, et la ville disponible la plus proche de la Rive-Nord (Blainville, Terrebonne ou Saint-Jérôme).
2. Catégorie : **Event Rental** (si absente : « Party Rental » ou « Wedding … » la plus proche).
3. Champs : nom (Évenox), site (`https://evenox.ca/`), téléphone, adresse (section 1), courriel du propriétaire.
4. **Message de nomination** (si un champ libre est offert) :
```
Évenox, à Sainte-Thérèse, offre la location d'équipement événementiel clé en main pour les entreprises et les mariages de Laval, de Montréal et de la Rive-Nord : décor, cabine photo avec préposé, jeux géants, chapiteaux. Forfaits à prix affichés, installation et démontage par notre équipe. Fondée en 2022. Avis clients : [lien de la fiche Google].
```
5. Leur classement repose sur les avis, la note, l'historique, les plaintes et l'excellence générale. **Il n'est pas nécessaire de payer** : refuser les offres de badge ou de visibilité payante tant qu'Évenox n'est pas inscrit. Priorité : faire monter les avis Google (section 10) avant de relancer.

---

## 8. WeddingWire.ca (et Mariages.net)

1. Corriger la fiche existante : **adresse = Sainte-Thérèse** (pas Laval), téléphone, courriel (section 1), site (URL de la section 1).
2. Catégories : Décoration de mariage · Cabine photo · Location d'équipement / Chapiteaux.
3. **Description** :
```
Évenox installe votre décor de mariage clé en main, à prix affichés : lettres lumineuses géantes avec vos initiales, mur floral, étincelles froides pour l'entrée et la première danse, et cabine photo haut de gamme avec préposé. Notre équipe arrive le jour J, installe et teste tout avant l'arrivée de vos invités, anime la cabine photo et revient chercher le matériel. Vous profitez de votre journée, nous nous occupons du reste.

Nos forfaits : Décor WOW (899 $), Soirée Signature avec cabine photo (1 449 $) et Mariage Signature, notre forfait le plus complet (1 899 $), avant taxes. Cabine photo avec préposé seule dès 599 $. Chapiteaux, chaises Chiavari et coins salon sur mesure.

Une seule cabine photo avec préposé par soir : votre date est vraiment à vous. Nous coordonnons l'installation avec votre salle et votre planificatrice. Nous desservons la Rive-Nord, Laval, Montréal et les Basses-Laurentides, depuis notre entrepôt de Sainte-Thérèse. Pour un samedi de juillet à octobre, réservez de 6 à 12 mois d'avance.
```
4. **Prix minimum / forfaits** : Décor WOW 899 $ · Soirée Signature 1 449 $ · Mariage Signature 1 899 $ · cabine photo avec préposé dès 599 $. **Ne pas** nommer le palier de 999 $ « Premium » (écrire « cabine photo miroir, 4 h »).
5. **Livraison [LIVRAISON]** : n'ajouter « livraison incluse jusqu'à 40 km » qu'une fois la politique décidée.
6. Photos : 15 photos réelles de mariages (autorisations des couples), aucune photo de gonflables.
7. Avis : l'outil « Demander des avis » de WeddingWire est permis. L'envoyer à **tous** les couples des 12 derniers mois, sans sélection (section 10).
8. **Mariages.net** : vérifier s'il existe une version québécoise distincte de WeddingWire.ca (le groupe exploite les deux marques). S'il s'agit du même compte, rien à faire ; sinon, copier la même fiche.

---

## 9. Réseaux d'affaires

### 9.1 Tourisme Montréal — répertoire des fournisseurs (meet.mtl.org)

1. Vérifier les conditions d'inscription (le répertoire est généralement réservé aux **membres** de Tourisme Montréal ; adhésion payante probable). Décision PROP : l'adhésion se justifie si elle donne accès aux planificateurs de congrès et d'événements corporatifs.
2. Catégorie : Fournisseurs → Location d'équipement / Décor et production d'événements / Cabine photo.
3. **Description** (version française, obligatoire ; une version anglaise peut s'ajouter **à côté**, jamais seule) :
```
Évenox installe le décor et l'animation de vos événements d'entreprise à Montréal, à Laval et sur la Rive-Nord : réceptions de congrès, galas, remises de prix, lancements et activations de marque. Lettres lumineuses géantes aux couleurs de votre organisation, cabine photo et cabine vidéo 360 avec préposé, jeux géants, mobilier et chapiteaux. Montage et démontage hors des heures d'ouverture, coordination avec l'hôtel ou la salle, bon de commande et facturation nette 30 jours sur approbation de crédit. Un seul fournisseur, une seule facture.
```
4. Lien : URL de la section 1. Photos : 5 photos corporatives réelles (galas, activations).

### 9.2 CCI Thérèse-De Blainville (annuaire des membres)

1. Adhésion (décision PROP) → fiche dans l'annuaire des membres.
2. Secteur : Événementiel / Location d'équipement.
3. **Description** :
```
Entreprise de Sainte-Thérèse fondée en 2022, Évenox loue et installe l'équipement de vos événements, clé en main : 5 à 7 d'équipe avec jeux géants, party des Fêtes, gala, remise de prix, activation de marque, mariages et fêtes privées. Décor, lettres lumineuses, cabine photo avec préposé, mobilier et chapiteaux, livrés, installés et démontés par notre équipe locale. Bon de commande accepté pour les entreprises.
```
4. Offre aux membres (facultatif, décision PROP) : **[à définir, ex. lettres lumineuses supplémentaires offertes aux membres]**. Une offre aux membres est permise ; elle ne doit **jamais** être liée à un avis.
5. Réseautage : s'inscrire à 1 activité par trimestre ; proposer Évenox pour le décor d'un événement de la CCI (visibilité auprès des entreprises de la Rive-Nord).

---

## 10. Demandes d'avis — 3 modèles conformes

### Règles (Google, Loi sur la concurrence, LCAP)

| Règle | Ce que ça veut dire concrètement |
|---|---|
| **Aucun incitatif** | Pas de rabais, de crédit, de tirage, de cadeau, de « lettre offerte » en échange d'un avis, même pour un avis « honnête ». (Règles de Google sur le contenu interdit ; un avis rémunéré non divulgué peut aussi être une indication trompeuse au sens de la Loi sur la concurrence.) |
| **Aucun filtrage (« gating »)** | Demander à **tous** les clients, satisfaits ou non. Ne pas d'abord sonder la satisfaction pour n'envoyer le lien qu'aux clients contents. Pas de formule « si vous êtes satisfait, laissez-nous un avis ; sinon, écrivez-nous ». |
| **Ne pas dicter le contenu** | Ne pas demander « 5 étoiles », ne pas fournir de texte à copier. On peut suggérer de **mentionner le type d'événement et la ville** (geo-chatgpt.md, jour 10). |
| **Pas d'avis internes** | Ni employés, ni famille, ni amis du propriétaire. Pas de tablette de l'entreprise tendue au client sur place (avis envoyés depuis le même appareil = filtrés par Google). |
| **Yelp exclu** | Ne jamais demander d'avis Yelp (section 6). |
| **LCAP** | Le texto et le courriel identifient Évenox inc. et offrent un désabonnement (ARRÊT / lien). Client ayant acheté = consentement tacite de 2 ans (suivi-leads.md, section 9). |
| **Répondre à tous les avis** | Positifs et négatifs, en moins de 48 h, avec calme ; reprendre naturellement le service et la ville. |

> ⚠️ **Correction à apporter à suivi-leads.md, section 8** : le texto actuel dit « Si tout s'est bien passé, un avis Google […] Si quelque chose n'était pas parfait, dites-le-moi directement ». Cette formulation conditionnelle peut être vue comme du filtrage d'avis. La remplacer par le modèle A ci-dessous.

Lien d'avis : **[LIEN_AVIS_GOOGLE]** = fiche Google → « Demander des avis » → copier le lien court (`https://g.page/r/[ID]/review`).

### Modèle A — Texto (lendemain de l'événement, 10 h)

```
Bonjour {{PRENOM}}, ici Alexandre d'Évenox. Merci de nous avoir confié votre {{TYPE_EVENEMENT}}! Votre avis sur notre service nous aide à nous améliorer et aide d'autres organisateurs à choisir. Qu'il soit positif ou non, vous pouvez le laisser ici : [LIEN_AVIS_GOOGLE]. Si vous le souhaitez, mentionnez le type d'événement et la ville. Merci! Évenox inc., Sainte-Thérèse. Répondez ARRÊT pour ne plus recevoir de textos.
```

### Modèle B — Courriel (J+3 si aucun avis ; envoyé à tous les clients)

**Objet :** Votre avis sur votre {{TYPE_EVENEMENT}} avec Évenox

```
Bonjour {{PRENOM}},

Merci encore d'avoir choisi Évenox pour votre {{TYPE_EVENEMENT}} du {{DATE}}. Vous trouverez les photos de l'événement ici : {{LIEN_GALERIE}}.

Pourriez-vous prendre une minute pour décrire votre expérience avec nous sur Google? Tous les commentaires sont les bienvenus, qu'ils soient positifs ou critiques : ils nous aident à nous améliorer et guident les prochains organisateurs.

→ Laisser un avis Google : [LIEN_AVIS_GOOGLE]

[Pour les mariages seulement : Vous pouvez aussi partager votre expérience sur WeddingWire : [LIEN_AVIS_WEDDINGWIRE]]

Si vous avez une question ou un point à régler, vous pouvez aussi me répondre directement, en tout temps : cela ne remplace pas votre avis et ne change rien à notre demande.

Merci,
Alexandre Séguin
Fondateur, Évenox inc.
215, boul. René-A.-Robert, local 100, Sainte-Thérèse (Québec) J7E 4L1 · 514-559-1893 · info@evenox.ca

Vous recevez ce courriel parce que vous avez fait affaire avec Évenox. Se désabonner : {{LIEN_DESABONNEMENT}}
```

> Aucun rappel après J+3 : une seule relance, puis on arrête (pas de harcèlement).

### Modèle C — Carte avec code QR (remise à tous les clients au démontage, ou glissée avec la facture)

Format : carte de 3,5 × 2 po (format carte d'affaires) ou 4 × 6 po, recto verso.

**Recto :**
```
Merci d'avoir fêté avec Évenox!

Comment s'est passé votre événement?
Dites-le-nous sur Google : chaque avis, positif ou critique, nous aide à nous améliorer.

[CODE QR → LIEN_AVIS_GOOGLE]
Balayez avec l'appareil photo de votre téléphone.
```

**Verso :**
```
Évenox
Location d'équipement événementiel clé en main
215, boul. René-A.-Robert, local 100, Sainte-Thérèse
514-559-1893 · evenox.ca
```

Règles d'impression et de remise :
- Le code QR pointe **directement** vers le lien d'avis Google (pas vers une page intermédiaire qui demande d'abord « Êtes-vous satisfait? »).
- Ajouter un paramètre de mesure n'est pas possible sur le lien Google : compter les cartes remises dans le CRM (champ « carte avis remise »).
- La carte est remise à **chaque** client, pas seulement à ceux qui semblent contents. Aucun texte du genre « 5 étoiles », aucun concours.
- Ne pas demander au client de laisser l'avis sur place, sur le téléphone d'un employé.

### Réponses aux avis (gabarits)

- **Avis positif :** « Merci, {{PRENOM}}! Ce fut un plaisir d'installer votre {{TYPE_EVENEMENT}} à {{VILLE}}. Au plaisir de vous revoir! — Alexandre, Évenox »
- **Avis négatif :** « Bonjour {{PRENOM}}, merci de nous avoir écrit. Je suis désolé que [point soulevé] n'ait pas été à la hauteur. J'aimerais en discuter avec vous directement : pouvez-vous m'écrire à info@evenox.ca? — Alexandre Séguin, fondateur » (ne jamais divulguer de détails du contrat ni de renseignements personnels en public ; ne jamais offrir de compensation en échange du retrait de l'avis).

---

## 11. Suivi des fiches

| Annuaire | Statut | Date | NAP vérifié | Description | Photos | Lien UTM | Avis (départ → 30 j) |
|---|---|---|---|---|---|---|---|
| Google Business Profile | ☐ | | ☐ | ☐ | ☐ | ☐ | [N] → 80+ |
| Bing Places | ☐ | | ☐ | ☐ | ☐ | ☐ | — |
| Apple Business Connect | ☐ | | ☐ | ☐ | ☐ | ☐ | — |
| Yelp | ☐ | | ☐ | ☐ | ☐ | ☐ | 0 → 3+ (non sollicités) |
| Three Best Rated (Laval, Montréal, Rive-Nord) | ☐ | | ☐ | ☐ | — | — | — |
| WeddingWire.ca / Mariages.net | ☐ | | ☐ | ☐ | ☐ | ☐ | 0 → 5+ |
| meet.mtl.org | ☐ | | ☐ | ☐ | ☐ | ☐ | — |
| CCI Thérèse-De Blainville | ☐ | | ☐ | ☐ | ☐ | ☐ | — |
| Page Facebook d'entreprise | ☐ | | ☐ | ☐ | ☐ | ☐ | 0 → 5+ |
| PagesJaunes.ca | ☐ | | ☐ | ☐ | ☐ | ☐ | — |

**Après chaque fiche :** ajouter son URL dans `sameAs` du schéma LocalBusiness (schema-jsonld.md, section 1), une fois le NAP vérifié.
