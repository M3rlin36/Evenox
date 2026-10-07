# Research 6 — Google Ads Account Architecture for Evenox ($300/day CAD)

_Prepared 2026-10-07. Every source below was actually opened (WebFetch) during this research; pages that returned 403/404/429/empty were NOT counted. Total sources: 129._


## (a) Sources consulted (numbered)

Format: **Title** — Creator — URL — Date — Takeaway

1. **Performance Max best practices for lead generation** — Google Ads Help — https://support.google.com/google-ads/answer/13775965 — 2025 — Use lead-gen goals (Submit lead form/Qualified lead) for invalid-lead protections; value bidding needs >=15 conv/30d; allow 1-2 wks (up to 6) learning; reCAPTCHA + server-side validation; brand exclusions.
2. **Optimize Google Ads with AI Max for Search campaigns** — Google Ads Help — https://support.google.com/google-ads/answer/15909989 — 2025 — AI Max = search term matching + text customization + final URL expansion; defaults on; needs conversion-based Smart Bidding; URL/brand inclusions/exclusions at campaign/ad-group level.
3. **When to Switch from Maximize Conversions to Target CPA** — Austin LeClear, GrowMyAds — https://growmyads.com/switch-from-maximize-conversions-to-target-cpa/ — 2026-03-16 — 30 conv/30d minimum (50+ smoother); set first tCPA 5-10% ABOVE current CPA; stair-step down; observe >=1 week.
4. **Google Ads learning phase: how long it lasts** — groas — https://www.groas.com/post/google-ads-learning-phase-how-long-it-la — 2026-07-24 (upd 2026-10-01) — Search 7-14d, PMax 2-4 wks; ~30 conv/bid strategy/30d exits learning; >~20% budget move can reset learning; negatives/ad edits don't.
5. **About Final URL expansion in Search** — Google Ads Help — https://support.google.com/google-ads/answer/16230205 — 2025 — FUE overrides pinned RSA assets; use URL exclusions/inclusions; turn off when strict landing-page control needed.
6. **Google Ads AI Max: what changed** — Kyle Gammon, Connective Web Design — https://connectivewebdesign.com/blog/google-ads-ai-max-what-changed — 2026-06-22 — Sept 2026 auto-migration of DSA/broad to AI Max; independent tests median CPA +16%; one case 69% of impressions competitor brand terms; set kill-switch thresholds.
7. **PMax Lead Gen Checklist Setup** — Peter Palarchio, NAV43 — https://nav43.com/blog/pmax-lead-gen-checklist-setup/ — 2026-05-08 — PMax 5% qualified rate vs 25% Search in B2B case; value ladder Form=1/MQL=10/SQL=50/Won=100; budget 80/20 Search/PMax wk1-4 then 70/30.
8. **How to Run Google Ads With No Conversion History** — Stackmatix — https://www.stackmatix.com/blog/google-ads-no-conversion-history-startups — 2025 — Bidding ladder: Manual/Max Clicks at 0 -> Max Conv at 15-30/30d -> tCPA 30+ -> tROAS 50+; review search terms every 48h month 1.
9. **Google Ads for Wedding Venues 2026** — Indigo Digital — https://indigodigital.com/insights/google-ads-for-wedding-venues-2026 — 2026 — Long-tail intent keywords + dedicated landing pages + fast enquiry response; handful of tight campaigns.
10. **Google Ads Account Structure** — Stewart Dunlop, PPC.io — https://ppc.io/blog/google-ads-account-structure — 2024-05-08 — Prioritise best sellers on small budgets; split ~20% discovery/70% mid-funnel/10% brand.
11. **Brand Ads and Branded Keywords: Worth It?** — Loves Data (Benjamin Mangold) — https://www.lovesdata.com/blog/brand-ads-and-branded-keywords-worth-it/ — upd 2025-02-02 — Google pause research: ~50% of paid clicks incremental even at organic #1; brand ads add call extensions, block competitor conquesting.
12. **How to Scale Google Ads Campaigns in 2025** — Austin LeClear, GrowMyAds — https://growmyads.com/how-to-scale-google-ads-in-2025/ — 2025-07-11 — Raise budgets max 20% at a time, wait 1-2 weeks; strict for $100+/day campaigns.
13. **Why Your Google Ads CPA Increases When You Raise Budget** — Austin LeClear, GrowMyAds — https://growmyads.com/why-cpa-increases-when-you-raise-budget/ — 2025-02-20 — Extra budget buys lower-intent auctions; expect temporary CPA rise 1-2 weeks after each raise.
14. **Customer Match policy** — Google Ads Help — https://support.google.com/google-ads/answer/6299717 — 2025 — Observation/exclusion for all compliant accounts; Targeting needs 90+ days & >$50k USD lifetime spend; list needs 100 members refreshed <540 days.
15. **Google Ads Performance Max Updates in 2025** — GrowMyAds — https://growmyads.com/performance-max-updates-2025/ — 2025-03-14 — PMax campaign-level negatives (100, later expanded), URL contains rules, demographic/device exclusions, search theme insights.
16. **Scale Google Ads Without a CPA Spike** — Alex Thilén, Opascope — https://opascope.com/insights/scale-google-ads-without-cpa-spike/ — 2026-06-23 — 10-20% every 7-14 days; CPA spikes >3-4 weeks = structural problem; enhanced conversions ~10-20% CPA improvement.
17. **Google to enforce $5 minimum daily budget on Demand Gen campaigns from April** — Luis Rijo, PPC Land — https://ppc.land/google-to-enforce-5-minimum-daily-budget-on-demand-gen-campaigns-from-april/ — 2026-02-27 — DG minimum $5/day from Apr 1 2026 to survive cold start (floor, not recommendation).
18. **Google clarifies value-based bidding requirements for Demand Gen** — PPC Land — https://ppc.land/google-clarifies-value-based-bidding-requirements-for-demand-gen-campaigns/ — 2025-06-28 — DG value bidding needs 50 valued conv/35d (10 in last week); no changes first 14 days; evaluate after >=3 weeks.
19. **Case study: Google Ads leads for party rentals (The Party Centre, GTA)** — seoplus+ — https://seoplus.com/case-studies/google-ads-leads-party-rentals/ — n.d. — Canadian tent/party rental: Search+Display rebuild -> +417% conversions, -82% CPA YoY; peak-season focus on hero product (tents).
20. **From Search to Booking: Optimizing Google Ads for Events and Weddings** — Delante — https://delante.co/?p=152363 — 2025 — Wedding venue: separate exact-match brand campaign from prospecting; Search+Display+PMax; optimise to calls/email; +391% contact conversions.
21. **Mobile Bar Hire case study** — Cluo (agency site; low-credibility template) — https://cluo.lovable.app/case-studies/mobile-bar-hire — n.d. — Corporate-specific keywords + per-event landing pages; claims $18 CPL, corporate share 20%->68%; Q4 Christmas focus. Treat as anecdotal.
22. **Kids Events Planner Ads Case Study** — ROI Minds — https://roiminds.com/kids-events-planner-ads-case-study/ — 2025 — Local events business: 414 leads in 90 days at $29.47 CPL with high-intent Search; judge on CPL not ROAS.
23. **Demand Gen Implementation Guide (PDF)** — Google — https://services.google.com/fh/files/blogs/external_demandgen_implementation_guide.pdf — 2024-2025 — DG: daily budget >=15x tCPA and >=$100/day recommended; lookalikes; no major changes in learning.
24. **Google Ads Partner for rental companies** — Event Rental Systems — https://eventrentalsystems.com/google-ad-partner/ — 2025 — Geo-target delivery zones only; track cost per lead/booking; plan off-season marketing.
25. **What I learned from running Google Ads (private party bookings)** — Pat Light (Substack) — https://patlight.substack.com/p/what-i-learned-from-running-google — 2025-07-28 — Bar private-event bookings: broad match wasted spend; exact match won.
26. **Event Rental Advertising** — Always Do Better — https://alwaysdobetterllc.com/event-rental-advertising/ — 2025 — Referrals & GBP rank above Ads for rental firms; event rental CPC $2-6; judge by cost per booked event; spend in peak, pause off-season.
27. **Google Ads Campaign Structure** — Factors.ai — https://www.factors.ai/guides/google-ads-101/google-ads-campaign-structure — 2025 — One campaign = one objective; 5-15 keywords/ad group; full assets ~15% higher CTR.
28. **Performance Max vs Search for B2B lead gen: when Search-only wins** — groas — https://www.groas.com/post/performance-max-vs-search-campaigns-b2b-lead-gen-search-only-wins — 2026-06-22 — PMax needs 30 conv/30d minimum, reliable at 50+; single-metro local services at $3-8k/mo do better Search-only; PMax cannibalises Search IS.
29. **Performance Max for Lead Generation: Advanced Strategies and Pitfalls** — Ameet Khabra, Search Engine Journal — https://www.searchenginejournal.com/performance-max-lead-generation-advanced-strategies-and-pitfalls/525632/ — 2024-09-16 — OCT/CRM import essential; run PMax alongside high-intent Search; upload first-party lists; exclude gaming/kids placements.
30. **About advanced location options** — Google Ads Help — https://support.google.com/google-ads/answer/1722038 — 2025 — Presence or Interest default (+5% conv in travel/RE/edu); Presence for those excluding out-of-area interest.
31. **Ad Scheduling and Dayparting for B2B: Is It Worth It?** — GrowthSpree — https://www.growthspreeofficial.com/blogs/dayparting-b2b — 2025-2026 — Smart Bidding already prices time; avoid business-hours-only; daypart only on tiny budgets or proven patterns; fix follow-up instead.
32. **Performance Max for B2B SaaS: Why It Fails, When It Works** — GrowthSpree — https://www.growthspreeofficial.com/blogs/performance-max-b2b-saas-does-it-work-setup-guide-2026 — 2026 — Without CRM data PMax MQL->SQL 3-5% vs 18-25% Search; prerequisites OCI, 100+ Customer Match, brand exclusions; PMax 20-30% of budget; 4-6 wks to optimise.
33. **Google Search + Performance Max: the smarter way to generate qualified local leads** — Yeah! Local — https://yeah-local.com/blog/google-ads-search-performance-max-the-smarter-way-to-generate-qualified-local-leads/ — 2025-2026 — Start Search first; bounded PMax test only once tracking & lead quality signals reliable; don't starve Search baseline.
34. **Google Ads Geo-Targeting: Presence vs Presence-or-Interest in 2026** — GrowthSpree — https://www.growthspreeofficial.com/blogs/google-ads-geo-targeting-presence-vs-interest-b2b-saas-2026 — 2026-05-15 — Default Presence-or-Interest wastes 20-35% of lead-gen budget; switch to Presence for 99% of lead-gen campaigns.
35. **Google adds location targeting controls to Demand Gen** — Seoteric — https://www.seoteric.com/google-adds-location-targeting-controls-to-demand-gen-campaigns-what-advertisers-should-do/ — 2025-12 — DG now has Presence-only option; use it for local/event businesses.
36. **Performance Max Pros and Cons** — Brandon Tome, Fraud Blocker — https://fraudblocker.com/articles/performance-max-pros-and-cons — 2026-09-30 — PMax can't set channel budgets; invalid clicks/spam leads train bidding badly; use enhanced conv for leads, reCAPTCHA, OCI.
37. **Performance Max in 2026 (Complete Guide)** — Unilink — https://www.unilink.us/blog/performance-max-google-ads-2026 — 2026-05-03 — PMax for lead gen best at 50+ conv/month; below $50-100/day AI struggles.
38. **Performance Max alternatives for lead gen: four-architecture stack** — Elevarus — https://elevarus.com/performance-max-alternatives-lead-gen-four-architecture-stack/ — 2026 — Diagnostic: qualified rate drop >=8 pts post-PMax = PMax culprit; migrate to AI Max Search in 25-30% budget shifts every 2 wks; PMax only at ~50 qualified conv/week.
39. **4 Steps to Optimize Performance Max for Lead Generation** — Spinutech — https://www.spinutech.com/digital-marketing/paid-media/4-steps-to-optimize-performance-max-for-lead-generation/ — 2024-06-25 — Contrarian: keep FUE on but exclude blog/unwanted URLs; CAPTCHA; import offline stages with values.
40. **Google Ads vs LinkedIn Ads (B2B comparison)** — Ruud ten Have, Searchlab — https://searchlab.nl/en/compare/google-ads-vs-linkedin-ads — 2026-03-17 — LinkedIn CPC 2-3x Google (EUR6-12 vs 2-5); min EUR1.5-3k/mo for LinkedIn alone; Google intent + LinkedIn retargeting 70/30.
41. **Google Ads vs LinkedIn Ads** — Christina Lyon, HawkSEM — https://hawksem.com/blog/google-ads-vs-linkedin-ads — upd 2026-09-25 — Google search CPC ~$2.96 avg; LinkedIn min $10/day; Google for active searchers, LinkedIn for decision-maker ABM.
42. **Google Ads Audience Targeting for B2B (2026)** — GrowthSpree — https://www.growthspreeofficial.com/blogs/google-ads-audience-targeting-b2b-saas-2026 — 2026-09-30 — No firmographic targeting in Google; Search audiences in Observation; Customer Match needs 1,000+ matched, B2B match rates 30-55%; custom segments from competitor URLs/searches.
43. **Google Ads for B2B Marketing** — Dreamdata — https://dreamdata.io/library/google-ads-b2b — 2025 — B2B: long-tail industry keywords, dedicated landing pages, track downstream conversions.
44. **Google Ads Seasonality Adjustments Explained** — Austin LeClear, GrowMyAds — https://growmyads.com/seasonality-adjustments/ — 2024-02-09 — Use sparingly for big short spikes; base % on last year's data.
45. **About seasonality adjustments** — Google Ads Help — https://support.google.com/google-ads/answer/10369906 — 2025 — Best for 1-7 day events, not >14 days; tCPA/tROAS Search, all PMax strategies; Smart Bidding already handles normal seasonality.
46. **Optimizing PPC Campaigns for Seasonal Peaks** — John Stanko, JumpFly — https://www.jumpfly.com/blog/optimizing-ppc-campaigns-for-seasonal-peaks-a-smart-guide-for-google-microsoft-ads/ — 2025-08-21 — Raise budgets a few weeks BEFORE peak so bidding learns; reduce (don't fully pause) in off-season; tighten targets off-season.
47. **Google Ads Customer Match Lists: What They Are** — JumpFly — https://www.jumpfly.com/blog/google-ads-customer-match-lists-what-are-they-and-how-do-i-use-them/ — 2025 — Expect 50-60% unmatched; start with 3,000-5,000 emails to reach 1,000 matched; first-party only.
48. **Lead Gen Playbook (PDF)** — Think with Google — https://thinkwithgoogle.com/_qs/documents/11687/Lead_Gen_Playbook.pdf — 2024-2025 — Pillars: enhanced conversions for leads, offline conversion import, first-party audiences, smart bidding on qualified stages.
49. **Target CPA in Google Ads** — Dennis Moons, Store Growers — https://www.storegrowers.com/target-cpa/ — upd 2026-03-06 — tCPA min 15 conv/30d, 30+ recommended; daily budget 2-5x tCPA; first target within 10-20% of actual CPA; keep brand separate.
50. **Paid Ads Cold Start** — Stackmatix — https://www.stackmatix.com/blog/startup-paid-ads-cold-start — 2025-2026 — ~30 conv/30d to exit learning; budget so campaign can afford 15-30 conv/month; no structural changes for 2 weeks, 4 weeks before conclusions.
51. **How Long Does It Take Google Ads to Work?** — Chatterbuzz Media — https://www.chatterbuzzmedia.com/blog/how-long-does-it-take-google-ads-to-work-and-how-does-it-work/ — 2025 — Learning 7-14d; stability 3-4 months; local services see results 3-4 weeks; B2B 4-6 months.
52. **AI Max for Search: what it is, how it works, when to use it** — Karooya — https://www.karooya.com/blog/ai-max-for-search-what-it-is-how-it-works-and-when-to-use-it/ — 2025 — Launch AI Max as Draft+Experiment vs control; monitor "search term match type" segment; use brand exclusions & URL exclusions.
53. **Google AI Max for Search: what senior leaders should take from Google's best-practices session** — Crealytics — https://www.crealytics.com/insights/blog/google-ai-max-for-search-what-senior-leaders-should-take-from-googles-latest-best-practices-session — 2026-08-21 — AI Max success depends on measurement, bidding, structure; up to +27% conv for exact/phrase-heavy accounts; test before rollout.
54. **AI Max for Search vs Performance Max: the real deal from GML 2025** — Susan Yen, Search Lab Digital — https://searchlabdigital.com/blog/ai-max-for-search-vs-performance-max-the-real-deal-from-google-marketing-live-2025/ — 2025-05-23 — AI Max keeps search-term transparency & is better for lead gen than PMax; can run both.
55. **What SMEC's data reveals about AI Max performance** — Brooke Osmundson, SEJ (via theATDB) — https://www.theatdb.com/news/what-smecs-data-reveals-about-ai-max-performance-via-sejournal-brookeosmundson — 2026-03-05 — Independent study: +13% conversion value but higher CPA and erratic ROAS with AI Max.
56. **Google AI Max for Search Campaigns: Complete 2025 Strategy Guide** — Peter Palarchio, NAV43 — https://nav43.com/blog/google-ai-max-for-search-campaigns-complete-2025-strategy-guide/ — 2025-06-10 — Portfolio approach: 20-30% of budget in AI Max tests; caveat for small/local budgets; 1-2 week learning.
57. **Google Ads AI Max for Search: complete setup guide** — groas — https://www.groas.com/post/google-ads-ai-max-for-search-campaigns-complete-setup-guide-october-2025 — 2025-08-14 (upd 2026-10-01) — Search term matching must be on at campaign level for ad-group control; FUE requires text customization; review search terms daily wk 3-4.
58. **Best Practices for Google Ads Broad Match** — Sabarinathan, TripleDart — https://www.tripledart.com/saas-ppc/google-ads-broad-match — upd 2026-07-08 — Broad needs >=15 conv/month; small accounts put 20-30% of search budget on broad; $40k test broad = 81% of conv on 53% of spend.
59. **Top Google Ads Tips for Photo Booth Owners** — LA Photo Party — https://laphotoparty.com/top-google-ads-tips-for-photo-booth-owners/ — 2024-2025 — Photobooth: heavy negatives (DIY, buy, cheap), avoid broad, full extensions, watch daily budget exhaustion.
60. **Google Ads for Photo Booth Rental** — ClicksGeek — https://clicksgeek.com/google-ads-for-photo-booth-rental/ — 2025-2026 — Photobooth CPC $5-15 high-intent; separate wedding/corporate campaigns; scale 35-55% in peak (May-Oct weddings, Nov-Dec corporate).
61. **Google Ads Broad Match** — Stackmatix — https://www.stackmatix.com/blog/broad-match — 2026-09-05 — Broad only at ~30+ conv/month/campaign; below that phrase/exact; weekly search-term mining.
62. **Google Ads Broad Match Strategy: 2026 Playbook** — ATTN Agency — https://www.attnagency.com/blog/google-ads-broad-match-strategy — 2026 — Broad + customer signals outperformed; 500+ negatives cut waste 23%->7% (ecom data; vendor claims).
63. **Performance Delivered podcast: Growing Small Businesses Through Digital Advertising (Pt 1) w/ Navah Hopkins** — Performance Delivered (Transistor) — https://share.transistor.fm/s/05f7b958 — 2024-10-24 — Small budgets: one campaign, few ad groups; PMax needs ~50 conv/30d (struggles <25, volatile 25-50); Max Clicks with bid cap ~10% of daily budget for discovery.
64. **Search vs Performance Max for Lead Gen: Scale Guide 2026** — NAV43 — https://nav43.com/blog/search-vs-performance-max-for-lead-gen-scale-guide-2026 — 2026-05-05 — Adalysis 3,300+ campaigns: Search higher CVR 84% of the time on shared terms; phase 80/20 -> 70/30 (50+ conv & CRM) -> 50-60/40-50 after 6 months OCI; PMax needs $100+/day.
65. **Google Demand Gen vs Performance Max: a funnel strategy for B2B brands** — NAV43 — https://nav43.com/blog/google-demand-gen-vs-performance-max-a-funnel-strategy-for-b2b-brands/ — 2026-05-06 — B2B split mature: Search/AI Max 50-60%, PMax 20-30%, DG 15-25%; new/low-awareness: Search 40-50, PMax 10-20, DG 30-40.
66. **How much of your Google budget should go to Demand Gen** — Fospha — https://www.fospha.com/fospha-academy-lessons/how-much-of-your-google-budget-should-go-to-demand-gen — 2026-07-22 — Ecom data: 10-20% to DG = 100% higher Google ROAS vs 0-5%; ~$130/day per DG campaign; 50+ conv/30d before judging.
67. **Best practices for generating high-quality leads** — Google Business (Canada) — https://business.google.com/ca-en/accelerate/resources/articles/best-practices-for-generating-high-quality-leads/ — 2025 — Lead-gen goals with >=15 conv/30d; enhanced conversions for leads ~10% more conversions; reCAPTCHA; Google pushes broad+Smart Bidding, PMax, DG.
68. **Demand Gen vs Performance Max: budget allocation** — Chris Avery, JudeLuxe — https://www.judeluxe.com/insights/demand-gen-vs-performance-max-budget — 2026-02-10 — "PMax flatters your reporting" via brand/high-intent cannibalisation; give DG and PMax distinct roles and KPIs; exclude brand from PMax.
69. **Rethinking budget allocations in the age of AI-driven media** — Daniel Lim, Louder — https://louder.com.au/2025/04/15/rethinking-budget-allocations-in-the-age-of-ai-driven-media/ — 2025-04-15 — PMax/DG obscure where spend goes; PMax absorbs search budget; needs better measurement (MMM).
70. **All Things PPC Ep.10: A Deep Dive Into Offline Conversion Tracking** — PPC Geeks podcast (Chris Stott) — https://audible.com/es_US/podcast/All-Things-PPC-by-PPC-Geeks/episodes/B0D1GF3BJ9 — 2024-11-19 — Capture IDs on lead, sync CRM outcomes back to Google Ads to optimise on booked jobs, not raw leads.
71. **UK Lead Generation Podcast E58: SEO Lead Gen vs PPC Lead Gen** — James Dooley/Kasra Dash — https://ukleadgeneration.transistor.fm/58 — 2025-12-08 — PPC for immediate lead flow in time-sensitive windows; guard against wasted spend/click fraud.
72. **Google is removing language targeting from Search campaigns** — Brooke Osmundson, Search Engine Journal — https://www.searchenginejournal.com/google-is-removing-language-targeting-from-search-campaigns/585592/ — 2026-08-13 — From late Sept 2026 Search & PMax-Search ignore campaign language setting; language of ad + landing page decides -> FR/EN separation now via ad/LP language.
73. **Google Ads Unleashed Ep.158: Google Ads removes language targeting in September** — Jeremy Young (podcast) — https://googleadsunleashed.buzzsprout.com/2163556/episodes/19753557-google-ads-removes-language-targeting-in-september-why-that-s-good — 2026-09-07 — Query language now drives matching; Canada handled by detected user languages; language targeting stays for Display/YouTube/DG.
74. **Bilingual Marketing in Canada: A Practical Guide** — Marketing News Canada — https://marketingnewscanada.com/news/bilingual-marketing-in-canada-a-practical-guide-for-getting-it-right — 2025-06-08 — Bill 96 requires French in advertising (fines $3k-30k); French campaigns in Quebec see higher CTR/lower CPC (fewer bidders); localise, don't translate.
75. **Search Terms Available Again in Performance Max** — Navah Hopkins, Optmyzr — https://www.optmyzr.com/blog/performance-max-search-terms — 2026-09-25 — Use PMax search terms to add negatives, minimise overlap of search themes with Search keywords, compare auction prices.
76. **About the search terms report in Performance Max** — Google Ads Help — https://support.google.com/google-ads/answer/16327396 — 2025-2026 — PMax search terms report with landing pages & conversions; negatives for Search inventory, content exclusions for Display/Video.
77. **42 launches redefining lead generation (GML 2026)** — Google Business — https://business.google.com/us/accelerate/resources/articles/42-launches-redefining-lead-generation/ — 2026-05 — Lead intent scores, Leads in Google Ads, journey-aware bidding, AI Max + Smart Bidding Exploration, click-to-call misdial filtering, AI Brief brand controls.
78. **Offline Conversion Tracking: Complete Setup Guide** — Elevarus — https://elevarus.com/complete-guide-to-offline-conversion-tracking/ — 2025-2026 — Capture GCLID/GBRAID/WBRAID in hidden fields, store in CRM, upload qualified conv within 90 days; EC for leads recovers iOS; QA monthly.
79. **Offline Conversion Tracking for Google Ads** — NAV43 — https://nav43.com/blog/offline-conversion-tracking-google-ads/ — 2026 — Data Manager API migration deadline 2026-06-15; 30-50 conv/month per campaign for Smart Bidding; first-party data +10% median conversions; 90-day window.
80. **Set up enhanced conversions for leads with Google Tag Manager** — Google Ads Help — https://support.google.com/google-ads/answer/11347292 — 2025 — Enable auto-tagging, accept customer data terms, Conversion Linker + user-provided data tag (email/phone) on form submit.
81. **Salesforce to Google Ads Offline Conversions** — CustomerLabs — https://www.customerlabs.com/blog/salesforce-google-ads-offline-conversion-tracking — 2026-08-23 — Send click ID + hashed email/phone; GCLID import 90-day window, EC for leads 63-day window; Data Manager is new path.
82. **Google Ads: leads for hosted forms screen** — SEO-Day — https://www.seo-day.de/news/article/google-hosted-forms-leads-screen-in-google-ads?lang=en — 2026-06-01 — New Leads view under Conversions shows hosted-form leads for 60 days for quick spam/quality checks.
83. **Lead-Gen Advertising & How To Get Quality Leads** — Dain Ferrero, JumpFly — https://www.jumpfly.com/blog/lead-gen-advertising-how-to-get-quality-leads/ — 2024-01-02 — Import only qualified conversions; multi-stage values; reCAPTCHA; qualify calls before importing.
84. **Google Ads Lead Quality** — LeadsBridge — https://leadsbridge.com/blog/google-ads-lead-quality/ — 2025-08-25 — 1-2 qualifying questions; "More qualified" lead form setting; pass values; weekly search-term review; sync leads to CRM in real time.
85. **Holiday Party Event Planning Timeline** — Nunify — https://www.nunify.com/blogs/holiday-party-event-planning-timeline — 2025 — 73% of successful 200+ employee parties started planning 10-12 weeks out (=> mid-Sept to mid-Oct for mid-Dec parties); Thursday events 20-30% cheaper.
86. **2026 UK Christmas Party Booking Trends** — VenueScanner — https://www.venuescanner.com/blog/2026-uk-christmas-party-booking-trends-businesses-need-to-know — 2026 — 42% of Christmas-party bookings made before September; Sept-Oct critical window; avg party 208 guests (+19%); Fri 36%/Thu 30%.
87. **Should you pause Google Ads in slow season?** — Sammy Cisek, Kickpoint (Canada) — https://kickpoint.ca/pause-google-ads-slow-season/ — 2026-06-25 — Reduce don't pause; check auction insights; keep monthly budget changes <=20%.
88. **Why pausing Google Ads at Christmas costs more** — JudeLuxe — https://www.judeluxe.com/insights/why-pausing-google-ads-christmas-costs-more — 2025-12-28 — Paused accounts took 23 days to recover vs 4 days if reduced to 30-50%; keep brand + remarketing running; Jan 1-15 high intent.
89. **Seasonality bid strategy mistakes** — JudeLuxe — https://www.judeluxe.com/insights/seasonality-bid-strategy-mistakes/ — 2025-2026 — Ramp 15-20% weekly starting 4-6 weeks before peak; peak CPCs 30-60% above average; wind down over 2-3 weeks, never cliff-cut.
90. **Home Services Seasonal Ad Strategy** — Matt Pru, Stackmatix — https://www.stackmatix.com/blog/home-services-seasonal-ad-strategy — 2026-09-06 — Adjust budgets 2-3 weeks before demand shift; never fully pause, cut 30-50% in off-season.
91. **Why we aggressively push ad spend during slow seasons** — Jackson Blackledge, Echelonn — https://echelonn.beehiiv.com/p/why-we-aggressively-push-ad-spend-during-slow-seasons — 2025-08-28 — Dissent: competitors pull back off-season, cheaper share; but true seasonal products differ.
92. **Google Ads costs rise 12.88% (2025 benchmarks)** — PPC Land (WordStream/LocaliQ data) — https://ppc.land/google-ads-costs-rise-12-88/ — 2025-05-25 — All-industry 2025: CPC $5.26, CVR 7.52%, CPL $70.11; Arts & Entertainment cheapest CPC $1.60.
93. **Wedding Planning Timeline** — Bridebook — https://bridebook.com/uk/article/wedding-planning-timeline — 2025 — Couples book decor/rental/photobooth suppliers ~6-9 months before the wedding (=> winter searches for summer weddings).
94. **Business Cycles in the Wedding Industry** — WeddingPro (The Knot Worldwide) — https://pros.weddingpro.com/blog/your-couples/business-cycles-in-the-wedding-industry/ — 2025 — Engagement season Nov-Feb (~40% of proposals); booking season Dec-May; 68% marry May-Oct -> push wedding ads Dec-May.
95. **The January Engagement Boom** — Easy Weddings — https://www.easyweddings.com.au/pro-education/january-engagement-boom/ — 2026 — January surge of newly engaged couples shortlisting fast; speed of response drives bookings; show 2026-27 availability.
96. **How to Make the Most of Engagement Season** — Jonathan Fruitman, EventSource.ca — https://www.eventsource.ca/blog/how-to-make-the-most-of-engagement-season — 2025 — Canadian vendors: Jan-Feb couples in "buy later" mode; follow up; off-peak date promos; reviews/real weddings.
97. **PMax Brand Exclusions: 30-minute setup** — GrowthSpree — https://www.growthspreeofficial.com/blogs/pmax-brand-exclusions-b2b-saas-30-minute-setup-2026 — 2026-05-20 — Account-level brand exclusion recovers 15-30% of PMax budget; 60-70% of accounts lack it; audit weekly for 30 days.
98. **Performance Max Is Eating Your Brand Search** — Carl Chamoiseau, Webtonic — https://www.webtonic.io/blog/performance-max-eating-brand-search — 2026-08-21 — Prove cannibalisation via search terms, brand IS drops, PMax CVR 3-4x non-brand; fix with account-level brand exclusion + funded brand campaign.
99. **How Much Do YouTube Ads Cost in Canada** — Wisevu — https://www.wisevu.com/blog/how-much-do-youtube-ads-cost-in-canada/amp — 2025 — Canadian CPV $0.15-0.40 CAD typical; examples $0.02-0.14 on $1-5k/month; charged at 30s view or click.
100. **#1 Biggest Money Pit in Google Ads** — Alvin Ding (Substack) — https://alvinding.substack.com/p/1-biggest-money-pit-in-google-ads — 2025-03-20 — Unexcluded brand in PMax = paying for conversions that would happen anyway; inflates ROAS.
101. **Maximize Clicks vs Maximize Conversions** — NestScale — https://nestscale.com/blog/maximize-clicks-vs-maximize-conversions.html — 2025-2026 — Max Clicks at launch; switch after ~300 clicks/30+ conversions; expect 1-2 week dip; major changes every 60-90 days.
102. **Best Google Ads Bidding Strategies 2026** — Mega Digital — https://megadigital.ai/en/blog/google-ads-bidding-strategies/ — 2026 — tCPA best at 30-50 conv/30d; daily budget >=2x tCPA; wait 1-2 conversion cycles.
103. **PPC Doctors: Google Ads says I have to Maximize Clicks** — Marin Software — https://marinsoftware.com/ppc-doctors/google-ads-says-i-have-to-maximize-clicks — 2025 — Start Max Clicks for data, move to Max Conversions after ~30 conv over 3-4 weeks.
104. **Google's Smart Bidding secrets: what advertisers get wrong in 2026** — PPC Land (Google PMs Kristina Park, Carlo Buchmann) — https://ppc.land/googles-smart-bidding-secrets-what-advertisers-get-wrong-in-2026/ — 2026-03-11 — Google: no need to warm up with Manual/Max Clicks, start with target strategy; optimise to lowest-funnel event with volume; over-tight targets cause "limited by target"; campaign total budgets 3-90 days.
105. **Google Ads Journey-Aware Bidding: Lead Gen Playbook** — Elevarus — https://elevarus.com/google-ads-journey-aware-bidding-lead-gen-playbook/ — 2026-05-11 — Learning ~2 weeks but revenue events import 21-60+ days later; pick fast proxy (qualified lead/call >120s) as sole primary; value rules.
106. **About bid strategy statuses** — Google Ads Help — https://support.google.com/google-ads/answer/6263057 — 2025 — Learning triggers: new strategy, setting change, composition change, budget change; "Budget constrained" -> raise budget.
107. **About audience segments** — Google Ads Help — https://support.google.com/google-ads/answer/2497941 — 2025 — Life events (Getting married soon), custom segments, Customer Match; lookalikes only in Demand Gen.
108. **Google Ads for Events: conversion-ready campaign structures** — XTIX — https://xtix.ai/blog/google-ads-for-events-conversion-ready-campaign-structures — 2025 — Search first; tight themed ad groups per service; Max Conv then tCPA once data exists.
109. **Marketing Strategies for Event Rental Businesses** — TapGoods — https://www.tapgoods.com/pro/blog/marketing-strategies/marketing-strategies-event-rental-businesses/ — 2025 — Event rentals are emotion-driven: visual storytelling, reviews, seasonal campaigns.
110. **How our bidding algorithms learn / Setting Smarter Search Bids** — Google Ads Help — https://support.google.com/google-ads/answer/10970825 — 2025 — Allow 1-2 conversion cycles between major changes; target changes don't trigger learning; use experiments for bid strategy changes.
111. **Google Ads for Tent Rental** — ClicksGeek — https://clicksgeek.com/google-ads-for-tent-rental/ — 2025-2026 — Separate quote-stage vs research campaigns or bids get averaged; rental CPC $5-20; scale 35-55% in peak.
112. **Diamond Event & Tent case study** — WebFX — https://www.webfx.com/portfolio/case-studies/diamond-event-tent/ — 2019-2025 — Utah tent rental: PPC + local SEO -> +135% Google Ads conversions.
113. **Ultimate Engagement Season Guide** — WeddingPro — https://pros.weddingpro.com/blog/ultimate-engagement-season-guide/ — 2024-12-20 — Couples want transparent "starting at" pricing, fresh photos, reviews, replies within 24-48h.
114. **Google Ads for Wedding Planners** — SaveMyLeads — https://savemyleads.com/blog/other/google-ads-for-wedding-planners — 2025 — Long-tail local keywords, emotive imagery, YouTube portfolio video, auto-push leads to CRM.
115. **Campaign total budgets** — Google Ads & Commerce Blog — https://blog.google/products/ads-commerce/campaign-total-budgets/ — 2026-01-15 — Set a fixed total for a date range (days-weeks) on Search/PMax/Shopping; useful for Christmas-party push windows.
116. **RLSA in Google Ads for Marketing Success** — Loves Data — https://www.lovesdata.com/blog/rlsa-in-google-ads-for-marketing-success/ — 2025 — Segment remarketing lists by engagement; tailor copy to returning visitors.
117. **About call assets** — Google Ads Help — https://support.google.com/google-ads/answer/2453991 — 2025 — Schedule call assets to staffed hours; "Calls from ads" conversion auto-created; set call length to qualify.
118. **Brief: Google Demand Gen vs PMax trends** — The Starr Conspiracy — https://www.thestarrconspiracy.com/insights/trends/brief-google-demand-gen-vs-performance-max-trends-2025 — 2026-05 (upd 2026-09) — DG = cold expansion, PMax = solution-aware capture; judge cost per SQL; EC for leads + OCI baseline.
119. **YouTube Lead Generation Ads** — AdSpyder — https://adspyder.io/blog/youtube-lead-generation-ads/ — 2026-05 — Video action campaigns now Demand Gen; separate Shorts/in-stream assets; matched landing pages, never homepage.
120. **Google RLSA** — Carl Chamoiseau, Webtonic — https://www.webtonic.io/blog/google-rlsa — 2026-07-19 — RLSA CVR 2-4x; need 1,000 active users for Search lists; observation first.
121. **Total budgets now live for Search, PMax, Shopping** — PPC News Feed — https://ppcnewsfeed.com/ppc-news/2026-01/total-budgets-now-live-for-search-performance-max-shopping/ — 2026-01-18 — Fixed budget over date range; good for seasonal pushes.
122. **PPC budgeting in 2026: when to adjust, scale and optimize** — SEO-Day (recap of SEL piece) — https://www.seo-day.de/news/article/ppc-budgeting-in-2026-when-to-adjust-scale-and-optimize?lang=en — 2026-06-19 — Google now paces to 30.4x daily budget even with ad schedules (weekday-only campaigns spend the month's cap in fewer days); total budgets 3-90 days.
123. **The right way to scale Google Ads budgets** — Connor Brown, Dilate — https://www.dilate.com.au/?p=75337 — 2025-04-25 — 10-20% per adjustment every 7-14 days; don't change budget and targets simultaneously; Google may spend up to 2x daily on some days.
124. **Scaling your Google Ads campaigns the right way** — Yael Consulting — https://www.yaelconsulting.com/scaling-your-google-ads-campaigns-the-right-way/ — 2025 — Scale when out of learning 14+ days, goals met 30+ days, 30-50 conv/month; <=20% every 3-7 days.
125. **How to Scale Google Ads Campaigns Without Killing ROI** — ClicksGeek — https://clicksgeek.com/how-to-scale-google-ads-campaigns/ — 2026-05-06 — 15-20% every 5-7 days; scale only if Lost IS (budget) high; stop scaling if CPA >20-30% above baseline.
126. **Local Services Ads are moving into Google Ads** — WSI — https://www.wsiworld.com/blog/local-services-ads-are-moving-into-google-ads — 2026-08-07 — LSA -> Google Ads (US Aug 2026, non-US 2027); campaign-level tCPA; event rental not an LSA category -> not relevant for Evenox now.
127. **Google Ads for Service Businesses Playbook** — Prime Marketing — https://prime-marketing-z86r0.kinsta.page/blog/google-ads-service-businesses-playbook/ — 2025-2026 — Max CPL = job value x close rate x margin; dedicated LPs never homepage; measure revenue per $.
128. **The Vendry debuts revamped vendor search engine for event planners** — BizBash — https://www.bizbash.com/corporate-events/the-vendry-debuts-revamped-venue-and-vendor-search-engine-for-event-planners — 2024-2025 — Corporate planners start on Google and dig sites for capacity/specs -> LPs need specs, capacity, pricing; directories matter.
129. **Google Ads Account Structure Best Practices** — ClicksGeek — https://clicksgeek.com/google-ads-account-structure-best-practices/ — 2026-05-16 — One campaign per major service/objective; ad group = one ad + one LP; budget by service revenue priority.

