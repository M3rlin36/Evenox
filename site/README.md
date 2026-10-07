# Formulaire de qualification Évenox : mode d'emploi

Ce dossier contient le formulaire multi-étapes décrit dans `operations/formulaire-qualification.md`, prêt à coller dans Divi. Il ne demande ni extension, ni bibliothèque externe, ni étape de compilation.

| Fichier | Rôle |
|---|---|
| `formulaire-evenox.html` | Le bloc à coller : HTML, CSS (tout est préfixé `.evxq`) et JavaScript. |
| `apercu-mobile.png` | Aperçu de l'étape 1 à 400 px de large, avec `?forfait=party`. |
| `README.md` | Ce document. |

Ce que fait le formulaire :

- 5 étapes, avec la barre « Étape X de 5 » et une validation à chaque étape.
- Le routage A/B/C/D est appliqué dans l'ordre de priorité de la spécification. Le pointage `lead_score` suit la section 7.
- Les champs cachés (UTM, `gclid`, `gbraid`, `wbraid`, `msclkid`, `fbclid`, `oppref`, `event_id`, état du consentement) sont conservés pendant toute la visite.
- Les deux cases de consentement (LCAP et Loi 25) sont décochées par défaut.
- Les événements `form_start`, `form_step` et `lead_submit` sont poussés dans le dataLayer.
- La demande est envoyée en JSON à l'adresse de votre choix.
- La personne voit ensuite la page de remerciement de sa route.

---

## 1. Coller le formulaire dans Divi

1. Ouvrez la page (`/soumission/`, `/corporatif/`, `/mariage/`, `/evenement-prive/`…) dans le Visual Builder.
2. Dans la section qui porte l'ancre `soumission` (Réglages de la section → Avancé → ID CSS = `soumission`), ajoutez un module **Code**.
3. Copiez **tout** le contenu de `formulaire-evenox.html` dans le module, puis enregistrez.
4. Si le module ne l'est pas déjà, réglez sa largeur maximale à 640 px. Le formulaire est centré et prend 100 % de la largeur sur mobile.
5. Mettez **un seul formulaire par page**.

### Précautions propres à Divi et WordPress

- **Ne laissez aucune ligne vide** dans le bloc. Le fichier est livré sans ligne vide, car WordPress (`wpautop`) peut insérer des `<p>` sur les lignes vides et casser le script. Si vous modifiez le code, gardez cette règle.
- Si une extension de cache ou d'optimisation (WP Rocket, LiteSpeed, Autoptimize…) retarde ou combine le JavaScript, excluez le script en ligne qui contient `evxq` (« Delay JS », « Combine inline JS »).
- Autre solution si Divi modifie le code : collez le bloc dans un extrait **WPCode** de type HTML, puis insérez le code court de l'extrait dans un module Texte.
- Le titre de chaque étape est un `<h3>`, qui vient sous le H1 et les H2 de la page.
- Le formulaire hérite de la police du thème. Les couleurs se changent à un seul endroit : les variables `--evxq-*` au début du `<style>` (`--evxq-accent` pour le bouton, `--evxq-gold` pour les accents).

### Ce qui doit déjà être dans le `<head>`

Ce bloc vient de `tracking-setup.md` §1 : la commande Consent Mode `gtag('consent','default', … denied)`, **avant** GTM `GTM-PP2W2TX9`. Le formulaire lit l'état du consentement dans ces commandes (`default` et `update`) et le considère comme **refusé** s'il n'en trouve aucune.

Le script d'attribution de `formulaire-qualification.md` §5 est facultatif. Le formulaire fait le même travail et utilise la même clé `sessionStorage` (`evx_attr`) : les deux peuvent coexister.

---

## 2. Réglages (`CONFIG`)

Il y a deux façons de modifier un réglage :

- **Pour tout le site :** modifiez l'objet `CONFIG` au début du `<script>`.
- **Pour une seule page, sans toucher au bloc :** mettez un module Code *au-dessus* du formulaire, avec par exemple :

```html
<script>window.EVENOX_FORM_CONFIG = { typeParDefaut: 'prive' };</script>
```

