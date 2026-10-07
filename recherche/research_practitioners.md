# ChatGPT Ads + AI Search (GEO/AEO): What Practitioners Say (research date 2026-10-07)

## Read-depth legend (be honest about what was actually read)
- [F] = full page fetched and read
- [S] = only search-result snippet / secondary quote read
- [T] = title + channel only (YouTube via oEmbed; YouTube pages, transcripts and descriptions were blocked: HTTP 403 / Google "sorry" redirect)
- [2nd] = Reddit thread known only through a secondary roundup (reddit.com fetch blocked; site:reddit.com search returned nothing)
- Instagram/TikTok: site searches returned no usable practitioner content about ChatGPT Ads (only "use ChatGPT to write ads" content). Not counted beyond 0 items.
- Many "case studies" are published by agencies selling ChatGPT Ads services; flagged (VENDOR) where relevant.

---

## 1. Platform state (as of Oct 2026), per practitioners and trade press
- Timeline: Jan 16 2026 announced -> Feb 9 US pilot (CPM ~$60, $200-250K minimum) -> Apr: minimum ~$50K, CPC bidding added; Canada ads live to users Apr 16 -> **May 5 self-serve Ads Manager beta, $0 minimum, $25/day min daily budget** -> May-Jun: product feeds, custom audiences, CPA/conversion bidding begin; UK, CA, AU, NZ self-serve -> Jul: oCPC, geo exclusions, AppsFlyer/Adjust, bulk API -> Aug: Brazil/Mexico, Maximize Results, iOS/Android/Web targeting, 1-day view-through, automatic advanced matching default on pixels (Aug 17); Europe partner-led, Europe self-serve end Aug; ~$1B run rate (Digiday, Aug 31) -> Sep: India, MENA, SE Asia; ~63 countries self-serve -> Oct 5: visual ads during image generation (US test).
- Format: one "chat_card" sponsored unit below the answer (title <=50 chars, description <=100; OpenAI suggests ~16-24 char titles and ~32-48 char copy because mobile truncates ~30 chars), square image, favicon/logo; product-feed/carousel units for ecommerce. One advertiser per placement in most observations (SE Ranking; trackmyvisibility: 65% of questions had a single advertiser).
- Targeting: "context hints" (plain-language descriptions of conversations, not keywords), country + (US) state/DMA/ZIP, platform, custom audiences (25K+ matched min). No demographic, lookalike or retargeting. Negative keyword cap ~25 (Adthena).
- Audience: **only Free and Go users, 18+. Plus/Pro/Business/Enterprise/Edu never see ads** -> the #1 complaint from B2B practitioners.
- Measurement: OAIQ pixel (`__oppref` cookie, 30-day), Conversions API (click id `oppref`), 24-48h conversion lag, click-through conversions only (+1-day VTA separately).
- Policy: claims must be substantiated; landing pages must not block OAI-AdsBot; OpenAI may reject ads that compete with its business (AI image/voice tools); health/finance/legal = case-by-case in US since ~Apr 2026 (law firms must be licensed in jurisdiction); in Canada health/financial/legal generally prohibited (mostailabs/creativewebworks). Older pieces (Mintec, June) still list these as blocked - conflicting info.
- Access tips: no waitlist since May; 4 steps (business details, account config, Persona ID verification, review). Approval same day to ~2 weeks (one r/PPC poster: 15 days). Business name/address must match registration docs exactly; country/currency/timezone are permanent; duplicate applications don't speed it up. Allow OAI-AdsBot in robots.txt/WAF/Cloudflare or ads get rejected.

## 2. Benchmarks (practitioner-reported, with ranges)
| Metric | Reported values | Notes |
|---|---|---|
| CPM | $60 at launch -> $25-35 typical; $25-60 range; Hostinger saw >$65; AU agency ~$50 vs ~$15 normal AU buys | CPMs fairly flat across markets ($26-37, Synter) |
| CTR | Industry ~0.68% (Similarweb May) / ~0.9% (eMarketer); tests: 0.35% (Synter), 0.65-0.66% (Choice OMG, Windmill), 0.68% (Symphonic), 0.8% (AdLibrary), 0.91% (Mintec), 0.94% (CTC), 1.1% (Workshop), 1.25% (DE test), 1.3% (SE Ranking, TruCommerce), 1.6% (Brennan, "top 10%"), 1.83% (Romania B2B); headshot images ~5% vs logos ~0.5% (r/PPC) | Google Search ~5-6.4%. CTR reportedly up 112% since launch (Five Percent) |
| CPC | OpenAI recommends $3-5. Actuals: $0.75-1.12 (EU B2B), $1.72 (Opascope ecom), $2.87 (wellness), $3.08-3.44 (Workshop), $4.41 (CTC), $5.68 (Windmill), ~$9 (Symphonic: needed $12 bids to pace), $9.29 CAD (B2B), $9.89 blended (Synter; US $10.62, NZ $22.89), $13 (Grow My Ads agency terms), B2B $15-20 (Five Percent) | $3 bid shows "strong delivery", $2.99 "may not deliver" (Grow My Ads). Forecasts underestimate required bids |
| CVR | Ad-side benchmarks unpublished by OpenAI. Reported: 0.8% (StubGroup vs 6.64% Google), 2.35% (Opascope ecom), many tests with 0 conversions on <$2.5K | Organic ChatGPT referrals convert high (Seer 15.9-16% vs 1.76% Google organic, single B2B client; Adobe +31%). Lapis 4-10% CVR table = vendor estimates, treat skeptically |
| CPL | $52 blended / $114 ready-to-book (TX wellness), ~$100 (Austin real estate seller leads, YouTube), $92 vs $157 Google (B2B compliance), $105 vs $248 Google (SF law firm, aggregator), 60% below Google (InterTeam B2B SaaS, VENDOR) | |
| ROAS | 1.49x blended over 15 days, daily 0.2-2.9x (Opascope, ~$60K spend); CTC high-AOV ecom 3.3-6.8x depending on attribution ($9.6K spend) | Judge on rolling windows |
| Tracking gap | Platform clicks vs GA4 sessions: 57 vs <20 (Cleverly), 53 vs 35 (Symphonic), 100 vs 20 (Digiday), 13% and 68% of clicks reached site (Out of the Box) | Clicks often land as "Direct" in GA4 |

