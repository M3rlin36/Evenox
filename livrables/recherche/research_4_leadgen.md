# Research 4: Google Ads Local Lead Gen and Lead Quality for a Premium Turnkey Event-Rental Company (Quebec)

Compiled 2026-10-07. I opened and read every source listed below with WebFetch. Search-result snippets I did not open are not counted.
Pages that failed to load (403/404/DNS/empty) are left out of the count and listed at the end.

---

## (a) Sources accessed (65)

### Lead quality and form filtering
1. **Why Your Google Ads Leads Are Low-Quality and How to Filter Out the Spam**, Pinpoint Digital. https://www.pinpointdigital.com/?p=6811 (undated, approx. 2025-26). Treat targeting, intent (DIY, jobs, retail) and bot spam as three separate problems. Add 1-2 intent fields (budget, service, location) to forms.
2. **Google Ads invalid leads: three form checks**, Relevant Audience. https://www.relevantaudience.com/google-ads-en/google-ads-invalid-leads-three-form-checks/ (2026-09-21). Google says its IVT filters don't stop fake leads. It recommends reCAPTCHA, double opt-in and server-side validation, and counting only qualified leads as conversions.
3. **3 Ways To Improve Lead Quality in Google Ads**, JumpFly. https://www.jumpfly.com/blog/3-ways-to-improve-lead-quality-in-google-ads/ (2025-10-30). Connect the CRM. Use DNI call tracking with a 60-120 s minimum. Remove easily spammed conversions (clicks, page views, unfiltered lead forms) from bidding.
4. **How to Filter for Quality Leads Only: Our Exact Funnel**, Grow My Ads. https://growmyads.com/our-exact-sales-funnel/ (2024-12-11). Qualifying questions with automatic disqualification. Only qualified leads are sent back as conversions. Month 1 starts broad (80% junk), then tighten over months 4-6.
5. **Best practices for generating high-quality leads**, Google Ads Help. https://support.google.com/google-ads/answer/13489421 (current). Map the lead journey. Primary goal = qualified lead or booked appointment, with 15+ conversions in 30 days. Use enhanced conversions, VBB when lead values differ, reCAPTCHA or double opt-in.
6. **Lead quality in Google Ads**, NAV43. https://nav43.com/blog/lead-quality-google-ads/ (2026-06-10). CPL bidding tells Google to find the cheapest form-fillers. Value per lead = deal size x margin x close rate. An SQL is worth about 5x an MQL.
7. **Use lead forms in campaigns**, Google Ads Help. https://support.google.com/google-ads/answer/16726829 (current). Lead form "More qualified" mode adds steps, which means fewer leads but higher intent. Requires RSAs and one form per campaign.
8. **Google drops $50k spend requirement for Lead Form assets**, SEO-Day. https://www.seo-day.de/news/article/google-drops-50k-ad-spend-requirement-for-lead-form-assets?lang=en (2026-07-21). Lead form assets now only need good account standing plus Advertiser Verification. OTP verification is available, and Zapier and email delivery were added.
9. **How Multi-Step Forms Improve Lead Quality**, Reform. https://www.reform.app/blog/how-multi-step-forms-improve-lead-quality (approx. 2024-25). Multi-step forms with progress bars and conditional logic improve completion and data accuracy and filter out less committed prospects. Easy questions go first.
10. **Google Ads for Lead Generation: 2026 Operator's Guide**, Elevarus. https://elevarus.com/google-ads-lead-generation/ (2026-07-06). Start with Search on phrase/exact match and add PMax only after tracking and qualification are solid. Verification stack: reCAPTCHA, OTP, negatives. 2026 average CPL is $66.69.

