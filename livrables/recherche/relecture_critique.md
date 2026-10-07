# Red team du plan Google Ads Évenox (300 $/jour)

*Revue du 7 octobre 2026, faite par un auditeur sceptique (lead gen locale, Canada). Les livrables n'ont pas été modifiés.*

**Fichiers relus :** `livrables/PLAN-CAMPAGNES-300-PAR-JOUR.md`, `livrables/scripts/build_google_ads.py`, les 7 CSV de `livrables/google-ads-editor/`, `research_11_demand.md`, `factcheck_1.md`, `notes_crm_contexte.md` et `research_5/7`.

**Pages vérifiées en direct le 2026-10-07 :**
- evenox.ca/
- /location-photobooth-montreal
- /nos-forfaits-tout-inclus
- /configurateur
- /team-building-activitecorpo

J'ai aussi fait une simulation de routage par correspondance littérale (mots-clés contre négatifs) sur 30 requêtes types.

**Verdict global :** l'import ne doit pas avoir lieu dans l'état actuel. Il y a quatre raisons :
1. Les prix et les forfaits des annonces n'existent pas sur le site.
2. Les campagnes sont importées « Enabled » sans ciblage géographique.
3. Max. conversions est lancé avec un budget 3 à 5 fois supérieur à l'inventaire réel.
4. Plusieurs promesses (Québec et Lévis, net 30, surclassement, livraison) ne sont pas appuyées par les pages.

La structure de mots-clés est saine dans l'ensemble (expression et exact, pas de large, 0 conflit littéral entre négatifs et mots-clés). Il manque toutefois des négatifs de routage et des négatifs informationnels.

---

## BLOQUANT (à corriger avant tout import)

### B1. Les prix et les noms de forfaits des annonces ne correspondent à aucune page de destination
**Constat (vérifié en direct)**

| Élément | Annonces / liens annexes (CSV) | Page de destination réelle |
|---|---|---|
| Photobooth | Signature 650 $, Prestige 825 $, Iconic 1 095 $, Legend 1 495 $ ; titre épinglé en position 2 « Forfaits 650 $ à 1 495 $ » | Essentiel 599 $, Signature 799 $, Prestige 999 $. Vidéobooth 360 : 599 / 799 / 1 099 / 1 499 $. **« Iconic » et « Legend » n'existent pas** |
| Corporatif / mobilier | Lounge 850 $, Cocktail 1 100 à 1 400 $, Gala 2 900 $ (5 groupes : Fête de Noël, Mobilier corporatif, Mobilier lounge et cocktail, Mobilier lounge mariage, EN) | /nos-forfaits-tout-inclus : 5 à 7 d'équipe 1 195 $, **Party de Bureau 1 995 $**, Gala Signature 2 495 $. Mobilier : tables et chaises de 75 à 696 $. **Aucun forfait lounge ni cocktail, aucun 2 900 $** |

Le plan reconnaît l'écart (bloquant n° 3), mais les CSV livrés contiennent la grille Notion, qui n'est sur aucune page. Le script ne vérifie pas la cohérence des prix.

**Risques**
- Refus pour non-concordance avec la destination ou pour assertions trompeuses, au niveau de l'annonce et des liens annexes.
- Lecture moins favorable des futures annonces du compte.
- En B2C (mariages), la Loi sur la protection du consommateur (art. 224 c) interdit d'exiger un prix supérieur au prix annoncé. Un couple peut exiger le Signature à 650 $ si le site le vend 799 $, ou l'inverse selon la grille qui prévaut.

**Correctif**
1. Ne rien importer tant que la grille unique n'est pas publiée sur le site.
2. Ajouter au script une table `PRIX_SITE` et une vérification qui échoue si un montant en $ d'une annonce ou d'un lien annexe n'y figure pas.
3. Fête de Noël d'entreprise : utiliser les forfaits **qui existent déjà et collent exactement à l'intention**, soit « Forfait Party de bureau 1 995 $ », « 5 à 7 d'équipe 1 195 $ » et « Gala Signature 2 495 $ ». Retirer « Forfait gala 2 900 $ », « Lounge 850 $ » et « Cocktail 1 100 $ à 1 400 $ » partout.
4. Photobooth : soit le site passe à 650 / 825 / 1 095 / 1 495 $ avant l'import, soit les annonces reprennent la grille du site. Avec la grille du site, retirer le 599 $ de l'Essentiel des titres, car il contredit le positionnement : épingler « Forfait Signature 799 $ » ou « Prestige 999 $ ».