---

## (b) Synthesis — consensus rules, numbers, and disagreements

Numbers in [brackets] refer to the source list above.

### B1. Account structure and number of campaigns
- **Consensus: a new campaign needs a reason.** That means its own budget, geo, schedule, economics or campaign type. Brand vs non-brand counts as a reason; "looks tidier" does not. Splitting the budget too finely starves every campaign of conversions. Small budgets should run few campaigns, each well funded [10, 27, 63, 129].
- Opascope: most accounts need **6–10 well-funded campaigns, not 20–40** [16]. Navah Hopkins (small budgets): **one campaign with a few ad groups** until there is data [63]. At $250–350/day, the practitioner sources converge on **3–5 Search campaigns plus at most 1–2 non-Search campaigns** [7, 28, 33, 64].
- **Keep high-intent and research intent apart.** If quote-stage searches and research searches share a campaign, Smart Bidding averages them and you overpay on one or underbid on the other [111, 60].
- **Ad group = one ad message + one landing page**, with 5–15 keywords [27, 129]. Use dedicated landing pages per event type and never the homepage [9, 21, 119, 127].
- **Brand stays in its own campaign.** Brand intent converts 3–10× better than non-brand. Mixing it in inflates results and distorts tCPA [20, 49, 98].

### B2. Budget split by channel (lead gen)
| Source | Search | PMax | Demand Gen / YouTube | Notes |
|---|---|---|---|---|
| NAV43 lead-gen scale guide [64] | 80% → 70% → 50–60% | 20% → 30% → 40–50% | – | Phase 2 needs 50+ conv/mo plus a CRM feed; phase 3 needs 6+ months of OCI |
| NAV43 PMax checklist [7] | 80% wk1–4, 70% wk5–8 | 20% → 30% | – | Judge on cost per SQL |
| NAV43 B2B funnel, mature [65] | 50–60% | 20–30% | 15–25% | |
| NAV43 B2B funnel, new/low awareness [65] | 40–50% | 10–20% | 30–40% | Aimed at long B2B cycles, not local services |
| GrowthSpree [32] | 70–80% | 20–30% | – | PMax only with OCI |
| Fospha (ecom) [66] | – | – | 10–20% | ~$130/day per DG campaign |
| groas [28] | 100% | 0% | 0% | Single-metro local service at $3–8k/mo |
| PPC.io [10] | 70% mid-funnel / 20% discovery / 10% brand | | | Older (2024) |

