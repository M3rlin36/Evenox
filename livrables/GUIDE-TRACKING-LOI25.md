# Research 10 — Measurement and tracking for Évenox (Google Ads Search launch, $300/day)

Prepared 2026-10-07. Scope: evenox.ca (WordPress + Divi), Booqable shop (evenox.booqableshop.com), quote form, phone calls, Québec (Law 25). Current state: 2 Google Ads accounts + 2 GA4 properties on the same site, main GA4 conversion never worked, no consent banner, no CRM (leads in Notion), undeclared OpenAI ads pixel.

Legend for sources: **[F]** = page actually fetched and read. **[S]** = read only as a search-result snippet; counted separately and used only for low-stakes facts. Google Help pages usually show no publish date, so they are marked "n.d., accessed 2026-10-07".

**Source count: 105 fetched pages [F] + 22 snippet-only sources [S] = 127 distinct sources.**

---

## TL;DR (the 12 decisions)

1. **Keep one Google Ads account and one GA4 property.** Choose using the scorecard in section C. Pause the other account (do not cancel it yet) and remove its tags from the site on day 1.
2. **Put everything into one GTM container**: the Google tag (AW-), the Google tag (G-), Conversion Linker, the Ads conversion tags, the User-Provided Data tag and the CMP. Remove every hard-coded gtag, the second GA4 and Ads tags, and the OpenAI pixel. Add the OpenAI pixel back only through GTM, behind marketing consent, if Évenox actually advertises on ChatGPT.
3. **CMP: CookieYes (GTM template) or Complianz.** Both are Google-certified CMPs, both have French (Canada) and both work with WordPress + GTM. Cookiebot (Gold tier) is a valid third choice. Use an opt-in banner with "Tout refuser" and "Tout accepter" buttons that look the same.
4. **Law 25: tracking that identifies, locates or profiles must be OFF by default.** The CAI reads this as requiring express consent. The conservative choice is **Consent Mode v2 "basic"** (Google tags blocked until consent). "Advanced" mode sends cookieless pings before consent. Use it only after a legal review.
5. **Primary conversions at launch:** (a) quote form submit (website, "Submit lead form", count One, 30-day click window, enhanced conversions on), (b) calls from ads (call asset with a Google forwarding number, minimum 60 s), (c) Booqable purchase (Purchase, count Every, dynamic value, transaction ID). Everything else (phone clicks, GA4 imports) is **Secondary**.
6. **Divi forms have no hidden-field type.** Add three Input fields (gclid, gbraid, wbraid), hide them with CSS and fill them with a consent-gated GTM script (code in B.6).
7. **Divi form success**: use the module's "Redirect URL" to a `/merci-soumission/` page and fire on that page view. Save the email in sessionStorage on submit so enhanced conversions still work after the redirect. The alternative is the "Tracking for Divi" plugin, which pushes a `contact_form_submit` dataLayer event.
8. **Booqable**: the best fix is to connect a custom subdomain (for example `location.evenox.ca`, CNAME to `custom.booqabledomain.com`). The shop then shares first-party cookies with evenox.ca. Then add the Booqable Google Ads app (beta, fires on the thank-you page with the order value) or GTM through Booqable "Additional scripts" (Grow/Scale plans, `Booqable.on('completed', …)`). If the subdomain is not ready, set up Google tag cross-domain (evenox.ca + booqableshop.com).
9. **Calls**: Google forwarding numbers **are available in Canada**. Turn on call reporting, add a call asset and create a "Calls from ads" conversion (60 s minimum). Website call conversions (number-swap snippet) are optional in week 1. CallRail ($45/mo, serves Canada) is an upgrade path.
10. **Offline imports in 2026**: the legacy Google Ads API offline-conversion upload path was **blocked for new adopters on 2026-06-15** and moved to the **Data Manager / Data Manager API**. For a Notion business, the simplest options are **(1) Zapier: Notion "Updated properties in data source item" → Google Ads "Send Offline Conversion"**, or **(2) Notion → Google Sheet → Data Manager daily scheduled import**. Pipedrive has no native Google Ads offline-conversion connector (it works only through Zapier or CDPs). HubSpot does have one, natively and through Data Manager, starting at Marketing Hub Starter.
11. **Enhanced conversions** are now one account-level on/off switch (since June 2026). Since April 2026 Google Ads accepts user data from the tag, Data Manager and the API at the same time.
12. **QA before spending money**: Tag Assistant, GTM Preview consent tab, `gcs` and `gcd` parameters, test conversions with a real ad click, the enhanced conversions diagnostics report after 48 h, and a test offline upload (see section E).

---

## A. Sources (numbered)

### A1. Google Ads / Google Tag / GA4 / Data Manager (official)

