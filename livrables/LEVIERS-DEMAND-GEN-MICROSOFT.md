# Évenox — Leviers 2, 3 et 4 : Demand Gen et Microsoft Ads

*7 octobre 2026. Ce document complète la section 7 de `PLAN-CAMPAGNES-300-PAR-JOUR.md`. Les spécifications ont été revérifiées en ligne aujourd'hui (sources à la fin). Les prix sont ceux relevés sur evenox.ca le 7 octobre 2026. Règles de marque : pas de %, ni de « à partir de », ni de « dès XX $ ». Les 60 textes ont été vérifiés par script (tableau en annexe A : 0 erreur).*

**Ordre d'activation** (on n'active jamais deux leviers la même semaine, sinon on ne sait pas lequel produit) :

| Levier | Section | Porte d'entrée | Budget/jour | Arrêt |
|---|---|---|---|---|
| 2. Demand Gen prospection | 1 | Conversions vérifiées depuis 3 semaines | 40 à 60 $ | 0 lead qualifié après 1 500 $ |
| 3. Microsoft Ads | 3 | 30 jours de Search stable | 15 à 20 $ | CPA > 1,5 × Google |
| 4. Demand Gen remarketing + liste clients | 2 | Bannière Loi 25 en ligne depuis 3 semaines + listes assez grosses | 20 à 40 $ | 0 lead qualifié après 1 000 $ |

**Calendrier réaliste.** Avec une activation Search le 14 octobre, le levier 2 ne peut pas partir avant le **4 novembre**. Le groupe Corporatif aura donc environ 4 semaines utiles (jusqu'au 5 décembre). Le groupe Mariage, lui, roule de novembre à mars.

---

## 1. Demand Gen PROSPECTION (levier 2)

### Quand l'activer
Les 4 conditions doivent être vraies, sinon on attend :
1. La conversion « Demande de soumission » remonte dans Google Ads depuis **21 jours**, sans doublons (un envoi de formulaire = une conversion).
2. Au moins **5 leads Search** ont reçu un statut dans Notion (A, B, C ou rejeté). Sans ça, on ne peut pas juger la qualité des leads DG.
3. Search est **limité par le classement, pas par le budget** : il reste au moins 40 $/jour non dépensés sous le plafond de 300 $.
4. Au moins **9 images réelles** sont prêtes (3 par format : 1.91:1, 1:1, 4:5) et une vidéo verticale (liste de prises plus bas).

### Réglages de la campagne

| Réglage | Valeur | Pourquoi |
|---|---|---|
| Nom | `DG-P \| Prospection FR` | |
| Objectif | **Prospects** (« Leads »), type Demand Gen | |
| Objectif de conversion | **Propre à la campagne** : « Demande de soumission » seulement. Retirer les objectifs de compte (appels, clics sur téléphone, pages vues) | DG optimise sur ce qu'on lui donne ; une micro-conversion attire des clics vides |
| Conversions après vue engagée | Laisser la fenêtre par défaut, mais **juger la campagne sur les leads Notion**, pas sur la colonne Conversions (une partie vient des vues de vidéo) | Une vue engagée n'est pas un lead |
| Enchères | **Maximiser les conversions, sans CPA cible**. Aucun changement pendant 14 jours | Les conversions sont vérifiées (porte d'entrée 1) |
| Budget | **Quotidien, 50 $** (fourchette 40 à 60 $) | Voir la note budget juste en dessous |
| Lieux | **Rayon de 40 km autour de Sainte-Thérèse**, option **Présence** (« Personnes se trouvant dans vos zones ou y étant régulièrement ») | Ta zone de livraison ; DG offre l'option Présence depuis décembre 2025 |
| Langue | **Français**. Le ciblage linguistique existe encore en Demand Gen (il a disparu seulement en Search et PMax) | Les annonces sont en français (art. 58 de la Charte) |
| Dates | Corporatif : du 4 nov. au 5 déc. 2026, puis du 15 août 2027. Mariage : du 4 nov. 2026 au 31 mars 2027 | Saisonnalité |
| Appareils | Tous | |
| Page de destination | `/nos-forfaits-tout-inclus` pour les 2 groupes (les prix des annonces y sont). **Expansion d'URL / page finale automatique : OFF** | Chaque prix promis doit être sur la page |
| Éléments générés automatiquement / amélioration automatique des images et vidéos | **OFF** | Évite des textes non conformes (%, « à partir de ») et des visuels générés |

**Note budget.** Google recommande un budget quotidien d'au moins **15 fois le CPA cible** (guide API, mis à jour en août 2026 ; l'aide Google dit 10 fois). Avec un CPA visé de 100 à 150 $, il faudrait 1 000 à 2 250 $/jour. Le plancher technique est de 5 $ US/jour (depuis le 1er avril 2026). À 50 $/jour, on est **sous la recommandation** : la campagne apprendra lentement. On l'accepte parce que c'est un **test plafonné** avec une règle d'arrêt claire, pas un pilier. Ne monte pas le budget pour « aider l'algorithme » avant d'avoir des leads qualifiés.

### Canaux (au niveau du groupe d'annonces : « Me laisser choisir »)

| Canal | Décision | Raison |
|---|---|---|
| YouTube (Shorts, flux, in-stream) | **Garder** | C'est là que la vidéo verticale d'événement performe |
| Discover | **Garder** | Flux d'images ; bon pour les forfaits avec prix |
| Gmail (onglets Promotions et Réseaux sociaux) | **Garder** | Peu coûteux, public adulte |
| Maps | **Garder seulement si** l'élément de lieu (fiche Google Business Profile) est lié au compte, sinon il ne diffuse pas | Volume faible, mais local |
| Réseau Display (sites tiers) | **OFF** | Principale source de clics accidentels et de faux leads |

### Audiences : segments personnalisés basés sur les recherches Google

Chemin : Outils > Bibliothèque partagée > Gestionnaire d'audiences > Segments personnalisés > **+** > « Personnes ayant recherché l'un de ces termes sur Google ». Copier chaque liste telle quelle (une ligne = un terme).

**Segment A — `CS | Fêtes corporatives et team building`**
```
party de bureau
party de noël entreprise
party des fêtes entreprise
fête de noël entreprise
party de noël employés
idée party de bureau
organiser party de noël
salle party de noël montréal
salle party de bureau laval
traiteur party de bureau
animation party de noël
party de fin d'année entreprise
soirée reconnaissance employés
gala entreprise
activité team building
team building montréal
team building laval
team building rive-nord
consolidation d'équipe
activité 5 à 7 entreprise
idée activité d'équipe
office holiday party montreal
corporate christmas party ideas
holiday party venue montreal
team building activities montreal
corporate event planner montreal
```

**Segment B — `CS | Mariage 2027 en préparation`**
```
mariage 2027
planifier son mariage
préparatifs mariage
budget mariage
salle de réception mariage
salle de mariage laurentides
salle de mariage laval
salle de réception mariage montréal
domaine pour mariage
traiteur mariage
photographe mariage montréal
dj mariage montréal
décoration mariage
robe de mariée montréal
salon du mariage montréal
fiançailles
wedding venue montreal
wedding planner montreal
wedding photographer montreal
wedding 2027
```

**Segment C — `CS | Décor et photobooth d'événement`**
```
location photobooth
photobooth mariage
location borne photo
borne photo mariage
photobooth 360
location vidéobooth 360
location lettres lumineuses
lettres géantes lumineuses
lettres lumineuses mariage
location décoration événement
location mur floral
mur de fleurs location
décoration anniversaire 50 ans
décoration party
photo booth rental montreal
360 photo booth rental
marquee letters rental
event decor rental montreal
```

**Affectation.** Groupe Corporatif = segments A + C. Groupe Mariage = segments B + C. Ajouter aussi, dans Mariage, l'événement de vie **« Mariage prochain »** (« Getting married soon »).

**Ciblage optimisé : OFF au lancement**, dans les 2 groupes. Avec un petit budget et des segments précis, le ciblage optimisé élargit vite vers des gens qui cliquent mais ne réservent pas. On le teste **seulement si** la campagne dépense moins de 60 % de son budget pendant 14 jours ET a déjà produit au moins 2 leads qualifiés.

**Segments similaires (lookalikes) : pas en prospection.** Depuis mars 2026, ils servent de suggestion et l'IA peut sortir du seuil choisi. On les garde pour le levier 4, avec une liste clients comme base.

### Exclusions

| Où | Quoi |
|---|---|
| Compte > Outils > Adéquation du contenu | Type d'inventaire **Limité** (pour YouTube et le Display). Exclure : vidéos intégrées, diffusions en direct, et les catégories sensibles (tragédie, conflits, contenu sexuel suggestif, langage grossier, jeux de hasard) |
| Contenu pour enfants | Exclure le contenu **conçu pour les enfants** et les chaînes jeunesse dans la liste d'exclusion d'emplacements (les annonces personnalisées n'y diffusent pas de toute façon, mais l'inventaire non personnalisé reste possible) |
| Liste d'exclusion d'emplacements `EXCL \| Apps et jeux` | Catégories d'applications mobiles (jeux) et chaînes de jeux vidéo, musique pour enfants, ASMR |
| Audiences exclues | **Convertisseurs des 90 derniers jours** (balise Google Ads) et, dès qu'elle existe, la **liste clients** (l'exclusion est permise à tous les comptes conformes) |
| Lieux exclus | Rien de plus : l'option Présence suffit |

