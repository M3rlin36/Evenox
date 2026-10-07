# Research 1: Google Ads new features and changes (Jan 2025 to Oct 2026)

Compiled 2026-10-07. Scope: official Google sources (blog.google, support.google.com, ads-developers blog, business.google.com / Think with Google) plus trade press (PPC Land, Search Engine Roundtable, Search Engine Journal, TechWyse, Relevant Audience, etc.).

Method notes:
- Items 1 to 63 were fetched and read in full (WebFetch). Items 64 to 71 were consumed only at search-result level (summaries and snippets), and are marked [snippet].
- Search Engine Land returned HTTP 403 for every fetch. Its stories were covered through secondary reports that cite it.
- Where trade-press reports conflict or say a change is "documentation only", it is flagged in the synthesis.

---

## (a) Sources consumed (71)

| # | Title | URL | Date | One-line takeaway |
|---|---|---|---|---|
| 1 | Google wraps up Performance Max feature rollouts in 2025 (PPC Land) | https://ppc.land/google-wraps-up-performance-max-feature-rollouts-in-2025/ | Aug 2025 | PMax 2025 timeline: brand guidelines (Jan), 10k negatives (Mar), channel and search-term reporting (Apr 30), campaign negative lists, demographic/device controls (Aug 7). |
| 2 | Google AI Max migration went live Sept 1 (Common Thread) | https://commonthreadco.com/blogs/coachs-corner/google-ai-max-migration-live-september-1-2026-ecommerce | Sep 2026 | Campaigns with ACA or campaign-level broad match were auto-converted to AI Max with no opt-out. DSA moves in Feb 2027. |
| 3 | See what we announced at GML 2026 (Google Ads Help) | https://support.google.com/google-ads/answer/17100114 | May 20, 2026 | Official hub page. Points to Accelerate with Google for the full list. |
| 4 | Key announcements from GML 2026 (Pink Dog Digital) | https://pinkdogdigital.com/key-announcements-google-marketing-live-2026/ | May 2026 | Covers AI Mode ads through PMax/AI Max, AI Max for Shopping, Demand Gen on Maps, Data Manager, and Ask Advisor. |
| 5 | What you need to know about GML 2026 (Herdl) | https://herdl.com/heres-what-you-need-to-know-about-google-marketing-live-2026/ | May 2026 | Pre-event EMEA preview with no product facts. Low value. |
| 6 | Google's new AI search ad formats (PPC Land) | https://ppc.land/googles-new-ai-search-ad-formats-reshape-how-brands-reach-buyers | May 2026 | Conversational Discovery ads and Highlighted Answers are in US tests. Business Agent for Leads is an open beta for US English accounts. |
| 7 | Google launches Ask Advisor, AI Mode formats, UCP (TechWyse) | https://www.techwyse.com/news/business/google-marketing-live-2026-ask-advisor-ai-mode-ads-ucp | May 2026 | Ask Advisor is a beta for English accounts globally. Direct Offers and UCP are US-first, with Canada "planned". |
| 8 | GML 2026: what changed (Level Agency) | https://www.level.agency/perspectives/google-marketing-live-2026-what-changed-and-what-to-do-about-it/ | May 2026 | New AI Mode formats run only in AI Max or PMax. Advises moving bidding from form fills to revenue events. |
| 9 | Ads in AI Mode and GML 2026 highlights (BrowserMedia) | https://browsermedia.agency/blog/ads-in-ai-mode-and-gml-2026-highlights/ | May 2026 | AI Mode tests are US and English only. Eligible campaigns: PMax, AI Max, Shopping, broad match. |
| 10 | Google's 42 GML 2026 lead-gen launches (PPC Land) | https://ppc.land/googles-42-gml-2026-lead-gen-launches-what-marketers-need-to-know/ | May/Jun 2026 | Full lead-gen list: Leads in Google Ads, lead intent scores, journey-aware bidding, unified enhanced conversions, demand-led pacing, AI Brief, text disclaimers, Data Manager connectors. |
| 11 | Lead Form assets $50K requirement dropped (Digital Applied) | https://www.digitalapplied.com/blog/google-ads-lead-form-assets-50k-requirement-dropped-2026 | Jul 20, 2026 | Help docs now say $1,000 spend plus Advertiser Verification, and add Zapier delivery. Documentation-only change, not announced by Google. |
| 12 | AI Max reporting and AI Brief expand to more countries (SER) | https://www.seroundtable.com/google-ads-ai-max-reporting-countries-42144.html | Sep 23, 2026 | Unified AI Max report announced. AI Brief now supports French and 6 other languages. |
| 13 | Google Ads expands AI campaign tools to more languages (SEJ) | https://www.searchenginejournal.com/google-ads-expands-ai-campaign-tools-to-more-languages/527311/ | Sep 18, 2024 (outside window) | Conversational campaign builder was coming to French. Background only. |
| 14 | About AI-qualified call leads (Google Ads Help) | https://support.google.com/google-ads/answer/16913326 | Apr 2026 | AI judges recorded calls for intent. Recording is on by default. Available only when both caller and receiver are in the US or Canada. |
| 15 | Google Ads call recording opt-in July 2026 playbook (Elevarus) | https://elevarus.com/google-ads-call-recording-opt-in-july-2026-playbook/ | Jun 2026 | Recording defaulted to On on July 1, 2026 for eligible US/CA accounts that had not chosen. Affects Google forwarding numbers only. |
| 16 | Google Ads forces some CPAs to double starting Aug 17 (PPC Land) | https://ppc.land/google-ads-forces-some-cpas-to-double-starting-august-17/ | Jul 2026 | Budget-limited tCPA/tROAS campaigns that beat their target will now bid toward the target. Bid Target Adjustment Tool arrived July 6. |
| 17 | Google blocks new offline conversion imports via Ads API (PPC Land) | https://ppc.land/google-blocks-new-offline-conversion-imports-via-ads-api-from-june-15/ | May 15, 2026 | From June 15, 2026, new API adopters must use the Data Manager API. UI uploads are not affected. |
| 18 | Ads Advisor and Analytics Advisor (blog.google) | https://blog.google/products/ads-commerce/ads-advisor-and-analytics-advisor/ | Nov 12, 2025 | Gemini agents for all English-language accounts from early Dec 2025. |
| 19 | Unqualified advertisers lose unlimited impressions by 2028 (PPC Land) | https://ppc.land/unqualified-advertisers-lose-unlimited-google-ads-impressions-by-2028/ | Aug 2026 | Limited Ad Serving now covers all Google Ads products. Account maturity and verification are factors, so new accounts are throttled. |
| 20 | LSA migration into Performance Max (Relevant Audience) | https://www.relevantaudience.com/google-ads-en/google-lsa-performance-max-migration/ | 2026 | LSA becomes a pay-per-lead PMax variant: US from Aug 2026, international in 2027. |
| 21 | Demand Gen Drop, August 2026 (blog.google) | https://blog.google/products/ads-commerce/demand-gen-drop-august-2026/ | Aug 2026 | Messaging from YouTube ads (test), travel personalization, and multimodal video creation (GA). |
| 22 | Updates to Smart Bidding strategy (Google Ads Developers Blog) | https://ads-developers.googleblog.com/2026/06/updates-to-smart-bidding-strategy.html | Jun 16, 2026 | "Maximize conversions with tCPA" is renamed "Target CPA". Labels change, bidding behaviour does not. |
| 23 | Updates to enhanced conversions settings (Google Ads Help) | https://support.google.com/google-ads/answer/16884284 | 2026 | April 2026: tag, Data Manager and API data accepted together. June 2026: web and leads EC merge into one toggle. |
| 24 | GML 2026 for Canadian marketers (Marketing News Canada) | https://marketingnewscanada.com/news/google-marketing-live-2026-everything-canadian-marketers-need-to-know | May 2026 | No Canada- or French-specific availability given. Itself evidence that Canada timing is unclear. |
| 25 | Google's latest AI updates for Canadian marketers (Marketing News Canada) | https://marketingnewscanada.com/news/googles-latest-ai-updates-what-canadian-marketers-and-advertisers-need-to-know | Feb 6, 2026 | AI Mode and AI Overviews (Gemini 3) are live in Canada. Commerce and agent tools are not confirmed there. |
| 26 | Ads in AI Overviews expand beyond the US (PPC News Feed) | https://ppcnewsfeed.com/ppc-news/ads-in-ai-overviews-expand-beyond-the-us-by-end-of-2025 | 2025 | Expansion to "select English-speaking markets" by end of 2025. |
| 27 | Google Ads come to AI Mode and AI Overviews desktop (SER) | https://www.seroundtable.com/google-ai-mode-ai-overviews-desktop-ads-39449.html | May 22, 2025 | AIO ads on US desktop, with English expansion naming Canada. Eligible campaigns: PMax, Shopping, broad-match Search, AI Max. No placement reporting. |
| 28 | Google Marketing Live 2025 (blog.google) | https://blog.google/products/ads-commerce/google-marketing-live-2025/ | May 21, 2025 | AIO ads on desktop, ads in AI Mode, Veo/Imagen creative, Smart Bidding Exploration, agentic tools. |
| 29 | AI Max for Search campaigns (blog.google) | https://blog.google/products/ads-commerce/google-ai-max-for-search-campaigns/ | May 6, 2025 | AI Max = search term matching + text customization + final URL expansion. Claims +14% conversions (+27% for exact/phrase-heavy campaigns). |
| 30 | AI Max keyword prioritization for exact match (SER) | https://seroundtable.com/google-ads-ai-max-keyword-prioritization-41988.html | Sep 1, 2026 | After migration, broad keywords lose exact-like priority. Add exact copies to keep it. |
| 31 | AI Max expands 29% of exact match impressions (Relevant Audience / smec) | https://www.relevantaudience.com/google-ads-en/ai-max-expands-29-percent-of-exact-match-impressions/ | 2026 | By July 2026, about 29% of "exact" impressions were AI-expanded (EMEA ecommerce data). AI Max conversions came in about 35% lower on ROAS. |
| 32 | Location asset requirements update (SER) | https://seroundtable.com/google-ads-location-asset-requirements-update-42046.html | Sep 9, 2026 | Clarifies policy without changing enforcement. Fix name formatting in GBP, then re-link. |
| 33 | Promotion mode and bidding overhaul (PPC Land) | https://ppc.land/google-ads-gets-promotion-mode-and-a-major-bidding-overhaul-this-august/ | Jun 2026 | Promotion mode beta for Search/PMax. Smart Bidding Exploration reaches PMax. Aug 17 target change. |
| 34 | Campaign total budgets (blog.google) | https://blog.google/products/ads-commerce/campaign-total-budgets/ | Jan 15, 2026 | Fixed budgets over a date range, open beta for Search, PMax and Shopping. |
| 35 | Google AI Mode tests text link ads (SER) | https://seroundtable.com/google-ai-mode-text-link-ads-42082.html | Sep 15, 2026 | "Sponsored" inline text-link ads being tested in AI Mode answers. |
| 36 | Exact and phrase match gain AI Mode ads in test (PPC Land) | https://ppc.land/exact-and-phrase-match-keywords-gain-ai-mode-ads-in-google-test/ | Sep 4, 2026 | Small experiment with no stated geography limit. Exact/phrase text ads can serve in AI Mode on "explicit intent" queries. |
| 37 | Google Ads deprecations 2026 and 2027 timeline (Relevant Audience) | https://www.relevantaudience.com/google-ads-en/google-ads-deprecations-2026-2027-timeline/ | 2026 | Language targeting removed (late Sep 2026), call-only ads stop (Feb 2027), data retention 37 months / 11 years (Jun 2026). |
| 38 | Mandatory AI Max migration dates (TechWyse) | https://www.techwyse.com/news/platform-updates/google-ads-ai-max-migration-timeline-search-campaigns | 2026 | Phase 1 ran Sep 1 to 30, 2026 (ACA/broad). Phase 2: DSA on Feb 1 to 28, 2027, with all three features on. |
| 39 | Google Ads gets a native Leads screen (PPC Land) | https://ppc.land/google-ads-gets-a-native-leads-screen-that-bypasses-the-crm-tab/ | Jun 1, 2026 | Leads tab under Conversions with raw/qualified/converted/lost stages. 60-day retention. Google-hosted forms only. |
| 40 | Journey-aware bidding (PPC Land) | https://ppc.land/google-unveils-journey-aware-bidding-to-optimize-full-customer-paths/ | Sep 2025 | Bidding learns from the whole lead-to-sale path. Needs full-funnel tracking. |
| 41 | Google Ads drops language targeting in September (PPC Land) | https://ppc.land/google-ads-drops-language-targeting-in-september-nine-months-past-deadline/ | Aug 14, 2026 | Campaign language setting removed from Search. Query language now prioritised. No ad translation. |
| 42 | Upgrade your call-only ads (Google Ads Developers Blog) | https://ads-developers.googleblog.com/2025/10/upgrade-your-call-only-ads-to.html | Oct 9, 2025 | No new call-only ads from Jan 2026. All stop serving Feb 2027. Use RSA plus call assets. |
| 43 | Digital marketing trends 2026 (Think with Google, ca-en) | https://business.google.com/ca-en/think/consumer-insights/digital-marketing-trends-2026/ | 2026 | Conversational search is changing discovery. Push "people-first" authoritative content. |
| 44 | What Google's language targeting change means (Karooya) | https://www.karooya.com/blog/what-does-googles-language-targeting-change-mean-for-advertisers/ | Aug 2026 | Multilingual advertisers feel this most. Watch search terms and add negatives. |
| 45 | Unlock more visibility and control in PMax (Google Ads Help) | https://support.google.com/google-ads/answer/16451273 | Aug 7, 2025 | Campaign negative lists, 50 search themes, device/age controls, URL-expansion asset reporting. |
| 46 | Demand Gen Drop, January 2026 (blog.google) | https://blog.google/products/ads-commerce/demand-gen-drop-january-2026/ | Jan 2026 | Shoppable CTV, Attributed Branded Searches, travel feeds. |
| 47 | Demand Gen Drop, June 2026 (blog.google) | https://blog.google/products/ads-commerce/demand-gen-drop-june-2026/ | Jun 2026 | Aspect-ratio transforms, Gemini creative insights, web-to-app measurement. |
| 48 | Google Ads MCP server (Google for Developers) | https://developers.google.com/google-ads/api/docs/developer-toolkit/mcp-server | updated Sep 30, 2026 | Official read-only MCP bridge so AI agents can query Google Ads data. |
| 49 | Ask Advisor (blog.google) | https://blog.google/products/ads-commerce/ask-advisor/ | May 20, 2026 | Cross-product agent for Ads, GA and Merchant Center. Beta, English only, full launch later in 2026. |
| 50 | Local Customer Optimization and Store Sales in Data Manager (SER) | https://seroundtable.com/google-ads-local-customer-optimization-store-sales-42045.html | Sep 9, 2026 | Toggle in PMax for store-goals campaigns (Maps, Waze, local Search). Store sales via CRM or Sheets in Data Manager. |
| 51 | Google Consent Mode update June 2026 (Xictron) | https://www.xictron.com/en/blog/google-consent-mode-update-june-2026-shops/ | 2026 | From June 15, 2026, ad_storage alone controls GA advertising cookies (Google Signals fallback removed). |
| 52 | Google introduces tag gateway (PPC Land) | https://ppc.land/google-introduces-tag-gateway-to-improve-ad-tracking-accuracy/ | May 2025 | First-party tag serving, GA May 8, 2025. Claims +11% signals. Cloudflare one-click setup. |
| 53 | Text guidelines beta goes global (PPC Land) | https://ppc.land/googles-text-guidelines-beta-goes-global-for-ai-max-and-performance-max/ | Feb 26, 2026 | 25 term exclusions and 40 messaging rules per campaign, in all languages. |
| 54 | Demand Gen Drop, September 2026 (blog.google) | https://blog.google/products/ads-commerce/demand-gen-drop-september-2026/ | Sep 2026 | Business Agent for YouTube (sign-up), one-click Shorts/Gmail ads, affiliate location pins on Maps. |
| 55 | AI Max unified reporting and September migration (Digital Applied) | https://www.digitalapplied.com/blog/google-ai-max-unified-reporting-september-migration | Sep 23, 2026 | Unified report coming later in 2026. AI Brief is guidance, not a hard exclusion. |
| 56 | Customer Match uploads move to Data Manager API by Apr 1 (PPC Land) | https://ppc.land/google-forces-customer-match-uploads-to-data-manager-api-by-april-1/ | 2026 | Ads API Customer Match uploads stopped April 1, 2026. |
| 57 | Google Maps in Demand Gen (Accelerate with Google) | https://business.google.com/us/accelerate/announcements/google-maps-in-demand-gen/ | 2026 | Promoted Pins in Browse, Directions and Place Details. Can opt in or out. |
| 58 | Call recording becomes default for AI lead calls (SEJ) | https://searchenginejournal.com/google-ads-makes-call-recording-default-for-ai-lead-calls/572613/ | Apr 21, 2026 | US and Canada only. Auto disclosure to callers. Location-asset calls not supported. |
| 59 | Phone verification extended to message assets (PPC Land) | https://ppc.land/google-extends-phone-verification-to-message-assets/ | Jul 1, 2025 | Numbers must be verified by Aug 1 (new) and Sep 1, 2025 (existing). |
| 60 | AI Mode shows ads on 1 in 3 commercial keywords (SEJ via theatdb) | https://www.theatdb.com/news/google-ai-mode-shows-ads-on-1-in-3-commercial-keywords-via-sejournal-mattgsouthern | Jul 21, 2026 | Third-party study found ads on about a third of commercial AI Mode queries. |
| 61 | Journey-aware bidding and budget pacing (SEJ) | https://searchenginejournal.com/google-ads-introduces-journey-aware-bidding-and-new-budget-pacing-updates/574141/ | May 2026 | JAB beta for Search tCPA. Demand-led budget pacing. Exploration expands. |
| 62 | Google delays DSA migration (TechWyse) | https://www.techwyse.com/news/platform-updates/google-dsa-automigration-delayed-ai-max-february-2027 | Jun 11, 2026 | DSA creation restored Jun 15, 2026, disabled again Jan 2027, forced migration Feb 2027. |
| 63 | AI-qualified call leads and call recording default (TechWyse) | https://www.techwyse.com/news/platform-updates/google-ads-ai-qualified-call-leads-call-recording-default | Apr 22, 2026 | AI call summaries (#HighIntent). Advertiser must confirm all parties are notified. |
| 64 | [snippet] Smart Bidding Exploration (blog.google + Help 16294686) | https://blog.google/products/ads-commerce/smart-bidding-exploration-ai/ | 2025 | ROAS tolerance of 5 to 30%. +18% converting query categories, +19% conversions. |
| 65 | [snippet] Google tag gateway (Help 16214371) | https://support.google.com/google-ads/answer/16214371 | 2025/2026 | Akamai and Fastly integrations added May 14, 2026. |
| 66 | [snippet] Enhanced conversions for leads with Data Manager (Help 15707550) | https://support.google.com/google-ads/answer/15707550 | 2025 | Google recommends EC for leads via Data Manager over legacy offline import. |
| 67 | [snippet] Quebec Law 25 cookie consent guide (FlexyConsent) | https://flexyconsent.com/blog/quebec-law-25-cookie-consent-guide/ | 2026 | Law 25 effectively requires opt-in before non-essential trackers. Advanced Consent Mode v2 recommended. |
| 68 | [snippet] AI-generated store rating reviews label (SER) | https://www.seroundtable.com/google-ads-ai-generated-store-rating-reviews-41983.html | Sep 1, 2026 | "What customers love" AI review summaries appear in ads, labelled as AI-generated. |
| 69 | [snippet] Customer Match policy update (SEJ) | https://www.searchenginejournal.com/google-is-updating-its-customer-match-policy/532420 | Jan 2025 | Stricter enforcement from Jan 13, 2025, with 7-day warning before suspension. 540-day list cap from Apr 7, 2025. |
| 70 | [snippet] Google AI Mode rolls out in Canada (MobileSyrup) | https://mobilesyrup.com/2025/08/21/google-ai-mode-canada/ | Aug 21, 2025 | AI Mode launched in Canada in English first. |
| 71 | [snippet] Advertiser verification false-info policy (Search Engine Land via search) | https://searchengineland.com/google-clarifies-policy-on-false-information-in-advertiser-verification-464395 | Nov 2025 | False information in verification counts as Circumventing Systems and leads to suspension. |