### Offline conversions, enhanced conversions for leads, Data Manager
11. **Offline Conversion Tracking in 2025: Complete Setup Guide**, Elevarus. https://elevarus.com/complete-guide-to-offline-conversion-tracking/ (2024-04, updated 2025). Capture GCLID/GBRAID/WBRAID in hidden fields, store them in the CRM, upload a stage milestone within 24-48 h (90-day window), and run ECL in parallel.
12. **How to upgrade offline imports**, Google Ads Help. https://support.google.com/google-ads/answer/15479791 (current). Turn on ECL in Goals > Settings and upload through Data Manager with GCLID + email/phone. Swap the new action to Primary after 3 cycles or 4 weeks.
13. **Configure the Google tag for enhanced conversions for leads**, Google Ads Help. https://support.google.com/google-ads/answer/11021502 (current). Set up automatic form detection, create an offline conversion action with the "Qualified/Converted lead" goal, and accept the customer data terms.
14. **Upgrade offline conversion import to ECL**, Google Ads Help. https://support.google.com/google-ads/answer/14274408 (current). Requires the Google tag on every page and email, phone or address. Keep sending GCLIDs. Wait 1-2 cycles, then swap Primary and Secondary.
15. **About offline conversion imports**, Google Ads Help. https://support.google.com/google-ads/answer/2998031 (current). Save the GCLID with each lead and return it when the offline conversion happens. Google now recommends ECL instead.
16. **Google blocks new offline conversion imports via Ads API from June 15**, PPC Land. https://ppc.land/google-blocks-new-offline-conversion-imports-via-ads-api-from-june-15/ (2026). New OCI/ECL uploads through the Ads API are blocked. The Data Manager API (launched 2025-12-09) replaces it.
17. **Google kills 3 enhanced conversion methods, replaces with single toggle**, PPC Land. https://ppc.land/google-kills-3-enhanced-conversion-methods-replaces-all-with-single-toggle/ (2026). EC for web and EC for leads merge into one toggle (June 2026). Tag, Data Manager and API data are accepted at the same time from April 2026.
18. **Google Ads API will shut out new OCI adopters in June**, TechWyse News. https://www.techwyse.com/news/platform-updates/google-ads-api-offline-conversion-import-cutoff (2026-05-20). Check which pipeline your imports run through. Broken imports silently degrade bidding.
19. **Google Ads Conversion Tracking Setup 2026**, Enrich Labs. https://www.enrichlabs.ai/blog/google-ads-conversion-tracking-setup-2026 (2026). Only revenue or SQL-type conversions should be primary. Fire each conversion from one path only (tag or GA4). Count leads as "One".
20. **Primary & Secondary Conversions on Google Ads**, One PPC Agency. https://oneppcagency.co.uk/google-ads/primary-secondary-conversions-on-google-ads/ (2024-08). Start with valid forms and meaningful calls as primary, import CRM stages as secondary first, then promote them once volume is adequate.

### Value-based bidding
21. **Value-Based Bidding for Lead Generation: Complete 2026 Guide**, Elevarus. https://elevarus.com/value-based-bidding-lead-generation-2026/ (2026-06-07). Tiered stage values. Needs 2+ distinct values, 4 weeks or 3 cycles of data, and 15+ conversions in 30 days for tROAS (30-50 recommended).
22. **Bidding on Offline CRM Stages Instead of Unqualified B2B Leads**, Revvim. https://www.revvim.com/2026/04/01/bidding-on-offline-crm-stages-instead-of-unqualified-b2b-leads/ (2026-04-01). Map stages to values, keep match rate above 80%, and move from Max Conv to Max Value to tROAS in phases to avoid a spend collapse.
23. **How to Use Value-Based Bidding for Success**, Portent. https://portent.com/blog/ppc/how-to-use-value-based-bidding-for-success-with-google-ads.htm (2022-02-09; older). Relative values are enough. Aim for 30 conversions a month (50 for tROAS). Value rules can adjust by device or audience.
24. **Assigning Conversion Values to Make VBB Work for Lead Gen**, Search Engine Journal. https://searchenginejournal.com/assigning-conversion-values-to-make-value-based-bidding-work-for-lead-gen/526349 (2024-09-11). Proxy values only need to reflect relative importance. Give higher values to leads with larger budgets or higher scores.
25. **Conversion Value in Google Ads: Set It, Rule It, Bid on It**, Webtonic. https://www.webtonic.io/blog/conversion-value-google-ads (2026-08-06, updated 2026-10-04). Lead value = deal size x close rate. Max 3 value rules per action. Max Value needs 15+ conversions in 30 days and the efficiency-goal version needs 30+. Change targets by no more than 10% every two weeks.
26. **Google targets hidden conversions with new bidding & budgeting tools**, PPC Land. https://ppc.land/google-targets-hidden-conversions-with-new-bidding-and-budgeting-tools/ (2026-05-07). Journey-aware bidding (beta) for lead-gen Search learns from secondary signals such as calls and forms. Demand-led pacing is coming.