### B2. Les campagnes sont importées « Enabled » sans zone, sans langue ni option de présence
**Constat**
- `1_campagnes.csv` n'a pas de colonnes Location, Language ou Location targeting method.
- Quatre campagnes ont le statut « Enabled ».
- Dans Google Ads, une campagne sans zone ciblée cible **tous les pays et territoires** (aide Google Ads Editor : « Specify default settings for new campaigns »).
- Le ciblage par présence, le réseau Search seulement et la langue sont relégués à une étape manuelle « à faire dans l'interface après l'import ».
- La conversion n'est pas encore testée (bloquant n° 2 du plan).

**Risque :** un clic sur « Publier » dans Editor, avant les réglages manuels, diffuse 165 $/jour dans le monde entier, en optimisant vers une conversion qui n'existe pas encore.

**Correctif**
1. Générer **toutes** les campagnes en `Paused`.
2. Ajouter au CSV les colonnes de ciblage ou fixer les valeurs par défaut d'Editor avant l'import :
   - zones : Laval, Montréal, MRC listées ;
   - méthode de ciblage : « Présence » ;
   - langues : **français et anglais** (voir I8).
3. Activer seulement quand trois conditions sont remplies : le faux lead apparaît dans Google Ads, la bannière Loi 25 est en ligne et les prix sont alignés (B1).

### B3. Max. conversions au lancement : le budget dépasse l'inventaire et les conversions sont presque invisibles
**Constat**
1. Le site n'a aucun historique de conversions fiable : la conversion GA4 principale « n'a jamais fonctionné » (notes CRM).
2. Le mode de consentement **basic** bloque les balises des visiteurs qui refusent. Au Québec, en opt-in, on observe souvent 30 à 60 % de refus : une part importante des leads réels ne sera pas vue. En mode basic, la modélisation est générale et moins précise. Les conversions avancées pour les prospects dépendent aussi du consentement.
3. L'inventaire réel est très inférieur au budget (voir I1). Max. conversions est conçu pour **dépenser tout le budget quotidien**. Face à quelques centaines de requêtes, il monte les enchères : on s'attend à des CPC de 6 à 12 $ et plus sur des requêtes à 1,50-2,50 $. Il optimise aussi vers les conversions les moins chères, comme le groupe Team building et les jeux géants à faible panier.
4. Max. conversions standard n'accepte pas de CPC maximal. Seules les stratégies de portefeuille au CPA cible, au ROAS cible, Max. clics et Taux d'impressions cible acceptent une limite d'enchère.

