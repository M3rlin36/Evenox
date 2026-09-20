# Évenox — Ce que tes ventes réelles disent (export Booqable, 20 septembre 2026)

Source : export de commandes Booqable du 20 septembre 2026, 615 commandes, créées du 14 juin 2025 au 20 septembre 2026, événements du 30 décembre 2025 au 25 décembre 2026. Tout ce qui suit est **mesuré**, pas supposé. Les montants sont hors taxes (`grand_total`) sauf mention contraire.

---

## 1. Les sept chiffres qui comptent

| Mesure | Valeur réelle | Ce que le plan v2 supposait |
|---|---|---|
| Panier moyen, toutes commandes, 12 mois | **325,20 $ HT** (médiane 191,25 $) | 420 $ |
| Panier moyen **des commandes passées en ligne** | **146,73 $ HT** (6 derniers mois) | 420 $ |
| Panier moyen hors ligne (téléphone, devis, comptoir) | **417,47 $ HT** | — |
| Panier moyen **en livraison** | **618,85 $ HT** | — |
| Panier moyen **en ramassage** | **204,07 $ HT** | — |
| Chiffre d'affaires confirmé, 12 mois | **168 453 $ HT** (192 984 $ TTC) | inconnu |
| Rythme actuel, 6 derniers mois | **20 892 $ HT / mois**, 65 commandes / mois | objectif 50 000 $/mois |

**La conclusion en une phrase : ta boutique en ligne vend à 147 $ pendant que ton téléphone vend à 417 $ et ta livraison à 619 $.** C'est là que le plan de pub doit être corrigé, pas ailleurs.

---

## 2. Volume et argent

### 2.1 Statuts

| Statut | Commandes | Part |
|---|---|---|
| Reserved | 484 | 78,7 % |
| Draft (devis non confirmé) | 96 | 15,6 % |
| Stopped (terminée) | 22 | 3,6 % |
| Started (en cours) | 13 | 2,1 % |

Confirmées (Reserved + Started + Stopped) : **519 commandes**. Taux de confirmation des devis sur 12 mois : **84,4 %**. Il se dégrade avec le volume : 93 % en avril, 89 % en mai, 85 % en juin, 80 % en juillet, 86 % en août.

### 2.2 Les devis perdus sont tes plus gros paniers

| Groupe | Commandes | CA | Panier moyen |
|---|---|---|---|
| Confirmées | 516 | 168 763 $ | 327,06 $ |
| **Drafts (non confirmés)** | **94** | **63 315 $** | **673,57 $** |
| dont tag « soumission auto » | 27 | 16 716 $ | 619,13 $ |

**63 315 $ de devis dorment en Draft, à un panier moyen 2,1 fois supérieur à tes commandes confirmées.** Relancer ces devis coûte 0 $ de pub. C'est la première source de revenu du trimestre, avant toute campagne.

### 2.3 Répartition par taille de commande (confirmées, HT)

| Tranche | Commandes | Part des commandes | CA | Part du CA |
|---|---|---|---|---|
| 0 – 100 $ | 147 | 28,5 % | 7 800 $ | 4,6 % |
| 100 – 200 $ | 110 | 21,3 % | 15 636 $ | 9,3 % |
| 200 – 300 $ | 66 | 12,8 % | 15 788 $ | 9,4 % |
| 300 – 500 $ | 93 | 18,0 % | 36 731 $ | 21,8 % |
| 500 – 750 $ | 54 | 10,5 % | 30 958 $ | 18,3 % |
| 750 – 1 000 $ | 16 | 3,1 % | 13 471 $ | 8,0 % |
| 1 000 – 1 500 $ | 19 | 3,7 % | 22 532 $ | 13,4 % |
| 1 500 – 2 500 $ | 7 | 1,4 % | 13 569 $ | 8,0 % |
| 2 500 $ et plus | 4 | 0,8 % | 12 279 $ | 7,3 % |

