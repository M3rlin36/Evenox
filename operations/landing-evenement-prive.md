# Page d'atterrissage — Événement privé (Google Search « Mariage & privé », Meta, ChatGPT Ads)

> Texte prêt à coller dans Divi, section par section. Français du Québec, vouvoiement, ton chaleureux et haut de gamme.
> Cible : adultes qui reçoivent **40 invités ou plus** pour un anniversaire marquant (40, 50, 60 ans), une retraite, des noces d'or, une fête prénatale ou une réception à domicile, sur la Rive-Nord, à Laval ou à Montréal. La page écarte volontairement les fêtes d'enfants et les commandes de quelques chaises (dirigées vers la boutique).
> Annonce liée : groupe « Événement privé clé en main » (rsa_ads.csv) et lien annexe « Fêtes privées » (assets_sitelinks.csv), URL finale `https://evenox.ca/evenement-prive`.

---

## 0. Réglages de la page

| Élément | Valeur |
|---|---|
| URL (slug) | `/evenement-prive/` (**la même URL que l'annonce et le lien annexe**, voir campagnes/google-ads/assets_sitelinks.csv) |
| Indexation | **noindex** pour le lancement (page d'annonces, même règle que `/corporatif/` et `/mariage/...`). Quand 2 études de cas « fête privée » réelles seront publiées dans `/realisations/`, envisager une version indexée distincte (« Fête d'anniversaire clé en main : 40, 50, 60 ans »). |
| Gabarit Divi | Page vierge, sans menu. Liens sortants : téléphone, texto, politique de confidentialité, boutique (bandeau « minimum » seulement), `/realisations/` (section 8) |
| Balise title | `Fête privée clé en main dès 899 $ : 40, 50 ou 60 ans \| Évenox` |
| Meta description | `Lettres et chiffres lumineux, mur floral, étincelles froides et cabine photo avec préposé, livrés et installés chez vous ou en salle. Rive-Nord, Laval, Montréal.` |
| Langue | `fr-CA` |
| Barre collante mobile | **Appeler** (`tel:+15145591893`) · **Texto** (`sms:+15145591893`) · **Vérifier ma date** (`#soumission`) |

Variables : `{{NOTE_GOOGLE}}`, `{{NB_AVIS}}`, `{{NB_EVENEMENTS}}`, `{{TEL}}`, `{{COURRIEL}}`. Elles sont définies dans landing-corporatif.md et ont les mêmes valeurs partout. `{{NB_EVENEMENTS}}` = **[500+ / 1 000+]** : un seul chiffre, décidé par le propriétaire (correctifs-urgents.md, n° 5).

> ⚠️ **Décision du propriétaire requise avant la mise en ligne (COMPTE-RENDU, section 5 bis, point 7) : les forfaits décor s'appliquent-ils aux fêtes privées?**
> Cette page suppose que **oui** : les forfaits Décor WOW (899 $) et Soirée Signature (1 449 $) sont offerts tels quels pour un anniversaire, avec des chiffres lumineux (« 50 », « 60 ») au lieu du mot AMOUR. Si la réponse est non, **mettre en pause le groupe d'annonces « Événement privé clé en main » et retirer le lien annexe « Fêtes privées »** au lieu de publier cette page.
>
> ⚠️ **Livraison [LIVRAISON] :** mêmes règles que landing-mariage.md. Politique recommandée : livraison, installation et démontage inclus dans les forfaits de 1 195 $ et plus, dans un rayon de 40 km de Sainte-Thérèse ; sous 1 195 $ (Décor WOW), livraison selon la distance (100 $ jusqu'à 10 km, puis 7 $/km). Modifier seulement les passages marqués **[LIVRAISON]** si le propriétaire choisit autre chose.

**Variantes du H1** (paramètre `?v=`, champ caché `variante_hero`) :
- défaut → titre de la section 1
- `?v=50ans` → « Vos 50 ans comme vous les imaginez, installés pour vous »
- `?v=domicile` → « Une réception chic à la maison, sans rien monter vous-même »
- `?v=retraite` → « Une fête de retraite à la hauteur de sa carrière »

---

## 1. Hero

**Module Divi :** Section pleine largeur. Photo réelle d'une fête privée montée par Évenox (chiffres lumineux « 50 », mur floral, éclairage chaud, invités adultes flous en arrière-plan), voile à 45 %. L'étape 1 du formulaire est à droite sur ordinateur et sous le texte sur mobile, avec `type_evenement` = `prive` présélectionné.

> Si aucune photo réelle de fête privée n'existe encore : utiliser une photo réelle de mariage Évenox **sans le couple** (lettres + mur floral). Jamais de banque d'images ni d'image générée par IA.

**Sur-titre :** ANNIVERSAIRES · RETRAITES · RÉCEPTIONS · RIVE-NORD · LAVAL · MONTRÉAL

**H1 :**
Votre fête privée clé en main, dès 899 $

**Sous-titre :**
Chiffres lumineux géants, mur floral, étincelles froides et cabine photo avec préposé. Nous installons chez vous ou en salle, et nous repartons avec tout. Vous recevez, nous nous occupons du reste.

**Puces :**
- ✓ Prix affichés : vous connaissez votre budget avant de nous écrire
- ✓ Installé et testé avant l'arrivée de vos invités
- ✓ Un seul fournisseur pour le décor, la cabine photo et le mobilier

**Bouton principal :** `Vérifier ma date` → `#soumission`
**Lien secondaire :** `ou appelez-nous : {{TEL}}`

**Bandeau de preuve :** ★ {{NOTE_GOOGLE}}/5 sur Google ({{NB_AVIS}} avis) · {{NB_EVENEMENTS}} événements depuis 2022 · Réponse le jour même

---

## 2. Pour quelles occasions

**Module Divi :** 6 Blurbs (3 × 2 sur ordinateur, carrousel sur mobile), icône + libellé + une ligne.

**H2 :** Une fête qui marque le coup

1. **40, 50 ou 60 ans.** Les chiffres en lettres lumineuses géantes, le mur floral pour la photo de famille.
2. **Retraite.** Un hommage soigné, avec un moment d'étincelles froides pendant le discours.
3. **Noces d'argent ou d'or.** Les initiales du couple et une cabine photo pour toutes les générations.
4. **Fête prénatale ou dévoilement.** Un décor doux et lumineux, monté avant l'arrivée des invités.
5. **Réception à domicile.** Votre cour ou votre salon transformé, sous chapiteau au besoin.
6. **Fête de famille ou retrouvailles.** Jeux géants pour les adultes, cabine photo et coin salon.

> Ne pas montrer ni nommer de jeux gonflables, de personnages ou de fêtes d'enfants sur cette page : ces demandes vont vers la boutique en ligne (section 10).

---

## 3. L'émotion → la promesse (moins de 80 mots)

**Module Divi :** Texte centré, largeur maximale de 700 px.

**H2 :** Le moment dont tout le monde va reparler

Vos invités entrent : le chiffre de l'année brille au fond de la salle, le mur de fleurs attend la photo de famille, et la file se forme déjà devant la cabine photo.

Vous, vous n'aurez rien monté. Notre équipe arrive avant la fête, installe et teste tout, anime la cabine photo et revient chercher le matériel.

---

## 4. Les forfaits fête privée

**Module Divi :** Pricing Tables (3 colonnes), celle du milieu mise en vedette.
**Mention sous les prix [LIVRAISON] :** « Prix avant taxes. Installation et démontage inclus dans tous les forfaits. Pour le Décor WOW, livraison selon la distance de Sainte-Thérèse : 100 $ jusqu'à 10 km, puis 7 $/km jusqu'à 40 km. Livraison incluse dans un rayon de 40 km pour la Soirée Signature. Au-delà de 40 km et centre-ville de Montréal : prix sur mesure. »

### Colonne 1 — Décor WOW
- **Prix :** 899 $
- **Sous-titre :** Le décor qu'on remarque dès l'entrée
- Inclus :
  - 5 lettres ou chiffres lumineux géants (« 50 », « 60 ANS », « MERCI » ou le mot de votre choix)
  - Mur floral pour les photos de famille et d'invités
  - 1 moment d'étincelles froides (arrivée, gâteau ou discours)
  - Installation et positionnement sécuritaire, démontage
  - En prime : vidéo au ralenti des étincelles et galerie photo par code QR
- **Bouton :** `Choisir Décor WOW` → `#soumission?forfait=decorwow`

### Colonne 2 — Soirée Signature ★ LE PLUS POPULAIRE
- **Badge :** Le plus populaire
- **Prix :** 1 449 $
- **Sous-titre :** Le décor + la cabine photo qui occupe vos invités toute la soirée
- Inclus :
  - Tout le Décor WOW
  - Cabine photo haut de gamme avec préposé
  - Photos illimitées et impressions sur place
  - Gabarit photo personnalisé (prénom, âge et date)
  - Album numérique des meilleurs moments
  - Livraison incluse jusqu'à 40 km [LIVRAISON]
- **Bouton :** `Choisir Soirée Signature` → `#soumission?forfait=soireesignature`

### Colonne 3 — Grande réception sur mesure
- **Prix :** Sur soumission (à partir de **[PRIX D'ENTRÉE À CONFIRMER]** $)
- **Sous-titre :** Plus de 100 invités, chapiteau ou mobilier complet
- Inclus (à composer) :
  - Tout le forfait Soirée Signature
  - Chapiteau 20' × 40' (jusqu'à 80 invités assis), tables et chaises Chiavari
  - Coin salon, jeux géants, machines gourmandes
  - Plan d'installation envoyé à l'avance, coordination avec la salle
- **Bouton :** `Parler à un conseiller` → `tel:` (mobile) / `#soumission` (ordinateur)

> Ne pas afficher un prix « à partir de » pour la colonne 3 tant que le propriétaire ne l'a pas fixé. Sinon, écrire seulement « Proposition sur mesure en 24 h ».

### Ajouts populaires (module Text, sous les forfaits)

| Ajout | Prix |
|---|---|
| Cabine photo classique seule, avec préposé | dès 599 $ |
| Cabine photo miroir seule (4 h), avec préposé | dès 999 $ |
| Cabine vidéo 360 | de [599 $ / 799 $] à 1 499 $ selon la durée (prix d'entrée à harmoniser, correctifs-urgents.md n° 8) |
| Lettres ou chiffres lumineux supplémentaires | 70 $ chacun |
| Machines gourmandes (maïs soufflé, barbe à papa) | dès 100 $ |
| Chaises Chiavari blanches | 8 $/chaise (7 $ dès 100) |
| Chapiteau 20' × 40' (jusqu'à 80 invités assis) | 800 $ + montage |

---

## 5. Ce qui est inclus, toujours

**Module Divi :** Blurbs, 2 colonnes × 3 rangées.

**H2 :** Ce que vous n'aurez pas à gérer

1. **Le montage.** Livraison à l'heure confirmée la veille et installation complète, chez vous ou en salle.
2. **La cabine photo.** Un préposé l'anime pendant toute la durée prévue. Vos invités n'ont qu'à sourire.
3. **Les tests.** Tout est branché et vérifié avant l'arrivée des invités.
4. **La reprise.** Nous revenons chercher le matériel. Vous n'avez rien à démonter après la fête.
5. **Les imprévus.** Si un équipement brise pendant la soirée, nous le remplaçons ou nous remboursons la portion.
6. **Un seul interlocuteur.** Une seule personne, de la soumission jusqu'au lendemain de la fête.

---

## 6. Processus en 3 étapes

**H2 :** Trois étapes, aucune corvée

1. **Vérifiez votre date (2 minutes).**
   Date, lieu, nombre d'invités et budget approximatif.
2. **Recevez votre proposition.**
   Appel de 15 minutes ou soumission détaillée en 24 h [à confirmer], avec des photos de fêtes semblables.
3. **Bloquez votre date.**
   Un dépôt de 20 % réserve votre soirée. Nous nous occupons du reste.

**Bouton :** `Vérifier ma date` → `#soumission`

---

## 7. Avis clients

**Module Divi :** Testimonial × 3 + lien vers la fiche Google.

**H2 :** Ils ont fêté avec Évenox

> ⚠️ **Avis réels seulement**, copiés mot pour mot depuis Google (ou reçus par courriel, avec l'autorisation de les publier). Ne jamais inventer ni « adapter » un avis (LPC, art. 219 ; règles de Google, Meta et OpenAI). S'il n'y a pas encore 3 avis de fêtes privées, afficher 1 ou 2 avis seulement, ou des avis de mariage.

Gabarit :
- « [Citation réelle sur le décor, la cabine photo ou le service, 1 à 2 phrases] »
  — **[Prénom N.]**, [occasion : 50 ans, retraite…] à [Ville], [mois année] · ★★★★★ Google

**Sous les avis :** `Lire nos {{NB_AVIS}} avis Google →` (nouvel onglet)

---

## 8. Galerie : consignes

**Module Divi :** Gallery 3 × 3, lightbox, légendes visibles. Sous la galerie : lien texte `Voir toutes nos réalisations →` vers `/realisations/?filtre=prive`.

**H2 :** Nos fêtes récentes

| # | Image demandée | Légende |
|---|---|---|
| 1 | Vue d'ensemble d'une salle ou d'un sous-sol transformé, chiffres « 50 » allumés | 50 ans à [Ville] — [N] invités |
| 2 | Mur floral avec 3 générations qui posent (autorisation obtenue) | Mur floral pour la photo de famille |
| 3 | Étincelles froides pendant l'arrivée du gâteau (photo en rafale) | Étincelles froides au moment du gâteau |
| 4 | Cabine photo avec préposé et invités costumés | Cabine photo avec préposé |
| 5 | Cour arrière avec chapiteau et guirlandes au crépuscule | Réception sous chapiteau à domicile |
| 6 | Bande d'impressions photo tenue par un invité | Impressions souvenir pour vos invités |
| 7 | Coin salon et chaises Chiavari | Coin salon et mobilier |
| 8 | Fête de retraite : lettres « MERCI » derrière la table d'honneur | Fête de retraite, [Ville] |
| 9 | Équipe Évenox pendant l'installation | Installation avant l'arrivée des invités |

Règles : photos réelles seulement, autorisation écrite des clients (et de toute personne reconnaissable), **aucun verre ni bouteille d'alcool visible**, pas d'enfants en gros plan, WebP de 200 Ko maximum, texte alternatif en français avec la ville.

---

## 9. FAQ (6 questions et réponses)

**Module Divi :** Toggle × 6 (le premier ouvert).

**H2 :** Vos questions, nos réponses

**1. Combien coûte le décor d'une fête de 50 ans avec Évenox?**
Le Décor WOW coûte 899 $ (chiffres ou lettres lumineux, mur floral, étincelles froides) et la Soirée Signature 1 449 $ (avec cabine photo et préposé), avant taxes. La cabine photo seule commence à 599 $. Pour une grande réception avec chapiteau ou mobilier, nous préparons une proposition sur mesure.

**2. Pouvez-vous installer à la maison?**
Oui : salon, sous-sol, cour arrière ou sous chapiteau. Nous vérifions avec vous l'accès, l'espace et les prises électriques avant le jour J.

**3. Combien de temps d'avance faut-il réserver?**
Pour un samedi de mai à octobre, réservez de 2 à 3 mois d'avance [à confirmer]. Le reste de l'année, quelques semaines suffisent souvent. Comme nous offrons une seule cabine photo avec préposé par soir, la première demande confirmée obtient la date.

**4. Comment fonctionne le dépôt?**
Un dépôt de 20 % bloque votre date. Le solde est payable à la réception du matériel.

**5. Livrez-vous dans notre ville?**
Nous desservons la Rive-Nord, Laval et Montréal. [LIVRAISON] Pour le Décor WOW, la livraison coûte 100 $ jusqu'à 10 km de Sainte-Thérèse, puis 7 $/km jusqu'à 40 km ; elle est incluse dans un rayon de 40 km pour la Soirée Signature. Au-delà de 40 km, nous faisons un prix sur mesure.

**6. Faites-vous les fêtes d'enfants?**
Nos forfaits clé en main sont pensés pour les réceptions d'adultes. Pour une fête d'enfants, notre boutique en ligne propose jeux et équipement à louer, avec ramassage gratuit à Sainte-Thérèse.

> Les conditions d'annulation ne sont pas reprises ici tant que la politique n'est pas harmonisée (correctifs-urgents.md, n° 15).

---

## 10. Commande minimale

**Bandeau (fond clair, centré) :**
**Forfaits fête privée dès 899 $ avant taxes.** Cabine photo avec préposé seule (sans décor) dès 599 $, installée et reprise.
Vous cherchez seulement quelques tables, chaises ou jeux à ramasser vous-même? Notre **boutique en ligne** est ouverte 24 h sur 24, et le ramassage à Sainte-Thérèse est gratuit. → `Aller à la boutique` (evenox.booqableshop.com?utm_source=lp-prive&utm_medium=referral&utm_campaign=minimum)

---

## 11. Appel à l'action final + formulaire (`#soumission`)

**Module Divi :** Section avec ancre `soumission`, 2 colonnes. Formulaire multi-étapes de formulaire-qualification.md, `type_evenement` = `prive` présélectionné. Routage : budget 600–999 $ ou 1 000–2 499 $ → route B (soumission en 24 h) ; moins de 600 $ → route C (boutique).

**H2 :** Votre date est-elle encore libre?

**Texte (colonne gauche) :**
Répondez à 5 questions rapides. Nous vérifions la disponibilité de votre date et nous vous revenons le jour même, par téléphone, texto ou courriel, à votre choix.

- ✓ Sans engagement
- ✓ Une seule cabine photo avec préposé par soir : premier confirmé, premier servi
- ✓ ★ {{NOTE_GOOGLE}}/5 — {{NB_AVIS}} avis Google

**Bouton d'envoi :** `Recevoir ma soumission`
**Sous le formulaire :** Une question? {{TEL}} · Texto au même numéro.

---

## 12. Pied de page minimal

Évenox inc. · 215, boul. René-A.-Robert, local 100, Sainte-Thérèse (Québec) J7E 4L1 · {{TEL}} · {{COURRIEL}}
`Politique de confidentialité` · `Politique d'annulation` · `Gérer mes témoins`

---

## Annexe — Mots à éviter sur cette page

| À éviter | Remplacer par | Raison |
|---|---|---|
| « Baby shower », « shower » | « fête prénatale » | Loi 96 / OQLF |
| « Photobooth », « selfie » | « cabine photo », « égoportrait » | Loi 96 (le mot « photobooth » reste permis dans les URL et mots-clés seulement) |
| « Lounge » | « coin salon » | Loi 96 |
| « Popcorn » | « maïs soufflé » | Terme recommandé par l'OQLF |
| « Premium » | « haut de gamme » | Loi 96 |
| Toast, cocktail, bar, champagne, bulles, verre de vin | « discours », « moment du gâteau », « coin salon » | Alcool interdit dans l'annonce **et** la page d'atterrissage (OpenAI, Canada) ; prudence Meta |
| Gonflables, personnages, fête d'enfants en photo | Ne pas les montrer | Brouille le positionnement et attire des demandes hors cible |
