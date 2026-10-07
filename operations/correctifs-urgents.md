# Correctifs urgents — liste priorisée

> Priorité : **P0** = avant de lancer les 300 $/jour (bloquant) · **P1** = pendant la semaine 1 · **P2** = pendant les 30 premiers jours.
> Responsables : **PROP** = Alexandre Séguin (propriétaire) · **WEB** = webmestre Divi/WordPress · **PUB** = gestionnaire de publicité · **ADJ** = adjoint(e) ou personne désignée (fiches et annuaires).
> Impact : ★★★ = effet direct sur le coût par lead qualifié ou sur la confiance · ★★ = important · ★ = utile.

---

## Vue d'ensemble

| # | Correctif | Prio. | Resp. | Temps | Impact |
|---|---|---|---|---|---|
| 1 | Harmoniser la politique de livraison (une seule règle, partout) | P0 | PROP + WEB | 2 h | ★★★ |
| 2 | Corriger l'annonce Google qui affiche « Learn more \| » en anglais | P0 | PUB | 30 min | ★★★ |
| 3 | Corriger le bouton « Demande de Soumision » | P0 | WEB | 15 min | ★★ |
| 4 | Courriel au domaine (info@evenox.ca) au lieu de Gmail | P0 | PROP + WEB | 2 h | ★★★ |
| 5 | Faits cohérents : note Google, nombre d'avis, nombre d'événements | P0 | PROP + WEB | 1 h 30 | ★★★ |
| 6 | Compteurs animés qui affichent « 0+ » aux robots | P0 | WEB | 30 min | ★★ |
| 7 | Témoignages identiques (Jean P. et France R.) et témoignages à vérifier | P0 | PROP + WEB | 45 min | ★★★ |
| 8 | Forfaits photobooth (599 $ / 999 $) présentés comme « forfaits mariage » ; durées contradictoires | P0 | PROP + WEB | 1 h | ★★ |
| 9 | Bannière de consentement Loi 25 (`consent_type` vide) | P0 | WEB | 3 h | ★★★ |
| 10 | Vérification de l'annonceur Google Ads au nom d'une personne | P0 | PROP | 30 min (+ délai Google) | ★★ |
| 11 | ChatGPT Ads : pixel avec consentement refusé par défaut, « personnalisation du texte » désactivée | P0 | PUB | 30 min | ★★★ |
| 12 | Page Facebook d'entreprise (au lieu d'un profil personnel) | P1 | PROP | 2 h | ★★★ |
| 13 | Langue `fr-CA` (au lieu de `fr-FR`) | P1 | WEB | 15 min | ★ |
| 14 | Schéma : aggregateRating, Review, FAQPage, Offer | P1 | WEB | 3 h | ★★ |
| 15 | Politique d'annulation contradictoire dans la FAQ | P1 | PROP + WEB | 30 min | ★★ |
| 16 | « 100 % clé en main » vs « installation incluse seulement si au contrat » | P1 | PROP + WEB | 45 min | ★★ |
| 17 | Bing Places for Business + Bing Webmaster Tools | P1 | ADJ | 1 h 30 | ★★ |
| 18 | WeddingWire : adresse (Laval → Sainte-Thérèse) et avis | P1 | ADJ | 1 h + collecte | ★★ |
| 19 | Yelp (Montréal / Sainte-Thérèse) | P1 | ADJ | 1 h | ★★ |
| 20 | Three Best Rated : candidature Laval, Montréal, Rive-Nord | P1 | ADJ | 45 min | ★★ |
| 21 | Responsable de la protection des renseignements personnels publié | P1 | PROP + WEB | 30 min | ★★ |
| 22 | Pages de villes uniques (plus de texte gabarit) | P2 | WEB + PROP | 2 h par page | ★★ |
| 23 | Positionnement de la boutique Booqable (jeux gonflables pour enfants en vedette) | P2 | PROP + WEB | 2 h | ★★ |
| 24 | Distinguer « Évenox » d'« Evenko » (entité) | P2 | WEB | 1 h | ★ |
| 25 | Délai de réservation mariage contradictoire (3 à 6 mois vs 6 à 12 mois) | P2 | WEB | 15 min | ★ |

**Temps total P0 : environ 13 h** (2 jours de travail répartis entre PROP, WEB et PUB).

