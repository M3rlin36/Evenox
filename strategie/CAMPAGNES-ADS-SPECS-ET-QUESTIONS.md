# Campagnes Google Ads Évenox — specs + tests + questions

**Date :** 29 août 2026  
**Statut :** brouillon opérationnel — **bloqué sur réponses Alexandre** (section Questions)

---

## 1. Résultats des tests faits avec les infos actuelles

### 1.1 Pages d’atterrissage (HTTP + UI)

| Page | HTTP | Temps | CTA hero | Prix visibles | Verdict Ads |
| --- | --- | --- | --- | --- | --- |
| `/` Express 72h | 200 | ~2.2 s | Oui (après scroll Express) | 90 / 210 / 420 $ | **PASS** (idéal : ancre `#express`) |
| `/forfaits-tables-chaises/` | 200 | ~1.0 s | **Non** | Oui dans H1 | **CONDITIONAL** — ajouter bouton hero |
| `/forfaits-photobooth/` | 200 | ~1.1 s | Oui « Réserver ma date » | Dès 599 $ (scroll 1–2) | **PASS** |
| `/location-jeux-gonflable/` | 200 | ~1.4 s | Faible (catalogue) | Prix items | **CONDITIONAL** — landing forfait mieux |
| `/nos-forfaits-tout-inclus/` | 200 | ~1.1 s | OK | 1195–2495 $ | **PASS** corpo |
| `evenox.booqable.com` | 200 | — | — | — | **FAIL public** → login employés |
| `evenox.booqableshop.com` | 200 | ~0.7 s | Shop public | — | **OK** boutique |
| `/ads.txt` | **404** | — | — | — | À créer si Ads certifié / revendeurs |

### 1.2 Parcours CTA (clics UI)

- Express « Réserver mon Express 72h » → **`/contact/`** (formulaire), **pas** checkout 100 % payé immédiat.  
  → Écart vs promesse « paiement 100 % à la réservation ».  
- Photobooth « Réserver ma date » → **`/contact/`** aussi.  
  → OK pour lead Ads, mais allonge le cash vs Booqable dépôt.

### 1.3 Implications pour les tests Ads

On peut lancer des campagnes **Lead (formulaire + appel)** tout de suite.  
Les campagnes **Achat / dépôt payé** demandent que le CTA aille vers `booqableshop` ou un checkout Express réel — **question ouverte pour Alexandre**.

---

## 2. Architecture des 3 campagnes (Search)

Budget de départ proposé : **30–40 $/jour** (~900–1 200 $/mois), ajustable.

| # | Campagne | % budget | Landing | Objectif conversion |
| --- | --- | --- | --- | --- |
| C1 | Express + Mobilier | 40 % | `/#express` ou `/forfaits-tables-chaises/` | Appel + form contact + (idéal) dépôt |
| C2 | Jeux gonflables / anniversaire | 30 % | `/location-jeux-gonflable/` **ou** forfait enfants | Appel + form |
| C3 | Photobooth / 360 | 30 % | `/forfaits-photobooth/` | Appel + form + date |

Réseau : **Search uniquement** au début (pas Display).  
Zone : rayon **~40 km autour de Sainte-Thérèse** (à confirmer).  
Langue : FR.

---

## 3. Campagne C1 — Express + Mobilier (détail)

### 3.1 Groupes d’annonces

**GA1 — Urgence Express**
- Landing : `https://evenox.ca/` (section Express)  
- Thème : besoin rapide tables/chaises

**Mots-clés (phrase / exact prioritaires)**  
- "location chaises Laval"  
- "location tables chaises Sainte-Thérèse"  
- "location chaises Terrebonne"  
- "louer tables chaises urgent"  
- "location chaises pliantes Laval"  
- [location chaises Laval]  
- [location tables et chaises Rive-Nord]

