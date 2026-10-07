# Research 7 - Google Ads copy and creative for Évenox (Québec)
Prepared 2026-10-07. Scope: RSA best practices, AI text customization, assets, Demand Gen / PMax / Shorts creative, premium/wedding/B2B copy, Québec French and Bill 96, bilingual structure, character limits. Then ready-to-paste copy for 7 ad groups, checked programmatically (script: `scratchpad/scripts/r7_adcopy.py`, result "ALL LIMITS OK").

Legend: **[F]** = page fetched and read in full or in part. **[S]** = only the search-result snippet was read (fetch blocked or unhelpful). Undated pages are marked "n.d.". Older items (pre-2025) are kept only where they are official specs or foundational studies.

---

## (a) Sources consumed (116)

### Google official documentation (Help Center, policy, API, blog)
1. [F] Best practices for creating effective responsive search ads - Google Ads Help - https://support.google.com/google-ads/answer/6167122 - live 2026 - Up to 15 H / 4 D. Avoid pinning unless you need it. Put prices or offers in the copy. Adding a business name and logo gives about 8% more conversions.
2. [F] About Ad strength for responsive search ads - Google Ads Help - https://support.google.com/google-ads/answer/9921843 - live 2026 - Ad strength is a feedback tool. It is not used for Ad Rank, Quality Score or auctions. Google recommends 6+ sitelinks.
3. [F] Text ad character limits - Google Ads Help - https://support.google.com/google-ads/answer/1704389 - live - Headline 30, description 90, path 15. Double-width languages count twice.
4. [F] About sitelink assets - Google Ads Help - https://support.google.com/google-ads/answer/2375416 - live - Text limit 25. Up to 6 on desktop, 8 on mobile. Minimum 2. Going to 6 per campaign gives up to 3.5% more conversions. Start at account level.
5. [F] About callout assets - Google Ads Help - https://support.google.com/google-ads/answer/6079510 - live - Limit 25 characters. Up to 10 can show. Specific beats vague. Can be scheduled.
6. [F] About structured snippet assets - Google Ads Help - https://support.google.com/google-ads/answer/6280012 - live - 13 fixed headers (Types, Service catalog, Styles...). Minimum 3 values, 4+ recommended. A header that doesn't match its values is the main reason for disapproval.
7. [F] About price assets - Google Ads Help - https://support.google.com/google-ads/answer/7065415 - live - French is supported. Minimum 3 items, 5+ recommended. Header and description 25 characters each. Types include Service tiers. No more than 2 clicks charged per impression.
8. [F] About image assets for Search - Google Ads Help - https://support.google.com/google-ads/answer/9566341 - live - 1:1 required, 1.91:1 optional, 1200 px recommended, up to 20 per campaign. No overlaid text or logos. About 6% higher CTR. Eligibility: account open 60+ days with a clean policy history.
9. [F] About lead form assets - Google Ads Help - https://support.google.com/google-ads/answer/9423234 - live - Search and PMax. Privacy policy required. Delivery by CSV, webhook, Zapier or API. OTP verification available.
10. [F] Create lead form assets - Google Ads Help - https://support.google.com/google-ads/answer/16726130 - 2026 - Needs a headline, business name, description and privacy URL. Qualifying questions cannot be optional. Conditional answers are supported.
11. [F] About qualifying responses in lead forms - Google Ads Help - https://support.google.com/google-ads/answer/17050941 - 2026 - Mark answers as "qualifying" so those leads are auto-tagged as qualified and get their own conversion action.
12. [S] Google Ads lead form assets (More qualified vs More volume) - Search Engine Journal (search snippet) - https://www.searchenginejournal.com/google-ads-lead-forms-assets - 2023-25 - "More qualified" adds steps, so you get fewer but better leads.
13. [F] About promotion assets - Google Ads Help - https://support.google.com/google-ads/answer/7367521 - live - Discounts are either monetary or percent. Occasion-based. Free to add. NOTE: the format is built around discounts, which clashes with the Évenox rule against % discounts.
14. [F] Business information (name and logo) assets - Google Ads Help - https://support.google.com/google-ads/answer/12497613 - live - Advertiser verification required. The name must match the domain or legal name. One per account or campaign. Serving is not guaranteed.
15. [F] Editorial policy - Google Ads Policy Help - https://support.google.com/adspolicy/answer/6021546 - live - Bans gimmicky punctuation, capitalization and spacing, plus repetition. (Practice: no "!" in headlines.)
16. [F] Use text guidelines with Performance Max and Search (beta) - Google Ads Help - https://support.google.com/google-ads/answer/16489313 - 2025-26 - 25 term exclusions and 40 messaging restrictions. Works in all languages. Exclusions are language-specific. They cannot stop price-based assets.
17. [F] About language targeting - Google Ads Help - https://support.google.com/google-ads/answer/1722078 - live - Matches on the user's languages, the ad and the landing page. When the query's language is clear, the ad in that language is preferred.
18. [F] YouTube video ad specs - Google Ads Help - https://support.google.com/google-ads/answer/13547298 - live - 1080p for 16:9, 9:16 and 1:1. Thumbnail 1280x720. Respect safe zones.
19. [F] Your guide to YouTube Shorts ads - Google Ads Help - https://support.google.com/google-ads/answer/16041697 - 2025-26 - 9:16, under 60 s recommended, 10-30 s for action. Blend in with organic Shorts. Sound helps (+20% conversions).
20. [F] Best practices for high-performing Demand Gen campaigns - Google Ads Help - https://support.google.com/google-ads/answer/14693848 - 2026 - "YouTube Performance Four". Creative: 3 vertical + 3 square + 3 horizontal images and 1 video in each orientation. Advertisers using 3+ of the practices saw +40% conversions.
21. [F] Creative Excellence Guide for Demand Gen - Google Ads Help - https://support.google.com/google-ads/answer/14733311 - 2025-26 - Combine video and images (+6% conversions per $). Rule of three per aspect ratio. Native vertical content.
22. [F] About the ABCDs of effective video ads - Google Ads Help - https://support.google.com/google-ads/answer/14783551 - 2025 - Attention, Branding, Connection, Direction. For Shorts the order changes: Connection comes first.
23. [F] Delivering more informative sitelinks, callouts and snippets - Google Ads blog - https://blog.google/products/ads/delivering-more-informative-sitelinks - 2017 (foundational) - Callouts and snippets show inline. Mobile sitelinks appear as a carousel.
24. [S] PriceExtensionPriceQualifier enum - Google Ads API reference - https://developers.google.com/google-ads/api/reference/rpc/v24/PriceExtensionPriceQualifierEnum.PriceExtensionPriceQualifier - 2026 - Qualifiers are From, Up to and Average, and they are optional. Pick none so the asset doesn't render as "à partir de".
25. [S] Campaign.BrandGuidelines - Google Ads API reference - https://developers.google.com/google-ads/api/reference/rpc/v21/Campaign.BrandGuidelines - 2025 - PMax brand fonts are limited to a fixed list (Open Sans, Roboto, Montserrat, Poppins, Lato, Oswald, Playfair Display, Roboto Slab) plus main and accent hex colours.

### RSA performance studies and copy craft
26. [F] Google RSA performance study (about 20k accounts) - Frederick Vallaeys, Optmyzr - http://www.optmyzr.com/blog/google-rsa-performance-study - 2026-04-06 - Ad strength does not correlate with results (Average had the best CPA). Headlines under 20 characters perform best. 61-70 character descriptions are the sweet spot. Partial pinning beats both no pinning and full pinning. Sentence case beats Title Case (CPA 7.46 vs 27.47).
27. [F] Ad Strength and creative study (1M+ ads) - Navah Hopkins, Optmyzr - https://www.optmyzr.com/blog/google-ad-strength-study/ - 2024-09-09 - "Average" often beats "Excellent". Sentence case wins. Shorter is better.
28. [F] RSA optimization part 3: ad strength - Brad Geddes, Adalysis - https://adalysis.com/blog/rsa-optimization-series-part-3-everything-you-need-to-know-about-ad-strength/ - 2022-04-05 - Ad strength has no clear link to CTR or conversion rate. Pinning makes "Excellent" hard to reach.
29. [F] Responsive Search Ads complete guide - Web Tonic - https://www.webtonic.io/blog/responsive-search-ads - 2026 - Pin the keyword headline in position 1 and the CTA in position 2, leave position 3 free. A second RSA adds +6.6% conversions.
30. [F] 9 tips to optimize RSAs - Dennis Moons, Store Growers - https://www.storegrowers.com/how-to-optimize-responsive-search-ads/ - 2026-01-08 - Run a mix of unpinned, "RSA light" and pinned variants. Ad strength is a vanity metric.
31. [F] Best practices for RSAs in 2025 - Pattern - https://au.pattern.com/blog/best-practices-for-responsive-search-ads-rsa-in-2025/ - 2025 - Pinning one headline cuts combinations by about 75%. Their unpinned case study showed +38% conversion rate.
32. [F] Why you shouldn't pin headlines - Lebesgue - https://lebesgue.io/google-ads/why-you-shouldnt-pin-headlines-amp-descriptions-in-google-ads - 2025-10-09 - Unpinned ads had higher CTR in their tests. Pin only legal or brand text.
33. [F] How to write Google Ads copy that pops - Michelle Morgan, LocalIQ - https://localiq.com/blog/google-ads-copy/ - 2025-12-13 - Theme headlines across brand, benefit, price and CTA. Pinning lowers ad strength but does not make the ad weaker. Unused headlines can show as short sitelinks.
34. [F] Ad copy testing RSA (French) - Lionel Fenestraz - https://lionelz.com/fr/blog/ad-copy-testing-rsa-google-ads/ - 2026 - Test angles, not individual ads. Aim for 100+ conversions per variant over 4-8 weeks.
35. [F] RSAs: maximise paid search - Journey Further - https://www.journeyfurther.com/en-gb/insights/responsive-search-ads-maximise-paid-search - 2022 - Pin USPs to H2 when testing. Vary headline length.
36. [F] Writing knock-out RSAs - Red Evolution - https://www.redevolution.com/blog/writing-knock-out-responsive-search-ads-a-guide - updated 2025-06-18 - Concrete benefits and statistics. Use pinning with restraint.
37. [F] Top tips for effective RSAs - Invoca - https://www.invoca.com/blog/top-tips-for-creating-effective-google-responsive-search-ads - 2019 - Mix keyword and non-keyword headlines. Vary lengths.
38. [F] Four best practices for RSAs - Miranda Schirmer, JumpFly - https://www.jumpfly.com/blog/four-best-practices-for-responsive-search-ads-with-infographic/ - 2021 - 2-3 keyword headlines, the rest USPs. Give each description a different CTA.
39. [F] 20 Google Ads headline tips 2026 - Mega Digital - https://megadigital.ai/en/blog/google-ads-headline/ - 2026 - Numbers, benefits, guarantees you can keep, and matching the landing page.
40. [S] Google Ads copy - WordStream (search snippet; fetch 403) - https://www.wordstream.com/blog/google-ads-copy - 2025 - Put the main keyword in 3+ of the 15 headlines. Open with action verbs.
41. [S] RSA tips - Think with Google APAC (redirected) - https://thinkwithgoogle.com/intl/en-apac/marketing-strategies/search/responsive-search-ads-tips - n.d. - Use at least 8-10 distinctive headlines.