### Formats
- **Annonce multi-éléments (images)** : 5 titres, 5 descriptions, nom d'entreprise, logo, images aux 4 formats.
- **Annonce vidéo** : 1 à 3 vidéos verticales, 5 titres, 5 titres longs, 5 descriptions.
- **Carrousel** : facultatif, en semaine 3, si les images performent (2 à 10 cartes : une carte par forfait).
- **Pas de formulaire de prospects natif au lancement** : le formulaire du site filtre mieux (type, date, invités, budget par paliers). On testera l'élément formulaire seulement si le taux de conversion du site est sous 2 %.

### Limites de texte vérifiées (octobre 2026)
- Titre : l'aide Google indique **40 caractères**, mais l'API Google Ads (v22 à v25, mise à jour en juillet 2026) indique encore **30**. **On écrit à 30 ou moins** : ça passe partout.
- Titre long (annonces vidéo) : 90. Description : 90. Nom d'entreprise : 25. Jusqu'à 5 de chaque.

### Textes prêts à coller (nom d'entreprise : `Évenox`)

**Bouton d'incitation (CTA) : « Obtenir un devis »** (« Get quote »). La liste de Google est fixe et n'offre pas « soumission ». Si l'interface ne l'affiche pas en français, prends « Réserver ». **Jamais « Automatique ».**

#### Groupe `Corporatif` (segments A + C)
Titres (≤ 30) :
1. Party de Bureau 1 995 $
2. 5 à 7 d'équipe 1 195 $
3. Gala Signature 2 495 $
4. Party de Noël clé en main
5. Décembre se réserve tôt

Titres longs (≤ 90, annonces vidéo) :
1. Party de Bureau 1 995 $ : lettres lumineuses, mur floral, 5 jeux géants et popcorn
2. Votre fête de Noël d'entreprise livrée, installée et ramassée par notre équipe
3. 5 à 7 d'équipe 1 195 $ ou Gala Signature 2 495 $ : prix affiché, rien à monter
4. Bon de commande accepté et facturation net 30 sur approbation de crédit
5. Photobooth avec préposé : Essentiel 599 $, Signature 799 $ ou Prestige 999 $

Descriptions (≤ 90) :
1. Forfaits tout inclus pour vos fêtes d'entreprise à Montréal, Laval et sur la Rive-Nord.
2. Les vendredis de décembre partent vite. Soumission détaillée en 24 h.
3. Plus de 1 000 événements réalisés, note Google de 4,8/5.
4. Installation discrète et ramassage par notre équipe : vous profitez de la soirée.
5. Team building clé en main : un mini tournoi de jeux géants livré sur place.

#### Groupe `Mariage` (segment B + C + « Mariage prochain »)
Titres (≤ 30) :
1. Décor WOW 899 $
2. Soirée Signature 1 449 $
3. Photobooth Signature 799 $
4. Mariage 2027 : réservez tôt
5. Lettres lumineuses de 4 pi