**Where they disagree:** Google pushes PMax, Demand Gen and broad match for everyone [67, 77]. Independent practitioners say Search-only (or Search-heavy) wins below about 30–50 conversions a month, for single-metro local services, and wherever lead quality is unverified [28, 32, 37, 38, 63, 64]. Adalysis looked at 3,300+ non-retail campaigns: **Search beat PMax on conversion rate 84% of the time on shared queries** [64].

### B3. Learning period and conversion thresholds
- **Smart Bidding minimum:** 15 conv/30 days is the floor [1, 49, 67]. **30 conv/30 days per bid strategy** is the practical threshold to exit learning or move to tCPA [3, 4, 8, 50]. At **50+** things are stable and tROAS becomes viable [3, 4, 102].
- **Search learning lasts 7–14 days. PMax takes 2–4 weeks, or 4–6 weeks for lead gen** [4, 7, 32]. Google allows "1–2 weeks, up to 6" [1]. Learning ends on conversion volume, not on a timer [4, 106].
- **Demand Gen:** budget ≥ **15× tCPA** and ≥ **$100/day** recommended [23]. No changes for 14 days, evaluate after ≥ 3 weeks. Value bidding needs 50 valued conversions in 35 days [18]. The hard floor is $5/day [17].
- **PMax:** "30 conv/30d minimum, reliable at 50+" [28, 37]. Navah Hopkins: **struggles below 25, volatile at 25–50, needs about 50** [63]. Spend floor about $50–100/day [37, 64].
- **What resets learning:** bid-strategy changes, conversion-goal changes, large target changes, budget jumps above about 20%, and composition changes [4, 106]. Negatives, ad edits and small changes do not reset it [4]. Google adds that target changes don't trigger the "Learning" status [110].
- **Wait 1–2 conversion cycles between major changes** [102, 110]. Make no structural changes for 2 weeks and wait 4 weeks before drawing conclusions [50].