---

## (b) Synthesis: the 18 most important changes for a premium event-rental lead-gen business in Quebec

The business is assumed to be a small premium event-rental company in Quebec. It runs Search, possibly PMax, and calls and forms are its main conversions. It serves a FR/EN market on a limited budget.

### 1. Campaign-level language targeting removed from Search (late Sept 2026)
- **What it is.** The campaign language setting no longer applies to Search or AI Max campaigns. For PMax it no longer applies on Search inventory but still applies on YouTube, Display and Gmail. Google now picks the ad from the query language, the ad and landing-page language, and the user's languages. Google does not translate ads.
- **Date.** Announced Aug 14, 2026 by Ginny Marvin. Removal began in late September 2026.
- **Why it matters.** This is the most directly relevant change for a bilingual Quebec account. You can no longer split FR and EN campaigns by the language setting.
  - Separation now depends on fully French ad copy pointing to French landing pages, and fully English copy pointing to English pages.
  - Use separate keyword sets per language, and cross-language negatives where useful.
  - Watch search terms for FR queries matched to EN ads, and the reverse, for several weeks after the change.
  - Keep separate FR and EN budgets if you want control over the language mix.

### 2. Automatic AI Max upgrade of Search campaigns (Sept 1 to 30, 2026)
- **What it is.**
  - Campaigns that used automatically created assets were converted to AI Max with search term matching and text customization on.
  - Campaigns that used the campaign-level broad match setting were converted with search term matching on.
  - There was no opt-out. You can only change settings afterwards.
  - DSA campaigns follow on Feb 1 to 28, 2027, with all three AI Max features on.
