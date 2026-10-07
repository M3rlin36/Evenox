# ChatGPT Ads : campagne Evenox (ads.openai.com)

> Toute la copie est en français québécois (Loi 96). On écrit « soumission » et « haut de gamme », jamais « premium » ni « devis ».
> Les annonces sont listées dans `ads.csv`, avec 3 variantes par groupe. Les longueurs sont vérifiées automatiquement : titre de 50 caractères au maximum, description de 100 caractères au maximum.
> **Prix :** les forfaits corporatifs coûtent 1 195 $, 1 995 $ ou 2 495 $. Les forfaits **déco** mariage coûtent 899 $, 1 449 $ ou 1 899 $. Les forfaits à 599 $ et 999 $ sont des forfaits de **cabine photo**.
> **Livraison :** ne jamais écrire « livraison incluse » ni « installation incluse ». Le site doit d'abord être harmonisé, voir `google-ads/README.md`.

## 1. Paramètres de campagne

| Paramètre | Valeur |
|---|---|
| Compte | Entité facturée au Canada, devise **CAD** et fuseau America/Toronto. Ces choix sont **définitifs** après la création |
| Nom | `CGPT | Leads | FR-QC` |
| Objectif | Conversions (prospects). Au départ, l'achat se fait au **CPC** (voir l'enchère) |
| Budget | **30 $/jour** (minimum de la plateforme : 25 $ CA/jour par campagne). Le budget quotidien est une moyenne sur 7 jours |
| Lieu | **Province de Québec**. Le ciblage provincial est le niveau le plus fin disponible au Canada ; les villes ne sont pas ciblables. Les indices de contexte nomment Montréal, Laval et la Rive-Nord pour attirer les conversations locales |
| Plateformes | iOS, Android et Web (toutes) |
| Langue | Il n'y a pas de ciblage par langue. Annonces et indices **en français seulement** |
| **Traduction automatique / personnalisation du texte** | **ACTIVÉE PAR DÉFAUT : la DÉSACTIVER** au niveau de la campagne. Sinon, ChatGPT peut traduire ou réécrire les annonces (p. ex. en anglais) sans relecture, ce qui pose un risque au regard de la Loi 96 et de l'exactitude des prix. Après le lancement, vérifier dans l'aperçu des annonces qu'aucune variante générée n'est diffusée |
| Calendrier | Diffusion continue |

### Enchères

1. **Jours 1 à 14 : CPC à enchère fixe de 4 à 6 $ CA.** Commencer à 5 $ pour le Corporatif, 4,50 $ pour le Gala et 4 $ pour le Mariage.
   - Si on obtient moins de 30 clics en 3 jours, monter de 0,50 $, jusqu'à 6 $ au maximum.
   - Les CPC observés au Canada vont de 4,42 à 4,88 $ CA (test de Choice OMG).
2. **Passage à l'enchère optimisée pour la conversion (oCPC, « Maximiser les conversions ») :**
   - **ce mode est en bêta ouverte** ;
   - il exige **au moins un événement de conversion** reçu par le pixel ou la CAPI (`lead_created`) ;
   - basculer seulement quand `lead_created` remonte de façon fiable depuis 7 jours **et** que la campagne a enregistré au moins 10 à 15 prospects ;
   - garder une enchère maximale de 6 $ pendant la transition.
3. Ne jamais utiliser le CPM (oCPM) à ce budget, car il n'y aurait aucun contrôle sur la qualité du clic.

### Attribution

Clic sur 7 jours et vue sur 0 jour au départ. Les rapports sont en dernier contact.
Comparer avec le CRM. UTM selon la convention de `operations/tracking-setup.md` (section 7) : `utm_source=chatgpt&utm_medium=cpc&utm_campaign=chatgpt_corpo_fetes` (groupe A), `chatgpt_corpo_gala` (groupe B) ou `chatgpt_mariage` (groupe C), et `utm_content=cgpt_v1`, `cgpt_v2` ou `cgpt_v3` selon la variante.

## 2. Groupes d'annonces et indices de contexte

Les indices de contexte (context hints) décrivent, en langage naturel, des conversations où l'annonce est pertinente. Ce ne sont pas des mots clés et ils ne peuvent imposer ni géographie ni exclusions. Ils sont courts, avec **un seul thème par indice**.

### Groupe A : Corporatif Fêtes / 5 à 7
**Page de destination :** `https://evenox.ca/corporatif/party-des-fetes` (variante 3 : `/corporatif/5-a-7`). Pages à créer (TO-CREATE), gabarit `operations/landing-corporatif.md`.