**Négatifs (partagés compte)**  
`acheter`, `vente`, `usagé`, `kijiji`, `facebook marketplace`, `diy`, `plan`, `pdf`, `emploi`, `salaire`, `Longueuil` (si hors zone), `Rive-Sud` (si hors zone), `chapiteau` (sauf si tu vends), `vaisselle`

**Annonces RSA — titres (mélanger)**  
1. Location chaises Laval — Express 72h  
2. Tables & chaises dès 90 $  
3. Prix fixe — réserve en ligne  
4. Ste-Thérèse · Laval · Terrebonne  
5. Paiement à la réservation  
6. Note 4,8/5 sur Google  
7. Sans soumission — c’est affiché  
8. Livraison dispo en option  

**Descriptions**  
1. Besoin de tables et chaises en 72 h ? Forfaits 20, 50 ou 100 places à prix fixe. Zone Ste-Thérèse, Laval, Terrebonne.  
2. Service local Évenox. Cueillette entrepôt ou livraison. Réponse rapide · 514-559-1893.

---

**GA2 — Forfait livré-placé**
- Landing : `https://evenox.ca/forfaits-tables-chaises/` (**après** ajout CTA hero)  
- Mots-clés :  
  - "location tables chaises livraison"  
  - "location chaises événement Montréal"  
  - "forfait tables chaises Laval"  
  - "louer tables et chaises mariage" (prudent)  

**Titres**  
1. Tables & chaises dès 649 $  
2. Livré, placé, ramassé  
3. Nappes incluses  
4. Forfaits 48 · 72 · 100 places  
5. Rive-Nord · Laval · Montréal  

**Descriptions**  
1. Oublie les allers-retours. On livre, on place selon ton plan de salle, nappes incluses, on ramasse. Prix clair avant de confirmer.  
2. Idéal réception, assemblée, gala jusqu’à 100 places. Demande ton prix ou réserve — Évenox.

---

## 4. Campagne C2 — Jeux (détail)

**Landing préférée :** page forfait enfants si CTA clair ; sinon `/location-jeux-gonflable/` en attendant.

**Mots-clés**  
- "location jeux gonflables Laval"  
- "château gonflable Rive-Nord"  
- "location château gonflable Sainte-Thérèse"  
- "jeux gonflables anniversaire Laval"  
- "location jeux géants Laval"  
- "location gonflable Mirabel"

**Négatifs additionnels**  
`acheter château`, `vente gonflable`, `manuel`, `réparation`, `compressor`, `emploi`

**Titres**  
1. Jeux gonflables Laval  
2. Location clé en main Rive-Nord  
3. Installation incluse  
4. Prix en ligne · dispo temps réel  
5. Anniversaires & écoles  

**Descriptions**  
1. Gonflables et jeux pour fêtes sur la Rive-Nord, Laval et Montréal. Livraison et installation. Réserve ta date.  
2. Évenox — près de 1 000 clients · 4,8/5. Demande une soumission en quelques minutes.

**Produit à mettre en avant dans l’annonce :** catégorie « jeux gonflables » + forfait (pas un SKU obscur).  
**Upsell script téléphone :** + popcorn / barbe à papa / photobooth.

---

## 5. Campagne C3 — Photobooth / 360 (détail)

**Landing :** `https://evenox.ca/forfaits-photobooth/` ✅  

**Mots-clés**  
- "location photobooth Laval"  
- "photobooth Montréal location"  
- "vidéobooth 360 Laval"  
- "location photo booth Rive-Nord"  
- "photobooth corporatif Montréal"  
- "photobooth party Noël" (activer sept→déc)  
- "mirroir photobooth" ❌ si tu n’as pas de miroir (négatif)

**Titres**  
1. Photobooth Laval dès 599 $  
2. Vidéobooth 360 dès 799 $  
3. Animateur inclus  
4. Livraison + installation  
5. Dates weekends limitées  
6. Overlay brandé inclus  

**Descriptions**  
1. Photobooth classique ou 360 pour ton party. Animateur, toile de fond, partage instantané. Rive-Nord, Laval, Montréal.  
2. Une seule date par soir — réserve tôt. Galerie sous 24 h. Évenox 4,8/5 Google.