### Lead quality, pricing in ads, premium positioning
42. [F] Should you include price in your Google Ads? - Noble Desktop - https://blog.nobledesktop.com/learn/digital-marketing/should-you-include-price-in-your-google-ads - 2025-06-05 (updated 2026-04-19) - Their price-in-ad example cut CPA from $750 to $300. CTR drops while conversion rate rises.
43. [F] Increase quality of leads from ads - ClicksGeek - https://clicksgeek.com/increase-quality-of-leads-from-ads/ - 2025-26 - Use price anchors, minimums and deliberate disqualifiers to create "intentional friction".
44. [S] Poor lead quality from ads - 6-step plan - ClicksGeek - https://clicksgeek.com/poor-lead-quality-from-ads/ - 2025-26 - Pre-qualify in the ad copy. Accept a lower CTR.
45. [F] Best Google Ads agency for luxury - JudeLuxe - https://www.judeluxe.com/best-google-ads-agency-luxury/ - 2026 - Discounting erodes luxury equity. Isolate brand campaigns. Expect longer consideration cycles.
46. [F] High-end product advertising - AdSpyder - https://adspyder.io/blog/high-end-product-advertising/ - 2025 - Promise, proof, service. Adding value is safer than discounting. Write with a concierge tone.
47. [S] Luxury and premium sector - JudeLuxe - https://www.judeluxe.com/sectors/luxury-premium - 2026 - Use negative keywords to keep out discount and clearance queries.

### AI Max, text customization, automation risks
48. [F] Google introduces text guidelines - PPC Land - https://ppc.land/google-introduces-text-guidelines-for-ai-powered-advertising-campaigns/ - 2025-09-10 - Guideline examples include "Don't imply our products are discounted". Covers PMax and AI Max.
49. [F] Text guidelines beta goes global - PPC Land - https://ppc.land/googles-text-guidelines-beta-goes-global-for-ai-max-and-performance-max/ - 2026-02-26 - Available in all languages. BYD saw +24% leads at 26% lower cost. Price assets are still not blocked.
50. [F] How to create effective AI Max text guidelines - Adalysis - https://adalysis.com/blog/how-to-create-effective-ai-max-text-guidelines/ - 2025-26 - Limit of 300 characters per restriction. Give each concept its own restriction. Test with generated examples first.
51. [F] AI Max for Search: opportunity and risks - Stellar Search - https://www.stellarsearch.co.uk/insight/ai-max-for-search-the-opportunity-the-risks-and-how-to-run-it-properly - 2026-04-23 - The AI optimises for CTR, not brand coherence. Set URL exclusions. Read the search terms "Source" column.
52. [F] AI Max replacing DSA - JumpFly - https://www.jumpfly.com/?p=42198 - 2026 - Text customization and final URL expansion are linked. DSA creation ends January 2027.
53. [F] AI Max auto-upgrade September 1: will ads all look alike? - PPC Land - https://ppc.land/google-ads-ai-max-auto-upgrade-lands-september-1-will-ads-all-look-alike/ - 2026 - Accounts using automatically created assets got text customization turned ON. Monks found 99% of AI Max impressions had zero conversions. Risk of homogenized copy.
54. [F] AI Max migration live Sept 1 - Common Thread Co. - https://commonthreadco.com/blogs/coachs-corner/google-ai-max-migration-live-september-1-2026-ecommerce - 2026-09 - Audit AI-written copy now. Check tracking under final URL expansion.
55. [F] Google ends DSA, upgrades to AI Max - PPC Land - https://ppc.land/google-ends-dynamic-search-ads-dsa-upgrades-to-ai-max-in-september/ - 2026-04-15 - Google claims +7% conversions. Independent tests found 35% lower ROAS.
56. [F] Google blocks new broad match settings - Relevant Audience - https://www.relevantaudience.com/google-ads-en/google-blocks-new-broad-match-settings-ai-max-migration/ - 2026-08 - Creation blocked from August 3. Migration runs September 1-30 and applies globally.
57. [F] End of Dynamic Search Ads - Dotidot - https://www.dotidot.io/post/end-of-dynamic-search-ads - 2026 - Migrate early to keep control of the defaults.
58. [S] Google expands AI Max text guidelines globally - Search Engine Land (fetch 403) - https://searchengineland.com/google-expands-ai-max-text-guidelines-globally-470294 - 2026 - Global rollout of text guidelines.
59. [S] Google Ads sets mandatory AI Max migration dates - TechWyse - https://www.techwyse.com/?p=77907 - 2026 - Migration starts September 1.

### Language targeting and bilingual structure
60. [F] Google removes campaign-level language targeting (Sept 2026) - TechWyse - https://www.techwyse.com/news/platform-updates/google-ads-removes-language-targeting-search-campaigns-2026 - 2026 - Search now matches on ad and landing page language. For Canadian EN/FR advertisers this means "creative hygiene", not a restructure. PMax keeps the language setting for non-Search channels.
61. [F] Google Ads drops language targeting in September - PPC Land - https://ppc.land/google-ads-drops-language-targeting-in-september-nine-months-past-deadline/ - 2026 - Nine months late. Now extended to PMax Search inventory. Signals are the query, the user's settings, and the ad and landing page language.
62. [F] Google removes language targeting from Search by 2025 - PPC Land - https://ppc.land/google-removes-language-targeting-from-search-campaigns-by-2025/ - 2025-08-18 - Ads can serve across languages. Display and YouTube keep manual targeting.
63. [F] Google Ads in Canada - Meticulosity - https://www.meticulosity.com/blog/google-ads-canada - updated 2026-07-07 - Run EN and FR as separate campaigns or ad groups with their own landing pages. In Québec, bilingual is a legal and cultural expectation.
64. [S] Google's language targeting changes could reshape bilingual strategies - eMarketer (fetch 403) - https://www.emarketer.com/content/google-language-targeting-changes-could-reshape-bilingual-strategies-reduce-advertiser-control - 2026 - Advertisers lose control in Québec. Expect more language mismatches.
65. [S] Google Ads removes language targeting in September - Google Ads Unleashed podcast - https://googleadsunleashed.buzzsprout.com/2163556/episodes/19753557 - 2026 - Practitioner commentary that sees the change as positive.