**Correctif (repli précis)**
- **Phase 0 (jours 1 à 21 ou jusqu'à 15 conversions observées par campagne sur 30 jours) :**
  - Corporatif et Produits/Mariage en **Max. clics avec CPC max.** : Corporatif 4,00 $, Produits 3,00 $, Mariage 2,50 $.
  - Ou bien en **CPC manuel** : exact 3,50 $, expression 2,25 $, et 4,00 $ pour « party de noël entreprise » et « photobooth corporatif ».
  - Budgets fixés à **la dépense observée + 20 %**, pas à 300 $ (voir I1).
  - Négatifs revus chaque jour, puisque Max. clics va vers les requêtes informationnelles bon marché.
- **Ajouter des conversions qui ne dépendent pas des témoins** pour regagner du volume observable :
  1. « Appels depuis les annonces » (numéro de transfert Google, 60 s et plus, **principale**), disponible au Canada selon research_10.
  2. Clic sur le numéro de téléphone du site, en conversion secondaire.
  3. Plus tard, l'élément formulaire pour prospects, avec des questions qualifiantes, quand l'admissibilité (1 000 $ de dépense et validation) sera atteinte.
- **Passer à Max. conversions** sur une campagne quand quatre conditions sont réunies :
  1. ≥ 15 conversions principales observées sur 30 jours ;
  2. bannière en ligne depuis 14 jours ou plus ;
  3. faux lead validé ;
  4. dans le compte retenu, aucune ancienne action principale de type « page vue » ou « scroll » (voir I7).
- **Passer au CPA cible** à 30 conversions sur 30 jours, selon la règle existante.
- **Coupe-circuit :** si le CPC moyen dépasse 2 fois la référence de la phase 0 pendant 7 jours, ou si le coût par lead qualifié dépasse 150 $ pendant 14 jours, revenir au CPC manuel.

### B4. Promesses non appuyées par le site (offres indisponibles, géographie et conditions)
| Texte dans les CSV | Où | Réalité du site | Action |
|---|---|---|---|
| « Montréal, Laval, Rive-Nord, Laurentides, **Québec et Lévis** » ; lien annexe « Zones desservies : Laurentides, Québec, Lévis » | Marque D4, 10 descriptions FR, liens annexes de toutes les campagnes | L'accueil dit « Rive-Nord, Laval et Montréal ». Aucune page ni grille de transport pour Québec. La campagne Québec est en pause **justement pour ça** | Retirer « Québec » et « Lévis » de toutes les annonces des campagnes 1 à 4. Avec le ciblage par présence, ces mots ne servent à rien et suggèrent une zone de service sans prix |
| « **Facturation net 30** » (titre et D3) | Team building | Absent de la page team building et du site | Retirer, ou le confirmer et l'écrire sur la page |
| « **Surclassement offert** » (titre et accroche sans condition), « Accessoire bonus offert » (titre sans condition) | Fête de Noël, accroches de toutes les campagnes, Photobooth mariage | Le mot « surclassement » n'apparaît nulle part, ni « bonus » | Publier l'offre et ses conditions sur les pages (quel forfait, quel surclassement), puis toujours écrire « selon forfait ». Sinon, retirer |
| « **Livraison aux forfaits** » (accroche, et le français est bancal) ; « Livraison, installation et reprise par notre équipe » | Toutes les campagnes | /nos-forfaits : « 100 $ pour les 10 premiers kilomètres ». Team building : « à partir de 300 $ de location, selon la distance » | Supprimer l'accroche. Garder « installation et reprise par notre équipe » sans laisser entendre que la livraison est incluse, ou rendre la livraison réellement incluse dans les forfaits et l'écrire sur la page |
| « Lettres lumineuses **4 pi** », « Lettres géantes de 4 pi » | Tous les groupes Lettres | Le configurateur n'indique aucune dimension et affiche « dès 70 $ la lettre » | Ajouter la dimension sur la page, ou retirer « 4 pi » des titres |
| « Forfait Legend 1 495 $ », « Iconic » | Photobooth | Ces forfaits n'existent pas sur le site | Voir B1 |

---

## IMPORTANT (à corriger dans la semaine du lancement)

### I1. Budget : 300 $/jour en Search ne se dépensera pas ; le plan se contredit
**Contradictions internes du plan**
- Section 1 : « environ 100 à 150 leads par mois ». Section 2 : « Search seul ne dépensera probablement pas 300 $/jour ». Les deux ne peuvent pas être vrais en même temps.
- Les leviers de redéploiement n° 1 (groupe Team building) et n° 2 (« photobooth » en expression) **sont déjà actifs dans les CSV**. Il n'y a donc aucune réserve Search.
- La règle « budget de #2 non dépensé, déplacer vers #3 et #4 » envoie l'argent vers des campagnes qui ont **encore moins** d'inventaire : « lettres lumineuses » < 20 recherches/mois, « location photobooth » 20 à 100, « location mobilier » < 30. Sous Max. conversions, ça ne fait que gonfler les CPC.
- Le script **force** un total actif de 300 $ (`if active != 300: errors.append`).

**Estimation du plafond réaliste** (research_11, volumes du Québec × environ 55 % pour la zone ciblée, CTR de 3 à 5 %, environ 60 % des requêtes admissibles servies, CPC de 1,50 à 3 $, puis ×2 à ×3 pour l'expansion sémantique de la correspondance d'expression) :

| Bloc | Oct. | Nov. (pic) | Jan. à mars |
|---|---|---|---|
| Party de bureau et Noël d'entreprise | 150-400 $/mois | 300-800 $/mois | ~0 |
| Team building (mots-clés modifiés, pas le terme principal) | 200-400 $ | 200-400 $ | 250-450 $ |
| « photobooth » et « location photobooth » | 200-450 $ | 200-450 $ | 200-450 $ |
| Lettres, mobilier, mariage (variantes de longue traîne) | < 100 $ | < 100 $ | 100-200 $ |
| Marque | 50-150 $ | 50-150 $ | 50-150 $ |
| **Total** | **≈ 25-50 $/jour** | **≈ 35-65 $/jour** | **≈ 20-40 $/jour** |

Même avec une erreur de +100 %, le plafond efficace se situe vers **60 à 120 $/jour en novembre**. Au-delà, l'argent achète surtout des CPC gonflés. Avec 40 à 120 $/jour et un coût par lead de 60 à 90 $, on obtient environ **15 à 50 leads par mois au total**, pas 100 à 150.

**Correctif**
1. Budgets de lancement environ égaux au plafond + 20 % : Marque 10 $, Corporatif 70 $, Produits 30 $, Mariage 15 $, soit **environ 125 $/jour**. Monter par paliers de 20 % seulement si la part d'impressions perdue (budget) dépasse 15 % avec un CPA dans la cible.
2. Le reste (environ 175 $/jour), dans cet ordre :
   - **(a) Demand Gen en prospection, dès maintenant.** Les segments personnalisés basés sur des termes de recherche (« party de bureau », « salle de réception », « photobooth mariage ») et des URL de concurrents **ne dépendent pas** des listes de remarketing consenties. Budget de 40 à 60 $/jour. Règle d'arrêt : 0 lead qualifié après 1 000 $, ou coût par lead qualifié > 150 $, on coupe. Le remarketing s'ajoute quand les listes atteignent leur taille minimale.
   - **(b) Microsoft Ads**, en important les campagnes Search : 10 à 15 $/jour, CPC souvent plus bas.
   - **(c) Hors Google, pour les mariages et les lettres** (produits visuels, demande de recherche quasi nulle) : Meta et Instagram.
   - **(d) Ne pas dépenser.** Mettre en réserve pour janvier à mars (réservations de mariages) et pour la relance corporative d'août 2027.
3. Corriger le texte du plan : retirer « 100 à 150 leads », remplacer « déplacer vers #3/#4 » par « réduire le budget de #2 au niveau de la dépense réelle », et supprimer l'assertion du script qui fixe le total à 300.

### I2. Trop de campagnes pour le volume de conversions
**Constat :** trois campagnes optimisées aux conversions vont se partager environ 15 à 50 leads par mois. Aucune n'atteindra les 30 conversions par mois que le plan pose lui-même comme seuil. La règle « fusion si < 15 conversions par 30 jours pendant 60 jours » se déclenchera pour toutes, donc après 60 jours perdus.

**Correctif :** lancer d'emblée avec **Marque + Corporatif + Événements privés**, où Événements privés regroupe Produits et Mariage dans une seule campagne avec ses groupes d'annonces. Mieux encore : une seule campagne non-marque avec un budget partagé et des groupes thématiques. Garder la séparation par groupe d'annonces pour le message et l'URL.

### I3. Routage et cannibalisation : des trous dans les négatifs de routage, aucun négatif au niveau du groupe d'annonces
Ma simulation littérale donne ces résultats (avec l'expansion sémantique de la correspondance d'expression, les fuites réelles sont plus larges) :

| Requête | Sert actuellement | Devrait servir |
|---|---|---|
| location photobooth **mariages** (pluriel) | Produits > Photobooth (le négatif d'expression « mariage » ne couvre pas le pluriel) | Mariage |
| photobooth **fête de noël**, location photobooth **noël**, photobooth **party des fêtes**, location photobooth **5 à 7** | Produits > Photobooth | Corporatif > Photobooth corporatif |
| location photobooth **entreprises**, photobooth **corporatifs** | Produits (les négatifs ne couvrent que le singulier) | Corporatif |
| location tables hautes cocktail **mariage**, location mobilier gala **mariage** | **Corporatif** > Mobilier corporatif (la campagne Corporatif n'a pas de négatif « mariage ») | Mariage |
| photobooth party de bureau montréal | Admissible dans Fête de Noël (« party de bureau ») **et** Photobooth corporatif. Le gagnant se décide à l'Ad Rank et peut envoyer vers /nos-forfaits | Photobooth corporatif |
| photobooth **app**, photo booth app, photobooth 360, photobooth vieux-port | Produits > Photobooth (le négatif « app » est **absent** alors que le plan dit l'avoir prévu ; seul « application » existe) | Bloquée |

**Correctif**
- **Négatifs ajoutés à la campagne Produits** (ou Événements privés pour la partie corporative) :
  - entreprises, corporatifs, corporative, corporatives, employé, employés ;
  - noël, des fêtes, party des fêtes, 5 à 7, congrès, lancement, activation, team building, bureau ;
  - mariages, mariée, nuptial.
- **Négatifs ajoutés à la campagne Corporatif :** mariage, mariages, mariée, wedding, noces, shower, anniversaire, baptême.
- **Négatifs au niveau du groupe d'annonces dans Corporatif :**
  - Fête de Noël : photobooth, photo booth, borne photo, lettres, mobilier, team building ;
  - Mobilier corporatif : photobooth, lettres ;
  - Team building : photobooth, lettres, mobilier.
- **Négatifs ajoutés partout pour l'univers photobooth :** app, apps, ipad, android, logiciel (déjà présent), software, effets, filtre, caméra, camera, imprimante, kit, props, boîtier, construire, vieux-port, métro, centre commercial.

### I4. Négatifs qui bloquent du bon trafic
| Négatif | Effet | Décision |
|---|---|---|
| **« québec »** (campagnes 1 à 5) | Bloque « location lettres lumineuses québec » et « location photobooth province de québec », tapées **depuis la zone ciblée**. Le ciblage par présence exclut déjà les gens qui se trouvent à Québec. Sur des catégories à moins de 20 recherches par mois, chaque requête compte | **Retirer « québec »**. Le remplacer par : ville de québec, québec city, quebec city, lévis, levis, sainte-foy, beauport, charlesbourg, rive-sud de québec, saguenay, trois-rivières, sherbrooke, gatineau, ottawa |
| **« photomaton »** (partout) | Bloque « location photomaton mariage ». « Photomaton » est l'équivalent français que recommandent les terminologies, donc un terme utile pour la Loi 96 | Retirer. Le remplacer par « photomaton passeport », « photo passeport » et « photo d'identité » |
| « en ligne » (Corporatif) | Faible risque (bloque « soumission en ligne team building ») | Remplacer par « team building en ligne » et « activité en ligne » |
| « modèle », « robe », « cours », « camion », « outil », « formation » | Risque faible. « robe » filtre utilement « robe party de bureau », « cours » filtre « cours de cuisine team building », « camion » filtre les camions de rue | **Garder** |
| « budget » | Absent des négatifs, **c'est correct** : « party de bureau budget » est un signal d'achat | Ne pas ajouter |
| « photographe » | Bloque « photographe et photobooth mariage », une requête mixte à intention réelle | Acceptable. Surveiller dans le rapport des termes de recherche |

### I5. Négatifs manquants sur les termes à volume (là où l'argent va partir)
- **« party de bureau »** (le plus gros volume, et research_11 le dit majoritairement informationnel). Négatifs à ajouter :
  - idée, idées, thème, quoi porter, tenue, jeux, quiz, discours, invitation, cadeau, cadeaux, échange de cadeaux ;
  - restaurant, salle, souper, brunch, menu, traiteur, bar, hôtel, croisière, bowling, karaoké ;
  - déductible, impôt, taxable, avantage imposable, arc, normes du travail, obligatoire, payé, alcool, harcèlement ;
  - chanson, musique, film, humoriste, magicien.
- **Team building :** hache, lancer de hache, karting, laser tag, paintball, cuisine, rallye, chasse au trésor, meurtre et mystère, murder mystery, conférencier, atelier, retraite, plein air, idées, gratuit (déjà présent).
- **Mobilier :** appartement, meublé, home staging, mise en valeur, déménagement, entreposage, bureau, mobilier de bureau, location à long terme, chaises pliantes (selon l'offre).
- **Petit panier**, à trancher par Évenox en fonction du panier moyen visé de 1 200 $ et de la stratégie premium : anniversaire, fête d'enfant, baby shower, gender reveal, bal de finissants, chiffres 18 ans, 30 ans, 40 ans… Le CRM montre déjà 80 % de leads dans la tranche de 100 à 500 $.
- **Organisation :** remplacer les 6 × ~115 négatifs copiés par campagne par **2 ou 3 listes partagées** (Compte, Emplois et DIY, Géographie), plus maintenable.

### I6. URL finales qui ne correspondent pas au groupe d'annonces
| Groupe | URL | Problème | Correctif |
|---|---|---|---|
| Lettres lumineuses, Lettres corporatif, Lettres mariage, Marquee (EN) | /configurateur | Boutique libre-service (« dès 70 $ la lettre », « Réservez directement dans la boutique, 24 h sur 24 »). Pas de 4 pi. Paiement sur **evenox.booqableshop.com**, autre domaine : la conversion « Demande de soumission » ne se déclenche pas, donc Max. conversions voit 0. Contredit « haut de gamme » et « Soumission en 24 h » | Volume < 20/mois : **mettre en pause** les groupes Lettres autonomes et garder les lettres en vente croisée dans les annonces Corporatif et Mariage. Sinon, pointer vers /contact (ou un ancrage de l'accueil) jusqu'à la page « Lettres 4 pi ». Si le configurateur est conservé, suivre l'achat Booqable (domaines croisés et conversion d'achat) |
| Mobilier lounge et cocktail, Mobilier lounge mariage, Mobilier corporatif, Lounge (EN) | /nos-forfaits-tout-inclus | Aucun forfait lounge ou cocktail sur la page. Le seul mobilier : tables et chaises de 75 à 696 $ | Mettre en pause les groupes lounge jusqu'à ce qu'une page existe. Mobilier corporatif : ne garder que si le texte vend les forfaits corporatifs réels (B1) |
| Fête de Noël d'entreprise | /nos-forfaits-tout-inclus | **Bonne page** (forfait « Party de Bureau 1 995 $ »), mais l'annonce affiche d'autres prix | Corriger le texte (B1) |
| Photobooth (3 groupes) | /location-photobooth-montreal | Bonne page. Prix à aligner | B1 |
| Team building | /team-building-activitecorpo | La page existe et sans prix. « Réponse le jour même » contre « Soumission en 24 h » dans l'annonce : cohérent | Retirer « net 30 » (B4) |
| **Liens annexes (8 × 6 campagnes)** | **Tous vers https://evenox.ca/** | Les règles de Google exigent un contenu distinct pour chaque lien annexe : des liens qui mènent tous à la même page ne seront pas diffusés. En plus, « Signature, Prestige, Iconic / Legend : 650 $ à 1 495 $ » se lit comme « Legend coûte de 650 à 1 495 $ » | Forfaits photobooth → /location-photobooth-montreal ; Lettres → /configurateur (ou /contact) ; Mobilier et gala → /nos-forfaits-tout-inclus ; Événements d'entreprise → /team-building-activitecorpo ; Demander une soumission → /contact ; Décoration → /decoration-montreal/ ; Réalisations et Avis → page galerie. Retirer « Zones desservies : Québec, Lévis ». Réécrire la description du lien photobooth avec les prix du site |

### I7. Mesure : des conversions perdues ou polluées avant même la question du consentement
- Les réservations Booqable (accueil : « Réservation instantanée en ligne 24/7 ») se font sur un autre domaine et ne sont pas suivies.
- Les appels (heures : lun. à ven. 12 h à 18 h, sam. et dim. 9 h à 13 h) ne sont pas une conversion au lancement.
- Si l'ancien compte est retenu, il contient probablement d'anciennes actions **principales** (importations GA4, pages vues). Il faut les passer en secondaires, sinon Max. conversions optimise vers du bruit.
- **Correctif :**
  1. Faire un audit des actions de conversion : une seule principale, « Demande de soumission », plus « Appels depuis les annonces ».
  2. Mettre la conversion d'achat Booqable en secondaire, ou en principale avec une valeur.
  3. Ajouter un champ caché GCLID (déjà prévu).

### I8. Langue de ciblage non précisée
Une bonne part des francophones de Montréal ont un téléphone en anglais. Si les campagnes FR ne ciblent que la langue « français », on les perd. **Correctif :** cibler français + anglais (ou toutes les langues) sur les campagnes FR. La langue de la requête et les mots-clés français font déjà le tri.

### I9. Promesses de délai et de réservation incohérentes
- « Soumission en 24 h » et « Soumission **détaillée** en 24 h » dans les annonces. « Réponse en moins de 24 h » sur l'accueil. « Réponse le jour même » sur la page team building. « Moins de 2 h » dans le plan.
- « Réservation en ligne 24/7 » (accroche de toutes les campagnes) pousse vers la boutique libre-service à petit panier et hors suivi, à l'opposé de l'objectif « lead qualifié ».
- **Correctif :** uniformiser sur « Réponse en moins de 24 h » (ce que le site dit), retirer « détaillée » et **retirer l'accroche « Réservation en ligne 24/7 »** des campagnes Corporatif et Produits.

### I10. Le groupe Team building risque d'absorber le budget avec des leads à faible valeur
- La requête « team building montréal » vise surtout des **fournisseurs d'activités** (escape, hache, cuisine), alors qu'Évenox loue des jeux géants.
- Le volume « 8 000 recherches par mois » couvre **toute la province** et le terme seul, qui n'est pas un mot-clé du compte.
- Sous Max. conversions, ce groupe fournira les conversions les moins chères, donc il captera le budget de la campagne au détriment de Fête de Noël.
- **Correctif :**
  - négatifs de I5 ;
  - un titre de filtrage avec un prix réel (« Forfait 5 à 7 d'équipe 1 195 $ », qui existe sur le site) ;
  - en phase 0, CPC max. plus bas que Fête de Noël ;
  - suivre le taux de leads qualifiés de ce groupe chaque vendredi.

### I11. Le calendrier saisonnier contredit la recherche
- Du 1er au 24 décembre, le plan baisse Corpo de 165 à 120 $ et monte Mariage de 45 à 95 $.
- Or l'indice « party de noël » est à **100 en décembre** et l'intérêt « mariage » à **51**, son creux. Le pic de planification des mariages commence en janvier (« robe de mariée » à 100 en janvier).
- **Correctif :** garder Corpo jusqu'au 15 décembre, en passant au message « party des Fêtes en janvier » dès le 1er décembre. Monter Mariage à partir du 26 décembre.

### I12. La campagne Québec-Lévis (en pause) est mal préparée
- L'annonce est un clone de Fête de Noël, avec le titre « Montréal, Laval, Rive-Nord ».
- Aucun ciblage géographique n'est prévu dans le plan.
- Les liens annexes sont ceux de Montréal.
- **Correctif :** remplacer le titre géographique par « Québec, Lévis et environs » seulement quand la grille de transport est publiée. Ajouter une zone (rayon autour de Québec et de Lévis) et une page de destination qui mentionne Québec.

---

## MINEUR

### M1. Loi 96 : anglicismes dans le texte français (ce qui est acceptable)
- **Les mots-clés ne sont pas affichés** : « photobooth », « team building » et « party de bureau » y sont sans risque.
- **Annonces :** l'art. 58 et ses règlements exigent le français. Un emprunt isolé dans une phrase française présente un risque surtout de **plainte à l'OQLF**, pas d'amende automatique. Mon avis pratique :
  - « **party** » : québécisme de registre familier, toléré. Préférer « fête » ou « réception des Fêtes » dans les titres, garder « party de bureau » là où c'est le terme cherché.
  - « **photobooth** » : garder au plus un titre par annonce. Mettre en avant « **borne photo** », « cabine photo » ou « photomaton » (déjà fait en partie : « Borne photo à louer »).
  - « **lounge** » : remplacer dans les titres par « coin salon » ou « mobilier de salon ». « Mobilier lounge » peut rester une fois.
  - « **Team building** » : écrire « Consolidation d'équipe (team building) » au moins dans une description, et les titres « Activités d'équipe… ».
  - « **LOVE, MR & MRS** », « Iconic », « Legend » : les noms de forfaits en anglais sont des marques non déposées. Depuis la Loi 96, seules les marques **déposées** bénéficient de l'exception. Renommer les forfaits en français, ou les rattacher à un descriptif français.
- Faire valider par un juriste. Ce n'est pas un avis juridique.

### M2. Majuscules
« LOVE » et « MR & MRS » peuvent déclencher la règle éditoriale de Google sur les majuscules excessives. **Correctif :** écrire « Love » et « Mr & Mrs », éventuellement entre guillemets.

### M3. Une affirmation fausse dans le plan
Le plan affirme : « Le script vérifie aussi qu'aucun négatif ne bloque un de tes mots-clés : 0 conflit ». **Il n'y a aucune vérification de ce genre dans `build_google_ads.py`.** Ma propre vérification littérale trouve bien 0 conflit, mais la phrase doit être corrigée, ou la vérification ajoutée au script.

### M4. Textes mariage recyclés du corporatif
Le groupe Mobilier lounge mariage contient « Forfait gala 2 900 $ » et « Galas, cocktails, lancements ». **Correctif :** écrire des textes propres au mariage (cocktail de mariage, coin salon pour invités).

### M5. Note Google
« Note Google 4,8/5 » s'appuie sur 52 avis. Les évaluations de vendeur ne s'affichent pas sous 100 avis, donc le texte doit rester exactement aligné sur la fiche Google Business Profile. **Correctif :** vérifier chaque mois. « Plus de 1 000 événements depuis 2022 » est appuyé par l'accueil : garder une preuve interne.

### M6. Calendrier de lancement
L'Action de grâce tombe le lundi 12 octobre 2026. Les tâches du pigiste prévues aux « jours 1 à 4 » chevauchent la longue fin de semaine, ce qui rend le 13 octobre très serré. **Correctif :** fixer le lancement au 15 octobre, à condition que le faux lead soit validé.

### M7. Chiffres non sourcés présentés comme des faits
- « Chaque semaine de retard coûte environ 15 % de la fenêtre »
- « Une page dédiée réduit le coût par lead de 30 à 50 % »
- « Le réglage par défaut gaspille 20 à 35 % du budget »

**Correctif :** les présenter comme des estimations.

### M8. Campagne EN
Le raisonnement juridique est conservateur. La publicité commerciale relève aussi de l'art. 52 : une version anglaise est permise si la version française est au moins aussi disponible. La pause reste prudente, mais la question est à poser telle quelle au juriste. Le volume EN est faible de toute façon (research_11).

### M9. Négatifs « québec » et « lévis » dans la campagne Marque
Ils bloquent « evenox québec ». C'est sans gravité, mais on peut les retirer de Marque.

### M10. Annonces
Une seule annonce responsive par groupe, avec le titre 1 épinglé. Ajouter une deuxième annonce après 2 à 3 semaines pour les groupes qui ont du volume (Fête de Noël, Photobooth). Les chemins sans accents (« evenements », « fetes ») sont acceptables.

---

## Ordre d'exécution recommandé
1. Corriger B1, B4 et I6 (grille unique, textes, URL, liens annexes). Ajouter au script une vérification des prix contre les pages.
2. Corriger B2 : tout générer en pause, avec le ciblage dans le CSV.
3. Corriger B3 et I7 : faux lead validé, appels depuis les annonces, audit des conversions. Lancer la phase 0 en Max. clics plafonné ou en CPC manuel.
4. Corriger I1 et I2 : environ 125 $/jour en Search sur 3 campagnes. Lancer Demand Gen en prospection (40 à 60 $) avec une règle d'arrêt. Mettre le reste en réserve.
5. Corriger I3 à I5 : négatifs de routage, informationnels et de petit panier.
