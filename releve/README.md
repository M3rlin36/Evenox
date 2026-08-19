# Relevé Évenox — 19 août 2026

Relevé de deux défauts sur les pages publiques d'evenox.ca :
la survivance de la police « Luckiest Guy » (`POLICE.md`) et les promesses de livraison
interdites (`PROMESSES.md`). Aucune modification n'a été faite sur le site : lecture seule,
sans connexion à aucun compte.

## Ce qui a été relevé

- « Luckiest Guy » : **191** occurrences sur **107** pages (sur 495 lues). Détail dans `POLICE.md`.
- Promesses interdites, tournures affirmatives : **154** relevés sur **68** pages. Détail dans `PROMESSES.md`.
- S'y ajoutent, en annexe de `PROMESSES.md` : **46** titres de FAQ interrogatifs, dont la réponse
  servie sous le titre donne le tarif réel, et **88** phrases voisines (relevées sur 181 pages) qui
  emploient d'autres mots — « installation », « ramassage », « support » — et qu'il revient à Évenox de trancher.

## Ce qui a été lu

- Adresses publiques listées par `sitemap_index.xml` et les six sitemaps qu'il annonce : **495**.
- Pages demandées : **495**.
- Pages lues et analysées (réponse 200) : **495**.
- Pages qui n'ont pas pu être lues : **0**. Aucune réponse 403, 404, 429 ni erreur réseau.

Codes de réponse rencontrés : 200 (495).

## Ce qui n'est pas fini

- Toutes les adresses des sitemaps ont été demandées.
- Le relevé porte sur le HTML servi tel quel. Ce qu'un script ajoute après le chargement
  dans le navigateur n'est pas couvert : une occurrence de « Luckiest Guy » ou une promesse
  injectée en JavaScript échapperait au comptage.
- Les feuilles de style externes (fichiers `.css` du thème et des extensions) n'ont pas été
  téléchargées ni analysées. Le comptage porte sur le HTML de la page : blocs `<style>`,
  attributs `style`, attributs Divi et liens Google Fonts.
- Les images, les PDF et les vidéos n'ont pas été examinés. Une promesse écrite dans un visuel
  n'apparaîtrait pas ici.
- Seul le domaine `evenox.ca` en français a été parcouru, à partir des sitemaps. Une page publique
  absente des sitemaps n'a pas été vue.
- La recherche des promesses repose sur des expressions régulières listées dans `PROMESSES.md`.
  Une formulation qui dirait la même chose avec d'autres mots encore peut avoir été manquée :
  le relevé donne un plancher, pas un compte définitif.

## Comment refaire le relevé

Les trois outils utilisés sont dans `outils/` : `fetch.sh` (collecte, une requête à la fois),
`analyse.py` (comptage et repérage) et `rapport.py` (écriture des trois fichiers).
S'y ajoutent `journal-http.log` (code de réponse et taille reçue, une ligne par adresse)
et `resultats.json` (le relevé brut, page par page, dont sont tirés les deux tableaux).

## Rythme de lecture

- Une requête à la fois, jamais en parallèle, avec une pause de 2,5 secondes entre deux.
- Le collecteur était réglé pour s'arrêter net à la première réponse 403 ou 429.

## Ce qui n'a pas été fait, volontairement

- Rien n'a été modifié sur evenox.ca.
- Aucune connexion à un compte, aucun accès à l'administration.
- Aucun prix, aucune distance et aucun délai n'ont été déduits ou reconstitués : les tableaux
  ne citent que ce qui est écrit dans le HTML servi.
