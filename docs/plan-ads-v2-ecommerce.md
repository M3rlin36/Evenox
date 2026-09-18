# Évenox — Plan ads v2 : vendre en ligne les lettres illuminées et les forfaits (Meta + Google, 8 semaines)

Préparé pour Alexandre Séguin · 18 septembre 2026 · version 2.0 · budget test 1 500 $/mois · fenêtre du 21 septembre au 22 novembre 2026

Cette version remplace la v1. La v1 avait été écrite sur une prémisse fausse : un tunnel de soumission sans prix affichés. Le relevé du 18 septembre sur evenox.ca a montré l'inverse. Tout ce qui suit est bâti sur ton vrai modèle : prix publiés, configurateur, réservation en ligne, dépôt de 20 % par carte.

## Résumé exécutif

1. **Le modèle.** Tu vends déjà en ligne avec tes prix affichés. Les pubs ne cherchent donc pas des demandes de soumission : elles cherchent des réservations payées. On optimise sur l'achat et sa valeur, pas sur un formulaire.
2. **Le produit d'appel.** Les lettres illuminées, à 70 $ la lettre pour 48 heures. Un LOVE à 280 $ se décide vite et se photographie bien. C'est l'aimant, pas la destination.
3. **Le vrai levier de revenu.** Les forfaits corporatifs de 1 195 $ à 2 495 $. Il faut 119 commandes de lettres pour faire 50 000 $ dans un mois, contre 25 forfaits corporatifs. Les pubs poussent les lettres pour attirer, le configurateur et la page des forfaits pour monter le panier.
4. **Le budget.** 1 500 $ par mois pendant 8 semaines, soit 3 000 $ : 800 $ sur Meta en froid, 500 $ sur Google Recherche, 150 $ en reciblage de paniers abandonnés, 50 $ de réserve.
5. **Le résultat attendu, en hypothèses à valider.** Environ 27 réservations payées, environ 11 300 $ de revenu hors taxes, pour un retour de 3,8 fois la dépense.
6. **Les seuils.** Coût cible par réservation payée : 105 $. Alerte au-dessus de 140 $ sur sept jours. Pause d'un ensemble ou d'un groupe au-dessus de 200 $ après 200 $ dépensés. Retour sur dépense visé entre 4 et 5 fois, correction obligatoire sous 3 fois.
7. **Le problème numéro un, avant toute dépense.** Ton marquage est éclaté : le pixel Meta est sur la boutique mais pas sur le site qui reçoit les clics, et deux comptes Google Ads différents sont installés sur les deux domaines. Tant que ce n'est pas réparé, tu paieras à l'aveugle.
8. **Le problème numéro deux.** Aucune bannière de consentement, alors que des balises collectent déjà. C'est un risque légal et ça se règle en une heure.
9. **Le problème numéro trois.** Une note interne dans le code dit que le sélecteur de lettres ne s'affiche pas sur la page produit. Si c'est vrai, personne ne peut choisir ses lettres et chaque dollar de pub est perdu.
10. **La contrainte de stock.** Elle n'est pas en nombre de sets mais par caractère : huit lettres et quatre chiffres n'existent qu'en un seul exemplaire. Le calendrier Booqable est la seule vérité.
11. **La discipline.** Une heure chaque lundi dans le tableau de bord, aucune modification de campagne en dehors du lundi, et rien qui monte de plus de 20 % à la fois.
12. **Le verdict.** La semaine du 23 novembre, sur trois chiffres : retour sur dépense, coût par réservation, panier moyen réel.

## Lexique express

| Terme | En une phrase | Valeur Évenox |
|---|---|---|
| CPA | Coût par réservation payée : dépense divisée par le nombre de commandes. | Cible 105 $, alerte 140 $, pause 200 $ |
| ROAS | Retour sur dépense publicitaire : revenu hors taxes des commandes attribuées aux pubs divisé par la dépense. | Cible 4 à 5 fois, correction sous 3 fois |
| Panier moyen | Valeur moyenne d'une commande, hors taxes. | Hypothèse 420 $ pondéré, à remplacer par l'export Booqable |
| Taux de conversion | Part des visites qui deviennent une commande payée. | Cible 1,5 %, fourchette 0,8 à 2,5 % |
| Purchase | Événement envoyé aux plateformes quand une commande est payée, avec sa valeur. | C'est l'événement d'optimisation des campagnes |
| AddToCart | Événement envoyé quand un article entre au panier. | Sert au reciblage et de repli si les achats sont trop rares |
| Pixel Meta | Code qui rapporte à Meta ce qui se passe sur tes pages. | Un seul, le 1276015686903486, sur les deux domaines |
| Balise Google Ads | Code qui rapporte les conversions à Google. | Un seul compte à retenir entre les deux installés |
| Mesure inter-domaines | Réglage qui empêche la session de se couper entre evenox.ca et la boutique Booqable. | Obligatoire, sinon aucune vente n'est attribuée |
| UTM | Paramètres ajoutés aux adresses pour savoir d'où vient le visiteur. | Convention figée ci-dessous |
| Reciblage | Pubs montrées à ceux qui ont déjà vu un produit ou abandonné un panier. | Panier 7 jours, vues 30 jours |
| Phase d'apprentissage | Période où Meta cherche encore à qui montrer la pub. | Restera limitée à ce budget, c'est normal |
| RSA | Annonce Google dont les titres et descriptions sont combinés automatiquement. | Titres de 30 caractères, descriptions de 90 |
| Loi 25 | Loi québécoise qui exige le consentement avant tout témoin ou pixel. | Bannière obligatoire avant la première dépense |
| Loi 96 | La publicité au Québec se fait en français. | Toutes les pubs en français |

## Conventions figées

| Élément | Valeur |
|---|---|
| Campagne Meta froid | EVX_META_VENTES_LETTRES, objectif Ventes, événement Purchase |
| Ensemble froid | FROID_RiveNord-Laval_25-55 |
| Campagne Meta reciblage | EVX_META_RETARGETING, ensemble RETARG_Panier7j_Vues30j |
| Pubs | L-anniv-40, L-corpo-merci, L-mariage-love, L-prenom, L-chiffres-2027, L-noel, L-paris, J-jeux-geants, F-forfait-corpo |
| Campagne Google | EVX_GOOGLE_RECH_LOCATION, Recherche seule |
| Groupes Google | Lettres lumineuses, Chiffres lumineux, Forfaits corpo, Jeux géants, Tables-chaises-vaisselle, Marque Évenox |
| Pixel Meta | 1276015686903486 |
| Balises Google installées | AW-16776285171 sur evenox.ca, AW-16529262834 sur la boutique : une seule à retenir |
| GA4 | G-BCHQ23SBRF sur la boutique |
| Boutique | evenox.booqableshop.com |
| UTM | utm_source meta ou google · utm_medium paid_social ou cpc · utm_campaign lettres_froid, lettres_retarg, recherche_lettres, recherche_forfaits, recherche_jeux, recherche_mobilier · utm_content nom de la pub ou du groupe · utm_term mot-clé Google |
| Tableau de bord | Google Sheet « EVX – Suivi ads », routine du lundi de 1 h |

## Sommaire

1. Raisonnement : pourquoi ce plan
2. Offre et positionnement
3. Prérequis avant la première piastre
4. Plan media, 6 à 8 semaines
5. Copy et créas
6. Pages de destination
7. Marquage et attribution
8. Opérations
9. Risques et garde-fous
10. Semaine 0, jour par jour
11. Questions restantes

---

## 1. Raisonnement : pourquoi ce plan

### 1.1 Pourquoi les lettres illuminées en tête d'affiche

**Ça arrête le pouce.** Une lettre de 4 pieds allumée dans une salle sombre se lit en un quart de seconde sur un téléphone. Une table pliante ou une chaise, non. Sur Meta, où personne ne cherche rien, le visuel fait le travail.

**Le prix d'entrée est bas et lisible.** 70,00 $ la lettre pour 48 h, LOVE à 280 $, OH BABY à 420 $ : ça se met dans une pub sans gêne. Un « à partir de 1 195 $ » corporatif, non — il demande une conversation. Et la réservation ne coûte que 20 % au clic, environ 56 $ sur un LOVE (V7).

**Surtout : c'est la porte d'entrée, pas la destination.** Le client vient pour LOVE et tombe sur le configurateur : jeux dès 40 $, déco dès 30 $, photobooth dès 599 $, tables et chaises, plus la livraison (100 $ à 10 km, 170 $ à 20 km, 240 $ à 30 km). Le panier double ou triple sans une piastre de pub de plus. Les lettres sont l'hameçon; le configurateur et les forfaits sont le repas (sections 2 et 6).

### 1.2 Ce que le prix affiché change — et ce qu'il coûte

On passe d'un tunnel de soumission à un tunnel de commande.

- **Moins de friction.** Plus de formulaire ni d'attente de 24 h : dates choisies dans le calendrier Booqable, 20 % par carte, c'est réservé. Chaque étape supprimée est de l'abandon en moins.
- **Filtrage automatique.** Celui qui trouve 70 $ la lettre trop cher part avant de te coûter du temps. On ne paie plus pour qualifier : la page le fait.
- **Réservation à 23 h un dimanche.** L'événementiel se magasine le soir et la fin de semaine. Un tunnel de soumission dort la nuit; une boutique, non.
- **Mesure directe du revenu.** L'événement Purchase porte une valeur en dollars : on optimise sur du revenu réel, pas sur un « lead ». C'est ce qui rend lisible le ROAS de 1.4, une fois le marquage réparé (section 7).

Ce qu'on perd : **aucune qualification humaine avant la vente** — quelqu'un peut réserver sur une date de stock serrée ou une adresse à 60 km, et c'est toi qui gères après coup (section 8); et **une marge visible**, un concurrent lit tes deux barèmes en 30 secondes.

On garde le modèle : il connaît déjà tes prix ou peut les deviner. Ce qu'il ne peut pas copier, c'est 58 pièces d'inventaire, le comptoir de Sainte-Thérèse et la réservation instantanée. Et c'est le prix affiché qui te permet d'écrire le prix dans la pub, l'angle le plus performant du lot (section 5).

### 1.3 Pourquoi Meta pour le désir, Google pour l'intention, retargeting sur les paniers

**Meta crée la demande.** Personne ne se réveille en cherchant « lettre lumineuse ». Mais celui qui organise un 40e, un baby shower ou un party de bureau reconnaît le besoin dès qu'il voit l'image. Le volume de recherche est trop mince au Québec pour bâtir un plan dessus seul : Meta est le seul canal capable de fabriquer du volume à ce prix. D'où le gros du budget, 800 $/mois.

**Google Recherche récolte l'intention.** Celui qui tape « location lettres lumineuses Laval » est à quelques jours de payer. Volume faible, CPC élevé, mais c'est le trafic le plus proche de la carte de crédit et celui des recherches à gros panier. 500 $/mois, Recherche seule — pas de Display ni de Performance Max tant que le marquage n'est pas propre.

**Retargeting léger, sur les paniers abandonnés.** 150 $/mois, pas plus : le site a déjà un plugin maison de relance de panier (`evenox-relance-panier`). Le courriel de rappel coûte 0 $, le clic Meta 0,90 $. La pub ne couvre que ceux que le courriel n'atteint pas — panier sans adresse, vue produit sans ajout. Payer davantage, ce serait payer deux fois le même rappel. Audiences : panier 7 jours, vues produit 30 jours.

### 1.4 Le tunnel e-commerce chiffré — toutes valeurs hypothèse

Base : conversion 1,5 % (V2), panier 420 $ HT (V1), livraison comprise (définition de la valeur en section 7), perte clic → session de 10 %. CPC Meta 1,20 $ et Google 3,50 $ retenus comme milieux des ordres de grandeur 0,80-1,50 $ et 2-5 $, **à valider en semaine 2**.

| Étape (mensuel) | Meta froid | Google Recherche | Retargeting | Total |
|---|---|---|---|---|
| Budget | 800 $ | 500 $ | 150 $ | 1 450 $ (+50 $ réserve) |
| Repère de coût (hyp.) | CPM 14 $ | CTR 7 % | CPM 18 $ | — |
| Impressions | 57 100 | 2 050 | 8 300 | 67 450 |
| CPC (hyp.) | 1,20 $ | 3,50 $ | 0,90 $ | 1,49 $ pondéré |
| Clics | 667 | 143 | 167 | 977 |
| CTR | 1,17 % | 7,0 % | 2,0 % | — |
| Sessions (90 % des clics) | 600 | 129 | 150 | 879 |
| Conversion (V2) | 1,5 % | 1,5 % | 1,5 % | 1,5 % |
| Commandes payées | 9,0 | 1,9 | 2,3 | 13,2 |
| Panier HT (V1) | 420 $ | 420 $ | 420 $ | 420 $ |
| Revenu HT | 3 780 $ | 798 $ | 966 $ | 5 544 $ |
| CPA | 89 $ | 263 $ | 65 $ | 110 $ |
| ROAS | 4,7x | 1,6x | 6,4x | **3,8x** |

Sur 8 semaines : environ 1 950 clics, 26 à 27 réservations, 11 100 $ HT — l'attendu V6.

Deux lectures. Un : **le 1,6x de Google est un plancher** — à 3 % de conversion avec un panier de 600 $, il fait 3,9 commandes, 2 322 $ et 4,6x. Deux : **le retargeting est sous-évalué**, un panier abandonné convertit 2 à 3 fois mieux. Upside non compté, volontairement.

### 1.5 Calcul inverse : à quoi ressemblent 50 000 $ par mois (V8)

| Panier moyen | Commandes/mois | Commandes/sem. | Sessions à 1,5 % | Clics à 1,49 $ | Dépense à CPA 105 $ |
|---|---|---|---|---|---|
| 420 $ (lettres seules) | 119 | 27,5 | 7 937 | 8 818 | 12 500 $ |
| 600 $ (panier mixte) | 83 | 19,2 | 5 556 | 6 173 | 8 750 $ |
| 1 000 $ (gros mixte) | 50 | 11,5 | 3 333 | 3 704 | 5 250 $ |
| 2 000 $ (forfait corpo) | **25** | 5,8 | 1 667 | 1 852 | 2 625 $ |

Même 50 000 $, mais **119 commandes de lettres contre 25 forfaits corporatifs**, et 4,8 fois moins de clics achetés. La ligne 420 $ est irréaliste : 27 commandes par semaine sur 58 pièces avec 8 caractères uniques (V9), c'est un mur de stock avant d'être un mur de budget.

Nuance : le 1,5 % ne tient pas sur du corporatif, où l'achat passe souvent par un appel. Compte 250 $ à 400 $ de CPA (hypothèse) : 25 forfaits à 300 $, c'est 7 500 $ de pub pour 50 000 $, soit 6,7x — mieux que les 12 500 $ de la ligne 420 $. Cible à terme (V8) : les pubs portent la moitié du chiffre, 25 000 $/mois à 600 $ de panier, environ 42 commandes, environ 4 400 $ de dépense, ROAS environ 5,7x. Le reste vient de la fiche Google, du référencement, des références et du corporatif direct.

**Le levier no 1 est le panier, pas le volume de clics.** Passer de 420 $ à 600 $ vaut mieux que doubler le budget.

### 1.6 Pourquoi 1 500 $ par mois pendant 8 semaines (V5)

3 000 $ achètent environ 26 réservations attribuées : le minimum pour distinguer un canal qui marche d'un canal chanceux. À 1 000 $ on lirait du bruit; à 5 000 $ on paierait cher pour apprendre la même chose, marquage encore frais.

Ce qu'on valide, et rien d'autre : le **CPC réel** par canal, le **taux de conversion réel** sur trafic payant, le **panier réel** issu des pubs par l'export Booqable, et **quel angle créatif** bouge l'aiguille. Ni la saisonnalité (V10), ni le plafond de scalabilité.

Limite assumée : Meta demande environ 50 conversions/semaine par ensemble pour sortir de l'apprentissage. À 26 $/jour et 89 $ de CPA, on obtient environ 2 achats/semaine — on n'en sortira pas. D'où **un seul ensemble, jamais fragmenté**, et un repli sur AddToCart si moins d'un achat par semaine après 2 semaines (section 4).

**Variante 1 200 $/mois** (650/400/100 + 50) : environ 767 clics, 10,4 commandes, 4 349 $ HT, ROAS 3,8x. Signal plus mince, même calendrier.
**Variante 800 $/mois** (450/300/50) : environ 516 clics, 7,0 commandes, 2 927 $ HT, ROAS 3,7x. Verdict repoussé à 10-12 semaines, donc mi-décembre : on rate les partys de bureau.

### 1.7 Critères de verdict — semaine du 23 novembre (V3, V4)

Lecture sur les 8 semaines complètes, en réservations payées attribuées. Si l'événement Purchase n'est pas confirmé au 12 octobre, le verdict se lit sur l'export Booqable recoupé par UTM (V12 : 20 à 40 % des conversions restent invisibles).

| Canal | Dépensé 8 sem. | GO | CORRIGER | STOP |
|---|---|---|---|---|
| Meta froid | 1 600 $ | ≥ 16 réserv., CPA ≤ 105 $, ROAS ≥ 4,0x | 12 à 15 réserv., CPA 106-140 $, ROAS 3,0-3,9x | ≤ 11 réserv., CPA > 140 $ ou ROAS < 3,0x |
| Google Recherche | 1 000 $ | ≥ 10 réserv., CPA ≤ 105 $, ROAS ≥ 4,0x | 8-9 réserv., ROAS 3,3-3,8x | ≤ 7 réserv., ROAS < 3,0x |
| Retargeting | 300 $ | ≥ 4 réserv., CPA ≤ 75 $, ROAS ≥ 5,6x | 2-3 réserv., ROAS 2,8-4,2x | ≤ 1 réserv., ROAS ≤ 1,4x |
| **Ensemble** | **3 000 $** | **≥ 27 réserv., ≥ 11 300 $ HT, ROAS ≥ 3,8x** | **18 à 26 réserv., ROAS 2,5-3,6x** | **≤ 17 réserv., ROAS ≤ 2,4x** |

Deux drapeaux forcent un CORRIGER quel que soit le chiffre : plus de 30 % de termes de recherche hors sujet sur Google, ou une fréquence Meta supérieure à 4 sur 7 jours. Le groupe « Marque Évenox » est exclu du calcul : c'est de la défense de marque. Les règles de pause en cours de route (CPA > 200 $ après 200 $ dépensés, ou 200 $ sans réservation) s'appliquent avant, aux lundis du 12 octobre, 26 octobre et 9 novembre.

