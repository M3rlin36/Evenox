# Plan exact — Locabris

Objectif : corriger ce qui casse, sans changer le look. Même navy, même bleu, même Raleway, même ton.

## Branding à respecter (ne pas inventer)

| Jeton | Valeur |
|---|---|
| Navy | `#0E2C4F` |
| Bleu | `#1088B5` |
| Glace | `#D9EDF7` / `#E7F3F8` |
| Texte | `#121212` / `#35454E` / `#5A6B75` / `#7A8B95` |
| Bordure | `#E6EBEF` / `#D7E0E6` |
| Champ | fond `#FBFCFD`, radius `8px`, padding `17px 16px` |
| Police | Raleway 600–800 |
| Eyebrow | 11px, uppercase, tracking 0.22–0.26em |
| CTA | fond `#1088B5`, blanc, weight 800 |
| Carte | bordure `#E6EBEF`, padding 38/34 |
| Sélection | outline 2px `#1088B5` |
| Succès | fond `#D9EDF7`, jamais visible avant envoi |
| Téléphone | 438-439-0201 |
| Courriel | locabris.ca@gmail.com |
| Zone | 20 km de Sainte-Thérèse · Montréal = livraison seule |
| Prix | simple dès 250 $ · double dès 700 $ · pose 200 $ / 300 $ |

Ton : phrases courtes, « on », Québec, aucun engagement, rappel le jour même.

## Ordre d’exécution

1. Soumission — vrai wizard, vente pas location, envoi Zapier propre.
2. Contact — enlever « Message envoyé » au chargement.
3. Boutique — sortir le CSS du texte, le remettre dans un `<style>`.
4. Fiche abri — image, prix, inclus, bouton vers soumission.
5. Politique — texte Loi 25, même mise en page.
6. Yoast + redirections — plus un mot « location » là où on vend. **Fait (1.0 + 1.1).**
7. Slugs `en-location` / `418-2`, titres `Abri hivernal`, Woo FR, checkout qui reste sur `/checkout/`. **Fait (1.1).**

## Hors scope

Pas de nouveau branding. Pas de refonte accueil. Pas de nouveau thème. Le header / footer Divi restent ceux du site.