### Call tracking
27. **About phone call conversion tracking**, Google Ads Help. https://support.google.com/google-ads/answer/6100664 (current). Five call conversion types, with a minimum call-length threshold for calls from ads and calls to the website.
28. **About AI-qualified call leads**, Google Ads Help. https://support.google.com/google-ads/answer/16913326 (current). AI classifies recorded calls and falls back to duration when there is no recording. Recording is available in the US and Canada and is on by default.
29. **The Complete Guide to Phone Call Conversion Tracking**, Yael Consulting. https://www.yaelconsulting.com/the-complete-guide-to-phone-call-conversion-tracking/ (2026-04). Use GFN + DNI, a 60 s minimum, third-party recording, and compare clicks to connected calls.

### Location, schedule, seasonality, bidding settings
30. **About advanced location options**, Google Ads Help. https://support.google.com/google-ads/answer/1722038 (current). "Presence or interest" is the default. "Presence" restricts to people in or regularly in the area. Exclusions use Presence.
31. **Understanding & optimizing Google location targeting settings**, Adalysis. https://adalysis.com/blog/understanding-optimizing-google-location-targeting-settings/ (approx. 2024-25). Local service businesses should use Presence. Audit CPA by region and exclude regions that don't convert.
32. **Radius targeting without paying for nearby areas**, Ivitskiy. https://ivitskiy.com/blog/?p=6215 (2026-09-08). Draw the radius around the real operating point (minimum 1 km), use Presence, and exclude districts you don't serve inside the radius.
33. **Google adds location targeting controls to Demand Gen**, SEOteric. https://www.seoteric.com/google-adds-location-targeting-controls-to-demand-gen-campaigns-what-advertisers-should-do/ (2025-12). Demand Gen now has a Presence-only option that fixes "geo-leakage". Test for 2-4 weeks.
34. **Ad Scheduling and Dayparting for B2B: Is It Worth It?**, GrowthSpree. https://www.growthspreeofficial.com/blogs/dayparting-b2b (2026-08-02). Smart Bidding already prices time of day. Use a schedule only for call assets or sales availability, or a very small budget.
35. **About seasonality adjustments**, Google Ads Help. https://support.google.com/google-ads/answer/10369906 (current). Use only for 1-7 day events (not over 14 days) with a major expected change in conversion rate. Don't use them for normal seasons.
36. **Google Ads Seasonal Keyword Guide**, BrightBid. https://brightbid.com/?p=19019 (2025-08-14). Launch seasonal pushes 4-6 weeks before peak demand, then raise budgets and bids at peak.

### Negative keywords
37. **The Ultimate Negative Keyword List: 400 Keywords**, Fraud Blocker. https://fraudblocker.com/articles/the-ultimate-negative-keyword-list-400-keywords-to-use-today (2026-09-30). Categories: deals, jobs, DIY, research and AI tools, used, education, informational, media, sites (craigslist, kijiji-type). Warning: the list includes "rent/rental", which must not be added for a rental company.
38. **Mots-clés négatifs Google Ads**, Lionel Z. https://lionelz.com/fr/blog/mots-cles-negatifs-google-ads/ (2026-04). French universal list (gratuit, emploi, occasion, faire soi-même, tutoriel, modèle...) plus informational intent terms (comment, définition, comparatif).
39. **Optimiser vos coûts publicitaires Google**, HubSpot FR. https://blog.hubspot.fr/marketing/optimiser-couts-publicitaires-google (updated 2024-08-15). Mine the search terms report by cost and exclude terms that spend without converting. "avis" and "comparatif" are candidate exclusions.

