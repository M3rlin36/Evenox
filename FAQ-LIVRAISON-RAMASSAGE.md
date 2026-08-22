# FAQ — Livraison et ramassage

Quatre questions fréquentes, prêtes à poser sur une fiche produit.
Elles sortent du corps de la fiche : plus de paragraphe « Livraison » ou « Ramassage » au-dessus du tableau.

---

## 1. Les quatre questions-réponses

### Est-ce que vous livrez ?

Oui. La livraison s'ajoute au tarif de location. Elle n'est pas comprise dans le prix affiché.

### Combien coûte la livraison ?

100,00 $ pour les 10 premiers km. Ensuite, 7,00 $/km jusqu'à 40 km. Au-delà, soumission sur mesure.

### Est-ce que je peux venir chercher moi-même ?

Oui. Le ramassage se fait au 215, boulevard René-A.-Robert, local 100, Sainte-Thérèse. Le solde se règle au ramassage.

### Est-ce que vous installez ?

Non. Le montage n'est pas compris. Ni dans la location, ni dans la livraison.

---

## 2. Le même contenu, prêt à coller

Bloc unique : le CSS d'abord, puis les quatre questions. Aucune ligne vide dans le `<style>`.

```html
<style>.evx-faq{margin:1.5rem 0 2rem;border-top:1px solid rgba(0,0,0,.15);}.evx-faq-item{border-bottom:1px solid rgba(0,0,0,.15);}.evx-faq-item>summary{cursor:pointer;list-style:none;position:relative;padding:.85rem 1.75rem .85rem 0;font-weight:600;line-height:1.35;}.evx-faq-item>summary::-webkit-details-marker{display:none;}.evx-faq-item>summary::after{content:"+";position:absolute;right:0;top:50%;transform:translateY(-50%);font-weight:400;}.evx-faq-item[open]>summary::after{content:"\2212";}.evx-faq-item>p{margin:0 0 1rem;max-width:38rem;line-height:1.45;}.evx-faq-item>summary:focus-visible{outline:2px solid currentColor;outline-offset:2px;}</style>
<div class="evx-faq">
<details class="evx-faq-item"><summary>Est-ce que vous livrez ?</summary><p>Oui. La livraison s'ajoute au tarif de location. Elle n'est pas comprise dans le prix affiché.</p></details>
<details class="evx-faq-item"><summary>Combien coûte la livraison ?</summary><p>100,00 $ pour les 10 premiers km. Ensuite, 7,00 $/km jusqu'à 40 km. Au-delà, soumission sur mesure.</p></details>
<details class="evx-faq-item"><summary>Est-ce que je peux venir chercher moi-même ?</summary><p>Oui. Le ramassage se fait au 215, boulevard René-A.-Robert, local 100, Sainte-Thérèse. Le solde se règle au ramassage.</p></details>
<details class="evx-faq-item"><summary>Est-ce que vous installez ?</summary><p>Non. Le montage n'est pas compris. Ni dans la location, ni dans la livraison.</p></details>
</div>
```

---

## 3. Où poser le bloc

Sur la fiche : **après** le tableau « Ce qui est vérifié », **avant** la section « Souvent loué avec ».
