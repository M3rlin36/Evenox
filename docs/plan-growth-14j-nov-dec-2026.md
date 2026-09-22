# Évenox — Plan growth 14 jours (nov–déc 2026)

Sources vérifiées le 22 sept 2026: evenox.ca (URLs réelles), ads.openai.com / guides ChatGPT Ads (Choice OMG, Digiday, ppc.land).

## Résumé (10 lignes)
1. Objectif: passer de ~1,5 soumission /merci par semaine à un flux mesuré, nouveaux clients particuliers + party bureau/famille.
2. Formule: Search → page catégorie simple → formulaire → /merci-soumission → devis Booqable ≤ 10 min → Close.
3. Jours 1–3: tracking d'abord (GA4, conversion primaire unique = /merci, UTM, champs cachés). Zéro budget avant.
4. Jour 4: lancement Google Ads Search, 5 campagnes produits + 1 marque, 58 $/jour, lun–ven 9 h–18 h.
5. Jour 6: retargeting Facebook 10 $/jour, séparé, exclusion des leads convertis.
6. ChatGPT Ads: le retargeting site n'existe pas sur la plateforme. Workaround = test prospection 25 $/jour (min. OpenAI), jour 10+, budget séparé.
7. Messages par saison alignés persona (femme 25–40, RH/marketing, décide vite) et PK (service, dispo, 24/7, Ste-Thérèse).
8. Offre déc famille: 3 options chiffrées en structure, Alexandre choisit le %.
9. KPI hebdo: soumissions /merci, CPA /merci, % leads complets (date+ville+produit), taux Close 48 h.
10. On ne fait pas: Bark, PMax, forfaits web actuels en landing, volume avant pixel.

---

## 1. Plan d'exécution 14 jours

Owners: **ADS** (Google Ads), **SITE** (WordPress/Divi + GTM/SEO), **META** (Facebook/Instagram), **CGPT** (ChatGPT Ads), **ALEX** (accès, décisions, Close).

