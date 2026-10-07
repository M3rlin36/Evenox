# Page d'atterrissage : Fête de Noël d'entreprise clé en main

*Version du 7 octobre 2026. Copie finale en français du Québec, prête à intégrer dans Divi.*

- **URL proposée :** `evenox.ca/fete-noel-entreprise` (remplace `/nos-forfaits-tout-inclus` comme URL finale du groupe « Fête de Noël d'entreprise » dans la campagne S-FR | Corporatif & Fêtes).
- **Mots-clés visés :** party de bureau, party de Noël entreprise, fête de Noël d'entreprise, party des Fêtes corporatif, décor party de bureau. Le mot « party » reste dans les mots-clés seulement ; la page emploie « fête de Noël », « réception des Fêtes » et « fête de fin d'année » (recommandation de l'OQLF).
- **Annonce correspondante :** titre épinglé en position 1 « Fête de Noël d'entreprise » ; chemins `/fetes/entreprise`.
- **Page de remerciement :** `evenox.ca/merci-fete-noel` (exclue de l'indexation).
- **Formulaire :** version Noël du formulaire partagé (`formulaire-soumission.md`).

---

## Variables à remplacer avant la mise en ligne

Les prix ne sont pas confirmés : le site et Notion se contredisent. **Aucun prix ne doit être publié tant que la grille unique n'est pas choisie.** Une fois choisie, les prix de la page et ceux des annonces doivent être identiques au dollar près (les annonces actuelles affichent lounge 850 $, cocktail 1 100 $ à 1 400 $, gala 2 900 $).

| Variable | Contenu | Valeur actuelle connue (à trancher) |
|---|---|---|
| `{{PRIX_FORFAIT_ACCUEIL}}` | Forfait 1 « Accueil lumineux » | — |
| `{{PRIX_FORFAIT_SIGNATURE}}` | Forfait 2 « Soirée signature » | Notion : Signature Corpo 1 200 $ à 1 850 $ |
| `{{PRIX_FORFAIT_GALA}}` | Forfait 3 « Gala des Fêtes » | — |
| `{{PRIX_LOUNGE}}` | Mobilier lounge à la carte | Site 1 195 $ / Notion 850 $ |
| `{{PRIX_COCKTAIL}}` | Mobilier cocktail à la carte | Site 1 995 $ / Notion 1 100 $ à 1 400 $ |
| `{{PRIX_GALA}}` | Mobilier gala à la carte | Site 2 495 $ / Notion 2 900 $ |
| `{{PRIX_PHOTOBOOTH_SIGNATURE}}` | Photobooth Signature | Site 599 $ ou 799 $ / Notion 650 $ |
| `{{PRIX_PHOTOBOOTH_PRESTIGE}}` | Photobooth Prestige | Notion 825 $ |
| `{{PRIX_PHOTOBOOTH_ICONIC}}` | Photobooth Iconic | Notion 1 095 $ |
| `{{PRIX_PHOTOBOOTH_LEGEND}}` | Photobooth Legend | Notion 1 495 $ |
| `{{PRIX_LETTRE}}` | Lettre lumineuse 4 pi, à l'unité | Configurateur : « dès 70 $ » (à retirer : contraire au positionnement) |
| `{{PRIX_FORFAIT_MIN}}` / `{{PRIX_FORFAIT_MAX}}` | Fourchette fermée affichée à l'étape 3 du formulaire | = forfait 1 et forfait 3 |
| `{{CONTENU_LOUNGE}}` | Contenu exact du coin lounge (ex. 1 sofa, 2 fauteuils, 1 table basse) | À confirmer |
| `{{CONTENU_GALA}}` | Contenu exact du mobilier gala ou cocktail du forfait 3 | À confirmer |
| `{{NB_LETTRES_FORFAIT_1}}` / `{{NB_LETTRES_FORFAIT_2}}` / `{{NB_LETTRES_FORFAIT_3}}` | Nombre de lettres incluses par forfait | À confirmer |
| `{{DUREE_PHOTOBOOTH}}` | Durée du photobooth incluse (ex. 3 h) | À confirmer |
| `{{SEUIL_LIVRAISON_INCLUSE}}` | Montant au-delà duquel livraison, installation et reprise sont incluses | Site : minimum de livraison 200 $ ou 300 $ selon la page (à harmoniser) |
| `{{SURCLASSEMENT_OFFERT}}` | Surclassement offert et sa condition (ex. Photobooth Signature surclassé en Prestige pour toute réservation du forfait Gala confirmée avant le 31 octobre) | À définir |
| `{{ACCESSOIRE_BONUS}}` | Accessoire bonus (ex. toile de fond des Fêtes ou cadre photo personnalisé au logo) | À définir |
| `{{DATE_LIMITE_INCITATIF}}` | Date de fin de l'incitatif, réelle et respectée | ex. 31 octobre 2026 |
| `{{DELAI_MIN_JOURS}}` | Délai minimum de réservation | 7 jours par défaut |
| `{{DUREE_INSTALLATION}}` | Durée moyenne d'installation | À confirmer |
| `{{FRAIS_TRANSPORT_HORS_ZONE}}` | Grille transport Rive-Sud, Québec, Lévis | Non fixée |
| `{{CONDITIONS_NET30}}` | Conditions du net 30 (ex. sur approbation, bon de commande) | À confirmer |
| `{{HEURES_OUVRABLES}}` | Heures de réponse | Site : lun. au ven. 12 h à 18 h |
| `{{TELEPHONE}}` | Numéro (suivi d'appels idéalement) | À fournir |
| `{{AVIS_1}}`, `{{AVIS_2}}`, `{{AVIS_3}}` | Avis Google réels, copiés mot pour mot | À sélectionner |
| `{{NOM_COORDONNATEUR}}` + photo | Personne qui rappelle les leads | À fournir |

Tous les prix s'affichent **avant taxes**, au format québécois : « 1 495 $ ».

---

## 1. SEO

**Titre SEO (46 caractères) :**
Fête de Noël d'entreprise clé en main | Évenox

**Méta-description (147 caractères) :**
Lettres lumineuses 4 pi, lounge et photobooth livrés et installés pour votre fête de Noël d'entreprise. Laval, Montréal, Rive-Nord. Réponse en 2 h.

*(Longueurs vérifiées par script Python : voir la fin du document.)*

---

## 2. Section héros (au-dessus de la ligne de flottaison)

**H1 :**
Fête de Noël d'entreprise

**Sous-titre (H2 visuel) :**
Un décor des Fêtes clé en main pour vos employés : lettres lumineuses de 4 pi, coin lounge et photobooth, livrés, installés et repris par notre équipe.

**Bouton principal :**
Vérifier ma date

*(Le bouton descend jusqu'au formulaire, ancre `#soumission`. C'est le seul bouton d'action de la page ; il est répété plus bas avec le même texte.)*

**3 puces :**
- Trois forfaits ambiance à prix affiché, sans frais cachés
- Livraison, installation et reprise par notre équipe, en soirée comme en semaine
- Facturation net 30 pour les entreprises

**Ligne de preuve sous le bouton :**
★ 4,8/5 sur Google (52 avis) · Plus de 1 000 événements depuis 2022 · Réponse en moins de 2 h ouvrables

**Ligne d'urgence (bandeau fin au-dessus du héros ou sous les puces) :**
Les vendredis de décembre sont les premières dates réservées : il en reste trois avant Noël, les 4, 11 et 18 décembre. Vérifiez la vôtre dès maintenant.

*(Vrai sur le calendrier 2026, aucun chiffre de disponibilité inventé. Quand un vendredi est complet dans le calendrier interne, mettre à jour la ligne : « Le vendredi 11 décembre est complet. Les 4 et 18 décembre sont encore disponibles. » Ne jamais l'afficher si ce n'est pas vrai. À partir du 1er décembre, remplacer par la version janvier : « Vous avez manqué décembre ? Une fête d'après-Fêtes en janvier, c'est plus de choix de dates et de salles. »)*

**Visuel :** vraie photo Évenox, en format paysage : lettres lumineuses allumées (idéalement le nom d'une entreprise ou « NOËL ») devant un coin lounge, avec des invités. Pas de photo de banque d'images.

---

## 3. Bande de confiance (juste sous le héros)

**Version avec autorisations écrites (à n'utiliser qu'une fois chaque autorisation reçue par écrit) :**
Ils nous ont confié leurs événements
`[BLOC LOGOS : RBC · PwC · Desjardins · Polytechnique Montréal · Familiprix · Ville de Candiac — en gris, même hauteur, n'afficher que les logos autorisés par écrit]`

**Version de repli (à utiliser tant que les autorisations ne sont pas reçues) :**
Des entreprises de la finance, de l'éducation et du secteur public nous font confiance.

---

## 4. Section « 3 forfaits ambiance »

**H2 :** Trois forfaits ambiance pour votre fête des Fêtes
**Intro :** Choisissez le niveau d'ambiance qui convient à votre équipe. Chaque forfait comprend la livraison, l'installation avant l'arrivée de vos invités et la reprise après l'événement.

### Forfait 1 : Accueil lumineux
**`{{PRIX_FORFAIT_ACCUEIL}}` $**
*Idéal pour 50 à 100 invités*
- Lettres lumineuses de 4 pi : jusqu'à `{{NB_LETTRES_FORFAIT_1}}` lettres (« NOËL », vos initiales ou l'année)
- Coin lounge : `{{CONTENU_LOUNGE}}`
- Livraison, installation et reprise
- Un point photo élégant dès l'entrée

### Forfait 2 : Soirée signature *(étiquette : Recommandé pour les équipes de 100 à 200 personnes)*
**`{{PRIX_FORFAIT_SIGNATURE}}` $**
*Idéal pour 100 à 200 invités*
- Lettres lumineuses de 4 pi : jusqu'à `{{NB_LETTRES_FORFAIT_2}}` lettres, par exemple le nom de votre entreprise
- Coin lounge : `{{CONTENU_LOUNGE}}`
- Photobooth Signature pendant `{{DUREE_PHOTOBOOTH}}`, avec votre logo sur chaque photo
- Livraison, installation et reprise
- **Accessoire bonus offert : `{{ACCESSOIRE_BONUS}}`**

### Forfait 3 : Gala des Fêtes
**`{{PRIX_FORFAIT_GALA}}` $**
*Idéal pour 200 invités et plus*
- Lettres lumineuses de 4 pi : jusqu'à `{{NB_LETTRES_FORFAIT_3}}` lettres
- Mobilier cocktail et gala : `{{CONTENU_GALA}}`
- Photobooth avec préposé pendant `{{DUREE_PHOTOBOOTH}}`, photos à l'image de votre marque
- Livraison, installation et reprise
- **Surclassement offert : `{{SURCLASSEMENT_OFFERT}}`**

**Bouton sous les forfaits :** Vérifier ma date

**Ligne sous les forfaits :**
Prix avant taxes. Livraison, installation et reprise incluses pour toute commande de `{{SEUIL_LIVRAISON_INCLUSE}}` $ et plus dans notre zone principale. Offres valides pour les réservations confirmées avant le `{{DATE_LIMITE_INCITATIF}}`.

**Bloc « À la carte » (accordéon fermé, sous les forfaits) :**
**Titre :** Vous préférez composer votre ambiance ?
- Lettre lumineuse 4 pi : `{{PRIX_LETTRE}}` $ par lettre
- Mobilier lounge : `{{PRIX_LOUNGE}}` $
- Mobilier cocktail : `{{PRIX_COCKTAIL}}` $
- Mobilier gala : `{{PRIX_GALA}}` $
- Photobooth : Signature `{{PRIX_PHOTOBOOTH_SIGNATURE}}` $, Prestige `{{PRIX_PHOTOBOOTH_PRESTIGE}}` $, Iconic `{{PRIX_PHOTOBOOTH_ICONIC}}` $, Legend `{{PRIX_PHOTOBOOTH_LEGEND}}` $

Nous vous proposerons la combinaison la plus juste dans votre soumission.

---

## 5. Section « Comment ça marche »

**H2 :** Votre fête des Fêtes en 4 étapes

1. **Vous nous décrivez votre événement**
   Date, ville, nombre d'invités et budget : deux minutes en ligne, sans engagement.
2. **Nous vous rappelons en moins de 2 h ouvrables**
   Un membre de notre équipe confirme la disponibilité de votre date et vous envoie une soumission détaillée en 24 h.
3. **Vous confirmez avec un dépôt de 20 %**
   Votre date est bloquée. Les entreprises admissibles reçoivent leur facture finale payable net 30.
4. **Nous livrons, installons et reprenons**
   Notre équipe arrive avant vos invités, monte le décor et revient le démonter. Vous n'avez rien à transporter ni à ranger.

**Bouton :** Vérifier ma date

---

## 6. Section preuve

**H2 :** Plus de 1 000 événements réalisés depuis 2022

**Chiffres (3 compteurs) :**
- **4,8/5** · note Google, 52 avis
- **1 000+** · événements réalisés depuis 2022
- **2 h** · délai de réponse ouvrable

*(Avant publication : vérifier sur la fiche Google que la note et le nombre d'avis sont exacts ce jour-là. Mettre à jour le nombre d'avis chaque mois.)*

**Avis Google (3 cartes) :**
`[AVIS GOOGLE 1 : {{AVIS_1}} — texte copié mot pour mot, prénom et initiale du nom, mois et année, 5 étoiles, lien vers l'avis. Choisir en priorité un avis d'événement corporatif ou de fête des Fêtes.]`
`[AVIS GOOGLE 2 : {{AVIS_2}} — idéalement un avis qui mentionne la ponctualité ou l'installation.]`
`[AVIS GOOGLE 3 : {{AVIS_3}} — idéalement un avis qui mentionne les lettres lumineuses ou le photobooth.]`

Lien sous les avis : Lire les 52 avis sur Google →

*(Ne jamais réécrire, raccourcir de façon trompeuse ou inventer un avis. Une coupe est permise si elle est signalée par « […] ».)*

**Logos :** même bloc que la section 3 (version autorisée ou version de repli).

**Bloc coordonnateur (près du formulaire) :**
`[PHOTO {{NOM_COORDONNATEUR}}]`
« C'est moi qui vous rappellerai. Je confirme votre date, je vous conseille le bon forfait et je reste votre contact jusqu'au soir de l'événement. »
— `{{NOM_COORDONNATEUR}}`, coordination des événements, Évenox

---

## 7. Bloc « Ce n'est pas pour vous si… »

**H2 :** Évenox n'est peut-être pas pour vous si…
- vous cherchez le prix le plus bas : nous misons sur du matériel inspecté, une installation soignée et une équipe ponctuelle ;
- vous préférez venir chercher le matériel et l'installer vous-mêmes : notre [boutique en ligne](https://evenox.booqableshop.com) est faite pour ça, avec cueillette à Sainte-Thérèse ;
- vous cherchez des jeux ou de l'animation de groupe : nous créons le décor et l'ambiance de votre soirée, pas les activités ;
- votre fête a lieu dans moins de `{{DELAI_MIN_JOURS}}` jours : appelez-nous plutôt au `{{TELEPHONE}}`, nous vérifierons ce qui est encore possible.

**Ligne de conclusion :**
Si vous voulez une soirée soignée, sans rien gérer, vous êtes au bon endroit.

---

## 8. FAQ

**H2 :** Questions fréquentes

**1. Combien de temps à l'avance devons-nous réserver ?**
Pour un vendredi de décembre, nous recommandons de réserver de 8 à 12 semaines à l'avance : ce sont les premières dates à partir. Pour un jeudi ou une fête en janvier, 4 à 6 semaines suffisent généralement. Le plus simple est de vérifier votre date dans le formulaire : nous vous répondons en moins de 2 h ouvrables.

**2. Quel est le délai minimum pour réserver ?**
Nous acceptons les réservations jusqu'à `{{DELAI_MIN_JOURS}}` jours avant l'événement, selon la disponibilité de l'équipe et du matériel. Pour une date plus rapprochée, appelez-nous au `{{TELEPHONE}}`.

**3. La livraison et l'installation sont-elles comprises ?**
Oui. Notre équipe livre, installe tout avant l'arrivée de vos invités, puis revient démonter et reprendre le matériel. Pour toute commande de `{{SEUIL_LIVRAISON_INCLUSE}}` $ et plus dans notre zone principale, la livraison, l'installation et la reprise sont incluses. L'installation prend en moyenne `{{DUREE_INSTALLATION}}`.

**4. Offrez-vous la facturation net 30 ?**
Oui, aux entreprises et aux organismes publics : la facture finale est payable dans les 30 jours suivant l'événement (`{{CONDITIONS_NET30}}`). Nous pouvons inscrire votre numéro de bon de commande sur la soumission et la facture.

**5. Faut-il verser un dépôt ?**
Un dépôt de 20 % confirme votre réservation et bloque votre date. Le solde est payable selon les modalités indiquées dans votre soumission.

**6. Que se passe-t-il si nous devons annuler ?**
Vos sommes versées ne sont pas perdues : elles sont converties en crédit valable 12 mois, utilisable pour un autre événement, comme une fête d'été ou celle de l'an prochain.

**7. Quelles régions desservez-vous ?**
Depuis notre entrepôt de Sainte-Thérèse, nous desservons Laval, Montréal, la Rive-Nord (de Saint-Eustache à Repentigny) et les Laurentides, de Saint-Jérôme à Mont-Tremblant. La Rive-Sud, Québec et Lévis sont desservies sur demande ; les frais de transport sont alors indiqués clairement dans la soumission.

**8. Nous n'avons pas encore de salle. Est-ce un problème ?**
Pas du tout. Nous installons dans les hôtels, restaurants, salles de réception et dans vos propres bureaux. L'adresse est facultative dans le formulaire ; dès que votre lieu est choisi, nous coordonnons directement avec lui l'accès, le quai de livraison, l'ascenseur et les prises électriques.

---

## 9. Section formulaire et appel final (ancre `#soumission`)

**H2 :** Vérifiez la disponibilité de votre date
**Texte :** Deux minutes, quatre étapes, aucun engagement. Un membre de notre équipe vous rappelle en moins de 2 h ouvrables avec une soumission détaillée en 24 h.

`[FORMULAIRE 4 ÉTAPES — voir section 10]`

**À côté du formulaire (colonne de droite sur ordinateur, sous le formulaire sur mobile) :**
- ★ 4,8/5 sur Google (52 avis)
- Facturation net 30 pour les entreprises
- Annulation : crédit valable 12 mois
- Vous préférez parler à quelqu'un ? `{{TELEPHONE}}` (`{{HEURES_OUVRABLES}}`)

**Bandeau final (dernière section, fond sombre, avant le pied de page) :**
**H2 :** Votre équipe mérite une belle soirée.
**Texte :** Offrez-lui un décor qui fait parler, sans rien gérer de votre côté. Les vendredis de décembre se réservent en premier.
**Bouton :** Vérifier ma date

---

## 10. Formulaire de soumission (version Noël)

Spécification complète, validation, Loi 25, champs cachés et notation : `formulaire-soumission.md`. Résumé de la configuration pour cette page :

**En-tête du formulaire :** Vérifiez votre date en 2 minutes
**Barre de progression :** Étape 1 de 4 · Étape 2 de 4 · Étape 3 de 4 · Étape 4 de 4

| Étape | Champs (libellés exacts) | Obligatoire | Préremplissage Noël |
|---|---|---|---|
| 1. Votre événement | Type d'événement · Date de l'événement · Ville de l'événement | Les 3 | Type = « Fête de Noël ou des Fêtes d'entreprise » ; le sélecteur de date s'ouvre sur décembre 2026 |
| 2. Ce dont vous avez besoin | Nombre d'invités prévu · Services souhaités · Texte de vos lettres lumineuses (si lettres) · Votre lieu · Nom ou adresse du lieu | Invités, services, lieu (l'adresse est facultative) | Services = « Forfait ambiance complet » précoché |
| 3. Votre projet | Budget prévu pour la location · Vous êtes… · Où en êtes-vous ? · Autre précision | Budget, rôle, échéancier | Texte d'ancrage : « Nos forfaits ambiance pour entreprises se situent entre `{{PRIX_FORFAIT_MIN}}` $ et `{{PRIX_FORFAIT_MAX}}` $, livraison, installation et reprise comprises selon le forfait. » |
| 4. Vos coordonnées | Prénom · Nom · Courriel · Téléphone · Entreprise ou organisation · Langue de communication préférée · Comment avez-vous connu Évenox ? · 2 cases de consentement facultatives | Prénom, nom, courriel, téléphone, entreprise (si corporatif), langue | Rôle présumé : entreprise, donc champ « Entreprise » visible |

**Options clés :**
- Invités : Moins de 50 · 50 à 100 · 100 à 200 · 200 à 400 · Plus de 400
- Budget : Moins de 500 $ · 500 $ à 1 000 $ · 1 000 $ à 2 500 $ · 2 500 $ à 5 000 $ · 5 000 $ et plus · Je ne sais pas encore
- Services : Lettres lumineuses 4 pi · Photobooth (borne photo) · Mobilier lounge · Mobilier cocktail · Mobilier gala · Forfait ambiance complet (on vous conseille) · Autre

**Microcopie :**
- Sous chaque étape : « Réponse en moins de 2 h ouvrables. Soumission détaillée en 24 h. »
- Au-dessus du budget : texte d'ancrage ci-dessus.
- Sous le budget : « Une fourchette suffit. Elle nous permet de vous proposer des options réalistes, sans surprise. »
- Bouton final : **Recevoir ma soumission**
- Sous le bouton : « Aucun engagement. Aucun paiement demandé à cette étape. » puis l'avis Loi 25.

**Champ caché propre à cette page :** `variante_page = noel-v1`.

### Page de remerciement (`/merci-fete-noel`)

**H1 :** Merci, {{Prénom}}. Votre demande est bien reçue.

**Texte :**
Voici la suite :
1. **D'ici 2 h ouvrables**, un membre de notre équipe vous appelle au numéro indiqué pour confirmer la disponibilité du {{Date}} et préciser vos besoins.
2. **D'ici 24 h**, vous recevez votre soumission détaillée par courriel, avec le forfait recommandé et le prix final avant taxes.
3. **Pour bloquer votre date**, un dépôt de 20 % suffit. Les entreprises admissibles paient le solde net 30.

Vous avez reçu un courriel de confirmation. Il n'est pas là ? Vérifiez vos courriels indésirables ou écrivez-nous à `{{COURRIEL_SOUMISSION}}`.

**Bloc secondaire :**
**H2 :** En attendant, inspirez-vous
Découvrez nos fêtes des Fêtes et soirées corporatives. → `[Voir nos réalisations]({{URL_PORTFOLIO}})`

**Bloc tertiaire :**
Votre date est dans moins de 7 jours ? Appelez-nous directement au `{{TELEPHONE}}`.

*(Cette page déclenche la conversion « Demande de soumission » seulement si la méthode retenue est le chargement de la page merci. Elle porte `noindex` et n'apparaît pas dans le menu.)*

### Courriel de confirmation (automatique, envoyé à l'envoi du formulaire)

**De :** Évenox `<{{COURRIEL_SOUMISSION}}>`
**Objet :** Votre fête des Fêtes du {{Date}} : demande reçue
**Texte d'aperçu :** Nous vous rappelons en moins de 2 h ouvrables.

> Bonjour {{Prénom}},
>
> Merci pour votre demande. Voici ce que nous avons noté :
>
> - Événement : {{Type d'événement}}
> - Date : {{Date}}
> - Ville : {{Ville}}
> - Invités : {{Nombre d'invités}}
> - Services : {{Services souhaités}}
>
> **La suite :** un membre de notre équipe vous appelle en moins de 2 h ouvrables pour confirmer la disponibilité de votre date. Vous recevrez ensuite votre soumission détaillée en 24 h.
>
> **Bon à savoir :**
> - Un dépôt de 20 % suffit pour bloquer votre date.
> - Facturation net 30 pour les entreprises admissibles.
> - En cas d'annulation, vos sommes versées deviennent un crédit valable 12 mois.
>
> Une précision à ajouter (logo, couleurs, horaire) ? Répondez simplement à ce courriel.
>
> Au plaisir de faire briller votre soirée,
>
> {{NOM_COORDONNATEUR}}
> Évenox · Location événementielle clé en main
> {{TELEPHONE}} · evenox.ca · Sainte-Thérèse
>
> *Vous recevez ce courriel parce que vous avez demandé une soumission sur evenox.ca. [Politique de confidentialité]({{URL_POLITIQUE_CONFIDENTIALITE}})*

*(Pas de lien de désabonnement obligatoire pour ce courriel transactionnel. Les relances marketing ne partent qu'aux personnes ayant coché la case 4.8.)*

---

## 11. Notes de construction Divi

**Gabarit (Theme Builder) :** créer un gabarit « Page d'atterrissage » assigné à cette page, avec un en-tête minimal : logo Évenox (non cliquable ou lien vers l'accueil en nouvel onglet) à gauche, numéro `{{TELEPHONE}}` cliquable à droite. **Aucun menu, aucun méga-menu.** Pied de page réduit : adresse à Sainte-Thérèse, politique de confidentialité, conditions de location, lien English.

| # | Section Divi | Rangée et colonnes | Modules | Notes |
|---|---|---|---|---|
| 0 | Section régulière (bandeau d'urgence) | 1 colonne | Texte | Fond couleur accent, texte 15 px, hauteur max. 44 px. Contenu modifiable sans toucher au reste (module global). |
| 1 | Section régulière, héros | 2 colonnes 1/2 + 1/2 (ordinateur), empilées sur mobile avec la photo **sous** le H1 | Colonne gauche : Texte (H1 en balise `h1`), Texte (sous-titre), Texte (3 puces avec icônes), Bouton (`#soumission`), Texte (ligne de preuve). Colonne droite : Image | Image WebP, 1200 px de large, moins de 200 Ko, **sans chargement différé** (c'est l'image LCP). Pas de vidéo en lecture automatique, pas de carrousel. |
| 2 | Section régulière, confiance | 1 colonne | Texte (titre) + Galerie ou Image ×6 (logos) **ou** Texte (version de repli) | Module global, réutilisé en section 6. Désactiver les logos tant que les autorisations écrites ne sont pas reçues. |
| 3 | Section régulière, forfaits | 3 colonnes égales (empilées sur mobile, forfait 2 en premier sur mobile) | Tableau de prix (Pricing Tables) avec 3 colonnes, ou Blurb + Texte + Bouton par colonne ; Texte (conditions) ; Bascule (Toggle) « À la carte » | Forfait 2 mis en avant (bordure accent, étiquette « Recommandé… »). Boutons de chaque forfait : « Vérifier ma date » vers `#soumission`, avec paramètre de forfait en option (`#soumission?forfait=signature`). |
| 4 | Section régulière, étapes | 4 colonnes (2 × 2 sur tablette, 1 sur mobile) | Nombre (Number Counter) ou Blurb avec icône numérotée ×4 ; Bouton | — |
| 5 | Section régulière, preuve | Rangée 1 : 3 colonnes ; rangée 2 : 3 colonnes ; rangée 3 : 1 colonne | Compteurs (Number Counter) ×3 ; Témoignage (Testimonial) ×3 ou widget d'avis Google ; Texte (lien vers les avis) ; logos (module global) | Si widget d'avis : choisir une extension légère qui charge les avis côté serveur (pas d'iframe lourde). Les compteurs animés sont facultatifs ; un texte statique charge plus vite. |
| 6 | Section régulière, filtre | 1 colonne, largeur 800 px | Texte (H2 + liste + conclusion) | Fond neutre, ton sobre. |
| 7 | Section régulière, FAQ | 1 colonne, largeur 800 px | Bascule (Toggle) ×8, toutes fermées | Les questions sont en texte HTML réel (balisage `h3` dans le titre de la bascule si possible). Données structurées FAQPage facultatives (Google n'affiche plus ces extraits pour la plupart des sites, mais elles n'ont pas d'effet négatif). |
| 8 | Section régulière, formulaire `#soumission` | 2 colonnes 3/5 + 2/5 | Gauche : Texte (H2 + intro), Code ou module de l'extension de formulaire (4 étapes). Droite : Texte (4 garanties) + Image (photo coordonnateur) + Texte (citation) | Le formulaire Divi natif ne gère ni les étapes ni les champs cachés : utiliser l'extension retenue (voir `formulaire-soumission.md`). ID CSS de la section : `soumission`. |
| 9 | Section régulière, appel final | 1 colonne, centrée | Texte (H2 + texte), Bouton | Fond sombre ou photo de soirée assombrie. |
| — | Barre collante mobile | — | Bouton fixe en bas de l'écran « Vérifier ma date » (mobile seulement), masqué quand la section 8 est visible | Via le réglage « Sticky » de Divi sur une section dédiée, ou un petit script. |

**Réglages de performance :** Divi > Options du thème > Performance : CSS dynamique, CSS critique, JavaScript différé et chargement différé de jQuery activés. Images en WebP, chargement différé partout sauf l'image du héros. Polices limitées à 2 graisses. Cible : moins de 2,5 s pour le LCP sur mobile (PageSpeed Insights).

**Suivi :** le gabarit doit charger GTM via la bannière Loi 25 (mode consentement « basic »). La balise de conversion se déclenche sur l'envoi réussi du formulaire (voir `GUIDE-TRACKING-LOI25.md`). Tester avec Tag Assistant avant d'envoyer du trafic.

**Indexation :** page indexable (elle peut aussi se classer en SEO sur « fête de Noël d'entreprise »). La page merci porte `noindex, nofollow`. Lien interne depuis l'accueil et la page corporative.

**Version anglaise :** à créer seulement quand la campagne EN est activée (`/en/corporate-holiday-party`), de qualité équivalente, jamais avec une offre plus avantageuse que la version française.

**Après la mise en ligne :** remplacer l'URL finale du groupe « Fête de Noël d'entreprise » dans Google Ads Editor (`4_annonces_rsa.csv`), puis vérifier que les prix des titres « Forfait gala 2 900 $ » et de la description « Forfaits lounge 850 $, cocktail 1 100 $ à 1 400 $ et gala 2 900 $ » correspondent exactement aux prix publiés sur la page.

---

## Vérification des longueurs (Python, `len()`)

| Élément | Texte | Caractères | Limite |
|---|---|---|---|
| Titre SEO | Fête de Noël d'entreprise clé en main \| Évenox | 46 | 60 |
| Méta-description | Lettres lumineuses 4 pi, lounge et photobooth livrés et installés pour votre fête de Noël d'entreprise. Laval, Montréal, Rive-Nord. Réponse en 2 h. | 147 | 155 |
