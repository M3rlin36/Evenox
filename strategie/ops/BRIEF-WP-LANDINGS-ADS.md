# Brief WordPress — correctifs landings Ads (à faire dans WP admin)

**Priorité P0** avant scale >40 $/j.

## 1. Page Express dédiée (créer)
- URL : `https://evenox.ca/express-72h/` (301 depuis ancre home OK aussi)
- Hero : H1 « Express 72h — tables & chaises prix fixe »
- 3 prix : 90 / 210 / 420 $ (20 / 50 / 100 places)
- Zone : Ste-Thérèse · Laval · Terrebonne
- CTA primaire : « Réserver Express » → **contact** (ou Booqable si checkout prêt)
- CTA secondaire : appel 514-559-1893
- Preuve : 4.8/5 · ~1000 clients
- **Pas de cards stats** dans le hero — une offre, un CTA

## 2. `/forfaits-tables-chaises/` — CTA hero manquant
- Bouton hero visible : « Voir les forfaits / Demander ma date »
- Lien : `/contact/` ou ancre #forfaits
- Sous-titre 1 ligne : livré · placé · nappes · ramassé dès 649 $

## 3. Parcours CTA Express home
- Aujourd’hui « Réserver mon Express 72h » → `/contact/`
- Option A (safe) : garder contact + UTM `utm_campaign=express`
- Option B (cash) : lien Booqable shop Express SKU 100 % payé
- Décision default : A jusqu’à tracking OK

## 4. Tracking snippets (à coller)
- Google Ads tag + conversion **formulaire contact submit**
- Conversion **appel** sur 514-559-1893 (forwarding Ads ou call extension)
- (Idéal) event Booqable booking completed

## 5. `ads.txt`
- Créer `/ads.txt` si certification / partenaires display plus tard  
- Pas bloquant pour Search pur

## 6. UTM standards
```
utm_source=google
utm_medium=cpc
utm_campaign=mobilier|jeux|photobooth|corpo
utm_content={adgroup}
```
