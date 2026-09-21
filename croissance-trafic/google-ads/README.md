# Fichiers d'import Google Ads Editor

3 campagnes, 10 groupes d'annonces, 29 mots-clés, 135 négatifs, 10 annonces RSA.
**Les 10 pages de destination ont été vérifiées : toutes répondent 200.**

## Comment importer (5 minutes)

1. Télécharge **Google Ads Editor** (gratuit) → connecte ton compte
2. `Compte → Importer → À partir d'un fichier`
3. Importe dans cet ordre :
   - `01-campagnes-mots-cles.csv` (campagnes, budgets, groupes, mots-clés)
   - `02-mots-cles-negatifs.csv` (**avant le premier clic**)
   - `03-annonces-rsa.csv` (annonces)
4. Vérifie l'aperçu des modifications, puis **Publier**
5. Avant d'activer : ajoute la zone géographique (rayon 40 km de Blainville + Montréal + Laval + Longueuil, ciblage « Présence »), les langues FR + EN, et les extensions (liens annexes, accroches, appel)
6. Installe le suivi des conversions (voir `../08-ACQUISITION-PAYANTE.md` section 8) **avant** d'activer la diffusion

## Contenu

| Fichier | Lignes | Contenu |
|---|---|---|
| `01-campagnes-mots-cles.csv` | 29 | Photobooth (30 $/j) · Mobilier (22 $/j) · Corporatif (23 $/j) — exact et expression seulement |
| `02-mots-cles-negatifs.csv` | 135 | 45 négatifs × 3 campagnes : emploi, achat/usagé, DIY, hors zone |
| `03-annonces-rsa.csv` | 10 | 15 titres (≤30 car.) + 4 descriptions (≤90 car.) par groupe — longueurs validées |

## Budget
75 $/jour au total (~2 250 $/mois). Enchères : « Maximiser les clics » avec plafond CPC de 4,00 $ pendant 2 semaines, puis CPA cible dès 15-20 conversions.

## Avant d'activer — les 3 vérifications
- [ ] Suivi des conversions installé et testé (soumission + appel > 60 s + réservation)
- [ ] Formulaire filtrant en ligne (champ budget démarrant à 500 $)
- [ ] Quelqu'un est disponible pour rappeler chaque lead en moins de 15 minutes

Si la 3e case n'est pas cochée, n'active pas. Tu payerais pour des leads qui refroidissent.