| # | Title | URL | Date | Takeaway |
|---|---|---|---|---|
| 1 [F] | Set up consent mode on websites (Google tag platform, developers) | https://developers.google.com/tag-platform/security/guides/consent | Last updated 2026-07-30 | 4 parameters (ad_storage, analytics_storage, ad_user_data, ad_personalization). Set `default` before tags fire, `update` on user choice. `wait_for_update`, region-specific defaults (ISO 3166-2, e.g. CA-QC). URL passthrough and ads_data_redaction. |
| 2 [F] | Consent mode on websites and mobile apps (GA Help 9976101) | https://support.google.com/analytics/answer/9976101 | n.d. | Basic: "Google tags blocked until consent is granted". Advanced: tags load before the banner and send cookieless pings when consent is denied. Basic gets only a general conversion model. Advanced allows advertiser-specific modeling. |
| 3 [F] | Consent mode in Tag Manager (GTM Help 10718549) | https://support.google.com/tagmanager/answer/10718549 | n.d. | Consent Initialization trigger fires before all other triggers. Additional consent checks per tag. CMP templates in the Community Template Gallery. |
| 4 [F] | Set up conversion tracking for your website (Ads 12216226) | https://support.google.com/google-ads/answer/12216226 | n.d. | Settings: category, value, count, click-through (up to 90 d), engaged-view and view-through windows, enhanced conversions. Correct Primary/Secondary setup is "critical". |
| 5 [F] | About conversion counting options (Ads 3438531) | https://support.google.com/google-ads/answer/3438531 | n.d. | One conversion = best for leads. Every = best for purchases. |
| 6 [F] | About conversion windows (Ads 3123169) | https://support.google.com/google-ads/answer/3123169 | n.d. | Click-through default 30 d (1–30, 60 or 90). Engaged-view default 3 d. View-through default 1 d. Google recommends at least 7 d. |
| 7 [F] | About primary and secondary conversion actions / goals (Ads 10995103) | https://support.google.com/google-ads/answer/10995103 | n.d. | An action influences bidding only if it is Primary AND its goal is selected by the campaign. Secondary actions appear only in "All conv." |
| 8 [F] | About the Conversion Linker tag (Ads 7521212) | https://support.google.com/google-ads/answer/7521212 | n.d. | Stores ad-click info in first-party cookies. Supports linker config across domains. |
| 9 [F] | Set up enhanced conversions for web (Google tag) (Ads 13258081) | https://support.google.com/google-ads/answer/13258081 | n.d. | Goals > Settings > Enhanced conversions. Three methods: automatic, CSS/JS, code. Email preferred. About 30 d to see impact. |
| 10 [F] | Set up enhanced conversions for web using GTM (Ads 13262500) | https://support.google.com/google-ads/answer/13262500 | n.d. | Turn on "Allow user-provided data capabilities" in Google tag settings. Need email, or full address, or phone. Check diagnostics after 48 h. |
| 11 [F] | Opt into enhanced conversions at account level (Ads 14662970) | https://support.google.com/google-ads/answer/14662970 | n.d. (2026 content) | Web and leads are merging into one on/off switch. From April 2026, tag + Data Manager + API are accepted together. |
| 12 [F] | 2026 changes to enhanced conversions (Ads 16884284) | https://support.google.com/google-ads/answer/16884284 | 2026 | April 2026: data accepted from all sources at once. June 2026: one toggle. Offline/ECL uploads move to the Data Manager API and are blocked in the Google Ads API after 2026-06-15. |
| 13 [F] | About enhanced conversions for leads (Ads 15713840) | https://support.google.com/google-ads/answer/15713840 | 2026 | ECL = upgraded OCI using hashed email/phone plus GCLID when available. Upload through Data Manager (UI/API), API or Zapier. |
| 14 [F] | Set up ECL with Google Tag Manager (Ads 11347292) | https://support.google.com/google-ads/answer/11347292 | 2026 | Conversion Linker on all pages. User-provided data via automatic, manual (CSS) or code. Trigger on form submit. Then import via Data Manager, API or Zapier. |
| 15 [F] | Using Google Ads Data Manager with ECL (Ads 15707550) | https://support.google.com/google-ads/answer/15707550 | n.d. | Goals > Conversions > create import action > direct connection (e.g. Google Sheets) or Zapier. Field mapping and transformations. |
| 16 [F] | How to upgrade offline imports (Ads 15479791) | https://support.google.com/google-ads/answer/15479791 | n.d. | Data Manager is "the recommended method". Include GCLID, user data, order ID and BRAIDs. Make the new action Primary after the longer of 3 conversion cycles or 4 weeks. |
| 17 [F] | About offline conversion imports (Ads 2998031) | https://support.google.com/google-ads/answer/2998031 | 2026 | ECL recommended (median +10% conversions in Google tests). From 2026-06-15 OCI/ECL uploads go through the Data Manager API. |
| 18 [F] | Set up offline conversions using GCLID (Ads 7012522) | https://support.google.com/google-ads/answer/7012522 | n.d. | Auto-tagging required. Official hidden-field script (localStorage, 90-day expiry, `gclsrc` check). GCLID is case-sensitive. Wait 4–6 h after creating the action before uploading. |
| 19 [F] | Data Manager — Google Sheets connection (DM 15146000) | https://support.google.com/google-ads-data-manager/answer/15146000 | n.d. | Needs Editor access to the Sheet and admin access in Ads. Only the first sheet is read. The first row must be headers. CSV/TSV also accepted. |
| 20 [F] | HubSpot connection in Data Manager (Ads 10324795) | https://support.google.com/google-ads/answer/10324795 | n.d. | Direct HubSpot → OCI/ECL import, with conditions on the Lifecycle Stage field. Quotas depend on the HubSpot tier. |
| 21 [F] | Data Manager API (developers) | https://developers.google.com/data-manager/api | n.d. | A single ingestion API for Ads, GA, CM360, SA360 and DV360 (conversions and audiences). |
| 22 [F] | About call reporting (Ads 2454052) | https://support.google.com/google-ads/answer/2454052 | n.d. | A Google forwarding number (GFN) is assigned to call assets. Calls over a duration you set count as conversions. Calls under 15 s are not tracked. |
| 23 [F] | Google forwarding number (Ads 2382961) | https://support.google.com/google-ads/answer/2382961 | n.d. | **Canada is in the GFN country list.** Local number when possible, otherwise toll-free. Numbers belong to Google. |
| 24 [F] | Call reporting / call assets (Ads 2453991) | https://support.google.com/google-ads/answer/2453991 | n.d. | Call reporting is available on the Search Network only. |
| 25 [F] | Measure calls from ads (Ads 6095882) | https://support.google.com/google-ads/answer/6095882 | n.d. | Category "Phone call lead". Sources: Calls from ads / from website / via uploads. Call reporting required. Uses AI call-quality scoring if recording is on, otherwise duration. |
| 26 [F] | Track calls to a phone number on a website (Ads 6095883) | https://support.google.com/google-ads/answer/6095883 | n.d. | Website call conversions: a phone snippet swaps in a GFN. GTM tag available (national number format, no "+"). Delete the `gwcc` cookie between tests. |
| 27 [F] | About auto-tagging (Ads 1752125) | https://support.google.com/google-ads/answer/1752125 | n.d. | Adds GCLID to URLs. Required for GA4 linking and offline imports. |
| 28 [F] | Link Google Ads and GA4 (GA 9379420) | https://support.google.com/analytics/answer/9379420 | n.d. | Admin > Product links > Google Ads. Needs GA Editor + Ads admin. Data within 48 h. |
| 29 [F] | [GA4] Set up cross-domain measurement (GA 10071811) | https://support.google.com/analytics/answer/10071811 | n.d. | Configure your domains. `_gl` linker parameter. Fails if navigation is triggered by JavaScript, by stopPropagation or by redirects that strip `_gl`. |
| 30 [F] | [GA4] Identify unwanted referrals (GA 10327750) | https://support.google.com/analytics/answer/10327750 | n.d. | Use for payment processors (Stripe or PayPal returns from Booqable checkout). Max 50 per stream. |
| 31 [F] | Manager accounts: About cross-account conversion tracking (Ads 3030657) | https://support.google.com/google-ads/answer/3030657 | n.d. | An account uses EITHER account-specific OR cross-account conversions, never both. Needs an MCC. |
| 32 [F] | Copy or move campaigns — Google Ads Editor (38654) | https://support.google.com/google-ads/editor/answer/38654 | n.d. | You can copy campaigns between accounts. Statistics and history do not transfer. Portfolio strategies become manual CPC. |
| 33 [F] | Cancel your Google Ads account (Ads 2424604) | https://support.google.com/google-ads/answer/2424604 | n.d. | Needs admin access and complete billing. Ads stop within 24 h. Remarketing lists close. The account can be reactivated. Accounts with no spend for 15 months are auto-cancelled. |
| 34 [F] | Advertiser verification (Policy 9703665) | https://support.google.com/adspolicy/answer/9703665 | n.d. | All advertisers will eventually need it. Status takes up to 5 business days. Name mismatches are the most common failure. |
| 35 [F] | Add a Google tag to your website (Ads 6331314) | https://support.google.com/google-ads/answer/6331314 | n.d. | Google tag in `<head>` plus event snippets. Check "Tracking status" under Goals > Conversions. |
| 36 [F] | New customer acquisition parameter (Ads 12077475) | https://support.google.com/google-ads/answer/12077475 | n.d. | `new_customer: true/false` on purchase conversions. 540-day default lapse window. Optional for Booqable purchases later. |
| 37 [F] | Google Ad Manager — list of Google-certified CMPs (13554116) | https://support.google.com/admanager/answer/13554116 | n.d. (updated weekly) | Cookiebot (ID 134), CookieYes (401), Didomi (7), Axeptio (260) and Complianz (332) are all certified. |
| 38 [F] | Google EU user consent policy | https://www.google.com/about/company/user-consent-policy/ | n.d. | Applies to EEA, UK and Switzerland only. **It is not the legal driver in Canada.** Law 25 is. |
| 39 [F] | Release notes for Google Tag Manager | https://support.google.com/tagmanager/answer/4620708 | 2025–2026 entries | Google tag gateway GA (2025). CDN integrations (Cloudflare, Akamai, Fastly, CloudFront, GCP). Containers with Ads tags auto-load the Google tag first (March 2025). |
| 40 [F] | Enhanced conversions for leads (Google Business "Accelerate" article) | https://business.google.com/en-all/accelerate/resources/articles/enhanced-conversions-leads/ | n.d. | Email is the best identifier. Phone in E.164. Goal "Qualified lead" / "Converted lead". Check the diagnostics report. |
| 41 [S] | Upgrade OCI to ECL (Ads 14274408) | https://support.google.com/google-ads/answer/14274408 | n.d. | (Snippet) An upgrade path exists from GCLID-only imports. |
| 42 [S] | View connected data sources (Marketing Data Manager 13944739) | https://support.google.com/marketing-data-manager/answer/13944739 | n.d. | (Snippet) Pending tasks > Connect source. Edit schedule: frequency, or "Not scheduled" to stop. |
| 43 [S] | Copy and paste campaigns (Ads 9471263) | https://support.google.com/google-ads/answer/9471263 | n.d. | (Snippet) The web UI can also copy and paste entities. |

### A2. Québec Law 25 / CAI / Canadian privacy