| Clé | Valeur par défaut | Rôle |
|---|---|---|
| `endpoint` | `''` | Adresse qui reçoit la demande (section 3). **Si elle est vide**, rien n'est envoyé et rien n'est mesuré. La personne voit alors : « Votre demande n'a pas pu être transmise… appelez-nous au 514-559-1893 ». |
| `contentType` | `'application/json'` | `'text/plain'` évite la requête préalable CORS (utile avec Zapier). Le corps reste du JSON. |
| `redirect` | `true` | `true` : après l'envoi, redirection vers la page de remerciement de la route. `false` : le remerciement s'affiche à la place du formulaire. |
| `merciAppelUrl` / `merciSoumissionUrl` / `merciBoutiqueUrl` / `merciHorsZoneUrl` | `/merci-appel/` … | Pages de remerciement des routes A, B, C et D. |
| `boutiqueUrl` | `https://evenox.booqableshop.com/` | Bouton des routes C et D (boutique Booqable). Les paramètres `utm_source=formulaire&utm_medium=referral&utm_campaign=route_c` (ou `route_d`) sont ajoutés automatiquement. Si la boutique est aussi intégrée sur evenox.ca, mettez plutôt cette adresse. |
| `calendlyUrl` | `''` | Lien Calendly « Appel découverte 15 min ». Il est prérempli avec `name`, `email`, `a1` (type d'événement) et `a2` (date). |
| `politiqueUrl`, `realisationsUrl` | `/politique-de-confidentialite/`, `/realisations/` | Liens affichés dans le formulaire. |
| `telephone`, `courriel`, `responsable` | `514-559-1893`, `info@evenox.ca`, `Alexandre Séguin` | Remplacent `{{TEL}}` et `{{COURRIEL}}` dans les textes. |
| `typeParDefaut` | `''` | Type présélectionné sur la page s'il n'y a pas de paramètre (ex. `'prive'` sur `/evenement-prive/`, comme le demande landing-evenement-prive.md §11). |
| `valeurs` | `{A:400, B:150, C:0, D:0}` | Valeur de conversion provisoire, envoyée dans `lead_value`. |
| `heuresGarde`, `fuseau` | lun.–ven. de 8 h 30 à 20 h, sam. de 9 h à 17 h, `America/Toronto` | Servent au champ `hors_heures` et au texte de la route A (« demain dès 9 h »). |
| `getConsent` | `null` | Fonction facultative, si la plateforme de consentement n'utilise pas `gtag('consent', …)`. |

### Présélection par l'adresse

| Adresse | Effet |
|---|---|
| `?forfait=5a7`, `party`, `gala` | Présélectionne le type corporatif correspondant et affiche « Forfait choisi : … ». |
| `?forfait=mariagesignature` | Présélectionne Mariage. |
| `?forfait=decorwow`, `soireesignature` | Présélectionne `prive` si l'adresse de la page contient « prive » ou si `typeParDefaut` vaut `prive` ; sinon, Mariage. |
| `?type=corpo`, `mariage`, `prive`, `muni` | Présélectionne la carte (landing-soumission.md). |
| `#soumission?forfait=gala` | Les boutons des pages d'atterrissage utilisent cette forme. Le formulaire intercepte le clic, présélectionne la carte et fait défiler la page jusqu'au formulaire, sans recharger la page. |

---

## 3. Brancher l'envoi (le point de terminaison)

À l'envoi, le formulaire fait un `POST` (`fetch`) avec un corps JSON. Une demande est considérée comme reçue quand la réponse est **2xx**. **Les conversions (`lead_submit`) ne partent qu'après une réponse 2xx** : un envoi raté ne compte jamais comme un lead.

Exemple de corps (route A, sans consentement de mesure) :

```json
{
  "form_id": "evx_qualification", "event_id": "3f1c…", "date_heure_reception": "2026-10-07 14:05",
  "prenom": "Julie", "nom": "Tremblay", "courriel": "julie@exemple.com", "telephone": "+15145551234", "telephone_affiche": "(514) 555-1234",
  "entreprise": "Acme inc.", "type_client": "entreprise", "type_evenement": "corpo_gala", "type_evenement_libelle": "Gala, remise de prix ou lancement",
  "date_evenement": "2026-11-06", "date_flexible": "non", "ville": "Laval", "type_lieu": "salle", "nb_invites": "75_149", "budget_declare": "2500_4999",
  "services": "Chapiteau", "canal_prefere": "appel", "message": "", "role_decision": "Je décide", "echeance_decision": "Cette semaine",
  "route": "A", "lead_score": 87, "lead_qualifie": true, "lead_value": 400, "currency": "CAD", "temperature": "",
  "date_rapprochee": "non", "appel_obligatoire": "non", "hors_heures": "non", "etape": "Nouveau", "raison_perte": "",
  "consent_marketing": "non", "consent_mesure": "non", "date_consentement": "2026-10-07 14:05", "consent_version": "v2026-10",
  "consent_url": "https://evenox.ca/soumission/?…", "consent_state": {"ad_storage": "denied", "analytics_storage": "denied", "ad_user_data": "denied", "ad_personalization": "denied"},
  "fbp": "", "landing_page": "/soumission/", "referrer": "", "forfait_presel": "gala", "variante_hero": "",
  "utm_source": "google", "utm_medium": "cpc", "utm_campaign": "gads_corpo_fetes", "utm_content": "", "utm_term": "", "gclid": "TEST123",
  "gbraid": "", "wbraid": "", "msclkid": "", "fbclid": "", "oppref": "", "page_url": "…", "user_agent": "…"
}
```

Comment lire certains champs :

- `temperature` vaut `Tiède` pour une route A avec l'échéance « Plus tard ».
- `appel_obligatoire` vaut `oui` quand la date tombe dans moins de 10 jours sur une route A ou B : il faut appeler.
- `etape` vaut `Disqualifié` pour les routes C et D.
- `fbp` est rempli seulement si `ad_storage` est accordé.

### Option 1 (recommandée) : webhook Make → feuille Google « Leads » (CRM)

1. Importez `operations/crm-kpi-evenox.xlsx` dans Google Sheets (Fichier → Importer → Remplacer la feuille de calcul). La ligne 2 de la feuille **Leads** donne les noms techniques.
2. Dans Make, créez un scénario **Webhooks → Custom webhook**. Copiez l'adresse dans `CONFIG.endpoint`. Envoyez un formulaire de test pour que Make détecte la structure (« Redetermine data structure »).
3. **Important :** les lignes 3 à 1002 contiennent déjà des formules. Un « Add a row » écrirait donc la demande **après** la ligne 1002. Utilisez plutôt :
   1. **Google Sheets → Search Rows** : filtre `A` (lead_id) « est vide », limite 1.
   2. **Google Sheets → Update a Row** sur ce numéro de ligne, en remplissant **seulement** les colonnes de saisie ci-dessous. Ne touchez jamais aux colonnes grises (D, Q, AQ à BA) : ce sont des formules.

   | Col. | Leads (ligne 2) | Champ JSON |
   |---|---|---|
   | A | `lead_id` | ex. `{{formatDate(now; "YYMMDD-HHmmss")}}` ou les 8 premiers caractères de `event_id` |
   | B | `date_heure_reception` | `date_heure_reception` |
   | E à I | `prenom` · `nom` · `courriel` · `telephone` · `entreprise` | mêmes noms |
   | J à O | `type_client` · `type_evenement` · `date_evenement` · `ville` · `nb_invites` · `budget_declare` | mêmes noms |
   | P | `route` | `route` |
   | R | `etape` | `etape` (`Nouveau` ou `Disqualifié`) |
   | S | `raison_perte` | `raison_perte` |
   | X à AG | `utm_source` … `utm_term` · `gclid` · `msclkid` · `fbclid` · `oppref` · `event_id` | mêmes noms |
   | AH · AI · AJ | `consent_marketing` · `consent_mesure` · `date_consentement` | mêmes noms (`oui`/`non`) |
   | AK | `desabonne` | `non` |
   | AM | `notes` | ex. `{{message}} · Lieu : {{type_lieu_libelle}} · Services : {{services}} · Canal : {{canal_prefere}} · {{temperature}} · gbraid/wbraid : {{gbraid}} {{wbraid}}` |
   | AN · AO | `role_decision` · `echeance_decision` | mêmes noms (déjà les libellés de la feuille Listes) |

   Le CRM recalcule lui-même le pointage (col. Q) et la route selon les règles (col. AS) : un écart de route apparaît en orange.
4. Ajoutez un **Router** sur `route` pour les actions de `formulaire-qualification.md` §8 et `suivi-leads.md` §2 :
   - **A :** texto et courriel au prospect, plus l'alerte « 🔥 LEAD A » au téléphone de garde. Si `hors_heures` = `oui`, envoyez le texte « hors heures ».
   - **B :** texto et courriel au prospect, plus l'alerte au téléphone de garde.
   - **C :** courriel « boutique » seulement, sans texto.
   - **D :** courriel « hors zone » avec le lien de la boutique.
   - **Meta CAPI et OpenAI CAPI :** routes A et B seulement, avec le même `event_id`. Ajoutez `em` et `ph` hachés **seulement si** `consent_mesure` = `oui`.
5. Terminez le scénario par un module **Webhook response** (statut 200). Les webhooks Make acceptent les appels d'un autre domaine (CORS).

### Option 2 : Zapier (Catch Hook)

- Créez un Zap **Webhooks by Zapier → Catch Hook** et copiez l'adresse dans `endpoint`.
- Mettez `contentType: 'text/plain'` : Zapier gère mal la requête préalable CORS que déclenche `application/json`. Le corps reste du JSON. Si les champs n'apparaissent pas séparés dans Zapier, passez à **Catch Raw Hook** et ajoutez une étape « Code by Zapier » qui fait `JSON.parse(inputData.raw)`.
- Ensuite, faites la même chose qu'avec Make : Google Sheets (« Lookup spreadsheet row » sur la première ligne vide, puis « Update spreadsheet row ») ou HubSpot.

### Option 3 : passer par WordPress (WPForms, Gravity Forms, ou une route REST)

Les webhooks de **WPForms** et de **Gravity Forms** fonctionnent dans un seul sens : ils *envoient* les entrées de *leurs propres* formulaires. Ils ne peuvent pas recevoir les demandes de ce formulaire en HTML. Il y a deux façons de rester dans WordPress :

- **Reconstruire le formulaire dans Gravity Forms** (Elite, avec le module Webhooks), comme le prévoit la spécification. Dans ce cas, ce bloc ne sert plus que de modèle pour les textes et le style.
- **Garder ce formulaire et ajouter une petite route REST.** Elle reçoit la demande, la transmet à Make et envoie un courriel de secours. Avantage : l'adresse Make n'apparaît pas dans le code de la page. Pour la créer, déposez ce fichier dans `wp-content/mu-plugins/evenox-lead.php`, puis mettez `endpoint: '/wp-json/evenox/v1/lead'` :

```php
<?php
/* Évenox : réception du formulaire de qualification → Make + courriel de secours. */
add_action('rest_api_init', function () {
  register_rest_route('evenox/v1', '/lead', array(
    'methods' => 'POST',
    'permission_callback' => '__return_true',
    'callback' => function (WP_REST_Request $r) {
      $d = json_decode($r->get_body(), true);
      if (!is_array($d) || empty($d['courriel']) || empty($d['event_id'])) {
        return new WP_REST_Response(array('ok' => false), 400);
      }
      $make = 'https://hook.us1.make.com/XXXXXXXX'; // adresse du webhook Make
      $res = wp_remote_post($make, array('timeout' => 8, 'headers' => array('Content-Type' => 'application/json'), 'body' => wp_json_encode($d)));
      if (is_wp_error($res) || wp_remote_retrieve_response_code($res) >= 300) {
        wp_mail('info@evenox.ca', '[Lead ' . sanitize_text_field($d['route'] ?? '?') . '] Make indisponible : ' . sanitize_text_field($d['prenom'] ?? ''),
          print_r($d, true));
      }
      return new WP_REST_Response(array('ok' => true), 200);
    },
  ));
});
```

---

## 4. Ce que le formulaire pousse dans le dataLayer

| Moment | Objet poussé |
|---|---|
| Première réponse (ou premier clic sur « Suivant ») | `{event:'form_start', form_id, page}`, une seule fois. |
| Chaque étape validée (1 à 5) | `{event:'form_step', form_id, step, event_type}` |
| Envoi réussi (réponse 2xx) | `{event:'lead_submit', form_id, lead_route, lead_qualifie, lead_value, currency:'CAD', event_type, budget_band, event_id}`. S'y ajoute `user_data:{email, phone_number}` **seulement si la case `consent_mesure` est cochée** (courriel en minuscules, téléphone au format E.164 `+1…`). GTM les hache en SHA-256. |

Ce que le formulaire respecte côté consentement :

- Il ne charge aucun pixel et ne crée aucun témoin publicitaire. Il ne fait que pousser des événements, et c'est GTM qui applique le Consent Mode et les déclencheurs « Consentement marketing accordé ».
- Le témoin `_fbp` n'est lu, et le témoin d'attribution `evx_attr` (90 jours) n'est créé, que si `ad_storage` = `granted`.
- Sans consentement, l'attribution vit seulement dans `sessionStorage` : elle disparaît à la fermeture de l'onglet.
- Un pot de miel (`site_web`) bloque les robots : rien n'est envoyé et rien n'est mesuré.

---

## 5. GTM (`GTM-PP2W2TX9`) : éléments à créer

**Avant tout : supprimez l'ancienne balise GA4 `generate_lead` et son déclencheur `lead_submit`** (tracking-setup.md §0, point 0.5). Sinon, chaque lead sera compté deux fois.

### Variables (Variable de couche de données, version 2)

`DLV - lead_route`, `DLV - lead_qualifie`, `DLV - lead_value`, `DLV - currency`, `DLV - event_type`, `DLV - budget_band`, `DLV - event_id`, `DLV - step`, `DLV - form_id`, `DLV - user_data.email`, `DLV - user_data.phone_number`.

Ajoutez aussi une variable **Données fournies par l'utilisateur** (configuration manuelle) : courriel = `{{DLV - user_data.email}}`, téléphone = `{{DLV - user_data.phone_number}}`.

### Déclencheurs (Événement personnalisé)

| Nom | Événement | Condition |
|---|---|---|
| `CE - form_start` | `form_start` | — |
| `CE - form_step` | `form_step` | — |
| `CE - lead_submit (tous)` | `lead_submit` | — |
| `CE - lead_qualifie` | `lead_submit` | `DLV - lead_qualifie` égal à `true` |
| `CE - lead_prioritaire` | `lead_submit` | `DLV - lead_route` égal à `A` |
| `CE - lead_non_qualifie` | `lead_submit` | `DLV - lead_route` correspond à l'expression régulière `^(C\|D)$` |

### Balises

| Balise | Déclencheur | Réglages |
|---|---|---|
| GA4 Événement `form_start` / `form_step` | CE - form_start / CE - form_step | `form_id`, `page` / `step`, `event_type` |
| GA4 Événement `lead_tous` | CE - lead_submit (tous) | `lead_route`, `event_type`, `budget_band`, `value` = `{{DLV - lead_value}}` |
| GA4 Événement `lead_qualifie` (événement clé) | CE - lead_qualifie | `lead_route`, `value`, `currency` |
| GA4 Événement `lead_prioritaire` (événement clé) | CE - lead_prioritaire | `value` |
| GA4 Événement `lead_non_qualifie` | CE - lead_non_qualifie | `lead_route` |
| Google Ads Conversion **lead_qualifie** (principale) | CE - lead_qualifie | Valeur `{{DLV - lead_value}}`, devise CAD, **ID de transaction = `{{DLV - event_id}}`** (déduplication), conversions améliorées = variable « Données fournies par l'utilisateur » (vide si `consent_mesure` n'est pas cochée) |
| Google Ads Conversion **lead_tous** (secondaire) | CE - lead_submit (tous) | Valeur 0 |
| Meta `Lead` (pixel) | CE - lead_qualifie **et** consentement marketing | `eventID` = `{{DLV - event_id}}`, `value`, `currency`, `lead_route` |
| Meta `LeadTous` / `LeadNonQualifie` (personnalisés) | CE - lead_submit (tous) / CE - lead_non_qualifie, plus le consentement marketing | — |
| Microsoft UET `lead_qualifie` / `lead_tous` | CE - lead_qualifie / CE - lead_submit (tous), plus le consentement marketing | Action personnalisée, valeur variable |
| OpenAI `oaiq("measure","lead_created", {event_id, value, currency})` | CE - lead_qualifie, plus le consentement marketing | Même `event_id` que l'API Conversions |

