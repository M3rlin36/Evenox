# Page d'atterrissage — Événements corporatifs (Google Search corpo, Microsoft, Meta, ChatGPT Ads)

> Texte prêt à coller dans Divi (WordPress), section par section, avec le module Divi à utiliser.
> Langue : français du Québec, vouvoiement. Ton : haut de gamme, concret, sans superlatifs invérifiables.

---

## 0. Avant de coller : réglages de la page

| Élément | Valeur |
|---|---|
| URL (slug) | Page mère `/corporatif/` + 6 sous-pages, **les mêmes URL que les annonces** (voir campagnes/google-ads/README.md) : `/corporatif/party-des-fetes/`, `/corporatif/5-a-7/`, `/corporatif/gala/`, `/corporatif/team-building/`, `/corporatif/photobooth-360/`, `/corporatif/activation-de-marque/`. Une seule page modèle, dupliquée ; seuls le H1, le sous-titre et l'image du hero changent (voir les variantes ci-dessous) |
| Indexation | **noindex** (page réservée aux annonces, pour ne pas concurrencer `/party-bureau-corporatif/` et `/nos-forfaits-tout-inclus/`). Dans Yoast : Avancé → « Autoriser les moteurs de recherche à afficher cette page » = Non. |
| Gabarit Divi | Page vierge (« Blank Page ») : **sans menu principal ni pied de page complet**. Seuls liens sortants : téléphone, texto, politique de confidentialité. |
| Balise title | `Party de bureau et événement corporatif clé en main dès 1 195 $ \| Évenox` |
| Meta description | `Décor, jeux géants, cabine photo avec préposé : un seul fournisseur, une seule facture. Rive-Nord, Laval, Montréal. Bon de commande et net 30 sur approbation.` |
| Langue | `fr-CA` (voir correctifs-urgents.md) |
| Vitesse | Moins de 3 s sur mobile. Images WebP de 200 Ko maximum et chargement différé (lazy) sous la ligne de flottaison. Pas de vidéo en lecture automatique dans le haut de la page. |
| Barre collante mobile | Trois boutons fixés au bas de l'écran : **Appeler** (`tel:+15145591893`, ou numéro de suivi d'appels) · **Texto** (`sms:+15145591893`) · **Soumission** (ancre `#soumission`) |

### Variables à remplir une seule fois (et à garder identiques partout sur le site)

| Variable | Valeur à utiliser | Source |
|---|---|---|
| `{{NOTE_GOOGLE}}` | 4,8 (vérifier la note réelle de la fiche Google le jour de la mise en ligne) | Fiche Google Business |
| `{{NB_AVIS}}` | Nombre réel d'avis Google (52 au 7 oct. 2026) | Fiche Google Business |
| `{{NB_EVENEMENTS}}` | Un seul chiffre vérifiable, « 500+ » ou « 1 000+ ». Le même partout. | Registre Booqable / factures |
| `{{TEL}}` | 514-559-1893, ou le numéro de suivi d'appels de la campagne (voir tracking-setup.md) | — |
| `{{COURRIEL}}` | info@evenox.ca (après la migration hors Gmail) | correctifs-urgents.md |

**H1 de chaque sous-page** (le reste de la page est identique) :
- `/corporatif/party-des-fetes/` → « Votre party des Fêtes clé en main, dès 1 195 $ »
- `/corporatif/5-a-7/` → « Votre 5 à 7 d'équipe clé en main, dès 1 195 $ »
- `/corporatif/gala/` → « Votre gala corporatif clé en main, dès 2 495 $ »
- `/corporatif/team-building/` → « Jeux géants et activité d'équipe livrés au bureau, dès 1 195 $ »
- `/corporatif/photobooth-360/` → « Cabine photo 360 avec préposé, à l'image de votre entreprise »
- `/corporatif/activation-de-marque/` → « Lancement ou activation de marque : décor, mobilier et cabine 360, un seul fournisseur »
- `/corporatif/` → titre par défaut (section 1)

Le paramètre `?v=` reste disponible pour les tests A/B de titres (champ caché `variante_hero`).

---

## 1. Hero (au-dessus de la ligne de flottaison)

**Module Divi :** Section pleine largeur avec image d'arrière-plan (vraie photo d'un party de bureau installé par Évenox : lettres lumineuses et mur floral, et non une photo de banque d'images) et un voile foncé à 55 %. À droite sur ordinateur, sous le texte sur mobile : l'étape 1 du formulaire (voir formulaire-qualification.md).