### B4. Bidding at launch
- **Camp A, warm up first:** Manual CPC or Max Clicks, then Max Conversions at 15–30 conversions, then tCPA at 30+ [8, 50, 101, 103]. Navah Hopkins uses Max Clicks with a bid cap of about 10% of the daily budget to learn costs [63].
- **Camp B, start on the target strategy (Google, 2026):** "start with the bidding strategy you want to optimise towards." The system learns from account-level data, so a warm-up phase is a myth [104].
- **Agreement on tCPA:** set the first target **5–20% above the actual trailing CPA**, then step it down 10–15% every 2–3 weeks [3, 49, 50]. Targets set too tight cause "limited by target" [104]. Daily budget should be **2–5× tCPA** on Search [49, 102] and **15× tCPA** on Demand Gen [23].
- **Lead-gen nuance:** optimise to the lowest-funnel event that still has volume, such as a qualified lead or a call over 60–120 s, rather than every form fill [104, 105]. Real booking data arrives 21–60+ days later, so feed it back via OCI or enhanced conversions for leads [78, 79, 81, 105].

### B5. AI Max for Search
- **What it is:** search term matching, text customization and final URL expansion (FUE). It is on by default for new Search campaigns. FUE requires text customization, and all three need conversion-based Smart Bidding [2, 5, 57].
- **Google's numbers:** +14% conversions at similar CPA, up to +27% for accounts heavy on exact and phrase match [53, 56, 57].
- **Independent numbers:** median **CPA +16%** in independent tests [6]. SMEC saw +13% conversion value, but CPA was higher and ROAS erratic [55]. One case had **69% of impressions on competitor brand terms** [6]. Results in **hyper-local or small-budget accounts are inconsistent**, with query relevance sometimes around 50% [56, plus search snippet]. Since Sept 2026, Google auto-migrates DSA and broad-match campaigns to AI Max [6].
- **When to turn things off:**
  - **FUE off** when pinned RSA assets matter (FUE ignores pins), when you need strict control of landing pages, or when the site has blog, careers or legal pages that attract the wrong intent [5, 7].
  - **Text customization off** when copy must stay legally or linguistically exact. For Evenox that means Bill 96 French and premium tone [74].
  - **Search term matching** should be tested as a Draft & Experiment against a control, not switched on account-wide [52, 56].
  - Spinutech is the dissent: keep FUE on and exclude bad URLs instead [39].