- **Date.** Announced Aug 5, 2026. Executed in September 2026.
- **Why it matters.** Check the account now.
  - Was it converted? Is text customization now writing headlines? Is final URL expansion sending traffic to blog or careers pages?
  - Add brand exclusions, URL exclusions and locations of interest (Quebec regions).
  - SER (Sep 1, 2026): after migration, broad keywords lose their exact-match priority. Add exact-match copies of your key keywords, such as "location de tente mariage" and "event rental Montreal".
  - smec data shows about 29% of "exact" impressions being expanded by AI Max, with roughly 35% lower ROAS on those conversions. On a small budget, review search terms weekly.

### 3. AI-qualified call leads, with call recording on by default (Apr to Jul 2026)
- **What it is.**
  - Google AI listens to calls made through Google forwarding numbers. Only calls with real intent count as conversions; before, any call over a duration threshold counted.
  - Spam and misdials are filtered out, and call summaries carry tags such as #HighIntent.
  - Recording became the default on July 1, 2026 for eligible accounts that had not chosen.
  - Available only when both caller and receiver are in the US or Canada. Location-asset calls are excluded.
- **Date.** Help doc published Apr 17, 2026. Default switched on July 1, 2026.
- **Why it matters.** Event rentals depend heavily on phone calls, and Canada is one of only two eligible countries.
  - This should improve the quality of the signal Smart Bidding learns from.
  - Expect reported call conversions to drop at first while bidding relearns.
  - **Legal.** Callers hear an automated "recorded for quality" disclosure. Confirm that this satisfies Quebec privacy obligations (Law 25 transparency). The disclosure language is not confirmed: **check whether a French disclosure is played to FR callers.**
  - **Uncertain.** Not confirmed whether the AI qualification works on French-language calls. Test it and audit call summaries.