| # | Title | URL | Date | Takeaway |
|---|---|---|---|---|
| 44 [F] | CAI — Avis de consultation + Lignes directrices 2023-1 sur les critères de validité du consentement (PDF) | https://www.cai.gouv.qc.ca/uploads/pdfs/CAI_Criteres_Validite_Cons_avis.pdf | 2023-05-16 (draft; final version published 2023-10-31) | §31 b): identification, location and profiling technologies "doivent être désactivées par défaut… Cela revient à exiger qu'il y ait consentement exprès" (LP art. 8.1). Example 34.2: a cookie pop-up with "Accepter"/"Refuser" buttons "mis en valeur de la même façon" gives express consent. |
| 45 [S] | CAI — Lignes directrices 2023-1 (final) / rétroaction | https://www.cai.gouv.qc.ca/uploads/pdfs/CAI_Criteres_Validite_Cons_retro.pdf | 2023-10-31 | (Snippet) Final guidelines v1.0 were published on 2023-10-31 after the consultation. |
| 46 [F] | Québec.ca — Identification, localisation et profilage | https://www.quebec.ca/gouvernement/travailler-gouvernement/normes-gouvernance-pratiques-internes/protection-des-renseignements-personnels/technologie-et-droit-a-la-protection-des-renseignements-personnels/identification-localisation-profilage | n.d. | These functions must be disabled by default. Cookies that identify, locate or profile need affirmative consent. A consent banner can be used to activate them. |
| 47 [F] | RCGT — Loi 25 et gestion des témoins | https://www.rcgt.com/fr/conseils/avis-d-experts/loi-25-gestion-temoins-comment-conformer-loi/ | n.d. | Only "strictly necessary" cookies may be on by default. Analytics and advertising cookies need consent. "Refuser tout" must be as visible as "Accepter tout". |
| 48 [F] | Office of the Privacy Commissioner of Canada — Guidelines on privacy and online behavioural advertising | https://www.priv.gc.ca/en/privacy-topics/technology/online-privacy-tracking-cookies/tracking-and-ads/gl_ba_1112/ | 2011 (still in force) | Federal PIPEDA allows opt-out consent for OBA under strict conditions. **Québec Law 25 is stricter (opt-in).** |
| 49 [F] | CookieHub — Law 25 Québec cookie consent | https://www.cookiehub.com/quebec-law-25 | n.d. | Opt-in. GA with identifiers is disabled by default. Fines up to $10M or 2% (administrative) and $25M or 4% (penal). No small-business exemption. |
| 50 [F] | CookieChimp — Guide to Québec Law 25 cookie consent | https://cookiechimp.com/guides/regulations/ca_qc_law25 | n.d. | Vendor checklist: Accept all + Reject all on layer 1, granular toggles, persistent withdrawal link, French. "6-month validity / 18-month logs" are vendor recommendations, not CAI rules. |
| 51 [F] | CookieYes — Conformité Loi 25 (FR) | https://www.cookieyes.com/fr/conformite-loi-25-quebec.md | n.d. | Prior consent. Consent must not be bundled with the privacy policy. Easy withdrawal. Consent logs. |
| 52 [F] | CookieYes — Documentation: Québec's Privacy Act (Law 25) | https://www.cookieyes.com/documentation/quebecs-privacy-act-law-25/ | n.d. | 5-step banner configuration. Specific purposes. Privacy policy link. |
| 53 [F] | FlexyConsent — Québec Law 25 cookie consent guide 2026 | https://flexyconsent.com/blog/quebec-law-25-cookie-consent-guide/ | 2026 | Technology must be technically disabled until consent. **Caution: this article says "advanced mode blocks scripts". That is backwards. Per Google (#2), BASIC blocks tags.** |
| 54 [F] | Axeptio — Law 25: only 30% of Québec companies compliant | https://axept.io/blog/law-25-quebec-companies-compliant | Updated 2025-12-19 | Granular consent. Fines up to $10M or 2%. Low compliance rate in the market. |
| 55 [F] | Didomi — Étude Loi 25: top 3 des types de bannières au Québec (PDF) | https://business.didomi.io/hubfs/Didomi%20-%20Loi%2025%20top%20bannieres%20de%20consentement.pdf | ~Dec 2023 | 62% of surveyed Canadian clients used a non-blocking footer banner (high consent but high no-choice rate). Didomi warns these trends do not guarantee compliance with the CAI guidelines. |
| 56 [F] | Lightspeed eCom — Consent mode requirement | https://ecom-support.lightspeedhq.com/hc/articles/25005527282715 | n.d. | A platform vendor states Google Consent Mode is "required" for merchants serving Québec. This is a vendor reading, not Google policy (see #38). |
| 57 [S] | Fasken — CAI guidelines 2023-1 on valid consent | https://www.fasken.com/fr/knowledge/2023/07/special-series-commission-dacces-a-linformation-guidelines-2023-1-on-the-criteria-for-valid-consent | 2023-07 | (Snippet; fetch returned 403) Eight criteria. Silence is not consent. |
| 58 [S] | Termly — Qu'est-ce que la loi 25 | https://termly.io/fr/ressources/articles/loi-quebecoise-25/ | n.d. | (Snippet) Art. 8.1: inform people first and disable identification, location and profiling by default. |
| 59 [S] | Syrenis — Québec regulator on valid consent | https://syrenis.com/resources/blog/quebec-information-regulators-valid-consent/ | n.d. | (Snippet) Express consent for non-essential cookies. |
| 60 [S] | CookieChimp — Canada consent banners 2025 | https://cookiechimp.com/blog/the-complete-guide-to-consent-banners-in-canada | 2025 | (Snippet) Bilingual FR-first banner. CA-QC-specific opt-in. |

### A3. CMP vendors (WordPress + GTM + French + Google certification)

| # | Title | URL | Date | Takeaway |
|---|---|---|---|---|
| 61 [F] | CookieYes — Google-certified CMP for Consent Mode v2 | https://www.cookieyes.com/google-consent-mode-certified-cmp/ | n.d. | Google-certified for CMv2 and IAB TCF. Works via GTM template or script. |
| 62 [F] | CookieYes — Google Consent Mode page | https://www.cookieyes.com/google-consent-mode/ | n.d. | CMv2 on by default at signup. GTM template. Auto-blocking. Consent logs. |
| 63 [F] | WordPress.org — CookieYes plugin (cookie-law-info) | https://wordpress.org/plugins/cookie-law-info/ | v3.5.6, ~Sept 2026 | 1M+ installs. **Free plan = "Google Consent Mode v2 (Basic)".** Supports Law 25 (Canada/Québec). French incl. Canada. Geo-targeting is a premium feature. |
| 64 [F] | WordPress.org — Complianz plugin | https://wordpress.org/plugins/complianz-gdpr/ | ~Sept 2026 | 1M+ installs. Built-in CMv2. French (Canada) locale. Canada support. Free version includes banner, scan and blocking. |
| 65 [F] | Complianz — CMP profile for Google customers (PDF) | https://services.google.com/fh/files/misc/complianz_cmp_profile.pdf | 2023-12-13 | Self-hosted. 7 regions incl. **Québec** subregion. 24 languages. $59/yr per site, consent mode included. |
| 66 [F] | Complianz — Definitive guide to Tag Manager and Complianz | https://complianz.io/using-a-simple-banner-with-gtm/ | n.d. | Enter the GTM ID in the wizard. Events `cmplz_event_statistics` and `cmplz_event_marketing` used as triggers. |
| 67 [F] | WordPress.org — Cookiebot plugin | https://wordpress.org/plugins/cookiebot/ | v4.7.3, 2026-09-14 | Google-certified. GTM. Free tier: 1 domain, 50 subpages. French. 100k+ installs. |
| 68 [F] | Cookiebot — Google Consent Mode | https://www.cookiebot.com/en/google-consent-mode/ | n.d. | Works out of the box with GA, Ads, Floodlight and Conversion Linker. GTM template. |
| 69 [F] | Didomi — Enable Google Consent Mode | https://support.didomi.io/enable-google-consent-mode | n.d. | Console, GTM template (GDPR-only) or didomiConfig. Default all denied. Clear basic vs advanced explanation. |
| 70 [F] | Enzuzo — Google CMP partners by tier | https://enzuzo.com/blog/google-cmp-partners | 2026-03-26 | Gold: Cookiebot, Didomi, Axeptio, Usercentrics, iubenda. Silver: CookieYes, Complianz. 47 partners in total. |
| 71 [F] | Axeptio — ChatGPT ads pixel (OpenAI) vendor | https://www.axept.io/blog/chatgpt-ads-pixel-tracking-openai-vendors | 2026-08-31 | The OpenAI pixel starts with consent enabled by default, so it must be blocked upstream by the CMP. Vendor id `chatgpt_pixel` (Advertising / Conversion tracking). |
| 72 [S] | Axeptio — GTM template / WP Consent API | https://google-cmp-partner.axept.io/ | n.d. | (Snippet) Community Gallery GTM template. CMv2 mapping. |
| 73 [S] | CookieYes Law 25 (search) / Nexconform plugin | https://uk.wordpress.org/plugins/nexconform-consent-manager/ | n.d. | (Snippet) A small alternative WordPress plugin with Law 25 support and EN/FR. |
| 74 [S] | Complianz tag-manager docs index | https://complianz.io/tag/tag-manager/ | n.d. | (Snippet) Downloadable GTM container with Complianz triggers. |

### A4. Booqable

| # | Title | URL | Date | Takeaway |
|---|---|---|---|---|
| 75 [F] | Booqable — Google Ads app (help 12496625) | https://help.booqable.com/en/articles/12496625 | 2025–2026 | Create a "Purchase" conversion, enter the AW- ID and label. Fires only on the final thank-you page with the exact order value. No enhanced conversions. Embedded sites need a custom subdomain to avoid cookie blocking. |
| 76 [F] | Booqable — What's new wk 40 2025: Google Ads app | https://booqable.com/whats-new/october_08_2025/ | 2025-10-08 | Google Ads app launched in **beta**. Sends completed orders as conversions. |
| 77 [F] | Booqable — Google Ads integration page | https://booqable.com/integrations/google-ads/ | n.d. | Available to all users. Beta. Works for hosted and embedded shops. |
| 78 [F] | Booqable — Google Analytics app (help 9188983) | https://help.booqable.com/en/articles/9188983-google-analytics-app | n.d. | Sends `purchase`, `begin_checkout`, `view_item`, `add_to_cart` and more. Recommends a custom checkout subdomain. No GTM mention. |
| 79 [F] | Booqable — GA4 integration page | https://booqable.com/integrations/google-analytics/ | n.d. | Add the GA4 Measurement ID in Booqable. Works with hosted and embedded shops. |
| 80 [F] | Booqable — Connecting the checkout with your own domain (9419620) | https://help.booqable.com/en/articles/9419620-connecting-the-booqable-checkout-with-your-own-domain | n.d. | Settings > Online bookings > Preferences > Custom subdomain. CNAME to `custom.booqabledomain.com`. |
| 81 [F] | Booqable — Connect a custom subdomain to your online store (9405158) | https://help.booqable.com/en/articles/9405158-how-to-connect-a-custom-subdomain-to-your-booqable-online-store | n.d. | Same CNAME. DNS propagation 5 min–48 h. |
| 82 [F] | Booqable — Checkout scripts (2381273) | https://help.booqable.com/articles/2381273-checkout-scripts | n.d. | **Grow and Scale plans.** Events `page-change`, `information`, `payment`, `completed`. `Booqable.cartData.orderId`, `grandTotalWithTax`, `currency`. `Booqable.loadScript()`. |
| 83 [F] | Booqable — Additional scripts / analytics (4364079) | https://help.booqable.com/en/articles/4364079 | n.d. | `Booqable.setupGoogleAnalytics(id, pageTracking, events)`. Settings > Online checkout > Additional scripts. |
| 84 [F] | Zapier — Booqable + Google Ads | https://zapier.com/apps/booqable/integrations/google-ads | n.d. | Triggers: Completed Payment, Reserved Order, Started Order, Updated Order. Action: Send Offline Conversion. |
| 85 [S] | Booqable — Custom domain verification (wk 45 2024) | https://booqable.com/whats-new/november_13_2024/ | 2024-11-13 | (Snippet) Improved domain verification. |