### B6. PMax for lead gen
- **Main risk:** PMax optimises for the cheapest form fills, which come from Display and YouTube: accidental clicks, students, job seekers and bots. In a B2B case its qualified-lead rate was **5% vs 25% for Search** [7]. GrowthSpree found MQL→SQL of 3–5% vs 18–25% [32, 36, 38].
- **Prerequisites:**
  - Lead-gen conversion categories ("Submit lead form", "Qualified lead"), which unlock Google's invalid-lead protections [1].
  - reCAPTCHA and server-side validation [1, 39].
  - Enhanced conversions for leads plus OCI [7, 29, 48].
  - **Account-level brand exclusions**, which recover 15–30% of PMax spend [97, 98, 100].
  - URL exclusions for blog, careers and legal pages [7].
  - Placement exclusions for games and kids' apps [29].
  - Campaign-level negatives and the new search terms report [15, 75, 76].
- **Diagnostic:** if the CRM-qualified rate drops 8 points or more after PMax launches while CPL stays flat, PMax is the cause [38].
- **Brand exclusions, two views:** most sources say exclude brand [97, 98, 100]. A minority warns that removing brand when OCI is incomplete starves PMax of its signals (search snippet). With a separate brand campaign in place, exclusion is the right call.

### B7. Demand Gen, YouTube and remarketing
- **Demand Gen** replaced Video Action campaigns [119]. It now has a **Presence-only** location option [35], plus lookalikes (Demand Gen only), life events such as "Getting married soon", and lead form ads [107, plus search snippet].
- It is judged on qualified leads, with 3+ weeks of patience [18, 118]. Recommended spend is ≥ $100/day [23]. Practitioners frame it as cold-audience expansion, with PMax and Search doing the capture [118].
- **YouTube costs in Canada:** about **$0.15–0.40 CAD per view**, and $0.02–0.14 in real local examples [99]. Creative should be separate assets for Shorts (vertical) and in-stream [119].
- **Remarketing lists:** Display needs ≥ 100 users and Search/RLSA ≥ 1,000 [120, plus search snippet]. RLSA converts 2–4× better; start in observation mode [116, 120].
- **Customer Match:** compliant accounts get observation and exclusion. **Targeting needs 90+ days and more than $50k USD lifetime spend** [14]. Lists need about 1,000 matches, and 50–60% of uploads go unmatched, so plan on uploading 3–5k emails [42, 47].

