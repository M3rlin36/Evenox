# HTTP ERROR 429 sur evenox.ca — diagnostic et correctifs

**Ce n’est pas une page cassée.** Un `429 Too Many Requests` veut dire : trop de requêtes trop vite, ou le plan d’hébergement n’a plus de ressources. Chrome affiche « HTTP ERROR 429 ». Le corps de la réponse Hostinger est souvent **vide**.

Ce dépôt n’a **pas** le code WordPress ni les accès hPanel / WP-admin / FTP. Les correctifs se font **dans hPanel et WordPress**, pas ici.

---

## État mesuré (31 août 2026)

Depuis cet environnement, **evenox.ca répond 200** (accueil, `/contact/`, `robots.txt`, `sitemap_index.xml`, `wp-login.php`, `wp-json`). Ne pas marteler le site pour « retester ».

En-têtes vus : `PHP/8.2.30`, cache **LiteSpeed**, CDN Hostinger (`server: hcdn`, `platform: hostinger`).

Mesures antérieures (août 2026) : première requête 200, ensuite **429 corps vide** avec un User-Agent Chrome via curl ; le sitemap a parfois renvoyé un **403** (défi JavaScript). Rythme sûr déjà utilisé : **1 requête à la fois, ≥ 3 secondes d’intervalle, arrêt immédiat sur 403/429**.

E-mail Hostinger du **20 août 2026** (fil `1a01f101d49206f3`) : *« Your Premium Web Hosting for evenox.ca has exceeded its resource usage limits. »* Ils mentionnent des **503** possibles et recommandent d’optimiser ou de monter de plan. C’est la cause client la plus probable quand **les vrais visiteurs Chrome** voient 429/503.

---

## Deux couches (souvent les deux en même temps)

| Couche | Qui répond | Symptôme | Qui est touché |
| --- | --- | --- | --- |
| **A. Plafond du plan Premium** | LiteSpeed / PHP à bout (CPU, workers PHP, processus) | 429 ou 503, site lent, admin WP qui time-out | Tout le monde |
| **B. CDN / pare-feu Hostinger (hCDN)** | Edge, **avant** WordPress | 429 **corps vide**, parfois 403 défi JS | Une IP, un bot, un User-Agent « Chrome + curl », Ads, Zapier |

Un plugin WordPress **ne peut pas** corriger un 429 CDN : la requête n’atteint jamais PHP.

---

## À faire aujourd’hui (clics dans l’ordre)

1. **hPanel → Sites web → evenox.ca → Gérer → Usage des Ressources** (ou *Resource usage*). Si **CPU** ou **Processus** (workers PHP) sont au rouge : c’est ça. En haut de la page : **Boostez maintenant** (24 h, 1×/mois) si le bouton est là.
2. **Court terme :** attends **15–30 min**, ouvre le site sur un autre réseau (4G / autre Wi-Fi). **Ne pas F5 en boucle** — ça empire le 429.
3. **Alléger WordPress :** WP-admin → **LiteSpeed Cache**
   - Cache des pages : **ON** (à garder)
   - **Crawler → OFF** s’il est actif
   - **Cache → Exclusions** : `wp-admin`, panier, commande (`/panier/`, `/commander/`)
   - **Boîte à outils → Purge → Tout purger** (une seule fois)
4. **hPanel → Sites web → evenox.ca → Gérer → Performance → CDN** → onglets **Sécurité** / **Blocage du trafic** / protection bots. Ne pas bloquer un vrai Chrome. Whitelist **Googlebot** si le réglage existe. Baisse le niveau de sécurité s’il est trop haut.
5. Si l’usage reste au max **tous les jours** (Ads + Woo + beaucoup de hits) : **upgrade** Premium → Business / Cloud. Hostinger l’a déjà recommandé le 20 août.
6. **Ticket Hostinger** si ça bloque encore (hPanel → **Aide** / chat → Créer un ticket) :

   > evenox.ca renvoie 429, forfait Premium overlimit depuis le 20 août, merci de vérifier PHP workers + rate-limit CDN et de débloquer mon IP.

Détail des écrans ci-dessous. Le texte de ticket plus long est à la fin.

---

## A. Actions immédiates dans hPanel

Interface française Hostinger (libellés 2026). Si l’UI est en anglais : *Websites → Dashboard → Resource usage*.

### 1. Usage des ressources (cause n° 1 pour les visiteurs)

Chemin : **hPanel → Sites web → evenox.ca → Gérer** (ou **Tableau de bord**) → barre de gauche **Usage des Ressources**.

Regarde :

- **CPU**
- **RAM**
- **Processus** (workers PHP inclus dans ce plafond)
- **I/O**
- **Disque** et **inodes**