### Event, party, tent and wedding rental verticals
40. **Google Ads case study: The Party Centre (tent & party rentals, GTA)**, seoplus+. https://seoplus.com/case-studies/google-ads-leads-party-rentals/ (approx. 2023-24). Canadian tent and party renter with new Search + Display campaigns, tent prioritization and peak-season maximization. Results: conversions +417%, CPA -82% year over year.
41. **Google Ads for Rental Businesses**, TapGoods. https://www.tapgoods.com/pro/blog/marketing-strategies/google-ads-for-rental-businesses/ (approx. 2024). Long-tail Search ("outdoor wedding tent rental [city]"). High-end renters should add "cheap" as a negative. Launch at the start of the season.
42. **Google Ads Partner (party rental PPC)**, Event Rental Systems. https://eventrentalsystems.com/google-ad-partner/ (approx. 2025-26). Geo-target delivery zones, use booking-intent keywords, and tie conversion tracking to bookings.
43. **Google Business Profile for Party Rentals**, Event Rental Systems. https://eventrentalsystems.com/get-more-party-rental-bookings-with-a-google-business-profile/ (2026-03-05). Primary category "Party equipment rental service", with secondary categories "Tent rental service" etc. List inventory as Products, use real photos and review links, post weekly, and use UTM + call tracking.
44. **Local Marketing for Party Rental Companies**, Event Rental Systems. https://eventrentalsystems.com/local-marketing-for-party-rental-companies-how-to-get-found-and-booked/ (2026-07-31). GBP, directories, Facebook groups, and preferred-vendor lists with venues, schools and churches.
45. **SEO for Rental Businesses: Complete Local Guide**, Booqable. https://booqable.com/blog/local-seo-guide/ (2026-02-24). GBP is where customers discover you and the website is where they convert. Category pages are the main SEO asset. Target "[category] + city" keywords.
46. **Promotion Ideas for Party & Event Rental Services**, Opensend. https://www.opensend.com/post/promotion-ideas-party-event-rental-services (2026-08-07). Google Ads at $150-750/month for small renters, plus vendor partnerships and loyalty programs. Repeat customers spend more.
47. **Tent Rental Google Ads**, Clicks Geek. https://clicksgeek.com/industries/tent-rental/ (approx. 2025-26). Google Ads CPL is $30-130 for tent rental and wedding packages run $3.5k-25k+. Weddings plan 6-12 months out. Dedicated landing pages per service cut CPL by 30-50%.
48. **Google Ads for Bounce House Rental**, Clicks Geek. https://clicksgeek.com/google-ads-for-bounce-house-rental/ (approx. 2025-26). Split high-intent from research campaigns. Review search terms and negatives weekly. Peak is May-Oct; cut spend Dec-Feb and scale peak budgets 50-80%.
49. **Event Rental Advertising**, Always Do Better. https://alwaysdobetterllc.com/event-rental-advertising/ (approx. 2025-26). Track cost per booked event. Spend hard in peak season and pull back off-season. Clicks cost $2-6 on $2k+ orders. Fix response speed and reviews before spending on ads.
50. **From Search to Booking: Google Ads for Events and Weddings**, Delante. https://delante.co/?p=152363 (approx. 2025). Separate brand (exact match) from prospecting. Search + PMax + Display. Calls and email inquiries are the KPIs. Wedding venue case: contact conversions +391%.
51. **GPLANN Event Rentals enters Canadian market**, InTents Magazine. https://intentsmag.com/2026/05/05/gplann-event-rentals-enters-canadian-market/ (2026-05-05). Shows a competitor trend: turnkey "tents + setup + planning" offers with online booking are expanding in Canada.

### Local Services Ads and Canada
52. **Google Local Services Ads**, Whitespark. https://whitespark.ca/blog/google-local-service-ads/ (updated 2024-10-28). LSA runs in the US and Canada **excluding Quebec**. "Event planning" is only a US limited/test category.
53. **Google Local Services Ads (Canada)**, Local Propeller. https://localpropeller.ca/our-expertise/google-local-services-ads/ (approx. 2024-25). Canada LSA covers 16 home-service categories only, with no event or party rental category.
54. **How to Set Up Local Service Ads in Canada**, TechWyse. https://www.techwyse.com/blog/pay-per-click-marketing/how-to-setup-local-service-ads-in-canada (2019; old). Background on the Canadian LSA rollout, which has only home-service categories.
55. **Local Services Ads availability**, Google LSA Help. https://support.google.com/localservices/answer/6224841 (current). The country list includes Canada. The category list has no event or party rental category.