### 4. Call-only ads end (no creation from Jan 2026; stop serving Feb 2027)
- **What it is.** The call-only ad format is deprecated. Phone leads should come from RSAs plus call assets.
- **Date.** Announced Oct 9, 2025. No new call-only ads from Jan 2026. All stop serving in Feb 2027.
- **Why it matters.** Replace any call-only ad groups with RSAs that have call assets before February 2027, and keep tracking calls through Google forwarding numbers so the AI call qualification in item 3 still works.

### 5. Lead form assets easier to get, plus a native Leads screen (Jun to Jul 2026)
- **What it is.**
  - Help docs now list $1,000 lifetime spend plus Advertiser Verification. The old requirement was $50,000.
  - Zapier added as a delivery method. Supported campaign types narrowed to Search and PMax.
  - New Leads tab under Conversions (Jun 1, 2026) with raw, qualified, converted and lost stages. Data kept only 60 days.
  - GML 2026 also announced lead intent scores and lead journey mapping.
- **Date.** Leads screen Jun 1, 2026. Doc change spotted Jul 20, 2026.
- **Why it matters.**
  - A small advertiser can now realistically use lead forms on the search results page and pipe them to a CRM with Zapier.
  - Marking leads qualified or converted feeds better signals back to Google.
  - **Uncertain.** The eligibility change appeared in documentation only and has not been announced. Check the account. Leads are deleted after 60 days, so export them.