**Sur-titre (petit, en majuscules) :**
RIVE-NORD · LAVAL · MONTRÉAL — ÉVÉNEMENTS D'ENTREPRISE

**H1 :**
Votre party de bureau clé en main, dès 1 195 $

**Sous-titre :**
Décor, jeux géants, popcorn et cabine photo avec préposé. Un seul fournisseur, un seul prix, une seule facture. Nous installons pendant les heures de bureau et nous repartons avec tout.

**Trois puces de réassurance (module Blurb avec icônes) :**
- ✓ Prix affiché, sans surprise sur la facture
- ✓ Bon de commande et facturation nette 30 jours (sur approbation de crédit)
- ✓ Installé et testé avant l'arrivée de vos invités

**Bouton principal :** `Voir les forfaits et ma date` → ancre `#soumission`
**Lien secondaire (texte) :** `ou appelez-nous : {{TEL}}`

**Bandeau de preuve (sous le hero) :**
★ {{NOTE_GOOGLE}}/5 sur Google ({{NB_AVIS}} avis) · {{NB_EVENEMENTS}} événements livrés depuis 2022 · Réponse en moins de 15 minutes pendant les heures d'ouverture

> Ne pas écrire « réponse en 15 minutes » tant que la procédure de suivi-leads.md n'est pas en place. Sinon, écrire « Réponse le jour même ».

---

## 2. Logos clients (« Ils nous ont fait confiance »)

**Module Divi :** Rangée de 5 ou 6 images en niveaux de gris, de 40 px de haut, avec un défilement automatique sur mobile.

**Titre (H2 discret) :** Ils nous ont fait confiance

**Logos :** RBC · PwC · Desjardins · Polytechnique Montréal · [Ville de ___] · [Ville de ___]

> ⚠️ Obtenir **l'autorisation écrite** de chaque client avant d'afficher son logo. Un courriel du contact suffit (« Oui, vous pouvez afficher notre logo »). Le classer dans le dossier client. Sans autorisation, remplacer le logo par un texte : « Banques, cabinets comptables, municipalités et écoles de la Rive-Nord ».

---

## 3. Le problème → la promesse (moins de 80 mots)

**Module Divi :** Texte centré, largeur maximale de 700 px.

**H2 :** Un party réussi, sans gérer cinq fournisseurs

Vous avez un budget, une date et une salle. Ce que vous n'avez pas, c'est le temps d'appeler un fournisseur pour le décor, un autre pour les jeux et un troisième pour la cabine photo, puis d'attendre des rappels qui ne viennent pas.

Chez Évenox, vous choisissez un forfait. Nous livrons, installons, animons et démontons. Vous recevez une seule facture, conforme pour votre comptabilité.

---

## 4. Les trois forfaits (ancrage de prix)

**Module Divi :** Pricing Tables (3 colonnes). Celle du milieu est mise en vedette (« Featured ») : bordure de la couleur d'accent, légèrement plus haute, badge.
**Mention sous les prix :** « Prix avant taxes. Installation, démontage et reprise inclus. Livraison selon la distance de Sainte-Thérèse : 100 $ jusqu'à 10 km, puis 7 $/km jusqu'à 40 km. Centre-ville de Montréal : prix sur demande. »

> ⚠️ **Décision du propriétaire requise : livraison.** Le site se contredit. Les pages des forfaits disent « livraison incluse (valeur 240 $) » et la FAQ corporative dit « le prix affiché comprend la livraison », alors que `/livraison/` et `/nos-forfaits-tout-inclus/` disent « 100 $ + 7 $/km ».
> **Politique recommandée (une seule, partout) :** « Livraison, installation et démontage inclus dans tous les forfaits de 1 195 $ et plus, dans un rayon de 40 km de Sainte-Thérèse. » Les 3 forfaits corporatifs sont donc tous livrés gratuitement dans ce rayon.
> **Mention à utiliser si la politique est adoptée :** « Prix avant taxes. Livraison, installation et démontage inclus dans un rayon de 40 km de Sainte-Thérèse (Rive-Nord, Laval, Montréal hors centre-ville). Centre-ville et plus de 40 km : prix sur mesure. »
> Sinon, garder la mention ci-dessus. Le même choix doit s'appliquer à la FAQ (question 5) et à toutes les pages du site.