### Demand Gen, Performance Max, YouTube Shorts creative
66. [F] Demand Gen ad specs - Luis Rijo, PPC Land - https://ppc.land/demand-gen-ad-specs/ - 2024-08-18 - Headline 30, long headline 90, description 90, business name 25. Carousel takes 2-10 cards. Video 16:9, 1:1 or 9:16.
67. [F] Demand Gen ad creative best practices - Store Growers - https://www.storegrowers.com/demand-gen-ad-creative/ - 2026 - Lifestyle beats product-only. Use 5 images per ratio. Hook in the first 3 s. Real footage beats AI video.
68. [F] Google Demand Gen drop June 2026 - Common Thread Co. - https://commonthreadco.com/blogs/coachs-corner/google-demand-gen-drop-june-2026-video-creative-measurement - 2026-06 - Vertical video now auto-resizes to square and landscape. Gemini flags creative issues before launch.
69. [F] 2026 PMax asset reference guide - Integris Design - https://integrisdesign.com/2026-google-ads-performance-max-asset-reference-guide/ - 2026 - 15 H, 5 long H, 5 D. Logo 1:1 and 4:1. Recommended video set: 15 s and 30 s 16:9, 15 s 1:1, 15 s 9:16.
70. [F] PMax creative specs guide - Hawky - https://hawky.ai/blog/performance-max-creative-specs-guide - 2026-04-13 (updated 2026-07-25) - Portrait 4:5 (960x1200). 20 images and 15 videos per asset group. Skipping portrait is a common mistake.
71. [F] Performance Max assets: specs and 9 best practices - Mega Digital - https://megadigital.ai/en/blog/google-performance-max-assets/ - 2025-26 - Add a voiceover. Custom video beats auto-generated slideshows.
72. [F] Best practices for PMax creative assets - Dotidot - https://www.dotidot.io/post/best-practices-for-creative-assets-in-performance-max - 2025 - Keep content in the central 80%. Include at least one headline of 15 characters or fewer. AI images contain errors.
73. [F] Google Ads specs 2026 - Vizup - https://www.tryvizup.com/blog/google-ads-specs-2026-image-video-and-youtube-ad-sizes - 2026 - Overlays above 20%, baked-in buttons and borders trigger rejections.
74. [F] Google ad specs and templates 2026 - The Brief - https://thebrief.ai/blog/google-ad-specs - 2026-01-23 - Consolidated specs for Search, PMax, Display and video.
75. [F] YouTube Shorts ads best practices 2026 - Insense - https://insense.pro/blog/youtube-shorts-ads-best-practices - 2026-09-22 - Viewers swipe away instantly, so the hook must land in 2-3 s. Show the product fast. Captions on. Native feel.
76. [F] YouTube advertising best practices 2026 - Creatify - https://creatify.ai/blog/youtube-advertising-best-practices - 2026 - Design for CTV and Shorts. ABCD. Test at volume.
77. [F] Demand Gen: the underrated campaign for 2026 - Seoteric - https://www.seoteric.com/demand-gen-the-underrated-google-ads-campaign-you-should-be-testing-in-2026/ - 2026 - Better inventory quality and fewer spam leads than Display.
78. [F] Demand Gen campaign ultimate guide - One PPC Agency - https://oneppcagency.co.uk/google-ads/demand-gen-campaigns/ - 2025-26 - Needs 50+ conversions to learn. Choose it when search demand is limited.
79. [F] Validating Google's ABCD framework with AI - Kantar - https://www.kantar.com/de/case-studies/validating-googles-abcd-framework-with-the-power-of-artificial-intelligence - 2024-25 - 11k ads analysed: +30% short-term sales likelihood, +17% long-term brand contribution.
80. [F] YouTube ads: the ABCDs - Kelsey Smigiel, JumpFly - https://www.jumpfly.com/blog/youtube-ads-the-abcds-of-effective-video-ad-creative/ - 2019 (foundational) - Hook within 5 s. Design mobile-first.
81. [S] Core ABCDs of effective creative (PDF) - Google - https://services.google.com/fh/files/misc/core_abcds_of_effective_creative.pdf - n.d. - Brand early and often. Tight framing.
82. [S] Google rolls out brand customization for PMax - Search Engine Land (fetch 403) - https://searchengineland.com/google-brand-customization-performance-max-448055 - 2025 - Brand guidelines (colours, fonts) became the default at campaign level on July 15, 2025.

### Assets (third-party)
83. [F] Understanding callouts and structured snippets in 2025 - Seoteric - https://www.seoteric.com/understanding-google-ads-callouts-and-structured-snippets-in-2025/ - 2025 - Schedule assets and don't repeat headlines.
84. [F] Google ad extensions you should be using - OneDay Agency - https://oneday.agency/blog/google-ad-extensions-you-should-be-using - 2026-06-26 - Ads with 4+ assets outperform. Price and call assets suit high-intent searches.
85. [S] Google Ads best practices 2025 - RedTrack - https://www.redtrack.io/blog/google-ads-best-practices/ - 2025 - Use 8-10 sitelinks with descriptions, each pointing to a distinct page.

### Québec French, OQLF, Bill 96 / Charter of the French language
86. [F] Cabine photographique (GDT record) - OQLF - https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/18083911/cabine-photographique - current - Preferred terms are "cabine photo" and "cabine photographique". "Photobooth" is listed as the English equivalent.
87. [S] Borne photo (GDT, from search snippet) - OQLF - https://vitrinelinguistique.oqlf.gouv.qc.ca/ - current - "Borne photo" is the portable rental unit used at weddings and parties.
88. [F] Fête de Noël (GDT) - OQLF - https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8359255/fete-de-noel - current - "Party de Noël" is discouraged. Use "fête de Noël" or "réception de Noël".
89. [F] Fête de bureau (GDT) - OQLF - https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8360369/fete-de-bureau - current - "Party de bureau" is a discouraged hybrid borrowing.
90. [F] Bar lounge (GDT) - OQLF - https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8872035/bar-lounge - current - "Lounge" is an accepted borrowing (plural "des lounges").
91. [F] Québec's language laws changed this week - DLA Piper - https://www.dlapiper.com/fr-ca/insights/publications/2025/06/quebecs-language-laws-changed-this-week - 2025-06 - In advertising, French must take at least twice the space ("much greater visual impact"). New rules for recognized trademarks.
92. [F] Quebec's new language law changes: is your business compliant? - BLG - https://www.blg.com/fr/insights/2025/ri/quebecs-new-language-law-changes-is-your-business-compliant - 2025 - The twice-the-space rule covers digital ads and social media visuals. Complaints can now be anonymous.
93. [F] Bill 96 amendments part II (signage) - BLG - https://www.blg.com/fr/insights/2024/02/quebec-proposes-amendments-and-clarifications-to-bill-96-requirements-part-ii - 2024-02 - Defines "nettement prédominant" (clearly predominant).
94. [F] New rule: French display mandatory, fines up to $90,000 - Time Out Montréal - https://www.timeout.com/fr/montreal/nouvelles/nouvelle-regle-affichage-en-francais-obligatoire-au-quebec-avec-des-amendes-pouvant-aller-jusqua-90000-060225 - 2025 - Fines of $3k-$30k per day, up to $90k for repeat offences.
95. [F] Exigences linguistiques pour exploiter une entreprise au Québec - Éducaloi - https://educaloi.qc.ca/capsules/exigences-linguistiques-exploiter-une-entreprise-au-quebec/ - 2025 - Advertising must be predominantly French. Businesses with a Québec address must have a French website.
96. [F] Le Québec apporte de grandes modifications à sa loi - Osler - https://www.osler.com/fr/articles/mises-à-jour/le-quebec-apporte-de-grandes-modifications-a-sa-loi-sur-la-langue-francaise/ - 2023-01-11 - The duty to "inform and serve" in French covers web and social media advertising. Creates a private right of action.
97. [F] Projet de loi 96 adopté - McCarthy Tétrault - https://www.mccarthy.ca/fr/references/blogues/consumer-markets-perspectives/le-projet-de-loi-96-modifiant-la-legislation-sur-la-langue-francaise-ete-adopte-comment-votre-entreprise-est-elle-touchee - 2022 - Websites and social media must be in French. Other-language versions cannot be offered on more favourable terms.
98. [F] Bill 96 and websites (PDF) - Lavery - https://www.lavery.ca/fr/publications/4305-afficher-PDF-publication.html - 2022-23 - The OQLF intervenes against businesses established in Québec.
99. [F] Doing business in Canada: advertising - Gowling WLG - https://gowlingwlg.com/fr-ca/insights-resources/guides/2024/doing-business-in-canada-advertising - 2018 (guide) - Competition Act price claims. Québec French requirements.
100. [F] Top 9 SEO practices for Québec - Frenglish - https://www.frenglish.ai/blog/optimize-seo-quebec-consumers - 2025-02-27 - Write French first. No machine translation. Quebecers search with local terms.
101. [F] Marketing au Québec - Ratehub - https://www.ratehub.ca/blogue/marketing-au-quebec/ - 2015 - Recreate rather than translate. Quebecers value pride and success.
102. [F] Successful marketing in Québec requires a localized approach - WARC - https://www.warc.com/content/feed/successful-marketing-in-quebec-requires-a-localized-approach/en-GB/8675 - 2023-09-28 - Headline only (paywalled): localize, don't translate.
103. [S] Bill 96 and trademarks, public signage and advertising - Fasken (fetch 403) - https://www.fasken.com/fr/knowledge/2022/06/bill-96-and-trademarks-public-signage-and-commercial-advertising - 2022 - Commercial advertising must be in French, with French clearly predominant.
104. [S] A comparative study of English in advertising in France and Quebec - EBSCO journal article - https://www.ebsco.com/articles/language-and-linguistics/5a4e364b-c662-52b9-b1c8-9c999e3f094c - n.d. - France's ads use far more English than Québec's. Do not import France-style anglicisms.

