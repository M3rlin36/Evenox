# Fiches produits — bloc conditions court

Remplace le bloc d’environ 700 mots recopié sur les fiches.
Une seule longueur à coller. La même sur les 104 fiches.

Lien unique : `/conditions-de-location-evenox/`

---

## Recommandation

**Proposition B — deux phrases.**

C’est la longueur demandée : deux ou trois phrases, l’essentiel, puis la page.
Le client voit tout de suite comment il paie, où il ramasse, et ce qui n’est pas
dans le prix. Le reste — durée, grille de livraison, annulation, météo, retard,
bris — reste sur la page, ou dans la FAQ livraison-ramassage si vous la posez
aussi sur la fiche.

La ligne A est trop sèche : pas d’adresse, le client rappelle.
Le paragraphe C recommence à doubler la page et la FAQ. Il affirme aussi une
durée de base de 48 h que toutes les fiches n’utilisent pas.

---

## À coller (B)

Aucun `<style>`, aucun `<script>`. Une seule balise `<p>`. Aucune ligne vide
à l’intérieur.

```html
<p class="evx-cond-court">Vous réservez avec un dépôt de 20 % ; le solde se règle au ramassage, au 215, boulevard René-A.-Robert, local 100, Sainte-Thérèse. La livraison s'ajoute au tarif et le montage n'est pas compris — <a href="/conditions-de-location-evenox/">lire les conditions de location</a>.</p>
```

---

## Proposition A — une ligne (24 mots)

Dit le minimum. Utile seulement si le prix, l’adresse et la FAQ sont déjà au-dessus.

```html
<p class="evx-cond-court">Dépôt de 20 % à la réservation, solde au ramassage — la livraison s'ajoute, le montage n'est pas compris (<a href="/conditions-de-location-evenox/">conditions de location</a>).</p>
```

---

## Proposition B — deux phrases (40 mots)

Même HTML que « À coller », repris ici pour comparer.

```html
<p class="evx-cond-court">Vous réservez avec un dépôt de 20 % ; le solde se règle au ramassage, au 215, boulevard René-A.-Robert, local 100, Sainte-Thérèse. La livraison s'ajoute au tarif et le montage n'est pas compris — <a href="/conditions-de-location-evenox/">lire les conditions de location</a>.</p>
```

---

## Proposition C — court paragraphe (74 mots)

Les faits établis, en trois phrases. À coller seulement si la FAQ
livraison-ramassage n’est pas déjà sur la fiche : sinon le tarif et l’adresse
paraissent deux fois.

```html
<p class="evx-cond-court">Le prix affiché vaut 48 h : 3 jours × 1,5 · 1 semaine × 2 · 4 semaines × 4. Vous réservez avec un dépôt de 20 % ; le solde se règle au ramassage, au 215, boulevard René-A.-Robert, local 100, Sainte-Thérèse. La livraison s'ajoute (100,00 $ pour les 10 premiers km, puis 7,00 $/km jusqu'à 40 km, soumission au-delà) et le montage n'est pas compris : <a href="/conditions-de-location-evenox/">lire les conditions de location</a>.</p>
```

**Mise en garde sur le 48 h.** Un relevé déjà présent dans ce dépôt (19 août)
montrait d’autres bases sur certaines fiches : 24 h, 26 h, 48 h. Ce n’est pas
établi ici, et je n’ai pas rouvert le site. Si une fiche affiche déjà une autre
durée, ne collez pas le C tel quel : passez au B, ou retirez la première phrase.

---

## Ce que chaque proposition dit

| Fait | A | B | C |
| --- | --- | --- | --- |
| Dépôt 20 %, solde au ramassage | oui | oui | oui |
| Adresse, local 100, Sainte-Thérèse | non | oui | oui |
| La livraison s’ajoute | oui | oui | oui |
| Grille 100,00 $ / 7,00 $/km / 40 km | non | non | oui |
| Le montage n’est pas compris | oui | oui | oui |
| Durée 48 h et paliers | non | non | oui |
| Lien vers la page | oui | oui | oui |

Rien d’autre. Pas d’heures, pas d’annulation, pas de météo, pas de mode de
paiement, pas de taxes, pas de véhicule. Ces points ne sont pas dans les faits
établis de ce chantier, ou ils se contredisent ailleurs dans le dépôt. Silence.

---

## Où coller

À la place du bloc de 700 mots, sur chaque fiche.

Si le bloc FAQ livraison-ramassage est aussi collé : **B d’abord, FAQ ensuite**.
Ne collez pas C et la FAQ ensemble.

Aucun `<style>`, aucun `<script>`. Une ligne par bloc HTML. Aucune ligne vide
à l’intérieur : wpautop transformerait une ligne vide en paragraphe et
couperait le bloc.

---

## Formules écartées

Aucune des six formulations interdites. « La livraison s'ajoute » et « le
montage n'est pas compris » sont les formulations déjà utilisées dans la FAQ
du dépôt. Pas « livraison incluse », pas « livraison gratuite », pas
« montage compris ».

---

## Ce que je n'ai pas pu faire

- Ouvrir WordPress, Booqable ou une fiche en ligne : interdit sur ce chantier.
  Je n’ai pas vérifié le bloc de 700 mots actuel, ni les 104 fiches, ni la page
  `/conditions-de-location-evenox/`.
- Coller le HTML dans WordPress, ni le pousser dans Booqable.
- Confirmer que les 104 fiches portent encore le même bloc, ni que la durée de
  base est 48 h partout.
- Trancher entre B et la FAQ si les deux doivent vivre sur la même fiche : les
  deux se complètent, C et la FAQ se doublonnent.
- Inventer des heures de ramassage, un délai d’annulation, une règle météo ou
  un mode de paiement : ces faits ne m’ont pas été donnés.
