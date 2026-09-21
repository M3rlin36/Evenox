# Import WordPress — les 48 articles

`evenox-48-articles.xml` — fichier WXR standard, **48 articles en mode brouillon**, prêts à importer dans WordPress. XML validé, aucun doublon de slug.

## Ce que contient chaque article

- Titre, contenu complet en blocs Gutenberg (paragraphes, titres H2, tableaux, listes, citations)
- Slug SEO optimisé
- Titre SEO, meta description et mot-clé principal **Yoast** déjà remplis
- Catégorie « Guides »
- Liens internes en place vers tes pages de forfaits et de villes
- **Statut : brouillon** — rien ne se publie tout seul

## Comment importer (2 minutes)

1. WP Admin → **Outils → Importer**
2. Sous « WordPress », clique **Installer maintenant** (si ce n'est pas déjà fait), puis **Lancer l'importateur**
3. Choisis le fichier `evenox-48-articles.xml` → **Téléverser et importer**
4. Assigne les articles à ton compte auteur
5. **Ne coche pas** « Télécharger et importer les fichiers joints » (il n'y a pas d'images dans le fichier)
6. Les 48 articles apparaissent dans **Articles → Tous les articles**, en brouillon

## Avant de publier chaque article — 3 vérifications

1. **Les prix** — remplace les fourchettes par tes tarifs réels (elles sont estimées)
2. **Les tableaux de lieux** des articles sur les salles (Rive-Nord, Laval, Montréal, Terrebonne, Blainville) — remplis-les avec des salles réelles que tu desservis, jamais de noms inventés
3. **Image à la une** — ajoute une photo de tes événements réels

## Rythme de publication recommandé

Ne publie pas les 48 d'un coup : Google traite mal une publication massive sur un site qui publiait un article par mois. **4 par semaine pendant 12 semaines.**

Commence par les articles « prix » (ils se positionnent le plus vite), et publie les saisonniers à leur mois — voir `../articles/000-INDEX-ET-SUIVI.md`.

## Si l'import échoue

- Fichier trop lourd → augmente `upload_max_filesize` ou importe via **WP All Import**
- Erreur de mémoire → importe en deux fois (le fichier peut être coupé après n'importe quelle balise `</item>`)
- Blocs qui s'affichent mal → vérifie que ton thème Divi est en mode compatible avec l'éditeur de blocs pour les articles
