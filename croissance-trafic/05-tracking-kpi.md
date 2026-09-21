# Tracking et tableau de bord hebdomadaire

---

## 1. À installer en semaine 1 (1 h, une seule fois)

- [ ] **Google Analytics 4** relié au site
- [ ] **Google Search Console** — vérifier que le sitemap `https://evenox.ca/sitemap_index.xml` est soumis
- [ ] **GSC ↔ GA4** liés (Admin → Liens vers les produits)
- [ ] **Bing Webmaster Tools** (import direct depuis GSC, 2 minutes, ~5 % de trafic en plus gratuitement)
- [ ] **Pinterest Analytics** (après revendication du domaine)
- [ ] **Google Tag Manager** si tu veux gérer les conversions sans toucher au thème

### Événements GA4 à configurer (ce sont tes vrais KPI)

| Événement | Déclencheur | Pourquoi |
|---|---|---|
| `demande_soumission` | Envoi de formulaire de soumission | Ton lead principal |
| `clic_telephone` | Clic sur le 514-559-1893 | Lead chaud, souvent non mesuré |
| `clic_reservation` | Clic vers la boutique / réservation en ligne | Intention d'achat |
| `vue_forfait` | Vue d'une page `/forfait-*` | Qualité du trafic |
| `scroll_90` | 90 % d'un article lu | Qualité du contenu |

**Sans ces événements, tu ne sauras pas quelles pages génèrent de l'argent et lesquelles génèrent du bruit.** Le but n'est pas 1 000 visites, c'est 1 000 visites qui produisent plus de soumissions.

---

## 2. Tableau de bord hebdomadaire (15 minutes, tous les lundis)

| KPI | Départ | Sem. 4 | Sem. 8 | Sem. 12 | Cible |
|---|---|---|---|---|---|
| Visites/jour (moy. 7 j) | 250 | 400 | 650 | 900 | **1 000** |
| Sessions organiques/mois | ~5 500 | 9 000 | 15 000 | 21 000 | 24 000 |
| Articles publiés (cumul) | 12 | 28 | 44 | 60 | 60 |
| Pages positionnées top 10 (GSC) | ? | +20 | +60 | +120 | — |
| Visites Pinterest/mois | 0 | 800 | 2 500 | 4 500 | 4 500 |
| Avis Google (total) | ? | +40 | +80 | +120 | — |
| Backlinks obtenus (cumul) | ? | 10 | 22 | 35 | 35 |
| **Demandes de soumission/mois** | ? | +25 % | +60 % | +120 % | — |

---

## 3. Routine hebdomadaire fixe (bloque-la au calendrier)

| Jour | Bloc | Durée |
|---|---|---|
| **Lundi AM** | Lire le tableau de bord + publier article #1 + publication GBP | 1 h 30 |
| **Lundi PM** | 10 courriels de backlinks | 45 min |
| **Mardi** | 25 épingles Pinterest (programmées d'un coup) | 1 h 30 |
| **Mercredi** | Tournage : 3 vidéos sur un vrai événement de la semaine | 1 h |
| **Jeudi AM** | Publier article #2 + publication GBP | 1 h 30 |
| **Jeudi PM** | Demandes d'avis Google (10 clients de la semaine) | 20 min |
| **Vendredi** | Créer 2 nouvelles pages villes / enrichir 5 fiches produits | 2 h |

**Total : 8 h 30/semaine.** Le reste du plan (rédaction des 2 autres articles) se délègue.

---

## 4. Les 3 signaux d'alerte à surveiller

1. **Le trafic monte mais les soumissions non** → ton contenu attire des curieux, pas des acheteurs. Corrige : plus d'articles « prix » et « ville », moins d'articles « idées ».
2. **Les impressions montent dans GSC mais pas les clics** → tes titres et metas ne donnent pas envie. Réécris les titres des 20 pages avec le plus d'impressions en y mettant un prix ou un chiffre.
3. **Les pages villes n'entrent pas dans le top 20 après 8 semaines** → problème de contenu dupliqué. Reprends la règle des 5 blocs uniques dans `02-pages-a-creer.md`.

---

## 5. Quand payer (et seulement là)

N'achète pas de trafic avant la semaine 9. À partir de là, deux dépenses justifiées :

| Dépense | Budget | Rendement attendu |
|---|---|---|
| **Retargeting Meta** sur visiteurs de pages forfait non convertis | 200-300 $/mois | Le moins cher par lead, ton catalogue visuel travaille pour toi |
| **Google Ads Search** sur 10 mots-clés à forte intention uniquement (« location photobooth laval », « location chaises montréal ») | 300-500 $/mois | Remplit les trous de saisonnalité |

**N'active jamais Performance Max avant d'avoir un historique de conversions propre dans GA4** — il brûle le budget sur du trafic non qualifié.