### Market context: events, weddings, competitors, Évenox
105. [F] Évenox home page - Évenox - https://evenox.ca - 2026 - "Clé en main", 1,000+ events since 2022, Google rating 4.8/5, reply within 24 h, online booking. Covers Rive-Nord, Laval and Montréal.
106. [F] Évenox listing - WeddingWire.ca - https://www.weddingwire.ca/event-rentals/evenox--e76012 - 2026 - Based in Sainte-Thérèse, about 1,000 clients. Delivery, setup and pickup included. NOTE: the listing shows photobooth "from $599", which conflicts with the Signature 650$ package (fix the listing).
107. [F] Photo booth rental Montréal - Snaptique - https://www.snaptique.ca/montreal - 2026 - Premium competitor at $695-$1,000 base with a 25% deposit. "4,000+ events".
108. [S] Photobooth directory listings Montréal (Sorriso, Marabooth, Hartistic) - Vistek / WeddingWire (search snippets) - https://www.vistek.ca/community/directory/listing/79276 - 2025-26 - Low-end competitors start around $500 and advertise as the "cheapest", which is why Évenox needs price filtering.
109. [S] Deco Marquee (light-up letters, Toronto/Montréal) - eventplanner.co.uk - https://eventplanner.co.uk/directory/13084_deco-marquee.html - n.d. - A direct marquee-letter competitor.
110. [F] How party rental businesses use paid ads - Event Rental Systems - https://eventrentalsystems.com/how-party-rental-businesses-can-use-paid-ads-to-drive-more-bookings/ - 2026-03-23 - Google first, then Meta. Push campaigns in season. Track ROAS.
111. [F] Party Centre Google Ads case study - seoplus+ - https://seoplus.com/case-studies/google-ads-leads-party-rentals/ - 2025 - GTA party rental company: +417% conversions, -82% CPA.
112. [F] How to transform your corporate event - TapSnap - https://blog.tapsnap.net/how-to-totally-transform-your-corporate-event - n.d. - Corporate booth pitches: branding, sponsors, social reach.
113. [F] Number of marriages remains low in 2025 - Statistique Québec - https://statistique.quebec.ca/fr/communique/nombre-mariages-celebres-demeure-faible-2025 - 2026-09-09 - About 23,000 marriages. Peak dates are the last 3 Saturdays of August and the first Saturday of September.
114. [F] Coût d'un mariage au Québec - Narcity / Wealthsimple - https://www.narcity.com/fr/cout-mariage-quebec-invites-wealthsimple - 2026-08-29 - Median Québec wedding costs $10k-$20k and 47% spend under $10k, so the market is very price-sensitive. Filter hard.
115. [F] 2026 event trends - VenueScanner - https://www.venuescanner.com/blog/2026-event-trends-what-corporate-events-are-actually-growing - 2026 - Award ceremonies +57%. Christmas party value +5%. Fewer events, more spent per head.
116. [F] Company Christmas party cost 2026 - Naboo - https://www.naboo.app/en-us/blog/company-christmas-party-cost-2026 - 2026 - Cost per head rose 11%. December venues fill from September.

Additional pages read and used for context, not counted above to avoid padding: Confetti "Budget-conscious holiday parties 2026" (withconfetti.com, 2026-07-01: 70%+ expect costs to rise); DJ Will Gill "Corporate event entertainment budget guide 2026" (planners protect entertainment budgets); Tripleseat "5 tips for holiday party venue" (2024-10); Style Me Pretty "How wedding vendors can get more clients online in 2025" (2025-10-04: Google for high intent, Meta for retargeting); Curate "The Knot advertising cost" (vendors complain of low-quality leads); [S] Hospitality Tech/Tripleseat (51% of planners start 1-3 months ahead, Friday is the top day, 74% rebook the same venue). **Total distinct items consumed: 122 (116 numbered + 6 listed).**

---

## (b) Synthesis: the rules for Évenox

### 1. RSA construction
- **Use all 15 headlines and 4 descriptions**, and run 2 RSAs per ad group (a second RSA adds about +6.6% conversions, src 29). Each headline needs a distinct job: keyword (3-4), price or qualifier (2-3), proof (4.8/5, 1,000+ events), service (turnkey, 24 h), geography, CTA.
- **Short wins.** Headlines under 20 characters had the lowest CPA. Aim for descriptions of about 61-86 characters. Write in **sentence case**, which beat Title Case by 3.7x on CPA (src 26, 27). The FR copy below uses sentence case. The EN copy uses sentence case except the first keyword headline.
- **Ad strength is not a KPI.** It plays no part in the auction (src 2), and "Average" ads had the best CPA (src 26-28). Do not add filler to chase "Excellent".
- **Partial pinning only:** pin one asset per ad group (the keyword in H1, or the price line in H2), never all three positions (src 26, 29, 31). Brand campaign: pin "Évenox | Site officiel" to H1.
- No "!" in headlines, no ALL CAPS gimmicks, no repeated words (src 15). Keep "LOVE" and "MR & MRS" because they are product names. If they get flagged, swap in "Vos initiales en lumière".

### 2. Filtering price shoppers before the click
- **Show a real price in the ad** (src 42, 43). One case cut CPA from $750 to $300. The CTR loss is intended.
- Évenox brand rule: **no "à partir de", "dès" or "From"**. Use exact package prices ("Forfait lounge 850 $") or closed ranges ("Forfaits 650 $ à 1 495 $"). Price assets: set **qualifier = none** (src 7, 24).
- Use qualifier words that read as premium: "haut de gamme", "clé en main", "entreprises exigeantes", "conseiller dédié".
- Market reality: 47% of Québec couples spend under $10k (src 114), and low-end booth sellers advertise "the cheapest" at about $500 (src 108). The wedding ad groups need the hardest filtering: price in H2, plus negatives.
- **Negative keyword themes (FR and EN):** pas cher, bas prix, moins cher, rabais, aubaine, gratuit, usagé, à vendre, acheter, fabriquer, DIY, Kijiji, Marketplace, Dollarama, emploi, cheap, discount, free, used, for sale, buy, how to make.
- **Lead form asset** (src 9-12): choose "More qualified" and add mandatory qualifying questions: (1) event type: corporate / wedding / other; (2) date; (3) guest count; (4) budget: <1 000 $ / 1 000-2 500 $ / 2 500-5 000 $ / 5 000 $+, with the last two answers marked as qualifying. Turn on OTP phone verification. Send leads by webhook to the CRM. Report "Lead form - Response qualified" as the primary conversion.

### 3. AI-generated copy (AI Max / text customization / PMax)
- In September 2026, accounts using automatically created assets were moved to AI Max with **text customization ON** (src 53-56). **Check every Évenox Search campaign for the AI Max label now.** Turn text customization OFF in the brand and wedding campaigns. If you test it anywhere, do it in one corporate campaign with guidelines in place.
- Why: the AI optimises for CTR, not brand. It pulls copy from your site (it could lift the "$599" from the WeddingWire listing or the site) and it cannot stop price-based assets (src 16, 49, 51).
- **Text guidelines** (up to 25 term exclusions + 40 restrictions of 300 characters each; exclusions apply per language, so list both FR and EN, src 16, 50):
  - Term exclusions: `à partir de`, `dès`, `rabais`, `pas cher`, `aubaine`, `solde`, `meilleur prix`, `économisez`, `%`, `party`, `starting at`, `from $`, `cheap`, `discount`, `sale`, `deal`, `lowest price`, `save`.
  - Messaging restrictions: "Ne jamais suggérer de rabais en pourcentage ni de prix « à partir de »." / "Never imply discounts or percentage savings." / "Mentionner uniquement les prix exacts des forfaits : lounge 850 $, cocktail 1 100 $ à 1 400 $, gala 2 900 $, photobooth Signature 650 $, Prestige 825 $, Iconic 1 095 $, Legend 1 495 $." / "Ton professionnel, vouvoiement, français du Québec." / "Ne pas promettre de livraison gratuite sans condition."
  - Add URL exclusions (blog, careers, FAQ, low-ticket rental pages such as inflatables) if final URL expansion is on.

### 4. Assets
- **Sitelinks:** 8 at account level, each with 2 description lines of 35 characters or fewer (src 4).
- **Callouts:** 8-10 that add information the headlines don't (src 5, 83).
- **Structured snippets:** headers "Types", "Catalogue de services", "Styles". Each needs 4+ values that really belong under that header (src 6).
- **Price assets:** the Service tiers type in French, with no qualifier (src 7).
- **Image assets (Search):** 1:1 plus 1.91:1, at least 4 unique images, real Évenox setups (lit letters at a gala, lounge, booth with guests). **No text or logo overlays** (src 8). This needs an account at least 60 days old with a clean policy history.
- **Business name** "Évenox" and logo: complete advertiser verification first. Google cites +8% conversions (src 1, 14).
- **Promotion assets: do not use.** They only express % or $-off discounts and occasions (src 13), which breaks the brand rule. Put incentives (surclassement offert, accessoire bonus, livraison incluse aux forfaits) in callouts and descriptions instead.
- **Call asset** during office hours (Mon-Fri 12-18, Sat-Sun 9-13) and **location asset** via the Business Profile (Sainte-Thérèse).

### 5. Demand Gen and Performance Max creative
- **Specs:** images 1.91:1 (1200x628), 1:1 (1200x1200) and 4:5 (960x1200), JPG/PNG up to 5 MB, content inside the central 80%. Logo 1:1 (1200x1200) plus 4:1 (1200x300). Text: headlines 30, long headlines 90, descriptions 90, business name 25. Video on YouTube, at least 10 s, in 16:9, 1:1 and 9:16 (src 66, 69, 70, 72-74).
- **Volume:** at least 3 per aspect ratio, one video in each orientation (src 20, 21), ideally 15-20 images. **Lifestyle beats product-only** (src 67): show guests interacting with the letters or booth.
- **Shorts concept (9:16, 15-30 s, sound on, captions):** (1) 0-2 s: lights off, then the 4-ft letters switch on at a gala, voiceover "Votre nom en lumière." (2) Time-lapse of the crew setting up a lounge in under 60 s, "Livré, installé, repris." (3) Photobooth with guest reactions and the printed strip with the company logo. End card with the Évenox logo and "Réservez votre date". Follow ABCD, with Connection first for Shorts (src 22, 75). Use real footage rather than AI video (src 67, 72).
- In PMax, fill in **brand guidelines** (Montserrat or Playfair Display, plus hex colours) so auto-generated assets stay on brand (src 25, 82). Do not leave video empty, because Google auto-builds slideshows that underperform (src 71).
- Images with text in Québec: **French must be at least twice the size of any other language** (src 91, 92). Simplest approach: separate FR and EN creatives.