Titres longs (≤ 90) :
1. Décor WOW 899 $ : 5 lettres lumineuses géantes, mur floral et étincelles froides
2. Soirée Signature 1 449 $ : tout le Décor WOW et un photobooth premium avec préposé
3. Les samedis de l'été 2027 partent vite : vérifiez la disponibilité de votre date
4. Photobooth Essentiel 599 $, Signature 799 $ ou Prestige 999 $ pour votre mariage
5. Un décor de mariage installé et coordonné par notre équipe, sans tracas pour vous

Descriptions (≤ 90) :
1. Décor de mariage clé en main à Montréal, Laval et sur la Rive-Nord. Soumission en 24 h.
2. Plus de 1 000 événements réalisés, note Google de 4,8/5.
3. Vos initiales ou votre nom en lumière : un décor élégant qui sublime vos photos.
4. Prix affichés en ligne : choisissez votre forfait, notre équipe s'occupe du reste.
5. Livraison, installation et reprise par notre équipe.

### Liste de prises de vue (photos et vidéos réelles d'événements Évenox)

**Règles :**
- Vraies photos d'installations Évenox, jamais de banque d'images ni d'IA.
- Sujet au centre (80 % du cadre) : Google recadre les bords.
- Pas de texte ni de logo incrusté sur les images. Le prix va dans le texte de l'annonce.
- **Loi 25 et droit à l'image** : un visage reconnaissable est un renseignement personnel. Utilise seulement des photos dont les personnes ont donné une autorisation écrite, sinon des plans de décor sans invités ou des invités de dos. Pas de logo d'un client corporatif sans son accord écrit.
- Format JPG ou PNG, 5 Mo maximum.

| # | Scène (photo réelle) | 1.91:1 (1200×628) | 1:1 (1200×1200) | 4:5 (960×1200) | 9:16 (1080×1920) | Groupe |
|---|---|---|---|---|---|---|
| 1 | Party de bureau installée : lettres lumineuses allumées et mur floral, salle tamisée | ✓ | ✓ | ✓ | ✓ | Corporatif |
| 2 | Employés qui jouent aux jeux géants (de dos ou avec autorisation) | ✓ | ✓ | ✓ | | Corporatif |
| 3 | Photobooth avec préposé et bandelette imprimée en main | ✓ | ✓ | ✓ | ✓ | Les 2 |
| 4 | Gala : lettres de 4 pi devant une scène | ✓ | ✓ | | ✓ | Corporatif |
| 5 | Décor WOW : 5 lettres géantes, mur floral, étincelles froides au moment de l'entrée | ✓ | ✓ | ✓ | ✓ | Mariage |
| 6 | Lettres « LOVE » ou initiales des mariés, plan large de la salle | ✓ | ✓ | ✓ | | Mariage |
| 7 | Équipe Évenox qui installe (gilet ou chandail à l'image d'Évenox) | ✓ | ✓ | | ✓ | Les 2 |

Total visé : **au moins 3 images par format et par groupe** (Google recommande 3 verticales, 3 carrées et 3 horizontales, plus une vidéo dans chaque orientation).

**Logo** : carré 1:1, 1200×1200 (min. 144×144), fond plein, 150 Ko maximum.

**Vidéos verticales 9:16** : 1080×1920, de 15 à 30 secondes, son activé et sous-titres en français. Vidéos réelles tournées au téléphone. On les téléverse sur YouTube en « non répertoriée ». Google recadre maintenant le vertical en carré et en horizontal ; vérifie l'aperçu.

| Vidéo | 0 à 3 s (accroche) | 3 à 20 s | Fin (dernières 3 à 5 s) | Groupe |
|---|---|---|---|---|
| V1 « Lumières » (20 s) | Salle noire, les lettres de 4 pi s'allument. Texte : « Votre party de bureau, clé en main » | Plans rapides : mur floral, jeux géants, photobooth, popcorn | Logo + « Party de Bureau 1 995 $ » + « Obtenir un devis » | Corporatif |
| V2 « Montage en accéléré » (25 s) | Salle vide, compteur « 0 min » | Accéléré de l'équipe qui installe, puis invités qui arrivent. Texte : « Livré, installé, ramassé » | Logo + « Réservez votre date » | Les 2 |
| V3 « L'entrée des mariés » (20 s) | Étincelles froides au moment de l'entrée | Décor WOW, lettres « LOVE », invités au photobooth, bandelette imprimée | Logo + « Décor WOW 899 $ » + « Mariage 2027 : réservez tôt » | Mariage |

### Règles d'arrêt et de montée

| Signal | Mesure | Action |
|---|---|---|
| Apprentissage | Jours 1 à 14 | Aucun changement d'enchère, de budget ni d'audience. On ajoute seulement des exclusions d'emplacements |
| **Arrêt dur** | **0 lead qualifié (A ou B dans Notion) après 1 500 $ dépensés** | **Pause.** Le budget retourne à Search Privés |
| Leads poubelles | Plus de 50 % des leads DG rejetés après 10 leads | Vérifier que le Display est OFF ; passer YouTube en Shorts et flux seulement ; ajouter des exclusions. Si ça persiste 7 jours : pause |
| Groupe faible | Un groupe à 0 lead après 750 $ alors que l'autre en produit | Pause du groupe faible, budget gardé sur le bon |
| Élément faible | Éléments classés « Faible » après 14 jours | Remplacer par une nouvelle photo ou vidéo réelle (une à la fois) |
| **Montée** | Coût par lead qualifié ≤ 1,3 × celui de Search, sur au moins 3 leads qualifiés | +20 % de budget par semaine, plafond 60 $/jour (le levier 4 vient ensuite) |
| Passage au CPA cible | 15 conversions ou plus sur 30 jours dans la campagne | CPA cible = CPA réel + 10 % |
| Fin de saison | 5 décembre | Pause du groupe Corporatif (les dates de décembre sont prises). Réactivation le 15 août 2027 |

### Étapes exactes
1. Créer les 3 segments personnalisés (listes ci-dessus).
2. Créer la liste d'exclusion d'emplacements `EXCL | Apps et jeux` et régler l'adéquation du contenu (inventaire Limité).
3. Campagne > **+** > Prospects > Demand Gen. Nom : `DG-P | Prospection FR`.
4. Objectif de conversion : propre à la campagne, « Demande de soumission ».
5. Budget 50 $/jour, Maximiser les conversions, sans CPA cible.
6. Lieux : rayon de 40 km autour de Sainte-Thérèse, Présence. Langue : français.
7. Groupe `Corporatif` : segments A + C ; ciblage optimisé OFF ; canaux YouTube, Discover, Gmail, Maps (si fiche liée) ; Display OFF.
8. Annonce images, puis annonce vidéo V1 et V2, avec les textes du groupe Corporatif. CTA : « Obtenir un devis ».
9. Groupe `Mariage` : segments B + C + « Mariage prochain » ; mêmes réglages ; annonces avec V2 et V3.
10. Exclure les audiences de convertisseurs (90 jours). Désactiver les éléments générés automatiquement.
11. Publier, puis noter la date et le montant de départ dans Notion. Le premier bilan se fait à 14 jours, et la décision d'arrêt à 1 500 $.