**Produit Ads primaire :** Classique 599 $ (volume) + 360 799 $ (différenciation).  
**Saisonnier :** booster nov–déc « party des fêtes / party bureau ».

---

## 6. Tracking & tests A/B à lancer (quand compte prêt)

### Conversions à créer (Google Ads + tag site)
1. `appel_clic` (numéro)  
2. `form_contact_submit`  
3. `booqable_checkout_start` (si possible)  
4. `booqable_deposit_paid` (idéal)

### Tests A/B (un à la fois)
| Test | Variante A | Variante B | Mesure |
| --- | --- | --- | --- |
| T1 Landing Express | Homepage | Page Express dédiée (si créée) | Taux form / appel |
| T2 CTA photobooth | « Réserver ma date » | « Voir les prix dès 599 $ » | CTR + conv |
| T3 Annonce mobilier | Accent prix | Accent « livré placé » | Conv rate |
| T4 Match type | Broad modifié prudent | Exact/phrase only | CPA |
| T5 Destination lead | `/contact/` | `booqableshop` dépôt | Cash speed |

### Tests déjà faits (baseline)
- Landings load OK (sauf ads.txt 404).  
- Photobooth + homepage = prêtes Ads.  
- Tables forfaits = CTA hero manquant.  
- Jeux = catalogue, pas landing offre unique.  
- CTA actuel = lead form, pas paiement immédiat.

---

## 7. Questions pour Alexandre (répondre = on finalise le lancement)

### Budget & compte
1. **Budget mensuel Ads** confortable : 500 / 800 / 1 200 / autre ?  
2. As-tu déjà un **compte Google Ads** ? Accès admin ?  
3. Carte / facturation Google Ads au nom de quelle entité ?

### Zone & dispo
4. **Rayon max livraison payante** pour Ads (km) ? Villes à **exclure** (ex. Rive-Sud) ?  
5. Express 72h : zone reste **Ste-Thérèse / Laval / Terrebonne seulement** ?  
6. Combien de **chaises** dispo un samedi typique ? (pour ne pas overbook via Ads)  
7. Photobooth : **combien d’unités** (classique / 360) et dates déjà prises sept–déc ?

### Produit & promesse
8. Express : le CTA doit-il aller vers **paiement 100 % Booqable** ou garder **formulaire contact** ?  
9. Quel **forfait jeux** est ton best-seller 2026 (nom + prix) ?  
10. Tu veux pousser **360** autant que **classique**, ou classique d’abord (stock/préposé) ?  
11. Corpo Ads : on active **maintenant** ou on attend **octobre** ?

### Tracking & ops
12. As-tu **Google Analytics 4** + accès Search Console ?  
13. Qui répond aux leads Ads : toi / soeur / autre ? Délai max réel (15 min / 1 h / 24 h) ?  
14. Numéro Ads : **514-559-1893** seulement, ou ligne dédiée pour mesurer les appels ?  
15. WhatsApp / texto comme conversion OK ?

### Créatives
16. As-tu **5–10 photos** droits d’usage (montage réel) pour extensions image / Demand Gen plus tard ?  
17. Logo haute résolution OK pour Assets ?

### Priorité business
18. Objectif 30 jours : plutôt **# bookings** ou **$ CA** ?  
19. Panier minimum acceptable pour un lead Ads (ex. refuser &lt; 150 $) ?  
20. As-tu un **plafond CPA** en tête (ex. max 40 $ lead / 100 $ booking) ?

---

## 8. Prochaine action dès réponses

Dès que tu réponds (même partiel : Q1, Q4–8, Q13, Q18) :
1. Figé budget + zone + landings finales  
2. Import mots-clés CSV + RSA  
3. Checklist jour J lancement  
4. (Option) correctifs pages : CTA hero tables + ancre Express + ads.txt