---

## Détail de chaque correctif

### 1. Harmoniser la politique de livraison — P0 · PROP + WEB · 2 h · ★★★
**Problème :** le site se contredit.
- Les pages de chaque forfait disent « Tous les forfaits incluent livraison » et listent « Livraison et ramassage 240 $ » dans la valeur.
- La FAQ corporative dit « Le prix affiché comprend la livraison ».
- Mais `/livraison/`, `/forfaits-corporatif/`, `/nos-forfaits-tout-inclus/` et `/mariage/` disent « 100 $ pour les 10 premiers km, puis 7 $/km jusqu'à 40 km ».
- La FAQ générale dit aussi « installation et démontage inclus seulement s'ils figurent au contrat, 50 $/h ».

Un client qui voit « livraison incluse », puis reçoit une facture avec 240 $ de livraison, laissera un avis négatif. Et un modèle de langage qui lit les deux versions réduit sa confiance dans la marque.

**Décision recommandée (propriétaire) :**
> « Livraison, installation et démontage **inclus dans tous les forfaits de 1 195 $ et plus**, dans un rayon de 40 km de Sainte-Thérèse. Forfaits de moins de 1 195 $ et locations à la carte : livraison 100 $ (10 premiers km) + 7 $/km jusqu'à 40 km ; installation 50 $/h. Au-delà de 40 km et centre-ville de Montréal : prix sur mesure. Ramassage gratuit à l'entrepôt. »

**À faire :** une fois la décision prise, rechercher « livraison » dans tout le site (Divi : chercher dans chaque page, les modules globaux et la FAQ), dans la boutique Booqable (frais de livraison), dans les annonces Google, Meta et Microsoft, dans le fichier llms.txt et dans la fiche Google. Remplacer par la phrase unique ci-dessus. Mettre à jour les marqueurs [LIVRAISON] de landing-mariage.md et la note de landing-corporatif.md.

