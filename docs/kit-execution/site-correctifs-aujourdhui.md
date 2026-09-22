# Correctifs site à faire aujourd'hui (WordPress / Divi) — 45 min

Constats vérifiés sur evenox.ca le 22 sept 2026:
- Page merci unique: `/merci-soumission/` (`/merci` redirige dessus). OK.
- GTM-PP2W2TX9 et AW-16776285171 présents sur toutes les pages. Le snippet direct de conversion Ads sur la page merci est encore à `LIBELLE = 'REMPLIR'` → il ne part rien par ce chemin. La conversion dépend de la balise GTM sur l'événement `conversion_lead`.
- Pixel OAIQ (ChatGPT Ads) déjà installé (id U5bzbDUzhXuNpmeMmSs3S5) → le compte ads.openai.com existe déjà.
- Aucun pixel Meta (`fbq`) sur le site.
- Formulaire contact = `ef-form` maison (POST admin-ajax `evx_soumission`), envoie déjà gclid/gbraid/wbraid, `service`, `page_url`, `referrer`, `device`. Pas d'UTM.
- Page merci indexable (pas de noindex). Page contact affiche « 24h temps de réponse ».

## À faire (ordre)
1. **Yoast > page /merci-soumission/ > Avancé > « Autoriser les moteurs de recherche à afficher cette page »: Non** (noindex). 2 min.
2. **Divi > Options du thème > Intégrations > code dans le `<head>`**: coller `evx-utm-champs-caches.js` entre `<script></script>`. 3 min. (Alternative: via GTM, balise « EVX - UTM vers cookie + champs caches ».)
3. **Page /contact/**: remplacer « 24h / Temps de réponse » par « 10 min / Devis aux heures ouvrables » (seulement si le SLA est tenu; sinon « Le jour même »). Remplacer « Nous vous répondrons rapidement » par « Votre devis arrive dans les 10 minutes (lun–ven 9 h–18 h). » 5 min.
4. **Formulaire ef-form**: ajouter un champ visible `Ville` (name="ville") avant Adresse, ou renommer le placeholder Adresse en « Ville ou adresse du lieu ». Objectif KPI « date+ville+produit ». 5 min.
5. **Sur chaque appareil de l'équipe**: ouvrir une fois `https://evenox.ca/?evx_interne=1` (pose le cookie d'exclusion GTM). 1 min.
6. **Pages d'atterrissage Search** (9 URLs du CSV): vérifier sur mobile que le bouton « Demander une soumission »/« Configurer ma liste » est visible sans scroller et que le lien mène à /contact/?src=<produit> (le champ `service` est déjà rempli à partir de `?src=`). Retirer tout lien vers /nos-forfaits-tout-inclus/ et /forfaits-photobooth/ dans ces pages. 20 min.
7. **robots.txt**: rien à faire (OAI-SearchBot et OAI-AdsBot ne sont pas bloqués).

## Liens à utiliser dans les annonces (le `?src=` remplit le champ `service` du formulaire)
- Chaises: https://evenox.ca/location-chaise-pliante/ → CTA vers /contact/?src=chaises
- Tables: https://evenox.ca/location-tables-rive-nord/ → /contact/?src=tables
- Jeux gonflables: https://evenox.ca/location-jeux-gonflable/ → /contact/?src=jeux-gonflables
- Jeux géants: https://evenox.ca/jeux-geants/ → /contact/?src=jeux
- Lettres: https://evenox.ca/decoration-lettres-neons/ → /contact/?src=lettres
- Mur fleurs: https://evenox.ca/mur-decoratif/ → /contact/?src=mur-fleurs
- Photobooth: https://evenox.ca/photobooth-location-montreal-evenox/ → /contact/?src=photobooth
- Confiserie: https://evenox.ca/friandises-confiseries/ → /contact/?src=confiserie
