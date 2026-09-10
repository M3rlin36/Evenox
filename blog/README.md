# Blogue Évenox : articles SEO « questions fréquentes »

Sept articles prêts à publier sur evenox.ca, dans le gabarit exact des articles existants (classes `evx-*`, encadré réponse directe, tableaux, FAQ dépliante, appels à l'action, JSON-LD FAQPage + Breadcrumb + Article).

| # | Article | Slug | Cible | Page où le lead est envoyé |
|---|---------|------|-------|----------------------------|
| 1 | Photobooth classique ou vidéobooth 360 : lequel choisir? | `photobooth-classique-ou-videobooth-360-lequel-choisir` | Mariés, RH, organisateurs de galas | Photobooth Rive-Nord, Vidéobooth 360, Forfait Mariage Signature |
| 2 | Assurance, permis et sécurité pour un jeu gonflable | `assurance-permis-securite-jeu-gonflable-ville-ecole-entreprise` | Villes, écoles, comités, employeurs | Jeux Rive-Nord, Conditions, Contact |
| 3 | Fête de quartier : combien de jeux prévoir | `fete-de-quartier-journee-familiale-combien-de-jeux-prevoir` | Municipalités, comités de loisirs | Forfait Jeux Premium, Livraison corporative |
| 4 | Mariage dans la cour arrière : checklist location | `mariage-dans-la-cour-arriere-quebec-checklist-location` | Couples Rive-Nord avec grand terrain | Forfait Mariage Signature, Mobilier |
| 5 | Bal des finissants de 6e année | `bal-des-finissants-6e-annee-idees-budget-comite-de-parents` | Comités de parents, écoles primaires | Forfaits graduation |
| 6 | Machines à popcorn, barbe à papa, slush : portions et prix | `location-machine-popcorn-barbe-a-papa-slush-portions-prix` | Tous segments (ajout facile) | Machines à gourmandises |
| 7 | Table de Mississippi : règles et 5 jeux | `table-de-mississippi-regles-jeux-location` | Party de bureau, chalets, 40e | Produit Mississippi, Forfait 5 à 7 |

## Structure

- `src/*.py` : source de chaque article (titre, réponse directe, corps HTML, FAQ, liens, CTA).
- `build.py` : génère `dist/<slug>.html` (contenu à coller dans WordPress) et `dist/<slug>.json` (titre, extrait, méta description, mot-clé).
- `publish.py` : crée les articles en **brouillon** sur evenox.ca via l'API REST (mot de passe d'application requis).

## Publier

Option A, automatique (recommandé) :

```bash
export WP_USER="identifiant_wordpress"
export WP_APP_PASSWORD="xxxx xxxx xxxx xxxx xxxx xxxx"
python3 blog/build.py
python3 blog/publish.py
```

Option B, manuelle : WordPress > Articles > Ajouter > éditeur en mode **Code** (ou bloc HTML personnalisé) > coller le contenu de `dist/<slug>.html`. Régler le slug, l'extrait, la catégorie « Guides », puis dans Yoast la méta description et le mot-clé principal (dans `dist/<slug>.json`).

## Avant la mise en ligne, pour chaque article

1. Ajouter une image mise en avant (format 16:9, texte alternatif suggéré dans le JSON). L'emplacement dans le corps est marqué par un commentaire `IMAGE À AJOUTER`.
2. Relire les chiffres marqués « à confirmer » dans la section ci-dessous.
3. Publier, puis soumettre l'URL dans Google Search Console (Inspection d'URL > Demander l'indexation).

## Chiffres à confirmer par Évenox

- Article 2 : montant de l'assurance responsabilité civile d'Évenox (l'article dit que les villes exigent « habituellement 2 millions » sans chiffrer la police d'Évenox) et le délai réel pour ajouter un assuré additionnel.
- Article 4 : prix indicatifs des grands chapiteaux, des toilettes et des génératrices (fourchettes du marché, pas des prix Évenox).
- Article 6 : portions par heure et coût par portion (estimations à partir des prix du catalogue).
- Article 7 : dimensions de la table de Mississippi et nombre de palets (la fiche produit indique qu'ils ne sont pas relevés; l'article donne une règle d'espace générale de 12 x 18 pi).
