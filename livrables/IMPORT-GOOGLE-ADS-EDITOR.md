# Importer les campagnes dans Google Ads Editor

*Fichiers : dossier `google-ads-editor/`, encodés en UTF-16 et séparés par des tabulations (format « Texte Unicode » recommandé par Google). Pour régénérer après un changement de prix ou d'URL : `python3 -I scripts/build_google_ads.py`.*

1. **Installer / mettre à jour** Google Ads Editor (https://ads.google.com/intl/fr_ca/home/tools/ads-editor/). Dans Aide > À propos, vérifier qu'il s'agit de la version la plus récente (2.11 ou plus).
2. **Ajouter le compte** : Comptes > Ajouter, puis se connecter avec le compte Google qui a accès au compte Google Ads retenu (un seul des deux comptes AW-…).
3. **Télécharger le compte** : sélectionner le compte, puis cliquer sur **Obtenir les changements récents > Plus de données (statistiques)** (ou « Télécharger »). Attendre la fin du téléchargement.
4. **Importer les fichiers dans cet ordre** (Compte > Importer > À partir d'un fichier…) :
   - Option rapide : **0_import_complet.csv** seul. Il contient tout.
   - Option pas à pas (plus facile à vérifier) : 1_campagnes → 2_groupes_annonces → 3_mots_cles → 4_annonces_rsa → 5_mots_cles_negatifs → 6_liens_annexes → 7_accroches.
   - Pour chaque fichier : dans l'aperçu, vérifier que chaque en-tête de colonne est bien reconnu (aucun « Ne pas importer » non voulu), puis cliquer sur **Importer**.
   - Lire la liste des erreurs et avertissements, puis cliquer sur **Vérifier les modifications importées** et sur **Conserver les modifications proposées**.
   - Après chaque import, accepter ou refuser les modifications proposées avant d'importer le fichier suivant (le menu Importer est grisé tant que des propositions sont en attente).
5. **Vérifier** dans Editor :
   - 6 campagnes, dont 2 en pause : S-EN et Québec-Lévis.
   - Budgets : 10 / 165 / 80 / 45 $ actifs, soit 300 $.
   - Les accents s'affichent correctement (é, è, à).
   - Les épinglages sont présents dans les annonces.
   - Les négatifs sont au **niveau campagne** (Mots-clés et ciblage > Mots-clés, négatifs).
6. **Régler à la main** (PLAN, section 3) :
   - Zones géographiques et option « Présence ».
   - Réseau de Recherche Google seulement (décocher partenaires et Display).
   - AI Max désactivé, éléments créés automatiquement OFF.
   - Lier la fiche Google Business Profile (élément de lieu).
   - Éléments de prix.
7. **Vérifier les modifications** (bouton « Vérifier les modifications ») et corriger les erreurs signalées.
8. **Publier** : cliquer sur **Publier** (Post), choisir « Ce compte », puis confirmer.
9. Dans l'interface Google Ads, revenir 24 h plus tard pour vérifier l'état d'approbation des annonces et des éléments.