### B8. Geo, language and schedule
- **Use Presence, not "Presence or Interest", for lead gen.** The default can waste 20–35% of budget [34]. Google claims +5% conversions from the default, but only in travel, real estate and education [30].
- **Quebec language (new):** from late Sept 2026, Search and PMax ignore campaign language targeting. The language of the ad and landing page, plus the user's known languages, now decide who sees what [72, 73]. Display, YouTube and Demand Gen keep language targeting [73].
  - Bill 96 requires French in advertising, with fines of $3k–30k [74].
  - French campaigns in Quebec get higher CTR and lower CPC because fewer advertisers bid in French [74].
- **Schedule:** Smart Bidding already prices time of day, so business-hours-only schedules starve it. Fix lead follow-up instead [31]. Schedule **call assets** to the hours someone answers the phone [117].
  - Since 2026 Google paces to **30.4× the daily budget even with an ad schedule**, so a weekday-only campaign spends a month's cap in fewer days [122].

### B9. Seasonality
- **Ramp before the peak:**
  - "a few weeks ahead" [46]
  - 2–3 weeks before [90]
  - **15–20% weekly starting 4–6 weeks before the peak** [89]
- **Off-season: reduce, don't pause.** Accounts that paused took **23 days to recover; accounts that cut to 30–50% took 4 days** [88]. Cuts of 30–50% are typical [87, 90]. Echelonn dissents and keeps spending, because competitors pull back [91].
- **Seasonality adjustments** are only for **1–7 day spikes, never more than 14 days**, and work with tCPA/tROAS Search and any PMax strategy [45]. They are useless for a 10-week Christmas-party window.
- **Campaign total budgets** (Search/PMax since Jan 2026; windows of 3–90 days) suit fixed promo windows [115, 121, 122].
- **Corporate Christmas calendar:**
  - 73% of successful large parties began planning **10–12 weeks out** [85].
  - In the UK, 42% of bookings are made before September, and Sept–Oct is the critical window [86].
  - Many firms move parties into January (Tripleseat, search snippet).
