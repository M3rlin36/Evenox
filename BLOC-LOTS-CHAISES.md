# Bloc lots de chaises

À coller **avant** le carrousel des forfaits, sur la fiche de la chaise. Bloc séparé. Pas dans le carrousel.

Sur chaque carte : le **prix par chaise**. Pas le total. Pas l’économie. Pas le pourcentage.

Coller le HTML d’une chaise, sans les fences Markdown. Aucune ligne vide si vous ajoutez un `<style>` ou un `<script>` : WordPress coupe le bloc.

Pas de CSS nouveau. Les classes existent déjà.

---

## 1. Gabarit — une chaise

Dupliquez le `div.evx-forfait` une fois par lot.

```html
<section class="evx-sect">
<div class="evx-in">
<p class="evx-sur">En volume</p>
<h2 class="h2">Les lots</h2>
<div class="evx-forfaits">
<div class="evx-forfait">
<p class="evx-f-nom">@@NOM@@</p>
<p class="evx-f-prix">@@PRIX@@</p>
<p class="evx-f-unit">/ chaise</p>
<a class="evx-f-geste" href="@@HREF@@">Voir le lot</a>
</div>
</div>
</div>
</section>
```

| Jeton | Ce qui change | Exemple |
|---|---|---|
| `@@NOM@@` | Quantité du lot | Lot de 50 |
| `@@PRIX@@` | Prix par chaise | 1,75 $ |
| `@@HREF@@` | Adresse de la page du lot | `/lot-de-50-chaises-pliantes-brunes/` |

Surtitre, titre, unité et lien restent les mêmes d’une chaise à l’autre.

Le lien `.evx-f-geste` doit faire 49 px de haut, minimum. Le site l’applique déjà ailleurs. Rien ajouté ici.

---

## 2. HTML rempli — cinq chaises

### Chaise brune

```html
<section class="evx-sect">
<div class="evx-in">
<p class="evx-sur">En volume</p>
<h2 class="h2">Les lots</h2>
<div class="evx-forfaits">
<div class="evx-forfait">
<p class="evx-f-nom">Lot de 50</p>
<p class="evx-f-prix">1,75 $</p>
<p class="evx-f-unit">/ chaise</p>
<a class="evx-f-geste" href="/lot-de-50-chaises-pliantes-brunes/">Voir le lot</a>
</div>
<div class="evx-forfait">
<p class="evx-f-nom">Lot de 100</p>
<p class="evx-f-prix">1,50 $</p>
<p class="evx-f-unit">/ chaise</p>
<a class="evx-f-geste" href="/lot-de-100-chaises-pliantes-brunes/">Voir le lot</a>
</div>
</div>
</div>
</section>
```

### Chaise blanche

```html
<section class="evx-sect">
<div class="evx-in">
<p class="evx-sur">En volume</p>
<h2 class="h2">Les lots</h2>
<div class="evx-forfaits">
<div class="evx-forfait">
<p class="evx-f-nom">Lot de 40</p>
<p class="evx-f-prix">2,75 $</p>
<p class="evx-f-unit">/ chaise</p>
<a class="evx-f-geste" href="/lot-de-40-chaises-pliantes-blanches/">Voir le lot</a>
</div>
<div class="evx-forfait">
<p class="evx-f-nom">Lot de 60</p>
<p class="evx-f-prix">2,50 $</p>
<p class="evx-f-unit">/ chaise</p>
<a class="evx-f-geste" href="/lot-de-60-chaises-pliantes-blanches/">Voir le lot</a>
</div>
<div class="evx-forfait">
<p class="evx-f-nom">Lot de 100</p>
<p class="evx-f-prix">2,25 $</p>
<p class="evx-f-unit">/ chaise</p>
<a class="evx-f-geste" href="/lot-de-100-chaises-pliantes-blanches/">Voir le lot</a>
</div>
</div>
</div>
</section>
```

### Chaise noire rembourrée

```html
<section class="evx-sect">
<div class="evx-in">
<p class="evx-sur">En volume</p>
<h2 class="h2">Les lots</h2>
<div class="evx-forfaits">
<div class="evx-forfait">
<p class="evx-f-nom">Lot de 40</p>
<p class="evx-f-prix">3,50 $</p>
<p class="evx-f-unit">/ chaise</p>
<a class="evx-f-geste" href="/lot-de-40-chaises-pliantes-noires-rembourrees/">Voir le lot</a>
</div>
<div class="evx-forfait">
<p class="evx-f-nom">Lot de 70</p>
<p class="evx-f-prix">3,00 $</p>
<p class="evx-f-unit">/ chaise</p>
<a class="evx-f-geste" href="/lot-de-70-chaises-pliantes-noires-rembourrees/">Voir le lot</a>
</div>
</div>
</div>
</section>
```

### Chaise Martha

