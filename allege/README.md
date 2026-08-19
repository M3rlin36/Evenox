# Allègement des pages evenox.ca

Un fichier par page. Chaque fichier contient, dans cet ordre : l'adresse de la page et le nombre de
mots avant, le texte allégé complet, le nombre de mots après et le pourcentage retiré, la liste des
faits conservés, ce qui a été coupé et pourquoi, et ce qui a été trouvé de faux ou de douteux sans
être corrigé.

| Page | Fichier | Mots avant | Mots après | Retiré |
|---|---|---|---|---|
| https://evenox.ca/ | [accueil.md](accueil.md) | 711 | 281 | 60,5 % |
| https://evenox.ca/forfait/ | [forfait.md](forfait.md) | 449 | 350 | 22,0 % |
| https://evenox.ca/nos-forfaits-tout-inclus/ | [forfaits-tout-inclus.md](forfaits-tout-inclus.md) | 1 589 | 715 | 55,0 % |
| https://evenox.ca/forfaits-fete-enfants/ | [forfaits-fete-enfants.md](forfaits-fete-enfants.md) | 1 210 | 459 | 62,1 % |

La page d'accueil est à valider en premier, seule. C'est celle qui a été travaillée le plus à fond :
elle contient en plus le relevé, au pixel, de ce qu'un visiteur voit dans le premier écran sur
ordinateur (1440 px) et sur téléphone (375 px), avant et après.

## Trois choses à trancher avant de publier quoi que ce soit

**1. La durée.** Aucune des quatre pages n'écrit la durée d'un seul prix, à une exception près :
l'accueil dit « Tarif : fixe jusqu'à 48 h (1–2 jours, même prix) » à propos de la réservation en
ligne, sans qu'on sache si cela s'applique aux prix affichés. Une trentaine de prix affichés sur les
quatre pages, une seule durée. C'est le problème de fond, et il ne se règle pas en coupant.

**2. Ce qui est compris dans les forfaits.** Les pages /nos-forfaits-tout-inclus/ et
/forfaits-fete-enfants/ annoncent la livraison, l'installation et le démontage comme compris dans le
prix, ainsi qu'un remplacement d'équipement pendant l'événement. Ces formulations sont interdites
par les règles de travail, quelle que soit la source. Je les ai donc retirées, ce qui veut dire que
les textes allégés de ces deux pages promettent moins que les pages actuelles. Chacun des deux
fichiers commence par un avertissement à ce sujet. Rien ne devrait être publié avant que l'offre
réelle soit établie.

**3. Le dépôt et le solde.** Trois versions coexistent sur le site : 20 % non remboursable mais
crédité 12 mois (/forfait/), « le solde est dû avant l'événement » (/nos-forfaits-tout-inclus/), et
« Paiement 100% à la réservation, non remboursable » pour l'Express 72h (accueil). Aucune n'a été
modifiée.

## Le prix en litige

Le désaccord 126/252/504 $ pour 24 h contre 174/348/696 $ pour 48 h n'est tranché nulle part, et ne
l'est pas ici. Aucun de ces montants n'apparaît sur les quatre pages lues ; la chaise Chiavari n'y
est pas nommée. Aucun des quatre fichiers ne prend parti. Le seul élément relevé, signalé dans
accueil.md et dans forfait.md : l'accueil énonce une règle générale à 48 h, et /forfait/ décrit un
cadre de ramassage (la veille au soir, retour le lendemain matin) qui n'entre pas dans 24 h au sens
strict. Ce sont des éléments pour la décision, pas la décision.

## Méthode

Les pages publiques ont été lues, jamais modifiées. Aucun compte, aucune commande, aucune
coordonnée, aucun moyen de paiement. Les requêtes ont été faites une à la fois, espacées d'au moins
une seconde : dix requêtes au total (quatre pages, trois feuilles de style et trois images),
toutes en HTTP 200, aucun 403.

Le comptage des mots couvre le texte éditorial de chaque page dans l'ordre de lecture, sans les
libellés du menu de navigation ni les listes de liens du pied de page, mais avec la ligne d'adresse
du pied de page. Chaque ligne conservée a été comparée mécaniquement au texte d'origine ; les seuls
écarts sont des intertitres raccourcis et des juxtapositions de fragments existants, tous déclarés
dans les fichiers.