---

## 2. Demand Gen REMARKETING + liste clients (levier 4)

### Quand l'activer
1. La **bannière Loi 25** (CookieYes ou Complianz, mode consentement basic) est en ligne depuis **21 jours**. Avant, les listes se remplissent mal, et sans consentement elles n'ont pas le droit de se remplir.
2. La liste « Visiteurs 180 jours » compte **au moins 100 utilisateurs actifs** (actifs sur les 30 derniers jours) dans le Gestionnaire d'audiences. C'est le seuil commun à tous les réseaux depuis 2024 (voir la vérification plus bas). Avec le mode basic, seuls les visiteurs qui acceptent comptent : prévois de 4 à 8 semaines.
3. Pour la liste clients : le **feu vert juridique** sur le consentement (voir plus bas) et une liste de **100 correspondances ou plus**.
4. Le levier 2 n'est pas en train d'apprendre (pas de changement depuis 14 jours).

### Vérification de la « règle des 100 » (avril 2026)
- **Seuil de 100** : il est confirmé, mais il ne date pas d'avril 2026. Google a abaissé le minimum des listes clients en Search de 1 000 à 100 en mai 2024, puis a uniformisé le seuil à **100 utilisateurs actifs pour tous les réseaux et tous les types de segments** (aide Google, décembre 2024). Pour rester admissible, une liste doit aussi compter 100 membres ajoutés ou mis à jour dans les **540 derniers jours**.
- **Ce qui a changé en avril 2026** : les téléversements de listes clients par l'**API** Google Ads passent par la **Data Manager API**. Ça ne touche pas un téléversement manuel en CSV dans l'interface, qui est notre cas.
- **Restriction toujours en vigueur** (politique Customer Match) : le mode **Ciblage** demande **90 jours d'historique et plus de 50 000 $ US de dépenses à vie** dans le compte. Sinon, la liste sert seulement en **Observation** et en **exclusion**. **À vérifier dans le compte choisi** : Gestionnaire d'audiences > la liste > colonne « Admissibilité ». Si le compte n'est pas admissible, le groupe « Clients » devient une exclusion partout, et on ne garde que le groupe « Visiteurs ».
- Une source secondaire (SurfSide PPC, 2026) avance qu'une base de segment similaire en Demand Gen demanderait 1 000 correspondances. **Non confirmé par Google** : on teste avec ce qu'on a.

### Préparer la liste depuis Notion
1. Dans Notion, filtre : clients ayant réservé depuis 2022, avec courriel ou téléphone, **et** une base de consentement documentée (colonne ci-dessous).
2. Exporte en CSV. Garde seulement ces colonnes, avec ces en-têtes **exacts** (gabarit Google) :

| Email | Phone | First Name | Last Name | Country | Zip |
|---|---|---|---|---|---|
| marie.tremblay@exemple.ca | +15145551234 | Marie | Tremblay | CA | J7E 1A1 |

   - Courriel en minuscules, sans espaces.
   - Téléphone au format E.164 (+1 suivi de 10 chiffres).
   - Pays : `CA`.
   - Code postal : facultatif.
3. **Ne hache rien toi-même.** Dans l'interface, Google hache les données en SHA-256 dans ton navigateur avant l'envoi. Si tu préfères hacher toi-même, fais-le en SHA-256 après normalisation, mais ne mélange jamais les deux méthodes.
4. Ajoute dans Notion deux colonnes de suivi : `Consentement pub` (oui, non ou inconnu, avec la date et la source) et `Retiré le`. Rafraîchis la liste **chaque mois** : retire les personnes qui se sont désabonnées et ajoute les nouveaux clients.
5. Fais 2 listes : `CM | Clients corporatifs` et `CM | Clients mariage et privés`. Le taux de correspondance attendu est de 30 à 60 % : prévois au moins **250 contacts** pour obtenir 100 correspondances.
6. Téléversement : Outils > Bibliothèque partagée > Gestionnaire d'audiences > **+** > Liste de clients > « Téléverser des adresses courriel, des numéros de téléphone ou des adresses postales » > fichier CSV. Dans la case de politique, coche que les données ont été recueillies et partagées conformément aux règles de Google. Durée d'adhésion : 540 jours. Le traitement prend de 24 à 48 h.