- **Wedding calendar:**
  - Engagement season runs **Nov–Feb** and covers about 40% of proposals [94].
  - **Booking season runs Dec–May** [94]. There is a January surge [95].
  - Couples book decor and rentals **6–9 months out** [93].
  - Couples expect replies within **24–48 h** and want "starting at" pricing [113].

### B10. Scaling and kill rules
- **Budget increments:**
  - **+20% max per step, wait 1–2 weeks** [12, 13]
  - 10–20% every 7–14 days [16, 123]
  - 15–20% every 5–7 days [125]
  - ≤20% every 3–7 days [124]
  - CPA rises temporarily after each step [13].
- **When to scale:** out of learning for 14+ days, on target for 30 days, 30–50 conv/month [124], and **Lost IS (budget)** clearly present [122, 125].
- **When to stop scaling:** CPA rises more than 20–30% above baseline [125]. A CPA spike lasting 3–4 weeks points to a structural problem, not learning [16].
- Don't change budget and target together [123].
- AI Max migration: shift **25–30% of budget every 2 weeks** [38].

### B11. B2B tactics (corporate events)
- **Google has no firmographic targeting.** B2B targeting comes from keywords plus audiences used as signals in observation mode: custom segments built from competitor URLs and buyer searches, and Customer Match [42].
- **LinkedIn costs 2–3× more per click**, with a minimum of about €1,5–3k/month to make it work [40, 41]. It is a complement for ABM, not something to fund out of a $9k Google budget.
- **Planners** start on Google and dig through sites for specs and capacity, so landing pages need specs, capacities, packages and prices [128].
- **Corporate keyword focus:** "corporate drinks/cocktail" style terms plus per-event landing pages lifted one firm's corporate share from 20% to 68%. This case is anecdotal [21].

### B12. Wedding vendor tactics
- **Long-tail, specific queries** beat broad ones [9]. Exact match beats broad for event bookings [25, 59].
- **Speed of response decides bookings** [9, 95, 113].
- Show transparent "starting at" prices and real-wedding galleries [96, 113].
- Demand Gen with "Getting married soon" life events plus lookalikes is the targeting tool for the engagement window [107].

---

## (c) Recommended account architecture: Evenox at $300/day CAD (≈$9,120/month)

### C0. Prerequisites (week 0; without these, no bidding strategy can work)
1. **Conversions.**
   - Primary: `Demande de soumission – formulaire` (category Submit lead form) and `Appel depuis annonce ≥ 60 s` (Calls from ads).
   - Secondary (observe only): click-to-email, click-to-WhatsApp/phone on site, and catalogue/package page views.
   - Use **one primary set** for the whole account.
2. **Enhanced conversions for leads** via GTM, plus hidden **GCLID/GBRAID/WBRAID** fields on every form [78, 80, 81].
3. **OCI through Data Manager.** Import `Soumission qualifiée` (lead is real: event, date, budget) and `Réservation confirmée` with value = contract amount, within 63–90 days. Once 15+ qualified leads a month arrive, make `Soumission qualifiée` the primary goal and demote raw form fills to secondary [79, 105].
4. **Spam protection.** Invisible reCAPTCHA, server-side validation, and 1–2 qualifying form fields: event type, date, number of guests, budget range [1, 84].
5. **Landing pages.** One per intent, each in FR and EN, each with "à partir de" pricing and specs:
   - Party de Noël d'entreprise
   - Gala & soirée corporative
   - Activation de marque
   - Lettres lumineuses géantes
   - Forfaits mobilier (lounge 850$, cocktail 1 100–1 400$, gala 2 900$)
   - Photobooth (650–1 495$)
   - Mariage
6. **Account-level negatives.** Emplois/jobs, DIY/fabriquer, acheter/à vendre, Amazon, gratuit, cheap/pas cher, location salle (venue-only searches), cours, and inflatable/jeux gonflables. Inflatables are deprioritised, so negate them except in the brand campaign.
7. **Geo.** Use **Presence only** [34] on every campaign.
8. **Assets.** Account-level brand list for exclusions [97]. Call assets scheduled to staffed hours [117]. Location asset linked to the Google Business Profile.

### C1. Campaign list and budgets: launch phase (Oct 7 – Nov 30, Christmas-party window)
| # | Campaign | Type | Daily budget (CAD) | Ad groups (FR + EN versions each) | Match types | Bidding at launch | Switch rule |
|---|---|---|---|---|---|---|---|
| 1 | **S – Marque (Brand)** | Search | **$10** | Evenox, Evenox location, Evenox lettres | Exact + phrase | **Max Clicks, max CPC cap $2.50** (or Target IS 90% top of page) | Stays on this strategy. Brand is excluded from #2–4 via negatives. |
| 2 | **S – Corporatif & Party de Noël** | Search | **$135** | Party de Noël entreprise / Christmas party rentals; Gala corporatif; Activation / événement d'entreprise; Mobilier événementiel corporatif; Lettres lumineuses corporatives / logo; Photobooth corporatif | Phrase + exact (no broad until 30 conv/mo) | **Max Conversions, no target** (conversion tracking verified on day 1, no time for a 2-week warm-up in a 10-week window [104]) | At **≥30 conv/30d**, switch to **tCPA = trailing 30-day CPA +10%** [3]. Lower the target 10% every 2–3 weeks while volume holds. |
| 3 | **S – Produits vedettes (generic)** | Search | **$75** | Location lettres lumineuses géantes (hero); Location photobooth; Forfaits mobilier lounge/cocktail; Location décor événementiel | Phrase + exact | **Max Conversions** | Same 30/30 rule. If it stays below 15 conv/30d by Dec 31, merge it into #2/#4 to pool data. |
| 4 | **S – Mariages** | Search | **$40** | Lettres lumineuses mariage (LOVE, initiales); Mobilier lounge mariage; Photobooth mariage; Location décor mariage | Phrase + exact | **Max Conversions** | Same 30/30 rule. Raise budget in the Dec–Feb engagement season (C2). |
| 5 | **DG – Remarketing + audiences** | Demand Gen (image + vertical/horizontal video: marquee letters lit at a corporate party, lounge setup) | **$40** | AG1: site visitors 180 d + Customer Match (if eligible) + lookalike of past clients. AG2 (from Nov 15 for weddings): Life event "Getting married soon" + custom segment (searches "mariage 2027", wedding venue URLs in Laurentides/Laval) | – | **Max Conversions** (Presence only; FR + EN language) | Judge only after **3 weeks and ≥ $840 spent**. Kill if 0 qualified leads by $1,500 spent. |
| – | **Total** | | **$300** | | | | |

**AI Max at launch: OFF on #2–4.** Reasons:
- Independent data shows higher CPA in small/local accounts [6, 55, 56].
- Bill 96 and the premium French tone argue against auto-generated text [74].
- FUE could send traffic to pages like the inflatables catalogue or a careers page [5].

If Google auto-enrolls a campaign, set it up like this:
- Search term matching OFF
- Text customization OFF
- FUE OFF
- URL exclusions for /blog, /emplois, /jeux-gonflables

**Test plan (January, see C2):**
- Run a 50/50 **Draft & Experiment on #2** with search term matching ON, text customization OFF and FUE OFF, for 4–6 weeks [52].
- Keep it if conversions are up and CPA is ≤ +10%, with the qualified rate holding.

