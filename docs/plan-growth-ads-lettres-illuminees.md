# Évenox — Plan d'exécution ads : lettres illuminées en tête d'affiche (Meta + Google, 8 semaines)

Préparé pour Alexandre Séguin · 17 septembre 2026 · version 1.0 · budget test 1 500 $/mois · fenêtre 21 septembre → 22 novembre 2026

## Comment lire ce document

- Sections 1–2 : pourquoi ce plan (lettres, Meta + Google, budget, ROAS, offre).
- Section 3 : la checklist go / no-go; tant qu'elle n'est pas cochée, pas 1 $ de pub.
- Sections 4–7 : l'exécution (plan media, copy, page, tracking), à suivre pas à pas.
- Sections 8–9 : protéger le ROAS après le lead (réponse, relances, risques et garde-fous).
- Section 10 : ta semaine 1, jour par jour. Tout chiffre marqué « hypothèse » se remplace par le vrai chiffre des comptes et de Booqable dès la semaine 2.

## Lexique express

| Terme | Définition en une phrase | Seuil / valeur Évenox |
|---|---|---|
| CPA / CPL | Coût par acquisition / par lead : dépense pub ÷ nombre de leads (les leads se comptent dans la Sheet EVX – Suivi ads, pas dans les plateformes). | Cible 40 $ (Meta 30–50 $, Google 40–70 $); alerte > 60 $ sur 7 jours glissants; pause de l'ensemble (Meta) ou du groupe/mot-clé (Google) si > 80 $ après 150 $ dépensés. |
| ROAS | Retour sur dépense pub : CA location HT des commandes confirmées (dépôt reçu) attribuées aux ads ÷ dépense pub de la période, cohorte par date du lead, fenêtre 30 jours, une seule source par lead. | Cible 4–5×; < 3× = corriger avant d'augmenter; attendu du test ≈ 3,9× (hypothèse H7). |
| RSA | Annonce responsive sur Google Recherche : Google combine lui-même des titres (≤ 30 caractères) et des descriptions (≤ 90 caractères). | 1 RSA par groupe d'annonces, 10 titres + 4 descriptions fournis (maximum 15 + 4), un seul épinglage : le titre 1 en position 1 (textes en section 5). |
| CPM | Coût pour 1 000 impressions (affichages) d'une pub. | Meta ≈ 15 $ (ordre de grandeur Canada 10–17 $, hypothèse H13/section 1). |
| CPC | Coût par clic sur la pub. | Meta 0,80–1,50 $; Google 2–5 $ (hypothèses H13, à lire dans les comptes après 2 semaines). |
| CTR | Taux de clic : clics ÷ impressions. | Meta 1–2 %; Google Recherche 5–8 % (hypothèses H13). |
| Pixel Meta / API Conversions | Code installé sur le site (navigateur) + envoi serveur qui rapportent à Meta les visites et l'événement « Lead ». | Événement Lead déclenché sur evenox.ca/merci; bloqué tant que le visiteur n'a pas cliqué « Accepter » (Loi 25) → attends-toi à 20–40 % de leads sous-comptés (hypothèse); la vérité est Booqable. |
| Balise Google et action de conversion | Script Google installé sur le site + action de conversion « Lead formulaire » qui compte une conversion quand /merci s'affiche. | Statut « Enregistre des conversions » attendu après le premier clic payant (vérification mardi 29 septembre, section 3). |
| UTM | Paramètres ajoutés à l'adresse d'une page pour savoir d'où vient le visiteur. | utm_source = meta \| google; utm_medium = paid_social \| cpc; utm_campaign = lettres_froid \| lettres_retarg \| recherche_lettres \| recherche_jeux \| recherche_mobilier; utm_content = nom de la pub; utm_term = mot-clé Google ({keyword}). |
| Retargeting | Pubs montrées seulement aux personnes qui ont déjà visité la page ou interagi avec ta page Facebook / ton compte Instagram. | Campagne EVX_META_RETARGETING, ensemble RETARG_Site30j_IG-FB90j, 150 $/mois (≈ 5 $/jour); si la fréquence dépasse 3 sur 7 jours (règle EVX-ALERTE-FREQ3) : audience combinée < 3 000 personnes → budget à 3 $/jour, sinon remplacer la créa au prochain lundi de changement (section 4). |
| Lookalike (audience similaire) | Audience que Meta construit en cherchant des gens qui ressemblent à une liste de clients importée. | Aucune pendant le test : pas d'import de liste Booqable tant que la politique de confidentialité ne mentionne pas le partage de données avec Meta (Loi 25, section 4). |
| Phase d'apprentissage | Période où Meta cherche encore à qui montrer la pub; elle se relance à chaque modification importante. | À 26 $/jour, l'ensemble FROID restera en « apprentissage limité » (il faudrait ≈ 50 leads/7 jours) : c'est normal; aucune modification en dehors du lundi, jugement sur 14 jours minimum. |
| CBO | Budget défini au niveau de la campagne et réparti automatiquement par Meta entre plusieurs ensembles de pubs. | Non utilisé : une campagne = UN ensemble de pubs avec son budget quotidien (26 $ froid, 5 $ retargeting). |
| Google Business Profile | Fiche d'établissement gratuite qui apparaît dans Google Maps et dans les résultats locaux (« Évenox », 215 boul. René-A.-Robert, Sainte-Thérèse). | Fiche validée, photos et avis avant le 28 septembre (section 3); alimente la moitié « hors ads » du CA (H8). |
| Loi 25 | Loi québécoise sur la protection des renseignements personnels : consentement avant tout témoin (cookie) ou pixel. | Bannière de consentement obligatoire sur le site; d'où le champ « Source lead » dans Booqable comme source de vérité, et aucune liste importée dans Meta. |
| Loi 96 | Charte de la langue française : la publicité au Québec est en français; l'anglais est possible seulement si le français est au moins équivalent. | Toute pub Meta en français (un mot anglais comme LOVE n'apparaît que sur les lettres photographiées); groupe Google « Lettres EN » optionnel, max 20 % du budget Google, avec page française équivalente. |
| LCAP | Loi canadienne anti-pourriel : il faut un consentement pour envoyer des courriels commerciaux. | Une demande de soumission = consentement tacite pour relancer (J+2, J+5, J+10) pendant 6 mois; ensuite, plus de courriel sauf consentement explicite (section 8). |

## Résumé exécutif

1. La décision : les lettres illuminées en tête d'affiche (jeux géants en second), Meta (Facebook + Instagram) pour créer le désir, Google Recherche pour capter l'intention « location maintenant », retargeting Meta léger pour récupérer les indécis. Pas de TikTok, YouTube ni ChatGPT comme canal.
2. Le budget : 1 500 $/mois pendant 8 semaines, du 28 septembre au 22 novembre 2026 (3 000 $ au total) : 800 $ Meta froid, 500 $ Google Recherche, 150 $ retargeting, 50 $ de réserve. Semaine 0 (21–27 septembre) = préparation, aucune dépense.
3. Ce qu'on attend (hypothèses H7, à remplacer par le réel) : ≈ 75 leads → ≈ 60 devis → ≈ 21 réservations avec dépôt → ≈ 11 500 $ HT réservé → ROAS ≈ 3,9×. Rythme hebdo : ≈ 9 leads, ≈ 7 devis, 2–3 réservations.
4. Le verdict, la semaine du 23 novembre, sur trois chiffres : GO (montée par paliers de +20 %/semaine) si ROAS réservé ≥ 4× ET CPL ≤ 50 $ ET devis → dépôt ≥ 30 % ET ≥ 50 leads cumulés.
5. CORRIGER si le ROAS est entre 3 et 3,9× (ou CPL 51–80 $, ou close 20–29 %) : on garde 1 500 $, on applique les correctifs de la section 9, nouveau verdict le 21 décembre.
6. STOP par canal si un canal reste < 3× après 4 semaines de correctifs : on coupe ce canal, on garde l'autre.
7. NO-GO absolu : pas 1 $ de pub tant que la page evenox.ca/lettres-illuminees n'est pas en ligne, le formulaire testé de bout en bout (courriel reçu, page /merci), le Pixel Meta et la balise Google vérifiés, et le champ « Source lead » créé dans Booqable.
8. Contrainte stock : un set de lettres = 1 location par week-end (≈ 4–5 par mois par set). Les lettres plafonnent vite; le panier monte avec les jeux et le mobilier, et on ne monte pas le budget si le stock est plein.
9. Règle des lundis : 1 h chaque lundi (30 min de dashboard dans la Sheet « EVX – Suivi ads » : dépense, leads par source, devis, dépôts, CA, CPL, ROAS; 15 min de termes de recherche Google; 15 min d'audit des relances), et aucune modification des campagnes en dehors du lundi.
10. Pilotage quotidien : répondre à chaque lead en < 24 h (cible < 4 h ouvrables), devis Booqable le jour même, relances J+2 et J+5, clôture J+10. C'est gratuit et c'est le premier levier du ROAS.

## Conventions de nommage (rappel)

| Élément | Valeur exacte |
|---|---|
| Page dédiée | evenox.ca/lettres-illuminees |
| Page de confirmation (déclenche l'événement Lead) | evenox.ca/merci |
| Campagne Meta froid | EVX_META_LETTRES_LEADS (objectif Prospects, conversion sur le site, événement Lead) |
| Ensemble de pubs froid | FROID_RiveNord-Laval_25-55 (le seul ensemble de la campagne) |
| Campagne Meta retargeting | EVX_META_RETARGETING |
| Ensemble de pubs retargeting | RETARG_Site30j_IG-FB90j |
| Pubs (nom = angle) | L-anniv-40, L-corpo-merci, L-mariage-love, L-prenom, L-chiffres-2027, L-noel, L-paris, J-jeux-geants, plus les deux ajoutées par la section 2 : L-obnl-gala et L-baby |
| Campagne Google | EVX_GOOGLE_RECH_LOCATION (Recherche seulement, sans partenaires ni Display) |
| Groupes d'annonces Google | Lettres lumineuses, Chiffres lumineux, Jeux géants, Tables-chaises-vaisselle, Marque Évenox; optionnel Lettres EN (max 20 % du budget Google, pas pendant le test) |
| utm_source | meta \| google |
| utm_medium | paid_social \| cpc |
| utm_campaign | lettres_froid \| lettres_retarg \| recherche_lettres \| recherche_jeux \| recherche_mobilier |
| utm_content | nom exact de la pub (Meta) ou identifiant court du groupe Google (lettres, chiffres, marque, jeux, mobilier) |
| utm_term | mot-clé Google via {keyword}; vide sur Meta |
| Booqable — champ client | « Source lead » : Meta, Google, Retargeting, Organique, Référence, Récurrent, Autre |
| Booqable — tag de commande | ADS-META ou ADS-GOOGLE |
| Booqable — ligne de note | SRC=meta \| CAMP=lettres_froid \| CREA=L-anniv-40 \| LEAD=2026-10-03 |
| Dashboard hebdo | Google Sheet « EVX – Suivi ads », rempli chaque lundi (30 min de dashboard, dans la routine du lundi de 1 h) |
| Vocabulaire | « dépôt de 20 % » partout (client et KPI) = paiement partiel déduit du total qui bloque la date; dans Booqable, il se demande par Paiements > Demander un paiement, jamais par le réglage Tarification > Dépôts (garantie remboursable), voir sections 2 et 8 |

## Sommaire

1. Thinking / raisonnement
2. Offre & positionnement
3. Assets prérequis (checklist go / no-go)
4. Plan Media (6–8 semaines)
5. Copy & créas (prêtes à coller)
6. Landing page — wireframe textuel
7. Tracking & attribution
8. Ops post-lead (pour ne pas gâcher le ROAS)
9. Risques & garde-fous
10. Livrables semaine 1 pour Alexandre (lundi 21 → dimanche 27 septembre 2026)
11. Questions bloquantes pour affiner

---

## 1. Thinking / raisonnement

### Pourquoi les lettres illuminées en tête d'affiche

Les lettres illuminées sont le produit qui vend Évenox en une image. Dans un fil Instagram, un « LOVE » ou un « 40 » allumé arrête le pouce; une table pliante, non. Ce sont des produits qui se photographient, se partagent, se taguent : chaque location devient une pub gratuite. Le panier est correct (hypothèse H1 : 450 $ HT lettres seules, 800 $ en mix lettres + jeux/mobilier), la marge est élevée parce que le matériel est amorti sur des dizaines de locations, et la différenciation est réelle. Hypothèse à valider en semaine 0 : peu de concurrents sur la Rive-Nord offrent des lettres géantes clé en main avec livraison à la porte; pour le vérifier, tape « location lettres lumineuses Laval », « location lettres lumineuses Blainville » et « location marquee letters Rive-Nord » sur Google et sur Marketplace, compte les annonceurs payants et les fiches Google, et liste les 5 premiers résultats de chaque recherche.

Surtout, les lettres sont une porte d'entrée : le client qui réserve « 50 » pour un anniversaire a aussi besoin de tables, de chaises, d'un beer pong géant. On vend l'émotion avec les lettres, puis on fait grimper le panier avec les jeux et le mobilier (voir section 8 pour l'upsell).

Les jeux géants viennent en second : visuels aussi, mais plus saisonniers (extérieur) et moins « wow » en photo statique. Le mobilier ne sera jamais un produit de pub froide; il se vend en Google Recherche et en upsell.

### Pourquoi Meta + Google Recherche + retargeting léger

**Meta (Facebook + Instagram) = créer le désir.** Un événement se planifie des semaines à l'avance : la personne qui organise un shower en novembre ne sait pas encore qu'elle veut des lettres. Meta permet de lui montrer le produit avant qu'elle cherche, dans un rayon précis (H12 : 35 km autour de Sainte-Thérèse), à l'âge où l'on organise des fêtes (25–55 ans). C'est le canal du volume et de la découverte. Une précision qui compte : avec « Audience Advantage+ », l'âge minimum (25) et le rayon 35 km sont des règles dures, mais le « 55 » et les intérêts ne sont que des suggestions que Meta peut dépasser; on l'accepte pour la portée et on contrôle la répartition par âge le lundi 12 octobre (bascule vers les options d'audience d'origine seulement si les 55+ mangent plus de 20 % de la dépense sans lead; réglage exact en section 4).

**Google Recherche = capter l'intention.** Quelqu'un qui tape « location lettres lumineuses Laval » veut louer maintenant. Le volume local est limité (hypothèse : quelques centaines de recherches par mois dans la zone, à valider avec le planificateur de mots-clés en semaine 0), mais chaque clic est très qualifié. On y met Montréal centre et la Rive-Sud aussi, puisqu'une recherche active justifie des frais de livraison plus élevés (annoncés dans l'annonce, H12).

**Retargeting Meta léger (150 $/mois, ensemble RETARG_Site30j_IG-FB90j)** : un devis se réfléchit; entre la visite et la demande, il y a souvent 2 à 10 jours (hypothèse; à lire dans GA4 > Publicité > Délai avant conversion après 4 semaines). Rappeler la page aux visiteurs des 30 derniers jours et aux personnes qui ont interagi avec la page Facebook ou le compte Instagram dans les 90 derniers jours coûte peu et récupère une partie des indécis. Léger, parce que l'audience sera petite au départ : environ 1 000 personnes (hypothèse : visiteurs 30 jours + engagés IG/FB 90 jours), et un budget trop élevé ne ferait que répéter la même pub aux mêmes personnes. Même à 5 $/jour, la fréquence montera vite (hypothèse : ≈ 2,5 affichages par personne par semaine avec ≈ 1 000 personnes). Garde-fou : si la colonne « Fréquence » de l'ensemble RETARG_Site30j_IG-FB90j dépasse 3 sur 7 jours, baisse le budget à 3 $/jour si l'audience combinée est sous 3 000 personnes, sinon remplace la créa au prochain lundi de changement (règle exacte en section 4). Vérifie aussi en semaine 0 qu'Ads Manager accepte 5 $/jour pour un ensemble optimisé sur l'événement Lead en dollars canadiens; s'il affiche « budget minimum », passe le retargeting à 7 $/jour et le froid à 24 $/jour, total inchangé.

Pas de TikTok ni de YouTube avant que ces deux canaux soient stables (décision 8) : un seul opérateur (toi), deux plateformes maximum.

### Pourquoi 1 500 $/mois pendant 8 semaines

Le budget test n'a pas pour but de faire 50 k$; il sert à mesurer l'économie unitaire. À 1 500 $/mois (H6 : 800 $ Meta froid ≈ 26 $/jour, 500 $ Google Recherche ≈ 16,50 $/jour, 150 $ retargeting ≈ 5 $/jour, 50 $ réserve tests), on attend environ 75 leads en 8 semaines (H7, hypothèse). C'est le minimum pour lire quelque chose : à 30 leads, un ou deux clients bizarres faussent tout; à 75 leads (≈ 60 devis), un taux de close à 35 % plutôt qu'à 20 % devient lisible (≈ 21 dépôts contre ≈ 12), mais ce n'est qu'un ordre de grandeur, pas une preuve statistique : c'est un verdict d'entrepreneur, pas un test A/B. C'est pour ça que le verdict combine ROAS + CPL + taux de close et exige un minimum de 50 leads cumulés, jamais un seul chiffre.

Les deux variantes de H6, si le cash le demande :

- **Variante 1 200 $/mois** (650 / 400 / 100 / 50) : même verdict à 8 semaines, mais ≈ 60 leads, donc marge d'erreur plus grande.
- **Variante cash serré 800 $/mois** (450 / 300 / 50 / 0) : le verdict prend 10–12 semaines au lieu de 8, soit au plus tôt la semaine du 7 décembre et plus probablement celle du 21 décembre. On lit les résultats en pleine période de Noël, après la fenêtre de réservation des partys corpo, trop tard pour corriger. En dessous de 800 $/mois, on ne lance pas le test : trop peu de leads pour lire quoi que ce soit.

Choix par défaut : 1 500 $/mois.

Un point à accepter dès le départ : à 26 $/jour et ≈ 5 leads par semaine, l'ensemble FROID restera en statut « Apprentissage limité » pendant tout le test. Pour en sortir, il faudrait ≈ 50 leads par 7 jours, soit ≈ 286 $/jour à 40 $ de CPL. C'est normal à ce budget et ce n'est pas un problème à « réparer » : UN seul ensemble de pubs, aucune modification (budget, ciblage, créa) en dehors du lundi, et on juge sur 14 jours minimum, jamais sur 3 jours.

**Pourquoi 3–6× de ROAS est réaliste en location locale (hypothèse, à valider avec tes marges Booqable) :** le matériel est déjà payé, donc le coût variable d'une location se résume à la livraison, l'installation et l'entretien. Avec un panier pondéré de 550 $ (H1) et un taux lead → dépôt de 28 % (H4 × H5 : 80 % × 35 %), chaque lead vaut ≈ 154 $ de CA HT; à 40 $ de CPL (H3), ça donne ≈ 3,85× mécaniquement. La cible stable est 4–5× parce qu'à ce niveau, après livraison et ton temps, la location reste clairement rentable et finance l'achat de stock. Sous 3×, on n'augmente rien : on corrige d'abord, dans cet ordre : 1) vitesse de réponse et relances J+2 / J+5 (section 8), parce que c'est gratuit et immédiat; 2) page et formulaire; 3) ciblage; 4) créas (détail en section 9). Augmenter le budget d'un tunnel qui perd de l'argent, c'est perdre plus vite. Et entre deux lundis, on ne touche à rien : 30 minutes le lundi dans la Sheet « EVX – Suivi ads », c'est tout le pilotage.

### Tunnel chiffré : impression → CA (mois type à 1 500 $)

Toutes les valeurs sont des **hypothèses** (H13, H4, H5, H1) à remplacer par les chiffres réels des comptes après 2 semaines. Note (ordre de grandeur, hypothèse) : ≈ 65 % des clics sur lien Meta froid deviennent une vue de page de destination (trafic froid, chargements abandonnés), ≈ 90 % sur Google, ≈ 80 % en retargeting. À valider après 2 semaines dans Ads Manager : colonne « Vues de page de destination » ÷ colonne « Clics sur un lien » (exige le Pixel actif et consenti, voir section 7). Le trafic froid Meta convertit moins bien que Google, d'où un taux page → lead au bas de la fourchette H13; le retargeting est aussi mis au bas de la fourchette par prudence, parce que les engagés IG/FB 90 jours ne sont pas tous en mode achat.

| Étape | Meta froid (800 $) | Google Recherche (500 $) | Retargeting (150 $) | Total (1 500 $, réserve incluse) |
|---|---|---|---|---|
| Impressions | ≈ 53 000 (CPM ≈ 15 $, ordre de grandeur Canada 10–17 $) | ≈ 2 400 | ≈ 10 000 (CPM ≈ 15 $) | ≈ 65 000 |
| CTR | ≈ 1,25 % | 6 % | 1 % | — |
| Clics | ≈ 670 (CPC 1,20 $) | ≈ 143 (CPC 3,50 $) | ≈ 100 (CPC 1,50 $ : petite audience, clic plus cher) | ≈ 910 |
| Vues de page | ≈ 430 (65 %) | ≈ 130 (90 %) | ≈ 80 (80 %) | ≈ 640 |
| Taux page → lead | 5 % | 9 % | 5 % | ≈ 5,8 % |
| Leads | ≈ 21 | ≈ 12 | ≈ 4 | ≈ 37 |
| CPL | ≈ 38 $ | ≈ 42 $ | ≈ 37 $ | ≈ 40 $ |
| Devis envoyés (80 %, H4) | ≈ 17 | ≈ 10 | ≈ 3 | ≈ 30 |
| Dépôts (35 % des devis, H5) | ≈ 6 | ≈ 3,5 | ≈ 1 | ≈ 10,5 |
| CA HT réservé (panier 550 $, H1) | ≈ 3 300 $ | ≈ 1 900 $ | ≈ 550 $ | ≈ 5 750 $ |
| Dépôts encaissés (20 %, H2 : ≈ 110 $/commande) | ≈ 660 $ | ≈ 385 $ | ≈ 110 $ | ≈ 1 150 $ |
| ROAS réservé | ≈ 4,1× | ≈ 3,8× | ≈ 3,7× | **≈ 3,9×** (5 750 $ ÷ 1 500 $ = 3,83, arrondi comme H7) |

Sur 8 semaines, ça donne ≈ 75 leads → ≈ 60 devis → ≈ 21 dépôts → ≈ 11 500 $ HT réservé pour 3 000 $ dépensés (H7). L'argent encaissé à la réservation n'est que le dépôt de 20 % (≈ 110 $ par commande sur un panier de 550 $, H2), soit ≈ 2 300 $ sur la période : le dépôt n'est pas le CA, et le test se finance avec le solde payé avant l'événement, pas avec les dépôts. Prévois la trésorerie en conséquence.

Deux rappels qui changent la lecture de ce tableau :

- **Source de vérité des leads** : la Sheet « EVX – Suivi ads » alimentée par Booqable (champ « Source lead » + tag ADS-META / ADS-GOOGLE), jamais la colonne « Résultats » d'Ads Manager ni « Conversions » de Google Ads. Avec la bannière de consentement (Loi 25), les traceurs sont bloqués avant le clic « Accepter » et Meta n'offre pas de modélisation pour les refus : attends-toi (hypothèse) à ce que les plateformes affichent 20–40 % de leads en moins que la réalité. CPL = dépense de la plateforme ÷ leads taggés dans la Sheet; ROAS = CA HT Booqable ÷ dépense.
- La définition exacte du ROAS (réservé vs encaissé, cohorte par date du lead, fenêtre 30 jours, une seule source par lead, H10) est en section 7.

### Calcul inverse : que faut-il pour 50 000 $/mois

Si les ads faisaient 100 % du CA (hypothèses H8 : CPL 40 $, lead → dépôt 28 %) :

| Panier moyen HT | Commandes/mois | Dépôts/semaine | Leads requis/mois | Spend requis (CPL 40 $) | ROAS implicite |
|---|---|---|---|---|---|
| 550 $ (panier pondéré ads, H1) | 91 | ≈ 21 | ≈ 325 | ≈ 13 000 $ | ≈ 3,8× |
| 800 $ (lettres + jeux/mobilier) | 63 | ≈ 15 | ≈ 225 | ≈ 9 000 $ | ≈ 5,6× |
| 1 000 $ (corpo + mobilier) | 50 | ≈ 12 | ≈ 179 | ≈ 7 150 $ | ≈ 7,0× |

Lis bien la dernière colonne : le ROAS implicite ne dépend que du panier (0,28 × panier ÷ 40 $). Pousser le panier de 550 $ à 800 $ est donc le levier le plus puissant, avant le volume de leads.

Trois conclusions :

1. **Les ads ne feront pas 100 % du CA.** 325 leads par mois, c'est 11 par jour à traiter seul, avec un stock qui ne suit pas. La cible réaliste est ads = 50 % du CA à terme (25 000 $/mois) : à 800 $ de panier, ≈ 31 réservations, ≈ 112 leads, ≈ 4 500 $/mois de spend, ROAS ≈ 5,6× (H8, hypothèse). L'autre moitié (25 000 $) vient de Google Business Profile/SEO, des références, des clients récurrents et du corpo direct, des canaux que les ads alimentent indirectement (photos partagées, avis).

2. **Le stock est la vraie contrainte (H9).** Un set de lettres = 1 location par week-end, donc ≈ 4–5 par mois par set. Exemple purement illustratif, parce que le nombre réel de sets est inconnu (question bloquante n° 1) : avec 3 sets, les lettres seules plafonnent à 12–15 locations/mois, soit ≈ 5 400–6 750 $ HT à 450 $ (H1), ≈ 11–13 % de l'objectif 50 k$. Chaque set additionnel ajoute ≈ 2 000 $/mois de plafond (hypothèse : 4–5 locations × 450 $). À noter : le test seul vise ≈ 10–11 dépôts par mois, donc il occuperait déjà la majorité de cette capacité, en plus des clients organiques. Pour 50 k$, il faut : du mobilier et des jeux en volume (pas de contrainte week-end unique), des locations de semaine (corpo, écoles, commerces) et l'achat de stock additionnel financé par les résultats du test. Le plan ads doit donc pousser le panier vers 800 $ dès le premier contact (section 8), pas seulement multiplier les leads lettres.

3. **La montée se fait par paliers.** Chaque lundi, deux conditions : le ROAS réservé du canal, calculé sur les cohortes de leads vieilles de 14 à 42 jours (ligne « ROAS cohorte mûre » de la Sheet EVX – Suivi ads, section 7), est ≥ 4× ET le stock n'est pas plein. Si oui, on monte de +20 % le budget quotidien de chaque campagne dont le ROAS de canal est ≥ 4× (exemples : Meta, ensemble FROID_RiveNord-Laval_25-55 : 26 → 31 $/jour; Google, campagne EVX_GOOGLE_RECH_LOCATION : 16,50 → 20 $/jour); le retargeting suit à 15–20 % du budget froid Meta. Jamais plus de +20 % : au-delà, Meta redistribue brutalement et les coûts sautent. « Plein » = dans Booqable > Calendrier, plus de 80 % des sets de lettres sont déjà réservés sur au moins 4 des 6 prochains samedis. Si le stock est plein, on ne monte pas : on redirige le budget vers jeux/mobilier ou on achète du stock. Réglages détaillés en section 4. Partant de 350 $/semaine, il faut environ 6 paliers consécutifs pour atteindre ≈ 1 040 $/semaine (4 500 $/mois); avec les semaines de pause, compte 8–10 semaines après le verdict, donc fin janvier ou début février, en plein creux janvier–mars (H11). Concrètement : viser 4 500 $/mois pour avril–mai, et en janvier orienter les créas vers Saint-Valentin, showers et 40e/50e plutôt que de forcer le budget.

### Conclusion : ce qu'on valide en 8 semaines

1. **On valide trois chiffres, pas un chiffre d'affaires** : le CPL réel, le taux de close réel et le panier réel des leads ads. Source de vérité pour les trois : la Sheet EVX – Suivi ads alimentée par Booqable (champ « Source lead » + tags ADS-META / ADS-GOOGLE), jamais les leads affichés par Meta ou Google (sous-comptés de 20–40 % à cause des refus de témoins, hypothèse; section 7). Fenêtre de lecture au verdict (semaine du 23 novembre) : le ROAS réservé et le taux de close se calculent sur les cohortes de leads des semaines 1–4 (28 septembre → 25 octobre), toutes mûres de 29 à 56 jours (fenêtre 30 jours de H10 complète; c'est la ligne 12 du Sheet, section 7); les semaines 5–8 (26 octobre → 22 novembre) comptent comme pipeline provisoire : CPL et nombre de devis seulement, tendance ROAS à titre indicatif, marquée « immature » et reconfirmée le lundi 21 décembre. Le CPL se lit sur les semaines 3–8 (après les 14 jours d'apprentissage), les leads cumulés sur les semaines 1–8.
2. **GO scale** : ROAS réservé ≥ 4× (cohortes semaines 1–4) ET CPL ≤ 50 $ ET devis → dépôt ≥ 30 % ET ≥ 50 leads cumulés → paliers +20 %/semaine (point 3 ci-dessus) et budget stock.
3. **CORRIGER** (toute condition GO manquée sans être STOP) : ROAS 3–3,9×, ou CPL 51–80 $, ou close 20–29 %, ou < 50 leads → on garde 1 500 $, correctifs de la section 9, nouveau verdict le lundi 21 décembre (semaine de Noël : si les volumes sont trop bas, lire les chiffres le 11 janvier 2027). Trois alarmes n'attendent pas le verdict : CPL > 60 $ sur 7 jours glissants = correctif immédiat (alerte H3), et CPL > 80 $ après 150 $ dépensés sur un ensemble de pubs ou un mot-clé/groupe = pause de cet ensemble ou de ce groupe, pas du test (H3); de même, ROAS < 3× à n'importe quel lundi dès la semaine 3 = correctifs lourds immédiats.
4. **STOP / repenser l'offre, décidé PAR CANAL** (H10 : une source par lead, donc un ROAS par canal) : ROAS réservé < 3× après 4 semaines de correctifs, ou CPL > 80 $ sur 3 semaines consécutives, ou close < 20 % sur au moins 40 devis envoyés → on coupe le canal fautif et on garde l'autre à son budget H6. Si seul Meta froid est coupé, le retargeting reste à 5 $/jour tant que l'audience (Ads Manager > Audiences) dépasse 1 000 personnes, sinon pause. Si les deux canaux sont < 3× : on garde seulement Google Recherche à 150 $/mois (5 $/jour) limité aux groupes « Marque Évenox » et « Lettres lumineuses » (les autres groupes en pause), on met le retargeting en pause (audience trop petite sans trafic froid), et on retravaille page, offre et zone avant de réinvestir.
5. Dans tous les cas, le test laisse un actif durable : page lettres, tracking propre, 8–10 créas testées et une base de leads taggés dans Booqable. Note : le cas de base du plan (3,9×, H7) tombe en CORRIGER; le GO exige de faire mieux que les hypothèses, surtout sur le panier (upsell jeux/mobilier, section 8) et le CPL. Et la fenêtre 12 octobre → 22 novembre couvre la prise de réservations des partys de Noël (2e pic, H11) : les CPL et ROAS observés ne s'extrapolent pas à janvier–mars (creux), où il faudra viser 40e/50e, Saint-Valentin, showers et corpo avec le même budget ou moins.

## 2. Offre & positionnement

### La promesse (1 phrase)

> **Évenox loue des lettres illuminées géantes et des jeux géants, propres, testés et prêts à brancher, à ramasser à Sainte-Thérèse ou livrés à ta porte sur la Rive-Nord, à Laval et à Montréal (jusqu'à 60 km de Sainte-Thérèse, frais selon l'adresse) — soumission en 24 h, un seul interlocuteur du devis au retour.**

Version courte pour titre Meta (≤ 40 caractères) : « Lettres géantes. Prêtes à briller. » (34 caractères). Le titre SEO de la page (≤ 60 caractères) est tranché en section 6.

### Les 3 preuves qui portent la promesse

| Preuve | Formulation à réutiliser (site + pubs) | Pourquoi ça compte pour le client |
|---|---|---|
| **Zone claire, ramassage ou livraison** | « On dessert la Rive-Nord, Laval et Montréal, jusqu'à 60 km de Sainte-Thérèse. Ramassage inclus à notre entrepôt de Sainte-Thérèse, ou livraison à ta porte avec frais selon l'adresse. » | Répond tout de suite au « est-ce que vous venez chez nous? » et coupe les demandes hors zone (H12 : rien au-delà de 60 km; ciblage en section 4). Le ramassage inclus rend l'offre accessible sans afficher un seul prix : c'est le socle du Forfait Signature ci-dessous. |
| **Soumission en 24 h** | « Tu remplis le formulaire, tu reçois ta soumission détaillée en 24 h, avec la disponibilité de ta date confirmée. » | Le client sérieux veut une réponse rapide et une date bloquée; c'est notre SLA (réponse < 24 h, cible < 4 h ouvrables, section 8). |
| **Clé en main premium** | « Matériel propre, testé avant chaque location, installation simple : tu poses, tu branches dans une prise standard, ça s'allume. Un seul interlocuteur, Alexandre, du devis jusqu'au retour. » | C'est la différence avec le voisin qui loue ses lettres sur Marketplace : zéro surprise, zéro « la lettre E ne fonctionne pas ». « Prise standard 120 V » est l'information que les salles et les clients corpo demandent toujours (hypothèse, à confirmer par Alexandre avant le 24 sept.). |

Ordre d'apparition partout (pub, page, courriel) : **preuve visuelle (photo), puis soumission 24 h, puis zone, puis clé en main.** Le désir d'abord, la logistique ensuite.

### Ce qu'on ne promet pas (formulé en positif, prêt pour le site)

Chaque « non-promesse » protège la rentabilité ou le stock. Les phrases marquées **Prêt** se collent telles quelles dans la FAQ de la page (section 6). Celles marquées **À confirmer** sont des hypothèses : Alexandre les valide avant la mise en ligne du 24 septembre; si la réponse est « non », la page utilise la version de repli indiquée.

| Réalité à protéger | Phrase positive à afficher | Statut |
|---|---|---|
| Stock limité (1 set = 1 location par week-end, H9 hypothèse) | « Chaque mot est réservé pour une seule fête par week-end : ta date est à toi, sans partage. Réserve tôt pour l'avoir. » | Prêt |
| Pas toute la province au même prix; rien au-delà de 60 km (H12) | « Nos frais de livraison sont calculés selon ton adresse : les plus bas sur la Rive-Nord et à Laval. Montréal et Rive-Sud (jusqu'à 60 km de Sainte-Thérèse) : livraison possible, frais indiqués dans ta soumission. Au-delà de 60 km, on ne livre pas; le ramassage à notre entrepôt reste possible. » | Prêt (même phrase dans le script de non-qualification, section 8) |
| Pas de prix dans les messages (totaux dans Booqable) | « Ton prix exact dépend du mot, du nombre de jours et de la livraison : tu reçois une soumission claire et complète en 24 h, sans surprise. » | Prêt |
| Montage complexe hors offre | « Nos lettres se posent au sol et se branchent en quelques minutes. Le montage sur scène, suspendu ou avec électricien ne fait pas partie de notre offre. » | Prêt (si Alexandre a réellement un partenaire de montage, ajouter « on te réfère »; pas avant) |
| Dates de dernière minute non garanties | « Tu veux une date dans moins de 7 jours? Appelle-nous au 514-559-1893 : on te dit en 24 h si le mot est libre et si le ramassage est possible. Sinon, on te le dit franchement. » | Prêt (seuil de 7 jours = hypothèse par défaut; l'appel plutôt que le formulaire alimente aussi la conversion « Appels » Google, section 7) |
| Pas de vente | « Nos lettres sont à louer, pas à vendre : tu profites de l'effet wow sans l'entreposage. » | Prêt |
| Extérieur et météo (résistance à l'eau des lettres inconnue) | Version par défaut : « Nos lettres brillent à l'intérieur ou dehors sous abri (chapiteau, terrasse couverte), jamais sous la pluie. Prévois une prise standard à proximité. » | **À confirmer** (hypothèse). Si les lettres sont homologuées extérieur, élargir à « intérieur comme extérieur » (mariages et festivals extérieurs de H11 = leads en plus). Si elles ne tolèrent ni pluie ni rosée, repli : « Nos lettres brillent à l'intérieur; pour l'extérieur, demande-nous : ça dépend de la météo et de l'abri. » |
| Minimum de commande (montant jamais affiché) | « Un minimum de commande s'applique; il est indiqué dans ta soumission. » | Prêt (le montant choisi par Alexandre vit dans Booqable et dans le script de qualification de la section 8, jamais dans les pubs ni sur la page) |
| Moment du solde | « Ton dépôt de 20 % bloque la date; le solde se règle 7 jours avant l'événement (lien de paiement envoyé 10 jours avant). » | **À confirmer** (hypothèse par défaut; si Alexandre exige le solde plus tôt, écrire le délai exact, ex. « 7 jours avant ») |

### Angles créatifs (matière brute pour la section 5)

Fenêtre visée : 28 septembre au 22 novembre 2026. Copy finale en section 5; budgets et règles de kill en section 4.

| # | Nom de la pub | Angle | Persona créa (pas un ciblage) | Mot, lettres ou chiffres à montrer | Déclencheur émotionnel | Moment saisonnier sept–nov 2026 | Lancement |
|---|---|---|---|---|---|---|---|
| 1 | L-anniv-40 | Anniversaire adulte, dont 40e/50e (le chiffre en lumière est la créa principale) | Femmes 30–55 qui organisent la fête du conjoint ou d'un ami | « 40 », « 50 », « 30 » | Faire vivre un moment qu'il ou elle n'oubliera jamais; le « wow » à l'entrée | Toute la fenêtre; les 40e et 50e sont peu saisonniers (hypothèse) | **28 sept.** |
| 2 | L-corpo-merci | Reconnaissance d'employés, party de Noël corpo | Adjointes, RH, coordos d'événements, PME 10–200 employés | « MERCI », « 2026 », « BRAVO », initiales de l'entreprise (max 5 pièces) | Montrer aux employés qu'ils comptent; la photo d'équipe qui circule sur LinkedIn | Octobre–novembre = réservation des partys de Noël (H11); location de semaine = bon pour le stock | **28 sept.** |
| 3 | L-mariage-love | Mariage, fiançailles | Couples 25–40, mères de la mariée, planificatrices | « LOVE » (mot courant, exigé par le brief), « AMOUR », initiales « A » et « M » (cœur ou « & » seulement si le symbole est en stock) | La photo signature du mariage; le décor qu'on se rappelle | Mariages d'automne sept–oct (hypothèse); réservations 2027 qui débutent à l'automne (hypothèse) | **28 sept.** |
| 4 | L-prenom | Prénom, fête d'enfant | Parents 28–45 | « EMMA », « NOAH », « 1 » (aucun prénom accentué tant que les lettres accentuées ne sont pas confirmées) | L'enfant voit son nom en lumière; les photos de la fête | Toute la fenêtre; Halloween = fêtes d'enfants à thème (hypothèse) | **28 sept.** |
| 5 | L-chiffres-2027 | Jour de l'An, compte à rebours | Corpo, bars et restos, familles qui reçoivent | « 2027 » (mot unique de la créa; exige deux « 2 »). Photo « 2026 » puis « 2027 » seulement si deux sets de chiffres existent | Le décompte, la photo de minuit, le nouveau départ | Réservation en novembre pour le 31 décembre (hypothèse); jumeler avec L-noel | **28 sept.** |
| 6 | L-noel | Party de Noël (famille ou bureau) | Familles multigénérationnelles, PME | « NOEL » (sans tréma tant que le « Ë » n'est pas confirmé), « MERCI »; « JOYEUX » = 6 pièces, donc option 6e pièce | La tradition qu'on crée; le coin photo qui rassemble | Réservations en octobre–novembre (H11); partys de bureau souvent la 1re ou 2e semaine de décembre (hypothèse) | **26 oct.** (semaine 5) |
| 7 | L-paris | Soirée à thème | Comités sociaux, OBNL, hôtes de soirées privées 35–55 | « PARIS », « VEGAS », « OUI » | Le dépaysement sans voyager; l'entrée théâtrale | Galas et soirées thématiques oct–nov (hypothèse) | Retargeting / Google seulement |
| 8 | L-obnl-gala | OBNL, levée de fonds, gala | Directrices d'OBNL, comités de gala, fondations d'écoles et d'hôpitaux | « MERCI », « GALA », « 2026 » | La reconnaissance des donateurs; la photo qui fait le rapport annuel | Galas-bénéfice d'automne oct–nov (hypothèse) | Retargeting / Google seulement |
| 9 | L-baby | Baby shower, révélation | Futures mères et leurs amies 25–38 | « BABY » (mot courant, exigé par le brief), « BOY », « GIRL » | L'annonce qu'on photographie mille fois; la douceur | Toute l'année (hypothèse); préparer janvier–février (H11 creux, showers intérieurs) | Retargeting / Google seulement |
| 10 | J-jeux-geants | Jeux géants (angle secondaire, upsell) | Comités sociaux, familles, corpo « team building » | Beer pong géant, Jenga géant, Puissance 4 géant (Connect 4), à côté d'un mot lumineux | Faire jouer les invités ensemble; les rires plutôt que les téléphones | Partys de Noël corpo (activités intérieures), Halloween (hypothèse) | Retargeting / Google seulement |

Tous les moments saisonniers hors H11 sont des hypothèses à valider avec l'historique Booqable.

**Le 28 septembre, exactement 5 pubs sont actives : L-anniv-40, L-corpo-merci, L-mariage-love, L-prenom, L-chiffres-2027.** Les changements de pubs se font seulement aux lundis de changement (12 octobre, 26 octobre, 9 novembre), parce que chaque nouvelle créa relance la phase d'apprentissage : le 12 octobre, les Reels B et C remplacent les pubs coupées par la règle CPL (section 4); le 26 octobre, L-noel entre et la pub au CPL réel le plus élevé sort (les partys de Noël se réservent dès octobre selon H11, mais L-corpo-merci couvre déjà cet angle jusque-là). Les lignes 7 à 10 ne vont jamais dans l'ensemble froid : elles vivent en retargeting (EVX_META_RETARGETING) et en Google Recherche (section 4).

Règles qui s'appliquent à toutes les lignes du tableau :

1. **Ajout aux conventions verrouillées.** « L-obnl-gala » et « L-baby » s'ajoutent aux 8 noms de pubs du brief (même patron L-angle-mot); à reprendre tels quels en section 3 (liste des créas), section 4 (pubs), section 5 (copy) et section 7 (utm_content et note Booqable CREA=). Ils figurent dans le rappel des conventions en tête de document.
2. **Règle d'or stock.** Le mot montré doit être un mot qu'Évenox possède en stock, avec les doublons nécessaires (« 2027 » = deux « 2 »; « EMMA » = deux « M »). Par défaut, aucune créa n'utilise de lettre accentuée (É, Ë, È) ni de symbole (cœur, &, !, #) tant que l'inventaire ne les confirme pas. Si un set ne permet pas « MERCI » ou « 2027 », l'angle sort de la rotation et la pub n'est pas produite.
3. **Règle langue (Loi 96).** Un mot anglais (LOVE, BABY, BOY, GIRL, VEGAS) apparaît uniquement comme lettres physiques dans la photo ou la vidéo. Tout texte incrusté, titre, texte principal, description et sous-titre de Reel est en français. Aucune pub 100 % anglaise sur Meta; l'anglais n'existe que dans le groupe Google « Lettres EN », avec une page française équivalente (section 4). Les mots anglais sans usage courant au Québec (NYE, JOY, HO HO HO, OH BABY, MR & MRS, HAPPY, GATSBY) sont retirés de la rotation. Hypothèse juridique : un mot anglais sur le produit photographié est toléré si le texte de la pub est en français; à valider auprès de l'OQLF si un doute survient.
4. **Persona ≠ ciblage.** Toutes les cibles restent dans 25–55 : les personas et tranches d'âge du tableau guident la créa et la première ligne du texte (« pour ton party de bureau »), pas le ciblage. Toutes les pubs vivent dans le même ensemble « FROID_RiveNord-Laval_25-55 » (Advantage+ audience, âge minimum 25 en contrôle dur, lieux = H12; réglages exacts en section 4). On ne crée jamais un ensemble par angle : c'est la créa qui sélectionne le persona, pas le ciblage. Dix ensembles à 2,60 $/jour ne sortiraient jamais de l'apprentissage limité.
5. **Nombre de pubs actives.** À ≈ 26 $/jour (H6), 5 pubs actives au lancement (L-anniv-40, L-corpo-merci, L-mariage-love, L-prenom, L-chiffres-2027) et jamais plus de 6 : on remplace la moins performante aux lundis de changement (section 4), on n'empile pas. L'ensemble restera vraisemblablement en « apprentissage limité » (moins de 50 leads sur 7 jours) : c'est accepté pour un compte local. Cas particulier L-corpo-merci : en froid, Meta favorisera les créas grand public au coût par lead le plus bas; L-corpo-merci sert de test créatif de 2 semaines maximum (28 sept. au 11 oct.) puis, au lundi de changement du 12 octobre, passe en retargeting seulement si elle est la plus faible. Le corpo se gagne surtout par Google Recherche (groupe « Lettres lumineuses », mots-clés « party de bureau », « party de Noël », section 4) et par la Fiche d'établissement Google (section 3).

### Filtres de qualité client (attirer les sérieux, décourager les tire-kickers)

Positionnement : **premium sans être snob**. On ne dit jamais « haut de gamme », « luxe » ou « exclusif »; on montre la qualité et on rend le processus limpide. Le filtre se fait par la clarté, pas par le ton.

| Filtre | Où | Formulation exacte | Effet |
|---|---|---|---|
| Processus explicite | Page, sous le formulaire | « Soumission détaillée en 24 h. Ta date est bloquée dès le dépôt de 20 %. » | Le curieux qui « veut juste savoir le prix » comprend qu'il y a un processus; le client sérieux est rassuré. |
| Dépôt visible | Page + courriel de devis | « Un dépôt de 20 % réserve ton mot et ta date. Sans dépôt, la date reste offerte au premier dépôt reçu; ta soumission reste valide 30 jours, sous réserve de disponibilité. » | Écarte ceux qui veulent « réserver pour voir » et c'est la phrase des relances J+2, J+5 et de la clôture J+10 (section 8). |
| Minimum de commande | Page (FAQ) | « Un minimum de commande s'applique; il est indiqué dans ta soumission. » | Décourage la demande « une seule lettre pour une photo » sans afficher de prix. |
| Zone annoncée | Pub + page + formulaire (ville obligatoire) | « Rive-Nord, Laval, Montréal, jusqu'à 60 km de Sainte-Thérèse. Livraison selon l'adresse. » | Réduit les leads hors zone (H4 : ≈ 20 % de non-qualifiés, hypothèse à valider dans le Sheet « EVX – Suivi ads »). |
| Date obligatoire | Formulaire | Champ « Date de l'événement » obligatoire + « Type d'événement » en liste déroulante obligatoire, valeur par défaut vide (valeurs ci-dessous) | Sans date, pas de devis possible; on qualifie avant même de répondre. |
| Mot demandé | Formulaire | Champ « Mot ou chiffres souhaités (ex. LOVE, 40, MERCI) » | Force le client à se projeter; révèle immédiatement les demandes impossibles en stock. |
| Mode de réception | Formulaire | Choix « Ramassage à Sainte-Thérèse » ou « Livraison à mon adresse » | Prépare la ligne livraison du devis et fait réfléchir le lead qui n'a pas de véhicule pour ramasser. |
| Signal qualité | Pub (texte principal) | « Matériel testé avant chaque location. » | Le client qui compare avec Marketplace comprend pourquoi on n'est pas les moins chers, sans qu'on le dise. |

Valeurs exactes de la liste déroulante « Type d'événement », dans cet ordre (une valeur par angle du tableau; c'est ce qui permet de croiser type d'événement × source dans le Sheet « EVX – Suivi ads », section 7) :

| Valeur à saisir dans le formulaire | Angle correspondant |
|---|---|
| Anniversaire (40e, 50e, autre) | L-anniv-40 |
| Mariage ou fiançailles | L-mariage-love |
| Party de bureau, reconnaissance, Noël corpo | L-corpo-merci (ou L-noel pour un party de bureau de Noël) |
| Baby shower ou révélation | L-baby |
| Gala, OBNL, levée de fonds | L-obnl-gala |
| Soirée à thème (Paris, Vegas) | L-paris |
| Fête d'enfant, prénom | L-prenom |
| Jour de l'An 2027 | L-chiffres-2027 |
| Autre | À qualifier à la main (section 8) |

Champs et ordre complets du formulaire : voir section 3 (checklist) et section 6 (wireframe); cette section fixe seulement la logique de filtre et les valeurs de la liste.

Note d'exécution sur le dépôt (ne pas sauter) : le « dépôt de 20 % » (H2) = 20 % du devis, ≈ 110 $ encaissé à la réservation sur un panier de 550 $ (hypothèse); le dépôt n'est pas le CA. Dans Booqable, il se prend par **lien de paiement partiel de 20 % sur le devis** (Booqable Payments, sections 7 et 8), **jamais** par le réglage Paramètres > Tarification > Dépôts, qui crée un dépôt de garantie remboursable.

Ce qu'on **ne fait pas** : afficher « à partir de X $ » (contredit le process devis), promettre « réponse immédiate » (SLA 24 h, cible 4 h ouvrables), ou utiliser des termes comme « luxe » (attire les demandes de montage complexe hors offre).

### L'offre d'entrée recommandée : le « Forfait Signature »

UNE offre, pour que la pub, la page et le devis parlent de la même chose. Le forfait fixe la **structure de service** (week-end, ramassage, test, un interlocuteur); le prix reste calculé à la pièce et au nombre de jours dans Booqable (décision 6, H1), jamais un forfait à prix fixe.

```
FORFAIT SIGNATURE — Lettres illuminées Évenox

Inclus :
- Ton mot ou tes chiffres, jusqu'à 5 pièces (tarif selon le nombre de pièces,
  indiqué dans ta soumission)
- Location week-end : ramassage vendredi 13 h à 18 h, retour lundi 9 h à 12 h
  (heures à confirmer par Alexandre)
- Ramassage inclus à notre entrepôt de Sainte-Thérèse (215 boul. René-A.-Robert)
- Matériel testé et nettoyé avant ta location
- Un seul interlocuteur du devis au retour

En option (dans ta soumission) :
- Lettre ou chiffre supplémentaire (6e et plus)
- Journée(s) de semaine supplémentaire(s)
- Livraison et cueillette à ta porte (frais selon l'adresse, jusqu'à 60 km)
- Jeux géants : beer pong géant, Jenga géant, Puissance 4 géant
- Tables, chaises, nappes, vaisselle

Réservation : dépôt de 20 % pour bloquer ta date. Soumission en 24 h.
```

« Rallonges fournies » n'est pas dans la liste : le brief ne le confirme pas (hypothèse). À ajouter seulement si Alexandre confirme que le kit inclut rallonges et adaptateurs.

Pourquoi cette structure (une phrase par choix) :

- **Jusqu'à 5 pièces** : couvre les mots les plus demandés (LOVE, MERCI, BABY, PARIS, 2027, 40/50) tout en gardant une porte d'upsell naturelle pour les prénoms plus longs; à plafonner à 4 pièces si l'inventaire réel montre que la majorité des sets sont sous 5 pièces. Un client qui veut « 40 » (2 pièces) ou 5 jours reçoit le même forfait, tarifé à la pièce et au nombre de jours dans sa soumission.
- **Week-end complet plutôt que « 1 jour »** : le stock est de toute façon bloqué pour le week-end (H9, hypothèse), autant vendre la valeur pleine et simplifier la logistique (un ramassage le vendredi, un retour le lundi avant midi).
- **Ramassage inclus, livraison en option** : rend le prix de base plus accessible dans la tête du client et transforme la livraison en ligne de devis claire; ça respecte « frais selon adresse » sans tableau de zones public. Conséquence pour la section 3 : la Fiche d'établissement Google garde l'adresse visible (on reçoit des clients pour le ramassage) avec des zones de service en plus.
- **Jeux et mobilier en option dans le devis** : c'est là que le panier passe de 450 $ (lettres seules) à 800 $ (mix lettres + jeux/mobilier), H1 hypothèse; l'upsell se fait au devis, pas dans la pub (script d'upsell en section 8).
- **Variante corpo « Semaine Signature »** : même structure, du mardi au jeudi (ramassage mardi, retour jeudi; retour jeudi soir, test et nettoyage vendredi matin avant le ramassage week-end). Le lundi sert de journée tampon nettoyage/test : Booqable doit bloquer le lundi comme journée de retour/vérification (H9, hypothèse), sinon un même set peut être rendu le lundi ET reloué le lundi. Proposée uniquement dans le devis aux leads L-corpo-merci et L-obnl-gala, pour remplir les jours de semaine sans cannibaliser les week-ends; tag de commande Booqable « SEMAINE » pour mesurer, au verdict du 23 novembre, la part des locations de semaine (H9 : levier clé vers 50 k$). Pas de page dédiée avant ce verdict.

### Phrase d'appel à l'action unique

Une seule idée, trois longueurs. Flèche et emoji sont bannis de tout texte publicitaire (Google Ads refuse les symboles non standard; Meta et la page suivent la même règle pour rester cohérents).

| Usage | Formulation exacte | Longueur |
|---|---|---|
| Texte principal Meta, description RSA (≤ 90), page, courriel | « Dis-nous ton mot et ta date : soumission en 24 h. » | 49 caractères |
| Titre Meta (≤ 40) | « Ton mot, ta date : soumission en 24 h » | 37 caractères |
| Titre Google RSA (≤ 30) | « Ton mot, ta date, devis 24 h » | 28 caractères |

Boutons associés, mêmes libellés en sections 5 et 6 : bouton d'appel à l'action Meta = « Obtenir un devis » (menu déroulant du bouton dans la pub); bouton du formulaire sur evenox.ca/lettres-illuminees = « Envoyer ma demande » (les CTA de la page = « Obtenir ma soumission en 24 h », section 6).

### Choix par défaut en attendant confirmation (à confirmer en semaine 0)

Chaque point a un défaut : Alexandre exécute le défaut tant qu'il n'a pas une réponse contraire; la colonne « Ce qui changerait le choix » dit quelle information ferait bouger le défaut.

| Sujet | Défaut appliqué dès maintenant | Ce qui changerait le choix |
|---|---|---|
| Inventaire des lettres, chiffres, accents et symboles | Les créas de lancement n'utilisent que des mots dont Alexandre a photographié le set réel avant le 23 septembre; si un mot manque, la pub correspondante n'est pas produite. Aucun accent ni symbole en créa. | Un inventaire écrit (nombre de sets, lettres/chiffres et exemplaires, présence de É/Ë, cœur, &) ouvre « NOËL », « LÉA », « A ♥ M » et fixe le plafond du forfait à 4 ou 5 pièces. |
| Montant du minimum de commande | Alexandre fixe le montant avant le lundi 21 septembre et l'inscrit dans la note interne Booqable + le script de qualification (section 8); jamais affiché. | Rien : le montant est sa décision; seule son existence est publique (« indiqué dans ta soumission »). |
| Locations de semaine (Semaine Signature) | Même tarif à la pièce que le week-end, du mardi 9 h au jeudi 17 h; lundi bloqué comme tampon. | Un tarif semaine déjà en place chez Évenox, ou des heures d'entrepôt différentes. |
| Structure dans Booqable | Chaque lettre/chiffre reste un produit individuel avec son stock et ses dates (c'est ce qui bloque la double location). Le Forfait Signature n'est PAS un article : c'est un gabarit de devis (mêmes 5 lignes « Inclus » dans le même ordre, en en-tête) + le tag de commande « FORFAIT-SIGNATURE ». | Si Booqable est déjà configuré avec des sets complets comme produits uniques, créer alors un « Bundle » Booqable nommé Forfait Signature (Paramètres > Produits). |
| Usage extérieur des lettres | Phrase FAQ « sous abri, jamais sous la pluie ». | La confirmation que lettres et blocs d'alimentation tolèrent pluie et rosée (ou pas) : élargit ou restreint la phrase et décide l'angle festivals/anniversaires extérieurs (H11). |
| Alimentation et rallonges | Prise standard 120 V mentionnée; rallonges non promises. | La confirmation du kit réel (rallonges, adaptateurs, puissance) ajoute la ligne « rallonges fournies » au forfait. |
| Moment du solde et heures de ramassage | Solde payé 7 jours avant l'événement (section 8); ramassage vendredi 13 h à 18 h, retour lundi 9 h à 12 h. | Une politique de solde différente (ex. le jour même) ou des heures d'entrepôt différentes. |

## 3. Assets prérequis (checklist go / no-go)

Rien ne se dépense avant que tout ce qui suit soit coché. Responsable de chaque item : Alexandre (« AS »). Durées = hypothèses pour un non-expert qui suit les menus indiqués (les libellés de menus bougent d'un mois à l'autre; si un menu n'existe plus, taper le mot-clé dans la barre de recherche de l'outil). Le wireframe détaillé est en section 6, la technique de tracking en section 7, la copy finale en section 5, le plan jour par jour en section 10.

Hypothèse de départ (à confirmer lundi 21 en premier) : evenox.ca est sous WordPress + Divi. Choix par défaut si ce n'est pas le cas : on bâtit la page lettres et le formulaire dans l'outil existant du site, avec une redirection vers /merci après envoi, et on remplace les plugins de 3.7 par les équivalents de cet outil; le critère NO-GO (3.8) ne change pas. L'info qui changerait le choix : un outil sans formulaire redirigeable → on crée la page sur un WordPress hébergé à part (question bloquante en fin de document).

### 3.1 Bloc Page evenox.ca/lettres-illuminees

| [ ] | Quoi | Outil | Resp. | Durée | Critère « fait » |
|---|---|---|---|---|---|
| [ ] | Créer la page avec la fin d'adresse (slug) exacte `lettres-illuminees` (sans accent) | WordPress → Pages → Ajouter → Utiliser Divi Builder | AS | 4 h | `https://evenox.ca/lettres-illuminees` s'ouvre normalement dans un navigateur en navigation privée (pas de page 404, pas de mention « brouillon »), statut « Publié », page hors menu principal |
| [ ] | Bâtir les sections dans l'ordre du wireframe (section 6) : héros + CTA, bénéfices, galerie, comment ça marche (3 étapes), zones et tarification, jeux géants et mobilier, FAQ, preuves, formulaire, footer + barre CTA collante (téléphone) | Divi Builder | AS | inclus | Toutes les sections présentes, aucun « Lorem ipsum », aucun prix affiché (« soumission en 24 h » partout) |
| [ ] | SEO title, H1, meta description (textes exacts ci-dessous) | Yoast SEO (gratuit) → boîte Yoast sous l'éditeur de la page → Titre SEO / Méta description; H1 = module Titre du héros dans Divi | AS | 15 min | Aperçu Google dans Yoast vert; titre visible dans l'onglet du navigateur |
| [ ] | Preuves sociales réunies : 8–12 photos clients (permission écrite par courriel), 3 avis Google copiés mot à mot avec prénom + ville, 3–5 logos corpo avec permission écrite | Gmail + Google Business Profile | AS | 2 h | Dossier Drive « EVX_Preuves » complet; permissions archivées dans Gmail sous le libellé « Permissions-photos » |
| [ ] | Plan B preuves : envoyer dès lundi 21 les demandes de permission (photos, logos) et, si moins de 3 avis Google publiés, le script d'avis (3.5) aux 10 derniers clients; la section « preuves » de la page affiche seulement les photos tant que 3 avis ne sont pas publiés | Gmail | AS | 20 min | Courriels envoyés lundi 21 (réponses attendues mardi–jeudi) |
| [ ] | CTA principal « Obtenir ma soumission en 24 h » vers le formulaire (ancre `#soumission`); CTA secondaire « Appeler : 514-559-1893 » en lien `tel:+15145591893`, collant en bas d'écran sur mobile | Divi → Module Bouton (bouton collant : onglet Avancé → Position → Collant : Bas, appareil « Téléphone » seulement) | AS | 30 min | Les deux boutons cliquables sur iPhone et Android; le lien tel: ouvre le composeur |
| [ ] | Vitesse mobile | PageSpeed Insights (pagespeed.web.dev) après activation de WP Rocket + Imagify (3.7) | AS | 1 h | Score mobile ≥ 70 et ligne « LCP » ≤ 2,5 s (= le plus gros élément visible s'affiche en moins de 2,5 s, seuil « bon » de Google; hypothèse de cible atteignable; le score est une cible souple, pas un critère NO-GO); images ≤ 250 Ko chacune |
| [ ] | Page `/merci` créée avec le texte exact ci-dessous, cachée de Google (« noindex »), hors menu et hors sitemap | WordPress → Pages → Ajouter; Yoast → onglet Avancé → « Autoriser les moteurs de recherche à afficher cette page dans les résultats de recherche? » = Non (Google ne l'affichera pas) | AS | 20 min | `https://evenox.ca/merci` s'ouvre normalement en navigation privée, absente du menu et du sitemap (evenox.ca/sitemap_index.xml); lien jamais partagé ailleurs (une visite directe déclencherait un faux Lead) |

Sous-total 3.1 : 8 h 25.

Textes exacts à coller (le SEO title dit « lumineuses » et le H1 « illuminées » : c'est voulu, ce sont les deux façons dont les gens cherchent; ne pas « harmoniser ») :

```
SEO title (57 car.) : Location de lettres lumineuses géantes | Évenox Rive-Nord
H1 : Lettres illuminées géantes à louer, livrées sur la Rive-Nord, à Laval et à Montréal
Meta description (146 car.) : Lettres illuminées géantes livrées à Laval, Rive-Nord et Montréal. Anniversaires, mariages, partys corpo. Soumission en 24 h, réservez votre date.

Page /merci — H1 : Merci! Ta demande est reçue.
Page /merci — paragraphe : Tu reçois ta soumission par courriel en moins de 24 h. Urgent? Appelle-nous : 514-559-1893.
```

### 3.2 Bloc Formulaire (sur la page, ancre `#soumission`)

Outil choisi : **Fluent Forms (gratuit)** — dérogation assumée par rapport à WPForms Lite (souvent recommandé) : dans WPForms, les champs Date et Téléphone sont payants; Fluent Forms gratuit les inclut, avec les champs cachés `{get.…}`, la redirection et Turnstile. Compatibilité vérifiée au test NO-GO : Complianz bloque les pixels au niveau du site (pas du formulaire) et l'événement Lead se déclenche sur l'URL /merci, donc ni Complianz ni PixelYourSite n'ont besoin de « reconnaître » Fluent Forms. Les sections 6, 7 et 10 utilisent le même plugin. Durée : 2 h (formulaire) + 20 min (Turnstile) + 20 min (FluentSMTP) = 2 h 40. Critère « fait » : test réel de bout en bout réussi (3.8).

Insertion dans la page : Divi → section « Formulaire » → Module Code → coller `[fluentform id="1"]` (remplacer 1 par l'ID affiché dans Fluent Forms → Tous les formulaires); onglet Avancé de la section → ID CSS = `soumission`.

| Ordre | Champ | Type | Obligatoire | Validation | Texte d'aide |
|---|---|---|---|---|---|
| 1 | Date de l'événement | Date (calendrier) | Oui | Date ≥ aujourd'hui (champ Date → Avancé → Date minimale = aujourd'hui; si l'option n'existe pas dans la version gratuite, laisser libre et filtrer à la qualification, section 8) | « Une seule date; on confirme la disponibilité. Moins de 5 jours? Appelle-nous : 514-559-1893. » |
| 2 | Mot ou lettres voulus | Texte court | Oui | 1–30 caractères | « Ex. : LOVE, 40, EMMA, 2027 » |
| 3 | Nombre de pièces (lettres/chiffres) | Nombre | Oui | 1–20 | « Compte chaque lettre et chaque chiffre. » |
| 4 | Ville ou code postal | Texte court | Oui | 3–40 caractères | « Sert à calculer la livraison. » |
| 5 | Ramassage ou livraison | Boutons radio | Oui | Une valeur | Options exactes : « Livraison à mon adresse » / « Ramassage à Sainte-Thérèse » |
| 6 | Type d'événement | Liste déroulante (valeur par défaut vide) | Oui | Une valeur | Les 9 valeurs exactes de la section 2, dans cet ordre : Anniversaire (40e, 50e, autre) / Mariage ou fiançailles / Party de bureau, reconnaissance, Noël corpo / Baby shower ou révélation / Gala, OBNL, levée de fonds / Soirée à thème (Paris, Vegas) / Fête d'enfant, prénom / Jour de l'An 2027 / Autre |
| 7 | Nom | Texte court | Oui | 2–60 caractères | — |
| 8 | Téléphone | Téléphone | Oui | Minimum 10 chiffres, format libre (accepter tirets, espaces et parenthèses; aucun masque strict, sinon « 514-559-1893 » tapé avec tirets est refusé et le lead est perdu) | « Cellulaire de préférence (on peut te texter). » |
| 9 | Courriel | Courriel | Oui | Format courriel | « La soumission arrive ici. » |
| 10 | Notes | Zone de texte | Non | ≤ 500 caractères | « Jeux géants, tables, ballons? Dis-le ici. » |
| 11 | Consentement (Loi 25) | Case à cocher (non précochée), juste au-dessus du bouton Envoyer | Oui | Doit être cochée | Texte exact ci-dessous, avec lien vers /politique-de-confidentialite. Elle couvre seulement la soumission et son suivi (finalité nécessaire), pas le marketing |
| 12 | Nouveautés et promos (facultatif) | Case à cocher (non précochée) | Non | — | Texte exact ci-dessous (consentement exprès LCAP : n'expire pas; la demande de soumission donne déjà le consentement tacite de 6 mois pour les relances J+2 / J+5, section 8) |
| 13–17 | utm_source, utm_medium, utm_campaign, utm_content, utm_term | Champ caché (un par UTM) | — | Valeur par défaut à taper : `{get.utm_source}`, `{get.utm_medium}`, `{get.utm_campaign}`, `{get.utm_content}`, `{get.utm_term}` | Invisibles; repris dans le courriel de notification (vides = lead organique/direct) |
| 18 | Turnstile | Champ Turnstile (juste avant le bouton Envoyer) | — | Vérification automatique | — |

Noms internes des champs (Fluent Forms → champ → Avancé → Nom) : `date_evenement`, `mot`, `nb_pieces`, `ville`, `livraison`, `type_evenement`, `nom`, `telephone`, `courriel`, `notes`, `consentement`, `optin_promo`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`.

```
Case obligatoire (ligne 11, texte exact) : « J'ai lu la politique de confidentialité et j'accepte qu'Évenox utilise mes coordonnées pour préparer ma soumission et en assurer le suivi (courriel, texto ou téléphone). » (les mots « politique de confidentialité » sont un lien vers https://evenox.ca/politique-de-confidentialite). Message d'erreur si non cochée : « Coche la case pour qu'on puisse te répondre. »

Case facultative (ligne 12, texte exact) : « J'accepte de recevoir les nouveautés et promos d'Évenox par courriel (désabonnement en 1 clic). »

Confirmation : Fluent Forms → Réglages et intégrations → Réglages de confirmation → Type = « Rediriger vers une URL » → https://evenox.ca/merci. Aucun message sur la page du formulaire (Fluent Forms fait soit un message, soit une redirection, jamais les deux). Le message est le texte de la page /merci (3.1).

Notification 1 (à toi) : Fluent Forms → Réglages et intégrations → Notifications par courriel → destinataire evenox.ca@gmail.com, Répondre à = {inputs.courriel}, objet exact :
LEAD LETTRES – {inputs.date_evenement} – {inputs.ville} – {inputs.utm_source}
Corps : {all_data} (tous les champs, UTM, consentement et optin_promo inclus; la valeur optin_promo est reportée dans Booqable en note « OPTIN=oui » ou « OPTIN=non », voir 3.4; la date du courriel = date du lead, donc date de départ des 6 mois LCAP si OPTIN=non).

Notification 2 (au lead, transactionnelle) : destinataire {inputs.courriel}, objet « Évenox – ta demande est reçue », corps :
« Reçu! Tu reçois ta soumission Booqable par courriel en moins de 24 h. Une question d'ici là? 514-559-1893. — Alexandre, Évenox, 215 boul. René-A.-Robert, Sainte-Thérèse »
```

Pourquoi une case obligatoire : elle documente le consentement Loi 25 (preuve horodatée dans Fluent Forms → Entrées) au prix d'une petite perte de conversion acceptée (hypothèse). Règle de retrait : si le taux page → lead est < 5 % après 2 semaines (bilan du lundi 12 octobre, cible 8 %, H13), remplacer la case par un texte non cochable au même endroit (« En envoyant ce formulaire, tu acceptes… ») : la demande de soumission reste un consentement tacite LCAP de 6 mois et la politique de confidentialité reste liée.

Livraison des courriels (le NO-GO en dépend) : WordPress envoie par défaut via PHP mail(), souvent non livré ou classé pourriel vers Gmail. Installer **FluentSMTP (gratuit, même éditeur)** → Connexion « Autre SMTP » → hôte `smtp.gmail.com`, port 465, chiffrement SSL, nom d'utilisateur evenox.ca@gmail.com, mot de passe = un « mot de passe d'application » Google (myaccount.google.com → Sécurité → Validation en deux étapes → Mots de passe des applications → nom « FluentSMTP »; exige la validation en deux étapes déjà activée en 3.6; hypothèse : option disponible sur un compte Gmail personnel) → FluentSMTP → Test → « Envoyer un courriel de test » reçu dans la boîte de réception. Si le courriel de notification n'arrive pas dans les 5 minutes pendant le test, c'est ici que ça se règle; en secours, les entrées restent visibles dans Fluent Forms → Entrées. Ajouter un filtre Gmail (objet contient « LEAD LETTRES ») → libellé « Leads-ads » + marquer comme important, et activer les notifications push de l'appli Gmail pour ce libellé, pour tenir le SLA < 4 h ouvrables (section 8).

Anti-spam : Cloudflare Turnstile (gratuit). Étapes : 1) créer un compte gratuit sur dash.cloudflare.com → Turnstile → Ajouter un widget → domaine `evenox.ca`, mode « Géré » → copier « Clé du site » et « Clé secrète »; 2) WordPress → Fluent Forms → Réglages globaux → Sécurité → Turnstile → coller les deux clés → Enregistrer; 3) ajouter le champ « Turnstile » au formulaire (ligne 18). Champ piège invisible anti-robots (honeypot, « pot de miel ») : Fluent Forms → Réglages globaux → Sécurité → Honeypot = Activé. Pas de reCAPTCHA v2 (perte de conversions mobile, hypothèse). Délai de réponse annoncé partout : « soumission en 24 h » (SLA réel : section 8).

### 3.3 Bloc Créas (12 fiches, produites en 2 vagues)

Specs communes : feed 1:1 = 1080×1080 px; feed 4:5 = 1080×1350 px (Meta recommande maintenant 1440×1800 pour l'image Facebook Feed : exporter le gabarit 4:5 en 1440×1800, le 1080×1350 reste accepté); Stories/Reels 9:16 = 1080×1920 px avec zones sûres 2026 : rien d'important dans les 270 px du haut (14 %), les 670 px du bas (35 %) ni les 65 px de chaque côté (6 %); en pratique, texte à l'écran centré entre 270 et 1 250 px de hauteur. Google : titres ≤ 30 caractères, descriptions ≤ 90 (copy en section 5); images d'annonce 1,91:1 (1200×628) et 1:1 (1200×1200); logo 1:1 (1200×1200). Texte à l'écran en français, gros, ≤ 6 mots. Les mots formés par les lettres sur les photos (LOVE, MERCI) sont le mot choisi par le client et photographié, pas du texte publicitaire; tout texte incrusté et toute copy restent en français (Loi 96).

Avant la séance photo — inventaire lettres (Booqable → Produits, 30 min) : noter le nombre d'exemplaires de chaque lettre et chiffre; confirmer 2×M (EMMA), 2×2 + 1×0 + 1×7 (2027), N-O-E-L, L-O-V-E, M-E-R-C-I, 4-0, P-A-R-I-S, 2×B + A + Y (BABY). Remplacements si une pièce manque : EMMA → NOAH (aucune lettre en double); 2027 → deux prises « 20 » et « 27 » assemblées dans Canva; NOËL → NOEL sans tréma si le Ë n'existe pas en stock. Ce comptage alimente aussi la question bloquante H9 (nombre de sets).

| [ ] | Nom | Formats | Angle | Texte à l'écran | Source |
|---|---|---|---|---|---|
| [ ] | L-anniv-40 | 1:1 + 4:5 + 9:16 | 40e / 50e, effet wow à l'arrivée | « 40 » allumé : « Un 40e qu'on n'oublie pas » | Entrepôt mis en scène (par défaut); remplacer par une photo d'événement client seulement si la permission écrite arrive avant mercredi 23 |
| [ ] | L-corpo-merci | 1:1 + 9:16 | Party de bureau / Noël corpo | « MERCI » : « Party de Noël clé en main » | Entrepôt, fond noir, ambiance |
| [ ] | L-mariage-love | 4:5 + 9:16 | Mariage, photo de couple | « LOVE » : « Livré, installé, allumé » | Photo d'événement (mariage, permission écrite) |
| [ ] | L-prenom | 1:1 + 9:16 | Shower / naissance, prénom | « EMMA » (ou NOAH) : « Son prénom en lumière » | Entrepôt |
| [ ] | L-chiffres-2027 | 1:1 + 9:16 | Jour de l'An, chiffres | « 2027 » : « Réservez votre 31 décembre » | Entrepôt (photo de nuit) |
| [ ] | L-noel | 4:5 + 9:16 | Noël familial / corpo | « NOËL » : « Dates de décembre limitées » | Entrepôt avec sapin |
| [ ] | J-jeux-geants | 1:1 + 9:16 | Jeux géants en complément | « Ajoutez les jeux géants » | Vidéo/photo d'événement extérieur |
| [ ] | L-paris | 1:1 + 9:16 | Soirée à thème (angle de la section 2), retargeting seulement (section 4) | « PARIS » allumé : « Ta soirée à thème, en lumière » | Entrepôt, fond sombre; seulement si P, A, R, I, S sont en stock; vague 2 |
| [ ] | L-obnl-gala | 1:1 + 9:16 | Gala / OBNL (réserve, retargeting) | « MERCI » : « Merci à vos donateurs » | Entrepôt, même photo que L-corpo-merci; vague 2 |
| [ ] | L-baby | 4:5 + 9:16 | Baby shower (réserve, retargeting) | « BABY » : « La photo qu'on garde » | Entrepôt; seulement si deux B sont en stock; vague 2 |
| [ ] | L-anniv-40_reel, L-mariage-love_reel, J-jeux-geants_reel | 9:16, 6–8 s, son activé | Allumage, livraison, réaction des invités | Voir scripts section 5 | Vidéo téléphone, entrepôt + événement |
| [ ] | G-logo + G-images | Logo 1:1 (1200×1200); images 1,91:1 + 1:1 (2 minimum) | Composants Google « Nom et logo d'entreprise » et « Image » | Aucun texte incrusté | Logo Évenox; meilleures photos de L-anniv-40 et L-mariage-love. Un compte Google Ads neuf n'est parfois pas admissible aux composants Image tout de suite (hypothèse à vérifier dans Composants → Image) : on prépare les fichiers, ça ne bloque pas le lancement |

Deux vagues, pour ne pas diluer 26 $/jour sur 10 pubs (à 8–11 pubs dans un seul ensemble, chaque pub recevrait ≈ 2–3 $/jour et aucune n'accumulerait de signal; Meta en pousserait 1–2 au hasard) :

- **Vague 1 — obligatoire avant le lundi 28 septembre** (aligné sur le lancement de la section 4 : 5 pubs actives au froid) : L-anniv-40, L-corpo-merci, L-mariage-love, L-prenom, L-chiffres-2027 en 4:5 + 9:16 (le 1:1 est facultatif : Meta recadre le 4:5), Reel L-anniv-40_reel, G-logo + G-images. Montage : 4 h (hypothèse).
- **Vague 2 — semaine 2 (5–11 octobre), 3 h** : L-noel (entre au froid le lundi 26 octobre), J-jeux-geants et L-paris (retargeting « EVX_META_RETARGETING », à partir du 12 octobre), L-obnl-gala et L-baby (réserve retargeting, montées seulement si les lettres sont en stock), Reels L-mariage-love_reel et J-jeux-geants_reel. Ces fichiers remplacent aussi les pubs coupées par la règle CPL (section 4). Les photos de la vague 2 se prennent quand même à la séance du lundi 21 : une seule séance, deux montages.

Outil : Canva (gratuit), un gabarit par format, export PNG (vidéo : MP4). Critère « fait » : dossier Drive « EVX_Créas_S0 » avec les fichiers nommés `L-anniv-40_1x1.png`, `L-anniv-40_4x5.png`, `L-anniv-40_9x16.png`, `L-anniv-40_reel.mp4`, etc.; chaque fichier 9:16 vérifié avec un calque Canva « zones sûres » (rectangle-guide de 1080×980 px placé à 270 px du haut et 65 px de chaque côté) superposé puis masqué avant export. Durée semaine 0 : inventaire 30 min + 1 séance photo entrepôt de 3 h (lundi 21 en soirée, 18 h 30 – 21 h 30, porte de garage fermée et néons éteints; horaire exact en section 10) + 4 h de montage (vague 1) = 7 h 30; vague 2 = 3 h en semaine 2, hors du total de la semaine 0. Élargir la séance de 30 min pour les photos de la fiche Google (jeux, mobilier, camion de livraison, façade : 3.5) si le stock de photos existantes ne les couvre pas. La séance photo passe avant la page (voir 3.9).

### 3.4 Bloc Tracking (résumé; détail en section 7)

Outils pixel/balise : **PixelYourSite (gratuit)** pour le Pixel Meta et ses événements; **Site Kit by Google (gratuit)** pour la balise Google Ads (la balise Google est réservée à la version payante de PixelYourSite, section 7). API Conversions Meta : bouton gratuit dans le Gestionnaire d'événements (pas besoin de PixelYourSite Pro). Outil consentement : **Complianz (gratuit)** : région « Canada », langue de la bannière « Français », deux boutons de même taille « Accepter » / « Refuser » sur le premier écran (Complianz → Bannière de cookies → Boutons), blocage de PixelYourSite et de Site Kit avant consentement (Complianz → Intégrations → Plugins → PixelYourSite : activé et Google Site Kit : activé; et PixelYourSite → Consentement → « Complianz détecté » affiché), Google Consent Mode v2 activé (Complianz → Intégrations → Services → Google Consent Mode : activé; ad_storage, analytics_storage, ad_user_data, ad_personalization = refusés par défaut) pour que Google modélise les conversions des refus. Meta n'a pas d'équivalent : on s'attend à perdre une part des événements Lead, d'où le champ « Source lead » dans Booqable comme vérité (H10).

| [ ] | Quoi | Où | Durée | Critère « fait » |
|---|---|---|---|---|
| [ ] | Créer le jeu de données (pixel) « Évenox – Site » et le rattacher au compte publicitaire | business.facebook.com → Tous les outils → Gestionnaire d'événements → Connecter des sources de données → Web → Meta Pixel → nom « Évenox – Site » → copier l'ID à 15–16 chiffres. Puis Paramètres du Portefeuille → Sources de données → Jeux de données → « Évenox – Site » → Attribuer des actifs → compte publicitaire Évenox | 10 min | ID visible dans Gestionnaire d'événements → Paramètres; le jeu de données apparaît sous le compte publicitaire |
| [ ] | Vérifier le domaine evenox.ca | Paramètres du Portefeuille d'entreprise → Sécurité de la marque → Domaines → Ajouter → méthode « Balise meta » → coller dans Divi → Options du thème → Intégration → « Ajouter du code au <head> » | 15 min | Statut « Vérifié » |
| [ ] | Pixel Meta installé sur tout le site | WordPress → PixelYourSite → Meta → Meta Pixel ID → coller l'ID → Enregistrer | 20 min | Extension Chrome « Meta Pixel Helper » montre PageView vert sur la page lettres (après clic « Accepter » sur la bannière) |
| [ ] | Événement « Lead » déclenché uniquement sur `/merci` | PixelYourSite → Événements → Ajouter → Déclencheur « Visite de page », URL contient `/merci` → cocher Meta, événement « Lead » → option « Déclencher une seule fois par chargement » si offerte (sinon la déduplication Meta par event_id et le comptage Google « Une » couvrent les rafraîchissements) → Enregistrer | 20 min | Gestionnaire d'événements → Tester les événements affiche « Lead » quand /merci se charge |
| [ ] | Événement d'optimisation Meta = « Lead » seulement (jamais PageView ni ViewContent) | Se règle dans l'ensemble « FROID_RiveNord-Laval_25-55 » (section 4) : Lieu de conversion « Site web », jeu de données « Évenox – Site », événement « Lead ». Ici : vérifier que l'événement Lead est bien listé dans Gestionnaire d'événements → Aperçu après le test | 5 min | « Lead » apparaît dans la liste des événements du jeu de données |
| [ ] | API Conversions activée (gratuit, un clic) | Gestionnaire d'événements → « Évenox – Site » → Paramètres → bouton « Activer l'API Conversions » (Meta gère la déduplication) — le même jour que le pixel | 10 min | Dans Aperçu, l'événement Lead affiche les deux méthodes « Navigateur » et « Serveur »; Qualité de correspondance (EMQ) ≥ 5/10 (hypothèse de seuil) |
| [ ] | Balise Google Ads (Site Kit) + action de conversion « Lead formulaire » sur `/merci` | Google Ads → Objectifs → Conversions → + Nouvelle action de conversion → Site web → saisir `evenox.ca` → Analyser : l'écran affiche l'ID « AW-… » (le noter) → section « Créer des actions de conversion à partir d'URL » : Consultation de page, « L'URL contient » `evenox.ca/merci`, nom « Lead formulaire », catégorie « Envoyer un formulaire pour un prospect », objectif Principal → Enregistrer; puis ouvrir l'action → Paramètres : comptage « Une », valeur « Ne pas utiliser de valeur », fenêtre de conversion après clic = 30 jours (cohérent avec H10). Balise : WordPress → Extensions → Ajouter → Site Kit by Google → Se connecter avec le compte Google propriétaire de Google Ads → Paramètres → Connecter d'autres services → Ads → coller l'ID AW- → Enregistrer (Site Kit pose la balise sur tout le site; Complianz → Intégrations → Plugins → Google Site Kit : activé). Détail en section 7 | 30 min | Google Tag Assistant (tagassistant.google.com → Ajouter un domaine → evenox.ca/merci) affiche la balise AW-… et la conversion « Lead formulaire » au chargement de /merci; dans Google Ads → Objectifs → Conversions → Résumé, le statut passe de « Non vérifiée » à « Aucune conversion récente » sous 24 h (= balise détectée). « Enregistre des conversions » n'apparaît qu'après le premier clic payant : vérifier le mardi 29 septembre, c'est normal avant |
| [ ] | Conversion « Clic téléphone site » (clic sur `tel:`), action Secondaire — PHASE 2, rien à faire en semaine 0 | Se crée seulement si les leads téléphone dépassent 20 % des leads du Sheet au lundi 26 octobre (exige PixelYourSite Pro; chemin complet en section 7). « Lead formulaire » reste la seule action Principale du site, sinon Google optimise sur des clics de numéro accidentels | 0 | Aucun critère en semaine 0 |
| [ ] | Conversion « Appel depuis annonce » (composant Appel), action Secondaire | Google Ads → Objectifs → Conversions → + Nouvelle action → Appels téléphoniques → « Appels depuis des annonces utilisant des assets d'appel » → nom « Appel depuis annonce », catégorie « Prospect par téléphone », durée minimale 30 s (une demande de disponibilité dure souvent moins de 60 s, hypothèse; ajuster après 4 semaines), sans valeur, comptage « Une », objectif Secondaire (observation; « Lead formulaire » reste la seule action Principale). Dans le composant Appel de la campagne : « Rapports d'appels » = Activé. Le numéro de transfert Google remplace 514-559-1893 seulement dans l'annonce, jamais sur le site (NAP intact) | 10 min | Action créée en secondaire; premier appel compté en semaine 1 (rien à tester avant : elle ne compte que les appels issus d'une annonce) |
| [ ] | UTM sur 100 % des liens d'annonces (convention section 7) | Google Sheet « EVX – Suivi ads », onglet « Liens UTM ». Exemple prêt à copier : `https://evenox.ca/lettres-illuminees?utm_source=meta&utm_medium=paid_social&utm_campaign=lettres_froid&utm_content=L-anniv-40`. Côté Meta, coller les UTM dans le champ « Paramètres d'URL » de chaque pub avec `utm_content={{ad.name}}` (Meta remplace par le nom exact de la pub, zéro faute de copier-coller); toutes les pubs pointent sur `/lettres-illuminees`, jamais sur l'accueil (les champs cachés ne captent les UTM que sur la page d'atterrissage) | 30 min | Chaque pub et chaque annonce a son URL finale collée dans la feuille |
| [ ] | Champ CLIENT « Source lead » dans Booqable | Booqable → Paramètres → Champs personnalisés → Clients → Ajouter → type « Liste déroulante », valeurs exactes : Meta, Google, Retargeting, Organique, Référence, Récurrent, Autre; « Afficher sur devis/factures » = Non (le client ne doit pas voir « Meta ») Règle de correspondance UTM → valeur (lue dans le courriel « LEAD LETTRES ») : utm_source=meta + utm_campaign=lettres_froid → Meta; utm_campaign=lettres_retarg → Retargeting; utm_source=google → Google; aucun UTM → Organique, sauf si le client dit « référé par… » → Référence, ou s'il a déjà loué → Récurrent; téléphone sans précision → demander « comment nous as-tu trouvés? » et choisir. Une seule source par lead, décidée à la qualification (H10) | 15 min | Champ rempli (= Meta) sur une fiche client test « TEST LEAD » |
| [ ] | Tags et note de COMMANDE dans Booqable | Sur une commande test : Commande → Tags → taper `ADS-META` → Entrée (idem `ADS-GOOGLE` sur une 2e commande test); Commande → Notes → ajouter la ligne exacte `SRC=meta \| CAMP=lettres_froid \| CREA=test \| LEAD=2026-09-25` et une 2e ligne `OPTIN=non` | 10 min | Tag et deux lignes de note visibles sur la commande test |
| [ ] | Bannière de consentement Loi 25 en ligne (réglages ci-dessus) | Complianz → Assistant | 45 min | Sans clic « Accepter », Pixel Helper et Tag Assistant ne voient rien; après clic, PageView apparaît; rien après « Refuser »; Tag Assistant montre `ad_storage = denied` avant le clic et `granted` après; boutons Accepter et Refuser de même taille sur mobile; Google Ads → Objectifs → Conversions → Diagnostic affiche Consent Mode « Actif » (peut prendre 24–48 h) |
| [ ] | Page `evenox.ca/politique-de-confidentialite` (Loi 25) | Complianz → Documents → Politique de confidentialité (répondre à l'assistant : finalités = soumission, suivi, publicité; témoins = Meta, Google; durée de conservation; droits d'accès et de retrait) + ajouter la ligne exacte : « Responsable de la protection des renseignements personnels : Alexandre Séguin, propriétaire, evenox.ca@gmail.com, 514-559-1893 » | 45 min | Page en ligne (s'ouvre en navigation privée); lien cliquable depuis le pied de page Divi, la case de consentement du formulaire et la bannière Complianz |
| [ ] | Audiences personnalisées créées (elles commencent à se remplir dès la semaine 0 pour que « EVX_META_RETARGETING » ait quelque chose à cibler) | Gestionnaire de publicités → Audiences → Créer → Site web : « Visiteurs lettres-illuminees 30 j » et « Visiteurs /merci 180 j » (à exclure); Engagement : « Page FB 90 j », « Compte IG 90 j » (noms exacts et rétention en section 4 : /merci = 180 j) | 20 min | 4 audiences en statut « Préparation » ou « Prête » |

Sous-total 3.4 : 5 h 05.

### 3.5 Bloc Google Business Profile (fiche « Évenox », 215 boul. René-A.-Robert, Sainte-Thérèse)

| [ ] | Quoi | Valeur à saisir | Durée | Critère « fait » |
|---|---|---|---|---|
| [ ] | Fiche revendiquée et VALIDÉE (à faire lundi 21 dès 9 h : tout le reste du bloc et le lien Google Ads en dépendent) | business.google.com → si le statut n'est pas « Validée », lancer la validation (vidéo) le lundi 21; délai 3–7 jours (hypothèse). Si non validée le 27 : lancer Google sans le composant Lieu et l'ajouter dès validation | 20 min | Mention « Votre fiche est validée » |
| [ ] | Catégorie principale | « Service de location de matériel pour fêtes » (choisir le libellé exact proposé par Google) | 10 min | Enregistrée |
| [ ] | Catégories secondaires | « Service de location de mobilier »; si ce libellé n'existe pas : « Agence de location d'équipement » (vérifier le libellé exact dans le menu). Pas plus de 2 secondaires | 10 min | Enregistrées |
| [ ] | Adresse et zone de service (fiche hybride) | « Afficher l'adresse aux clients » = Oui (le ramassage à Sainte-Thérèse est offert, aux heures indiquées sur la fiche) + 16 zones de service = H12 : Sainte-Thérèse, Blainville, Boisbriand, Rosemère, Lorraine, Bois-des-Filion, Sainte-Anne-des-Plaines, Mirabel, Saint-Eustache, Deux-Montagnes, Saint-Jérôme, Terrebonne, Mascouche, Laval, Montréal, Repentigny | 15 min | Adresse visible + 16 zones listées |
| [ ] | Photos | Cible 30 (10 lettres, 8 jeux, 6 mobilier, 4 livraison/équipe, 2 façade) | 1 h | ≥ 30 photos publiées |
| [ ] | Services listés | Lettres illuminées géantes, Chiffres lumineux, Jeux géants, Tables et chaises, Vaisselle et nappes, Livraison et installation — sans prix (« soumission en 24 h ») | 20 min | 6 services visibles |
| [ ] | Description (≤ 750 car.) | Location de lettres illuminées géantes, jeux géants, tables, chaises et vaisselle pour anniversaires, mariages et événements corporatifs. Basés à Sainte-Thérèse; livraison et installation sur la Rive-Nord, à Laval et à Montréal. Soumission en 24 h. | 10 min | Publiée |
| [ ] | Questions-réponses (5, posées et répondues par toi, textes ci-dessous) | Fiche → Questions et réponses | 30 min | 5 Q-R visibles |
| [ ] | Plan d'avis | Lien court « Laisser un avis » copié depuis la fiche (Demander des avis) → modèle Gmail « Avis » → envoyé le lendemain de chaque événement; cible : 1 nouvel avis/semaine à partir de novembre (hypothèse : les événements ont lieu 2–6 semaines après le dépôt, donc peu d'avis possibles en octobre) | 15 min de setup | Modèle Gmail « Avis » enregistré avec le lien |
| [ ] | Publication hebdo | 1 post Google chaque lundi (photo de la fin de semaine + « soumission en 24 h »); premier post publié le vendredi 25 septembre pour être vérifiable au NO-GO; rappel Google Agenda récurrent « Post Google » chaque lundi 9 h | 10 min/sem | Post du 25 septembre en ligne + rappel Agenda créé |

Sous-total 3.5 : 3 h 20.

```
Q-R exactes (sans prix) :
1. Livrez-vous? — Oui, livraison et installation sur la Rive-Nord, à Laval et à Montréal; frais selon l'adresse, indiqués dans la soumission. Ramassage possible à Sainte-Thérèse.
2. Combien de jours dure une location? — Habituellement la fin de semaine (livraison la veille ou le jour même, reprise le lendemain). On s'adapte aux événements de semaine.
3. Combien d'avance pour réserver? — Le plus tôt possible : un set de lettres n'est loué qu'une fois par fin de semaine. Les dates de décembre partent vite.
4. Faut-il un dépôt? — Oui, un dépôt à la réservation confirme la date; le montant est indiqué dans la soumission Booqable.
5. Les lettres vont-elles à l'extérieur? — Oui, à l'abri de la pluie (chapiteau, terrasse couverte); on le précise dans la soumission selon le lieu.

Script de demande d'avis (texto ou courriel, 2 phrases + signature LCAP) :
« Merci d'avoir choisi Évenox pour [événement]! Si les lettres ont fait leur effet, un avis Google de 30 secondes nous aide énormément : [lien court]. »
— Alexandre, Évenox · 514-559-1893 · Réponds STOP pour ne plus recevoir de messages.
```

### 3.6 Bloc Comptes

| [ ] | Quoi | Outil | Durée | Critère « fait » |
|---|---|---|---|---|
| [ ] | Portefeuille d'entreprise Meta (ex-Business Manager) au nom « Évenox », avec page Facebook et compte Instagram professionnel rattachés; tableau de bord quotidien = Meta Business Suite | business.facebook.com → Paramètres → Comptes → Pages / Comptes Instagram | 30 min | Les deux actifs apparaissent sous « Comptes » |
| [ ] | Compte publicitaire en CAD, fuseau America/Toronto (ni l'un ni l'autre ne se change ensuite), carte de crédit ajoutée, seuil de facturation par défaut. Meta peut exiger la vérification de l'entreprise avant de diffuser des pubs Prospects : Paramètres → Centre de sécurité → Vérification de l'entreprise, avec une facture (électricité, téléphone) au nom d'Évenox et à l'adresse du 215 René-A.-Robert; la lancer lundi 21 si le bouton apparaît (délai 1–5 jours, hypothèse) | Paramètres → Comptes → Comptes publicitaires → Ajouter → Créer un compte publicitaire | 20 min | Statut « Actif », paiement « Valide » |
| [ ] | Validation en deux étapes (2FA) activée sur ton profil Facebook + un admin secondaire (conjoint·e ou proche de confiance) sur le Portefeuille | Facebook → Paramètres → Sécurité et connexion → Authentification à deux facteurs; Portefeuille → Paramètres → Personnes → Ajouter → rôle « Tout contrôler » | 15 min | 2 admins visibles, validation en deux étapes « Activée » |
| [ ] | Google Ads en **mode expert** : au premier écran, cliquer « Passer en mode expert », PUIS le lien « Créer un compte sans campagne » en bas (sinon Google force une campagne intelligente); devise CAD, fuseau America/Toronto (non modifiables ensuite), paiement ajouté, validation en deux étapes sur le compte Google | ads.google.com | 30 min | Compte sans campagne « intelligente », facturation « Active » |
| [ ] | Lien Google Ads ↔ Fiche d'établissement Google (pour le composant « Lieu » seulement) | Google Ads → Outils (icône clé) → Gestionnaire de données → Produits connectés → Fiche d'établissement Google → Associer → accepter la demande envoyée au courriel propriétaire de la fiche (business.google.com); synchronisation 24–48 h. Le composant « Appel » se crée à part, sans fiche : Composants → + → Appel → 514-559-1893 | 10 min | Statut « Associé »; composant « Lieu » disponible sous Composants après 24–48 h (exige la fiche validée, 3.5) |
| [ ] | Nom, adresse, téléphone (NAP) identiques partout : « Évenox · 215 boul. René-A.-Robert, Sainte-Thérèse · 514-559-1893 » sur le site, la fiche Google, Facebook, Instagram et Booqable | Tous | 20 min | Copier-coller exact, même format de téléphone |

Sous-total 3.6 : 2 h 05.

### 3.7 Plugins WordPress-Divi (un choix par fonction)

| Fonction | Plugin | Coût (hypothèse) | Pourquoi celui-là |
|---|---|---|---|
| Formulaire | Fluent Forms | Gratuit | Champs Date et Téléphone, champs cachés UTM, redirection /merci, Turnstile et notifications dans la version gratuite |
| Envoi de courriel | FluentSMTP | Gratuit | Envoi par smtp.gmail.com avec mot de passe d'application : les notifications de leads arrivent dans la boîte de réception, pas dans Pourriel |
| Pixel Meta | PixelYourSite | Gratuit | Pixel Meta et événements sur URL sans code; API Conversions activée côté Meta, gratuitement |
| Balise Google Ads | Site Kit by Google | Gratuit | Pose la balise AW- sans code; la balise Google Ads est réservée à la version payante de PixelYourSite (section 7) |
| Consentement Loi 25 | Complianz | Gratuit | Région Canada, blocage des pixels avant consentement, bannière en français, Consent Mode v2, politique de confidentialité générée |
| SEO / noindex | Yoast SEO | Gratuit | Titre SEO, méta description et noindex de /merci dans la même boîte sous l'éditeur. Info qui change le choix : si Rank Math est déjà actif, on le garde (mêmes champs) |
| Vitesse | WP Rocket + Imagify | ≈ 60 $ US/an (Imagify gratuit jusqu'à 20 Mo/mois) | Cache + compression en 3 clics; conversion des photos au format d'image léger WebP. Deux plugins mais une seule fonction « vitesse » : WP Rocket seul ne compresse pas les images |

Installation des 8 plugins (WordPress → Extensions → Ajouter → rechercher → Installer → Activer) : ≈ 1 h. À confirmer avant d'installer : que le site est bien WordPress + Divi et qu'aucun plugin de formulaire, pixel, consentement, SEO ou cache n'est déjà actif (WordPress → Extensions → Extensions installées). Si un équivalent existe déjà, on garde l'existant et on l'utilise pour la même fonction; deux plugins pour une même fonction = conflits.

### 3.8 Critère NO-GO (à lire deux fois)

Aucune dépense publicitaire — pas 1 $ — tant que l'un de ces quatre points n'est pas prouvé :

1. **Page** : `evenox.ca/lettres-illuminees` en ligne, score mobile ≥ 70, CTA téléphone fonctionnel, aucun prix affiché.
2. **Formulaire testé de bout en bout, en réel, en deux passages** :
   - Passage A (« Accepter ») : Alexandre ouvre, sur son ordinateur dans Chrome (Pixel Helper et Tag Assistant n'existent pas sur mobile), le lien `https://evenox.ca/lettres-illuminees?utm_source=meta&utm_medium=paid_social&utm_campaign=lettres_froid&utm_content=test&utm_term=test` → clique « Accepter » sur la bannière Complianz AVANT de remplir (sinon aucun événement ne part, c'est normal) → remplit le formulaire avec un lead fictif nommé « TEST LEAD » → la page `/merci` s'affiche → le courriel « LEAD LETTRES – … – meta » arrive dans la boîte de réception Gmail (pas dans Pourriel) avec les 5 UTM en moins de 5 minutes → l'événement « Lead » est visible dans Meta (Gestionnaire d'événements → Tester les événements, avec « Navigateur » et « Serveur ») → Google Tag Assistant affiche la conversion « Lead formulaire » sur /merci ET le statut Google Ads passe à « Aucune conversion récente » sous 24 h. « Enregistre des conversions » n'est attendu qu'en semaine 1, après le premier clic payant (vérification mardi 29 septembre). Puis refaire le formulaire et le CTA `tel:` depuis le téléphone en données cellulaires (pas le Wi-Fi du bureau) : 2e courriel reçu, composeur ouvert.
   - Passage B (« Refuser ») : même lien, navigation privée, clic « Refuser » → formulaire rempli → courriel reçu avec UTM MAIS aucun événement Lead dans Meta ni Google. Ça prouve que le blocage Loi 25 fonctionne.
   - Ensuite : supprimer les entrées test (Fluent Forms → Entrées → sélectionner → Supprimer), la fiche client test dans Booqable (Clients → TEST LEAD → Supprimer, ce qui retire aussi ses commandes test) et archiver les courriels test sous le libellé Gmail « Tests-tracking » (ne pas les compter dans le « EVX – Suivi ads »).
3. **Booqable** : le champ « Source lead » existe, a été rempli sur la fiche client test, et une commande test porte le tag ADS-META + la ligne de note SRC=… (avant la suppression du point 2).
4. **Loi 25** : bannière Complianz active (Accepter / Refuser de même taille, passage B réussi) et page /politique-de-confidentialite en ligne avec le nom du responsable, liée sous le formulaire. Ce 4e point ne contredit pas la décision 6 : il en fait partie, « tracking prêt » veut dire fonctionnel ET légal (collecter des pixels sans consentement = sanctions CAI, section 9).

Non bloquants (on lance quand même s'ils traînent) : conversion « Appel depuis annonce », fiche Google validée (composant Lieu ajouté plus tard), composants Image Google, 3 avis Google.

Si un seul des quatre points manque : on décale le lancement, on ne « lance quand même pour voir ». Cinq jours de retard coûtent moins cher que deux semaines de données inutilisables (voir section 9).

### 3.9 Ordre de production et temps total

Ordre logique : 1) comptes + validation de la fiche Google lancée + Booqable + Drive/Sheet, puis séance photo le soir → 2) plugins, page + /merci + formulaire + bannière + politique de confidentialité → 3) tracking (pixel, API Conversions, Site Kit, conversions Google) + test NO-GO en deux passages → 4) montage des créas + copy Google → 5) audiences, campagnes publiées avec l'interrupteur sur « Désactivé », règles, dashboard, premier post Google → 6) revue go / no-go et outils de réponse → 7) armement dimanche soir (section 10). Les photos passent avant la page parce que la page, les créas et la fiche Google dépendent des images; la validation de la fiche part lundi parce qu'elle prend jusqu'à 7 jours. Horaires détaillés : section 10 (qui reprend ces chiffres).

| Jour (semaine 0) | Blocs | Détail des durées | Temps |
|---|---|---|---|
| Lundi 21 sept. | Comptes (3.6) + validation fiche Google lancée (3.5) + champ Booqable, Drive et Sheet (3.4) + envoi des demandes de permission (3.1) + inventaire lettres et séance photo le soir (3.3) | 4 h 15 + 3 h | 7 h 15 |
| Mardi 22 | Sauvegarde + plugins (3.7) + page, SEO, CTA (3.1) + formulaire, FluentSMTP, Turnstile (3.2) + /merci + bannière Complianz + politique de confidentialité (3.4) + vitesse et relecture (3.1) | 7 h | 7 h |
| Mercredi 23 | Tracking : jeu de données, pixel, Lead, API Conversions, Site Kit + conversions Google (3.4) + feuille Liens UTM + test NO-GO en deux passages et nettoyage (3.8) | 3 h 45 | 3 h 45 |
| Jeudi 24 | Montage des créas, vague 1 (3.3) + copy Google dans le Sheet (section 5) | 4 h | 4 h |
| Vendredi 25 | Audiences (3.4) + campagnes Meta et Google publiées avec l'interrupteur sur « Désactivé » (section 4) + règles automatiques + dashboard + premier post Google (3.5) | 6 h 25 | 6 h 25 |
| Samedi 26 | Revue go / no-go ligne par ligne (3.8) + modèles Gmail, filtres, boîte vocale, alerte texto, agenda (section 8) | 3 h | 3 h |
| Dimanche 27 | Armement de la mise en ligne, dernier test sur cellulaire (section 10) | 1 h | 1 h |

Total estimé : **≈ 32 h 25** sur la semaine 0 (hypothèse pour un non-expert; c'est le total du plan jour par jour de la section 10; la somme des sous-totaux par bloc ci-dessus donne 34 h 05 parce que certaines tâches se chevauchent d'un bloc à l'autre). Si c'est intenable : les photos et Q-R de la fiche Google (sauf la validation lancée lundi) et les composants Image de Google glissent en semaine 1 sans bloquer le lancement — ni les uns ni les autres ne sont dans le NO-GO — et la semaine 0 tombe à ≈ 29 h. Le test NO-GO du mercredi et la revue du samedi ne sautent jamais.

## 4. Plan Media (6–8 semaines)

Rappel du cadre : budget test 1 500 $/mois (H6) = Meta froid 800 $ (≈ 26 $/jour) + Google Recherche 500 $ (≈ 16,50 $/jour) + Retargeting Meta 150 $ (≈ 5 $/jour) + 50 $ de réserve. Rien ne se lance avant la checklist go / no-go (voir section 3) et le tracking en place (voir section 7). Les textes des pubs et des annonces sont en section 5; les règles de suivi post-lead en section 8. Tous les CPL, CTR, CPC et volumes de leads cités ici sont des hypothèses (H3, H7, H13) à remplacer par les chiffres réels du Sheet « EVX – Suivi ads » à partir du lundi 12 octobre.

Principe qui gouverne toute la section : **la vérité, c'est le Sheet (leads réels taggés dans Booqable), pas le CPL affiché par Meta ou Google.** Avec la bannière Loi 25, une part des leads réels n'est jamais vue par le Pixel ni par la balise Google (perte estimée ≈ 20–40 %, hypothèse à mesurer, voir 4.3). Les règles automatiques ci-dessous sont un filet de sécurité; les décisions kill / scale / verdict se prennent sur le CPL réel du Sheet.

### 4.1 Meta — campagne EVX_META_LETTRES_LEADS (froid)

**Objectif de campagne : « Prospects », lieu de conversion « Site web », jeu de données (Pixel) « Évenox – Site », événement « Lead ».** L'événement Lead se déclenche sur evenox.ca/merci (voir section 7). Pourquoi pas les autres objectifs :

- **Trafic** : Meta va chercher les gens qui cliquent le plus, pas ceux qui remplissent un formulaire. CPC bas, CPL terrible. Jamais pour un tunnel devis.
- **Formulaire instantané (formulaire dans Meta)** : leads plus nombreux mais plus « mous » (le formulaire est prérempli, les gens l'envoient sans intention). Ça reste le **plan B**, décidé au bilan du lundi 19 octobre (3 semaines complètes) : si le CPL Meta **réel** (dépense Meta ÷ leads Booqable « Source lead = Meta ») est > 60 $, tu crées un 2e ensemble « FROID_RiveNord-Laval_25-55_FI » (mêmes lieux, âges, audience, budget 13 $/jour; l'ensemble site descend à 13 $/jour pour comparer 2 semaines à budget égal; passer de 26 à 13 $ relance l'apprentissage de l'ensemble site, c'est accepté : c'est le prix du test), puis tu coupes le perdant le lundi 2 novembre. Réglages du formulaire : Type de formulaire → **« Intention plus élevée »** (écran de révision avant envoi); champs préremplis Courriel + Téléphone + Nom complet; 3 questions personnalisées obligatoires : Q1 (choix multiple) « Date de votre événement ? » → « Dans moins de 30 jours / 1 à 3 mois / Plus de 3 mois / Pas encore fixée »; Q2 (réponse courte) « Ville de l'événement ? »; Q3 (réponse courte) « Quels mots, chiffres ou symboles voulez-vous ? (ex. LOVE, 40, ♥) »; lien obligatoire vers evenox.ca/politique-de-confidentialite (voir section 3). Ces leads n'atterrissent PAS sur /merci et ne déclenchent pas le Pixel : ils arrivent dans Meta Business Suite → Centre de prospects. Active les notifications (Business Suite → Paramètres → Notifications → « Nouveaux prospects » : courriel + application mobile), traite-les comme les autres (section 8) et saisis-les dans Booqable avec Source lead = Meta, note « SRC=meta | CAMP=lettres_froid | CREA=FI | LEAD=date ». Le CPL de comparaison des deux ensembles vient du Sheet, pas de Meta.

**Structure exacte (mode « Création manuelle », pas « Configuration personnalisée »)**

| Niveau | Nom verrouillé | Réglage |
|---|---|---|
| Campagne | EVX_META_LETTRES_LEADS | Objectif Prospects; catégorie de publicité spéciale : aucune; **Budget de campagne Advantage+ (CBO) : désactivé** (un seul ensemble = le budget se met à l'ensemble) |
| Ensemble | FROID_RiveNord-Laval_25-55 | Lieu de conversion : Site web · Ensemble de données : « Évenox – Site » · Événement de conversion : Lead · Objectif de performance : « Maximiser le nombre de conversions » · Paramètre d'attribution : 7 jours après un clic, 1 jour après une vue · Facturation : impressions · Budget quotidien 26 $ · Date de début : 28 sept. 2026 06:00 (fuseau du compte America/Toronto) · « Contenu dynamique » (format flexible) : désactivé |
| Pubs (4 à 6 actives) | L-anniv-40, L-corpo-merci, L-mariage-love, L-prenom, L-chiffres-2027, L-noel | Format 4:5 (fils) + 9:16 (Stories/Reels); voir section 5 |

Au lancement du 28 septembre : 5 pubs actives (L-anniv-40, L-corpo-merci, L-mariage-love, L-prenom, L-chiffres-2027). L-noel entre le lundi 26 octobre (semaine 5). J-jeux-geants, L-paris, L-obnl-gala et L-baby sont réservés au retargeting (voir section 2). Au niveau de chaque pub : bouton « Améliorations Advantage+ » → **tout décocher** (superpositions, amélioration du texte, musique, recadrage, animation 3D, élargissement d'image) : avec la Loi 96 et un produit visuel, tu contrôles chaque pixel et chaque mot montrés. Paramètres d'URL de chaque pub (section « Suivi » → « Paramètres d'URL ») : `utm_source=meta&utm_medium=paid_social&utm_campaign=lettres_froid&utm_content={{ad.name}}` (voir section 7).

**Ciblage géographique** : Lieu → « Ajouter un rayon » → tape « 215 boul. René-A.-Robert, Sainte-Thérèse » → rayon **35 km** → « Personnes qui vivent dans cet endroit » (pas « Personnes récemment dans cet endroit » : ça inclut les gens de passage). Ce rayon couvre la liste H12 (Blainville, Boisbriand, Rosemère, Lorraine, Bois-des-Filion, Sainte-Anne-des-Plaines, Mirabel, Saint-Eustache, Deux-Montagnes, Saint-Jérôme, Terrebonne, Mascouche, Laval, Montréal-Nord, Ahuntsic, Saint-Laurent, Repentigny). **Attention : 35 km traverse le fleuve.** Le centre-ville de Montréal est à ≈ 26 km, Longueuil à ≈ 28 km, Boucherville à ≈ 32 km : le rayon inclut toute l'île de Montréal et une partie de la Rive-Sud. Pour respecter H12 (Rive-Sud et Ouest-de-l'Île = Google Recherche seulement), ajoute dans Lieu → **« Exclure »** (tape chaque ville) : Longueuil, Saint-Lambert, Brossard, Boucherville, Saint-Bruno-de-Montarville, La Prairie, Candiac, Pointe-Claire, Dollard-des-Ormeaux, Kirkland, Beaconsfield, Sainte-Anne-de-Bellevue, Dorval. Les arrondissements de Montréal ne s'excluent pas un par un dans Meta : le centre et le Plateau restent dans le rayon, c'est accepté (les frais de livraison sont annoncés sur la page, section 6).

**Langues : UNE règle → laisser le champ « Langues » vide (toutes).** Raison : la pub est en français (Loi 96), donc un anglophone qui ne lit pas le français ne cliquera pas, et Meta apprend vite à ne pas la lui montrer. Restreindre à « Français » coupe une part importante de la portée à Laval et Montréal-Nord (ordre de grandeur ≈ 30–40 %, hypothèse à valider en comparant l'estimation d'audience avec et sans la langue, panneau de droite de l'ensemble) et retire les bilingues dont le téléphone est réglé en anglais. Tu diffuses en français à tout le monde.

**Âges et audience** : « Audience Advantage+ » ACTIVÉE (c'est le défaut). Il faut comprendre ce qui est dur et ce qui est souple :

- **Contrôles d'audience (règles dures)** : lieu = rayon 35 km + exclusions ci-dessus; **âge minimum = 25**; exclusion d'audience personnalisée = « Site web – visiteurs /merci 180 j » (on ne repaie pas pour montrer la pub froide à quelqu'un qui a déjà demandé une soumission).
- **Suggestions (souples, Meta peut en sortir)** : âge jusqu'à 55; centres d'intérêt « Mariage », « Planification d'événements », « Anniversaire ». Rien d'autre : sur 35 km avec 26 $/jour, sur-cibler tue l'apprentissage. Le « 55 » n'est donc pas garanti et Meta pourra diffuser à des 55+; on l'accepte pour la portée pendant le test.
- **Contrôle au bilan du lundi 12 octobre** : Gestionnaire de publicités → sélectionner l'ensemble → « Répartition » → « Âge ». Si les 55+ représentent > 20 % de la dépense avec 0 lead, bascule l'ensemble en « Options d'audience d'origine » (Audience Advantage+ désactivée) avec 25–55 strict, en une seule intervention (ça relance l'apprentissage, voir plus bas). Sinon, tu ne touches à rien.
- Vérifie que l'estimation d'audience (panneau de droite, calculée sur lieu + âge minimum; les suggestions ne la réduisent pas) affiche ≥ 1 000 000 personnes (hypothèse d'ordre de grandeur pour un rayon 35 km incluant Laval et le nord de Montréal). Si c'est moins, vérifie les exclusions saisies (une exclusion « Montréal » par erreur vide l'audience), n'ajoute jamais d'intérêts.

**Placements** : « Placements Advantage+ » (auto). Au bilan de la semaine 2 (lundi 12 octobre), Gestionnaire de publicités → Répartition → « Placement » : si Audience Network ou Messenger dépassent 15 % de la dépense avec zéro lead, passe en « Placements manuels » (Ensemble → Placements → « Placements manuels ») et coche uniquement Fil Facebook, Fil Instagram, Stories Facebook, Stories Instagram, Reels Instagram, Reels Facebook, Explorer; décoche Audience Network, Messenger, Colonne de droite et Résultats de recherche. C'est une modification significative : fais-la le même lundi que les autres changements (voir ci-dessous).

**Phase d'apprentissage** : Meta veut ≈ 50 conversions par ensemble sur 7 jours pour sortir de l'apprentissage. À 26 $/jour et un CPL espéré de 30–50 $ (H3, hypothèse), tu feras ≈ 4 à 6 leads par semaine (hypothèse) : tu resteras probablement en « Apprentissage limité » pendant tout le test. **Ce n'est pas bloquant** : la mention est un avertissement, pas une pénalité; l'ensemble diffuse et optimise quand même, avec plus de variance d'une semaine à l'autre. Ce qui est bloquant, c'est de relancer l'apprentissage sans arrêt. Règle ferme : **pendant 7 jours après tout lancement ou changement, tu ne touches PAS** au budget (au-delà de ± 20 %), au ciblage, aux placements, à l'événement d'optimisation, ni aux pubs — **ajouter, retirer ou mettre en pause une pub relance aussi l'apprentissage**. Seule exception : une règle automatique de pause qui se déclenche (elle, tu la laisses faire, puis tu vérifies dans le Sheet).

**Règle des lundis de changement** : tous les changements de pubs (ajout de variante, retrait, remplacement d'une pub coupée par une règle) et tout changement d'audience ou de placement se regroupent en UNE intervention, un lundi sur deux : **lundi 12 octobre, lundi 26 octobre, lundi 9 novembre**. Jamais entre. Une pub coupée automatiquement le mercredi n'est remplacée qu'au prochain de ces lundis.

### 4.2 Meta — campagne EVX_META_RETARGETING

| Niveau | Nom | Réglage |
|---|---|---|
| Campagne | EVX_META_RETARGETING | Objectif Prospects, CBO désactivé |
| Ensemble | RETARG_Site30j_IG-FB90j | Lieu de conversion Site web · événement Lead · objectif de performance « Maximiser le nombre de conversions » · budget quotidien 5 $ · Audiences personnalisées incluses : « Site web – tous les visiteurs 30 j » + « Compte Instagram – toutes les personnes ayant interagi 90 j » + « Page Facebook – toutes les personnes ayant interagi 90 j » · **Exclure** : « Site web – visiteurs /merci 180 j » · Audience Advantage+ désactivée · Lieu : rayon 60 km autour du 215 boul. René-A.-Robert, « Personnes qui vivent dans cet endroit » (H12 : rien au-delà de 60 km; un visiteur de Québec ou Gatineau n'est pas reciblé) · âges 18–65+ · placements Advantage+ · Contenu dynamique désactivé |
| Pubs (3 à 4) | L-paris, J-jeux-geants, L-corpo-merci, L-prenom | Angles « preuve + dates qui partent vite + jeux en complément »; paramètres d'URL : utm_campaign=lettres_retarg (reste identique au froid) |

**Création des audiences (semaine 0, même si elles sont vides — elles se remplissent pendant que le froid tourne)** : Meta Business Suite → Tous les outils → Audiences → Créer une audience → Audience personnalisée → source « Site web » (jeu de données « Évenox – Site ») → « Tous les visiteurs du site web », 30 jours → nom « Site web – tous les visiteurs 30 j ». Répète avec « Personnes ayant visité des pages web spécifiques » → URL contient « /merci », 180 jours (maximum permis) → nom « Site web – visiteurs /merci 180 j » (même audience qu'en section 3). Puis source « Compte Instagram » → « Toutes les personnes ayant interagi avec ce compte professionnel », 90 jours; source « Page Facebook » → « Toutes les personnes ayant interagi avec votre Page », 90 jours.

**Lancement** : lundi 5 octobre si, dans l'ensemble, « Taille estimée de l'audience » (audiences combinées) affiche ≥ 300 personnes et les audiences sont en statut « Prête »; sinon lundi 12 octobre, peu importe la taille. Pubs au lancement du retargeting : L-corpo-merci et L-prenom (déjà montées); L-paris et J-jeux-geants s'ajoutent le lundi 12 octobre (vague 2 de la section 3). Ne pas attendre 1 000 personnes : à 26 $/jour et un CPC Meta de 0,80–1,50 $ (H13, hypothèse), le site reçoit ≈ 150–270 visiteurs payants par semaine, moins ceux qui refusent les témoins (Loi 25) et que le Pixel ne voit pas. Si Meta affiche « Budget minimum X $ » sous le champ budget (ça arrive pour un ensemble optimisé conversions, souvent ≈ 6–7 $/jour, ordre de grandeur), mets X et baisse le froid à 24 $/jour pour rester à ≈ 950 $/mois Meta.

**Fréquence** : plafond de bon sens 3 impressions par personne sur 7 jours. Quand la règle EVX-ALERTE-FREQ3 se déclenche : (1) si l'audience combinée est < 3 000 personnes, baisse le budget à 3 $/jour (une pub neuve ne réduit pas la fréquence sur une petite audience); (2) au prochain lundi de changement, remplace la pub la plus vue par une créa non encore diffusée (L-obnl-gala ou L-baby, section 5). Si la fréquence dépasse 3 alors que l'audience est > 3 000, remplace seulement la créa.

**Liste clients Booqable et Lookalike : pas pendant le test.** Charger une liste de clients (courriels, téléphones) dans Meta, pour exclusion ou pour une audience similaire, est une communication de renseignements personnels à un tiers à une fin publicitaire (Loi 25) : ça exige que la politique de confidentialité de evenox.ca mentionne le partage de données hachées avec Meta à des fins publicitaires ET que les clients concernés y aient consenti (libellé en section 7), plus l'acceptation dans Meta des « Conditions d'utilisation des audiences personnalisées ». Par défaut : aucun import, aucune lookalike pendant le test. Condition pour ouvrir une audience similaire après le verdict : politique conforme ci-dessus ET (≥ 100 événements Lead sur le Pixel — pas atteignable pendant le test — OU une liste clients exportée de Booqable ≥ 300–500 contacts avec courriel + téléphone + ville). À ce moment-là : Audiences → Créer → Liste de clients → CSV (colonnes email, phone, fn, ln, ct) → attendre que la colonne « Taille » de l'audience affiche ≥ 100 personnes appariées par Meta (ce sont les personnes reconnues, pas les lignes du CSV; sinon la similaire ne se crée pas) → « Audience similaire 1 % Québec », gardée en réserve pour la montée par paliers (voir section 1). Meta pousse de toute façon Audience Advantage+ plutôt que les lookalikes classiques : ce n'est pas une perte pendant le test.

### 4.3 Meta — budgets, plafond du compte et règles automatiques

- Budget quotidien ensemble froid : **26 $**; retargeting : **5 $**. Total Meta ≈ 950 $/mois.
- **Limite de dépense du compte** : Gestionnaire de publicités → Paramètres de paiement → « Limite de dépense du compte » → Définir → **1 300 $**. Pourquoi 1 300 $ : ça couvre le mois d'octobre au budget de base (31 $/jour × 34 jours du 28 sept. au 31 oct. ≈ 1 054 $) et même avec la montée maximale permise par EVX-SCALE-20 (37 $/jour de froid + 5 $ à partir du 19 oct. ≈ 1 200 $), tout en bloquant une erreur de saisie (26 $ → 260 $). **Ce plafond est cumulatif : il ne se remet pas à zéro tout seul.** Rappel calendrier (Google Agenda, dimanche 1er novembre 9 h) : Paramètres de paiement → Limite de dépense du compte → « Réinitialiser le montant dépensé », puis vérifier que le cumul dépensé correspond au Sheet, et laisser 1 300 $ (novembre 1–22 à 42 $/jour max ≈ 924 $). Si tu oublies et que la limite est atteinte, toutes les pubs Meta (froid ET retargeting) s'arrêtent et l'apprentissage repart de zéro.
- **Montée pendant le test vs budget H6** : le budget test verrouillé est 800 $/mois de froid (26 $/jour). Toute hausse déclenchée par EVX-SCALE-20 (max 2 paliers : 26 → 31 → 37 $/jour, soit jusqu'à ≈ 340 $ de plus sur le mois) dépasse H6; elle est financée par la réserve de 50 $ puis par les dépôts encaissés (H2 : ≈ 110 $ par réservation à 550 $ de panier, hypothèse), et seulement si le stock est disponible (H9). Au-delà de 37 $/jour, la montée se décide au verdict du 23 novembre (paliers de la section 1).
- **Calibration Loi 25 (lundi 12 octobre, puis chaque lundi dans le Sheet)** : ratio = événements Lead Meta (Pixel) ÷ leads réels « Source lead = Meta » dans Booqable, sur la même période. Si le ratio est < 0,7, multiplie les seuils de CPL des règles ci-dessous par 1 ÷ ratio (exemple : ratio 0,6 → PAUSE à 130 $, ALERTE à 100 $, SCALE à 65 $) et note la valeur dans le Sheet. Même exercice pour Google (conversions « Lead formulaire » ÷ leads « Source lead = Google »).
- Règles automatiques : Gestionnaire de publicités → Règles (menu « Tous les outils » → Règles automatiques) → « Créer une règle » → « Règle personnalisée ». Pour chaque règle, le champ « Appliquer la règle à » indique la cible exacte :

| Nom de la règle | Appliquer à | Condition (période) | Action | Fréquence |
|---|---|---|---|---|
| EVX-PAUSE-CPL80 | Tous les ensembles de publicités actifs (les 2 campagnes) | Coût par prospect > 80 $ ET Dépense > 150 $ (période : Maximum / à vie) — H3 exact | Désactiver l'ensemble + courriel | En continu |
| EVX-PAUSE-0LEAD-150 | Tous les ensembles de publicités actifs | Dépense > 150 $ ET Prospects < 1 (Maximum) — nécessaire parce que Meta ne calcule pas de coût par prospect à 0 prospect | Désactiver l'ensemble + courriel | En continu |
| EVX-PAUSE-PUB80 | Toutes les publicités actives | Dépense > 80 $ ET Prospects < 1 (Maximum) — hypothèse : ≈ 15 jours à ≈ 5 $/jour par pub | Désactiver la publicité + courriel | En continu |
| EVX-ALERTE-CPL60 | Sélectionner des ensembles → FROID_RiveNord-Laval_25-55 | Coût par prospect > 60 $ ET Dépense > 100 $ (7 derniers jours) | Notification seulement | Quotidien, 9 h |
| EVX-ALERTE-CPL60-RETARG | Sélectionner des ensembles → RETARG_Site30j_IG-FB90j | Coût par prospect > 60 $ ET Dépense > 30 $ (7 derniers jours) | Notification seulement | Quotidien, 9 h |
| EVX-ALERTE-FREQ3 | Tous les ensembles de publicités actifs | Fréquence > 3 (7 derniers jours) | Notification seulement | Quotidien, 9 h |
| EVX-SCALE-20 | Sélectionner des ensembles → FROID_RiveNord-Laval_25-55 | Coût par prospect < 40 $ ET Résultats (prospects) ≥ 5 ET Dépense ≥ 150 $ (7 derniers jours) — le plancher de dépense évite une hausse déclenchée par 5 leads tombés en 2 jours de chance | Augmenter le budget quotidien de 20 %, « Limite de budget maximale » 37 $/jour, + courriel | Horaire personnalisé : lundi et jeudi, 9 h (≥ 72 h entre deux hausses) |

Notes d'exécution :

1. Les fréquences Meta disponibles sont « En continu » (vérification ≈ toutes les 30 min), « Quotidien » et « Horaire personnalisé ». Il n'existe pas d'option « une fois par 72 h » : l'horaire lundi + jeudi la remplace. Si ton compte n'affiche pas « Limite de budget maximale » dans l'action, mets EVX-SCALE-20 en « Notification seulement » et applique le +20 % toi-même, un lundi ou un jeudi (jamais au-delà de 37 $/jour).
2. **EVX-SCALE-20 est créée en semaine 0 mais laissée DÉSACTIVÉE** (interrupteur de la règle à Off). Tu l'actives au bilan du lundi 19 octobre seulement si (a) le CPL réel Meta sur 14 jours (Sheet) est < 40 $ ET (b) le calendrier Booqable montre des sets de lettres libres sur au moins 50 % des week-ends des 6 semaines suivantes (H9). Sinon elle reste éteinte et le budget reste à 26 $/jour : monter la dépense sans stock, c'est acheter des leads qu'on refusera.
3. **Chaque pause automatique se vérifie le jour même dans le Sheet** : CPL réel = dépense ÷ leads Booqable taggés Meta. Si le CPL réel est < 60 $, tu réactives l'ensemble ou la pub et tu montes le seuil de la règle selon la calibration Loi 25 ci-dessus. Si le CPL réel confirme le problème, la pub ou l'ensemble reste coupé.
4. Une pub coupée par EVX-PAUSE-PUB80 ne revient pas telle quelle : tu la remplaces par une nouvelle variante (voir section 5) au prochain lundi de changement (12 oct., 26 oct., 9 nov.), jamais avant, parce qu'ajouter une pub relance l'apprentissage de l'ensemble.

### 4.4 Google Ads — campagne EVX_GOOGLE_RECH_LOCATION

**Type et mode.** Google Ads → + Nouvelle campagne → objectif « Prospects » → type **« Recherche »** → si le compte est neuf, cliquer « Passer en mode expert » (lien en bas de l'écran). Réseaux (Paramètres de campagne → Réseaux) : **décocher « Inclure les partenaires du Réseau de Recherche »** et **décocher « Inclure le Réseau Display »** (les deux sont cochés par défaut). Si les paramètres de campagne affichent une carte **« AI Max pour la recherche »** (ou « Élargissement des URL finales » / « Personnalisation du texte ») : **tout désactiver** avant d'enregistrer, sinon Google élargit tes mots-clés vers la requête large et envoie des clics sur d'autres pages du site que /lettres-illuminees. À l'étape « Objectifs de conversion » de la création : garder uniquement « Lead formulaire » comme objectif principal (voir section 3); « Clic téléphone site » et « Appel depuis annonce » restent secondaires (observation), sinon Google compte des clics de numéro accidentels comme conversions et fausse le Coût/conv. Pas de campagne intelligente (Smart), pas de Performance Max : PMax dépense sur YouTube, Display et Gmail sans que tu voies où, et ne devient intéressant qu'avec ≥ 30 conversions/mois en données propres — après la montée, pas pendant le test (même seuil pour réactiver AI Max). Refuse aussi les recommandations automatiques : menu **Recommandations → bouton « Application automatique »** (en haut à droite) → décocher toutes les cases des deux onglets (« Maintenir vos annonces » et « Développer votre activité ») → Enregistrer. Pas de plafond de compte possible côté Google en paiement automatique (section 9) : les garde-fous sont le budget quotidien (16,50 $, moyenne mensuelle ≈ 502 $), la date de fin de campagne (22 novembre) et la règle EVX-BUDGET-ALERTE ci-dessous.

**Structure** : 1 campagne, 5 groupes d'annonces. **1 RSA par groupe**, 10 titres fournis (maximum 15) et 4 descriptions (textes en section 5), **un seul épinglage** : le titre 1 en position 1 (il contient « Location de … », le mot que la requête attend; tout le reste reste libre pour que Google apprenne). **Pas de 2e RSA pendant le test** : Google assemble les titres dynamiquement, et à 1–2 clics par jour par groupe, deux annonces se partageraient des données déjà minces; une variante se crée seulement après le verdict, sur le groupe « Lettres lumineuses » (≈ 55 % du budget). Correspondances : **expression** (« mot-clé ») et **exacte** ([mot-clé]) seulement; **aucun mot-clé large** au départ. Un mot-clé de base = expression + exacte = 2 lignes.

| Groupe d'annonces | URL finale (page nue) | utm_campaign du suffixe | Part de dépense attendue (indicative) | Actif dès |
|---|---|---|---|---|
| Lettres lumineuses | evenox.ca/lettres-illuminees | recherche_lettres | ≈ 55 % | 28 sept. |
| Chiffres lumineux | evenox.ca/lettres-illuminees | recherche_lettres | ≈ 15 % | 28 sept. |
| Marque Évenox | evenox.ca | recherche_lettres (utm_content=marque) | ≈ 5 % (protège la marque, CPC très bas) | 28 sept. |
| Jeux géants | page jeux existante (URL à confirmer; à défaut evenox.ca/lettres-illuminees#jeux, section 6) | recherche_jeux | ≈ 15 % | lundi 12 oct. |
| Tables-chaises-vaisselle | page mobilier existante (URL à confirmer; à défaut evenox.ca/lettres-illuminees#mobilier, section 6) | recherche_mobilier | ≈ 10 % | lundi 12 oct. |

À 16,50 $/jour, cinq groupes actifs recevraient ≈ 1 clic par jour chacun et aucun n'apprendrait : les deux premières semaines concentrent les ≈ 230 $ sur Lettres + Chiffres + Marque (décision 1 du brief); « Jeux géants » et « Tables-chaises-vaisselle » sont créés en semaine 0, laissés en veille, et activés le lundi 12 octobre. **Le groupe « Lettres EN » n'est PAS créé pendant le test** (décision par défaut). Il ne s'ouvre qu'après le verdict, à deux conditions : une page evenox.ca/en/marquee-letters existe avec la version française déjà en ligne (Loi 96 : le français au moins équivalent; la position de l'OQLF sur les annonces Google en anglais n'est pas publiée, à valider auprès de l'OQLF) ET une RSA anglaise rédigée (à commander en section 5 à ce moment-là). Google apparie désormais l'annonce à la langue de la page de destination : une annonce EN vers la page FR serait mal diffusée. Les 5 mots-clés EN sont gardés en réserve (4.5).

**Suffixe d'URL finale (UTM), une fois par groupe** : Groupe d'annonces → Paramètres → « Options d'URL du groupe d'annonces » → « Suffixe d'URL finale » → coller : `utm_source=google&utm_medium=cpc&utm_campaign=recherche_lettres&utm_content=lettres&utm_term={keyword}`. Adapter par groupe : utm_content = chiffres (Chiffres lumineux), marque (Marque Évenox), jeux + utm_campaign=recherche_jeux (Jeux géants), mobilier + utm_campaign=recherche_mobilier (Tables-chaises-vaisselle). Les URL finales des annonces restent nues; le formulaire capte les cinq UTM (section 3) et le Sheet attribue (section 7). Les leads du groupe Marque gardent Source = Google mais se repèrent par utm_content=marque (colonne Créa du Sheet) et la note « MARQUE=oui » (section 9) : au verdict, tu lis le ROAS avec et sans la marque, parce que ces clients seraient venus de toute façon et ne valident pas les groupes froids. La convention UTM ne prévoit pas de valeur de campagne pour la marque : utm_campaign=recherche_lettres + utm_content=marque est la règle (même valeur en section 7).

**Géographie** : Paramètres → Zones géographiques → « Saisir une autre zone » → « Recherche avancée » → onglet « Rayon » → tape « 215 boul. René-A.-Robert, Sainte-Thérèse » → **60 km** → Cibler. Ce seul rayon couvre Rive-Nord, Laval, Montréal, Longueuil, Brossard et les petites municipalités (H12 : rien au-delà de 60 km); n'ajoute pas les villes en plus (doublons dans les rapports). Options de ciblage géographique → **« Présence : personnes situées dans vos zones ciblées ou qui s'y rendent régulièrement »** — PAS « Présence ou intérêt » (sinon tu paies des clics de Québec, Gatineau ou de France qui cherchent « location lettres Montréal »). Pour lire les résultats par ville : Zones géographiques → « Rapport géographique » → « Vue par ville » (colonne « Zone géographique la plus spécifique »). Montréal centre/ouest et Rive-Sud sont inclus par le rayon avec intention forte; les frais de livraison selon l'adresse sont annoncés dans une description RSA et une accroche (section 5) pour filtrer les clics hors zone rentable (H12).

**Langues** : si le paramètre « Langues » s'affiche encore à la création de la campagne, coche **Français ET Anglais** (l'ancien système ciblait la langue de l'interface du navigateur : un Lavallois avec Chrome en anglais qui tape « location lettres lumineuses » serait exclu avec Français seul). S'il n'apparaît plus (Google a annoncé le retrait de ce paramètre des campagnes Recherche pour l'automne 2026 : à vérifier dans ton compte au moment de la création), il n'y a rien à régler : Google apparie sur la langue de tes annonces (français) et de la page. Dans les deux cas, les mots-clés restent en français.

**Calendrier de diffusion** : 7 jours/7, **6 h à 23 h** (hypothèse : les requêtes de nuit sont rares et de moins bonne qualité; à vérifier après 4 semaines dans Insights et rapports → « Heure de la journée »). **Appareils** : tous, sans ajustement d'enchère au départ; à la semaine 4, si mobile > 70 % des clics et 0 lead mobile, c'est un problème de page (voir section 6), pas d'enchère.

**Enchères** : au départ **« Maximiser les clics »** avec **« Définir une limite d'enchère au CPC max » = 3,50 $** (hypothèse cohérente avec le CPC 2–5 $ de H13; ordre de grandeur des CPC canadiens pour un service local peu concurrentiel : 1–4 $, à valider dans Outils → Planificateur de mots-clés). Ajuste à 4,50 $ le lundi 12 octobre si, dans Colonnes → Modifier → « Métriques de compétition », le « Taux d'impressions perdues (classement) » est > 60 % et le « Taux d'impressions perdues (budget) » < 20 %. **Sous « Maximiser les clics », les enchères par groupe d'annonces ou par mot-clé sont ignorées** : le seul levier par groupe est les mots-clés (voir « Réallocation » ci-dessous). Passage à **« Maximiser les conversions » (sans CPA cible)** uniquement quand la colonne « Conversions » de la campagne affiche **≥ 15 sur les 30 derniers jours** (action principale « Lead formulaire »). Hypothèse : à 500 $/mois et CPL Google 40–70 $ (H3), on attend ≈ 7–12 conversions par 30 jours → le passage n'arrivera probablement PAS pendant le test; par défaut tu restes en Max clics jusqu'au verdict du 23 novembre. Ne compte pas les conversions du groupe « Marque Évenox » dans ce seuil (Segment → Groupe d'annonces) : les clics marque convertissent bien et gonflent le compteur sans valider les groupes froids. Pas de CPA cible avant 30 conversions/30 jours. **Budget quotidien : 16,50 $** (Google peut dépenser jusqu'à 2× un jour donné, mais respecte la moyenne mensuelle ≈ 500 $). Rotation des annonces : « Optimiser ». **Date de fin de campagne : 22 novembre 2026** (Paramètres → Dates de début et de fin), second garde-fou budgétaire, à prolonger au verdict.

**Réallocation entre groupes (sans enchères)** : un groupe qui dépasse 60 % de la dépense de la campagne sur 14 jours sans lead → mets en veille ses mots-clés en expression et garde seulement les exactes; s'il reste sans lead 14 jours de plus, mets le groupe en veille (Groupes d'annonces → cocher → Modifier → Mettre en veille) et réactive-le après le verdict. Un groupe à CPL réel < 40 $ → ajoute-lui 3 à 5 mots-clés en expression tirés des termes de recherche qui ont généré un lead : c'est ainsi qu'on lui donne du volume, pas par les enchères.

**Composants (ex-extensions), à créer au niveau campagne (Composants → +)** :

- Liens annexes (4 au lancement, minimum 2; texte ≤ 25 caractères, descriptions ≤ 35). Règle dure de Google : chaque lien annexe doit pointer vers une URL différente de l'URL finale de l'annonce et des autres liens; un lien vers /lettres-illuminees ou vers une ancre de cette page est refusé (« lien annexe en double »). Un lien sans page réelle et distincte n'est pas créé. Textes exacts : section 5.2.

| Texte du lien | URL finale | Description 1 | Description 2 |
|---|---|---|---|
| Jeux géants | page jeux existante d'evenox.ca (URL exacte du menu; sinon ne pas créer ce lien) | Beer pong, Jenga, Puissance 4 | Livrés et installés chez vous |
| Tables et chaises | page mobilier existante d'evenox.ca (même règle) | Nappes et vaisselle aussi | Livraison et reprise incluses |
| Demander une soumission | evenox.ca/contact (page contact existante; si son URL diffère, copie-la depuis le menu) | Réponse en 24 h | Décrivez votre événement |
| À propos d'Évenox | evenox.ca/a-propos (page existante; sinon ne pas créer ce lien) | Basés à Sainte-Thérèse | Rive-Nord, Laval, Montréal |

- Accroches (6), ≤ 25 caractères chacune (mêmes textes en section 5.2) : « Livraison et installation », « Reprise après l'événement », « Soumission en 24 h », « Basés à Sainte-Thérèse », « Clé en main », « Livraison selon l'adresse » (couvre H12 : frais annoncés pour Montréal/Rive-Sud). À ajouter le lundi 26 octobre : « Partys de Noël ». Vérifie le compteur de caractères de Google avant d'enregistrer chaque composant.
- Extrait structuré : en-tête « Types » → Lettres, Chiffres, Symboles, Jeux géants, Tables, Chaises, Vaisselle.
- Appel : **514-559-1893**, « Rapports d'appels » = Activé; conversion « Appel depuis annonce » (durée ≥ 30 s, action secondaire) créée dans Objectifs → Conversions (voir section 7). Le clic sur le numéro de la page (« Clic téléphone site ») est une conversion de phase 2 (section 7).
- Lieu : Outils (icône clé) → Gestionnaire de données → Produits connectés → Fiche d'établissement Google → Associer (une demande part au courriel propriétaire de la fiche, evenox.ca@gmail.com; accepter; synchronisation 24–48 h). Prérequis de la section 3; non bloquant pour le lancement.
- Nom et logo d'entreprise : « Évenox » + logo carré 1:1 (≥ 1200 × 1200 px).
- Images : 4 photos 1:1 (min 300 × 300, recommandé 1200 × 1200) + 4 en 1,91:1 (min 600 × 314, recommandé 1200 × 628) des lettres allumées (brief en section 5). Un compte neuf peut ne pas être admissible aux composants image tout de suite : ce n'est pas bloquant, réessaie le lundi 12 octobre.

**Règles Google** (Outils → Actions groupées → Règles → + → choisir la cible) :

| Nom | Appliquer à | Condition (période) | Action | Fréquence |
|---|---|---|---|---|
| EVX-KW-PAUSE-100 | Mots clés | Coût > 100 $ ET Conversions < 1 (30 derniers jours; la période « à vie » n'est pas offerte dans les règles Google) | Mettre en veille + courriel | Quotidien, 7 h |
| EVX-GRP-PAUSE-CPL80 | Groupes d'annonces | Coût > 150 $ ET Coût/conv. > 80 $ (30 derniers jours) — H3 | Mettre en veille + courriel | Quotidien, 7 h |
| EVX-GRP-PAUSE-150-0CONV | Groupes d'annonces | Coût > 150 $ ET Conversions < 1 (30 derniers jours) — parce que Coût/conv. est vide à 0 conversion | Mettre en veille + courriel | Quotidien, 7 h |
| EVX-GRP-ALERTE-CPL60 | Groupes d'annonces | Coût/conv. > 60 $ ET Coût > 45 $ (7 derniers jours) | Courriel seulement | Quotidien, 7 h |
| EVX-CAMP-ALERTE-CPL60 | Campagne | Coût/conv. > 60 $ ET Coût > 100 $ (7 derniers jours) | Courriel seulement | Quotidien, 7 h |
| EVX-BUDGET-ALERTE | Campagne | Coût > 140 $ (7 derniers jours) | Courriel seulement | Quotidien, 7 h |

Comme pour Meta : avant de laisser un mot-clé ou un groupe en veille, vérifie dans le Sheet les leads réels « Source lead = Google » et les appels reçus; si le CPL réel est < 60 $, réactive et note la calibration Loi 25 (4.3).

**Routine manuelle chaque lundi** (15 min, après les 30 min du dashboard, voir sections 7 et 10) : Campagne → Insights et rapports → **Termes de recherche** → trier par coût → cocher les termes hors sujet → « Ajouter comme mot clé à exclure » (dans la liste EVX-NEG-BASE); cocher les termes pertinents qui ont généré un lead → « Ajouter comme mot clé » en expression dans le bon groupe. Google masque une partie des requêtes (seuil de confidentialité) : c'est normal de ne pas tout voir.

### 4.5 Mots-clés seed (français)

Chaque ligne s'entre en **expression ET exacte** (type noté « E+X »). Volumes et CPC réels : à lire dans Outils → Planificateur de mots-clés en semaine 0 (aucune donnée publique fiable pour la location événementielle au Québec; les CPC sont une hypothèse jusqu'au lundi 12 octobre).

| Mot-clé | Type | Groupe | Intention |
|---|---|---|---|
| location lettres lumineuses | E+X | Lettres lumineuses | Location, générique |
| location lettres illuminées | E+X | Lettres lumineuses | Location, générique |
| location lettres géantes | E+X | Lettres lumineuses | Location, générique |
| lettres lumineuses géantes location | E+X | Lettres lumineuses | Location |
| lettres lumineuses à louer | E+X | Lettres lumineuses | Location, formulation courante QC |
| location lettres led | E+X | Lettres lumineuses | Location, formulation courante QC |
| location marquee letters | E+X | Lettres lumineuses | Location, terme anglicisé courant au QC |
| lettres marquee location | E+X | Lettres lumineuses | Location, terme anglicisé |
| lettres lumineuses mariage | E+X | Lettres lumineuses | Mariage |
| lettres lumineuses anniversaire | E+X | Lettres lumineuses | Anniversaire |
| location lettres lumineuses laval | E+X | Lettres lumineuses | Local |
| location lettres lumineuses montréal | E+X | Lettres lumineuses | Local |
| location lettres lumineuses rive-nord | E+X | Lettres lumineuses | Local |
| location lettres lumineuses laurentides | E+X | Lettres lumineuses | Local |
| location lettres lumineuses sainte-thérèse | E+X | Lettres lumineuses | Local |
| location lettres lumineuses blainville | E+X | Lettres lumineuses | Local |
| location lettres lumineuses terrebonne | E+X | Lettres lumineuses | Local |
| location lettres lumineuses saint-jérôme | E+X | Lettres lumineuses | Local |
| location lettres lumineuses mirabel | E+X | Lettres lumineuses | Local |
| lettres lumineuses événement corporatif | E+X | Lettres lumineuses | Corpo |
| location chiffres lumineux | E+X | Chiffres lumineux | Location |
| chiffres lumineux géants anniversaire | E+X | Chiffres lumineux | Anniversaire (30, 40, 50) |
| location chiffre lumineux 40 ans | E+X | Chiffres lumineux | Anniversaire |
| chiffres lumineux 2027 location | E+X | Chiffres lumineux | Jour de l'An (actif dès le 28 sept., comme la pub Meta L-chiffres-2027 : les partys du jour de l'An se réservent à l'automne) |
| location jeux géants | E+X | Jeux géants | Location |
| location beer pong géant | E+X | Jeux géants | Location |
| location jenga géant | E+X | Jeux géants | Location |
| location connect 4 géant | E+X | Jeux géants | Location |
| location puissance 4 géant | E+X | Jeux géants | Location (nom FR) |
| jeux extérieurs mariage location | E+X | Jeux géants | Mariage |
| location jeux géants laval | E+X | Jeux géants | Local |
| location jeux géants montréal | E+X | Jeux géants | Local |
| location tables et chaises | E+X | Tables-chaises-vaisselle | Location |
| location chaises laval | E+X | Tables-chaises-vaisselle | Local |
| location tables chaises rive-nord | E+X | Tables-chaises-vaisselle | Local |
| location vaisselle événement | E+X | Tables-chaises-vaisselle | Location |
| location nappes | E+X | Tables-chaises-vaisselle | Location |
| location matériel événementiel laval | E+X | Tables-chaises-vaisselle | Générique, panier plus gros |
| evenox | E+X | Marque Évenox | Marque (l'exacte couvre « évenox ») |
| evenox lettres | E+X | Marque Évenox | Marque |

Réserve post-verdict, groupe « Lettres EN » (non créé pendant le test, voir 4.4; ≤ 20 % du budget Google pris sur la part « Lettres lumineuses », exacte seulement) : [marquee letters rental laval], [marquee letters rental montreal], [light up letters rental], [giant letters rental montreal], [light up numbers rental laval].

### 4.6 Mots-clés négatifs

**Création et association (les deux étapes sont obligatoires; créer la liste ne l'applique pas)** : Outils → Bibliothèque partagée → « Listes de mots clés à exclure » → + → nom **EVX-NEG-BASE** → coller la liste ci-dessous (un terme par ligne, entre guillemets pour l'expression) → Enregistrer. Puis Campagne EVX_GOOGLE_RECH_LOCATION → Mots clés → « Mots clés à exclure » → + → « Utiliser une liste de mots clés à exclure » → cocher EVX-NEG-BASE → Enregistrer. Rappel : les négatifs ne couvrent PAS les variantes proches (« gratuit » ne bloque pas « gratuite »), d'où les variantes ci-dessous; tu complètes chaque lundi depuis le rapport des termes de recherche.

Liste EVX-NEG-BASE, en expression (85 termes) : achat, acheter, achete, achetez, à vendre, a vendre, vente, prix d'achat, kijiji, amazon, walmart, dollarama, costco, canadian tire, ikea, aliexpress, temu, etsy, DIY, fabriquer, fabrique, fabrication, tutoriel, bricolage, faire soi-même, usagé, usagée, usagés, d'occasion, seconde main, emploi, salaire, carrière, job, gratuit, gratuite, gratuits, patron, gabarit, plan, imprimer, imprimable, imprimables, image, images, photo libre, photos, dessin, coloriage, police, font, typographie, lettre de motivation, lettre recommandée, lettre de démission, lettre de présentation, néon chambre, led chambre, veilleuse, décoration murale, formation, cours, définition, wikipedia, règles, règle du jeu, comment jouer, dimensions, alphabet, clavier, salle, salle de réception, appartement, logement, condo, chalet, voiture, camion, remorque, costume, déguisement, modèle de lettre, exemple de lettre, lettre de recommandation, lettres de motivation. Les 12 derniers bloquent le sens « location » = logement/véhicule et « lettre » = courrier, le plus gros gaspillage possible avec les correspondances sémantiques de Google.

Pourquoi pas « occasion » tout court : en expression, il bloquerait « lettres lumineuses pour une occasion spéciale », une vraie requête de location. « plan » reste (bloque « plan gratuit », « plan de fabrication »); surveille dans les termes de recherche qu'il ne bloque pas une requête utile et retire-le si oui. À ajouter aussi si Évenox n'en loue pas (hypothèse à confirmer) : gonflable, château gonflable, tente, chapiteau.

Négatifs au niveau du groupe « Tables-chaises-vaisselle » seulement (Groupe → Mots clés à exclure → +, en expression) : bureau, gaming, ergonomique, roulante, roulantes, roulant, hôpital, médical, bébé, haute, billard, massage, poker. Sans « roulante », « location chaises laval » en expression matcherait « location chaise roulante laval » (requête fréquente, CPC élevé, 0 lead).

### 4.7 Calendrier semaine par semaine

| Semaine (dates) | Actions Meta | Actions Google | KPI à regarder | Décision |
|---|---|---|---|---|
| S0 · 21–27 sept. | Créer les 2 campagnes, audiences perso, règles (EVX-SCALE-20 désactivée), limite du compte 1 300 $, paramètres d'URL des pubs. **Vendredi 25 sept. : publier** (pas « brouillon ») avec l'interrupteur de campagne sur Désactivé et Date de début de l'ensemble = 28 sept. 06:00 → les pubs passent en révision la fin de semaine (même consigne en sections 3 et 10) | Créer la campagne avec Date de début = 28 sept. et la laisser « Activée » (les annonces sont examinées dès la création); 5 groupes (Jeux + Mobilier en veille), 1 RSA par groupe, suffixes d'URL, composants, EVX-NEG-BASE associée, 6 règles, date de fin 22 nov., lien Fiche d'établissement | « Efficacité de l'annonce » RSA ≥ « Bon »; Pixel « Actif »; page /merci tirée en test; pubs Meta « Approuvée » | Test NO-GO mercredi 23 sept. (sections 3 et 10), revue go / no-go samedi 26 (section 10). Dimanche 27 sept. 19 h 15 : activer la campagne Meta (départ programmé lundi 6 h, section 10); lundi 28 sept. 8 h : premier contrôle des statuts « Active » / « Éligible », corriger toute pub refusée |
| S1 · 28 sept.–4 oct. | Froid actif à 26 $/jour. **Ne rien toucher 7 jours** | Actif à 16,50 $/jour, Max clics CPC max 3,50 $ (Lettres, Chiffres, Marque) | Dépense réelle vs prévue; CTR Meta 1–2 %, CTR Google 5–8 %, CPC Meta 0,80–1,50 $, CPC Google 2–5 $ (H13, hypothèses); premiers leads dans Gmail/Booqable | Aucune, sauf règle de pause ou bogue de tracking : 0 lead Pixel avec > 60 clics (dès le jeudi 1er oct.; à 8 % page → lead, H13, on en attend déjà ≈ 5) → vérifier /merci ET les leads réels dans Gmail/Booqable (2 leads réels et 0 Pixel = problème de consentement Loi 25, pas de page) |
| S2 · 5–11 oct. | Lundi 5 : lancer le retargeting à 5 $/jour si audience combinée ≥ 300 et « Prête » (sinon lundi 12) | Lundi 5 : premiers négatifs depuis les termes de recherche; lire le taux d'impressions perdues (classement / budget) | CPL par pub et par groupe (Sheet); taux page → lead (cible 8 %, H13) | Si taux page → lead < 3 % : la page est le problème (section 6), pas les pubs |
| S3 · 12–18 oct. | **Lundi 12 = 1er lundi de changement** : remplacer les pubs coupées par EVX-PAUSE-PUB80, vérifier Répartition → Placement et → Âge (bascule si 55+ > 20 % de la dépense sans lead), lancer le retargeting s'il ne l'est pas; puis 7 jours sans toucher. Calibration Loi 25 dans le Sheet | Lundi 12 : activer Jeux géants + Tables-chaises-vaisselle; CPC max à 4,50 $ si impressions perdues (classement) > 60 % et (budget) < 20 %; mots-clés > 100 $ sans lead en veille (règle); ajouter des variantes de mots-clés au groupe à CPL < 40 $ | CPL réel pondéré 14 jours vs cible 40 $ (Sheet); leads → devis (80 %, H4) | **Kill** : tout ensemble/groupe à CPL réel > 80 $ sur 14 jours après 150 $ dépensés (H3). Sinon rien |
| S4 · 19–25 oct. | Bilan lundi 19 (3 semaines complètes) : **plan B formulaire instantané** si CPL Meta réel > 60 $ (4.1); activer EVX-SCALE-20 (plafond 37 $/jour) si CPL 14 j < 40 $ ET stock libre ≥ 50 % des week-ends des 6 prochaines semaines; sinon budget stable | Réallocation par mots-clés (4.4) : expression en veille sur le groupe qui mange > 60 % sans lead; variantes ajoutées au groupe gagnant | Premiers dépôts (devis envoyés en S1–S2 → close 35 %, H5); ROAS réservé provisoire | **Scale ou stable** : montée seulement si stock dispo aux dates demandées (H9). Aucun scale sur le CPL affiché par Meta, seulement sur le Sheet |
| S5 · 26 oct.–1er nov. | **Lundi 26 = 2e lundi de changement** : ajouter L-noel au froid et couper la pub au CPL réel le plus élevé (garder 5 actives); au retargeting, L-chiffres-2027 remplace L-prenom (4 pubs). Dimanche 1er nov. : « Réinitialiser le montant dépensé » sur la limite du compte | Lundi 26 : ajouter l'accroche « Partys de Noël »; vérifier si Conversions ≥ 15 / 30 j (sinon rester en Max clics, cas attendu) | CPL réel, ROAS réservé cumulé, fréquence retargeting | Si fréquence retargeting > 3 : budget 3 $/jour si audience < 3 000, sinon renouveler 1 créa au prochain lundi de changement |
| S6 · 2–8 nov. | Aucun changement de pub (hors lundi de changement). Si plan B actif : couper le perdant lundi 2 nov. | Négatifs; lire le rapport par ville; aucune 2e RSA | ROAS réservé cohorte S1 (fenêtre 30 j complète, H10) + S2 provisoire | Si ROAS cohorte S1 < 3× : corriger (page, angle, qualification, section 9) avant d'ajouter 1 $ |
| S7 · 9–15 nov. | **Lundi 9 = 3e lundi de changement** : couper les 2 pubs au CPL réel le plus élevé sur 28 jours, garder 4 actives; préparer créas Saint-Valentin / showers (section 5), sans les lancer | Stable; préparer le groupe « Saint-Valentin » en veille (mots-clés seulement, pas d'annonce active) | Leads/semaine ≈ 9, devis ≈ 7, dépôts 2–3 (H7, hypothèses) | Pas de changement structurel : données propres pour le verdict |
| S8 · 16–22 nov. | Geler; exporter rapports par pub et par âge/genre/ville | Geler; exporter termes de recherche et rapport par ville | Cohortes S1–S4 : fenêtre 30 j complète au 23 nov. (H10); S5–S8 provisoires; CPL réel, taux de close réel | Préparer le verdict |
| Verdict · 23 nov. | — | — | ROAS réservé des cohortes S1–S4 mûres (ligne 12 du Sheet, leads du 28 sept. au 25 oct., ≈ 1 400 $ de dépense) + tendance S5–S8 provisoire : ≥ 4× → paliers +20 %/semaine si stock (section 1); 3–3,9× → CORRIGER : même budget, correctifs lourds de la section 9, nouveau verdict le 21 décembre; < 3× → CORRIGER aussi, par canal; STOP du canal seulement s'il reste < 3× le 21 décembre après 4 semaines de correctifs (section 1) | Décision unique, écrite dans le Sheet « EVX – Suivi ads » (section 7) |

## 5. Copy & créas (prêtes à coller)

Tout ce qui suit est en français seulement (Loi 96 : la pub au Québec se fait en français; si le groupe « Lettres EN » de Google est ouvert plus tard (section 4, max 20 % du budget Google), l'annonce anglaise est une traduction de la RSA « Lettres lumineuses » ci-dessous et la version française doit rester au moins équivalente en visibilité et en qualité). Aucun prix dans les textes : la réponse au prix est toujours « soumission en 24 h ». Les noms de pubs reprennent les conventions verrouillées (« L-anniv-40 », « L-corpo-merci », etc.) et servent tels quels de valeur `utm_content` (section 7). La page d'atterrissage est en section 6; les UTM et le tag Booqable en section 7; la suite après le lead en section 8.

### 5.1 Meta — textes principaux (5 angles lettres au lancement + 1 pub jeux géants + 2 réserves retargeting)

Règles appliquées à chaque pub (à vérifier avant de coller) :
- Texte principal ≤ 150 caractères au total (compte indiqué dans la colonne « Car. »), et « Soumission en 24 h » apparaît dans les 125 premiers caractères : c'est le seuil approximatif où Meta coupe le texte sur mobile derrière « … Voir plus » (recherche vérifiée). Donc : accroche + bénéfice + zone + « Soumission en 24 h. », puis un saut de ligne et une courte ligne d'urgence ou de consigne.
- Titre ≤ 40 caractères, description ≤ 30 caractères (comptes entre parenthèses).
- Tutoiement pour L-anniv-40, L-mariage-love, L-prenom, L-chiffres-2027 et J-jeux-geants; vouvoiement pour L-corpo-merci et L-noel seulement (le décideur corpo est un responsable RH ou un patron). Jamais les deux dans une même pub (texte, titre et description).
- Lien : `https://evenox.ca/lettres-illuminees` + UTM de la section 7 (`utm_source=meta&utm_medium=paid_social&utm_campaign=lettres_froid&utm_content=<nom de la pub>`).
- Bouton CTA unique pour toutes les pubs : **« Obtenir un devis »** (dans Meta, niveau publicité : menu déroulant « Appel à l'action » → « Obtenir un devis »). Raison : c'est le seul bouton qui annonce exactement ce qui se passe après le clic (formulaire → devis), donc moins de clics curieux et un CPL plus propre (hypothèse à valider en semaine 3, voir les notes d'exécution).
- Chaque pub reçoit 1 vidéo 9:16 + 1 image 4:5 (Meta choisit le format selon le placement : Reels/Stories = 9:16, fil = 4:5). Les fichiers sont nommés selon 5.4 et la colonne « Créa » dit lesquels téléverser.

| Pub (= utm_content) | Texte principal (à coller tel quel, le saut de ligne inclus) | Car. | Titre (car.) | Description (car.) | CTA | Créa au lancement (28 sept.) | Créa ajoutée semaine 3 (12 oct.) |
|---|---|---|---|---|---|---|---|
| L-anniv-40 | Un « 40 » lumineux géant qui fait dire wow, livré et installé. Rive-Nord, Laval, Montréal. Soumission en 24 h.<br>Chaque mot se loue 1 fois par week-end. | 150 | Chiffres lumineux géants pour ton 40e (37) | Livré et installé. Rive-Nord (28) | Obtenir un devis | Reel A version « 40 » (9:16) + photo « 40 » de face (4:5) | Rien (on garde) |
| L-corpo-merci | Party de Noël au bureau? Un MERCI lumineux géant, livré en semaine. Rive-Nord, Laval, Montréal. Soumission en 24 h.<br>Dates de décembre limitées. | 143 | MERCI lumineux pour votre party de Noël (39) | Installation clé en main (24) | Obtenir un devis | Photo « MERCI » de face (4:5) + photo « MERCI » échelle humaine (9:16) | Reel C (9:16), comme nouvelle pub |
| L-mariage-love | LOVE en lettres lumineuses géantes : le coin photo de ta soirée. Rive-Nord, Laval, Montréal. Soumission en 24 h.<br>Bloque ta date. | 128 | LOVE lumineux pour ton mariage (30) | Coin photo clé en main (22) | Obtenir un devis | Photo « LOVE » de face (4:5) + photo « LOVE » avec une personne assise devant (9:16) | Reel B (9:16), comme nouvelle pub |
| L-prenom | Son prénom en lettres lumineuses géantes, livré et installé. Rive-Nord, Laval, Montréal. Soumission en 24 h.<br>Dis-nous le prénom et la date. | 139 | Son prénom en lettres lumineuses (32) | Baby shower, 1er anniversaire (29) | Obtenir un devis | Photo prénom court (« EMMA », ou « NOAH » si un seul M) de face (4:5) + même mot en 9:16 | Reel B (9:16) si le tournage a eu lieu dans un shower |
| L-chiffres-2027 | Un « 2027 » lumineux géant pour le jour de l'An, livré et installé. Rive-Nord, Laval, Montréal. Soumission en 24 h.<br>Dates des Fêtes limitées. | 141 | 2027 lumineux pour le jour de l'An (34) | Jour de l'An clé en main (24) | Obtenir un devis | Reel A version « 2027 » (9:16) + photo « 2027 » de face (4:5) | Rien (on garde) |
| J-jeux-geants | Beer pong, Jenga et Puissance 4 géants : la fête qui lève. Livrés chez toi : Rive-Nord, Laval, Montréal. Soumission en 24 h. | 124 | Jeux géants pour ta fête (24) | Beer pong, Jenga, Puissance 4 (29) | Obtenir un devis | Photo beer pong géant en action (4:5) + vidéo 8 s d'une partie (9:16), plan 7 de l'entrepôt | Photos de jeux en événement réel |
| L-obnl-gala (réserve retargeting, section 4) | Gala ou levée de fonds? Un MERCI lumineux géant, livré et installé. Rive-Nord, Laval, Montréal. Soumission en 24 h.<br>Dates d'automne limitées. | 141 | MERCI lumineux pour votre gala (30) | Installation clé en main (24) | Obtenir un devis | Non diffusée au lancement | Photo « MERCI » de face (4:5 + 9:16), même fichier que L-corpo-merci |
| L-baby (réserve retargeting, section 4) | BABY en lettres lumineuses géantes : la photo qu'on garde. Rive-Nord, Laval, Montréal. Soumission en 24 h.<br>Dis-nous ta date. | 124 | BABY lumineux pour ton shower (29) | Livré et installé. Rive-Nord (28) | Obtenir un devis | Non diffusée au lancement | Photo « BABY » de face (4:5 + 9:16), seulement si deux B sont en stock (section 2) |

Notes d'exécution :
- Dans Meta, colle le texte principal tel quel : sans emoji ni majuscules criardes (les emojis n'aident pas la qualité du lead et compliquent la lecture par les 45–55 ans; hypothèse). Le « <br> » du tableau = un vrai saut de ligne (touche Entrée) dans le champ « Texte principal ».
- Désactive les retouches automatiques de Meta, sinon Meta réécrit le texte, ajoute une musique ou recadre hors zones sûres : niveau publicité > « Configuration de la publicité » > « Améliorations Advantage+ créatif » > désactiver « Optimiser le texte par personne », « Améliorations standard » (recadrage, luminosité, superpositions) et « Ajouter de la musique ». On veut savoir quel texte et quelle créa performent.
- « L-noel » (section 4) = mot « NOËL » (4 lettres distinctes; si l'inventaire n'a pas de « Ë », utilise « E » : le tréma se lit quand même) avec le texte L-corpo-merci où « MERCI » devient « NOËL » (142 caractères, vouvoiement conservé) et la photo « NOËL » de face. Ne pas tourner « JOYEUSES FÊTES » : 3 E et 2 S, impossible avec un set standard d'une lettre par caractère, et rien n'est vérifié en stock (H9). Règle générale : avant de tourner un mot, compter les lettres et chiffres en double dans l'inventaire Booqable (voir 5.4).
- « L-paris » (retargeting seulement, section 4; pas au lancement du 28 septembre) = l'angle « soirée à thème » de la section 2 : mot « PARIS » photographié de face (4:5 et 9:16), tourné seulement si P, A, R, I, S sont en stock. Texte principal (à coller) : « PARIS en lettres lumineuses géantes : ta soirée à thème en lumière. Rive-Nord, Laval, Montréal. Soumission en 24 h.<br>Bloque ta date. » (≈ 130 caractères, CTA avant le 125e); titre « PARIS lumineux pour ta soirée à thème » (37); description « Soirée à thème clé en main » (26); bouton « Obtenir un devis ».
- La mention « Chaque mot se loue 1 fois par week-end » est vraie (H9 : un set de lettres = 1 location par week-end) et crée l'urgence sans mentir. Ne jamais écrire « une seule location par week-end » (laisse croire qu'Évenox ne fait qu'une location) ni « dernières dates » si ce n'est pas vérifié dans Booqable le jour même.
- « Montréal » dans les textes reste « Montréal » : la géographie Meta froid est le rayon de 35 km de la section 4 (donc Montréal-Nord / Ahuntsic / Saint-Laurent, H12); ne pas écrire « Montréal centre » ni « Rive-Sud » dans une pub Meta.
- Si quelqu'un demande le prix en commentaire, réponse publique unique : « Bonne question! Le prix dépend du nombre de lettres, des jours et de l'adresse de livraison. Envoie-nous ta date sur evenox.ca/lettres-illuminees et tu as ta soumission en 24 h. » Puis, en message privé, envoie le lien `https://evenox.ca/lettres-illuminees?utm_source=meta&utm_medium=paid_social&utm_campaign=lettres_froid&utm_content=commentaire` pour ne pas perdre la source. Masque les commentaires de concurrents et le spam (Meta Business Suite > Boîte de réception > commentaire > « Masquer »). Suite du traitement du lead : section 8.
- Test du bouton en semaine 3 (12 octobre) seulement si le CTR est < 1 % : duplique la pub la plus dépensière dans le MÊME ensemble (bouton droit > Dupliquer) en changeant uniquement le bouton pour « En savoir plus »; pas l'outil « Test A/B » de Meta, qui divise un budget déjà petit. Verdict après 150 $ dépensés sur chaque version, en lisant le CPL (H3), pas le CTR.

### 5.2 Google Ads — annonces responsives (RSA), une par groupe d'annonces

Rappels : une RSA accepte jusqu'à 15 titres (≤ 30 caractères chacun) et 4 descriptions (≤ 90 caractères chacune); Google les combine automatiquement et en affiche jusqu'à 3 et 2. Tu entres les 10 titres et les 4 premières descriptions; la 5e description est une remplaçante si Google affiche une « efficacité de l'annonce » faible. **Épingle le titre 1 en position 1** (icône d'épingle à droite du champ du titre → « Afficher en position 1 ») : c'est le seul épinglage; les autres titres restent libres pour que Google apprenne. Titres en casse de phrase (pas de majuscule à chaque mot : inhabituel en français et parfois signalé comme majuscules abusives). Aucun prix, aucun « gratuit », aucun point d'exclamation multiple.

**Groupe « Lettres lumineuses » (annonce de référence)**

Titres (≤ 30 caractères chacun) :

1. Location de lettres lumineuses (30) — épinglé position 1
2. Soumission en 24 h (18)
3. Lettres géantes Sainte-Thérèse (30)
4. Livraison Laval et Rive-Nord (28)
5. Lettres illuminées clé en main (30)

Titres bonus (≤ 30 caractères chacun) :

6. Location de chiffres lumineux (29)
7. Lettres lumineuses Montréal (27)
8. Mariage, 40e, party de Noël (27)
9. Installé et récupéré chez vous (30)
10. Jeux géants et lettres géantes (30)

Descriptions (≤ 90 caractères chacune) :

1. Lettres et chiffres lumineux géants, livrés et installés : Rive-Nord, Laval, Montréal. (86)
2. Décrivez votre événement en 2 minutes : soumission détaillée en 24 h, sans engagement. (86)
3. Mariage, 40e, baby shower ou party de Noël : réservez votre date avant qu'elle parte. (85)
4. De Sainte-Thérèse : livraison, installation et reprise clé en main, frais selon adresse. (88)
5. (remplaçante) Ajoutez beer pong géant, Jenga géant, tables et chaises : un seul fournisseur, un devis. (88)

Compléments à saisir dans la même annonce :
- URL finale : `https://evenox.ca/lettres-illuminees` (sans UTM dans le champ « URL finale »). Les UTM Google, y compris `utm_term={keyword}`, se mettent dans le « Suffixe d'URL finale » de chaque groupe d'annonces (valeurs en section 4), jamais dans l'URL finale de l'annonce; détail en section 7.
- Chemins d'affichage (≤ 15 caractères chacun) : chemin 1 = `lettres` (7), chemin 2 = `soumission-24h` (14). URL affichée résultante : evenox.ca/lettres/soumission-24h.

**Les autres groupes : copie l'annonce de référence puis applique UNIQUEMENT ces substitutions** (tout ce qui n'est pas listé reste identique; chaque titre reste unique dans sa RSA, Google refuse les doublons) :

| Groupe | Titres remplacés (car.) | Descriptions remplacées (car.) | Chemin 1 (car.) | URL finale | utm_campaign (modèle de suivi, section 7) |
|---|---|---|---|---|---|
| Chiffres lumineux | T1 « Location de chiffres lumineux » (29, épinglé pos. 1) · T3 « Chiffres géants Sainte-Thérèse » (30) · T6 « Location de lettres lumineuses » (30) · T7 « Chiffres lumineux Montréal » (26) | D1 « Chiffres lumineux géants (40, 50, 2027), livrés et installés : Rive-Nord, Laval, Montréal. » (90) | `chiffres` (8) | evenox.ca/lettres-illuminees | recherche_lettres |
| Jeux géants | T1 « Location de jeux géants » (23, épinglé pos. 1) · T3 « Jeux géants Sainte-Thérèse » (26) · T5 « Beer pong et Jenga géants » (25) · T6 « Puissance 4 géant à louer » (25) · T7 « Jeux géants Laval et Montréal » (29) | D1 « Beer pong, Jenga et Puissance 4 géants, livrés et installés : Rive-Nord, Laval, Montréal. » (89) · D3 « Ajoutez des lettres lumineuses, des tables et des chaises : un seul fournisseur, un devis. » (90) · D5 retirée | `jeux-geants` (11) | Page jeux existante d'evenox.ca (copie l'URL exacte depuis le menu du site en semaine 0); si aucune page jeux n'existe, evenox.ca/lettres-illuminees (le bloc jeux de la section 6 doit alors être visible) | recherche_jeux |
| Tables-chaises-vaisselle | T1 « Location de tables et chaises » (29, épinglé pos. 1) · T3 « Tables chaises Sainte-Thérèse » (29) · T5 « Nappes et vaisselle incluses » (28) · T6 « Location vaisselle et nappes » (28) · T7 « Tables et chaises Rive-Nord » (27) | D1 « Tables, chaises, nappes et vaisselle, livrées et reprises : Rive-Nord, Laval, Montréal. » (87) · D3 « Ajoutez des lettres lumineuses ou des jeux géants : un seul fournisseur, un seul devis. » (87) · D5 retirée | `tables-chaises` (14) | Page mobilier existante d'evenox.ca (même méthode); sinon evenox.ca/lettres-illuminees | recherche_mobilier |
| Marque Évenox | T1 « Évenox location événementielle » (30, épinglé pos. 1) · T3 « Évenox Sainte-Thérèse » (21) · T5 « Site officiel Évenox » (20) · T7 « Lettres lumineuses et jeux » (26) | D1 « Évenox, location d'équipement événementiel à Sainte-Thérèse. Soumission en 24 h. » (80) | `evenox` (6) | evenox.ca/lettres-illuminees | recherche_lettres |

Le groupe optionnel « Lettres EN » n'a pas de copy dans ce document : il n'ouvre qu'après le verdict des semaines 3–4 (section 4) et exige la version anglaise de la page (section 6).

**Composants (ex-extensions), au niveau de la campagne EVX_GOOGLE_RECH_LOCATION** (menu : Composants > bouton « + » > type de composant). Règle dure de Google : chaque lien annexe doit avoir une URL différente de l'URL finale de l'annonce et des autres liens annexes; un lien vers evenox.ca/lettres-illuminees est donc refusé (« lien annexe en double »). Un lien annexe sans page réelle et distincte n'est pas créé : au lancement, vise 4 liens, minimum 2.

| Lien annexe (≤ 25 car.) | Ligne 1 (≤ 35 car.) | Ligne 2 (≤ 35 car.) | URL finale |
|---|---|---|---|
| Jeux géants (11) | Beer pong, Jenga, Puissance 4 (29) | Livrés et installés chez vous (29) | Page jeux existante d'evenox.ca (URL exacte du menu) |
| Tables et chaises (17) | Nappes et vaisselle aussi (25) | Livraison et reprise incluses (29) | Page mobilier existante d'evenox.ca |
| Demander une soumission (23) | Réponse en 24 h (15) | Décrivez votre événement (24) | evenox.ca/contact (page contact existante; si son URL est différente, copie-la depuis le menu) |
| À propos d'Évenox (17) | Basés à Sainte-Thérèse (22) | Rive-Nord, Laval, Montréal (26) | evenox.ca/a-propos (page existante; sinon ne crée pas ce lien) |

- Accroches (≤ 25 caractères), les 6 de la section 4 : « Livraison et installation » (25), « Reprise après l'événement » (25), « Soumission en 24 h » (18), « Basés à Sainte-Thérèse » (22), « Clé en main » (11), « Livraison selon l'adresse » (25); « Partys de Noël » (14) s'ajoute le lundi 26 octobre.
- Composant d'appel : 514-559-1893; Composants > Appel > Options avancées > « Calendrier du composant » : tous les jours, 8 h–20 h (mêmes heures ouvrables que le SLA de la section 8; un appel manqué se rappelle dans l'heure). Chaque appel reçu via Google est tagué « Google » dans Booqable à la qualification (section 7); l'appel compte comme conversion secondaire « Appel depuis annonce » à partir de 30 s (section 7).
- Composant d'images : 4 photos carrées 1 200 × 1 200 px et 4 photos 1 200 × 628 px (1,91:1), JPG ≤ 5 Mo, mot complet allumé de face, sans texte incrusté ni logo seul (Google refuse les images avec texte superposé). Menu : Composants > + > Image.
- Composant de lieu : lié à la fiche Google Business Profile (section 3 pour la fiche, section 7 pour le lien).

### 5.3 Trois scripts Reels (6–8 s, format 9:16)

Specs communes : 1080 × 1920 px, MP4, 30 ips, 8 s (l'attention décroche après ≈ 3 s; hypothèse). Zones sûres (zone sûre unifiée Meta 2026, recherche vérifiée) : aucun texte dans les 270 px du haut, les 670 px du bas ni 65 px de chaque côté; place tout le texte, y compris les cartes finales, entre y = 270 px et y = 1 250 px de hauteur, centré horizontalement entre x = 65 px et x = 1 015 px (centre visuel autour de y = 760 px). Vérifie dans l'aperçu « Reels » de Meta avant de publier. Texte à l'écran en gros (≥ 70 px), blanc avec ombre, centré. Pas de voix hors champ : 1 spectateur sur 2 regarde sans son (hypothèse), donc tout passe par le texte; sous-titres inutiles s'il n'y a pas de parole.

Son et montage : montage dans CapCut (gratuit, téléphone). Piste libre de droits téléchargée depuis Meta Sound Collection (facebook.com/sound/collection, filtre « Business-friendly ») ou la bibliothèque CapCut « Commercial »; synchronise les coupes selon le tableau (clic d'interrupteur, démarrage à la coupe, arrêt net sur la carte finale) et exporte le MP4 avec le son intégré. Ne pas ajouter de musique dans l'éditeur de la pub Meta (la piste serait posée sur toute la vidéo, sans synchronisation) et jamais une chanson commerciale ni un « son tendance » d'un compte personnel : ces sons ne sont pas licenciés pour la publicité et la pub est refusée.

Chaque script se termine par une carte finale de 2 s (6–8 s) : 1 s ne suffit pas pour lire le CTA, et le Reel boucle de toute façon.

**Script A — « satisfying » (allumage), pubs L-anniv-40 (version « 40 ») et L-chiffres-2027 (version « 2027 »)**

| Temps | Plan | Texte à l'écran | Son | Note |
|---|---|---|---|---|
| 0–1 s | Gros plan : chiffre « 40 » éteint dans l'entrepôt, lumière tamisée | « Attends… » | Silence, puis clic d'interrupteur à 1 s | Le clic accroche l'oreille |
| 1–3 s | Les ampoules s'allument une à une, caméra fixe sur trépied | (aucun) | Montée musicale douce | Ne pas bouger la caméra |
| 3–5 s | Recul lent : le « 40 » complet, brillant, avec Alexandre à côté pour l'échelle | « Livré, installé, repris » | Musique | Échelle humaine = compréhension immédiate |
| 5–6 s | Pano de gauche à droite sur d'autres lettres allumées (« LOVE », « MERCI ») | « Rive-Nord · Laval · Montréal » | Musique | Montre la variété sans le dire |
| 6–8 s | Carte finale : logo Évenox sur fond noir | « Soumission en 24 h → evenox.ca/lettres-illuminees » | Musique coupée net à 6 s | CTA lisible 2 s complètes |

**Script B — avant/après, pubs L-mariage-love et L-prenom (ajouté en semaine 3)**

| Temps | Plan | Texte à l'écran | Son | Note |
|---|---|---|---|---|
| 0–1 s | Salle vide, lumière plate, tables sans nappes | « AVANT » | Silence | Vrai « avant » chez un client (consentement, 5.4) |
| 1–3 s | Coupe franche : même angle, « LOVE » allumé, nappes, chaises dressées | « APRÈS » | Piste Sound Collection qui démarre pile à la coupe | Même angle exact = l'effet vient du matériel |
| 3–5 s | Invités qui se placent devant les lettres pour une photo (de dos ou flous sans autorisation d'image) | « Le coin photo de ta soirée » | Musique | Pas de visage sans autorisation signée (5.4) |
| 5–6 s | Gros plan ampoules chaudes, puis la table dressée | « Lettres · tables · jeux géants » | Musique | Glisse l'upsell (section 8) |
| 6–8 s | Carte finale : logo Évenox sur fond noir | « Réserve ta date : soumission en 24 h → evenox.ca/lettres-illuminees » | Coupe nette | CTA lisible 2 s complètes |

**Script C — corpo / party de Noël, pubs L-corpo-merci et L-noel (ajouté en semaine 3)**

| Temps | Plan | Texte à l'écran | Son | Note |
|---|---|---|---|---|
| 0–1 s | Bureau ordinaire, quelqu'un regarde un calendrier de décembre | « Le party de Noël, c'est réservé? » | Silence | Le stress du responsable RH, sans parole; texte vrai tout l'automne (pas de « dans 3 semaines ») |
| 1–3 s | Camion ou VUS qui recule, porte arrière ouverte, lettres emballées visibles (si pas de lettrage Évenox sur le véhicule, cadre la porte ouverte et les lettres, pas la carrosserie) | « On livre en semaine » | Bruit du véhicule, puis musique | Montre le clé en main |
| 3–5 s | « MERCI » qui s'allume dans la salle de conférence ou la cafétéria | « MERCI » (le mot lui-même) | Musique | Le produit fait le message |
| 5–6 s | Équipe qui se prend en photo devant (autorisation d'image) ou lettres seules avec ballons | « Vos employés vont le partager » | Musique | Argument corpo : visibilité interne |
| 6–8 s | Carte finale : logo Évenox sur fond noir | « Dates de décembre limitées · soumission en 24 h → evenox.ca/lettres-illuminees » | Coupe nette | CTA lisible 2 s complètes |

Priorité de tournage et lien avec le lancement :
- A d'abord : faisable seul à l'entrepôt le lundi 21 septembre en soirée (5.4), en deux versions (« 40 », « 2027 »). C'est la seule vidéo obligatoire pour lancer le 28 septembre : sans Reel A ni les 6 photos de face, il n'y a rien à publier le vendredi 25 (section 10).
- Au lancement du 28 septembre, L-mariage-love, L-prenom et L-corpo-merci tournent avec les photos statiques du mot de face (plan entrepôt no 3 : « LOVE », prénom court, « MERCI ») en 4:5 et 9:16; la photo « NOËL » attend l'entrée de L-noel le lundi 26 octobre (section 4).
- C ensuite : tournable à l'entrepôt avec une table de bureau et un calendrier si aucun client corpo n'est disponible avant le 11 octobre.
- B en dernier : exige un événement réel; vise le premier mariage ou shower d'octobre.
- Les Reels B et C sont ajoutés comme NOUVELLES pubs dans le même ensemble (sans modifier ni supprimer les pubs existantes, pour ne pas relancer l'apprentissage) à la semaine 3 (12 octobre) au plus tôt.

### 5.4 Brief photo/vidéo pour le tournage

**Objectif** : produire en une soirée à l'entrepôt (semaine 0) plus deux événements clients (octobre) tout le matériel des 8–10 créas listées en section 3, sans photographe pro.

**Créneau entrepôt** : lundi 21 septembre 2026, 18 h 30 – 21 h 30 (coucher du soleil ≈ 19 h à Sainte-Thérèse, ordre de grandeur; vérifie l'heure exacte sur l'appli Météo). 18 h 30 – 19 h : montage des mots, nettoyage, tests d'exposition; 19 h – 21 h 30 : tournage néons éteints, porte de garage fermée. Ce créneau est repris dans le plan jour par jour de la section 10; les photos sont ainsi prêtes pour la page (mardi) et les créas (jeudi).

**Avant de tourner — vérification inventaire (15 min, dans Booqable > Inventaire)** : compter les lettres et chiffres en double. Les mots du tournage exigent : « 40 » (un 4, un 0), « 2027 » (DEUX « 2 », un 0, un 7), « LOVE », « MERCI », « NOËL » (Ë ou E), un prénom court sans accent (« EMMA » si deux M, sinon « NOAH », « MIA », « LOU »). Décision par défaut si un seul « 2 » en stock : deux prises « 20 » et « 27 » assemblées dans Canva (3.3) et la pub est lancée; l'achat d'un deuxième « 2 » se décide au verdict. Si deux mots partagent une lettre (ex. le « L » de LOVE et de NOËL), tourne-les l'un après l'autre, jamais côte à côte.

Plans à l'entrepôt (dans cet ordre, 2 h de tournage) :
1. Allumage : caméra fixe, 3 prises par mot (« 40 », « 2027 », « LOVE », « MERCI », « NOËL », le prénom court); filme 10 s avant et 10 s après l'allumage. Sert aux Reels A (« 40 », « 2027 »).
2. Gros plans ampoules : 5 photos et 2 vidéos de 5 s par style d'ampoule, mise au point manuelle, arrière-plan flou.
3. Mot complet de face, allumé, sur fond sombre et uni : 3 photos par mot (ce sont les visuels statiques des pubs au lancement).
4. Échelle humaine : Alexandre debout à côté du mot, puis une personne assise devant (photo « ce que tes invités vont faire »).
5. Transport : lettres emballées, chargement dans le véhicule, sangles; 5 photos + 1 vidéo de 8 s (crédibilise le clé en main et la propreté). Cette vidéo sert aussi au plan 1–3 s du script C.
6. Propreté : lettre nettoyée au chiffon, lettres alignées et sans poussière; 3 photos (utile pour la page, pas pour les pubs).
7. Jeux géants : beer pong géant, Jenga géant, Puissance 4 géant installés et en action (deux personnes qui jouent), 5 photos + 1 vidéo de 8 s par jeu. Sert à la pub J-jeux-geants.

Plans en événement (avec consentement du client au champ « Photos matériel », 30 min sur place à la livraison ou à la reprise) :
1. Lettres dans le décor réel (salle, tente, salon), de jour et une fois la salle éclairée.
2. Invités qui prennent des photos devant les lettres (de dos ou visages non identifiables sans autorisation d'image individuelle).
3. Jeux géants en action, invités qui rient (mêmes règles de visage).
4. Table dressée : nappes, chaises, vaisselle, vue d'ensemble puis détail d'un couvert.
5. Le plan « AVANT » : toujours filmer la salle vide 2 min avant d'installer, même angle et même hauteur de trépied que l'« APRÈS » (marque la position des pieds du trépied au ruban).

Équipement minimal : ton téléphone en mode vidéo 4K 30 ips (une seule résolution : le 4K permet de recadrer la même prise en 9:16, 4:5 et 1:1 sans perte; l'export se fait en 1080 × 1920 depuis CapCut), HDR désactivé. Verrouillage de l'exposition, sinon les ampoules brûlent l'image : appuie 2 secondes sur les lettres à l'écran jusqu'à l'affichage « AE/AF verrouillé » (« AE/AF LOCK »), puis glisse le petit soleil vers le bas jusqu'à ce que les ampoules gardent leur détail. Un trépied de téléphone avec support (≈ 30 $), une lampe LED à intensité variable (≈ 40 $) placée à 45° derrière la caméra pour déboucher les ombres, un chiffon microfibre, une rallonge. Pas de stabilisateur nécessaire tant que le trépied est utilisé.

Moments : crépuscule et soirée (entrepôt : néons baissés, porte de garage fermée; événement : 20–30 min après le coucher du soleil, quand le ciel est bleu foncé et que les lettres dominent). Jamais en plein midi.

Formats à livrer :

| Échéance | Usage | Format | Quantité minimale | Durée / poids |
|---|---|---|---|---|
| Lancement 28 sept. (obligatoire pour publier les pubs le vendredi 25) | Reels et Stories (Meta) | Vertical 9:16, 1080 × 1920 | Reel A en 2 versions (« 40 », « 2027 ») + 6 photos (un mot par pub : 40, MERCI, LOVE, prénom, 2027, NOËL) + 1 photo jeux | 6–8 s, MP4 ≤ 4 Go |
| Lancement 28 sept. (obligatoire) | Fil Facebook/Instagram | 4:5, 1080 × 1350 (format recommandé par Meta pour le fil mobile), exporté depuis le master 4K | 6 photos de mot de face + 1 photo jeux + Reel A recadré | ≤ 8 s |
| Lancement 28 sept. | Page lettres (section 6) | Horizontal 16:9 et carré 1:1 | 8 photos, 1 vidéo A | JPG ≤ 300 Ko chacun |
| Lancement 28 sept. | Google Ads (composant d'images) | Carré 1 200 × 1 200 et 1 200 × 628 (1,91:1) | 4 photos par format, sans texte incrusté | JPG ≤ 5 Mo |
| Semaine 3 (12 oct.) | Reels (Meta), nouvelles pubs | Vertical 9:16, 1080 × 1920 | Reels B et C + photos d'événement réel | 6–8 s, MP4 ≤ 4 Go |

**Consentement pour l'image du matériel dans le décor (client)** — Booqable n'offre pas de case à cocher sur le devis PDF (champs personnalisés : texte, liste déroulante, date, téléphone, adresse), donc trois gestes :
1. Paramètres > Documents > Devis (et Contrat) > conditions générales : coller le paragraphe ci-dessous, texte seulement, sans cases.
2. Paramètres > Champs personnalisés > Clients : créer le champ « Photos matériel », type « Liste déroulante », valeurs « Accepte » / « Refuse » / « Non demandé », affiché sur le devis et le contrat. Valeur par défaut « Non demandé » = aucune photo tant que le client n'a pas répondu « Accepte » (Loi 25 : consentement manifeste, jamais présumé).
3. À la qualification (section 8), Alexandre pose la question par courriel : « Est-ce qu'on peut photographier le matériel dans votre décor pour nos publicités? Répondez OUI ou NON. » Il inscrit la réponse dans le champ et garde le courriel dans Gmail (étiquette « Consentement photo ») : c'est la preuve.

```
Photos et vidéos : Évenox peut photographier ou filmer le matériel loué dans son décor lors de la livraison, de l'événement ou de la reprise, et utiliser ces images à des fins promotionnelles (site web, réseaux sociaux, publicités), si le client a répondu « Accepte » à la question « Photos matériel ». Aucune personne identifiable n'apparaît sans son autorisation écrite distincte. Le client peut refuser ou retirer son accord à tout moment en écrivant à evenox.ca@gmail.com, sans frais ni conséquence sur sa location.
```

**Autorisation d'image des personnes identifiables (scripts B et C, invités, employés)** : formulaire Google Form « EVX – Autorisation d'image » (champs : nom, courriel, date; case non précochée « J'autorise Évenox à utiliser mon image (photo et vidéo) dans ses publicités et sur ses réseaux pendant 3 ans, sans rémunération; je peux retirer cette autorisation en écrivant à evenox.ca@gmail.com »; case « Je signe pour un mineur dont je suis le parent ou tuteur : nom de l'enfant »). Le lien est imprimé en code QR collé sur le trépied et montré sur place. Pour un enfant (baby shower, 1er anniversaire, fête de finissant), seul le parent ou tuteur signe. Sans réponse au formulaire : visage flouté dans CapCut ou plan de dos, sans exception. Les réponses restent dans la feuille Google liée au formulaire, dossier Drive « EVX – Créas / 03_consentements ».

Nommage des fichiers (un seul dossier Google Drive « EVX – Créas », sous-dossiers `01_brut`, `02_final`, `03_consentements`) :

```
EVX_AAAAMMJJ_lieu_sujet_plan_format_vN.ext

sujet  = nom exact de la pub (L-anniv-40, L-corpo-merci, L-mariage-love, L-prenom,
         L-chiffres-2027, L-noel, L-paris, L-obnl-gala, L-baby, J-jeux-geants) = valeur utm_content de la section 7
plan   = allumage | face | ampoules | echelle | transport | proprete | avant-apres | jeux | table
format = 9x16 | 4x5 | 1x1 | 16x9 | 1200x628

Exemples :
EVX_20260925_entrepot_L-anniv-40_allumage_9x16_v1.mp4
EVX_20260925_entrepot_L-mariage-love_face_4x5_v1.jpg
EVX_20261010_boisbriand_L-mariage-love_avant-apres_9x16_v2.mp4
EVX_20260925_entrepot_J-jeux-geants_jeux_4x5_v1.jpg
```

Le sujet reprend le nom exact de la pub pour que la colonne `utm_content` du dashboard (section 7) corresponde au fichier sans réfléchir; un fichier dont le sujet n'est pas un nom de pub n'est pas téléversé dans Meta.

## 6. Landing page — wireframe textuel

Page cible : `evenox.ca/lettres-illuminees` (mobile-first, bâtie dans Divi; hypothèse WordPress + Divi à confirmer lundi 21, voir section 3). Une seule page, un seul objectif : le formulaire de soumission. Tout ce qui ne mène pas au formulaire ou ne rassure pas est retiré. Aucun prix n'apparaît nulle part : la réponse au prix est toujours « soumission en 24 h ».

Outils utilisés sur cette page (tous choisis en section 3, on ne les rediscute pas ici) : Divi Builder (mise en page), **Fluent Forms** (formulaire, champs cachés UTM, redirection, Turnstile), Yoast SEO (titre, méta, noindex; si Rank Math est déjà actif, on le garde, mêmes champs), Complianz (bannière Loi 25), PixelYourSite (Pixel Meta) et Site Kit by Google (balise Google Ads), voir section 7, WP Rocket + Imagify (vitesse, WebP). Le module Divi « Contact Form » n'est pas utilisé : pas de champ caché pour les UTM, pas d'entrées stockées (un courriel de notification perdu = lead perdu).

Ancres de la page (mêmes noms partout dans le document) : `#soumission` = formulaire (ancre déjà utilisée par la section 3 et par les liens annexes Google de la section 4); `#chiffres` = bloc chiffres de la galerie; `#jeux` et `#mobilier` = section « Jeux géants et mobilier » (pages d'atterrissage de secours des groupes Google « Jeux géants » et « Tables-chaises-vaisselle », sections 4 et 5).

Vocabulaire : « lettres illuminées » (H1, URL) et « lettres lumineuses » (SEO title, sous-titre, groupe d'annonces Google) sont volontairement employés tous les deux, parce que les gens cherchent les deux. Ne pas « harmoniser ».

Ordre des sections, de haut en bas : En-tête réduit → 6.1 Hero → 6.2 Bénéfices → 6.3 Galerie → 6.4 Comment ça marche → 6.5 Zones et tarification → 6.6 Jeux géants et mobilier → 6.7 FAQ → 6.8 Preuves → 6.9 Formulaire → 6.10 Footer, plus la barre CTA collante (téléphone) et la page 6.11 `/merci`.

**En-tête réduit (pas le menu du site).** Sans réglage, la page hérite de l'en-tête et du menu complet d'evenox.ca, et le trafic payé s'échappe vers d'autres pages. Réglage exact : Divi → Theme Builder → « Ajouter un nouveau modèle » → Utiliser sur : « Pages spécifiques » → cocher seulement « Lettres illuminées » → « Ajouter un en-tête personnalisé » → « Créer un en-tête personnalisé » : 1 rangée, 3 colonnes; logo Évenox à gauche (module Image, lien vers `#haut`, ID CSS `haut` sur la section Hero; pas vers l'accueil); au centre le numéro « 514-559-1893 » en lien `tel:+15145591893` (masqué sur téléphone : Avancé → Visibilité → Désactiver sur : Téléphone); à droite le bouton « Soumission en 24 h » → `#soumission`. Dans le même modèle, « Ajouter un pied de page personnalisé » = le footer 6.10. La page `/merci` n'utilise pas ce modèle (elle garde l'en-tête normal du site).

### 6.1 Hero

Objectif : en 3 secondes, la personne comprend quoi (lettres illuminées géantes), où (Rive-Nord, Laval, Montréal) et quoi faire (demander une soumission).

Contenu exact à coller (H1 et textes SEO identiques à la section 3) :

```
H1 (module Divi « Titre », niveau H1) : Lettres illuminées géantes à louer, livrées sur la Rive-Nord, à Laval et à Montréal
Sous-titre : LOVE, 40, MERCI, ton prénom ou 2027 : des lettres lumineuses prêtes à brancher, à ramasser à Sainte-Thérèse ou livrées à ta porte. Propres, testées, clé en main. Soumission en 24 h.
CTA principal (bouton plein, pleine largeur sur téléphone) : Obtenir ma soumission en 24 h   → ancre #soumission
CTA secondaire (bouton contour) : Appeler 514-559-1893   → lien tel:+15145591893
Micro-ligne sous les boutons : 2 minutes, sans engagement, réponse en moins de 24 h.
Bandeau zone (petite police, sous la micro-ligne) : Sainte-Thérèse · Blainville · Laval · Terrebonne · Saint-Jérôme · Montréal — jusqu'à 60 km de Sainte-Thérèse, ramassage ou livraison
```

Visuel et mise en page (une seule règle, mobile d'abord) : la photo (lettres allumées dans un vrai événement, ex. « LOVE » en soirée, ambiance chaude; photo « mot complet de face » de la séance de la section 5) est placée en **arrière-plan de la section** (Section Hero → Contenu → Arrière-plan → onglet « Image »), avec une superposition noire à 40 % (même onglet, « Superposition d'image », couleur `rgba(0,0,0,0.4)`) et le texte en blanc par-dessus. Hauteur de la section sur téléphone : Design → Dimensionnement → Hauteur minimale = 90 vh (pas plus). Contrôle obligatoire : dans l'aperçu « Téléphone » de Divi (icône en bas à gauche du Visual Builder, largeur 360 px), le bouton « Obtenir ma soumission en 24 h » est visible sans défiler. Si ce n'est pas le cas, raccourcir le sous-titre, jamais le H1. Pas de mise en page « image en haut, texte en dessous » sur téléphone : elle pousse le bouton sous la ligne de flottaison. Sur bureau, le numéro « 514-559-1893 » est aussi écrit en texte à côté du bouton « Appeler » (un lien `tel:` ne fait rien sur un ordinateur).

Vidéo de fond, sur bureau seulement : le Reel L-anniv-40_reel de la section 5 (allumage) exporté en MP4 H.264, sans son, 1280×720, 6–8 s en boucle, ≤ 3 Mo, téléversé dans la médiathèque WordPress (Médias → Ajouter), puis Section Hero → Contenu → Arrière-plan → onglet « Vidéo » → « Vidéo d'arrière-plan MP4 » = ce fichier; la photo reste dans l'onglet « Image » comme repli. Divi ne lit pas les vidéos de fond sur téléphone (comportement par défaut : la photo de repli s'affiche); ne rien changer à ce comportement et vérifier sur ton téléphone que c'est bien la photo qui apparaît. Au lancement, si le Reel n'est pas prêt : photo seulement, on ajoute la vidéo plus tard. Jamais de YouTube ou de Vimeo intégré (témoins tiers avant consentement = Loi 25, et lenteur). Pas de carrousel dans le hero.

### 6.2 Bénéfices (4 cartes)

Objectif : répondre aux 4 objections silencieuses (compliqué? sale? long? loin?).

| Carte | Titre (≤ 30 car.) | Texte court |
|---|---|---|
| 1 | Clé en main | Tu choisis ton mot, on s'occupe du reste. Tu branches, tu allumes, tu profites. |
| 2 | Propre et testé | Chaque pièce est nettoyée et testée avant chaque location. |
| 3 | Soumission en 24 h | Tu remplis le formulaire, tu reçois ta soumission détaillée en 24 h. |
| 4 | Ramassage ou livraison | Ramassage à Sainte-Thérèse, ou livraison à ta porte (frais selon l'adresse). |

Visuel : module Divi « Blurb » par carte, icône simple à gauche du texte, titre réglé en H2 (Blurb → Contenu → Titre → Niveau de titre : H2); 1 colonne sur téléphone (comportement Divi par défaut, cartes compactes), 4 colonnes sur bureau. Pas de CTA dans cette section.

### 6.3 Galerie « Les mots qu'on nous demande le plus »

Objectif : faire désirer et faire voir que « son » mot existe. Mêmes photos que les créas Meta (section 5) : quand la pub et la page montrent la même image, le taux page → lead monte (cible 8 %, H13, hypothèse).

```
Titre (H2) : Les mots qu'on nous demande le plus
Sous-titre : Lettres, chiffres et symboles. Chaque mot est réservé pour une seule fête par week-end : réserve tôt pour l'avoir.
```

Grille Divi « Galerie » : 2 colonnes sur téléphone, 3 sur bureau, **8 tuiles exactement** (tableau ci-dessous), légende « mot — type d'événement », texte alternatif (Galerie → image → « Texte alternatif ») = la légende. Photos réelles seulement (séance photo de la section 5 ou photos clients avec permission écrite), exportées en 4:5 (mêmes fichiers que les créas Meta), converties en WebP ≤ 250 Ko par Imagify. Pas d'images de banque.

Règle de repli, à appliquer telle quelle : si un mot n'a aucune photo réelle, on retire sa tuile (jamais la photo d'un autre mot). Minimum obligatoire pour publier : 4 tuiles (LOVE, 40, MERCI, prénom). Publier avec 4 tuiles plutôt que d'attendre la 8e (même logique que le critère NO-GO de la section 3). Un mot jamais loué (ex. « 2027 ») se photographie mis en scène à l'entrepôt lors de la séance de la section 5 : c'est une photo réelle des vraies lettres, donc acceptable. Entretien : le 1er janvier 2027, la tuile et le sous-titre du hero passent à « 2028 » (note dans le calendrier de maintenance, section 10).

| Tuile | Légende | Condition |
|---|---|---|
| LOVE | LOVE — mariage, fiançailles, Saint-Valentin | Obligatoire |
| 40 | 40 — anniversaire (aussi 30, 50, 60) | Obligatoire |
| MERCI | MERCI — party de bureau, reconnaissance des employés | Obligatoire |
| Prénom court (« EMMA », ou « NOAH » selon l'inventaire, section 5) | Ton prénom — shower, baptême, anniversaire d'enfant | Obligatoire; prénom sans accent tant que l'inventaire des lettres accentuées n'est pas confirmé (6.13) |
| 2027 | 2027 — jour de l'An, party de Noël corpo | Photo mise en scène à l'entrepôt |
| PARIS | PARIS — thématique, bal, événement de quartier | Seulement si la photo existe |
| BABY | BABY — shower, révélation de sexe | Seulement si la photo existe et si le B est en stock en double exemplaire (6.13) |
| Lettres + jeux géants | Lettres + jeux géants — party extérieur, festival | Seulement si la photo existe |

Sous la grille, une rangée avec ID CSS `chiffres` (Rangée → Avancé → ID CSS) : mini-titre « Chiffres lumineux : 18, 30, 40, 50, 60 et 2027 » + une photo de chiffres + une ligne « Pour un anniversaire marquant ou le jour de l'An. Indique tes chiffres dans le formulaire. » (c'est la cible du lien annexe Google « Chiffres lumineux », section 4).

Bouton contour sous la section : « Je veux mon mot → soumission en 24 h » → `#soumission`.

### 6.4 Comment ça marche (3 étapes)

Objectif : montrer que le processus est court et sans surprise.

```
Titre (H2) : Comment ça marche
1. Tu remplis le formulaire (2 minutes). Ton mot, ta date, ta ville, ton type d'événement.
2. Tu reçois ta soumission en 24 h. Soumission détaillée envoyée par courriel (Booqable), sans engagement.
3. Tu bloques ta date avec un dépôt de 20 %. Lien de paiement sécurisé. Le solde se règle 7 jours avant l'événement [à confirmer : même règle que le devis et les courriels Booqable, section 8].
Puis : le jour J, tu branches, tu allumes, tu profites.
```

Visuel : 3 modules « Blurb » numérotés, en ligne sur bureau, empilés sur téléphone. CTA sous les étapes : « Commencer ma demande » → `#soumission`.

### 6.5 Zones et tarification (sans prix fixes)

Objectif : qualifier la zone et expliquer la logique du prix sans afficher de montant (règle : aucun prix hors devis Booqable).

```
Titre (H2) : Combien ça coûte?
Texte : Le prix dépend de trois choses : le nombre de pièces (lettres, chiffres, symboles), la durée (un week-end, ou en semaine pour un événement corpo : une journée ou plusieurs jours) et la distance de livraison. Plutôt que d'afficher un prix qui ne correspond pas à ton projet, on t'envoie une soumission claire en 24 h. Ramassage inclus à notre entrepôt de Sainte-Thérèse; livraison à ta porte en option.
Puce sous le texte : Événement en semaine (party de bureau, lancement, 5 à 7)? Indique tes dates dans le formulaire : la location de semaine se fait souvent sur plusieurs jours.
```

Tableau à afficher : Divi n'a pas de module « tableau ». Utiliser un module « Texte », passer l'éditeur en mode « Texte » (onglet à droite de « Visuel ») et coller un tableau HTML de 3 colonnes (`<table>`, une ligne `<tr>` par option). Sur téléphone, Divi l'affiche en défilement horizontal : garder les textes courts.

| Option | Ce que ça comprend | Frais |
|---|---|---|
| Ramassage à Sainte-Thérèse | Tu passes au 215 boul. René-A.-Robert avec un véhicule adapté (dimensions à confirmer dans la soumission) | Aucuns frais de livraison |
| Livraison porte — Rive-Nord et Laval | Livraison et reprise à l'adresse de l'événement | Frais selon l'adresse, indiqués dans la soumission (les plus bas de nos zones) |
| Livraison porte — Montréal et Rive-Sud (jusqu'à 60 km de Sainte-Thérèse) | Livraison et reprise | Frais selon la distance, indiqués dans la soumission |

Phrase de zone, affichée telle quelle sous le tableau (même phrase que la section 2 et que le script de non-qualification de la section 8) : « Nos frais de livraison sont calculés selon ton adresse : les plus bas sur la Rive-Nord et à Laval. Montréal et Rive-Sud (jusqu'à 60 km de Sainte-Thérèse) : livraison possible, frais indiqués dans ta soumission. Au-delà de 60 km, on ne livre pas; le ramassage à notre entrepôt reste possible. »

(Note interne, ne pas afficher : H12 = rien de livré au-delà de 60 km; on n'écrit nulle part « écris-nous quand même » ni « Laurentides », pour ne pas payer des clics de leads hors zone, H4.)

CTA : « Obtenir ma soumission en 24 h » → `#soumission`.

### 6.6 Jeux géants et mobilier (ancres `#jeux` et `#mobilier`)

Objectif : deux rôles. 1) Upsell : une personne qui vient pour les lettres apprend qu'on fait aussi les jeux et le mobilier (panier mix 800 $, H1, hypothèse). 2) Page d'atterrissage de secours : tant que les pages `evenox.ca/jeux-geants` et `evenox.ca/tables-chaises` (URL à confirmer) n'ont pas leur propre formulaire, les groupes Google « Jeux géants » et « Tables-chaises-vaisselle » (actifs le lundi 12 octobre, section 4) atterrissent ici, sur une page qui a le formulaire, la redirection `/merci` et donc une conversion mesurable. Deux rangées Divi, ID CSS `jeux` et `mobilier`.

```
Titre (H2) : Aussi disponibles pour ta fête
Rangée #jeux — sous-titre : Jeux géants
Texte : Beer pong géant, Jenga géant, Puissance 4 géant. Livrés avec tes lettres, dans la même soumission.
Rangée #mobilier — sous-titre : Tables, chaises, nappes et vaisselle
Texte : Tout ce qu'il faut pour recevoir, livré en même temps que les lettres. Dis-le dans le champ « Notes » du formulaire.
Bouton (un seul, sous les deux rangées) : Ajouter ça à ma soumission → #soumission
```

Visuel : 1 photo par rangée (jeux en action; table dressée), texte à côté sur bureau, sous la photo sur téléphone. Règle : dès qu'une page produit dédiée existe (URL à confirmer, question bloquante 4; sa création est hors du périmètre du test), on y insère le même bloc formulaire qu'en 6.9 (même code court Fluent Forms, mêmes champs cachés UTM, même redirection `/merci`, même barre CTA collante), et les groupes Google basculent vers cette page; ces rangées restent sur la page lettres pour l'upsell.

### 6.7 FAQ (10 questions)

Objectif : éliminer les allers-retours par courriel et filtrer les leads non qualifiés. Mise en page : **10 modules Divi « Toggle » (Basculer) empilés, un par question**, chacun réglé Contenu → État = « Fermé » (le module « Accordéon » ouvre toujours la première question, on ne l'utilise pas); niveau de titre des questions = H3 (Toggle → Design → Texte du titre → Niveau de titre : H3) pour garder la hiérarchie H1 > H2 > H3. Toute mention « [à confirmer] » est tranchée par Alexandre avant la mise en ligne (liste récapitulative en 6.13); rien n'est inventé, parce que ces réponses deviennent des engagements affichés publiquement et doivent correspondre aux conditions du devis Booqable. Après le lancement (non bloquant) : ajouter le balisage FAQ dans Yoast (bloc « FAQ Yoast » ou champ Schéma) pour les extraits enrichis Google, utile pour la moitié organique du CA visée en H8.

1. **Quelles lettres, quels chiffres et quels symboles sont disponibles?** [à confirmer : liste exacte des lettres (avec ou sans accents), chiffres et symboles en stock, et nombre d'exemplaires par caractère]. Le stock est limité : un même caractère ne peut pas être loué à deux clients le même week-end. Indique ton mot et ta date dans le formulaire, on confirme la disponibilité dans la soumission.
2. **Quelles sont les dimensions et le poids?** Hauteur d'environ [à confirmer] cm et poids d'environ [à confirmer] kg par lettre. On te donne les mesures exactes dans la soumission.
3. **Ça prend quoi comme électricité?** Une prise standard 120 V. [à confirmer : nombre maximal de lettres branchées en chaîne sur une même prise]. [à confirmer : rallonges fournies ou à prévoir par le client]. À l'extérieur, prévoir une prise protégée (DDFT/GFCI) [à confirmer].
4. **Ramassage ou livraison?** Les deux. Ramassage inclus à notre entrepôt de Sainte-Thérèse; livraison porte avec frais selon l'adresse, jusqu'à 60 km (voir « Combien ça coûte? »).
5. **Combien de temps dure la location?** La location standard couvre le week-end : prise en charge le [à confirmer : vendredi] et retour le [à confirmer : lundi] (hypothèse de la section 2 : vendredi 13 h à 18 h, lundi 9 h à 12 h; à valider par Alexandre). Location en semaine, sur une journée ou plusieurs jours, possible pour les événements corpo : précise-le dans le formulaire.
6. **Est-ce que ça va dehors? Et s'il pleut?** Oui, sur une surface stable et plane, à l'abri de la pluie directe (chapiteau, gazebo, terrasse couverte). En cas d'averse sans abri, tu débranches et tu couvres les lettres [à confirmer : housse fournie ou non, et indice de protection des lettres]. Jamais dehors la nuit sans protection [à confirmer]. Les consignes exactes selon le lieu sont dans ta soumission.
7. **Comment je réserve?** Tu reçois ta soumission, tu la confirmes avec un dépôt de 20 % (lien de paiement sécurisé). La date est bloquée dès que le dépôt est reçu. Le solde se règle 7 jours avant l'événement [à confirmer : même règle que le devis Booqable, section 8].
8. **Je peux annuler ou reporter?** Report [à confirmer : gratuit ou avec frais] sur une autre date disponible avec un préavis de [à confirmer] jours. Annulation : le dépôt est [à confirmer : remboursable ou non selon le délai]. Les conditions exactes sont écrites dans ta soumission.
9. **Quel est le délai minimum pour réserver?** Idéalement 10 jours ou plus avant l'événement [à confirmer : hypothèse à valider avec l'historique Booqable], surtout de mai à octobre et en novembre–décembre (les dates de décembre partent vite). Moins de 5 jours? Appelle-nous au 514-559-1893 : si le mot est libre et que tu peux venir le ramasser à Sainte-Thérèse, c'est possible (délai minimal de livraison : 5 jours, section 8).
10. **Vous faites aussi les jeux géants et les tables?** Oui : beer pong géant, Jenga géant, Puissance 4 géant, tables, chaises, nappes et vaisselle. Écris-le dans le champ « Notes » du formulaire (texte d'aide du champ : « Jeux géants, tables, ballons? Dis-le ici. », section 3) et on inclut tout dans la même soumission.

### 6.8 Preuves et confiance

Objectif : réduire le risque perçu juste avant le formulaire. Aucun script tiers (pas de widget d'avis dynamique, pas de carte iframe) : tout est copié manuellement, donc rien ne se charge avant consentement et la page reste rapide.

```
Titre (H2) : Ils ont allumé leur événement avec Évenox
```

Éléments, dans l'ordre :
- Avis : 3 avis Google réels copiés mot à mot (texte, prénom, ville ou type d'événement, 5 étoiles en icône Divi) dans 3 modules Divi « Témoignage » (Testimonial), + une ligne texte « Note Google : X,X/5 (N avis) — Voir tous nos avis » en lien vers l'URL publique de la fiche d'établissement Google (lien court « Partager » de la fiche, section 3). Afficher la note chiffrée seulement s'il y a au moins 5 avis et une moyenne d'au moins 4,5; sinon afficher seulement les avis texte. Mettre la note à jour une fois par mois, le lundi du dashboard (section 7). Aucun avis inventé; s'il y a moins de 3 avis publiés, la section affiche seulement les photos (plan B de la section 3) et les témoignages entrent dès le 3e avis (la demande d'avis après chaque événement est en section 8).
- 3 à 4 photos clients (permission écrite par courriel, archivée sous le libellé Gmail « Permissions-photos », section 3), légende « type d'événement — ville ».
- Bandeau « Ils nous font confiance » avec logos corpo seulement s'il y a permission écrite; sinon remplacer par la ligne « Partys de bureau, mariages, showers, anniversaires : plus de [nombre réel] événements servis ».
- Bloc coordonnées : « Évenox · 215 boul. René-A.-Robert, Sainte-Thérèse · 514-559-1893 · evenox.ca@gmail.com », avec une image statique de la carte (capture d'écran Google Maps, WebP ≤ 100 Ko) cliquable vers le lien « Itinéraire » de la fiche Google (ouvre un nouvel onglet), texte du lien « Ouvrir dans Google Maps ». Aucune carte Google Maps intégrée (iframe) : elle dépose des témoins Google avant consentement (Loi 25) et ralentit la page. Comme des clients viennent ramasser au 215 boul. René-A.-Robert, la fiche Google garde l'adresse visible (section 3).

### 6.9 Formulaire (ancre `#soumission`)

Objectif : convertir. Champs exacts, libellés, options, validations, textes d'aide, noms internes et textes des deux cases : voir section 3 (17 champs + Turnstile, ne pas les redéfinir ici). Une seule solution d'outil : **Fluent Forms (gratuit)**, inséré dans la section via Module « Code » → `[fluentform id="1"]` (remplacer 1 par l'ID réel affiché dans Fluent Forms → Tous les formulaires), section → Avancé → ID CSS = `soumission`. Info qui changerait le choix : Gravity Forms déjà installé et payé sur le site → utiliser son module Divi avec les mêmes réglages.

```
Titre (H2) : Obtiens ta soumission en 24 h
Sous-titre : 2 minutes. Aucun engagement. Réponse en moins de 24 h (souvent en quelques heures).
Case obligatoire, NON précochée, juste au-dessus du bouton (texte exact de la section 3) : J'ai lu la politique de confidentialité et j'accepte qu'Évenox utilise mes coordonnées pour préparer ma soumission et en assurer le suivi (courriel, texto ou téléphone).   → « politique de confidentialité » en lien vers https://evenox.ca/politique-de-confidentialite
Case facultative, NON précochée (texte exact de la section 3) : J'accepte de recevoir les nouveautés et promos d'Évenox par courriel (désabonnement en 1 clic).
Bouton : Envoyer ma demande
Micro-copy sous le bouton : Aucun engagement. Tes coordonnées servent uniquement à préparer ta soumission et à faire le suivi de ta demande.
```

La case obligatoire documente le consentement Loi 25 (preuve horodatée dans Fluent Forms → Entrées). Règle de retrait fixée en section 3 : si le taux page → lead est < 5 % après 2 semaines (bilan du lundi 12 octobre; cible 8 %, H13), la case est remplacée au même endroit par le texte non cochable « En envoyant ce formulaire, tu acceptes qu'Évenox utilise tes coordonnées pour préparer ta soumission et faire un suivi à ce sujet (courriel, texto ou téléphone). Voir notre politique de confidentialité. » (même lien). Dans les deux cas, la demande de soumission donne un consentement tacite LCAP de 6 mois pour les relances J+2 / J+5 / J+10 (section 8); la case facultative donne un consentement exprès qui n'expire pas.

On n'écrit jamais « on ne partage jamais tes coordonnées » : c'est faux (Booqable, Gmail, et avec consentement Meta/Google traitent les données) et la Loi 25 exige une information exacte au point de collecte. La page `/politique-de-confidentialite` (générée par Complianz, section 3) nomme le responsable de la protection des renseignements personnels : Alexandre Séguin, propriétaire, evenox.ca@gmail.com, 514-559-1893.

Réglages d'exécution (détail des menus en section 3) :
- Champs cachés UTM : 5 champs « Champ caché » `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, valeur par défaut `{get.utm_source}` etc.; ils partent dans le courriel de notification « LEAD LETTRES – … » et sont recopiés dans Booqable (section 7). Option non bloquante : 2 champs cachés de plus, `gclid` = `{get.gclid}` et `fbclid` = `{get.fbclid}`, copiés dans la note Booqable; ça permet plus tard l'import de conversions hors ligne « dépôt reçu » sans retoucher la page (si ajoutés, les ajouter aussi à la liste de la section 3).
- Confirmation : Fluent Forms → Réglages et intégrations → Réglages de confirmation → Type « Rediriger vers une URL » = `https://evenox.ca/merci`. Aucun message sur la page : c'est `/merci` qui déclenche l'événement Lead (Pixel Meta + conversion Google, section 7).
- Anti-spam (obligatoire : un robot qui atterrit sur `/merci` crée un faux Lead, Meta et Google optimisent dessus et le CPL du Sheet devient faux) : Cloudflare Turnstile (champ Turnstile juste avant le bouton) + Honeypot activé (Fluent Forms → Réglages globaux → Sécurité), tel que réglé en section 3. Pas de reCAPTCHA (témoins Google avant consentement, Loi 25). Le champ « Ville ou code postal » obligatoire (section 3) sert à rejeter le hors-zone à la qualification (section 8).
- Tests d'Alexandre : uniquement avec un lead nommé « TEST LEAD » puis supprimé dans Booqable et dans Fluent Forms → Entrées, bannière Complianz acceptée pour vérifier le Pixel dans « Tester les événements » (procédure NO-GO, section 3).
- Mise en page : 1 colonne sur téléphone, champs de 48 px de hauteur minimum, police 16 px minimum dans les champs (sinon iPhone zoome), bouton pleine largeur.
- Fond de section contrasté : couleur de marque Évenox (code hex de la charte graphique [à confirmer]); choix par défaut jusqu'à confirmation : fond sombre `#111111`, texte blanc, bouton couleur de marque.
- Espacement bas : Section → Design → Espacement → Marge intérieure bas = 96 px sur téléphone, pour que la barre CTA collante (6.12) ne recouvre jamais le bouton « Envoyer ma demande ».

### 6.10 Footer

Minimal, sans distraction (pied de page personnalisé du modèle Theme Builder ci-dessus) :
- Coordonnées : Évenox · 215 boul. René-A.-Robert, Sainte-Thérèse · 514-559-1893 (lien `tel:+15145591893`) · evenox.ca@gmail.com.
- Liens (une ligne) : Politique de confidentialité (obligatoire, Loi 25 → `evenox.ca/politique-de-confidentialite`) · Jeux géants (→ `evenox.ca/jeux-geants`, URL à confirmer; à défaut `#jeux`) · Tables, chaises et vaisselle (→ `evenox.ca/tables-chaises`, URL à confirmer; à défaut `#mobilier`) · Accueil.
- Ligne : « © 2026 Évenox — Location d'équipement événementiel, Rive-Nord, Laval et Montréal » (même zone que le H1) · « Responsable de la protection des renseignements personnels : Alexandre Séguin – evenox.ca@gmail.com » (Loi 25).
- Section → Design → Espacement → Marge intérieure bas = 96 px sur téléphone (place pour la barre collante, le lien Politique de confidentialité reste cliquable).

### 6.11 Page `/merci`

Texte de base = celui de la section 3 (H1 et premier paragraphe), complété par la prochaine étape :

```
H1 : Merci! Ta demande est reçue.
Paragraphe : Tu reçois ta soumission par courriel en moins de 24 h. Urgent? Appelle-nous : 514-559-1893.
Ligne 2 : Vérifie tes courriels indésirables et ajoute evenox.ca@gmail.com à tes contacts.
Prochaine étape (encadré) : Ta date est bloquée seulement quand ton dépôt de 20 % est reçu (lien de paiement dans la soumission). Événement dans moins de 5 jours (délai minimal de la section 8)? Appelle : 514-559-1893.
Bouton : Voir nos jeux géants   → evenox.ca/jeux-geants (URL à confirmer; à défaut evenox.ca/lettres-illuminees#jeux)
```

Réglages : Yoast → onglet Avancé → « Autoriser les moteurs de recherche à afficher cette page dans les résultats de recherche? » = Non (noindex; Yoast la retire aussi du sitemap). Page hors menu, jamais liée ailleurs sur le site ni dans les courriels. Une visite directe ou un rechargement de `/merci` ne peut pas être empêché techniquement : côté Google, l'action « Lead formulaire » est réglée sur comptage « Une » (section 7); côté Meta, un rechargement peut recompter un Lead, on l'accepte parce que la vérité reste Booqable (H10). Pas de barre CTA collante ni de formulaire sur `/merci` (sinon double Lead). Le Pixel et la balise Google se déclenchent sur cette URL : voir section 7.

### 6.12 Notes techniques Divi, vitesse, SEO et Loi 25

| Élément | Réglage exact |
|---|---|
| Barre CTA collante (téléphone) | Section Divi séparée, placée en dernier dans la page (pas dans le Theme Builder, pour qu'elle n'apparaisse pas sur `/merci`); c'est la version « 2 boutons » du bouton collant prévu en section 3. Réglages : Section → Avancé → Position → Position = « Fixe » (Fixed), Emplacement = bas-centre, Décalage = 0; Design → Dimensionnement → Largeur = 100 %; Avancé → Position → Index Z = 999 (sous la bannière Complianz); Avancé → Visibilité → Désactiver sur : Bureau et Tablette. Hauteur ≈ 60 px, 2 boutons 50/50 : « Soumission en 24 h » → `#soumission` et « Appeler » → `tel:+15145591893`. Visible en permanence sur téléphone (pas d'effet de défilement : simple et fiable). Les sections Formulaire et Footer ont 96 px de marge intérieure bas pour que rien ne soit caché; même marge sur `/merci` si une section y est fixe (il n'y en a pas par défaut). |
| Bannière de consentement (Loi 25) | Complianz (réglages en section 3) : Complianz → Bannière de cookies → Position = « Centre » (fenêtre modale) pour qu'elle ne se superpose pas à la barre CTA collante; boutons « Accepter » et « Refuser » de même taille; aucun pixel ni balise avant le clic. Conséquence attendue : une part des leads réels sans événement Lead (hypothèse 20–40 %, à lire dans le Sheet : leads Booqable vs Leads Pixel) → la source Booqable reste la vérité (H10, section 7). |
| Click-to-call | Tous les numéros en lien `tel:+15145591893`, affichés en texte brut au même format « 514-559-1893 » (en-tête, hero, FAQ 9, preuves, barre collante, footer) pour que le numéro de transfert Google puisse le remplacer. Un clic sur le numéro n'est pas un appel : c'est au mieux une conversion SECONDAIRE de phase 2 (Google Ads : « Clic téléphone site »; Meta : événement Contact; créées seulement si les leads téléphone dépassent 20 % au 26 octobre, section 7), jamais l'événement d'optimisation. Seule la page `/merci` compte comme Lead principal. Les vrais appels sont comptés par l'asset d'appel des annonces Google (numéro de transfert, durée ≥ 30 s, action « Appel depuis annonce », section 7). |
| Ancres | ID CSS `haut` (Hero), `chiffres` (rangée galerie), `jeux`, `mobilier` (rangées 6.6), `soumission` (section formulaire) : Section ou Rangée → Avancé → ID et classes CSS → ID CSS. Tous les CTA de la page pointent vers `#soumission`. Défilement doux : Divi → Options du thème → Général → « Défilement fluide » activé. |
| Vitesse | Photos converties en WebP par Imagify (Imagify → Réglages → « Afficher les images en WebP » activé), ≤ 250 Ko chacune, largeur max 1 600 px; photo du hero ≤ 200 Ko et exclue du chargement différé (WP Rocket → Médias → LazyLoad → « Images ou iframes à exclure » : nom du fichier hero). Vidéo hero MP4 ≤ 3 Mo, bureau seulement. Divi → Options du thème → Général → Performance : « CSS dynamique », « CSS critique », « Différer jQuery » et « Chargement dynamique des icônes » activés. Cibles PageSpeed Insights mobile avant lancement : score Performance ≥ 70 et LCP ≤ 2,5 s (mêmes seuils que la section 3, hypothèse atteignable). |
| SEO title | `Location de lettres lumineuses géantes \| Évenox Rive-Nord` (57 caractères, ≤ 60; texte exact de la section 3; Yoast → Titre SEO) |
| Meta description | `Lettres illuminées géantes livrées à Laval, Rive-Nord et Montréal. Anniversaires, mariages, partys corpo. Soumission en 24 h, réservez votre date.` (146 caractères, ≤ 155; texte exact de la section 3; Yoast → Méta description) |
| Hiérarchie des titres | Un seul H1 (hero); titres de sections et de cartes Blurb en H2; questions de la FAQ en H3; aucun autre H1 dans l'en-tête ou le footer (le logo est une image, pas un titre). |
| Pixel et balises | Pixel Meta via PixelYourSite et balise Google Ads via Site Kit, bloqués par Complianz avant consentement; événement Lead et conversion Google sur `/merci`; installation et vérification en section 7 (et test NO-GO en section 3). |
| Langue | Page 100 % en français (Loi 96). Décision par défaut : aucune page anglaise et aucun groupe Google « Lettres EN » pendant le test (section 4); ce groupe ne peut pas exister tant que la page anglaise n'existe pas. Si une version anglaise est créée après le verdict, elle est une page distincte (`/en/marquee-letters`) avec le même formulaire et la même redirection `/merci`, et le français reste au moins équivalent; les annonces EN pointent vers cette page seulement (Google apparie désormais la langue de l'annonce à celle de la page). Info qui changerait le choix : ≥ 10 % de termes de recherche en anglais dans le rapport des termes après 2 semaines. |
| Mobile | Gouttières 16 px, boutons pleine largeur, police ≥ 16 px, aucune section plus haute qu'un écran sans CTA visible (la barre collante y veille); aucun défilement horizontal sauf le tableau de 6.5. |
| Délai « 24 h » | Le « 24 h » affiché compte les samedis et dimanches (c'est ce que le client lit). Section 8 : SLA réel et plages de réponse du week-end. |
| Pages jeux géants et mobilier | Tant qu'elles n'ont pas de formulaire : les groupes Google correspondants atterrissent sur `/lettres-illuminees#jeux` et `#mobilier` (6.6). Dès qu'elles existent (semaine 3) : y coller le même Module Code `[fluentform id="1"]` avec ID CSS `soumission`, la même redirection `/merci` et la même barre collante. |

### 6.13 À confirmer par Alexandre avant la mise en ligne (une seule séance, 30 min)

À trancher en une fois, puis recopier dans la page ET dans les conditions du devis Booqable (section 8) pour que les deux disent la même chose :

| # | Point | Où sur la page |
|---|---|---|
| 1 | Liste exacte des lettres (accents?), chiffres, symboles en stock et nombre d'exemplaires par caractère (H9) | FAQ 1, galerie (BABY, prénom) |
| 2 | Hauteur et poids par lettre | FAQ 2 |
| 3 | Nombre max de lettres en chaîne par prise; rallonges fournies ou non; prise DDFT à l'extérieur | FAQ 3 |
| 4 | Jours et heures exacts de prise en charge et de retour du week-end | FAQ 5 |
| 5 | Consignes pluie et nuit; housse fournie ou non | FAQ 6 |
| 6 | Échéance du solde (défaut : 7 jours avant l'événement, section 8) | Étape 3, FAQ 7 |
| 7 | Report (gratuit ou frais, préavis) et annulation (dépôt remboursable ou non) | FAQ 8 |
| 8 | Délai minimum de livraison (défaut 5 jours, section 8; 10 jours recommandés) | FAQ 9, page /merci |
| 9 | Code hex de la couleur de marque; URL réelles des pages jeux géants et tables-chaises | Formulaire, footer, /merci |

## 7. Tracking & attribution

Principe de base : à cause de la Loi 25 (bannière de consentement obligatoire avant tout pixel), Meta et Google ne verront qu'une partie des leads réels (hypothèse : 60–80 % visibles dans les plateformes; à valider chaque lundi en comparant avec Booqable, colonnes X et Y du Sheet). Ce que le visiteur refuse dans la bannière, aucun outil ne le récupère légalement : ni l'API Conversions Meta, ni le Consent Mode de Google (qui ne fait que modéliser une partie des refus). La vérité comptable, c'est donc **Booqable + le Google Sheet « EVX – Suivi ads »**, jamais le gestionnaire de publicités. Les pixels servent à nourrir les algorithmes; le Sheet sert à décider.

### 7.1 Outils et événements à configurer

**Décision outils (une seule chaîne, tout gratuit; hypothèse WordPress + Divi à confirmer en section 3)**

| Outil | Rôle | Pourquoi celui-là |
|---|---|---|
| Complianz (gratuit) | Bannière Loi 25, blocage des scripts avant consentement, Google Consent Mode v2, politique de confidentialité | Région Canada / Loi 25 prête à l'emploi; compatible PixelYourSite et Site Kit |
| PixelYourSite (gratuit) | Pixel Meta + API Conversions Meta + événements ViewContent / Lead déclenchés par URL | La version gratuite suffit pour Meta. La balise Google Ads y est réservée à la version Pro : on ne l'utilise donc pas pour Google |
| Site Kit by Google (gratuit) | Pose la balise Google Ads (ID « AW-… ») | Aucun code à écrire; la conversion « Lead formulaire » se crée ensuite « à partir des URL » directement dans Google Ads |
| Fluent Forms (gratuit) | Formulaire de la page lettres : champs cachés UTM + redirection vers /merci | Champs Date et Téléphone, champs cachés `{get.…}`, redirection et Turnstile dans la version gratuite; Divi Contact Form ne sait pas remplir un champ caché depuis l'URL (réglages exacts en section 3) |

Pas de PixelYourSite Pro en phase test. Un seul cas l'exigerait (événements de clic téléphone, « phase 2 » plus bas).

**Installation (≈ 60 min, semaine 0, jour fixé en section 10).** Libellés de menus : si un nom diffère chez toi, tape le mot-clé dans la barre de recherche du plugin et marque « à vérifier » dans tes notes.

1. **Complianz.** WordPress → Extensions → Ajouter → « Complianz – GDPR/CCPA Cookie Consent » → Installer → Activer → Assistant : Région = **Canada** (règles Loi 25 : opt-in, rien ne se charge avant le clic); bannière avec bouton « Refuser » aussi visible que « Accepter »; « Bloquer les scripts avant consentement » = Oui. Complianz → Intégrations → Plugins : activer « PixelYourSite » et « Google Site Kit ». Complianz → Intégrations → « Google Consent Mode » = **Activé** (v2 : ad_storage, analytics_storage, ad_user_data, ad_personalization à « denied » par défaut; Google modélise alors une partie des conversions refusées; Meta n'a pas d'équivalent, sa perte sur les refus est définitive). Complianz → Documents : générer la politique de confidentialité; y inscrire le responsable Loi 25 « Alexandre Séguin, evenox.ca@gmail.com », la durée de conservation des demandes de soumission (24 mois puis suppression; hypothèse raisonnable) et que le Sheet de suivi n'est partagé avec personne; lien dans le pied de page (emplacement → section 6).
2. **PixelYourSite.** Extensions → Ajouter → « PixelYourSite » → Installer → Activer. ID Meta : business.facebook.com → Events Manager → Sources de données → ton pixel/dataset (s'il n'existe pas : « Connecter des sources de données » → Web → nom « Évenox – Site ») → Paramètres → copier « ID du dataset » (15–16 chiffres) → WordPress → PixelYourSite → Meta → coller dans « Pixel ID » → Enregistrer. PixelYourSite → Consent (ou GDPR) : « Complianz » détecté = Activé; ne PAS cocher l'option qui envoie les événements sans consentement (libellé à vérifier).
3. **API Conversions Meta (gratuite, semaine 0).** Events Manager → ton dataset → Paramètres → section « API Conversions » → bouton **« Activer l'API Conversions »** (option Meta sans développeur, disponible depuis avril 2026; Meta gère la déduplication event_id) → Terminer. Si le bouton n'apparaît pas dans ton compte : Events Manager → Paramètres → « Générer un jeton d'accès » → PixelYourSite → Meta → onglet « Conversion API » → coller le jeton → Enregistrer. Ce que l'API récupère : bloqueurs de pubs, Safari/iOS, navigateurs qui coupent les témoins. Ce qu'elle ne récupère pas : les visiteurs qui refusent la bannière Loi 25 (hypothèse : 20–40 % des leads). Cet écart est normal, se lit dans la colonne « Leads vus par Meta » du Sheet et ne se corrige par aucun achat de plugin.
4. **Site Kit by Google.** Extensions → Ajouter → « Site Kit by Google » → Installer → Activer → « Se connecter avec Google » (le compte Google qui possède Google Ads). Récupère d'abord ton ID : Google Ads → Objectifs → Conversions → Récapitulatif → « + Nouvelle action de conversion » → Site web → saisir `evenox.ca` → Analyser → l'écran « Configurer la balise Google » affiche l'ID « AW-XXXXXXXXXX » → note-le (garde la fenêtre ouverte pour l'étape 6). Site Kit → Paramètres → « Connecter d'autres services » → Ads → coller l'ID AW- → Enregistrer.
5. **Taggage automatique.** Google Ads → Admin (roue dentée) → Paramètres du compte → « Taggage automatique » = **Activé**. Sans lui, aucune conversion n'est attribuée aux clics.
6. **Conversion « Lead formulaire » (sans code).** Dans l'écran de l'étape 4, section « Créer des actions de conversion à partir d'URL » : type « Consultation de page » → correspondance « L'URL contient » → valeur `evenox.ca/merci` (« contient » plutôt que « est égale à » pour ne pas dépendre de la barre oblique finale ajoutée par WordPress) → Nom `Lead formulaire` → Catégorie « Envoyer un formulaire pour un prospect » → Objectif = **principal** → Enregistrer et continuer. Puis clique sur l'action → Paramètres : Comptage = **Une**; Valeur = **« Ne pas utiliser de valeur »**; Fenêtre de conversion après clic = **30 jours**. C'est la balise posée par Site Kit qui déclenche la conversion au chargement de /merci.
7. **Conversion « Appel depuis annonce ».** Conversions → + Nouvelle action de conversion → Appels téléphoniques → « Appels depuis des annonces utilisant des assets d'appel » → Nom `Appel depuis annonce` → Catégorie « Prospect par téléphone » → Objectif = secondaire → Durée minimale **30 s** (hypothèse : une demande de disponibilité de lettres dure souvent moins de 60 s; ajuster après 4 semaines) → Enregistrer. Dans l'asset d'appel de la campagne (section 4) : « Rapports d'appels » = **Activé** (numéro de transfert Google), sinon aucun appel n'est compté.
8. **Page /merci.** WordPress → Pages → merci → réglages SEO (Yoast, Rank Math ou Divi → Paramètres de la page) → « Ne pas indexer » (noindex). Jamais dans un menu, jamais partagée : seule la redirection du formulaire y mène, sinon des visites directes créent de faux Lead (Meta) et de fausses conversions (Google).

**Tableau des événements**

| Plateforme | Événement | Déclencheur | Réglage exact | Où le vérifier |
|---|---|---|---|---|
| Meta | PageView | Toute page, après consentement | Automatique dès que le Pixel ID est enregistré dans PixelYourSite | Events Manager → Test Events (après avoir cliqué « Accepter » sur la bannière) |
| Meta | ViewContent | Chargement de `/lettres-illuminees` | PixelYourSite → Events → « Add New Event » → Trigger « Page visit » → URL « contains » `/lettres-illuminees` → onglet Meta : événement standard `ViewContent` → Save | Test Events : ouvrir la page lettres, voir ViewContent |
| Meta | **Lead** (événement d'optimisation de EVX_META_LETTRES_LEADS) | Chargement de `/merci` | Même chemin : URL « contains » `/merci` → événement standard `Lead` → Save | Test Events, puis Events Manager → Aperçu → Lead (délai 5–20 min) |
| Meta | Contact (**phase 2**, pas en semaine 0) | Clic sur 514-559-1893 (lien `tel:`) | Exige PixelYourSite Pro : Events → « Add New Event » → Trigger « Click on element » → sélecteur CSS `a[href^="tel:"]` → onglet Meta : `Contact` | Test Events sur mobile |
| Google Ads | **Lead formulaire** (action principale) | Chargement de `/merci` | Étape 6 ci-dessus (action créée à partir de l'URL, comptage Une, sans valeur, 30 jours) | Extension Chrome Tag Assistant sur /merci + colonne « Conversions » de la campagne le lendemain |
| Google Ads | Appel depuis annonce (secondaire) | Clic sur l'asset d'appel de l'annonce | Étape 7 ci-dessus (durée min. 30 s, rapports d'appels activés) | Google Ads → Rapports → « Détails des appels » (numéro, date, durée) |
| Google Ads | Clic téléphone site (**phase 2**, secondaire) | Clic `tel:` sur mobile | Conversions → + Nouvelle → Site web → « Ajouter manuellement » → Nom `Clic téléphone site` → Catégorie « Contact » → Objectif secondaire → copier le « Libellé de conversion »; puis dans le même événement PixelYourSite Pro que Contact, onglet Google Ads → « Send conversion » + coller le libellé | Tag Assistant |
| Google | Import GA4 | — | **Non, pas en phase test** (double comptage garanti si mal réglé) | — |

Règle « phase 2 » : PixelYourSite Pro (ordre de grandeur 100 $ US/an, à vérifier) s'achète seulement si, au lundi 26 octobre (fin de la semaine 4), les leads téléphone représentent plus de 20 % des leads du Sheet. D'ici là, la source d'un appel vient de la question de qualification (règle 2 de 7.3) et du rapport « Détails des appels » (règle 3), pas d'un pixel.

À savoir : à ≈ 26 $/jour, l'ensemble FROID recevra environ 3–5 événements Lead par semaine après consentement (hypothèse H7), loin du seuil ≈ 50 / 7 jours de Meta. Le statut « Apprentissage limité » sera donc quasi permanent; ce n'est pas une raison de toucher au budget ou au ciblage (voir section 4).

**Vérification obligatoire avant d'activer une seule pub** (semaine 0, voir section 10). Clique d'abord « Accepter » sur la bannière Complianz, sinon rien ne remonte et tu croiras l'installation cassée.

1. Events Manager → Test Events : copie le code « TESTxxxxx » affiché → PixelYourSite → Meta → « Test Event Code » → Enregistrer (tu ne verras que tes propres événements). Ouvre `/lettres-illuminees` via l'URL « Meta froid » de 7.2 en remplaçant `{{ad.name}}` par `test` → ViewContent s'affiche. Envoie le formulaire avec le nom « TEST LEAD » et ton courriel → tu arrives sur `/merci` → Lead s'affiche.
2. Extension Chrome Tag Assistant ouverte sur `/merci` : la balise « AW-… » se charge et la conversion « Lead formulaire » tire. (La colonne Conversions de Google Ads restera à 0 : il n'y a pas eu de clic pub avant; c'est normal.)
3. Le courriel de notification « LEAD LETTRES – … » arrive dans Gmail avec les 5 champs UTM (`utm_source=meta`, `utm_medium=paid_social`, `utm_campaign=lettres_froid`, `utm_content=test`, `utm_term=test`).
4. Booqable : crée le client « TEST LEAD », remplis `Source lead = Meta`, crée un devis vide avec le tag `ADS-META` et la note `SRC=meta | CAMP=lettres_froid | CREA=test | LEAD=2026-09-23`. Si le champ, le tag ou la note n'existe pas dans ton forfait, applique la solution de repli de 7.3 (tout dans la note).
5. Nettoyage : efface la ligne fictive du Sheet, supprime le client et le devis test dans Booqable, retire le code test de PixelYourSite.

Si une des étapes 1, 2 ou 3 échoue = **NO-GO**. L'étape 4 qui échoue = repli de 7.3, pas un NO-GO. L'étape 5 est obligatoire mais n'est pas un critère.

### 7.2 Convention UTM

| Paramètre | Valeurs verrouillées |
|---|---|
| utm_source | `meta` ou `google` |
| utm_medium | `paid_social` (Meta) ou `cpc` (Google) |
| utm_campaign | `lettres_froid`, `lettres_retarg`, `recherche_lettres`, `recherche_jeux`, `recherche_mobilier` |
| utm_content | Meta : nom exact de la pub (`L-anniv-40`, `L-corpo-merci`, `L-mariage-love`, `L-prenom`, `L-chiffres-2027`, `L-noel`, `L-paris`, `J-jeux-geants`, `L-obnl-gala`, `L-baby`), rempli automatiquement par `{{ad.name}}`. Google : identifiant court du groupe d'annonces (`lettres`, `chiffres`, `marque`, `jeux`, `mobilier`; `lettres-en` si ce groupe ouvre un jour), mêmes valeurs qu'en section 4 |
| utm_term | mot-clé Google via `{keyword}`; vide sur Meta |

**Où va chaque URL (à lire avant de coller quoi que ce soit)** :
- **Meta** : dans la pub, « URL du site web » = l'URL de base `https://evenox.ca/lettres-illuminees` (sans paramètre), et la partie après le `?` va dans « Paramètres d'URL » (ci-dessous). Les deux URL Meta complètes servent à tester le formulaire à la main.
- **Google** : « URL finale » de chaque annonce = URL **propre**, sans aucun paramètre : `https://evenox.ca/lettres-illuminees` (groupe Jeux géants : la page jeux, voir hypothèse plus bas). C'est le modèle de suivi de la campagne qui ajoute les UTM. Les deux URL Google ci-dessous sont le **résultat attendu** après le modèle de suivi : elles servent à vérifier le bouton « Tester » et à tester le formulaire, jamais à coller dans une annonce (sinon les paramètres sont doublés et le champ caché reçoit une valeur sale).
- Page jeux : hypothèse à confirmer en section 3 : `evenox.ca/jeux-geants`. Par défaut, si aucune page jeux n'existe au 27 septembre, l'URL finale du groupe Jeux géants = `evenox.ca/lettres-illuminees#jeux` (bloc jeux de la section 6, même formulaire Fluent Forms et même redirection vers /merci); dès qu'une page jeux avec formulaire existe, seul le chemin change, les UTM restent identiques.

```
Meta froid :
https://evenox.ca/lettres-illuminees?utm_source=meta&utm_medium=paid_social&utm_campaign=lettres_froid&utm_content={{ad.name}}

Meta retargeting :
https://evenox.ca/lettres-illuminees?utm_source=meta&utm_medium=paid_social&utm_campaign=lettres_retarg&utm_content={{ad.name}}

Google – groupe Lettres lumineuses (résultat attendu du modèle de suivi) :
https://evenox.ca/lettres-illuminees?utm_source=google&utm_medium=cpc&utm_campaign=recherche_lettres&utm_content=lettres&utm_term={keyword}

Google – groupe Jeux géants (résultat attendu; chemin de page à confirmer) :
https://evenox.ca/jeux-geants?utm_source=google&utm_medium=cpc&utm_campaign=recherche_jeux&utm_content=jeux&utm_term={keyword}
```

**Meta** : au niveau de la pub → section « Suivi » → champ « Paramètres d'URL » → colle seulement la partie après le `?` :
```
utm_source=meta&utm_medium=paid_social&utm_campaign=lettres_froid&utm_content={{ad.name}}
```
`{{ad.name}}` insère automatiquement le nom de la pub (d'où l'importance des noms `L-anniv-40`, etc. de la section 4). Campagne EVX_META_RETARGETING : même chose avec `lettres_retarg`.

**Google** : rien au niveau de la campagne. Dans chaque groupe d'annonces → Paramètres → « Options d'URL du groupe d'annonces » → « Suffixe d'URL finale » → colle la ligne du groupe (mêmes valeurs qu'en section 4) :
```
Lettres lumineuses       : utm_source=google&utm_medium=cpc&utm_campaign=recherche_lettres&utm_content=lettres&utm_term={keyword}
Chiffres lumineux        : utm_source=google&utm_medium=cpc&utm_campaign=recherche_lettres&utm_content=chiffres&utm_term={keyword}
Marque Évenox            : utm_source=google&utm_medium=cpc&utm_campaign=recherche_lettres&utm_content=marque&utm_term={keyword}
Jeux géants              : utm_source=google&utm_medium=cpc&utm_campaign=recherche_jeux&utm_content=jeux&utm_term={keyword}
Tables-chaises-vaisselle : utm_source=google&utm_medium=cpc&utm_campaign=recherche_mobilier&utm_content=mobilier&utm_term={keyword}
```
Clique « Tester » à côté du suffixe : Google affiche l'URL résolue et « URL valide »; elle doit ressembler à l'URL Google du bloc ci-dessus. `{keyword}` est remplacé automatiquement par le mot-clé qui a déclenché l'annonce.

**Formulaire : Fluent Forms (choix fait en section 3, réglages complets là-bas).** Ce qui compte pour le tracking :
- 5 champs cachés `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, valeur par défaut `{get.utm_source}` (puis `{get.utm_medium}`, etc.).
- Notification à `evenox.ca@gmail.com`, objet `LEAD LETTRES – {inputs.date_evenement} – {inputs.ville} – {inputs.utm_source}`, corps `{all_data}` (les champs cachés y figurent).
- Confirmation : « Rediriger vers une URL » → `https://evenox.ca/merci`.
- Ces champs lisent l'URL, pas un témoin : ils fonctionnent **avec ou sans consentement**. C'est l'argument qui justifie « le courriel te dit la source, pas Meta ». Limite : un visiteur qui revient plus tard en tapant evenox.ca arrive sans UTM → règle 2 de 7.3.

### 7.3 Taguer un lead dans Booqable

**Setup une fois** (libellés Booqable approximatifs; si un menu diffère, cherche « Champs personnalisés » dans Paramètres) :
1. Paramètres → Champs personnalisés → « Ajouter un champ personnalisé » → S'applique à : **Client** → Nom `Source lead` → Type : liste déroulante → valeurs dans cet ordre : `Meta`, `Google`, `Retargeting`, `Organique`, `Référence`, `Récurrent`, `Autre` → cases « Afficher sur devis / contrats / factures / bons de préparation » **toutes décochées** (champ interne, jamais sur le PDF client) → Obligatoire : Oui. Si l'option « obligatoire » n'existe pas : valeur par défaut `Autre`, corrigée à la qualification; le rituel du lundi contrôle les vides.
2. Tags : Booqable n'a pas de page de gestion des tags. Sur la première commande ads, champ « Tags » de la commande → tape `ADS-META` → Entrée; il devient réutilisable. Idem `ADS-GOOGLE`. Les leads **Retargeting** portent le tag `ADS-META` (deux tags de SOURCE seulement : `ADS-META` et `ADS-GOOGLE`; les tags de suivi `DEVIS`, `CLOSE-J10` et les tags client `NQ`, `NO-CONTACT` sont définis en section 8).
3. Sur chaque nouveau lead : fiche client → `Source lead`; devis/commande → tag + ligne de note dans le champ « Notes » interne de la commande (pas dans le PDF). Trois gabarits, un par cas :

```
Meta        : SRC=meta | CAMP=lettres_froid | CREA=L-anniv-40 | LEAD=2026-10-03
Google      : SRC=google | CAMP=recherche_lettres | CREA=lettres | KW=location lettres lumineuses | LEAD=2026-10-03
Téléphone   : SRC=google | CAMP=recherche_lettres | CREA=appel | KW=inconnu | LEAD=2026-10-03
```

Repli si ton forfait Booqable n'a ni champ personnalisé ni tag : tout passe par la ligne de note (toujours commencer par `SRC=`); tu retrouves les commandes ads avec la recherche « SRC=meta » / « SRC=google ». Moins filtrable, mais suffisant pour le Sheet.

**Règle « une seule source par lead »**, décidée au moment de la qualification (voir section 8) et jamais changée ensuite :
1. Le courriel du formulaire contient un `utm_source` → c'est la source : `meta` → Meta; `meta` + `lettres_retarg` → Retargeting; `google` → Google. L'UTM gagne même si le client dit autre chose. Exception : `utm_content=marque` **et** le client dit « Facebook/Instagram » → Meta (chercher « evenox » sur Google est un effet de la pub Meta, pas une acquisition Google).
2. Pas d'UTM (lead direct, DM Instagram, formulaire général du site, retour sans lien) → question du script de qualification : « Comment nous avez-vous trouvés? » « Facebook/Instagram » → Meta, `CREA=inconnu`; « Google » → Organique par défaut (Google Business Profile), sauf règle 3.
3. **Lead téléphone** : « Google » + un appel enregistré le même jour dans Google Ads → Rapports → « Détails des appels » (rapports d'appels activés sur l'asset d'appel) → Google, tag `ADS-GOOGLE`, gabarit « Téléphone ». Sinon → Organique. « Facebook » au téléphone → Meta, `CREA=inconnu`.
4. Client déjà dans Booqable (a déjà loué) → `Récurrent`, même s'il a cliqué une pub. Client envoyé par quelqu'un → `Référence`. Ces deux-là sortent du calcul ROAS.

Un lead n'est jamais compté dans Meta ET Google. Si tu hésites, tranche par la règle 1, puis 2, et note « ? » dans la colonne Notes du Sheet.

LCAP : la demande de soumission donne un consentement tacite de 6 mois pour les relances par courriel (J+2, J+5, J+10, section 8); chaque courriel identifie Évenox et offre un moyen de se désabonner.

### 7.4 Définition du ROAS Évenox (H10)

```
ROAS réservé  = Σ CA location HT des devis avec DÉPÔT REÇU, leads datés dans la période,
                source ∈ {Meta, Retargeting, Google}, dépôt reçu ≤ 30 jours après le lead
                ÷ dépense pub (Meta + Google) de la même période

ROAS encaissé = Σ CA location HT des événements RÉALISÉS et SOLDÉS (mêmes leads, même cohorte)
                ÷ dépense pub de la même période
```

Règles :
- **Le dépôt n'est pas le CA.** Un dépôt de 20 % (≈ 110 $ sur 550 $, hypothèse H2) confirme la commande; le numérateur est le total HT du devis Booqable, pas le montant encaissé.
- **Cohorte par date du lead** : un lead du 3 octobre qui verse son dépôt le 20 octobre compte dans la semaine du 28 septembre au 4 octobre. Les lignes hebdo du Sheet se mettent donc à jour rétroactivement pendant 30 jours.
- **Fenêtre 30 jours** après la date du lead. Dépôt au jour 31 ou plus : CA non attribué, colonne « Dans fenêtre » = N, note « hors fenêtre ».
- **Exclusions** : Récurrent, Référence, Organique, Autre (leur CA est suivi dans Booqable, mais hors ROAS).
- **Annulation** : dépôt remboursé ou commande annulée → colonne « Annulé » = O, le CA sort de la cohorte.
- **Retargeting** : ses leads et sa dépense vont dans la colonne Meta.
- **Double comptage interdit** : une source par lead (7.3).
- **Verdict (lundi 23 novembre) : lis deux chiffres.** (1) ROAS réservé de la ligne « Cumul semaines 1–4 » (leads du 28 septembre au 25 octobre : cohortes mûres, 29–56 jours écoulés) — c'est le chiffre du verdict, seuils ≥ 4× / 3–3,9× / < 3× (décision 5). (2) ROAS réservé provisoire des semaines 5–8 (leads du 26 octobre au 22 novembre, entre 1 et 28 jours de maturité), marqué « immature » dans la colonne Notes : il sous-estime mécaniquement le résultat (hypothèse : de 20–35 %) et ne doit jamais faire couper une campagne à lui seul. Relecture finale de tout le test le **lundi 21 décembre 2026** (toutes les cohortes ont alors ≥ 29 jours) : si le verdict provisoire et le final divergent d'un cran de couleur, c'est le final qui règle le budget de janvier. Le ROAS encaissé se lit en janvier et sert à corriger le taux d'annulation.

Exemple avec H7 (hypothèse) : 3 000 $ dépensés sur 8 semaines → ≈ 75 leads → ≈ 60 devis → ≈ 21 dépôts × 550 $ ≈ 11 500 $ CA HT réservé (11 550 $ exactement, arrondi comme en H7) → **ROAS réservé ≈ 3,9×** (11 550 ÷ 3 000 = 3,85). Sous la cible 4–5×, au-dessus du seuil de correction 3× : on optimise avant d'augmenter. Piège à éviter : si tu divises les dépôts encaissés (21 × 110 $ = 2 310 $) par 3 000 $, tu obtiens 0,77× et tu coupes une campagne rentable. Autre piège : si Ads Manager affiche un coût par prospect de 25 $ alors que le Sheet dit 45 $, c'est le Sheet qui compte (Meta compte des conversions modélisées, une fenêtre 7 jours clic / 1 jour vue et des doublons; une campagne Prospects sans valeur n'affiche d'ailleurs aucun ROAS).

### 7.5 Dashboard hebdo « EVX – Suivi ads »

Google Sheet à cinq onglets : « Leads » et « Hebdo » (décrits ici), « Liens UTM » (URL prêtes à coller, sections 3 et 10), « Google copy » et « Liens » (section 10). Avant tout : Fichier → Paramètres → Paramètres régionaux = **Canada (français)** → Enregistrer (les formules ci-dessous utilisent les noms français NB.SI.ENS / SOMME.SI.ENS / SIERREUR et le séparateur `;`; sans ce réglage, elles renvoient #NOM?).

**Onglet « Leads »** : le seul que tu saisis à la main, 1 ligne par lead, le jour où il arrive (ligne 1 = en-têtes, données à partir de la ligne 2).

| Col. | En-tête | Saisie | Valeurs admises |
|---|---|---|---|
| A | Date lead | Date (format AAAA-MM-JJ) | — |
| B | Nom | Texte | — |
| C | Source | Liste déroulante | Meta, Google, Retargeting, Organique, Référence, Récurrent, Autre |
| D | Campagne | Texte | lettres_froid, lettres_retarg, recherche_lettres, recherche_jeux, recherche_mobilier, ou vide |
| E | Créa | Texte | nom de la pub (Meta) ou identifiant du groupe Google (lettres, chiffres, marque, jeux, mobilier), ou `appel` / `inconnu` |
| F | Devis envoyé | Liste déroulante | O, N |
| G | Dépôt reçu | Liste déroulante | O, N |
| H | Date dépôt | Date | — |
| I | CA HT devis | Nombre ($) | total HT du devis Booqable |
| J | Événement réalisé | Liste déroulante | O, N |
| K | CA HT encaissé | Nombre ($) | solde payé, HT |
| L | Annulé | Liste déroulante | O, ou vide |
| M | Notes | Texte | — |
| N | Dans fenêtre | **Formule** (ne pas saisir) | O, N, ou vide |
| O | Mot-clé | Texte | `utm_term` du courriel (Google), sinon vide |
| P | Délai 1re réponse (h) | Nombre | heures entre le courriel « LEAD LETTRES » et ta première réponse (SLA section 8; médiane lue chaque lundi) |

Formule en N2, puis sélectionne N2 et recopie-la jusqu'à la ligne 500 une fois pour toutes :
```
=SI(OU(G2<>"O";H2="");"";SI(H2<=A2+30;"O";"N"))
```
Listes déroulantes : sélectionne la colonne → Données → Validation des données → « Liste d'éléments » → colle les valeurs séparées par des virgules → « Rejeter la saisie ». Une faute de frappe dans Source ou Devis casse les NB.SI.ENS.

**Onglet « Hebdo »** : ligne 1 = en-têtes; lignes 2 à 9 = semaines 1 à 8 (A2 = 2026-09-28, A3 = 2026-10-05, … A9 = 2026-11-16, toujours le lundi); tout se calcule sauf 7 colonnes saisies (B, C, U, V, W, X, Y) et la date en A.

| Col. | Colonne | D'où vient le chiffre | Formule (ligne 2) | Vert / Jaune / Rouge |
|---|---|---|---|---|
| A | Semaine (lundi) | Saisie | date | — |
| B | Spend Meta | Ads Manager → Campagnes → colonne « Montant dépensé », plage lundi→dimanche, froid + retargeting | saisie | — |
| C | Spend Google | Google Ads → Campagnes → colonne « Coût », même plage | saisie | — |
| D | Spend total | Calcul | `=B2+C2` | — |
| E | Leads Meta | Onglet Leads, sources Meta + Retargeting | bloc Formules | — |
| F | Leads Google | Onglet Leads, source Google | bloc Formules | — |
| G | Leads total | Calcul | `=E2+F2` | ≥ 8 / 5–7 / < 5 par semaine (hypothèse H7 à ≈ 350 $/sem) |
| H | CPL global | Calcul | `=SIERREUR(D2/G2;"")` | ≤ 40 $ / 41–60 $ / > 60 $ (H3) |
| I | CPL Meta | Calcul | `=SIERREUR(B2/E2;"")` | ≤ 50 $ / 51–60 $ / > 60 $ (H3) |
| J | CPL Google | Calcul | `=SIERREUR(C2/F2;"")` | ≤ 70 $ / 71–80 $ / > 80 $ (H3) |
| K | Devis envoyés | Onglet Leads, Devis = O, sources ads | bloc Formules | — |
| L | Taux lead→devis | Calcul | `=SIERREUR(K2/G2;"")` | ≥ 80 % / 65–79 % / < 65 % (H4) |
| M | Dépôts | Onglet Leads, Dans fenêtre = O, non annulé, sources ads | bloc Formules | — |
| N | Taux de close | Calcul | `=SIERREUR(M2/K2;"")` | ≥ 35 % / 25–34 % / < 25 % (H5) |
| O | CA HT réservé | Onglet Leads, somme CA HT devis des dépôts comptés en M | bloc Formules | — |
| P | ROAS réservé | Calcul | `=SIERREUR(O2/D2;"")` | ≥ 4× / 3–3,9× / < 3× (décision 5) |
| Q | ROAS réservé Meta | CA réservé Meta + Retargeting ÷ B | bloc Formules | ≥ 4× / 3–3,9× / < 3× |
| R | ROAS réservé Google | CA réservé Google ÷ C | bloc Formules | ≥ 4× / 3–3,9× / < 3× |
| S | CA HT encaissé | Onglet Leads, Événement réalisé = O | bloc Formules | — |
| T | ROAS encaissé | Calcul | `=SIERREUR(S2/D2;"")` | mêmes seuils que P, lus avec 6–10 semaines de retard |
| U | Fréquence Meta | Ads Manager → ensemble FROID → colonne « Fréquence », 7 jours | saisie | < 2,5 / 2,5–3,5 / > 3,5 (hypothèse; règles en section 4) |
| V | CTR lien Meta | Ads Manager → Colonnes → Personnaliser → « CTR (taux de clics sur un lien) », ensemble FROID, 7 jours. Pas « CTR (tous) », qui gonfle 2–3× avec les clics « Voir plus » et les réactions | saisie (format %) | ≥ 1,5 % / 1–1,49 % / < 1 % (H13, hypothèse) |
| W | CTR Google | Google Ads → Campagne → colonne « CTR », 7 jours | saisie (format %) | ≥ 5 % / 3–4,9 % / < 3 % (H13, hypothèse) |
| X | Leads vus par Meta | Events Manager → Aperçu → Lead, 7 jours | saisie | X ÷ E : ≥ 60 % / 50–59 % / < 50 % (hypothèse 60–80 % visibles) |
| Y | Leads vus par Google | Google Ads → Campagne → colonne « Conversions » (Lead formulaire), 7 jours | saisie | Y ÷ F : mêmes seuils que X |
| Z | Notes | Ce que tu as changé, pubs coupées, anomalies, « immature » pour les semaines non mûres | texte | — |

**Bloc Formules** (à coller tel quel en ligne 2, puis recopier sur les lignes 3 à 9; les `$` gardent les références intactes) :

```
E2 =NB.SI.ENS(Leads!$C:$C;"Meta";Leads!$A:$A;">="&$A2;Leads!$A:$A;"<"&$A2+7)+NB.SI.ENS(Leads!$C:$C;"Retargeting";Leads!$A:$A;">="&$A2;Leads!$A:$A;"<"&$A2+7)

F2 =NB.SI.ENS(Leads!$C:$C;"Google";Leads!$A:$A;">="&$A2;Leads!$A:$A;"<"&$A2+7)

K2 =NB.SI.ENS(Leads!$F:$F;"O";Leads!$C:$C;"Meta";Leads!$A:$A;">="&$A2;Leads!$A:$A;"<"&$A2+7)+NB.SI.ENS(Leads!$F:$F;"O";Leads!$C:$C;"Retargeting";Leads!$A:$A;">="&$A2;Leads!$A:$A;"<"&$A2+7)+NB.SI.ENS(Leads!$F:$F;"O";Leads!$C:$C;"Google";Leads!$A:$A;">="&$A2;Leads!$A:$A;"<"&$A2+7)

M2 =NB.SI.ENS(Leads!$N:$N;"O";Leads!$L:$L;"<>O";Leads!$C:$C;"Meta";Leads!$A:$A;">="&$A2;Leads!$A:$A;"<"&$A2+7)+NB.SI.ENS(Leads!$N:$N;"O";Leads!$L:$L;"<>O";Leads!$C:$C;"Retargeting";Leads!$A:$A;">="&$A2;Leads!$A:$A;"<"&$A2+7)+NB.SI.ENS(Leads!$N:$N;"O";Leads!$L:$L;"<>O";Leads!$C:$C;"Google";Leads!$A:$A;">="&$A2;Leads!$A:$A;"<"&$A2+7)

O2 =SOMME.SI.ENS(Leads!$I:$I;Leads!$N:$N;"O";Leads!$L:$L;"<>O";Leads!$C:$C;"Meta";Leads!$A:$A;">="&$A2;Leads!$A:$A;"<"&$A2+7)+SOMME.SI.ENS(Leads!$I:$I;Leads!$N:$N;"O";Leads!$L:$L;"<>O";Leads!$C:$C;"Retargeting";Leads!$A:$A;">="&$A2;Leads!$A:$A;"<"&$A2+7)+SOMME.SI.ENS(Leads!$I:$I;Leads!$N:$N;"O";Leads!$L:$L;"<>O";Leads!$C:$C;"Google";Leads!$A:$A;">="&$A2;Leads!$A:$A;"<"&$A2+7)

Q2 =SIERREUR((SOMME.SI.ENS(Leads!$I:$I;Leads!$N:$N;"O";Leads!$L:$L;"<>O";Leads!$C:$C;"Meta";Leads!$A:$A;">="&$A2;Leads!$A:$A;"<"&$A2+7)+SOMME.SI.ENS(Leads!$I:$I;Leads!$N:$N;"O";Leads!$L:$L;"<>O";Leads!$C:$C;"Retargeting";Leads!$A:$A;">="&$A2;Leads!$A:$A;"<"&$A2+7))/B2;"")

R2 =SIERREUR(SOMME.SI.ENS(Leads!$I:$I;Leads!$N:$N;"O";Leads!$L:$L;"<>O";Leads!$C:$C;"Google";Leads!$A:$A;">="&$A2;Leads!$A:$A;"<"&$A2+7)/C2;"")

S2 =SOMME.SI.ENS(Leads!$K:$K;Leads!$J:$J;"O";Leads!$N:$N;"O";Leads!$L:$L;"<>O";Leads!$C:$C;"Meta";Leads!$A:$A;">="&$A2;Leads!$A:$A;"<"&$A2+7)+SOMME.SI.ENS(Leads!$K:$K;Leads!$J:$J;"O";Leads!$N:$N;"O";Leads!$L:$L;"<>O";Leads!$C:$C;"Retargeting";Leads!$A:$A;">="&$A2;Leads!$A:$A;"<"&$A2+7)+SOMME.SI.ENS(Leads!$K:$K;Leads!$J:$J;"O";Leads!$N:$N;"O";Leads!$L:$L;"<>O";Leads!$C:$C;"Google";Leads!$A:$A;">="&$A2;Leads!$A:$A;"<"&$A2+7)
```

Le critère `Leads!$L:$L;"<>O"` compte les leads dont la case Annulé est vide (le cas normal) et exclut seulement ceux marqués O.

**Lignes cumul** (lignes 11 à 13; la ligne 10 reste vide). En colonne A, mets la date du lundi de la dernière semaine du cumul; recopie les formules de la ligne 2 dans les colonnes E à T avec deux changements : `">="&$A2` devient `">="&$A11-21` et `"<"&$A2+7` devient `"<"&$A11+7`. Pour les colonnes saisies, remplace par une somme sur 4 semaines : B11 `=SOMME.SI.ENS(B$2:B$9;$A$2:$A$9;">="&$A11-21;$A$2:$A$9;"<="&$A11)` (idem C11, X11, Y11 sur leurs colonnes); U11, V11, W11 = moyenne des 4 lignes (`=MOYENNE.SI.ENS(...)` avec les mêmes critères de date).
- Ligne 11 « Cumul 4 dernières semaines » : A11 = lundi de la semaine qui vient de finir (tu changes la date chaque lundi). **Toute décision kill/scale se prend sur cette ligne**, jamais sur une semaine isolée : avec 2–3 dépôts par semaine (hypothèse H7), le ROAS d'une seule semaine est du bruit.
- Ligne 12 « Cumul semaines 1–4 (verdict) » : A12 = 2026-10-19, fixe. C'est la ligne du verdict du 23 novembre (cohortes mûres).
- Ligne 13 « Cumul semaines 5–8 (provisoire) » : A13 = 2026-11-16, fixe. Notes = « immature jusqu'au 21 décembre ».

**Seuils de couleur** : sélectionne la colonne → Format → Mise en forme conditionnelle → règle « Supérieur à » / « Compris entre » / « Inférieur à » avec les bornes du tableau, une règle par couleur (vert, jaune, rouge). Pour X et Y, utilise « Formule personnalisée » : rouge `=ET(E2>0;X2/E2<0,5)`, jaune `=ET(E2>0;X2/E2<0,6)`, vert `=ET(E2>0;X2/E2>=0,6)` (Y avec F). Un rouge en X ou Y deux semaines de suite ne signifie pas qu'il faut acheter un outil : vérifie que la bannière n'a pas changé, que Complianz débloque bien PixelYourSite après « Accepter », et que l'API Conversions est active (Events Manager → Diagnostics); si tout est en ordre, c'est le taux de refus Loi 25 et c'est normal.

**Rituel du lundi, 30 minutes, avant 10 h :**
1. (5 min) Onglet Leads : chaque lead de la semaine a une Source, un statut Devis, un Dépôt et une Date dépôt à jour, en croisant avec Booqable (commandes taguées ADS-META / ADS-GOOGLE, ou recherche « SRC= » en mode repli). Aucun `Source lead` vide dans Booqable.
2. (5 min) Ads Manager : copie Spend Meta, Fréquence, CTR lien, Lead (Events Manager, 7 jours). Google Ads : copie Coût, CTR, Conversions. Saisis B, C, U, V, W, X, Y. Mets à jour A11.
3. (10 min) Lis la ligne de la semaine ET la ligne 11. Un rouge en H, I, J, P, Q, R, U, V ou W → applique la règle correspondante de la section 4 (pause/kill) ou de la section 9 (garde-fous); **un rouge sur un seul canal (I/Q = Meta, J/R = Google) → règle de la section 4 pour ce canal seulement**, ne touche pas à l'autre. Un rouge en L ou N → problème d'ops, pas de pub : voir section 8. Retargeting : filtre l'onglet Leads sur Campagne = lettres_retarg et compare avec le spend de l'ensemble RETARG sur 4 semaines; CPL > 60 $ → c'est le premier poste à couper (section 4).
4. (5 min) Note en Z ce que tu changes et pourquoi (une ligne, pas un roman); écris « immature » sur les lignes de moins de 30 jours.
5. (5 min) Mets à jour les leads des 4 semaines précédentes dont le dépôt vient d'entrer (cohorte par date de lead : la colonne N recalcule la fenêtre toute seule).

## 8. Ops post-lead (pour ne pas gâcher le ROAS)

Un lead te coûte ≈ 40 $ (hypothèse H3). Un lead qui attend deux jours, qui reçoit un courriel flou ou qui se fait « réserver » une date jamais payée, c'est 40 $ brûlés et un devis de moins dans le tunnel. Cette section fixe la routine minimale pour que les ≈ 75 leads attendus du test (hypothèse H7) deviennent ≈ 60 devis (80 %, H4) et ≈ 21 réservations avec dépôt (35 % des devis, H5). Le tracking, la convention UTM et le format exact des notes Booqable sont en section 7; ici on parle seulement de ce que tu fais une fois le lead reçu.

Trois règles qui gouvernent toute la section :

1. **Aucune date n'est bloquée sans dépôt.** Une date est confirmée uniquement à la réception du dépôt de 20 % (H2) : premier dépôt reçu, premier servi. Avant, tu ne « réserves » rien, tu ne « gardes » rien (un set de lettres = 1 location par week-end, H9; 65 % des devis ne closeront pas, H5 : bloquer une date pour eux fait perdre les autres leads du même week-end). La même phrase revient dans tous les scripts.
2. **Aucun prix dans un courriel ou un texto.** Les totaux sont dans la soumission Booqable. Même si le client insiste : « Je vous envoie tout ça dans la soumission, comme ça vous avez le détail exact avec la livraison. »
3. **Une seule source par lead**, décidée à la qualification et jamais changée (H10). Règle en 3 lignes, détaillée en section 7.3 : (a) le courriel du formulaire contient un `utm_source` → c'est la source (`meta` → Meta; `meta` + `lettres_retarg` → Retargeting; `google` → Google), même si le client dit autre chose; (b) pas d'UTM (lead direct, DM Instagram, formulaire général) → tu poses « Comment nous avez-vous trouvés? » au premier échange : « Facebook / Instagram » → Meta (`CREA=inconnu`); « Google » → Organique, sauf preuve dans Google Ads → Rapports → Détails des appels; bouche-à-oreille → Référence; client qui a déjà loué → Récurrent; flou → Organique; (c) lead téléphone → même question, même règle. Avec la bannière Loi 25, une partie des leads arrivera sans pixel, mais jamais sans cette décision : c'est elle, pas Meta ni Google, qui fait le ROAS.

Ton des scripts : « vous » partout dans les courriels et textos (un client d'anniversaire ne s'en formalise pas; un client corpo, oui pour un « tu »). Les pubs B2C restent au « tu » (section 5), ce n'est pas contradictoire : la pub attire, la soumission rassure.

**Conditions par défaut à confirmer par Alexandre avant le lundi 21 septembre** (elles apparaissent dans les scripts; si tu changes une valeur, change-la dans tous les scripts et sur la page, sections 2 et 6) :

| Condition | Valeur par défaut retenue ici | Où la régler |
|---|---|---|
| Dépôt | 20 % du total du devis, à la réservation (H2) | Demande de paiement Booqable (voir Process) |
| Solde | 100 % du reste dû à J-7 (même règle sur la page, section 6, et dans la promesse, section 2; si tu choisis « le jour même », le J-7 devient un simple rappel logistique et la phrase change aux deux endroits) | Booqable, 2e demande de paiement envoyée à J-10 |
| Validité de la soumission | 30 jours, sous réserve de disponibilité de la date | Booqable → Paramètres → Documents → Devis → validité = 30 jours (à vérifier dans ton compte) |
| Délai minimal demande → livraison | 5 jours (hypothèse; à ajuster selon ton délai réel de préparation) | Réponse « dernière minute » ci-dessous |
| Électricité sur place | 1 prise standard à moins de 10 m de l'installation, abri contre la pluie si extérieur (valeur par défaut, à ajuster selon ton matériel) | Script J-7 |
| Annulation par le client | Dépôt non remboursable, mais transférable une fois sur une autre date disponible dans les 12 mois (défaut proposé, à confirmer; à écrire dans les conditions du devis Booqable → Paramètres → Documents → Devis → conditions) | Devis Booqable + courriel de confirmation |

### 8.1 SLA et organisation

| Règle | Valeur à appliquer |
|---|---|
| Qui répond | Alexandre, seul, depuis evenox.ca@gmail.com et le 514-559-1893 (pas de boîte partagée pendant le test) |
| Délai maximum | < 24 h, toujours, 7 jours sur 7 |
| Délai cible | < 4 h ouvrables. **Heures ouvrables du test = 8 h à 20 h, 7 jours sur 7** (c'est la seule définition; un lead reçu à 21 h est « 0 h ouvrable » jusqu'à 8 h le lendemain) |
| Lead reçu après 20 h | Réponse le lendemain avant 9 h |
| Rythme | 4 plages fixes de 10 min dans ton calendrier Google : **8 h 30, 12 h, 15 h 30, 19 h** (écart maximal 3 h 30, donc la cible < 4 h tient). Chaque plage : vider le libellé « Leads-ads », envoyer courriel + texto, créer la fiche Booqable |
| Entre deux plages | Si la notification arrive et que tu as 2 minutes (en livraison, par exemple) : envoie au moins le texto d'accusé « Bien reçu, soumission d'ici 24 h » (script ci-dessous). Le courriel complet attend la plage suivante |
| Réponse automatique au lead | Déjà réglée en section 3 (Notification 2 de Fluent Forms) : le client reçoit dans la seconde « Reçu! Tu reçois ta soumission Booqable par courriel en moins de 24 h… ». Elle protège le SLA quand tu es en livraison; elle ne remplace pas ta réponse |
| Notification Gmail (ordinateur) | Gmail → roue Paramètres → « Voir tous les paramètres » → « Filtres et adresses bloquées » → « Créer un filtre » → Objet = `LEAD LETTRES` (l'objet exact envoyé par Fluent Forms, section 3) → « Créer un filtre » → cocher « Appliquer le libellé : Leads-ads » (crée-le au passage), « Activer le suivi » (étoile), « Toujours marquer comme important », « Ne jamais envoyer dans le spam » → Créer |
| Notification vers toi (téléphone) | App Gmail, compte evenox.ca@gmail.com. Android : Paramètres → [le compte] → Gérer les libellés → « Leads-ads » → « Synchroniser les messages : 30 derniers jours » + « Notifications par libellé » + sonnerie distincte. iPhone : Paramètres → [le compte] → Notifications → « Tous les nouveaux e-mails » (pas d'option par libellé sur iPhone; le filtre étoile + libellé fait le tri à l'œil). Le mode « Prioritaires » ne sert à rien ici : Gmail décide lui-même ce qui est prioritaire, pas toi |
| Alerte texto vers toi | Gratuite, sans outil de plus : Fluent Forms → Réglages et intégrations → Notifications par courriel → « Ajouter une notification » (3e notification, section 3) → destinataire = l'adresse courriel-vers-texto de ton fournisseur cellulaire au format `5145591893@[domaine du fournisseur]` (Bell : `txt.bell.ca`; Telus : `msg.telus.com`; Rogers : `pcs.rogers.com`; Fido : `fido.ca`; Koodo : `msg.koodomobile.com`; Vidéotron : `texto.videotron.ca` – domaines à valider auprès de ton fournisseur, certains ferment ces passerelles) → objet `LEAD {inputs.ville} {inputs.date_evenement}` → corps = prénom + téléphone du lead seulement (un texto tronque à ≈ 160 caractères). Test avec une vraie soumission le vendredi 25 septembre (section 10). Si le texto n'arrive pas en 5 min : la notification push Gmail reste ton alerte et tu passes à Zapier + Twilio (ordre de grandeur 20–30 $/mois) seulement si, après 2 semaines, le délai médian de première réponse (colonne « Délai 1re réponse » à ajouter dans l'onglet Leads du Sheet, section 7) dépasse 4 h |
| Heures d'arrivée des leads | Hypothèse : les leads Meta arrivent surtout le soir et le week-end. À valider après 2 semaines avec l'heure de réception des courriels « LEAD LETTRES »; si > 50 % tombent après 18 h, déplace la plage de 19 h à 20 h et ajoute une plage à 21 h le vendredi et le samedi |
| Plan B absence | Si tu es injoignable > 24 h (maladie, voyage) : une personne de confiance (conjointe, ami) avec « délégation » Gmail (Paramètres → Comptes → Accorder l'accès à votre compte) envoie uniquement le texto/courriel d'accusé et le script Cas B; aucune soumission ni prix. À nommer avant le 28 septembre |

Un lead = deux gestes dans la même plage : courriel + texto. Le texto débloque la conversation (les gens répondent à un texto, pas toujours à un courriel); le courriel garde la trace et porte la soumission. Aucun texto sortant avant 8 h ni après 20 h (un lead reçu à 22 h a déjà la réponse automatique; ton texto part à la plage de 8 h 30). Dans les scripts, les dates s'écrivent en clair (« samedi 3 octobre »); le format `AAAA-MM-JJ` est réservé aux notes Booqable et au Sheet.

**Lead par téléphone (asset d'appel Google, sections 4 et 7)** : tu réponds si tu peux; appel manqué → rappel dans l'heure (heures ouvrables), sinon texto « Alexandre d'Évenox, j'ai manqué votre appel : date et ville de l'événement? Répondez STOP pour ne plus recevoir de suivi. » Script de 30 secondes, dans cet ordre :

```
« Évenox, Alexandre à l'appareil. Parfait, je note : c'est pour quelle date? Dans quelle ville? Quel mot, ou combien de pièces? Livraison à la porte ou ramassage à Sainte-Thérèse? C'est quel genre d'événement, et environ combien d'invités? Et juste pour mes notes : vous nous avez trouvés comment – Google, Facebook/Instagram, ou quelqu'un vous a parlé de nous? Je vous envoie la soumission par courriel d'ici 24 h; votre courriel et votre cellulaire, c'est…? »
```

Règle de source pour l'appel (règle 3) : « Google / j'ai cherché » → Google seulement si l'appel apparaît dans Google Ads → Rapports → Détails des appels (sinon Organique); « Facebook / Instagram » → Meta; « un ami / on m'a parlé de vous » → Référence; flou → Autre. Fiche client Booqable créée dès la fin de l'appel, avec la source et le tag éventuel. Jamais de prix au téléphone : « Je préfère vous envoyer le total exact avec la livraison, ce sera dans la soumission d'ici demain. »

**Lead par DM Instagram / Messenger (commentaire ou message sous une pub)** : vérifié aux mêmes 4 plages (Meta Business Suite → Boîte de réception). Réponse type, toujours la même : « Merci! Pour une soumission en 24 h, remplissez le formulaire ici : evenox.ca/lettres-illuminees – vous y indiquez la date, le mot et la ville, et je vous réponds le jour même. » Si le client donne les 5 infos dans le DM sans passer par le formulaire : tu crées la fiche avec source Meta, `CREA=inconnu` (ou le nom de la pub si visible dans le fil), et tu envoies le Cas A par courriel. Sans formulaire, le pixel Lead ne se déclenche pas : le Sheet et Booqable restent la vérité.

**Lead en anglais (groupe « Lettres EN », section 4)** : tu réponds dans la langue du client (courriel Cas A/B traduits mot pour mot, sans nouveau contenu), mais la signature, l'adresse et le PDF du devis Booqable restent en français (Loi 96 : le français doit être au moins équivalent; une réponse individuelle en anglais à un client qui écrit en anglais est permise). Aucun script EN supplémentaire à produire avant que le groupe « Lettres EN » génère un premier lead.

### 8.2 Script de première réponse

Deux cas. Le formulaire de la page lettres rend déjà obligatoires la date, le mot, le nombre de pièces, la ville, livraison/ramassage et le type d'événement (section 3), donc un lead formulaire est presque toujours un Cas A; il ne manque généralement que le nombre d'invités (tu le demandes dans le courriel Cas A, sans bloquer la soumission). Le Cas B vise surtout les leads téléphone, DM Instagram, courriel direct ou formulaire général du site.

**Cas A – l'information est complète** : tu prépares la soumission Booqable et la demande de paiement (Process 8.3) AVANT d'écrire, puis tu envoies ce courriel avec le PDF joint et le lien de dépôt. Un seul courriel, pas d'aller-retour.

```
Objet : Votre soumission Évenox – lettres « [MOT] » pour le [date]

Bonjour [Prénom],

Merci pour votre demande pour le [date] à [ville]. Bonne nouvelle : les lettres « [MOT] » sont disponibles à cette date au moment où j'écris.

Vous trouverez votre soumission détaillée ci-jointe (livraison à [ville] incluse / ramassage à Sainte-Thérèse). Les totaux y sont indiqués.

Pour confirmer, il suffit de verser le dépôt de 20 % par ce lien sécurisé : [lien de paiement]. La date est confirmée dès réception du dépôt (premier dépôt reçu, premier servi); le solde se règle 7 jours avant l'événement.

Petite question pour ajuster l'installation : combien d'invités attendez-vous, environ?

Une question d'ici là? Répondez à ce courriel ou textez-moi au 514-559-1893.

Alexandre Séguin – Évenox
Location d'équipement événementiel
215 boul. René-A.-Robert, Sainte-Thérèse – 514-559-1893 – evenox.ca
```

**Cas B – il manque de l'information** : tu poses UNIQUEMENT les questions manquantes parmi les 5 ci-dessous (tu supprimes les lignes déjà connues et tu renumérotes), jamais les 5 si tu en as déjà 3.

```
Objet : Votre demande de lettres illuminées – quelques précisions

Bonjour [Prénom],

Merci pour votre demande! Pour vous envoyer une soumission précise en 24 h, j'ai besoin de :

1. La date de l'événement (et l'heure d'installation souhaitée)
2. L'adresse (ou la ville) de l'événement
3. Le mot, les chiffres ou le nombre de pièces souhaité
4. Livraison à la porte ou ramassage à notre entrepôt de Sainte-Thérèse
5. Le type d'événement et le nombre d'invités approximatif

Répondez directement à ce courriel ou textez-moi au 514-559-1893.

Alexandre Séguin – Évenox
215 boul. René-A.-Robert, Sainte-Thérèse – 514-559-1893 – evenox.ca
```

Texto J0 (les deux cas, dans la même plage que le courriel) :

```
Bonjour [Prénom], Alexandre d'Évenox (Sainte-Thérèse). Merci pour votre demande de lettres « [MOT] » pour le [date]. Je viens de vous envoyer un courriel [avec quelques questions rapides / avec votre soumission et le lien pour confirmer]. Vous pouvez aussi me répondre ici. Répondez STOP pour ne plus recevoir de suivi.
```

Texto d'accusé (entre deux plages, quand tu n'as que 2 minutes) :

```
Bonjour [Prénom], Alexandre d'Évenox. Bien reçu votre demande pour le [date] : soumission d'ici 24 h. Répondez STOP pour ne plus recevoir de suivi.
```

Pas de prix par texto, même si le client le demande : « Je vous envoie tout ça dans la soumission d'ici 24 h, comme ça vous avez le détail exact avec la livraison. »

### 8.3 Process Booqable de bout en bout

Statuts natifs de Booqable utilisés (libellés français à vérifier une fois dans ton compte : Commandes → filtre « Statut ») : **Concept** (brouillon/devis, ne bloque PAS le stock) → **Réservée** (bloque le stock) → **Commencée** (matériel sorti) → **Arrêtée** (matériel rentré) → **Archivée**; plus **Annulée**. Rien d'autre n'existe : les étapes du tunnel se distinguent par les tags et les notes de commande, pas par des statuts inventés.

**Prérequis semaine 0 (10 min, à faire mercredi 23 septembre avec le reste du setup Booqable, section 3)** :
- Booqable → Paramètres → Tarification → Dépôts = **« Aucun »**. Ce réglage crée un dépôt de GARANTIE remboursable (un montant retenu EN PLUS du prix), pas un acompte : activé à 20 %, le client verrait un montant bloqué en plus du total et le lien de paiement demanderait 100 % de la commande.
- Booqable → Paramètres → Paiements : Booqable Payments (Stripe) activé et « demandes de paiement » disponibles. À vérifier dans ton forfait, puis **paiement test de 1 $ sur ta propre carte** (commande test → Paiements → Demander un paiement → 1 $ → payer → vérifier que le paiement apparaît sur la commande et que le solde affiché diminue d'autant) → rembourser et supprimer la commande test. Si une demande de paiement partiel n'est pas offerte : le dépôt se prend par virement Interac à evenox.ca@gmail.com (le courriel J0 donne le montant du dépôt tel qu'il apparaît sur le devis et l'adresse Interac), et tu notes `DEPOT=AAAA-MM-JJ` à la main. C'est la question bloquante no 6 de la fin du document.
- Booqable → Paramètres → Champs personnalisés → Commandes → Ajouter → nom `Option suggérée` → type « Texte court » → cocher « Afficher sur les devis ». Sert à l'upsell (8.4) sans toucher au total.

**Étapes, dans l'ordre :**

1. **J0 – Qualification et fiche client.** Lire le courriel « LEAD LETTRES ». Décider la source UNE fois (règle 3) et créer la fiche : Clients → Nouveau → nom, courriel, cellulaire, champ « Source lead » rempli. Ajouter la ligne d'onglet Leads du Sheet (section 7.5) : 1 ligne par lead, le jour même, y compris les non qualifiés.
2. **J0 – Vérifier la disponibilité AVANT d'écrire.** Booqable → Calendrier (ou Planning) → filtrer les produits « Lettres » → regarder le week-end demandé. Pièces déjà en statut Réservée ce week-end-là → cas « stock déjà réservé » (8.6). Sinon, continuer.
3. **J0 – Devis.** Commandes → Nouvelle commande → client, dates exactes (livraison la veille ou le jour même, reprise le lendemain, section 3 FAQ), articles, ligne de livraison selon l'adresse. Statut **Concept** : le stock n'est PAS bloqué (Booqable affiche un avertissement si les pièces sont déjà réservées ce jour-là : c'est ton second filet). Tag de commande `ADS-META` ou `ADS-GOOGLE` (rien pour Organique/Référence/Récurrent) + tag `DEVIS`. Coller la note (format section 7) : `SRC=meta | CAMP=lettres_froid | CREA=L-anniv-40 | LEAD=2026-10-03` puis, sur des lignes séparées, `OPTIN=oui/non` et `DEVIS=AAAA-MM-JJ`. Remplir « Option suggérée » si les critères d'upsell sont remplis (8.4). Télécharger le PDF du devis.
4. **J0 – Demande de paiement (dépôt).** Sur la commande → onglet **Paiements** → **« Demander un paiement »** → montant personnalisé = **20 % du total du devis, arrondi au dollar** (H2 : ≈ 110 $ sur un panier de 550 $ HT, hypothèse; le montant réel est celui de ton devis) → copier le lien → le coller dans le courriel Cas A. Le devis part le jour même si l'info est complète (avant 20 h), sinon dans les 24 h.
5. **Dépôt reçu – Confirmation.** Le jour où le paiement apparaît dans Paiements : commande → bouton **« Réserver »** → statut **Réservée** (c'est CE passage qui bloque l'inventaire pour ce week-end). Note : `DEPOT=AAAA-MM-JJ`. Sheet : colonne G = O, H = date, I = CA HT du devis (c'est le « ROAS réservé », section 7). Courriel de confirmation (script ci-dessous). Aucune action Meta : le client est déjà exclu du froid et du retargeting par l'audience « Site web – visiteurs /merci 180 j » (section 4); aucun courriel n'est importé dans Meta pendant le test (Loi 25).
6. **J-10 – Lien du solde.** Commande → Paiements → « Demander un paiement » → montant = reste dû → courriel + texto « Solde de votre location » (script ci-dessous). Si le client a déjà tout payé, sauter.
7. **J-7 – Rappel logistique.** Courriel + texto : adresse exacte, heure d'accès, prise électrique, abri si extérieur, nom et cellulaire du contact sur place; solde : « reçu, merci » ou « en attente, lien ci-dessous ». Quand le solde arrive (ce jour-là ou avant) : note `SOLDE=AAAA-MM-JJ`.
8. **Jour J – Livraison ou ramassage.** Commande → **« Commencer »** → statut Commencée. Photo des lettres installées (accord écrit du client : un « oui » par texto suffit, on l'archive; pas de visages d'invités reconnaissables) pour tes futures créas; carte « Merci » avec le QR vers la fiche Google (à produire, section 3).
9. **Retour.** Inspection, commande → **« Arrêter »** → statut Arrêtée. Note : `EVENEMENT=OK` (ou `EVENEMENT=ANNULE` si l'événement n'a pas eu lieu). Sheet : colonne J = O, K = CA HT encaissé. C'est ici que se lit le « ROAS encaissé » (H10), pas au J+1.
10. **J+1 après l'événement – Demande d'avis Google.** Courriel + texto (script ci-dessous) avec le lien court « Laisser un avis » (Fiche d'établissement Google → « Demander des avis » → copier le lien, section 3). À tous les clients, jamais contre un rabais ni un cadeau (interdit par Google; section 9). Puis commande → **Archiver**.

**Courriel de confirmation (dépôt reçu)** :

```
Objet : C'est confirmé! Lettres « [MOT] » le [date]

Bonjour [Prénom],

Dépôt bien reçu, merci! Votre date est confirmée. Voici le récapitulatif :
– Date : [date] – installation vers [heure], reprise [jour/heure]
– Lieu : [adresse]
– Inclus : lettres « [MOT] », [supports/rallonges/jeux, selon le devis]
– Contact sur place : [nom + cellulaire]
– Solde : [montant du devis] à régler 7 jours avant l'événement; le lien vous arrivera 10 jours avant.

Je vous réécris 7 jours avant l'événement pour valider l'accès et l'électricité. D'ici là, vous pouvez modifier le mot ou ajouter des articles : un courriel suffit.

Alexandre Séguin – Évenox
215 boul. René-A.-Robert, Sainte-Thérèse – 514-559-1893 – evenox.ca
```

**J-10 – Solde (courriel; texto = première phrase + lien)** :

```
Objet : Solde de votre location – [date]

Bonjour [Prénom],

Votre événement approche! Voici le lien sécurisé pour régler le solde de votre location, dû au plus tard le [date J-7] : [lien de paiement]. Le montant est celui de votre soumission.

Alexandre Séguin – Évenox
215 boul. René-A.-Robert, Sainte-Thérèse – 514-559-1893 – evenox.ca
```

**J-7 – Rappel logistique (courriel; texto = « Bonjour [Prénom], Alexandre d'Évenox. On se voit le [date]! Je viens de vous envoyer un courriel avec 4 petites questions pour l'installation. Merci de me répondre d'ici [J-3]. »)** :

```
Objet : Votre installation du [date] – 4 petites questions

Bonjour [Prénom],

Plus qu'une semaine! Pour que tout soit prêt à votre arrivée, pouvez-vous me confirmer :

1. L'adresse exacte et l'heure à partir de laquelle on peut installer
2. Une prise électrique standard à moins de 10 mètres de l'emplacement des lettres
3. Si c'est à l'extérieur : un abri contre la pluie (chapiteau, terrasse couverte)
4. Le nom et le cellulaire de la personne à joindre sur place

Solde : [reçu, merci! / en attente – lien sécurisé : [lien]]

Alexandre Séguin – Évenox
215 boul. René-A.-Robert, Sainte-Thérèse – 514-559-1893 – evenox.ca
```

**J+1 – Demande d'avis (courriel; texto = les 2 phrases + signature LCAP, modèle Gmail « Avis » de la section 3)** :

```
Objet : Merci pour [événement]!

Bonjour [Prénom],

Merci d'avoir choisi Évenox pour [événement]! Si les lettres ont fait leur effet, un avis Google de 30 secondes nous aide énormément : [lien court].

Et si vous avez une photo des lettres pendant la soirée, on l'adorerait sur Instagram – seulement avec votre accord, répondez simplement « oui pour la photo ».

Alexandre Séguin – Évenox
215 boul. René-A.-Robert, Sainte-Thérèse – 514-559-1893 – evenox.ca
Pour ne plus recevoir de messages d'Évenox, répondez simplement « STOP ».
```

### 8.4 Upsell jeux géants et mobilier (sans pression)

**Règle « quand »** : proposer les jeux géants dès qu'UN de ces critères est vrai : événement extérieur, party/anniversaire, mariage, corpo, ou plus de 30 invités. En pratique, ça couvre presque tous les leads; la seule exception courante est un shower ou un baptême intérieur de moins de 30 invités. Proposer le mobilier/nappes/vaisselle uniquement pour mariages et corpo (ou si le client écrit qu'il cherche encore des tables, champ « Notes » du formulaire).

**Règle « comment »** : toujours les deux mêmes gestes, jamais un troisième, et aucune mention de frais (les frais de livraison dépendent de l'adresse et n'existent que dans la soumission).

1. Dans la commande Booqable : champ « Option suggérée » (créé en 8.3, affiché sur le PDF du devis) = `Jeux géants (beer pong, Jenga, Puissance 4) – ajoutés sur demande, même livraison` ou `Tables, chaises et nappes – ajoutés sur demande, même livraison`. Le total du devis reste celui des lettres. Si le client dit oui : ajouter les vrais produits à la commande, vider le champ, renvoyer le devis et une nouvelle demande de paiement si le dépôt n'est pas encore versé (s'il l'est déjà, le supplément va sur le solde).
2. Dans le courriel Cas A : une seule phrase, à coller après le paragraphe du lien de paiement.

```
Petit plus : pour un [mariage / anniversaire / party corpo] de [X] invités, nos jeux géants arrivent dans le même camion que les lettres. J'ai noté l'option dans la soumission; dites-moi et je l'ajoute avec le total exact.
```

Version mobilier (mariage/corpo) :

```
Si vous cherchez encore tables, chaises ou nappes, on peut tout livrer en même temps. Dites-le-moi et je l'ajoute à la soumission avec le total exact.
```

Si le client ne réagit pas, on ne reparle plus de l'option, ni au J+2 ni au J+5. Un panier lettres + jeux/mobilier tire le panier de 450 $ vers 800 $ (hypothèse H1), et c'est ce levier, plus les locations de semaine corpo, qui rend le 50 k$ crédible (section 1, H8).

### 8.5 Relances J+2 / J+5 / J+10 (et Cas B sans réponse)

**Cadre LCAP/CASL** : une demande de soumission = **consentement tacite**, valable 6 mois à partir de la date du lead (note `LEAD=` dans Booqable). Chaque relance, courriel ou texto, identifie l'expéditeur (nom, adresse postale, téléphone) et offre un retrait en un geste : c'est la signature ci-dessous, à coller sous TOUS les courriels de suivi, et la phrase « Répondez STOP… » qui termine chaque texto. Un « STOP » reçu = aucune autre relance sur cette demande, tag client `NO-CONTACT` + note `STOP=AAAA-MM-JJ` (le devis et son lien de paiement restent valides : le client peut confirmer de lui-même). Aucune relance ni courriel promo plus de 6 mois après la date du lead, sauf si la case facultative « nouveautés et promos » (non précochée, section 3) a été cochée (consentement exprès, n'expire pas; note `OPTIN=oui`).

```
Alexandre Séguin – Évenox
215 boul. René-A.-Robert, Sainte-Thérèse – 514-559-1893 – evenox.ca
Pour ne plus recevoir de suivi sur cette demande, répondez simplement « STOP ».
```

**J0 des relances = jour d'envoi de la soumission Booqable** (note `DEVIS=`), pas le jour du lead. Trois relances maximum, puis on ferme. Aucune n'évoque une réservation : la date est libre tant qu'aucun dépôt n'est reçu, et on le dit.

**Règle de conflit (2 leads, même set de lettres, même week-end)** : tu envoies la soumission au 2e lead normalement (statut Concept, rien n'est bloqué), puis, dans la même plage, texto au 1er lead – hors calendrier de relance, une seule fois :

```
Bonjour [Prénom], Alexandre d'Évenox. Petit mot honnête : une autre demande vient d'entrer pour les lettres « [MOT] » le [date]. Je ne bloque aucune date sans dépôt : le premier dépôt de 20 % reçu par le lien de la soumission confirme le week-end. Répondez STOP pour ne plus recevoir de suivi.
```

Premier dépôt reçu gagne, aucune exception (même si le 1er lead « avait promis »). Le perdant reçoit le jour même la réponse « stock déjà réservé » (8.6) avec une date de rechange; note `PERDU-CONFLIT` dans le Sheet, colonne M.

**J+2 – Courriel (court) + texto**

```
Objet : Re : Votre soumission Évenox – lettres « [MOT] »

Bonjour [Prénom],

Petit suivi : avez-vous pu regarder la soumission envoyée [jour]? Les lettres « [MOT] » sont toujours disponibles pour le [date] au moment où j'écris.

Si quelque chose bloque (date, livraison, choix des pièces), dites-le-moi, on ajuste.

[signature LCAP]
```

```
Bonjour [Prénom], Alexandre d'Évenox. Juste pour vérifier que vous avez bien reçu la soumission pour le [date]. Une question? Je suis là. Répondez STOP pour ne plus recevoir de suivi.
```

**J+5 – Courriel « dates limitées »**

Règle d'honnêteté : la phrase entre crochets sur les autres demandes ne s'écrit que si c'est vrai (au moins une autre demande reçue pour le même week-end dans Booqable ou le Sheet); sinon, on la supprime. Une fausse rareté = risque de plainte pour représentation trompeuse et d'avis négatif.

```
Objet : Lettres « [MOT] » – disponibilité pour le [date]

Bonjour [Prénom],

Nos lettres illuminées partent une seule fois par week-end. [J'ai reçu une autre demande pour ce week-end-là.] Je ne peux pas bloquer la date sans dépôt : le premier dépôt de 20 % reçu confirme le week-end.

Pour confirmer : le lien de paiement est dans la soumission, et c'est réglé en 2 minutes.

Si vos plans ont changé, un simple « non merci » suffit et je ferme le dossier.

[signature LCAP]
```

**J+10 – Clôture « je libère la date »**

```
Objet : Je libère la date du [date]

Bonjour [Prénom],

Sans nouvelle de votre part, je ferme votre dossier aujourd'hui : la date du [date] reste offerte au premier dépôt reçu. Aucun souci si vous revenez : la soumission reste valide 30 jours, sous réserve de disponibilité.

Merci d'avoir pensé à Évenox, et bon événement!

[signature LCAP]
```

Dans Booqable à J+10 : commande → **« Annuler »** → statut Annulée (si le bouton n'est pas offert dans ton forfait : Archiver) + tag `CLOSE-J10` + note `CLOSE=AAAA-MM-JJ` (date ISO, comme `LEAD=`). Sheet : le lead reste en F = O (devis envoyé), G = N; il sort du tunnel actif. Si le client revient avant 30 jours et que la date est libre : Commandes → rouvrir (ou dupliquer) la commande, retirer le tag `CLOSE-J10`.

**Cas B sans réponse (client qui ne répond jamais aux questions de qualification, donc pas de devis)** : ces leads font partie des 20 % « non qualifiés » de H4; ils ne restent pas ouverts indéfiniment.
- J+2 (après le courriel Cas B) – texto : « Bonjour [Prénom], Alexandre d'Évenox. Il me manque juste [la date / la ville] pour vous envoyer la soumission des lettres « [MOT] ». Vous pouvez me répondre ici. Répondez STOP pour ne plus recevoir de suivi. »
- J+5 – courriel court : même liste de questions manquantes + « Sans réponse d'ici le [date J+7], je ferme le dossier; vous pourrez nous réécrire n'importe quand. » + signature LCAP.
- J+7 – fermeture : tag client `NQ` + note `NQ=sansreponse | CLOSE=AAAA-MM-JJ`, aucune commande créée, aucune autre relance. Sheet : F = N, M = « NQ sans réponse ».

### 8.6 Leads non qualifiés : critères et réponses types

Un lead non qualifié reçoit quand même une réponse courtoise en < 24 h (c'est ta réputation et tes avis Google), et il est compté : **pour tout lead NQ, tu crées quand même la fiche client dans Booqable** (Clients → Nouveau) avec « Source lead » rempli, tag client `NQ` et une note `NQ=[raison] | SRC=… | LEAD=AAAA-MM-JJ`; aucune commande n'est créée. Raisons exactes : `NQ=horszone`, `NQ=date`, `NQ=budget`, `NQ=achat`, `NQ=jourmeme`, `NQ=coord`, `NQ=sansreponse`. Sans ça, les NQ disparaissent du dénominateur et ton CPL réel et ton taux lead → devis (section 7) sont faux.

| Critère | Comment trancher | Réponse type (courriel ou texto, + signature LCAP) |
|---|---|---|
| Hors zone | Google Maps → Itinéraire depuis « 215 boul. René-A.-Robert, Sainte-Thérèse » → distance routière > 60 km = hors zone (H12). Entre 30 et 60 km : devis normal avec frais de livraison dans la soumission | « Merci pour votre demande! [Ville] est malheureusement hors de notre zone de livraison. Si vous pouvez venir ramasser les lettres à Sainte-Thérèse, je vous envoie une soumission en 24 h. Sinon, je vous souhaite un bel événement. » |
| Date impossible / stock déjà réservé | Booqable → Calendrier → filtre « Lettres » → pièces en statut Réservée ce week-end-là. Proposer par défaut d'abord le vendredi de la même fin de semaine (livraison en semaine, plus rentable), puis le samedi suivant, puis une autre combinaison de pièces | « Les lettres « [MOT] » sont déjà réservées le [date]. Je peux vous proposer le vendredi [date], le samedi [date suivante] ou une autre combinaison disponible ce week-end-là (par exemple les chiffres « [XX] »). Ça vous intéresse? » |
| Budget irréaliste | Règle (hypothèse, à ajuster après 4 semaines) : le client annonce un budget < 60 % du total du devis que tu aurais préparé pour sa demande → UNE contre-proposition réduite (initiales ou chiffres seulement), puis on ferme. Tag `NQ=budget` seulement après refus de la contre-proposition; tant qu'une soumission est envoyée, le lead reste dans le tunnel. Budget ≥ 60 % → devis normal | « Merci pour la transparence. Pour ce budget, je vous suggère une version réduite (par exemple seulement les initiales ou les chiffres). Je vous prépare une soumission en 24 h avec cette option et vous jugez. » |
| Demande d'achat / DIY / fabrication | Le client veut acheter, faire fabriquer ou louer pour revendre | « Nous faisons uniquement de la location, pas de vente ni de fabrication. Si un jour vous cherchez des lettres pour un événement, ça nous fera plaisir. » |
| Événement le jour même / dernière minute | Moins de 5 jours entre la demande et la livraison (valeur par défaut, voir Conditions). Exception : ramassage à l'entrepôt avec pièces disponibles → tu peux dire oui | « Merci pour la demande! Malheureusement, nous ne pouvons pas livrer avec ce délai (préparation et inventaire). Pour un prochain événement, écrivez-nous au moins 5 jours d'avance et je vous réserve tout ça. » |
| Coordonnées invalides | Courriel qui rebondit ou numéro erroné → tenter l'autre canal une fois (texto si le courriel rebondit, et inversement). Aucune réponse en 48 h → `NQ=coord`, on ferme, sans relance J+2/J+5 | — |

Rétention (Loi 25) : les fiches `NQ` et les commandes Annulées sans dépôt sont supprimées de Booqable 6 mois après la date du lead (fin du consentement tacite LCAP), sauf `OPTIN=oui`; la ligne du Sheet reste, anonymisée (colonne B = « lead NQ »). À faire le premier lundi de chaque mois, 5 min.

Cible : ≈ 20 % de non qualifiés (hypothèse H4). Si tu dépasses 35 % sur 2 semaines (hypothèse de seuil; en nombres, à ≈ 9 leads/semaine selon H7 : ≥ 7 NQ sur 18 leads), c'est un signal de ciblage ou de formulaire, pas d'ops : voir le tableau de la section 9 et les règles de la section 4. À l'inverse, un délai médian de première réponse > 4 h ou plus de 20 % des devis envoyés après 24 h sur une semaine = problème d'ops (cette section), pas de pub : tu ajoutes une plage, tu ne touches pas aux campagnes.

### 8.7 Tableau récapitulatif des délais

Ordre chronologique. « J0 » des relances = jour d'envoi de la soumission. Heures ouvrables = 8 h–20 h, 7 j/7 (8.1).

| Moment | Canal | Objectif | Statut Booqable | Note Booqable à écrire |
|---|---|---|---|---|
| J0 lead (< 4 h ouvrables, max 24 h) | Courriel + texto (Gmail, cellulaire) | Accuser réception, poser les questions manquantes, décider la source, créer la fiche client, ligne dans le Sheet | Fiche client seulement (pas de commande si Cas B) | `SRC=… \| CAMP=… \| CREA=… \| LEAD=AAAA-MM-JJ` + `OPTIN=oui/non` |
| J0 devis (info complète, le jour même) | Devis PDF + demande de paiement 20 % dans le courriel Cas A | Soumission, option jeux/mobilier si critères remplis | Concept + tags `ADS-META`/`ADS-GOOGLE`, `DEVIS` | `DEVIS=AAAA-MM-JJ` |
| J+2 | Courriel court + texto | Vérifier la réception, lever un blocage; « toujours disponible au moment où j'écris » | Concept | — |
| J+5 | Courriel | Rareté honnête, « premier dépôt reçu confirme », rappel du lien | Concept | — |
| J+7 (Cas B sans réponse seulement) | Fermeture, aucun envoi | Sortir le lead du tunnel | Fiche client, tag `NQ` | `NQ=sansreponse \| CLOSE=AAAA-MM-JJ` |
| J+10 | Courriel | Clôture « je libère la date », soumission valide 30 jours sous réserve de disponibilité | Annulée + tag `CLOSE-J10` | `CLOSE=AAAA-MM-JJ` |
| Dépôt reçu (n'importe quand avant J+10) | Courriel de confirmation | Récapitulatif; bouton « Réserver » bloque le stock | Réservée | `DEPOT=AAAA-MM-JJ` (ROAS réservé) |
| J-10 avant l'événement | Courriel + texto | Lien de paiement du solde | Réservée | — |
| J-7 avant l'événement | Courriel + texto | Adresse, heure, électricité, abri, contact sur place; solde reçu ou relancé | Réservée | `SOLDE=AAAA-MM-JJ` (quand le solde arrive) |
| Jour J | Livraison / ramassage | Installation, photo (accord écrit), carte QR avis Google | Commencée | — |
| Retour | Inventaire | Inspection, remise en stock | Arrêtée | `EVENEMENT=OK` (ROAS encaissé) |
| J+1 après l'événement | Courriel + texto | Demande d'avis Google + photo client (avec accord) | Archivée | — |

## 9. Risques & garde-fous

Le principe : chaque risque a UN signal mesurable et UNE action prédéfinie. Tu ne décides pas sous stress; tu appliques la règle. Les signaux se lisent chaque lundi (routine de 1 h, section 10) dans le Google Sheet « EVX – Suivi ads » (voir section 7), avec Booqable comme seule vérité pour les leads, les devis et les dépôts. Les seuils reprennent les hypothèses verrouillées : CPL cible 40 $ (H3), alerte > 60 $ sur 7 jours glissants, pause > 80 $ après 150 $ dépensés, ROAS cible 4–5×, < 3× = corriger (décision 5). Tous les chiffres non observés dans tes comptes sont des hypothèses à valider.

**Colonnes à ajouter à l'onglet Hebdo du Sheet, après la colonne Z de la section 7** : Nb refus pour indisponibilité, Nb hors zone, Nb tire-kickers, Nb modifications par ensemble de pubs, Dépense cumulée, Dépôts encaissés cumulés, Commandes avec dépôt encore au statut Concept, Avis Google < 4 étoiles, CPM Meta. Les autres signaux (fréquence, CTR, leads par source Booqable et plateforme, taux lead → devis) sont déjà dans les colonnes E à Y. Lecture de Fréquence, CPM et CTR : Gestionnaire de publicités > Colonnes > Performance > Fréquence, CPM, CTR (taux de clics sur un lien).

**Règle transversale (H3 + Loi 25)** : les règles automatiques de la section 4 sont le filet de sécurité : EVX-PAUSE-CPL80 (Meta) et EVX-GRP-PAUSE-CPL80 (Google) désactivent l'ensemble ou le groupe quand le CPL plateforme dépasse 80 $ après 150 $ dépensés; les autres règles sont en notification. Comme le CPL affiché par les plateformes est gonflé par la perte de données Loi 25 (risque 7), chaque pause automatique se vérifie le jour même avec le CPL Booqable (dépense de l'ensemble ou du mot-clé ÷ leads Booqable de la source correspondante) : CPL réel < 60 $ → tu réactives et tu relèves le seuil selon la calibration de la section 4.3; CPL réel > 80 $ → la pause reste. La décision finale se prend toujours sur le Sheet, jamais sur les chiffres plateforme seuls.

### Tableau de synthèse

| # | Risque | Signal d'alerte (mesurable) | Garde-fou / action immédiate |
|---|---|---|---|
| 1 | Saisonnalité QC (H11) | Leads ads Booqable (Source lead = Meta + Google + Retargeting) < 6 par semaine deux semaines de suite APRÈS le 26 octobre, alors que CTR et CPC sont dans les fourchettes H13 | Ne pas juger le test sur une semaine; comparer à la même semaine calendaire de 2025 dans Booqable (Commandes > filtre par date de début); basculer les angles vers L-corpo-merci et L-chiffres-2027 dès le 12 octobre, L-noel au 26 octobre (lundis de changement, section 4). Les seuils H3 restent en vigueur quelle que soit la saison |
| 2a | Saturation Meta – froid (FROID_RiveNord-Laval_25-55) | CTR en baisse de 30 % vs la moyenne des semaines 1–2 ET CPL Booqable Meta en hausse de 30 % sur 7 jours (fréquence 7 j en indicateur secondaire, seuil > 3) | Rotation de créas le lundi de changement : activer les créas de réserve (L-noel, puis L-obnl-gala ou L-baby, angles de la section 2), puis mettre en pause la pub dont le CTR propre a chuté de 30 %; ne pas toucher au budget ni au ciblage la même semaine |
| 2b | Saturation Meta – retargeting (RETARG_Site30j_IG-FB90j) | Fréquence 7 j > 3 (règle EVX-ALERTE-FREQ3) | Audience combinée < 3 000 personnes → budget de 5 $ à 3 $/jour le jour même; sinon remplacer la créa de retargeting au prochain lundi de changement (section 4) |
| 3 | Leads tire-kickers | > 30 % des leads de la semaine avec message limité à « prix ? », demande d'achat, ou événement à > 6 mois sans détail; OU taux lead → devis < 65 % deux semaines de suite (cible 80 %, H4) | Ajouter au formulaire le champ « Nombre de jours de location » (1 jour / week-end / semaine) et la case « Je comprends que la soumission est envoyée sous 24 h » (champs à ajouter en 3.2 seulement si ce signal se déclenche); réponse standard ci-dessous qui demande seulement ce qui manque |
| 4 | Stock de lettres déjà booké (H9) | 1 devis refusé pour indisponibilité dans la semaine; OU une commande avec dépôt reçu encore au statut « Concept » le lundi (Booqable > Commandes > filtre Statut = Concept) | Dès le dépôt reçu : commande Booqable > bouton « Réserver » (Concept → Réservée), c'est ce statut qui retire les lettres du stock; mention « réserve tôt » sur la page; proposer le week-end précédent ou suivant, ou un jour de semaine, ET une alternative jeux géants / mobilier. > 2 refus/semaine = mettre en pause la pub L-* la plus diffusée et activer J-jeux-geants le lundi |
| 5 | Livraison longue distance | Adresse de livraison > 60 km de route (itinéraire Google Maps en voiture, aller simple, depuis 215 boul. René-A.-Robert, Sainte-Thérèse); OU 35–60 km avec panier sous le minimum interne de 450 $ HT hors livraison | Règle de zone appliquée AVANT le devis : > 60 km = refus poli (script ci-dessous); 35–60 km = frais de livraison « calculés selon l'adresse, inclus dans la soumission en 24 h » + minimum interne 450 $ HT (hypothèse H1, seuil interne, pas un prix client) |
| 6 | Double comptage ROAS (H10) | Une commande porte les deux tags ADS-META et ADS-GOOGLE; OU total des commandes taguées dans Booqable ≠ total du Sheet le lundi | Une seule source par lead, fixée à la qualification selon la règle en 3 étapes ci-dessous; audit croisé Booqable ↔ Sheet chaque lundi |
| 7 | Perte de données Loi 25 | Après 14 jours : leads « Lead » plateforme < 50 % des leads Booqable de la même source, OU 0 lead plateforme sur 7 jours alors que Booqable en compte ≥ 3, OU leads plateforme > 100 % des leads Booqable. Entre 60 et 80 % = normal (perte 20–40 %, ordre de grandeur, à valider) | Booqable = vérité; les plateformes servent seulement à l'optimisation. Sous 50 % ou à 0 : tester /merci le jour même (Meta : Gestionnaire d'événements > Tester les événements; Google : Google Ads > Objectifs > Conversions > statut « Enregistre des conversions » + Tag Assistant). Au-dessus de 100 % : spam ou double déclenchement de l'événement Lead (voir section 7) |
| 8 | Phase d'apprentissage et changements trop fréquents | > 1 modification (budget, ciblage, ajout ou pause de pub) sur le même ensemble dans la même semaine, OU un changement de budget > 20 % d'un coup (Gestionnaire de publicités > Historique des modifications; Google Ads > Historique des modifications) | Règle « une modification par ensemble par semaine, le lundi, notée dans le Sheet »; paliers de budget de +20 % maximum. Le statut « Apprentissage limité » est NORMAL à ce budget et n'est pas un signal d'action |
| 9 | Dépendance à une seule créa | Après 14 jours, moins de 2 pubs affichent à la fois ≥ 10 % de la dépense ET un CPL plateforme ≤ 60 $ (colonnes Montant dépensé, Coût par résultat) | Activer les créas de réserve (L-noel, puis L-obnl-gala ou L-baby) sur un angle différent de la pub dominante, au lundi de changement suivant, sans toucher au budget; garder 4 pubs actives minimum; 2 nouvelles créas toutes les 2 semaines à partir de la semaine 3 |
| 10 | Cash-flow (H2) | Dépense pub cumulée > 2 × dépôts encaissés cumulés après 4 semaines (soit dépôts < 50 % du spend) | Plafond Meta cumulatif 1 300 $ (réinitialisé le 1er novembre) et budget quotidien Google jamais au-dessus de la variante choisie (détails ci-dessous); aucun palier +20 % tant que les dépôts cumulés ne couvrent pas 50 % du spend cumulé; réserve de trésorerie de 3 000 $ mise de côté avant la semaine 0 |
| 11 | Compte publicitaire désactivé | Courriel « compte restreint / désactivé », OU une pub refusée 2 fois de suite | Avant la semaine 0 : 2FA, admin secondaire, carte de secours (chemins ci-dessous); pub refusée = corriger, pas contester; compte restreint = demande d'examen le jour même |
| 12 | Avis négatifs | Tout avis < 4 étoiles sur la Fiche d'établissement Google, OU commentaire négatif public sous une pub | Réponse publique en < 24 h (en français si l'avis est en français), courte, factuelle, résolution en privé; jamais de débat public; demande d'avis systématique J+1 après chaque événement |
| 13 | Livraison en retard / matériel défectueux | Une lettre qui ne s'allume pas à l'arrivée; retard > 30 min sur l'heure convenue | Checklist avant départ cochée physiquement; kit de dépannage; départ 45 min avant l'heure calculée par Google Maps; appel proactif au client dès qu'un retard est prévu |
| 14 | Google : enchères changées trop tôt / campagne « Limitée par le budget » | Passage à « Maximiser les conversions » avec < 15 conversions sur 30 jours, OU statut « Limitée par le budget » sur EVX_GOOGLE_RECH_LOCATION | Rester en « Maximiser les clics » avec CPC max (valeur en section 4) jusqu'à 15 conversions/30 j; CPA cible seulement à 30 conversions/30 j; pas de Performance Max pendant le test. Campagne limitée par le budget = mettre en veille le groupe d'annonces le moins performant, pas augmenter le budget |

### 1. Saisonnalité (H11) : comment lire les résultats de septembre à novembre

Le test tombe sur une période mixte : fin de la saison extérieure (mariages, showers), puis montée des partys de Noël corpo (réservations en octobre–novembre), de l'Halloween et des chiffres « 2027 ». Ordre de grandeur, à valider avec l'historique Booqable : la demande grand public baisse en octobre, la demande corpo monte. Conséquence : un CPL Booqable qui monte de 20–30 % en semaines 5–8 n'est pas forcément un échec de campagne; c'est possiblement un changement de clientèle (panier corpo plus élevé, H1 mix 800 $). Autre cause à écarter avant d'agir : un CPM Meta en hausse de 30 % vs les semaines 1–2 avec un CTR stable = inflation des enchères de novembre avant le Black Friday (27 novembre 2026, ordre de grandeur), ni saturation ni mauvaise créa; tu ne fais pas de rotation, tu lis le CPL Booqable seulement.

La règle : tu compares chaque semaine à la même semaine calendaire de 2025 dans Booqable (ex. : semaine du 26 octobre 2026 vs semaine du 27 octobre 2025; Booqable > Commandes > filtre par date de début : nombre de réservations, panier). Si tu n'as pas d'historique fiable, le verdict de la semaine du 23 novembre porte sur l'économie unitaire (CPL Booqable, taux de close, ROAS réservé), pas sur le volume absolu. La saisonnalité sert à interpréter le VOLUME; elle ne suspend jamais les seuils H3 (alerte > 60 $ sur 7 jours, pause > 80 $ après 150 $ dépensés).

### 2. Saturation Meta

Hypothèse à lire dans l'estimation de taille d'audience de l'ensemble de pubs (Gestionnaire de publicités > ensemble FROID_RiveNord-Laval_25-55 > panneau de droite) : le froid 35 km / 25–55 ans, qui inclut Laval, Terrebonne et le nord de Montréal, dépasse vraisemblablement 1 M de personnes. À 26 $/jour et un CPM d'environ 13 $ (ordre de grandeur, à valider dans le compte après 2 semaines), tu achètes ≈ 2 000 impressions par jour : tu ne satures pas cette audience en 8 semaines et la fréquence 7 jours devrait rester autour de 1–1,5. Si la fréquence dépasse 3, c'est que Meta concentre la diffusion sur un sous-segment; la fréquence reste donc un indicateur secondaire.

Sur le froid, le signal qui commande une action = CTR en baisse de 30 % vs la moyenne des semaines 1–2 ET CPL Booqable Meta en hausse de 30 % sur 7 jours. Un seul des deux signaux isolé ne justifie rien. Quand les deux sont là, tu fais une rotation de créas, dans cet ordre : (1) au lundi de changement, tu actives les créas de réserve (L-noel, montée en vague 2; puis L-obnl-gala ou L-baby, angles de la section 2; voir sections 3 et 5); (2) tu mets en pause seulement la pub dont le CTR propre a chuté de 30 %, pas « la plus diffusée » (qui est souvent la gagnante). Cette rotation compte comme LA modification hebdomadaire de l'ensemble (risque 8) : tu ne touches ni au budget ni au ciblage la même semaine.

Le vrai risque de saturation est sur RETARG_Site30j_IG-FB90j : quelques centaines à quelques milliers de personnes (hypothèse) à 5 $/jour. Signal = fréquence 7 jours > 3 (règle EVX-ALERTE-FREQ3). Action : audience combinée < 3 000 personnes → budget à 3 $/jour le jour même; sinon remplacer la créa au prochain lundi de changement (section 4).

### 3. Leads tire-kickers

Date et ville sont déjà obligatoires dans le formulaire dès le lancement (décision 6, section 6); les tire-kickers restants se reconnaissent autrement. Signes : message limité à « prix ? », demande pour « acheter » des lettres, événement à plus de 6 mois sans détail, absence de réponse à la première question de qualification. Signal hebdo : > 30 % des leads de la semaine dans ces cas, OU taux lead → devis < 65 % deux semaines de suite (cible 80 %, H4). Action : ajouter au formulaire le champ « Nombre de jours de location » (liste : 1 jour / week-end / semaine) et la case à cocher « Je comprends que la soumission est envoyée sous 24 h » (champs à ajouter au formulaire de la section 3 seulement si ce signal se déclenche).

Réponse standard, envoyée en < 4 h ouvrables, à copier-coller (vouvoiement par défaut : clientèle mixte, dont corpo; aligner avec les scripts de la section 8) :

```
Bonjour [Prénom], merci pour votre demande!
Pour vous préparer une soumission précise en 24 h, j'ai besoin de deux infos :
1) L'adresse exacte de livraison et l'heure d'installation souhaitée.
2) Les lettres ou chiffres souhaités (ex. : « LOVE », « 40 », « 2027 ») et le
   nombre de jours de location.
Dès que je les ai, je vérifie la disponibilité et je vous envoie le devis.
Alexandre – Évenox – 514-559-1893
```

Si aucune réponse après les relances J+2 et J+5 (voir section 8), le lead est classé « Non qualifié » dans Booqable (champ « Source lead » conservé, note « NQ=sans réponse »). Il reste compté dans le CPL : H3 se calcule sur TOUS les leads (dépense ÷ leads Booqable de la source). Il sort du tunnel seulement à l'étape lead → devis (H4, 80 %), suivie dans une colonne séparée du Sheet. Il n'existe pas de « CPL qualifié » qui servirait de seuil de pause.

### 4. Stock de lettres déjà booké

Un set = une location par week-end (H9), livré le vendredi et repris le lundi. Le risque concret : tu paies un clic, tu envoies un devis, et tu dois refuser parce que le week-end est pris; pire, tu encaisses deux dépôts pour le même set. Dans Booqable, un devis ou une commande au statut « Concept » ne retire RIEN du stock. Garde-fous : (a) dès le dépôt reçu, tu ouvres la commande dans Booqable > bouton « Réserver » (statut Concept → Réservée) avant toute autre tâche : c'est ce statut qui retire les lettres du stock pour les dates de la commande; vérification chaque lundi : Booqable > Commandes > filtre Statut = Concept, il ne doit rester aucune commande avec dépôt reçu; (b) avant chaque devis, tu vérifies la disponibilité dans le calendrier du produit (Booqable > Produits > le set > Disponibilité); (c) mention « réserve tôt pour l'avoir » sur la page lettres (galerie, section 6); (d) si la date est prise, tu proposes dans le même courriel le week-end précédent ou suivant, ou un jour de semaine (lundi–jeudi, souvent libre, idéal pour les événements corpo), ET une alternative jeux géants / mobilier pour ne pas perdre le panier (voir section 8).

Si les refus pour indisponibilité dépassent 2 par semaine, tu ne réduis pas le budget (la demande serait gaspillée) : le lundi, tu mets en pause la pub L-* la plus diffusée et tu actives J-jeux-geants (ou L-corpo-merci pour les dates de semaine); c'est la modification de la semaine. Tu documentes le besoin d'un set supplémentaire dans le verdict du 23 novembre (H9 : la montée exige du stock). En complément, tu exclus les leads déjà en devis du ciblage : audience personnalisée Site web « URL contient /merci », 180 jours, exclue du froid ET du retargeting (voir section 4).

### 5. Livraison longue distance

Une livraison à 70 km aller simple (140 km aller-retour, deux déplacements avec la reprise ≈ 280 km, ≈ 3 h de route plus montage et démontage, ordre de grandeur) mange la marge d'une location de lettres seules à 450 $ (hypothèse H1). Distance de référence = itinéraire Google Maps en voiture, le plus court, depuis 215 boul. René-A.-Robert, Sainte-Thérèse jusqu'à l'adresse de livraison, valeur en km à l'aller, mesurée AVANT le devis.

Règle unique : rien au-delà de 60 km (H12). Entre 35 et 60 km : frais de livraison jamais écrits dans le courriel (« frais de livraison calculés selon l'adresse, inclus dans la soumission en 24 h ») + minimum de commande interne par défaut de 450 $ HT hors livraison (= panier lettres seules, hypothèse H1; c'est ton seuil interne, pas un prix client). Sous ce minimum, tu proposes d'ajouter des jeux ou du mobilier pour l'atteindre; sinon refus poli. Info qui changerait ce seuil : ta marge brute réelle par livraison (carburant + temps chauffeur aller-retour × 2). Contrôle Google chaque lundi : Google Ads > Rapports > Lieux (villes des clics); toute ville > 60 km qui revient 2 semaines de suite est ajoutée en zone exclue; l'option de zone reste « Présence » (jamais « Présence ou intérêt », voir section 4).

Refus poli à copier-coller :

```
Bonjour [Prénom], merci pour votre demande! Malheureusement, [Ville] est en
dehors de notre zone de livraison actuelle (environ 60 km autour de
Sainte-Thérèse : Rive-Nord, Laurentides, Lanaudière, Laval, Montréal et
Rive-Sud proche). Je préfère vous le dire tout de suite plutôt que de vous
faire attendre. Si votre événement change de lieu, écrivez-moi et je vous
prépare une soumission en 24 h.
Alexandre – Évenox – 514-559-1893
```

### 6. Double comptage ROAS

Interdit de compter un client dans Meta ET Google (H10). À la qualification, tu inscris UNE valeur dans le champ Booqable « Source lead », UN tag de commande et la ligne de note (voir section 7). Règle observable en 3 étapes :

1. La source = l'UTM capté par les champs cachés du formulaire lors de la PREMIÈRE demande (voir section 7) : utm_campaign = lettres_froid → Source « Meta », tag ADS-META; lettres_retarg → Source « Retargeting », tag ADS-META, CAMP=lettres_retarg; utm_source = google (recherche_lettres, recherche_jeux, recherche_mobilier) → Source « Google », tag ADS-GOOGLE. Le groupe « Marque Évenox » compte comme Google : sa dépense est dans les 500 $ Google, son CA aussi; comme utm_term contient alors « evenox », tu ajoutes « | MARQUE=oui » à la ligne de note pour pouvoir l'isoler dans le Sheet. Si tu veux un jour sortir la marque du ROAS, tu sors ses leads ET sa dépense, jamais l'un sans l'autre.
2. Si l'UTM est vide (visite directe, DM, appel; les champs cachés lisent l'URL, donc un refus de la bannière ne les vide pas), la source = la réponse du client à la question posée à la qualification (courriel Cas B ou téléphone, section 8) « Comment nous avez-vous trouvés? » : Facebook/Instagram → Meta; Google → Organique, sauf appel visible dans Google Ads > Rapports > Détails des appels → Google; Référence → Référence; flou → Organique.
3. Si le client mentionne spontanément la pub Facebook/Instagram alors que l'UTM dit Google → Meta (première source déclarée). C'est la seule exception.

Le total ADS-META (froid + retargeting) et ADS-GOOGLE dans Booqable doit égaler le total du Sheet chaque lundi; toute différence se corrige dans Booqable, pas dans le Sheet.

### 7. Perte de données Loi 25

La bannière de consentement bloque le Pixel Meta et la balise Google tant que le visiteur n'accepte pas (Loi 25, art. 8.1). Ordre de grandeur, à valider en comparant leads plateforme vs leads Booqable après 2 semaines : 20–40 % des conversions seront invisibles dans les plateformes. L'écart sera plus grand côté Meta (aucune modélisation à l'opt-out) que côté Google (le Consent Mode v2 via Complianz modélise une partie des refus; voir section 7). Conséquence : les CPL affichés par Meta et Google seront surestimés de 25–65 % (hypothèse). Règle : le CPL réel = dépense ÷ leads Booqable avec la source correspondante; tu ne coupes jamais une campagne sur les chiffres plateforme seuls, et toute pause automatique se vérifie le jour même sur le CPL Booqable (voir règle transversale et risque 8). Les plateformes gardent assez de signal pour optimiser; c'est le Sheet qui décide.

Seuils : entre 60 et 80 % de leads plateforme vs Booqable = normal, aucune action. Sous 50 % sur 14 jours, OU 0 lead plateforme sur 7 jours alors que Booqable en compte ≥ 3 → tracking cassé jusqu'à preuve du contraire : le jour même, tu vérifies que /merci déclenche l'événement après acceptation de la bannière (Meta : Gestionnaire d'événements > Tester les événements; Google : Objectifs > Conversions > statut « Enregistre des conversions » + Tag Assistant), que l'API Conversions Meta est activée et que le Consent Mode v2 est actif (section 7). Au-dessus de 100 % → spam de formulaire ou double déclenchement de l'événement Lead sur /merci.

### 8. Phase d'apprentissage et changements trop fréquents

À 26 $/jour sur le froid (et 5 $/jour en retargeting), l'ensemble ne peut pas atteindre les ≈ 50 événements Lead par 7 jours que Meta demande pour sortir de l'apprentissage (il faudrait ≈ 285 $/jour à CPL 40 $, hypothèse) : le statut « Apprentissage limité » restera affiché pendant tout le test. C'est normal; tu ne changes rien pour ça et tu lis le CPL Booqable sur 7 jours glissants. Le vrai risque, c'est toi : chaque modification importante (budget > 20 %, ciblage, créas en bloc) relance l'apprentissage et gonfle le CPL pendant 3–7 jours (hypothèse).

Règle : une seule modification par ensemble de pubs (Meta) ou par campagne (Google), le lundi, notée dans le Sheet avec la date; paliers de budget de +20 % maximum. Vérification : Gestionnaire de publicités > Historique des modifications (icône horloge); Google Ads > Historique des modifications. Exception : les règles automatiques de pause H3 (section 4) : Meta = Coût par prospect > 80 $ ET Dépense > 150 $ (à vie), exécution en continu; Google = Coût/conv. > 80 $ ET Coût > 150 $ sur 30 jours, quotidien à 7 h. À réception du courriel de pause, le jour même : tu recalcules le CPL réel = dépense de l'ensemble ou du mot-clé ÷ leads Booqable de cette source (champ « Source lead » + CREA/CAMP dans la note). Si le CPL réel est aussi > 80 $ → la pause reste. Si le CPL réel est < 60 $ → tu réactives (Meta : Gestionnaire de publicités > Ensembles de publicités > interrupteur; Google : Mots clés ou Groupes d'annonces > cocher > Modifier > Activer), tu relèves le seuil de la règle selon la calibration Loi 25 (section 4.3) et tu notes l'alerte dans le Sheet.

### 9. Dépendance à une seule créa

Meta concentre souvent 60–80 % du budget sur la pub gagnante d'un ensemble (ordre de grandeur, hypothèse à lire dans la colonne Montant dépensé après 14 jours); c'est normal et souhaitable. Le risque, c'est l'absence de remplaçante testée le jour où elle sature. Signal : après 14 jours, moins de 2 pubs affichent à la fois ≥ 10 % de la dépense ET un CPL plateforme ≤ 60 $ (colonnes Montant dépensé et Coût par résultat). Action : activer les 2 créas de réserve (L-noel, L-paris) sur un angle différent de la pub dominante, le lundi suivant, comme unique modification de la semaine (ajouter une pub relance l'apprentissage), sans toucher au budget. Garde-fous permanents : 5 pubs actives au lancement (L-anniv-40, L-corpo-merci, L-mariage-love, L-prenom, L-chiffres-2027, section 4) et 4 minimum ensuite, 2 créas de réserve prêtes en tout temps, 2 nouvelles créas toutes les 2 semaines à partir de la semaine 3 (brief section 5).

### 10. Cash-flow

Tu paies la pub dans les jours qui suivent la dépense (Meta prélève par seuils croissants, en général 25 → 50 → 250 → 500 $, puis au 1er du mois; Google prélève à 30 jours ou au seuil atteint; ordre de grandeur, à vérifier dans Facturation des deux comptes), alors que tu encaisses seulement 20 % du devis au dépôt (H2), le solde à l'événement, parfois 4–8 semaines plus tard (hypothèse). Sur 8 semaines (H7) : 3 000 $ dépensés contre ≈ 21 dépôts × 110 $ ≈ 2 300 $ encaissés. Le test est donc négatif en trésorerie pendant sa durée, par conception, et la première charge importante tombe autour du 5–10 octobre (hypothèse). Ce dépôt de 20 % est un acompte encaissé par lien de paiement partiel Booqable, PAS le « dépôt de garantie » de Paramètres > Tarification > Dépôts (voir section 8).

Garde-fous : (a) Meta : Gestionnaire de publicités > Facturation et paiements > Paramètres de paiement > Limite de dépenses du compte = 1 300 $ (valeur de la section 4). Ce plafond est CUMULATIF (à vie), pas mensuel : 1 300 $ couvre octobre à 950 $/mois (800 froid + 150 retargeting), même avec les deux paliers permis par EVX-SCALE-20; quand il est atteint, toutes les pubs s'arrêtent, alors tu cliques « Réinitialiser le montant dépensé » le dimanche 1er novembre (rappel Google Agenda) et tu vérifies le cumul consommé chaque lundi dans le Sheet. Variante 1 200 $ : 1 000 $; variante 800 $ : 700 $. (b) Google : en paiement automatique, il n'existe pas de plafond mensuel de compte (nuance vs certaines lectures : la « limite de dépenses du compte » n'existe qu'en facturation mensuelle sur facture). Ton plafond réel = budget quotidien × 30,4 : 16,50 $/jour ≈ 502 $/mois. Tu ne montes jamais le budget quotidien de EVX_GOOGLE_RECH_LOCATION au-delà de la variante choisie (16,50 / 13,15 / 9,90 $). (c) Aucun palier +20 % tant que les dépôts cumulés ne couvrent pas 50 % du spend cumulé; cette condition équivaut à un ROAS réservé ≈ 2,5× et est donc déjà englobée par la règle H8 (montée seulement si ROAS ≥ 4×), mais elle reste ton garde-fou de trésorerie explicite. (d) Réserve de trésorerie de 3 000 $ mise de côté avant la semaine 0.

### 11. Compte publicitaire désactivé

Un compte désactivé en semaine 3 tue le test. Avant la semaine 0 : (a) 2FA sur le compte Facebook personnel d'Alexandre (Paramètres > Sécurité et connexion > Authentification à deux facteurs) et sur le compte Google evenox.ca@gmail.com, qui est aussi le compte Gmail (myaccount.google.com > Sécurité > Validation en deux étapes); (b) un admin secondaire (personne de confiance, 2FA obligatoire) : Meta Business Suite (business.facebook.com) > Paramètres > Utilisateurs > Personnes > Ajouter des personnes > Accès complet au Portefeuille d'entreprise (ex-Business Manager), puis lui attribuer le compte publicitaire, la Page Facebook et le dataset (pixel); Google Ads > Admin > Accès et sécurité > + > courriel Google de la personne > rôle Administrateur; (c) une carte de crédit de secours enregistrée dans les deux comptes (Meta : Paramètres de paiement > Ajouter un moyen de paiement; Google : Facturation > Moyens de paiement); (d) pubs conformes aux vraies règles à risque pour Évenox : pas de prix ni de « rabais » sans devis dans la pub, pas de mention « Facebook » ou « Instagram » dans les visuels, pas de texte trompeur sur la disponibilité (« dernières dates » seulement si c'est vrai), version française toujours présente et au moins équivalente (Loi 96).

Si une pub est refusée, tu la corriges plutôt que de contester; refusée 2 fois de suite, tu la retires. Si le compte est restreint, tu demandes un examen le jour même : Meta > Qualité du compte (business.facebook.com/accountquality) > Demander un examen; Google Ads > Outils > Dépannage > Gestionnaire de règles > Contester la décision.

### 12. Avis négatifs

Réponse publique en < 24 h, courte, factuelle, qui propose une résolution en privé; aucun débat public; en français si l'avis est en français (Loi 96). Sur la Fiche d'établissement Google : Avis > Répondre. Sous une pub : Meta Business Suite > Boîte de réception > Commentaires > Répondre; tu masques (jamais supprimer) seulement si le commentaire est injurieux; active aussi Page > Paramètres > Modération des commentaires (mots-clés masqués). Pour diluer le poids d'un avis isolé, tu demandes un avis à chaque client satisfait dans le courriel post-événement envoyé J+1 : Fiche d'établissement Google > Demander des avis > copier le lien court. Ce courriel identifie l'expéditeur (Évenox, 215 boul. René-A.-Robert, Sainte-Thérèse) et offre un désabonnement en une ligne (LCAP), même si la relation d'affaires en cours donne déjà le consentement tacite.

### 13. Livraison en retard / matériel défectueux

Une lettre éteinte le soir d'un 40e = avis négatif garanti. Checklist avant départ, cochée physiquement sur le bon de préparation Booqable : chaque lettre allumée et testée; ampoules de rechange; 2 rallonges et 1 barre multiprise; ruban adhésif; adresse et heure confirmées la veille par texto; photo du montage envoyée au client à la fin de l'installation. Départ 45 min avant l'heure calculée par Google Maps. Texto de confirmation de la veille, à copier-coller :

```
Bonjour [Prénom], c'est Alexandre d'Évenox. Je confirme l'installation demain à
[heure] au [adresse]. Personne à joindre sur place : [nom + cellulaire]. Merci de
prévoir une prise électrique à moins de 10 m de l'emplacement des lettres.
À demain!
```

Retard prévu > 30 min = appel proactif au client avant l'heure convenue, avec la nouvelle heure. Tout défaut constaté sur place = geste commercial décidé par toi le jour même (jamais un montant promis par courriel avant validation dans Booqable).

### 14. Google : enchères et budget

Séquence verrouillée pour le test : « Maximiser les clics » avec plafond de CPC max (valeur en section 4) tant que la campagne compte < 15 conversions sur 30 jours; « Maximiser les conversions » à 15; « CPA cible » seulement à 30 conversions/30 jours stables (cible fixée 10–20 % au-dessus du CPA réel); jamais de Performance Max pendant le test (Google Ads > Campagnes > Paramètres > Enchères). Si la campagne affiche « Limitée par le budget », tu ne montes pas le budget : tu mets en veille le groupe d'annonces au coût par conversion Booqable le plus élevé (souvent « Tables-chaises-vaisselle » ou « Lettres EN »), le lundi, comme unique modification de la semaine.

## 10. Livrables semaine 1 pour Alexandre

Semaine 0 = du lundi 21 au dimanche 27 septembre 2026. Objectif unique : le dimanche soir, tout est prêt, testé et légal pour que le budget parte le **lundi 28 septembre à 6 h**. Budget de temps : ≈ 32 h sur la semaine (hypothèse; compte ≈ 40 h si tu découvres Divi ou Google Ads pour la première fois). Chaque ligne se termine par un « fait » que tu peux vérifier toi-même : si tu ne peux pas le vérifier, la tâche n'est pas finie.

Deux règles pour la semaine :

1. Tu ne dépenses pas 1 $ de pub avant que les 10 cases de « Fin de semaine 0 » soient cochées (critère NO-GO, voir section 3).
2. Les valeurs exactes (âges, géo, budgets, mots-clés, règles, textes) sont dans les sections 4, 5, 7 et 8. Ici, tu suis l'ordre et les menus; quand un libellé de menu diffère chez toi, tape le mot-clé dans la barre de recherche de l'outil et note « à vérifier ».

Outils retenus pour la semaine (choix faits en section 3, on ne les rediscute pas) : Divi Builder (page), Fluent Forms + FluentSMTP (formulaire et livraison des courriels), Yoast SEO (titre, méta, noindex), Complianz (bannière Loi 25 + Consent Mode v2 + politique de confidentialité), PixelYourSite (Pixel Meta + événements), Site Kit by Google (balise Google Ads), CapCut ou Canva (montage), Google Sheets (dashboard). Tout est gratuit. Ce qui changerait le choix : un plugin de formulaire payant déjà installé (Gravity Forms) ou Rank Math déjà actif à la place de Yoast → garde-les, mêmes réglages.

### Lundi 21 septembre — comptes, accès et séance photo (≈ 7 h 15)

| Heure / durée | Tâche | Outil | Résultat attendu (« fait ») |
|---|---|---|---|
| 8 h 30 · 30 min | Créer ou vérifier le Portefeuille d'entreprise Meta (Business Portfolio) au nom « Évenox » avec evenox.ca@gmail.com; rattacher la Page Facebook et le compte Instagram (le compte Instagram doit être « professionnel » : Instagram > Paramètres > Type de compte) | business.facebook.com > Paramètres du portefeuille > Comptes > Pages / Comptes Instagram | La Page et l'Instagram apparaissent tous les deux sous le portefeuille « Évenox » |
| 9 h · 30 min | Créer le compte publicitaire « EVX – Ads » (devise CAD, fuseau America/Toronto), ajouter la carte de crédit au nom de l'entreprise, puis régler la **limite de dépenses du compte à 1 300 $** (garde-fou physique, valeur section 4) | Paramètres du portefeuille > Comptes > Comptes publicitaires > Ajouter; puis Facturation et paiements > Limite de dépenses du compte | Le compte pub affiche « Actif », un moyen de paiement principal et une limite de 1 300 $ |
| 9 h 30 · 20 min | Activer la validation en deux étapes (2FA) sur ton profil Facebook personnel ET ajouter un admin secondaire (conjoint·e ou personne de confiance) au portefeuille avec accès total | Facebook > Paramètres > Sécurité et connexion; Paramètres du portefeuille > Personnes > Ajouter | Deux admins visibles; 2FA « Activée » sur ton profil |
| 9 h 50 · 10 min | Ajouter le domaine evenox.ca dans Meta et copier la balise meta de vérification dans un fichier texte (tu la colles mardi 8 h 45) | Paramètres du portefeuille > Sécurité de la marque > Domaines > Ajouter > « Vérification par balise meta » | Domaine listé « Non vérifié » (normal jusqu'à mardi); balise copiée dans Drive > Captures > `meta-verification.txt` |
| 10 h · 40 min | Créer le compte Google Ads en **mode expert** (ne pas laisser Google créer une campagne « intelligente »), devise CAD, fuseau Toronto, moyen de paiement; activer le **taggage automatique** (sans lui, aucune conversion n'est attribuée aux clics, section 7) | ads.google.com > Nouveau compte > « Passer en mode expert » > « Créer un compte sans campagne » > Facturation; puis Admin (roue dentée) > Paramètres du compte > Taggage automatique = Activé | Tableau de bord vide, aucune campagne, facturation « Active », taggage automatique « Oui » |
| 10 h 40 · 20 min | Ajouter un 2e utilisateur admin Google Ads (même personne que Meta) + activer la validation en deux étapes sur evenox.ca@gmail.com | Google Ads > Admin > Accès et sécurité > + ; myaccount.google.com > Sécurité > Validation en deux étapes | Deux admins; 2FA active sur le Gmail |
| 11 h · 45 min | Vérifier (ou revendiquer) la fiche Google « Évenox » : catégorie principale « Service de location de matériel pour fêtes » (libellé anglais : Party Equipment Rental Service; choisis le libellé exact que Google propose dans le menu), fiche hybride : « Afficher l'adresse aux clients » = Oui (le ramassage au 215 boul. René-A.-Robert est offert, section 3) + les 16 zones de service de H12 (Sainte-Thérèse, Blainville, Boisbriand, Rosemère, Lorraine, Bois-des-Filion, Sainte-Anne-des-Plaines, Mirabel, Saint-Eustache, Deux-Montagnes, Saint-Jérôme, Terrebonne, Mascouche, Laval, Montréal, Repentigny), heures, 514-559-1893, lien evenox.ca, 10 photos de lettres allumées | business.google.com > Modifier le profil > Infos / Établissement / Zones de service | Fiche « Vérifiée »; si Google exige une carte postale ou une vidéo, lancer la vérification aujourd'hui (délai 5–7 jours, hypothèse; ne bloque pas le lancement). Ce qui changerait le choix : aucun ramassage offert au 215 → « Afficher l'adresse » = Non (entreprise de service à domicile) |
| 13 h · 30 min | Créer dans Booqable le champ client « Source lead » (liste déroulante : Meta, Google, Retargeting, Organique, Référence, Récurrent, Autre; « Afficher sur devis/factures » = Non) et les tags de commande « ADS-META » et « ADS-GOOGLE » | Booqable > Paramètres > Champs personnalisés > Clients > Ajouter (type : liste déroulante); Commandes > ouvrir une commande > Tags | Un client test « TEST LEAD » avec Source lead = Meta et une commande test taguée ADS-META (convention section 7); capture dans Drive |
| 13 h 30 · 30 min | Créer le dossier Google Drive « EVX – Ads 2026 » (sous-dossiers : EVX_Créas_S0, Copy, Captures, Factures, EVX_Preuves) et le Google Sheet **« EVX – Suivi ads »** dans ce dossier avec 5 onglets vides : Leads, Hebdo, Liens UTM, Google copy, Liens; Fichier > Paramètres > Paramètres régionaux = **Canada (français)** (sinon les formules de la section 7 renvoient #NOM?) | Google Drive; Google Sheets | Sheet ouvert, 5 onglets nommés, paramètres régionaux « Canada (français) », lien du Drive collé dans l'onglet Liens |
| 18 h 30 · 30 min | Monter les mots dans l'entrepôt, dans cet ordre : « 40 » (feed et Reel L-anniv-40), « LOVE » (L-mariage-love), un prénom de 4 lettres disponible en stock, par défaut « EMMA » (L-prenom), « MERCI » (L-corpo-merci), « 2027 » (L-chiffres-2027), « NOËL » (L-noel, pour la semaine 5). Ce qui changerait l'ordre : l'inventaire réel de lettres et de chiffres (question bloquante H9). Relire le brief photo/vidéo de la section 5.4, imprimer la liste de plans, cellulaire chargé à 100 %, porte de garage fermée et néons éteints (en soirée, la lumière est contrôlée) | Section 5.4, liste de plans | Mots montés, liste de plans imprimée, espace de 3 m dégagé devant les lettres |
| 19 h · 2 h 30 | Tourner tous les plans du brief : Reel A « allumage » en 2 versions (« 40 » et « 2027 »), plan large, détail ampoule, montage/démontage accéléré, photo de face de chacun des 6 mots + 1 photo de jeux géants; cellulaire en 4K 30 ips, mode vertical, HDR désactivé, sans zoom numérique, 3 secondes de silence au début de chaque clip | Cellulaire; nommage des fichiers bruts selon la section 5.4 | Au moins 40 clips de 5–15 s et 25 photos dans Drive > EVX_Créas_S0 > Brut |

### Mardi 22 septembre — page, formulaire, /merci, consentement, politique (≈ 7 h)

Prérequis (5 minutes) : confirmer que le site est bien WordPress + Divi (Tableau de bord WordPress > Divi > Options du thème). Si ce n'est pas le cas, arrête et note-le dans les questions bloquantes : mardi et mercredi se replanifient avec l'outil réel du site (choix par défaut de la section 3 : même page et même formulaire dans l'outil existant, redirection vers /merci).

| Heure / durée | Tâche | Outil | Résultat attendu (« fait ») |
|---|---|---|---|
| 8 h 30 · 15 min | Mettre à jour WordPress, Divi et les plugins; faire une sauvegarde complète avant de toucher au site | WordPress > Mises à jour; plugin de sauvegarde existant ou outil de l'hébergeur | Sauvegarde datée du 22 septembre téléchargeable |
| 8 h 45 · 5 min | Coller la balise meta de vérification copiée lundi, puis lancer la vérification du domaine | Divi > Options du thème > Intégrations > « Ajouter du code au <head> » > Enregistrer; Meta > Sécurité de la marque > Domaines > evenox.ca > Vérifier | Domaine evenox.ca « Vérifié » |
| 8 h 50 · 30 min | Installer 4 extensions : Fluent Forms, FluentSMTP, Yoast SEO, Complianz; configurer FluentSMTP (hôte smtp.gmail.com, port 465, SSL, utilisateur evenox.ca@gmail.com, mot de passe d'application Google; réglages exacts section 3) | WordPress > Extensions > Ajouter > Installer > Activer; FluentSMTP > Connexion « Autre SMTP » > Tester | Courriel de test FluentSMTP reçu dans Gmail (pas dans les pourriels) |
| 9 h 20 · 2 h 30 | Construire la page **evenox.ca/lettres-illuminees** avec le Divi Builder, section par section selon le wireframe (voir section 6); slug exact `lettres-illuminees`; Yoast : Titre SEO et méta description = textes exacts de la section 3 (Titre SEO 57 caractères, méta 146) | WordPress > Pages > Ajouter > Utiliser le Divi Builder; boîte Yoast sous l'éditeur | Page publiée, accessible en navigation privée; aperçu Google dans Yoast au vert; aucun prix affiché (« soumission en 24 h » seulement) |
| 13 h · 45 min | Créer le formulaire « Lettres – Soumission » dans Fluent Forms : les 18 champs de la section 3 (dont date de l'événement, mot, ville, téléphone, consentement, Turnstile) et les 5 champs cachés `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term` avec valeur par défaut `{get.utm_source}`, etc.; Réglages > Confirmation = « Rediriger vers une page » > `/merci`; Notification : destinataire evenox.ca@gmail.com, objet exact `LEAD LETTRES – {inputs.date_evenement} – {inputs.ville} – {inputs.utm_source}`, corps `{all_data}`; insérer le formulaire dans la page via le module Divi « Code » avec le shortcode Fluent Forms, à l'ancre `#soumission` | Fluent Forms > Nouveau formulaire > Formulaire vierge; Divi Builder > module Code | Envoi test reçu dans Gmail en moins de 2 minutes, objet commençant par « LEAD LETTRES », tous les champs visibles dans le corps (les UTM sont vides pour cet envoi : normal) |
| 13 h 45 · 20 min | Créer la page **evenox.ca/merci** (contenu section 6.11 : « Merci! Soumission en 24 h », 514-559-1893, bouton vers les jeux géants); Yoast > Avancé > « Autoriser les moteurs de recherche à afficher cette page » = Non; jamais dans un menu, aucun lien interne vers elle | WordPress > Pages > Ajouter; boîte Yoast > Avancé | /merci publiée en noindex, hors menu et hors plan de site; le formulaire y redirige. Limite acceptée : une visite directe de /merci compte comme Lead dans Meta et Google (rare); la vérité des leads reste Booqable (section 7) |
| 14 h 05 · 1 h | Configurer Complianz : Assistant > Région = **Canada** (règles Loi 25 : opt-in), bannière en français, boutons « Accepter » et « Refuser » de même taille sur le premier écran, « Bloquer les scripts avant consentement » = Oui; Intégrations > **Google Consent Mode = Activé** (v2); Intégrations > Plugins : tu cocheras PixelYourSite et Google Site Kit mercredi, une fois installés | WordPress > Complianz > Assistant; Complianz > Intégrations | Bannière visible à la première visite en navigation privée, en français, deux boutons de même taille; capture dans Drive |
| 15 h 05 · 30 min | Générer la page **evenox.ca/politique-de-confidentialite** (Complianz > Documents > Politique de confidentialité, en français) et y ajouter le paragraphe : « Responsable de la protection des renseignements personnels : Alexandre Séguin, propriétaire, evenox.ca@gmail.com, 514-559-1893 »; mentionner les témoins utilisés (Meta Pixel, Google Ads) et les données du formulaire; lier la page dans le pied de page Divi, dans la bannière et sous le formulaire | Complianz > Documents; Divi > Constructeur de thème > Pied de page | La page s'ouvre en français depuis la bannière, le pied de page et le formulaire; le responsable est nommé (obligation Loi 25) |
| 15 h 35 · 30 min | Test de vitesse mobile de /lettres-illuminees : cible score Performance ≥ 70 et LCP ≤ 2,5 s (cible souple, section 3). Si c'est raté : compresser les images (Imagify) et activer le cache (WP Rocket ou l'outil de cache de l'hébergeur), réglages section 3.7 | pagespeed.web.dev > Mobile | Capture PageSpeed datée dans Drive > Captures; si score < 70 après optimisation, on lance quand même et on corrige la semaine 1 (pas un critère NO-GO) |
| 16 h 05 · 30 min | Relire la page sur cellulaire ET ordinateur : fautes, boutons cliquables, formulaire trouvable, aucun prix; faire lire la page à une personne qui ne connaît pas Évenox | Ton cellulaire + une personne extérieure | La personne trouve le formulaire en moins de 10 secondes et résume l'offre en une phrase |

### Mercredi 23 septembre — tracking et test de bout en bout (≈ 3 h 45)

La technique détaillée (noms d'événements, réglages complets, définition du ROAS) est en section 7; ici tu exécutes dans l'ordre. Le test se fait sur ton ordinateur dans Chrome : les extensions « Meta Pixel Helper » et « Tag Assistant » n'existent pas sur cellulaire.

| Heure / durée | Tâche | Outil | Résultat attendu (« fait ») |
|---|---|---|---|
| 8 h 30 · 30 min | Créer le jeu de données « Évenox – Site » dans le Gestionnaire d'événements et copier son ID; installer **PixelYourSite** et coller l'ID; dans Complianz, cocher l'intégration PixelYourSite (catégorie marketing) | Meta > Gestionnaire d'événements > Connecter des sources de données > Web > Évenox – Site; WordPress > Extensions > Ajouter > PixelYourSite > Meta > Pixel ID > Enregistrer; Complianz > Intégrations > Plugins | Extension Chrome « Meta Pixel Helper » : PageView en vert sur la page d'accueil **seulement après** avoir cliqué « Accepter » (rien avant) |
| 9 h · 20 min | Créer les 2 événements dans PixelYourSite : « ViewContent » sur URL contient `/lettres-illuminees`; « Lead » sur URL contient `/merci` (pas sur le clic du bouton) | PixelYourSite > Events > Add New Event > Trigger « Page visit » > onglet Meta > événement standard | Gestionnaire d'événements > Tester les événements : ViewContent en ouvrant la page lettres, Lead en ouvrant /merci |
| 9 h 20 · 10 min | Activer l'**API Conversions Meta** (bouton sans développeur, offert depuis avril 2026; Meta gère la déduplication) | Gestionnaire d'événements > Évenox – Site > Paramètres > API Conversions > « Activer l'API Conversions » > Terminer | Dans « Tester les événements », le Lead affiche « Navigateur » et « Serveur » (dédupliqué). Si le bouton n'existe pas dans ton compte : chemin de repli en section 7 |
| 9 h 30 · 45 min | Installer **Site Kit by Google**, connecter le compte Google puis Google Ads (Site Kit pose la balise « AW-… » sur tout le site); cocher l'intégration Site Kit dans Complianz; dans Google Ads, créer l'action **« Lead formulaire »** à partir de l'URL : Consultation de page > « L'URL contient » `evenox.ca/merci` > catégorie « Envoyer un formulaire pour un prospect » > objectif **principal**; puis Paramètres de l'action : comptage **Une**, valeur : ne pas utiliser (section 7), fenêtre de conversion après clic **30 jours** (cohérent H10) | WordPress > Extensions > Site Kit > Configuration > Google Ads; Google Ads > Objectifs > Conversions > + Nouvelle action > Site web > evenox.ca > « Créer des actions de conversion à partir d'URL »; Complianz > Intégrations > Plugins | Google Ads liste « Lead formulaire » en action principale, statut « Aucune conversion récente » (normal aujourd'hui); Tag Assistant (tagassistant.google.com > Ajouter un domaine evenox.ca) voit la balise AW-… |
| 10 h 15 · 15 min | Créer l'action de conversion « Appel depuis annonce » (appels depuis les assets d'appel, objectif secondaire, durée minimale 30 s, section 7) | Google Ads > Objectifs > Conversions > + Nouvelle action > Appels téléphoniques | Action « Appel depuis annonce » listée en secondaire |
| 10 h 30 · 30 min | Remplir l'onglet « Liens UTM » du Sheet avec 8 lignes prêtes à coller : (1) paramètres d'URL Meta froid : `utm_source=meta&utm_medium=paid_social&utm_campaign=lettres_froid&utm_content={{ad.name}}` (Meta remplace `{{ad.name}}` par le nom exact de la pub : une seule chaîne pour toutes les pubs); (2) Meta retargeting : idem avec `utm_campaign=lettres_retarg`; (3 à 7) les 5 suffixes d'URL finale Google, un par groupe d'annonces (`utm_source=google&utm_medium=cpc&utm_campaign=recherche_lettres&utm_content=lettres&utm_term={keyword}`, puis chiffres / marque avec recherche_lettres, jeux avec recherche_jeux, mobilier avec recherche_mobilier, textes exacts section 4); (8) l'URL de test : `https://evenox.ca/lettres-illuminees?utm_source=meta&utm_medium=paid_social&utm_campaign=lettres_froid&utm_content=test&utm_term=test` | Google Sheet > onglet Liens UTM | 8 lignes; l'URL de test ouvre /lettres-illuminees avec les paramètres visibles dans la barre d'adresse |
| 11 h · 45 min | **Test A (Accepter), lead fictif** : ouvrir l'URL de test (ligne 8) dans Chrome en navigation privée > cliquer « Accepter » AVANT de remplir > remplir le formulaire au nom « TEST LEAD » > arriver sur /merci. Puis créer le client dans Booqable : Clients > Nouveau client > « TEST LEAD » > Source lead = Meta (valeur lue dans le courriel : `utm_source=meta`) > Notes > coller `SRC=meta \| CAMP=lettres_froid \| CREA=test \| LEAD=2026-09-23` | Chrome + Pixel Helper + Tag Assistant + Gestionnaire d'événements (Tester les événements) + Gmail + Booqable | Les 5 preuves, capturées dans Drive > Captures : (1) Lead visible dans Meta > Tester les événements; (2) courriel « LEAD LETTRES » reçu avec `utm_source=meta` et `utm_content=test` dans le corps; (3) Tag Assistant sur /merci montre la balise AW-… et la conversion « Lead formulaire » (la colonne Conversions de Google Ads reste à 0 : sans clic sur une annonce, c'est normal); (4) client TEST LEAD dans Booqable avec Source lead = Meta et la note SRC/CAMP/CREA/LEAD; (5) capture de chaque étape |
| 13 h · 15 min | **Test B (Refuser)** : même URL, navigation privée, clic « Refuser » > formulaire rempli > /merci. C'est ce test qui prouve que le courriel (et donc Booqable) est la vérité, Loi 25 oblige | Chrome en navigation privée | Courriel reçu avec les UTM; Pixel Helper vide; Tag Assistant montre les pings de consentement « denied » sans témoin (normal avec Consent Mode v2); aucun Lead dans « Tester les événements » |
| 13 h 15 · 15 min | Nettoyer : supprimer les entrées test (Fluent Forms > Entrées), le client TEST LEAD dans Booqable (ça retire aussi sa commande test de lundi — garde les captures), archiver les courriels test sous le libellé Gmail « Tests-tracking » | Fluent Forms; Booqable; Gmail | Zéro lead test dans Booqable et dans Gmail (boîte principale); captures conservées dans Drive |

### Jeudi 24 septembre — montage des créas et annonces Google (≈ 4 h)

| Heure / durée | Tâche | Outil | Résultat attendu (« fait ») |
|---|---|---|---|
| 8 h 30 · 1 h 30 | Monter les **3 créas minimum** : 1 image feed 4:5 `L-anniv-40_4x5.png` (1080×1350 px), 1 Reel 9:16 `L-anniv-40_reel.mp4` (script A de la section 5, 6–8 s, sous-titres français incrustés, logo à la fin, 1080×1920 px), 1 story 9:16 `L-mariage-love_9x16.png` (1080×1920 px, zones sûres : rien d'important dans les 270 px du haut, les 670 px du bas ni les 65 px de chaque côté) | CapCut ou Canva (gratuit) | 3 fichiers exportés (PNG ≤ 30 Mo; MP4 H.264 ≤ 4 Go) dans Drive > EVX_Créas_S0, noms exacts, chaque 9:16 vérifié avec le calque « zones sûres » de la section 3 |
| 10 h · 1 h 30 | Monter les 4 autres pubs du lancement (section 4 : 5 pubs actives le 28 septembre) : `L-mariage-love_4x5.png`, `L-prenom_4x5.png` + `L-prenom_9x16.png`, `L-corpo-merci_4x5.png` + `L-corpo-merci_9x16.png`, `L-chiffres-2027_4x5.png` + `L-chiffres-2027_9x16.png`; puis les images Google (4 en 1:1 1200×1200 px, 4 en 1,91:1 1200×628 px) et le logo. Si le temps manque : lancer avec le minimum de 3 pubs et finir le reste le mardi 29 septembre (pas de nouvelle pub avant le lundi de changement du 12 octobre, section 4) | CapCut / Canva | Objectif 5 pubs complètes (4:5 + 9:16), minimum 3; toute créa contient au moins une ligne de texte en français (Loi 96) |
| 13 h · 1 h | Copier dans l'onglet « Google copy » les RSA de la section 5 (1 par groupe d'annonces : 10 titres ≤ 30 caractères et 4 descriptions ≤ 90; une RSA accepte au maximum 4 descriptions et 15 titres), les 25–40 mots-clés en expression et la liste de négatifs EVX-NEG-BASE de la section 4; ajouter une colonne `=NBCAR()` à côté de chaque titre et description | Google Sheet > onglet Google copy | Zéro titre > 30 caractères, zéro description > 90, aucun prix dans les textes; 5 blocs RSA prêts à saisir |

### Vendredi 25 septembre — campagnes publiées mais désactivées, règles, dashboard (≈ 6 h 25)

Tout se **publie** aujourd'hui (pas « brouillon ») avec l'interrupteur de campagne sur Désactivé : les pubs Meta et les annonces Google entrent en révision dès la publication, ce qui laisse la fin de semaine pour l'approbation. Les valeurs exactes sont en section 4; ici tu les saisis dans l'ordre.

| Heure / durée | Tâche | Outil | Résultat attendu (« fait ») |
|---|---|---|---|
| 8 h 30 · 30 min | Créer les 4 audiences personnalisées Meta (noms exacts section 4) : « Site web – tous les visiteurs 30 j », « Site web – visiteurs /merci 180 j », « Compte Instagram – toutes les personnes ayant interagi 90 j », « Page Facebook – toutes les personnes ayant interagi 90 j » | Meta Business Suite > Tous les outils > Audiences > Créer une audience > Audience personnalisée | 4 audiences listées (elles affichent « Trop petite » ou « En cours » au début : normal, elles se remplissent pendant que le froid tourne) |
| 9 h · 1 h 30 | Créer la campagne **« EVX_META_LETTRES_LEADS »** : objectif Prospects, budget de campagne Advantage+ (CBO) désactivé; ensemble **« FROID_RiveNord-Laval_25-55 »** : lieu de conversion Site web, jeu de données Évenox – Site, événement Lead; lieu = rayon 35 km autour de « 215 boul. René-A.-Robert, Sainte-Thérèse » (« Personnes qui vivent dans cet endroit ») + Exclure les 13 villes de la Rive-Sud et de l'Ouest-de-l'Île listées en section 4.1 (Longueuil, Saint-Lambert, Brossard, Boucherville, Saint-Bruno-de-Montarville, La Prairie, Candiac, Pointe-Claire, Dollard-des-Ormeaux, Kirkland, Beaconsfield, Sainte-Anne-de-Bellevue, Dorval); Audience Advantage+ **activée**, âge minimum 25 (le 55 du nom est une suggestion que Meta peut dépasser : accepté, contrôle le 12 octobre, section 4); champ Langues vide; exclusion = « Site web – visiteurs /merci 180 j »; placements Advantage+; budget quotidien 26 $; **date de début = 28 septembre 2026, 6 h 00** (heure de Montréal); 5 pubs (L-anniv-40, L-corpo-merci, L-mariage-love, L-prenom, L-chiffres-2027; textes section 5; 4:5 + 9:16 par pub; minimum 3 si le montage n'est pas fini); dans chaque pub : « Améliorations Advantage+ » tout décocher (Loi 96 : Meta ne réécrit pas ton texte), URL du site = `https://evenox.ca/lettres-illuminees`, champ « Paramètres d'URL » = ligne 1 de l'onglet Liens UTM. Publier, puis mettre l'interrupteur de campagne sur Désactivé | Meta Ads Manager > Créer | Campagne publiée, interrupteur gris, aucune erreur rouge; ensemble « Programmé » pour le 28 sept. 6 h; pubs « En révision »; aperçu des 5 pubs validé sur cellulaire (texte en français, pas de prix) |
| 10 h 30 · 30 min | Créer la campagne **« EVX_META_RETARGETING »** (CBO désactivé) avec l'ensemble **« RETARG_Site30j_IG-FB90j »** : audiences incluses Site 30 j + Instagram 90 j + Page Facebook 90 j, exclusion « visiteurs /merci 180 j », Audience Advantage+ désactivée, budget 5 $/jour, sans date de début (elle part le lundi 5 octobre si l'audience combinée est ≥ 300 personnes, sinon le 12 octobre, section 4); 2 pubs disponibles dès maintenant : L-corpo-merci et L-prenom, « Paramètres d'URL » = ligne 2 de l'onglet Liens UTM (L-paris et J-jeux-geants s'ajoutent le lundi 12 octobre, section 4) | Meta Ads Manager > Créer | Campagne publiée et désactivée, 2 pubs « En révision »; aucune date de début |
| 11 h · 1 h 30 | Créer la campagne **« EVX_GOOGLE_RECH_LOCATION »** : objectif Prospects > type Recherche; Réseaux : **décocher** « Partenaires du Réseau de Recherche » ET « Réseau Display »; carte « AI Max pour la recherche » désactivée si elle s'affiche; Zones : rayon **60 km** autour de « 215 boul. René-A.-Robert, Sainte-Thérèse » avec option **« Présence »** (PAS « Présence ou intérêt », coché par défaut); Langue : **aucun réglage** (Google a annoncé le retrait de ce paramètre des campagnes Recherche pour l'automne 2026, à vérifier dans ton compte : sans lui, l'appariement se fait sur la langue des annonces et de la page, donc français; si le champ « Langues » s'affiche encore, mets la valeur indiquée en section 4); calendrier de diffusion 6 h–23 h; enchères « Maximiser les clics » avec CPC max 3,50 $; budget 16,50 $/jour; date de début 28 septembre, date de fin 22 novembre; Paramètres supplémentaires : « Mots clés en requête large » désactivé, « Annonces créées automatiquement » et « Assets automatiques » désactivés; 5 groupes d'annonces (Lettres lumineuses, Chiffres lumineux, Marque Évenox actifs; Jeux géants et Tables-chaises-vaisselle créés puis mis en veille jusqu'au 12 octobre; groupe « Lettres EN » : pas créé pendant le test, section 4), mots-clés en expression depuis l'onglet Google copy, 1 RSA par groupe, URL finale = page nue (sans paramètres) et suffixe d'URL finale du groupe = lignes 3 à 7 de l'onglet Liens UTM; liste de négatifs partagée « EVX-NEG-BASE » créée dans Outils > Bibliothèque partagée > Listes de mots clés à exclure et associée à la campagne | Google Ads > + Nouvelle campagne > Prospects > Recherche | Campagne « En attente » (début le 28), 5 groupes (2 en veille), chaque RSA « Efficacité : Bonne » ou mieux (« Moyenne » acceptée au lancement si 10 titres saisis), liste EVX-NEG-BASE associée, suffixes testés (« URL valide ») |
| 12 h 30 · 30 min | Ajouter les assets de la campagne (textes exacts et longueurs en sections 4 et 5.2) : 4 liens annexes (vers des pages distinctes du site, jamais vers /lettres-illuminees), 6 accroches ≤ 25 caractères, asset d'appel 514-559-1893 avec « Rapports d'appels » = Activé, asset de lieu lié à la fiche Google (accepter la demande envoyée à evenox.ca@gmail.com; synchronisation 24–48 h), images 1:1 et 1,91:1 (un compte neuf peut ne pas y être admissible : pas bloquant, réessayer le 12 octobre), nom et logo d'entreprise | Google Ads > Campagne > Assets > + ; Outils > Data Manager > Fiche d'établissement Google > Lier | Liens annexes, accroches, appel et lieu affichent « Approuvé » ou « En cours d'examen » dans l'onglet Assets |
| 13 h 30 · 45 min | Créer les règles automatiques avec les noms, conditions et fréquences exacts de la section 4 : Meta — EVX-PAUSE-CPL80, EVX-PAUSE-0LEAD-150, EVX-PAUSE-PUB80, EVX-ALERTE-CPL60, EVX-ALERTE-CPL60-RETARG, EVX-ALERTE-FREQ3, EVX-SCALE-20 (créée mais **désactivée**); Google — EVX-KW-PAUSE-100, EVX-GRP-PAUSE-CPL80, EVX-GRP-PAUSE-150-0CONV, EVX-GRP-ALERTE-CPL60, EVX-CAMP-ALERTE-CPL60, EVX-BUDGET-ALERTE; notifications à evenox.ca@gmail.com (pas de plafond de compte Google en paiement automatique : les garde-fous Google sont le budget quotidien et la date de fin, section 9). Les règles « 0 lead » existent parce qu'un CPL ne se calcule pas à zéro prospect | Meta Ads Manager > Tous les outils > Règles automatiques > Créer une règle > Règle personnalisée; Google Ads > Outils > Actions groupées > Règles > + | 13 règles visibles avec les seuils de la section 4; 12 « Activées », EVX-SCALE-20 « Désactivée » |
| 14 h 15 · 1 h | Compléter le Sheet « EVX – Suivi ads » : onglet **Leads** (colonnes, listes déroulantes validées) et onglet **Hebdo** (colonnes et formules exactes de la section 7; lignes 2 à 9 = lundis du 28 septembre au 16 novembre, A2 = 2026-09-28); ajouter côte à côte les colonnes « Leads (Booqable) » et « Leads (plateforme) » pour lire l'écart Loi 25 (attendu 20–40 %, hypothèse); noter en tête les cibles hebdo H7 : ≈ 9 leads, ≈ 7 devis, ≈ 2–3 dépôts, ≈ 1 400 $ CA HT réservé à ≈ 350 $/semaine (hypothèses) | Google Sheets | Ligne test : 350 $ ÷ 9 leads = CPL 38,89 $; 1 400 $ ÷ 350 $ = ROAS 4,0×; puis ligne test effacée |
| 15 h 15 · 10 min | Publier le premier post sur la fiche Google (photo de lettres allumées + « soumission en 24 h »), vérifiable au go/no-go de samedi (section 3) | business.google.com > Ajouter une mise à jour | Post du 25 septembre en ligne |

### Samedi 26 septembre — revue go/no-go et outils de réponse (≈ 3 h)

| Heure / durée | Tâche | Outil | Résultat attendu (« fait ») |
|---|---|---|---|
| 9 h · 45 min | Passer la checklist go/no-go de la section 3 ligne par ligne (dont le critère NO-GO 3.8 : passages A et B réussis, politique de confidentialité en ligne); vérifier en même temps le statut des pubs Meta et des annonces Google. Toute case non cochée = tâche à faire aujourd'hui, ou lancement décalé d'une semaine entière (jamais un lancement « à moitié ») | Section 3 imprimée; Meta Ads Manager; Google Ads | Checklist signée et datée, photo dans Drive > Captures; pubs Meta « Approuvée » (sinon corriger et republier aujourd'hui : une révision Meta peut prendre jusqu'à 24 h, hypothèse) |
| 9 h 45 · 1 h | Activer les Modèles Gmail et créer 7 modèles, textes copiés tels quels depuis la section 8 (vouvoiement, « soumission en 24 h », aucun prix, signature LCAP avec adresse postale et phrase de retrait) : « EVX – Accusé Cas A (info complète) », « EVX – Accusé Cas B (info manquante) », « EVX – Dépôt reçu », « EVX – Relance J+2 », « EVX – Relance J+5 », « EVX – Clôture J+10 », « EVX – Avis » (lien « Laisser un avis » de la fiche Google, section 3) | Gmail > Paramètres > Voir tous les paramètres > Avancé > Modèles : Activer > Enregistrer; Nouveau message > ⋮ > Modèles > Enregistrer le brouillon comme modèle | Les 7 modèles apparaissent dans le menu Modèles d'un nouveau message; chaque modèle contient la signature LCAP |
| 10 h 45 · 20 min | Enregistrer le message de boîte vocale (script ci-dessous), sauvegarder le texto d'accusé de la section 8 dans les notes du cellulaire, et créer l'alerte texto : 3e notification Fluent Forms vers l'adresse courriel-vers-texto de ton fournisseur (format `5145591893@[domaine du fournisseur]`, domaines en section 8) | Cellulaire > boîte vocale; Notes; Fluent Forms > Réglages > Notifications > Ajouter | Message vocal réenregistré et réécouté; texto dans les notes; un envoi test du formulaire fait vibrer le cellulaire en moins de 2 minutes |
| 11 h 05 · 25 min | Créer 2 filtres Gmail : Filtre 1 — Objet contient « LEAD LETTRES » → appliquer le libellé **« Leads-ads »** + Toujours marquer comme important + Ne jamais envoyer dans les spams; Filtre 2 — De contient « facebookmail.com » OU « ads-account-noreply@google.com » → libellé **« Alertes-ads »**. Notification poussée : appli Gmail sur le cellulaire > Paramètres > evenox.ca@gmail.com > Notifications > Gérer les libellés > Leads-ads > Notifier pour chaque message. Tous les leads du formulaire (même organiques) tombent dans Leads-ads : la source réelle est le champ `utm_source` du courriel | Gmail > Paramètres > Filtres et adresses bloquées > Créer un filtre; appli Gmail | Un envoi test du formulaire arrive dans « Leads-ads » avec notification sur le cellulaire; courriel test archivé sous « Tests-tracking » |
| 11 h 30 · 15 min | Plan B absence (section 8) : donner la délégation Gmail à ton admin secondaire pour qu'il puisse envoyer l'accusé de réception si tu es injoignable plus de 24 h (aucune soumission ni prix de sa part) | Gmail > Paramètres > Comptes et importation > Accorder l'accès à votre compte | Invitation acceptée par la personne; elle voit le libellé Leads-ads |
| 11 h 45 · 15 min | Bloquer dans Google Agenda, du 28 septembre au 23 novembre : les 4 plages quotidiennes de réponse aux leads (8 h 30, 12 h, 15 h 30, 19 h; 10 min chacune, 7 jours sur 7; section 8), la **routine du lundi 8 h à 9 h** (« Routine EVX : dashboard + termes + relances », 9 occurrences) et le rappel « Post Google » du lundi 9 h | Google Agenda > Événements récurrents | Les blocs récurrents apparaissent; alarme réglée pour lundi 28 à 7 h 45 |

Message de boîte vocale (≈ 25 secondes, vouvoiement, aucun prix) :

```
Bonjour, vous êtes bien chez Évenox, location de lettres illuminées et de jeux géants
pour vos événements. Laissez votre nom, la date de votre événement et votre ville :
je vous rappelle dans les 4 heures ouvrables. Vous pouvez aussi remplir le formulaire
sur evenox.ca/lettres-illuminees : soumission en 24 h. Merci!
```

Les textes de l'accusé de réception, du texto et des relances ne sont pas répétés ici : ils se copient tels quels depuis la section 8 pour éviter deux versions qui divergent.

### Dimanche 27 septembre — armement de la mise en ligne (≈ 1 h) et premier contrôle lundi

Décision : **le budget part le lundi 28 septembre à 6 h**, pas le dimanche à 20 h. Trois raisons : (1) un lead reçu dimanche à 22 h resterait sans réponse toute la nuit et raterait la cible < 4 h ouvrables dès le premier jour, alors qu'un lead reçu lundi matin tombe dans ta plage de 8 h 30; (2) Meta et Google raisonnent en journées complètes (budget quotidien, phase d'apprentissage) et une demi-journée le dimanche fausse les chiffres de la première semaine dans le Sheet; (3) le lundi matin, tu es devant l'écran pour corriger une pub refusée ou un bogue de tracking dans l'heure. Ce qui changerait le choix : si l'historique Booqable montre que la majorité des demandes arrivent le dimanche soir, tu passes la date de début au dimanche 20 h à partir de la semaine 2 (question bloquante).

| Heure / durée | Tâche | Outil | Résultat attendu (« fait ») |
|---|---|---|---|
| 19 h · 15 min | Vérifier le statut des 5 pubs Meta et des 3 RSA Google actives (créées vendredi, elles ont eu 48 h de révision). Une pub « Refusée » se corrige maintenant (texte ou image), pas lundi | Meta Ads Manager > Publicités; Google Ads > Annonces | Toutes les pubs « Approuvée » (Meta) et « Approuvée » ou « Éligible » (Google); sinon correction faite et pub renvoyée en révision |
| 19 h 15 · 10 min | Armer Meta : passer l'interrupteur de la campagne « EVX_META_LETTRES_LEADS » à Activé; la date de début de l'ensemble (28 sept. 6 h) retient la diffusion jusqu'à l'heure prévue. « EVX_META_RETARGETING » reste désactivée (départ lundi 5 ou 12 octobre, section 4) | Meta Ads Manager > Campagnes | Campagne « Programmée » (pas « Active »), ensemble « Programmé pour le 28 sept. 06:00 » |
| 19 h 25 · 10 min | Vérifier Google : campagne « Activée » avec date de début 28 septembre et calendrier 6 h–23 h (Google démarre donc à 6 h, comme Meta); budget 16,50 $/jour; 2 groupes en veille | Google Ads > Paramètres de campagne > Dates / Calendrier de diffusion | Campagne « En attente » jusqu'au 28 à 6 h, 3 groupes « Éligible », 2 « En veille » |
| 19 h 35 · 15 min | Dernier test sur cellulaire en navigation privée : /lettres-illuminees et /merci s'ouvrent, bannière avec Accepter / Refuser, formulaire → courriel dans « Leads-ads » en moins de 2 minutes; archiver le courriel test sous « Tests-tracking » | Cellulaire | Capture du test datée du 27 septembre dans Drive > Captures |
| 19 h 50 · 10 min | Contrôle de sécurité : limite de dépenses Meta 1 300 $ en place; côté Google, budget quotidien 16,50 $ et date de fin 22 novembre confirmés; alarme lundi 7 h 45 activée; cellulaire chargé, notifications Gmail « Leads-ads » activées | Meta > Facturation et paiements; Google Ads > Facturation; cellulaire | Limite Meta visible, budget et date de fin Google confirmés; alarme et notifications actives |
| **Lundi 28 · 8 h · 20 min** | **Premier contrôle** (2 heures de diffusion) : Meta — ensemble « Actif » ou « Apprentissage limité » (normal à 26 $/jour, n'y touche pas pendant 7 jours), dépense > 0 $, impressions > 0, aucune pub « Refusée » ni « Erreur de diffusion »; Google — impressions > 0, aucune annonce « Refusée »; Gmail — libellé « Leads-ads » vide ou déjà traité. Aucune donnée à saisir dans le Sheet ce lundi : la première vraie ligne Hebdo se remplit le lundi 5 octobre | Meta Ads Manager + Google Ads + Gmail | Note « Lancement OK 08:xx » dans l'onglet Hebdo (cellule Notes de la ligne du 28 sept.); si une pub est refusée, la corriger avant 9 h (le reste continue de diffuser); si 0 impression à 9 h sur une plateforme : vérifier date de début, moyen de paiement et statut de révision avant toute autre action |

### Fin de semaine 0 : ce qui doit être vrai

- [ ] Portefeuille Meta « Évenox » avec Page + Instagram professionnel, compte pub actif, carte au nom de l'entreprise, limite de dépenses 1 300 $, 2 admins, 2FA active, domaine evenox.ca vérifié.
- [ ] Google Ads en mode expert, facturation active, taggage automatique activé, 2 admins, aucune campagne « intelligente » créée par défaut, date de fin de campagne 22 novembre.
- [ ] Fiche Google vérifiée (ou vérification lancée avec la date attendue notée), catégorie « Service de location de matériel pour fêtes », 16 zones de service, premier post publié le 25 septembre.
- [ ] evenox.ca/lettres-illuminees publiée et conforme au wireframe de la section 6, sans aucun prix affiché; PageSpeed mobile capturé.
- [ ] Formulaire Fluent Forms fonctionnel → redirection vers /merci (noindex, hors menu) → courriel « LEAD LETTRES » reçu dans « Leads-ads » en moins de 2 minutes, avec les UTM dans le corps; alerte texto qui vibre.
- [ ] Loi 25 : bannière Complianz en français (Accepter / Refuser de même taille, scripts bloqués avant consentement), Consent Mode v2 activé, page /politique-de-confidentialite en ligne avec le responsable nommé (Alexandre Séguin) et liée depuis la bannière, le pied de page et le formulaire.
- [ ] Tracking prouvé par le test A (Accepter) et le test B (Refuser) : Pixel Meta + API Conversions + Lead sur /merci, balise Google + action « Lead formulaire » principale (30 jours), 5 captures dans Drive; données test supprimées.
- [ ] Booqable : champ « Source lead » + tags ADS-META / ADS-GOOGLE + note SRC/CAMP/CREA/LEAD testés sur un client fictif (captures), client fictif supprimé.
- [ ] Créas et campagnes : au moins 3 créas exportées (feed 4:5, Reel, story), objectif 5 pubs; 5 RSA dans les limites (≤ 30 / ≤ 90); « EVX_META_LETTRES_LEADS » programmée pour le 28 septembre 6 h avec les 5 pubs approuvées; « EVX_GOOGLE_RECH_LOCATION » en attente du 28 à 6 h avec assets, EVX-NEG-BASE et suffixes UTM; « EVX_META_RETARGETING » créée et désactivée; 13 règles automatiques créées (EVX-SCALE-20 désactivée).
- [ ] Sheet « EVX – Suivi ads » prêt (onglets Leads / Hebdo / Liens UTM / Google copy / Liens, cibles H7 en tête); 7 modèles Gmail + texto + boîte vocale + 2 filtres + délégation Gmail prêts; 4 plages quotidiennes et 9 routines du lundi dans l'agenda.

### Routine quotidienne (du 28 septembre au 22 novembre, 7 jours sur 7)

Les relances J+2 / J+5 ne peuvent pas attendre le lundi : elles partent le jour dû. Quatre plages fixes de 10 min (8 h 30, 12 h, 15 h 30, 19 h; section 8) : ouvrir le libellé « Leads-ads » → pour chaque nouveau lead, courriel (modèle Cas A ou Cas B) + texto d'accusé, décider la source (une seule : Meta, Google, Retargeting, Organique…), créer le client Booqable avec Source lead + tag + note `SRC=… \| CAMP=… \| CREA=… \| LEAD=AAAA-MM-JJ`, ajouter la ligne dans l'onglet Leads → puis Booqable > Commandes > statut Concept : envoyer la relance J+2 ou J+5 due aujourd'hui. Aucun texto sortant avant 8 h ni après 20 h.

### Routine des lundis à partir du 28 septembre (1 h, bloquée de 8 h à 9 h)

Le lundi 28 septembre sert seulement au premier contrôle (aucune donnée). Chaque lundi suivant remplit la ligne de la semaine qui vient de se terminer : première vraie ligne le 5 octobre, 8e ligne le 23 novembre (jour du verdict).

| Durée | Bloc | Ce que tu fais | Sortie |
|---|---|---|---|
| 30 min | Dashboard | Remplir la ligne de la semaine dans « EVX – Suivi ads » : dépense Meta / Google (Ads Manager « Montant dépensé », Google « Coût », plage lundi→dimanche), leads par source (vérité = onglet Leads alimenté depuis Booqable, pas les plateformes), devis envoyés, dépôts reçus, CA HT réservé, CPL, ROAS réservé (définition H10, section 7); comparer aux seuils H3 (CPL > 60 $ = alerte) et aux cibles H7; 3 vérifications de 2 min : fréquence du retargeting < 3 sur 7 jours, pubs refusées, budget Google atteint ou non (non atteint 3 jours de suite = CPC max trop bas, règle section 4) | Ligne complète + une phrase de décision : « continuer », « corriger » ou « couper » (règles section 4); changements de pubs regroupés aux lundis de changement (12 oct., 26 oct., 9 nov.) |
| 15 min | Termes de recherche | Google Ads > Campagnes > Insights et rapports > Termes de recherche (7 derniers jours) > cocher tout ce qui n'est pas de la location (achat, DIY, Amazon, emploi, villes > 60 km) > « Ajouter comme mot clé à exclure » > liste EVX-NEG-BASE; noter les termes qui ont donné un lead pour les passer en mot-clé exact. Google masque une partie des requêtes (seuil de confidentialité) : normal si la somme des termes est inférieure aux clics | Au moins 3 négatifs ajoutés par semaine les 4 premières semaines (hypothèse); dès 15 conversions « Lead formulaire » sur 30 jours, passer à « Maximiser les conversions » (section 4) |
| 15 min | Relances (audit) | Passer le libellé « Leads-ads » et Booqable > Commandes > Concept : vérifier qu'aucune relance J+2 / J+5 due la semaine passée n'a été manquée; envoyer les clôtures J+10 (« je libère la date », modèle EVX – Clôture J+10) et annuler la commande + tag CLOSE-J10 (section 8); vérifier Source lead, tag et note sur chaque client de la semaine; supprimer tout lead test | Zéro lead sans réponse depuis plus de 24 h; zéro relance manquée; Booqable et onglet Leads alignés |

Chaque lundi, tu envoies le lien du Sheet à ton admin secondaire : ça te force à le remplir et ça donne une deuxième paire d'yeux sur les seuils de pause. Le verdict du test se prend la semaine du 23 novembre avec 8 lignes complètes (critères en section 1).

---

## Questions bloquantes pour affiner

Réponds à ces 8 questions (une ligne chacune suffit) et je recalibre tous les chiffres marqués « hypothèse » : plafond de stock, panier, taux de close, seuils de verdict et calendrier.

1. **Combien de sets de lettres complets et de jeux de chiffres as-tu, avec le nombre d'exemplaires par caractère (deux « 2 » pour « 2027 », deux « M » pour « EMMA »), et as-tu des lettres accentuées (É, Ë) ou des symboles (cœur, &)?**
   Pourquoi ça change le plan : c'est le plafond de réservations par week-end (règle « stock plein » des paliers +20 %), et ça décide quels mots peuvent être promis en créa (NOËL, LÉA, A ♥ M) et si le forfait est plafonné à 4 ou 5 pièces.
   Hypothèse utilisée en attendant : nombre de sets inconnu (exemple illustratif de 3 sets, H9); aucune créa n'utilise d'accent ni de symbole; seuls les mots photographiés sur le set réel avant le 23 septembre sont produits.

2. **Quel est le panier moyen HT réel des 12 derniers mois dans Booqable (lettres seules, mix lettres + jeux/mobilier) et la part du CA week-end vs semaine, avec l'historique 2025 par semaine?**
   Pourquoi ça change le plan : le panier fixe le ROAS implicite (0,28 × panier ÷ 40 $), le calcul inverse des 50 k$ et la lecture de la saisonnalité de la fenêtre (H11).
   Hypothèse utilisée en attendant : 450 $ lettres seules, 800 $ mix, 550 $ pondéré pour les leads ads (H1); saisonnalité pic mai–octobre, 2e pic novembre–décembre, creux janvier–mars (H11).

3. **Quel est ton taux de close réel (devis Booqable envoyé → dépôt reçu) et ton taux de leads non qualifiés sur les 12 derniers mois?**
   Pourquoi ça change le plan : s'il est déjà ≥ 45 %, on allège les relances J+5/J+10; s'il est < 25 %, on revoit le devis avant de dépenser 1 $ en pubs; il fixe aussi le seuil GO (close ≥ 30 %).
   Hypothèse utilisée en attendant : lead → devis 80 % (H4), devis → dépôt 35 % (H5), donc lead → dépôt ≈ 28 %.

4. **Le site evenox.ca est-il bien sous WordPress + Divi, quels plugins sont déjà actifs (formulaire, bannière de consentement Loi 25, SEO, cache), quelles pages jeux et mobilier existent (URL exactes), et existe-t-il déjà un Pixel Meta, un compte Google Ads ou une fiche Google Business Profile (sous quel courriel)?**
   Pourquoi ça change le plan : ça décide si Fluent Forms, Complianz, PixelYourSite et Site Kit s'installent tels quels ou si on garde l'existant, si un compte Google Ads doit être nettoyé avant le 28 septembre, et où atterrissent les groupes Google « Jeux géants » et « Tables-chaises-vaisselle ».
   Hypothèse utilisée en attendant : WordPress + Divi, page /lettres-illuminees créée de zéro, comptes neufs; les groupes Jeux et Mobilier pointent vers /lettres-illuminees#jeux et #mobilier.

5. **Quels sont tes frais de livraison réels par zone (Rive-Nord, Laval, Montréal, Rive-Sud, jusqu'à 60 km) et le ramassage à l'entrepôt du 215 René-A.-Robert est-il vraiment offert aux clients (jours et heures)?**
   Pourquoi ça change le plan : ça écrit la section « Zones et tarification » de la page, l'annonce des frais dans Google pour Montréal/Rive-Sud, l'option « Ramassage » du formulaire et le choix fiche Google hybride (adresse affichée) ou zones de service seulement.
   Hypothèse utilisée en attendant : ramassage inclus à Sainte-Thérèse (vendredi 13 h–18 h, retour lundi 9 h–12 h), livraison à la porte avec frais selon l'adresse, rien au-delà de 60 km (H12); aucun montant affiché, « soumission en 24 h ».

6. **Quel minimum de commande veux-tu appliquer (jamais affiché), confirmes-tu les conditions par défaut (solde à J-7, devis valide 30 jours, délai minimal 5 jours, dépôt transférable 12 mois, report/annulation), et ton forfait Booqable permet-il les champs personnalisés, les tags de commande et une demande de paiement partiel de 20 % (Booqable Payments/Stripe)?**
   Pourquoi ça change le plan : sans ces valeurs, le script de qualification (section 8), les FAQ 3, 5 à 8 de la page et le process de dépôt restent en [à confirmer]; sans les fonctions Booqable, tout le tracking passe en mode repli (note SRC=… et dépôt par virement Interac).
   Hypothèse utilisée en attendant : minimum fixé par toi avant le 21 septembre et inscrit dans la note interne Booqable; conditions par défaut ci-dessus; champs, tags et paiement partiel supposés disponibles.

7. **Quelles sont les dimensions, le poids et l'alimentation des lettres (prise standard 120 V, puissance, rallonges et adaptateurs fournis?) et tolèrent-elles la pluie ou la rosée à l'extérieur?**
   Pourquoi ça change le plan : ça fige la FAQ « installation et extérieur », la ligne « rallonges fournies » du Forfait Signature, l'information demandée par les salles et clients corpo, et l'angle mariages/festivals extérieurs.
   Hypothèse utilisée en attendant : prise standard 120 V, rallonges non promises, phrase FAQ « sous abri, jamais sous la pluie ».

8. **Peux-tu répondre aux leads en < 4 h ouvrables 7 jours sur 7 (8 h à 20 h) (à quelle heure arrivent aujourd'hui la majorité des demandes?), et qui sera l'admin secondaire avec 2FA sur Meta, Google Ads et la délégation Gmail dès le 21 septembre?**
   Pourquoi ça change le plan : la vitesse de réponse est le premier levier du taux de close (SLA section 8) et confirme le lancement le lundi 6 h ou son déplacement au dimanche 20 h; sans admin secondaire, un compte désactivé ou un téléphone perdu arrête le test (risque 11, section 9).
   Hypothèse utilisée en attendant : réponse < 24 h garantie, cible < 4 h ouvrables, alerte texto + notification Gmail; lancement lundi 28 septembre 6 h; admin secondaire nommé en semaine 0.
