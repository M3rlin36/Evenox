# Évenox — Audit de la boutique en direct (20 septembre 2026)

Relevé fait sur `evenox.booqableshop.com` et `evenox.ca` avec un navigateur, format téléphone, en français. Catalogue tiré de l'API Booqable publique : 1 347 fiches, **513 variantes de produits actives et visibles** réparties en 270 groupes, **105 forfaits actifs**, 17 collections, 369 articles dans « All products ».

Cet audit répond à une seule question : **si je mets 1 500 $ de pub le mois prochain, où va se perdre l'argent ?** Réponse : dans les forfaits. Voici les cinq défauts, du plus coûteux au moins coûteux.

---

## Défaut no 1 — Les forfaits n'ont pas de prix fixe, et trois d'entre eux se vendent sous le prix annoncé

Le prix affiché sur la boutique est **calculé à partir de la somme des composantes**, pas fixé sur le forfait. Résultat : il dérive tout seul chaque fois qu'un prix de composante change, et il ne correspond plus au prix annoncé sur `evenox.ca`.

| Forfait | Prix annoncé (evenox.ca et URL) | Prix affiché sur la boutique | Écart |
|---|---|---|---|
| Party de Bureau Clé en Main | 1 995 $ | à partir de 1 674,50 $ | **− 320,50 $** |
| Gala Signature | 2 495 $ | à partir de 2 174,91 $ | **− 320,09 $** |
| 5 à 7 d'équipe | 1 195 $ | à partir de 1 003,00 $ | **− 192,00 $** |
| Mariage Signature | 1 899 $ | à partir de 1 899,07 $ | + 0,07 $ |
| Soirée Signature | 1 449 $ | à partir de 1 448,94 $ | − 0,06 $ |
| Décor WOW | 899 $ | 899,00 $ | conforme |
| Jeu Méga Fête | 1 099 $ | 1 099,00 $ | conforme |
| Jeux Premium | 599 $ | 599,00 $ | conforme |
| Jeux Essentiel | 499 $ | 499,00 $ | conforme |
| Zone Arcade 3 jeux | 299 $ | 299,00 $ | conforme |

Deux preuves que le prix est calculé et non fixé : **1 899,07 $** et **1 448,94 $**. Un prix positionné premium ne finit jamais par 07 cents. Ce sont des sommes d'articles.

Nuance honnête : le prix affiché porte la mention « à partir de » avec la durée **1 jour**. Il est possible que 1 995 $ soit le tarif 2 jours. Ça ne change pas le problème : **le client voit un nombre dans la pub et un autre nombre sur la page.** Google Ads refuse les annonces dont le prix ne se retrouve pas sur la page d'atterrissage, et un écart de 320 $ tue la confiance avant même le refus.

**Correction, 30 minutes, à faire avant toute dépense publicitaire.** Booqable → *Produits* → chaque forfait → *Tarification* → choisir **Prix fixe** et inscrire le prix annoncé, tarif 2 jours. Dix forfaits, trois minutes chacun. Tant que ce n'est pas fait, aucune pub ne pointe vers un forfait.

---

## Défaut no 2 — Impossible d'acheter un forfait sans remplir jusqu'à 13 menus déroulants

C'est le vrai plafond de ton panier en ligne. Pour mettre le Forfait Party de Bureau au panier, le client doit choisir une variante dans **13 menus déroulants** séparés, dont huit fois « quelle lettre ? » dans une liste de 27 entrées. Sur téléphone. Le bouton reste bloqué sur *« Choisissez une variante à ajouter à votre panier »* tant que les 13 ne sont pas remplis.

| Forfait | Menus à remplir avant de pouvoir payer |
|---|---|
| Party de Bureau — 1 995 $ | **13** |
| Gala Signature — 2 495 $ | **13** |
| 5 à 7 d'équipe — 1 195 $ | **10** |
| Mariage Signature — 1 899 $ | 7 |
| Jeux Premium — 599 $ | 6 |
| Soirée Signature — 1 449 $ | 5 |
| Décor WOW — 899 $ | 5 |
| Jeux Essentiel — 499 $ | 5 |
| Jeu Méga Fête — 1 099 $ | 5 |
| Zone Arcade — 299 $ | 3 |