```html
<section class="evx-sect">
<div class="evx-in">
<p class="evx-sur">En volume</p>
<h2 class="h2">Les lots</h2>
<div class="evx-forfaits">
<div class="evx-forfait">
<p class="evx-f-nom">Lot de 40</p>
<p class="evx-f-prix">4,50 $</p>
<p class="evx-f-unit">/ chaise</p>
<a class="evx-f-geste" href="/lot-de-40-chaises-martha/">Voir le lot</a>
</div>
<div class="evx-forfait">
<p class="evx-f-nom">Lot de 60</p>
<p class="evx-f-prix">4,00 $</p>
<p class="evx-f-unit">/ chaise</p>
<a class="evx-f-geste" href="/lot-de-60-chaises-martha/">Voir le lot</a>
</div>
</div>
</div>
</section>
```

### Chaise Chiavari

```html
<section class="evx-sect">
<div class="evx-in">
<p class="evx-sur">En volume</p>
<h2 class="h2">Les lots</h2>
<div class="evx-forfaits">
<div class="evx-forfait">
<p class="evx-f-nom">Lot de 50</p>
<p class="evx-f-prix">7,50 $</p>
<p class="evx-f-unit">/ chaise</p>
<a class="evx-f-geste" href="/lot-de-50-chaises-chiavari/">Voir le lot</a>
</div>
<div class="evx-forfait">
<p class="evx-f-nom">Lot de 100</p>
<p class="evx-f-prix">7,00 $</p>
<p class="evx-f-unit">/ chaise</p>
<a class="evx-f-geste" href="/lot-de-100-chaises-chiavari/">Voir le lot</a>
</div>
</div>
</div>
</section>
```

---

## 3. CSS

Aucun. Les classes `evx-sect`, `evx-in`, `evx-sur`, `h2`, `evx-forfaits`, `evx-forfait`, `evx-f-nom`, `evx-f-prix`, `evx-f-unit` et `evx-f-geste` sont déjà sur le site.

Pas d’`id="evx-forf-piste"` : cet identifiant appartient au carrousel des forfaits. Deux fois le même `id` sur la fiche casserait la page.

---

## 4. Adresses des lots

Les trois adresses abrégées du brief (`/lot-de-60-…/`, `/lot-de-100-…/`, `/lot-de-70-…/`) sont complétées sur le modèle de la première adresse de la même chaise. Pas vérifiées en ligne.

| Chaise | Lot | Prix par chaise | Adresse |
|---|---|---|---|
| Brune | 50 | 1,75 $ | `/lot-de-50-chaises-pliantes-brunes/` |
| Brune | 100 | 1,50 $ | `/lot-de-100-chaises-pliantes-brunes/` |
| Blanche | 40 | 2,75 $ | `/lot-de-40-chaises-pliantes-blanches/` |
| Blanche | 60 | 2,50 $ | `/lot-de-60-chaises-pliantes-blanches/` |
| Blanche | 100 | 2,25 $ | `/lot-de-100-chaises-pliantes-blanches/` |
| Noire rembourrée | 40 | 3,50 $ | `/lot-de-40-chaises-pliantes-noires-rembourrees/` |
| Noire rembourrée | 70 | 3,00 $ | `/lot-de-70-chaises-pliantes-noires-rembourrees/` |
| Martha | 40 | 4,50 $ | `/lot-de-40-chaises-martha/` |
| Martha | 60 | 4,00 $ | `/lot-de-60-chaises-martha/` |
| Chiavari | 50 | 7,50 $ | `/lot-de-50-chaises-chiavari/` |
| Chiavari | 100 | 7,00 $ | `/lot-de-100-chaises-chiavari/` |

---

## Ce que je n'ai pas pu faire

Je n’ai pas accès au site. Je n’ai pas ouvert WordPress, ni Booqable, ni une fiche. Je n’ai pas collé le bloc.

Je n’ai pas vu le HTML réel d’une carte `.evx-forfait` sur evenox.ca. Le gabarit reprend le vocabulaire de classes donné, pas une page relevée.

Je n’ai pas mesuré `.evx-f-geste`. Si la règle des 49 px est limitée au carrousel `#evx-forf-piste`, les liens de ce bloc n’auront pas la cible du pouce. Je n’ai pas ajouté de CSS pour ne pas doubler une règle déjà là.

Je n’ai pas vérifié que les 11 pages de lots existent, ni que les trois adresses complétées sont les bonnes.

Je n’ai pas revu aujourd’hui l’adresse de chaque fiche chaise. Un relevé du 19 août dans le dépôt donnait `/product/chaise-pliante-en-location/` (brune), `/product/chaise-pliante-blanche/`, `/product/chaise-pliante/` (noire rembourrée), `/product/chaise-martha/`, `/product/chaise-chiavari/`. Non revérifié.

Je n’ai pas écrit la durée sur les cartes. Le brief donne 48 h pour la location de base, pas pour ces lots.

Je n’ai pas écrit le dépôt, la livraison, le montage, ni une zone. Hors de ce bloc.
