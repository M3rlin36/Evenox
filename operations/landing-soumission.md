# Page de soumission — `/soumission` (formulaire multi-étapes autonome)

> Texte prêt à coller dans Divi. Français du Québec, vouvoiement. Page **dédiée au formulaire** de formulaire-qualification.md : elle sert à tous les segments (corporatif, mariage, privé, municipal).
> Liens qui y mènent : liens annexes « Demander une soumission » des 3 campagnes Google (assets_sitelinks.csv : Corporatif, Mariage & privé, Marque), variante Meta (campagne-leads.md), bouton « Obtenir ma soumission » du menu principal (correctifs-urgents.md, n° 3), et appels à l'action des pages `/realisations/`.
> Promesses affichées par les liens annexes, à respecter sur la page : « Réponse en moins de 24 h », « Facturation net 30 disponible », « Été 2027 : dates limitées », « Montréal, Laval et Rive-Nord ».

---

## 0. Réglages de la page

| Élément | Valeur |
|---|---|
| URL (slug) | `/soumission/` (**la même URL que les liens annexes** : `https://evenox.ca/soumission`) |
| Indexation | **index, follow** (page utile aux visiteurs venant de la recherche de marque et des assistants IA ; aucune page concurrente). Canonique : elle-même, **sans paramètres** (`?forfait=`, `?type=`, UTM). |
| Gabarit Divi | Page vierge, **sans menu ni pied de page complet** (moins de distractions = plus de formulaires remplis). Seul lien sortant hors formulaire : téléphone, texto, politique de confidentialité, logo (vers l'accueil). |
| Balise title | `Demande de soumission : réponse en moins de 24 h \| Évenox` |
| Meta description | `Corporatif, mariage ou fête privée : 5 questions, 2 minutes. Prix ferme et disponibilité de votre date. Rive-Nord, Laval, Montréal.` |
| Langue | `fr-CA` |
| Vitesse | Le formulaire doit être interactif en moins de 2,5 s sur mobile. Aucune image lourde au-dessus du formulaire. Scripts Gravity Forms / Fluent Forms chargés sur cette page seulement. |
| Barre collante mobile | **Appeler** · **Texto** seulement (pas de bouton « Soumission » : on y est déjà) |
| Ancien formulaire | `/contact/` garde un lien « Demander une soumission → `/soumission/` » ; le formulaire à 6 champs de `/contact/` est remplacé par le formulaire multi-étapes (formulaire-qualification.md) ou retiré. |

### Paramètres d'URL acceptés

| Paramètre | Effet | Exemple |
|---|---|---|
| `?forfait=` | Déjà prévu dans formulaire-qualification.md : présélectionne le type d'événement et affiche « Forfait choisi : [nom] » | `/soumission/?forfait=gala` |
| `?type=` *(à ajouter au formulaire)* | Présélectionne la carte de l'étape 1 sans forfait : `corpo` → `corpo_party`, `mariage` → `mariage`, `prive` → `prive`, `muni` → `muni_ecole` | `/soumission/?type=mariage` |
| UTM, `gclid`, `msclkid`, `fbclid`, `oppref` | Champs cachés (formulaire-qualification.md, section 5) | — |

**Liens à utiliser dans les liens annexes Google** (modifier `assets_sitelinks.csv` via `outils/build_google_ads.py`, facultatif) : campagne Corporatif → `/soumission?type=corpo` ; Mariage & privé → `/soumission?type=mariage` ; Marque → `/soumission` (sans type). Sans cette modification, la page fonctionne : la personne choisit à l'étape 1.

---

## 1. En-tête compact (au-dessus du formulaire)

**Module Divi :** Section courte (hauteur maximale de 220 px sur ordinateur, 160 px sur mobile), fond uni de la couleur de marque. Logo à gauche (lien vers l'accueil), téléphone cliquable à droite.

**H1 :**
Votre soumission en moins de 24 h

**Sous-titre :**
5 questions, 2 minutes. Prix ferme, disponibilité de votre date et 3 options adaptées à votre budget.

**Ligne de preuve (petit texte, sous le sous-titre) :**
★ {{NOTE_GOOGLE}}/5 sur Google ({{NB_AVIS}} avis) · {{NB_EVENEMENTS}} événements depuis 2022 · Montréal, Laval et Rive-Nord

> `{{NB_EVENEMENTS}}` = **[500+ / 1 000+]**. Le lien annexe « Réalisations » dit « Plus de 1 000 événements » : si le chiffre retenu est 500+, corriger aussi ce lien annexe.
> « Moins de 24 h » : promesse à confirmer par le propriétaire (COMPTE-RENDU, 5 bis, point 5). Si elle n'est pas tenable, écrire « Votre soumission dès le jour ouvrable suivant » ici **et** dans les liens annexes.

---

## 2. Le formulaire (bloc principal)

**Module Divi :** Section à 2 colonnes (2/3 – 1/3) sur ordinateur ; une seule colonne sur mobile, **formulaire en premier**, colonne de réassurance en dessous.
**Colonne principale :** code court du formulaire multi-étapes (Gravity Forms ou Fluent Forms), largeur maximale de 640 px, barre de progression « Étape X de 5 » visible en haut.

Le contenu des 5 étapes, les options, le micro-texte, les consentements Loi 25 / LCAP et le routage A/B/C/D sont **exactement** ceux de formulaire-qualification.md. Ne rien réécrire ici : une seule source de vérité.

**Ajustements propres à cette page :**
1. **Étape 1 sans présélection** si aucun paramètre `?forfait=` ou `?type=` n'est présent. Les 6 cartes sont visibles d'emblée, sans défilement, sur un écran de 375 px de large.
2. **Libellé du bouton d'envoi** selon `type_evenement` (déjà prévu) : corporatif = `Recevoir ma proposition` ; mariage = `Vérifier ma date` ; autres = `Recevoir ma soumission`.
3. **Sauvegarde de progression** : activer « Enregistrer et continuer plus tard » de Gravity Forms seulement si le taux d'abandon à l'étape 3 dépasse 40 % après 30 jours (sinon, inutile).
4. **Événement `form_start`** déclenché à la première réponse de l'étape 1 (tracking-setup.md) ; comparer `form_start` / `lead_tous` chaque semaine : objectif ≥ 45 % de complétion.

---

## 3. Colonne de réassurance (à droite sur ordinateur, sous le formulaire sur mobile)

**Module Divi :** Blurbs empilés + un témoignage court.

**H2 (petit) :** Ce qui se passe ensuite

1. **Vous envoyez vos réponses.** Vous recevez tout de suite un texto et un courriel de confirmation.
2. **Un conseiller vous joint.** Pour une entreprise ou un budget de 2 500 $ et plus : appel en moins de 15 minutes pendant les heures d'ouverture [à confirmer], ou au moment que vous choisissez. Pour les autres demandes : soumission écrite en moins de 24 h.
3. **Vous choisissez.** 3 options claires, un prix ferme. Votre date est bloquée par un dépôt de 20 % ou, pour les entreprises, par bon de commande.

**Puces de réassurance :**
- ✓ Sans engagement, sans carte de crédit
- ✓ Bon de commande et facturation nette 30 jours pour les entreprises (sur approbation de crédit) [à confirmer]
- ✓ Installation et démontage par notre équipe
- ✓ Vos renseignements servent seulement à préparer votre soumission

**Repères de prix (module Text, petit) :**
- Corporatif : forfaits de 1 195 $ à 2 495 $
- Mariage : décor de 899 $ à 1 899 $
- Fête privée : dès 899 $ ; cabine photo avec préposé seule dès 599 $
- Prix avant taxes. [LIVRAISON] Livraison selon la politique en vigueur (voir landing-corporatif.md, section 4).

**Témoignage (1 seul, réel) :**
« [Citation réelle de 1 phrase sur la rapidité de réponse ou la clarté de la soumission] » — **[Prénom N.]**, [type d'événement], [Ville] · ★★★★★ Google

> Avis réel seulement, copié mot pour mot, avec la preuve conservée. Sinon, retirer le bloc.

**Bloc saisonnier (à afficher selon la période, module global Divi) :**
- Septembre à mi-décembre : « Partys des Fêtes : les jeudis, vendredis et samedis de décembre partent en premier. »
- Décembre à mai : « Mariages été 2027 : les samedis de juillet à octobre se réservent de 6 à 12 mois d'avance. »

> Ne garder la mention « dates limitées » que si elle est vraie au moment de la diffusion (google-ads/README.md, point 3).

---

## 4. Vous préférez parler à quelqu'un?

**Module Divi :** Bandeau fin sous le formulaire, centré.

**Texte :**
Appelez-nous au **{{TEL}}** ou écrivez-nous par texto au même numéro. Lundi au vendredi de 9 h à 18 h, samedi de 9 h à 13 h [à confirmer].
Date dans moins de 10 jours? Appelez directement : nous vérifions tout de suite.

---

## 5. Petite FAQ (3 questions, pour lever les dernières objections)

**Module Divi :** Toggle × 3, fermés.

**H2 (petit) :** Avant d'envoyer

**1. Pourquoi demandez-vous mon budget?**
Pour vous proposer tout de suite les bonnes options, sans aller-retour. Si vous ne le savez pas encore, choisissez « Je ne sais pas encore » : nous vous proposerons 3 niveaux de prix.

**2. Est-ce que je m'engage en envoyant ce formulaire?**
Non. Vous recevez une soumission gratuite. Rien n'est réservé tant que vous n'avez pas versé le dépôt ou envoyé un bon de commande.

**3. Que faites-vous de mes coordonnées?**
Elles servent uniquement à répondre à votre demande. Nous ne les vendons pas et ne les partageons pas sans votre consentement. Voir notre politique de confidentialité.

---

## 6. Pied de page minimal

Évenox inc. · 215, boul. René-A.-Robert, local 100, Sainte-Thérèse (Québec) J7E 4L1 · {{TEL}} · {{COURRIEL}}
Responsable de la protection des renseignements personnels : Alexandre Séguin, {{COURRIEL}}
`Politique de confidentialité` · `Politique d'annulation` · `Gérer mes témoins`

---

## 7. Pages de remerciement (créées une fois, partagées par toutes les pages)

Les 4 pages de confirmation du routage sont définies dans formulaire-qualification.md (section 3). Rappel des réglages communs :

| Page | Indexation | Contenu clé | Événement |
|---|---|---|---|
| `/merci-appel/` | noindex, exclue du plan du site | Calendly intégré, « Choisissez votre moment ou attendez notre appel dans les 15 minutes » | `lead_qualifie` + `lead_prioritaire` (déclenchés par le formulaire, **pas** par l'affichage de la page) |
| `/merci-soumission/` | noindex | « Votre soumission arrive d'ici 24 h » + lien `/realisations/` | `lead_qualifie` |
| `/merci-boutique/` | noindex | Bouton vers la boutique Booqable | `lead_non_qualifie` |
| `/merci-hors-zone/` | noindex | Explication + boutique avec ramassage | `lead_non_qualifie` |

> Les conversions se déclenchent à l'envoi réussi (événement `lead_submit` dans le dataLayer), jamais au chargement de la page de remerciement : un rechargement ou un favori fausserait les chiffres.

---

## 8. Contrôle avant la mise en ligne

☐ Les 3 liens annexes « Demander une soumission » ouvrent bien `/soumission/` (code 200, sans redirection).
☐ `?forfait=gala`, `?forfait=decorwow` et `?type=mariage` présélectionnent la bonne carte.
☐ 1 envoi de test par route (A, B, C, D), avec et sans consentement (formulaire-qualification.md, section 8).
☐ La page s'affiche sans défilement horizontal à 360 px de large ; le clavier numérique s'ouvre pour le téléphone.
☐ Aucun mot anglais visible (« Submit », « Next », « Back » : traduire les libellés par défaut de Gravity Forms → « Envoyer », « Suivant », « Précédent »).
☐ Le bouton du menu principal dit « Obtenir ma soumission » (et non « Soumision ») et pointe vers `/soumission/`.
