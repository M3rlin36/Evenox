# Évenox — Plan Google Ads à 300 $/jour

*Version du 7 octobre 2026. Bâti à partir d'environ 600 sources, dont 72 vérifiées sur des sources primaires (Google, lois, études). Les données de ton compte Google Ads ne sont pas encore intégrées : je n'ai pas encore l'accès.*

---

## 1. La décision en une phrase

On lance **4 campagnes Search en français à 300 $/jour** et on en garde **3 en pause**, prêtes à activer. La cible principale est la fenêtre des fêtes de Noël d'entreprise (d'aujourd'hui au 30 novembre). On n'ajoute rien sur PMax, la requête large ou AI Max tant que Google ne voit pas de vrais leads qualifiés.

**Pourquoi 4 et pas 10 ?** Chaque campagne doit recevoir environ 30 conversions par mois pour que les enchères de Google apprennent. À 300 $/jour, avec un coût par lead visé de 60 à 90 $, on aura environ 100 à 150 leads par mois. Si on les répartit sur 10 campagnes, aucune n'apprend : c'est le budget brûlé. Sur 4 campagnes, chacune apprend en 3 à 5 semaines.

---

## 2. Les campagnes

| # | Campagne | Statut | Budget/jour | Groupes d'annonces | Enchères au lancement |
|---|---|---|---|---|---|
| 1 | **S-FR \| Marque** | Active | 10 $ | Marque Évenox | Max. clics, CPC max. 2,50 $ |
| 2 | **S-FR \| Corporatif & Fêtes** | Active | **165 $** | Fête de Noël d'entreprise · Team building · Lettres lumineuses corporatif · Photobooth corporatif · Mobilier corporatif | Max. conversions |
| 3 | **S-FR \| Produits vedettes** | Active | 80 $ | Lettres lumineuses · Photobooth · Mobilier lounge et cocktail | Max. conversions |
| 4 | **S-FR \| Mariage** | Active | 45 $ | Lettres lumineuses mariage · Photobooth mariage · Mobilier lounge mariage | Max. conversions |
| 5 | S-EN \| Corporate Montréal | **Pause** | (30 $ pris sur #2) | 4 groupes EN | Max. conversions |
| 6 | S-FR \| Québec-Lévis (test) | **Pause** | 20 $ | Corporatif Québec | Max. conversions |
| 7 | Demand Gen \| Remarketing | **Pause** (à construire dans l'interface) | 40 $ | Visiteurs 180 j + liste clients | Max. conversions |
| | **Total actif** | | **300 $** | | |

**Ce qui est prêt à importer** (dossier `livrables/google-ads-editor/`) :
- 6 campagnes, 17 groupes d'annonces, 138 mots-clés (expression et exact).
- 17 annonces responsives (15 titres et 4 descriptions chacune).
- 699 mots-clés négatifs, 8 liens annexes et 8 accroches par campagne.

Les limites de caractères et tes règles de marque (pas de %, pas de « à partir de », pas de « dès XX $ ») sont vérifiées par script. Le script vérifie aussi qu'aucun négatif ne bloque un de tes mots-clés : 0 conflit.

### Pourquoi la campagne EN est en pause
L'article 58 de la Charte de la langue française exige que le français soit **nettement prédominant** dans la publicité commerciale. Une annonce Search 100 % anglaise affichée au Québec est donc un risque. Les amendes vont de 3 000 à 30 000 $ par infraction et chaque jour compte comme une infraction distincte. Fais valider par ton comptable ou un avocat. Dès que c'est validé, on active la campagne avec 30 $/jour pris sur la campagne #2.

### Pourquoi Québec-Lévis est en pause
Ta grille de transport pour Québec et Lévis n'est pas fixée. Sans elle, on ne sait pas si un lead de Québec est rentable. Active cette campagne quand la grille est publiée sur le site.

### Pourquoi Demand Gen est en pause
Le remarketing a besoin de listes d'audience bâties uniquement à partir des visiteurs qui ont consenti. La bannière Loi 25 (bloquant 2b) doit donc être en ligne depuis 2 à 3 semaines avant que la liste soit utilisable. Active Demand Gen quand la bannière est en ligne, avec la règle d'arrêt : 0 lead qualifié après 1 500 $ dépensés = on coupe.

---

### Attention : le volume de recherche est petit
D'après Google Trends, le volume pour tes services exacts est faible au Québec. Ces estimations ont une marge d'erreur de 50 à 100 % :
- « location photobooth » : 20 à 100 recherches par mois.
- « lettres lumineuses » : moins de 20.
- « party de bureau » : 2 500 à 3 500 en novembre et décembre.

**Search seul ne dépensera probablement pas 300 $/jour.** C'est normal : on ne force pas la dépense avec de la requête large. Voici l'ordre de redéploiement si le budget n'est pas dépensé :
1. Le groupe Team building, environ 8 000 recherches par mois.
2. « photobooth » en expression, avec les négatifs mac, app et télécharger.
3. **Demand Gen**, quand la bannière Loi 25 est en ligne. C'est le principal levier pour atteindre 300 $/jour.

Les vraies données de tes anciennes campagnes (avril 2025 à septembre 2026) remplaceront ces estimations dès que j'ai l'accès.

## 3. Réglages obligatoires (à faire dans l'interface après l'import)

| Réglage | Valeur | Pourquoi |
|---|---|---|
| Réseaux | Recherche Google seulement (pas de partenaires, pas de Display) | Les partenaires et le Display génèrent des leads de moindre qualité |
| Zone | **Présence** : « Personnes se trouvant dans vos zones cibles » | Le réglage par défaut gaspille 20 à 35 % du budget en lead gen |
| Zones (#1 à #4) | Laval ; île de Montréal ; MRC Thérèse-De Blainville, Deux-Montagnes, Mirabel, Les Moulins, L'Assomption ; Rivière-du-Nord ; Laurentides (Saint-Jérôme à Mont-Tremblant) | Ta zone de livraison réelle autour de Sainte-Thérèse |
| AI Max | **Désactivé** : correspondance des termes de recherche, personnalisation du texte et expansion d'URL tous OFF | Données indépendantes : CPA +16 % en médiane (étude SMEC). Risque de textes non conformes à la Loi 96 |
| Éléments créés automatiquement | **OFF** au niveau compte et campagne | Leur activation a fait passer des campagnes vers AI Max automatiquement en septembre 2026 |
| Recommandations appliquées automatiquement | **Toutes OFF** (Outils > Recommandations > Application automatique) | Évite les hausses de budget et les passages en requête large non voulus |
| Calendrier | Annonces 24/7 ; **élément d'appel** uniquement aux heures où quelqu'un répond | Un appel manqué est un lead perdu |
| Fuseau et devise | America/Montreal, CAD | À vérifier dans le compte retenu |
| Élément de lieu | Lier la fiche Google Business Profile | Note de 4,8/5 et adresse dans l'annonce |
| Éléments de prix | Photobooth et mobilier, **qualificatif : aucun** | Filtre les petits budgets avant le clic, sans « à partir de » |

---

## 4. Avant de dépenser 1 $ : les 5 bloquants

| # | Bloquant | Qui | Délai |
|---|---|---|---|
| 1 | **Choisir UN compte Google Ads** (AW-16529262834 ou AW-16776285171) et UN GA4. Retirer l'autre balise du site. | Toi (ou moi avec l'accès) | Jour 1 |
| 2 | **Conversion « Demande de soumission » qui fonctionne** : balise Google via GTM, déclenchée sur l'envoi réussi du formulaire, comptage « Une seule », catégorie « Envoi de formulaire pour prospects », **principale**. Ajouter les conversions avancées pour les prospects et un champ caché GCLID. **Test : 1 faux lead doit apparaître dans Google Ads.** | Pigiste GTM | Jours 1 à 3 |
| 2b | **Bannière Loi 25** (CookieYes ou Complianz : certifiés Google, en français, compatibles WordPress + GTM). Boutons « Accepter » et « Refuser » de même apparence, mode consentement Google en **basic** (balises bloquées tant que la personne n'a pas accepté). Retirer le pixel OpenAI. Guide détaillé : `GUIDE-TRACKING-LOI25.md`. | Pigiste | Jours 1 et 2 |
| 3 | **Prix identiques entre annonce et page.** Le site affiche photobooth dès 599 $ et Signature 799 $ ; ton Notion dit 650 / 825 / 1 095 / 1 495 $. Le mobilier est à 1 195 / 1 995 / 2 495 $ sur le site et à 850 / 1 100 / 1 400 / 2 900 $ dans Notion. Choisis UNE grille, mets-la sur le site, et je régénère les annonces en une commande. | Toi | Jour 2 |
| 4 | **Formulaire qui filtre** : type d'événement, date, ville, nombre d'invités, budget (paliers), adresse de salle **facultative**, reCAPTCHA. | Pigiste | Jours 2 à 4 |
| 5 | **Réponse en moins de 2 heures ouvrables** à chaque lead, avec le statut mis à jour dans Notion : Nouveau, Qualifié, Soumission envoyée, Gagné, Perdu. | Toi | Dès le jour 1 du lancement |

**Date de lancement visée : mardi 13 octobre 2026.** Chaque semaine de retard coûte environ 15 % de la fenêtre des fêtes d'entreprise : les partys de décembre se réservent 10 à 12 semaines d'avance.

**Ce qui ne bloque PAS le lancement** (mais se fait dans les 30 jours) :
- Les pages d'atterrissage dédiées. On démarre avec les pages existantes et on bascule les URL dès qu'elles sont prêtes.
- Le suivi d'appels (CallRail ou numéro de transfert Google).
- L'import des leads qualifiés et des réservations (Data Manager).

---

## 5. Les 30 premiers jours : routine

| Quand | Action | Durée |
|---|---|---|
| Chaque jour (sem. 1 et 2) | Rapport « Termes de recherche » : tout terme hors sujet passe en négatif d'expression | 10 min |
| Chaque jour | Rappeler chaque lead en moins de 2 h et mettre le statut à jour dans Notion | — |
| Lundi | Coût, conversions, CPA par campagne ; part d'impressions perdue (budget) | 15 min |
| Vendredi | Qualité : % de leads qualifiés par campagne (Notion) | 10 min |
| Jour 14 | Première réallocation (voir règles) | 20 min |
| Jour 30 | Bilan : CPA réel, coût par lead qualifié, coût par contrat. Je recalcule les cibles. | 1 h avec moi |

---

## 6. Règles de décision (on applique sans débattre)

| Situation (mesurée sur 14 à 30 jours) | Action |
|---|---|
| Campagne ≥ 30 conversions sur 30 jours | Passer en **CPA cible = CPA des 30 derniers jours + 10 %**, puis baisser de 10 % toutes les 2 à 3 semaines |
| CPA dans la cible depuis 14 jours **et** part d'impressions perdue (budget) ≥ 15 % | **+15 à 20 % de budget**, puis attendre 7 à 14 jours. Jamais budget et cible la même semaine |
| CPA plus de 20 à 30 % au-dessus de la référence pendant 14 jours | Revenir au dernier budget rentable, puis vérifier les termes, la page et la qualité des leads |
| Mot-clé ou groupe : dépense ≥ 2 × CPA cible sans conversion | Pause, ou passage en exact avec négatifs |
| Campagne sous 15 conversions par 30 jours pendant 60 jours | La fusionner avec sa campagne sœur pour regrouper les données |
| Budget de #2 non dépensé (perte d'impressions pour budget = 0 %) après 7 jours | Déplacer le surplus vers #3 et #4 par paliers de 20 % |
| Plus de 15 % de leads invalides (spam) en une semaine | Durcir le reCAPTCHA, rendre le budget obligatoire, ajouter des négatifs |
| 15 leads qualifiés ou plus par mois importés avec GCLID | Faire de « Lead qualifié » la conversion principale et de « Formulaire » une conversion secondaire |

**Repères de coûts** (à remplacer par tes chiffres réels après 30 jours) :
- **CPC attendu :** 1,50 à 3,50 $ sur les requêtes françaises, 3 à 6 $ sur les requêtes corporatives et anglaises. Ce sont des estimations tirées de données américaines : aucune donnée canadienne publique n'a été trouvée.
- **Plafond de coût par lead :** 90 $.
- **Plafond de coût par contrat :** environ 15 % du panier moyen. À 1 200 $ de panier moyen, c'est 180 $ par contrat.

---

## 7. Calendrier saisonnier (le total reste à environ 300 $/jour)

| Période | Marque | Corpo | Produits | Mariage | À activer |
|---|---|---|---|---|---|
| 13 oct. au 30 nov. | 10 | 165 | 80 | 45 | DG dès que la bannière Loi 25 est en ligne (40 $ pris sur Corpo) |
| 1er au 24 déc. | 10 | 120 | 75 | 95 | Groupe « Fête d'après-Fêtes / janvier » |
| 25 déc. au 4 janv. | 10 | 60 | 60 | 100 | Baisser sans couper (230 $/jour) |
| 5 janv. au 31 mars | 10 | 80 | 70 | 140 | Saison des réservations de mariages ; test AI Max 50/50 sur Corpo ; ajouter la campagne Chapiteaux |
| Avr. à août 2027 | 10 | 100 | 100 | 90 | Haute saison ; test PMax seulement si les 5 conditions de la section 8 sont remplies |
| Dès le 15 août 2027 | 10 | +20 %/sem. | — | — | Relance de la fenêtre des fêtes d'entreprise |

Chaque changement se fait par paliers de 20 % au maximum, sur 1 à 2 semaines.

---

## 8. Ce qu'on n'active PAS (et quand on le fera)

| Outil | Pourquoi pas maintenant | Condition d'activation |
|---|---|---|
| Performance Max | En génération de leads, Search bat PMax sur le taux de conversion dans 84 % des cas (Adalysis, déc. 2024). Sans données de ventes, PMax chasse les leads faciles ou du spam. | ≥ 50 conversions par mois sur Search, import des leads qualifiés actif depuis 30 jours ou plus, exclusion de marque, expansion d'URL OFF, conversion principale = « Lead qualifié » |
| Requête large | Petit compte local : les experts démarrent en exact et en expression | Part d'impressions non-marque > 70 % et CPA stable |
| AI Max | CPA +16 % en médiane (étude SMEC) ; risque de textes anglais ou mal écrits (Loi 96) | Test 50/50 en janvier, conservé seulement si CPA ≤ +10 % et qualité stable |
| LinkedIn, YouTube seul | Trop cher pour ce budget | Plus tard, pour la marque corporative |
| Annonces Appel seulement | Google les arrête en février 2027 | Jamais : éléments d'appel à la place |

---

## 9. Pages d'atterrissage (dans les 30 jours)

Les URL actuelles servent au lancement :
- Corporatif et mobilier : /nos-forfaits-tout-inclus
- Photobooth : /location-photobooth-montreal
- Lettres : /lettres-lumineuses/ (son titre affiche « dès 70 $ » : à retirer, c'est contraire à ta règle de marque)
- Mobilier mariage : /mariage/
- Marque : l'accueil

Une page dédiée réduit le coût par lead de 30 à 50 %. À créer, dans l'ordre :
1. **Fête de Noël d'entreprise** (la plus urgente)
2. **Lettres lumineuses 4 pi** : la page /lettres-lumineuses/ existe, mais elle est à refaire, sans « dès 70 $ » et avec les forfaits.
3. Photobooth, avec la grille de prix unique
4. Mobilier lounge, cocktail et gala
5. Mariage

Chaque page suit la même structure :
- Un titre H1 identique au thème de l'annonce, une photo réelle et un seul bouton.
- Les prix exacts des forfaits, des logos clients autorisés et la note Google.
- Un bloc « Ce n'est pas pour vous si… » pour décourager les petits budgets.
- Le formulaire filtrant et la mention « Réponse en moins de 2 h ouvrables ».

---

## 10. Ce que j'attends de toi (dans l'ordre)

1. **Accès au compte Google Ads** : connecter Supermetrics sur claude.ai ou exporter les CSV depuis le 1er janvier 2024. Je tranche alors quel compte garder et j'ajuste le plan sur tes vraies données.
2. **Quelle grille de prix est la bonne**, pour le photobooth et le mobilier.
3. **Qui fait le tracking** : toi ou un pigiste. Le paquet est prêt dans tes livrables de septembre.
4. **Feu vert pour la date de lancement du 13 octobre.**
