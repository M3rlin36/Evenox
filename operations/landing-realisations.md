# Réalisations — `/realisations` (carrefour d'études de cas + 6 gabarits)

> Texte et structure prêts à coller dans Divi. Français du Québec, vouvoiement.
> Rôle double : (1) **preuve** pour les visiteurs payants (lien annexe « Réalisations » de la campagne Marque, bouton secondaire Meta « Voir nos réalisations », liens des pages d'atterrissage) ; (2) **contenu citable** par Google, Bing et les assistants IA (geo-chatgpt.md, semaine 3 : « 1 étude de cas réelle » par page pilier).
> Règle absolue : **tout est réel**. Aucun chiffre, nom, citation ni photo n'est inventé. Tant qu'une étude de cas n'a pas ses faits, ses photos et ses autorisations, elle n'est pas publiée. Toutes les valeurs entre crochets sont à remplir à partir des dossiers clients (Booqable, factures, courriels).

---

## 0. Réglages de la page carrefour

| Élément | Valeur |
|---|---|
| URL (slug) | `/realisations/` (**la même URL que le lien annexe** de la campagne Marque : `https://evenox.ca/realisations`, et que le bouton Meta) |
| Études de cas | Sous-pages `/realisations/[slug]/` (slugs proposés en section 4). Type de publication : **Projets** de Divi (« Projects ») avec catégories `corporatif`, `mariage`, `prive`, `activation` ; ou pages WordPress enfants si les Projets sont désactivés. |
| Indexation | **index, follow** pour le carrefour et chaque étude de cas publiée. Une étude de cas en brouillon reste **privée** (jamais publiée avec des crochets). |
| Gabarit Divi | Gabarit **avec** menu et pied de page complets (page de contenu, pas une page d'annonce). |
| Balise title | `Nos réalisations : partys de bureau, galas, mariages et fêtes privées \| Évenox` |
| Meta description | `Photos et détails de vrais montages Évenox : party des Fêtes, 5 à 7, gala, mariage, activation de marque et fête privée. Rive-Nord, Laval, Montréal.` |
| Langue | `fr-CA` |
| Schéma | `CollectionPage` sur le carrefour ; `Article` sur chaque étude de cas (voir schema-jsonld.md, section 6) |
| Barre collante mobile | **Appeler** · **Soumission** (`/soumission/`) |

**Paramètre de filtre :** `?filtre=corporatif|mariage|prive|activation` présélectionne l'onglet (utilisé par landing-evenement-prive.md, section 8). Le contenu reste le même HTML (pas de nouvelle URL indexée) : canonique = `/realisations/`.

### Autorisations à obtenir AVANT de rédiger (classer dans le dossier client)

| Élément | Autorisation | Modèle de demande |
|---|---|---|
| Nom de l'entreprise ou prénoms du couple | Courriel écrit du client | « Acceptez-vous que nous présentions votre événement sur notre site, avec le nom [X]? » |
| Logo d'une entreprise | Courriel écrit d'une personne autorisée (souvent les communications) | Même courriel, mention explicite du logo |
| Photos où une personne est reconnaissable | Clause photo du contrat **ou** courriel de chaque personne en gros plan | Clause type : « Le client autorise Évenox à publier des photos du montage ; toute personne reconnaissable peut demander le retrait d'une photo. » |
| Citation | Le client approuve le texte exact | Envoyer la citation telle qu'elle sera publiée |
| Nom de la salle | Facultatif ; vérifier que la salle accepte d'être nommée | — |

> Sans autorisation : anonymiser (« Une firme comptable de Laval, 80 employés »), flouter les visages ou choisir une photo sans personne reconnaissable. Ne jamais publier une citation non approuvée.

---

## 1. Hero (court)

**Module Divi :** Section pleine largeur, mosaïque de 4 vraies photos (1 corporatif, 1 gala, 1 mariage, 1 fête privée), voile à 50 %.

**Sur-titre :** RÉALISATIONS · RIVE-NORD · LAVAL · MONTRÉAL

**H1 :**
Nos réalisations : de vrais montages, de vrais clients

**Sous-titre :**
{{NB_EVENEMENTS}} événements installés depuis 2022. Voici comment nous avons transformé des bureaux, des salles et des cours arrière, avec le forfait choisi, le nombre d'invités et l'horaire réel du montage.

> `{{NB_EVENEMENTS}}` = **[500+ / 1 000+]**, le même chiffre partout (le lien annexe dit « Plus de 1 000 événements » : corriger l'un ou l'autre). Texte statique, **pas** de compteur animé (correctifs-urgents.md, n° 6).

**Bouton :** `Demander ma soumission` → `/soumission/`

---

## 2. Filtres + grille des études de cas

**Module Divi :** Filterable Portfolio (onglets : Tous · Corporatif · Mariage · Fêtes privées · Activations de marque), 3 colonnes sur ordinateur, 1 sur mobile. Chaque carte : photo 4:3, titre, une ligne de fiche, lien « Voir le projet ».

**Format de chaque carte :**
- **Titre :** [Type d'événement] — [Ville]
- **Ligne de fiche :** [N] invités · Forfait [nom] · [mois année]

Ordre d'affichage au lancement (saison T4) : 1. Party des Fêtes · 2. Gala · 3. 5 à 7 · 4. Activation de marque · 5. Mariage · 6. Fête privée 50 ans. Inverser corporatif et mariage de mi-décembre à mai (bascule saisonnière du COMPTE-RENDU).

> Publier au minimum **3 études de cas complètes** avant d'activer le lien annexe « Réalisations ». En attendant, retirer ce lien annexe de la campagne Marque.

---

## 3. Bande de preuve + appel à l'action

**Module Divi :** Bandeau sur fond clair, centré, entre la grille et le pied de page.

**H2 :** Votre événement pourrait être le prochain

★ {{NOTE_GOOGLE}}/5 sur Google ({{NB_AVIS}} avis) · Installation et démontage par notre équipe · Un seul fournisseur, une seule facture

**Boutons :** `Demander ma soumission` → `/soumission/` · `Voir les forfaits corporatifs` → `/corporatif/` · `Voir les forfaits mariage` → `/mariage/`

> Les pages d'annonces `/corporatif/` et `/mariage/...` sont en noindex, mais un lien depuis `/realisations/` reste utile aux visiteurs. Si le propriétaire préfère ne pas exposer les pages d'annonces, pointer vers `/party-bureau-corporatif/` et `/forfaits-mariage/` (pages indexées).

---

## 4. Gabarit d'une étude de cas (structure commune aux 6)

Chaque étude de cas suit **exactement** cette structure. C'est ce qui la rend lisible pour un acheteur pressé et citable pour un assistant IA (réponse d'abord, chiffres, tableau).

| # | Bloc | Module Divi | Contenu |
|---|---|---|---|
| A | Hero | Image pleine largeur (photo la plus forte) + H1 | H1 : « [Type d'événement] pour [N] invités à [Ville] » |
| B | Résumé en 2 phrases | Text, en gras | Qui, quoi, combien, où, en combien de temps (réponse directe) |
| C | Fiche du projet | Tableau (module Text, tableau HTML) | Client · Type d'événement · Ville et type de lieu · Date (mois année) · Invités · Forfait · Ajouts · Durée du montage · Équipe Évenox |
| D | Le besoin | Text (60–100 mots) | Contrainte réelle du client (date, immeuble, budget, horaire, météo) |
| E | Ce que nous avons installé | Liste à puces | Équipement réel, quantité, emplacement |
| F | Le déroulement | Liste horodatée | Heure d'arrivée, fin du montage, début de l'événement, démontage |
| G | Le résultat | Citation approuvée + 1 fait vérifiable | Ex. nombre de photos imprimées, file à la cabine, nouvelle réservation |
| H | Galerie | Gallery 6–9 photos, lightbox | Légendes en français, avec la ville |
| I | Appel à l'action | Bouton | `Obtenir le même forfait` → `/soumission/?forfait=[code]` |
| J | Projets semblables | Portfolio (3 cartes, même catégorie) | — |

**Balise title type :** `[Type d'événement] à [Ville] : [N] invités, forfait [nom] | Évenox`
**Meta description type :** `Comment nous avons installé [équipement principal] pour [N] invités à [Ville] en [durée]. Photos, horaire et forfait.`
**Date affichée :** « Publié le [date] · Mis à jour le [date] » et auteur « Alexandre Séguin, fondateur » (geo-chatgpt.md, règles d'écriture).

---

## 5. Les 6 études de cas à remplir

> Les valeurs entre crochets viennent du dossier client. Les phrases sans crochets sont des formulations neutres à garder seulement si elles sont vraies pour ce projet ; sinon, les réécrire.

### 5.1 Party des Fêtes corporatif

- **Slug :** `/realisations/party-des-fetes-[ville]/`
- **Catégorie :** corporatif · **Forfait :** Party de bureau (1 995 $) — code formulaire `party`
- **H1 :** Party des Fêtes pour [N] employés à [Ville]
- **Résumé :** [Entreprise ou « Une firme de [secteur] de [Ville] »] voulait un party des Fêtes au bureau, sans gérer plusieurs fournisseurs. Nous avons installé le forfait Party de bureau en [durée] [pendant les heures de bureau / après 17 h], et tout était démonté [le soir même / le lendemain matin].
- **Fiche :** Client : [nom ou description autorisée] · Lieu : [cafétéria / salle de conférence / salle louée], [Ville] · Date : [décembre AAAA] · Invités : [N] · Forfait : Party de bureau · Ajouts : [ex. heures de cabine photo] · Montage : [durée] · Équipe : [N] personnes
- **Le besoin :** [ex. « Une seule journée possible, un ascenseur de service réservé de 15 h à 16 h, et un budget approuvé par bon de commande. »]
- **Installé :** lettres lumineuses « [texte, ≤ 8 caractères] » · mur floral · 5 jeux géants ([lesquels]) · machine à maïs soufflé avec emballage au logo · 2 moments d'étincelles froides ([discours / remise de prix])
- **Déroulement :** [HH h MM] arrivée · [HH h MM] fin du montage · [HH h MM] arrivée des employés · [HH h MM] démontage terminé
- **Résultat :** « [Citation approuvée de la personne RH ou de l'adjointe] » — [Prénom N.], [poste], [Entreprise] · Fait vérifiable : [ex. « Date déjà réservée pour [année suivante] »]
- **Photos :** vue d'ensemble avant/après · lettres allumées · tournoi de jeux · photo de groupe au mur floral (autorisée) · équipe en installation
- **Bouton :** `Obtenir le même forfait` → `/soumission/?forfait=party`

### 5.2 5 à 7 d'équipe

- **Slug :** `/realisations/5-a-7-equipe-[ville]/`
- **Catégorie :** corporatif · **Forfait :** 5 à 7 d'équipe (1 195 $) — code `5a7`
- **H1 :** 5 à 7 d'équipe pour [N] collègues à [Ville]
- **Résumé :** [Entreprise] voulait réunir [N] employés après le travail [occasion : fin de projet, accueil des nouveaux, été]. Nous avons monté un mini tournoi de jeux géants et des lettres lumineuses en [durée], sans déranger les bureaux.
- **Fiche :** Client · Lieu : [bureaux / terrasse / salle], [Ville] · Date · Invités : [N] · Forfait : 5 à 7 d'équipe · Ajouts : [ ] · Montage : [durée]
- **Le besoin :** [ex. « Installation discrète pendant que les équipes travaillaient encore. »]
- **Installé :** 5 jeux géants en tournoi ([lesquels]) · lettres lumineuses « [≤ 5 caractères] » · tableau de tournoi aux couleurs de l'entreprise
- **Déroulement :** [heures réelles]
- **Résultat :** « [Citation approuvée] » — [Prénom N.], [poste], [Entreprise] · Fait vérifiable : [ex. équipe gagnante, nombre de parties]
- **Photos :** tournoi en action · tableau de tournoi · lettres · vue d'ensemble
- **Bouton :** `Obtenir le même forfait` → `/soumission/?forfait=5a7`
- **Rédaction :** le 5 à 7 est présenté comme un moment d'équipe et de jeux. **Aucune mention ni photo d'alcool.**

### 5.3 Gala corporatif

- **Slug :** `/realisations/gala-[organisation]-[ville]/`
- **Catégorie :** corporatif · **Forfait :** Gala Signature (2 495 $) — code `gala`
- **H1 :** Gala de [reconnaissance / remise de prix] pour [N] invités à [Ville]
- **Résumé :** [Organisation] organisait son gala annuel à [salle / hôtel]. Nous avons fourni le décor, les étincelles froides de la remise de prix et la cabine photo haut de gamme avec préposé, avec la galerie livrée le lendemain.
- **Fiche :** Client · Lieu : [salle], [Ville] · Date · Invités : [75–150] · Forfait : Gala Signature · Ajouts : [heures de cabine, tapis rouge…] · Montage : [durée] · Facturation : [bon de commande / net 30, si le client accepte que ce soit mentionné]
- **Le besoin :** [ex. « Coordination avec l'hôtel, montage entre 14 h et 17 h, image de marque stricte. »]
- **Installé :** tout le Party de bureau · cabine photo avec préposé, gabarit au logo · [N] moments d'étincelles froides · [autres]
- **Déroulement :** [heures réelles]
- **Résultat :** « [Citation approuvée] » · Fait vérifiable : [ex. « [N] photos prises, galerie livrée à [heure] le lendemain »]
- **Photos :** salle complète · scène pendant la remise de prix · cabine avec file · gabarit photo au logo (autorisé)
- **Bouton :** `Obtenir le même forfait` → `/soumission/?forfait=gala`

### 5.4 Mariage

- **Slug :** `/realisations/mariage-[salle-ou-ville]/`
- **Catégorie :** mariage · **Forfait :** [Décor WOW 899 $ / Soirée Signature 1 449 $ / Mariage Signature 1 899 $] — code `[decorwow / soireesignature / mariagesignature]`
- **H1 :** Mariage de [Prénom] et [Prénom] : [N] invités à [salle ou Ville]
- **Résumé :** [Prénoms] voulaient [souhait réel : une entrée spectaculaire, une cabine photo pour tous]. Nous avons installé le forfait [nom] le jour J en [durée] et repris le matériel le lendemain.
- **Fiche :** Couple : [prénoms, autorisés] · Lieu : [salle / domaine / chapiteau], [Ville] · Date : [mois année] · Invités : [N] · Forfait : [nom] · Ajouts : [chiffres lumineux, chaises Chiavari…] · Montage : [durée]
- **Le besoin :** [ex. « Salle disponible seulement à partir de 13 h ; cérémonie extérieure, réception à l'intérieur. »]
- **Installé :** lettres lumineuses [AMOUR / initiales] · mur floral · [N] moments d'étincelles froides ([entrée, première danse]) · cabine photo [classique / miroir] avec préposé · [autres]
- **Déroulement :** [heures réelles]
- **Résultat :** « [Citation approuvée du couple] » — [Prénoms], [mois année] · Fait vérifiable : [ex. « [N] impressions remises aux invités »]
- **Photos :** salle avant l'arrivée des invités · première danse sous les étincelles · couple au mur floral (autorisé) · cabine en action · table d'honneur
- **Bouton :** `Obtenir le même forfait` → `/soumission/?forfait=[code]`
- **Rédaction :** pas de verres levés ni de bouteilles au premier plan. Mentionner la salle seulement si elle l'accepte.

### 5.5 Activation de marque

- **Slug :** `/realisations/activation-[marque-ou-secteur]-[ville]/`
- **Catégorie :** activation · **Forfait :** sur mesure (pas de forfait affiché) — formulaire `type_evenement` = `corpo_gala`
- **H1 :** Activation de marque [lancement / kiosque / journée portes ouvertes] à [Ville] : [N] visiteurs
- **Résumé :** [Marque ou « Une marque de [secteur] »] voulait [objectif réel : attirer du trafic à son kiosque, faire partager son lancement]. Nous avons installé [cabine vidéo 360 / cabine photo] habillée aux couleurs de la marque, avec [décor / mobilier], et un préposé sur place.
- **Fiche :** Client · Lieu : [centre commercial, salon, magasin], [Ville] · Date · Visiteurs ou participants : [N, source du chiffre] · Équipement : [ ] · Durée : [heures] · Montage : [durée]
- **Le besoin :** [ex. « Montage avant l'ouverture du centre, à 8 h, et démontage après 21 h. »]
- **Installé :** [cabine vidéo 360 / cabine photo] avec habillage et gabarit à l'image de la marque · [lettres lumineuses du nom] · [coin salon, mobilier]
- **Déroulement :** [heures réelles]
- **Résultat :** « [Citation approuvée] » · Fait vérifiable : [ex. « [N] vidéos partagées », **seulement si le client a fourni le chiffre**]
- **Photos :** kiosque complet · participant dans la cabine 360 (autorisé) · détail de l'habillage
- **Bouton :** `Planifier mon activation` → `/soumission/?type=corpo`
- **Rédaction :** ne jamais attribuer de résultats commerciaux (ventes, abonnés) sans chiffres écrits du client.

### 5.6 Fête privée — 50 ans

- **Slug :** `/realisations/fete-50-ans-[ville]/`
- **Catégorie :** prive · **Forfait :** [Décor WOW 899 $ / Soirée Signature 1 449 $] — code `[decorwow / soireesignature]` (sous réserve de la décision du propriétaire sur les forfaits décor pour les 40/50 ans : COMPTE-RENDU, 5 bis, point 7)
- **H1 :** Fête de 50 ans pour [N] invités à [Ville]
- **Résumé :** [Prénom de l'organisateur, autorisé] voulait souligner les 50 ans de [prénom] [à la maison / en salle]. Nous avons installé les chiffres « 50 » lumineux, le mur floral et [la cabine photo avec préposé] avant l'arrivée des invités.
- **Fiche :** Organisateur : [prénom + initiale, autorisé] · Lieu : [maison, cour, salle], [Ville] · Date · Invités : [N] · Forfait : [nom] · Ajouts : [chapiteau, chaises, machines gourmandes] · Montage : [durée]
- **Le besoin :** [ex. « Fête surprise : montage en 1 h pendant l'absence de la personne fêtée. »]
- **Installé :** chiffres lumineux « 50 » + [lettres] · mur floral · étincelles froides au moment du gâteau · [cabine photo avec préposé]
- **Déroulement :** [heures réelles]
- **Résultat :** « [Citation approuvée] » · Fait vérifiable : [ex. « [N] impressions photo »]
- **Photos :** vue d'ensemble · gâteau sous les étincelles · photo de famille au mur floral (autorisée) · montage en cours
- **Bouton :** `Obtenir le même forfait` → `/soumission/?forfait=[code]`
- **Rédaction :** aucune référence à l'alcool ; pas d'enfants en gros plan.

---

## 6. Collecte du contenu (procédure pour les prochains événements)

| Moment | Qui | Quoi |
|---|---|---|
| Signature du contrat | Conseiller | Vérifier la clause photo ; demander si le client accepte d'être présenté en étude de cas (case à cocher dans le contrat Booqable) |
| Jour J, avant les invités | Installateur | 4 photos de la salle vide une fois montée (4:3, horizontal) + 1 photo du montage en cours ; noter les heures réelles d'arrivée et de fin du montage |
| Pendant l'événement (si le client l'autorise) | Préposé à la cabine photo | 3 photos d'ambiance sans verre au premier plan |
| J+1 | Conseiller | Demande d'avis (fiches-annuaires.md, section 10) **et**, séparément, demande d'autorisation et de citation pour l'étude de cas |
| J+7 | Webmestre | Rédiger l'étude de cas selon le gabarit, envoyer la citation au client pour approbation, publier |

**Objectif :** 1 nouvelle étude de cas par mois, en alternant corporatif et mariage. Chaque étude de cas publiée : soumettre l'URL par IndexNow et dans la Search Console (geo-chatgpt.md, jour 21).
