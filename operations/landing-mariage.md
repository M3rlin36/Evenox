# Page d'atterrissage — Mariage (Google Search mariage, Meta, ChatGPT Ads)

> Texte prêt à coller dans Divi, section par section. Français du Québec, vouvoiement, ton chaleureux et haut de gamme.
> Cible : couples qui reçoivent **80 invités ou plus**, en salle, en domaine, en grange ou sous chapiteau privé, sur la Rive-Nord, à Laval, à Montréal ou dans les Basses-Laurentides. La page écarte volontairement les demandes de quelques chaises.

---

## 0. Réglages de la page

| Élément | Valeur |
|---|---|
| URL (slug) | 5 sous-pages, **les mêmes URL que les annonces** (voir campagnes/google-ads/README.md) : `/mariage/decoration/`, `/mariage/arche-lettres-lumineuses/`, `/mariage/chapiteau/`, `/mariage/mobilier/`, `/mariage/photobooth/`. Une seule page modèle, dupliquée ; seuls le H1 et l'image du hero changent |
| Indexation | **noindex** (pages d'annonces ; la page indexée reste `/mariage/`, qui doit être corrigée : correctifs-urgents.md, n° 8) |
| Gabarit Divi | Page vierge, sans menu. Liens sortants : téléphone, texto, politique de confidentialité, boutique (dans le bandeau « minimum ») |
| Balise title | `Décor de mariage clé en main dès 899 $ : lettres, mur floral, cabine photo \| Évenox` |
| Meta description | `Lettres lumineuses géantes, mur floral, étincelles froides et cabine photo avec préposé : forfaits de 899 $ à 1 899 $. Rive-Nord, Laval, Montréal.` |
| Barre collante mobile | **Appeler** · **Texto** · **Vérifier ma date** (`#soumission`) |

Variables : `{{NOTE_GOOGLE}}`, `{{NB_AVIS}}`, `{{NB_EVENEMENTS}}`, `{{TEL}}`, `{{COURRIEL}}`. Elles sont définies dans landing-corporatif.md et ont les mêmes valeurs partout.

> ⚠️ **Forfaits utilisés sur cette page (vérifiés sur evenox.ca/forfaits-mariage/ le 7 oct. 2026) :** Décor WOW 899 $ · Soirée Signature 1 449 $ · Mariage Signature 1 899 $.
> Les prix de 599 $ et de 999 $ affichés sur `/mariage/` (« Essentiel » et « Premium ») sont des **forfaits photobooth**, pas des forfaits mariage. Ils figurent ici comme ajouts. De plus, la page `/mariage/` dit « photobooth classique 3 h = 599 $ », alors que la FAQ dit « 2 h = 599 $ / 3 h = 799 $ » : à harmoniser (voir correctifs-urgents.md).
>
> ⚠️ **Livraison : décision du propriétaire requise avant la mise en ligne.** Le site se contredit : les pages des forfaits disent « livraison incluse (valeur 240 $) », alors que `/livraison/`, `/mariage/` et `/nos-forfaits-tout-inclus/` disent « 100 $ jusqu'à 10 km, puis 7 $/km ».
> **Politique recommandée :** « Livraison, installation et démontage inclus dans tous les forfaits de 1 195 $ et plus, dans un rayon de 40 km de Sainte-Thérèse. » Pour les forfaits sous 1 195 $ (ex. Décor WOW à 899 $), la livraison est facturée selon la distance.
> Les textes ci-dessous suivent cette politique recommandée et sont marqués **[LIVRAISON]**. Si le propriétaire choisit autre chose, modifier seulement ces passages.

**H1 de chaque sous-page :**
- `/mariage/decoration/` → titre de la section 1
- `/mariage/arche-lettres-lumineuses/` → « Arche florale et lettres lumineuses géantes, installées pour vous »
- `/mariage/chapiteau/` → « Mariage extérieur : chapiteau, mobilier et décor, un seul fournisseur »
- `/mariage/mobilier/` → « Chaises Chiavari, tables et coins salon, placés selon votre plan »
- `/mariage/photobooth/` → « Cabine photo avec préposé pour votre mariage, dès 599 $ »

Le paramètre `?v=` reste disponible pour les tests A/B de titres (champ caché `variante_hero`).

---

## 1. Hero

**Module Divi :** Section pleine largeur. Photo réelle d'une réception Évenox (lettres lumineuses avec les initiales, éclairage chaud, couple flou au premier plan), voile à 45 %. L'étape 1 du formulaire est à droite sur ordinateur et sous le texte sur mobile.

**Sur-titre :** MARIAGES 2027 · RIVE-NORD · LAVAL · MONTRÉAL

**H1 :**
Votre décor de mariage clé en main, dès 899 $

**Sous-titre :**
Lettres lumineuses géantes, mur floral, étincelles froides et cabine photo avec préposé. Nous installons le jour J et nous repartons avec tout. Vous profitez de votre journée, nous nous occupons du reste.

**Puces :**
- ✓ Prix affichés : vous savez à quoi vous attendre avant de nous écrire
- ✓ Installé et testé avant l'arrivée de vos invités
- ✓ Une seule équipe par soir pour la cabine photo avec préposé : votre date est vraiment à vous

**Bouton principal :** `Vérifier ma date` → `#soumission`
**Lien secondaire :** `ou appelez-nous : {{TEL}}`

**Bandeau de preuve :** ★ {{NOTE_GOOGLE}}/5 sur Google ({{NB_AVIS}} avis) · {{NB_EVENEMENTS}} événements depuis 2022 · Réponse le jour même

---

## 2. Preuve rapide (avis et mentions)

**Module Divi :** Rangée d'icônes : badge Google, badge WeddingWire (seulement quand la fiche compte au moins 5 avis), et une courte citation d'un couple.

> ⚠️ Les 3 témoignages affichés aujourd'hui sur `/mariage/` (Sophie & Marc, Amélie & Jonathan, Camille & David) doivent être **vérifiés comme réels**, avec une source (avis Google ou courriel). S'ils ne peuvent pas être vérifiés, les retirer partout. Publier un faux témoignage est une pratique interdite (LPC, art. 219) et contraire aux règles de Google, Meta et OpenAI.

---

## 3. L'émotion → la promesse (moins de 80 mots)

**H2 :** Le moment que tout le monde va filmer

Vos invités se souviendront de l'entrée dans la salle : vos initiales en lettres lumineuses, le mur de fleurs, les étincelles froides de la première danse. Puis la file devant la cabine photo, toute la soirée.

Vous, vous n'aurez rien monté. Notre équipe arrive le jour J, installe et teste tout, anime la cabine photo et revient chercher le matériel le lendemain.

---

## 4. Les trois forfaits mariage

**Module Divi :** Pricing Tables (3 colonnes), celle du milieu mise en vedette.
**Mention sous les prix [LIVRAISON] :** « Prix avant taxes. Installation et démontage inclus dans tous les forfaits. Livraison incluse dans un rayon de 40 km de Sainte-Thérèse pour la Soirée Signature et le Mariage Signature. Pour le Décor WOW, livraison selon la distance : 100 $ jusqu'à 10 km, puis 7 $/km. Au-delà de 40 km, prix sur mesure. »

### Colonne 1 — Décor WOW
- **Prix :** 899 $ (valeur de 1 140 $)
- **Sous-titre :** Le décor qui fait dire « wow » dès l'entrée
- Inclus :
  - 5 lettres lumineuses géantes (AMOUR, MERCI ou le mot de votre choix)
  - Mur floral pour vos photos de couple et d'invités
  - 1 moment d'étincelles froides (entrée ou première danse)
  - Installation et positionnement sécuritaire, démontage
  - Bonus : vidéo au ralenti des étincelles et galerie photo par code QR
- **Bouton :** `Choisir Décor WOW` → `#soumission?forfait=decorwow`

### Colonne 2 — Soirée Signature ★ LE PLUS POPULAIRE
- **Badge :** Le plus populaire
- **Prix :** 1 449 $ (valeur de 1 840 $)
- **Sous-titre :** Le décor + la cabine photo qui occupe vos invités toute la soirée
- Inclus :
  - Tout le Décor WOW
  - Cabine photo haut de gamme avec préposé
  - Photos illimitées et impressions sur place
  - Gabarit photo personnalisé (vos prénoms et la date)
  - Album numérique des meilleurs moments
  - Livraison incluse jusqu'à 40 km [LIVRAISON]
- **Bouton :** `Choisir Soirée Signature` → `#soumission?forfait=soireesignature`

### Colonne 3 — Mariage Signature
- **Prix :** 1 899 $ (valeur de 2 350 $)
- **Sous-titre :** Notre forfait le plus complet, pensé pour le grand jour
- Inclus :
  - Lettres lumineuses + les initiales des mariés
  - Mur floral
  - 2 moments d'étincelles froides (entrée des mariés et première danse)
  - Cabine photo haut de gamme avec préposé, photos illimitées
  - Coordination directe avec votre salle de réception
  - Livraison incluse jusqu'à 40 km [LIVRAISON]
- **Bouton :** `Choisir Mariage Signature` → `#soumission?forfait=mariagesignature`

**Sous les 3 colonnes (texte centré) :**
Mobilier complet, chapiteau, arche de cérémonie ou plus de 150 invités? **Nous bâtissons un forfait sur mesure en 24 h.** → `Parler à un conseiller` (`tel:`)

### Ajouts populaires (module Text, sous les forfaits)

| Ajout | Prix |
|---|---|
| Cabine photo classique seule, avec préposé | dès 599 $ |
| Cabine photo miroir seule (4 h), avec préposé | dès 999 $ |
| Cabine vidéo 360 | de 599 $ à 1 499 $ selon la durée |
| Lettres ou chiffres lumineux supplémentaires (ex. la date) | 70 $ chacun |
| Machines gourmandes (popcorn, barbe à papa) | dès 100 $ |
| Chaises Chiavari blanches | 8 $/chaise (7 $ dès 100) |
| Chapiteau 20' × 40' (jusqu'à 80 invités assis) | 800 $ + montage |

> Vérifier le prix d'entrée du vidéobooth 360 : la FAQ dit 799 $ (2 h), la page Forfaits mariage dit « dès 599 $ ». Afficher un seul prix.

---

## 5. Ce qui est inclus, toujours

**Module Divi :** Blurbs, 2 colonnes × 3 rangées.

**H2 :** Ce que vous n'aurez pas à gérer

1. **Le montage.** Livraison le jour J entre 10 h et 18 h, à l'heure confirmée la veille, et installation complète. Nous coordonnons les accès avec votre salle.
2. **La cabine photo.** Un préposé l'anime toute la durée prévue. Vos invités n'ont qu'à sourire.
3. **Les tests.** Tout est branché et vérifié avant l'arrivée des invités.
4. **La reprise.** Nous revenons chercher le matériel le lendemain. Vous n'avez rien à démonter après la fête.
5. **Les imprévus.** Si un équipement brise pendant la soirée, nous le remplaçons ou nous remboursons la portion.
6. **Un seul interlocuteur.** Une seule personne, de la soumission jusqu'au lendemain du mariage.

---

## 6. Processus en 3 étapes

**H2 :** Trois étapes, zéro stress

1. **Vérifiez votre date (2 minutes).**
   Date, lieu, nombre d'invités et budget approximatif.
2. **Recevez votre proposition.**
   Appel découverte de 15 minutes ou soumission détaillée en 24 h, avec photos de mariages semblables.
3. **Bloquez votre date.**
   Un dépôt de 20 % réserve votre soirée. Nous nous occupons du reste, jusqu'au lendemain.

**Bouton :** `Vérifier ma date` → `#soumission`

---

## 7. Avis de couples

**Module Divi :** Testimonial × 3 + lien vers la fiche Google et la fiche WeddingWire.

**H2 :** Ils se sont mariés avec Évenox

Gabarit (avis réels seulement) :
- « [Citation réelle sur le photobooth, le décor ou le service, 1 à 2 phrases] »
  — **[Prénoms du couple]**, mariage à [Ville ou nom de la salle], [mois année] · ★★★★★

**Collecte :** après chaque mariage, envoyer le message de demande d'avis prévu dans suivi-leads.md, avec deux liens : Google, puis WeddingWire.

---

## 8. Galerie : consignes

**Module Divi :** Gallery 3 × 3, lightbox. Légendes visibles.

**H2 :** Nos mariages récents

| # | Image demandée | Légende |
|---|---|---|
| 1 | Salle de réception complète, éclairage chaud, lettres avec les initiales | Réception à [salle], [Ville] — 140 invités |
| 2 | Cabine photo miroir, invités en action | Cabine photo miroir avec préposé |
| 3 | Mur floral avec le couple | Mur floral pour les photos de couple |
| 4 | Étincelles froides pendant la première danse (photo en rafale) | Première danse sous les étincelles |
| 5 | Table d'honneur avec chaises Chiavari | Chaises Chiavari et décor de table |
| 6 | Mariage extérieur sous chapiteau 20' × 40', guirlandes allumées au crépuscule | Mariage sous chapiteau, Basses-Laurentides |
| 7 | Arche de cérémonie | Arche de cérémonie |
| 8 | Bande d'impressions photo tenue par un invité | Impressions souvenir pour vos invités |
| 9 | Équipe Évenox pendant l'installation le matin | Installation le matin, vous profitez |

Règles : photos réelles seulement, autorisation du couple (clause du contrat ou courriel), pas d'alcool au premier plan, WebP de 200 Ko maximum.

---

## 9. FAQ (8 questions et réponses)

**Module Divi :** Toggle × 8.

**H2 :** Vos questions, nos réponses

**1. Combien coûte le décor de mariage avec Évenox?**
Trois forfaits à prix fixe : Décor WOW à 899 $ (lettres lumineuses, mur floral, étincelles froides), Soirée Signature à 1 449 $ (avec cabine photo et préposé) et Mariage Signature à 1 899 $ (initiales des mariés, 2 moments d'étincelles, cabine photo, coordination avec la salle). Les prix sont avant taxes. La cabine photo seule commence à 599 $. Pour le mobilier ou un chapiteau, nous préparons un forfait sur mesure.

**2. Combien de temps d'avance faut-il réserver?**
Pour un samedi de juillet à octobre, la haute saison, réservez de 6 à 12 mois d'avance. Hors saison ou en semaine, quelques mois suffisent souvent. Comme nous offrons une seule cabine photo avec préposé par soir, la première demande confirmée obtient la date.

**3. Comment fonctionne le dépôt?**
Un dépôt de 20 % par carte de crédit bloque votre date. Le solde est payable à la réception du matériel, par carte, virement Interac, chèque ou comptant.

**4. Que se passe-t-il si nous devons changer la date?**
Le report est gratuit tant que le matériel n'est pas chargé, selon la disponibilité. En cas d'annulation 14 jours ou plus avant, le dépôt est crédité pour 12 mois. À partir de 7 jours avant, la commande est finale.

**5. Et s'il pleut le jour de notre mariage extérieur?**
Nous pouvons déplacer le montage ailleurs sur le même site (à l'intérieur ou sous chapiteau) sans frais, si vous nous prévenez plus de 24 h d'avance. En cas d'alerte météo d'Environnement Canada, le report est sans frais.

**6. Livrez-vous à notre salle ou à notre domaine?**
Nous desservons la Rive-Nord, Laval, Montréal et les Basses-Laurentides. [LIVRAISON] La livraison est incluse dans un rayon de 40 km de Sainte-Thérèse pour la Soirée Signature et le Mariage Signature. Pour le Décor WOW, elle coûte 100 $ jusqu'à 10 km, puis 7 $/km. Au-delà de 40 km, nous faisons un prix sur mesure.

**7. Pouvez-vous personnaliser le décor à nos couleurs et à nos initiales?**
Oui : initiales lumineuses (incluses dans le Mariage Signature), lettres supplémentaires à 70 $ chacune, gabarit photo avec vos prénoms et la date, choix du mot et des chaises. Nous en discutons pendant l'appel découverte.

**8. Travaillez-vous avec notre planificatrice ou notre salle?**
Oui. Nous envoyons le plan d'installation et l'horaire à votre planificatrice et au gestionnaire de la salle, puis nous suivons le déroulement prévu.

---

## 10. Commande minimale

**Bandeau (fond clair, centré) :**
**Forfaits décor de mariage dès 899 $ avant taxes.** Cabine photo avec préposé seule (sans décor) dès 599 $, installée et reprise.
Vous cherchez seulement quelques tables ou chaises à ramasser vous-même? Notre **boutique en ligne** est ouverte 24 h sur 24, et le ramassage à Sainte-Thérèse est gratuit. → `Aller à la boutique` (evenox.booqableshop.com?utm_source=lp-mariage&utm_medium=referral&utm_campaign=minimum)

---

## 11. Appel à l'action final + formulaire (`#soumission`)

**H2 :** Votre date est-elle encore libre?

**Texte (colonne gauche) :**
Répondez à 5 questions rapides. Nous vérifions la disponibilité de votre date et nous vous revenons le jour même, par téléphone ou par courriel, à votre choix.

- ✓ Sans engagement
- ✓ Une seule cabine photo avec préposé par soir : premier confirmé, premier servi
- ✓ ★ {{NOTE_GOOGLE}}/5 — {{NB_AVIS}} avis Google

**Bouton d'envoi :** `Vérifier ma date`
**Sous le formulaire :** Une question? {{TEL}} · Texto au même numéro.

---

## 12. Pied de page minimal

Évenox inc. · 215, boul. René-A.-Robert, local 100, Sainte-Thérèse (Québec) J7E 4L1 · {{TEL}} · {{COURRIEL}}
`Politique de confidentialité` · `Politique d'annulation` · `Gérer mes témoins`

---

## Notes de ciblage (pour le gestionnaire de publicité)

- Le budget médian d'un mariage au Québec se situe entre 10 000 et 20 000 $, et 47 % des couples dépensent moins de 10 000 $. Pour cette raison, les annonces mariage ciblent les termes « mariage + photobooth / décor / chapiteau / location clé en main » et excluent « pas cher », « gratuit », « DIY », « usagé », « à vendre » et « emploi ».
- Ne pas montrer de jeux gonflables pour enfants sur cette page.
- Saisonnalité : selon l'ISQ (2025), 54 % des mariages ont lieu de juillet à octobre. Les couples réservent de décembre à mai (fiançailles des Fêtes). Augmenter le budget mariage de décembre à mai.