GO = on monte à 2 500 $/mois sur le canal gagnant. CORRIGER = même budget, on change créas, pages ou mots-clés, relecture 4 semaines plus tard. STOP = on coupe et on remet ce budget sur le canal qui tient.

### 1.8 Conclusion

Les lettres illuminées sont l'hameçon le moins cher pour faire entrer du monde dans une boutique qui vend déjà, prix affichés, 24 h sur 24.
Le prix affiché nous coûte le secret de la marge, mais nous donne la vitesse et un revenu mesurable dans les plateformes.
Meta achète le désir, Google récolte l'intention, le retargeting bouche les trous que le courriel de relance laisse.
À 1 500 $/mois pendant 8 semaines, on achète environ 26 réservations et 11 100 $ HT : assez pour trancher, pas assez pour se ruiner.
Et le vrai gisement n'est pas le clic : 25 forfaits corporatifs valent 119 commandes de lettres — c'est le panier qu'il faut faire monter.

## 2. Offre et positionnement

### 2.1 La promesse en une phrase

> **Tu vois le prix, tu choisis tes dates, tu reserves en ligne avec 20 % par carte : le solde se paie au ramassage gratuit a Sainte-Therese ou a la livraison, au tarif affiche.**

Elle va en haut du configurateur, de la page lettres et des pages forfaits (voir section 6). Trois preuves :

**1. Prix écrit, personne à attendre.**
```
70 $ par lettre pour 48 h. LOVE, c'est 280 $. Aucune soumission a attendre.
```
**2. Réservation 24 h sur 24.**
```
Reserve quand ca te tente : 20 % par carte confirment tes dates, le solde se paie a la livraison ou au ramassage.
```
**3. Transport chiffré d'avance.**
```
Ramassage gratuit au comptoir de Sainte-Therese, ou livraison 100 $ jusqu'a 10 km, puis 7 $ du kilometre jusqu'a 40 km.
```

Le barème de durée fait partie de la promesse et s'affiche à côté du prix : 48 h = base, 3 jours = x1,5, 1 semaine = x2, 4 semaines = x4.

### 2.2 Ce qu'on ne promet pas — sept phrases positives

Chaque limite devient une phrase affirmative, à coller dans le bloc « Comment ça marche » et dans la FAQ.

```
On livre jusqu'a 40 km de Sainte-Therese, au tarif affiche. Plus loin, ecris-nous : on prepare une soumission sur mesure.
```
```
L'installation et le demontage sont inclus quand ils figurent a ton contrat. Sinon, on te remet le materiel pret a poser, teste, au comptoir.
```
```
On confirme ta fenetre de livraison 48 h d'avance, fins de semaine comprises.
```
```
La reservation se paie par carte de credit : 20 % en ligne aujourd'hui, le solde au ramassage ou a la livraison.
```
```
Au comptoir, apporte une piece d'identite au meme nom que la carte utilisee pour la reservation.
```
```
Nos lettres s'ecrivent sans accent : NOEL, CAFE, DECO. C'est le style enseigne, et c'est voulu.
```
```
Chaque lettre existe en nombre limite : un seul W, un seul 4, 7, 8 et 9. Le calendrier montre en direct ce qui est libre et on propose la variante montable — BRAVO au lieu de WOW, 40 ANS au lieu de 44.
```

La dernière n'est pas une excuse : c'est de la rareté, et ça pousse à réserver tôt.

### 2.3 Tableau des angles créatifs

Une ligne par pub des conventions. Prix publiés, taxes en sus, 48 h.

| Pub | Mot montré | Cible | Déclencheur | Prix à afficher | Saison | Entrée |
|---|---|---|---|---|---|---|
| `L-anniv-40` | **40** | Femmes 35-55, Rive-Nord, Laval | Anniversaire jalon d'un proche | 140 $ | Toute l'année, pic mai-oct | 28 sept |
| `L-mariage-love` | **LOVE** | Fiancés 25-45, mères de la mariée | Mariage, fiançailles, photos | 280 $ | Mai à octobre | 28 sept |
| `L-prenom` | **EMMA** | Parents 28-45 | Fête d'enfant, baby shower, bal | 70 $ la lettre, 280 $ les quatre | Toute l'année | 28 sept |
| `J-jeux-geants` | Aucune lettre (jeux) | Familles, comités sociaux 30-50 | Épluchette, fête de quartier, team building | Jeux dès 40 $ | Mai à septembre | 28 sept |
| `L-corpo-merci` | **MERCI** | RH, adjointes, PME 30-55 | Reconnaissance, départ, anniversaire d'entreprise | 350 $ | Octobre à décembre | 12 oct |
| `F-forfait-corpo` | **GALA** | Décideurs corpo, Rive-Nord, Laval, Montréal | Party de bureau, gala, 5 à 7 | 1 195 $ et 1 995 $ | 12 oct au 22 nov | 12 oct |
| `L-paris` | **PARIS** | 25-45, mariages à thème, commerces | Décor thématique, ouverture de commerce | 350 $ | Toute l'année | 26 oct |
| `L-noel` | **NOEL** | Familles 30-55, commerces | Décor des fêtes, party de Noël | 280 $ | 26 oct au 31 déc | 26 oct |
| `L-chiffres-2027` | **2027** | Corpo et particuliers | Jour de l'An, photo de minuit | 280 $ | 9 nov au 2 janvier | 9 nov |

**Vérification contre l'inventaire réel.** 40 : un 4 (stock 1) + un 0 (3). LOVE, MERCI et PARIS : un exemplaire de chaque lettre, tous disponibles. EMMA : deux M (4), un E (2), un A (5). GALA : deux A (5), un G (2), un L (2). NOEL : seule graphie possible, aucune lettre accentuée n'existe. 2027 : deux 2 (4), un 0 (3), un 7 (1) — le 7 unique rend la créa fragile, d'où vérification du calendrier Booqable avant chaque relance. Aucune créa ne demande WOW, 44, 77, 88 ni 99, impossibles faute d'exemplaires. `J-jeux-geants` ne montre aucune lettre : JEUX est montable une seule fois, mais brûle trois caractères uniques (J, U, X) pour un produit à 40 $.

### 2.4 Le forfait corporatif, vrai levier de panier

Une réservation LOVE, c'est 280 $ HT. Un « Party de Bureau », c'est 1 995 $ HT, installation et reprise comprises : il faut sept LOVE pour l'égaler, et cinq LOVE (1 400 $) dépassent à peine le « 5 à 7 d'équipe » à 1 195 $.

Côté pub, l'écart est brutal. À l'hypothèse de CPA à 105 $ (V3), cinq commandes LOVE coûtent 525 $ pour 1 400 $ : ROAS 2,7x. Une commande à 1 995 $, même payée deux fois le CPA cible parce que la cible corpo coûte plus cher, sort à 9,5x. Même budget, même pixel, même page : seule la taille du panier change. C'est la seule route vers les 50 000 $/mois (V8) : 25 forfaits à 2 000 $ font le mois, 119 commandes à 420 $ ne se feront pas.

**À qui on le montre, du 12 octobre au 22 novembre.** Froid Meta : RH, adjointes de direction, gestionnaires de bureau et proprios de PME, 30-55 ans, rayon de 35 km (V11). Retargeting : visiteurs 30 jours de `/party-bureau-corporatif/`, `/gala-corporatif/`, `/team-building-activitecorpo/` et `/nos-forfaits-tout-inclus/`, plus paniers abandonnés 7 jours. Google : groupe `Forfaits corpo`. Les partys se décident en octobre-novembre pour décembre ; après le 22 novembre, l'argent bascule vers `L-noel` et `L-chiffres-2027`. Budgets en section 4.

### 2.5 L'échelle de prix à mettre en avant

Du plus accessible au plus gros panier, uniquement des montants publiés : chaise dès 2 $ → décoration dès 30 $ → jeux dès 40 $ → une lettre ou un chiffre 70 $ pour 48 h → deux caractères 140 $ (40) → trois lettres 210 $ → quatre lettres 280 $ (LOVE, NOEL, EMMA, 2027) → chapiteau dès 300 $ → cinq lettres 350 $ (MERCI, PARIS) → six lettres 420 $ (OH BABY) → sept lettres 490 $ → photobooth dès 599 $ → tables et chaises dès 649 $ → mariage dès 899 $ → 5 à 7 d'équipe 1 195 $ → Party de Bureau 1 995 $ → haut des forfaits corpo 2 495 $.

Règle de lecture : les créas accrochent entre 140 $ et 350 $, le configurateur monte le panier vers 649 $ et plus, le téléphone et le retargeting vendent le forfait. La livraison s'ajoute par-dessus : gratuite au comptoir, 100 $ à 10 km, 170 $ à 20 km, 240 $ à 30 km, 310 $ à 40 km.

### 2.6 Filtres de qualité client

Les trois règles de la boutique trient les clients avant qu'Alexandre décroche.

- **Le dépôt de 20 % écarte** le magasineur et la date bloquée par trois personnes pour le même samedi. Qui a mis 84 $ sur un panier de 420 $ se présente.
- **La carte de crédit seule écarte** la négociation en argent comptant, le virement jamais envoyé et la commande sans trace, et donne l'identité du payeur.
- **La pièce d'identité au comptoir écarte** la carte volée et le ramassage par un tiers non prévu. Dernière barrière avant que le matériel monte dans un véhicule.

Phrases exactes, au panier et dans la confirmation :

```
Reservation confirmee des que le depot de 20 % est paye. Le solde se regle au ramassage ou a la livraison.
```
```
Paiement en ligne par carte de credit seulement.
```
```
Au ramassage, la piece d'identite doit porter le meme nom que la carte utilisee pour la reservation.
```

## 3. Prérequis avant la première piastre (checklist go / no-go)

Rien ne part en diffusion tant que ça n'est pas coché. Chaque ligne dit quoi faire, avec quel outil et quel chemin de menu, en combien de temps, et à quoi on voit que c'est fait. Le détail technique est en section 7, les correctifs de pages en section 6. Tout se règle pendant la semaine 0 (21 au 27 septembre); diffusion le lundi 28 septembre à 6 h, pas avant.

### 3.1 Bloc marquage — le plus important (4 h 05)

Le site qui reçoit les clics n'a aucun pixel Meta et les conversions Google sont éclatées sur deux identifiants. Dépenser dans cet état, c'est payer pour des données qu'on ne verra jamais.

- [ ] **Poser le pixel Meta `1276015686903486` sur evenox.ca** — le même que sur la boutique, jamais un deuxième : c'est lui qui recolle le clic sur le site et l'achat sur la boutique. Gestionnaire d'événements Meta → *Sources de données* → pixel `1276015686903486` → *Paramètres* → *Installer le code*; pose dans Google Tag Manager `GTM-PP2W2TX9` → *Balises* → *Nouvelle* → HTML personnalisé, déclencheur *All Pages*. *45 min.* **Fait quand** : Meta Pixel Helper voit `1276015686903486` et un `PageView` sur l'accueil, /configurateur/ et /product/lettre-illuminee-marquee-letter/, et un seul pixel reste actif.
- [ ] **Trancher UN seul compte Google Ads.** On garde **`AW-16529262834`** (la boutique) : il porte déjà l'étiquette `AW-16529262834/exXUCJmFouIcEPKR4sk9`, là où l'argent entre. `AW-16776285171` passe en veille sans être supprimé : Google Ads → `AW-16776285171` → *Campagnes* → tout mettre en pause; *Admin* → *Préférences du compte* → ajouter « veille – ne pas diffuser » au nom. *20 min.* **Fait quand** : une seule campagne active existe dans tout le portefeuille, dans `AW-16529262834`. *L'info qui changerait ce choix* : si `AW-16776285171` porte la facturation de Google Listings and Ads ou plus de 1 000 $ d'historique, on inverse (section 7).
- [ ] **Poser la balise `AW-16529262834` sur evenox.ca**, pour que le compte retenu voie le clic d'entrée et pas juste l'achat. GTM `GTM-PP2W2TX9` → *Balises* → *Nouvelle* → « Google Tag », identifiant `AW-16529262834`, déclencheur *Initialization – All Pages*; ajouter une balise *Lien avec les conversions*. *30 min.* **Fait quand** : les deux balises se déclenchent en mode *Aperçu* GTM et Tag Assistant voit `AW-16529262834` sur evenox.ca.
- [ ] **Vérifier que l'événement Purchase existe avec sa valeur** sur la page de confirmation Booqable : sans valeur, pas de ROAS. La boutique envoie PageView, ViewContent, AddToCart, AddPaymentInfo; Purchase n'est pas confirmé. Booqable → *Paramètres* → *Intégrations / Suivi* (société `80d162e7-40ac-434b-8da4-b2fd5bc86599`); contrôle dans Meta → *Test d'événements*. *1 h.* **Fait quand** : le test de 3.3 montre `Purchase` avec `value` = **valeur totale HT de la commande** (pas les 20 % du dépôt, V7) et `currency: CAD`, et Google Ads → *Objectifs* → *Conversions* enregistre la conversion sur `exXUCJmFouIcEPKR4sk9`.
- [ ] **Configurer la mesure inter-domaines** entre evenox.ca et evenox.booqableshop.com; sinon GA4 compte deux sessions et attribue la vente à « direct ». GA4 `G-BCHQ23SBRF` → *Admin* → *Collecte et modification des données* → *Flux de données* → flux Web → *Configurer les paramètres de la balise* → *Configurer vos domaines* → ajouter les deux domaines. *30 min.* **Fait quand** : le saut vers la boutique ajoute `_gl=` à l'URL et le parcours reste une seule session dans GA4 → *Temps réel*.
- [ ] **Vérifier le domaine evenox.ca dans Meta** — sans ça, pas de priorisation d'événements fiable. Gestionnaire d'entreprise → *Paramètres de l'entreprise* → *Sécurité de la marque* → *Domaines* → *Ajouter* → balise méta, posée par Divi → *Options du thème* → *Intégration* → en-tête. *20 min.* **Fait quand** : le domaine affiche « Vérifié ». Répéter pour `evenox.booqableshop.com` si Booqable laisse injecter la balise.

### 3.2 Bloc consentement Loi 25 (2 h 05)

Aucune bannière n'existe : seule l'interface technique WP Consent API est présente. On collecte donc sans consentement préalable. C'est bloquant.

