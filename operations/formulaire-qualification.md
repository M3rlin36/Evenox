# Formulaire de qualification multi-étapes — spécification

> Remplace le formulaire actuel (nom, courriel, téléphone, date, adresse, message), qui ne filtre rien.
> Utilisé sur : `/corporatif/` et ses sous-pages, les sous-pages `/mariage/...` (mêmes URL que les annonces, voir campagnes/google-ads/README.md), `/soumission` et, à terme, `/contact/` et les pages de services.
> Outil recommandé : **Gravity Forms** (licence Elite : pages multiples, logique conditionnelle, champs cachés remplis par paramètre, webhooks) ou **Fluent Forms Pro** (moins cher, fonctions équivalentes). Le module Contact de Divi ne fait ni les étapes ni le routage.

---

## 1. Principes

1. Les questions faciles viennent d'abord (type d'événement, date, invités). Les coordonnées viennent **en dernier**, une fois la personne engagée.
2. Chaque question a une raison visible (micro-texte), ce qui augmente la complétion.
3. Une barre de progression « Étape X de 5 » est toujours visible.
4. Aucune zone de texte libre obligatoire.
5. Sur mobile : gros boutons-cartes pour les choix (pas de menus déroulants), clavier numérique pour le téléphone, sélecteur de date natif.
6. Le budget est demandé **en fourchettes** et accompagné d'un repère de prix, pour ne pas faire peur.

---

## 2. Étapes et champs

### Étape 1 de 5 — Votre événement
**Titre :** Quel type d'événement organisez-vous?

| Champ | Type | Options (valeur interne) | Obligatoire |
|---|---|---|---|
| `type_evenement` | Cartes à choix unique (icône + libellé) | Party de bureau / des Fêtes (`corpo_party`) · 5 à 7 ou team building (`corpo_5a7`) · Gala, remise de prix ou lancement (`corpo_gala`) · Événement municipal ou scolaire (`muni_ecole`) · Mariage (`mariage`) · Autre événement privé : anniversaire, shower… (`prive`) | Oui |

**Préremplissage :** si l'URL contient `?forfait=5a7|party|gala|decorwow|soireesignature|mariagesignature`, présélectionner le type correspondant et afficher « Forfait choisi : [nom] » en haut du formulaire.

### Étape 2 de 5 — Date et lieu
**Titre :** Quand et où?

| Champ | Type | Options et règles | Obligatoire |
|---|---|---|---|
| `date_evenement` | Date | Pas de date passée. Si la date est dans moins de 10 jours, afficher : « Date rapprochée : appelez-nous au {{TEL}} pour une réponse immédiate. » | Oui |
| `date_flexible` | Case | « Ma date n'est pas encore fixée » (rend la date facultative) | Non |
| `ville` | Liste avec saisie semi-automatique | Sainte-Thérèse, Blainville, Boisbriand, Rosemère, Lorraine, Bois-des-Filion, Mirabel, Saint-Eustache, Deux-Montagnes, Terrebonne, Saint-Jérôme, Laval, Montréal – centre-ville, Montréal – autres arrondissements, Longueuil / Rive-Sud, **Autre (plus de 40 km)** | Oui |
| `type_lieu` | Cartes | Bureaux de l'entreprise · Salle de réception ou hôtel · Extérieur ou chapiteau · Domicile · Je ne sais pas encore | Oui |

**Micro-texte :** « Nous livrons de Sainte-Thérèse : la ville nous permet de calculer la livraison exacte. »

### Étape 3 de 5 — Invités et budget
**Titre :** Pour combien de personnes, et quel budget?

| Champ | Type | Options (valeur) | Obligatoire |
|---|---|---|---|
| `nb_invites` | Cartes | Moins de 30 (`lt30`) · 30 à 74 (`30_74`) · 75 à 149 (`75_149`) · 150 et plus (`150p`) | Oui |
| `budget` | Cartes | Moins de 600 $ (`lt600`) · 600 à 999 $ (`600_999`) · 1 000 à 2 499 $ (`1000_2499`) · 2 500 à 4 999 $ (`2500_4999`) · 5 000 $ et plus (`5000p`) · Je ne sais pas encore (`inconnu`) | Oui |
| `services` | Cases multiples | Décor et lettres lumineuses · Photobooth ou vidéobooth 360 · Jeux géants ou animation · Mobilier (tables, chaises) · Chapiteau · Machines gourmandes · Je veux un forfait tout inclus | Non |