### Quebec / Bill 96 / language
56. **Bill 96 and its impact on French language requirements**, Smart & Biggar. https://www.smartbiggar.ca/insights/publication/bill-96-and-its-impact-on-the-french-language-requirements-in-québec (2024-25). Commercial publications and websites must be in French, or French plus another language with at least equal prominence. Trademark exception covers registered marks only (from 2025-06-01).
57. **Québec's French requirements for commerce & business**, Mondaq. https://www.mondaq.com/canada/trademark/1626508/quebecs-french-language-requirements-for-commerce-and-business-reform-of-the-charter-of-the-french-language (2025). Websites and social posts aimed at Quebec need French equivalence, including T&Cs and privacy policy. Fines are $3k-30k per offence for businesses, doubling and tripling for repeats, and each day counts.
58. **Doing business in French in Québec**, Argo Translation. https://www.argotranslation.com/blog/business-in-french-quebec (2024-02-13). French is the default language for consumer communications. Use native Québécois translators, not machine translation.
59. **Google is removing language targeting from Search campaigns**, Search Engine Journal. https://www.searchenginejournal.com/google-is-removing-language-targeting-from-search-campaigns/585592/ (rollout late Sept 2026). Search and PMax Search inventory will choose language from ad creative, landing page and user signals. Separate FR and EN campaigns can stay, but ad and landing page language must be clean.

### Pricing display, landing pages, trust
60. **Should You Show Pricing? 24 Marketing Leaders**, CLCK. https://www.clck.com.au/should-you-show-pricing-marketing-leaders/ (approx. 2025). Pricing helps wrong-fit buyers opt out. Use ranges with named cost drivers for variable-scope services.
61. **Pricing section design for fixed-fee services**, Pravin Kumar. https://www.pravinkumar.co/blog/webflow-fixed-fee-pricing-section-design-2026 (2026-07-16). "A pricing section is a filter, not a contract." Show a "starting from" price, 2-3 packages and a "Request a proposal" CTA.
62. **High-Ticket Conversion Architect**, Wavect. https://wavect.io/skills/high-ticket-conversion-architect/ (2026). Add constructive friction and a "who this is NOT for" block. Use specific proof that only a real operator would know.
63. **Landing Page Design Trust Signals**, SaaS Hero. https://www.saashero.net/design/landing-page-design-trust-signals/ (2026-08-23). Put trust signals where hesitation peaks: logos within 100 px of the CTA, ratings with counts above the CTA, a guarantee under the CTA.
64. **10 Landing Page Best Practices for 2026**, EntreResource. https://entreresource.com/landing-page-best-practices/ (2026-06-17). Value proposition in 5 seconds, one primary CTA, mobile first, only genuine urgency, segmented pages by audience.
65. **Landing Page Design Best Practices**, UFO Rocks. https://www.uforocks.com/blog/landing-page-design-best-practices/ (2026-01-08). Load in under 3 s, trust signals near decision points, progressive profiling, continuous A/B testing.

**Failed or not counted:** eventrentalsystems ?p=2702 (404); fasken.com Bill 96 (403); emarketer language targeting (403); adviso.ca (404); sterlingsky LSA list (empty); clixmarketing (empty); weglot (DNS); motionpoint (DNS); smartbiggar commercial publications (404); weddingwire.ca (directory only, no data).

---

## (b) Playbook for a premium turnkey event-rental company in Quebec

### 0. Key facts that shape the plan
- **Local Services Ads are not an option.** LSA in Canada excludes Quebec and has no event or party rental category (sources 52, 53, 55). Rely on Search plus GBP.
- **Language targeting is gone from Search (late Sept 2026).** Google now infers language from the ad, the landing page and the user (59). Keep **separate FR and EN campaigns**, each with 100% French or 100% English ads, keywords and landing pages. Don't mix languages in one ad group.
- **Bill 96.** Any Quebec-facing ad, landing page, form, confirmation email, quote and T&Cs must exist in French, at least as prominent and as good as the English version. Default the site to FR and keep English optional (56, 57). Non-French brand names are allowed only as registered trademarks, with a French descriptor next to them. Fines are $3k-30k per offence per day (57). Use native Québécois copy (58).
- **Use the Data Manager pipeline.** Offline and ECL uploads through the legacy Ads API are being shut down (new adopters blocked from 2026-06-15, everyone after March 2027). Build on Data Manager, a native CRM connector, or Zapier (16-18).