Dans les **paramètres de consentement** des balises Meta, UET et OpenAI, exigez `ad_storage`. Quand `redirect` = `true`, le formulaire laisse à GTM le temps de déclencher ses balises avant de changer de page : il attend l'`eventCallback` de GTM, avec 1,5 s au maximum.

---

## 6. Pages de remerciement

Les 4 pages (`/merci-appel/`, `/merci-soumission/`, `/merci-boutique/`, `/merci-hors-zone/`) doivent être en **noindex**, et **aucune conversion ne doit s'y déclencher** : les conversions partent du formulaire.

Avant la redirection, le formulaire enregistre dans `sessionStorage` (`evx_merci`) les champs suivants :

- `route`, `prenom`, `nom`, `courriel`, `type_libelle`, `date_evenement`, `type_client` ;
- `hors_heures`, `date_rapprochee` ;
- le lien `calendly` prérempli et le lien `boutique` avec ses UTM.

Exemple de module Code pour `/merci-appel/` (prénom et Calendly prérempli) :

```html
<p id="evx-merci-txt">Merci! Un conseiller vous appelle dans les 15 minutes.</p>
<a id="evx-merci-cal" class="et_pb_button" href="https://calendly.com/VOTRE-LIEN" target="_blank" rel="noopener">Choisir mon moment</a>
<script>
(function(){try{var m=JSON.parse(sessionStorage.getItem('evx_merci')||'{}');
if(m.prenom){document.getElementById('evx-merci-txt').textContent='Merci '+m.prenom+'! '+(m.hors_heures==='oui'?'Nous vous appelons demain dès 9 h.':'Un conseiller vous appelle dans les 15 minutes.');}
if(m.calendly){document.getElementById('evx-merci-cal').href=m.calendly;}}catch(e){}})();
</script>
```