### 6. Enhanced conversions unified, and Data Manager replaces legacy uploads (Apr to Jun 2026)
- **What it is.**
  - From April 2026, Google accepts user-provided data from the tag, Data Manager and the API at the same time.
  - In June 2026, enhanced conversions for web and for leads merged into a single on/off setting.
  - From June 15, 2026, new API integrations for offline conversion import and EC-for-leads must use the Data Manager API. Customer Match API uploads already moved on Apr 1, 2026.
  - Data Manager gained connectors for Mailchimp, Klaviyo, ActiveCampaign, Google Drive, Zapier and Stape.
- **Date.** April, June 1 and June 15, 2026.
- **Why it matters.** This is the most cost-effective measurement upgrade for a lead-gen business.
  - Turn on enhanced conversions.
  - Upload which leads became booked rentals, with revenue, through Data Manager (Google Sheets, CRM or Zapier).
  - Smart Bidding can then optimise for booked events instead of raw form fills.
  - UI and Data Manager uploads are not affected by the API block.

### 7. Smart Bidding changes: label split and the Aug 17, 2026 target change
- **What it is.**
  - In June 2026, "Maximize conversions with tCPA" was relabelled "Target CPA". Behaviour did not change.
  - From Aug 17, 2026, budget-limited tCPA and tROAS campaigns that were beating their targets now bid toward the target, so CPA can rise to the target.
  - A Bid Target Adjustment Tool became available on July 6, 2026.