### Colonne 1 — 5 à 7 d'équipe
- **Prix :** 1 195 $
- **Sous-titre :** Pour 20 à 60 personnes, au bureau
- Inclus :
  - 5 jeux géants en mini tournoi
  - Lettres lumineuses (jusqu'à 5 caractères : votre logo, « 2026 », « MERCI »…)
  - Installation discrète pendant les heures de bureau
  - Tableau de tournoi à vos couleurs
  - Facturation conforme pour votre entreprise
- **Bouton :** `Choisir le 5 à 7` → `#soumission` (présélectionne « 5 à 7 d'équipe » dans le formulaire au moyen du paramètre `?forfait=5a7`)

### Colonne 2 — Party de bureau ★ LE PLUS POPULAIRE
- **Badge :** Le plus populaire
- **Prix :** 1 995 $
- **Sous-titre :** Le party des Fêtes complet, de 40 à 120 personnes
- Inclus :
  - Lettres lumineuses (jusqu'à 8 caractères)
  - Mur floral pour la photo de groupe
  - 5 jeux géants
  - Machine à popcorn (75 portions) avec emballage à votre image
  - 2 moments d'étincelles froides (discours, remise de prix)
  - Coordination avec le gestionnaire d'immeuble
  - Créneau d'installation garanti en dehors des heures de bureau
- **Bouton :** `Choisir le Party de bureau` → `#soumission?forfait=party`

### Colonne 3 — Gala Signature
- **Prix :** 2 495 $
- **Sous-titre :** Gala, remise de prix ou party de Noël, de 75 à 150 personnes
- Inclus :
  - Tout le forfait Party de bureau
  - Cabine photo haut de gamme avec préposé, photos illimitées
  - Galerie photo livrée le lendemain
  - Facturation nette 30 jours
  - Heures supplémentaires de cabine photo en option
- **Bouton :** `Choisir le Gala Signature` → `#soumission?forfait=gala`

**Sous les 3 colonnes (texte centré) :**
Plus de 150 invités, plusieurs salles ou un chapiteau? **Nous bâtissons une proposition sur mesure en 24 h.** → `Parler à un conseiller` (`tel:`)

---

## 5. Ce qui est inclus dans chaque forfait corporatif

**Module Divi :** Blurbs en 2 colonnes × 3 rangées, avec icônes.

**H2 :** Ce qui est toujours inclus

1. **Un conseiller unique.** Une seule personne, de la soumission jusqu'au démontage. Vous avez son numéro de cellulaire.
2. **Installation et démontage.** Notre équipe monte tout, teste tout et repart avec tout. Votre équipe ne lève pas un doigt.
3. **Créneau adapté à votre immeuble.** Installation pendant le bureau ou après 17 h, coordination du quai de livraison et de l'ascenseur avec le gestionnaire.
4. **Facturation conforme.** Bon de commande accepté. Net 30 jours sur approbation de crédit, sans dépôt ni carte au dossier.
5. **Garantie de bris.** Un équipement brise pendant l'événement? Nous le remplaçons ou nous remboursons la portion.
6. **Effet wow garanti.** Tout est monté et vérifié avant l'arrivée de vos invités. Sinon, nous nous reprenons.

---

## 6. Processus en 3 étapes

**Module Divi :** 3 Blurbs numérotés sur une rangée, avec une flèche entre chaque.

**H2 :** Comment ça fonctionne

1. **Dites-nous l'essentiel (2 minutes).**
   Date, lieu, nombre d'invités et budget. Aucun engagement.
2. **Recevez votre proposition.**
   Un conseiller vous appelle en moins de 15 minutes (heures d'ouverture) ou vous réservez un appel au moment qui vous convient. Proposition écrite en 24 h, avec 3 options.
3. **Nous installons, vous profitez.**
   Votre date est bloquée sur bon de commande ou avec un dépôt de 20 %. Le jour J, nous montons, nous testons et nous repartons avec tout.

**Bouton :** `Commencer (2 minutes)` → `#soumission`

---

## 7. Avis clients

**Module Divi :** Testimonial × 3 (photo ou logo, nom, poste, entreprise) + badge Google cliquable vers la fiche.

**H2 :** Ce qu'en disent les organisateurs

> ⚠️ Utiliser **uniquement de vrais avis**, copiés mot pour mot depuis Google (ou reçus par courriel, avec l'autorisation de les publier). Indiquer le prénom, l'initiale du nom, le poste et l'entreprise. Ne jamais inventer d'avis : c'est interdit par la Loi sur la protection du consommateur et par les règles publicitaires de Google, Meta et OpenAI.

Gabarit de mise en page :
- « [Citation réelle de 1 à 2 phrases, idéalement sur la ponctualité, l'installation ou la réaction des employés] »
  — **[Prénom N.]**, [Poste, ex. coordonnatrice RH], [Entreprise] · ★★★★★ Google

**Sous les avis :** `Lire nos {{NB_AVIS}} avis Google →` (lien vers la fiche, nouvel onglet)

**Où trouver 3 bons avis corporatifs :** filtrer la fiche Google par mot-clé (« bureau », « Noël », « entreprise », « équipe »). S'il y en a moins de 3, appliquer la demande d'avis de suivi-leads.md (étape après l'événement) aux 10 derniers clients corporatifs.

---

## 8. Galerie : consignes à donner au photographe ou au graphiste

**Module Divi :** Gallery (grille de 9 images, 3 × 3 sur ordinateur, carrousel sur mobile), avec lightbox.

**H2 :** Nos installations récentes

| # | Image demandée | Légende (texte alternatif + légende visible) |
|---|---|---|
| 1 | Vue large d'une cafétéria ou d'une salle de bureau transformée, lettres lumineuses allumées, éclairage tamisé | Party de bureau, [Ville] — 80 employés |
| 2 | Mur floral avec un groupe de 6 à 8 collègues qui posent (autorisation de publication obtenue) | Mur floral pour la photo d'équipe |
| 3 | Tournoi de jeux géants en action (Connect 4, pong géant), mouvement | Mini tournoi de jeux géants |
| 4 | Cabine photo avec préposé et file d'invités souriants | Cabine photo haut de gamme avec préposé |
| 5 | Gros plan sur la machine à popcorn avec emballage personnalisé au logo | Popcorn à votre image |
| 6 | Moment d'étincelles froides pendant un discours (photo prise en rafale) | Étincelles froides à la remise de prix |
| 7 | Gala : vue d'ensemble d'une salle avec lettres et tapis rouge | Gala de reconnaissance, 140 invités |
| 8 | Équipe Évenox en uniforme pendant l'installation (en coulisses) | Installation pendant les heures de bureau |
| 9 | Même salle avant et après (montage côte à côte) | Avant / après : 2 h d'installation |

Règles :
- Photos réelles seulement, jamais d'images générées par IA ni de banque d'images.
- Format 4:3, en WebP, 1 600 px de large au maximum.
- Pas de bouteilles ni de verres d'alcool bien visibles (contrainte des règles publicitaires d'OpenAI et de Meta).
- Texte alternatif en français, avec le lieu (par ex. « Party de bureau clé en main à Laval, lettres lumineuses et jeux géants »).

---

## 9. FAQ (8 questions et réponses)

**Module Divi :** Toggle × 8 (le premier ouvert).

**H2 :** Questions fréquentes

**1. Quel budget prévoir pour un party de bureau?**
Nos forfaits corporatifs vont de 1 195 $ (5 à 7 d'équipe) à 2 495 $ (Gala Signature, de 75 à 150 personnes), avant taxes et livraison. Pour plus de 150 invités, un chapiteau ou plusieurs zones, nous préparons une proposition sur mesure. Nous vous proposons toujours 3 options à des niveaux de prix différents.

**2. Acceptez-vous les bons de commande et la facturation à 30 jours?**
Oui. Sur approbation de crédit, nous confirmons votre événement par bon de commande, sans dépôt ni carte au dossier, avec une facturation nette 30 jours. Pour les autres clients, un dépôt de 20 % bloque la date.

**3. Combien de temps d'avance faut-il réserver?**
Pour les partys des Fêtes (fin novembre à mi-décembre), réservez dès que votre date est confirmée : les jeudis, vendredis et samedis de décembre partent en premier. Le reste de l'année, les fins de semaine partent de 3 à 4 semaines d'avance. Une demande de dernière minute? Appelez-nous, nous vérifions tout de suite.

**4. Pouvez-vous installer pendant les heures de bureau sans déranger?**
Oui, c'est notre spécialité. Nous coordonnons le quai de livraison, l'ascenseur et les accès avec votre gestionnaire d'immeuble. Nous installons discrètement ou après 17 h, selon votre horaire.

**5. Quelle région desservez-vous?**
La Rive-Nord (Sainte-Thérèse, Blainville, Boisbriand, Mirabel, Saint-Jérôme, Terrebonne…), Laval et Montréal. La livraison coûte 100 $ jusqu'à 10 km de notre entrepôt de Sainte-Thérèse, puis 7 $/km jusqu'à 40 km. Pour le centre-ville de Montréal, nous préparons un prix sur mesure.

**6. Peut-on personnaliser les forfaits avec notre logo et nos couleurs?**
Oui. Lettres lumineuses avec le nom de l'entreprise, emballage de popcorn et gabarit de photo à votre image, choix des jeux, ajouts (machine à barbe à papa, cabine vidéo 360, heures de cabine photo supplémentaires). Les forfaits sont un point de départ.

**7. Et si un équipement brise ou si quelque chose ne fonctionne pas?**
Tout est installé et testé avant l'arrivée de vos invités. Si un équipement brise pendant l'événement, nous le remplaçons ou nous remboursons la portion. Votre conseiller reste joignable par cellulaire pendant toute la soirée.

**8. Quelles sont les conditions d'annulation ou de report?**
Le report est gratuit tant que le matériel n'est pas chargé. En cas d'annulation 14 jours ou plus avant l'événement, votre dépôt est crédité pour 12 mois. À partir de 7 jours avant, la commande est finale. Les conditions complètes figurent dans notre politique d'annulation.

---

## 10. Commande minimale et zone desservie

**Module Divi :** Bandeau de texte sur fond clair, centré.

**Texte :**
**Service clé en main corporatif : commande minimale de 1 000 $ avant taxes.** Cela comprend l'installation, l'animation (selon le forfait) et le démontage, à Laval, à Montréal et sur la Rive-Nord. **[LIVRAISON]** Ajouter « la livraison » seulement si la politique recommandée (livraison incluse dans un rayon de 40 km) est adoptée ; sinon, écrire « livraison selon la distance ».
Vous avez seulement besoin de quelques tables, chaises ou jeux? Notre **boutique en ligne** est ouverte 24 h sur 24, et le ramassage à Sainte-Thérèse est gratuit. → `Aller à la boutique` (lien vers evenox.booqableshop.com avec `?utm_source=lp-corpo&utm_medium=referral&utm_campaign=minimum`)

> Le minimum de 1 000 $ est une **décision à valider** par le propriétaire. Il vise à éliminer les petites commandes qui coûtent du temps de vente. Le forfait d'entrée (1 195 $) est au-dessus du minimum.

---

## 11. Appel à l'action final + formulaire (`#soumission`)

**Module Divi :** Section avec ancre `soumission` et 2 colonnes. À gauche : texte et preuves. À droite : formulaire multi-étapes (Gravity Forms ou Fluent Forms, intégré par code court). Voir formulaire-qualification.md.

**H2 :** Bloquez votre date avant qu'elle parte

**Texte (colonne gauche) :**
Répondez à 5 questions rapides. Selon votre événement, un conseiller vous appelle en moins de 15 minutes (heures d'ouverture), ou vous recevez votre soumission détaillée en 24 h.

- ✓ Sans engagement
- ✓ Prix ferme et disponibilité de votre date
- ✓ ★ {{NOTE_GOOGLE}}/5 — {{NB_AVIS}} avis Google

**Bouton d'envoi du formulaire (dernière étape) :** `Recevoir ma proposition`

**Sous le formulaire (petit texte) :**
Vous préférez parler à quelqu'un? **{{TEL}}** (lundi au vendredi de 9 h à 18 h, samedi de 9 h à 13 h — [à confirmer]) · Texto au même numéro.

---

## 12. Pied de page minimal

Évenox inc. · 215, boul. René-A.-Robert, local 100, Sainte-Thérèse (Québec) J7E 4L1 · {{TEL}} · {{COURRIEL}}
`Politique de confidentialité` · `Politique d'annulation` · `Gérer mes témoins` (rouvre la bannière de consentement)

---

## Annexe — Textes à éviter sur cette page (et pourquoi)

| À éviter | Remplacer par | Raison |
|---|---|---|
| « Premium » | « haut de gamme » | Recommandation de l'OQLF (on peut garder les noms de forfaits existants) |
| « Demande de Soumision » | « Recevoir ma proposition » | Coquille et appel à l'action peu engageant |
| « Tables cheap = événement cheap » | « Un décor à la hauteur de votre équipe » | Ton haut de gamme |
| Mentions d'alcool (verre, bar, cocktail, toast, shooters, champagne) | « moment de reconnaissance », « coin salon », « remise de prix » (aucune référence à l'alcool) | Règles publicitaires d'OpenAI (alcool interdit dans l'annonce **et** la page d'atterrissage au Canada) et prudence avec Meta |
| Jeux gonflables pour enfants (Pat Patrouille, princesses…) | Ne pas les montrer | Brouille le positionnement corporatif |
| Compteurs animés « 0+ » | Chiffres en texte statique | Les robots d'exploration lisent « 0+ » |