**La moitié de tes commandes (50 %) font 14 % de ton chiffre.** Les commandes de 500 $ et plus : 19,4 % des commandes, **55 % du CA**. Percentiles : p75 = 427 $, p90 = 660 $, p95 = 1 040 $, max 3 584 $.

---

## 3. En ligne contre hors ligne : l'écart qui décide du plan

Le tag `webshop` marque les commandes passées seules sur la boutique. 219 commandes sur 12 mois, **43 % des commandes des 6 derniers mois**.

| 6 derniers mois (avril – septembre 2026) | Commandes | CA | Panier moyen |
|---|---|---|---|
| Total confirmé | 393 | 118 039 $ | 300,35 $ |
| Passées en ligne (`webshop`) | 170 (43 %) | 24 943 $ (21 %) | **146,73 $** |
| Hors ligne (téléphone, devis, comptoir) | 223 (57 %) | 93 096 $ (79 %) | **417,47 $** |

Et à l'intérieur du webshop :

| Mode | Commandes | Panier moyen | CA |
|---|---|---|---|
| Ramassage en ligne | 201 (92 %) | 119,52 $ | 24 024 $ |
| **Livraison en ligne** | **17 (8 %)** | **418,71 $** | 7 118 $ |

Contre l'ensemble des commandes confirmées (tous canaux) :

| Mode | Commandes | Panier moyen | CA |
|---|---|---|---|
| Ramassage | 363 (70 %) | 204,07 $ | 74 078 $ |
| **Livraison** | **153 (30 %)** | **618,85 $** | **94 685 $** |

**La livraison, c'est 30 % des commandes et 56 % du chiffre.** En ligne, elle ne représente que 8 % des commandes. C'est le trou le plus cher du site.

---

## 4. Paiement : le dépôt de 20 % n'existe pas dans les faits

| Champ mesuré | Résultat |
|---|---|
| `deposit_type` sur les commandes webshop | `none` sur **100 %** (218/218) |
| Commandes webshop payées à 100 % au moment de l'export | **198 / 218 (91 %)** |
| Commandes webshop payées entre 15 % et 30 % | 17 (8 %) |
| Commandes hors webshop payées à 100 % | 215 / 298 (72 %) |
| Commandes hors webshop payées à 0 % | 14 % |
| Commandes avec un dépôt Booqable configuré | 19 sur 519 (3,7 %) |

**Conséquence directe sur le marquage :** l'événement `Purchase` doit porter la **valeur totale hors taxes de la commande**, et c'est bien ce qui est encaissé dans 91 % des cas en ligne. Le plan avait raison sur la valeur à envoyer, mais pour la mauvaise raison : ce n'est pas « 20 % encaissés, 100 % déclarés », c'est **100 % encaissés**. L'argent rentre au complet au clic. Ton délai de paiement en ligne est excellent ; c'est ton hors-ligne qui traîne (14 % à 0 % payé).

---

## 5. Délai d'achat : tu vends à très court terme

Délai entre la création de la commande et la date de l'événement, commandes confirmées :

| Repère | Valeur |
|---|---|
| Médiane, tous canaux | **10 jours** |
| Médiane, commandes en ligne | **5 jours** |
| Réservations à 2 jours ou moins de l'événement | 27,8 % |
| À 7 jours ou moins | **45,0 %** |
| À 14 jours ou moins | 58,4 % |
| À 30 jours ou moins | 75,1 % |
| À plus de 90 jours | 6,0 % |

**Presque une commande sur deux est prise dans les 7 jours avant l'événement.** C'est une excellente nouvelle pour la publicité : le retour se mesure en jours, pas en trimestres. Une fenêtre de conversion de 7 jours dans Meta et Google capte l'essentiel; une fenêtre de 30 jours capte 75 %.

---

## 6. Durée, jours, saison

### 6.1 Durée de location

| Durée | Commandes | Part |
|---|---|---|
| 1 jour | 275 | 53,3 % |
| 2 jours | 176 | 34,1 % |
| 3 jours | 40 | 7,8 % |
| 4 jours et plus | 25 | 4,8 % |