- **Date.** June 2026 and Aug 17, 2026.
- **Why it matters.** Small accounts are usually budget-limited.
  - If your tCPA was set loosely (for example $80 while you actually got $40), CPA may have risen since mid-August.
  - Reset tCPA to the true CPA you want, or use Maximize conversions without a target.

### 8. Campaign total budgets and promotion mode (Jan to Jun 2026)
- **What it is.**
  - Campaign total budgets: a fixed spend over 3 to 90 days. Open beta for Search, PMax and Shopping since Jan 15, 2026.
  - Promotion mode (beta, June 2026): schedule extra budget and tolerance for peak periods.
  - Demand-led budget pacing (GML 2026): shifts spend toward high-demand days within the monthly cap.
- **Why it matters.** Event rental is very seasonal, with wedding season (May to Oct), holiday parties (Nov to Dec) and the corporate-event calendar.
  - Total budgets let you put a fixed amount behind a peak window without daily micromanagement.
  - Watch pacing early in the window.

### 9. Smart Bidding Exploration (2025, expanded 2026)
- **What it is.** Lets bidding go after unproven queries within a ROAS tolerance of 5 to 30%. Google claims +19% conversions. Expanded to PMax without a feed (globally, all languages) in 2026.
- **Why it matters.** It is primarily a tROAS feature, so it is only relevant once you import conversion values for booked revenue (item 6). Low priority on a limited budget.