1. Organiser un party des Fêtes pour les employés
2. Idées de party de bureau pour 50 à 150 personnes
3. Fête de bureau clé en main à Montréal
4. Party de Noël d'entreprise à Laval
5. Fournisseur pour un party des Fêtes sur la Rive-Nord
6. Budget par personne pour un party des Fêtes d'entreprise
7. Location de mobilier et de décor pour un party de bureau
8. Cabine photo pour un party de Noël d'entreprise
9. Jeux géants pour une fête d'employés
10. Organiser un 5 à 7 d'équipe au bureau
11. Idées de 5 à 7 corporatif
12. Comment transformer un bureau en salle de party
13. Planifier un party des Fêtes à la dernière minute
14. Liste de tâches pour organiser une fête de bureau
15. Activité de reconnaissance des employés en fin d'année

### Groupe B : Gala / activation
**Page de destination :** `https://evenox.ca/corporatif/gala` (variante 2 : `/corporatif/activation-de-marque`). Pages à créer (TO-CREATE).

1. Organiser un gala d'entreprise
2. Soirée de reconnaissance des employés
3. Décor pour un gala corporatif à Montréal
4. Lancement de produit avec un événement
5. Activation de marque dans un événement
6. Cabine photo 360 avec le logo de l'entreprise
7. Fournisseur d'équipement pour un événement corporatif
8. Soirée d'entreprise pour 100 invités
9. Kiosque et mobilier pour un salon professionnel
10. Organiser une soirée clients pour une entreprise
11. Idées de décor pour une soirée corporative chic
12. Location de lettres lumineuses géantes pour un événement d'entreprise

### Groupe C : Mariage haut de gamme
**Page de destination :** `https://evenox.ca/mariage/decoration` (variante 3 : `/mariage/chapiteau`). Pages à créer (TO-CREATE), gabarit `operations/landing-mariage.md`.

1. Planifier la décoration de mon mariage
2. Location de décor de mariage à Laval
3. Location de chapiteau pour un mariage extérieur
4. Mariage en plein air dans les Laurentides
5. Arche florale pour une cérémonie de mariage
6. Lettres lumineuses géantes pour un mariage
7. Chaises Chiavari et mobilier de salon pour une réception
8. Combien coûte la location de décor pour un mariage de 120 invités
9. Cabine photo pour un mariage
10. Liste de fournisseurs pour un mariage au Québec
11. Mariage clé en main sur la Rive-Nord
12. Idées de décor de mariage chic et épuré

> **Ne pas** ajouter d'indices sur les fêtes d'enfants, les jeux gonflables, le « pas cher » ou le bricolage. Il n'existe pas de négatifs : la seule façon de filtrer est de ne pas écrire ces indices.

## 3. Annonces (3 variantes par groupe, longueurs vérifiées)

| Groupe | V | Titre (max. 50) | Car. | Description (max. 100) | Car. |
|---|---|---|---|---|---|
| A | 1 | Party des Fêtes clé en main à Laval et Montréal | 47 | Mobilier, déco, cabine photo et jeux livrés et montés. Forfaits dès 1 195 $, net 30. | 84 |
| A | 2 | Votre party de bureau réglé en un seul appel | 44 | Livraison, installation et démontage par notre équipe. Décembre se remplit : réservez tôt. | 90 |
| A | 3 | 5 à 7 d'équipe clé en main dès 1 195 $ | 38 | Jeux géants et lettres lumineuses installés par notre équipe. Soumission en moins de 24 h. | 90 |
| B | 1 | Gala d'entreprise clé en main dès 2 495 $ | 41 | Décor, mobilier et cabine photo avec préposé pour 75 à 150 invités. Net 30. | 75 |
| B | 2 | Activation de marque livrée, montée, démontée | 45 | Décor à vos couleurs, mobilier, son et cabine 360 à votre image. Soumission en 24 h. | 84 |
| B | 3 | Plus de 1 000 événements réalisés depuis 2022 | 45 | Un seul fournisseur pour votre gala ou lancement à Montréal, Laval et Rive-Nord. | 80 |
| C | 1 | Déco de mariage haut de gamme clé en main | 41 | Arches, lettres lumineuses, mobilier et chapiteaux livrés et montés. Décor dès 899 $. | 85 |
| C | 2 | Votre mariage 2027 monté sans stress | 36 | Livraison, installation et démontage par notre équipe. Les samedis d'été et d'automne partent vite. | 99 |
| C | 3 | Chapiteau et décor de mariage sur la Rive-Nord | 46 | Chapiteau, éclairage, chaises Chiavari et arche florale installés par notre équipe. | 83 |

Le décompte des caractères provient du script de validation. `ads.csv` fait foi en cas d'écart.

## 4. Brief image (carré de 256 px minimum, fournir 1024 × 1024)