- [ ] **Installer la bannière.** Retenu : **Complianz**, parce qu'il parle nativement à WP Consent API déjà en place et au mode consentement Google. WordPress → *Extensions* → *Ajouter* → « Complianz » → *Installer* → *Activer* → assistant, région **Canada / Québec – Loi 25**. *45 min.* **Fait quand** : en navigation privée, la bannière offre *Accepter*, *Refuser* et *Personnaliser*, le refus aussi facile que l'acceptation.
- [ ] **Bloquer les balises avant consentement.** Complianz → *Intégrations* → blocage de scripts; GTM → chaque balise → *Paramètres avancés* → *Paramètres de consentement*. *30 min.* **Fait quand** : avant tout clic, Pixel Helper et Tag Assistant ne détectent **aucune** balise; après *Accepter*, les deux apparaissent.
- [ ] **Activer le mode consentement Google v2.** Complianz → *Intégrations* → *Google Consent Mode v2*. *20 min.* **Fait quand** : `ad_storage`, `analytics_storage`, `ad_user_data` et `ad_personalization` passent de `denied` à `granted` dans l'onglet *Consent* de l'aperçu GTM.
- [ ] **Compléter /politique-de-confidentialite/** : finalités, catégories de renseignements, destinataires (Meta, Google, Booqable), hébergement hors Québec, conservation, droits d'accès et de retrait. WordPress → *Pages* → Divi. *20 min.* **Fait quand** : les six points y sont et la page est reliée depuis la bannière et le pied de page.
- [ ] **Nommer le responsable** de la protection des renseignements personnels : Alexandre Séguin, evenox.ca@gmail.com, 514-559-1893. *10 min.* **Fait quand** : nom, courriel et téléphone sont publiés.

### 3.3 Bloc commande test — le cœur du go / no-go (1 h 20)

- [ ] **Passer une vraie commande d'une lettre** (70 $ HT, 48 h), d'un téléphone, en navigation privée, en arrivant par un lien porteur d'UTM. *20 min.* **Fait quand** : la page de confirmation Booqable s'affiche.
- [ ] **Payer réellement les 20 %** par carte de crédit (environ 14 $ + taxes) : une simulation ne prouve rien. *5 min.* **Fait quand** : le débit paraît au relevé et la commande est confirmée dans Booqable.
- [ ] **Vérifier le revenu dans Meta.** Gestionnaire d'événements → *Test d'événements*, puis *Aperçu* du pixel. *20 min.* **Fait quand** : un seul `Purchase`, valeur = total HT, `currency: CAD`, rattaché au pixel `1276015686903486`.
- [ ] **Vérifier le revenu dans Google.** `AW-16529262834` → *Objectifs* → *Conversions* → *Récapitulatif*; GA4 → *Temps réel* et *Acquisition de trafic*. *20 min.* **Fait quand** : la conversion avec valeur apparaît sur `exXUCJmFouIcEPKR4sk9`, la source GA4 est `google / cpc` ou `meta / paid_social` (jamais `booqableshop.com / referral`), et `AW-16776285171` n'enregistre rien.
- [ ] **Annuler et rembourser.** Booqable → *Commandes* → la commande → *Annuler*, puis *Remboursement*. *15 min.* **Fait quand** : le stock de la lettre est relibéré au calendrier et le remboursement confirmé. La conversion reste comptée côté plateformes : on la retranche à la main du premier rapport hebdomadaire.

### 3.4 Bloc pages (1 h 35)

- [ ] **Vérifier que le sélecteur de lettres s'affiche sur téléphone.** Une note interne du code dit que le composant Booqable ne rend pas de sélecteur sur le groupe `marquee-letter` (`630677a9-53ab-4a01-ba62-911abf9ab1d2`, 27 variantes) : si c'est vrai, personne ne peut choisir sa lettre et toute la dépense est perdue. Téléphone réel, /product/lettre-illuminee-marquee-letter/ et /configurateur/. *30 min.* **Fait quand** : les 27 caractères sont visibles, on en choisit un, il entre au panier.
- [ ] **Ajouter deux lettres différentes au même panier sur téléphone.** *20 min.* **Fait quand** : le panier affiche 2 lignes et 140 $ HT et le paiement va jusqu'au bout. Échec = no-go (repli en section 6).
- [ ] **Vitesse mobile** des quatre pages de destination : configurateur, lettres, chiffres, forfaits. PageSpeed Insights, onglet *Mobile*. *25 min.* **Fait quand** : LCP sous 4 s partout (viser 2,5 s).
- [ ] **Cohérence des prix affichés** : 70 $ la lettre ou le chiffre pour 48 h, barème x1,5 / x2 / x4, livraison 100 $ jusqu'à 10 km puis 7 $/km, ramassage gratuit, dépôt 20 %. *15 min.* **Fait quand** : aucune page ne contredit une autre ni la boutique.
- [ ] **Page /nos-forfaits-tout-inclus/ à jour** : 1 195 $, 1 995 $, 2 495 $, mariage dès 899 $, tables et chaises dès 649 $, mention « prix de lancement, installation et reprise comprises ». *5 min.* **Fait quand** : les cinq prix et la mention y sont, bouton de réservation actif.

### 3.5 Bloc catalogue et disponibilité (55 min)

- [ ] **Calendrier Booqable à jour** du 28 septembre au 22 novembre : réservations, blocages, entretien. Booqable → *Planning*. *30 min.* **Fait quand** : aucune date de la période n'est fausse.
- [ ] **Caractères uniques repérés** : &, J, K, Q, U, W, X, Y et les chiffres 4, 7, 8, 9 (V9). *15 min.* **Fait quand** : la liste est au Google Sheet « EVX – Suivi ads » et aucune créa ne met en vedette un mot impossible (WOW, 44, 77, 88, 99).
- [ ] **Articles épuisés retirés des pubs.** *10 min.* **Fait quand** : chaque visuel et chaque annonce pointe vers un article réservable à J+7.

### 3.6 Bloc comptes (1 h 05)

- [ ] **Accès Meta réunis** : page, compte publicitaire, pixel, domaines. *Paramètres de l'entreprise* → *Comptes*. *20 min.* **Fait quand** : les quatre actifs sont sous le même Gestionnaire d'entreprise.
- [ ] **Accès Google réunis** : `AW-16529262834`, GA4 `G-BCHQ23SBRF`, GTM `GTM-PP2W2TX9`, fiche d'établissement. *15 min.* **Fait quand** : Alexandre est administrateur des quatre.
- [ ] **Deux administrateurs par plateforme** : Alexandre plus une personne de confiance. *10 min.* **Fait quand** : aucun actif n'a un seul administrateur.
- [ ] **Double authentification** sur Meta et Google. *10 min.* **Fait quand** : la connexion exige un code.
- [ ] **Moyen de paiement valide et plafonds de dépense.** Meta → *Facturation* → *Limite de dépense du compte* = **1 600 $/mois**; Google Ads → *Facturation* → *Budget du compte* = **600 $/mois**. *10 min.* **Fait quand** : les deux plafonds sont enregistrés — garde-fou anti-dérapage (section 9).

### 3.7 Bloc fiche Google et comptoir (50 min)

- [ ] **Heures du comptoir** de Sainte-Thérèse, fins de semaine comprises. Profil d'établissement Google → *Modifier le profil* → *Horaires*. *15 min.* **Fait quand** : les heures publiées sont celles où quelqu'un répond vraiment.
- [ ] **Zones desservies** : Rive-Nord, Laval, Montréal, rayon de 40 km (V11). *Modifier le profil* → *Zone desservie*. *10 min.* **Fait quand** : les trois zones sont listées.
- [ ] **Photos** : 10 récentes minimum — lettres allumées en soirée, comptoir, camion, forfait corporatif monté. *15 min.* **Fait quand** : 10 photos de moins de 12 mois sont en ligne.
- [ ] **Avis** : demander 5 avis à des clients récents. *10 min.* **Fait quand** : 5 demandes envoyées et le lien d'avis noté au Sheet.

### 3.8 Critère NO-GO

**Aucune piastre n'est dépensée tant que les trois conditions suivantes ne sont pas remplies :**

1. La commande test n'a pas prouvé le revenu de bout en bout — un `Purchase` avec la valeur totale HT visible à la fois dans Meta et dans le compte Google unique.
2. La bannière de consentement n'est pas en place et ne bloque pas les balises avant acceptation.
3. Le sélecteur de lettres ne permet pas de choisir un caractère et d'ajouter deux lettres au panier sur téléphone.

Si l'une des trois manque le dimanche 27 septembre au soir, on repousse la diffusion d'une semaine plutôt que de brûler le budget. Seule exception tolérée : si `evenox.booqableshop.com` ne peut pas être vérifié dans Meta faute d'accès à l'en-tête, on part quand même et on l'inscrit comme dette technique.

### 3.9 Ordre de production et temps total

| Ordre | Bloc | Durée | Pourquoi à ce rang |
|---|---|---|---|
| 1 | Comptes (3.6) | 1 h 05 | Sans accès, rien n'avance |
| 2 | Consentement (3.2) | 2 h 05 | Avant que les balises tirent |
| 3 | Marquage (3.1) | 4 h 05 | Dépend du rang 2 |
| 4 | Pages (3.4) | 1 h 35 | Avant le test |
| 5 | Commande test (3.3) | 1 h 20 | Valide les rangs 2, 3 et 4 |
| 6 | Catalogue (3.5) | 55 min | En parallèle |
| 7 | Fiche Google (3.7) | 50 min | Non bloquant |

**Total : environ 11 h 55**, réparties sur les sept jours de la semaine 0. Le découpage jour par jour est en section 10.

## 4. Plan media (6 à 8 semaines)

Deux plateformes, quatre campagnes au total, 950 $/mois sur Meta et 500 $/mois sur Google. Tout ce qui suit est à saisir tel quel : les noms, les montants et les dates sont verrouillés. Les prérequis de marquage sont en section 3, les textes de pubs en section 5, la réparation du pixel et des deux comptes Google en section 7.

### 4.1 Meta — campagne froide `EVX_META_VENTES_LETTRES`

#### Pourquoi Ventes et pas Prospects

La v1 visait Prospects parce qu'on croyait qu'un formulaire était la fin du tunnel. C'est faux : le prix est affiché, le client réserve lui-même et paie son dépôt de 20 % sur la boutique Booqable. Optimiser sur Prospects apprendrait à Meta à trouver des gens qui remplissent des formulaires — un comportement qui n'existe nulle part dans ton tunnel. Le seul signal qui vaut de l'argent est l'événement `Purchase` déclenché à la confirmation Booqable, avec sa valeur en dollars. Donc : objectif **Ventes**, emplacement de la conversion **Site web**, événement de conversion **Achat**.

#### Règle de repli sur AddToCart

À 26 $/jour et 105 $ de CPA (hypothèse V3), on vise environ 2 achats par semaine. Meta a besoin de 50 événements par ensemble sur 7 jours pour sortir d'apprentissage : on ne s'en approchera jamais sur `Purchase`. Le repli est donc prévu d'avance, pas improvisé.

> **Seuil exact** : moins de 5 événements `Purchase` attribués à `EVX_META_VENTES_LETTRES` sur les 7 jours du 12 au 18 octobre 2026.
> **Date de décision** : lundi 19 octobre 2026, 10 h.
> **Action** : dans l'ensemble `FROID_RiveNord-Laval_25-55`, changer l'événement de conversion de `Achat` à `Ajouter au panier`. Rien d'autre ne bouge ce jour-là.

Sois lucide : cette règle va très probablement se déclencher. C'est le scénario attendu, pas un échec. C'est aussi la seule exception aux lundis de changement structurels (12 et 26 octobre, 9 novembre) — attendre une semaine de plus brûlerait 182 $ sans rien apprendre. Si elle se déclenche, le CPA d'achat reste la mesure de succès (lu dans Booqable, voir section 7), mais l'algorithme, lui, est nourri à l'ajout au panier.

#### Structure et réglages exacts

Une seule campagne, un seul ensemble, cinq pubs. Pas de deuxième ensemble : diviser 26 $/jour en deux, c'est garantir que ni l'un ni l'autre n'apprend.

| Champ (Gestionnaire de publicités) | Valeur à saisir |
|---|---|
| Objectif | Ventes |
| Nom de la campagne | `EVX_META_VENTES_LETTRES` |
| Catégories de publicités spéciales | Aucune |
| Test A/B | Désactivé |
| Budget de campagne Advantage+ | **Désactivé** (budget à l'ensemble) |
| Nom de l'ensemble | `FROID_RiveNord-Laval_25-55` |
| Emplacement de la conversion | Site web |
| Pixel | Évenox `1276015686903486` |
| Événement de conversion | Achat |
| Budget quotidien | 26,00 $ |
| Début de diffusion | 28 septembre 2026, 6 h 00 (heure de l'Est) |
| Date de fin | Aucune |
| Fenêtre d'attribution | Clic 7 jours, vue 1 jour |
| Contrôle du coût par résultat | Laisser vide |
| Type de diffusion | Standard |

#### Ciblage

**Ce qui est dur** (contrôles de l'audience — Meta les respecte toujours) :
- Lieu : 215 boul. René-A.-Robert, Sainte-Thérèse + **35 km**, option « Personnes vivant dans ce lieu ».
- Âge minimum : 25 ans. Avec l'audience Advantage+, Meta peut diffuser **au-dessus** de 55 ans mais jamais en dessous de 25 : le nom de l'ensemble reste `25-55` par convention.
- Exclusions de lieux, à saisir une par une :
  - Rive-Sud : Longueuil, Brossard, Saint-Hubert, Saint-Lambert, Boucherville, Greenfield Park, Saint-Bruno-de-Montarville, La Prairie, Candiac, Sainte-Julie, Varennes, Chambly.
  - Ouest-de-l'Île : Dollard-des-Ormeaux, Pointe-Claire, Kirkland, Beaconsfield, Baie-d'Urfé, Sainte-Anne-de-Bellevue, Senneville, Dorval, Pierrefonds-Roxboro, L'Île-Bizard.
  - À partir du 12 octobre : exclure aussi l'audience `ACHETEURS_180J`.

**Ce qui n'est qu'une suggestion** (Meta peut sortir du cadre) : les centres d'intérêt. En saisir quatre comme point de départ — Mariage, Planification d'événements, Fêtes d'anniversaire, Décoration de la maison — et ne pas s'y attacher : au-delà de la première semaine, l'algorithme les ignore largement.

**Audience Advantage+** : activée. **Placements Advantage+** : activés, rien de décoché. À 26 $/jour, restreindre l'inventaire fait grimper le CPM sans rien améliorer.

**Langues** : champ **vide**. Meta filtre selon la langue de l'interface, et une grosse part de la clientèle francophone de la Rive-Nord a Facebook en anglais. Une pub écrite en français se filtre toute seule.

#### Les 5 pubs au lancement

Actives le 28 septembre : `L-anniv-40`, `L-mariage-love`, `L-prenom`, `L-corpo-merci`, `J-jeux-geants`. Plafond permanent de 5 pubs actives : au-delà, le budget se fragmente.

| Date | Pub activée | Pub mise en pause |
|---|---|---|
| 12 octobre | `F-forfait-corpo` | La plus faible au coût par ajout au panier |
| 26 octobre | `L-noel` | La plus faible au coût par ajout au panier |
| 9 novembre | `L-chiffres-2027` | La plus faible au coût par ajout au panier |

`L-paris` reste en réserve, produite mais jamais activée pendant le test.

### 4.2 Meta — retargeting `EVX_META_RETARGETING`

Mêmes réglages de campagne (Ventes, site web, Achat), ensemble `RETARG_Panier7j_Vues30j`, budget **5,00 $/jour**.

Trois audiences à créer dans Gestionnaire d'audiences > Créer > Audience personnalisée > Site web, source = pixel `1276015686903486` :
- `PANIER_7J` : événement `AddToCart`, 7 derniers jours.
- `VUES_30J` : événement `ViewContent`, 30 derniers jours.
- `ACHETEURS_180J` : événement `Purchase`, 180 derniers jours.

Ciblage de l'ensemble : inclure `PANIER_7J` **ou** `VUES_30J`, exclure `ACHETEURS_180J`. **Audience Advantage+ désactivée** ici — sinon Meta élargit hors de tes visiteurs et ce n'est plus du retargeting.

**Condition de lancement** : ne pas lancer avant que `VUES_30J` affiche **au moins 300 personnes**. Attendu le lundi 12 octobre (environ 330 sessions cumulées Meta + Google après deux semaines, ordre de grandeur). Si le compteur est sous 300 le 12 octobre, on repousse au 19 octobre et on ne dépense pas ces 5 $/jour entretemps.

**Plafond de fréquence** : Meta n'offre pas le champ de plafond de fréquence sur l'objectif Ventes (il n'existe que sur Notoriété et Couverture). On le remplace par deux règles automatiques (R5 et R6 ci-dessous).

### 4.3 Budgets, plafond de compte et règles automatiques

| Poste | Quotidien | Mensuel |
|---|---|---|
| Meta froid | 26,00 $ | 800 $ |
| Meta retargeting | 5,00 $ | 150 $ |
| Google Recherche | 16,50 $ | 500 $ |
| Réserve non engagée | — | 50 $ |

**Plafond de dépenses du compte Meta** (Gestionnaire > Paramètres de paiement > Plafond de dépenses du compte) : le fixer à **1 000 $** le 27 septembre, le relever à **2 000 $** le 26 octobre. C'est le seul garde-fou qui ne dépend pas d'une règle. Côté Google, le budget quotidien de 16,50 $ plafonne mécaniquement le mois à 501,60 $ (16,50 × 30,4) : il n'y a rien d'autre à régler.

Règles à créer dans Meta le 27 septembre (Gestionnaire > Règles automatisées) :

| Nom de la règle | Portée | Condition | Action | Fréquence |
|---|---|---|---|---|
| `EVX-M-R1 Alerte CPA 140` | Tous les ensembles actifs | Coût par achat (7 j) > 140,00 $ **et** montant dépensé (7 j) ≥ 150,00 $ | Notification à evenox.ca@gmail.com | Tous les jours, 9 h |
| `EVX-M-R2 Pause CPA 200` | Tous les ensembles actifs | Coût par achat (7 j) > 200,00 $ **et** montant dépensé (durée de vie) ≥ 200,00 $ | Désactiver l'ensemble | Tous les jours, 9 h |
| `EVX-M-R3 Pause zéro achat` | Tous les ensembles actifs | Achats (durée de vie) = 0 **et** montant dépensé (durée de vie) ≥ 200,00 $ | Désactiver l'ensemble | Tous les jours, 9 h |
| `EVX-M-R4 Hausse 20 %` | Ensemble `FROID_RiveNord-Laval_25-55` | Coût par achat (7 j) < 105,00 $ **et** achats (7 j) ≥ 3 | Augmenter le budget quotidien de 20 %, plafond 45,00 $ | Une fois par semaine, lundi 9 h |
| `EVX-M-R5 Fréquence 4` | Ensemble `RETARG_Panier7j_Vues30j` | Fréquence (7 j) ≥ 4,0 | Réduire le budget quotidien de 40 %, plancher 3,00 $ | Tous les jours, 9 h |
| `EVX-M-R6 Fréquence 6` | Ensemble `RETARG_Panier7j_Vues30j` | Fréquence (7 j) ≥ 6,0 | Désactiver l'ensemble | Tous les jours, 9 h |

**Exception datée sur R3.** À 26 $/jour, le seuil de 200 $ dépensés tombe le **5 octobre, jour 8**. Un ensemble sans achat au jour 8 quand on en attend 2 par semaine est statistiquement banal : laisser R3 couper là, c'est tuer la campagne pour du bruit. Donc du 28 septembre au 18 octobre, R3 est créée avec l'action **Notification** au lieu de **Désactiver**. Le lundi 19 octobre, tu la modifies pour l'action Désactiver. R2 suit la même bascule. Les deux règles restent actives en mode coupure sur le retargeting dès le premier jour.

### 4.4 Phase d'apprentissage : la vérité

26 $/jour × 7 = 182 $/semaine. À 105 $ de CPA, ça fait **1,7 achat par semaine**, appelons-le 2. Meta demande 50 événements de conversion par ensemble sur 7 jours pour terminer l'apprentissage. On en fera environ 2. L'ensemble affichera donc **« Apprentissage limité » en permanence**, du premier au dernier jour du test, et c'est normal. La seule façon d'en sortir serait de monter à environ 5 000 $/mois, ce qui n'est pas la question aujourd'hui.

Conséquence pratique : chaque modification importante relance une phase d'apprentissage de 7 jours, soit 182 $ brûlés à tâtonner. **On ne touche pas** : l'événement de conversion (sauf le 19 octobre), l'audience, le lieu, l'âge, les exclusions, la fenêtre d'attribution, le budget de plus de 20 % à la fois, et on ne met jamais l'ensemble en pause pour le réactiver. Ce qu'on a le droit de changer sans casser l'apprentissage : activer ou mettre en pause une **pub** à l'intérieur de l'ensemble, et seulement les lundis 12 octobre, 26 octobre et 9 novembre.

### 4.5 Google — campagne `EVX_GOOGLE_RECH_LOCATION`

#### Réglages de création

Passer en **mode expert** avant tout (lien « Passer au mode expert » sous le choix d'objectif). Objectif : « Créer une campagne sans objectif spécifique ». Type : **Recherche**. Puis :

| Champ | Valeur |
|---|---|
| Nom | `EVX_GOOGLE_RECH_LOCATION` |
| Réseaux | **Décocher** « Inclure les partenaires du Réseau de Recherche » et « Inclure le Réseau Display » |
| Budget quotidien | 16,50 $ |
| Début | 28 septembre 2026, sans date de fin |
| Langues | Français et Anglais |
| Rotation des annonces | Optimiser |
| Calendrier de diffusion | Toute la journée, 7 jours |

Dans Outils > Paramètres > Recommandations : **tout décocher** dans « Appliquer automatiquement les recommandations ». Sans ça, Google élargit tes correspondances et ajoute des mots-clés sans te demander. Vérifie aussi qu'aucune campagne intelligente ou Performance Max n'a été créée par le plugin Google Listings and Ads : si oui, la mettre en pause.

#### Les 6 groupes, part de budget et activation

Dans une campagne Recherche, le budget est au niveau **campagne** : il n'y a pas de budget par groupe. La part se pilote par le nombre de mots-clés actifs et par la mise en pause, et se vérifie chaque lundi dans la colonne Coût. Le plafond de CPC, lui, est unique pour la campagne.

| Groupe | Part visée 28 sept – 11 oct | Part visée 12 oct – 22 nov | Activation |
|---|---|---|---|
| `Lettres lumineuses` | 40 % | 30 % | 28 septembre |
| `Chiffres lumineux` | 10 % | 10 % | 28 septembre |
| `Forfaits corpo` | 15 % | **30 %** | 28 septembre, priorité du 12 octobre au 22 novembre |
| `Jeux géants` | 10 % | 5 % | 28 septembre |
| `Tables-chaises-vaisselle` | 15 % | 15 % | 28 septembre |
| `Marque Évenox` | 10 % | 10 % | 28 septembre |

`Forfaits corpo` est le groupe neuf du plan v2 : c'est le seul qui pointe vers des paniers de 1 195 $ à 2 495 $ (hypothèse V8), et octobre-novembre est la fenêtre d'achat des partys de bureau. Si la part réelle est sous 25 % le 19 octobre, on met en pause deux mots-clés de `Jeux géants` et deux de `Lettres lumineuses` pour libérer le budget.

#### Géographie

Zone : rayon de **40 km** autour de 215 boul. René-A.-Robert, Sainte-Thérèse. Option de zone : **« Présence : personnes se trouvant ou régulièrement présentes dans les zones ciblées »** — jamais « Présence ou intérêt », qui te fait payer des clics de Toronto qui « s'intéressent » à Montréal.

Le 40 km n'est pas arbitraire : c'est exactement la fin du barème de livraison publié (100 $ jusqu'à 10 km, +7 $/km jusqu'à 40 km, soit 310 $ à 40 km). Au-delà, c'est une soumission sur mesure — donc un clic qu'on ne peut pas convertir en réservation en ligne, donc un clic qu'on ne paie pas.

#### Enchères

Départ : **Maximiser les clics**, avec « Définir une limite d'enchère au CPC max » = **2,50 $**. Raison : zéro historique de conversion dans ce compte, et une stratégie intelligente sans données dépense mal.

**Seuil de bascule** : 15 conversions « Achat Booqable » enregistrées dans Google Ads sur 30 jours glissants. Le jour où c'est atteint :
- si la **valeur** de conversion remonte sur au moins 90 % de ces 15 conversions → basculer sur **Maximiser la valeur de conversion**, sans ROAS cible ;
- sinon → basculer sur **Maximiser les conversions**, sans CPA cible.

Ce qu'on ne fait pas : pas de CPA cible ni de ROAS cible au départ (ils étranglent la diffusion), pas d'enchères manuelles, pas de bascule avant le seuil, pas plus d'un changement de stratégie par mois (Google réapprend 7 à 14 jours), et on ne remonte pas le plafond de CPC au-dessus de 2,50 $ avant le 26 octobre.

#### Composants de campagne

À créer au niveau campagne : 6 liens annexes (configurateur, forfaits tout inclus, lettres, chiffres, jeux géants, FAQ), 8 textes de mise en avant, 2 extraits de site (catégories « Services » et « Types »), le composant Appel avec le 514-559-1893, le composant Lieu relié à la fiche Google Business de Sainte-Thérèse, et 4 composants Image. Pas de composant Formulaire pour prospects : le tunnel est une boutique. Les textes exacts, avec le décompte de caractères, sont en section 5.

#### Règles automatiques Google

| Nom | Niveau | Condition | Action | Fréquence |
|---|---|---|---|---|
| `EVX-G-R1 Alerte CPA 140` | Campagne | Coût/conv. (7 j) > 140,00 $ et Coût (7 j) ≥ 100,00 $ | Courriel | Lundi 8 h |
| `EVX-G-R2 Pause groupe` | Groupes d'annonces | Coût (30 j) ≥ 200,00 $ et Conversions (30 j) = 0 | Mettre en pause | Lundi 8 h |
| `EVX-G-R3 Pause mot-clé` | Mots-clés | Coût (30 j) ≥ 60,00 $ et Conversions (30 j) = 0 | Mettre en pause | Lundi 8 h |
| `EVX-G-R4 Hausse 20 %` | Campagne | Coût/conv. (7 j) < 105,00 $ et Conversions (7 j) ≥ 3 | Budget quotidien +20 %, plafond 25,00 $ | Lundi 8 h |
| `EVX-G-R5 Alerte CTR` | Groupes d'annonces | CTR (7 j) < 2,0 % et Impressions (7 j) ≥ 300 | Courriel | Lundi 8 h |

### 4.6 Mots-clés

40 mots-clés, correspondance expression (`"..."`) ou exacte (`[...]`). Aucune correspondance large : à 16,50 $/jour, la large brûle le budget en une semaine.

| # | Mot-clé | Corr. | Groupe | Intention |
|---|---|---|---|---|
| 1 | `"location lettres lumineuses"` | Expr. | Lettres lumineuses | Commerciale directe |
| 2 | `[location lettre lumineuse]` | Exacte | Lettres lumineuses | Commerciale directe |
| 3 | `"lettres lumineuses geantes"` | Expr. | Lettres lumineuses | Commerciale directe |
| 4 | `[location lettres geantes]` | Exacte | Lettres lumineuses | Commerciale directe |
| 5 | `"lettre lumineuse mariage"` | Expr. | Lettres lumineuses | Mariage |
| 6 | `[lettres lumineuses love]` | Exacte | Lettres lumineuses | Mariage |
| 7 | `"prix location lettres lumineuses"` | Expr. | Lettres lumineuses | Comparaison de prix |
| 8 | `[location lettre geante prenom]` | Exacte | Lettres lumineuses | Personnalisation |
| 9 | `"location lettres lumineuses laval"` | Expr. | Lettres lumineuses | Ville |
| 10 | `[location lettres lumineuses montreal]` | Exacte | Lettres lumineuses | Ville |
| 11 | `"lettres lumineuses rive-nord"` | Expr. | Lettres lumineuses | Ville |
| 12 | `"location lettres lumineuses sainte-therese"` | Expr. | Lettres lumineuses | Ville, proximité |
| 13 | `"location lettres lumineuses blainville"` | Expr. | Lettres lumineuses | Ville |
| 14 | `"location chiffres lumineux"` | Expr. | Chiffres lumineux | Commerciale directe |
| 15 | `[chiffre lumineux geant location]` | Exacte | Chiffres lumineux | Commerciale directe |
| 16 | `"chiffre lumineux anniversaire"` | Expr. | Chiffres lumineux | Anniversaire |
| 17 | `[location chiffres 2027]` | Exacte | Chiffres lumineux | Jour de l'An |
| 18 | `"forfait party de bureau"` | Expr. | Forfaits corpo | Corporatif, haute valeur |
| 19 | `[organisation party de bureau]` | Exacte | Forfaits corpo | Corporatif, haute valeur |
| 20 | `"party de bureau cle en main"` | Expr. | Forfaits corpo | Corporatif, haute valeur |
| 21 | `"party de noel entreprise laval"` | Expr. | Forfaits corpo | Corporatif + ville |
| 22 | `[forfait 5 a 7 entreprise]` | Exacte | Forfaits corpo | Corporatif |
| 23 | `"location materiel evenement corporatif"` | Expr. | Forfaits corpo | Corporatif |
| 24 | `[forfait evenement corporatif montreal]` | Exacte | Forfaits corpo | Corporatif + ville |
| 25 | `"organisation gala corporatif"` | Expr. | Forfaits corpo | Gala |
| 26 | `[forfait team building entreprise]` | Exacte | Forfaits corpo | Team building |
| 27 | `"forfait tout inclus evenement entreprise"` | Expr. | Forfaits corpo | Clé en main |
| 28 | `"location decor party de bureau"` | Expr. | Forfaits corpo | Corporatif |
| 29 | `"location jeux geants"` | Expr. | Jeux géants | Commerciale directe |
| 30 | `[location jeux geants montreal]` | Exacte | Jeux géants | Ville |
| 31 | `"location jeux geants laval"` | Expr. | Jeux géants | Ville |
| 32 | `[location jeu geant exterieur]` | Exacte | Jeux géants | Plein air |
| 33 | `"location table et chaise"` | Expr. | Tables-chaises-vaisselle | Commerciale directe |
| 34 | `[location chaise pliante]` | Exacte | Tables-chaises-vaisselle | Commerciale directe |
| 35 | `"location tables et chaises laval"` | Expr. | Tables-chaises-vaisselle | Ville |
| 36 | `"location table rive-nord"` | Expr. | Tables-chaises-vaisselle | Ville |
| 37 | `[location vaisselle evenement]` | Exacte | Tables-chaises-vaisselle | Vaisselle |
| 38 | `"location ustensiles reception"` | Expr. | Tables-chaises-vaisselle | Vaisselle |
| 39 | `[evenox]` | Exacte | Marque Évenox | Marque |
| 40 | `"evenox location"` | Expr. | Marque Évenox | Marque |

#### Mots-clés négatifs (liste `EVX-NEG-BASE`, à appliquer à la campagne)

À créer dans Outils > Bibliothèque partagée > Listes de mots-clés à exclure, en correspondance **expression** sauf indication :

```
gratuit
emploi
emplois
job
salaire
stage
benevole
a vendre
acheter
achat
usage
seconde main
kijiji
marketplace
amazon
temu
aliexpress
diy
fabriquer
faire soi meme
tutoriel
gabarit
bricolage
imprimable
png
svg
vecteur
coloriage
police d ecriture
alphabet
lettre de motivation
lettre recommandee
poste canada
lettrage de vitrine
enseigne commerciale
panneau publicitaire
quebec ville
gatineau
sherbrooke
trois-rivieres
ottawa
toronto
saguenay
rimouski
drummondville
granby
joliette
saint-jean-sur-richelieu
appartement
logement
chalet
voiture
camion
remorque
echafaudage
outils
structure gonflable
gonflable
clown
magicien
food truck
limousine
jeu video
jeu de societe
casino
```

À réviser chaque lundi pendant les 15 minutes de termes de recherche : tout terme ayant coûté plus de 15 $ sans ajout au panier part dans la liste.

### 4.7 Calendrier semaine par semaine

| Semaine | Dates 2026 | Meta | Google | Indicateur à regarder | Décision |
|---|---|---|---|---|---|
| S0 | 21–27 sept | Créer campagnes, audiences, 6 règles, plafond 1 000 $ | Créer campagne, 6 groupes, 40 mots-clés, négatifs, 5 règles | Checklist go / no-go (section 3) | Go le 28 seulement si le marquage est vert |
| S1 | 28 sept – 4 oct | Lancement 6 h, 5 pubs, 26 $/j | Lancement, 16,50 $/j, Maximiser les clics à 2,50 $ | Impressions, CPM, CPC, `ViewContent` | Aucun changement, quoi qu'il arrive |
| S2 | 5–11 oct | R3 envoie sa notification vers le 5 oct : on ignore | Exclure les termes hors sujet | Coût par ajout au panier, taux de recherche perdu | Aucun changement structurel |
| S3 | 12–18 oct | Activer `F-forfait-corpo`, pauser la plus faible. Lancer le retargeting si `VUES_30J` ≥ 300 | Monter `Forfaits corpo` à 30 % | Achats cumulés, part de `Forfaits corpo` | Lundi de changement |
| S4 | 19–25 oct | **19 oct** : basculer sur `AddToCart` si < 5 achats du 12 au 18. Activer R2/R3 en mode coupure | Vérifier le seuil des 15 conversions | Achats 7 jours, CPA d'achat (Booqable) | Décision d'événement d'optimisation |
| S5 | 26 oct – 1er nov | Activer `L-noel`, pauser la plus faible. Plafond de compte à 2 000 $ | Plafond de CPC révisable | CPA d'achat, ROAS | Lundi de changement |
| S6 | 2–8 nov | Stabilité | Bascule d'enchères si les 15 conversions sont atteintes | ROAS, fréquence retargeting | Aucun changement structurel |
| S7 | 9–15 nov | Activer `L-chiffres-2027`, pauser la plus faible | Pousser les requêtes de party de Noël | Valeur HT des réservations | Lundi de changement |
| S8 | 16–22 nov | Stabilité, on laisse finir | Stabilité | Cumul 8 semaines vs V6 (27 réservations, 11 300 $ HT) | Aucun changement |
| Verdict | 23–29 nov | Lecture complète, aucune dépense modifiée | Lecture complète | ROAS ≥ 3x ? CPA ≤ 140 $ ? | Continuer, corriger ou arrêter (critères en section 1) |

## 5. Copy et créas (prêtes à coller)

Changement majeur par rapport à la v1 : **les prix sont écrits dans les pubs**. Ils sont déjà publics sur evenox.ca et sur la boutique Booqable, donc les cacher ne protège rien et nous fait payer des clics de curieux. Un prix affiché élimine le clic « juste pour voir combien », pré-qualifie le budget avant la page produit, et rend crédible la promesse « tu réserves en ligne tout de suite » (tunnel chiffré en section 1). On échange du volume de clics contre du taux de conversion. Tous les prix ci-dessous sortent du catalogue publié : aucun prix inventé, aucun rabais promis, il n'existe pas de rabais de quantité chez Évenox.

### 5.1 Les 9 pubs Meta

Une pub par nom de la convention, toutes dans `EVX_META_VENTES_LETTRES` / ensemble `FROID_RiveNord-Laval_25-55`. Limites : 150 caractères pour le texte principal (au-delà, Meta tronque sur mobile), 40 pour le titre. Description par défaut, à utiliser partout où la colonne dit « défaut » : `Dépôt de 20 % en ligne, solde au ramassage.`

| Pub | Texte principal | Car. | Titre | Car. | Description | Bouton | Créa | Entrée |
|---|---|---|---|---|---|---|---|---|
| `L-mariage-love` | LOVE en lettres lumineuses : 280 $ pour 48 h, taxes en sus. Ramassage gratuit à Sainte-Thérèse ou livraison dès 100 $. Choisis ta date en ligne. | 144 | LOVE illuminé : 280 $ / 48 h | 28 | défaut | Réserver | Vidéo A 9:16 | 28 sept. |
| `L-prenom` | Le prénom de la vedette en lettres lumineuses : 70 $ la lettre pour 48 h, taxes en sus. EMMA = 280 $. Ramassage gratuit à Sainte-Thérèse. | 137 | Un prénom lumineux, 70 $/lettre | 31 | 48 h de base, 3 jours x1,5, 1 semaine x2. | Réserver | Vidéo C 9:16 | 28 sept. |
| `L-anniv-40` | 40 ans, ça se fête en grand : 2 chiffres lumineux à 140 $ pour 48 h, taxes en sus. Ramassage gratuit ou livraison dès 100 $. Choisis ta date. | 141 | 40 en lumière : 140 $ / 48 h | 28 | défaut | Réserver | Photo événement 4:5 | 28 sept. |
| `L-corpo-merci` | MERCI en lettres lumineuses pour votre équipe : 350 $ pour 48 h, taxes en sus. Livraison dès 100 $ ou ramassage gratuit à Sainte-Thérèse. | 137 | MERCI lumineux : 350 $ / 48 h | 29 | Facture d'entreprise, dépôt de 20 % par carte. | Réserver | Photo événement 4:5 | 28 sept. |
| `F-forfait-corpo` | Forfait 5 à 7 d'équipe à 1 195 $, taxes en sus, installation et reprise comprises. Party de Bureau à 1 995 $. Réservez votre date en ligne. | 139 | 5 à 7 clé en main : 1 195 $ | 27 | Installation et reprise comprises, dépôt de 20 %. | En savoir plus | Vidéo B 9:16 | 28 sept. |
| `L-paris` | Soirée thème Paris : PARIS en lettres lumineuses, 350 $ pour 48 h, taxes en sus. Ramassage gratuit à Sainte-Thérèse. Choisis ta date en ligne. | 142 | PARIS illuminé : 350 $ / 48 h | 29 | défaut | Réserver | Photo événement 4:5 | 12 oct. |
| `J-jeux-geants` | Jeux géants en location dès 40 $, taxes en sus. Ramassage gratuit à Sainte-Thérèse ou livraison dès 100 $. Choisis ta date au calendrier. | 137 | Jeux géants dès 40 $ | 20 | défaut | Réserver | Photo événement 4:5 | 12 oct. |
| `L-noel` | NOEL en lettres lumineuses : 280 $ pour 48 h, taxes en sus. Ramassage gratuit à Sainte-Thérèse. Les dates de décembre se réservent maintenant. | 142 | NOEL illuminé : 280 $ / 48 h | 28 | défaut | Réserver | Photo comptoir 4:5 | 26 oct. |
| `L-chiffres-2027` | 2027 en chiffres lumineux : 280 $ pour 48 h, taxes en sus. Ramassage gratuit à Sainte-Thérèse ou livraison dès 100 $. Choisis ta date en ligne. | 143 | 2027 en lumière : 280 $ / 48 h | 30 | défaut | Réserver | Vidéo A 9:16 remonté | 9 nov. |

Destinations, avec les UTM de la convention (`utm_content` = nom de la pub) : `L-mariage-love`, `L-corpo-merci` et `L-noel` vers `/product/lettre-illuminee-marquee-letter/`; `L-anniv-40` et `L-chiffres-2027` vers `/product/chiffres-lumineux-geants-marquee-number/`; `L-prenom` et `L-paris` vers `/configurateur/`; `F-forfait-corpo` vers `/nos-forfaits-tout-inclus/`; `J-jeux-geants` vers `/jeux-geants/`.

Vérification avant mise en ligne : LOVE, MERCI, EMMA, PARIS, NOEL et 2027 sont montables avec l'inventaire réel. NOEL s'écrit sans accent, aucune lettre accentuée n'existe. Le « 4 » de `L-anniv-40` est un exemplaire unique, donc un vrai goulot : la pub dit « choisis ta date », jamais « disponible ce week-end ».

### 5.2 Règles d'écriture

1. **Toujours une porte de sortie logistique.** Chaque texte nomme le ramassage gratuit au comptoir de Sainte-Thérèse ou la livraison au barème publié (100 $ jusqu'à 10 km, puis 7 $ du kilomètre jusqu'à 40 km). Jamais « livraison gratuite », sauf forfaits tables et chaises, où elle est incluse jusqu'à 20 km.
2. **Un prix nommé = « taxes en sus » dans la même phrase**, sans exception, y compris dans le texte à l'écran des vidéos.
3. **Tutoiement grand public, vouvoiement corporatif.** `L-corpo-merci` et `F-forfait-corpo` vouvoient d'un bout à l'autre, description et vidéo comprises. Les sept autres tutoient.
4. **Aucune promesse de disponibilité non vérifiée.** Interdits : « disponible samedi », « encore 2 sets », « dernière chance ». Autorisés : « choisis ta date en ligne », « vérifie ta date au calendrier », « les dates de décembre se réservent maintenant ». La seule vérité est le calendrier Booqable, caractère par caractère (section 8).
5. **Vocabulaire verrouillé** : « dépôt de 20 % », « réservation », « ramassage », « livraison ». Jamais « soumission en 24 h » : le prix est affiché, la réservation est immédiate.
6. **Aucun superlatif invérifiable** : ni « les plus belles du Québec », ni « no 1 », ni nombre de clients servis tant qu'il n'est pas sorti de Booqable.
7. **Durée toujours explicite.** Un prix sans durée est faux : c'est 70 $ « pour 48 h ». Pour plus long, écrire le barème (3 jours x1,5, 1 semaine x2, 4 semaines x4).

### 5.3 Annonces Google — groupe `Lettres lumineuses`

Annonce responsive : 10 titres (limite 30) et 4 descriptions (limite 90). Épingler le titre 1 en position 1 et le titre 3 en position 2, laisser le reste tourner.

| # | Titre à coller | Car. |
|---|---|---|
| 1 | Lettres lumineuses en location | 30 |
| 2 | 70 $ la lettre pour 48 h | 24 |
| 3 | Location à Sainte-Thérèse | 25 |
| 4 | Lettres géantes illuminées | 26 |
| 5 | LOVE illuminé : 280 $ / 48 h | 28 |
| 6 | Réserve ta date en ligne | 24 |
| 7 | Ramassage gratuit au comptoir | 29 |
| 8 | Livraison Rive-Nord et Laval | 28 |
| 9 | Dépôt de 20 % à la réservation | 30 |
| 10 | Prénom ou mot en lumière | 24 |

| # | Description à coller | Car. |
|---|---|---|
| 1 | 70 $ la lettre pour 48 h, taxes en sus. Ramassage gratuit à Sainte-Thérèse. | 75 |
| 2 | LOVE 280 $, MERCI 350 $. Dépôt de 20 % en ligne, solde au ramassage. | 68 |
| 3 | Livraison dès 100 $ jusqu'à 10 km, puis 7 $ du kilomètre jusqu'à 40 km. | 71 |
| 4 | Compose ton mot au configurateur et vérifie ta date au calendrier en ligne. | 75 |

Le titre 2 porte le prix et le titre 3 porte la ville : les deux exigences tiennent même si la rotation choisit mal.

### 5.4 Substitutions pour les cinq autres groupes

Même squelette : on remplace les titres 1, 2, 4, 5 et la description 1. Les titres 3, 6, 7, 8, 9, 10 et les descriptions 2, 3, 4 restent tels quels, sauf deux exceptions notées sous le tableau.

| Groupe | Titre 1 | Titre 2 (prix) | Titre 4 | Titre 5 | Description 1 |
|---|---|---|---|---|---|
| `Chiffres lumineux` | Chiffres lumineux géants (24) | 70 $ le chiffre, 48 h (21) | Chiffre géant illuminé (22) | 2027 en lumière : 280 $ (23) | 2027 = 280 $, 40 ans = 140 $, taxes en sus. Ramassage gratuit au comptoir. (74) |
| `Forfaits corpo` | Forfait corpo clé en main (25) | 5 à 7 d'équipe : 1 195 $ (24) | Party de Bureau : 1 995 $ (25) | Forfaits Laval et Rive-Nord (27) | De 1 195 $ à 2 495 $, taxes en sus. Installation et reprise comprises. (70) |
| `Jeux géants` | Location de jeux géants (23) | Jeux géants dès 40 $ (20) | Jeux géants à Sainte-Thérèse (28) | Réserve ta date en ligne (24) | Dès 40 $, taxes en sus. Ramassage gratuit ou livraison dès 100 $. (65) |
| `Tables-chaises-vaisselle` | Location tables et chaises (26) | Forfait mobilier dès 649 $ (26) | Chaise pliante dès 2 $ (22) | Tables et chaises Rive-Nord (27) | Forfait dès 649 $, taxes en sus. Livraison incluse jusqu'à 20 km. (65) |
| `Marque Évenox` | Évenox, location événement (26) | Évenox : prix affichés (22) | Site officiel Évenox (20) | Évenox Sainte-Thérèse (21) | Site officiel. Prix affichés, réservation en ligne, dépôt de 20 % par carte. (76) |

Exception 1 : sur `Tables-chaises-vaisselle`, la description 3 (barème à 100 $) contredit le forfait mobilier livré gratuitement jusqu'à 20 km. Supprimer la description 3 pour ce groupe et n'en garder que trois. Exception 2 : sur `Forfaits corpo`, tout passe au vouvoiement, donc le titre 6 devient « Réservez votre date » (19) et la description 4 sort de la rotation.

### 5.5 Trois scripts de vidéo courte

Vertical 9:16, 1080 x 1920, texte incrusté lisible sans son, pas de musique sous droits.

**Vidéo A — `L-mariage-love`, 7 s, celle qui montre le prix**

| s | Image | Texte à l'écran |
|---|---|---|
| 0-1 | Salle sombre, LOVE s'allume d'un coup | LOVE |
| 1-2 | Travelling latéral devant les 4 lettres | 4 lettres lumineuses |
| 2-3 | Plan large, invités flous derrière | 280 $ pour 48 h |
| 3-4 | Gros plan ampoule, mise au point | taxes en sus |
| 4-5 | Main ouvrant le calendrier sur téléphone | Choisis ta date |
| 5-6 | Comptoir Sainte-Thérèse, lettres au coffre | Ramassage gratuit |
| 6-7 | Écran fixe, logo | Réserve en ligne · evenox.ca |

**Vidéo B — `F-forfait-corpo`, 8 s, forfait corporatif installé**

| s | Image | Texte à l'écran |
|---|---|---|
| 0-1 | Bureau vide avant montage, lumière du jour | Votre 5 à 7 d'équipe |
| 1-2 | Accéléré du montage : tables, nappes, éclairage | On installe tout |
| 2-3 | Suite de l'accéléré, lettres posées au fond | — |
| 3-4 | Plan large, salle terminée et éclairée | 1 195 $, taxes en sus |
| 4-5 | Détail d'une table dressée | Installation et reprise comprises |
| 5-6 | Les employés arrivent, verres à la main | Vous n'avez rien à monter |
| 6-7 | Plan large, ambiance de soirée | Party de Bureau : 1 995 $ |
| 7-8 | Écran fixe, logo | Réservez en ligne · evenox.ca |

**Vidéo C — `L-prenom`, 6 s, ramassage au comptoir**

| s | Image | Texte à l'écran |
|---|---|---|
| 0-1 | Téléphone : on tape un prénom au configurateur | Écris son prénom |
| 1-2 | Les lettres s'affichent au configurateur | 70 $ la lettre / 48 h |
| 2-3 | Comptoir, lettres emballées prêtes | taxes en sus |
| 3-4 | Le client charge les lettres dans son auto | Ramassage gratuit |
| 4-5 | Lettres allumées à la fête, enfants autour | EMMA = 280 $ |
| 5-6 | Écran fixe, logo | Réserve en ligne · evenox.ca |

### 5.6 Brief de tournage

**Au comptoir (215 boul. René-A.-Robert, local 100, Sainte-Thérèse), 1 h.** Lettres emballées alignées sur le comptoir; un client réel ou un proche qui repart avec; chargement dans le coffre d'une auto normale, pas d'un camion; plan du calendrier ouvert sur un téléphone. Tourner en fin d'après-midi, éclairage du comptoir allumé.

**En événement, 2 h, sur deux contrats déjà réservés.** Un événement privé pour les vidéos A et C, un contrat corporatif pour la vidéo B. Arriver 45 minutes avant le montage pour la salle vide et l'accéléré, revenir à la tombée du jour pour la salle pleine. Le plan qui vaut le plus cher est celui de la première minute où les lettres s'allument dans une salle déjà sombre : le négocier d'avance avec le client.

**Matériel.** Téléphone récent en 4K 30 im/s, exposition verrouillée; trépied léger; stabilisateur pour les travellings; petite lumière d'appoint pour les gros plans au comptoir; chiffon pour les ampoules, qui montrent la poussière en gros plan. Autorisation écrite du client avant de filmer un événement privé, aucun visage identifiable sans accord.

**Formats à livrer par pub.** 9:16 (1080 x 1920) pour Reels et Stories, 4:5 (1080 x 1350) pour le fil, plus une image fixe 4:5 tirée du meilleur plan. MP4 H.264, moins de 30 Mo, 8 secondes maximum, aucun texte dans les 14 % du haut ni les 20 % du bas, couverts par l'interface Meta.

**Nommage aligné sur les noms de pubs :** `EVX_<nom-de-la-pub>_<format>_v<numéro>.<extension>`, par exemple `EVX_L-mariage-love_9x16_v1.mp4`, `EVX_L-mariage-love_4x5_v1.jpg`, `EVX_F-forfait-corpo_9x16_v1.mp4`, `EVX_L-chiffres-2027_9x16_v2.mp4`. Le nom du fichier doit être identique à `utm_content`, sinon le rapprochement entre le tableau de bord et les commandes Booqable devient manuel (section 7). Une nouvelle version d'un même angle incrémente `v` et ne change jamais le nom de la pub.

**Échéance.** Les trois vidéos et six photos sont livrées au plus tard le vendredi 25 septembre, pour que les cinq pubs du 28 septembre partent avec leurs créas finales (section 10). Les quatre pubs des vagues suivantes (12 octobre, 26 octobre, 9 novembre) réutilisent des plans existants remontés.

## 6. Pages de destination : ce qu'on corrige avant de payer du trafic

On ne bâtit aucune page neuve. Les pages existent, affichent les prix et portent déjà les composants Booqable. Le travail de la semaine 0 : **corriger ce qui bloque la réservation sur téléphone** et **décider où atterrit chaque clic**. Une page qui ne laisse pas choisir sa lettre sur un iPhone, c'est 100 % du budget brûlé.

Règle de base : aucune campagne n'envoie vers la page d'accueil ni vers `evenox.ca/cart/` (le panier WooCommerce ne sert pas à la location).

### 6.1 Tableau d'affectation : quelle campagne envoie où

| Campagne / groupe | Page d'atterrissage exacte | Pourquoi |
|---|---|---|
| Meta `EVX_META_VENTES_LETTRES` — `L-anniv-40`, `L-corpo-merci`, `L-mariage-love`, `L-prenom`, `L-noel`, `L-paris` | `/product/lettre-illuminee-marquee-letter/` | Un produit, un prix : 70 $/lettre/48 h. Pub et page concordent. |
| Meta — `L-chiffres-2027` | `/product/chiffres-lumineux-geants-marquee-number/` | Groupe produit distinct : un « 2027 » chez les lettres force un 2e clic. |
| Meta — `J-jeux-geants` | `/jeux-geants/` | Plancher 40 $, page qui liste l'offre. |
| Meta — `F-forfait-corpo` | `/forfait-5-a-7-equipe/` au lancement, `/nos-forfaits-tout-inclus/` si la créa montre plusieurs forfaits | La page d'un seul forfait convertit mieux qu'une page de choix : prix unique, bouton « Réserver cette date », valeur détaillée ligne par ligne. Panier de 1 195 $ à 2 495 $ (6.5). |
| Meta `EVX_META_RETARGETING` — `RETARG_Panier7j_Vues30j` | `/configurateur/` | Il connaît le produit; le configurateur ajoute mobilier et déco au panier. |
| Google `Lettres lumineuses` | `/product/lettre-illuminee-marquee-letter/` | Concordance mot-clé / page. |
| Google `Chiffres lumineux` | `/product/chiffres-lumineux-geants-marquee-number/` | Idem. |
| Google `Forfaits corpo` | `/forfait-5-a-7-equipe/` pour les requêtes « 5 à 7 » et « party de bureau », `/forfait-gala-signature/` pour « gala », sinon `/nos-forfaits-tout-inclus/` | Intention « party de bureau », budget prévu. Pages dédiées vérifiées en ligne le 18 septembre. |
| Google `Jeux géants` | `/jeux-geants/` | Intention claire, page dédiée. |
| Google `Tables-chaises-vaisselle` | `/location-table-chaise-pliante/` | La plus complète des trois pages mobilier. |
| Google `Marque Évenox` | `/configurateur/` | Il veut l'inventaire, pas un produit. |

Chaque adresse part avec ses UTM. Dans Meta :

```
https://evenox.ca/product/lettre-illuminee-marquee-letter/?utm_source=meta&utm_medium=paid_social&utm_campaign=lettres_froid&utm_content=L-anniv-40
```

Sur Google, dans « Suffixe d'URL finale », au niveau campagne :

```
utm_source=google&utm_medium=cpc&utm_campaign=recherche_lettres&utm_content=lettres&utm_term={keyword}
```

### 6.2 Page des lettres : le sélecteur de 27 variantes est le point bloquant

Le groupe `marquee-letter` (`630677a9-53ab-4a01-ba62-911abf9ab1d2`) a 27 variantes, donc `bq-variation` doit afficher 27 choix. C'est là que toute la campagne peut mourir en silence.

**Le test, lundi 21 septembre, 15 minutes.** Ton téléphone, pas l'ordi, en navigation privée et sur données cellulaires. Ouvre l'adresse du 6.1, note ce que tu vois avant de défiler. Tape le sélecteur, choisis `M`, une date de début et une de fin, tape le bouton de réservation, rends-toi au paiement. Refais-le sur un Android. Plus de 90 secondes, c'est trop long.

**Symptômes d'échec** : pas de sélecteur (zone blanche ou texte brut figé); un sélecteur vide; 27 lignes en liste déroulante impossibles à viser au pouce; une remise à zéro au changement de dates; ou le bouton ajoute « une lettre » sans que la lettre choisie suive jusqu'à Booqable. Ce dernier cas est le pire : il ne ressemble pas à un bogue, tu t'en aperçois à la commande.

**Deux replis.** A : une **grille de 27 boutons** dans la page Divi, un `bq-product-button` par variante (A à Z plus `&`), chacun pointant son identifiant. B : envoyer le trafic à la fiche `marquee-letter` sur `evenox.booqableshop.com`, où le sélecteur natif fonctionne.

**On tranche pour A.** Le visiteur reste sur `evenox.ca` et garde le pixel, le consentement et la réassurance; la grille se tape au pouce; et elle permet de griser les caractères déjà réservés, ce qui règle du même coup le goulot d'inventaire (`&`, J, K, Q, U, W, X, Y en un seul exemplaire). B ne sert que si la grille n'est pas fonctionnelle le vendredi 25 septembre au soir : on diffuse vers la boutique et on corrige pendant que les pubs tournent.

### 6.3 Au-dessus de la ligne de flottaison, sur téléphone

Ce que le visiteur doit voir **sans défiler**, dans l'ordre, sur les deux pages produit :

1. Une photo de lettres allumées, format carré.
2. Le prix : `70 $ par lettre`, chiffre gros, pas noyé dans un paragraphe.
3. La durée `pour 48 h`, collée au prix. Sans ça, 70 $ paraît cher.
4. Le sélecteur de lettres (6.2).
5. Le sélecteur de dates `bq-date-picker`, ouvert sur le mois courant.
6. Le bouton de réservation, pleine largeur, 48 px de haut.
7. La réassurance sur le dépôt, dessous :

```
Réservez avec 20 % de dépôt. Le solde se paie au ramassage ou à la livraison.
Taxes en sus. Ramassage gratuit à Sainte-Thérèse.
```

Ajoute le barème au-dessus du sélecteur — `3 jours ×1,5 · 1 semaine ×2 · 4 semaines ×4` — et des exemples sous le prix : `LOVE 280 $ · OH BABY 420 $ · 5 lettres 350 $`.

### 6.4 Le configurateur : page d'atterrissage des campagnes larges

`/configurateur/` reçoit le retargeting et la marque. Son rôle : transformer une intention floue (« il me faut de quoi pour mon party ») en panier multi-catégories.

Trois corrections. **Un.** En haut, une phrase, pas un menu : `Choisis tes dates, ajoute ce qu'il te faut, réserve avec 20 %.`, suivie du sélecteur de dates global. **Deux.** Les catégories en tuiles avec leur plancher visible dès le premier écran : chapiteaux dès 300 $, photobooth dès 599 $, jeux dès 40 $, chaises dès 2 $, déco dès 30 $, lettres 70 $. **Trois.** L'ordre pousse le panier : photobooth et chapiteaux d'abord, lettres et jeux ensuite, chaises et déco en bas. Les petits articles se rajoutent tout seuls; les gros, jamais, si on ne les montre pas.

En fin de page : `Un événement complet ? Nos forfaits tout inclus dès 649 $, installation et reprise comprises.`

### 6.5 La page des forfaits : la plus payante du site

`/nos-forfaits-tout-inclus/` porte les paniers de 1 195 $ à 2 495 $ : c'est elle qui décide si l'objectif de 50 000 $/mois tient debout (section 1). Le visiteur type n'est pas un particulier, c'est un responsable de bureau qui doit justifier la dépense à l'interne.

À corriger : prix de chaque forfait visible au premier écran, contenu en liste courte et jamais en paragraphe — « 5 à 7 d'équipe » 1 195 $, « Party de Bureau » 1 995 $, mariage dès 899 $, tables et chaises dès 649 $, avec `prix de lancement` et `installation et reprise comprises`. Ajoute « pour combien de personnes » : première question posée à l'interne.

Bloc de réassurance corporatif, sous les forfaits :

```
Vous achetez pour une entreprise ?
· Facture officielle avec numéros de TPS et TVQ, taxes en sus.
· Bon de commande accepté : evenox.ca@gmail.com ou 514-559-1893.
· Installation et démontage inclus au contrat des forfaits.
· Livraison confirmée 48 h à l'avance, par fenêtre, fins de semaine comprises.
· Réservation en ligne avec 20 % de dépôt, solde à la livraison.
```

Vérifié le 18 septembre : les forfaits se réservent en ligne comme le reste, dépôt de 20 % compris, y compris celui de 1 195 $ et celui de 1 995 $; chacun a sa propre page avec son bouton « Réserver cette date ». La mention « un appel est utile au-delà de 1 000 $ » du configurateur est un conseil, pas une barrière. La soumission sur mesure reste offerte au-delà de 40 km et pour du hors catalogue : seul endroit du site où on l'annonce.

### 6.6 Le passage inter-domaines vers `evenox.booqableshop.com`

Au paiement, le client quitte `evenox.ca` pour `evenox.booqableshop.com`. Il voit l'adresse changer, souvent un habillage différent, et un montant qui n'est pas celui de sa commande mais 20 % de celui-ci. Trois occasions de perdre confiance d'un coup.

Avant le clic, dans `bq-panier` : `Paiement sécurisé par notre boutique de réservation. Vous payez aujourd'hui 20 % — le reste au ramassage ou à la livraison.` Sur la boutique, vérifie que le logo Évenox, l'adresse de Sainte-Thérèse et le 514-559-1893 apparaissent. Puis fais une **commande test complète** en semaine 0, carte réelle puis remboursement : seule façon de confirmer que la lettre, les dates et le dépôt arrivent corrects et que la page de confirmation existe. Marquage de ce parcours : section 7.

### 6.7 Réassurance à poser sur toutes les pages produit

Un bloc unique, réutilisé en bas de chaque page produit :

```
· Prix affichés hors taxes.
· Livraison : 100 $ jusqu'à 10 km, puis 7 $/km jusqu'à 40 km (20 km = 170 $, 40 km = 310 $). Au-delà : soumission sur mesure.
· Ramassage gratuit au comptoir : 215 boul. René-A.-Robert, local 100, Sainte-Thérèse.
· Pièce d'identité au ramassage : le nom sur la carte doit être celui de la personne présente.
· Annulation : voir notre politique d'annulation.
· Avis de clients d'ici.
```

Le lien pointe vers `/politique-annulation/`. Les avis : trois citations courtes, prénom et ville, plus l'étoile Google si la fiche en a. Aucun témoignage inventé.

### 6.8 Panier abandonné : ce que `evenox-relance-panier` doit faire

Le plugin doit se déclencher sur l'abandon du panier Booqable, pas du panier Woo. Il capte le courriel dès qu'il est saisi et envoie **trois courriels : 3 h, 24 h et 72 h** après l'abandon, arrêtés dès qu'une réservation est payée. Filet de sécurité : la liste des réservations non payées de Booqable, vérifiée chaque matin (section 8).

Objet (52 caractères) et corps du premier envoi :

```
Objet : Vos lettres sont encore libres pour vos dates

Bonjour,

Vous avez commencé une réservation chez Évenox. Vos articles ne sont pas
bloqués tant que le dépôt n'est pas payé, et l'inventaire part vite les
fins de semaine.

Réservez avec 20 % de dépôt : le solde se paie au ramassage gratuit ou
à la livraison.

[ Terminer ma réservation ]

Une question ? 514-559-1893 ou evenox.ca@gmail.com.
Alexandre, Évenox
```

Le 24 h reprend ce texte en ajoutant le barème de livraison; le 72 h propose l'appel.

### 6.9 Notes techniques

Vitesse : moins de 3 secondes sur 4G, mesuré avec PageSpeed Insights en mode mobile. Images : tout ce qui dépasse 300 Ko passe en WebP, largeur maximale 1 600 px — les photos de lettres allumées sont les plus lourdes du site. Titres : un seul `H1` par page avec le produit et la ville (« Location de lettres lumineuses géantes — Rive-Nord, Laval, Montréal »), les sections en `H2`, jamais un titre pour grossir du texte. Mesure inter-domaines, consentement et Purchase : section 7.

## 7. Marquage et attribution : réparer les deux domaines

Le clic arrive sur evenox.ca, l'achat se termine sur evenox.booqableshop.com, et les deux domaines ne se parlent pas. Tant que ce n'est pas réparé, tu paierais pour des réservations invisibles. C'est le prérequis no 1 de la section 3.

### 7.1 Diagnostic

| Élément | Posé où | Ce qui casse | Effet sur les chiffres |
|---|---|---|---|
| Google Ads `AW-16776285171` | evenox.ca | Le compte qui reçoit les clics n'a aucune page de confirmation à marquer | 0 conversion là où tu dépenses; enchères intelligentes impossibles; V3 et V4 immesurables |
| `AW-16529262834` + étiquette `AW-16529262834/exXUCJmFouIcEPKR4sk9` | boutique | Conversions logées dans un compte qui ne diffuse probablement pas | Conversions orphelines, jamais rattachées à une campagne |
| GTM `GTM-PP2W2TX9` | evenox.ca seulement | Aucun conteneur sur la boutique | Chaque correction exige une intervention manuelle des deux côtés |
| GA4 `G-BCHQ23SBRF` | boutique seulement | Session coupée au saut de domaine | Le trafic payant devient `evenox.ca / referral`; V2 illisible |
| Pixel Meta `1276015686903486` | boutique seulement | Aucune donnée sur le domaine qui reçoit 100 % des clics Meta | Audience de reciblage vide : `RETARG_Panier7j_Vues30j` (section 4) ne peut pas exister |
| Purchase | non confirmé | Aucun signal d'achat fiable | ROAS affiché 0; optimisation sur l'achat impossible |
| Bannière de consentement | absente | Collecte sans consentement préalable | Non-conformité Loi 25 |

Traduit en argent : sur le test de 3 000 $ (V5), les 27 réservations et 11 300 $ HT attendus (V6) ne remonteraient ni dans Meta ni dans Google. Tu piloterais 3 000 $ à l'aveugle.

### 7.2 Décision no 1 : un seul compte Google Ads

**Vérifier.** Connecte-toi avec evenox.ca@gmail.com, ouvre le sélecteur de comptes en haut à droite, note tous les comptes. Pour chacun : **Outils → Configuration → Balise Google** affiche l'identifiant `AW-…` du compte ouvert. Note aussi **Facturation → Résumé** : dépense à vie et date de création.

**Trancher.** On garde le compte qui porte `AW-16529262834`, parce que son étiquette touche déjà la page de paiement. Hypothèse à confirmer : `AW-16776285171` a été créé automatiquement par le plugin Google Listings and Ads. **Ce qui changerait le choix** : si `AW-16776285171` porte l'historique de dépense et la facturation, on garde celui-là et on recrée l'étiquette sur la boutique. Un historique vaut plus qu'une étiquette, qui se repose en 10 minutes.

**L'autre balise.** Budget à 0 et campagnes en pause dans le compte écarté; retrait de sa balise via GTM; dans WordPress, reconfigurer Google Listings and Ads vers le compte retenu, sinon il réinstalle sa balise tout seul. On ne supprime pas le compte écarté : dormant 90 jours, sans action de conversion active. Aucune fusion, aucune importation croisée.

### 7.3 Décision no 2 : un seul pixel Meta

Le pixel `1276015686903486` est posé aussi sur evenox.ca, toutes pages, via `GTM-PP2W2TX9`. **Jamais un deuxième pixel** : deux pixels coupent l'attribution en deux, vident les audiences de reciblage 7 et 30 jours et privent l'optimisation Purchase de la moitié de son signal. En même temps, dans **Paramètres de l'entreprise** : vérifier le domaine evenox.ca (**Sécurité de la marque → Domaines**, balise meta posée par GTM) et classer les **événements priorisés** : Purchase 1, AddToCart 2, ViewContent 3.

### 7.4 Mesure inter-domaines

**Le vrai correctif :** faire pointer la boutique sur `boutique.evenox.ca` (domaine personnalisé Booqable). Même domaine racine = cookies GA4 partagés, cookie `_fbp` partagé, vérification de domaine possible. À confirmer selon le forfait.

**Côté Google, dans tous les cas.** GA4 → **Administration → Flux de données → flux Web → Configurer les paramètres de la balise → Configurer vos domaines** : ajouter `evenox.ca` ET `evenox.booqableshop.com`. Même écran, **Liste d'exclusion de référents** : ajouter `booqableshop.com` et `evenox.ca`. Le même `G-BCHQ23SBRF` et la même balise Ads doivent exister des deux côtés, sinon le paramètre de liaison `_gl` n'est jamais lu.

**Vérifier en 10 minutes.** Ouvre une adresse de test (7.8), clique jusqu'à la boutique : l'URL d'arrivée doit contenir `_gl=`. Dans GA4 **DebugView**, une seule session, source `google / cpc`, qui traverse les deux domaines. 48 h plus tard, dans **Acquisition de trafic**, la réservation doit apparaître sous `google / cpc`, pas sous `evenox.ca / referral`.

**Côté Meta.** Pas d'équivalent du lien inter-domaines : `_fbp` est posé par domaine racine. Tant que la boutique reste sur `booqableshop.com`, l'attribution du Purchase repose sur la **correspondance avancée automatique** (courriel et téléphone hachés), à activer dans le Gestionnaire d'événements. Vérification : **Test d'événements**, coller l'URL de la boutique, faire une commande test, voir Purchase remonter.

### 7.5 Événements à avoir

| Événement | Meta | GA4 / Google Ads | État réel | Déclencheur | Paramètres |
|---|---|---|---|---|---|
| Vue de page | PageView | page_view | boutique oui, **manque sur evenox.ca côté Meta** | toutes pages | — |
| Vue de produit | ViewContent | view_item | boutique oui, **manque sur evenox.ca** | pages produit et configurateur | content_ids, value, `CAD` |
| Ajout au panier | AddToCart | add_to_cart | boutique oui, **manque sur evenox.ca** (`bq-product-button`) | clic d'ajout | value, `CAD` |
| Début de paiement | InitiateCheckout | begin_checkout | **manque partout** | clic « Passer à la caisse » | value, `CAD` |
| Info de paiement | AddPaymentInfo | add_payment_info | boutique oui | saisie de carte | garder, ne pas optimiser dessus |
| Achat | Purchase | étiquette `AW-16529262834/exXUCJmFouIcEPKR4sk9` | **non confirmé** | page de confirmation | value = **total HT**, `CAD`, transaction_id = no de commande, event_id |

**La valeur est le total hors taxes de la commande, jamais le dépôt de 20 %** (V7). Commande test : LOVE, 4 lettres, 280 $ HT publiés, ramassage au comptoir, livraison 0 $, dépôt encaissé 56 $. Lecture dans Meta **Test d'événements** et dans Google Ads **Objectifs → Conversions → colonne Valeur** :
- **280,00** : correct.
- **56,00** : c'est le dépôt, à corriger.
- **321,93** : les taxes sont incluses (14,975 %), à corriger.

### 7.6 Où poser les scripts sur Booqable

La boutique est hébergée : tu ne touches pas le code comme dans Divi. Le pixel et GA4 y sont déjà, donc les champs existent : **Booqable → Paramètres → Boutique en ligne / Intégrations**, section suivi. Objectif : y coller `GTM-PP2W2TX9`, le même conteneur que le site, pour piloter Meta, GA4 et Ads d'un seul endroit.

**Repli si le forfait n'autorise pas de script personnalisé**, dans cet ordre :
1. **Champs natifs seulement** (identifiants de pixel et GA4). Tu gardes PageView, ViewContent, AddToCart, mais tu perds le contrôle de la valeur : Purchase risque de partir au montant du dépôt. Test 7.5 obligatoire.
2. **Côté serveur.** Webhook Booqable « commande payée » → Make ou Zapier → **API de conversions Meta** et **import de conversions hors connexion** Google Ads. Le `transaction_id` sert de clé de déduplication. Condition : capter `gclid` et `fbclid` dans un champ de commande.
3. **Repli comptable.** Les plateformes n'optimisent que sur AddToCart; les réservations payées se comptent dans l'export Booqable recoupé par UTM. Moins précis, mais le budget reste pilotable (7.10).
4. **Repli structurel.** Domaine personnalisé (7.4) ou passage au panier WooCommerce déjà installé. Décision au verdict du 23 novembre, pas avant.

### 7.7 Consentement Loi 25

La bannière doit **bloquer avant consentement** : GA4, la balise Google Ads, le pixel Meta, les statistiques Jetpack, les suivis Mailchimp. Seul le strictement nécessaire (panier, session, sécurité) se charge d'office. « Tout accepter » et « Tout refuser » de poids visuel égal au premier écran, aucune case précochée, retrait aussi simple que l'acceptation (lien permanent au pied de page), lien vers /politique-de-confidentialite/, preuve de consentement conservée. Même bannière sur la boutique; si Booqable ne le permet pas, c'est un écart à documenter.

**Mode consentement Google v2** dans GTM, version avancée : `ad_storage`, `analytics_storage`, `ad_user_data`, `ad_personalization` à `denied` par défaut, mis à jour au clic. L'interface WP Consent API déjà présente sert de pont : choisir une bannière qui la prend en charge. Meta n'a pas d'équivalent : le pixel se déclenche uniquement sur consentement accordé.

**Perte attendue (V12) : 20 % à 40 % des conversions invisibles en plateforme.** C'est normal, pas un bogue. La vérité comptable reste Booqable; l'écart se suit en colonne Q.

### 7.8 Convention UTM

`utm_source` = `meta` | `google` · `utm_medium` = `paid_social` | `cpc` · `utm_campaign` = `lettres_froid` | `lettres_retarg` | `recherche_lettres` | `recherche_forfaits` | `recherche_jeux` | `recherche_mobilier` · `utm_content` = nom de la pub (Meta) ou identifiant du groupe (`lettres`, `chiffres`, `forfaits`, `jeux`, `mobilier`) · `utm_term` = `{keyword}`, Google seulement.

```
https://evenox.ca/product/lettre-illuminee-marquee-letter/?utm_source=meta&utm_medium=paid_social&utm_campaign=lettres_froid&utm_content=L-mariage-love
https://evenox.ca/configurateur/?utm_source=meta&utm_medium=paid_social&utm_campaign=lettres_retarg&utm_content=L-prenom
https://evenox.ca/product/lettre-illuminee-marquee-letter/?utm_source=google&utm_medium=cpc&utm_campaign=recherche_lettres&utm_content=lettres&utm_term={keyword}
https://evenox.ca/nos-forfaits-tout-inclus/?utm_source=google&utm_medium=cpc&utm_campaign=recherche_forfaits&utm_content=forfaits&utm_term={keyword}
https://evenox.ca/jeux-geants/?utm_source=google&utm_medium=cpc&utm_campaign=recherche_jeux&utm_content=jeux&utm_term={keyword}
```

Sur Google, ne colle pas ça dans chaque annonce : **Paramètres de la campagne → Paramètres supplémentaires → Modèle de suivi**, avec `{lpurl}?utm_source=google&…`. Une seule saisie pour toute la campagne.

### 7.9 Le ROAS Évenox

**ROAS = valeur HT des réservations payées attribuées aux pubs ÷ dépense pub de la même période.**

- **Valeur envoyée aux plateformes** : le total hors taxes de la commande tel que la caisse Booqable le transmet, livraison comprise, taxes exclues. C'est la seule valeur qu'on peut envoyer sans développement sur mesure, donc c'est celle qui sert aux enchères et aux règles automatiques. Jamais le dépôt de 20 %, jamais un montant taxes incluses.
- **Deuxième lecture, dans le Sheet seulement** : une colonne « ROAS hors livraison », où tu soustrais la ligne de livraison de chaque commande, visible dans Booqable. La livraison est un coût refacturé : elle gonfle le revenu sans ajouter de marge. C'est ce deuxième chiffre qui décide d'augmenter un budget, pas celui des plateformes. Sur un LOVE livré à Laval, l'écart est réel : 450 $ envoyés à Meta, 280 $ de vraie valeur.
- Les tableaux des sections 1 et 4 raisonnent sur le total de la commande, livraison comprise, donc sur la même base que les plateformes. Le panier de 420 $ (V1) est un total de commande, pas un montant net de livraison.
- **Fenêtre** : Meta 7 jours après clic, 1 jour après vue. Google 30 jours après clic, dernier clic pour la lecture hebdomadaire. La date qui compte est celle du paiement du dépôt, pas celle de l'événement.
- **Exclusions** : commandes annulées ou remboursées (déduites le lundi suivant), groupe `Marque Évenox` (suivi à part, il ne finance pas le verdict du froid), commandes prises au comptoir ou au téléphone sans clic publicitaire, commandes test.
- **Pas de double comptage** : une seule action de conversion Purchase, une seule étiquette, un seul compte Google Ads. Jamais la même commande en conversion web ET hors connexion; le `transaction_id` sert de clé. **On n'additionne jamais Meta et Google** : chacun s'attribue le même clic. Le total des réservations vient de Booqable.

### 7.10 Tableau de bord hebdomadaire

Google Sheet « EVX – Suivi ads », onglet `Hebdo`, une ligne par campagne et par semaine.

| Col. | Intitulé | Source |
|---|---|---|
| A-C | Semaine (lundi), Plateforme, Campagne | saisie |
| D-F | Dépense $, Impressions, Clics | Meta Ads / Google Ads |
| G-H | CTR %, CPC $ | formule |
| I | Sessions GA4 | GA4 → Acquisition de trafic, filtre source/support |
| J | Ajouts au panier | GA4 `add_to_cart` |
| K-L | Réservations payées, Valeur HT $ | export Booqable, filtre payées, recoupé UTM |
| M-O | CPA $, ROAS, Taux de conv. % | formule |
| P | Conversions vues en plateforme | Meta / Google |
| Q | Écart de mesure % | formule |
| R | Action du lundi | saisie |

```
G2 =SI(E2=0;0;F2/E2)
H2 =SI(F2=0;0;D2/F2)
M2 =SI(K2=0;"";D2/K2)
N2 =SI(D2=0;"";L2/D2)
O2 =SI(I2=0;0;K2/I2)
Q2 =SI(K2=0;"";1-P2/K2)
```

Mise en forme conditionnelle : **M (CPA, V3)** vert ≤ 105 $, jaune 105,01 $ à 140 $, rouge > 140 $ sur 7 jours glissants. **N (ROAS, V4)** vert ≥ 4, jaune 3 à 3,99, rouge < 3. **O (V2)** vert ≥ 1,5 %, jaune 0,8 % à 1,49 %, rouge < 0,8 %. **Q (V12)** vert ≤ 40 %, rouge > 40 %, ce qui signale un problème de marquage et non de consentement.

**Routine du lundi, 1 h.** 30 min : remplir D à L, lire les couleurs, écrire l'action en R. 15 min : Google Ads → Termes de recherche des 7 derniers jours, ajouter mots à exclure et gagnants. 15 min : Booqable → commandes payées de la semaine, recouper les UTM, marquer annulations et remboursements, corriger K et L de la semaine précédente. Les changements de budget ne se font qu'aux lundis verrouillés : 12 octobre, 26 octobre, 9 novembre (voir section 4).

## 8. Opérations : de la commande en ligne à l'événement

En v1, l'opération commençait par une soumission à écrire à la main. Fini. La commande entre déjà payée à 20 %, la date est bloquée, le prix est accepté. Ton travail ne ferme plus la vente : il **protège le revenu encaissé** — le solde de 80 % reste à venir — et **produit des avis**. Une annulation, c'est une réservation payée qui disparaît du ROAS après coup; un client sans avis, c'est un CPA qui reste à 105 $.

### 8.1 Ce qui est automatique, et les trois gestes manuels des 24 h

Booqable fait déjà seul : encaissement du dépôt de 20 % par carte, création de la commande, **blocage des caractères au calendrier** pour les dates choisies, reçu automatique, déclenchement de la conversion (voir section 7).

Trois gestes restent manuels, **dans les 24 h**, dans cet ordre :

1. **Vérifier la disponibilité réelle, caractère par caractère.** Booqable bloque ce qui est au panier, mais le vrai risque est le caractère unique : `&`, `J`, `K`, `Q`, `U`, `W`, `X`, `Y` et les chiffres `4`, `7`, `8`, `9` (voir V9). Ouvre le calendrier, filtre sur `marquee-letter`, confirme que chaque caractère est libre sur la plage complète, tampon de transport compris : 3 jours partis le vendredi immobilisent du jeudi au lundi.
2. **Confirmer par courriel** — lieu, heure, solde, pièce d'identité (script au 8.2). C'est le geste qui fait chuter le taux d'annulation.
3. **Noter la source.** Note interne de la fiche Booqable : `SOURCE: meta-lettres_froid`, `SOURCE: google-recherche_lettres` ou `SOURCE: organique`, lue dans les UTM ou dans GA4. Sans ce champ, le ROAS se calcule sur du sable : Booqable est la vérité comptable, mais il ignore la campagne.

### 8.2 Courriel de confirmation (à coller tel quel)

Objet : `Votre réservation Évenox est confirmée — [DATE]`

```
Bonjour [PRÉNOM],

Votre réservation est confirmée. Commande no [NUMÉRO]
Articles : [ex. L, O, V, E — 4 lettres illuminées]
Période : du [DATE + HEURE] au [DATE + HEURE]

Total : [TOTAL] $ + taxes
Dépôt déjà payé (20 %) : [DÉPÔT] $
Solde à payer sur place : [SOLDE] $ + taxes

[SI RAMASSAGE]
Ramassage sans frais au comptoir :
215 boul. René-A.-Robert, local 100, Sainte-Thérèse
Apportez une pièce d'identité avec photo : le nom sur la
carte doit être celui de la personne qui se présente, sans
exception. Le solde se règle au comptoir.

[SI LIVRAISON]
Livraison au [ADRESSE], frais de [MONTANT] $.
Nous confirmons 48 h avant une fenêtre de livraison, pas
une heure précise. Le solde se règle à l'arrivée du camion.

Question ou changement : répondez ici, ou 514-559-1893.

Alexandre Séguin
Évenox — evenox.ca
```

### 8.3 Paniers abandonnés

Le plugin maison `evenox-relance-panier` est déjà en place; il ne manque que la séquence. **Deux relances : à 1 h, angle dépôt de 20 %; à 24 h, angle rareté du stock.** Jamais de troisième.

**Relance 1 (1 h) :**

```
Objet : Votre panier vous attend

Bonjour,

Votre sélection est encore là, mais rien n'est réservé tant
que le dépôt n'est pas payé. Vous ne payez que 20 %
aujourd'hui pour bloquer vos dates; le solde se règle au
ramassage ou à la livraison.

[ REPRENDRE MA RÉSERVATION ]

Ramassage sans frais à Sainte-Thérèse, livraison dès 100 $.
```

**Relance 2 (24 h) :**

```
Objet : Vos dates sont encore libres — pour l'instant

Bonjour,

Nos lettres se réservent à l'unité, pas en lot, et certaines
n'existent qu'en un seul exemplaire : quand elle est prise
pour votre fin de semaine, elle est prise. Vos dates sont
encore ouvertes aujourd'hui.

[ REPRENDRE MA RÉSERVATION ]

Une question avant de payer ? 514-559-1893.
```

**On arrête à 48 h.** Plus aucun courriel : le contact bascule dans `RETARG_Panier7j_Vues30j` (voir section 4) et la pub prend le relais. Exception unique : panier de plus de 1 000 $, où tu appelles une fois à 24 h au lieu d'envoyer la relance 2.

### 8.4 Appels et courriels entrants

Le prix est affiché : un appel entrant est presque toujours un acheteur prêt qui veut être rassuré. Trente secondes pour le qualifier.

```
« Évenox, bonjour. Trois questions rapides.
 1. C'est pour quelle date ?
 2. Vous êtes dans quelle ville ?
 3. C'est quoi le mot ou les articles que vous voulez ? »
```

**Orientation, sans exception.** *Vers la boutique* — tu envoies le lien de la page produit ou du configurateur et tu restes en ligne pendant qu'il commande — si c'est à moins de 40 km et au catalogue, quel que soit le montant : les forfaits à 1 195 $ et plus se réservent en ligne (vérifié le 18 septembre). C'est le cas par défaut. *Soumission sur mesure* dans deux cas seulement : au-delà de 40 km ou hors catalogue, ou plus de 1 000 $. Tu prends nom, courriel, date, adresse et liste, tu annonces un retour sous 24 h ouvrables, et tu montes la soumission dans Booqable. Le mot « lead » ne vaut que pour cette deuxième branche.

### 8.5 Conflit de disponibilité

Deux commandes veulent le même caractère la même fin de semaine — surtout `A`, `E`, `O` en haute saison, et les uniques toute l'année.

**On tranche dans cet ordre :** 1) le dépôt encaissé en premier garde le caractère, horodatage Booqable comme preuve; 2) si les deux ont un dépôt, la plus ancienne gagne, même si l'autre vaut plus cher — on n'achète pas un litige pour 200 $; 3) au perdant, dans l'ordre : substitution visuellement proche, décalage d'une journée, remboursement intégral.

```
Bonjour [PRÉNOM],

Je vous appelle dans l'heure. La lettre [X] de votre
commande no [NUMÉRO] est déjà engagée pour votre fin de
semaine sur une réservation antérieure : nos lettres sont
en quantité limitée et certaines sont uniques.

Trois options, à votre choix :
1. [MOT DE REMPLACEMENT] aux mêmes dates, même prix;
2. votre mot exact, décalé au [AUTRE DATE];
3. annulation et remboursement complet de votre dépôt de
   [DÉPÔT] $, sous 3 jours ouvrables, sans frais.

L'erreur est de notre côté. Dites-moi votre choix, je m'en
occupe aujourd'hui.

Alexandre Séguin — 514-559-1893
```

### 8.6 Préparation, livraison, retour

**J-2 :** appel ou texto confirmant la fenêtre de livraison (une fenêtre, jamais une heure précise, fins de semaine comprises), l'adresse et la personne sur place. Ramassage : rappel de la pièce d'identité.

**Avant le départ :** vérification à voix haute, pièce par pièce, contre le bon Booqable — chaque caractère, ampoules, câbles, piles. Photo du chargement avant fermeture du camion : ta preuve en cas de litige de dommage.

**À la livraison :** solde encaissé à l'arrivée, avant le déchargement. Installation et démontage seulement s'ils figurent au contrat.

**Au comptoir :** pièce d'identité avec photo, nom identique à la commande, solde payé. Pas de pièce conforme, pas de sortie de matériel.

**Au retour :** inspection devant le client et note au dossier.

### 8.7 Après l'événement

- **J+1, avis.** Courriel court, un seul lien vers la fiche Google : `Merci d'avoir choisi Évenox. Un avis Google de 30 secondes nous aide énormément. [LIEN]`. Chaque avis fait baisser le CPA sans dépenser une piastre.
- **J+3, photo du client**, avec autorisation écrite de réutilisation : ces photos alimentent les créas de la section 5.
- **J+10, corporatif seulement :** relance de réachat vers le prochain cycle — un 5 à 7 en avril appelle un party de bureau en décembre, forfait « Party de Bureau » à 1 995 $. C'est le levier des 50 000 $ (V8).

### 8.8 Récapitulatif des délais

| Moment | Geste | Responsable |
|---|---|---|
| T+0 | Dépôt encaissé, dates bloquées, reçu | Automatique |
| T+1 h | Relance panier 1 | Plugin |
| T+24 h | Relance panier 2 | Plugin |
| T+24 h | Stock vérifié, confirmation, source notée | Alexandre |
| T+48 h | Arrêt des relances, bascule en retargeting | — |
| J-2 | Fenêtre de livraison confirmée | Alexandre |
| J-0 | Vérification au départ, solde, identité | Alexandre |
| J+1 | Demande d'avis Google | Alexandre |
| J+3 | Demande de photo | Alexandre |
| J+10 | Relance de réachat corporatif | Alexandre |

### 8.9 Indicateurs d'opérations qui font bouger le ROAS

| Indicateur | Cible | Alerte | Action |
|---|---|---|---|
| Abandon de panier | sous 70 % (hypothèse) | plus de 80 % sur 2 sem. | C'est la page, pas la pub : section 6 avant toute hausse |
| Délai de confirmation | sous 24 h | une commande à 48 h+ | Bloquer 20 min chaque matin |
| Taux d'annulation | sous 5 % | plus de 8 % sur 4 sem. | Relire la confirmation et le message de rareté : on survend |
| Avis obtenus | 25 % des commandes | sous 15 % sur 4 sem. | Demander à J+0, en main propre au retour |
| Conflits de stock | 0 par mois | 2 ou plus par mois | Retirer des créas les mots à caractères uniques (section 5) |

Ces cinq chiffres se relèvent au tableau de bord du lundi (voir section 7), dans le bloc de 15 minutes de vérification des commandes.

## 9. Risques et garde-fous

Un plan e-commerce à 1 500 $/mois ne meurt pas d'un mauvais ciblage : il meurt d'un bouton cassé, d'une conversion qui ne remonte pas ou d'un caractère en rupture. Chaque signal se lit dans le Sheet « EVX – Suivi ads » du lundi (section 7) ou dans Booqable; chaque action se fait le jour même.

### 9.1 Tableau de synthèse

| # | Risque | Signal mesurable (où le lire) | Action immédiate |
|---|---|---|---|
| 1 | Marquage éclaté entre les deux domaines et les deux comptes Google | Sheet, onglet Marquage : « Conversions Google 7 j » à 0 alors que « Commandes Booqable 7 j » est à 1 ou plus | Commande test d'une lettre (dépôt 14 $). Rien dans Google Ads > Objectifs > Conversions après 3 h : `EVX_GOOGLE_RECH_LOCATION` sur Désactivé |
| 2 | Double comptage du revenu entre `AW-16776285171` et `AW-16529262834` | Sheet : « Valeur Google » dépasse « Valeur Booqable » de 10 % ou plus, ou 2 conversions pour 1 commande | Garder une seule action « Principale », celle de la boutique `AW-16529262834`, et décocher l'autre dans Objectifs > Modifier les objectifs |
| 3 | Sélecteur de lettres ou paiement qui casse : plus personne ne peut acheter | Sheet : « Clics 48 h » normal (60 et plus) et « Réservations 48 h » à 0 | Commande test sur ton téléphone, 10 minutes. Si tu bloques : les deux campagnes sur Désactivé, le 514-559-1893 en story, rallumage après un test réussi |
| 4 | Perte de mesure due au consentement Loi 25 | Sheet, colonne « Écart » : (Booqable − plateformes) ÷ Booqable au-dessus de 40 % | Aucune décision de budget sur les chiffres des plateformes : recompter dans Booqable > Orders et décider avec ce chiffre |
| 5 | Rupture de stock par caractère | Calendrier Booqable, groupe `marquee-letter` : 0 dispo sur 14 jours pour &, J, K, Q, U, W, X, Y, 4, 7, 8 ou 9 | Pause de la seule pub visée (ex. `L-chiffres-2027` si le 7 est pris), budget versé sur `L-mariage-love` ou `L-corpo-merci` |
| 6 | Livraison au-delà de 40 km qui mange la marge | Ville hors zone dans Booqable, ou clics à plus de 40 km dans Google Ads > Paramètres > Emplacements | Exclure la ville dans Emplacements > Exclure et ramener Meta de 35 km à 30 km sur `FROID_RiveNord-Laval_25-55` |
| 7 | Saisonnalité québécoise mal lue | Sheet : colonne « Contexte » vide, ou semaine de novembre comparée à une semaine d'octobre | Remplir « Contexte » chaque lundi (Halloween, congé, fêtes) et ne comparer que semaines 1-2 contre 7-8 |
| 8 | Saturation Meta sur une petite audience | Meta : fréquence 7 j au-dessus de 2,5, ou CPM +30 % avec CTR sous 1 % | Pause de la créa à la fréquence la plus haute, activation de la suivante des 9 pubs, budget inchangé |
| 9 | Modifications trop fréquentes en phase d'apprentissage | Meta, colonne Diffusion : « Apprentissage » plus de 7 jours ou « Apprentissage limité » | Ne rien changer avant le prochain lundi de changement (12 oct., 26 oct., 9 nov.), jamais plus de 20 % de budget d'un coup |
| 10 | Trésorerie : 20 % encaissés, 100 % de la pub payée tout de suite | Sheet : écart entre « Dépense pub » et « Dépôts encaissés » cumulés au-delà de 1 200 $ | Passer à la variante 1 200 $/mois (650 / 400 / 100 / 50) le lundi suivant, sans arrêter la diffusion |
| 11 | Concurrent qui copie les prix affichés | Part d'impressions Google en baisse de 15 points sur 2 semaines, ou concurrent sous 70 $ la lettre | Ne pas baisser les prix : ajouter au copy ce qu'il inclut (48 h, installation au contrat, ramassage gratuit, dépôt 20 %) et pousser les forfaits |
| 12 | Compte publicitaire désactivé | Dépense à 0 $ un matin dans le Sheet, ou courriel de Meta ou Google | Contester le jour même (Meta > Qualité du compte) et verser le budget sur l'autre plateforme |
| 13 | Avis négatifs | Fiche Google sous 4,5, ou tout nouvel avis à 1 ou 2 étoiles | Réponse publique en moins de 24 h, geste concret, appel au client. Jamais de réponse à chaud |
| 14 | Matériel défectueux | Signalement au retour, ou article bloqué dans l'onglet Maintenance de Booqable | Article passé en indisponible dans Booqable le jour même, puis vérifier s'il fait partie d'un mot mis en pub |

### 9.2 Marquage : le risque numéro un

Le marquage est éclaté : `AW-16776285171` et `GTM-PP2W2TX9` sur evenox.ca, `AW-16529262834`, GA4 `G-BCHQ23SBRF` et le pixel Meta `1276015686903486` sur la boutique. Tant que ce n'est pas réparé (section 7), chaque piastre achète des clics sans qu'on sache lesquels paient, et Meta optimise à l'aveugle faute de pixel sur le site qui reçoit les clics. Garde-fou : aucune dépense tant qu'une commande test de bout en bout n'a pas produit une conversion visible dans les deux plateformes.

### 9.3 Tunnel cassé : le pire scénario

Un `bq-date-picker` qui ne charge plus sur iPhone donne la même courbe qu'une bonne campagne : impressions normales, clics normaux, zéro commande. Le seuil est 48 h de clics normaux sans une seule réservation : là, on ne diagnostique pas, on coupe. À 350 $/semaine, un tunnel mort coûte 100 $ en deux jours, plus des clients perdus.

### 9.4 Mesure, consentement et écart Booqable

Avec la bannière Loi 25, on perd 20 % à 40 % des conversions dans les plateformes (hypothèse, à valider après 2 semaines). C'est acceptable à une condition : la vérité comptable reste Booqable, jamais Meta ni Google. Si la colonne « Écart » dépasse 40 %, on continue à diffuser mais budget et pauses se décident sur le décompte Booqable fait à la main.

### 9.5 Stock par caractère

Le plafond est par caractère, pas par set : &, J, K, Q, U, W, X, Y n'existent qu'en un exemplaire, comme les chiffres 4, 7, 8 et 9. Une pub qui pousse un prénom ou « 2027 » peut vendre un caractère déjà réservé, d'où annulation, remboursement et avis fâché. Le contrôle du lundi prend 5 minutes dans le calendrier Booqable, et l'action est toujours la même : couper la pub du mot, jamais l'ensemble.

### 9.6 Trésorerie : l'écart chiffré sur 8 semaines

Hypothèses du cahier de charges : 350 $/semaine de pub, 27 réservations sur 8 semaines, panier 420 $ HT, dépôt de 20 % soit 84 $ par commande, montée progressive de 0 à 6 réservations par semaine.

| Fin de semaine | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Pub payée, cumul | 350 $ | 700 $ | 1 050 $ | 1 400 $ | 1 750 $ | 2 100 $ | 2 450 $ | 2 800 $ |
| Dépôts encaissés, cumul | 0 $ | 84 $ | 252 $ | 504 $ | 840 $ | 1 260 $ | 1 764 $ | 2 268 $ |
| Écart | −350 $ | −616 $ | −798 $ | −896 $ | −910 $ | −840 $ | −686 $ | −532 $ |

Le creux est d'environ 910 $ à la semaine 5 et l'écart reste négatif à la semaine 8 : les 80 % restants, environ 9 000 $ HT, n'entrent qu'au ramassage ou à la livraison, donc après l'événement. Prévoir 1 000 $ de coussin sur la carte avant le 28 septembre, sinon le test s'arrête au pire moment.

### 9.7 Saison, saturation et patience

Du 28 septembre au 22 novembre on traverse la fin du pic estival, un creux de novembre et le début des partys de bureau : une semaine faible peut venir du calendrier, pas des pubs. Sur une audience de 35 km, la fatigue créative arrive en 2 à 3 semaines, d'où la banque de 9 pubs et la rotation au signal de fréquence. La règle qui protège le plus le budget est la plus ennuyeuse : rien ne bouge hors des trois lundis de changement, verdict le 23 novembre.

## 10. Semaine 0, jour par jour (21 au 27 septembre 2026)

Le fil conducteur de la semaine, c'est le marquage. Deux comptes Google Ads, aucun pixel Meta sur le site qui reçoit les clics, un paiement qui finit sur un autre domaine, aucune bannière de consentement : tant que ce n'est pas réparé, chaque piastre est dépensée à l'aveugle. Pages, créas et campagnes sont montées autour de ce chantier. Total : 34 h, dont 15 h de marquage et de mesure.

### Lundi 21 — comptes, accès, plafonds, mobile (5 h + 1 h 30 le soir = 6 h 30)

| Heure et durée | Tâche | Outil et chemin de menu | Résultat vérifiable |
|---|---|---|---|
| 9 h 00, 45 min | Diagnostic des comptes `AW-16776285171` et `AW-16529262834` : dépense, conversions, propriétaire | Google Ads > Outils > Configuration > Conversions, puis Facturation > Résumé | Une ligne écrite par compte : dépense 12 mois, conversions, propriétaire |
| 9 h 45, 45 min | Décision : `AW-16529262834` devient le compte maître, il porte l'étiquette d'achat `exXUCJmFouIcEPKR4sk9` | Admin > Paramètres du compte; vérifier WP > Marketing > Google | Décision datée, zéro campagne active sur `AW-16776285171` |
| 10 h 30, 30 min | Accès et double authentification, Google, Meta, Booqable | Admin > Accès et sécurité; Meta > Paramètres d'entreprise > Personnes | Alexandre administrateur partout, 2FA « Activée » sur trois captures |
| 11 h 00, 20 min | Plafond de dépense du compte | Google Ads > Facturation > Paramètres > Plafond de dépense | Plafond mensuel affiché à 500 $ |
| 11 h 20, 40 min | Vérification du domaine evenox.ca dans Meta | Paramètres d'entreprise > Sécurité de la marque > Domaines; balise dans Divi > Intégration | Pastille verte « Vérifié » à côté d'evenox.ca |
| 13 h 00, 60 min | Test du sélecteur de lettres sur téléphone : `bq-date-picker`, `bq-variation`, `bq-quantity` | iPhone et Android en 4G, sur /configurateur/ et la page lettres | Vidéo d'écran des deux appareils, des dates au bouton de paiement |
| 14 h 00, 60 min | Journal des bogues, classés bloquant, gênant, cosmétique | Google Sheet « EVX – Suivi ads », onglet `Bogues` | Une ligne par bogue, aucune sans date de correction |
| 19 h 00, 90 min | Séance photo au comptoir : mur allumé, LOVE, un prénom, 2027 | Téléphone 4K vertical 9:16, plafonniers éteints | 40 photos et 12 clips dans `creas/2026-09-21/` |

### Mardi 22 — pixel Meta, inter-domaines, consentement (5 h 30)

| Heure et durée | Tâche | Outil et chemin de menu | Résultat vérifiable |
|---|---|---|---|
| 9 h 00, 60 min | Poser le pixel `1276015686903486` sur evenox.ca, le même que la boutique | GTM `GTM-PP2W2TX9` > Balises > Meta Pixel > All Pages > Publier | PageView depuis evenox.ca dans le Gestionnaire d'événements |
| 10 h 00, 60 min | Mesure inter-domaines vers evenox.booqableshop.com, et balise `AW-16529262834` sur evenox.ca | GA4 `G-BCHQ23SBRF` > Admin > Flux de données > Web > Configurer vos domaines | `_gl=` visible au saut, GA4 Temps réel montre une seule session |
| 11 h 00, 45 min | Vérifier les événements de la boutique, chercher Purchase sur la confirmation | Meta > Gestionnaire d'événements > Test d'événements; Booqable > Codes de suivi | Ligne « Purchase présent ou absent » tranchée, pas « à voir » |
| 13 h 00, 75 min | Bannière de consentement Loi 25, refus aussi facile que l'acceptation | WP > Extensions > Complianz > Assistant; GTM > Paramètres > Consentement | Aucun cookie avant clic, balises inactives après « Refuser » |
| 14 h 15, 45 min | Politique de confidentialité : pixels nommés, finalités, droits | WP > Pages > /politique-de-confidentialite/ | Page publiée citant Meta, Google Ads, GA4, Booqable |
| 15 h 00, 45 min | Retest complet, perte de mesure notée (V12 : 20 % à 40 %) | Meta Pixel Helper et Google Tag Assistant | Captures : actives après acceptation, inactives après refus |

### Mercredi 23 — commande test réelle, go ou no-go technique (5 h)

C'est le jour qui décide. Si le revenu ne remonte pas au bon endroit, on ne publie rien lundi : on reporte d'une semaine et on répare. Pas de demi-mesure.

| Heure et durée | Tâche | Outil et chemin de menu | Résultat vérifiable |
|---|---|---|---|
| 9 h 00, 45 min | Préparer le test : 2 lettres à 140 $ HT, dépôt de 20 % à 28 $, date creuse, carte réelle | Entrer par `?utm_source=meta&utm_medium=paid_social&utm_campaign=lettres_froid` | Capture de l'adresse d'entrée, heure notée à la minute |
| 9 h 45, 45 min | Commande test payée à 20 % de bout en bout | Page lettres d'evenox.ca, paiement sur evenox.booqableshop.com | Commande dans Booqable, 28 $ encaissés, courriel reçu |
| 10 h 30, 60 min | Vérifier que Meta reçoit Purchase à 140 $ HT, pas au dépôt de 28 $ (V7) | Meta > Gestionnaire d'événements > Test d'événements, puis Aperçu | Purchase, valeur 140, devise CAD |
| 11 h 30, 45 min | Vérifier Google : conversion `exXUCJmFouIcEPKR4sk9` à 140 $ et session unique | Google Ads > Conversions, colonne État; GA4 > Acquisition de trafic | Achat attribué à meta / paid_social, pas à (direct) |
| 13 h 15, 30 min | Remboursement et annulation | Booqable > Commandes > Rembourser, puis Annuler | Statut « Annulée », 28 $ remboursés, deux lettres libérées |
| 13 h 45, 45 min | Nettoyage des données de test | GA4 > Paramètres des données > Filtres > Trafic interne; Google Ads > Ajustements | IP du comptoir filtrée, note « test 23/09, hors rapports » |
| 14 h 30, 30 min | Verdict technique écrit : marquage, valeur, consentement | Google Sheet, onglet `Go-NoGo` | Trois « oui », ou une date de report noir sur blanc |

### Jeudi 24 — pages, prix, réassurance, créas (6 h)

| Heure et durée | Tâche | Outil et chemin de menu | Résultat vérifiable |
|---|---|---|---|
| 9 h 00, 60 min | Page lettres : 70 $ la lettre pour 48 h, barème x1,5 x2 x4, dépôt, ramassage gratuit | WP > Pages > /product/lettre-illuminee-marquee-letter/ > Divi | Prix et « dépôt de 20 % » lisibles au premier écran mobile |
| 10 h 00, 45 min | Page chiffres, plus l'avertissement de stock (4, 7, 8, 9 uniques) | WP > Pages > /product/chiffres-lumineux-geants-marquee-number/ | Bloc « disponibilité par caractère » publié, 2027 en exemple |
| 10 h 45, 45 min | Configurateur : frictions de lundi corrigées, livraison affichée avant le panier | WP > Pages > /configurateur/ | Barème 100 $ à 10 km puis 7 $ du kilomètre visible avant l'ajout |
| 11 h 30, 30 min | Page des forfaits : 1 195 $, 1 995 $, 899 $ en tête, installation comprise | WP > Pages > /nos-forfaits-tout-inclus/ | Les trois prix au-dessus de la ligne de flottaison mobile |
| 13 h 00, 45 min | Relance de panier abandonné, à 1 h et à 24 h | Booqable > Paramètres > Notifications; plugin `evenox-relance-panier` | Un panier abandonné volontaire déclenche le courriel de 1 h |
| 13 h 45, 105 min | Montage des créas : 4 vidéos de 15 à 20 s et 5 visuels fixes, selon la convention | CapCut en 9:16 et Canva en 1:1 et 4:5, prix à l'écran | 9 créas exportées, aucun titre Meta au-dessus de 40 caractères |
| 15 h 30, 30 min | Relecture mobile des quatre pages corrigées | Téléphone réel | Aucune coquille, aucun prix hors barème publié |

### Vendredi 25 — campagnes publiées mais désactivées (5 h 30)

| Heure et durée | Tâche | Outil et chemin de menu | Résultat vérifiable |
|---|---|---|---|
| 9 h 00, 75 min | `EVX_META_VENTES_LETTRES` et `FROID_RiveNord-Laval_25-55` : 26 $ par jour, rayon de 35 km | Meta > Gestionnaire de publicités > Créer > Ventes | Campagne désactivée, Rive-Sud et Ouest-de-l'Île exclus (V5, V11) |
| 10 h 15, 45 min | Charger les 9 pubs, textes et UTM | Meta > Publicité > Destination > Paramètres d'URL | 9 pubs nommées, `utm_content` conforme à la convention |
| 11 h 00, 30 min | `EVX_META_RETARGETING` à 5 $ par jour et ses audiences | Meta > Audiences > Audience personnalisée > Site web | Panier 7 jours et vues 30 jours créées, taille notée |
| 13 h 00, 105 min | `EVX_GOOGLE_RECH_LOCATION`, 6 groupes, 16,50 $ par jour, 40 km, assets et UTM | Google Ads `AW-16529262834` > Campagnes > Nouvelle > Ventes > Recherche | Partenaires de recherche décochés, modèle de suivi validé par « Tester » |
| 14 h 45, 30 min | Règles automatiques : pause si CPA dépasse 200 $ après 200 $ dépensés | Meta > Règles; Google Ads > Outils > Règles | Deux règles actives, avis à evenox.ca@gmail.com |
| 15 h 15, 45 min | Tableau de bord « EVX – Suivi ads » | Google Sheets, onglets Semaine, Termes, Commandes, Go-NoGo, Bogues | CPA et ROAS calculés sur la valeur HT, pas sur le dépôt |

### Samedi 26 — revue go / no-go, courriels, alertes (3 h 30)

| Heure et durée | Tâche | Outil et chemin de menu | Résultat vérifiable |
|---|---|---|---|
| 9 h 00, 60 min | Revue ligne par ligne de la section 3, vert, jaune ou rouge | Section 3 imprimée, onglet `Go-NoGo` | Chaque ligne colorée, aucun rouge sans correctif daté |
| 10 h 00, 45 min | Modèles de courriels : confirmation, rappel 48 h, relance, demande d'avis | Gmail > Réponses standardisées; Booqable > Modèles | 4 modèles enregistrés, vocabulaire dépôt, ramassage, livraison |
| 10 h 45, 30 min | Alertes de commande, de dépense et de rejet de pub | Booqable > Notifications; Google Ads > Notifications | Une commande de vérification fait sonner le téléphone |
| 11 h 15, 45 min | Agenda : lundis 8 h à 9 h, et lundis de changement du 12, 26 octobre, 9 novembre | Google Agenda, événements récurrents | Blocs visibles jusqu'au 23 novembre |
| 12 h 00, 30 min | Corriger les points rouges restants | Selon le point | Zéro rouge à la fin du bloc |

### Dimanche 27 — armement de la mise en ligne (1 h 30)

| Heure et durée | Tâche | Outil et chemin de menu | Résultat vérifiable |
|---|---|---|---|
| 10 h 00, 30 min | Armer pour lundi 6 h : dates de début, budgets, campagnes laissées désactivées | Meta > Calendrier de l'ensemble; Google Ads > Paramètres > Dates | Les trois campagnes affichent le 28 septembre comme date de début |
| 10 h 30, 30 min | Dernier test sur téléphone : pub, page, panier, écran de paiement sans payer | Téléphone réel en 4G | ViewContent puis AddToCart reçus dans le Gestionnaire d'événements |
| 11 h 00, 15 min | Alarme 5 h 45 et rappel d'activation manuelle | Téléphone et Google Agenda | Alarme visible sur l'écran verrouillé |
| 11 h 15, 15 min | Stock des caractères des quatre prochaines fins de semaine | Booqable > Calendrier | Aucune date annoncée en pub sans stock |

### Lundi 28, 8 h — premier contrôle après 2 heures de diffusion (30 min)

| Heure et durée | Tâche | Outil et chemin de menu | Résultat vérifiable |
|---|---|---|---|
| 8 h 00, 10 min | Vérifier que ça diffuse, aucune pub rejetée | Meta > Gestionnaire de publicités; Google Ads > Campagnes | Impressions et dépense non nulles depuis 6 h |
| 8 h 10, 10 min | Vérifier le marquage en conditions réelles | GA4 > Temps réel; Meta > Gestionnaire d'événements | Clics visibles dans GA4 avec la bonne source |
| 8 h 20, 10 min | Décider : laisser rouler ou couper | Google Sheet, onglet `Semaine` | Une ligne datée avec la décision et l'heure |

### Fin de semaine 0 : ce qui doit être vrai

- [ ] Un seul compte Google actif, `AW-16529262834`; `AW-16776285171` à 0 $ sans campagne.
- [ ] Double authentification active sur Google, Meta et Booqable, Alexandre administrateur partout.
- [ ] Pixel Meta `1276015686903486` sur evenox.ca et sur la boutique, PageView confirmé des deux côtés.
- [ ] Mesure inter-domaines active : un achat égale une seule session GA4, source conservée jusqu'au paiement.
- [ ] Purchase confirmé sur la confirmation Booqable, à la valeur totale HT et non au dépôt.
- [ ] Commande test passée, remontée dans Meta et Google, remboursée, annulée, exclue des rapports.
- [ ] Bannière de consentement conforme à la Loi 25 en ligne, politique de confidentialité à jour.
- [ ] Prix, durée, livraison et dépôt visibles sans défiler sur les quatre pages, sur téléphone.
- [ ] Trois campagnes publiées et désactivées, budgets conformes à V5, UTM testés, règles actives.
- [ ] Tableau de bord « EVX – Suivi ads » prêt, ROAS calculé sur la valeur HT.

### Routine des lundis à partir du 28 septembre (1 h, 8 h à 9 h)

| Bloc | Durée | Quoi |
|---|---|---|
| Tableau de bord | 30 min | Reporter dépense, clics, réservations payées, valeur HT, CPA et ROAS des 7 derniers jours dans l'onglet `Semaine`, comparer au CPA cible de 105 $ et au ROAS de 3,8x, écrire une phrase de verdict. |
| Termes de recherche | 15 min | Google Ads > Statistiques > Termes de recherche : ajouter les bons en exact, exclure les mauvais. Côté Meta, repérer les pubs au coût par achat aberrant. |
| Vérification des commandes | 15 min | Booqable > Commandes : confirmer chaque réservation attribuée aux pubs, mesurer l'écart avec les plateformes (V12), noter le stock des caractères uniques. |

Aucun changement de budget ou de ciblage hors des lundis du 12 octobre, du 26 octobre et du 9 novembre, sauf déclenchement d'une règle. Voir section 4 pour les paliers, section 7 pour le marquage et section 9 pour les garde-fous.

---

### Pages de destination vérifiées le 18 septembre

Chaque forfait a sa propre page avec bouton « Réserver cette date » et composants de réservation Booqable. À utiliser comme destinations plutôt que la page de liste quand la pub ne montre qu'un forfait :

| Page | Contenu |
|---|---|
| `/forfait-5-a-7-equipe/` | Forfait corporatif d'entrée, 1 195 $, valeur détaillée de 1 340 $, livraison et installation comprises |
| `/forfait-gala-signature/` | Forfait gala |
| `/forfait-decor-wow/` | Forfait décor |
| `/forfait-mobilier-evenement/`, `/forfait-mobilier-grande-salle/`, `/forfait-mobilier-reception/` | Forfaits mobilier par taille de salle |

La page du forfait 5 à 7 affiche aussi une note de 4,8 sur 5 sur Google. Deux usages : la reprendre telle quelle dans les créas corporatives, et vérifier si le compte Google Ads est admissible aux évaluations du vendeur, qui affichent les étoiles sous les annonces sans coût additionnel.

---

## Questions restantes

Le relevé du 18 septembre a réglé l'inventaire, les prix, la livraison, le stack et le marquage en place. Il reste six questions, et seules les deux premières changent des chiffres du plan.

1. **Quel est ton panier moyen hors taxes réel et ton taux de conversion des douze derniers mois?** Export des commandes depuis Booqable. Ça remplace l'hypothèse de 420 $ et celle de 1,5 %, donc le coût cible par réservation, le retour attendu et le calcul des 50 000 $. Hypothèse retenue en attendant : 420 $ de panier pondéré et 1,5 % de conversion.
2. **Lequel des deux comptes Google Ads est le tien, et est-ce qu'il y a déjà des campagnes qui tournent dedans?** Une balise est sur le site, une autre sur la boutique. Il faut en retenir une seule, sinon le revenu est compté deux fois ou pas du tout. Hypothèse en attendant : on garde celui qui porte déjà l'étiquette de conversion de la boutique.
3. **Est-ce que ton plugin de relance de panier voit les paniers de la boutique Booqable, ou seulement ceux de WooCommerce?** C'est un plugin WordPress : il ne peut lire que le panier WooCommerce d'evenox.ca, alors que les vraies commandes de location passent par le panier Booqable et se paient sur evenox.booqableshop.com. Si c'est confirmé, la séquence de relance de la section 8 ne se déclencherait jamais. Décision par défaut en attendant : on s'appuie sur le reciblage Meta des paniers de 7 jours (section 4) et sur les relances natives de Booqable, et on ne compte pas sur le plugin.

4. **Ton forfait Booqable permet-il d'ajouter des scripts de suivi à la boutique hébergée?** C'est ce qui décide si on peut poser proprement l'événement d'achat avec sa valeur, ou s'il faut passer par le repli décrit à la section 7.
5. **Quelles sont les heures réelles du comptoir de Sainte-Thérèse pour le ramassage et le retour?** Elles vont dans les pubs, sur les pages produit et dans le courriel de confirmation.
6. **Qui sera le deuxième administrateur des comptes Meta et Google, avec double authentification?** Sans lui, un compte bloqué arrête le test.
