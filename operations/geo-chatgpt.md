# Être recommandé par ChatGPT (sans publicité) — plan de 30 jours

> But : quand quelqu'un demande à ChatGPT, Copilot, Gemini ou Perplexity « un fournisseur clé en main pour un party de bureau à Laval » ou « location déco mariage Rive-Nord », qu'Évenox fasse partie des 3 à 6 entreprises nommées.
> Comment ChatGPT choisit : il fait une recherche en direct, retient de 10 à 25 candidats, puis en nomme de 3 à 6. Ses sources : son propre index, des résultats Google et Google Maps, **Yelp** (partenaire sous licence, présent dans environ 80 % de ses réponses locales), **Bing** (Bing Places, Copilot), les sites des entreprises (environ 58 % des sources), les mentions (environ 27 %) et les annuaires (environ 15 %, dont **Three Best Rated** pour environ 24 % de cette part).
> Avantage d'Évenox : des **forfaits à prix affichés** (rare dans ce marché), un blogue de questions et réponses, et des robots d'IA non bloqués. Faiblesses : des faits contradictoires, une entité faible (Gmail, profil Facebook personnel), peu d'avis hors Google, et l'absence des listes « meilleurs fournisseurs ».

Responsables : **PROP** (Alexandre), **WEB** (webmestre), **ADJ** (adjoint(e)). Temps total : environ 30 h sur 30 jours.

---

## Semaine 1 (jours 1 à 7) — Une entité propre et cohérente