**Micro-texte sous le budget (selon le type) :**
- Corporatif : « Repère : nos forfaits corporatifs clé en main vont de 1 195 $ à 2 495 $. »
- Mariage : « Repère : forfaits décor de mariage de 899 $ à 1 899 $ ; cabine photo seule dès 599 $. »
- Privé : « Repère : forfaits décor dès 899 $ ; cabine photo avec préposé seule dès 599 $. Pour de plus petites commandes, notre boutique en ligne est ouverte 24 h sur 24. »

### Étape 4 de 5 — Vous
**Titre :** Qui organise?

| Champ | Type | Options | Obligatoire |
|---|---|---|---|
| `type_client` | Cartes | Entreprise (`entreprise`) · Municipalité, école ou OBNL (`organisme`) · Particulier ou couple (`particulier`) · Planificateur ou agence (`agence`) | Oui |
| `entreprise` | Texte | Visible si le type de client est entreprise, organisme ou agence | Oui (si visible) |
| `role_decision` | Cartes | Je décide · Je recommande, quelqu'un d'autre approuve · Je compare des options pour un comité | Oui |
| `echeance_decision` | Cartes | Cette semaine · D'ici 30 jours · Plus tard / je m'informe | Oui |

### Étape 5 de 5 — Coordonnées
**Titre :** Où vous envoyer votre proposition?

| Champ | Type | Règles | Obligatoire |
|---|---|---|---|
| `prenom` | Texte | — | Oui |
| `nom` | Texte | — | Oui |
| `courriel` | Courriel | Validation de format ; signaler les fautes courantes (« gmial.com ») | Oui |
| `telephone` | Tél. | Masque (514) 555-1234 ; 10 chiffres | Oui |
| `canal_prefere` | Cartes | Appel · Texto · Courriel | Oui (défaut : Appel) |
| `message` | Zone de texte (2 lignes) | « Un détail à ajouter? (facultatif) » | Non |
| `consent_marketing` | Case **non cochée** | Voir la section 4 | Non |
| `consent_mesure` | Case **non cochée** | Voir la section 4 | Non |

**Bouton d'envoi :**
- Corporatif : `Recevoir ma proposition`
- Mariage : `Vérifier ma date`
- Autres : `Recevoir ma soumission`

**Sous le bouton (petit texte, avis de transparence Loi 25) :**
« Nous utilisons vos coordonnées uniquement pour répondre à votre demande et préparer votre soumission. Elles sont conservées dans nos outils (Google Workspace, HubSpot) hébergés au Canada ou aux États-Unis. Responsable de la protection des renseignements personnels : Alexandre Séguin, {{COURRIEL}}. Voir notre politique de confidentialité. »

> Ajuster la liste des outils et des lieux d'hébergement à la réalité, et la décrire aussi dans la politique de confidentialité (Loi 25 : communication hors Québec).

---

## 3. Routage conditionnel (après l'envoi)

L'ordre d'évaluation compte : **la première règle vraie gagne**.

