# Formulaire de soumission Évenox (partagé, 4 étapes)

*Version du 7 octobre 2026. Ce formulaire sert sur toutes les pages d'atterrissage Google Ads : Fête de Noël d'entreprise, Lettres lumineuses 4 pi, puis Photobooth, Mobilier et Mariage. Chaque page le préremplit différemment (voir « Préremplissage par page » à la fin).*

**Objectif :** obtenir moins de demandes, mais de meilleures. Les questions faciles viennent d'abord, les coordonnées en dernier. Le budget est obligatoire. L'adresse de la salle est facultative.

---

## Variables à remplir avant la mise en ligne

| Variable | Rôle | Valeur |
|---|---|---|
| `{{BUDGET_PLANCHER}}` | Sous ce budget, le lead est classé D (proposition proposée : boutique en ligne) | 500 $ par défaut, à confirmer |
| `{{DELAI_MIN_JOURS}}` | Délai minimum de réservation accepté sans appel préalable | 7 jours par défaut, à confirmer |
| `{{HEURES_OUVRABLES}}` | Heures où quelqu'un répond au téléphone et rappelle les leads | Site actuel : lun. au ven. 12 h à 18 h. **Le délai « 2 h ouvrables » doit être tenable sur ces heures.** |
| `{{TELEPHONE}}` | Numéro affiché (suivi d'appels si possible) | À fournir |
| `{{COURRIEL_SOUMISSION}}` | Adresse d'envoi et de réponse | soumission@evenox.ca recommandé (pas de Gmail) |
| `{{RESPONSABLE_PRP}}` | Personne responsable de la protection des renseignements personnels (Loi 25) : nom, titre, courriel | À désigner (par défaut, la personne ayant la plus haute autorité dans l'entreprise) |
| `{{URL_POLITIQUE_CONFIDENTIALITE}}` | Politique de confidentialité en français | À publier ou mettre à jour |
| `{{URL_BOUTIQUE}}` | Boutique en ligne pour les petites commandes et la cueillette | evenox.booqableshop.com |
| `{{DUREE_CONSERVATION}}` | Durée de conservation des leads non convertis (Loi 25) | Suggestion : 3 ans, à valider |
| `{{URL_PORTFOLIO}}` | Galerie ou PDF de réalisations | À fournir |

---

## Structure générale

- Barre de progression en haut : « Étape 1 de 4 », « Étape 2 de 4 », etc. Pas de pourcentage.
- Bouton de chaque étape : **Continuer** (étapes 1 à 3), **Recevoir ma soumission** (étape 4). Lien discret « Retour » à gauche.
- Validation **à chaque étape**, en direct après la sortie du champ (pas au premier caractère).
- Les réponses des étapes précédentes sont gardées si la personne revient en arrière.
- Langue : français par défaut. Le lien « English » mène à une version anglaise complète, jamais plus avantageuse (Charte de la langue française, art. 52 et 58).
- Microcopie permanente sous le formulaire, à toutes les étapes : **« Réponse en moins de 2 h ouvrables. Soumission détaillée en 24 h. »**

---

## Étape 1 de 4 : Votre événement

**Titre d'étape :** Parlez-nous de votre événement
**Sous-titre :** Trois questions pour vérifier votre date.

| # | Libellé exact | Type | Options | Obligatoire | Validation et microcopie |
|---|---|---|---|---|---|
| 1.1 | Type d'événement | Boutons radio (tuiles) | Fête de Noël ou des Fêtes d'entreprise · Gala, lancement ou soirée corporative · Congrès ou activation de marque · Mariage · Fête privée (50 invités et plus) · Autre | Oui | Erreur : « Choisissez le type d'événement. » |
| 1.2 | Date de l'événement | Sélecteur de date (format JJ/MM/AAAA) + case « Ma date n'est pas encore fixée » | Dates passées désactivées | Oui (date **ou** case cochée) | Si la date est dans moins de `{{DELAI_MIN_JOURS}}` jours : message en ligne, sans bloquer : « Votre date approche. Nous ferons tout pour vous répondre en priorité. Pour une réponse immédiate, appelez-nous au `{{TELEPHONE}}`. » Si la case est cochée, afficher : « Mois prévu » (liste : les 12 prochains mois). |
| 1.3 | Ville de l'événement | Liste déroulante avec recherche | Laval · Montréal · Sainte-Thérèse · Blainville · Boisbriand · Rosemère · Lorraine · Bois-des-Filion · Mirabel · Saint-Eustache · Deux-Montagnes · Terrebonne · Mascouche · Repentigny · Saint-Jérôme · Laurentides (Saint-Sauveur à Mont-Tremblant) · Rive-Sud · Québec ou Lévis · Autre ville | Oui | Si « Rive-Sud », « Québec ou Lévis » ou « Autre ville » : message en ligne : « Nous desservons cette région sur demande. Des frais de transport peuvent s'appliquer ; ils seront indiqués clairement dans votre soumission. » |

**Note de conception :** la liste de villes remplace l'adresse complète exigée sur le site actuel. Elle sert au calcul du score (zone) et ne bloque personne.

---

## Étape 2 de 4 : Ce dont vous avez besoin

**Titre d'étape :** Que souhaitez-vous créer ?
**Sous-titre :** Cochez tout ce qui vous intéresse. Rien n'est engageant.

| # | Libellé exact | Type | Options | Obligatoire | Validation et microcopie |
|---|---|---|---|---|---|
| 2.1 | Nombre d'invités prévu | Boutons radio | Moins de 50 · 50 à 100 · 100 à 200 · 200 à 400 · Plus de 400 | Oui | Erreur : « Indiquez une estimation ; vous pourrez l'ajuster plus tard. » |
| 2.2 | Services souhaités | Cases à cocher (tuiles avec petite photo) | Lettres lumineuses 4 pi · Photobooth (borne photo) · Mobilier lounge · Mobilier cocktail · Mobilier gala · Forfait ambiance complet (on vous conseille) · Autre (précisez) | Oui, au moins 1 | Erreur : « Choisissez au moins un service, ou "Forfait ambiance complet". » « Autre » ouvre un champ texte de 100 caractères. |
| 2.3 | Texte de vos lettres lumineuses | Champ texte court | — | Non (affiché seulement si « Lettres lumineuses » est coché) | Indication : « Ex. : vos initiales, LOVE, 2027, le nom de votre entreprise. » Maximum `{{NB_LETTRES_MAX}}` caractères. |
| 2.4 | Votre lieu | Boutons radio | Salle de réception ou hôtel · Restaurant · Nos bureaux · Extérieur · Lieu pas encore choisi | Oui | — |
| 2.5 | Nom ou adresse du lieu | Champ texte | — | **Non** | Indication : « Facultatif. Cela nous aide à prévoir l'accès, le quai et l'électricité. » |

---

## Étape 3 de 4 : Votre projet

**Titre d'étape :** Pour vous proposer le bon forfait
**Texte d'ancrage (au-dessus du budget) :** « Nos forfaits ambiance pour entreprises se situent entre `{{PRIX_FORFAIT_MIN}}` $ et `{{PRIX_FORFAIT_MAX}}` $, livraison, installation et reprise comprises selon le forfait. » *(fourchette fermée, conforme à la règle de marque : jamais « à partir de » ni « dès »)*

| # | Libellé exact | Type | Options | Obligatoire | Validation et microcopie |
|---|---|---|---|---|---|
| 3.1 | Budget prévu pour la location | Boutons radio | Moins de 500 $ · 500 $ à 1 000 $ · 1 000 $ à 2 500 $ · 2 500 $ à 5 000 $ · 5 000 $ et plus · Je ne sais pas encore | Oui | Indication : « Une fourchette suffit. Elle nous permet de vous proposer des options réalistes, sans surprise. » |
| 3.2 | Vous êtes… | Boutons radio | Responsable en entreprise (RH, direction, adjointe, comité social) · Planificateur ou agence événementielle · Futurs mariés · Particulier · Gestionnaire de salle ou traiteur | Oui | — |
| 3.3 | Où en êtes-vous ? | Boutons radio | Prêt à réserver cette semaine · Décision ce mois-ci · Décision dans 1 à 3 mois · Je compare les options | Oui | — |
| 3.4 | Autre précision | Zone de texte | — | Non | Indication : « Thème, couleurs de votre marque, horaire, contraintes du lieu… » 500 caractères max. |

---

## Étape 4 de 4 : Vos coordonnées

**Titre d'étape :** Où vous envoyer votre soumission ?
**Sous-titre :** Un membre de notre équipe vous répond en moins de 2 h ouvrables.

| # | Libellé exact | Type | Obligatoire | Validation et microcopie |
|---|---|---|---|---|
| 4.1 | Prénom | Texte | Oui | 2 caractères minimum. Erreur : « Indiquez votre prénom. » |
| 4.2 | Nom | Texte | Oui | Erreur : « Indiquez votre nom. » |
| 4.3 | Courriel | Courriel | Oui | Format valide ; refuser les domaines jetables (liste côté serveur). Erreur : « Vérifiez votre adresse courriel. » Indication si type = entreprise : « Votre courriel professionnel, idéalement. » |
| 4.4 | Téléphone | Téléphone (masque (000) 000-0000) | Oui | 10 chiffres, indicatif nord-américain valide. Erreur : « Entrez un numéro à 10 chiffres. » Indication : « Pour vous joindre rapidement si votre date est très demandée. » |
| 4.5 | Entreprise ou organisation | Texte | Oui si 3.2 = « Responsable en entreprise » ou « Planificateur ou agence » ; masqué sinon | — |
| 4.6 | Langue de communication préférée | Boutons radio : Français · English | Oui (Français présélectionné) | — |
| 4.7 | Comment avez-vous connu Évenox ? | Liste : Recherche Google · Google Maps · Instagram ou Facebook · Recommandation · Déjà client · Vu à un événement · Autre | Non | Sert à recouper l'attribution (aujourd'hui, 29 leads sur 315 ont une source). |
| 4.8 | Case marketing (voir texte Loi 25) | Case à cocher, **décochée** par défaut | Non | — |
| 4.9 | Case mesure publicitaire (voir texte Loi 25) | Case à cocher, **décochée** par défaut | Non | — |
| — | Avis de confidentialité (texte sous le bouton) | Texte | — | — |
| — | reCAPTCHA v3 (ou Cloudflare Turnstile) invisible + champ pot de miel | Technique | — | Score reCAPTCHA < 0,5 = lead marqué « Spam probable », pas de conversion envoyée. |

**Bouton :** Recevoir ma soumission
**Sous le bouton :** « Aucun engagement. Aucun paiement demandé à cette étape. »

### Messages d'erreur globaux
- Champ manquant : « Il manque une information pour passer à l'étape suivante. »
- Échec d'envoi (serveur) : « Votre demande n'a pas pu être envoyée. Réessayez ou écrivez-nous à `{{COURRIEL_SOUMISSION}}`. Vos réponses sont conservées. »

---

## Texte Loi 25 du formulaire

*À faire valider par un juriste. Rédigé selon la Loi sur la protection des renseignements personnels dans le secteur privé (art. 8, 8.1, 14 et 17, modifiés par la Loi 25) et la Loi canadienne anti-pourriel pour la case marketing.*

**Avis sous le bouton (toujours visible, sans case à cocher) :**

> En envoyant ce formulaire, vous nous transmettez vos coordonnées et les détails de votre événement afin que nous puissions vous répondre et préparer votre soumission. Ces renseignements sont consultés uniquement par l'équipe d'Évenox et conservés dans nos outils de gestion, dont certains sont hébergés à l'extérieur du Québec. Nous les conservons au plus `{{DUREE_CONSERVATION}}` après notre dernier échange, puis les détruisons. Vous pouvez demander à y accéder, à les faire corriger ou à les faire supprimer en écrivant à `{{RESPONSABLE_PRP}}`. Détails : [Politique de confidentialité]({{URL_POLITIQUE_CONFIDENTIALITE}}).

**Case 4.8 (marketing, facultative, décochée) :**

> ☐ J'accepte de recevoir des idées et des offres d'Évenox par courriel. Je peux me désabonner en tout temps.

**Case 4.9 (mesure publicitaire, facultative, décochée) :**

> ☐ J'accepte qu'Évenox transmette à Google une version chiffrée (hachée) de mon courriel et de mon téléphone, uniquement pour mesurer l'efficacité de ses annonces. Ces données ne sont pas utilisées pour me présenter de la publicité.

**Règles techniques liées au consentement :**
- La case 4.9 et le consentement « publicité » de la bannière de témoins (CookieYes ou Complianz) doivent **tous les deux** être positifs pour que les données hachées soient envoyées (conversions avancées pour les prospects et import Data Manager). Sinon, on envoie seulement le GCLID, et seulement si la bannière a été acceptée.
- Les champs cachés `gclid`, `gbraid` et `wbraid` ne sont remplis **que si** la personne a accepté les témoins publicitaires (script GTM conditionné au consentement, voir `GUIDE-TRACKING-LOI25.md`, section B.6).
- Conserver dans Notion la valeur des cases 4.8 et 4.9, avec la date et l'heure : c'est la preuve du consentement.
- Ne jamais précocher une case. Ne jamais lier l'envoi de la soumission à l'acceptation du marketing.

---

## Champs cachés

Tous en type « hidden » (ou champ texte masqué en CSS si l'outil n'a pas de champ caché). Noms exacts, sensibles à la casse.

| Champ | Contenu | Rempli par | Condition |
|---|---|---|---|
| `gclid` | Identifiant de clic Google Ads | URL ou stockage local 90 jours (script officiel Google) | Consentement publicitaire |
| `gbraid` | Identifiant de clic iOS (applications) | Idem | Consentement publicitaire |
| `wbraid` | Identifiant de clic iOS (web) | Idem | Consentement publicitaire |
| `utm_source` | ex. google | URL, sinon premier passage enregistré | Aucune (paramètre de campagne non identifiant) |
| `utm_medium` | ex. cpc | Idem | Aucune |
| `utm_campaign` | ex. s-fr-corporatif-fetes | Idem | Aucune |
| `utm_term` | Mot-clé | Idem | Aucune |
| `utm_content` | Variante d'annonce | Idem | Aucune |
| `page_atterrissage` | URL de la page où le formulaire a été envoyé, sans paramètres | JavaScript | Aucune |
| `page_entree` | Première page vue de la session | Stockage de session | Aucune |
| `referent` | Domaine référent | `document.referrer` | Aucune |
| `langue_page` | fr ou en | Attribut `lang` de la page | Aucune |
| `variante_page` | ex. noel-v1, lettres-v1 (tests A/B) | Valeur fixe par page | Aucune |
| `horodatage` | Date et heure ISO 8601, fuseau America/Montreal | Serveur | Aucune |
| `consent_ads` | granted ou denied (état de la bannière à l'envoi) | Lecture du CMP | Aucune |
| `score_points` et `score_lettre` | Calculés côté serveur ou dans Zapier (voir plus bas) | Serveur ou Zapier | Aucune ; jamais calculés dans le navigateur |

---

## Après l'envoi

1. **Redirection** vers une page de remerciement propre à chaque page (`/merci-fete-noel`, `/merci-lettres`). C'est cette page, ou l'événement `generate_lead` déclenché sur l'envoi réussi, qui déclenche la conversion Google Ads « Demande de soumission » (comptage : une seule). Elle ne déclenche **jamais** la conversion « Lead qualifié ».
2. **Courriel de confirmation automatique** en français (ou en anglais si 4.6 = English). Textes dans chaque fichier de page.
3. **Fiche Notion créée** dans « Leads & Réservations » (via Zapier ou webhook), avec tous les champs, le score et le statut initial ci-dessous.
4. **Alerte immédiate** à l'équipe (texto ou notification) pour les leads A et B.

---

## Notation des leads (A, B, C, D)

### Points

| Critère | Réponse | Points |
|---|---|---|
| Budget (3.1) | Moins de 500 $ | Éliminatoire (D) |
| | 500 $ à 1 000 $ | 5 |
| | 1 000 $ à 2 500 $ | 15 |
| | 2 500 $ à 5 000 $ | 25 |
| | 5 000 $ et plus | 30 |
| | Je ne sais pas encore | 8 |
| Type d'événement (1.1) | Fête de Noël d'entreprise · Gala ou soirée corporative · Congrès ou activation | 15 |
| | Mariage | 12 |
| | Fête privée (50 invités et plus) | 5 |
| | Autre | 0 |
| Invités (2.1) | Moins de 50 | 0 |
| | 50 à 100 | 5 |
| | 100 à 200 | 10 |
| | 200 à 400 ou plus de 400 | 15 |
| Délai avant la date (1.2) | Moins de `{{DELAI_MIN_JOURS}}` jours | 0 + drapeau « URGENT » (appel immédiat) |
| | 7 à 20 jours | 5 |
| | 3 à 12 semaines | 15 |
| | 3 à 12 mois | 10 |
| | Plus de 12 mois, ou date non fixée | 3 |
| Zone (1.3) | Laval, Montréal, Rive-Nord (de Saint-Eustache à Repentigny), Saint-Jérôme | 10 |
| | Laurentides nord, Rive-Sud, Québec ou Lévis | 3 |
| | Autre ville | 0 (voir règles éliminatoires) |
| Rôle (3.2) | Responsable en entreprise · Planificateur ou agence | 10 |
| | Futurs mariés | 8 |
| | Gestionnaire de salle ou traiteur | 6 |
| | Particulier | 3 |
| Échéancier (3.3) | Cette semaine | 10 |
| | Ce mois-ci | 8 |
| | 1 à 3 mois | 5 |
| | Je compare les options | 0 |
| Services (2.2) | 2 services ou plus, ou « Forfait ambiance complet » | +5 |

Maximum : 110 points.

### Règles éliminatoires (D d'office, avant le calcul)
- Budget « Moins de 500 $ » (ou sous `{{BUDGET_PLANCHER}}`).
- « Autre ville » **et** budget sous 2 500 $.
- Date déjà passée, courriel jetable, reCAPTCHA < 0,5 ou pot de miel rempli (ces trois derniers : « Spam », supprimé, aucun courriel envoyé).

### Seuils

| Score | Points | Profil type | Délai de rappel |
|---|---|---|---|
| **A** | 70 et plus | Entreprise, 100 invités et plus, budget de 2 500 $ et plus, date dans 3 à 12 semaines | Moins de 1 h ouvrable, par téléphone |
| **B** | 50 à 69 | Mariage ou entreprise avec budget moyen ou inconnu, zone desservie | Moins de 2 h ouvrables |
| **C** | 30 à 49 | Petit événement, longue échéance, ou hors zone principale | Moins de 24 h, courriel puis appel |
| **D** | Moins de 30, ou règle éliminatoire | Petit budget, petite fête privée, hors zone | Courriel automatique courtois, aucun appel |

Exemples vérifiés :
- Fête de Noël, Laval, 100 à 200 invités, 2 500 à 5 000 $, dans 8 semaines, RH, décision ce mois-ci, 3 services : 25 + 15 + 10 + 15 + 10 + 10 + 8 + 5 = **98 → A**.
- Entreprise, Montréal, 50 à 100 invités, budget inconnu, dans 5 semaines, RH, 1 à 3 mois, 1 service : 8 + 15 + 5 + 15 + 10 + 10 + 5 = **68 → B**.
- Mariage, Mirabel, 100 à 200 invités, lettres seulement, 500 à 1 000 $, dans 9 mois, futurs mariés, 1 à 3 mois : 5 + 12 + 10 + 10 + 10 + 8 + 5 = **60 → B**.
- Fête privée, 40 invités, 500 à 1 000 $, dans 2 semaines, particulier, je compare : 5 + 5 + 0 + 5 + 10 + 3 + 0 = **28 → D**.

### Correspondance avec les statuts Notion

Les statuts Notion existants restent les mêmes : **Nouveau, Qualifié, Soumission envoyée, Gagné, Perdu**. On ajoute trois propriétés : `Score` (sélection A/B/C/D), `Points` (nombre) et `Motif de perte` (sélection).

| Score | Statut Notion à la création | Passage à « Qualifié » | Envoi à Google Ads |
|---|---|---|---|
| A | Nouveau (priorité haute, alerte immédiate) | Dès que l'appel confirme la date, la zone et le budget | Conversion « Lead qualifié » à l'étape Qualifié, puis « Soumission envoyée » et « Gagné » (avec la valeur réelle du contrat) |
| B | Nouveau | Après l'appel, si les 3 points sont confirmés | Idem |
| C | Nouveau | Seulement si l'appel révèle un vrai projet (le score peut être relevé à B à la main) | Seulement s'il passe à Qualifié |
| D | **Perdu**, motif « Hors cible (automatique) » | Jamais automatiquement ; un humain peut le rouvrir | Jamais |
| Spam | Supprimé, ou Perdu avec motif « Spam » | — | Jamais |

**Règle de base :** c'est le passage manuel à « Qualifié » qui déclenche l'envoi (Zapier : « Updated properties in data source item » vers « Send Offline Conversion », ou Google Sheet vers Data Manager). Le score automatique trie et priorise ; il ne remplace pas l'appel.

Options du `Motif de perte` : Hors cible (automatique) · Budget insuffisant · Date non disponible · Hors zone · A choisi un concurrent · Pas de réponse après 3 relances · Événement annulé · Spam.

### Courriel automatique aux leads D

**Objet :** Votre demande à Évenox

> Bonjour {{Prénom}},
>
> Merci d'avoir pensé à Évenox pour votre événement du {{Date}}.
>
> Nos forfaits clé en main, avec livraison, installation et reprise par notre équipe, sont conçus pour des événements d'un budget plus important que celui que vous avez indiqué. Nous préférons vous le dire franchement plutôt que de vous faire attendre.
>
> Pour un projet plus simple, notre boutique en ligne vous permet de réserver directement des articles à la pièce, avec cueillette possible à notre entrepôt de Sainte-Thérèse : {{URL_BOUTIQUE}}.
>
> Si votre projet évolue, répondez simplement à ce courriel : nous serons heureux d'en reparler.
>
> L'équipe Évenox
> {{TELEPHONE}} · evenox.ca

---

## Préremplissage par page

| Page | 1.1 Type présélectionné | 2.2 Services précochés | Texte d'ancrage étape 3 | `variante_page` |
|---|---|---|---|---|
| Fête de Noël d'entreprise | Fête de Noël ou des Fêtes d'entreprise | Forfait ambiance complet | Fourchette des 3 forfaits ambiance | noel-v1 |
| Lettres lumineuses 4 pi | Aucun (corporatif et mariage) | Lettres lumineuses 4 pi (champ 2.3 visible) | « Nos lettres lumineuses 4 pi : `{{PRIX_LETTRE}}` $ par lettre ; forfaits de `{{PRIX_PACK_INITIALES}}` $ à `{{PRIX_PACK_NOM}}` $. » | lettres-v1 |

Le préremplissage se fait par paramètre d'URL (`?type=noel&services=forfait`) ou par une valeur par défaut propre à chaque copie du formulaire. Les choix restent modifiables.

---

## Notes techniques pour le pigiste

- **Le module Formulaire de contact de Divi ne fait ni étapes ni champs cachés.** Utiliser une extension de formulaire qui gère les formulaires en plusieurs pages, les champs cachés remplis par paramètre d'URL, la logique conditionnelle, reCAPTCHA v3 ou Turnstile, et l'envoi par webhook : Gravity Forms, Fluent Forms Pro, WPForms Pro ou Divi Form Builder (Divi Engine). Choisir celle que le pigiste maîtrise.
- **Conversion Google Ads :** balise via GTM sur l'envoi réussi (événement de l'extension ou chargement de la page merci), comptage « Une seule », catégorie « Envoi de formulaire pour prospects », principale. Variables de données fournies par l'utilisateur (courriel, téléphone) seulement si la case 4.9 est cochée.
- **Test obligatoire avant de dépenser :** un faux lead complet (avec `?gclid=TEST123` dans l'URL et témoins acceptés) doit apparaître dans Notion avec le GCLID, le score et le bon statut, et la conversion doit apparaître dans Google Ads dans les 24 h.
- **Vitesse :** le formulaire doit se charger sans bloquer le rendu de la page (script reCAPTCHA chargé à la première interaction).
