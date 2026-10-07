# Meta Ads : campagne Leads Evenox (Facebook + Instagram)

> Toute la copie est en français québécois, conforme à la Loi 96. Le vouvoiement s'applique partout. On dit « soumission » et « haut de gamme ».
> Les éléments entre crochets `[N]` sont des **placeholders à remplacer** avant la mise en ligne. `[N] avis Google` désigne le nombre réel d'avis Google, à vérifier. La note « 4,8/5 » doit aussi être vérifiée sur la fiche Google (le site affiche parfois 4,9).
> **Prix et livraison (vérifiés) :** les forfaits mariage sont des forfaits **déco** à 899 $ / 1 449 $ / 1 899 $ (Mariage Signature). Les montants de 599 $ et 999 $ sont des forfaits de **cabine photo**. Ne jamais écrire « livraison incluse » ni « installation incluse » : le site est contradictoire (la page /livraison/ indique 100 $ pour les 10 premiers km, puis 7 $/km, et 50 $/h d'installation). Il faut écrire « par notre équipe » ou « clé en main ». **Le client doit harmoniser ces informations sur le site.**

## 1. Structure

| Niveau | Paramètre |
|---|---|
| Campagne | `META | Leads | Clé en main | FR`. Objectif **Prospects (Leads)**. **Budget Advantage+ de campagne (CBO) : 80 $/jour**. Catégorie spéciale : aucune |
| Emplacement de conversion | **Formulaires instantanés**, type **« Intention plus élevée » (Higher intent)** avec écran de révision |
| Optimisation | « Prospects ». Passer à **« Prospects de conversion » (Conversion leads)** une fois que l'intégration CRM et la Conversions API renvoient les étapes « soumission qualifiée » (environ 200 prospects/mois requis ; sinon rester sur « Prospects ») |
| Stratégie d'enchère | Volume le plus élevé pendant 14 jours, puis **plafond de coût par résultat** ≈ CPL observé x 1,2 si la qualité baisse |
| Ensembles de publicités | 2 : **A. Prospection Advantage+** et **B. Reciblage** (voir ci-dessous) |
| Calendrier | Diffusion continue. Pondération créative **corporatif ≈ 70 % jusqu'au 15 décembre**, puis mariage ≈ 70 % du 16 décembre à mai (fiançailles des Fêtes et réservations de mariage), comme la bascule saisonnière de COMPTE-RENDU.md |

Répartition indicative (CBO) : environ 80 % pour la prospection et environ 20 % pour le reciblage. Si Meta sous-alimente le reciblage, ajouter une **dépense minimale de 12 $/jour** sur l'ensemble B.

### Ensemble A : Prospection Advantage+ audience

- **Lieux (contrainte ferme) :**
  - Sainte-Thérèse, rayon de **30 km** (couvre Rive-Nord, Thérèse-De Blainville, Deux-Montagnes, Mirabel, Terrebonne) ;
  - Laval, rayon de **15 km** ;
  - Montréal (centre-ville), rayon de **20 km** (couvre aussi Longueuil).
  - Personnes « vivant à ou récemment dans ces lieux ».
- **Âge minimum (contrôle d'audience) :** **25 ans**. Cela réduit les fêtes d'adolescents et les petits budgets.
- **Langue :** français. Ajouter l'anglais **seulement** si une version anglaise des annonces et du formulaire est créée plus tard. Le français resterait alors prédominant.
- **Suggestions d'audience (non contraignantes) :** centres d'intérêt « Planification d'événements », « Ressources humaines », « Gestion de bureau », « Mariage », « Fiançailles » ; personnes récemment fiancées ; administrateurs de pages d'entreprise.
- **Exclusions :**
  - prospects déjà soumis (formulaire ouvert et envoyé, 180 jours) ;
  - liste CRM des clients et des prospects disqualifiés (hachés) ;
  - employés Evenox.
- **Emplacements :** Advantage+ (automatique). Exclure Audience Network si plus de 25 % des prospects viennent de cet emplacement avec un taux de qualification faible (vérifier au jour 14).

### Ensemble B : Reciblage

- **Audiences sources** (ensemble avec audiences d'origine, pas de suggestions) :
  - visiteurs du site evenox.ca, 30 jours (Pixel + CAPI, avec consentement) ;
  - personnes ayant **ouvert le formulaire sans l'envoyer**, 30 jours ;
  - vues vidéo de 50 % et plus (reels de montage), 30 jours ;
  - interactions avec la page Facebook et le compte Instagram, 90 jours.
- **Exclusions :** prospects envoyés (180 jours) et clients CRM.
- **Lieux :** mêmes zones que l'ensemble A. Âge : 25 ans et plus.
- **Créatifs :** concepts 6, 7 et 8 (preuve sociale, objection prix, urgence), plus les 2 gagnants de la prospection.
- **Fréquence :** surveiller. Si la fréquence dépasse 4 sur 7 jours, élargir la fenêtre à 60 jours ou ajouter de nouveaux créatifs.

## 2. Formulaire instantané « Intention plus élevée »

**Nom interne :** `FORM | Soumission qualifiée | v1`

**Introduction (en-tête + image d'un vrai montage) :**
- Titre : « Votre événement clé en main, livré et monté »
- Description : « Recevez une soumission personnalisée en moins de 24 h. Livraison, installation et démontage par notre équipe à Montréal, Laval et sur la Rive-Nord. »

**Questions (dans cet ordre) :**

1. **Pour qui est l'événement ?** (choix multiples, sert au routage)
   - Mon entreprise / organisation
   - Un événement privé (mariage, anniversaire adulte, réception)
2. **Type d'événement** (choix multiples)
   - Party des Fêtes / fête de bureau
   - 5 à 7 corporatif
   - Gala ou soirée d'entreprise
   - Lancement / activation de marque
   - Consolidation d'équipe (jeux géants)
   - Mariage
   - Anniversaire adulte (40, 50, 60 ans…) ou réception privée
   - Autre
3. **Date prévue de l'événement** (champ date). Si la date n'est pas connue, choisir un mois approximatif.
4. **Nombre d'invités** (choix multiples) : moins de 30 · 30 à 74 · 75 à 150 · plus de 150
5. **Budget prévu pour la location et l'installation** (choix multiples, mêmes fourchettes que le formulaire du site, `operations/formulaire-qualification.md`)
   - Moins de 600 $
   - 600 $ à 999 $
   - 1 000 $ à 2 499 $
   - 2 500 $ à 4 999 $
   - 5 000 $ et plus
   - Je ne sais pas encore
6. **Ville de l'événement** (choix multiples) : Montréal · Laval · Rive-Nord (Sainte-Thérèse, Blainville, Mirabel, Saint-Eustache, Terrebonne…) · Rive-Sud / Longueuil · Autre
7. **Nom de l'entreprise** (réponse courte, facultative). La logique conditionnelle l'affiche seulement si la réponse à Q1 est « Mon entreprise ».
8. **Champs préremplis :** prénom, nom, courriel, téléphone. Pour les entreprises, ajouter le **courriel professionnel** et le **titre du poste**.

**Avis de confidentialité (Loi 25) :** lien vers `https://evenox.ca/confidentialite` (TO-CREATE ou vérifier). Texte personnalisé : « Vos renseignements servent uniquement à préparer votre soumission. Evenox ne les vend ni ne les partage. »
Case de consentement facultative : « J'accepte de recevoir des idées et offres d'Evenox par courriel. »

**Écran de révision :** activé, puisque c'est le principe du formulaire « Intention plus élevée ».

**Écran de remerciement :**
- Titre : « Merci, votre demande est bien reçue »
- Description : « Un conseiller Evenox vous écrit en moins de 24 h ouvrables avec une soumission adaptée. Pour aller plus vite, réservez dès maintenant un appel de 15 minutes avec notre équipe. »
- Bouton : **« Réserver mon appel »**, vers `https://evenox.ca/rendez-vous?utm_source=meta&utm_medium=paid_social&utm_campaign=leads_formulaire`. Page TO-CREATE avec le calendrier (Calendly, HubSpot Meetings ou équivalent), en français.
- Bouton secondaire (facultatif) : « Voir nos réalisations », vers `https://evenox.ca/realisations`

**Qualification et routage côté CRM :**

| Statut | Critère | Traitement |
|---|---|---|
| **A, chaud** | Budget de 2 500 $ et plus, **ou** entreprise avec un budget de 1 000 $ et plus (ou « Je ne sais pas encore ») | Appel en moins de 15 minutes (heures d'ouverture), comme la route A du site |
| **B** | Privé ou mariage avec un budget de 600 $ à 2 499 $ (ou « Je ne sais pas encore ») | Soumission écrite en moins de 24 h + appel le jour même |
| **C, filtré** | Budget de moins de 600 $, entreprise avec un budget de moins de 1 000 $, ou ville « Autre » avec un budget de moins de 2 500 $ | Courriel automatique poli qui oriente vers la boutique ; aucun appel |

Ces règles reprennent les routes A, B et C (+ D hors zone) du formulaire du site, pour qu'un « lead qualifié » ait la même définition sur toutes les plateformes.

- Renvoyer les statuts à Meta par **Conversions API (CRM)** : `lead_qualifie` (A ou B) puis `depot_paye` (dépôt payé, avec la valeur), les mêmes noms d'étapes que dans `operations/tracking-setup.md` (section 4).

## 3. Mesure

- **Pixel Meta + Conversions API** : passerelle CAPI ou intégration native du CRM. Déduplication par `event_id`.
- **Consentement (Loi 25) :** le Pixel reste désactivé jusqu'au consentement publicitaire (bannière avec « Tout refuser » aussi visible que « Tout accepter »). Les événements serveur ne sont envoyés que pour les visiteurs consentants ou pour les prospects qui ont soumis le formulaire.
- **KPI :**
  - CPL (cible de départ de 35 à 60 $) ;
  - **coût par prospect qualifié A+B** (KPI principal) ;
  - taux de qualification (objectif de 40 % et plus) ;
  - taux de contact, soumissions envoyées, contrats signés.

## 4. Concepts publicitaires (8)

> Les visuels doivent toujours montrer de **vrais montages Evenox** (aucune banque d'images, aucun gonflable pour enfants).
> Formats : 9:16 pour Reels et Stories, 4:5 pour le fil. Ajouter des sous-titres français incrustés, parce que la vidéo est le plus souvent regardée sans son. Logo discret en fin de vidéo.

### Concept 1 : « Le party des Fêtes réglé » (corporatif, T4)
- **Texte principal :** Votre party des Fêtes, sans courir les fournisseurs. Mobilier de salon, décor, cabine photo et jeux géants : notre équipe livre, installe et démonte. Forfaits corporatifs dès 1 195 $, facturation net 30. Les dates de décembre partent vite.
- **Titre :** Party des Fêtes clé en main
- **Description :** Dès 1 195 $ · net 30
- **Bouton :** Obtenir une soumission
- **Brief visuel :** Reel de 20 s en accéléré. Une salle de bureau vide à 15 h devient un espace festif à 17 h : mange-debout, éclairage chaud, arche, cabine photo. Texte à l'écran : « 15 h » puis « 17 h ».

### Concept 2 : « Montage en accéléré » (marque et corporatif)
- **Texte principal :** De l'entrepôt de Sainte-Thérèse à votre salle : voici à quoi ressemble un événement clé en main. Plus de 1 000 événements montés à Montréal, Laval et sur la Rive-Nord. Vous recevez vos invités, on s'occupe du reste.
- **Titre :** On livre, on monte, on démonte
- **Description :** Soumission en 24 h
- **Bouton :** Obtenir une soumission
- **Brief visuel :** Reel de 30 s. Chargement du camion à l'entrepôt, arrivée sur place, montage par l'équipe en chandails Evenox, plan large final. Musique entraînante libre de droits.

### Concept 3 : « Gala Signature » (corporatif haut de gamme)
- **Texte principal :** Un gala à la hauteur de votre équipe. Notre forfait Gala Signature réunit décor haut de gamme, mobilier et cabine photo avec préposé, pour 75 à 150 invités, dès 2 495 $. Une seule soumission, un seul fournisseur.
- **Titre :** Forfait Gala dès 2 495 $
- **Description :** 75 à 150 invités
- **Bouton :** Obtenir une soumission
- **Brief visuel :** Carrousel de 5 cartes : entrée avec lettres lumineuses, tables dressées, coin salon, cabine photo 360 en action, photo de groupe. Chaque carte porte une légende courte.

### Concept 4 : « Cabine photo 360 à vos couleurs » (corporatif et activation)
- **Texte principal :** Vos invités repartent avec une vidéo 360 à vos couleurs, prête à partager. Cabine photo 360 avec préposé, habillage personnalisé et partage instantané, pour vos lancements, galas et 5 à 7.
- **Titre :** Cabine photo 360 à vos couleurs
- **Description :** Avec préposé
- **Bouton :** Obtenir une soumission
- **Brief visuel :** Reel vertical tourné **depuis la plateforme 360** lors d'un vrai événement corporatif. Montrer d'abord l'habillage au logo du client (autorisation écrite du client requise ; sinon, habillage au logo Evenox). Ne jamais présenter un faux client. Obtenir l'autorisation des personnes filmées.

### Concept 5 : « Mariage clé en main » (mariage, de mi-décembre à mai)
- **Texte principal :** Arche florale, lettres lumineuses, chaises Chiavari et éclairage d'ambiance : votre décor de mariage est livré, installé avant l'arrivée des invités, puis repris le lendemain. Forfaits déco mariage à 899 $, 1 449 $ et 1 899 $ (Mariage Signature), ou sur mesure.
- **Titre :** Votre décor de mariage, installé
- **Description :** Décor dès 899 $
- **Bouton :** Obtenir une soumission
- **Brief visuel :** Vidéo avant-après : salle de réception vide, puis décor complet au coucher du soleil. Plan rapproché de l'arche et des lettres lumineuses (initiales du couple, avec leur autorisation).

### Concept 6 : « Preuve sociale » (reciblage)
- **Texte principal :** Note de 4,8/5 sur Google, [N] avis Google, et plus de 1 000 événements réalisés. Des PME aux grandes organisations, nos clients nous confient leurs party des Fêtes, galas et mariages. Recevez votre soumission en moins de 24 h.
- **Titre :** 4,8/5 · [N] avis Google
- **Description :** Plus de 1 000 événements
- **Bouton :** Obtenir une soumission
- **Brief visuel :** Image statique 4:5 avec 3 courts extraits d'avis Google réels (prénom et initiale, avec autorisation) sur photo de montage floutée. Ne pas afficher de logos de clients corporatifs sans autorisation écrite.

### Concept 7 : « Un seul fournisseur, vraiment » (objection prix, reciblage)
- **Texte principal :** Comparez avant de choisir : chez Evenox, notre équipe s'occupe de la livraison, de l'installation et du démontage. Pas de location à la pièce, pas de soirée à monter vous-même. Forfaits corporatifs de 1 195 $ à 2 495 $, déco dès 899 $.
- **Titre :** Un seul fournisseur, clé en main
- **Description :** Forfaits clairs, dès 899 $
- **Bouton :** En savoir plus
- **Brief visuel :** Graphique simple sur fond photo : « Clé en main : livraison ✓ installation ✓ démontage ✓ ». Vrai montage en arrière-plan. Le texte doit occuper moins de 20 % de l'image.

### Concept 8 : « Dernières dates » (urgence, à adapter selon la saison)
- **Texte principal (T4) :** Il reste quelques vendredis et samedis en décembre pour les party de bureau. Réservez votre date dès maintenant : on s'occupe du mobilier, du décor, de la cabine photo et des jeux.
- **Texte principal (de mi-décembre à mai) :** Les samedis de juillet à octobre 2027 se réservent dès maintenant. Bloquez votre date de mariage avec Evenox : décor, chapiteau et mobilier livrés et montés.
- **Titre :** Dates de décembre limitées / Été 2027 : dates limitées
- **Description :** Réservez votre date
- **Bouton :** Obtenir une soumission
- **Brief visuel :** Story ou Reel de 10 s : calendrier mural de décembre dont les cases se remplissent, puis plan de montage final. Ne mentionner aucun chiffre de disponibilité qui ne serait pas exact.

## 5. Règles de gestion

- **Jours 1 à 7 :** ne rien toucher, c'est la phase d'apprentissage. Vérifier seulement la qualité des 20 premiers prospects.
- **Jour 14 :**
  - couper les créatifs dont le CTR est inférieur à 0,6 % **ou** dont le taux de qualification est inférieur à 25 % ;
  - doubler le poids des 2 meilleurs ;
  - si plus de 40 % des prospects sont de catégorie C, ajouter une question (« Budget ») en début de formulaire ou monter l'âge minimum.
- **Jour 30 :**
  - si le coût par prospect qualifié est inférieur ou égal à 1,2 fois celui de Google Search, augmenter de 20 % par semaine ;
  - sinon, tester une variante formulaire ou page de destination (`https://evenox.ca/soumission`).
- **Renouvellement créatif :** 2 nouveaux concepts toutes les 3 ou 4 semaines.