### 1. Campaign structure
| Campaign | Language | Match | Notes |
|---|---|---|---|
| Brand FR / Brand EN | FR / EN | Exact | Protects the brand (50). Low budget. |
| Mariages / Weddings (tent + turnkey) | FR / EN | Phrase + Exact | Highest value. Couples plan 6-18 months out (47). |
| Corporatif / Corporate events | FR / EN | Phrase + Exact | "location équipement événement corporatif", "corporate event rentals Montreal". Year-round, with a holiday-party peak in Sept-Nov. |
| Chapiteaux / Tent rental | FR / EN | Phrase + Exact | "location chapiteau", "location tente réception", "tent rental [city]". |
| (Later) PMax or Demand Gen remarketing | Both | n/a | Only after 30+ qualified conversions a month and clean OCI/ECL (10). Brand exclusions apply. |

- **Location:** **Presence** (not the default "Presence or interest") (30-33), set on the real delivery zone (a radius from the warehouse plus specific regions, e.g. Greater Montreal, Laval, Rive-Nord/Sud, Laurentides, Québec City if served). Exclude areas you don't serve. Review CPA by region every quarter (31).
  - Optional exception: a separate small EN "destination wedding in Quebec" campaign on Presence or interest targeting Ontario and the US, if you want out-of-province couples.
- **Ad schedule:** run forms 24/7. Schedule **call assets** only during staffed hours (34). With Smart Bidding, don't add dayparting bid modifiers.
- **Seasonality (Quebec):** wedding peak is June-Sept/Oct, corporate peaks Sept-Dec, and planning happens 6-18 months ahead. Inquiry demand therefore peaks **Jan-Apr** (for summer weddings) and **Aug-Oct** (for corporate holiday events). Raise budgets 4-6 weeks before those inquiry peaks (36). Cut budgets in the event-execution weeks only if inquiries fall. Reserve seasonality adjustments for 1-7 day spikes such as wedding-show weekends (35).

### 2. Negative keyword lists (phrase match, shared lists, applied to all non-brand campaigns)
Don't add "rent/rental/location" (37 lists them and that would block the business). Review search terms weekly in month 1, then every two weeks (48).

**List A: Jobs / Emplois**
EN: job, jobs, career, careers, hiring, hire staff, employment, salary, resume, internship, summer job, part time, indeed, "event staff wanted", recruiter
FR: emploi, emplois, offre d'emploi, carrière, embauche, on embauche, salaire, CV, stage, job d'été, temps partiel, travail, jobboom, recrutement

**List B: Price-shoppers / Chasseurs d'aubaines**
EN: cheap, cheapest, cheap price, budget, bargain, discount, coupon, promo code, deal, deals, groupon, free, freebie, low cost, affordable*, under $100, wholesale
FR: pas cher, pas chère, moins cher, le moins cher, bon marché, aubaine, rabais, solde, soldes, code promo, coupon, gratuit, gratuite, gratis, à bas prix, économique*, prix de gros, liquidation
(*"affordable" and "économique": test first. For a premium brand, exclude them once data confirms poor lead quality.)

**List C: Buying, used, for sale / Achat et usagé**
EN: for sale, buy, purchase, used, second hand, pre-owned, clearance, auction, marketplace, kijiji, craigslist, facebook marketplace, ebay, amazon, walmart, costco, canadian tire, home depot, ikea, wholesale tents, manufacturer, supplier
FR: à vendre, acheter, achat, usagé, usagée, usagés, d'occasion, occasion, seconde main, encan, enchères, kijiji, marketplace, lespac, amazon, walmart, costco, canadian tire, rona, réno-dépôt, ikea, fabricant, fournisseur, grossiste

**List D: DIY / Fait maison**
EN: diy, do it yourself, how to make, how to build, homemade, make your own, ideas, inspiration, pinterest, template, printable, instructions, how to set up, how to put up a tent
FR: diy, faire soi-même, soi-même, moi-même, fait maison, comment faire, comment monter, bricolage, idées, idée déco, inspiration, pinterest, modèle, tutoriel, gabarit, instructions, à imprimer

**List E: Informational and education**
EN: what is, definition, meaning, history, wikipedia, course, class, training, certification, school, college, pdf, video, youtube, reddit, forum, chatgpt
FR: c'est quoi, qu'est-ce que, définition, signification, wikipedia, cours, formation, certification, école, cégep, université, pdf, vidéo, youtube, forum, chatgpt