### 6. Québec French copy
- **Write it, don't translate it** (src 100, 101). Use **vouvoiement** for this professional, premium B2B and wedding audience.
- Typography: "850 $" (space before $), "1 495 $" (space as the thousands separator), "4,8/5" (decimal comma), "24 h", "Montréal" and "Québec" with accents. Use **« soumission »**, the usual Québec word for a quote, rather than France's « devis ».
- Terminology (OQLF, src 86-90):
  - "Party de Noël" and "party de bureau" are discouraged. In copy, use **fête de Noël**, **réception des Fêtes** or **fête de fin d'année**. Keep "party de Noël" as a **keyword only**, because people search it.
  - **"Lounge"** is accepted.
  - **"Photobooth"** is the English term. Pair it with **"borne photo"** in at least one headline per booth ad group.
  - Use "lettres lumineuses" and "4 pi" (Québec writes feet as "pi").
- Avoid France-isms ("devis", "top", "kiffer", "soirée afterwork"). France-based advertising uses far more anglicisms than Québec's (src 104).

### 7. Bill 96 / Charter of the French language
- Évenox has a Québec establishment, so the OQLF can act on it (src 98). Commercial advertising, the website and social media must be in French. Another-language version is allowed but **not on more favourable terms** (src 95-97). Fines are $3k-$30k per day, more for repeat offences, and private lawsuits are possible (src 94, 96).
- In practice: the FR campaign is the default and runs everywhere. The EN campaign is limited to Montréal-island corporate intent, and its budget and serving are **never above FR**. Every EN landing page has a full FR equivalent. Visuals that mix languages keep French at twice the space.

### 8. Bilingual campaign structure (after language targeting was removed, late September 2026)
- Google no longer uses a language setting on Search. It matches on **the language of the ad plus the landing page**, and on the user's languages and query (src 60-62). Language therefore has to be built into the creative and the URLs:
  - **Separate campaigns**, e.g. `FR | Corporatif | Lettres`, `EN | Corporate MTL | Marquee`. FR ads go to `/fr/` pages and EN ads to `/en/` pages, with **no mixed-language ad groups** (src 63).
  - Keep keyword languages separate as well: FR keywords in FR campaigns, EN keywords in EN campaigns. Add the other language's keywords as negatives where useful ("rental" in FR; "location" in EN), because ads now serve across languages (src 62).
  - Check search terms and geography every week after the change. For brand queries, "Évenox" looks the same in both languages, so Google will decide by the user's language. Running both FR and EN brand RSAs is fine.
  - Demand Gen, YouTube and Display keep manual language targeting (src 60, 62), so set it explicitly there.

### 9. Seasonality hooks for copy
- Corporate holiday season: December venues fill from September, and Friday is the top day (src 116, [S] Tripleseat). Launch "Décembre se réserve tôt" copy in **early October**, which means now.
- Weddings peak on the last 3 Saturdays of August and the first Saturday of September (src 113), so the wedding search window is roughly December to May. "Les samedis d'été partent vite" is a truthful scarcity line.

### 10. Points to verify before launch (assumptions in the copy)
- "Livraison incluse aux forfaits", "préposé inclus selon forfait", "surclassement offert selon forfait" and "accessoire bonus offert selon forfait" are worded to match the allowed incentives. Confirm the exact threshold and conditions, and state them on the landing page.
- The cocktail package is split into two price-asset rows (1 100 $ and 1 400 $). Rename them to the real tier names.
- "LOVE / MR & MRS / initiales" assumes the letter catalogue covers these. Check the 4-ft size per letter. No price is shown for letters because none was provided. Add one (e.g. "Lettres 4 pi : 4 lettres X $") to filter harder.
- Update the WeddingWire listing ("photobooth from $599") so it doesn't contradict the 650 $ Signature package or the brand rule.

---

## (c) Ready-to-paste ad copy (all counts verified with Python `len()`; FR = Québec French, EN = corporate Montréal)

### Groupe d'annonces : Lettres lumineuses corporatif

- URL finale : evenox.ca/ (page lettres lumineuses - corporatif)
- Chemins FR : /lettres/corporatif  |  Chemins EN : /marquee/corporate
- Pinning suggéré : H1 ou H2 pour pinning partiel : H1 'Lettres lumineuses 4 pi' (pos. 1) (tout le reste non épinglé)

**Titres FR (Québec) - 15**

| # | Texte | Car. |
|---|---|---|
| 1 | Lettres lumineuses 4 pi | 23/30 |
| 2 | Location lettres géantes | 24/30 |
| 3 | Votre marque en lumière | 23/30 |
| 4 | Pour galas et lancements | 24/30 |
| 5 | Location haut de gamme | 22/30 |
| 6 | Installation clé en main | 24/30 |
| 7 | Montréal, Laval, Rive-Nord | 26/30 |
| 8 | Événements d'entreprise | 23/30 |
| 9 | Soumission en 24 h | 18/30 |
| 10 | Note Google 4,8/5 | 17/30 |
| 11 | Plus de 1 000 événements | 24/30 |
| 12 | Activations de marque | 21/30 |
| 13 | Un décor qui fait parler | 24/30 |
| 14 | Service premium sans tracas | 27/30 |
| 15 | Réservez vos lettres 4 pi | 25/30 |

**Descriptions FR - 4**

| # | Texte | Car. |
|---|---|---|
| 1 | Lettres lumineuses de 4 pi livrées et installées par notre équipe. Soumission en 24 h. | 86/90 |
| 2 | Galas, lancements, fêtes de fin d'année : mettez votre marque en lumière, clé en main. | 86/90 |
| 3 | Montréal, Laval, Rive-Nord, Laurentides et Québec. Plus de 1 000 événements réalisés. | 85/90 |
| 4 | Location haut de gamme pour entreprises exigeantes. Surclassement offert selon forfait. | 87/90 |

**Headlines EN (corporate Montréal) - 15**

| # | Texte | Car. |
|---|---|---|
| 1 | 4-ft Marquee Letters | 20/30 |
| 2 | Light-Up Letter Rental | 22/30 |
| 3 | Put your brand in lights | 24/30 |
| 4 | For galas and launches | 22/30 |
| 5 | Premium event rentals | 21/30 |
| 6 | Turnkey installation | 20/30 |
| 7 | Montréal, Laval, North Shore | 28/30 |
| 8 | Corporate events | 16/30 |
| 9 | Quote within 24 hours | 21/30 |
| 10 | Rated 4.8/5 on Google | 21/30 |
| 11 | 1,000+ events delivered | 23/30 |
| 12 | Brand activations | 17/30 |
| 13 | A backdrop people remember | 26/30 |
| 14 | Premium, stress-free service | 28/30 |
| 15 | Book your marquee letters | 25/30 |

**Descriptions EN - 4**

| # | Texte | Car. |
|---|---|---|
| 1 | 4-ft illuminated letters delivered and installed by our crew. Quote within 24 hours. | 84/90 |
| 2 | Galas, launches and holiday parties: put your brand in lights with turnkey service. | 83/90 |
| 3 | Serving Montréal, Laval, the North Shore, Laurentians and Québec City. 1,000+ events. | 85/90 |
| 4 | Premium rentals for demanding corporate teams. Free upgrade on select packages. | 79/90 |

### Groupe d'annonces : Lettres lumineuses mariage

- URL finale : evenox.ca/ (page lettres lumineuses - mariage)
- Chemins FR : /lettres/mariage  |  Chemins EN : /marquee/wedding
- Pinning suggéré : H1 'Lettres lumineuses mariage' (pos. 1) en pinning partiel (tout le reste non épinglé)

**Titres FR (Québec) - 15**

| # | Texte | Car. |
|---|---|---|
| 1 | Lettres lumineuses mariage | 26/30 |
| 2 | Lettres géantes de 4 pi | 23/30 |
| 3 | Vos initiales en lumière | 24/30 |
| 4 | LOVE, MR & MRS, vos initiales | 29/30 |
| 5 | Location haut de gamme | 22/30 |
| 6 | Installation clé en main | 24/30 |
| 7 | Montréal, Laval, Laurentides | 28/30 |
| 8 | Un décor de mariage élégant | 27/30 |
| 9 | Soumission en 24 h | 18/30 |
| 10 | Note Google 4,8/5 | 17/30 |
| 11 | Plus de 1 000 événements | 24/30 |
| 12 | Réservez votre date | 19/30 |
| 13 | Photos de mariage mémorables | 28/30 |
| 14 | Livrées, montées, reprises | 26/30 |
| 15 | Service premium sans tracas | 27/30 |

**Descriptions FR - 4**

