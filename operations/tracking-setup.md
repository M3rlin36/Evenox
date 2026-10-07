# Mise en place du suivi — liste de contrôle (avant de dépenser le 1er dollar)

> Budget publicitaire : 300 $/jour (environ 9 100 $/mois). Sans mesure des leads **qualifiés** et des **dépôts**, les algorithmes vont optimiser pour les petits leads.
> Ordre de travail : 1) consentement → 2) GTM + GA4 → 3) Google Ads → 4) Meta → 5) Microsoft → 6) OpenAI → 7) suivi d'appels → 8) CRM et import hors ligne → 9) tableau de bord.
> Responsable suggéré : gestionnaire de publicité (ou pigiste GTM). Temps total : 2 à 3 jours de travail.

---

## 1. Bannière de consentement (Loi 25 + Consent Mode v2, mode avancé)

**Outil :** Complianz (extension WordPress, compatible avec la WP Consent API déjà présente sur le site et certifiée comme plateforme de gestion du consentement par Google) ou CookieYes. Configurer la région **Québec / Canada : opt-in**.

☐ La bannière s'affiche **avant** tout traceur non essentiel.
☐ Les boutons **« Tout refuser »** et **« Tout accepter »** ont la même taille, la même couleur et le même niveau. Un bouton « Personnaliser » donne accès aux catégories.
☐ Catégories : Essentiels (toujours actifs) · Statistiques (GA4) · Marketing (Google Ads, Meta, Microsoft, OpenAI). Aucune case précochée.
☐ Texte de la bannière (français) :
> **Votre vie privée, vos choix.** Nous utilisons des témoins essentiels au fonctionnement du site. Avec votre accord, nous utilisons aussi des témoins de statistiques et de publicité (Google, Meta, Microsoft, OpenAI) pour mesurer nos visites et l'efficacité de nos publicités. Vous pouvez changer d'avis en tout temps avec le lien « Gérer mes témoins » au bas de chaque page. [Politique de confidentialité]
> [Tout refuser] [Personnaliser] [Tout accepter]

☐ Le lien « Gérer mes témoins » est présent dans le pied de page de toutes les pages, y compris les pages d'atterrissage.
☐ Le registre des consentements est activé (date, choix, version de la bannière) et conservé 2 ans au minimum.
☐ La politique de confidentialité nomme le responsable de la protection des renseignements personnels (titre et coordonnées), énumère les outils (Google, Meta, Microsoft, OpenAI, HubSpot, Twilio, Booqable, CallRail) et indique que des données peuvent être communiquées hors du Québec.

### Consent Mode v2 : valeurs par défaut (avant GTM, dans le `<head>`)
```html
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 500
});
gtag('set', 'ads_data_redaction', true);
gtag('set', 'url_passthrough', true);
</script>
```
- **Mode avancé :** les balises Google se chargent, mais envoient seulement des signaux sans témoins tant que le consentement est refusé. Google modélise ensuite les conversions manquantes.
- La plateforme de consentement envoie `gtag('consent','update',{...:'granted'})` quand la personne accepte.
- **Meta, Microsoft UET et OpenAI** ne se déclenchent **qu'après l'acceptation** de la catégorie Marketing (déclencheur GTM « Consentement marketing accordé »). Voir les sections 4 à 6 pour leur commande de consentement.
- Vérification : dans Tag Assistant, refuser, puis vérifier qu'aucun témoin `_ga`, `_gcl_*`, `_fbp`, `_uetsid`, `__oppref` ou `__obref` n'est créé. Accepter, puis vérifier qu'ils apparaissent.

> Faire valider la configuration par un juriste (la position sur les signaux sans témoins du mode avancé doit être documentée dans la politique de confidentialité).

---

## 2. Google Tag Manager + GA4

