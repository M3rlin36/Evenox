# ChatGPT Ads (OpenAI) — Research Dossier (as of 2026-10-07)

Method note: openai.com and help.openai.com return HTTP 403 to automated fetch. Their content was read through search-engine extracts of those exact pages (marked [S] in the log). developers.openai.com (Ads API docs) was fetched directly (marked [F]). Trade press was fetched directly where possible [F], otherwise read via search extract [S].
Confidence labels: **CONFIRMED** = official OpenAI page or doc. **REPORTED** = two or more reputable trade outlets. **CLAIM** = a single or low-quality source, a rumour, or sources that conflict.

---

## 1. Timeline (key dates)

| Date (2026) | Event | Status |
|---|---|---|
| Jan 16 | OpenAI post "Our approach to advertising and expanding access". Ads to be tested in the US on Free and Go. ChatGPT Go launched globally (US$8/mo; C$8 cited for Canada). | CONFIRMED |
| Feb 9 | US test starts ("Testing ads in ChatGPT"). Logged-in adults on Free and Go. Managed sales only at a ~US$60 CPM, with a minimum commitment of ~US$200–250K. | CONFIRMED (date) / REPORTED (price) |
| Mar 2 | Criteo becomes the first ad-tech partner. | REPORTED |
| Mar 26 | Expansion to Canada, Australia and NZ announced. ~$100M annualised revenue reported. | REPORTED |
| Apr 7–13 | Closed test of self-serve Ads Manager. Minimum cut to US$50K. CPMs reported falling to $25–45 (Digiday, Apr 17). | REPORTED |
| **Apr 16** | **ChatGPT release notes: ads begin rolling out to Free and Go users in Canada, Australia and New Zealand.** | CONFIRMED |
| May 5 | "New ways to buy ChatGPT ads": self-serve **Ads Manager beta** for US businesses at ads.openai.com. No minimum spend. CPC bidding added next to CPM. Pixel and Conversions API. Partners: dentsu, Omnicom, Publicis, WPP. Tech partners: Adobe, Criteo, Kargo, Pacvue and StackAdapt (Toronto). | CONFIRMED |
| May 7 | Pilot expands to UK, Mexico, Brazil, Japan and South Korea (Adweek). | REPORTED |
| May 22 | Fixed daily budgets and US geo-targeting added. | REPORTED (PPC Land) |
| ~late May–June | **Self-serve Ads Manager opens to Canada, Australia and NZ.** Gerber Media (May 27) has its first live CA ads. Choice OMG ran a self-serve test in CAD on Jun 8–25. The Keyword (Jun 19) lists US/CA/AU/NZ as the 4 self-serve markets, with the UK "fifth". Canadian province targeting appears in June (Acxcom, Jun 16). | REPORTED (no official Canada self-serve date found) |
| Jun 5 | Conversion-optimised campaigns begin rolling out. | REPORTED |
| Jun 6 | UK users start seeing ads. | REPORTED |
| Jul 22 | "Advertise in ChatGPT" public portal opens, naming Best Buy, Lowe's and VistaPrint. | CLAIM (aiweekly/explainx only) |
| Jul 27 | Daily budget becomes a **7-day average** (up to 2x on one day, max 7x per week). Also: oCPC, geo-exclusions, AppsFlyer/Adjust, automatic advanced matching, Bulk API, product cards with price and star ratings. | REPORTED (SER, MarTech, PPC Land) |
| Aug 10 | Ad policy update: housing and job listings categories added. | REPORTED (SEJ) |
| Aug ~17–19 | "Maximize results" becomes the default bid strategy. Platform targeting (iOS app / Android app / Web) added. View-through conversion reporting (1-day window) added. | REPORTED |
| Aug 24 | Ads begin serving in 31 European markets (EU27 + NO, IS, LI, CH), including France. The EEA starts with non-personalised (contextual) ads only. | REPORTED |
| Aug 31 | **OpenAI: ChatGPT Ads passes a US$1B annualised run rate in <200 days.** "Tens of thousands of advertisers." Self-serve opens in Europe, India and MENA. Legal-services ads allowed in the US for licensed lawyers. | CONFIRMED |
| Sep 4 | Ads Manager plugin (conversational campaign building). Audience improvements. Pixel accepts hashed phone, name, region and postal code. Campaign budget pacing. Claim that shopping results now come only from brands with product feeds. | REPORTED (feed exclusivity = CLAIM; SEJ/Profound says feeds are "favored", ~65% of picks) |
| Sep 10 | Ad policies v1.6. Amazon DSP pilot for ChatGPT ads (US). | REPORTED |
| Sep 16 | "Reimagining advertising with AI": **Sponsored Agents** (test; clicking an ad opens a chat with the brand's agent). AI creative tools. HubSpot (first CRM partner) and Shopify (first e-commerce partner). oCPM (impression billing, conversion-optimised) reaches GA. Attribution windows of 7/14/30-day click and 0/1-day view. | CONFIRMED (post) / REPORTED (details) |
| Sep 23 | Expansion to Southeast Asia and Taiwan; >60 countries. Shopify app goes international. | CONFIRMED |
| **Oct 5** | "Building advertising for the way people use AI": **visual ads during image generation** (US test later in October). Measurement ecosystem of ~20 partners (AppsFlyer, Adjust, Branch, DV Rockerbox, Triple Whale, Northbeam, Haus, WorkMagic, Measured, INCRMNTAL, Kochava, Singular…). Data connectors (Hightouch, Tealium, LiveRamp). Brand-suitability pilots with DoubleVerify and IAS. 1.2B weekly users. | CONFIRMED |

## 2. Canada and Quebec

- **Users see ads in Canada.** CONFIRMED since Apr 16, 2026 (Free and Go). One independent tracker (Cloro, via Tech Insider) measured ~53.6% ad penetration of CA replies in early July, versus 51% in the US. Treat that as a third-party estimate.
- **Advertisers can buy self-serve from Canada.** CONFIRMED. The help article "Ads Manager Availability" lists Canada as self-service available. The legal entity that advertises and is billed must be based in a listed country. Sign up at **ads.openai.com**.
  - Start date: no official date found. Evidence points to late May–June 2026. One secondary source (DigitalApplied) says Aug 31; that conflicts with June-dated CA self-serve tests and is likely wrong.
- **Minimum budget:** CONFIRMED **25 CAD per day per campaign** (help article "Daily Budgets", per-currency table: USD 25, EUR 15, GBP 15, AUD/NZD 25). There is no minimum total spend for self-serve.
  - The old managed-program minimums (US$250K, then US$50K, later cited as C$50K) are **OUTDATED**.
- **Billing:** post-pay. You are charged when unpaid spend hits the account threshold, and the rest monthly. The budget is a 7-day average: up to 2x on a single day, capped at 7x per week.
- **Verification:** onboarding uses Persona identity/business verification and a check of the ads policy. Real Estate Magazine says a CA corporation number and GST/HST number are needed and that it takes several days (REPORTED, single source). Other reported conditions, each from a single source:
  - New accounts may only advertise domestically at first.
  - The landing page must be on your own domain.
  - The site must not block AI crawlers.
- **Geo-targeting in Canada:** early (Apr–May) it was **country-only**. By June, **province/territory targeting (including Quebec)** was available (Acxcom Jun 16; InPromptAds, verified Oct 2: "13 provinces and territories"; "a plumber in Toronto gets Ontario"). **No city, postal-code or radius targeting in Canada** as of Oct 2 (the US has postal codes). Feed (shopping) campaigns are country-level only.
- **Category limits outside the US apply to Canada.** CONFIRMED in the Ad Policies eligibility table:
  - Most **health** categories are US-only. Only "health software and infrastructure" is allowed everywhere.
  - **Financial services:** some are "restricted to select approved advertisers" outside the US (deposit accounts, credit cards, non-health insurance, auto loans, mortgages, investing). Personal loans, BNPL, payments/remittances, financial planning and credit monitoring are not allowed outside the US.
  - **Legal services** are prohibited outside the US.
  - **Housing (rentals/sales) and individual job listings** are prohibited everywhere. This matters for real-estate brokers.
- **French language:**
  - No language-targeting control exists in the API or Ads Manager. The developer docs on location targeting do not mention language.
  - CONFIRMED (help center, "Create Ads"): ad language may differ from the conversation's language. The system considers location, language settings and conversation language.
  - **AI-powered "text customization" can automatically translate ad copy into the user's preferred language** and adapt headlines and descriptions to the conversation. Reports say it is on by default, can be switched off per campaign, and translated variants may serve without advertiser review (Jon Loomer, REPORTED).
  - Practical implication for Quebec: write French-first ads and context hints (Little Dragon and Parkour3 advise the same). Consider separate FR and EN ad groups. Decide deliberately whether to allow auto-translation, given Bill 96 / Charter of the French Language: from Jun 1, 2025, ads aimed at Quebec must be in French, with French "markedly predominant".
  - OpenAI runs French-language pages (openai.com/fr-CA, fr-FR help). Ads have run in France since Aug 24, so French ads serve in production.
- **Quebec Law 25:** the OpenAI pixel sets first-party cookies (30-day and 365-day) and does automatic advanced matching (on by default for new pixels). Law 25 requires opt-in consent for advertising trackers. Use `oaiq("consent", false)` until the visitor consents, or send events through a consent-gated server-side CAPI.
- **Canadian cost datapoints (REPORTED, small samples):**
  - Choice OMG (Jun 8–25): CPC CA$4.42–4.88, CTR 0.65–1.18%, 8,940 impressions, 58 clicks, 0 leads.
  - Floyd Blaikie (B2B, ~C$7K): CPC C$9.29, CPM C$64.34, CTR 0.7%. Only 5 of 146 identified organisations matched the ICP.
  - OpenAI's recommended starting max CPC is US$3–5 (~C$4–7). Index Web Marketing estimates a CPM of C$35–85.
- **Shopify app in Canada:** not confirmed. BetaKit asked OpenAI and had no answer as of Sep 18.

## 3. Who sees ads (tiers)

- CONFIRMED: **Free and Go** (logged-in adults).
- No ads on **Plus, Pro, Business, Enterprise or Edu**.
- No ads for accounts identified or predicted as under 18 (age-prediction system).
- No ads in Temporary Chats.
- Free users can choose an **"ads-free" mode with lower message limits**. Exact limits are not disclosed.
- Fewer than 20% of eligible users see an ad on a given day (Parkour3, citing OpenAI; REPORTED).

## 4. Formats

1. **Sponsored unit below the answer.** CONFIRMED core format. It is labelled "Sponsored", visually separated, and capped at one per response (reported).
   - Components: advertiser name, favicon/logo, title (up to 50 chars; ~16–24 recommended), description (up to 100 chars; 32–48 recommended), landing URL, square image (1:1; ~1200x1200 recommended).
   - Digiday (May) described the creative as "favicon with text".
2. **Product/shopping cards and carousels from product-feed campaigns.** CONFIRMED in the docs. CSV feed over SFTP, plus a Delta Feeds API. Up to ~1M SKUs reported. The card was refreshed in July with price and star ratings. Feed campaigns target at country level only. Hotel feeds are in limited beta.
3. **Sponsored Agents.** CONFIRMED test, announced Sep 16: click to chat with the brand's agent inside ChatGPT. Select US advertisers such as Wayfair. Not self-serve.
4. **Visual ads during image generation.** CONFIRMED, announced Oct 5: US test starting late October with an initial advertiser group.
5. **Rumoured or unverified:** "conversational extensions / ask questions about [product]" (earlier reports); "sponsored answers woven into responses" and "sidebar placements" (some blogs).
   - The "woven into responses" claim **contradicts OpenAI's stated principle** that ads never alter answers. Treat it as inaccurate.

## 5. Targeting and matching

- **Contextual matching** on the current conversation's topic and intent. CONFIRMED.
  - The system also uses the ad's landing page, title, copy and advertiser **context hints**.
  - When ads personalisation is on (default outside the EEA), it also uses select signals from the user's wider ChatGPT experience: memory, recent chats and ad history.
  - Advertisers never see chats; they get aggregate reports only.
- **Context hints:**
  - Set at ad group level; up to 2,000 per ad group.
  - Plain-language descriptions of relevant conversations and topics. They are not keywords and not hard targeting rules.
  - They cannot enforce geography, schedule or exclusions.
- **Auction:** a relevance-weighted, second-price auction, following a brand-safety check (REPORTED / help center). Relevance can beat a higher bid.
- **Location:**
  - Country, region, market, city and postal code where supported (US is most granular; Canada is province-level).
  - Inclusion and exclusion lists of up to 2,500 IDs.
  - Geo exclusions since July.
- **Platform:** iOS app, Android app, Web (since Aug).
- **Custom audiences:**
  - Hashed email, phone or GAID.
  - At least 25K matched users for inclusion or bid multipliers; no minimum for exclusion.
  - Not available for EEA/Switzerland campaigns.
  - Added in August/September.
- **No** demographic, interest or language targeting.

## 6. Bidding and pricing

- **Objectives:** Impressions, Clicks, Conversions. CONFIRMED (API docs).
- **Billing:**
  - CPM.
  - CPC (since May 5).
  - oCPC (conversion-optimised, billed per click; since Jun/Jul).
  - oCPM (conversion-optimised with impression billing; GA Sep 16).
- **Bid strategies:** Fixed bid (max_bid), Maximize Clicks, Maximize Conversions. "Maximize results" became the default in August.
- **Budgets:**
  - Daily budget, required for automated bidding. Minimums by currency (C$25).
  - Lifetime budget is available for fixed-bid campaigns.
  - The daily budget is a 7-day average.
- **Reported prices:**
  - Launch CPM was $60.
  - By April, CPMs were $25–45, with some reports as low as $15.
  - OpenAI's default/recommended start is $60 CPM and $3–5 CPC.
  - Observed CPCs range widely: US ~$4.4–10.6; UK ~$5.1; AU ~$17.6; NZ ~$22.9 (Synter, small sample, via SEJ).
  - OpenAI says there are "no performance benchmarks yet".

## 7. Measurement

- **OAIQ Measurement Pixel.** CONFIRMED (developers.openai.com).
  - Script loads from bzrcdn.openai.com.
  - Calls: `oaiq("init")`, `oaiq("measure", event)`, `oaiq("consent", bool)`.
  - Automatic advanced matching with in-browser SHA-256.
  - Sets first-party cookies.
  - An image tag is available as an alternative.
- **Conversions API.** CONFIRMED.
  - `POST https://bzr.openai.com/v1/events?pid=<PIXEL-ID>`, authenticated with a bearer CAPI key.
  - Batches of up to 1,000 events; events must be from the last 7 days.
  - Dedup on event name plus id.
  - Hashed user data plus IP/UA/GAID.
- **Standard events:**
  - Web: page_viewed, contents_viewed, items_added, checkout_started, order_created, lead_created, registration_completed, subscription_created, trial_started, appointment_scheduled, plus custom events.
  - App events (app_installed and app_opened) go through CAPI or MMPs.
- **Attribution:** 7, 14 or 30-day click window (default 30) and a 0 or 1-day view-through window. View-through conversions are reported separately.
- **Reporting:** impressions, clicks, spend, CTR, average CPC, average CPM, conversions.
- **Reported latency:** clicks ~15 minutes, spend 7–8 hours, conversions 24–48 hours.
- **Gaps:** no auction insights or impression share.
- **Partners:** MMPs (AppsFlyer, Adjust, Branch, Kochava, Singular, Airbridge, Tenjin); data connectors (LiveRamp, Hightouch, Tealium); incrementality (Haus, WorkMagic, Measured, INCRMNTAL, Fospha); brand suitability pilots (DV, IAS).
- **Ads API:** base URL api.ads.openai.com; an advertiser API key is created in Ads Manager settings; Bulk API; Insights endpoint.

## 8. Policies and privacy

- **Principles:** ads do not influence answers; ads run on separate systems; conversations are never sold or shared with advertisers; advertisers get aggregate data only; users have controls.
- **No ads next to:**
  - Sensitive conversation topics: health and mental health (originally blanket; since April more granular), politics, suicide/self-harm, weapons, hate, child safety, misinformation, etc.
  - Users under 18.
- **Prohibited categories:** adult/dating, alcohol and tobacco, gambling, recreational drugs including cannabis, scams, political ads, housing and jobs listings.
- **Restricted categories:** financial, healthcare and legal. These need case-by-case approval and are mostly US-only (see §2).
- **Policy v1.6 (Sep 10):** OpenAI may decline ads that conflict with its principles or its business or competitive interests.
- **User controls (Settings > Ad controls):**
  - Turn off personalisation; contextual ads continue.
  - "Why this ad".
  - Dismiss or report.
  - Clear ad data.
  - Memory/"past chats" toggles.
  - Ad interactions are not stored in memory.
- **EEA:** contextual-only by default; personalisation requires opt-in consent.

## 9. How to get access (Canada)

1. Go to ads.openai.com and create an account with the Canadian legal entity. Set currency to CAD and choose the time zone.
2. Complete Persona verification and the policy-eligibility check. Add billing (post-pay).
3. Build campaign > ad group > ad:
   - Campaign: objective, geo (Canada or provinces such as QC), platform.
   - Ad group: bid strategy, context hints in FR/EN.
   - Ad: title, description, image, URL.
4. Install the pixel and/or CAPI (consent-gated for Law 25).
5. Alternative access routes:
   - Agencies (dentsu, Havas, Omnicom, Publicis, WPP, MediaPlus).
   - Tech partners such as StackAdapt (Canadian), Criteo, Adobe, Kargo, Pacvue, and the Amazon DSP (US pilot).
   - OpenAI Ads Solutions for large accounts.

## 10. Last 3 months (Jul–Oct 2026)

- 7-day budgets, oCPC, geo exclusions and Bulk API (Jul 27).
- Maximize-results default, platform targeting, view-through reporting and custom audiences (Aug).
- Europe live (Aug 24). $1B run rate and self-serve in EU/India/MENA (Aug 31).
- Ads Manager plugin and feed emphasis (Sep 4). Policy v1.6 and Amazon DSP (Sep 10).
- Sponsored Agents, AI creative tools, HubSpot/Shopify, oCPM GA, flexible attribution (Sep 16).
- SE Asia/Taiwan, >60 countries (Sep 23).
- Visual image-generation ads, 20 measurement partners, DV/IAS pilots (Oct 5).

## 11. Conflicts and outdated items

- **Canada self-serve date** is variously given as May, June or Aug 31. The best evidence is late May to June.
- **Canada ads launch date** is variously given as Feb, March, Apr 16 or Apr 17. Official: announced Mar 26, live Apr 16.
- **Country count:** "40+" (Aug 31 for all access) versus 52 (Sep 3, self-serve) versus 63 (late Sep). These differ because they measure different things.
- **Minimum spend** of $200K/$250K/$50K/C$50K is OUTDATED. The current figure is C$25 per day.
- **"Sponsored answers woven into responses"** is false according to OpenAI's principles.
- **Pixel "not available"** (April Latinlaunch) is OUTDATED.
- **Tech Insider (Jul 9)** cites Aug 31 data, so the article was likely updated after publication.

---

## Source log
[F] = fetched directly; [S] = read via search-engine extract of that page.

1. OpenAI – Our approach to advertising and expanding access – https://openai.com/index/our-approach-to-advertising-and-expanding-access/ – 2026-01-16 [S] – Principles; Free and Go only; ads never influence answers.
2. OpenAI – Testing ads in ChatGPT – https://openai.com/index/testing-ads-in-chatgpt/ – 2026-02-09 [S] – US test; below-answer units; no ads <18 or on health/politics.
3. OpenAI – Testing ads in ChatGPT (fr-CA) – https://openai.com/fr-CA/index/testing-ads-in-chatgpt/ – 2026 [S] – Official French-Canadian version exists.
4. OpenAI – New ways to buy ChatGPT ads – https://openai.com/index/new-ways-to-buy-chatgpt-ads/ – 2026-05-05 [S] – Ads Manager beta, CPC, partners.
5. OpenAI – A milestone in expanding access to AI – https://openai.com/index/expanding-access-to-ai-with-chatgpt-ads/ – 2026-08-31 [S] – $1B run rate; self-serve EU/India/MENA.
6. OpenAI – ChatGPT Ads expands across Europe – https://openai.com/index/chatgpt-ads-expands-across-europe/ – 2026-08 [S] – 31 European markets.
7. OpenAI – Reimagining advertising with AI – https://openai.com/index/reimagining-advertising-with-ai/ – 2026-09-16 [S] – Sponsored Agents, AI creative, HubSpot/Shopify.
8. OpenAI – ChatGPT Ads expands to Southeast Asia and Taiwan – https://openai.com/index/chatgpt-ads-expands-southeast-asia-taiwan/ – 2026-09-23 [S] – >60 countries.
9. OpenAI – Building advertising for the way people use AI – https://openai.com/index/new-chatgpt-ads-format-and-measurement/ – 2026-10-05 [S] – Visual ads, measurement, DV/IAS.
10. OpenAI – Ad policies – https://openai.com/policies/ad-policies/ – v1.6 2026-09-10 [S] – Prohibited/restricted lists; non-US limits.
11. OpenAI – Advertising Terms / Ad Tools Terms / Ad Credit Terms – https://openai.com/policies/advertising-terms/ – 2026 [S] – Legal terms exist (not read in full).
12. OpenAI – Commerce policies – https://openai.com/policies/commerce-policies/ – 2026 [S] – Separate commerce rules.
13. OpenAI Help – Ads in ChatGPT – https://help.openai.com/en/articles/20001047-ads-in-chatgpt – 2026 [S] – User side: tiers, controls, ad-free option, Temporary Chat.
14. OpenAI Help – Ads Manager Availability – https://help.openai.com/en/articles/20001245-ads-manager-availability – 2026-09 [S] – Canada listed as self-serve; legal-entity rule.
15. OpenAI Help – Daily Budgets – https://help.openai.com/en/articles/20001413-daily-budgets – 2026 [S] – Minimum by currency: CAD 25.
16. OpenAI Help – Billing & Payment – https://help.openai.com/en/articles/20001216-billing-payment – 2026 [S] – Post-pay threshold billing.
17. OpenAI Help – Create Campaigns for ChatGPT Ads – https://help.openai.com/en/articles/20001210-create-campaigns-for-chatgpt-ads – 2026 [S] – Location targeting levels.
18. OpenAI Help – Create Ad Groups – https://help.openai.com/en/articles/20001211-create-ad-groups-for-chatgpt-ads – 2026 [S] – Context hints at ad group level.
19. OpenAI Help – Create Ads for ChatGPT Ads – https://help.openai.com/en/articles/20001212-create-ads-for-chatgpt-ads – 2026 [S] – Copy lengths; ad language and auto-translation.
20. OpenAI Help – Write Context Hints – https://help.openai.com/en/articles/20001521-write-context-hints-for-chatgpt-ads – 2026 [S] – Hints are not rules or keywords.
21. OpenAI Help – Ads in ChatGPT: The Basics – https://help.openai.com/en/articles/20001207-ads-in-chatgpt-the-basics – 2026 [S] – Selection signals; memory and personalisation.
22. OpenAI Help – Conversion Measurement – https://help.openai.com/en/articles/20001409-conversion-measurement – 2026 [S] – Pixel and CAPI overview.
23. OpenAI Help – Ads Manager Account Setup – https://help.openai.com/en/articles/20001213-ads-manager-account-setup – 2026 [S] – Persona verification; legal-entity details.
24. OpenAI Help – Troubleshooting Onboarding & Policy – https://help.openai.com/en/articles/20001534 – 2026 [S] – Eligibility checks.
25. OpenAI Help – ChatGPT Release Notes – https://help.openai.com/en/articles/6825453-chatgpt-release-notes – 2026-04-16 entry [S] – CA/AU/NZ ads rollout.
26. OpenAI Help – Set up ChatGPT Ads for Shopify / HubSpot – https://help.openai.com/en/articles/20001523-set-up-chatgpt-ads-for-shopify – 2026-09 [S] – Integrations.
27. OpenAI Help – Quickstart: Launch your first campaign – https://help.openai.com/en/articles/20001224 – 2026 [S] – Setup flow.
28. OpenAI Dev – Ads docs index – https://developers.openai.com/ads – 2026 [F] – Full doc map (feeds, hotel beta, audiences).
29. OpenAI Dev – Campaign Targeting – https://developers.openai.com/ads/campaign-targeting – 2026 [F] – Geo, platform, audiences; 2,000 hints.
30. OpenAI Dev – API Overview – https://developers.openai.com/ads/api-overview – 2026 [F] – Hierarchy, api.ads.openai.com, rate limits.
31. OpenAI Dev – Conversion-Optimized Campaigns – https://developers.openai.com/ads/conversion-optimized-campaigns – 2026 [F] – oCPC billed per click; one standard event.
32. OpenAI Dev – Measurement Pixel – https://developers.openai.com/ads/measurement-pixel – 2026 [F] – oaiq SDK, consent, 1-day view-through.
33. OpenAI Dev – Conversion Tracking – https://developers.openai.com/ads/conversion-tracking – 2026 [F] – 30-day click window; dedup.
34. OpenAI Dev – Conversions API – https://developers.openai.com/ads/conversions-api – 2026 [F] – Endpoint, 1,000-event batches, 7-day timestamp limit.
35. OpenAI Dev – Bidding & Budgets – https://developers.openai.com/ads/bidding-and-budgets – 2026 [F] – Objectives, strategies, CPM/CPC.
36. OpenAI Dev – Location Targeting – https://developers.openai.com/ads/location-targeting – 2026 [F] – geo_lookup; no language targeting.
37. OpenAI Dev – Product Feeds – https://developers.openai.com/ads/product-feeds – 2026 [F] – CSV/SFTP feed, shopping templates.
38. OpenAI Dev – Custom Audiences – https://developers.openai.com/ads/custom-audiences – 2026 [F] – 25K floor; not in EEA.
39. OpenAI Dev – Supported Events – https://developers.openai.com/ads/supported-events – 2026 [S] – Event list.
40. Digiday – OpenAI opens ChatGPT ads manager to the U.S.… – https://digiday.com/marketing/openai-opens-up-chatgpt-ads-manager-to-the-u-s-while-promising-third-party-measurement-cpa-bidding/ – 2026-05-05 [F] – $50K minimum removed; "favicon with text".
41. Digiday – 'Everything is coming down': ChatGPT ads are getting cheaper – https://digiday.com/marketing/everything-is-coming-down-chatgpt-ads-are-getting-cheaper/ – 2026-04-17 [F] – CPM $60 → $25–45.
42. Digiday – OpenAI set to expand ads to France, Germany and Ireland – https://digiday.com/marketing/openai-set-to-expand-ads-to-france-germany-and-ireland/ – 2026-07 [F] – Self-serve: US, CA, AU, NZ, UK, JP, KR.
43. Digiday – OpenAI's next ChatGPT ad format: click to chat – https://digiday.com/marketing/openais-next-chatgpt-ad-format-click-to-chat-not-to-site/ – 2026-09 [F] – Sponsored Agent pilot; Wayfair.
44. Digiday – Amazon brings its DSP to ChatGPT ads – https://digiday.com/media-buying/amazon-brings-its-dsp-to-openais-chatgpt-ads-extending-its-supply-chasing-streak/ – 2026-09-10 [F] – US pilot.
45. Adweek – OpenAI Aggressively Expands Ads Pilot to More Countries – https://www.adweek.com/media/openai-aggressively-expands-ads-pilot-to-more-countries/ – 2026-05-07 [F] – UK/BR/JP/KR/MX added.
46. Adweek – OpenAI Opens ChatGPT Ads to Self-Service Platform – https://www.adweek.com/media/openai-opens-chatgpt-ads-to-self-service-platform/ – 2026-05 [F] – Self-serve, CPC, Pacvue/Kargo.
47. PPC Land – OpenAI opens ChatGPT Ads Manager to all US businesses with CPC – https://ppc.land/openai-opens-chatgpt-ads-manager-to-all-us-businesses-with-cpc-bidding/ – 2026-05 [F] – $3–5 CPC; minimum history.
48. PPC Land – OpenAI finally pulls trigger on ChatGPT ads – https://ppc.land/openai-finally-pulls-trigger-on-chatgpt-ads-after-monthslong-delay/ – 2026-01-16 [F] – Initial announcement details.
49. PPC Land – ChatGPT ad CPMs drop to $25 – https://ppc.land/chatgpt-ad-cpms-drop-to-25-as-openai-races-toward-global-auction/ – 2026-04 [F] – No live auction then.
50. PPC Land – ChatGPT ad budgets lose fixed daily caps – https://ppc.land/chatgpt-ad-budgets-lose-fixed-daily-caps-9-weeks-after-openai-set-them/ – 2026-07 [F] – 7-day average budgets.
51. PPC Land – OpenAI gains 20 measurement partners – https://ppc.land/openai-gains-20-measurement-partners-for-chatgpt-ads/ – 2026-10-05 [F] – Full dated timeline.
52. PPC Land – OpenAI's David Dugan says ChatGPT ads passed $1bn – https://ppc.land/openais-david-dugan-says-chatgpt-ads-passed-a-1bn-run-rate/ – 2026-08/09 [S] – Run-rate confirmation.
53. PPC Land – ChatGPT Ads makes automated bidding default – https://ppc.land/chatgpt-ads-makes-automated-bidding-the-default-in-new-ad-groups/ – 2026-08 [S] – Maximize results; platform targeting.
54. PPC Land – StackAdapt joins ChatGPT ad pilot – https://ppc.land/stackadapt-joins-chatgpt-ad-pilot-what-it-means-for-programmatic/ – 2026-05 [S] – Canadian DSP partner.
55. Search Engine Journal – 6 Months Into ChatGPT Ads… – https://www.searchenginejournal.com/6-months-into-chatgpt-ads-advertisers-still-dont-know-what-good-looks-like/587583/ – 2026-08/09 [F] – CPC/CTR datapoints including CAD.
56. Search Engine Journal – OpenAI Allows Some Health & Finance Ads – https://www.searchenginejournal.com/openai-allows-some-health-finance-ads-in-chatgpt/585516/ – 2026-08 [F] – Policy timeline; approved health categories.
57. Search Engine Journal – ChatGPT Shopping Results Lean Hard On Product Feeds – https://www.searchenginejournal.com/chatgpt-shopping-results-lean-hard-on-product-feeds/589000/ – 2026-09 [F] – Profound data; feeds favoured.
58. Search Engine Land – ChatGPT Ads adds automated bidding, platform targeting – https://searchengineland.com/chatgpt-ads-adds-automated-bidding-platform-targeting-485707 – 2026-08 [S] – Feature update.
59. Search Engine Land – Study: ChatGPT ads appear on 26% of commercial prompts – https://searchengineland.com/study-chatgpt-ads-appear-on-26-of-commercial-prompts-484590 – 2026 [S] – Ad load.
60. Search Engine Land – ChatGPT ads are showing up (a lot) – https://searchengineland.com/chatgpt-ads-are-showing-up-alot-472791 – 2026-03 [S] – ~1 in 5 new threads.
61. Search Engine Land – Conversion bidding, geo exclusions, bulk tools – https://searchengineland.com/chatgpt-ads-adds-conversion-bidding-geo-exclusions-and-bulk-campaign-tools-483511 – 2026-07 [S] – July update.
62. Search Engine Roundtable – Daily budget changes, API, formats – https://www.seroundtable.com/chatgpt-ads-budget-api-ad-formats-more-41756.html – 2026-07-27 [F] – 7-day budgets, oCPC, product card.
63. Search Engine Roundtable – Ads Manager plugin, audience updates, feeds – https://www.seroundtable.com/openai-chatgpt-ads-updates-42017.html – 2026-09-04 [F] – Sep 4 updates.
64. Search Engine Roundtable – Sponsored Agents – https://www.seroundtable.com/openai-chatgpt-sponsored-agents-42104.html – 2026-09-16 [F] – oCPM GA; 7/14/30-day windows.
65. MarTech – ChatGPT Ads adds conversion bidding and stronger measurement – https://martech.org/chatgpt-ads-adds-conversion-bidding-and-stronger-measurement/ – 2026-07-27 [F] – July features.
66. Marketing Brew – ChatGPT is making room for ads from regulated verticals – https://www.marketingbrew.com/stories/chatgpt-is-opening-the-advertising-door-to-some-regulated-verticals-but-most-marketers-arent-crossing-the-threshold-yet – 2026-06-17 [F] – April policy loosening.
67. TechCrunch – OpenAI launches visual ads alongside image generation – https://techcrunch.com/2026/10/05/openai-launches-visual-ads-that-appear-alongside-image-generation-results/ – 2026-10-05 [F] – US-only test; partner list.
68. TechCrunch – ChatGPT users are about to get hit with targeted ads – https://techcrunch.com/2026/01/16/chatgpt-users-are-about-to-get-hit-with-targeted-ads/ – 2026-01-16 [S] – Initial announcement.
69. 9to5Google – ChatGPT is adding new ads – https://9to5google.com/2026/10/05/chatgpt-is-adding-new-ads/ – 2026-10-05 [F] – Visual format.
70. BleepingComputer – OpenAI will show visual ads while you generate images – https://www.bleepingcomputer.com/news/artificial-intelligence/openai-will-show-visual-ads-in-chatgpt-while-you-generate-images/ – 2026-10-05 [F] – 1.2B weekly users.
71. PYMNTS – OpenAI linking visual ads with ChatGPT images – https://www.pymnts.com/news/artificial-intelligence/2026/openai-linking-visual-ads-with-chatgpt-images/ – 2026-10-05 [F] – DV/IAS pilots.
72. heise – OpenAI plans sponsored agents – https://www.heise.de/en/news/Advertising-in-ChatGPT-OpenAI-plans-sponsored-agents-and-ads-via-prompt-11457390.html – 2026-09-17 [F] – US testing only.
73. Channel Insider – ChatGPT Ads reach $1B – https://www.channelinsider.com/ai/news-openai-chatgpt-ads-billion-self-service/ – 2026-09-01 [F] – 40+ countries; 50+ partners.
74. Yahoo Finance – OpenAI solidifies ad platform ambitions – https://finance.yahoo.com/sectors/technology/articles/openai-solidifies-ad-platform-ambitions-094600326.html – 2026-05-11 [F] – $2.5B 2026 target; privacy policy update.
75. Let's Data Science – OpenAI expands ads pilot to five new markets – https://letsdatascience.com/news/openai-expands-chatgpt-ads-pilot-to-five-new-markets-10400c0b – 2026-05-07 [F] – CA/AU/NZ came earlier.
76. The Information – OpenAI Targets Smaller Advertisers – https://www.theinformation.com/articles/openais-next-ad-move-going-small-scale-big – 2026 [F, paywalled] – Headline only.
77. The Keyword – ChatGPT Is Extending Its Self-Serve Ad Manager to the U.K. – https://www.thekeyword.co/news/chatgpt-ads-manager-uk – 2026-06-19 [F] – **Canada already self-serve by Jun 19.**
78. TechWyse (Toronto) – ChatGPT Ads Now Live in Canada, AU & NZ – https://www.techwyse.com/news/ai-search/chatgpt-ads-canada-australia-new-zealand-openai – 2026-04-20 [F] – Mar 26 announcement; Apr 16 live.
79. TechWyse – ChatGPT Ads Hits $1B Run Rate – https://www.techwyse.com/news/ai-search/chatgpt-ads-billion-revenue-global-self-serve – 2026-09-01 [F] – CPC/outcome bidding now the majority.
80. Creative Web Works (CA) – ChatGPT Ads in Canada: What's Live – https://www.creativewebworks.ca/blog/chatgpt-ads-canada – 2026-09-28 [F] – C$25/day, post-pay, restricted industries.
81. Real Estate Magazine (CA) – ChatGPT just launched ads in Canada – https://realestatemagazine.ca/chatgpt-just-launched-ads-in-canada-here-is-what-real-estate-agents-need-to-know/ – 2026-06-17 [F] – GST/HST and corporation number verification; country-only at the time.
82. Little Dragon (CA) – ChatGPT Ads in Canada – https://littledragon.ca/chatgpt-ads-in-canada-what-every-business-owner-needs-to-know/ – 2026-06-24 [F] – French copy and hints needed for Quebec.
83. Latin Launch – ChatGPT Ads in Canada 2026 – https://latinlaunch.com/blog/chatgpt-ads-canada-2026-smbguide/ – 2026-04-20 [F] – OUTDATED (C$50K managed minimum, no pixel).
84. Longhouse (CA) – ChatGPT Ads in Canada: Early Strategy – https://www.longhouse.co/blog/chatgpt-ads-in-canada-early-strategy-and-findings/ – 2026-06-24 [F] – Top-of-funnel performance.
85. Mostai Labs – ChatGPT Ads in Canada – https://mostailabs.com/resources/chatgpt-ads-canada – 2026-09-28 [F] – Non-US health/finance/legal limits.
86. Deeploy (CA) – ChatGPT Ads 2026 – https://deeploy.ca/chatgpt-ads-2026/ – 2026-08-03 [F] – CA penetration 53.6% (third-party).
87. Oakpool – Are ChatGPT Ads Available in Canada? – https://oakpool.xyz/drift/chatgpt-ads-available-in-canada/ – 2026-08-19 [F] – CLAIM: March launch (inaccurate).
88. Choice OMG (CA) – ChatGPT Ads field guide – https://choice.marketing/blog/chatgpt-ads-2026-field-guide/ – 2026-05-06, updated 08-26 [F] – CAD test results; CA self-serve.
89. Index Web Marketing (QC) – ChatGPT Ads Cost in Canada – https://www.indexwebmarketing.com/en/chatgpt-ads-cost-formats/ – 2026-07-11 [F] – CAD cost ranges; "sponsored answers" claim is inaccurate.
90. Parkour3 (Montréal) – ChatGPT Ads: what to know – https://www.parkour3.com/en/blog/chatgpt-ads-what-you-need-to-know-before-launching-your-campaign – 2026-07-23 [F] – C$4–7 CPC recommendation; auto-translation; <20% daily reach.
91. Make It Bloom (CA) – ChatGPT Ads now available in Canada – https://www.makeitbloom.com/blog/chatgpt-ads-are-now-available-in-canada-heres-what-marketers-need-to-know/ – 2026-06-03 [F] – CA availability in early June.
92. Gerber Media (CA) – ChatGPT ads available in Canada – https://www.gerbermedia.ca/blog/chatgpt-ads-are-now-available-to-advertise-in-canada – 2026-05-27 [F] – Early: no province or city targeting.
93. Acxcom (QC) – ChatGPT Ads in Canada – https://acxcom.com/en/chatgpt-ads-in-canada-real-opportunity-or-just-another-advertising-trend/ – 2026-06-16 [F] – Quebec province targeting available.
94. InPromptAds – ChatGPT Ads for Local Services – https://www.inpromptads.com/blog/chatgpt-ads-local/ – 2026-08-11, updated 10-02 [F] – Canada: 13 provinces/territories only.
95. Gend (CA) – ChatGPT Advertising: Access, Privacy, Canada – https://www.gend.co/en-ca/blog/chapgpt-advertising-access-privacy – 2026-03-30 [F] – OUTDATED (US-only at the time).
96. Gend – ChatGPT Go goes global – https://www.gend.co/en-ca/blog/chatgpt-go-global-launch – 2026-01 [S] – Go at $8; global.
97. DigitalApplied – Where ChatGPT Ads Are Sold – https://www.digitalapplied.com/blog/where-chatgpt-ads-are-sold-every-market-and-date – 2026-09-01 [F] – Market table; CA self-serve date "Aug 31" is likely wrong.
98. DigitalApplied – AU/NZ/Canada primer – https://www.digitalapplied.com/blog/chatgpt-ads-australia-new-zealand-canada-primer – 2026-04-19 [F] – Closed self-serve test from Apr 7.
99. Ceaksan – Who Can Access ChatGPT Ads – https://ceaksan.com/en/chatgpt-ads-access-eligibility – 2026-06-05, updated 08-24 [F] – Eligibility by location and category.
100. IndexLab – ChatGPT Ads availability – https://www.indexlab.ai/services/chatgpt-ads/availability – 2026-09-24 [F] – 63 markets (dates partly inaccurate).
101. Adstralis – ChatGPT Ads Australia – https://adstralis.agency/en/blog/chatgpt-ads-australia/ – 2026-09-03 [F] – AU self-serve May; CPM/CPC.
102. Tech Insider – ChatGPT Ads Hit 51% of US Replies – https://tech-insider.org/chatgpt-ads-rollout-2026/ – 2026-07-09 (updated) [F] – Penetration data from Cloro.
103. Common Thread Collective – ChatGPT Ads September 2026 – https://commonthreadco.com/blogs/coachs-corner/chatgpt-ads-september-2026-product-feeds-now-required-platform-expands-globally-and-the-new-tools-ecommerce-brands-need-right-now – 2026-09 [F] – Sep 4 tools; feed "required" is a CLAIM.
104. BetaKit – Shopify becomes OpenAI's first e-commerce partner – https://betakit.com/shopify-becomes-openais-first-e-commerce-partner-with-chatgpt-ads-integration/ – 2026-09-18 [F] – Canada availability unconfirmed.
105. Accuracast – OpenAI Ad Specs – https://www.accuracast.com/faq/openai-ads-specs/ – 2026 [F] – 50/100 character limits; components.
106. Blog du Modérateur – ChatGPT publicités en France fin août – https://www.blogdumoderateur.com/chatgpt-publicites-france-fin-aout/ – 2026-08 [F] – EU contextual-only; French ads.
107. Geek Tonic – Publicités dans ChatGPT en France – https://www.geek-tonic.com/ads/publicites-dans-chatgpt-en-france-ce-qui-change-des-la-fin-aout-2026-pour-les-annonceurs/ – 2026-08 [F] – Mid-Aug self-serve in 7 countries including Canada.
108. Neil Patel – ChatGPT Ads Manager open to everyone – https://neilpatel.com/blog/chatgpt-ads-manager/ – 2026 [S] – Overview.
109. WebFX – ChatGPT Ads Manager – https://www.webfx.com/blog/ai/chatgpt-ads-manager/ – 2026 [S] – May 5 beta; managed-pilot brands.
110. AI Weekly – OpenAI opens ChatGPT ads publicly – https://aiweekly.co/alerts/openai-opens-chatgpt-ads-publicly-with-best-buy-and-lowes – 2026-07 [S] – CLAIM: Jul 22 "Advertise in ChatGPT" portal.
111. Jon Loomer – Text customization in ChatGPT Ads – https://www.jonloomer.com/qvt/text-customization-chatgpt-ads-ai-enhancement/ – 2026-09 [S] – Auto-translation on by default.
112. Relevant Audience – ChatGPT Ads adds 1-day view-through – https://www.relevantaudience.com/google-ads-en/chatgpt-ads-view-through-conversions-one-day-window/ – 2026-08 [S] – View-through reporting.
113. emarketer – ChatGPT ads hit $100M annualized – https://www.emarketer.com/content/openai-s-chatgpt-ads-hit--100-million-annualized-revenues--doubts-remain – 2026-03 [S] – Early revenue.
114. ExchangeWire – StackAdapt AI-powered capabilities via ChatGPT pilot – https://www.exchangewire.com/blog/2026/05/06/stackadapt-announces-ai-powered-marketing-capabilities-through-ads-in-chatgpt-pilot/ – 2026-05-06 [S] – StackAdapt has no minimum.
115. eCommerceNews – Criteo first ad-tech partner – https://e-commerce.news/story/criteo-becomes-first-adtech-partner-for-chatgpt-ads – 2026-03 [S] – Criteo DSP access.
116. B&T – IAS & DoubleVerify launch tools in ChatGPT – https://www.bandt.com.au/ias-doubleverify-team-up-with-openai-to-bring-ad-measurement-to-chatgpt/ – 2026-10 [S] – Brand suitability.
117. Unite.AI – Visual ChatGPT ad format and expanded measurement – https://www.unite.ai/openai-introduces-visual-chatgpt-ad-format-and-expanded-measurement/ – 2026-10-05 [S] – WeightWatchers CPA 15.3% below search.
118. Windows Report / Yahoo Tech – Avoid ChatGPT ads on Free plan – https://windowsreport.com/you-can-avoid-chatgpt-ads-on-the-free-plan-but-theres-a-catch/ – 2026 [S] – Ad-free mode with lower limits.
119. The Register – OpenAI age prediction – https://www.theregister.com/2026/01/21/openai_bets_on_age_prediction/ – 2026-01-21 [S] – Under-18 detection.
120. Business Today – OpenAI testing ads on Free and Go – https://www.businesstoday.in/technology/news/story/openai-is-testing-ads-in-chatgpt-on-free-and-go-subscription-tiers-515343-2026-02-10 – 2026-02-10 [S] – Feb 9 start.
121. TransPerfect – Quebec Bill 96 key changes 2025 – https://www.transperfect.com/blog/quebecs-bill-96-key-changes-2025 – 2025 [S] – French must be markedly predominant from Jun 1, 2025.
122. CookieChimp – Quebec Law 25 cookie consent guide – https://cookiechimp.com/guides/regulations/ca_qc_law25 – 2025 [S] – Opt-in consent for ad pixels.
123. Soku.ai – Product-feed campaigns are country-level only – https://soku.ai/blog/chatgpt-ads-product-feed-geo-targeting-custom-labels – 2026 [S] – Feed geo limits.
124. MM+M – OpenAI performance upgrades for ChatGPT Ads – https://www.mmm-online.com/news/openai-introduces-suite-of-performance-upgrades-for-chatgpt-ads/ – 2026-07 [S] – 2x/7x budget rule.

Total: 124 distinct sources (≈75 read in full by direct fetch, the remainder via search extracts of the named page).