**List F: Off-offer products and segments (adjust to inventory)**
bounce house, jumpy, château gonflable, jeux gonflables, structure gonflable*, costume, déguisement, tuxedo, location habit, robe de mariée, wedding dress, limo, limousine, voiture, car rental, location auto, camion, truck, u-haul, uhaul, outil, tool rental, équipement de construction, construction, échafaudage, scaffolding, toilettes chimiques*, porta potty*, camping, tente de camping, camping tent, tente roulotte, salle à louer*, venue for rent* (*only if not offered)

**List G: Low-value event types (optional, test first)**
kids party, birthday party kids, fête d'enfant, anniversaire enfant, baby shower*, gender reveal*, backyard bbq. Apply these only if the minimum order is above about $3-5k and data confirms they don't close.

### 3. Lead-qualification form (multi-step, FR-default, EN toggle) (4, 9, 1)
Step 1 (easy, builds commitment):
1. Type d'événement / Event type: Mariage · Corporatif · Gala/Lancement · Festival/Public · Privé (50+ invités) · Autre
2. Date de l'événement / Event date (date picker; flag dates under 21 days)
3. Ville ou lieu / City or venue (autocomplete; outside the delivery zone means soft disqualify plus a polite message)

Step 2 (scope):
4. Nombre d'invités / Guest count: <50 · 50-100 · 100-200 · 200-400 · 400+
5. Services souhaités / Services wanted (multi-select): Chapiteau · Mobilier · Vaisselle/Linge · Éclairage/Son · Décor · Installation clé en main · Coordination
6. Lieu intérieur ou extérieur / Indoor or outdoor; type of surface (gazon, asphalte, terrasse)

Step 3 (qualification, price anchoring):
7. **Budget prévu pour la location / Planned rental budget** with a "starting at" anchor shown just above it ("Nos forfaits clé en main débutent à X $"): <X $ (soft disqualify) · X-2X · 2X-4X · 4X+ · Je ne sais pas encore / Not sure yet
8. Votre rôle / Your role: Couple · Planificateur(trice) · Entreprise/RH · Lieu/Venue · Agence
9. Échéancier de décision / Decision timeline: Cette semaine · Ce mois-ci · 1-3 mois · Je magasine / Just browsing

Step 4 (contact; this is where the lead is created):
10. Prénom, Nom, Courriel, Téléphone (validated; optional SMS OTP), Entreprise (if corporate)
11. Langue de communication préférée (FR/EN), required for Bill 96-safe follow-up
12. Hidden fields: gclid, gbraid, wbraid, utm_*, landing page, campaign language

Anti-spam: reCAPTCHA v3, server-side validation, honeypot field, block disposable email domains, and optionally a double opt-in confirmation before the lead counts as "verified" (2, 5).
Lead scoring, applied automatically: budget band + guest count + date lead time + in-zone + role yields tiers A, B, C or D. Only A/B/C go back to Google as qualified.

### 4. Conversion tracking with lead stages
Use one conversion per stage, Count = One, click-through window 90 days. Turn on enhanced conversions (the unified toggle) and send GCLID plus hashed email and phone through Data Manager or a native CRM connector (HubSpot, Pipedrive, Zapier), uploaded daily (11-19).

| Stage (CRM) | Conversion action | Source | Phase 1 status | Phase 2-3 status | Proxy value* |
|---|---|---|---|---|---|
| Form submit (raw) | Lead – Form submit | Tag | **Primary** (bootstrap only) | Secondary | 0 or $25 |
| Call ≥ 90 s (AI-qualified or duration) | Lead – Qualified call | GFN/DNI | Primary | Secondary (or Primary at low value) | $50 |
| Click-to-call, email click, brochure | Micro | Tag | Secondary | Secondary | n/a |
| Qualified lead (score A/B/C, in zone, budget ≥ min) | Qualified lead | Offline/ECL | Secondary (observe) | **Primary** | AOV x close rate (e.g. $8,000 x 25% = $2,000; scale down x 0.1 if you prefer smaller numbers) |
| Site visit / proposal sent | Proposal sent | Offline/ECL | Secondary | **Primary** | ~2x qualified |
| Deposit paid / contract signed | Booked (won) | Offline/ECL | Secondary | **Primary**, with the actual contract value | Actual $ |
| Lost / disqualified | n/a (keep in CRM) | n/a | n/a | n/a | Don't upload |

