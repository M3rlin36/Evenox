# Outils de vérification

Deux scripts, en lecture seule. Ils ne modifient rien sur evenox.ca : ils lisent les pages
publiques et vérifient les propositions de `allege/vente/`.

```
pip install beautifulsoup4 lxml
```

## `lire_pages.py` — lire et mesurer

```
python3 lire_pages.py urls.txt          # une URL par ligne ; classe les pages par longueur
python3 lire_pages.py --dump page.html  # affiche le texte d'une page, dans l'ordre d'affichage
```

Une requête à la fois, jamais en parallèle, 2,5 secondes d'attente minimum entre deux, arrêt
immédiat au premier 403 sans réessai. Le pare-feu de l'hébergeur bannit les adresses IP trop
bavardes : ne baissez pas le délai. Les pages lues sont mises en cache dans `/tmp/evenox-html`
(ou le dossier indiqué par la variable `EVENOX_CACHE`), donc une deuxième mesure ne recharge rien.

Le comptage sépare trois zones : le menu du site, la zone éditoriale, et le pied de page. Seule
la zone éditoriale est comptée dans les livrables, puisque c'est la seule qu'un allègement touche.

## `verifier.py` — vérifier les propositions

```
python3 verifier.py
```

Trois contrôles sur chacun des trois fichiers de `allege/vente/` :

1. **Longueur.** Compte les mots du texte allégé et le compare au chiffre annoncé dans le fichier.
2. **Fidélité.** Chaque phrase du texte allégé doit se retrouver mot pour mot dans la page
   d'origine. Une phrase peut être acceptée comme recollage de fragments voisins de la page : un
   titre que le constructeur de pages coupe en trois éléments, ou un prix séparé de son unité. Le
   script affiche alors le détail du recollage, sous `recollé :`. Il n'autorise ni la réécriture,
   ni le changement d'ordre, ni l'ajout d'un mot.
3. **Formulations à relire.** Signale, pour relecture humaine, chaque occurrence de « livraison
   incluse », « livraison gratuite », « montage compris », « tout inclus », « clé en main »,
   « gratuit », « garanti », « Mirabel » et quelques autres. Ce sont des signalements, pas des
   erreurs : les occurrences qui restent dans les livrables sont voulues et expliquées dans la
   section 6 de chaque fichier.

Le script sort avec le code 1 dès qu'un écart de longueur ou de fidélité apparaît. Il a été
éprouvé en modifiant volontairement un prix, un pourcentage de dépôt et en ajoutant une phrase
inventée : les trois ont été détectés.
