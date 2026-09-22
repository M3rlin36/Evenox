# ChatGPT Ads — ce qu'on fait aujourd'hui

Le pixel OAIQ est **déjà** sur evenox.ca (id U5bzbDUzhXuNpmeMmSs3S5) → un compte ads.openai.com existe. Alexandre: retrouver l'accès (courriel utilisé), sinon en créer un et remplacer le pixel ID dans le thème.

Rappel des limites vérifiées: pas de retargeting visiteurs; audiences custom = 25 000 contacts min. pour inclusion; géo = Canada entier; 1 format « chat card »; ~25 $/j min recommandé; CPC observé ~4,40–4,90 $ CA.

## Aujourd'hui (20 min)
1. ads.openai.com > Ads Manager > Pixels: vérifier que le pixel reçoit des `page` events; ajouter l'événement standard **lead** (la balise GTM « OAIQ - lead sur merci » l'envoie sur `conversion_lead`).
2. Audiences > Custom audience `EVX Clients` (exclusion): importer courriels Booqable (moins de 25 000 accepté en exclusion).
3. Créer la campagne **en pause**: nom `CGPT-prospection`, objectif Lead, pays Canada, plateformes web+iOS+Android, budget **25 $/j**, bid cap 5 $ CA (oCPC), exclusion `EVX Clients`.
4. Ad group `Location événement FR` — context hints: « location d'équipement pour fête ou party », « organiser un party de bureau », « anniversaire d'enfant idées », « location chaises tables pour réception ».
5. Chat cards (FR, la langue = filtre géo de fait):
   - Titre: « Location jeux et photobooth — Laval, Rive-Nord » | Texte: « Party de bureau ou famille: jeux géants, photobooth, déco. Réservez en ligne, devis en 10 min. » | URL: https://evenox.ca/configurateur/?utm_source=chatgpt&utm_medium=cpc&utm_campaign=CGPT-prospection&utm_content=card-jeux
   - Titre: « Chaises, tables, lettres lumineuses — Ste-Thérèse » | Texte: « Cueillette à Sainte-Thérèse ou livraison Laval–Montréal. Réservation en ligne 24/7. » | URL: https://evenox.ca/location-chaise-pliante/?utm_source=chatgpt&utm_medium=cpc&utm_campaign=CGPT-prospection&utm_content=card-chaises
6. **Activer seulement** si Alexandre approuve les ~350 $ du test (14 j). Critère d'arrêt: 350 $ sans soumission /merci = on coupe.

## Gratuit, à faire cette semaine (SITE)
- FAQ sur chaque page produit: « Livrez-vous à Laval? », « Peut-on ramasser à Sainte-Thérèse? », « Combien de temps pour un devis? », « Réservation en ligne? ». C'est ce que ChatGPT cite quand quelqu'un demande « location de chaises Rive-Nord ».
- Fiche Google Business à jour (heures, cueillette, photos récentes).
