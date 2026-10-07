# Compte rendu — ChatGPT Ads & plan de campagnes Evenox (300 $/jour)

*Préparé le 7 octobre 2026 · 862 sources consultées (7 dossiers de recherche + vérification croisée)*

---

## 1. En 30 secondes

- **ChatGPT Ads est ouvert aux entreprises canadiennes, en libre-service, dès 25 $ CA/jour par campagne.** Ciblage possible au niveau de la province (Québec), pas de la ville.
- **C'est un canal de test, pas un canal principal.** Clics de 4 à 9 $ CA au Canada, taux de clic ~0,7–1 % (vs ~6 % sur Google), peu de volume, et **aucune pub chez les utilisateurs Plus / Business / Enterprise** (là où sont beaucoup de décideurs corporatifs).
- **Le vrai levier ChatGPT pour Evenox = être recommandé gratuitement** (GEO) : avis, Bing Places, Yelp, répertoires, pages claires. Aucun concurrent premium de la Rive-Nord/Laval n'y est bien positionné.
- **Le budget de 300 $/jour va surtout sur Google Search (corporatif d'abord) et Meta**, avec 6 campagnes réalistes maximum.
- **Avant de dépenser 1 $ de plus : corriger le formulaire, le suivi des conversions (Loi 25) et 3 erreurs dans tes pubs actuelles.** Sinon on paie pour des leads qu'on ne peut ni filtrer ni mesurer.

---

## 2. ChatGPT Ads — ce qui est confirmé (octobre 2026)

| Élément | Réalité | Fiabilité |
|---|---|---|
| Accès Canada | Libre-service sur **ads.openai.com**, entreprise enregistrée au Canada, facturation en CAD. Le « minimum 50 000 $ » qui circule est **périmé** (avant mai 2026). | Officiel |
| Budget minimum | **25 $ CA/jour par campagne**, aucun minimum total. Budget = moyenne sur 7 jours (jusqu'à 2× un jour donné). | Officiel |
| Qui voit les pubs | Adultes connectés en **Free et Go** seulement. Jamais Plus, Pro, Business, Enterprise, Edu, ni moins de 18 ans. | Officiel |
| Format | Une carte « Commandité » **sous** la réponse : nom, logo, titre ≤ 50 caractères, description ≤ 100, image carrée, lien. | Officiel |
| Ciblage | **Pas de mots-clés** : des « context hints » (descriptions en langage naturel des conversations visées). Géo : pays ou **province (Québec)**, pas de ville ni de rayon au Canada. Pas de ciblage par langue ni démographique. | Officiel / fort |
| Enchères | CPM, CPC (OpenAI suggère 3–5 $ US ≈ 4–7 $ CA), optimisation aux conversions (bêta ouverte). L'enchère pondère la pertinence : une meilleure correspondance bat une enchère plus haute. | Officiel |
| Suivi | Pixel + Conversions API. **Le consentement est activé par défaut** → pour la Loi 25, appeler `oaiq("consent", false)` avant le chargement jusqu'à l'acceptation. | Officiel |
| Traduction auto | Option « text customization » qui traduit/réécrit l'annonce, **active par défaut** selon des tests → à désactiver (Loi 96). | Probable |
| Interdits Canada | Santé, finance, juridique, logement, emploi. Alcool interdit dans l'annonce **et** la page d'atterrissage. | Officiel |

**Nouveautés des 90 derniers jours :** enchères aux conversions, budgets sur 7 jours, audiences de listes clients (25 000 correspondances min. pour cibler), 1 G$ de revenus annualisés en < 200 jours, « Sponsored Agents » (pubs conversationnelles, test US), pubs visuelles pendant la génération d'images (test US fin octobre), intégrations HubSpot/Shopify, partenaires de mesure (DoubleVerify, IAS).

**Résultats réels terrain (à prendre avec prudence, petits échantillons) :**
- Canada : CTR 0,65 %, clic 4,42–4,88 $ CA, **0 lead B2B qualifié** (agence ontarienne) ; conversion 0,9 % sur ChatGPT vs 5,95 % sur Google pour un même client.
- Services locaux et services à gros ticket = les retours les plus positifs. B2B pur = souvent zéro lead sous 2 500 $.
- Une partie importante des clics ChatGPT **n'apparaît pas dans GA4** → mesurer avec le pixel OpenAI + formulaire + CRM.

**Autres pubs dans l'IA, au Canada :**
- **Microsoft Copilot : oui, automatiquement** via Microsoft Ads (pas de désactivation possible). Bon rapport coût/effort.
- **Google AI Overviews : anglais seulement au Canada** — rien en français.
- Google AI Mode : US seulement. Perplexity : a arrêté la pub. Gemini, Meta AI : pas de pub dans le chat.

---

## 3. Ce que ça change concrètement pour Evenox

**Ton opportunité :**
1. **Corporatif clé en main = le créneau libre.** Diva (Laval) domine Google avec 74 annonces orientées mariage et « aucun minimum ». Personne ne vend « une facture, livraison-installation-démontage, réponse garantie » aux entreprises. Le budget médian des mariages au Québec est bas (47 % < 10 000 $ au total) → le corporatif est ton vrai segment premium.
2. **Les gens demandent déjà à ChatGPT** : « party des Fêtes clé en main pour 80 employés à Laval », « combien coûte un 5 à 7 corporatif », « meilleur photobooth 360 Montréal ». Être la réponse (gratuit) > payer pour être sous la réponse.
3. **Laval / Rive-Nord est le marché le plus gagnable** dans les réponses IA (les listes « Three Best Rated » de Laval sont tenues par Abris Crystal, Diva, Glam — Evenox absent).

**Ce qui te freine aujourd'hui (constaté sur ton site et tes pubs) :**

| Problème | Impact | Correctif |
|---|---|---|
| Formulaire sans budget, nb d'invités, type d'événement, entreprise/particulier | Un gonflable à 200 $ et un gala à 5 000 $ arrivent pareil | Formulaire multi-étapes avec routage (voir `operations/formulaire-qualification.md`) |
| Pub Google avec « **Learn more \|** » en anglais | Risque Loi 96 + image amateur | Retirer le texte auto, vérifier les « assets automatiques » |
| Bouton « Demande de **Soumision** » | Crédibilité premium | Corriger la faute |
| Annonceur Google vérifié au nom d'Alexandre Séguin | Manque de crédibilité | Vérifier au nom de l'entreprise |
| Courriel Gmail, Facebook profil perso | Pas premium + mauvais signal pour l'IA | Courriel @evenox.ca, Page Facebook Entreprise |
| Livraison « incluse » sur certaines pages, « 100 $ + 7 $/km » sur d'autres | Litiges, perte de confiance | **Décision à prendre** : une seule politique (recommandé : livraison-installation-démontage incluses dans les forfaits ≥ 1 195 $, rayon 40 km) |
| Chiffres incohérents (4,8 vs 4,9★ ; 500+ vs 1 000+ ; compteurs « 0+ ») et 2 témoignages identiques | Perte de confiance, l'IA ne cite pas les infos contradictoires | Uniformiser partout |
| 24 pages de villes quasi identiques | Risque de pénalité Google (« doorway pages ») | Contenu unique par ville (réalisations, salles, avis locaux) |
| Pas de Bing Places, Yelp vide, WeddingWire à 0 avis, absent des listes | Invisible dans ChatGPT (qui s'appuie sur Bing, Yelp, répertoires) | Plan GEO 30 jours (`operations/geo-chatgpt.md`) |
| Pixels sans bannière de consentement conforme | Amendes Loi 25 + données faussées | `operations/tracking-setup.md` |

---

## 4. Le plan de campagnes — 300 $/jour (~9 000 $/mois)

**Règle de base :** une campagne doit pouvoir générer ~30 conversions/mois pour que l'algorithme apprenne. Au coût par lead attendu (40–120 $ CA), 300 $/jour supporte **6 campagnes maximum**. Plus = argent dispersé, aucune campagne n'apprend. Pas de Performance Max, Demand Gen ni LinkedIn pour l'instant (minimums trop élevés pour ce budget).

### Répartition octobre → novembre (saison corporative)

| # | Campagne | $/jour | Rôle |
|---|---|---|---|
| 1 | **Google Search — Corporatif** (party des Fêtes, 5 à 7, gala, team building, photobooth 360, activation) | **100** | Capter les entreprises qui cherchent maintenant |
| 2 | **Meta — Leads** (1 campagne consolidée, formulaire « intention élevée » + reciblage) | **80** | Créer la demande avec tes réalisations en visuel |
| 3 | **Google Search — Mariage & privé haut de gamme** | **60** | Décor (899 / 1 449 / 1 899 $), chapiteaux, photobooth |
| 4 | **ChatGPT Ads — Test** (Québec, 3 groupes : Fêtes corpo, gala/activation, mariage) | **30** | Tester tôt, avant les concurrents |
| 5 | **Microsoft Ads** (import Google + ciblage profils LinkedIn : RH, adjoint(e)s, marketing) | **20** | Bing + Copilot, clics 20–40 % moins chers |
| 6 | **Google Search — Marque** (Evenox + fautes, exclure « Evenko ») | **10** | Protéger ton nom |

### Bascule saisonnière (sans créer de nouvelles campagnes)

| Période | Corporatif | Mariage | Pourquoi |
|---|---|---|---|
| Oct → mi-déc | 100 | 60 | Party des Fêtes (dates de décembre déjà en réservation) |
| Mi-déc → mai | 50 | 110 | Fiançailles nov–fév, réservation des fournisseurs déc–mai |
| Juin → sept | 80 | 80 | Événements d'été + réservations party des Fêtes (août–sept) |

Mariages au Québec : ~22 700 en 2025, **54 % entre juillet et octobre** (ISQ).

### Projection (hypothèse à valider, pas une promesse)

| Indicateur | Cible |
|---|---|
| Coût par lead (tous) | 40–90 $ |
| % leads qualifiés (budget ≥ 1 000 $, date dispo, zone) | ≥ 40 % |
| Coût par lead **qualifié** | ≤ 150 $ |
| Taux de signature des qualifiés | ≥ 25 % |
| Panier moyen | ≥ 1 500 $ |
| → ordre de grandeur mensuel | 100–150 leads, 40–60 qualifiés, **10–15 contrats** |

### Règles couper / augmenter

- **Jour 7 :** vérifier que chaque conversion remonte (Google, Meta, OpenAI, CRM). Si non → pause et correction.
- **Jour 14 :** groupe d'annonces avec CPL qualifié > 150 $ → couper les mots-clés/annonces perdants ; ChatGPT avec CTR < 0,5 % → réécrire les context hints.
- **Jour 30 :** campagne sans contrat signé → réallouer son budget vers la meilleure campagne. **ChatGPT sans aucun lead qualifié → pause, les 30 $ vont au Google Corporatif.**
- **Augmenter :** +20 %/semaine max sur une campagne dont le CPL qualifié < 100 $ et le taux de signature ≥ 25 %.
- **Google :** passer en tCPA seulement après 30 conversions qualifiées sur 30 jours.

---

## 5. Ordre de déploiement

**Semaine 0 — avant toute hausse de budget (3–5 jours)**
1. Corriger « Learn more », « Soumision », nom de l'annonceur Google.
2. Bannière de consentement Loi 25 + Consent Mode v2 + pixels (Google, Meta, Microsoft UET, OpenAI) conditionnés au consentement.
3. Formulaire multi-étapes qualifiant + événement « lead_qualifié » distinct de « lead_tous ».
4. Pages d'atterrissage /corporatif et /mariage (textes prêts dans `operations/`).
5. Décider la politique de livraison unique.
6. Courriel @evenox.ca, Page Facebook Entreprise.

**Semaine 1 :** lancer Google Corporatif + Marque + Meta. Créer le compte ads.openai.com (vérification d'entreprise).
**Semaine 2 :** ajouter Google Mariage, Microsoft (import), ChatGPT Ads.
**En continu :** rappel en < 5 minutes sur chaque lead (la 1re entreprise qui répond gagne jusqu'à 50 % des réservations), plan GEO 30 jours, avis Google (objectif 150+).

---

## 6. Les fichiers prêts à déployer

| Dossier | Contenu |
|---|---|
| `campagnes/google-ads/` | CSV importables dans Google Ads Editor : campagnes, mots-clés, mots-clés négatifs, annonces RSA, extensions |
| `campagnes/microsoft-ads/` | Procédure d'import + ciblage LinkedIn |
| `campagnes/meta-ads/` | Structure, formulaire qualifiant, 8 concepts d'annonces |
| `campagnes/chatgpt-ads/` | Campagne test : context hints, titres/descriptions, réglages, règles |
| `operations/` | Pages d'atterrissage, formulaire, suivi des leads (scripts), tracking, correctifs urgents, plan GEO |
| `recherche/` | Les 7 dossiers de recherche avec le journal complet des sources |

---

## 7. Sources et fiabilité

- **862 sources** au total : documents officiels (OpenAI, Google, Microsoft, Meta, ISQ, gouvernement du Québec), études de référence (WordStream/LocaliQ, Statcounter, Superads), presse spécialisée, agences, Reddit/LinkedIn/X, ~85 vidéos YouTube, Google Ads Transparency Center (annonces réelles des concurrents).
- **Limites honnêtes :**
  - **Instagram : aucun contenu exploitable** (connexion obligatoire / blocage).
  - **YouTube : titres, chaînes et descriptions seulement** — les vidéos et transcriptions étaient bloquées dans cet environnement.
  - Le centre d'aide OpenAI bloque la lecture automatique : lu via extraits de moteurs de recherche + documentation développeur lue en entier.
  - Meta Ad Library (pubs Facebook des concurrents) : connexion requise → **à vérifier à la main**.
  - Plusieurs « études de cas » ChatGPT Ads viennent d'agences qui vendent le service → marquées comme telles.
- Chaque chiffre de ce rapport est soit officiel, soit confirmé par plusieurs sources, soit marqué comme estimation.

## 8. Ce qu'il me faut pour optimiser ta campagne actuelle

Exports des 30–90 derniers jours de ta campagne Google actuelle (campagnes, mots-clés, termes de recherche, annonces, conversions), nombre de contrats signés par source, et accès en lecture si possible. Je compare avec ce plan et je te dis exactement quoi couper, garder et augmenter.
