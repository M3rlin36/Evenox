# Tracking — pas à pas (60 min, dans cet ordre)

## A. Google Ads (15 min) — compte AW-16776285171
1. Objectifs > Conversions > **+ Nouvelle action** > Site web > « Ajouter manuellement »: nom `Soumission merci`, catégorie Prospect (Submit lead form), valeur 1 CAD, comptage **Une**, fenêtre 30 j, attribution basée sur les données. Copier le **libellé** (le bout après `AW-16776285171/`).
2. Toutes les autres actions de conversion existantes > **Objectif: secondaire** (ne pas supprimer, ne plus enchérir dessus).
3. Paramètres > Suivi automatique (auto-tagging): **activé**.
4. Conversions améliorées: activer, méthode Google Tag Manager.
5. Outils > Listes de mots-clés à exclure > Nouvelle liste `EVX négatifs` > coller `negatifs-liste-partagee.txt` > appliquer à toutes les campagnes.

## B. GA4 (10 min)
1. Admin > Créer propriété `Evenox web` (fuseau America/Toronto, CAD) > flux web evenox.ca > copier `G-XXXXXXX`.
2. Admin > Événements clés: marquer `generate_lead` comme événement clé (apparaît après la 1ʳᵉ soumission test).
3. Admin > Liens produits > Google Ads > lier AW-16776285171.
4. Admin > Filtres de données > Trafic interne: activer le filtre (les IP sont définies dans Flux > Configurer les paramètres de balise > Définir le trafic interne).

## C. GTM — conteneur GTM-PP2W2TX9 (25 min)
1. Admin > Importer conteneur > `gtm-container-import.json` > **Fusionner** (renommer les conflits) > nouvel espace de travail.
2. Remplacer les 3 placeholders: `G-REMPLIR` (2 balises GA4), `LIBELLE-REMPLIR` (balise Google Ads Conversion), `META-PIXEL-ID-REMPLIR` (balise Meta Base).
3. Balise « EVX - UTM vers cookie + champs caches »: coller le contenu de `evx-utm-champs-caches.js` (sauter cette balise si déjà collé dans Divi).
4. Vérifier qu'aucune **ancienne** balise Google Ads Conversion ne se déclenche aussi sur `conversion_lead` ou sur la page merci → si oui, la mettre en pause (sinon double comptage).
5. Aperçu (Tag Assistant) > faire 1 soumission réelle depuis /contact/ > sur la page merci vérifier: `conversion_lead` déclenche GA4 generate_lead + Google Ads Conversion + Meta Lead + OAIQ lead. Sur une page produit: ViewContent. Au premier focus dans le formulaire: `evx_form_start` → Meta FormStart.
6. **Publier**.

## D. Meta (10 min)
1. Gestionnaire d'événements > Connecter une source > Web > nommer `Evenox Pixel` > copier l'ID → GTM.
2. Après publication GTM, Test Events: vérifier PageView, ViewContent, FormStart, Lead.
3. Audiences: créer maintenant (elles se remplissent seules) → voir `meta-retargeting.md`.

## E. GO / NO-GO (10 min)
3 soumissions test (noms « TEST GTM 1/2/3 », à supprimer de la feuille Leads):
- Google Ads > Conversions: 3 (peut prendre 3 h à s'afficher; Tag Assistant fait foi en attendant).
- GA4 temps réel: 3 × generate_lead avec page /merci-soumission/.
- Meta Test Events: 3 × Lead.
- Courriel de notification: bloc `[source: … | campagne: … | produit: … | page: …]` présent dans les détails.
GO = 4/4. Sinon on ne lance pas les campagnes.

## F. Convention UTM (Meta et ChatGPT; Google = auto-tagging)
`?utm_source=facebook&utm_medium=retarget&utm_campaign=RT-produits&utm_content=A1-party-bureau`
`?utm_source=chatgpt&utm_medium=cpc&utm_campaign=CGPT-prospection&utm_content=card-jeux`