| # | Texte | Car. |
|---|---|---|
| 1 | Lettres lumineuses de 4 pi pour votre mariage, livrées et installées par notre équipe. | 86/90 |
| 2 | Initiales, LOVE ou MR & MRS : un décor élégant qui sublime vos photos de mariage. | 81/90 |
| 3 | Les samedis d'été partent vite. Vérifiez la disponibilité de votre date dès aujourd'hui. | 88/90 |
| 4 | Clé en main à Montréal, Laval, Rive-Nord, Laurentides et Québec. Soumission en 24 h. | 84/90 |

**Headlines EN (corporate Montréal) - 15**

| # | Texte | Car. |
|---|---|---|
| 1 | Wedding Marquee Letters | 23/30 |
| 2 | 4-ft light-up letters | 21/30 |
| 3 | Your initials in lights | 23/30 |
| 4 | LOVE, MR & MRS, initials | 24/30 |
| 5 | Premium event rentals | 21/30 |
| 6 | Turnkey installation | 20/30 |
| 7 | Montréal, Laval, Laurentians | 28/30 |
| 8 | An elegant wedding backdrop | 27/30 |
| 9 | Quote within 24 hours | 21/30 |
| 10 | Rated 4.8/5 on Google | 21/30 |
| 11 | 1,000+ events delivered | 23/30 |
| 12 | Check your date | 15/30 |
| 13 | Unforgettable wedding photos | 28/30 |
| 14 | Delivered, set up, picked up | 28/30 |
| 15 | Premium, stress-free service | 28/30 |

**Descriptions EN - 4**

| # | Texte | Car. |
|---|---|---|
| 1 | 4-ft illuminated letters for your wedding, delivered and installed by our crew. | 79/90 |
| 2 | Initials, LOVE or MR & MRS: an elegant backdrop that makes your wedding photos shine. | 85/90 |
| 3 | Summer Saturdays book up fast. Check availability for your wedding date today. | 78/90 |
| 4 | Turnkey service in Montréal, Laval, North Shore, Laurentians and Québec. 24-hour quote. | 87/90 |

### Groupe d'annonces : Party de Noël corporatif