### A5. WordPress / Divi / GTM practice

| # | Title | URL | Date | Takeaway |
|---|---|---|---|---|
| 86 [F] | Elegant Themes — The Divi Contact Form module | https://help.elegantthemes.com/en/articles/8624843-the-divi-contact-form-module | n.d. | Field types: input, email, textarea, checkboxes, radio, select. **No hidden-field type.** Field ID rules (no spaces). "Enable Redirect URL". `%%field_id%%` in the email template. |
| 87 [F] | Divi Engine — Hidden field (Divi Form Builder plugin) | https://docs.diviengine.com/divi-form-builder/field-types/hidden-field | n.d. | A third-party plugin adds a real hidden field. "URL Parameter (matches Field ID)" can fill gclid from the URL, but only on the landing page. |
| 88 [F] | WordPress.org — Tracking for Divi | https://wordpress.org/plugins/tracking-for-divi/ | v1.1.1, ~7 months old | Listens to Divi's AJAX response. Pushes `contact_form_submit` with form data to the dataLayer. Only 100+ installs, so weigh the maintenance risk. |
| 89 [F] | WordPress.org — GTM4WP | https://wordpress.org/plugins/duracelltomi-google-tag-manager/ | v2.0.5, ~Oct 2026 | 700k+ installs. Injects the container. CMv2 integration with Cookiebot, Axeptio and CookieYes. |
| 90 [F] | Analytics Mania — Google Ads conversion tracking with GTM | https://www.analyticsmania.com/post/google-ads-conversion-tracking-with-google-tag-manager/ | n.d. (2025–26 content) | Google Tag (AW-) on "Initialization – All Pages". Conversion Linker function is built into the Google tag. Use transaction IDs. Status becomes Active about 24 h after the first real conversion. |
| 91 [F] | Simo Ahava — Basic Consent Mode: the guide | https://www.simoahava.com/analytics/basic-consent-mode-the-guide/ | 2025-05-07 | Default denied on Consent Initialization. Update + dataLayer event. In basic mode, tags must be re-triggered after consent (trigger groups / additional checks). "A total headache" vs advanced. |
| 92 [F] | Simo Ahava — Consent Mode for Google tags | https://www.simoahava.com/analytics/consent-mode-google-tags/ | 2020-10-07 (core still valid) | `ads_data_redaction`, `url_passthrough`, `gcs` parameter, region defaults. |
| 93 [F] | Loves Data — Troubleshooting consent mode in GTM | https://www.lovesdata.com/blog/troubleshooting-consent-mode/ | 2025-06-05 | Defaults denied. One CMP only. Never hard-code consent. Check consent states per event in Tag Assistant. |
| 94 [F] | Loves Data — Enhanced conversions with the User-Provided Data tag | https://www.lovesdata.com/blog/enhanced-conversions-user-provided-data/ | 2025-07-23, updated 2026-04-10 | "User-Provided Data – Automatic/Manual" variable + Google Ads User-Provided Data Event tag. Check `em` = "tv.1~em~…" in Preview. Exclude business contact details. |
| 95 [F] | Loves Data — How to track conversions with GTM | https://www.lovesdata.com/blog/google-tag-manager-conversions/ | 2025-04-10 | Form submission triggers, Preview testing. |
| 96 [F] | Measureschool — Google Ads conversion tracking with GTM | https://measureschool.com/google-ads-conversion-tracking-gtm/ | 2024-10-23 | Conversion Linker + conversion tag (ID + label). Thank-you page view trigger for forms. |
| 97 [F] | Measureschool — Phone number click tracking | https://measureschool.com/phone-number-click-tracking/ | 2024-11-01 | "Just Links" trigger, Click URL contains `tel:`. |
| 98 [F] | Measureschool — GA4 cross-domain tracking | https://measureschool.com/ga4-cross-domain-tracking/ | n.d. | Same GA4 property on both domains. Verify `_gl`. Add payment processors as unwanted referrals. |
| 99 [F] | Measureschool — How to install Consent Mode v2 (Cookiebot + GTM) | https://measureschool.com/how-to-install-consent-mode-v2/ | 2024-02 | CMP template on Consent Initialization. `cookie_consent_update` trigger. Verify `gcs`/`gcd`. |
| 100 [F] | Measureschool — Capture UTM parameters in form fields | https://measureschool.com/capture-utm-parameters-in-form-fields/ | n.d. | Persist Campaign Data template → cookie → Custom HTML fills the field on DOM Ready. |
| 101 [F] | Optimize Smart — How to import GA4 conversions into Google Ads | https://optimizesmart.com/blog/how-to-import-ga4-conversions-into-google-ads/ | n.d. | Keep GA4 imports **Secondary** to avoid double counting with the native Ads tag. |
| 102 [F] | e-dialog — Consent Mode basic vs advanced | https://e-dialog.group/en/blog/consent-mode-basic-vs-advanced-an-overview-of-the-differences/ | 2026-07-28 | Comparison table. Advanced = advertiser-specific modeling. Legal review recommended. |
| 103 [F] | Cloudflare — Google tag gateway for advertisers | https://blog.cloudflare.com/google-tag-gateway-for-advertisers | 2025-05-08 | One-click first-party tag serving. Avg +11% signals. Free on all plans. Optional for week 2+. |
| 104 [S] | Loves Data — Google Ads conversion tracking (Ads tag vs GA4 import) | https://lovesdata.com/blog/adwords-conversion-tracking | n.d. | (Snippet) Prefer the Ads tag for primary optimisation. |
| 105 [S] | Measureschool — Lead source form tracking (source cookie video) | https://measureschool.com/video/lead-source-form-tracking-google-tag-manager-source-cookie/ | n.d. | (Snippet) Cookie-persisted source into forms. |
| 106 [S] | UTM Grabber — Divi integration | https://docs.utmgrabber.com/books/divi-integration | n.d. | (Snippet) A paid plugin that fills GCLID/UTM fields in Divi forms. |

### A6. Offline import tooling (Zapier, CRMs, Sheets)

