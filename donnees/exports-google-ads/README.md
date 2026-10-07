# Exports Google Ads à déposer ici

Ce dossier reçoit les exports des **deux comptes Google Ads** d'Évenox. Le script
`livrables/scripts/analyse_exports_google_ads.py` les lit et produit l'audit
`livrables/AUDIT-COMPTE-GOOGLE-ADS.md`, plus la liste des négatifs suggérés
`livrables/negatifs_suggeres_google_ads.csv`.

## Règles communes (pour chaque rapport et chaque compte)

- **Comptes :** AW-16529262834 **et** AW-16776285171. Fais chaque export une fois par compte
  (choisis le compte en haut à gauche de Google Ads).
- **Période :** sélecteur de dates en haut à droite > **Personnalisée** > du **1er janvier 2024** à **aujourd'hui**.
- **Inclure tout :** dans le filtre d'état, choisis **Tous** (campagnes, groupes, annonces et mots clés
  activés, en veille **et supprimés**). Sinon l'historique des vieilles campagnes manque.
- **Segmenter par mois** quand c'est offert : icône **Segmenter** > **Temps** > **Mois**.
- **Téléchargement :** icône **Télécharger** (flèche vers le bas) > **CSV** ou **CSV Excel**.
  Les deux formats sont acceptés, de même que .xlsx. Pas de Google Sheets.
- **Langue :** l'interface peut être en français ou en anglais, le script reconnaît les deux.
- **Ne modifie pas les fichiers** (pas d'ouverture-enregistrement dans Excel) : dépose-les tels quels.

## Rangement

Un sous-dossier par compte, nommé avec l'identifiant :

```
donnees/exports-google-ads/
├── AW-16529262834/
│   ├── 1_campagnes_par_mois.csv
│   ├── 2_termes_de_recherche.csv
│   └── ...
└── AW-16776285171/
    ├── 1_campagnes_par_mois.csv
    └── ...
```

Les noms de fichiers sont libres : le script reconnaît le type de rapport d'après les colonnes.

## Les 7 rapports à exporter (par compte)

Les menus de Google Ads changent souvent de nom. Si un chemin n'existe plus, passe par
**Insights et rapports > Rapports > Rapports prédéfinis (Dimensions)**, qui contient presque tout.

| # | Rapport | Chemin dans Google Ads | Segment | Colonnes à avoir (ajoute-les via **Colonnes** si absentes) |
|---|---|---|---|---|
| 1 | **Campagnes par mois** (obligatoire) | **Campagnes > Campagnes** | Temps > **Mois** | Campagne, Type de campagne, Coût, Impr., Clics, Conversions, Valeur de conv., Toutes les conv. |
| 2 | **Termes de recherche** (obligatoire) | **Campagnes > Insights et rapports > Termes de recherche** | aucun (ou Mois) | Terme de recherche, Type de correspondance, Campagne, Groupe d'annonces, Mot clé, Coût, Impr., Clics, Conversions, Valeur de conv. |
| 3 | **Actions de conversion** (obligatoire) | **Objectifs > Conversions > Résumé** | aucun | Action de conversion, **Optimisation de l'action** (Principale/Secondaire), Source, Catégorie de l'action, État du suivi, Conversions, Toutes les conv. |
| 4 | **Mots clés** | **Campagnes > Audiences, mots clés et contenu > Mots clés de recherche** | aucun | Mot clé, Type de correspondance, Campagne, Groupe d'annonces, Coût, Impr., Clics, Conversions, Niveau de qualité |
| 5 | **Annonces** | **Campagnes > Annonces** | aucun | Campagne, Groupe d'annonces, Type d'annonce, Annonce / Titre 1, URL finale, Coût, Impr., Clics, Conversions |
| 6 | **Zones géographiques** | **Rapports prédéfinis > Géographique > Emplacement de l'utilisateur** (ou Campagnes > Lieux > « Emplacements correspondants ») | aucun | Ville (et Région), Campagne, Coût, Impr., Clics, Conversions, Type d'emplacement |
| 7 | **Jour et heure** | **Rapports prédéfinis > Heure > Jour de la semaine** et **Heure de la journée** (ou Campagnes > Calendrier des annonces) | — | Jour de la semaine et/ou Heure de la journée, Coût, Clics, Impr., Conversions |

Conseils :
- Rapport 1 : sans le segment **Mois**, on perd la saisonnalité et les dates de première/dernière activité.
- Rapport 3 : la colonne **Optimisation de l'action** est essentielle pour repérer les fausses conversions
  (ex. « page_view » en principale).
- Rapport 6 : choisis la **ville** comme niveau de détail, c'est ce qui permet de mesurer les dépenses
  hors de la zone de 40 km.

## Lancer l'analyse

```
python3 -I /home/user/Evenox/livrables/scripts/analyse_exports_google_ads.py
```

Puis ouvre `livrables/AUDIT-COMPTE-GOOGLE-ADS.md`. La section « Fichiers lus », à la fin, indique
comment chaque fichier a été reconnu et ce qui manque.
