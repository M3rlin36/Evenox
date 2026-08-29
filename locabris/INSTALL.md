# Coller dans WordPress — 20 minutes

Le header et le footer Divi restent en place. On remplace seulement le contenu cassé.

## 1. Soumission

Pages → `Que pouvons-nous faire pour vous ?` → éditeur Divi → module Code.
Effacer l’ancien module. Coller `modules/soumission.html`.
Yoast : title + meta du fichier `seo/yoast-et-redirections.md`.

## 2. Contact

Pages → Contact → module Code.
Coller `modules/contact.html` à la place de l’ancien.

## 3. Boutique

- WooCommerce → la page Boutique → description : coller `modules/shop-description.html`.
- Divi → Options du thème → CSS personnalisé : coller `modules/shop-footer.css`.
- Enlever le module Code qui dumpait le CSS en texte.

## 4. Fiche abri

Divi → Theme Builder → template Produit.
Remplacer le résumé vide par un module Code : `modules/product-abri.html`.
L’image de repli est `locabris-img-3214.jpg`. Brancher l’image mise en avant Woo si le template le permet.
Le shortcode `[add_to_cart]` ne s’affiche que dans WordPress.

## 5. Politique

Pages → Politique & Confidentialité → coller `modules/privacy.html`.

## 6. SEO

Coller les titles / metas / 301 de `seo/yoast-et-redirections.md`.

## Test après collage

1. Soumission : Achat → choisir abri + pose → champs vides = erreur inline. Pas de merci avant envoi.
2. Contact : pas de « Message envoyé » au chargement.
3. `/shop/` : plus de CSS visible.
4. Une fiche abri : photo + prix + bouton soumission.
5. Politique : du texte sous le titre.
