# Import des conversions hors ligne (Notion → Google Ads)

**But :** dire chaque vendredi à Google quels clics sont devenus un **lead qualifié** et lesquels sont devenus une **réservation** (avec le montant). Google apprend alors à chercher des clients qui réservent, pas juste des gens qui remplissent un formulaire.

Script : `livrables/scripts/export_conversions_hors_ligne.py` (Python 3, aucune installation).

---

## 1. Configuration unique dans Google Ads (15 min)

Créer **deux** actions de conversion : **Objectifs > Conversions > + Nouvelle action de conversion > Importer > Autres sources de données ou CRM > Suivre les conversions provenant de clics**.

| Réglage | « Lead qualifié » | « Réservation » |
|---|---|---|
| Nom (exactement, avec accents) | `Lead qualifié` | `Réservation` |
| Catégorie | Lead qualifié | Lead converti (ou Achat) |
| Valeur | Valeurs différentes selon la conversion (CAD) | Valeurs différentes selon la conversion (CAD) |
| Nombre | **Une** | **Une** |
| Fenêtre de conversion (clic) | **90 jours** | **90 jours** |
| Objectif | **Secondaire** pendant les 4 premières semaines | **Secondaire** pendant les 4 premières semaines |

- Attendre **4 à 6 h** après la création avant le premier import.
- Après 4 semaines d'imports réguliers (et au moins 3 cycles de vente), passer « Réservation » en **Principale** (et « Lead qualifié » aussi si le volume de réservations est faible).
- Le marquage automatique (auto-tagging) doit être activé, et le formulaire du site doit remplir les champs cachés gclid / gbraid / wbraid (voir `GUIDE-TRACKING-LOI25.md`).

## 2. Les 3 propriétés à ajouter dans Notion (et 1 à remplir)

Dans « ÉVENOX — Leads & Réservations » :

| Propriété | Type | Remplissage |
|---|---|---|
| **GCLID** | Texte | Copié du courriel du formulaire (champ caché). Sans GCLID, le lead ne peut pas être importé. Pour un iPhone sans GCLID, ajouter aussi une propriété texte **GBRAID** (ou WBRAID). |
| **Score** | Sélection : A / B / C / D | A, B ou C = « Lead qualifié » (valeur 300 $ / 150 $ / 50 $). D = non qualifié. |
| **Montant du contrat** | Nombre ($) | Montant réel quand le dépôt est payé. Vide = panier moyen de 1 472 $ (signalé dans le résumé). |
| **Date dernier contact** | Date (**existe déjà**) | À remplir à chaque appel de qualification. Sinon, le script prend la date de création. |

Aussi recommandé : **Campagne** (sélection) et **Motif de perte** (sélection) pour l'analyse (voir `SCRIPTS-LEADS.md` §8). Pour une réservation, remplir **Date réservation** (date du dépôt) : c'est la date envoyée à Google.

## 3. Routine du vendredi (10 min)

1. **Notion** : ouvrir la base > `•••` > **Exporter** > Markdown & CSV > enregistrer le `.csv` (on peut exporter toute la base, le script filtre).
2. **Lancer le script** :
   ```bash
   python3 livrables/scripts/export_conversions_hors_ligne.py ~/Téléchargements/Leads.csv
   ```
   Par défaut : les 7 derniers jours, fichiers dans `donnees/imports-google-ads/`. Options : `--depuis 2026-10-01`, `--sortie DOSSIER`, `--valeurs A=300,B=150,C=50`, `--panier-moyen 1472`.
3. **Lire le résumé** `resume_conversions_AAAA-MM-JJ.txt` : leads ignorés (pas de GCLID, score D, plus de 90 jours, doublon…) et avertissements (montant estimé, lead proche des 90 jours). Corriger Notion au besoin et relancer.
4. **Importer** `conversions_google_ads_AAAA-MM-JJ.csv` : **Objectifs > Conversions > Importations > + > Importer un fichier** (ou **Outils > Gestionnaire de données**, la méthode que Google recommande maintenant). Aperçu, puis **Appliquer**. S'il y a un fichier `..._braid_...csv` (clics iPhone), l'importer de la même façon.

Le fichier respecte le modèle Google « conversions à partir de clics » :

```
Parameters:TimeZone=America/Toronto
Google Click ID,Conversion Name,Conversion Time,Conversion Value,Conversion Currency
Cj0KCQjw...,Lead qualifié,2026-10-03 12:00:00-0400,300,CAD
```

## 4. Vérifier les erreurs

- **Le lendemain** : Importations > cliquer sur l'import > **Erreurs** (télécharger le rapport). Les plus fréquentes :
  - *Nom de conversion introuvable* → le nom ne correspond pas exactement (accent, majuscule) ou l'action a moins de 6 h.
  - *Clic trop ancien / GCLID expiré* → plus de 90 jours : importer chaque semaine, sans faute.
  - *GCLID introuvable* → mauvais compte Google Ads, GCLID mal copié (il est sensible à la casse) ou marquage automatique désactivé.
  - *Conversion antérieure au clic* → corriger la date dans Notion.
- Les chiffres apparaissent en **3 h à 48 h**. Pour comparer avec Notion, utiliser la colonne **« Toutes les conv. (par heure de conv.) »**.
- Réimporter la même ligne ne crée pas de doublon : Google compte une seule fois le même GCLID + nom + date/heure.

## 5. Règles à retenir

- **90 jours** maximum entre le clic et l'import. Le script refuse les leads créés il y a plus de 90 jours et avertit à partir de 80 jours.
- **Pas d'heure dans le futur.** Une date sans heure est envoyée à midi (jamais avant la création du lead).
- **Correction d'un montant** : Google ne permet pas de modifier un import par GCLID avec un numéro de commande. Pour une erreur importante, contacter le soutien Google Ads ou laisser passer (une valeur isolée pèse peu).
- **Courriel et téléphone (conversions améliorées pour les leads)** : seulement avec le consentement prévu par la Loi 25. Option `--coordonnees sha256` (haché, accepté partout) ou `brut` (import manuel seulement, Google les hache dans le navigateur). Option `--consentement` : ajoute la colonne « Ad User Data = Granted ». Attention : avec les coordonnées, la fenêtre recommandée passe à **63 jours**.
- Après 3 semaines manuelles, passer à Zapier (Notion → Google Ads « Send Offline Conversion ») ou à un import planifié dans le Gestionnaire de données.

## Test

`livrables/scripts/test_data_notion/export_notion_test.csv` contient 14 leads fictifs qui couvrent tous les cas :

```bash
python3 livrables/scripts/export_conversions_hors_ligne.py livrables/scripts/test_data_notion/export_notion_test.csv --aujourdhui 2026-10-07 --sortie /tmp/oci_test
```

Résultat attendu : 8 conversions exportées (6 Lead qualifié, 2 Réservation, dont 1 dans le fichier GBRAID), 8 lignes ignorées et 2 avertissements.