Ça se voit dans tes ventes : sur 12 mois, **4 commandes seulement au-dessus de 2 500 $ et 7 entre 1 500 $ et 2 500 $**, pendant que le panier moyen en ligne plafonne à 146,73 $. Les forfaits ne se vendent pas en ligne parce qu'ils ne s'achètent pas en ligne.

**Correction, la seule qui tienne : fige le mot.** Un forfait clé en main ne demande pas au client de composer. Dans Booqable, remplace les huit `Marquee Letter` à variante libre par **huit lettres fixes**, et nomme le forfait avec son mot :

| Forfait | Mot figé dans le forfait | Menus restants |
|---|---|---|
| Party de Bureau — 1 995 $ | **M E R C I** (5 lettres) | 0 |
| Gala Signature — 2 495 $ | **B R A V O** (5 lettres) | 0 |
| Mariage Signature — 1 899 $ | **L O V E** (4 lettres) | 0 |
| Soirée Signature — 1 449 $ | **L O V E** (4 lettres) | 0 |
| 5 à 7 d'équipe — 1 195 $ | 2 jeux fixes au lieu de « au choix » | 0 |

Le client qui veut un autre mot passe par le configurateur à la carte, ou t'appelle. Le forfait, lui, s'achète en deux clics. C'est ça, « clé en main » : **zéro décision à prendre**. Et ça règle du même coup le risque de stock, puisque tu choisis toi-même des lettres que tu possèdes en double.

---

## Défaut no 3 — Les prix sont affichés en format américain

Sur **100 % des pages produit**, le prix sort du composant Booqable en anglais américain : symbole devant, point décimal, virgule de milliers.

| Page | Ce que le client voit | Ce qu'il devrait voir |
|---|---|---|
| Lettre lumineuse | `$70.00` | `70,00 $` |
| Package Marquee LOVE | `$280.00` | `280,00 $` |
| Forfait Gala Signature | `$2,174.91` | `2 174,91 $` |
| Forfait Party de Bureau | `$1,674.50` | `1 674,50 $` |

C'est la même cause que le calendrier en anglais corrigé le 19 septembre : la boutique tourne en locale `en-US`. Le correctif de langue déjà écrit (section 6.2 du plan) force `locale: 'fr'` et règle le calendrier ; la devise, elle, se règle dans Booqable → *Paramètres* → *Société* → **Région : Canada (français)**. *10 minutes.*

Sur une page qui vend 2 495 $, un prix écrit à l'américaine dit « site générique » au moment exact où le client hésite.

---

## Défaut no 4 — Durée par défaut incohérente entre les lettres et les forfaits

| Page | Durée proposée par défaut |
|---|---|
| Lettre lumineuse, Package LOVE | 2 jours |
| Tous les forfaits tout inclus | **1 jour** |

Tes ventes réelles : **53 % des locations durent 1 jour, 34 % en durent 2** — 87 % du total. Mais un forfait d'événement complet implique la veille et le jour même. Mettre 1 jour par défaut sur un gala, c'est sous-tarifer et forcer une modification manuelle.

**Correction : passe tous les forfaits à 2 jours** en même temps que tu fixes leur prix (défaut no 1). Même écran, même manipulation.

---

## Défaut no 5 — Le V est encore placé avant le U

Dans les 27 variantes de `Marquee Letter`, l'ordre est `… S, T, V, U, W, X, Y, Z, &`. Le correctif est écrit et testé (section 6.2 du plan, bloc combiné), mais **il n'est pas encore installé sur la boutique**. Il se colle dans Booqable → *Paramètres* → *Boutique en ligne* → *Code personnalisé*, en même temps que le correctif de langue. *5 minutes, les deux ensemble.*