| # | Title | URL | Date | Takeaway |
|---|---|---|---|---|
| 107 [F] | Zapier — Notion + Google Ads | https://zapier.com/apps/google-ads/integrations/notion | n.d. | Notion triggers include **"Updated Properties in Data Source Item"**. The Google Ads action is **"Send Offline Conversion"**. No pre-built template. |
| 108 [F] | Zapier — Google Sheets new row → Send Offline Conversion (88844) | https://zapier.com/apps/google-ads/integrations/google-sheets/88844/log-google-ads-offline-conversions-from-new-rows-in-google-sheets | n.d. | Fields: Conversion User Identifier Source, Conversion Action, Timestamp, Value, Currency. |
| 109 [F] | Zapier — Sheets new or updated row → offline conversion (546963) | https://zapier.com/apps/google-ads/integrations/google-sheets/546963/trigger-offline-conversions-in-google-ads-with-new-or-updated-rows-in-google-sheets | n.d. | Trigger column option, so it can fire on a status change. |
| 110 [F] | Zapier — Zapier Tables updated record → offline conversion | https://www.zapier.com/apps/google-ads/integrations/zapier-tables/1707655/send-offline-conversions-to-google-ads-when-updated-records-occur-in-zapier-tables | n.d. | Includes **consent fields for ad data** in the action. |
| 111 [F] | Stape — Google Ads offline conversion tracking via Google Sheets (no CRM) | https://stape.io/blog/google-ads-offline-conversion-tracking-without-crm | 2026-07-28 | Sheet columns: Status, Email, Phone, GCLID, Conversion Name/Time/Value/Currency, Ad Storage and Ad Personalization consent. Scheduled pull every 24 h. |
| 112 [F] | CustomerLabs — Google Sheets + Google Ads offline conversions | https://www.customerlabs.com/blog/connect-google-ads-to-google-sheets-offline-conversions/ | 2026 | Only push qualified stages. Columns: gclid, conversion_name, conversion_time (with offset), value, currency, email, phone. |
| 113 [F] | UTM Grabber — Automate Google Ads offline conversions from Google Sheets | https://utmgrabber.com/blog/automate-google-ads-offline-conversions-google-sheets/ | 2026 | Use the original milestone time. Dedup key. Data Manager daily schedule. Explicit time zone. |
| 114 [F] | e-dialog — Importing first-party data with Data Manager | https://e-dialog.group/en/?p=14769 | 2025-12-31 | Sources: Sheets, HTTPS, BigQuery, S3, HubSpot, Salesforce, Snowflake and more. Daily, weekly or manual schedules. Run a test upload first. |
| 115 [F] | HubSpot KB — Create and sync ad conversion events with Google Ads | https://knowledge.hubspot.com/ads/create-and-sync-ad-conversion-events-with-your-google-ads-account | n.d. | Marketing Hub Starter (5 events), Pro (50), Enterprise (100). Lifecycle stage changes plus GCLID or hashed user data. Not via an MCC. |
| 116 [F] | ZoomInfo Pipeline — HubSpot Google Ads integration 2026 | https://pipeline.zoominfo.com/sales/hubspot-google-ads-integration | 2026 | Needs Marketing Hub Starter or higher. Free CRM alone is not enough. Data Manager HubSpot connector is an alternative. |
| 117 [F] | ResonateHQ — Send offline conversions from HubSpot to Google Ads | https://www.resonatehq.com/blog/send-offline-conversions-from-hubspot-to-google-ads | 2026-09-27 | Workflow-action route needs HubSpot Pro. GCLID match. Clicks must be at least 6 h old. |
| 118 [S] | Zapier — Pipedrive updated deals → Google Ads offline conversions (88859) | https://editor.vercel.zapier.com/apps/google-ads/integrations/pipedrive/88859/create-offline-conversions-in-google-ads-with-updated-pipedrive-deals | n.d. | (Snippet) The Pipedrive → Ads route is through Zapier. No native Pipedrive connector found. |
| 119 [S] | CustomerLabs — Pipedrive integration | https://www.customerlabs.com/integrations/pipedrive | n.d. | (Snippet) A CDP route for Pipedrive deal stages → Ads. |
| 120 [S] | Datahash — Google Sheet → Google OCI | https://www.datahash.com/connections/google-sheet/google-oci/ | n.d. | (Snippet) Another paid Sheets connector. |

### A7. Calls, account management, OpenAI pixel, misc

| # | Title | URL | Date | Takeaway |
|---|---|---|---|---|
| 121 [F] | Ringly — 7 best CallTrackingMetrics alternatives 2026 | https://www.ringly.io/blog/calltrackingmetrics-alternatives | 2026-10-02 | CallRail from $45/mo serves the **US, Canada, UK and AU**. WhatConverts $30. Nimbata $39 (100+ countries). |
| 122 [F] | ivitskiy — Google Ads advertiser verification | https://ivitskiy.com/blog/en/google-ads-advertiser-verification/ | 2026-09-06 | Payments profile name, ID document and website must match. Submit everything at once. Do not change details during review. |
| 123 [F] | PPC Land — OpenAI ChatGPT ads conversion optimization | https://ppc.land/openais-chatgpt-ads-are-getting-conversion-optimization-heres-what-changes/ | 2026-06 | Pixel uses an `oppref` first-party cookie. Conversions API. Canada market opened March 2026. Conversion optimization was US-first. |
| 124 [S] | Wmtips / SourceForge — Call tracking market share in Canada | https://www.wmtips.com/technologies/call-tracking/country/ca/ | 2026 | (Snippet) In Canada, Google Ads call tracking holds about 51% share, CallRail about 38%. |
| 125 [S] | Shopifreaks — OpenAI building a conversion pixel | https://www.shopifreaks.com/openai-is-building-a-conversion-tracking-pixel-for-chatgpt-ads-moving-toward-the-performance-advertising-infrastructure-of-meta-and-google/ | 2026 | (Snippet) Background on the ChatGPT ads pixel. |
| 126 [S] | SaaS Hero — Switching Google Ads agency / accounts | https://saashero.net/google-ppc/easy-switch-google-ads-agency/ | 2026-09-03 | (Snippet) Google Ads accounts cannot be merged. |
| 127 [S] | Branch FAQ — Is it possible to link two Google Ads accounts | https://help.branch.io/faq/docs/is-it-possible-to-link-two-google-ads-accounts | n.d. | (Snippet) Two Ads accounts cannot be linked or merged directly. |

---

## B. 5-day "minimum viable tracking" plan (freelancer playbook)

### Naming conventions (used below)
- GTM container: `GTM-XXXXXXX` (one only). Google Ads: `AW-1111111111` (the kept account). GA4: `G-XXXXXXXXXX` (the kept property).
- Conversion action names are in French so the client can read them: `EVX – Lead formulaire devis`, `EVX – Appel annonce (≥60s)`, `EVX – Appel site web (≥60s)`, `EVX – Achat Booqable`, `EVX – Clic téléphone` (secondary), `EVX – Lead qualifié (import)`, `EVX – Réservation confirmée (import)`.

### Day 0 (before day 1, about 1 h): access and inventory
1. Get admin access to both Google Ads accounts, both GA4 properties, the GTM container(s), WordPress, Booqable and the DNS registrar.
2. Run Tag Assistant (tagassistant.google.com) on the home page, the quote page, the thank-you path and a Booqable checkout. List every tag ID that fires (AW-, G-, GTM-, the OpenAI pixel, other pixels). In WordPress, check theme header code (Divi > Theme Options > Integration), plugins (Site Kit, GTM4WP, MonsterInsights, etc.) and `functions.php`.
3. Fill in the account scorecard (section C) and decide which Ads account and which GA4 property to keep.

### Day 1: clean up, single container, consent foundation
1. **Remove duplicates.** Delete every hard-coded gtag/GA4/Ads snippet, the second GA4 and Ads tags, and the OpenAI pixel from Divi Integration, plugins and theme files. Keep or install **one** GTM container (with GTM4WP, or in Divi > Integration > `<head>` and `<body>`). If the kept GA4 property is set up through Site Kit, turn off Site Kit's tag placement so tags do not fire twice.
2. **Pause the losing Ads account's campaigns.** Do not cancel it yet (see C).
3. **Install the CMP** (recommended: **CookieYes** cloud with its GTM template, or **Complianz**):
   - Banner language FR-CA first, EN second. First layer has "Tout accepter" and "Tout refuser" styled identically, plus "Personnaliser". Categories: Nécessaires (on, locked), Analytique (off), Publicité/Marketing (off). A persistent "Gérer mes témoins" footer link. Link to the Politique de confidentialité, and name the person responsible for personal information protection, as Law 25 requires.
   - Scope: show the opt-in banner to all visitors. It is simplest, and Évenox's market is mostly Québec. Geo-targeting is a paid CookieYes feature and is unnecessary here.
   - Turn on **Google Consent Mode v2** in the CMP.
4. **GTM consent wiring (basic mode, Law 25-conservative):**
   - Tag `CMP – CookieYes` (Community template): trigger **Consent Initialization – All Pages**. Defaults: `ad_storage=denied`, `analytics_storage=denied`, `ad_user_data=denied`, `ad_personalization=denied`, `functionality_storage=granted`, `security_storage=granted`, `wait_for_update=500`.
   - Admin > Container settings > turn on **"Enable consent overview"**.
   - Trigger `CE – cookie_consent_update`: Custom Event, event name = the CMP's update event (CookieYes `cookie_consent_update`; Complianz `cmplz_event_marketing` / `cmplz_event_statistics`; Cookiebot `cookie_consent_update`).
5. **Base tags:**
   - `Google Tag – Ads AW-1111111111`: triggers **Initialization – All Pages** + `CE – cookie_consent_update`. Tag firing option **Once per page**. Consent settings > *Require additional consent*: `ad_storage`.
   - `Google Tag – GA4 G-XXXX`: same triggers, firing option Once per page. Require additional consent: `analytics_storage`.
   - `Conversion Linker`: same triggers. Require `ad_storage`. Under "Linker" enable "Enable linking across domains" and auto-link `booqableshop.com` (remove this once the custom subdomain is live).
   - *(Advanced-mode alternative, only after legal sign-off: remove the "additional consent" requirements and rely on built-in consent checks. Tags then load and send cookieless pings while consent is denied.)*
6. **Google Ads account settings** (kept account): turn on auto-tagging. Account time zone and currency are fixed at creation, so check they are America/Toronto and CAD. Goals > Settings > turn on **enhanced conversions** (accept the customer data terms; method: Google Tag Manager). In Google tag settings, turn on "Allow user-provided data capabilities". **Turn off automatic detection** so business emails and phones on the site are not picked up.
7. **Link the kept GA4 property to the kept Ads account** (GA Admin > Product links). In the losing GA4 property, remove the Ads link, or leave it unused.

