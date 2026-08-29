# Tracking conversions Google Ads — checklist technique

## Conversions à créer (minimum)
1. **Appel depuis annonces** — Call extension / website call (514-559-1893)
2. **Soumission formulaire contact** — thank-you ou event submit `/contact/`
3. (Plus tard) **Booking Booqable** — si webhook / thank-you shop

## Setup rapide
1. Google Ads → Objectifs → Conversions → Nouvelle conversion
2. Site web : catégorie Contact / Submit lead form
3. Installer tag global (gtag ou Google Tag) sur WP toutes pages
4. Event : `generate_lead` ou conversion snippet sur page merci contact
5. Appels : activer compteur d’appels Ads OU conversion « clicks to call »
6. Fenêtre : 30 j clic / 1 j vue
7. Compter : Une

## UTM sur Final URL Ads
Ajouter aux URL finales (Editor) :
`?utm_source=google&utm_medium=cpc&utm_campaign={campaign}&utm_content={adgroup}`

## Validation
- [ ] Extension Preview → clic call tracké
- [ ] Submit form test → 1 conversion (exclure IP)
- [ ] GA4 (si existe) : source google/cpc visible

## Bloquant
Sans 1+2, ne pas monter budget >20 $/j.