| Jour | Bloc | Actions | Owner |
|---|---|---|---|
| J1 (lun) | Accès | Donner accès admin: Google Ads (ID compte), GA4, GTM, Meta Business, WordPress, Booqable. Confirmer URL exacte page merci. | ALEX |
| J1–J2 | Tracking | GTM propre: GA4 config, conversion Ads « Soumission » sur /merci-soumission, pixel Meta, script UTM→champs cachés, IP internes exclues. Test 3 soumissions réelles. | SITE |
| J2 | Ads prep | Purger l'ancien compte: mettre toutes les anciennes conversions en « secondaire », supprimer campagnes actives, importer listes de négatifs. | ADS |
| J3 | Landing | Vérifier les 9 pages d'atterrissage (mobile, bouton « Demander une soumission » au-dessus du pli, formulaire ≤ 6 champs: nom, courriel, tel, date, ville, produit). Retirer tout lien vers forfaits non vendables depuis ces pages. | SITE |
| J3 | Validation | GO/NO-GO tracking: 3 soumissions test = 3 conversions Ads + 3 événements GA4 + 3 Lead Meta. Pas de GO = pas de budget. | SITE + ALEX |
| J4 | Lancement | Search live: 6 campagnes, 58 $/j, Max clics avec plafond CPC 2,50 $, horaires lun–ven 9–18. | ADS |
| J4 | Process | Script de qualification lead + template Booqable « Soumission — Close direct » prêt. Règle: devis envoyé ≤ 10 min (heures ouvrables). | ALEX |
| J5 | Search | Termes de recherche J1: ajouter négatifs, couper mots-clés hors zone. | ADS |
| J6 | Meta | Retargeting live 10 $/j (2 ensembles: visiteurs produits 30 j / abandon formulaire 14 j). 3 créas. | META |
| J7 | Hebdo #1 | Rapport KPI semaine 1. Décision: réallouer budget vers la campagne qui produit des /merci. | ADS + ALEX |
| J8–J9 | Site/SEO | Page « Party de bureau » et « Party famille » (/party-bureau-corporatif/ existe déjà: l'optimiser; créer /party-famille-noel/ si absent). Ajouter FAQ + lien réservation 24/7. Autoriser OAI-SearchBot dans robots.txt. | SITE |
| J10 | CGPT | Créer compte ads.openai.com, installer pixel OAIQ via GTM, événement lead sur /merci. Test prospection 25 $/j seulement si Alexandre valide le budget séparé. | CGPT + ALEX |
| J11 | Search | Passer en Max conversions seulement si ≥ 15 conversions /merci cumulées; sinon rester Max clics. Ajouter extensions: liens annexes, accroches, appel. | ADS |
| J12 | Offre | Offre déc famille choisie (livrable 7) → annonce dédiée + créa Meta + bannière page chaises/jeux. | ALEX + META |
| J13 | Qualité | Audit leads: % avec date+ville+produit, % Close 48 h, sources des non-qualifiés → négatifs ou exclusions. | ADS + ALEX |
| J14 | Hebdo #2 | Bilan 14 j, budget nov–déc figé, calendrier créas décembre. | Tous |

---

## 2. Structure Google Ads Search

Paramètres communs: réseau Search seulement (pas Display, pas partenaires), zones = Laval, Terrebonne, Blainville, Sainte-Thérèse, Boisbriand, Mirabel, Saint-Jérôme, Mascouche, Repentigny, Montréal (île), Rosemère, Lorraine, Bois-des-Filion; option « présence » (pas intérêt). Langues: français + anglais (annonces en FR). Horaire: lun–ven 9 h–18 h. Enchère de départ: Max clics, plafond CPC 2,50 $. Correspondances: expression + exacte (pas de large). Conversion primaire unique: Soumission /merci.

| Campagne | Budget/j | Groupes d'annonces | Mots-clés (FR-QC, expression/exacte) | Landing |
|---|---|---|---|---|
| S1 Équipement chaises/tables | 18 $ | Chaises / Tables / Chaises+tables combo | location chaise, location chaises pliantes, location de chaises laval, location chaise rive-nord, location table et chaise, location table pliante, louer des chaises pour party, location chaises terrebonne, location chaise blainville | /location-chaise-pliante/ et /location-tables-rive-nord/ |
| S2 Jeux | 14 $ | Gonflables / Jeux géants / Jeux intérieur (party bureau) | location jeux gonflables, location jeu gonflable laval, location jeux géants, location jeux pour party, location jeux party de bureau, location jeux d'arcade, location jeux intérieur, location jeux enfants anniversaire | /location-jeux-gonflable/, /jeux-geants/, /location-jeu-interieur/ |
| S3 Déco lettres + mur fleurs | 10 $ | Lettres lumineuses / Mur de fleurs / Anniversaire enfant | location lettres lumineuses, location lettre géante, lettres lumineuses anniversaire, location chiffre lumineux, location mur de fleurs, mur fleuri location, location mur floral montréal | /decoration-lettres-neons/, /mur-decoratif/ |
| S4 Photobooth | 8 $ | Photobooth party bureau / Photobooth mariage-anniv | location photobooth, location photobooth laval, photobooth party de bureau, location photobooth montréal, location borne photo, photobooth 360 location | /photobooth-location-montreal-evenox/ (pas /forfaits-photobooth/) |
| S5 Confiserie | 5 $ | Machines | location machine barbe à papa, location machine popcorn, location machine à slush, location machine confiserie, machine barbe à papa louer laval | /friandises-confiseries/ |
| S6 Marque | 3 $ | Évenox | evenox, évenox location, evenox ste-thérèse | / |
| **Total** | **58 $** | | | |

Annonces (RSA, par groupe): 3 titres épinglés en position 1 tournants: « Location [produit] Rive-Nord » / « Réservation en ligne 24/7 » / « Devis en 10 minutes ». Titres PK: « Cueillette à Ste-Thérèse », « Livraison Laval–Montréal », « On répond vite, on s'occupe de tout ». Description: « Location clé en main pour party de bureau, famille ou anniversaire. Configurez votre liste en ligne, recevez votre devis en 10 minutes. » Extensions: appel (heures ouvrables), liens annexes (Configurateur, Chaises, Jeux, Contact), accroches (Réservation 24/7, Ste-Thérèse, Livraison Rive-Nord, Devis rapide).

Négatifs (liste partagée, toutes campagnes): gratuit, gratuite, emploi, job, salaire, kijiji, marketplace, usagé, à vendre, acheter, achat, prix d'achat, fabricant, ikea, walmart, costco, canadian tire, dollarama, plan, diy, fabriquer, bricoler, amazon, québec ville, gatineau, sherbrooke, trois-rivières, ottawa, toronto, formation, cours, définition, wikipedia, bureau en gros, chaise de bureau, chaise gaming, chaise roulante, jeux vidéo, jeux ps5, xbox, casino, machine à sous, lettre de motivation, lettre de démission, photobooth à vendre, appli photobooth.

Règles: revoir les termes de recherche J5, J7, J11, J14. Une campagne à 0 soumission après 100 clics = budget coupé de moitié et redirigé vers la campagne qui convertit. Ne jamais descendre le total Search sous 50 $ sans le dire à Alexandre.

---

## 3. Setup tracking (checklist)

- [ ] GTM: un seul conteneur, publié, ancien code Ads/GA en dur retiré du thème Divi.
- [ ] GA4: tag config; événement `generate_lead` déclenché sur page /merci-soumission (regex `^/merci`) ; marqué conversion clé.
- [ ] Google Ads: conversion « Soumission » = page vue /merci-soumission, catégorie Prospect, comptage « une », fenêtre 30 j, **primaire**. Toutes les autres conversions existantes → **secondaire** (elles ont corrompu les CPA passés).
- [ ] Lien GA4 ↔ Google Ads + auto-tagging (gclid) activé. Conversions améliorées activées (courriel haché du formulaire).
- [ ] Page merci: noindex, accessible uniquement après soumission (redirection avec paramètre `?ok=1` et déclencheur GTM qui exige ce paramètre → évite les fausses conversions par accès direct/refresh).
- [ ] UTM standard: `utm_source=google|facebook|chatgpt`, `utm_medium=cpc|retarget`, `utm_campaign=S1-chaises`…, `utm_content=nom-annonce`. Script GTM qui lit utm_*, gclid, fbclid et les écrit dans un cookie first-party 90 j.
- [ ] Champs cachés formulaire (Divi/Gravity/WPForms): `source`, `medium`, `campaign`, `content`, `gclid`, `fbclid`, `page_origine`, `produit` (pré-rempli selon la page), `date_evenement`, `ville`. Ces champs arrivent dans le courriel de notification + feuille Google.
- [ ] Meta Pixel: PageView, ViewContent (pages produits), `FormStart` (custom), Lead (/merci). Conversions API si le plugin Meta pour WordPress est installé.
- [ ] Pixel OAIQ (ChatGPT Ads) via GTM, événement `lead` sur /merci (J10).
- [ ] Exclusions: IP bureau/maison Alexandre + équipe, trafic interne GA4, bots. Filtre GA4 « internal traffic ».
- [ ] Feuille « Leads » (Google Sheets): date, source, campagne, produit, date événement, ville, devis envoyé (h:min), Close O/N, dépôt O/N. C'est la vraie source du CPA.
- [ ] Test de bout en bout: 3 soumissions réelles → 3 conversions Ads, 3 `generate_lead` GA4, 3 Lead Meta, champs cachés remplis. GO seulement si 3/3.
- [ ] Semaine 3+: import conversions hors ligne « Close » dans Google Ads via gclid (feuille Leads) pour optimiser sur les vrais clients.

---

## 4. Retargeting Facebook / Instagram

- Budget: 10 $/j, campagne « Conversions – Lead », séparée du Search.
- Événements pixel: PageView, ViewContent, FormStart, Lead.
- Audiences:
  - A1 Visiteurs pages produits 30 j (ViewContent) sauf Lead 90 j → 6 $/j.
  - A2 Abandon formulaire: FormStart 14 j sans Lead → 4 $/j.
  - Exclusions partout: Lead 90 j, liste clients Booqable (export courriels), employés.
  - À créer maintenant pour plus tard: audience persona (femmes 25–45, Laval/Rive-Nord/Montréal, intérêts RH/marketing/événementiel) — pas de budget avant que le retargeting produise des /merci.
- Placements: Facebook + Instagram feed/stories/reels, automatique. Zone: 40 km autour de Sainte-Thérèse.
- Créas (3 angles, format 4:5 + story 9:16, photos réelles Évenox):
  1. **« Vous organisez le party de bureau? On s'occupe du reste. »** Persona RH/marketing. Visuel: jeux géants + photobooth en salle. CTA: Demander une soumission.
  2. **« Réservez en ligne 24/7, devis en 10 minutes. »** PK simplicité. Visuel: configurateur sur téléphone + chaises/tables livrées. CTA: Configurer ma liste.
  3. **« Cueillette à Ste-Thérèse, dispo pour votre date. »** PK localisation/dispo. Visuel: entrepôt / camion / lettres lumineuses. CTA: Vérifier la disponibilité.
- Rappel formulaire (A2): « Votre liste vous attend. Finalisez en 2 minutes, on vous répond aujourd'hui. »
- Fréquence cible ≤ 3/semaine; rotation créas aux 14 jours.

---

## 5. ChatGPT Ads (état réel, vérifié)

Ce que c'est en 2026: OpenAI vend des placements sponsorisés dans ChatGPT (usagers Free et Go seulement, pas Plus/Pro/Business). Pilote É-U février 2026, Canada depuis le 16 avril 2026, self-serve ouvert le 6 mai 2026 via ads.openai.com. Plus de 40 pays aujourd'hui.

Prérequis: compte ads.openai.com, méthode de paiement, pixel OAIQ (généré par OpenAI, à poser via GTM) ou Conversions API, autoriser `OAI-AdsBot` et `OAI-SearchBot` dans robots.txt (sinon les annonces ne sont pas approuvées).

Format: un seul, la « chat card »: titre 3–50 caractères, texte ≤ 100 caractères, image, favicon, URL. Facturé au clic. Budget min recommandé 25 $/j par campagne. CPC observé au Canada: ~4,40–4,90 $ CA, CTR 0,65–1,30 %.

**Limites qui changent le plan:**
1. **Pas de retargeting visiteurs site.** Le remarketing par pixel n'est pas exposé. Les audiences custom = listes courriel/téléphone, **minimum 25 000 contacts matchés** pour l'inclusion (exclusion possible sous 25 000). Évenox n'a pas cette liste. → Le « retargeting ChatGPT » tel qu'écrit au plan n'est pas faisable aujourd'hui. Je ne le mets pas en « hold »: je le remplace.
2. **Ciblage géo = pays seulement** hors É-U. Impossible de cibler Québec/Rive-Nord. Le filtre réel = la langue de l'annonce (rédiger en français québécois + « Laval / Rive-Nord » dans le titre).
3. Ciblage par « context hints » thématiques, pas par mot-clé; pas de démographie, pas d'intérêts.
4. Un objectif par campagne (ici: lead), enchère oCPC avec bid cap.
5. Audience = usagers gratuits; les décideuses RH/marketing sont souvent sur plans payants → volume B2B faible.

**Workaround le plus proche (ce qu'on fait):**
- Piste gratuite, prioritaire: être recommandé organiquement par ChatGPT. Autoriser OAI-SearchBot, pages produits avec FAQ claire (« Location de chaises pliantes à Sainte-Thérèse, cueillette ou livraison Laval/Montréal, réservation en ligne »), fiche Google Business à jour. Coût: 0 $.
- Test prospection payant, 25 $/j, 14 jours, budget séparé du Search: 1 campagne objectif lead, context hints « location équipement événement / party de bureau / organisation de fête », 2 chat cards FR: « Location jeux et photobooth — Laval, Rive-Nord » / « Chaises, tables, lettres lumineuses — réservez en ligne 24/7 ». Landing: /configurateur/. Pixel OAIQ événement lead sur /merci.
- Critère d'arrêt: 350 $ dépensés sans soumission /merci = on coupe et on remet l'argent sur Search.
- Exclusion clients: liste Booqable exportée en audience d'exclusion (fonctionne sous 25 000).

---

## 6. Messages / angles par saison (persona: femme 25–40, RH/marketing, décide vite)

| Saison | Cible | Titre annonce | Message clé | PK mis de l'avant |
|---|---|---|---|---|
| Party de bureau (nov–déc) | RH/marketing | « Party de bureau clé en main — jeux, photobooth, déco » | « Une soumission, une livraison, une facture. Vous gérez le reste de votre journée. » | Service + dispo + simplicité |
| Party famille (déc) | Particuliers, mères 30–45 | « Chaises, tables et jeux pour Noël — cueillette à Ste-Thérèse » | « 20 invités de plus? On a les chaises. Réservez en 2 minutes, ramassez la veille. » + offre déc | Localisation + 24/7 |
| Conférences | Coordos/RH | « Location chaises et tables pour conférence — livraison Laval/Montréal » | « Quantités garanties, installation à l'heure, une seule personne-ressource. » | Service + dispo |
| Anniversaires 4-5-7 ans | Parents | « Lettres lumineuses et ballons pour ses 5 ans » | « Le chiffre lumineux + arche de ballons, prêt à photographier. Livré ou cueillette. » | Simplicité + localisation |

Ton: phrases courtes, vouvoiement, zéro jargon, prix de départ affiché sur la page (pas dans l'annonce). Preuve: « Réponse en 10 minutes aux heures ouvrables » — seulement si le SLA est tenu.

---

## 7. Offre décembre famille (Alexandre choisit)

Logique marge: chaises/tables = gros volume, petit ticket, main-d'œuvre par commande fixe → un rabais % doit être conditionné à un seuil de quantité et à la cueillette (pas de camion). Jeux = ticket plus élevé, marge unitaire plus forte → on pousse le panier (2e article) plutôt que le prix.

| Option | Mécanique | Condition | Pourquoi ça protège la marge |
|---|---|---|---|
| A. Volume chaises | X % sur les chaises pliantes (Alexandre fixe X, suggestion 10–15 %) | Dès 30 chaises, cueillette Ste-Thérèse, réservé en ligne | Le seuil évite les micro-commandes à faible marge; la cueillette enlève la livraison |
| B. Bundle jeux (recommandée) | 2ᵉ jeu à −50 % ou 1 jeu géant offert dès 2 jeux loués | Cueillette ou livraison, dates 12–31 déc | Hausse le panier moyen, pas de perte sur le 1ᵉʳ jeu, augmente la sortie d'inventaire dormant |
| C. Montant fixe | −Y $ (ex. 25 $) dès 200 $ de location | Réservation en ligne avant le 5 déc | Simple à comprendre, pousse la réservation tôt (planification livraisons), plafond de coût connu |

Recommandation: **B**, avec A en second pour les gros lots de chaises. Code promo unique Booqable (ex. `NOEL26`) pour mesurer le Close par offre.

---

## 8. KPI hebdo (feuille « Leads », 15 min chaque lundi)

| KPI | Définition | Cible sprint |
|---|---|---|
| Soumissions /merci | Conversions primaires Ads + total site | > 5/semaine (vs ~1,5) |
| CPA /merci | Dépense Search ÷ soumissions Search | À établir semaine 1, puis baisser |
| % leads complets | Leads avec date + ville + produit | ≥ 70 % |
| Taux Close 48 h | Devis envoyés → commandes Closées en 48 h | ≥ 30 % |
| Délai devis | Médiane soumission → devis envoyé | ≤ 10 min (heures ouvrables) |
| Part nouveaux clients | Nouveaux clients Booqable / semaine | Remonter vs 3 (2026) |

Pas de ROI annoncé tant qu'on n'a pas 4 semaines de données propres.

---

## 9. Risques et ce qu'on ne fait pas

- **Bark**: jamais.
- **PMax**: pas avant 30 conversions /merci propres sur 30 j.
- **Forfaits web actuels**: aucune annonce ni landing vers /nos-forfaits-tout-inclus/ ou /forfaits-photobooth/ tant qu'ils ne sont pas refaits.
- **Volume avant pixel**: aucun budget avant le GO tracking J3.
- **Tracking Booqable**: le Close se mesure à la main (feuille) avant l'import hors ligne; ne pas déclarer un CPA « client » avant.
- **Horaire 9–18 lun–ven**: risque de manquer les particuliers qui cherchent le soir. On respecte la décision; à J14, on regarde les impressions perdues par horaire et Alexandre tranche.
- **ChatGPT Ads**: ciblage Canada entier, pas Québec → une partie du budget touche hors zone. Test plafonné, critère d'arrêt écrit.
- **Réponse lente**: la formule tient sur le devis ≤ 10 min. Si Alexandre n'est pas dispo, une notification SMS sur chaque /merci est obligatoire.
- **Brouillons non Closés**: relance 24 h + 72 h scriptée (courriel + texto) sur chaque devis ouvert.

---

## Questions bloquantes (max 8)

1. URL exacte de la page merci: /merci-soumission/ ou /merci/? Une seule page pour tous les formulaires (contact + configurateur)?
2. Quel plugin de formulaire (Divi Contact, Gravity Forms, WPForms)? Nécessaire pour les champs cachés.
3. Accès admin: Google Ads (ID), GA4, GTM, Meta Business, WordPress, Booqable — envoyés à qui, quand?
4. Le % (ou $) de l'offre déc famille: X pour l'option A, montant pour C, ou GO sur B tel quel?
5. Budget ChatGPT Ads test 25 $/j × 14 j (~350 $) approuvé, oui ou non?
6. Export liste clients Booqable (courriels) autorisé pour exclusions Meta/ChatGPT?
7. Numéro d'appel à afficher dans les annonces (cellulaire d'Alexandre ou ligne bureau)?
8. Le SLA « devis en 10 minutes » est-il tenable lun–ven 9–18 pendant nov–déc? Sinon on écrit « réponse le jour même ».