### ⚠ Base de consentement des anciens clients : validation juridique obligatoire
Ce qui suit est un **signalement**, pas un avis juridique. **Ne téléverse pas la liste avant la réponse d'un avocat** spécialisé en protection des renseignements personnels.
- Les coordonnées ont été recueillies pour **exécuter un contrat** (l'événement). Les téléverser chez Google pour de la publicité est une **utilisation à une autre fin** et une **communication à un tiers**. Selon la Loi sur la protection des renseignements personnels dans le secteur privé (articles 12 et 13, modifiés par la Loi 25), ça demande en principe un **consentement**, à moins qu'une exception s'applique (par exemple, une fin compatible). La prospection auprès de ses propres clients se défend parfois comme compatible, mais rien n'est garanti.
- Google traite les données **hors Québec** : l'article 17 exige une **évaluation des facteurs relatifs à la vie privée (EFVP)** avant toute communication à l'extérieur du Québec.
- La politique Customer Match de Google exige un **consentement** valide et une **politique de confidentialité** qui mentionne le partage avec des partenaires publicitaires.
- **Correctif pour l'avenir (à faire dès maintenant)** : ajoute au formulaire de soumission une case **non cochée par défaut** : « J'accepte qu'Évenox utilise mes coordonnées pour me présenter ses offres, y compris par l'entremise de plateformes publicitaires comme Google. Je peux retirer mon consentement en tout temps. » Mets aussi la politique de confidentialité à jour (partage avec Google, conservation, retrait du consentement), et note le consentement dans Notion.
- **Si l'avocat dit non pour les anciens clients** : utilise seulement les contacts qui ont coché la case et les visiteurs du site qui ont consenti.

### Audiences et réglages

| Réglage | Valeur |
|---|---|
| Campagne | `DG-R \| Remarketing FR`, objectif Prospects, conversion propre à la campagne « Demande de soumission » |
| Budget et enchères | 30 $/jour (fourchette 20 à 40 $), Maximiser les conversions |
| Lieux et langue | Rayon de 40 km, Présence ; français |
| Groupe `Visiteurs` | Visiteurs du site, 180 jours (balise Google Ads), **moins** ceux qui ont envoyé une soumission (30 jours). Ciblage optimisé OFF |
| Groupe `Clients` (si le compte est admissible au Ciblage et que l'avocat a dit oui) | `CM \| Clients corporatifs` + `CM \| Clients mariage et privés`. En semaine 3, ajoute un **segment similaire** (portée « Étroite », Canada) de ces listes, dans un groupe séparé `Similaires`, pour comparer |
| Canaux | YouTube, Discover, Gmail. Display OFF. Maps OFF (les listes sont petites) |
| Exclusions | Les mêmes que pour le levier 2. Exclure aussi les listes clients de `DG-P` et des campagnes Search de prospection, si tu veux éviter de payer pour des clients actuels (l'exclusion est permise à tous les comptes) |
| Règle d'arrêt | **0 lead qualifié après 1 000 $ → pause.** Fréquence de plus de 6 impressions par personne par semaine → retirer un canal ou ajouter des visuels |

**Message.** Les annonces de remarketing ne doivent **jamais** laisser entendre qu'on sait que la personne a visité le site ou réservé (règles de Google sur la publicité personnalisée). Pas de « Vous avez regardé… » ni de « Merci d'être client ». De décembre à mars, retire les textes corporatifs du groupe `Visiteurs` et garde les textes mariage.

#### Groupe `Visiteurs`
Titres (≤ 30) : Votre date est-elle libre ? · Soumission en 24 h · Party de Bureau 1 995 $ · Décor WOW 899 $ · Note Google 4,8/5

Titres longs (≤ 90) :
1. Fête d'entreprise ou mariage : vérifiez la disponibilité de votre date en ligne
2. Party de Bureau 1 995 $, Décor WOW 899 $ ou Soirée Signature 1 449 $, prix affichés
3. Photobooth Essentiel 599 $, Signature 799 $ ou Prestige 999 $ avec préposé
4. Plus de 1 000 événements réalisés à Montréal, Laval et sur la Rive-Nord
5. Livraison, installation et reprise par notre équipe : vous n'avez rien à monter

Descriptions (≤ 90) :
1. Les dates de décembre et les samedis d'été partent vite. Soumission détaillée en 24 h.
2. Forfaits tout inclus à prix affiché sur notre site.
3. Bon de commande et net 30 sur approbation de crédit pour les entreprises.
4. Plus de 1 000 événements réalisés, note Google de 4,8/5.
5. Montréal, Laval et Rive-Nord : livraison, installation et reprise incluses.

#### Groupe `Clients`
Titres (≤ 30) : Votre prochain événement ? · Réservez votre date · Gala Signature 2 495 $ · Soirée Signature 1 449 $ · Soumission en 24 h

Titres longs (≤ 90) :
1. Party des fêtes, gala ou mariage : réservez votre prochaine date avec Évenox
2. 5 à 7 d'équipe 1 195 $, Party de Bureau 1 995 $ ou Gala Signature 2 495 $
3. Photobooth avec préposé : Essentiel 599 $, Signature 799 $ ou Prestige 999 $
4. Décor WOW 899 $ ou Soirée Signature 1 449 $ pour votre prochain grand jour
5. Décembre se réserve tôt : bloquez votre vendredi dès maintenant

Descriptions (≤ 90) :
1. La même équipe, le même service : livraison, installation et reprise incluses.
2. Bon de commande et facturation net 30 sur approbation de crédit.
3. Les vendredis de décembre partent vite. Soumission détaillée en 24 h.
4. Photobooth Essentiel 599 $, Signature 799 $ ou Prestige 999 $.
5. Plus de 1 000 événements réalisés, note Google de 4,8/5.

CTA : « Obtenir un devis ». Visuels : les mêmes que pour le levier 2 (scènes 1, 3, 5 et 7, et les vidéos V2 et V3).

### Étapes exactes
1. Vérifier dans le Gestionnaire d'audiences que « Visiteurs 180 j » compte 100 utilisateurs actifs ou plus.
2. Obtenir l'avis juridique et faire l'EFVP. Ajouter la case de consentement au formulaire.
3. Exporter de Notion, nettoyer le fichier, téléverser les 2 listes `CM | …` et attendre 48 h. Noter la taille de correspondance et l'admissibilité.
4. Créer `DG-R | Remarketing FR` (réglages ci-dessus). Créer le groupe `Visiteurs`, puis le groupe `Clients` seulement si les listes sont admissibles en Ciblage.
5. Ajouter les listes clients en exclusion dans `DG-P` et dans Search Corporatif et Privés (en observation, sans ajustement).
6. Bilan à 14 jours, décision d'arrêt à 1 000 $.

---

## 3. Microsoft Ads (levier 3)

### Quand l'activer
1. Les campagnes Search tournent depuis **30 jours** sans changement majeur, et le CPA est connu par campagne.
2. Les termes de recherche ont été nettoyés au moins 4 fois (les négatifs seront importés).
3. Le **consentement Microsoft (UET)** est branché dans la bannière (étape 6 plus bas). Sans ça, pas de balise UET.
4. Il reste au moins 15 $/jour sous le plafond de 300 $.

### Disponibilité et volume attendu
- Microsoft Advertising est offert au Canada, en français et en anglais, avec facturation en dollars canadiens. Ses annonces paraissent sur Bing, Copilot, MSN, Edge, et sur les recherches de Yahoo et DuckDuckGo.
- **Part de marché au Canada (StatCounter, septembre 2026)** : Bing obtient **10,1 %** des recherches toutes plateformes (Google : 85,3 %), et **18,9 % sur ordinateur** (Google : 74,8 %). StatCounter ne publie pas de données par province : **aucune source publique ne donne la part du Québec**. On utilise donc la donnée canadienne comme estimation.
- **Ce que ça veut dire pour Évenox** : compte environ **10 à 15 % du volume de Google**, un peu plus en corporatif, parce que les postes de bureau sous Windows et Edge ont Bing par défaut. Si Search dépense de 40 à 120 $/jour, Microsoft dépensera probablement **de 5 à 20 $/jour**, avec 1 à 5 leads par mois. Les CPC sont souvent plus bas, mais le volume est petit.

### Importer depuis Google Ads (interface 2026, Centre d'importation)
1. Crée le compte sur ads.microsoft.com avec le courriel de l'entreprise. Fuseau horaire : (UTC-05:00) Heure de l'Est. Devise : **CAD** (on ne peut plus la changer ensuite). Ajoute le mode de paiement.
2. Menu de gauche : **Importer** > **Importer à partir de Google Ads**. Le Centre d'importation, lancé le 19 mai 2026, regroupe et suit toutes les importations.
3. Connecte-toi au compte Google Ads choisi au bloquant 1 du plan, puis choisis **« Campagnes et groupes d'annonces précis »** : `S-FR | Marque`, `S-FR | Corporatif & Fêtes` et `S-FR | Événements privés`. **Pas les campagnes en pause (EN, Québec-Lévis) ni les campagnes Demand Gen** : DG n'a pas d'équivalent chez Microsoft.
4. Options d'importation :
   - Quoi importer : campagnes, groupes, mots-clés, négatifs (y compris les listes partagées), annonces, éléments (liens annexes, accroches, prix, appel). Ciblage géographique : oui. Audiences : non.
   - **Enchères et budgets** : importe les budgets tels quels, puis corrige-les à l'étape suivante.
   - URL de destination : oui. Modèles de suivi : non (on ajoutera le marquage automatique `msclkid`).
   - Microsoft Merchant Center : non.
5. **Planification : une seule importation, pas d'importation récurrente.** Une importation planifiée réécraserait les réglages propres à Microsoft (lieux, distribution, langue). Les nouveaux négatifs s'ajoutent à la main une fois par mois.
6. Lis le résumé : ce qui a été ignoré, modifié ou à corriger. Corrige chaque avertissement avant d'activer.

### Réglages à changer après l'importation

| Réglage | Valeur | Où |
|---|---|---|
| Statut | Tout reste **en pause** jusqu'à la fin de la vérification UET | Campagnes |
| Lieux | Rayon de 40 km autour de Sainte-Thérèse. Option : **« Personnes se trouvant dans vos lieux ciblés »** (l'équivalent de Présence) et non « Personnes dans, cherchant ou consultant des pages sur… » | Paramètres de campagne > Lieux > Options de lieu |
| Distribution des annonces | **« Sites Microsoft et trafic sélectionné »** : ça exclut le réseau d'audience Microsoft et les partenaires de recherche non sélectionnés | Groupes d'annonces > Paramètres > Distribution des annonces |
| Réseau d'audience | OFF (ça découle du réglage précédent) | Idem |
| Langue | **Français** (ou « Toutes les langues » si l'importation l'a imposé). Vérifie qu'aucun groupe n'a été importé en **anglais** : la langue ne se modifie pas après coup, il faudrait recréer le groupe | Paramètres de campagne > Langues |
| Budget | Marque 3 $, Corporatif 10 $, Privés 7 $ (**20 $/jour au total**) | Campagnes |
| Enchères | **Maximiser les clics avec CPC maximal** : Marque 2,00 $, Corporatif 3,20 $, Privés 2,40 $ (80 % de Google). Passer à Maximiser les conversions à 15 conversions sur 30 jours | Paramètres de campagne > Stratégie d'enchères |
| Recommandations appliquées automatiquement | **Toutes OFF** | Outils > Recommandations > Paramètres |
| Éléments automatiques et annonces générées | **OFF** (au niveau compte et campagne) | Paramètres du compte > Éléments automatiques |
| Marquage automatique | **ON** (`msclkid`), et ajoute un champ caché `msclkid` au formulaire, comme le GCLID | Paramètres du compte |
| Ciblage LinkedIn (profil) | Pas au lancement. Plus tard : observation sur « Taille d'entreprise » pour le corporatif | Groupe d'annonces > Audiences |
| Éléments | Vérifie le texte des prix (qualificatif : aucun) et refais le lien vers la fiche **Bing Places** (l'importer depuis Google Business Profile) | Éléments |
| Conversions | Objectif « Demande de soumission » (événement UET sur l'envoi du formulaire), comptage **un seul**, principal | Outils > Objectifs de conversion |

### Balise UET et consentement (Microsoft Consent Mode)
La Loi 25 exige que le témoin UET soit **désactivé par défaut**, exactement comme les balises Google.
1. Microsoft Ads : Outils > **Balise UET** > Créer. Nom : « evenox.ca ». Copie l'ID de la balise.
2. GTM : ajoute la balise « Microsoft Advertising Universal Event Tracking » (modèle de la galerie) avec l'ID, déclenchée sur **toutes les pages**, **après le consentement marketing**.
3. **Consentement par défaut : refusé**, avant le chargement de la balise (déclencheur « Consent Initialization ») :
   ```html
   <script>
     window.uetq = window.uetq || [];
     window.uetq.push('consent', 'default', { 'ad_storage': 'denied' });
   </script>
   ```
4. **Mise à jour au clic sur « Accepter »** (gérée par CookieYes ou Complianz s'ils prennent en charge le consentement UET ; sinon une balise GTM sur l'événement de consentement) :
   ```html
   <script>
     window.uetq = window.uetq || [];
     window.uetq.push('consent', 'update', { 'ad_storage': 'granted' });
   </script>
   ```
5. Événement de conversion : une 2e balise UET (événement personnalisé, action `soumission`), déclenchée par le même déclencheur « envoi réussi » que Google.
6. **Test** : avec l'extension **UET Tag Helper**, vérifie qu'aucune requête `bat.bing.com` ne part avant « Accepter » (ou qu'elle porte `asc=D`, pour consentement refusé), puis qu'elle part avec le consentement accordé après. Fais 1 faux lead visible dans Microsoft Ads avant d'activer.
7. Ajoute « Microsoft Advertising (UET) » à la liste des témoins de la bannière et à la politique de confidentialité.

### Règles d'arrêt et de montée

| Signal | Action |
|---|---|
| CPA > 1,5 × Google après 30 jours ou 500 $ | Pause de la campagne concernée |
| 0 lead après 400 $ | Pause du compte, rapport des termes de recherche, puis on recommence une seule fois |
| CPA ≤ Google sur au moins 5 leads | +20 % par semaine, jusqu'à ce que la part d'impressions perdue (budget) tombe sous 10 % |
| Trafic de partenaires douteux (CTR élevé sans conversion) | Rapport « Site Web / Publication » : exclure les sites |

---

## Sources (consultées le 7 octobre 2026)
- Google Ads Help — Demand Gen campaign asset specs : https://support.google.com/google-ads/answer/13704860 (titre 40, description 90, nom 25 ; formats d'image et de logo)
- Google Ads API v22 à v25 — DemandGenMultiAssetAdInfo (titre : largeur 30, mis à jour le 22 juill. 2026) et DemandGenVideoResponsiveAdInfo (titres longs) : https://developers.google.com/google-ads/api/reference/rpc/v25/DemandGenMultiAssetAdInfo
- Google Ads Help — Channel controls in Demand Gen : https://support.google.com/google-ads/answer/15973205 (YouTube, Discover, Gmail, Maps, Display ; Maps exige un élément de lieu)
- Google Ads Developer Blog — Minimum budget for Demand Gen (5 $ US, 1er avril 2026) : https://ads-developers.googleblog.com/2026/02/minimum-budget-requirement-for-demand.html
- PPC Land — DG minimum budget et 15× / 10× le CPA : https://ppc.land/google-to-enforce-5-minimum-daily-budget-on-demand-gen-campaigns-from-april/
- Search Engine Land — Location targeting controls in Demand Gen (Présence) : https://searchengineland.com/google-adds-location-targeting-controls-to-demand-gen-campaigns-466435
- Search Engine Land — Lookalikes deviennent des signaux IA en Demand Gen (mars 2026) : https://searchengineland.com/google-shifts-lookalike-to-ai-signals-in-demand-gen-469400
- Google — Customer Match policy (90 jours + 50 000 $ US pour le Ciblage ; 100 membres en 540 jours) : https://support.google.com/adspolicy/answer/6299717
- PPC Land — Seuil de 100 utilisateurs sur tous les réseaux : https://ppc.land/google-slashes-audience-targeting-thresholds-to-100-users-across-all-networks/
- Search Engine Land — Customer Match en Search ramené à 100 : https://searchengineland.com/google-slashes-customer-match-list-minimums-in-search-campaigns-to-100-users-455912
- ALM Corp / Stape — Téléversements par API vers la Data Manager API (avril 2026) : https://almcorp.com/blog/google-ads-api-customer-match-disabled-april-2026/
- StatCounter — Search engine market share Canada, septembre 2026 (toutes plateformes et ordinateur) : https://gs.statcounter.com/search-engine-market-share/all/canada · https://gs.statcounter.com/search-engine-market-share/desktop/canada
- Search Engine Land — Microsoft Import Center (19 mai 2026) : https://searchengineland.com/microsoft-rolls-out-ai-powered-bidding-reporting-and-import-updates-for-advertisers-478223
- Microsoft Learn — Google Ads Import : https://learn.microsoft.com/en-us/advertising/guides/google-ads-import
- Microsoft Advertising Help — Location targeting options : https://help.ads.microsoft.com/apex/index/3/en-ca/51051
- Microsoft Advertising Help — Setting up UET for consent mode : https://help.ads.microsoft.com/apex/index/3/en/60119
- Contexte interne : `recherche/research_6_architecture.md`, `research_7_creative.md`, `research_10_tracking.md` (CAI, lignes directrices 2023-1), `research_11_demand.md`.

---

## Annexe A — Vérification des caractères (script Python)
Le script (hors livrable) vérifie la longueur (T = titre ≤ 30, TL = titre long ≤ 90, D = description ≤ 90), les mots interdits (`%`, « à partir de », « dès » suivi d'un chiffre) et les mots en majuscules.

| Groupe | Type | # | Texte | Car. | Limite | Statut |
|---|---|---|---|---|---|---|
| DG-P Corporatif | T | 1 | Party de Bureau 1 995 $ | 23 | 30 | OK |
| DG-P Corporatif | T | 2 | 5 à 7 d'équipe 1 195 $ | 22 | 30 | OK |
| DG-P Corporatif | T | 3 | Gala Signature 2 495 $ | 22 | 30 | OK |
| DG-P Corporatif | T | 4 | Party de Noël clé en main | 25 | 30 | OK |
| DG-P Corporatif | T | 5 | Décembre se réserve tôt | 23 | 30 | OK |
| DG-P Corporatif | TL | 1 | Party de Bureau 1 995 $ : lettres lumineuses, mur floral, 5 jeux géants et popcorn | 82 | 90 | OK |
| DG-P Corporatif | TL | 2 | Votre fête de Noël d'entreprise livrée, installée et ramassée par notre équipe | 78 | 90 | OK |
| DG-P Corporatif | TL | 3 | 5 à 7 d'équipe 1 195 $ ou Gala Signature 2 495 $ : prix affiché, rien à monter | 78 | 90 | OK |
| DG-P Corporatif | TL | 4 | Bon de commande accepté et facturation net 30 sur approbation de crédit | 71 | 90 | OK |
| DG-P Corporatif | TL | 5 | Photobooth avec préposé : Essentiel 599 $, Signature 799 $ ou Prestige 999 $ | 76 | 90 | OK |
| DG-P Corporatif | D | 1 | Forfaits tout inclus pour vos fêtes d'entreprise à Montréal, Laval et sur la Rive-Nord. | 87 | 90 | OK |
| DG-P Corporatif | D | 2 | Les vendredis de décembre partent vite. Soumission détaillée en 24 h. | 69 | 90 | OK |
| DG-P Corporatif | D | 3 | Plus de 1 000 événements réalisés, note Google de 4,8/5. | 56 | 90 | OK |
| DG-P Corporatif | D | 4 | Installation discrète et ramassage par notre équipe : vous profitez de la soirée. | 81 | 90 | OK |
| DG-P Corporatif | D | 5 | Team building clé en main : un mini tournoi de jeux géants livré sur place. | 75 | 90 | OK |
| DG-P Mariage | T | 1 | Décor WOW 899 $ | 15 | 30 | OK |
| DG-P Mariage | T | 2 | Soirée Signature 1 449 $ | 24 | 30 | OK |
| DG-P Mariage | T | 3 | Photobooth Signature 799 $ | 26 | 30 | OK |
| DG-P Mariage | T | 4 | Mariage 2027 : réservez tôt | 27 | 30 | OK |
| DG-P Mariage | T | 5 | Lettres lumineuses de 4 pi | 26 | 30 | OK |
| DG-P Mariage | TL | 1 | Décor WOW 899 $ : 5 lettres lumineuses géantes, mur floral et étincelles froides | 80 | 90 | OK |
| DG-P Mariage | TL | 2 | Soirée Signature 1 449 $ : tout le Décor WOW et un photobooth premium avec préposé | 82 | 90 | OK |
| DG-P Mariage | TL | 3 | Les samedis de l'été 2027 partent vite : vérifiez la disponibilité de votre date | 80 | 90 | OK |
| DG-P Mariage | TL | 4 | Photobooth Essentiel 599 $, Signature 799 $ ou Prestige 999 $ pour votre mariage | 80 | 90 | OK |
| DG-P Mariage | TL | 5 | Un décor de mariage installé et coordonné par notre équipe, sans tracas pour vous | 81 | 90 | OK |
| DG-P Mariage | D | 1 | Décor de mariage clé en main à Montréal, Laval et sur la Rive-Nord. Soumission en 24 h. | 87 | 90 | OK |
| DG-P Mariage | D | 2 | Plus de 1 000 événements réalisés, note Google de 4,8/5. | 56 | 90 | OK |
| DG-P Mariage | D | 3 | Vos initiales ou votre nom en lumière : un décor élégant qui sublime vos photos. | 80 | 90 | OK |
| DG-P Mariage | D | 4 | Prix affichés en ligne : choisissez votre forfait, notre équipe s'occupe du reste. | 82 | 90 | OK |
| DG-P Mariage | D | 5 | Livraison, installation et reprise par notre équipe. | 52 | 90 | OK |
| DG-R Visiteurs | T | 1 | Votre date est-elle libre ? | 27 | 30 | OK |
| DG-R Visiteurs | T | 2 | Soumission en 24 h | 18 | 30 | OK |
| DG-R Visiteurs | T | 3 | Party de Bureau 1 995 $ | 23 | 30 | OK |
| DG-R Visiteurs | T | 4 | Décor WOW 899 $ | 15 | 30 | OK |
| DG-R Visiteurs | T | 5 | Note Google 4,8/5 | 17 | 30 | OK |
| DG-R Visiteurs | TL | 1 | Fête d'entreprise ou mariage : vérifiez la disponibilité de votre date en ligne | 79 | 90 | OK |
| DG-R Visiteurs | TL | 2 | Party de Bureau 1 995 $, Décor WOW 899 $ ou Soirée Signature 1 449 $, prix affichés | 83 | 90 | OK |
| DG-R Visiteurs | TL | 3 | Photobooth Essentiel 599 $, Signature 799 $ ou Prestige 999 $ avec préposé | 74 | 90 | OK |
| DG-R Visiteurs | TL | 4 | Plus de 1 000 événements réalisés à Montréal, Laval et sur la Rive-Nord | 71 | 90 | OK |
| DG-R Visiteurs | TL | 5 | Livraison, installation et reprise par notre équipe : vous n'avez rien à monter | 79 | 90 | OK |
| DG-R Visiteurs | D | 1 | Les dates de décembre et les samedis d'été partent vite. Soumission détaillée en 24 h. | 86 | 90 | OK |
| DG-R Visiteurs | D | 2 | Forfaits tout inclus à prix affiché sur notre site. | 51 | 90 | OK |
| DG-R Visiteurs | D | 3 | Bon de commande et net 30 sur approbation de crédit pour les entreprises. | 73 | 90 | OK |
| DG-R Visiteurs | D | 4 | Plus de 1 000 événements réalisés, note Google de 4,8/5. | 56 | 90 | OK |
| DG-R Visiteurs | D | 5 | Montréal, Laval et Rive-Nord : livraison, installation et reprise incluses. | 75 | 90 | OK |
| DG-R Clients | T | 1 | Votre prochain événement ? | 26 | 30 | OK |
| DG-R Clients | T | 2 | Réservez votre date | 19 | 30 | OK |
| DG-R Clients | T | 3 | Gala Signature 2 495 $ | 22 | 30 | OK |
| DG-R Clients | T | 4 | Soirée Signature 1 449 $ | 24 | 30 | OK |
| DG-R Clients | T | 5 | Soumission en 24 h | 18 | 30 | OK |
| DG-R Clients | TL | 1 | Party des fêtes, gala ou mariage : réservez votre prochaine date avec Évenox | 76 | 90 | OK |
| DG-R Clients | TL | 2 | 5 à 7 d'équipe 1 195 $, Party de Bureau 1 995 $ ou Gala Signature 2 495 $ | 73 | 90 | OK |
| DG-R Clients | TL | 3 | Photobooth avec préposé : Essentiel 599 $, Signature 799 $ ou Prestige 999 $ | 76 | 90 | OK |
| DG-R Clients | TL | 4 | Décor WOW 899 $ ou Soirée Signature 1 449 $ pour votre prochain grand jour | 74 | 90 | OK |
| DG-R Clients | TL | 5 | Décembre se réserve tôt : bloquez votre vendredi dès maintenant | 63 | 90 | OK |
| DG-R Clients | D | 1 | La même équipe, le même service : livraison, installation et reprise incluses. | 78 | 90 | OK |
| DG-R Clients | D | 2 | Bon de commande et facturation net 30 sur approbation de crédit. | 64 | 90 | OK |
| DG-R Clients | D | 3 | Les vendredis de décembre partent vite. Soumission détaillée en 24 h. | 69 | 90 | OK |
| DG-R Clients | D | 4 | Photobooth Essentiel 599 $, Signature 799 $ ou Prestige 999 $. | 62 | 90 | OK |
| DG-R Clients | D | 5 | Plus de 1 000 événements réalisés, note Google de 4,8/5. | 56 | 90 | OK |

Nom d'entreprise : Évenox = 6/25
TOTAL 60 éléments, erreurs : 0