| Priorité | Condition | Route | Action immédiate | Page de confirmation |
|---|---|---|---|---|
| 1 | `ville` = « Autre (plus de 40 km) » ET `budget` ∈ {`lt600`, `600_999`, `1000_2499`} | **D — Hors zone** | Courriel automatique « hors zone » avec le lien de la boutique (ramassage possible) ; ligne dans le CRM, étape « Disqualifié – hors zone » | `/merci-hors-zone/` |
| 2 | `budget` = `lt600`, OU `budget` = `600_999` ET `type_evenement` ∉ {`mariage`, `prive`} | **C — Boutique** | Courriel automatique avec 3 suggestions de la boutique selon le type, et code de bienvenue facultatif ; pas d'appel | `/merci-boutique/` : « Votre projet est parfait pour notre boutique en ligne », bouton vers Booqable (`?utm_source=formulaire&utm_medium=referral&utm_campaign=route_c`) |
| 3 | `budget` ∈ {`2500_4999`, `5000p`} OU `type_client` ∈ {`entreprise`, `organisme`, `agence`} | **A — Appel prioritaire** | Texto et courriel instantanés au prospect ; **alerte texto au téléphone de garde** (« 🔥 LEAD A ») ; appel dans les 15 min (heures d'ouverture) | `/merci-appel/` : calendrier Calendly intégré, « Choisissez votre moment ou attendez notre appel dans les 15 minutes » |
| 4 | `budget` = `1000_2499`, OU `budget` = `600_999` ET `type_evenement` ∈ {`mariage`, `prive`} (forfaits décor dès 899 $, cabine photo dès 599 $) | **B — Soumission** | Texto et courriel instantanés au prospect ; soumission écrite (3 options) en moins de 24 h ; appel au cours de la même journée ouvrable | `/merci-soumission/` : « Votre soumission arrive d'ici 24 h », lien Calendly facultatif |
| 5 | `budget` = `inconnu` | Sous-règle | `type_client` = entreprise ou organisme → **A** · `nb_invites` ∈ {`75_149`, `150p`} → **A** · `type_evenement` = mariage → **B** · sinon → **B** | Selon la route |

**Cas particuliers :**
- Entreprise avec un budget de moins de 1 000 $ (`lt600` ou `600_999`) : la règle 2 s'applique d'abord (boutique), car l'objectif est de filtrer. La page `/merci-boutique/` ajoute toutefois, pour `type_client` = entreprise : « Besoin d'un bon de commande? Écrivez-nous à {{COURRIEL}}. »
- `echeance_decision` = « Plus tard / je m'informe » sur la route A : garder la route A, mais marquer le lead « Tiède » dans le CRM (relance au lieu d'un appel insistant).
- Date dans moins de 10 jours : toujours appeler, peu importe la route (sauf C et D).