### 10. Ads in AI Overviews and AI Mode
- **What it is.**
  - Ads in AI Overviews: US mobile, then US desktop (May 2025). Expansion to English markets including Canada was announced for end of 2025.
  - Ads in AI Mode: US tests, with new GML 2026 formats (Conversational Discovery, Highlighted Answers).
  - Eligibility: PMax, AI Max, Shopping, and broad-match Search with Smart Bidding.
  - Sept 2026: small test lets exact and phrase text ads serve in AI Mode, plus inline text-link ads.
  - No AI-placement-specific reporting.
- **Date.** May 2025 to Sept 2026.
- **Why it matters.** AI Mode is live in Canada (English since Aug 2025).
  - **Uncertain.** We could not confirm whether ads in AI Overviews or AI Mode serve in Canada today, or in French.
  - These placements matter most for long, consultative queries such as "best tent rental for 150-guest wedding in Laval".
  - If you stay on exact/phrase only, you are mostly excluded. AI Max or broad match is the entry ticket.

### 11. Business Agent for Leads (GML 2026, US beta)
- **What it is.** A Gemini chat agent inside the Search ad, trained on your website. It answers questions such as availability, capacity and pricing range, then captures the lead.
- **Availability.** Open beta for US English accounts. Beta in India later. No Canada or French timeline announced.
- **Why it matters.** It suits high-consideration rentals, so watch for a Canadian launch. When it arrives, make sure the website clearly states service areas, inventory, minimums and delivery fees, because the agent answers from site content.

### 12. Performance Max transparency and controls (2025)
- **What it is.**
  - Campaign-level negative keywords and shared lists (up to 5,000 per list).
  - Full search-terms report and channel performance report (Apr 30, 2025).
  - 50 search themes per asset group. Device and age controls (Aug 7, 2025).
  - Brand guidelines required for new PMax campaigns.
- **Why it matters.** If PMax is used for lead gen, you can now:
  - exclude junk such as "free", "jobs", "used tent for sale" and "DIY";
  - see where spend goes (Search vs YouTube vs Display);
  - turn off devices or ages that don't convert.
  
  For a small budget, Search usually outperforms PMax for lead gen. Run PMax only with offline conversion feedback.

### 13. Local Services Ads move into Google Ads/PMax (US Aug 2026; international 2027)
- **What it is.** The standalone LSA dashboard is being retired. LSA becomes a pay-per-lead PMax variant, with manual and industry tCPA bidding removed.
- **Why it matters.** **Uncertain.** LSA categories in Canada are mostly home services, and event rental is unlikely to be eligible. Low direct impact, but a Canadian migration is expected in 2027.

### 14. Limited Ad Serving extended to all products, plus stricter advertiser verification (Aug 2026 to 2028)
- **What it is.**
  - Accounts Google sees as "unqualified" have their impressions throttled. Factors include account maturity, verification, complaints and branding.
  - Extended from Search to all Google Ads products from August 2026, phased to 2028.
  - False information in verification leads to suspension (Nov 2025).