### Day 2: quote form conversion + GCLID capture + enhanced conversions
1. **Divi quote form changes** (Contact Form module):
   - Add 3 fields of type **Input**, with Field IDs `gclid`, `gbraid` and `wbraid`. Required = No. "Allowed symbols" = All. In each field's *Advanced > CSS ID & Classes* add CSS class `evx-hidden`. In Theme Options > Custom CSS add `.evx-hidden{display:none!important;}`.
   - In the module's Email settings, add `GCLID: %%gclid%% | GBRAID: %%gbraid%% | WBRAID: %%wbraid%%` to the message pattern, so the IDs reach the inbox and Notion.
   - **Enable Redirect URL** = `https://evenox.ca/merci-soumission/`. Create that page (noindex, show the thank-you message). Only successful submissions redirect.
   - Add a consent sentence under the submit button, e.g. "En soumettant ce formulaire, vous acceptez qu'Évenox utilise vos coordonnées pour répondre à votre demande et, le cas échéant, mesurer l'efficacité de ses publicités (Google). Voir notre politique de confidentialité." Using a lead's email for ad measurement is a separate purpose under Law 25 art. 14, so either get legal sign-off on the wording or add an unticked opt-in checkbox and store its value.
2. **Custom HTML tag `CHTML – Click IDs → localStorage + form`** (code in B.6). Triggers: **DOM Ready – All Pages** + `CE – cookie_consent_update`. Require additional consent: `ad_storage`. This stores the click IDs only after consent, as the conservative reading of art. 8.1 requires.
3. **Custom HTML tag `CHTML – Save lead email before redirect`** (code in B.6): fires on **DOM Ready** on the quote page(s) (Page Path matches RegEx `^/(soumission|devis|contact)`). Require `ad_storage`.
4. **Variables:**
   - `CJS – lead email` and `CJS – lead phone E164` (Custom JavaScript, read sessionStorage; code in B.6).
   - `UPD – Lead` (type **User-Provided Data**, *Manual configuration*): Email = `{{CJS – lead email}}`, Phone = `{{CJS – lead phone E164}}`.
   - Constants: `C – AW ID` = `1111111111`, `C – Label lead` = from Ads.
5. **Trigger** `PV – Merci soumission`: Page View, Page Path equals `/merci-soumission/`.
6. **Conversion action in Google Ads**: Goals > Conversions > New > Website > manual setup with code:
   - Name `EVX – Lead formulaire devis`. **Category: Submit lead form.**
   - Value: "Use the same value for each conversion" (e.g. 50 CAD, i.e. average booking value × lead-to-booking rate), or "Don't use a value" at launch.
   - **Count: One.** **Click-through window: 30 days** (60 if the quote-to-booking cycle is long). **Engaged-view: 3 days. View-through: 1 day.** Attribution: **Data-driven.**
   - **Action optimization: Primary**, in goal "Submit lead form".
   - Enhanced conversions: on (inherited from the account switch).
7. **GTM tags:**
   - `Ads – Conv – Lead devis`: Google Ads Conversion Tracking. Conversion ID `{{C – AW ID}}`, Label `{{C – Label lead}}`. Include user-provided data from the website → `{{UPD – Lead}}`. Trigger `PV – Merci soumission`. Require `ad_storage`.
   - `GA4 – Event – generate_lead`: GA4 Event tag (measurement ID G-…), event `generate_lead`, param `form_name=devis`. Same trigger. Require `analytics_storage`. Mark `generate_lead` as a **key event** in GA4 and import it into Ads as **Secondary** only.
   - *(Alternative to the redirect: install "Tracking for Divi", choose dataLayer mode, and use trigger Custom Event `contact_form_submit`. The event payload carries the form data, so the UPD variable can read the email from the dataLayer instead.)*
8. Test in GTM Preview and Tag Assistant (see section E), then **Publish**.

### Day 3: calls + phone clicks
1. **Call reporting**: Admin/Settings > Account settings > Call reporting = On. Turn on call recording if allowed: inform callers, and check Law 25 and the Criminal Code consent rules for recording. Recording lets Google score call quality.
2. **Call asset** with the Évenox business number. A Google forwarding number is used automatically because GFNs are available in Canada.
3. **Conversion** `EVX – Appel annonce (≥60s)`: New > Phone calls > **Calls from ads using call assets**. **Category: Phone call lead.** **Duration: 60 s** (90 s if spam calls show up). **Count: One.** Click-through window 30 d. Data-driven attribution. **Primary.**
4. **Optional, can wait for week 2: website call conversions** `EVX – Appel site web (≥60s)`. New > Phone calls > **Calls to a phone number on your website**. GTM tag "Google Ads Calls from Website Conversion": phone number in **national format** (`514 559 1893`, no "+"), Conversion ID + Label, trigger Initialization – All Pages, require `ad_storage`. Settings: Phone call lead, 60 s, One, Primary. Test by clicking your own ad; the number on the site should swap to a GFN. Delete the `gwcc` cookie between tests.
5. **Phone/email click micro-conversion**: trigger `Click – tel:` (Just Links, Click URL starts with `tel:`). Tag `Ads – Conv – Clic téléphone` (conversion action category "Contact", **Secondary**, count One) + GA4 event `phone_click`. **Do not make it Primary**, because clicks are not calls.
6. **Call-tracking upgrade path** (if more than 30% of leads come by phone and call→source attribution matters): CallRail (from about $45/mo, serves Canada) with DNI and the Google Ads integration that uploads qualified calls by GCLID. Consider it after launch, not in the 5-day window.

### Day 4: Booqable purchase + cross-domain
Choose the first option you can complete:

**Option 1 (recommended): custom subdomain + Booqable Google Ads app.**
1. DNS: `location.evenox.ca` CNAME → `custom.booqabledomain.com`. In Booqable: Settings > Online bookings > Preferences > Custom domain/subdomain. Allow up to 48 h. Update every "Réserver" link on evenox.ca.
2. Now evenox.ca and the shop are the same site. Google's `_gcl_*` cookies are set on the root domain, so the ad click carries over without `_gl` linking (QA must confirm).
3. Google Ads conversion `EVX – Achat Booqable`: Website > manual. **Category: Purchase.** **Value: "Use different values for each conversion"** (default 0, CAD). **Count: Every.** Click-through window 30 d (60 if bookings are planned far in advance). Data-driven. **Primary.**
4. Booqable App Store > **Google Ads** (beta): enter `AW-1111111111` + the purchase label. It fires on the thank-you page only, with the order value.
5. Booqable App Store > **Google Analytics**: the same `G-` as the site, so `purchase` arrives in the kept GA4 property. Import `purchase` into Ads as **Secondary**, or skip it, so it is not counted twice.
6. **Consent caveat**: the Booqable apps do not mention consent mode. Under Law 25 the shop also needs the banner. If Évenox is on Grow/Scale, use Option 2 instead (GTM inside Booqable with the same CMP), or ask Booqable support how its apps behave before consent.

**Option 2 (Grow/Scale plan): GTM + CMP inside Booqable "Additional scripts".**
- In Settings > Online checkout > Additional scripts, load the CMP script and the same GTM container with `Booqable.loadScript(...)`. Then push the purchase event:
```js
Booqable.on('completed', function () {
  var d = Booqable.cartData || {};
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'booqable_purchase',
    transaction_id: d.orderId,
    value: Number(d.grandTotalWithTax || d.grandtotal || 0),
    currency: d.currency || 'CAD'
  });
});
```
- In GTM: trigger Custom Event `booqable_purchase`. Tag Google Ads Conversion (purchase label) with Value `{{DLV – value}}`, Transaction ID `{{DLV – transaction_id}}`, Currency `{{DLV – currency}}`. Require `ad_storage`. Add a GA4 `purchase` event tag with the same values. **Do not also install the Booqable Google Ads app**, or purchases will be counted twice.

**Option 3 (no subdomain by day 4): cross-domain on booqableshop.com.**
- In the kept Google tag (G- and AW-) settings > Configure your domains, add `evenox.ca` and `evenox.booqableshop.com`. In GTM, Conversion Linker > enable linking across domains for `booqableshop.com`. Use the Booqable GA app with the same G- and the Booqable Ads app. Confirm `_gl=` appears on links from evenox.ca to the shop. In GA4, add Stripe, PayPal and other processors as **unwanted referrals**.
- Known risk: if Évenox's "Réserver" buttons navigate with JavaScript, or a redirect strips `_gl`, linking breaks (GA 10071811). Day-4 QA must catch this.

### Day 5: QA, conversion goals and launch readiness
1. Run the full QA checklist (section E). Submit a real test lead and a test booking (low-value item or 100% coupon) from a real ad click on a low-budget test ad, or use Tag Assistant's "Ads conversion" debug.
2. **Goals cleanup in the kept Ads account:**
   - Primary: `Lead formulaire devis`, `Appel annonce (≥60s)`, `Achat Booqable` (and `Appel site web` if built).
   - Secondary: `Clic téléphone`, every GA4 import, every legacy or broken action ("GA4 – conversion"), every conversion created by the other account's tag. **Remove or mark Secondary any duplicate "Submit lead form" action**, including Smart-campaign "local actions" if present.
   - Campaign goals: use account-default goals (Submit lead form, Phone call lead, Purchase).