☐ Un seul conteneur GTM sur tout le site (retirer les codes gtag, Meta et TikTok codés en dur dans le thème ou les extensions, pour éviter les doublons).
☐ Propriété GA4 : fuseau horaire America/Toronto, devise CAD, conservation des données 14 mois, Google Signals **désactivé** tant que la validation juridique n'est pas faite.
☐ Domaines croisés : `evenox.ca` + `evenox.booqableshop.com` (Admin → Flux de données → Configurer les domaines).
☐ Exclure le trafic interne (adresse IP de l'entrepôt et du bureau).
☐ Associer GA4 à Google Ads et à la Search Console.

### Événements GA4

| Événement | Déclencheur | Paramètres | Événement clé? |
|---|---|---|---|
| `form_start` | Première interaction avec le formulaire | `form_id`, `page` | Non |
| `form_step` | Chaque étape validée | `step` (1–5), `event_type` | Non |
| `generate_lead` | Tout envoi (`lead_submit`) | `lead_route`, `event_type`, `budget_band`, `value` | Non (mesure du volume) |
| `lead_qualifie` | `lead_submit` avec route A ou B | `lead_route`, `value`, `currency` | **Oui** |
| `lead_prioritaire` | Route A | `value` | Oui |
| `lead_non_qualifie` | Route C ou D | `lead_route` | Non |
| `click_tel` | Clic sur un lien `tel:` | `link_location` (hero, barre collante, pied de page) | Oui |
| `click_sms` | Clic sur un lien `sms:` | `link_location` | Non |
| `click_boutique` | Clic vers booqableshop.com | `link_location` | Non |
| `appel_reserve` | Webhook Calendly → Measurement Protocol, ou page de confirmation Calendly | `event_type` | Oui |
| `purchase` | Commande Booqable (intégration GA4 de Booqable ou balise de la page de confirmation) | `value`, `transaction_id` | Oui |
| `depot_paye` | Importé du CRM (Measurement Protocol) | `value`, `lead_id` | Oui |

☐ Dimensions personnalisées : `lead_route`, `event_type`, `budget_band`, `link_location`.
☐ Canal personnalisé « IA conversationnelle » : source correspondant à `chatgpt|openai|copilot|perplexity|gemini|claude` (inclut `utm_source=chatgpt.com`, ajouté automatiquement par ChatGPT à ses liens organiques).

---

## 3. Google Ads : conversions

| Action de conversion | Source | Rôle | Valeur | Comptage | Fenêtre |
|---|---|---|---|---|---|
| **lead_qualifie** | Balise Google Ads (GTM) sur `lead_submit` avec route A ou B + **conversions améliorées** | **Principale** (enchères) | A = 400 $, B = 150 $ (provisoire) | Une | Clic 30 j, vue 1 j |
| **lead_tous** | Balise sur `lead_submit` (toutes les routes) | Secondaire (observation) | 0 | Une | 30 j |
| **appel_60s** | Composante d'appel (numéro de transfert Google) + appels depuis le site, durée de **60 s ou plus** | Secondaire pendant 30 jours, puis **principale** si au moins 50 % des appels écoutés sont qualifiés | 150 $ | Une | 30 j |
| **depot_paye** | **Conversions améliorées pour les leads** (import hors ligne : gclid + courriel et téléphone hachés) | Principale à partir de la phase 2 | Montant total de la commande | Une | 90 j |
| booqable_achat | Importé de GA4 (`purchase`) | Secondaire | Valeur de la commande | Toutes | 30 j |

☐ Activer les **conversions améliorées pour les leads** (Objectifs → Paramètres → Conversions améliorées → « Leads » → méthode Google Tag Manager). Les données utilisateur (courriel, téléphone) sont poussées dans le dataLayer **seulement si `consent_mesure` = oui** (voir formulaire-qualification.md).
☐ Activer le marquage automatique (gclid) et vérifier que le gclid survit jusqu'au formulaire (test avec `?gclid=TEST123`).
☐ Modèle de suivi au niveau du compte : `{lpurl}?utm_source=google&utm_medium=cpc&utm_campaign={_campagne}&utm_content={creative}&utm_term={keyword}`. Définir le paramètre personnalisé `{_campagne}` par campagne (voir la section 7).

### Import hors ligne des dépôts (conversions améliorées pour les leads)
Depuis le 15 juin 2026, les téléversements par API passent par la Data Manager API. Pour Évenox, le plus simple est le **téléversement planifié depuis Google Sheets** :
1. Google Ads → Objectifs → Conversions → Téléversements → **Planifier** → Source « Google Sheets » → modèle « Conversions hors ligne avec conversions améliorées pour les leads ».
2. Colonnes : `Google Click ID` · `Email` (minuscules, sans espaces, haché SHA-256) · `Phone Number` (format E.164 +1514…, haché SHA-256) · `Conversion Name` = depot_paye · `Conversion Time` (`2026-11-14 15:30:00-05:00`) · `Conversion Value` · `Conversion Currency` = CAD.
3. Le CRM (Sheets ou HubSpot) ajoute une ligne **quand l'étape passe à « Dépôt payé »**, seulement si `consent_mesure` = oui **ou** si un gclid est présent (dans ce cas, envoyer le gclid sans données hachées).
4. Fréquence : quotidienne. Délai maximal : 90 jours après le clic.
5. Ajouter aussi `lead_qualifie_confirme` (étape « Qualifié » après l'appel) si l'on veut un signal plus fiable que le formulaire : à évaluer après 60 jours.

**Plan d'enchères :**
- Phase 1 (jours 0 à 30) : Maximiser les conversions, conversion principale = `lead_qualifie`.
- Phase 2 (après au moins 30 `lead_qualifie` en 30 jours) : CPA cible = CPA réel × 1,1.
- Phase 3 (au moins 15 `depot_paye` par mois) : Maximiser la valeur de conversion, principales = `lead_qualifie` + `depot_paye`.

---

## 4. Meta : pixel + API Conversions (CAPI)

☐ Créer le portefeuille Business et la **Page Facebook d'entreprise** (voir correctifs-urgents.md), puis vérifier le domaine `evenox.ca`.
☐ Pixel chargé par GTM **seulement après le consentement Marketing**. Avant l'initialisation : `fbq('consent','revoke')`. À l'acceptation : `fbq('consent','grant')`.
☐ Événements :
- `PageView` (après consentement)
- `Lead` = lead **qualifié seulement** (routes A et B), avec `value`, `currency: 'CAD'`, `lead_route` et **`eventID` = `event_id` du formulaire**
- `LeadTous` (personnalisé) = tous les envois (non optimisé)
- `Schedule` = appel réservé
☐ **CAPI** : envoyer les mêmes événements côté serveur (Make → requête HTTP vers `graph.facebook.com/v{version}/{PIXEL_ID}/events`, ou GTM serveur via Stape), avec le **même `event_id`** pour la déduplication. Envoyer `em` et `ph` hachés **seulement si `consent_mesure` = oui**. Toujours envoyer `client_ip_address`, `client_user_agent` et `fbc` (reconstitué à partir du `fbclid`) si le consentement Marketing est accordé.
☐ Formulaires instantanés (Meta Leads) : type « **Intention plus élevée** » (écran de vérification), avec 3 questions identiques au formulaire du site (type d'événement, nombre d'invités, budget en fourchettes), le texte des consentements et le lien vers la politique de confidentialité.
☐ **Leads de conversion** : connecter le CRM (HubSpot gratuit possède une intégration Meta Lead Ads) et renvoyer par CAPI les étapes `lead_qualifie` et `depot_paye` avec le `lead_id` de Meta. Après au moins 200 leads par mois, passer à l'objectif d'optimisation « Leads de conversion ».
☐ Gestionnaire d'événements → Tester les événements : score de qualité de la correspondance des événements visé de 6 ou plus pour `Lead`.

---

## 5. Microsoft Ads : balise UET

☐ Créer la balise UET, l'installer par GTM (modèle officiel) et activer le **mode de consentement UET** :
```js
window.uetq = window.uetq || [];
window.uetq.push('consent', 'default', { ad_storage: 'denied' });
// À l'acceptation (déclencheur de la plateforme de consentement) :
window.uetq.push('consent', 'update', { ad_storage: 'granted' });
```
☐ Objectifs : `lead_qualifie` (événement personnalisé, action = lead_qualifie, valeur variable) = **principal** · `lead_tous` = secondaire · `click_tel` = secondaire.
☐ Activer les conversions améliorées (courriel et téléphone hachés, seulement si `consent_mesure` = oui).
☐ Marquage automatique `msclkid` : **activé**. Le `msclkid` est stocké dans le champ caché du formulaire.
☐ Conversions hors ligne : importer `depot_paye` (msclkid + heure + valeur) chaque semaine par fichier CSV ou Google Sheets.
☐ Lors de l'importation des campagnes de Google : **ne pas importer** les objectifs Google. Recréer les objectifs UET ci-dessus.
☐ Ajouter une composante de logo (nécessaire pour être diffusé dans Copilot ; les campagnes y sont inscrites automatiquement).

---

## 6. OpenAI (ChatGPT Ads) : pixel + API Conversions

**Important :** le pixel OpenAI considère le consentement comme **accordé par défaut**. Pour la Loi 25, il faut appeler `oaiq("consent", false)` **avant** `oaiq("init")`, ou ne charger le pixel qu'après l'acceptation.

☐ Ads Manager (ads.openai.com) : compte au nom légal **Évenox inc.**, adresse identique aux documents d'immatriculation, pays Canada et devise CAD (ces réglages sont permanents).
☐ Pixel installé par GTM (balise HTML personnalisée), en copiant **le code officiel fourni par Ads Manager** et en respectant cet ordre :
```html
<script>
  // 1) File d'attente : copier le chargeur officiel d'Ads Manager (bzrcdn.openai.com)
  // 2) Refuser le consentement AVANT l'initialisation
  oaiq("consent", false);
  oaiq("init", "PIXEL_ID");          // remplacer par l'identifiant du pixel
  oaiq("measure", "page_viewed");
</script>
```
```js
// Déclencheur : la plateforme de consentement accepte la catégorie Marketing
oaiq("consent", true);
// Déclencheur : lead_submit avec route A ou B
oaiq("measure", "lead_created", { event_id: "{{event_id}}", value: 400, currency: "CAD" });
// Déclencheur : appel_reserve
oaiq("measure", "appointment_scheduled", { event_id: "{{event_id}}" });
```
> Vérifier la signature exacte des paramètres dans developers.openai.com/ads/measurement-pixel le jour de l'installation.

☐ **API Conversions** : `POST https://bzr.openai.com/v1/events?pid=<PIXEL_ID>` (jeton d'API en en-tête), envoyé depuis Make pour `lead_created` (routes A et B) et `order_created` (dépôt payé), avec le **même `event_id`** que le pixel pour la déduplication. Joindre l'identifiant de clic `oppref` (champ caché). Ajouter le courriel et le téléphone hachés seulement si `consent_mesure` = oui. Délai maximal : 7 jours.
☐ Correspondance avancée automatique : **la désactiver** tant que le consentement n'est pas accordé (réglage du pixel).
☐ Campagne : **désactiver la « personnalisation du texte » (traduction et variantes générées par l'IA)**, campagne par campagne, dans Paramètres avancés. Sinon, des versions anglaises non approuvées pourraient être diffusées au Québec (Loi 96).
☐ Robots : autoriser `OAI-AdsBot` et `OAI-SearchBot` dans robots.txt et dans le pare-feu (Cloudflare ou extension de sécurité WordPress). Sinon, les annonces sont refusées.
☐ Ciblage : Canada → province de Québec (pas de ciblage par ville ni par rayon au Canada). Budget minimal de 25 $ CA par jour et par campagne.
☐ Liens : `?utm_source=chatgpt&utm_medium=cpc&utm_campaign=chatgpt_corpo_fetes` (les clics ChatGPT apparaissent souvent comme du trafic « Direct » dans GA4 : comparer les clics de la plateforme aux sessions GA4 dès la première semaine).

---

## 7. Conventions UTM (obligatoires sur toutes les URL finales)

Format : tout en minuscules, sans accents, mots séparés par `_`.

| Paramètre | Valeurs permises |
|---|---|
| `utm_source` | `google` · `bing` · `meta` · `chatgpt` · `courriel` · `sms` · `gbp` (fiche Google) · `weddingwire` · `yelp` |
| `utm_medium` | `cpc` · `paid_social` · `email` · `sms` · `referral` · `organic_local` |
| `utm_campaign` | `{plateforme}_{segment}_{theme}` → `gads_corpo_fetes`, `gads_corpo_5a7`, `gads_mariage_deco`, `gads_marque`, `meta_corpo_fetes`, `meta_mariage_deco`, `msft_corpo`, `chatgpt_corpo_fetes`, `chatgpt_mariage` |
| `utm_content` | `{format}_{angle}_{version}` → `rsa_prixfixe_v1`, `reel_avantapres_v2`, `card_dates_dec_v1` |
| `utm_term` | `{keyword}` (Google et Microsoft) ; vide ailleurs |

Fiche Google Business : lien du site web = `https://evenox.ca/?utm_source=gbp&utm_medium=organic_local&utm_campaign=fiche`.

---

## 8. Suivi des appels

☐ **CallRail** (ou un équivalent offrant des numéros locaux 514 et 450, l'insertion dynamique de numéros et l'intégration Google Ads et GA4) :
- Insertion dynamique de numéros : un bassin de 4 numéros pour les visiteurs payants (google, bing, meta, chatgpt) et 1 numéro fixe pour la fiche Google et le trafic organique.
- Transfert vers le cellulaire de garde, puis la relève après 20 secondes.
- Message d'accueil : « Bienvenue chez Évenox. Cet appel peut être enregistré à des fins de qualité. »
- **Texto automatique en cas d'appel manqué** (texte dans suivi-leads.md, section 2.6).
- Intégrations : Google Ads (`appel_60s`), GA4 (`phone_call` avec la durée), HubSpot (création du contact et de l'appel).
☐ Composantes d'appel Google Ads : numéro de transfert Google activé, conversion « Appels depuis annonces » si la durée est de 60 s ou plus.
☐ **Garder le numéro principal 514-559-1893 sur la fiche Google** et dans le schéma (cohérence des coordonnées). Les numéros de suivi ne s'affichent qu'aux visiteurs payants, par insertion dynamique.

---

## 9. Pipeline CRM (Google Sheets ou HubSpot gratuit)

### Étapes du pipeline « Événements »

| # | Étape | Définition (critère d'entrée) | Action automatique |
|---|---|---|---|
| 1 | Nouveau | Formulaire, appel, texto ou lead Meta reçu | Texto et courriel J0 ; alerte à la personne de garde |
| 2 | Contacté | Conversation de vive voix ou échange écrit à double sens | — |
| 3 | Qualifié | Appel de 6 étapes fait ; budget ≥ 1 000 $ confirmé ; date libre | Tâche « Proposition aujourd'hui » |
| 4 | Proposition envoyée | 3 options envoyées | Cadence J1/J3/J5-7/J14/J30 |
| 5 | Négociation | La personne répond, pose des questions ou demande un ajustement | — |
| 6 | **Dépôt payé (gagné)** | Dépôt de 20 % reçu ou bon de commande signé | Ligne d'import hors ligne (Google, Microsoft), CAPI Meta et OpenAI (`order_created`) |
| 7 | Événement livré | Après l'installation | Demande d'avis le lendemain |
| 8 | Avis obtenu | Avis publié | — |
| — | Perdu | Raison obligatoire : prix · concurrent (lequel) · date · sans réponse · projet annulé | — |
| — | Disqualifié | Raison : budget < seuil · hors zone · hors catalogue · pourriel | Courriel vers la boutique |

### Colonnes de la feuille Google « Pipeline » (si pas de HubSpot)
`lead_id` · `date_heure_reception` · `date_heure_1er_contact` · `delai_min` (formule) · `prenom` · `nom` · `courriel` · `telephone` · `entreprise` · `type_client` · `type_evenement` · `date_evenement` · `ville` · `nb_invites` · `budget_declare` · `route` · `lead_score` · `etape` · `raison_perte` · `forfait_propose` · `montant_propose` · `montant_gagne` · `date_depot` · `utm_source` · `utm_medium` · `utm_campaign` · `utm_content` · `utm_term` · `gclid` · `msclkid` · `fbclid` · `oppref` · `event_id` · `consent_marketing` · `consent_mesure` · `date_consentement` · `desabonne` · `conseiller` · `notes`

Validation des données : listes déroulantes pour `etape`, `route` et `raison_perte`. Mise en forme conditionnelle : ligne en rouge si `delai_min` > 15 pour les routes A et B.

### HubSpot gratuit (option recommandée dès 30 leads par mois)
- Propriétés personnalisées de contact et de transaction : mêmes noms que les colonnes ci-dessus.
- Pipeline de transactions avec les étapes 1 à 8 ; probabilités : 10 / 20 / 40 / 50 / 70 / 100 / 100 / 100 %.
- Formulaires externes : le webhook Make crée le contact et la transaction.
- Intégration Meta Lead Ads (gratuite) pour les formulaires instantanés.

---

## 10. Tableau de bord hebdomadaire des indicateurs (Looker Studio : GA4 + Google Ads + Sheets/HubSpot)

**Revue : chaque lundi à 9 h, 30 minutes, avec le propriétaire et le gestionnaire de publicité.**

| Indicateur | Définition exacte | Source | Cible de départ (à ajuster après 60 jours) |
|---|---|---|---|
| Dépenses | Total par plateforme (Google, Meta, Microsoft, OpenAI) | Plateformes | 2 100 $/semaine |
| Leads (tous) | Envois de formulaire valides + appels de 60 s ou plus + leads Meta | CRM | — |
| **Leads qualifiés (LQ)** | Leads des routes A et B + appels qualifiés | CRM | 25 ou plus par semaine |
| % qualifiés | LQ / leads (tous) | CRM | 50 % ou plus |
| CPL | Dépenses / leads (tous) | Calcul | 40 à 90 $ (mariage), 60 à 120 $ (corporatif) |
| **Coût par LQ** | Dépenses / LQ | Calcul | Moins de 120 $ |
| Délai de réponse médian | Médiane de `delai_min`, routes A et B, heures d'ouverture | CRM | 5 minutes au maximum |
| Taux de contact | LQ ayant atteint « Contacté » en moins de 24 h / LQ | CRM | 70 % ou plus |
| Taux de proposition | Propositions envoyées / LQ | CRM | 80 % ou plus |
| **Taux de conclusion** | Dépôts payés / propositions (cohorte du mois) | CRM | 20 à 25 % |
| Dépôts payés | Nombre et valeur totale des commandes | CRM | 6 ou plus par semaine |
| Panier moyen | Montant gagné / dépôts | CRM | 1 800 $ ou plus |
| **CAC** | Dépenses / dépôts payés | Calcul | Moins de 600 $ |
| **ROAS** | Montant gagné / dépenses (par cohorte de mois de création du lead) | Calcul | 3 ou plus |
| Répartition par segment | LQ, dépôts et ROAS : corporatif / mariage / privé | CRM | Corporatif ≥ 50 % de la valeur |
| Taux de conversion des pages | Leads / sessions par page d'atterrissage | GA4 | 5 % ou plus |
| Abandon du formulaire | 1 − (envois / `form_start`), par étape | GA4 | Moins de 50 % |
| Avis Google | Nouveaux avis cette semaine ; note moyenne | Fiche Google | 3 ou plus par semaine |
| Références d'IA | Sessions du canal « IA conversationnelle » ; leads de ce canal | GA4 + CRM | Tendance à la hausse |

**Règles de décision hebdomadaires :**
- Une campagne avec un coût par LQ supérieur à 2 fois la cible pendant 2 semaines (et au moins 300 $ dépensés) : réduire son budget de 30 % et vérifier les termes de recherche.
- % qualifiés sous 35 % : ajouter des mots-clés négatifs (gratuit, pas cher, usagé, à vendre, emploi, DIY, enfant, anniversaire) et vérifier la mention de prix dans les annonces.
- Délai de réponse au-dessus de 15 minutes : problème de procédure, pas de publicité. Le corriger avant d'augmenter le budget.
- ChatGPT Ads : arrêter après 60 jours si aucun lead qualifié pour au moins 1 500 $ dépensés.

---

## 11. Test final avant la mise en ligne (cocher chaque ligne)

☐ Envoi route A, consentement accordé : GA4 (`lead_qualifie`), Google Ads (balise + conversions améliorées), Meta (`Lead` pixel + serveur dédupliqués), UET, OpenAI (pixel + CAPI), ligne CRM, textos (prospect + garde).
☐ Envoi route C, consentement refusé : aucun témoin publicitaire ; GA4 en mode sans témoins ; aucun `Lead` Meta ; ligne CRM « Disqualifié » ; courriel boutique.
☐ Appel sur le numéro de suivi depuis `?utm_source=google&gclid=TEST` : l'appel apparaît dans CallRail avec la source, la durée et l'enregistrement.
☐ Passage d'une ligne de test à « Dépôt payé » : la ligne apparaît dans la feuille d'import Google Ads (vérifier le format de date et le hachage).
☐ Navigateur mobile en navigation privée : bannière, formulaire, barre collante et vitesse (moins de 3 s sur PageSpeed mobile).