**87 % des locations durent 1 ou 2 jours.** Ça confirme que la durée par défaut du panier (actuellement 1 jour côté serveur) mérite d'être réglée à 2 jours : c'est la durée qui rapporte le plus et 34 % des clients la choisissent déjà à la main.

### 6.2 Jour de l'événement

| Jour | Commandes | CA |
|---|---|---|
| Vendredi | 162 | 50 429 $ |
| Samedi | 168 | 44 716 $ |
| Jeudi | 57 | 22 648 $ |
| Mercredi | 55 | 22 050 $ |
| Dimanche | 34 | 8 160 $ |
| Mardi | 22 | 7 846 $ |
| Lundi | 21 | 12 884 $ |

**Vendredi + samedi = 64 % des commandes et 56 % du CA.** Le mercredi et le jeudi portent du corporatif (panier moyen 401 $ et 397 $, au-dessus de la moyenne).

### 6.3 Saisonnalité par mois d'événement (confirmé)

| Mois de l'événement | Commandes | CA |
|---|---|---|
| Décembre 2025 | 9 | 1 200 $ |
| Janvier 2026 | 20 | 4 282 $ |
| Février 2026 | 29 | 7 370 $ |
| Mars 2026 | 26 | 9 363 $ |
| Avril 2026 | 42 | 11 931 $ |
| Mai 2026 | 68 | 20 424 $ |
| **Juin 2026** | **92** | **36 826 $** |
| Juillet 2026 | 68 | 14 347 $ |
| **Août 2026** | **79** | **27 134 $** |
| Septembre 2026 | 63 | 20 938 $ |
| Octobre 2026 (en cours) | 12 | 4 956 $ |
| Novembre 2026 (en cours) | 4 | 4 842 $ |
| Décembre 2026 (en cours) | 7 | 5 122 $ |