3. Bidding at launch: until a campaign has about 15–30 conversions in 30 days, use Maximize clicks with a CPC cap or Maximize conversions without a tCPA. This belongs to the campaign plan; tracking only has to be trustworthy first.
4. Confirm the **OpenAI pixel** decision. If ChatGPT Ads are not running, leave it removed. If they are, add it in GTM with trigger `CE – cookie_consent_update` + Initialization, require `ad_storage` + `ad_user_data`, and declare it in the CMP (Marketing category, vendor "OpenAI / ChatGPT Ads pixel") and in the privacy policy.
5. Document everything in Notion: container version, conversion labels, owners, and the date of the "clean data" baseline (= day 5).

### B.6 Code snippets

**(1) Click-ID capture → localStorage → Divi hidden inputs** (GTM Custom HTML. Triggers: DOM Ready + consent update. Require `ad_storage`.)
```html
<script>
(function () {
  var KEYS = ['gclid', 'gbraid', 'wbraid'];
  var TTL = 90 * 24 * 60 * 60 * 1000; // 90 days, matching Google's sample (Ads 7012522)
  function qp(p) {
    var m = new RegExp('[?&]' + p + '=([^&#]*)').exec(window.location.search);
    return m && decodeURIComponent(m[1].replace(/\+/g, ' '));
  }
  // gclsrc check from Google's official sample: only keep Google Ads click IDs
  var gclsrc = qp('gclsrc');
  var srcOk = !gclsrc || gclsrc.indexOf('aw') !== -1;
  var now = Date.now();
  try {
    KEYS.forEach(function (k) {
      var v = qp(k);
      if (v && srcOk) {
        localStorage.setItem('evx_' + k, JSON.stringify({ v: v, exp: now + TTL }));
      }
    });
  } catch (e) {}
  function read(k) {
    try {
      var r = JSON.parse(localStorage.getItem('evx_' + k));
      return (r && r.exp > now) ? r.v : '';
    } catch (e) { return ''; }
  }
  function fill() {
    KEYS.forEach(function (k) {
      var val = read(k);
      if (!val) return;
      // Divi names inputs et_pb_contact_{fieldID}_{formIndex}; verify in DevTools
      var els = document.querySelectorAll('[name^="et_pb_contact_' + k + '"], [id^="et_pb_contact_' + k + '"]');
      for (var i = 0; i < els.length; i++) { els[i].value = val; }
    });
  }
  fill();
  // Divi can re-render forms (AJAX, popups): fill again on focus/submit
  document.addEventListener('focusin', function (e) {
    if (e.target && e.target.closest && e.target.closest('.et_pb_contact_form')) fill();
  });
  document.addEventListener('submit', fill, true);
})();
</script>
```
Note: if a visitor accepts consent only after landing, the GCLID is still in the URL on that first page, so the consent-update trigger captures it. If they accept on a later page, the GCLID is lost. That is the cost of opt-in. Advanced consent mode with `url_passthrough` would carry it across pages, but only use that after legal review.

**(2) Save the lead email/phone before the Divi redirect** (GTM Custom HTML on quote pages, DOM Ready, require `ad_storage`)
```html
<script>
(function () {
  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (!f || !f.closest || !f.closest('.et_pb_contact_form_container')) return;
    var em = f.querySelector('input[type="email"], [name^="et_pb_contact_email"]');
    var ph = f.querySelector('[name^="et_pb_contact_telephone"], [name^="et_pb_contact_phone"], input[type="tel"]');
    try {
      if (em && em.value) sessionStorage.setItem('evx_em', em.value.trim().toLowerCase());
      if (ph && ph.value) sessionStorage.setItem('evx_ph', ph.value);
    } catch (err) {}
  }, true);
})();
</script>
```
Divi submits forms through AJAX, so a capture-phase `submit` listener sees the form before Divi handles it. If not, also listen to `click` on `.et_pb_contact_submit`. Adjust the field IDs (`email`, `telephone`) to the real ones.

**(3) Variables used by the User-Provided Data variable** (GTM Custom JavaScript)
```js
// CJS – lead email
function () { try { return sessionStorage.getItem('evx_em') || undefined; } catch (e) { return undefined; } }
```
```js
// CJS – lead phone E164 (Canada/US)
function () {
  try {
    var p = (sessionStorage.getItem('evx_ph') || '').replace(/\D/g, '');
    if (!p) return undefined;
    if (p.length === 10) p = '1' + p;
    return p.length === 11 ? '+' + p : undefined;
  } catch (e) { return undefined; }
}
```

---

## C. Choosing which of the two Google Ads accounts to keep, and how to migrate

**You cannot merge Google Ads accounts.** History (Quality Score context, conversion history, Smart Bidding learning) stays in the account it was earned in. Google Ads Editor can copy campaigns between accounts, but statistics do not transfer and portfolio strategies become manual CPC.

### Scorecard (score each account, pick the higher total; hard blockers first)

| Criterion | Why it matters | How to check | Weight |
|---|---|---|---|
| **Policy status: suspended, limited, or ongoing advertiser verification** | A suspended or unverified account cannot reliably launch in 5 days | Policy manager, account notifications, Advertiser verification status | **Hard blocker** |
| **Ownership and admin access** | The client (Évenox) must own it. An agency or ex-freelancer owning the payments profile blocks verification | Admin > Access and security. Billing > payments profile owner | **Hard blocker** |
| **Currency = CAD and time zone = America/Toronto** | Both are fixed at creation. Wrong values distort reports and offline-import timestamps | Admin > Account settings | High |
| **Billing set up and in good standing** (payment method, Québec business address, GST/QST info, no declined payments) | Avoids launch-day billing holds | Billing > Settings / Summary | High |
| **Advertiser verification already completed** | Saves up to 5 business days per review cycle. Name must match the documents | Advertiser verification page | High |
| **Valid conversion history** (real, deduplicated conversions in the last 90–540 days) | A head start for Smart Bidding, if the data was real | Goals > Conversions, segment by action. Check for duplicates and "Inactive" | Medium. Usually low here, since "main GA4 conversion never worked" |
| **Spend and click history on relevant Search keywords** | Some historical signal | Campaigns > all time | Medium |
| **Account age** | Older accounts with clean history tend to face fewer new-account restrictions | Account creation date (Change history / billing start) | Low–medium |
| **Links** (GA4, Merchant Center, Business Profile, YouTube) | Less re-linking work | Tools > Linked accounts | Low |
| **Which account's tag is on the site / in Booqable** | Not a deciding factor, since everything gets re-tagged on day 1 | Tag Assistant | Info |

**Decision rule:** drop any account with a hard blocker. Among the rest, prefer the account with CAD/Toronto + completed verification + good billing. Use conversion and spend history only as a tie-breaker, because the existing conversion data is unreliable anyway.

### Migration steps
1. Create, or use, a **manager account (MCC)** owned by Évenox (or by the freelancer, with Évenox keeping admin on the client account). Link both accounts so both stay visible.
2. In the **kept** account, rebuild the conversion actions exactly as in section B. Set all legacy actions to **Secondary**, or remove them.
3. **Copy campaigns** from the losing account with Google Ads Editor if they are worth keeping. Rename them, and re-check location targeting, bid strategies and assets.
4. **Losing account:** pause all campaigns. Remove its tags from the site and Booqable. Unlink it from GA4. Keep it **paused, not cancelled**, for at least 30–90 days, in case history or audits are needed and so final invoices settle. Cancel later if wanted (requires admin access + complete billing; reactivation stays possible).
5. **Do not use cross-account conversion tracking** (an MCC feature) as a shortcut. An account uses either account-specific or cross-account conversions, never both, and it only adds complexity for a single-account advertiser.
6. **GA4 property choice:** keep the property linked to the kept Ads account that has the most useful history. Remove the other property's tag, and archive or delete it once a quarter of data overlap exists for comparison. Turn on data retention = 14 months in the kept property.

---

## D. Offline conversion import in 2026 for a Notion-as-CRM business

**What changed in 2026:** Offline conversion import and ECL uploads moved to the **Data Manager / Data Manager API**. The legacy Google Ads API route was blocked after **2026-06-15** (for new adopters; full sunset later). Enhanced conversions became **one account-level switch**, and since April 2026 Google accepts tag, Data Manager and API data together. For a small advertiser this means: **use the Google Ads UI's Data Manager (Sheets or file upload) or a certified connector such as Zapier, and never build a custom API integration.**

### Prerequisites (all options)
- Auto-tagging on. GCLID/GBRAID/WBRAID captured in the form (B.6) and stored on the Notion lead page. Email and phone captured too (ECL works even without a GCLID).
- Notion database properties: `Date lead` (date + time), `GCLID`, `GBRAID`, `WBRAID`, `Email`, `Téléphone (E.164)`, `Statut` (Nouveau / Qualifié / Devis envoyé / Réservé / Perdu), `Date qualification`, `Date réservation`, `Valeur réservation (CAD)`, `Consentement mesure pub` (checkbox), `Envoyé à Google` (checkbox).
- Ads conversion actions: Goals > New > **Import > CRMs, files or other data sources > Track conversions from clicks**:
  - `EVX – Lead qualifié (import)`: category **Qualified lead**, count One, click window 90 d, **Secondary** for the first 4+ weeks.
  - `EVX – Réservation confirmée (import)`: category **Converted lead** (or Purchase), value = booking value, count One (one booking per lead), 90 d, **Secondary** at first.
  - Switch them to Primary (and the web lead to Secondary, or keep both Primary with values) after the longer of 3 conversion cycles or 4 weeks, as Google advises in its upgrade guide.
