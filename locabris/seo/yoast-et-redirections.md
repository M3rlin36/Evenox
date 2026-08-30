# Yoast + redirections — texte exact à coller

Enlever le mot location partout où on vend.

**En ligne (plugin 1.1.0)** : titles/metas + 301 ci-dessous. Les slugs produits sont aussi renommés dans Woo.

## Titles et metas

| Page WP | Title SEO | Meta description |
|---|---|---|
| Accueil | Le spécialiste de l'abri d'auto sur la Rive-Nord \| Locabris | Vente et installation d'abris d'auto usagés. Laval, Blainville, Mirabel et Rive-Nord. Réponse le jour même. |
| soumission-location-tempo | Soumission rapide — achat ou installation \| Locabris | Demandez votre prix pour un abri usagé ou une installation. Un conseiller vous rappelle le jour même. |
| contact | Parlons de votre entrée \| Locabris | Écrivez-nous pour un abri usagé ou une installation. Réponse le jour même. 438-439-0201. |
| shop | Nos abris Tempo à vendre \| Locabris | Abris usagés vérifiés, dès 250 $. Simple, double longueur, double largeur. |
| location-abri-simple | Abris simples usagés — 11 et 12 pieds \| Locabris | Abris d'auto simples usagés, 11 et 12 pieds. Vérifiés, prêts à poser. Dès 250 $. |
| abri-double | Abris d'auto doubles à vendre — 16 à 20 pieds \| Locabris | Abris doubles usagés, 16 à 20 pieds. Vente et installation, Rive-Nord. |
| 418-2 | Accessoires pour abri hivernal \| Locabris | Portes, ancrages et protecteurs de pavé pour votre abri. |
| installation-abri-hivernale-laval-rive-nord | On monte, on aligne, on ancre \| Locabris | Installation d'abri d'auto à Laval et sur la Rive-Nord. 200 $ simple, 300 $ double. |
| Produit type | Abri hivernal 11 x 24 usagé à vendre \| Locabris | Abri d'auto 11 x 24 usagé, condition 8/10. Vente et installation, Rive-Nord. |

## Slugs à renommer (301 automatique Yoast)

- `abris-hivernale-11-x-12-en-location` → `abri-hivernal-11-x-12`
- `abris-hivernale-11-x-8-en-location-copie` → `abri-hivernal-11-x-8`
- `abris-hivernale-20-x-16-en-location` → `abri-hivernal-20-x-16`
- `418-2` → `accessoires`
- Titres produits : `Abri hivernal` (pas `Abris Hivernale`)

## Redirections 301

- `/boutique/` → `/shop/`
- `/blog/` → `/`

## WooCommerce

Réglages → Avancé : page Commande = `checkout`, pas `cart`.
Titres des pages Cart / Checkout / Payment Failed → français (Panier, Commande, Paiement échoué).