---

## Ce que le catalogue contient vraiment

### Produits d'appel (les lettres)

| Produit | Variantes | Prix |
|---|---|---|
| Marquee Letter | 27 (A–Z + &) | 70 $ |
| Marquee Letter Multicolore | 26 | 80 $ |
| Chiffres Lumineux Géants | 10 (0–9) | 70 $ |
| Mini Lettres Lumineuses | 15 | 50 $ |
| Mini Numéros Illuminés | 10 | 50 $ |
| Mini Marquee | 5 | 50 $ |

### Forfaits de lettres déjà prêts

| Forfait | Prix | Prix par lettre |
|---|---|---|
| 4 lettres lumineuses | 240 $ | 60 $ |
| 6 lettres lumineuses | 330 $ | 55 $ |
| 8 lettres lumineuses | 400 $ | 50 $ |
| 10 lettres lumineuses | 450 $ | 45 $ |
| Package Marquee LOVE | 280 $ (2 jours) | 70 $ |

Ces quatre forfaits de lettres sont **corrects, chiffrés, dégressifs et sans menu à remplir**. Ce sont eux qu'il faut mettre en pub, pas la fiche « lettre à 70 $ » : le panier passe de 70 $ à 240–450 $ pour le même clic.

### Logistique — ce que la livraison coûte vraiment

| Service | Prix |
|---|---|
| Ramassage en magasin (Sainte-Thérèse) | 0 $ |
| Livraison Standard Aller Simple | 120 $ |
| Ramassage Standard du matériel | 120 $ |
| Installation Standard, 1 à 20 articles | 60 $ |
| Installation Standard, 20 à 100 articles | 150 $ |
| Installation Standard, 100 à 200 articles | 200 $ |
| Installation Standard, 200 articles et plus | 400 $ |

**Une commande livrée et installée porte 240 $ à 640 $ de logistique avant même le matériel.** C'est ce qui explique le panier moyen de 618,85 $ en livraison contre 204,07 $ en ramassage. L'ancienne grille au kilomètre (100 $ / 170 $ / 240 $) est **archivée** — le plan de pub doit citer la grille ci-dessus, pas l'ancienne.

### Le haut de gamme à la carte

| Produit | Prix |
|---|---|
| Photobooth avec Animation | 600 $ à 1 499 $ |
| Guess Who Géant | 150 $ à 400 $ |
| Animation | jusqu'à 320 $ |
| Jeu Gonflable Mickey Mouse | 280 $ |
| Machine à Slush | 100 $ à 250 $ |

---

## Ordre d'exécution — 1 h 20, avant la première piastre de pub

| # | Geste | Où | Temps | Gain |
|---|---|---|---|---|
| 1 | Prix fixe sur les 10 forfaits, tarif 2 jours | Booqable → Produits → Tarification | 30 min | Récupère 320 $ par gala et 320 $ par party de bureau vendu ; aligne la pub et la page |
| 2 | Figer le mot des 5 gros forfaits (MERCI, BRAVO, LOVE) | Booqable → Produits → Contenu du forfait | 25 min | Fait passer le forfait de 13 menus à 0 : c'est ce qui débloque le panier en ligne |
| 3 | Région Canada (français) | Booqable → Paramètres → Société | 10 min | Prix en `2 495,00 $` au lieu de `$2,495.00` |
| 4 | Coller le bloc de correctifs langue + ordre des lettres | Booqable → Boutique en ligne → Code personnalisé | 5 min | Calendrier en français, lettres en ordre alphabétique |
| 5 | Corriger la description du Party de Bureau | Booqable → Produits → Description | 10 min | Elle promet « 5 jeux géants » que le forfait ne contient pas |

**Tant que les points 1 et 2 ne sont pas faits, aucune campagne ne pointe vers une page de forfait.** Les pubs restent sur les forfaits de lettres (240 $ à 450 $), qui eux fonctionnent.
