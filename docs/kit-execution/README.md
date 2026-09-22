# Kit d'exécution — aujourd'hui (22 sept 2026)

Ordre d'exécution, ~3 h 30 au total. Tout est prêt à importer/coller. Rien ne dépense avant l'étape 6.

| # | Bloc | Fichier | Qui | Durée |
|---|---|---|---|---|
| 1 | Correctifs site (noindex merci, script UTM, texte 10 min, champ Ville, cookie interne) | `site-correctifs-aujourdhui.md` + `evx-utm-champs-caches.js` | SITE / Alexandre (accès WP) | 45 min |
| 2 | Google Ads: conversion primaire `Soumission merci`, anciennes → secondaires, auto-tagging, liste négatifs | `tracking-setup-pas-a-pas.md` (A) + `negatifs-liste-partagee.txt` | ADS | 15 min |
| 3 | GA4 propriété + lien Ads | `tracking-setup-pas-a-pas.md` (B) | ADS | 10 min |
| 4 | GTM import + 3 placeholders + test + publier | `gtm-container-import.json` | SITE | 25 min |
| 5 | Meta pixel + audiences + campagne RT en pause | `meta-retargeting.md` | META | 30 min |
| 6 | **GO/NO-GO**: 3 soumissions test = 4/4 signaux | `tracking-setup-pas-a-pas.md` (E) | Alexandre | 10 min |
| 7 | Google Ads Editor: importer le CSV, vérifier, publier (58 $/j, lun–ven 9–18) | `google-ads-editor-import.csv` | ADS | 20 min |
| 8 | Meta: activer RT - Leads 10 $/j | `meta-retargeting.md` | META | 2 min |
| 9 | ChatGPT Ads: accès compte, événement lead, campagne en pause, décision 350 $ | `chatgpt-ads.md` | Alexandre | 20 min |
| 10 | Close: SMS notif, template Booqable, relances 24/72 h, feuille Leads | `booqable-scripts-close.md` + `feuille-leads.csv` | Alexandre | 30 min |

Après aujourd'hui = analyse seulement: `kpi-hebdo.csv` chaque lundi, termes de recherche J+1, J+3, J+7.

## Import Google Ads Editor
Compte > Importer > Depuis un fichier > `google-ads-editor-import.csv`. Vérifier: 6 campagnes, 9 groupes, ~140 mots-clés (expression + exacte), 9 annonces RSA. Puis ajouter à la main (Editor ne les importe pas bien par CSV): extension d'appel 514-559-1893, liens annexes (Configurateur /configurateur/, Chaises, Jeux, Contact), accroches (Réservation 24/7, Cueillette Ste-Thérèse, Livraison Rive-Nord, Devis en 10 min). Appliquer la liste `EVX négatifs` à toutes les campagnes. Publier.

## Placeholders à remplir (3)
- `G-REMPLIR` → ID de mesure GA4 (étape 3)
- `LIBELLE-REMPLIR` → libellé de conversion Google Ads (étape 2)
- `META-PIXEL-ID-REMPLIR` → ID pixel Meta (étape 5)