Pic en juin (bals, fins d'année scolaire, mariages), creux de janvier à mars. Octobre à décembre 2026 n'est pas encore rempli — à 10 jours de délai médian, **il se remplira surtout en octobre et novembre**. C'est exactement la fenêtre du test publicitaire.

---

## 7. Clients

| Mesure | Valeur |
|---|---|
| Clients uniques (commandes confirmées) | 502 |
| Clients avec plus d'une commande | **16 (3,2 %)** |
| Commandes par client | 1,03 |
| Courriels uniques | 482 |
| Commandes sans courriel | 8 |
| Commandes sans téléphone | 78 (15 %) |

**Le réachat est quasi nul : 3,2 %.** Ça veut dire deux choses. Un : une acquisition payante doit être rentable **dès la première commande**, il n'y a pas de valeur à vie pour rattraper un CPA trop élevé. Deux : 482 courriels de clients passés ne sont pas travaillés — c'est une liste gratuite pour les partys de bureau de décembre et les mariages de l'été prochain.

### 7.1 Coupons

29 commandes avec coupon, **1 180 $ de remises** sur 12 mois. `EVENOX10` : 27 usages. Le rabais n'est pas un moteur de vente chez toi — inutile d'en faire l'angle des pubs.

---

## 8. Où tu livres

159 adresses de livraison géolocalisées sur 168.

| Ville | Livraisons | Part | CA |
|---|---|---|---|
| Montréal | 47 | 29,6 % | 36 026 $ |
| Laval | 20 | 12,6 % | 7 614 $ |
| Blainville | 17 | 10,7 % | 9 916 $ |
| Sainte-Thérèse | 7 | 4,4 % | 2 423 $ |
| Lorraine | 6 | 3,8 % | 3 938 $ |
| Terrebonne | 6 | 3,8 % | 2 430 $ |
| Mirabel | 5 | 3,1 % | 3 244 $ |
| Boisbriand | 4 | 2,5 % | 2 099 $ |
| Repentigny | 3 | 1,9 % | 1 384 $ |
| Deux-Montagnes | 3 | 1,9 % | 912 $ |
| Brossard | 2 | 1,3 % | 1 775 $ |
| Saint-Jérôme | 2 | 1,3 % | 598 $ |

Codes postaux les plus fréquents : J7C (Blainville, 14), J7E (Saint-Eustache, 8), J6Z (Sainte-Anne-des-Plaines / Terrebonne, 6), H3B (centre-ville de Montréal, 5), H2Y, H7G, J7R, H3C, J7J, J7H (4 chacun).

**Montréal fait 30 % des livraisons et 38 % du CA livré, avec le plus gros panier moyen de la liste (767 $).** Le ciblage géographique du plan (rayon de 35 km centré sur Sainte-Thérèse) couvre bien ce territoire, mais Montréal mérite son propre ensemble au budget : c'est là que sont les gros paniers.

---

## 9. Ce que ça change dans le plan de pub — la décision

### 9.1 Le calcul qui tranche

Plafond de coût d'acquisition soutenable, à 25 % du panier hors taxes (seuil standard en location; **à confirmer avec ta marge réelle**) :

| Type de commande | Panier moyen réel | CPA plafond à 25 % | Le CPA de 105 $ du plan tient-il ? |
|---|---|---|---|
| Commande en ligne actuelle | 146,73 $ | **37 $** | **Non** — tu perds 68 $ par vente |
| Commande moyenne tous canaux | 325,20 $ | **81 $** | Non, de justesse |
| Commande en livraison | 618,85 $ | **155 $** | **Oui, largement** |
| Devis Draft moyen | 673,57 $ | **168 $** | Oui |

**Décision : les campagnes ne doivent pas pousser « une lettre à 70 $ ». Elles doivent pousser le panier livré.** Envoyer du trafic payant vers la fiche produit d'une lettre à 70 $, avec le ramassage en option par défaut, c'est acheter des commandes de 120 $ à 105 $ pièce. Le même dollar envoyé vers un forfait livré achète des commandes de 419 $ à 619 $.

### 9.2 Les quatre corrections à appliquer au plan v2

1. **Cible de campagne : la commande livrée, pas la commande.** Page d'atterrissage = forfaits et configurateur, jamais la fiche d'une lettre seule. La lettre reste l'image de la pub; elle n'est plus la destination du clic.
2. **Minimum de commande pour la livraison.** Tes 17 livraisons en ligne font 419 $ de panier moyen contre 120 $ en ramassage : le mode de livraison est déjà un filtre de qualité. Affiche « livraison et installation à partir de 100 $, commande minimum de 250 $ » et tu montes le panier en ligne sans dépenser une piastre.
3. **Objectif recalé sur le réel.** Le plan visait 50 000 $/mois. Ton rythme réel est de 20 892 $/mois sur 6 mois. L'objectif de la campagne test n'est pas de tripler : c'est d'ajouter **5 000 $ à 7 000 $ HT par mois en commandes livrées**, soit 10 à 14 commandes livrées mensuelles.
4. **Relance des 96 devis Draft avant la première piastre de pub.** 63 315 $ à 674 $ de panier moyen, déjà qualifiés, déjà dans Booqable. Même à 15 % de récupération, c'est 9 500 $ — plus que les 8 semaines de test publicitaire.

### 9.3 Ce qu'il manque encore pour finir la calibration

| Donnée manquante | Où la prendre | Temps |
|---|---|---|
| Sessions du site sur 6 mois (pour le taux de conversion réel) | GA4 `G-BCHQ23SBRF` → Rapports → Acquisition → Vue d'ensemble, plage 6 mois | 5 min |
| Marge brute réelle par commande (pour fixer le CPA plafond) | Ton coût réel : livraison, installation, main-d'œuvre, amortissement | 15 min |
| Mix produit (quelle part du CA vient des lettres) | Booqable → Exports → **Lignes de commande** (`order lines`), pas l'export de commandes | 5 min |

L'export de commandes ne contient pas les articles. Sans l'export des lignes, je ne peux pas te dire quelle part de tes 168 453 $ vient des lettres illuminées — et donc si les lettres méritent vraiment la tête d'affiche.