La **ligne rouge** = limite du plan Premium. Un dégradé rouge = pics déjà au plafond. Docs Hostinger : [Usage des Ressources](https://www.hostinger.com/fr/support/2436138-comment-verifier-l-usage-des-ressources-dans-hpanel-hostinger/), [erreur 429](https://www.hostinger.com/support/how-to-troubleshoot-http-error-429-at-hostinger/).

Si tu es au-dessus :

1. En haut de la page : **Boostez maintenant** → **Augmenter** (capacité du plan supérieur pendant **24 h**, **une fois par mois**). [Guide booster](https://www.hostinger.com/fr/support/6121051-comment-booster-votre-hebergement-chez-hostinger/).
2. Si ça revient chaque semaine : **upgrade** vers Business ou Cloud (plus de CPU / workers PHP). L’e-mail du 20 août le demandait déjà.
3. En parallèle : réduire la charge (cache, plugins, crawler — sections B et WP).

### 2. CDN, bots, niveau de sécurité

Chemin : **hPanel → Sites web → evenox.ca → Gérer → Performance → CDN**.

1. Confirme que le CDN est **activé** (un seul CDN à la fois — pas Cloudflare + Hostinger).
2. Flèche **>** / **Gérer** pour les onglets :
   - **Analytique** — pics de requêtes, bots.
   - **Optimisation du site**
   - **Blocage du trafic** — IP et pays. Vérifie qu’aucune IP de bureau / maison / 4G n’est bloquée. Ne bloque pas le Canada.
   - **Sécurité** — **Niveau de sécurité**. Un niveau trop haut défie (403 JS) ou **429** de vrais Chrome. Remets un niveau bas / moyen si les clients se plaignent.
3. **Performance → CDN → AI Audit** (si présent) : **laisse Googlebot et les crawlers Google Ads**. Bloque seulement les bots IA qui ne t’apportent rien.

Hostinger applique aussi un **rate-limit serveur** (plages Meta / AWS / Microsoft) : aperçus Facebook / WhatsApp et **Zapier** peuvent prendre un 429. Ça ne se désactive pas site par site. [Note Hostinger](https://www.hostinger.com/support/429-errors-on-automated-integrations-and-link-previews/).

### 3. Journaux (pour savoir *qui* prend le 429)

**hPanel → Sites web → evenox.ca → Gérer → Analytique → Journaux d’accès.**

Filtre les codes **429** et **503**. Note l’IP, le User-Agent, le chemin (`xmlrpc.php`, `wp-login.php`, `/wp-json/`, widgets Ads).

### 4. IP de bureau bloquée

Si **toi seul** as le 429 :

1. Arrête de rafraîchir en boucle (chaque F5 empire le blocage).
2. Attends **15–60 minutes**, ou passe en 4G / autre réseau.
3. **Performance → CDN → Blocage du trafic** : retire ton IP.
4. Ticket Hostinger : « débloquer mon IP » + l’IP publique (recherche Google : *what is my ip*).

---

## B. Actions dans WordPress

### LiteSpeed Cache (déjà actif : hit cache sur l’accueil)

- **LiteSpeed Cache → Cache** : cache des pages **ON**.
- **LiteSpeed Cache → Cache → Exclusions** : exclure panier, commande, mon-compte, `wp-admin`, `wp-login.php` (slugs FR souvent `/panier/`, `/commander/`, `/mon-compte/` — vérifier les permaliens Woo).
- **LiteSpeed Cache → Crawler** : **désactiver**. Le crawler se martèle lui-même et brûle CPU / workers.
- **LiteSpeed Cache → Cache → Guest Mode** : si ON, tester OFF. Ça génère du PHP en plus.
- **LiteSpeed Cache → Optimisation d’image → LQIP** : si ON et beaucoup d’images, ça ajoute des hits PHP. À couper si le CPU est rouge.
- **LiteSpeed Cache → Boîte à outils → Purge → Tout purger** après un changement de plan / un 429 généralisé.

Ne pas activer un *deuxième* cache page (Jetpack Boost page cache + LiteSpeed en même temps).

### Jetpack Protect / brute-force

**Jetpack → Réglages → Sécurité** (Protect / protection contre les attaques par force brute).

- Vérifie si l’IP du bureau est bloquée.
- Ajoute-la en liste blanche.
- Pas de namespace Wordfence vu sur `wp-json` public — le rate-limit WP vient surtout de Jetpack / Hostinger, pas de Wordfence.

### Extensions lourdes empilées (vues via `wp-json`)

Présentes : Jetpack, Jetpack Boost, LiteSpeed Cache, Hostinger Easy Onboarding / Tools, Google Site Kit, WooCommerce, Yoast, Redirection, Zapier, Mailchimp for WooCommerce, Divi, namespace custom `evenox/v1`.

**À ne pas couper** : WooCommerce, Divi, Yoast, Redirection.

**À tester (désactiver 24–48 h, une à la fois)** si le CPU reste rouge :

- **Google Site Kit** (crawl + stats)
- **Jetpack Boost** (redondant avec LiteSpeed)
- **Hostinger Easy Onboarding / Tools** si plus utilisés
- Widgets **Booqable** + Ads + pixels : ils restent, mais chaque page froide coûte cher

### `xmlrpc.php` (source classique de 429)

Les bots de brute-force tapent `xmlrpc.php` des milliers de fois. **Jetpack s’en sert** : ne pas le couper à l’aveugle.

1. Journaux : beaucoup de hits sur `/xmlrpc.php` ?
2. Si oui : désactive les **pingbacks** (Réglages → Discussion).
3. Bloque `xmlrpc.php` sauf besoin Jetpack, **ou** limite-le (LiteSpeed / `.htaccess`). Dis-le à Hostinger dans le ticket s’ils gèrent le pare-feu.

Exemple `.htaccess` (à n’ajouter que si Jetpack n’en a plus besoin) :

```apache
<Files xmlrpc.php>
    Require all denied
</Files>
```

---

## Si le 429 est seulement pour toi / une IP

1. Stop F5 en boucle.
2. Attends 15–60 min ou change de réseau.
3. Débloque l’IP dans le CDN (ci-dessus).
4. Relance `scripts/check-429.sh` **une fois** (délai intégré, arrêt auto sur 429).

## Si le 429 est pour tous les visiteurs

1. **Boostez maintenant** + purge LiteSpeed.
2. Vérifie workers / processus dans Usage des Ressources.
3. Upgrade Premium → Business / Cloud si l’e-mail du 20 août est toujours vrai.
4. Ticket Hostinger (modèle plus bas).
5. Baisse le niveau de sécurité CDN.

---

## Règle anti-tempête (agents, scripts, audits)

**Interdit** de crawler evenox.ca en rafale (ça a déjà contribué aux plafonds).

- 1 requête à la fois, jamais en parallèle
- **≥ 3 secondes** entre chaque URL
- User-Agent **honnête** (pas un faux Chrome)
- **Arrêt immédiat** sur 403 ou 429
- Script fourni : `scripts/check-429.sh` (délai 2 s, stop auto)

---

## mu-plugin optionnel (Retry-After WordPress seulement)

Fichier : `wordpress/mu-plugins/evenox-rate-limit-headers.php`

À copier dans `wp-content/mu-plugins/` **uniquement** si un plugin WP (Jetpack Protect, etc.) renvoie un 429. Ça ajoute `Retry-After: 60` pour que le navigateur attende. **Ça ne touche pas** les 429 CDN Hostinger (ils n’arrivent jamais à PHP). Inutile pour le 429 Chrome « vide » classique.

---

## Ticket Hostinger (à coller)

Version courte (chat / premier message) :

> evenox.ca renvoie 429, forfait Premium overlimit depuis le 20 août, merci de vérifier PHP workers + rate-limit CDN et de débloquer mon IP.

**Sujet (ticket écrit) :** evenox.ca — 429 Too Many Requests + plan Premium au-dessus des limites

```
Bonjour,

Le site https://evenox.ca (Premium Web Hosting) renvoie HTTP 429 (corps vide)
via le CDN Hostinger (hCDN + LiteSpeed). Chrome affiche « HTTP ERROR 429 ».

Le 20 août 2026 vous nous avez écrit que le plan avait dépassé ses limites
de ressources (risque de 503). Merci de :

1. Confirmer l’usage actuel (CPU, RAM, processus/workers PHP, I/O, inodes)
   et si un upgrade Business/Cloud est recommandé.
2. Vérifier le rate-limit CDN / niveau de sécurité : les vrais visiteurs
   Chrome (Québec) ne doivent pas recevoir de 429.
3. Whitelister Googlebot, les crawlers Google Ads, et mon IP de bureau :
   [COLLER TON IP]
4. Vérifier s’il y a un flood sur /xmlrpc.php ou wp-login.php.
5. Si mon IP est bloquée, la retirer.

J’ai déjà : regardé Usage des Ressources, [boost 24 h oui/non],
purgé LiteSpeed, [baissé le niveau CDN oui/non].

Merci,
Alexandre — evenox.ca@gmail.com
```

Chemin ticket : **hPanel → Aide** (ou icône chat) → **Créer un ticket** / Support.

---

## Vérifier après coup

```bash
./scripts/check-429.sh
```

Une seule passe. Si le script imprime `STOP` sur 403/429 : arrête tout, attends, ne relance pas.