- **Why it matters.** A new or small account may see limited delivery at first. Recommended steps:
  - Complete Advertiser Verification with exact legal and business details. A NEQ-registered name helps.
  - Put the brand or domain in headline position 1.
  - Avoid generic copy.
  - Do not open new accounts to restart; account age is itself a factor.

### 15. AI creative controls in French: text guidelines, AI Brief, text disclaimers (Feb to Sept 2026)
- **What it is.**
  - Text guidelines (global beta Feb 26, 2026, all languages): up to 25 term exclusions and 40 natural-language rules for AI-generated text.
  - AI Brief (US English May 2026): plain-language steering of AI Max. Extended to French at DMEXCO, Sept 23, 2026, with availability "later in 2026".
  - Text disclaimers (GML 2026).
- **Why it matters.** A premium brand needs to stop AI copy saying "cheap" or "discount", inventing promotions, or mixing languages.
  - Set term exclusions such as "pas cher", "cheap", "rabais" and "gratuit".
  - Add rules such as "Always write in Quebec French for French ads", "Never mention price discounts" and "Emphasize premium, curated décor".
  - Term exclusions are language-specific, so add both FR and EN versions.

### 16. Consent and first-party measurement: Law 25, Consent Mode v2, tag gateway
- **What it is.**
  - Consent Mode v2 is mandatory for EEA/UK traffic. Quebec Law 25 effectively requires opt-in before non-essential trackers.
  - From June 15, 2026, ad_storage alone controls GA advertising cookies; Google Signals no longer works as a fallback.
  - Google tag gateway (GA May 2025) serves tags from your own domain. Claims +11% signals. One-click on Cloudflare, with Akamai and Fastly added May 2026.
- **Why it matters.**
  - **Note.** Google's own Consent Mode mandate is EEA/UK/CH, not Canada. Law 25 is what drives the obligation in Quebec.
  - Use a Law 25-compliant CMP in Consent Mode v2 advanced mode, so modeled conversions recover some of the data lost to refusals.
  - Add enhanced conversions and the tag gateway (if the site is on Cloudflare).
  - Expect remarketing audiences to be smaller than before June 2026.

### 17. AI agents in the account: Ads Advisor, Ask Advisor, and the Ads API MCP server
- **What it is.**
  - Ads Advisor and Analytics Advisor: Gemini agents in all English-language accounts from Dec 2025.
  - Ask Advisor (GML 2026): cross-product agent, beta, English only.
  - Official read-only Google Ads MCP server for querying account data with AI agents.
- **Why it matters.**
  - These help a solo operator diagnose problems, fix policy issues and draft assets.
  - **Note.** They depend on the account's interface language. Keep the account UI in English to get access, even if the ads are in French.
  - The MCP server allows safe read-only reporting through an AI assistant.

### 18. Journey-aware bidding and qualified-lead optimization (beta, 2025 to 2026)
- **What it is.** Search tCPA campaigns learn from all funnel stages (lead, then qualified, then booked) instead of only the form fill. Announced Sept 2025, beta for lead gen from May 2026, GA stated at GML 2026 (PPC Land). **Status conflicts between sources.**
- **Why it matters.** It rewards the same groundwork as item 6.
  - Define conversion actions for lead, qualified quote and booked event.
  - Import the later stages from your CRM or a Sheet.
  - Even before the feature reaches you, this setup improves bidding.

### Honourable mentions (lower priority)
- **Demand Gen on Google Maps** (Promoted Pins, GML 2026): awareness-oriented, and a showroom location could use it. Not a priority on a limited budget.
- **Location assets.** Business names must be correctly formatted in GBP; fix the name there, then re-link (Sept 2026 doc update).
- **Message assets.** Phone numbers must be verified (from Aug/Sep 2025).
- **Data retention (June 2026).** Daily data is kept 37 months, so export history for long-term seasonality analysis.
- **AI review summaries in ads.** "What customers love" summaries are drawn from reviews (Sept 2026). Collecting Google reviews now affects ads as well as SEO.

### Key uncertainties to flag
1. Whether ads in AI Overviews and AI Mode actually serve in Canada and in French as of Oct 2026. Announced for English-speaking markets including Canada; no confirmation found.
2. Whether AI-qualified call evaluation and the recording disclosure support French.
3. Whether the lead form eligibility change ($1,000 plus verification) is a real product change or only a documentation edit.
4. Journey-aware bidding: beta or GA. Sources conflict.
5. Timing of AI Brief in French ("later in 2026") and Business Agent for Leads in Canada (none announced).
6. Search Engine Land could not be fetched (403), so its coverage was read only through secondary sources.