*Values must reflect relative importance; exact dollars aren't required (24). Formula: deal size x close rate x margin (6, 25). Keep at most 3 value rules, for example x1.3 in the core service area and x1.5 when the lead form says "Corporatif" (25). Watch the match rate and keep it above 80% (22). Check Offline Data Diagnostics weekly.

GBP: primary category "Party equipment rental service", secondary "Tent rental service" and "Event planner" if applicable, with inventory added as Products. Use UTM links on the website button and a tracked number (43).

### 5. Bidding progression and thresholds
| Phase | Trigger to enter | Bid strategy | Primary conversions | Exit criterion |
|---|---|---|---|---|
| 0. Launch (weeks 0-4) | New account or campaign | Manual CPC with eCPC-like caps, or Maximize Clicks with a CPC cap ($4-8) | Form submit + qualified call | 15+ conversions/30 d **and** search terms cleaned |
| 1. Volume learning | ≥15 primary conversions/30 d | Maximize Conversions (no target), then tCPA set at 1.1-1.2x the actual CPA after 2-3 weeks | Form + qualified call | OCI/ECL qualified-lead import live with ≥4 weeks or 3 cycles of data |
| 2. Quality switch | ≥15-30 **qualified** leads/30 d imported, match rate >80% | Maximize Conversions on **Qualified lead** (swap Primary/Secondary) | Qualified lead (+ proposal) | 4 weeks stable, 2+ distinct values flowing |
| 3. Value-based | ≥15 valued conversions/30 d (ideally 30-50), ≥4 weeks of value data | **Maximize Conversion Value** (no target) | Qualified lead + Proposal + Booked (values) | 30+ valued conversions/30 d, stable ROAS for 4 weeks |
| 4. Efficiency | ≥30 valued conversions/30 d | Max Conv. Value **with tROAS** set at about 90% of trailing 30-day ROAS; change it by ≤10% every two weeks | Same | n/a |

Sources: 5, 10, 21-25. If a campaign can't reach the threshold on its own, pool conversions with a **portfolio strategy** or merge the FR and EN campaigns of the same service under one shared budget and strategy. Volume pooling matters more than structure. In the off-season, don't change targets. Lower the budget instead, so the learned model is preserved.

### 6. Landing page checklist (premium / high-ticket, FR and EN pages, one per service)
- [ ] Separate dedicated pages per service and language (Mariages / Weddings, Corporatif / Corporate, Chapiteaux / Tents). Don't send ad traffic to the homepage, since dedicated pages cut CPL 30-50% (47).
- [ ] FR page served first for Quebec, with the EN version equal in quality. All text, forms, confirmation emails, T&Cs and privacy policy available in French (56, 57).
- [ ] Above the fold within 5 s: an outcome headline ("Votre événement clé en main, du chapiteau au dernier couvert"), a photo of a real installation, one CTA ("Demander une proposition / Request a proposal") (61, 64).
- [ ] **Price anchor:** "Forfaits clé en main à partir de X $" plus 2-3 package tiers, with the cost drivers named (guests, tent size, surface, distance, services) (60, 61).
- [ ] A "Pour qui / Ce n'est pas pour vous si…" block, e.g. budget under X $ or DIY pickup only, to repel wrong-fit leads (62).
- [ ] Specific proof: named venues and clients, number of events per year, tent capacity, RBQ/insurance/engineering certifications, before/after photos, Google rating with review count placed above the CTA (63).
- [ ] Trust near the form: "Réponse en moins de 2 h ouvrables", a named coordinator photo, insurance, a weather plan (62, 63, 49).
- [ ] Multi-step qualification form (section 3) with a progress bar. Click-to-call only during staffed hours.
- [ ] Mobile first, load in under 3 s (compress gallery images, lazy load), Core Web Vitals green (65).
- [ ] Hidden GCLID/GBRAID/WBRAID/UTM capture, ECL form detection, reCAPTCHA v3 plus server validation (2, 11).
- [ ] Thank-you page in the visitor's language that sets expectations (next step, timeline) and links a portfolio or lookbook PDF. It must not fire the "qualified" conversion.
- [ ] Message match: ad headline = H1 = keyword theme, in the same language. This matters even more now that Google infers language from the page (59).
- [ ] Speed to lead: call or email A/B leads within 1 business hour. Advertising only amplifies response speed and reviews that already exist (49).
