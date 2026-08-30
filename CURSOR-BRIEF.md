# Brief Cursor — chantiers locaux Évenox

> **Comment t'en servir :** ouvre `C:\Users\Admin\Evenox` dans Cursor et colle ce fichier
> (ou pointe l'agent dessus) comme premier message. Il contient tout le contexte —
> aucune question à reposer pour démarrer.

---

## 0. Contexte

**Évenox** (evenox.ca) — location d'équipement événementiel clé en main sur la Rive-Nord,
Laval et Montréal. Entrepôt à **Sainte-Thérèse**. ~1000 clients depuis 2022.
B2C (fêtes d'enfants, familles) + B2B (écoles, camps, corpo — RBC, PwC, Desjardins).

**Offre :** jeux gonflables, jeux géants, arcade, mobilier (tables/chaises/vaisselle),
chapiteaux/tentes, son/lumière, décor (arches de ballons, néons), photobooth, team building.

**Stack du site :** WordPress + Divi, WooCommerce, Booqable (logiciel de location, chargé
sur *toutes* les pages), Meta Pixel, Mailchimp, Refersion, chat maison sur Base44.

**Marque :** violet `#5E17EB` · violet clair `#8B67F6` · encre `#2B2242` ·
fond `#FAF9FF` · police **Raleway**. Ton : **tutoiement**, québécois, direct.

**Coordonnées publiques :** 514-559-1893 · evenox.ca@gmail.com · @evenox_ca

---

## 1. Règles absolues

1. **N'invente JAMAIS un prix.** Tous les montants doivent provenir d'un fichier de ce
   dossier ou de la section « Prix connus » ci-dessous. Si un prix manque → `null` +
   une entrée dans le rapport de conflits. Jamais d'estimation « plausible ».
2. **Ne touche pas au site en ligne.** Pas de requête vers evenox.ca, pas de REST WordPress,
   pas de navigateur. Le déploiement se fait ailleurs (voir §7). Ton périmètre = ce dossier.
3. **Ne publie pas les garanties non approuvées.** `page-tables-chaises-hormozi.html`
   contient trois engagements commerciaux **proposés, pas validés** (montage à l'heure sinon
   livraison gratuite / chaise manquante remplacée le jour même / dépôt 20 % pour bloquer).
   Ne les propage nulle part.
4. **Ne tranche pas les décisions en attente** (§6). Rends-les visibles, paramétrables,
   et documente les deux options.
5. **Aucune dépendance runtime nouvelle** dans les widgets : ils tournent en vanilla JS dans
   un module Divi. Les outils de build (Node) sont libres, mais rien n'est chargé côté client.

---

## 2. État du dossier

```
C:\Users\Admin\Evenox\
├── assistant-evenement\        # assistant PAR PERSONA (préfixe ev) — PAS ENCORE EN LIGNE
│   ├── ev-widget.js/.css/.html
│   ├── payload.txt             # 49 289 caractères exactement (assertion de déploiement)
│   └── test-local.html         # widget inliné, ouvrable direct dans un navigateur
├── assistant-jeux\             # assistant jeux (préfixe jw) — EN LIGNE sur page 4839
│   ├── jw-widget.js/.css/.html
│   ├── payload.txt
│   └── test-local.html
├── kit-wizard-decoded.js       # configurateur tables-chaises DÉPLOYÉ (page 6569), 60 k car.
├── kit-wizard-original.js      # sa version d'avant (pour diff)
├── kit-wizard-new.b64          # le blob base64 tel qu'injecté dans la page
├── kit-diff.txt                # paires ancrées du dernier déploiement
├── *-blob1.js / *-blob2.js     # JS extrait des configurateurs EN LIGNE (source des prix) :
│   ├── gonflables-blob1.js     #   /location-jeux-gonflables/   préfixe jg
│   ├── jeux-geants-blob1/2.js  #   /location-jeux-geants/       préfixe jx
│   ├── arcade-blob1.js         #   /location-arcade/            préfixe ja
│   └── chapiteaux-blob1.js     #   /chapiteaux-structures…/     préfixe ch
├── page-*.html                 # snapshots HTML des pages live (gros, lecture seule)
├── calculateur-fete.html       # lead magnet autonome — webhookUrl VIDE
├── calculateur-secteur-v2.html # v2 du calculateur de secteur — pas déployée
├── page-tables-chaises-hormozi.html  # refonte proposée — pas déployée
└── demo-calculateur-hormozi.html
```

**Les 5 configurateurs déjà en ligne :** tables-chaises (`kit`, page 6569) · jeux géants (`jx`) ·
gonflables (`jg`) · arcade (`ja`) · chapiteaux (`ch`, 10 marquises 275→1000 $, 23 options,
sur devis au-delà de 90 invités).
**Les 2 assistants maison :** jeux (`jw`, en ligne, page 4839) · persona (`ev`, prêt, pas en ligne).

---

## 3. Prix connus (vérifiés sur le site — référence de départ)

**Forfaits mobilier** (service inclus, prix fixe ≤ 20 km de Sainte-Thérèse)

| Forfait | Prix | Invités | Contenu | $/place | À la carte |
|---|---|---|---|---|---|
| Essentiel | 449 $ | 24 | 24 chaises + 4 tables | 18,71 $ | 498 $ |
| Réception | 649 $ | 48 | 48 chaises + 8 tables | 13,52 $ | 696 $ |
| Grande Salle | 849 $ | 72 | 72 chaises + 12 tables | 11,79 $ | 924 $ |

**À l'unité :** chaise pliante blanche 3 $ · chaise haute noire 8 $ · table à cocktail 10 $ ·
nappe à cocktail 6 $ · table ronde 60 po 15 $ (8 places).

**Autres forfaits :** Jeux Essentiel/Premium/Méga Fête 499/599/1099 $ · corpo 1195/1995/2495 $ ·
Décor WOW 899 $ · Soirée Signature 1449 $ · photobooth 799/1099 $ · arcade 299 $ ·
mobilier 649/849/1049 $ (grille du calculateur de fête).

**Forfait Express 72 h** (mobilier, prix fixes, zone Sainte-Thérèse/Laval/Terrebonne) :
90 $ / 20 pers · 210 $ / 50 pers · 420 $ / 100 pers.

**Livraison — forfaits :** incluse ≤ 20 km · +100 $ (20-30 km) · +200 $ (30-40 km) ·
au-delà de 40 km et centre-ville de Montréal = sur devis.
**Livraison — à l'unité :** 100 $ de base pour 10 km, puis ~7 $/km jusqu'à 40 km,
**minimum de commande 300 $**. Ramassage à l'entrepôt : toujours gratuit.

**Grille de secteur** (widget de `/nos-forfaits-tout-inclus/`, entrepôt Sainte-Thérèse) :

- **0-10 km, −100 $** : Sainte-Thérèse, Blainville, Boisbriand, Bois-des-Filion, Lorraine, Rosemère
- **10-20 km, prix affiché** : Laval, Saint-Eustache, Sainte-Anne-des-Plaines, Deux-Montagnes, Mirabel (Saint-Janvier)
- **20-30 km, +100 $** : Terrebonne, Mascouche, Mirabel (centre), Saint-Joseph-du-Lac, Saint-Jérôme, Saint-Laurent
- **30-40 km, +200 $** : Repentigny, Oka, Prévost, Saint-Lin–Laurentides
- **Absentes de la grille** : Montréal, Longueuil, Brossard, Gatineau → voir §6.

**Délais :** réserver 2-3 semaines d'avance · 4-6 semaines de mai à octobre et en décembre.
**Dépôt :** 20 % bloque le matériel (pas la demande de soumission).

---

## 4. Contraintes de déploiement à respecter dans le code

Tu ne déploies pas, **mais ton code doit rester déployable**. Deux mécaniques coexistent :

**A. Page en module Code Divi** (tables-chaises, page 6569)

- Toute la page vit dans **un seul** module Code.
- Le gros JS est **encodé en base64** dans `eval(decodeURIComponent(escape(atob("…"))))`
  parce que WordPress transforme `&&` en entité HTML.
- Ré-encodage : `btoa(unescape(encodeURIComponent(src)))`.
- Les petits scripts non encodés doivent **éviter `&&`** (utiliser `if` imbriqués, `?:`, etc.).

**B. Page en HTML « nu »** (jeux extérieurs, page 4839 — et l'assistant persona à venir)

Le widget est injecté après le dernier `[/et_pb_section]`, donc **wpautop s'applique**.
Sur ce site précisément :

- il enveloppe de `<p>` les **LIGNES VIDES**, même à l'intérieur d'un `<script>`
  (30 injections parasites au premier déploiement) ;
- il n'ajoute **pas** de `<br>` aux sauts de ligne simples ;
- il ne touche **pas** aux guillemets dans les scripts.

**Règles de build qui en découlent (non négociables) :**

1. Le HTML du payload tient sur **une seule ligne**.
2. Le `<script>` ne contient **aucune ligne vide** (ni ligne blanche, ni ligne d'espaces).
3. **Aucun caractère `&` littéral** nulle part dans le payload — utiliser
   `String.fromCharCode(38)` quand il en faut un à l'exécution.
4. Le payload a une **longueur exacte connue**, assertée avant envoi
   (`assistant-evenement/payload.txt` = 49 289 caractères).

---

## 5. Les 5 chantiers

### Chantier 1 — `catalogue.json` : une seule source de vérité pour les prix ⭐ priorité

**Problème.** Les prix sont dupliqués dans 7 endroits (5 configurateurs en ligne + 2 assistants)
et **divergent déjà** :

- Connect 4 géant : **80 $** sur la landing `/location-jeux-exterieurs/` vs **60 $** dans le
  configurateur `jx`.
- Express 72 h : **210 $ / 50 pers** (accueil) vs Réception **649 $ / 48 pers** (page Forfaits).
- Seuil de livraison incluse : **449 $** à un endroit, **500 $** dans le widget de secteur,
  sur la même page.
- `expressActif: false` dans `calculateur-fete.html` en attendant l'arbitrage.

**À faire.**

1. Extraire tous les produits/prix/stocks de : `gonflables-blob1.js`, `jeux-geants-blob1.js`,
   `jeux-geants-blob2.js`, `arcade-blob1.js`, `chapiteaux-blob1.js`, `kit-wizard-decoded.js`,
   `assistant-jeux/jw-widget.js`, `assistant-evenement/ev-widget.js`, `calculateur-fete.html`.
2. Produire **`catalogue.json`** : un schéma unique
   `{ id, nom, categorie, prix, unite, pas, max, sources: [{fichier, ligne, prix}] }`
   (`pas` = incrément d'UI — 5 pour chaises/nappes ; `max` = stock réel).
3. Produire **`RAPPORT-CONFLITS.md`** : chaque produit dont deux sources donnent un prix
   différent, avec fichier + ligne + les deux valeurs, trié par écart en $ décroissant.
   **N'en tranche aucun** — c'est une décision d'affaires.
4. Ajouter `scripts/verifier-catalogue.js` : relit les sources, échoue (exit 1) si un prix a
   dérivé du catalogue. Doit tourner en `node scripts/verifier-catalogue.js`.

**Fini quand :** `catalogue.json` couvre les ~95 produits de l'assistant persona et les ~70 de
l'assistant jeux, `RAPPORT-CONFLITS.md` liste au minimum les 3 conflits connus ci-dessus, et
le vérificateur passe.

---

### Chantier 2 — `scripts/build.js` : le générateur de payload

**Problème.** Chaque injection échoue pour les mêmes 4 raisons (§4). Le payload est aujourd'hui
assemblé à la main.

**À faire.** Un script Node `node scripts/build.js assistant-evenement` qui :

1. lit `<prefixe>-widget.html`, `.css`, `.js` du dossier ;
2. assemble le payload (HTML sur une ligne, `<style>` + `<script>` inlinés) ;
3. **applique et vérifie** les 4 règles de §4 — et **refuse de builder** (exit 1, message
   pointant la ligne fautive) si l'une saute ;
4. écrit `payload.txt` + affiche sa longueur en caractères ;
5. accepte `--assert-length=49289` et échoue si l'écart n'est pas nul.

Plus `scripts/lint-payload.js` : les 4 mêmes règles, exécutables seules sur un `payload.txt`
existant, pour valider `assistant-jeux/payload.txt` et `assistant-evenement/payload.txt`.

**Fini quand :** rebuilder `assistant-evenement` reproduit un `payload.txt` de **49 289
caractères** identique octet pour octet à l'actuel, et le lint passe sur les deux assistants.

---

### Chantier 3 — Harnais de test (Playwright)

**À faire.** `tests/` avec Playwright, tournant sur les `test-local.html` (fichiers autonomes,
aucun serveur requis). Scénarios minimums :

| # | Widget | Scénario | Attendu |
|---|---|---|---|
| 1 | ev | Mariage, 60 invités, livraison Blainville | total 860 $ + 100 $, pas de note de visite |
| 2 | ev | Mariage, 120 invités **avec marquise** au panier | total affiché avec « + », note « visite de site » |
| 3 | ev | Fête d'enfants, ramassage | livraison 0 $, code postal masqué |
| 4 | ev | Corpo, `?persona=corpo` dans l'URL | onglets réordonnés, corpo présélectionné |
| 5 | ev | Parcours complet | coordonnées demandées **AVANT** le prix, envoi `evx_soumission` simulé |
| 6 | jw | Panier mixte (gonflables + arcade + géants) | on peut piger dans les 3 catalogues |
| 7 | jw | Prix affiché | envoi auto déclenché, dédup par hash de config (2e affichage = 1 seul envoi) |
| 8 | jw | `?jeux=gonflables` | catégorie présélectionnée |
| 9 | jw | JS désactivé | étape 1 montre les 3 cartes-liens vers les configurateurs existants |
| 10 | les 2 | Livraison à l'unité, 35 km | 100 $ + 7 $/km au-delà de 10 km, plancher 300 $ respecté |

Les envois réseau sont **interceptés et simulés** — aucune requête ne sort. Marquer tout payload
de test avec `TEST` s'il devait quand même partir.

**Fini quand :** `npx playwright test` passe à 10/10 et un README d'une page dit comment relancer.

---

### Chantier 4 — Passe mobile + accessibilité

**Cible :** `assistant-evenement/`, `assistant-jeux/`, `calculateur-fete.html`.

- 375 px : aucun débordement horizontal, cibles tactiles ≥ 44 px, panier/total toujours atteignable.
- Clavier : parcours complet sans souris, ordre de tabulation logique, `:focus-visible` visible
  sur fond `#FAF9FF` (pas d'`outline: none` nu).
- Sémantique : `<label>` relié à chaque champ, `aria-live` sur le total qui change,
  `role="tablist"/"tab"/"tabpanel"` sur les onglets d'inventaire, erreurs de formulaire annoncées.
- Contraste : valider violet `#5E17EB` et `#8B67F6` sur `#FAF9FF` en AA (4,5:1 texte normal) —
  si `#8B67F6` échoue, **ne change pas la couleur de marque** : propose un usage alternatif
  (texte plus gras, couleur d'appoint) dans un commentaire.
- Zéro régression visuelle : la maquette et la palette restent identiques.

**Fini quand :** les 3 widgets passent un audit axe-core sans violation « serious »/« critical »,
et les tests du chantier 3 passent toujours.

---

### Chantier 5 — L'endpoint webhook des leads

**Problème.** Dans `calculateur-fete.html`, `CONFIG.webhookUrl` est **vide** : le formulaire
retombe sur `mailto:` et perd des leads. Les deux assistants postent, eux, vers `evx_soumission`.

**À faire.**

1. Unifier le code d'envoi des 3 widgets dans un seul module (même payload, même dédup par hash,
   même gestion d'échec).
2. **File d'attente locale** : en cas d'échec réseau, garder le lead en `localStorage` et
   réessayer au chargement suivant — un lead ne se perd jamais.
3. Repli `mailto:` conservé **en dernier recours seulement**, jamais comme chemin normal.
4. Livrer une **spec d'endpoint** (`WEBHOOK.md`) : champs exacts, exemple de payload JSON,
   et deux recettes de branchement au choix — Zapier/Make vers Mailchimp + courriel, ou petit
   endpoint maison. **Ne crée aucun compte, ne déploie rien** : la destination des leads est
   une décision en attente (§6).

**Fini quand :** les 3 widgets partagent le même module d'envoi, la file d'attente est testée
(coupure réseau simulée), et `WEBHOOK.md` permet de brancher l'endpoint en 10 minutes.

---

## 6. Décisions en attente — NE PAS TRANCHER

Rends-les paramétrables (une constante en tête de fichier, documentée), jamais codées en dur :

1. **Zones de Montréal, Longueuil, Brossard, Gatineau.** Absentes de la grille de secteur alors
   qu'Évenox a ~9 pages de destination Montréal, 3 Longueuil, 1 Brossard. Comportement actuel
   voulu : « transport sur mesure », **jamais** un ajustement inventé.
2. **Seuil de livraison incluse : 449 $ ou 500 $ ?** (les deux apparaissent sur la même page).
3. **Destination des leads** (Mailchimp ? CRM ? courriel simple ?) — bloque le chantier 5.
4. **Conflits de prix** du chantier 1, dont Connect 4 (80 $ vs 60 $) et Express vs Réception.

---

## 7. Hors périmètre (fait ailleurs, pas par toi)

- Création de la page **« Calcule ton événement »** (slug `assistant-evenement`, statut *draft*
  d'abord) via l'API REST WordPress — nécessite une session wp-admin authentifiée.
- Tout déploiement : `admin-ajax.php?action=rest-nonce` → `GET /wp-json/wp/v2/pages?slug=…&context=edit`
  → remplacements par paires ancrées (chaque ancre doit matcher **exactement 1 fois**, sinon abort)
  → `POST /wp-json/wp/v2/pages/{id}` (crée une révision, réversible).
- Relecture de grilles depuis les widgets en ligne (le JS n'est pas dans le HTML des pages).
- Le site renvoie des **429** s'il est sollicité trop vite — raison de plus pour ne pas y toucher.

---

## 8. Ordre suggéré

**1** (catalogue + rapport de conflits) → **2** (build) → **3** (tests) → **4** (a11y) → **5** (webhook).

Les chantiers 1 et 2 sont indépendants et peuvent partir en parallèle. Le 3 a besoin du 2 pour
rebuilder proprement. Le 5 se termine seulement quand la décision « destination des leads » tombe.

Le dossier **n'est pas encore un dépôt git** : commence par `git init` + un `.gitignore`
(`node_modules/`, `test-results/`, `playwright-report/`) et un commit initial de l'état actuel,
avant toute modification — c'est le filet de sécurité pour revenir en arrière.

Ensuite, **livre chaque chantier en commit séparé**, avec dans le message ce qui a été vérifié
et ce qui reste ouvert.
