# Pages mal indexées — evenox.ca

Relevé du **6 septembre 2026**. Croise les alertes Google Search Console
reçues ce jour-là et une lecture live du site (599 URLs des plans de site).

## Ce que Google a signalé aujourd’hui

Trois courriels Search Console sont arrivés sur `evenox.ca@gmail.com` :

| Heure (UTC) | Propriété | Raisons |
| --- | --- | --- |
| 20:27 | `https://evenox.ca/` | **Introuvable (404)** — pages *dans un sitemap* |
| 21:20 | `evenox.ca` | **Bloquée par robots.txt** + **autre problème 4xx** |
| 21:20 | `evenox.ca` | **Introuvable (404)** — pages *dans un sitemap* |

En juillet, Search Console comptait seulement **~29 pages** avec premières
impressions, pour un catalogue de **centaines** d’URLs. Le trafic existe
(450+ clics / 28 j début septembre), mais la couverture reste étroite.

## Inventaire des plans de site (live)

| Plan | URLs |
| --- | ---: |
| `page-sitemap.xml` | 227 |
| `product-sitemap.xml` | 320 |
| `post-sitemap.xml` | 12 |
| `product_cat-sitemap.xml` | 37 |
| `category-sitemap.xml` | 2 |
| `product_tag-sitemap.xml` | 1 |
| **Total** | **599** |

Scan HTTP de ces **599** adresses : **0 hard 404** dans les sitemaps
actuels. Les 404 que Google voit sont donc surtout des **URLs hors sitemap
actuel** (anciennes entrées, liens, paramètres) ou une **soft 404** encore
publiée.

## Problèmes confirmés live

### 1. Soft 404 dans le sitemap — `/3561-2/`

- HTTP **200**, présente dans `page-sitemap.xml`
- Titre : `- Évenox` (vide utile)
- Pas de meta description
- Pas de `h1`
- Toujours `index, follow`

Google peut la traiter comme soft 404 / contenu pauvre tout en la voyant
annoncée dans le sitemap → alerte « 404 dans un sitemap ».

**Correctif :** `noindex`, retrait du sitemap Yoast, puis redirection ou
suppression WP.

### 2. Hard 404 — `/2476-2/`

Ancienne page « Politique d’annulation » (relevé août). Aujourd’hui **404**.
La page utile est `/politique-annulation/`.

**Correctif :** redirection 301 `/2476-2/` → `/politique-annulation/`.

### 3. 404 WooCommerce — panier / compte

| URL | Statut |
| --- | --- |
| `/cart/` | 404 |
| `/checkout/` | 404 |
| `/my-account/` | 404 |
| `/wishlist/` | 404 |

Absentes des sitemaps. Probable cause de « autre problème 4xx » si Google
suit d’anciens liens Woo. Le flux réel passe par Booqable, pas le panier WP.

**Correctif :** laisser en 404 **ou** rediriger vers `/shop/` / l’accueil ;
ne pas les remettre dans un sitemap.

### 4. Bloquée par robots.txt — `?add-to-cart=`

`robots.txt` contient (WooCommerce) :

```
Disallow: /*?add-to-cart=
Disallow: /*?*add-to-cart=
```

Intentionnel. Google découvre ces URLs via les fiches produits et les
signale comme bloquées. **Ce n’est pas une panne** : on ne veut pas indexer
les URLs d’ajout au panier.

### 5. `/shop/` — porte d’entrée catalogue cassée pour Google

Toujours dans le même état qu’en août :

- Titre `- Évenox`
- Pas de description
- Pas de canonique
- `h1` vide
- Pourtant `index, follow`

### 6. `/blog/` vs `/blogue/`

| URL | Titre | Verdict |
| --- | --- | --- |
| `/blogue/` | Blogue Évenox \| Guides et prix… | Index blogue correct |
| `/blog/` | Organisation de mariage : 5 aspects… | Mauvaise page index (titre d’un article) |

Deux listes de blogue concurrentes. `/blog/` pollue l’index.

**Correctif :** 301 `/blog/` → `/blogue/`.

### 7. Doubles `<title>` dans le `<body>` (Divi)

Toujours présent sur les pages ville (ex. `/location-equipement-laval/`,
`/decoration-blainville/`, `/jeux-montreal/`) : un titre Yoast dans le
`<head>`, un second titre Divi dans le corps.

### 8. Pages ville quasi-identiques

Les familles `location-equipement-*`, `decoration-*`, `jeux-*` ne sont plus
des doublons stricts de titre, mais les descriptions et le corps restent
souvent **identiques à la ville près**. Google en indexe peu (effet
« contenu dupliqué / consolidation »).

Exemple mesuré (`location-equipement`) : 3 villes partagent la même
description hors nom de ville.

## Ce que le plugin du dépôt corrige

Le plugin `evenox/plugin/evenox-indexation/` :

1. SEO `/shop/` (title, description, canonique, robots utiles)
2. 301 `/blog/` → `/blogue/`
3. 301 `/2476-2/` → `/politique-annulation/`
4. `noindex` + exclusion sitemap pour `/3561-2/`
5. Suppression des balises `<title>` injectées dans le `<body>`
6. 301 optionnels `/cart|/checkout|/my-account|/wishlist` → `/shop/`

## Actions manuelles restantes (WP / Search Console)

1. Installer le ZIP `evenox-indexation.zip` (Extensions → Ajouter).
2. Dans WP : mettre `/3561-2/` à la corbeille **ou** la remplir / la fusionner.
3. Yoast → Search Console : ouvrir le rapport d’indexation, valider la correction
   sur les raisons 404 / robots / 4xx.
4. Demander une réinspection de `/shop/`, `/blogue/`, `/politique-annulation/`.
5. Différencier le contenu des pages ville (pas automatisable proprement ici).

## Méthode

- Alertes lues dans Gmail (`sc-noreply@google.com`, 6 sept. 2026).
- `robots.txt` + `sitemap_index.xml` + 599 URLs lues en HTTP.
- Échantillon SEO (title / description / canonique / h1 / mots) sur shop,
  blog, blogue, pages ville, soft 404.
- Aucune écriture sur evenox.ca pendant le relevé ; le plugin est livré
  pour installation manuelle.