**No PMax at launch.** Reasons:
- Evenox will be under 30–50 conv/month per campaign [28, 63].
- It is a single-metro local service [28].
- Lead quality isn't yet verified through OCI [32, 38].
- PMax would cannibalise the new Search campaigns [28, 98].

**No standalone YouTube campaign.** Video runs inside Demand Gen [119]. **No LinkedIn** in this budget [40].

**Geo targeting:**
- **#1, #2, #3:** Laval; Montréal (island); Rive-Nord (MRC Thérèse-De Blainville, Deux-Montagnes, Mirabel, Les Moulins/Terrebonne, L'Assomption); Laurentides (Saint-Jérôme to Mont-Tremblant); Longueuil/Rive-Sud *only if* Evenox delivers there.
- **#4 Mariages:** same areas. Laurentides wedding venues are a strong source, so keep Mont-Tremblant/Saint-Sauveur in.
- **Québec City / Lévis:** keep them **out of the launch campaigns.** Delivery economics differ, and Smart Bidding ignores location bid adjustments, so they need their own campaign (C2, phase 2).
- **Exclusions:** everything outside Quebec. Presence only.

**Language (post-Sept 2026):**
- Each ad group gets a **French RSA and French landing page as the default**, plus an **English twin ad group** with English keywords, English RSA and English landing page.
- Google now routes by ad and landing-page language, so don't rely on the language setting [72].
- Keep French dominant in budget and assets (Bill 96 [74]). DG/YouTube language targeting stays at FR + EN.

**Schedule:**
- **24/7 ads** on all campaigns [31].
- **Call assets** on a schedule: Mon–Fri 8:00–20:00, Sat 9:00–17:00, or whatever hours are actually staffed.
- Commit to responding to forms within **2 business hours**. Speed decides bookings [9, 95, 113].
- No dayparting bid adjustments; Smart Bidding ignores them anyway.

**Christmas-window tactics (Oct 7 – Dec 10):**
- RSA headlines/sitelinks: "Party de Noël clé en main", "Lettres lumineuses avec votre logo", "Forfait cocktail dès 1 100 $", "Dates de décembre limitées".
- Update ads with a countdown/ad customizer to the booking cutoff.
- Add "Party d'après-fêtes / janvier" ad groups from Nov 15. Many companies hold parties in January (Tripleseat), so corporate demand runs into Jan–Feb.
- Optional: a **campaign total budget** on #2 for Nov 1–Dec 12 (e.g. $5,700) so Google can front-load on high-demand days [115, 122].
- Do **not** use seasonality adjustments; the window is longer than 14 days [45].

### C2. Seasonal budget calendar (total stays about $300/day unless noted)
| Period | Brand | Corporatif | Produits | Mariages | DG | PMax test | Québec City test | Total/day |
|---|---|---|---|---|---|---|---|---|
| **Oct 7 – Nov 30** (Christmas booking) | 10 | 135 | 75 | 40 | 40 | – | – | **300** |
| **Dec 1 – Dec 24** (last-minute Christmas + January parties; engagement season starts) | 10 | 110 | 70 | 65 | 45 | – | – | **300** |
| **Dec 25 – Jan 4** (holidays) | 10 | 60 | 50 | 70 | 40 | – | – | **230** (cut, don't pause [88]) |
| **Jan 5 – Mar 31** (event low season = **booking season** for weddings and spring/summer corporate) | 10 | 80 | 60 | 85 | 35 | 30 (only if gates met) | 0–20 | **≈ 280–300** |
| **Apr – Oct** (peak events: summer activations, weddings, galas; Christmas-party push restarts Sep 1) | 10 | 120 → 135 from Sep | 80 | 60 | 30 | 0–40 | 20 | **300 → scale above 300** when C3 scale rules allow |

**Notes on the calendar:**
- Every transition between rows is spread over 1–2 weeks, with no single campaign moving more than 20% per step [12, 89].
- **Next year's Christmas push:** raise Corporatif 15–20% per week from **Aug 15**. Search for 2027 parties starts 10–12 weeks out, and UK data has 42% booked before September [85, 86, 89].
- **Gates for the Phase-2 PMax test** (all must be met) [1, 7, 32, 64, 97]:
  - Search total ≥ 50 conv/month
  - OCI of qualified leads live for 30+ days
  - Account-level brand exclusion on
  - FUE off with URL rules
  - Primary goal = `Soumission qualifiée`
  - $30–40/day
- **Phase-2 Québec City/Lévis:** a separate Search campaign at $20/day for corporate and marquee letters only, launched once the core campaigns hit target. Bump its targets to reflect delivery cost.

### C3. Scaling and kill rules
| Trigger | Condition (measure on rolling 14–30 days, after learning ends) | Action |
|---|---|---|
| **Move to tCPA** | Campaign ≥ **30 conv/30d** on the primary goal [3, 4] | tCPA = trailing CPA +5–10%. Then lower 10% every 2–3 weeks while volume holds. Revert if conversions drop more than 25%. |
| **Move to value bidding** | OCI values flowing, ≥ **50 valued conv/30–35d** [4, 18] | Max Conversion Value. Then tROAS set 20% below achieved ROAS [18]. |
| **Scale budget** | CPA ≤ target for 14+ days **and** Search Lost IS (budget) ≥ 15% [122, 125] | **+15–20% per step, then wait 7–14 days** [12, 16, 123]. Never change budget and target in the same week [123]. |
| **Stop scaling** | CPA more than 20–30% above the pre-scale baseline for 14 days [125] | Return to the last good budget and diagnose search terms, LPs and lead quality. |
| **Structural problem** | CPA spike lasting 3–4+ weeks, not learning [16] | Audit tracking, query mix, landing page and offer. Don't keep waiting. |
| **Cut a keyword/ad group** | Spend ≥ **2× target CPA** with 0 conversions, or ≥ 3× with 0 *qualified* leads | Pause, or narrow to exact match and add negatives. |
| **Cut a campaign** | Under 15 conv/30d for 60 days **and** CPA above target | Merge into the sibling campaign to pool data [10, 63]. |
| **Demand Gen kill** | 0 qualified leads after ~3 weeks **and** ≥ $1,500 spent [18] | Pause and move the budget to Search Mariages/Corporatif. |
| **PMax kill (phase 2)** | Qualified-lead rate drops ≥ 8 pts vs Search, **or** cost per qualified lead > 1.5× Search after 6 weeks [7, 38] | Pause and return the budget to Search. |
| **AI Max experiment** | After 4–6 weeks: conversions ↑ and CPA ≤ +10% and qualified rate holding [6, 52] | Apply to the campaign. Otherwise end it. If more than 20% of terms are irrelevant, end it at once. |
| **Off-season** | Event-date demand drops (late Dec; note that Jan–Mar is booking season) | Reduce up to 30% (−20% per step). **Never pause** non-brand Search [87, 88, 90]. |
| **Spam surge** | More than 15% of leads invalid in a week | Tighten reCAPTCHA, add a required qualifying field, check placements (DG) and search terms. Only count qualified leads as primary [1, 84]. |

### C4. KPIs to manage by
- **Primary KPIs:** cost per *qualified* quote request and cost per booked event (from OCI), not CPL.
- **CPL benchmarks:** the 2025 WordStream all-industry CPL is about $70 USD [92]. Event-rental clicks run **$2–6 for tent terms and $5–15 for photobooth terms** [26, 60, 111].
- **Target for Evenox:** **CPL ≤ $90 CAD** and cost per booking ≤ 15% of average order value. For example, a $1,250 cocktail package means about $190 per booking.
- **Expected volume at $9.1k/month:** about 80–130 leads a month. Set the real targets after the first 30 days of data.

### C5. Where my recommendation takes a side
- **Max Conversions from day 1 rather than Max Clicks:** I follow Google [104] over the warm-up camp [8, 101, 103]. The 10-week Christmas window leaves no time for a 2-week click phase. **Fallback:** if CPCs on #2 exceed $12 in week 1 with fewer than 3 conversions, switch #2 to Max Clicks with a $6 cap for 10 days.
- **Search-heavy, about 87% of spend, with no PMax at launch:** I follow independent practitioners [28, 32, 38, 63, 64] over Google's broad/PMax push [67, 77].
- **Demand Gen at $40/day, below Google's $100/day recommendation [23]:** it is accepted as a remarketing and engagement-season test with an explicit kill rule.