- URL finale : evenox.ca/ (page fêtes de fin d'année / corporatif)
- Chemins FR : /fetes/entreprise  |  Chemins EN : /holiday-party/corporate
- Pinning suggéré : H1 'Fête de Noël d'entreprise' (pos. 1); H2 libre (tout le reste non épinglé)

**Titres FR (Québec) - 15**

| # | Texte | Car. |
|---|---|---|
| 1 | Fête de Noël d'entreprise | 25/30 |
| 2 | Réception des Fêtes | 19/30 |
| 3 | Décor des Fêtes corporatif | 26/30 |
| 4 | Lettres lumineuses et lounge | 28/30 |
| 5 | Photobooth pour vos employés | 28/30 |
| 6 | Forfait gala 2 900 $ | 20/30 |
| 7 | Mobilier cocktail et lounge | 27/30 |
| 8 | Décembre se réserve tôt | 23/30 |
| 9 | Réservez votre date | 19/30 |
| 10 | Soumission en 24 h | 18/30 |
| 11 | Montréal, Laval, Rive-Nord | 26/30 |
| 12 | Note Google 4,8/5 | 17/30 |
| 13 | Installation par nos équipes | 28/30 |
| 14 | Une soirée à votre image | 24/30 |
| 15 | Surclassement offert | 20/30 |

**Descriptions FR - 4**

| # | Texte | Car. |
|---|---|---|
| 1 | Lettres lumineuses, photobooth et mobilier lounge pour votre fête de Noël d'entreprise. | 87/90 |
| 2 | Les vendredis de décembre partent vite. Réservez tôt votre décor des Fêtes clé en main. | 87/90 |
| 3 | Forfaits lounge 850 $, cocktail 1 100 $ à 1 400 $ et gala 2 900 $. Soumission en 24 h. | 86/90 |
| 4 | Livraison, installation et reprise par notre équipe. Surclassement offert selon forfait. | 88/90 |

**Headlines EN (corporate Montréal) - 15**

| # | Texte | Car. |
|---|---|---|
| 1 | Corporate Holiday Parties | 25/30 |
| 2 | Turnkey holiday party decor | 27/30 |
| 3 | Marquee letters and lounge | 26/30 |
| 4 | Photo booth for your team | 25/30 |
| 5 | Gala package $2,900 | 19/30 |
| 6 | Cocktail and lounge furniture | 29/30 |
| 7 | December books up early | 23/30 |
| 8 | Reserve your date | 17/30 |
| 9 | Quote within 24 hours | 21/30 |
| 10 | Montréal, Laval, North Shore | 28/30 |
| 11 | Rated 4.8/5 on Google | 21/30 |
| 12 | Installed by our crew | 21/30 |
| 13 | An evening on brand | 19/30 |
| 14 | Free upgrade available | 22/30 |
| 15 | Premium event rentals | 21/30 |

**Descriptions EN - 4**

| # | Texte | Car. |
|---|---|---|
| 1 | Marquee letters, photo booth and lounge furniture for your corporate holiday party. | 83/90 |
| 2 | December Fridays book up fast. Reserve your turnkey holiday party decor early. | 78/90 |
| 3 | Lounge $850, cocktail $1,100 to $1,400, gala $2,900. Detailed quote within 24 hours. | 84/90 |
| 4 | Delivery, setup and pickup handled by our crew. Free upgrade on select packages. | 80/90 |

### Groupe d'annonces : Mobilier lounge/cocktail événement

- URL finale : evenox.ca/ (page mobilier événementiel / forfaits)
- Chemins FR : /mobilier/forfaits  |  Chemins EN : /furniture/packages
- Pinning suggéré : H2 = une ligne de prix ('Forfait lounge 850 $' ou 'Cocktail 1 100 $ à 1 400 $') en pinning partiel pour filtrer (tout le reste non épinglé)

**Titres FR (Québec) - 15**

| # | Texte | Car. |
|---|---|---|
| 1 | Mobilier lounge événementiel | 28/30 |
| 2 | Forfait lounge 850 $ | 20/30 |
| 3 | Cocktail 1 100 $ à 1 400 $ | 26/30 |
| 4 | Forfait gala 2 900 $ | 20/30 |
| 5 | Location mobilier cocktail | 26/30 |
| 6 | Livraison et installation | 25/30 |
| 7 | Forfaits clés en main | 21/30 |
| 8 | Galas, cocktails, lancements | 28/30 |
| 9 | Mobilier haut de gamme | 22/30 |
| 10 | Soumission en 24 h | 18/30 |
| 11 | Montréal, Laval, Rive-Nord | 26/30 |
| 12 | Note Google 4,8/5 | 17/30 |
| 13 | Plus de 1 000 événements | 24/30 |
| 14 | Un lounge à votre image | 23/30 |
| 15 | Réservez votre forfait | 22/30 |

**Descriptions FR - 4**

| # | Texte | Car. |
|---|---|---|
| 1 | Forfaits lounge 850 $, cocktail 1 100 $ à 1 400 $ et gala 2 900 $, clés en main. | 80/90 |
| 2 | Mobilier haut de gamme livré, installé et repris par notre équipe. Soumission en 24 h. | 86/90 |
| 3 | Cocktails dînatoires, galas, lancements et mariages : un décor complet, sans tracas. | 84/90 |
| 4 | Montréal, Laval, Rive-Nord, Laurentides et Québec. Surclassement offert selon forfait. | 86/90 |

**Headlines EN (corporate Montréal) - 15**

| # | Texte | Car. |
|---|---|---|
| 1 | Event Lounge Furniture | 22/30 |
| 2 | Lounge package $850 | 19/30 |
| 3 | Cocktail $1,100 to $1,400 | 25/30 |
| 4 | Gala package $2,900 | 19/30 |
| 5 | Cocktail furniture rental | 25/30 |
| 6 | Delivery and setup | 18/30 |
| 7 | Turnkey packages | 16/30 |
| 8 | Galas, cocktails, launches | 26/30 |
| 9 | Premium event furniture | 23/30 |
| 10 | Quote within 24 hours | 21/30 |
| 11 | Montréal, Laval, North Shore | 28/30 |
| 12 | Rated 4.8/5 on Google | 21/30 |
| 13 | 1,000+ events delivered | 23/30 |
| 14 | A lounge that fits your brand | 29/30 |
| 15 | Reserve your package | 20/30 |

**Descriptions EN - 4**

| # | Texte | Car. |
|---|---|---|
| 1 | Lounge $850, cocktail $1,100 to $1,400 and gala $2,900 packages, fully turnkey. | 79/90 |
| 2 | Premium furniture delivered, set up and picked up by our crew. Quote within 24 hours. | 85/90 |
| 3 | Cocktail receptions, galas, launches and weddings: a complete look, zero hassle. | 80/90 |
| 4 | Montréal, Laval, North Shore, Laurentians, Québec City. Free upgrade on select packages. | 88/90 |

### Groupe d'annonces : Photobooth corporatif

- URL finale : evenox.ca/ (page photobooth - corporatif)
- Chemins FR : /photobooth/entreprise  |  Chemins EN : /photo-booth/corporate
- Pinning suggéré : H2 = 'Forfaits 650 $ à 1 495 $' (pinning partiel, filtre budget) (tout le reste non épinglé)

**Titres FR (Québec) - 15**

| # | Texte | Car. |
|---|---|---|
| 1 | Photobooth corporatif | 21/30 |
| 2 | Borne photo pour entreprise | 27/30 |
| 3 | Forfaits 650 $ à 1 495 $ | 24/30 |
| 4 | Photos à l'image de la marque | 29/30 |
| 5 | Votre logo sur chaque photo | 27/30 |
| 6 | Galas, congrès, Noël | 20/30 |
| 7 | Activations de marque | 21/30 |
| 8 | Partage numérique instantané | 28/30 |
| 9 | Installation clé en main | 24/30 |
| 10 | Soumission en 24 h | 18/30 |
| 11 | Montréal, Laval, Rive-Nord | 26/30 |
| 12 | Note Google 4,8/5 | 17/30 |
| 13 | Plus de 1 000 événements | 24/30 |
| 14 | Forfait Legend 1 495 $ | 22/30 |
| 15 | Réservez votre photobooth | 25/30 |

**Descriptions FR - 4**

| # | Texte | Car. |
|---|---|---|
| 1 | Photobooth Signature 650 $, Prestige 825 $, Iconic 1 095 $ ou Legend 1 495 $. | 77/90 |
| 2 | Votre logo et vos couleurs sur chaque photo. Idéal pour galas, congrès et fêtes de Noël. | 88/90 |
| 3 | Livraison, installation et préposé inclus selon forfait. Soumission détaillée en 24 h. | 86/90 |
| 4 | Montréal, Laval, Rive-Nord, Laurentides et Québec. Accessoire bonus offert selon forfait. | 89/90 |

**Headlines EN (corporate Montréal) - 15**

| # | Texte | Car. |
|---|---|---|
| 1 | Corporate Photo Booth | 21/30 |
| 2 | Branded photo booth rental | 26/30 |
| 3 | Packages $650 to $1,495 | 23/30 |
| 4 | Your logo on every photo | 24/30 |
| 5 | Galas, conferences, holidays | 28/30 |
| 6 | Brand activations | 17/30 |
| 7 | Instant digital sharing | 23/30 |
| 8 | Turnkey installation | 20/30 |
| 9 | Quote within 24 hours | 21/30 |
| 10 | Montréal, Laval, North Shore | 28/30 |
| 11 | Rated 4.8/5 on Google | 21/30 |
| 12 | 1,000+ events delivered | 23/30 |
| 13 | Legend package $1,495 | 21/30 |
| 14 | Premium event rentals | 21/30 |
| 15 | Book your photo booth | 21/30 |

**Descriptions EN - 4**

| # | Texte | Car. |
|---|---|---|
| 1 | Photo booth packages: Signature $650, Prestige $825, Iconic $1,095, Legend $1,495. | 82/90 |
| 2 | Your logo and colours on every photo. Ideal for galas, conferences and holiday parties. | 87/90 |
| 3 | Delivery, setup and attendant included per package. Detailed quote within 24 hours. | 83/90 |
| 4 | Montréal, Laval, North Shore, Laurentians, Québec City. Bonus add-on on select packages. | 88/90 |

### Groupe d'annonces : Photobooth mariage

- URL finale : evenox.ca/ (page photobooth - mariage)
- Chemins FR : /photobooth/mariage  |  Chemins EN : /photo-booth/wedding
- Pinning suggéré : H2 = 'Forfaits 650 $ à 1 495 $' (pinning partiel) (tout le reste non épinglé)

**Titres FR (Québec) - 15**

| # | Texte | Car. |
|---|---|---|
| 1 | Photobooth mariage | 18/30 |
| 2 | Borne photo pour mariage | 24/30 |
| 3 | Forfaits 650 $ à 1 495 $ | 24/30 |
| 4 | Forfait Signature 650 $ | 23/30 |
| 5 | Forfait Prestige 825 $ | 22/30 |
| 6 | Souvenirs pour vos invités | 26/30 |
| 7 | Impressions personnalisées | 26/30 |
| 8 | Installation clé en main | 24/30 |
| 9 | Réservez votre date | 19/30 |
| 10 | Soumission en 24 h | 18/30 |
| 11 | Montréal, Laval, Laurentides | 28/30 |
| 12 | Note Google 4,8/5 | 17/30 |
| 13 | Plus de 1 000 événements | 24/30 |
| 14 | Un photobooth élégant | 21/30 |
| 15 | Accessoire bonus offert | 23/30 |

**Descriptions FR - 4**

| # | Texte | Car. |
|---|---|---|
| 1 | Photobooth Signature 650 $, Prestige 825 $, Iconic 1 095 $ ou Legend 1 495 $. | 77/90 |
| 2 | Impressions à vos noms et à votre date : un souvenir élégant pour chacun de vos invités. | 88/90 |
| 3 | Les samedis d'été partent vite. Vérifiez la disponibilité de votre date dès aujourd'hui. | 88/90 |
| 4 | Livraison et installation par notre équipe à Montréal, Laval, Rive-Nord et Laurentides. | 87/90 |

**Headlines EN (corporate Montréal) - 15**

| # | Texte | Car. |
|---|---|---|
| 1 | Wedding Photo Booth | 19/30 |
| 2 | Elegant photo booth rental | 26/30 |
| 3 | Packages $650 to $1,495 | 23/30 |
| 4 | Signature package $650 | 22/30 |
| 5 | Prestige package $825 | 21/30 |
| 6 | Keepsakes for your guests | 25/30 |
| 7 | Custom wedding prints | 21/30 |
| 8 | Turnkey installation | 20/30 |
| 9 | Check your date | 15/30 |
| 10 | Quote within 24 hours | 21/30 |
| 11 | Montréal, Laval, Laurentians | 28/30 |
| 12 | Rated 4.8/5 on Google | 21/30 |
| 13 | 1,000+ events delivered | 23/30 |
| 14 | Premium event rentals | 21/30 |
| 15 | Bonus add-on available | 22/30 |

**Descriptions EN - 4**

| # | Texte | Car. |
|---|---|---|
| 1 | Photo booth packages: Signature $650, Prestige $825, Iconic $1,095, Legend $1,495. | 82/90 |
| 2 | Prints with your names and date: an elegant keepsake for every one of your guests. | 82/90 |
| 3 | Summer Saturdays book up fast. Check availability for your wedding date today. | 78/90 |
| 4 | Delivered and installed by our crew in Montréal, Laval, North Shore and Laurentians. | 84/90 |

### Groupe d'annonces : Brand Évenox

- URL finale : evenox.ca/
- Chemins FR : /location/evenements  |  Chemins EN : /rentals/events
- Pinning suggéré : H1 'Évenox | Site officiel' pin en position 1 (protection de marque) (tout le reste non épinglé)

**Titres FR (Québec) - 15**

| # | Texte | Car. |
|---|---|---|
| 1 | Évenox | Site officiel | 22/30 |
| 2 | Évenox location événementielle | 30/30 |
| 3 | Location clé en main | 20/30 |
| 4 | Lettres lumineuses 4 pi | 23/30 |
| 5 | Photobooth et borne photo | 25/30 |
| 6 | Mobilier lounge et cocktail | 27/30 |
| 7 | Note Google 4,8/5 | 17/30 |
| 8 | Plus de 1 000 événements | 24/30 |
| 9 | Soumission en 24 h | 18/30 |
| 10 | Réservation en ligne 24/7 | 25/30 |
| 11 | Mariages et entreprises | 23/30 |
| 12 | Montréal, Laval, Rive-Nord | 26/30 |
| 13 | Basés à Sainte-Thérèse | 22/30 |
| 14 | Service premium sans tracas | 27/30 |
| 15 | Réservez votre date | 19/30 |

**Descriptions FR - 4**

| # | Texte | Car. |
|---|---|---|
| 1 | Location événementielle haut de gamme : lettres lumineuses, photobooth et mobilier. | 83/90 |
| 2 | Plus de 1 000 événements depuis 2022, note Google de 4,8/5. Soumission en 24 h. | 79/90 |
| 3 | Livraison, installation et reprise par notre équipe. Réservation en ligne en tout temps. | 88/90 |
| 4 | Montréal, Laval, Rive-Nord, Laurentides, Québec et Lévis. Mariages et entreprises. | 82/90 |

**Headlines EN (corporate Montréal) - 15**

| # | Texte | Car. |
|---|---|---|
| 1 | Évenox | Official Site | 22/30 |
| 2 | Évenox Event Rentals | 20/30 |
| 3 | Turnkey event rentals | 21/30 |
| 4 | 4-ft Marquee Letters | 20/30 |
| 5 | Photo booth rentals | 19/30 |
| 6 | Lounge and cocktail furniture | 29/30 |
| 7 | Rated 4.8/5 on Google | 21/30 |
| 8 | 1,000+ events delivered | 23/30 |
| 9 | Quote within 24 hours | 21/30 |
| 10 | Book online 24/7 | 16/30 |
| 11 | Weddings and corporate | 22/30 |
| 12 | Montréal, Laval, North Shore | 28/30 |
| 13 | Based in Sainte-Thérèse | 23/30 |
| 14 | Premium, stress-free service | 28/30 |
| 15 | Reserve your date | 17/30 |

**Descriptions EN - 4**

| # | Texte | Car. |
|---|---|---|
| 1 | Premium event rentals: marquee letters, photo booths and lounge furniture. | 74/90 |
| 2 | 1,000+ events since 2022 and a 4.8/5 Google rating. Quote within 24 hours. | 74/90 |
| 3 | Delivery, setup and pickup by our crew. Book online anytime, day or night. | 74/90 |
| 4 | Montréal, Laval, North Shore, Laurentians, Québec City and Lévis. | 65/90 |

### Liens annexes (sitelinks) - compte/campagne


**Sitelinks FR** (texte <=25, lignes de description <=35)

| # | Texte | Car. | Description 1 | Car. | Description 2 | Car. |
|---|---|---|---|---|---|---|
| 1 | Lettres lumineuses 4 pi | 23 | Initiales, logo, LOVE, chiffres | 31 | Livrées et installées | 21 |
| 2 | Forfaits photobooth | 19 | Signature, Prestige, Iconic | 27 | Legend : 650 $ à 1 495 $ | 24 |
| 3 | Mobilier lounge et gala | 23 | Lounge 850 $, gala 2 900 $ | 26 | Cocktail 1 100 $ à 1 400 $ | 26 |
| 4 | Événements d'entreprise | 23 | Galas, lancements, congrès | 26 | Fêtes de fin d'année | 20 |
| 5 | Mariages | 8 | Décor, photobooth, lettres | 26 | Réservez votre date | 19 |
| 6 | Réalisations | 12 | Plus de 1 000 événements | 24 | Voyez nos décors en photos | 26 |
| 7 | Demander une soumission | 23 | Réponse en moins de 24 h | 24 | Conseiller dédié | 16 |
| 8 | Zones desservies | 16 | Montréal, Laval, Rive-Nord | 26 | Laurentides, Québec, Lévis | 26 |

**Sitelinks EN** (texte <=25, lignes de description <=35)

| # | Texte | Car. | Description 1 | Car. | Description 2 | Car. |
|---|---|---|---|---|---|---|
| 1 | 4-ft Marquee Letters | 20 | Initials, logos, LOVE, numbers | 30 | Delivered and installed | 23 |
| 2 | Photo Booth Packages | 20 | Signature, Prestige, Iconic | 27 | Legend: $650 to $1,495 | 22 |
| 3 | Lounge and Gala Furniture | 25 | Lounge $850, gala $2,900 | 24 | Cocktail $1,100 to $1,400 | 25 |
| 4 | Corporate Events | 16 | Galas, launches, conferences | 28 | Holiday parties | 15 |
| 5 | Weddings | 8 | Decor, photo booth, letters | 27 | Reserve your date | 17 |
| 6 | Our Work | 8 | 1,000+ events delivered | 23 | See our setups in photos | 24 |
| 7 | Request a Quote | 15 | Reply within 24 hours | 21 | Dedicated event advisor | 23 |
| 8 | Service Areas | 13 | Montréal, Laval, North Shore | 28 | Laurentians, Québec, Lévis | 26 |

**Accroches (callouts) FR - 8 (<=25)**

| # | Texte | Car. |
|---|---|---|
| 1 | Installation clé en main | 24/25 |
| 2 | Soumission en 24 h | 18/25 |
| 3 | Note Google 4,8/5 | 17/25 |
| 4 | Plus de 1 000 événements | 24/25 |
| 5 | Conseiller dédié | 16/25 |
| 6 | Réservation en ligne 24/7 | 25/25 |
| 7 | Surclassement offert | 20/25 |
| 8 | Livraison aux forfaits | 22/25 |

**Accroches (callouts) EN - 8 (<=25)**

| # | Texte | Car. |
|---|---|---|
| 1 | Turnkey installation | 20/25 |
| 2 | Quote within 24 hours | 21/25 |
| 3 | Rated 4.8/5 on Google | 21/25 |
| 4 | 1,000+ events delivered | 23/25 |
| 5 | Dedicated event advisor | 23/25 |
| 6 | Book online 24/7 | 16/25 |
| 7 | Free upgrade available | 22/25 |
| 8 | Delivery with packages | 22/25 |

**Extraits structurés FR** (valeur <=25, min. 3, idéal 4+)

- En-tête **Types (Types)** : Lettres lumineuses (18) ; Photobooth (10) ; Mobilier lounge (15) ; Mobilier cocktail (17) ; Décor de gala (13) ; Chapiteaux (10)
- En-tête **Catalogue de services (Service catalog)** : Livraison (9) ; Installation (12) ; Démontage (9) ; Préposé photobooth (18) ; Conception de décor (19) ; Conseiller dédié (16)
- En-tête **Styles (Styles)** : Corporatif (10) ; Mariage (7) ; Gala (4) ; Cocktail dînatoire (18) ; Fêtes de fin d'année (20)

**Extraits structurés EN** (valeur <=25, min. 3, idéal 4+)

- En-tête **Types** : Marquee letters (15) ; Photo booths (12) ; Lounge furniture (16) ; Cocktail furniture (18) ; Gala decor (10) ; Tents (5)
- En-tête **Service catalog** : Delivery (8) ; Installation (12) ; Teardown (8) ; Booth attendant (15) ; Decor design (12) ; Dedicated advisor (17)
- En-tête **Styles** : Corporate (9) ; Wedding (7) ; Gala (4) ; Cocktail reception (18) ; Holiday party (13)

**Composants Prix FR** (en-tête <=25, description <=25, qualificatif : AUCUN - ne pas choisir « À partir de »/« From »)


*Photobooth - type: Niveaux de service*

| En-tête | Car. | Description | Car. | Prix |
|---|---|---|---|---|
| Photobooth Signature | 20 | Forfait d'entrée de gamme | 25 | 650 $ |
| Photobooth Prestige | 19 | Impressions sur mesure | 22 | 825 $ |
| Photobooth Iconic | 17 | Expérience améliorée | 20 | 1 095 $ |
| Photobooth Legend | 17 | Notre forfait complet | 21 | 1 495 $ |

*Mobilier - type: Niveaux de service*

| En-tête | Car. | Description | Car. | Prix |
|---|---|---|---|---|
| Forfait lounge | 14 | Salon lounge clé en main | 24 | 850 $ |
| Forfait cocktail | 16 | Tables hautes et lounge | 23 | 1 100 $ |
| Forfait cocktail plus | 21 | Version bonifiée | 16 | 1 400 $ |
| Forfait gala | 12 | Décor de gala complet | 21 | 2 900 $ |

**Composants Prix EN** (en-tête <=25, description <=25, qualificatif : AUCUN - ne pas choisir « À partir de »/« From »)


*Photo booth - type: Service tiers*

| En-tête | Car. | Description | Car. | Prix |
|---|---|---|---|---|
| Signature Photo Booth | 21 | Essential package | 17 | $650 |
| Prestige Photo Booth | 20 | Custom prints | 13 | $825 |
| Iconic Photo Booth | 18 | Enhanced experience | 19 | $1,095 |
| Legend Photo Booth | 18 | Our most complete package | 25 | $1,495 |

*Furniture - type: Service tiers*

| En-tête | Car. | Description | Car. | Prix |
|---|---|---|---|---|
| Lounge Package | 14 | Turnkey lounge setup | 20 | $850 |
| Cocktail Package | 16 | High tops and lounge | 20 | $1,100 |
| Cocktail Plus Package | 21 | Upgraded version | 16 | $1,400 |
| Gala Package | 12 | Complete gala decor | 19 | $2,900 |

### Lead form asset (copy)

| Champ | Texte | Car. (limite titre 30) |
|---|---|---|
| Titre formulaire FR | Votre événement, clé en main | 28 |
| Form headline EN | Your event, fully turnkey | 25 |
| Titre confirmation FR | Merci, réponse en 24 h | 22 |
| Confirmation EN | Thank you, reply in 24 hours | 28 |

- Description FR : « Lettres lumineuses, photobooth et mobilier haut de gamme livrés et installés. Indiquez votre date, le nombre d'invités et votre budget : un conseiller vous répond en moins de 24 h. »
- Description EN: "Premium marquee letters, photo booths and furniture, delivered and installed. Share your date, guest count and budget; an advisor replies within 24 hours."
- Questions (mandatory, qualifying): Type d'événement (Entreprise / Mariage / Autre) ; Date ; Nombre d'invités (<50 / 50-150 / 150-300 / 300+) ; Budget décor (<1 000 $ / 1 000-2 500 $ / 2 500-5 000 $ / 5 000 $+). Mark 'Entreprise' and budget >= 2 500 $ as qualifying. Choose 'More qualified', and turn on OTP phone verification.

### Search image assets: shot list (no text or logo overlay, 1:1 and 1.91:1, 1200 px)
1. 4-ft letters lit (company initials) in front of a gala stage, no people. 2. Couple in front of the lit initials at a reception. 3. Lounge package set up in a corporate atrium. 4. Cocktail high tops with guests, warm light. 5. Photobooth in use with guests laughing, branded backdrop out of focus. 6. Crew installing letters (the turnkey proof).

### Campaign/ad group map
- FR | Corporatif (Montréal, Laval, Rive-Nord, Laurentides, Québec/Lévis): Lettres lumineuses corporatif; Party de Noël corporatif; Mobilier lounge/cocktail; Photobooth corporatif. Pin price lines in H2 for Mobilier and Photobooth.
- FR | Mariage: Lettres lumineuses mariage; Photobooth mariage. Text customization OFF. Price headline in H2. Strongest negatives.
- FR | Marque: Brand Évenox (H1 pinned).
- EN | Corporate MTL (Montréal island + Laval only, budget <= FR): EN versions of the 4 corporate ad groups + EN brand. EN landing pages only.
- EN wedding copy is supplied for completeness. Run it only if an EN wedding landing page exists, with budget below FR.