## 3. Top tactics (consensus)
1. **Set up measurement BEFORE spending**: OAIQ pixel + CAPI with shared event IDs, UTMs (utm_source=chatgpt), call tracking, CRM source field; verify UTMs survive redirect and clicks show up in your own analytics. Required to unlock oCPC.
2. **Use conversion bidding (oCPC/CPA) once available**; Jellyfish called the CPA switch "pivotal"; an independent buyer went from losing to "close to break-even" after switching from manual CPC. oCPC needs a new campaign (can't convert existing) and only standard events.
3. **Daily budgets, not lifetime**; spend can hit 2x daily on strong days; cap test budgets. Plan $200-500 for a mechanics test, $5-10K+/mo for a real read (B2B: "several thousand/month", 60-90 days).
4. **Context hints**: one theme per ad group; specific descriptions ("homeowners comparing licensed HVAC companies for AC repair") beat broad categories; keep them short (1,000-word hints blocked delivery; "a few hundred words" worked). Workshop Digital found keyword-style hints beat conversational hints (1.2% vs 0.9% CTR) - partial disagreement with "write natural language" advice. Trending "moment" hints beat generic keywords (Brennan).
5. **Creative**: front-load the message (truncation), benefit/outcome-led, one concrete detail (price, same-day, licensed & insured, review count), read like a friendly recommendation not a display ad ("Plumber Near Me, Call Now 24/7" reads as spam - WebFX). Brand-first headlines slightly better. Industry-specific images or people/headshots beat generic graphics/logos. Several distinct creatives per ad group. Copy should qualify out non-buyers. Avoid claims that imply autonomous AI / unverifiable superlatives (rejections).
6. **Landing pages**: dedicated, intent-matched, service+city pages; never homepage. Click-to-call above the fold, booking widget, reviews/licensing badges, fast mobile. Add a qualification step and a low-commitment secondary offer (eBook/checklist) to catch earlier-stage researchers (MalachiSoft). 26% of advertisers still send to homepage (trackmyvisibility).
7. **Funnel fit**: ChatGPT catches research/comparison-stage intent, earlier than Google. Mid-funnel content offers, comparison pages and qualification work better than pure "book a demo."
8. Judge on rolling 1-2 week windows; delivery comes "in pulses"; expect to raise bids during week 1-2.

## 4. What works by segment
- **Local services**: generally the most positive anecdotes. r/PPC poster with $34K across niches: worked for home services, car rental, real estate, injury law; failed for criminal defense, tours, employment law, SaaS, dental. ZIP/DMA targeting now available in US. Phone calls are the key conversion; use dynamic call tracking. Real estate seller leads ~$100 (YouTube, William Zhang). Wellness consults $52-114/lead.
- **B2B**: most negative. Paid-plan exclusion removes many decision-makers ("a built-in ad blocker"); deanonymized B2B clicks: only 5 of 146 orgs matched ICP (Floyd Blaikie); multiple B2B tests with 0 leads (Workshop, Windmill, Grow My Ads, Choice OMG, AdLibrary). Counterexamples: StubGroup compliance CPL below Google; InterTeam B2B SaaS (vendor). Cheap CPCs but low CVR.
- **High-ticket services**: works when lead value is large (a single booked program covered 6 weeks' spend - MalachiSoft; law firm CPL below Google). Requires qualification and intake discipline. Regulated verticals need manual approval (US) or are blocked (Canada).
- **Ecommerce**: product-feed campaigns strongest (RightSideUp); CTC 3.3-6.8x ROAS; Opascope 1.49x; one large brand: thousands/day for "very few orders" in pilot era.

## 5. vs Google and Meta
- Consensus framing: "Google captures demand, Meta creates demand, ChatGPT meets you at the decision/research stage."
- CPC usually lower than Google in competitive verticals (Workshop $3.14 vs $6.76; Windmill ~1/3 of $20+ Google; StubGroup $0.76 vs $10.46), similar or higher in some (Hostinger: "not higher than Google"; Synter $10+). CTR far lower than Search (~1% vs 5-6%), roughly between Meta and LinkedIn (Romania agency). CVR lower than Google Search in most tests. Scale far below Meta/Google; inventory unpredictable.
- One r/PPC advertiser moved budget from Meta: cost per conversion "significantly higher". Budget advice ranges from "15-20% test allocation" (vendor blogs) to "<1% of Google spend" (Digiday: $10M/mo Google buyer spends <$100K on ChatGPT).

## 6. Mistakes to avoid
Homepage traffic; no tracking/UTMs; blocking OAI-AdsBot; lifetime budgets; giant context hints; judging on days or on platform-reported clicks; treating it like Google keywords or as a core channel; B2B targeting assuming paid-plan reach; generic slogans; unsubstantiated claims; assuming ads influence organic answers (they don't - answer independence); low bids below $3 (no delivery); misconfigured account country/currency (permanent); OAI auto "rewrite" toggle on compliance-locked copy.

## 7. Consensus vs disagreement
- Consensus: platform is immature but improving fast; measurement is the bottleneck; cheap-ish clicks, thin conversion proof; works best for consumer research-stage categories and local services; set up tracking first; it's a test budget line.
- Disagreements: (a) whether CPCs are actually cheap ($0.75 to $22.89); (b) keyword-style vs conversational context hints; (c) B2B viability (vendors claim 60% lower CPL; independent tests mostly 0 leads); (d) whether to test now or invest in GEO first (Averi, Justin McKelvey, Level: skip/wait; Five Percent, Jellyfish, SEL: put it in 2027 plans); (e) health/legal eligibility (conflicting sources by date/country).

## 8. AI search / GEO / AEO (organic) - what practitioners say works
- Reality check: SparkToro/Gumshoe: <1% chance ChatGPT gives the same brand list twice -> track "share of appearances", not rank. BrightLocal (200K local searches, Sep 2026): ChatGPT avg 4.1 businesses/answer; ~50% persistence; 20-33% overlap between repeat runs; Maps rank != AI visibility (66% vs 32-38%). SOCi via MarketingCode: ChatGPT recommends ~1.2% of local locations; only 45% overlap with Google rankings. BrightLocal LCRS 2026: 45% of consumers used AI tools for local recommendations (from 6%).
- ChatGPT local sources: business websites 42% of citations, Yelp 9.5%, Facebook 2.2%, TripAdvisor, industry directories (BrightLocal); being near (52-59% within 5 km) and a storefront helps.
- Strongest correlates: branded web mentions (0.66-0.71) and YouTube mentions (~0.74) >> backlinks (0.22) and page count (0.19) (Ahrefs 75K brands). Brands on 4+ third-party platforms 2.8x more likely to be cited. Get onto "best of"/comparison lists, review sites, Reddit threads (value-first replies, real identity, ~30 min/week).
- On-page: answer-first (44% of citations from first 30% of a page), stats/quotes/citations (+30-40%), FAQ blocks, lists/tables, freshness (ChatGPT prefers much newer URLs; 83% of commercial citations from pages updated within 12 months), server-side rendering, LocalBusiness/Service/FAQ schema, one page per service and per area, fast pages. Allow OAI-SearchBot/GPTBot (or at least OAI-SearchBot).
- Doesn't work / unproven: llms.txt (zero correlation in 300K-domain study; 97% never fetched), keyword stuffing, "shadow sites", believing paid ads lift organic.
- Fan-out: ChatGPT 5.5 issues brand-specific sub-queries (Seer) -> brand authority and ranking for the sub-queries AI runs matter.
- Reddit split: half call GEO snake oil/rebranded SEO (~80% overlap); others report real leads (r/bigseo agency: 5-10 quote requests/week from ChatGPT, ~15% of a client's leads).
- Practitioners pair ads + GEO: ads don't influence answers, but GEO builds the trust/brand that makes ad clicks convert; several (Averi, McKelvey, Level, RightSideUp) say do GEO first.

---

## 9. Source log (numbered)
Format: # | Platform | Title | URL | Date | Read | Takeaway

### Blogs / agency write-ups / trade press
1 | Agency blog (Choice OMG) | ChatGPT Ads in 2026, Updated August: oCPC, Audiences, OAIQ Pixel | https://choice.marketing/blog/chatgpt-ads-2026-field-guide/ | 2026-05-06, upd 08-26 | [F] | Own test: 8,940 impr, 0.65% CTR, CA$4.42-4.88 CPC, 0 leads; full feature map + budget-by-goal table.
2 | Agency blog | ChatGPT Ads Benchmarks 2026 (Tru Commerce) | https://trucommerce.ai/insights/chatgpt-ads-benchmarks-2026 | 2026-08-29 | [F] | Industry CTR ~0.9%, own ~1.3%; CPC $3-5 ecom, $8-18 SaaS/finance; CPM $25-60.
3 | Tracker vendor blog (CPV Lab) | ChatGPT Ads: First Impressions After Real Campaigns | https://cpvlab.pro/blog/tracking/chatgpt-ads-first-impressions-review/ | 2026-09-24 | [F] | EU B2B CPC EUR0.75-1.12, CTR 1.83%; US buyer near break-even after switching to auto CPA bidding.
4 | Founder blog (Synter) | ChatGPT Ads: Real Data From 130,000 Impressions in 9 Days | https://synterai.com/blog/chatgpt-ads-real-data | 2026-06 | [F] | $4,429 spend, 0.35% CTR, $9.89 CPC, CPM $34; CTR not CPM drives cost by market; "autonomous AI" claims rejected.
5 | Agency blog (Mintec) | ChatGPT Ads in 2026: What We've Learned From Testing | https://mintec.co/blog/chatgpt-ads-que-funciona/ | 2026-06-26 | [F] | 0.91% CTR vs 6.4% Google; "CTR gap is interaction design, not copy"; awareness yes, DR not yet.
6 | Agency blog (Windmill) | We Tested ChatGPT Ads for B2B | https://www.windmillstrategy.com/chatgpt-ads-b2b-industrial-manufacturing-pilot/ | 2026-07 | [F] | Industrial B2B: $1,470, 0.66% CTR, $5.68 CPC (1/3 of Google), 0 conversions.
7 | Agency blog (MalachiSoft) | Texas ChatGPT Ads Case Study: 22 Leads at $52 | https://blogs.malachisoft.com/chatgpt-ads-case-study-22-leads-at-52-each-in-the-first-6-weeks-on-a-channel-most-businesses-havent-touched/ | 2026-08 | [F] | Wellness: $1,139, $2.87 CPC, 10 ready-to-book @ $114 + 12 eBook leads; qualification + nurture offer.
8 | Vendor blog (Lapis) | How to Advertise a Local or Service Business on ChatGPT | https://www.trylapis.com/resources/chatgpt-ads-local-service-businesses | 2026 | [F] | Local playbook: specific context hints, trust cues, service-area pages, call tracking, LTV lens.
9 | Agency case (StubGroup) | ChatGPT Ads Case Study | https://stubgroup.com/case-study/chatgpt-ads-case-study/ | 2026-09-23 | [S] | B2B compliance: CPC $0.76 vs $10.46 Google; CPL $92 vs $158; CVR 0.8% vs 6.64%.
10 | Agency blog (Workshop Digital) | ChatGPT Ads: What We Learned From Our First B2B Test | https://www.workshopdigital.com/blog/chatgpt-ads-for-b2b/ | 2026-08-26 | [F] | $2,319, 1.1% CTR, $3.14 CPC, 0 MQLs; keyword-style hints > conversational; industry images best.
11 | Agency blog (Symphonic) | We Ran a ChatGPT Ad Campaign: What We Learned | https://www.symphonicdigital.com/blog/chatgpt-ads-test-results | 2026-08 | [F] | Needed $12 bids to pace (forecast said $3); ~$9 CPC; 34% click->GA4 gap.
12 | Agency blog (Cleverly) | We Tested ChatGPT Ads: What Marketers Need to Know | https://www.cleverly.co/blog/chatgpt-ads | 2026-09 | [F] | 57 platform clicks vs <20 GA4 visits; 0 conversions; pause, fix tracking.
13 | Consultancy blog (Out of the Box Advisors) | ChatGPT Ads for Small Business: An Honest Review | https://www.outoftheboxadvisors.com/post/we-spent-real-money-on-chatgpt-ads-for-small-business-here-s-the-honest-truth | 2026-07/08 | [F] | $500 burned in ~1 hour; only 13% of clicks reached site; verdict "not yet" for SMBs.
14 | Trade press (SEJ) | 6 Months Into ChatGPT Ads, Advertisers Still Don't Know What 'Good' Looks Like | https://www.searchenginejournal.com/6-months-into-chatgpt-ads-advertisers-still-dont-know-what-good-looks-like/587583/ | 2026-09-08 | [F] | Hostinger ~$70K test, CPM >$65; Blaikie 5/146 ICP; CTC 3.3-6.8x ROAS; CPCs $3-22.
15 | Agency blog (Opascope) | ChatGPT Ads Benchmarks: ROAS, CPC, and Cost From 15 Days | https://opascope.com/insights/chatgpt-ads-benchmarks/ | 2026 | [F] | ~$60K spend, 1.49x ROAS, $1.72 CPC, 2.35% CVR; daily ROAS 0.2-2.9x.
16 | Vendor blog (Lapis) | ChatGPT Ads Conversion Rate Benchmarks by Industry | https://www.trylapis.com/resources/chatgpt-ads-conversion-rate-benchmarks | 2026 | [F] | Claims 4-11% CVR by vertical (VENDOR estimates; low confidence).
17 | Research (SE Ranking) | ChatGPT Shows Ads for 1 in 4 Commercial Prompts | https://seranking.com/blog/chatgpt-ads-study/ | 2026-08-10 | [F] | 25.9% of 50K commercial prompts carry ads; 14% off-topic; own test 1.30% CTR, minimal conversions.
18 | Vendor blog (Averi) | ChatGPT Ads Have No Minimum. Skip Them Anyway. | https://www.averi.ai/how-to/chatgpt-ads-have-no-minimum-skip-them-anyway | 2026-09 | [F] | Early-stage B2B SaaS should put budget into citation-worthy content instead.
19 | Consultant blog (Justin McKelvey) | ChatGPT Ads Cost: The $25-a-Day Math | https://justinmckelvey.com/blog/chatgpt-ads-cost | 2026-10-05 | [F] | $25/day ~= $760/mo ~= 150-250 clicks ~= 3-5 leads; skip if buyers are paid-plan pros.
20 | Tool blog (AdLibrary) | ChatGPT Ads Review: We Tested It 2 Weeks | https://adlibrary.com/posts/we-tested-chatgpt-ads | 2026-07-13 | [F] | $200, ~0.8% CTR, ~$5 CPC, 0 conv; weak feature-led creative; billing glitches.
21 | Agency research (Five Percent / Graphite) | How to Build ChatGPT Ads: Our Step-by-Step Playbook | https://graphite.io/research/chatgpt-ads-playbook | 2026-09-28 | [F] | B2B CPC $15-20; CTR +112% since launch; plan $5-10K/mo; native copy; early-turn conversations.
22 | Research (TrackMyVisibility) | ChatGPT Ads 2026: What 7,497 Ads Reveal | https://trackmyvisibility.com/blogs/research/chatgpt-ads-analysis | 2026-09-30 | [F] | 1,346 advertisers; 65% of questions single advertiser; 26% send to homepage; 42% no utm_source.
23 | Guide (Context Hints) | ChatGPT Ads News & Timeline | https://www.contexthints.com/guide/chatgpt-ads-news.html | 2026-09 | [F] | Full rollout timeline and per-country minimums.
24 | Agency blog (Grow My Ads) | Should You Advertise on ChatGPT? Our Honest Take After $1,000 | https://growmyads.com/chatgpt-ads-review/ | 2026 | [S] | 92 clicks @ $13 CPC, 0 conv; $3 vs $2.99 delivery cliff; B2B audience problem.
25 | Agency blog (Right Side Up) | Everything Brands Need to Know About ChatGPT Ads: Insights From an Early Advertiser | https://www.rightsideup.com/blog/chatgpt-ads-guide | 2026 | [F] | Pilot: thousands/day -> very few orders; product-feed campaigns best; creative variety matters.
26 | Agency blog (Common Thread Collective) | ChatGPT Ads August 2026: Conversion Bidding and Product Feeds | https://commonthreadco.com/blogs/coachs-corner/chatgpt-ads-ocpc-conversion-bidding-product-feeds-ecommerce-2026 | 2026-08-30 | [F] | Start oCPC with top 50 SKUs, no CPA target, test carousel vs single 30 days.
27 | Trade press (Digiday) | OpenAI's ChatGPT ads business hits $1B run rate as Europe gets self-serve | https://digiday.com/media-buying/openais-chatgpt-ads-business-hits-1-billion-run-rate-as-europe-gets-self-serve-access/ | 2026-08-31 | [F] | $1B ARR in <200 days.
28 | Trade press (Digiday) | OpenAI's measurement gaps are keeping ChatGPT ads budgets at test level | https://digiday.com/marketing/openais-measurement-gaps-are-keeping-chatgpt-ads-budgets-at-test-level/ | 2026-10-01 | [F] | Jellyfish: CPA switch "pivotal"; Accuracast tests GBP10-20K; 24-36h lag; 100 vs 20 clicks.
29 | Trade press (Digiday) | As OpenAI's ChatGPT ad delivery improves, the doubts it created aren't so easily fixed | https://digiday.com/marketing/as-openais-chatgpt-ad-delivery-improves-the-doubts-it-created-arent-so-easily-fixed/ | 2026 | [S] | Underdelivery: one advertiser spent $2,500 of $250K over 4 weeks.
30 | Trade press (Digiday) | OpenAI turns on cost-per-action ads inside ChatGPT | https://digiday.com/marketing/openai-turns-on-cost-per-action-ads-inside-chatgpt/ | 2026 | [S] | CPA buying arrives.
31 | Trade press (Digiday) | 'Everything is coming down': ChatGPT ads are getting cheaper | https://digiday.com/marketing/everything-is-coming-down-chatgpt-ads-are-getting-cheaper/ | 2026-04 | [S] | CPM $60 -> $25 in 9 weeks.
32 | Trade press (Adweek) | Advertisers Want More Brand Safety, Prompt-Matching, Incrementality Tracking From ChatGPT Ads | https://www.adweek.com/programmatic/advertisers-want-brand-safety-prompt-matching-incrementality-tracking-chatgpt-ads/ | 2026-08 | [F] | Buyers want prompt visibility + incrementality.
33 | Trade press (PPC Land) | Over 1,000 brands now live on ChatGPT ads via Criteo as AI conversions near 2x | https://ppc.land/over-1-000-brands-now-live-on-chatgpt-ads-via-criteo-as-ai-conversions-near-2x/ | 2026 | [S] | AI-referred CVR ~2x search in electronics/home/wellness (Criteo).
34 | Trade press (PPC Land) | Similarweb opens AI ad data as 26% of ChatGPT replies carry sponsored ads | https://ppc.land/similarweb-opens-ai-ad-data-as-26-of-chatgpt-replies-carry-sponsored-ads/ | 2026 | [S] | Ad load ~26%; Similarweb CTR ~0.68%.
35 | Trade press (PPC Land) | ChatGPT advertisers face 10 days to opt out of automatic advanced matching | https://ppc.land/chatgpt-advertisers-face-10-days-to-opt-out-of-automatic-advanced-matching/ | 2026-08 | [S] | Advanced matching default from Aug 17.
36 | Trade press (PPC Land) | OpenAI's ads manager is live - and the barrier to entry just dropped | https://ppc.land/openais-ads-manager-is-live-and-the-barrier-to-entry-just-dropped/ | 2026-05 | [S] | Adthena: 7,378 advertisers week of Jul 13-20, 60% US.
37 | Agency case (InterTeam) | ChatGPT Advertising Case Study | https://www.interteammarketing.com/case-study/chatgpt-ads-case-study | 2026-10-02 | [F] | VENDOR: 150+ B2B SaaS leads, ~$5 CPC, CPL 60% below Google; full-funnel hint structure.
38 | Agency (GPT Ads AI) | Case Studies | https://www.gptadsai.com/case-studies | 2026 | [F] | VENDOR, anonymized, no spend data: DTC 3.4x ROAS; consulting -44% cost/booked call.
39 | Agency blog (WebFX) | ChatGPT Advertising for Home Services | https://www.webfx.com/blog/home-services/chatgpt-advertising/ | 2026-06-03 | [F] | Conversational copy; Google-style "Call Now 24/7" reads as spam; city service pages.
40 | DSP blog (StackAdapt) | How to advertise on ChatGPT | https://www.stackadapt.com/resources/blog/how-to-advertise-on-chatgpt | 2026-05-28 | [F] | Buy direct or via partners; align headline/image/LP with prompt.
41 | Agency blog (Longhouse, Canada) | ChatGPT Ads in Canada: Early Strategy and Findings | https://www.longhouse.co/blog/chatgpt-ads-in-canada-early-strategy-and-findings/ | 2026-05 | [F] | Canada: strong visibility, fewer conversions; better as TOFU for now.
42 | Vendor blog (Adthena) | ChatGPT Ads Manager BETA: Setup walkthrough | https://www.adthena.com/resources/blog/chatgpt-ads-manager-beta-setup/ | 2026-05-06 | [F] | Country/currency/timezone permanent; 25 negative cap.
43 | Trade press (SEL) | ChatGPT ads show strong early CTRs - but scale is still the question | https://searchengineland.com/chatgpt-ads-show-strong-early-ctrs-but-scale-is-still-the-question-476496 | 2026 | [S] | CTR strong vs display/podcast; scale limited (page 403).
44 | Trade press (SEL) | ChatGPT ads pilot leaves advertisers without proof of ROI | https://searchengineland.com/openais-ad-platform-cant-tell-advertisers-if-their-money-is-working-472233 | 2026 | [S] | Early lack of performance data.
45 | Trade press (SEL) | Why ChatGPT Ads deserve a place in your 2027 media plan | https://searchengineland.com/chatgpt-ads-media-plan-488291 | 2026 | [T] | Title only (403).
46 | Trade press (SEL) | OpenAI brings visual ads and expanded measurement to ChatGPT | https://searchengineland.com/openai-brings-visual-ads-and-expanded-measurement-to-chatgpt-493500 | 2026-10 | [S] | Visual ads in image gen; Haus/Measured/WorkMagic incrementality; DV/IAS.
47 | Roundup (Sprites) | ChatGPT Ads Reddit: What 20 PPC Marketers Found | https://www.sprites.ai/blog/what-marketers-say-about-chatgpt-ads-reddit | 2026-09-13 | [F] | Source of Reddit thread details (#71-90).
48 | Agency blog (Adventure Media) | 12 ChatGPT Ads Mistakes Businesses Are Making in 2026 | https://adventuremedia.ai/blog/12-chatgpt-ads-mistakes-businesses-are-making-in-2026-and-how-to-avoid-them | 2026-02-27 | [F] | Don't treat as Google; conversational LPs; multi-touch attribution.
49 | Agency (Level) | ChatGPT Ads in 2026: Navigating the Era of AI Answer Media | https://www.level.agency/perspectives/chatgpt-ads-2026-strategy/ | 2026 | [F] | Do the "quiet work" (schema, AI visibility) first, test carefully.
50 | Trade (Dr. Bicuspid; Great Dental Websites) | The dental practice guide to ChatGPT advertising | https://www.drbicuspid.com/dental-practice/patient-communication/marketing/article/15820845/the-dental-practice-guide-to-chatgpt-advertising | 2026-04-10 | [F] | Dental: build intake, LP, call tracking; health restricted.
51 | Trade press (Adweek) | ChatGPT Ads Just Opened the Door to Law Firms | https://www.adweek.com/adweek-wire/chatgpt-ads-just-opened-the-door-to-law-firms/ | 2026 | [S] | Law firms eligible in US with licensing; case-by-case.
52 | Trade press (Search Engine Watch) | OpenAI can reject ChatGPT ads simply for competing with its own business | https://searchenginewatch.com/openai-can-reject-chatgpt-ads-simply-for-competing-with-its-own-business/ | 2026 | [S] | Competitive-position rejections.
53 | Agency blog (Tru Commerce) | ChatGPT Ads Policy: Review, Rejections, Not Serving | https://trucommerce.ai/insights/chatgpt-ads-policy | 2026 | [S] | Half of "rejections" are verification/billing holds; domain must match verified business.
54 | Guide (IndexLab) | ChatGPT ads creative specs | https://www.indexlab.ai/guides/chatgpt-ads/creative-specs | 2026 | [S] | Title 50/desc 100 max; OpenAI suggests 16-24 / 32-48 chars.
55 | Agency case (Intelegencia) | ChatGPT Ads Financial Services Case Study | https://www.intelegencia.com/case-studies/marketing/reducing-cost-per-lead-with-chatgpt-ads | 2026 | [S] | VENDOR: advisor-matching platform cut cost per approved lead 80%.
56 | Agency (WKND) | ChatGPT Ads Case Studies | https://wkndagency.com/case-studies/chatgpt-ads/ | 2026 | [S] | Snippets: SF law firm $105 CPL vs $248 Google; SaaS $80.70/signup (page didn't render).
57 | Agency blog (Digital Applied) | ChatGPT Ads CPA Bidding: Should You Shift Budget Now? | https://www.digitalapplied.com/blog/chatgpt-ads-cpa-bidding-decision-guide-2026 | 2026 | [S] | CPA bidding decision guide.
58 | Trade press (MarTech) | ChatGPT Ads adds conversion bidding and stronger measurement | https://martech.org/chatgpt-ads-adds-conversion-bidding-and-stronger-measurement/ | 2026-07 | [S] | oCPC = optimize to conversions, pay per click.
59 | Agency blog (WebFX) | ChatGPT Ads Manager: How It Works and Who Should Test It | https://www.webfx.com/blog/ai/chatgpt-ads-manager/ | 2026 | [S] | Self-serve overview.
60 | Trade press (AdExchanger) | How ChatGPT Justifies Its CPMs; Is "Chatbot Ads" Its Own Specialty? | https://www.adexchanger.com/daily-news-roundup/friday-28082026/ | 2026-08-28 | [S] | Jellyfish client -33% CPM, -26% CPC via optimization.
61 | Guide (OpenAI Help, practitioner-cited) | Ads Manager Beta Account Setup | https://help.openai.com/en/articles/20001213-ads-manager-beta-account-setup | 2026 | [S] | Rolling verification queue.
62 | Vendor (Canada) | ChatGPT Ads in Canada: what businesses need to know | https://mostailabs.com/resources/chatgpt-ads-canada | 2026 | [S] | CA$25 min/day; health/finance/legal generally prohibited outside US.
63 | Agency blog | ChatGPT Ads Arrive in AU, NZ, Canada: Agency Primer | https://www.digitalapplied.com/blog/chatgpt-ads-australia-new-zealand-canada-primer | 2026 | [S] | Canada ~5.4% of WAU.
64 | Comparison blog | ChatGPT Ads vs Google Ads vs Meta Ads in 2026 | https://www.pingaura.ai/blog/chatgpt-vs-google-vs-meta-ads-2026 | 2026 | [S] | "Google captures, Meta creates, ChatGPT meets you at the decision."

### LinkedIn
65 | LinkedIn post (Christopher Brennan) | "I think I just did something cool with ChatGPT Ads and news" | https://www.linkedin.com/posts/christopher-brennan-65565950_i-think-i-just-did-something-cool-with-chatgpt-activity-7473723996363165697-uSZt | 2026 | [F] | Trending-news "moment" hints beat generic keywords; 1.6% CTR.
66 | LinkedIn article (Bram Van der Hallen) | June 2026 Updates - ChatGPT Ads | https://www.linkedin.com/pulse/june-2026-updates-chatgpt-advertising-bram-van-der-hallen-of00e | 2026-06 | [F] | Daily budget switch, clone CPM->CPC; snippet: 3-day Germany test 1.25% CTR, EUR1.42 CPC.
67 | LinkedIn post (Juozas Kaziukenas) | OpenAI Ads Manager: targeting and campaign options | https://www.linkedin.com/posts/juozas_openai-is-working-on-an-ads-manager-here-activity-7449435928995012608-PL8C | 2026-05 | [F] | Context hints = relevance by conversation, not audience; "super basic" v1.
68 | LinkedIn (Stephan Stensky, Boost IT) | ChatGPT Ads test learnings | https://www.linkedin.com/in/stephanstensky/ | 2026 | [S] | "Context hints is the key lever."

### X / Twitter
69 | X (Eric Seufert) | OpenAI introduces visual ads to ChatGPT | https://x.com/eric_seufert/status/2107137199623778740 | 2026-10 | [S] | Image-gen unit is display in low-commercial-intent context.
70 | X (Wall St Engine quoting Digiday) | ChatGPT ad rates have fallen sharply | https://x.com/wallstengine/status/2045203100382998787 | 2026-04 | [S] | CPM $60 -> $25; minimum $250K -> $50K.
71 | X (Glenn Gabe) | More examples of ChatGPT ads in the wild | https://x.com/glenngabe/status/2025541132646539396 | 2026-02 | [S] | Early ads large on mobile; targeting off.
72 | X (Barry Schwartz) | OpenAI email to advertisers incl. Sponsored Agents format | https://x.com/rustybrick/status/2100254724100374617 | 2026 | [S] | New "Sponsored Agents" format mentioned.
73 | X (AGTP) | New visual ad format in ChatGPT | https://x.com/AGTPinsights/status/2107070764260470965 | 2026-10 | [S] | Visual ads appear while images generate.
74 | X (Jason Yim) | OpenAI lining up advertisers, $1M pilot commitment, CPM | https://x.com/jasonyimco/status/2014677746384044205 | 2026-01 | [S] | Early CPM-only, high-commitment era.

### Reddit (all [2nd] via #47 or #127 unless noted)
75 | r/PPC | I got into the ChatGPT Ads Manager beta: first campaign setup walkthrough | n/a | 2026-05-21 | [2nd] | 15-day approval; free-text hints box.
76 | r/PPC | ChatGPT ads are (almost) here | n/a | 2026-01-19 | [2nd] | "Could be as big as Google Ads."
77 | r/PPC | ChatGPT Ads beta: early CTR: 0% / 1.15% / 2.4% | n/a | 2026-05-15 | [2nd] | Tiny sample, CTR 0-2.4%.
78 | r/PPC | ChatGPT Ads are missing the exact buyers Google reaches | n/a | 2026-09-07 | [2nd] | Paid-plan exclusion = "built-in ad blocker."
79 | r/PPC | Thoughts on ChatGPT Ads 3+ Weeks In | n/a | 2026-06-24 | [2nd] | "Bare"; daily > lifetime budgets.
80 | r/PPC | ChatGPT ads are here, but can we measure their performance? | n/a | 2026-05-26 | [2nd] | Demo requests landing as Direct.
81 | r/PPC | My thoughts on ChatGPT Ads | n/a | ~2026-07 | [2nd] | $34K: home services, car rental, real estate, injury law worked; criminal defense, SaaS, dental failed; pulsed delivery.
82 | r/PPC | Is anyone actually seeing meaningful results from ChatGPT Ads yet? | n/a | ~2026-07 | [2nd] | Still experimental.
83 | r/PPC | I integrated OpenAI's Ads Conversions API for e-commerce | n/a | ~2026-08 | [2nd] | oppref click id; used 90-day persistence.
84 | r/PPC | How's ChatGPT ads going for advertisers? | n/a | ~2026-06 | [2nd] | AU: $50 CPM vs ~$15 typical.
85 | r/PPC | 1 Week Running ChatGPT Ads: 2 Early Learnings | n/a | ~2026-07 | [2nd] | 1,000-word hints blocked delivery; headshots ~5% CTR vs logos ~0.5%.
86 | r/PPC | ChatGPT ads should have gone live for Europe yesterday | n/a | 2026-08-25 | [2nd] | Rollout lag by country.
87 | r/PPC | Anyone that have had success with ChatGPT ads? | n/a | ~2026-08 | [2nd] | No ROAS proof offered.
88 | r/PPC | ChatGPT ads (local service business) | n/a | ~2026-07 | [2nd] | Local SMB needs tracking help.
89 | r/PPC | My Experience with Chat GPT Ads | n/a | ~2026-05 | [2nd] | CPC <$6 then rising; geo leak (France conversion).
90 | r/PPC | Anybody positive experience with ChatGPT ads? | n/a | 2026-09-05 | [2nd] | Moved budget from Meta; CPA significantly higher.
91 | r/ChatGPT | ADS ON CHATGPT ARE HERE. | n/a | ~2026-04 | [2nd] | Users softened: ads small, labeled, below answer.
92 | r/ChatGPT | OpenAI isn't making money...but come on | n/a | ~2025-12 | [2nd] | User hostility re chat-based targeting.
93 | r/ChatGPT | Anthropic is airing this ad mocking ChatGPT ads during the Super Bowl | n/a | ~2026-02 | [2nd] | Skeptical sentiment.
94 | r/SEO | Is GEO a new skill to learn or is it similar to SEO? | n/a | 2026 | [2nd] | "Keyword stuffing became answer stuffing"; same signals win.
95 | r/bigseo | GEO/AIO is essentially just a scam | n/a | 2026 | [2nd] | Tools = overpriced dashboards, yet one agency sees 5-10 ChatGPT quote requests/week (~15% of leads).
96 | r/smallbusiness | Tested if ChatGPT recommends my business (it doesn't) | n/a | 2026 | [2nd] | AI surfaces names from third-party lists/reviews.
97 | r/smallbusiness | $2M in new business last quarter and ChatGPT has never recommended us once | n/a | 2026 | [2nd] | Revenue != AI visibility; get on comparison articles.
98 | r/SEO | Query fan-out thread (mod post) | n/a | 2026 | [2nd] | Rank for the sub-queries ChatGPT runs.
99 | r/SEO | llms.txt debunking threads | n/a | 2026 | [2nd] | llms.txt: no citation effect; 97% never fetched.

### YouTube (all [T] = title/channel via oEmbed; extra detail only where a search snippet existed)
100 | YouTube (Marketing Against the Grain / HubSpot) | ChatGPT Ads: The New Arbitrage for 2026 | https://www.youtube.com/watch?v=H7NJ1M1Udds | 2026 | [T] | Early-mover "arbitrage" framing.
101 | YouTube (Paul BRC - Google Ads) | Je teste ChatGPT Ads : le guide complet (Formation 2026) | https://www.youtube.com/watch?v=OsjrRtIMjvU | 2026 | [T] | French PPC creator test/guide.
102 | YouTube (Henry Purchase) | ChatGPT Ads: The $300B Opportunity in 2026 | https://www.youtube.com/watch?v=rPUNzpbWYJo | 2026 | [T] | Opportunity framing.
103 | YouTube (Michelle Kop - Level28 Media) | ChatGPT Ads: Complete Beginner's Guide (2026) | https://www.youtube.com/watch?v=YfOStV3OpLc | ~2026-06 | [T] | Google Ads creator's beginner walkthrough.
104 | YouTube (HubSpot Marketing) | How to Run ChatGPT Ads: The Complete Tutorial | https://www.youtube.com/watch?v=Dg3yC82J7To | 2026 | [T] | Tutorial.
105 | YouTube (Sanskar Tiwari) | I Ran Ads on ChatGPT: Real Results (Rs 3,634 Spent) | https://www.youtube.com/watch?v=rm2ZwNtuq9w | 2026-10 | [T] | India test, small spend.
106 | YouTube (Grow My Ads) | I Spent $1K on ChatGPT Ads - Here's the Truth | https://www.youtube.com/watch?v=02xU4Ch7UeM | 2026-06 | [T+S] | 92 clicks, $13 CPC, 0 conversions; commenters: clients never hit acceptable CPA.
107 | YouTube (Sean Standberry) | I Tested NEW ChatGPT Ads for My $400k/mo SMMA | https://www.youtube.com/watch?v=4CmOgFW_Xgw | 2026-06 | [T+S] | 14-day agency-offer test.
108 | YouTube (William Zhang, AI for Realtors) | I Spent $1,300 on ChatGPT Ads for Real Estate (Honest Results) | https://www.youtube.com/watch?v=tOvGj0GtIA8 | 2026-09 | [T+S] | Austin: 13 seller leads at ~$100.
109 | YouTube (Guus Goorts) | I Spent $400 on ChatGPT Ads. Are They Worth It? | https://www.youtube.com/watch?v=aE6XjviNpjY | 2026-07 | [T+S] | US education provider pilot.
110 | YouTube Short (Grow My Ads) | I Tested ChatGPT Ads So You Don't Have To | https://www.youtube.com/shorts/mOxy7ZRXr6E | 2026-07 | [T+S] | $1,200, 92 clicks, 0 conversions, almost no reporting.
111 | YouTube (Akinyemi Bajulaiye) | I Tested ChatGPT Ads for My App... Here's What Happened | https://www.youtube.com/watch?v=lEUAcarJIW4 | 2026 | [T] | App advertiser test.
112 | YouTube (Blake Bauer Business) | Do ChatGPT Ads Work? (Here's The Truth After $4k In Spend) | https://www.youtube.com/watch?v=U35KZmu10YM | 2026-07 | [T] | $4K test.
113 | YouTube (Artur Jablonski) | ChatGPT Ads - czy warto i ile to kosztuje? | https://www.youtube.com/watch?v=HJgfT2PlILs | 2026 | [T] | Polish: worth it / cost.
114 | YouTube (ZoCo Marketing) | How To RUN ADS on ChatGPT - Tutorial (For Beginners) | https://www.youtube.com/watch?v=UMofZiTBQE0 | 2026-06 | [T] | Setup.
115 | YouTube (RA Insights) | ChatGPT Ads Manager Account Setup Guide | https://www.youtube.com/watch?v=BkR0PUUM5zs | 2026-06 | [T] | Account setup.
116 | YouTube (Anand Iyer) | ChatGPT Ads Tutorial 2026: Full Setup, Every Setting | https://www.youtube.com/watch?v=h3aDJrLt_aE | 2026-09 | [T] | Every setting.
117 | YouTube (Malte Helmhold) | ChatGPT Ads einrichten: Anleitung inkl. Conversion-Tracking | https://www.youtube.com/watch?v=TAcgCUnRhNw | 2026 | [T] | German, includes conversion tracking.
118 | YouTube (Scott Redgate) | How to Advertise in ChatGPT: OpenAI Ads Tutorial | https://www.youtube.com/watch?v=fammyH5_K4o | 2026-05 | [T] | Step-by-step.
119 | YouTube (Henry Purchase) | How To Set Up A ChatGPT Ads Account (2026 Guide) | https://www.youtube.com/watch?v=dq7h1IiA28Y | 2026 | [T] | Setup.
120 | YouTube (Intellemo) | How to Run ChatGPT Ads: Complete OpenAI Ads Manager Tutorial 2026 | https://www.youtube.com/watch?v=Td1hSG_vuzI | 2026-06 | [T] | Tutorial.
121 | YouTube (Chris Michael Harris) | ChatGPT Ads - Full Setup Guide [For Business Owners] | https://www.youtube.com/watch?v=9mbSHX4Wtcc | 2026-07 | [T+S] | "Biggest paid-ads opportunity in 15 years" hype.
122 | YouTube (Marcelo Ely) | ChatGPT Ads Tutorial: How to Set Up & Run Ads in ChatGPT | https://www.youtube.com/watch?v=pQ_eOLKTDCs | 2026 | [T] | Media buyer tutorial.
123 | YouTube (Brad Smith) | How to ADVERTISE on CHATGPT Ads (Full Tutorial) | https://www.youtube.com/watch?v=jtV3hL7Xrf8 | 2026 | [T] | Tutorial.
124 | YouTube Short | Context Hints Tutorial - ChatGPT Ads | https://www.youtube.com/shorts/HsuSzte1LRk | 2026-10 | [S] | "Context hints are NOT keywords."
125 | YouTube | How to Convert Google Ads Keywords into ChatGPT Context Hints | https://www.youtube.com/watch?v=jWZDtH56NGo | 2026-06 | [S] | Map keyword themes to hints.
126 | YouTube | Episode 13 - The Thinking Behind Ads in ChatGPT | https://www.youtube.com/watch?v=2agJo3Jf_O4 | 2026 | [S] | Title only.
127 | YouTube (GEO) Ruan M. Marinho | AEO Explained: How Local Businesses Get Recommended by ChatGPT... | https://www.youtube.com/watch?v=WPWy-WGp9iE | 2026 | [T] | Local AEO.
128 | YouTube (GEO) Income Stream Surfers | Mastering AEO + GEO: How I Got ChatGPT To Rank My Tool #1 | https://www.youtube.com/watch?v=_19vtYKMmZg | 2026 | [T] | Practitioner GEO claim.
129 | YouTube (GEO) Forbes | SEO Is Over: How To Get AI To Recommend Your Small Business | https://www.youtube.com/watch?v=Pv6N4OrP7YI | 2026 | [T] | SMB AEO.
130 | YouTube (GEO) Elevated Marketing Solutions | Local AEO: How to Get Picked by ChatGPT and Google's Local Results | https://www.youtube.com/watch?v=evApBnnaAKE | 2026 | [T] | Local AEO.
131 | YouTube (GEO) Marketing Against the Grain | How To Get Your Website Recommended by ChatGPT | https://www.youtube.com/watch?v=PO5mPCad5y0 | 2026 | [T] | GEO.
132 | YouTube (GEO) TM Blast | Why ChatGPT is Not Recommending Your Business | https://www.youtube.com/watch?v=ERWeIZ1JUdA | 2026 | [T] | GEO.
133 | YouTube (GEO) Digital Niche Agency | How to Rank on ChatGPT and Claude - GEO Webinar | https://www.youtube.com/watch?v=ClT7JBQFJGA | 2026 | [T] | GEO webinar.
134 | YouTube (GEO) Plumbing & HVAC SEO | How to Get Ranked in ChatGPT - AEO & GEO Strategies | https://www.youtube.com/watch?v=oTxopuYDNTM | 2025 | [T] | Trades-specific GEO.

### Podcasts
135 | Podcast (The Paid Search Podcast) | Ep 525: ChatGPT Ads vs Google Ads | https://podcasts.apple.com/gb/podcast/the-paid-search-podcast-a-weekly-podcast-about/id1097687350 | 2026-08-10 | [S] | Comparison episode (description only).
136 | Podcast (Marketing O'Clock) | It's CPC's World: CPC Campaigns Are Live for Some... | https://podcasts.apple.com/za/podcast/its-cpcs-world-cpc-campaigns-are-live-for-some-cpc/id1401725029?i=1000763800600 | 2026-04-27 | [S] | CPC bidding rollout news.
137 | Podcast (Marketing O'Clock) | New ChatGPT Ads News!?!? Updates and Best Practices! | (Apple Podcasts listing) | 2026-05-11 | [S] | Early access to conversion-optimized campaigns for those with tracking by June 1.
138 | Podcast (Digiday) | ChatGPT ad delivery struggles are testing advertiser patience | https://digiday.com/podcasts/chatgpt-ad-delivery-struggles-are-testing-advertiser-patience/ | 2026 | [T] | Underdelivery theme.
139 | Podcast (Little Talks) | What we know about ChatGPT ads | https://www.podbean.com/itunes/1460324862 | 2026-01-29 | [S] | Pre-launch Q&A.

### GEO / AEO research and practitioner content
140 | Research (SparkToro + Gumshoe) | AI recommendation lists rarely repeat | https://searchengineland.com/ai-recommendation-lists-rarely-repeat-study-468076 | 2026 | [S] | <1% identical lists; measure visibility %, not rank.
141 | Research (Ahrefs) | Top Brand Visibility Factors in ChatGPT, AI Mode, AI Overviews (75K brands) | https://ahrefs.com/blog/ai-brand-visibility-correlations | 2025/2026 | [S] | YouTube mentions ~0.74, branded mentions 0.66-0.71 vs backlinks 0.22.
142 | Blog (Ahrefs, Si Quan Ong) | How to Rank on ChatGPT | https://ahrefs.com/blog/how-to-rank-on-chatgpt | 2026-03-13 | [F] | YouTube, mentions, Reddit, BLUF, freshness, unblock bots.
143 | Research (BrightLocal) | Local AI visibility study | https://www.brightlocal.com/research/local-ai-visibility-study/ | 2026-09-16 | [F] | 200K searches; ChatGPT 4.1 biz/answer; websites 42% of citations, Yelp 9.5%.
144 | Blog (MarketingCode citing SOCi) | ChatGPT Recommends Only 1.2% Of Local Businesses | https://www.marketingcode.com/chatgpt-recommends-1-percent-local-businesses-contractors/ | 2026-04-17 | [F] | 1.2% of locations; service pages, FAQs, schema.
145 | Agency stats (Rise at Seven) | AEO/AI Search & Citation Statistics 2026 | https://riseatseven.com/blog/aeo-ai-search-statistics/ | 2026 | [F] | ChatGPT referrals +206% YoY; 83% of commercial citations <12 months old (one date in page looks wrong).
146 | Research review (Radiant Elephant) | What Works in GEO: 15 Evidence-Backed Tactics, 7 Speculative | https://www.radiantelephant.com/geo-tactics-what-works-evidence-based-research-review/ | 2026 | [F] | Stats/quotes, answer-first, mentions, freshness, SSR; llms.txt no effect.
147 | Agency research (Seer Interactive) | ChatGPT 5.5's fanout patterns reveal the importance of brand | https://www.seerinteractive.com/insights/the-proof-chatgpt-5.5s-fanout-patterns-reveal-the-importance-of-brand | 2026-06-25 | [F] | Fan-outs are brand-specific; brand authority wins.
148 | Agency research (Seer Interactive) | Case study: 6 learnings about how traffic from ChatGPT converts | https://www.seerinteractive.com/insights/case-study-6-learnings-about-how-traffic-from-chatgpt-converts | 2025 | [S] | 15.9-16% vs 1.76% CVR (single B2B client).
149 | Newsletter (jon4growth Substack) | How I'm optimizing AEO with Reddit | https://jon4growth.substack.com/p/how-im-optimizing-aeo-with-reddit | 2025-11-05 | [F] | Real-identity, value-first Reddit replies 30 min/week.
150 | Roundup (Sort The Clicks) | AI SEO in 2026: What Reddit Actually Says About GEO and AEO | https://sorttheclicks.com/ai-seo-reddit/ | 2026 | [F] | Source for #94-99; GEO ~80% SEO overlap.
151 | Newsletter (Lily Ray Substack) | Are Citations in AI Search Affected by Google Organic Visibility Changes? | https://lilyraynyc.substack.com/p/are-citations-in-ai-search-affected | 2026 | [T] | Title only; Ray also showed AI engines absorbed a fabricated ranking within 24h (via Profound list).
152 | Research (Whitespark via secondary) | 2026 local search findings | https://www.elev8operations.com/guides/ai-search-statistics-for-local-businesses-2026 | 2026 | [S] | Local and AI signals have merged; AIO on 68% of local queries.

## 10. Source count by platform (152 items)
- Blogs / agency / vendor / trade press articles: 64 (#1-64) - ~40 fully read
- LinkedIn: 4 (#65-68) - 3 fully read
- X/Twitter: 6 (#69-74) - snippets only (x.com fetch returned 402)
- Reddit: 25 threads (#75-99) - all second-hand via roundups (#47, #150); reddit.com fetch blocked
- YouTube: 35 videos (#100-134) - titles/channels only; ~7 with snippet details; no transcripts accessible
- Podcasts: 5 (#135-139) - descriptions only
- GEO/AEO research & newsletters: 13 (#140-152)
- Instagram / TikTok: 0 usable (searches returned only "use ChatGPT to write ads" content)