- Timing rules: upload more than 6 h after the click; wait 4–6 h after creating an action before the first upload; a GCLID is only importable within the click-through window (max 90 d). Use the **original milestone time with an explicit time zone** (`2026-10-07 14:30:00-04:00`).

### Options compared

| Option | How | Cost | Effort / reliability | Verdict |
|---|---|---|---|---|
| **1. Zapier: Notion → Google Ads "Send Offline Conversion"** | Trigger "Updated Properties in Data Source Item" on the Notion leads DB → Filter (`Statut` = Qualifié and `Envoyé à Google` unchecked) → Google Ads Send Offline Conversion (identifier source gclid, or email/phone; conversion action; timestamp = `Date qualification`; value/currency; consent fields) → Notion update `Envoyé à Google` = true. Duplicate the Zap for "Réservé". | Zapier paid plan (multi-step + filter) | About 1 h to build. Near-real-time. Works directly from Notion with no extra copy | **Simplest end-to-end for Notion.** Recommended. |
| **2. Notion → Google Sheet → Data Manager scheduled import** | Zapier/Make (or a weekly CSV export) writes qualified rows to a Sheet. Columns: Google Click ID, GBRAID, WBRAID, Email, Phone, Conversion Name, Conversion Time, Conversion Value, Conversion Currency, Order ID. In Ads, connect the Sheet in Data Manager, map fields, schedule **daily**. One Sheet (first tab) per conversion action. | Free in Ads (+ Zapier if automated) | About 2 h. Auditable (the Sheet is a log). Up to about a 24 h delay | **Best for auditability and cost.** Good choice if Zapier is not wanted for the Ads step. |
| **3. Manual file upload** (Data Manager / Uploads, weekly CSV) | Export from Notion, format, upload | Free | Manual, error-prone, weekly lag | Use as a stop-gap only, in weeks 1–3. |
| **4. Move the CRM to HubSpot** | Native Google Ads conversion events on lifecycle stage change (GCLID or hashed data), or the Data Manager HubSpot connector | **Marketing Hub Starter** minimum (about $20/seat/mo). The free CRM is not enough | Lowest maintenance afterwards, but a CRM migration | Only if Évenox wants a real CRM anyway. |
| **5. Pipedrive** | **No native Google Ads offline connector found.** Uses Zapier ("updated deal → offline conversion") or CDPs (CustomerLabs) | Pipedrive + Zapier | Same as option 1 plus a CRM migration | No advantage over Notion + Zapier. |
| **6. Booqable → Google Ads via Zapier** | Trigger "Completed Payment" / "Reserved Order" → Send Offline Conversion | Zapier | Booqable has no GCLID field, so match must be by email (ECL) | Use for bookings that start from a quote (staff creates the order) so they are still credited. Web checkouts are already covered by the tag. |

**Recommendation:** weeks 1–3, upload manually once a week (option 3) while the form collects GCLIDs. From week 3–4, use **option 1** (Zapier Notion → Ads) for `Lead qualifié` and `Réservation confirmée`, with a parallel Sheet log if auditability matters (which is option 2 without the Ads step). Make the imports Primary once each has about 30 conversions per 30 days, or after the 4-week window.

**Law 25 note for imports:** sending a lead's hashed email or phone to Google for ad measurement is a use beyond answering the quote. Base it on the form's consent wording or checkbox (Day 2). Send only rows where `Consentement mesure pub` is true, and fill the consent fields in the Zapier / Data Manager action.

---

## E. QA checklist (run on day 2, day 4 and day 5, then weekly)

**Inventory and duplicates**
- [ ] Tag Assistant on 5 page types shows exactly **one** GTM container, **one** AW- destination, **one** G- destination, and no OpenAI pixel (unless intentionally consent-gated).
- [ ] View-source and plugins contain no leftover hard-coded gtag, no Site Kit tag placement, and no second GA4.
- [ ] The losing Ads account's campaigns are paused and its tags are gone from the site and Booqable.

**Consent (Law 25)**
- [ ] First visit in incognito: the banner appears in French. "Tout refuser" and "Tout accepter" look the same. No `_ga`, `_gcl_au`, `_gcl_aw` or OpenAI (`oppref`) cookies exist before a choice (check DevTools > Application > Cookies).
- [ ] GTM Preview > Consent tab: on Consent Initialization all four Google signals are **Denied**. After "Accepter", the update shows **Granted**. After "Refuser", nothing advertising-related fires.
- [ ] Network: hits carry `gcs=G100` when denied and `G111` when granted, plus `gcd=…`. In basic mode no Google hits should leave before consent.
- [ ] "Gérer mes témoins" reopens the banner. Withdrawing consent stops tags on the next page.
- [ ] The privacy policy lists Google Ads, GA4, Booqable, call tracking and (if used) OpenAI, with purposes, and names the person responsible for privacy.

**Quote form**
- [ ] Visit `/?gclid=TEST123&gclsrc=aw.ds` → accept → localStorage has `evx_gclid`. Go to the quote page → the hidden `gclid` input = `TEST123`. The submitted email shows "GCLID: TEST123".
- [ ] A submission with a validation error does **not** redirect and does **not** fire the conversion.
- [ ] A valid submission redirects to `/merci-soumission/` → `Ads – Conv – Lead devis` fires once (reload the page and it must not count twice; count One also protects against this) → the request contains the label and `em=tv.1~em~…` (hashed email).
- [ ] The GA4 `generate_lead` event shows in DebugView and is marked as a key event.
- [ ] After 24–48 h: the conversion action status is "Recording conversions" / Active. The enhanced conversions diagnostics show user-provided data coverage above 0.

**Calls**
- [ ] Call reporting is on. The call asset is approved and shows a GFN in Ad Preview. A test call over 60 s from a real ad impression appears in the "Call details" report (and as a conversion if the 60 s threshold is met).
- [ ] (If built) The website GFN swap works after an ad click. The `gwcc` cookie is cleared between tests.
- [ ] `tel:` clicks fire the Secondary conversion only.

**Booqable**
- [ ] The custom subdomain resolves with HTTPS. All "Réserver" links point to it (or `_gl=` appears on links to booqableshop.com under Option 3).
- [ ] The banner appears on the shop pages too (or a Booqable consent behaviour has been confirmed).
- [ ] A test order fires **one** purchase conversion with the correct value, CAD currency and transaction ID. The Booqable app and the GTM purchase tag are not both active.
- [ ] GA4: the `purchase` session source stays google/cpc (not evenox.ca referral or stripe.com). Unwanted referrals are configured.

**Google Ads configuration**
- [ ] Auto-tagging on. Account currency CAD, time zone Toronto.
- [ ] Goals: Primary = Lead devis, Appel annonce, Achat Booqable (+ Appel site web). Everything else Secondary. No duplicate primary "Submit lead form" actions.
- [ ] Campaigns use account-default goals (or the intended custom goal).
- [ ] GA4 ↔ Ads link is active in the kept pair only.

**Offline imports (from week 3)**
- [ ] Test row with a real GCLID, more than 6 h old → upload/Zap → Data Manager / Uploads history shows "Successful". Check the rejected-rows reasons (time format, unknown GCLID, too old, missing consent).
- [ ] Notion `Envoyé à Google` flags prevent re-sends. Totals reconcile weekly (Notion qualified count vs Ads imported count).

**Weekly hygiene**
- [ ] Conversions diagnostics: no "No recent conversions" / "Tag inactive" warnings.
- [ ] Compare form submissions (inbox/Notion count) vs Ads + GA4 counts. Expect lower Ads numbers in basic mode because of refusals. Record the consent opt-in rate from the CMP dashboard to explain the gap.
- [ ] GTM container version notes are updated after every change.

---

## Caveats / open points to verify on the live site
- **Divi field selectors**: the `et_pb_contact_{id}_{n}` naming should be checked in DevTools on the live form before relying on the snippet.
- **Booqable plan**: the "Additional scripts" (GTM in checkout) option requires Grow/Scale. Check Évenox's plan on day 0.
- **Booqable apps and consent**: not documented. Test whether the Booqable GA4 and Ads apps fire before consent. If they do, switch to Option 2, or keep them off on the shop until confirmed.
- **Basic vs advanced consent mode under Law 25**: no CAI decision addresses Google's cookieless pings directly. Basic is the defensible default. Advanced needs written legal sign-off.
- **CMP choice**: CookieYes free = basic CMv2 only. That is enough, since basic is the recommendation. Complianz premium ($59/yr) includes consent mode and a Québec region, and is self-hosted. Cookiebot's free tier is capped at 50 subpages, which is likely too small with Booqable product pages.
