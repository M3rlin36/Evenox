# Templates prêts à déployer

---

## 1. Template d'article de blogue (à suivre à la lettre)

```
H1 : [Question exacte que le client tape dans Google]

[Paragraphe 1 — 50 mots max] Réponse directe à la question, avec un chiffre.
Google affiche ce paragraphe en extrait enrichi. Exemple :
"Un party de bureau clé en main au Québec coûte entre 45 $ et 120 $ par personne
en 2026. Pour 50 employés, prévois 3 500 $ à 6 000 $ tout inclus : mobilier,
décoration, animation, livraison et installation."

H2 : Le tableau des prix 2026
[TABLEAU OBLIGATOIRE — 5 à 10 lignes, colonnes : Élément | Prix | Ce qui est inclus]

H2 : Ce qui fait varier le prix
[5 facteurs, un paragraphe chacun]

>> CTA #1 (encadré au milieu de l'article) :
"Tu veux le chiffre exact pour ton événement ? Nos forfaits clé en main partent
à [X] $, livraison et installation incluses. → Voir les forfaits"

H2 : [Section propre au sujet — idées, checklist, comparatif]

H2 : Les erreurs qui coûtent cher
[3 à 5 erreurs concrètes]

H2 : Questions fréquentes
[5 questions — activer le schema FAQPage dans Yoast]

>> CTA #2 (fin) :
"Évenox s'occupe de tout : livraison, installation, ramassage. 1 000+ événements
livrés, 4,8/5 sur Google. → Obtenir ma soumission en 24 h"
```

**Non négociable dans chaque article :** 1 tableau de prix · 5 FAQ · 3 liens internes · 2 CTA · 1 image originale de tes événements (pas de banque d'images).

---

## 2. Template de page ville

```
H1 : Location [Service] à [Ville]

[Intro 80 mots] Service + ville + délai de livraison réel + prix de départ.

H2 : Nos forfaits [Service] à [Ville]
[3 forfaits avec prix affichés + bouton réserver]

H2 : Livraison et installation à [Ville]
[UNIQUE] Distance réelle, temps de route, tarif de livraison, créneaux
(livraison 13-17 h, ramassage 8-10 h et 17-19 h).

H2 : Où nous livrons à [Ville]
[UNIQUE] 3 salles/lieux réels que tu desservis dans la ville.

H2 : Ce que disent nos clients de [Ville]
[UNIQUE] 1 à 2 vrais témoignages + photo d'un événement réel du secteur.

H2 : Questions fréquentes — [Ville]
[5 FAQ dont au moins 2 spécifiques à la ville]

CTA : Soumission en 24 h
```
Schema à garder : `LocalBusiness` + `Service` + `BreadcrumbList` + `FAQPage` (comme sur `/location-photobooth-laval/`, qui est ton modèle de référence).

---

## 3. Pinterest — le canal le plus sous-exploité de ton marché

**Pourquoi :** mariage, décoration, fête d'enfant, gender reveal = les 4 catégories les plus recherchées sur Pinterest, et une épingle vit 6 à 12 mois (vs 24 h sur Instagram).

### Installation (1 h, une seule fois)
1. Compte Pinterest **Business** (gratuit)
2. Vérifier le domaine evenox.ca (Paramètres → Domaines revendiqués)
3. Activer les **Rich Pins** (schema Product déjà en place sur le site ✅)
4. Créer 10 tableaux :
   `Décoration de mariage Québec` · `Party de bureau et 5 à 7` · `Fête d'enfant clé en main` ·
   `Gender reveal` · `Demande en mariage Montréal` · `Jeux géants et gonflables` ·
   `Lettres et chiffres lumineux` · `Photobooth et vidéobooth 360` · `Décor de table réception` ·
   `Événement corporatif Montréal`

### Routine hebdomadaire (1,5 h, 20-25 épingles)
- 15 épingles = photos de tes événements réels (tu en as des centaines)
- 5 épingles = visuels d'articles de blogue (format texte sur photo)
- 5 épingles = fiches produits (Rich Pin avec prix)

### Formule de titre d'épingle
`[Résultat désiré] + [lieu] + [prix ou chiffre]`
→ « Décor de mariage champêtre à Laval — forfait clé en main dès 899 $ »
→ « Party de bureau 50 personnes — tout inclus, livré et installé »

### Format
1000 × 1500 px · texte lisible sur mobile · logo discret en bas · lien vers la page correspondante (jamais l'accueil).

---

## 4. Google Business Profile — 2 publications/semaine

**Publication type A — Offre (lundi)**
```
🎉 [Saison/occasion] approche

Forfait [nom] : [ce qui est inclus] — dès [prix] $
Livraison, installation et ramassage inclus sur la Rive-Nord, à Laval et à Montréal.

Réservation en ligne 24/7 → [lien vers la page forfait]
```

**Publication type B — Preuve (jeudi)**
```
📸 [Type d'événement] livré à [Ville] la semaine dernière

[1 phrase sur le setup : X tables, Y chaises, photobooth, décor]
Installé en [durée]. L'équipe du client n'a touché à rien.

Voir nos forfaits → [lien]
```

**Règles GBP :** 1 photo neuve par publication · toujours nommer une ville · toujours un lien vers une page profonde (jamais l'accueil) · répondre à 100 % des avis en moins de 24 h.

---

## 5. Script de demande d'avis Google (envoyer 48 h après l'événement)

```
Bonjour [Prénom],

Merci de nous avoir fait confiance pour [type d'événement] du [date].
J'espère que tout s'est déroulé comme vous le vouliez.

Si vous avez 30 secondes, un avis Google nous aide énormément —
c'est ce qui permet à d'autres [entreprises / futurs mariés / familles]
de nous trouver :

👉 [lien direct vers le formulaire d'avis Google]

Merci beaucoup,
[Ton nom] — Évenox
```

**Objectif : 10 avis/semaine.** Envoie-le à tous les clients, pas juste ceux que tu penses satisfaits. Automatise via un courriel programmé 48 h après la date de location dans ton système.

---

## 6. Instagram / TikTok — 3 vidéos par semaine

| Format | Description | Fréquence |
|---|---|---|
| **Timelapse d'installation** | 30 s, salle vide → salle prête. Texte : « Setup 80 personnes, 2 h, clé en main » | 1/sem |
| **Avant / après** | Photo avant, transition, photo après. Le format le plus partagé. | 1/sem |
| **Réponse à une question** | 30 s face caméra : « Combien ça coûte un party de bureau ? » → renvoie à l'article | 1/sem |

Lien en bio → page de forfaits (pas l'accueil). Même sujet que l'article de la semaine : tu rédiges une fois, tu publies partout.