| Jour | Tâche | Resp. | Temps |
|---|---|---|---|
| 1 | Lancer la **mesure de départ** : les 15 requêtes de la section « Requêtes de test » dans ChatGPT (connecté, recherche activée), Copilot, Gemini et Perplexity. Remplir le tableau de suivi (colonne « Jour 0 »). | ADJ | 2 h |
| 1 | Rédiger la **fiche de faits unique** (note, avis, événements, fondation, NAP, zone, prix d'entrée de chaque gamme, politique de livraison). Voir correctifs-urgents.md, points 1 et 5. | PROP | 1 h |
| 2 | Appliquer la fiche de faits à tout le site ; retirer les compteurs « 0+ » ; passer à `fr-CA`. | WEB | 3 h |
| 3 | Créer le courriel au domaine (info@evenox.ca) et la **Page Facebook d'entreprise** ; mettre à jour le schéma `sameAs`. | PROP + WEB | 3 h |
| 4 | **Bing Places** (importation depuis Google) + **Bing Webmaster Tools** + IndexNow. | ADJ | 1 h 30 |
| 5 | Fiche Google : compléter les **services avec prix** (5 à 7 d'équipe 1 195 $, Party de bureau 1 995 $, Gala Signature 2 495 $, Décor WOW 899 $, Soirée Signature 1 449 $, Mariage Signature 1 899 $), les produits, la zone desservie, et 10 photos réelles géolocalisées. | ADJ | 1 h 30 |
| 6 | Mettre à jour **llms.txt** : 1 paragraphe d'identité, la liste des forfaits avec leurs prix, la zone, la politique de livraison, les liens vers les pages piliers. Pas de « 0+ », pas de pages de villes en gabarit. | WEB | 1 h |
| 7 | Vérifier robots.txt : `OAI-SearchBot`, `ChatGPT-User`, `OAI-AdsBot`, `Bingbot`, `Googlebot` et `PerplexityBot` autorisés. (Choix stratégique : `GPTBot`, qui sert à l'entraînement, peut rester autorisé ou être bloqué ; il n'est pas utilisé pour les réponses de recherche.) | WEB | 15 min |

**Modèle de paragraphe d'identité** (le même dans llms.txt, sur la page À propos, dans la fiche Google, sur Bing, Yelp, Facebook et WeddingWire) :
> Évenox inc. est une entreprise de location d'équipement événementiel clé en main fondée en 2022 à Sainte-Thérèse (Rive-Nord de Montréal). Elle dessert la Rive-Nord, Laval et Montréal avec des forfaits à prix affichés pour les événements d'entreprise (5 à 7, party de bureau, gala : de 1 195 $ à 2 495 $) et les mariages (décor et photobooth avec préposé : de 899 $ à 1 899 $), incluant l'installation et le démontage. Note Google : {{NOTE_GOOGLE}}/5 ({{NB_AVIS}} avis). 215, boul. René-A.-Robert, local 100, Sainte-Thérèse (Québec) J7E 4L1 · 514-559-1893 · evenox.ca

---

## Semaine 2 (jours 8 à 14) — Annuaires et avis (là où ChatGPT regarde)

| Jour | Tâche | Resp. | Temps |
|---|---|---|---|
| 8 | **Yelp** : réclamer ou créer la fiche, catégories Party Equipment Rentals et Event Planning, paragraphe d'identité, 10 photos. | ADJ | 1 h |
| 8 | **Three Best Rated** : candidature « Event Rental » à Laval, à Montréal et dans la ville disponible la plus proche de la Rive-Nord. | ADJ | 45 min |
| 9 | **WeddingWire.ca** (et Mariages.net s'il existe pour le Québec) : corriger l'adresse (Sainte-Thérèse, pas Laval), ajouter les 3 forfaits mariage avec prix et 15 photos. | ADJ | 1 h |
| 9 | Annuaires d'affaires : **PagesJaunes.ca**, **Apple Business** (Plans et Siri), **CCI Thérèse-De Blainville**, **CCI de Laval** (membre ou annuaire), **meet.mtl.org** (annuaire des fournisseurs de Tourisme Montréal : demande d'inscription). Même NAP partout. | ADJ | 2 h |
| 10 | **Campagne d'avis** : texto et courriel à tous les clients des 12 derniers mois (texte dans suivi-leads.md, section 8). Les clients corporatifs reçoivent le lien Google ; les couples, Google puis WeddingWire. Demander de **mentionner le type d'événement et la ville** (« party de bureau à Laval »), sans dicter le texte. | ADJ | 2 h |
| 11 à 14 | Relance des avis à J+3. Répondre à **chaque** avis en moins de 48 h, en reprenant naturellement le service et la ville (« Merci pour votre party des Fêtes à Blainville! »). | ADJ | 30 min par jour |

**Objectif d'avis à 30 jours :** Google de 52 à 80 et plus · WeddingWire de 0 à 5 et plus · Yelp de 0 à 3 et plus · Facebook de 0 à 5 et plus.

---

## Semaine 3 (jours 15 à 21) — Contenu que les modèles de langage peuvent citer

| Jour | Tâche | Resp. | Temps |
|---|---|---|---|
| 15 à 16 | Créer la page pilier **« Party de bureau clé en main : prix et forfaits (Rive-Nord, Laval, Montréal) »** (indexée) : tableau des 3 forfaits avec ce qui est inclus, le budget par personne (prix du forfait divisé par le nombre d'invités), le délai de réservation pour les Fêtes, la logistique en immeuble de bureaux, 1 étude de cas réelle (avec autorisation : entreprise, nombre d'invités, forfait, 3 photos, citation) et une FAQ de 8 questions avec le schéma FAQPage. | WEB + PROP | 4 h |
| 17 | Créer la page pilier **« Décor de mariage clé en main : prix (899 $ à 1 899 $) »** : même structure, avec 1 mariage réel. | WEB + PROP | 3 h |
| 18 | Ajouter un **article de blogue de type réponse directe** : « Combien coûte un party des Fêtes d'entreprise au Québec en 2026? (budget par personne) ». Commencer par la réponse chiffrée dès la 1re phrase, puis un tableau. | WEB | 2 h |
| 19 | Ajouter un article : « Évenox ou un loueur à la carte : que comprend un forfait clé en main? » (comparaison honnête : quand la boutique à la carte suffit et quand le forfait vaut la peine). | WEB | 2 h |
| 20 | Réécrire **2 pages de villes** (Laval, Blainville) avec de vrais lieux desservis, des photos et un avis local (correctifs-urgents.md, point 22). | WEB | 4 h |
| 21 | Ajouter le schéma : `aggregateRating` (avis réels), `Review`, `FAQPage`, `Offer` par forfait. Valider. Soumettre les nouvelles URL par IndexNow et par la Search Console. | WEB | 2 h |

**Règles d'écriture pour être cité :**
- La réponse vient en premier, en 1 ou 2 phrases, avec un chiffre (prix, capacité, délai).
- Un tableau par page : les modèles reprennent volontiers les tableaux.
- Des noms propres locaux (villes, types de salles), des dates (« mis à jour en octobre 2026 ») et l'auteur (Alexandre Séguin, fondateur).
- Exactement les mêmes faits que la fiche de faits.

---

## Semaine 4 (jours 22 à 30) — Mentions externes et mesure

| Jour | Tâche | Resp. | Temps |
|---|---|---|---|
| 22 | Proposer 1 contenu au **Nord Info** (ou à un autre média local de la Rive-Nord) : « 5 idées de party des Fêtes d'entreprise sur la Rive-Nord », avec une citation d'Alexandre et une photo. Courriel court au rédacteur. | PROP | 1 h |
| 23 | Demander aux **3 meilleurs clients corporatifs** s'ils acceptent un court témoignage public ou une étude de cas (avec logo). Proposer en échange une photo professionnelle de leur événement. | PROP | 1 h |
| 24 | Contacter **3 salles de réception** de la Rive-Nord ou de Laval qui accueillent déjà des événements montés par Évenox, pour figurer sur leur page « fournisseurs recommandés » (échange de liens et de références). | PROP | 1 h 30 |
| 25 | **Reddit et forums** : répondre honnêtement, avec le compte personnel identifié (« je suis le fondateur d'Évenox »), à 2 ou 3 fils récents de r/montreal ou r/Quebec sur les partys de bureau ou la location pour un mariage. Aucune publicité déguisée. | PROP | 1 h |
| 26 | Bing Webmaster Tools → rapport **AI Performance** : relever les citations et les requêtes. GA4 → canal « IA conversationnelle » : sessions et leads. | ADJ | 30 min |
| 30 | **Deuxième mesure** : refaire les 15 requêtes (colonne « Jour 30 »). Comparer avec le jour 0 et choisir les 3 actions du mois suivant (en général : plus d'avis, une autre page pilier, d'autres annuaires). | ADJ + PROP | 2 h |

---

## Requêtes de test (à lancer chaque mois, le 1er jour ouvrable)

**Protocole :**
- Navigateur en navigation privée.
- ChatGPT : compte gratuit connecté, **mémoire désactivée**, recherche Web activée. Faire une conversation nouvelle pour chaque requête.
- Même chose dans Copilot, Gemini et Perplexity (et dans l'aperçu IA de Google si disponible).
- Noter : Évenox nommé (O/N), rang (1 à 6), lien vers evenox.ca (O/N), faits exacts (O/N/erreur à noter), sources citées (les 3 premières), concurrents nommés.
- Faire une capture d'écran de chaque réponse et la classer dans un dossier Drive « GEO / AAAA-MM ».

| # | Requête | Segment |
|---|---|---|
| 1 | Quelles entreprises offrent un party de bureau clé en main pour 80 employés à Laval? | Corporatif |
| 2 | Fournisseur clé en main pour un party des Fêtes d'entreprise sur la Rive-Nord (décor, photobooth, jeux) | Corporatif |
| 3 | Combien coûte un party des Fêtes d'entreprise par personne au Québec en 2026? | Corporatif (informationnel) |
| 4 | Location de photobooth avec préposé pour un gala corporatif à Montréal | Corporatif |
| 5 | Activité de team building avec jeux géants livrés au bureau à Laval ou Montréal | Corporatif |
| 6 | Turnkey corporate holiday party rentals in Laval or Montreal (decor, photobooth, giant games) | Corporatif (anglais) |
| 7 | Organiser un 5 à 7 d'équipe au bureau : quel fournisseur peut tout installer à Blainville ou Sainte-Thérèse? | Corporatif |
| 8 | Location de décor de mariage clé en main sur la Rive-Nord (lettres lumineuses, mur floral) | Mariage |
| 9 | Meilleur photobooth avec préposé pour un mariage à Laval ou Montréal, avec les prix | Mariage |
| 10 | Combien coûte la location du décor et du photobooth pour un mariage de 120 invités au Québec? | Mariage (informationnel) |
| 11 | Mariage extérieur dans les Laurentides : où louer un chapiteau et le mobilier près de Saint-Jérôme? | Mariage |
| 12 | Meilleures entreprises de location d'équipement événementiel à Laval | Comparaison |
| 13 | Meilleures entreprises de location pour événements sur la Rive-Nord de Montréal, avec les avis | Comparaison |
| 14 | Évenox : avis, prix et forfaits. Est-ce une bonne entreprise de location d'événement? | Marque |
| 15 | Fournisseur de jeux géants et de machines à popcorn pour une fête de quartier municipale sur la Rive-Nord | Municipal |

---

## Tableau de suivi mensuel (copier dans Google Sheets)

Une ligne par requête, par moteur et par mois.

| Mois | # | Moteur | Évenox nommé (O/N) | Rang (1–6 ou –) | Lien vers evenox.ca (O/N) | Faits exacts (O/N) | Erreur relevée | Sources citées (3 premières) | Concurrents nommés | Capture (lien) |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10 | 1 | ChatGPT | | | | | | | | |
| 2026-10 | 1 | Copilot | | | | | | | | |
| 2026-10 | 1 | Gemini | | | | | | | | |
| 2026-10 | 1 | Perplexity | | | | | | | | |
| 2026-10 | 2 | ChatGPT | | | | | | | | |
| … | … | … | | | | | | | | |

### Synthèse mensuelle (onglet séparé)

| Indicateur | Formule | Jour 0 (oct. 2026) | Jour 30 (nov. 2026) | Cible à 90 jours |
|---|---|---|---|---|
| Part de présence ChatGPT | Requêtes où Évenox est nommé / 15 | | | 5/15 ou plus |
| Part de présence tous moteurs | Nommé / (15 × 4) | | | 15/60 ou plus |
| Rang moyen quand nommé | Moyenne des rangs | | | 3 ou mieux |
| Exactitude des faits | Réponses sans erreur / réponses qui nomment Évenox | | | 100 % |
| Requêtes « Laval / Rive-Nord » gagnées | Nommé dans les requêtes 1, 2, 7, 8, 12, 13 / 6 | | | 4/6 ou plus |
| Sessions GA4 du canal « IA conversationnelle » | GA4 | | | En hausse chaque mois |
| Leads venant de l'IA (CRM, `referrer` ou `utm_source` = chatgpt.com, perplexity, copilot) | CRM | | | 3 ou plus par mois |
| Citations Bing AI Performance | Bing Webmaster Tools | | | En hausse |
| Avis : Google / WeddingWire / Yelp / Facebook | Comptes | 52 / 0 / 0 / 0 | | 120 / 15 / 8 / 10 |

**Quand Évenox est mal décrit** (mauvais prix, « Laval », confusion avec « Evenko », « fêtes d'enfants ») : noter la source citée par le moteur, corriger cette source en premier (annuaire, ancienne page, fiche), puis soumettre l'URL corrigée par IndexNow. Ne pas « corriger » le modèle en conversation : ça n'a aucun effet sur les réponses des autres utilisateurs.