Sur `/merci-boutique/`, si `m.type_client === 'entreprise'`, affichez « Besoin d'un bon de commande? Écrivez-nous à info@evenox.ca. »

Si les pages de remerciement ne sont pas encore prêtes, mettez `redirect: false` : chaque route affiche alors son message sur place.

---

## 7. Liste de contrôle avant la mise en ligne

☐ `CONFIG.endpoint` est rempli. Un envoi de test arrive dans Make et une ligne apparaît dans la feuille Leads, dans la bonne ligne vide, avec les formules intactes.
☐ Avec `endpoint` vide (page de préproduction), le message de repli s'affiche et **aucun** `lead_submit` n'apparaît dans l'aperçu GTM.
☐ L'ancienne balise GA4 `generate_lead` est supprimée et le conteneur est publié.
☐ **Route A**, de `/soumission/?utm_source=google&utm_medium=cpc&utm_campaign=gads_corpo_fetes&gclid=TEST123`, entreprise, 2 500 à 4 999 $ : `lead_submit` avec `lead_route` = A, `lead_qualifie` = true et `lead_value` = 400 ; `gclid` = TEST123 dans le CRM ; redirection vers `/merci-appel/` ; textos (prospect et garde).
☐ **Route B** : mariage, particulier, 1 000 à 2 499 $ (ou 600 à 999 $) → `/merci-soumission/`, valeur 150.
☐ **Route C** : entreprise avec 600 à 999 $ (ou n'importe qui sous 600 $) → `/merci-boutique/`, `lead_qualifie` = false, courriel boutique, ligne « Disqualifié ».
☐ **Route D** : « Autre (plus de 40 km) » avec moins de 2 500 $ → `/merci-hors-zone/`.
☐ **Consentement refusé** (navigation privée, « Tout refuser ») : aucun témoin `_fbp`, `_gcl_*` ni `evx_attr`. Aucune balise Meta, UET ni OpenAI dans l'aperçu GTM. `consent_state` est « denied » dans le CRM.
☐ **Consentement accordé et case `consent_mesure` cochée** : `user_data` est présent dans `lead_submit`, les conversions améliorées sont visibles dans Tag Assistant, le témoin `evx_attr` est créé, et Meta Test Events montre `Lead` dédupliqué (même `event_id`) entre le pixel et le serveur.
☐ **Consentement accordé et case `consent_mesure` décochée** : aucun `user_data`.
☐ `?forfait=gala`, `?forfait=decorwow` (sur `/mariage/` et sur `/evenement-prive/`) et `?type=mariage` présélectionnent la bonne carte. Les boutons `#soumission?forfait=…` font défiler la page et présélectionnent la carte.
☐ Les UTM sont conservés quand on arrive sur `/mariage/?utm_source=…` puis qu'on va sur `/soumission/` : le champ caché `landing_page` vaut `/mariage/`.
☐ Mobile à 360 px : aucun défilement horizontal, les 6 cartes de l'étape 1 sont visibles, le clavier numérique s'ouvre pour le téléphone et le sélecteur de date est natif.
☐ Clavier seul : Tab, les flèches dans les groupes de cartes, Espace et Entrée permettent de remplir et d'envoyer. Le focus est visible partout. En cas d'erreur, le focus va au premier champ fautif et l'erreur est lue (VoiceOver et NVDA).
☐ Date dans moins de 10 jours : l'avis « Date rapprochée : appelez-nous… » s'affiche.
☐ La faute « gmial.com » propose « gmail.com ».
☐ Les textes de consentement et l'avis Loi 25 ont été validés par un juriste (formulaire-qualification.md §4).

Des tests automatisés Playwright ont validé les routes A, B, C et D, les événements du dataLayer, les champs cachés, le consentement, la validation et l'affichage mobile. Ils restent à refaire sur le site réel avec l'aperçu GTM.