### 2. Annonce Google affichant « Learn more | » — P0 · PUB · 30 min · ★★★
**Problème :** une annonce Évenox (visible dans le Centre de transparence des annonces Google) affiche le préfixe anglais « Learn more | » devant un titre français. C'est probablement un élément généré automatiquement (titre ou texte d'appel à l'action automatique). Ça fait amateur, et la Loi 96 exige que le français soit nettement prédominant.
**À faire :**
1. Google Ads → Campagnes → Composantes → filtrer « Créées automatiquement » : supprimer tout élément en anglais.
2. Paramètres de compte → **Composantes automatiques** : désactiver « Titres dynamiques », « Descriptions dynamiques » et les **appels à l'action automatiques** pour toutes les campagnes en français.
3. Paramètres de campagne → **Langue** : « Français » seulement pour les campagnes en français (l'anglais dans des campagnes séparées, de qualité équivalente).
4. Vérifier dans l'Aperçu des annonces et le diagnostic (Outils → Aperçu et diagnostic des annonces), puis vérifier de nouveau dans le Centre de transparence 48 h plus tard.
5. Faire la même vérification dans Performance Max (si elle existe) et dans Microsoft Ads (composantes automatiques dans « Paramètres de compte »).

### 3. Bouton « Demande de Soumision » — P0 · WEB · 15 min · ★★
**À faire :** Divi → menu principal + tous les modules Bouton, puis Rechercher et remplacer (extension « Better Search Replace », essai à blanc d'abord) : `Soumision` → `Soumission`. Libellé recommandé du bouton de menu : **« Obtenir ma soumission »**. Vérifier aussi le texte des formulaires, les courriels de notification et la boutique Booqable.

### 4. Courriel au domaine — P0 · PROP + WEB · 2 h · ★★★
**Problème :** evenox.ca@gmail.com apparaît 49 fois sur la page d'accueil. Un acheteur corporatif ou un service des achats le perçoit comme une petite entreprise artisanale. C'est aussi un signal d'entité faible pour les moteurs et les modèles de langage.
**À faire :**
1. Google Workspace Business Starter (environ 8 $ par utilisateur par mois) sur evenox.ca, avec les adresses `info@`, `soumissions@` et `alexandre@`.
2. DNS : MX, **SPF** (`v=spf1 include:_spf.google.com ~all`, plus les autres services d'envoi : Twilio SendGrid, HubSpot), **DKIM** (activer dans la console d'administration) et **DMARC** (`v=DMARC1; p=none; rua=mailto:dmarc@evenox.ca`, puis passer à `quarantine` après 30 jours).
3. Transfert automatique de l'ancienne adresse Gmail vers info@ pendant 12 mois, avec une réponse automatique indiquant la nouvelle adresse.
4. Remplacer partout : site (rechercher et remplacer), schéma JSON-LD, fiche Google, Booqable, Facebook, WeddingWire, signatures, factures, llms.txt.

### 5. Faits cohérents — P0 · PROP + WEB · 1 h 30 · ★★★
**Problème :** les pages affichent tantôt 4,8, tantôt 4,9 étoiles ; tantôt 500+, tantôt 1 000+ événements ; un photobooth à 500 $ ou à 599 $ ; des chaises à 2 $ ou à 3 $. Les modèles de langage accordent moins de poids aux entités dont les faits se contredisent, et un client attentif perd confiance.
**À faire :**
1. Le propriétaire fixe **une seule valeur** pour chaque fait, dans une « fiche de faits » (Google Doc) : note Google réelle et nombre d'avis (date de mise à jour), nombre d'événements vérifiable (registre Booqable ou factures), année de fondation (2022), adresse, téléphone, zone desservie, prix d'entrée de chaque gamme.
2. Rechercher dans le site : `4.9`, `4,9`, `500+`, `500 `, `1000`, `1 000`, `599`, `500 $` et corriger.
3. Remplacer les chiffres « en dur » qui changent (nombre d'avis) par un module global Divi, modifié à un seul endroit.
4. Mettre à jour llms.txt, la fiche Google, WeddingWire, Facebook et les annonces.

### 6. Compteurs « 0+ » — P0 · WEB · 30 min · ★★
**Problème :** les compteurs animés (module Number Counter de Divi) s'affichent « 0+ Événements » dans le texte lu par les robots (et dans llms.txt).
**À faire :** remplacer chaque Number Counter par un module **Texte** statique (« 1 000+ événements », selon la valeur choisie au point 5). Une animation CSS peut être conservée, à condition que le chiffre final soit écrit dans le HTML. Vérifier avec `curl -s https://evenox.ca | grep -i "événements"` et dans l'outil d'inspection d'URL de la Search Console.

### 7. Témoignages identiques et témoignages à vérifier — P0 · PROP + WEB · 45 min · ★★★
**Problème :** sur la page d'accueil, les témoignages de « Jean P. » et de « France R. » ont **exactement le même texte**. De plus, les 3 témoignages de `/mariage/` (Sophie & Marc, Amélie & Jonathan, Camille & David) n'ont pas de source visible. Des témoignages qui ressemblent à des gabarits détruisent la confiance et peuvent constituer une représentation trompeuse (Loi sur la protection du consommateur, art. 219 ; Loi sur la concurrence).
**À faire :** retirer le doublon. Pour chaque témoignage conservé, garder la preuve (capture de l'avis Google ou courriel du client avec son autorisation). Remplacer par de vrais avis Google cités mot pour mot, avec prénom, initiale, type d'événement et ville. Retirer tout témoignage sans source.

### 8. Forfaits photobooth présentés comme « forfaits mariage » — P0 · PROP + WEB · 1 h · ★★
**Problème :** `/mariage/` présente « Nos forfaits mariage : Essentiel 599 $ / Premium 999 $ / Royal sur mesure ». Ce sont en réalité des forfaits **photobooth**. Les forfaits mariage réels (`/forfaits-mariage/`) sont Décor WOW 899 $ / Soirée Signature 1 449 $ / Mariage Signature 1 899 $. De plus :
- photobooth classique : « 3 h = 599 $ » sur `/mariage/` vs « 2 h = 599 $, 3 h = 799 $ » dans la FAQ ;
- vidéobooth 360 : « dès 599 $ » sur `/forfaits-mariage/` vs « 799 $ (2 h) » dans la FAQ.

**À faire :** sur `/mariage/`, renommer la section « Photobooth pour votre mariage », fixer les durées et les prix d'entrée (une seule grille), et ajouter au-dessus les 3 forfaits mariage réels (899 / 1 449 / 1 899 $), le forfait du milieu marqué « le plus populaire ». Mettre à jour la FAQ, WeddingWire et la boutique.

### 9. Bannière de consentement Loi 25 — P0 · WEB · 3 h · ★★★
**Problème :** GA4, le pixel Meta et TikTok se chargent avec la WP Consent API, mais `consent_type` est vide : on ne sait pas si les traceurs sont bloqués avant le consentement. Les amendes peuvent atteindre 25 M$ ou 4 % du chiffre d'affaires mondial, et les 300 $/jour reposent sur ces signaux.
**À faire :** suivre tracking-setup.md, section 1 (Complianz ou CookieYes, opt-in, « Tout refuser » aussi visible que « Tout accepter », Consent Mode v2 en mode avancé). Retirer TikTok s'il n'est pas utilisé.

### 10. Vérification de l'annonceur Google Ads — P0 · PROP · 30 min (+ 3 à 10 jours de délai Google) · ★★
**Problème :** les annonces affichent « Payé par Alexandre Séguin » (vérification au nom d'une personne) au lieu d'Évenox inc. Pour un acheteur corporatif qui clique sur « Mon Centre des annonces », c'est un signal de très petite entreprise, et la marque n'est pas associée aux annonces.
**À faire :**
1. Google Ads → Facturation → Paramètres → **Profil de paiement** : vérifier que le type est **« Organisation »** au nom légal **Évenox inc.**, avec l'adresse du 215, boul. René-A.-Robert. Si le profil est « Individuel », il n'est pas possible de le convertir : créer un nouveau profil de paiement « Organisation » et y associer le compte.
2. Outils → Facturation → **Vérification de l'annonceur** : refaire la vérification comme organisation (documents : certificat d'immatriculation au REQ avec le NEQ, plus une pièce d'identité du représentant).
3. Si la vérification est déjà terminée sous le nom personnel, contacter le soutien Google Ads (clavardage) pour demander la mise à jour du nom affiché vers Évenox inc.
4. Faire la même chose dans Microsoft Ads (vérification de l'annonceur) et utiliser le nom légal identique dans OpenAI Ads Manager.

### 11. ChatGPT Ads : consentement et traduction automatique — P0 · PUB · 30 min · ★★★
**Problème 1 :** le pixel OpenAI considère le consentement comme **accordé par défaut** (témoins `__oppref` de 30 jours et `__obref` de 365 jours, correspondance avancée automatique).
**À faire :** appeler `oaiq("consent", false)` **avant** `oaiq("init")`, et passer à `true` seulement à l'acceptation de la catégorie Marketing (voir tracking-setup.md, section 6).
**Problème 2 :** l'option de « personnalisation du texte » (variantes et **traductions** générées par l'IA, diffusées sans approbation) serait activée par défaut dans Ads Manager.
**À faire :** la désactiver **dans chaque campagne** (Paramètres avancés). Vérifier aussi que `OAI-AdsBot` n'est pas bloqué par robots.txt ou par le pare-feu.

### 12. Page Facebook d'entreprise — P1 · PROP · 2 h · ★★★
**Problème :** le schéma `sameAs` pointe vers `facebook.com/people/…`, un profil personnel. Il est impossible d'y installer correctement le pixel ou la CAPI, de lancer des formulaires instantanés au nom de l'entreprise ou d'y recueillir des avis.
**À faire :**
1. Créer une Page « Évenox » (catégorie : Service de location d'équipement pour fêtes / Planificateur d'événements), dans un **portefeuille Business Meta** au nom d'Évenox inc.
2. Ajouter l'adresse, le téléphone, info@evenox.ca, le site, l'horaire, la zone desservie, et activer les **recommandations** (avis).
3. Publier 9 photos réelles (3 corporatifs, 3 mariages, 3 installations) avant de lancer les annonces.
4. Inviter les contacts du profil personnel à aimer la Page. Afficher sur le profil personnel le lien vers la Page.
5. Remplacer l'URL dans le schéma `sameAs`, dans le pied de page du site et sur WeddingWire.
6. Vérifier le domaine evenox.ca dans le gestionnaire Business (enregistrement DNS TXT).

### 13. Langue `fr-CA` — P1 · WEB · 15 min · ★
**À faire :** WordPress → Réglages → Général → Langue du site = **Français du Canada**. Vérifier `<html lang="fr-CA">`. Dans Yoast et dans le schéma personnalisé, remplacer `"inLanguage": "fr-FR"` par `"fr-CA"`. Vérifier la balise Open Graph `og:locale` = `fr_CA`.

### 14. Schéma : aggregateRating, Review, FAQPage, Offer — P1 · WEB · 3 h · ★★
**À faire :**
- `LocalBusiness` (type `EventPlanner` ou `LocalBusiness`, avec `additionalType` « party equipment rental ») : NAP identique à la fiche Google, `areaServed` (Sainte-Thérèse, Blainville, Laval, Montréal…), `priceRange` « $$ », `sameAs` (Page Facebook, fiche Google, WeddingWire, Yelp).
- `aggregateRating` : **seulement avec des avis réels affichés sur la page**, et des valeurs identiques au point 5. Google n'affiche pas d'étoiles pour les avis « auto-proclamés » d'une entreprise locale, mais les modèles de langage lisent ces données. Ne jamais gonfler les chiffres.
- `Review` : 3 à 5 avis réels présents sur la page.
- `FAQPage` sur chaque page de service indexée (party de bureau, gala, mariage, forfaits), avec les mêmes questions que la FAQ visible.
- `Offer` pour chaque forfait (nom, prix, `priceCurrency` CAD, `availability`).
- Valider avec le test des résultats enrichis et le validateur schema.org.

### 15. Politique d'annulation contradictoire — P1 · PROP + WEB · 30 min · ★★
**Problème :** la FAQ indique « 14 jours ou plus avant : 100 % du dépôt en crédit » **et** « moins de 14 jours avant : 100 % du dépôt en crédit » (la même règle deux fois). Ailleurs, la règle est « rien à moins de 7 jours ».
**À faire :** le propriétaire fixe les 3 paliers (par exemple : 14 jours ou plus = crédit de 100 % ; de 8 à 13 jours = crédit de 50 % ; 7 jours ou moins = commande finale) et les applique à la FAQ, à la politique d'annulation, au contrat Booqable et aux pages d'atterrissage.

### 16. « 100 % clé en main » vs « installation seulement si au contrat » — P1 · PROP + WEB · 45 min · ★★
**Problème :** `/mariage/` promet « 100 % clé en main » alors que la FAQ dit que l'installation est facturée 50 $/h si elle n'est pas au contrat.
**À faire :** après la décision du point 1, écrire une phrase unique (« Les forfaits incluent l'installation et le démontage ; les locations à la carte n'incluent l'installation que sur demande, à 50 $/h »), et l'appliquer partout.

### 17. Bing Places + Bing Webmaster Tools — P1 · ADJ · 1 h 30 · ★★
**Pourquoi :** Bing alimente Copilot et une partie des réponses de ChatGPT ; Bing représente environ 10 % des recherches au Canada.
**À faire :**
1. bingplaces.com → « Importer depuis Google Business Profile » → vérifier. Catégories : Location d'équipement pour fêtes, Location d'équipement pour événements. Photos, horaire, description en français.
2. Bing Webmaster Tools → importer depuis la Search Console → soumettre le sitemap → activer **IndexNow** (Yoast ou l'extension IndexNow) → consulter le rapport « AI Performance » chaque mois.

### 18. WeddingWire — P1 · ADJ · 1 h + collecte d'avis · ★★
**Problème :** la fiche WeddingWire.ca indique « Laval » et compte 0 avis (Omega Design en compte 263, avec une note de 5,0). Les annuaires de mariage obtiennent environ 73 % des citations des IA pour les requêtes de mariage.
**À faire :** corriger l'adresse (215, boul. René-A.-Robert, local 100, Sainte-Thérèse), le téléphone, info@evenox.ca, les forfaits (899 / 1 449 / 1 899 $) et 15 photos réelles. Envoyer la demande d'avis WeddingWire à tous les couples des 12 derniers mois (outil « Demander des avis » de WeddingWire). Objectif : 10 avis en 60 jours.

### 19. Yelp — P1 · ADJ · 1 h · ★★
**Pourquoi :** Yelp est un partenaire de données sous licence de ChatGPT pour les recherches locales. Il apparaît dans environ 80 % de ses réponses locales.
**À faire :** biz.yelp.ca → réclamer ou créer la fiche, catégories « Party Equipment Rentals » et « Event Planning & Services », adresse identique, photos, horaire, description en français. Ajouter le lien Yelp dans le courriel post-événement des clients corporatifs (sans demander explicitement d'avis : Yelp l'interdit ; dire « Vous nous trouverez aussi sur Yelp »).

### 20. Three Best Rated — P1 · ADJ · 45 min · ★★
**Pourquoi :** ce site représente environ 24 % des citations d'annuaires dans ChatGPT. Pour Laval, il liste Abris Crystal, Diva et Glam, mais pas Évenox.
**À faire :** threebestrated.ca → « Nominate a business » / « Add your business » pour « Event Rental » à **Laval**, **Montréal** et la ville la plus proche disponible pour la Rive-Nord (Blainville, Terrebonne ou Saint-Jérôme). Le classement repose sur les avis, l'historique, les plaintes et la note : augmenter les avis Google d'abord (de 52 à 100 et plus).

### 21. Responsable de la protection des renseignements personnels — P1 · PROP + WEB · 30 min · ★★
**À faire :** dans la politique de confidentialité et dans le pied de page : « Responsable de la protection des renseignements personnels : Alexandre Séguin, président — info@evenox.ca — 514-559-1893 ». Par défaut, c'est la personne ayant la plus haute autorité dans l'entreprise, et ses coordonnées doivent être publiées (Loi 25).

### 22. Pages de villes uniques — P2 · WEB + PROP · 2 h par page · ★★
**Problème :** 6 villes × 4 services utilisent un texte quasi identique où seul le nom de la ville change (risque de « pages satellites » pour Google, et aucune preuve locale).
**À faire :** garder d'abord les 6 pages les plus utiles (Laval, Blainville, Sainte-Thérèse/Rive-Nord, Terrebonne, Montréal, Mirabel) et rediriger (301) ou désindexer les autres. Ajouter à chaque page conservée : 2 ou 3 salles ou lieux réellement desservis dans la ville, 3 photos d'événements dans cette ville, 1 avis client de la ville, le délai et le coût de livraison réels depuis Sainte-Thérèse, une FAQ locale de 3 questions.

### 23. Positionnement de la boutique Booqable — P2 · PROP + WEB · 2 h · ★★
**Problème :** la boutique met en avant les jeux gonflables pour enfants (Pat Patrouille, princesses, Spiderman). Un acheteur corporatif ou un modèle de langage en déduit qu'Évenox est un loueur pour fêtes d'enfants à petit prix, alors que le site se présente comme clé en main et haut de gamme.
**À faire :** créer dans Booqable des collections « Corporatif », « Mariage » et « Fêtes d'enfants », et placer Corporatif et Mariage en premier sur la page d'accueil de la boutique. Retirer les gonflables pour enfants des pages corporatives et mariage du site. Envisager un sous-domaine ou une section « Fêtes d'enfants » séparée.

### 24. Distinguer Évenox d'Evenko — P2 · WEB · 1 h · ★
**À faire :** écrire toujours « Évenox » (avec l'accent) dans les titres, et ajouter « Évenox inc., location d'équipement événementiel à Sainte-Thérèse » à la première ligne de la page À propos. Afficher le NEQ, l'année de fondation (2022) et le nom du fondateur. Dans le schéma : `legalName` « Évenox inc. », `alternateName` « Evenox », `foundingDate` 2022-07, `founder` Alexandre Séguin.

### 25. Délai de réservation mariage contradictoire — P2 · WEB · 15 min · ★
**Problème :** `/mariage/` recommande de réserver de 3 à 6 mois d'avance ; `/forfaits-mariage/` recommande de 6 à 12 mois.
**À faire :** utiliser partout « de 6 à 12 mois pour un samedi de juillet à octobre (haute saison), quelques mois pour une date hors saison ». Selon l'ISQ (2025), 54 % des mariages ont lieu de juillet à octobre.

---

## Suivi

| # | Statut | Date de fin | Vérifié par |
|---|---|---|---|
| 1 à 11 (P0) | ☐ | | |
| 12 à 21 (P1) | ☐ | | |
| 22 à 25 (P2) | ☐ | | |