- Le format d'affichage est petit : **un seul sujet, fort contraste, aucun texte incrusté** (illisible à 256 px).
- Les photos doivent montrer de **vrais montages Evenox** ; pas de banque d'images.
- **Groupe A :** gros plan d'un mange-debout éclairé chaud avec un décor des Fêtes sobre (or et vert sapin) dans un bureau moderne.
- **Groupe B :** arche ou lettres lumineuses géantes devant une salle de gala tamisée ; ou plateforme de cabine photo 360 en action.
- **Groupe C :** arche florale de cérémonie au coucher du soleil, ou chapiteau éclairé la nuit avec guirlandes.
- Le logo Evenox est fourni séparément pour l'emplacement logo. Pas de logo dans l'image.

## 5. Mesure : liste de vérification pixel, CAPI et consentement (Loi 25)

- [ ] Créer le **pixel OAIQ** dans Ads Manager et noter le `PIXEL-ID`.
- [ ] **Consentement :** le pixel suppose **par défaut que le consentement est accordé (`true`)**, ce qui n'est pas conforme à la Loi 25. Il faut appeler `oaiq("consent", false)` **avant** `oaiq("init", ...)`, sur toutes les pages, jusqu'à l'acceptation des témoins publicitaires.
  ```html
  <script>
    // chargement du script OAIQ (bzrcdn.openai.com) selon la doc officielle
    oaiq("consent", false);            // AVANT init : refus par défaut (Loi 25)
    oaiq("init", "PIXEL-ID");
    // Dans le rappel de la bannière (CMP), après « Accepter » publicité :
    // oaiq("consent", true);
  </script>
  ```
- [ ] La bannière de consentement doit offrir « Tout refuser » aussi visible que « Tout accepter », avec des finalités granulaires. Conserver la preuve du consentement.
- [ ] **Correspondance avancée automatique** (hachage SHA-256 dans le navigateur) : active par défaut sur les nouveaux pixels. La garder seulement après consentement ; sinon, la désactiver.
- [ ] Événements web :
  - `page_viewed` sur toutes les pages ;
  - `lead_created` à l'envoi du formulaire de soumission (avec `event_id` unique) ;
  - `appointment_scheduled` à la réservation d'un appel (`/rendez-vous`).
- [ ] **Conversions API** côté serveur : `POST https://bzr.openai.com/v1/events?pid=<PIXEL-ID>` avec la clé CAPI en bearer.
  - Envoyer `lead_created` (et plus tard les statuts qualifiés du CRM en événements personnalisés).
  - Joindre courriel et téléphone hachés, IP et UA.
  - **Déduplication** par nom d'événement + `event_id`, identiques côté pixel et côté CAPI.
  - Les événements doivent dater de moins de 7 jours, en lots de 1 000 au maximum.
- [ ] La CAPI n'envoie que les visiteurs consentants **ou** les personnes qui ont soumis le formulaire, avec un avis de confidentialité qui mentionne le partage avec des plateformes publicitaires.
- [ ] Mettre à jour la **politique de confidentialité** (`/confidentialite`) pour nommer OpenAI comme destinataire de données de mesure.
- [ ] Vérifier dans Ads Manager que `lead_created` est « Actif » avant d'activer l'enchère optimisée (bêta).

## 6. Règles d'arrêt et de croissance

**Jour 14 (environ 420 $ dépensés) :**

| Constat | Action |
|---|---|
| CTR < 0,4 % sur un groupe | Réécrire les titres et resserrer les indices de contexte. Mettre en veille la variante la plus faible |
| 0 prospect au total **et** CPC moyen > 6 $ | Baisser l'enchère à 4 $, ne garder que le meilleur groupe et prolonger de 14 jours |
| Prospects reçus mais 0 qualifié (A/B) | Retirer les indices trop larges (« idées de… », « combien coûte… ») et garder les indices transactionnels |
| CPL ≤ 1,5 × le CPL de Google Search | Continuer. Préparer le passage en oCPC si `lead_created` remonte |

**Jour 30 (environ 900 $ dépensés) :**

| Constat | Action |
|---|---|
| **ARRÊT** : moins de 2 prospects qualifiés, **ou** coût par prospect qualifié > 2 × celui de Google Search | Mettre la campagne en veille et réaffecter les 30 $/jour à Google Search Corporatif (T4) ou Meta |
| **MAINTIEN** : coût par prospect qualifié entre 1 et 2 × celui de Google | Rester à 30 $/jour et tester une nouvelle image et 3 nouveaux titres |
| **CROISSANCE** : coût par prospect qualifié ≤ celui de Google, au moins 5 prospects qualifiés | Passer en oCPC (bêta), augmenter le budget de 20 % par semaine jusqu'à 60 $/jour, ajouter des indices proches des meilleurs |

- Contexte saisonnier : après le 15 décembre, couper le groupe A et basculer le budget vers C (réservations de mariages 2027) et B.
- Pas de rapport de requêtes : juger la qualité à partir du CRM et des enregistrements de session sur la page de destination.