**Heures hors bureau** (soirées, fins de semaine, selon l'horaire de garde) : la route A envoie le texto « Je vous appelle demain dès 9 h, ou choisissez votre moment ici : [Calendly] ».

### Calendly (ou Google Agenda – pages de réservation)
- Type d'événement : « Appel découverte Évenox – 15 min », plages de 9 h à 18 h en semaine.
- Questions préremplies par les paramètres d'URL : `name`, `email`, `a1` = type d'événement, `a2` = date.
- Tampon de 15 minutes entre les appels ; préavis minimal de 1 h.
- Le webhook Calendly `invitee.created` déclenche l'événement `appel_reserve` (voir tracking-setup.md).

---

## 4. Consentements Loi 25 et LCAP (cases distinctes, non cochées par défaut)

Les deux cases sont **facultatives**, **non cochées** et **séparées** de l'envoi. Le formulaire fonctionne sans elles : la réponse à la demande ne nécessite pas de consentement supplémentaire, car il s'agit de la fin principale de la collecte.

**Case 1 — `consent_marketing` (LCAP : consentement exprès pour l'infolettre et les offres) :**
> ☐ J'accepte de recevoir par courriel et par texto des idées, des nouveautés et des offres d'Évenox inc. (215, boul. René-A.-Robert, Sainte-Thérèse, {{TEL}}). Je peux me désabonner en tout temps.

**Case 2 — `consent_mesure` (Loi 25 : fin secondaire, mesure publicitaire) :**
> ☐ J'accepte qu'Évenox transmette mon courriel et mon téléphone, sous forme chiffrée (hachée), à Google, Meta, Microsoft et OpenAI, uniquement pour mesurer l'efficacité de ses publicités. Je peux retirer ce consentement en tout temps à {{COURRIEL}}.

**Règles d'utilisation :**
- Les données hachées (conversions améliorées pour les leads, Meta CAPI, conversions hors ligne Microsoft, API Conversions d'OpenAI) sont envoyées **seulement si `consent_mesure` = oui**. Sinon, le serveur n'envoie que des signaux sans renseignements personnels (consentement géré par le Consent Mode, voir tracking-setup.md).
- Enregistrer pour chaque lead : la valeur de chaque case, la date et l'heure, la version du texte (`v2026-10`) et l'URL. C'est la preuve du consentement.
- Le retrait du consentement se fait par courriel ou en répondant ARRÊT : mettre à jour le CRM dans les 48 h et retirer le lead des listes et des audiences.

> Ce texte n'est pas un avis juridique. Le faire valider par un avocat en protection des renseignements personnels ou en droit du Québec avant la mise en ligne (environ 1 h de révision).

---

## 5. Champs cachés (attribution)

| Champ caché | Source | Remarque |
|---|---|---|
| `utm_source` | Paramètre d'URL | google, bing, meta, chatgpt, etc. |
| `utm_medium` | Paramètre d'URL | cpc, paid_social, referral |
| `utm_campaign` | Paramètre d'URL | Voir les conventions dans tracking-setup.md |
| `utm_content` | Paramètre d'URL | Identifiant de l'annonce ou du visuel |
| `utm_term` | Paramètre d'URL | Mot-clé (`{keyword}` dans le modèle de suivi Google) |
| `gclid` | Paramètre d'URL | Google Ads |
| `gbraid` / `wbraid` | Paramètre d'URL | Google Ads (iOS) |
| `msclkid` | Paramètre d'URL | Microsoft Ads (marquage automatique activé) |
| `fbclid` | Paramètre d'URL | Meta ; sert aussi à reconstruire le témoin `_fbc` côté serveur |
| `oppref` | Paramètre d'URL | Identifiant de clic ChatGPT Ads (à confirmer dans la documentation OpenAI le jour de l'installation) |
| `fbp` | Témoin `_fbp` | Seulement si le consentement publicitaire est accordé |
| `landing_page` | `window.location.pathname` à la première visite | — |
| `referrer` | `document.referrer` à la première visite | Repère les visites venant de chatgpt.com, copilot, perplexity |
| `forfait_presel` | Paramètre `?forfait=` | — |
| `variante_hero` | Paramètre `?v=` | Pour les tests A/B de titres |
| `event_id` | UUID généré au chargement du formulaire | **Clé de déduplication** entre le pixel et le serveur (Meta, OpenAI) |
| `route` | Calculée à l'envoi (A/B/C/D) | — |
| `lead_score` | Calculé (section 7) | — |
| `consent_state` | État de la bannière au moment de l'envoi (`granted`/`denied` pour `ad_storage`, `analytics_storage`, `ad_user_data`, `ad_personalization`) | — |

**Persistance des paramètres :** un script lit les paramètres à l'arrivée et les garde dans `sessionStorage` pendant toute la visite. **Pas de témoin persistant sans consentement.** Si le consentement publicitaire est accordé, copier aussi les paramètres dans un témoin de premier niveau de 90 jours (`evx_attr`). Les pages d'atterrissage contenant le formulaire, les paramètres sont présents dans l'URL au moment de l'envoi dans la majorité des cas.

```html
<!-- À placer dans Divi > Options du thème > Intégration > <head> -->
<script>
(function(){
  var keys=['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','gbraid','wbraid','msclkid','fbclid','oppref','forfait','v'];
  var p=new URLSearchParams(location.search), d={};
  try{ d=JSON.parse(sessionStorage.getItem('evx_attr')||'{}'); }catch(e){}
  keys.forEach(function(k){ if(p.get(k)) d[k]=p.get(k); });
  if(!d.landing_page){ d.landing_page=location.pathname; d.referrer=document.referrer||''; }
  try{ sessionStorage.setItem('evx_attr',JSON.stringify(d)); }catch(e){}
  window.evxAttr=d;
})();
</script>
```
Dans Gravity Forms, remplir chaque champ caché avec le filtre `gform_field_value_{nom}` (PHP) ou un court script qui lit `window.evxAttr` au moment de l'affichage du formulaire.

---

## 6. Événements de conversion déclenchés par chaque envoi

| Moment | Événement dataLayer | GA4 | Google Ads | Meta (pixel + CAPI) | Microsoft UET | OpenAI (oaiq + CAPI) |
|---|---|---|---|---|---|---|
| Étape 1 affichée et première réponse | `form_start` | `form_start` | — | — | — | — |
| Chaque étape terminée | `form_step` (`step`=1–5) | `form_step` | — | — | — | — |
| Tout envoi valide (A, B, C, D) | `lead_submit` (déclencheur unique, voir le code plus bas) | `lead_tous` (paramètre `lead_route`) | **lead_tous** (secondaire, observation seulement) | `LeadTous` (événement personnalisé, non optimisé) | `lead_tous` (objectif secondaire) | — |
| Envoi route **A** ou **B** | `lead_submit` + `lead_qualifie: true` | `lead_qualifie` (événement clé) | **lead_qualifie** (principal, enchères) | `Lead` (standard, optimisé), avec `event_id` | `lead_qualifie` (objectif principal) | `lead_created` |
| Envoi route **A** | `lead_submit` + `lead_route: 'A'` | `lead_prioritaire` | (inclus dans lead_qualifie, valeur plus élevée) | paramètre `lead_route=A` | — | — |
| Envoi route **C** ou **D** | `lead_submit` + `lead_qualifie: false` | `lead_non_qualifie` | aucun | `LeadNonQualifie` (personnalisé) | aucun | aucun |
| Réservation Calendly | `appel_reserve` | `appel_reserve` | secondaire | `Schedule` | secondaire | `appointment_scheduled` |
| Achat Booqable (boutique) | `purchase` | `purchase` (domaine croisé) | secondaire | `Purchase` (secondaire) | secondaire | `order_created` |

> Les noms de la colonne GA4 sont ceux de tracking-setup.md §2 : `lead_tous` et `lead_qualifie` portent le **même nom** dans GA4, Google Ads et Microsoft. L'ancienne balise GA4 `generate_lead` (qui attendait déjà `lead_submit`) doit être **supprimée** avant la mise en ligne, sinon elle enverrait des doublons (tracking-setup.md §0, point 0.5).

**Valeurs de conversion (provisoires, à recalibrer après 60 jours avec le taux de conclusion réel) :**
- Route A : 400 $ (panier moyen visé d'environ 2 000 $ × 20 % de conclusion)
- Route B : 150 $ (environ 1 500 $ × 10 %)
- Routes C et D : 0 $

**Code dataLayer à déclencher à l'envoi réussi** (hook de confirmation de Gravity Forms) :
```js
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'lead_submit',               // déclencheur unique dans GTM ; GTM répartit selon la route
  lead_route: 'A',                    // A | B | C | D
  lead_qualifie: true,                // true pour A et B
  lead_value: 400,
  currency: 'CAD',
  event_type: 'corpo_party',
  budget_band: '2500_4999',
  event_id: '{{event_id}}',           // le même UUID est envoyé au serveur (CAPI)
  user_data: {                        // seulement si consent_mesure = oui ; GTM le hache (SHA-256)
    email: 'prospect@exemple.com',
    phone_number: '+15145551234'
  }
});
```

---

## 7. Pointage du lead (`lead_score`, de 0 à 100) pour prioriser les rappels

| Critère | Points |
|---|---|
| Budget 5 000 $ et plus / 2 500–4 999 $ / 1 000–2 499 $ / 600–999 $ / inconnu / moins de 600 $ | 40 / 30 / 15 / 10 / 10 / 0 |
| Type de client : entreprise ou agence / organisme / particulier | 20 / 15 / 5 |
| Invités : 150 et plus / 75–149 / 30–74 / moins de 30 | 15 / 12 / 6 / 0 |
| Date dans 10 à 90 jours / plus de 90 jours / moins de 10 jours | 10 / 5 / 8 |
| Rôle : je décide / je recommande / comité | 10 / 6 / 4 |
| Échéance : cette semaine / 30 jours / plus tard | 5 / 3 / 0 |

Plus de 70 : rappel immédiat par le propriétaire. De 40 à 70 : rappel dans les 15 minutes par la personne de garde. Moins de 40 : selon la route.

---

## 8. Branchements (automatisation)

1. Gravity Forms → **webhook** → Make (ou Zapier) :
   1. Créer ou mettre à jour le contact et la transaction dans **HubSpot gratuit** (pipeline « Événements », étape « Nouveau ») ou ajouter une ligne dans la feuille Google « Pipeline ».
   2. Envoyer le texto au prospect par **Twilio**, ou par un service de téléphonie d'affaires avec API offrant des numéros 514 ou 450.
   3. Envoyer une alerte texto au téléphone de garde pour les routes A et B.
   4. Envoyer les événements serveur : Meta CAPI (`Lead`, avec `event_id`), OpenAI CAPI (`lead_created`, avec le même identifiant), seulement pour A et B, et avec les données hachées seulement si `consent_mesure` = oui.
2. Courriel de confirmation : notification Gravity Forms envoyée depuis `{{COURRIEL}}` (SPF, DKIM et DMARC configurés), avec un modèle par route. Textes dans suivi-leads.md.
3. Test de bout en bout avant la mise en ligne : 1 envoi par route (A, B, C, D), avec et sans consentement. Vérifier le CRM, les textos, GA4 DebugView, Meta Test Events, l'aperçu de Google Tag Assistant et les diagnostics du pixel OpenAI.
