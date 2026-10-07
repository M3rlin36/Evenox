# Ads inside AI assistants: latest research (Jul–Oct 2026), with a focus on Canada
Compiled 2026-10-07. Focus: what's new, alternatives to ChatGPT, French-language content, and social video.

## Legend for "what was read"
- **FULL**: the page was fetched with WebFetch and its text summarized (a model summary, not a verbatim read).
- **SNIPPET**: only the search-engine title and snippet were seen. The page itself was not opened (blocked, 403/429, or not attempted).
- **YT-META**: a YouTube video. Only the **title and channel** were confirmed, via YouTube oEmbed, plus the search snippet or description excerpt. YouTube watch pages, transcripts, and yt-dlp were all blocked from this environment (bot wall / "Sign in to confirm you're not a bot"). **No video was watched and no transcript was read.** Upload dates are approximate: they come from the search engine's "N days ago" label, counted back from 2026-10-07.
- **IG-SNIPPET**: an Instagram profile or post seen only as a search title or snippet. Instagram returned 429 on direct fetch. **No reel was viewed.**

---

## 1. Synthesis

### ChatGPT Ads (OpenAI)
- **Canada status: LIVE and self-serve.** Ads have served to Free and Go users in Canada since about Apr 16–17, 2026 (CA/AU/NZ wave). Canada was one of the original nine Ads Manager markets. OpenAI's own "Ads Manager availability" help page (seen via snippet) lists Canada as available. The legal entity that advertises and is billed must be registered in an available country.
- **Access and minimums:**
  - Self-serve at ads.openai.com, with no lifetime minimum. Minimum daily budget is **CA$25 per campaign** (OpenAI help table, seen via snippet; corroborated by mostailabs and creativewebworks).
  - Managed or agency routes also exist: StackAdapt, Criteo, and Canadian agencies such as Zigma, Oriana (QC), Cinetic (QC) and JB Impact.
  - Early-2026 minimums of $200k, then $50k, are obsolete. Some Canadian blogs (latinlaunch, digitalapplied CA primer, trek.ca) still cite them.
- **Canada constraints:**
  - Geo-targeting in Canada is country-level only. There is no province or city targeting, so no Quebec-only campaign (Gerber Media, digitalapplied, Choice OMG; sub-country targeting exists only in the US).
  - Health, finance and legal ads are generally not allowed outside the US. The July 15 health/finance opening is US-only.
  - Also prohibited: alcohol, gambling, dating, politics and similar categories.
- **Formats:**
  - Sponsored card below the answer, with logo, title (50 characters), description (100 characters) and a 256px image.
  - Product carousels and shopping results. Since Sep 4, shopping results require a connected product feed.
  - Compact static cards.
  - **Sponsored Agents**: a conversational ad unit, US test only, announced Sep 16.
  - **Visual ads during image generation**: US test announced Oct 5, starting later in October.
- **Bidding and measurement:**
  - Bidding: CPM, CPC and oCPC. oCPM became generally available Sep 16.
  - Measurement: Pixel and Conversions API, custom audiences, adjustable attribution windows (7/14/30-day click, 0/1-day view), and five-way platform targeting.
  - Integrations and tools: HubSpot and Shopify (Shopify international from Sep 23), plus an Ads Manager plugin inside ChatGPT.
  - Partners: 20+ measurement partners, with DoubleVerify and IAS running brand-safety pilots (Oct 5).
- **Scale:**
  - $1B annualized run rate on Aug 31, about 200 days after launch. Digiday estimates about $83M per month.
  - Advertisers: about 1,200 unique US advertisers in August (Sensor Tower). OpenAI says "tens of thousands" overall.
  - Markets: about 63 countries as of late September.
- **Early performance (no official benchmarks; OpenAI says so itself):**
  - US CPCs range from under $3 to $13, with one report of $22. CTR is commonly 0.5–1.3%.
  - Canada: Choice OMG ran 8,940 impressions for 58 clicks (0.65% CTR) at CA$4.42–4.88 CPC, with 0 qualified B2B leads. Falia (B2B) saw a 0.9% conversion rate versus 5.95% on Google.
  - JB Impact (Quebec agency) claims CA$1.32 CPC, 1.26% CTR, CA$14.86 CPM and a "3.2x" conversion rate versus Google. This is agency-claimed and unverified.
  - France is very cheap: CPC €0.16–2 and CPM about €10–12. Kalyvox measured €0.16 CPC and 4.83% CTR in France versus €3.33 CPC and 0.56% CTR in the US, but warns about traffic quality.
  - Positive vendor-reported results: WeightWatchers' attributed CPA was 15.3% below its paid-search benchmark, and Dose saw 2.3x incremental orders (via WorkMagic). Criteo reports AI-referral traffic converting about 1.5x better.
  - Consensus: the channel works for awareness and consideration but is weak for B2B, because decision-makers are on paid, ad-free plans.

### Microsoft Copilot (Microsoft Advertising)
- **Canada status: LIVE, with no separate buy.** Copilot is a placement, not a campaign type. Eligible Search, Shopping, PMax and AI Max campaigns are automatically eligible, and advertisers can't opt out.
  - Microsoft has said ads in Copilot are fully ramped in English-, French- and German-language markets. A secondary source lists Canada among live markets as of July 2026.
  - Microsoft AI Max (which includes Copilot placements) has been open since May 20 in the US, UK, Canada and Australia, per an agency blog.
- **Access:** standard Microsoft Advertising self-serve, with very low minimums (about $5 per month).
- **Formats:**
  - Ads below Copilot answers.
  - Offer Highlights: retail, English markets, US-first.
  - Showroom Ads and Brand Agents: pilot only.
  - Copilot Checkout: US.
  - Copilot Audience Generation: closed beta in US/CA/UK/AU (September 2026).
- **Performance (Microsoft first-party claims):** 73% higher CTR, 16% higher conversion rate, 25% better relevance, and 194% higher likelihood of converting when shopping intent is present. Brand Agents show about 2x conversion lift. These are not independently verified, and Microsoft provides no separate Copilot reporting.

### Google AI Overviews / AI Mode
- **AI Overviews ads, Canada: LIVE in English only**, on mobile and desktop, since Dec 19, 2025 (Google Ads Help, read in full).
  - AI Overviews themselves do not support French in Canada, so there is no French AIO ad inventory.
  - Ads come automatically from Search, Shopping and PMax campaigns. There is no opt-out and no separate reporting; they are counted as "Top ads".
- **AI Mode ads: US only.**
  - Formats: Shopping ads in AI Mode (inline carousel since Aug 31), Conversational Discovery ads and Highlighted Answers (US tests), Business Agent for Leads (US open beta), and the Direct Offers pilot.
  - Google said Canada and Australia would follow "in the coming months" (GML, May 20). No Canada launch had been confirmed as of early October.
  - Canada-relevant pieces that are live: Loyalty Customer Match in AI Mode (14 countries including Canada, Oct 3), and AI Performance Insights (share-of-voice in AI Mode and AIO) generally available in Canada.
- **Gemini app: no ads.** Google denied plans in December 2025, then said in April 2026 it was "open-minded". Shopify native checkout in Gemini and AI Mode is US-only (Sep 22).
- **Performance:** no official CTR or CPA for AI Mode ads. Third-party data: ads appear in about 25% of AI results, and only 1.28% of Shopping-carousel products also appear in AI Mode for the same query.

### Perplexity
- **No ads, anywhere, including Canada.** Perplexity stopped onboarding advertisers in October 2025 and announced a full exit in February 2026, moving to a subscription model.
  - Comet: "not on the roadmap."
  - The only options are organic/AEO visibility and the publisher program.

### Meta AI
- **No ads inside Meta AI conversations** that could be confirmed as of October 2026. Meta declined to comment on plans.
- Since Dec 16, 2025, Meta has used Meta AI chats as an ad-targeting signal on FB/IG/WhatsApp/Messenger. This applies in Canada; only the EU, UK and South Korea are excluded, and there's no user opt-out. In practice, ads "informed by" AI chats are bought through normal Meta Ads Manager.
- New for Canada: **Muse for Small Business** (Sep 29, US and Canada). It is an AI agent that analyzes and drafts Meta campaigns. It is not an ad placement.

---

## 2. Source log (numbered)

Format: # | Platform/Type | Title | URL | Date | What was read | Takeaway

### A. ChatGPT Ads: news and analysis (English)
1. | Web/blog (Common Thread Co) | ChatGPT Ads September 2026: Product Feeds Now Required… | https://commonthreadco.com/blogs/coachs-corner/chatgpt-ads-september-2026-product-feeds-now-required-platform-expands-globally-and-the-new-tools-ecommerce-brands-need-right-now | 2026-09-04 | FULL | Shopping results now require a product feed; Ads Manager plugin; Pixel advanced matching; VTC billing coming.
2. | News (MediaPost) | ChatGPT Ad Results Are Not Yet Clear | https://www.mediapost.com/publications/article/417746/chatgpt-ad-results-are-not-yet-clear.html | 2026-09-08 | FULL | CPC ranges from under $3 to $10–13; no benchmarks six months in.
3. | Blog (Digital Applied) | Where ChatGPT Ads Are Sold: Every Market, Every Date | https://www.digitalapplied.com/blog/where-chatgpt-ads-are-sold-every-market-and-date | 2026-09-01 | FULL | Market timeline; Canada was managed-only in April, self-serve later (some date conflicts with other sources).
4. | Blog (Qwestyon) | ChatGPT Ads Updates: What's New (Sept 2026) | https://www.qwestyon.com/blog/chatgpt-ads-updates | 2026-09/10 | FULL | Dated changelog from Jul 7 to Sep 30 (audiences, oCPC, carousels, Sponsored Agents, SEA launch).
5. | News (PPC Land) | OpenAI gains 20 measurement partners for ChatGPT Ads | https://ppc.land/openai-gains-20-measurement-partners-for-chatgpt-ads | 2026-10-05 | FULL | 22 partners; WeightWatchers CPA 15.3% below search benchmark; Dose 2.3x incrementality (vendor-reported).
6. | OpenAI | ChatGPT Ads expands to Southeast Asia and Taiwan | https://openai.com/index/chatgpt-ads-expands-southeast-asia-taiwan/ | 2026-09-23 | SNIPPET (403 on fetch) | Rollout to 7 Southeast Asian markets plus Taiwan.
7. | Blog (Longhouse, CA) | ChatGPT Ads in Canada: Early Strategy and Findings | https://www.longhouse.co/blog/chatgpt-ads-in-canada-early-strategy-and-findings/ | 2026 (summer) | FULL | Canada rollout Apr 16; CPC $3–5 USD guidance; better for top of funnel.
8. | Blog (Creative WebWorks, CA) | ChatGPT Ads in Canada: What's Live and What to Do | https://www.creativewebworks.ca/blog/chatgpt-ads-canada | 2026 | FULL | Self-serve; CA$25/day minimum; restricted-category list for Canada.
9. | Blog (Thread Digital, CA) | ChatGPT Ads Rollout in Canada | https://threaddigital.ca/chatgpt-ads-are-now-rolling-out-across-canada/ | mid-2026 | FULL | Vague "gradual rollout" piece; low value.
10. | Blog (Oakpool) | Are ChatGPT Ads Available in Canada? | https://oakpool.xyz/drift/chatgpt-ads-available-in-canada/ | 2026 | FULL | Says yes; contains a date error (claims a March launch).
11. | Blog (LatinLaunch) | ChatGPT Ads in Canada 2026 | https://latinlaunch.com/blog/chatgpt-ads-canada-2026-smbguide/ | ~Apr–May 2026 | FULL | Outdated: cites a $50k managed minimum and $60 CPM.
12. | Blog (Little Dragon, CA) | ChatGPT Ads in Canada: What Every Business Owner Needs to Know | https://littledragon.ca/chatgpt-ads-in-canada-what-every-business-owner-needs-to-know/ | 2026 | FULL | CTR about 1% vs 6%+ on Google; CPM easing to $25–45.
13. | Blog (Soku) | ChatGPT Ads Minimum Daily Budgets by Country (India row) | https://soku.ai/blog/chatgpt-ads-minimum-budgets-by-country | 2026-08-19 | FULL | Minimums follow billing currency; India ₹725; tiered by market.
14. | Guide (GPT Ads AI) | ChatGPT Ads Countries: All 63 Markets | https://www.gptadsai.com/guides/chatgpt-ads-countries | late Sep 2026 | FULL | 63 countries; the billing entity must be in an eligible country; country, currency and time zone can't be changed later.
15. | Agency (Index Lab) | Where ChatGPT Ads are available: country list | https://www.indexlab.ai/services/chatgpt-ads/availability | 2026-09-22 | FULL | 63 countries; Canada self-serve; budget table covers 30 currencies.
16. | Agency (Index Lab) | ChatGPT Ads in Canada: managed campaigns | https://www.indexlab.ai/services/chatgpt-ads/ca | 2026 | FULL | Canada-registered businesses can open accounts; billing in CAD.
17. | Resource (MostAI Labs) | ChatGPT Ads in Canada: what businesses need to know | https://mostailabs.com/resources/chatgpt-ads-canada | ~Sep 2026 | FULL | CA$25/day; health, finance and legal prohibited outside the US; September features listed.
18. | OpenAI Help (search) | Ads Manager availability (art. 20001245) | https://help.openai.com/en/articles/20001245-ads-manager-availability | rolling | SNIPPET (403) | Canada listed as available; large EU/MENA/Asia list.
19. | OpenAI Help (search) | Create campaigns for ChatGPT ads (art. 20001210) | https://help.openai.com/en/articles/20001210-create-campaigns-for-chatgpt-ads | rolling | SNIPPET (403) | Minimum daily budget table: Canada $25 CAD.
20. | OpenAI policy (search) | Ad policies | https://openai.com/policies/ad-policies/ | rolling | SNIPPET | Prohibited categories; no ads in sensitive conversations.
21. | News (TechWyse) | OpenAI Opens ChatGPT Ads to Some Health and Finance Advertisers | https://www.techwyse.com/news/platform-updates/chatgpt-ads-health-finance-advertisers-openai | 2026-08-13 (policy Jul 15) | FULL | Health and finance opening is US-only; legal still banned.
22. | News (Android Headlines) | ChatGPT Free Tier Is Getting Visual Ads During AI Image Generation | https://androidheadlines.com/2026/10/chatgpt-visual-ads-image-generation.html | 2026-10 | FULL | Visual banner during image generation; US test.
23. | News (TechCrunch) | OpenAI launches visual ads that appear alongside image generation results | https://techcrunch.com/2026/10/05/openai-launches-visual-ads-that-appear-alongside-image-generation-results/ | 2026-10-05 | FULL | US-only test group; DV/IAS suitability pilots; Haus/Measured/WorkMagic geo experiments.
24. | News (9to5Google) | ChatGPT is adding new ads | https://9to5google.com/2026/10/05/chatgpt-is-adding-new-ads/ | 2026-10-05 | FULL | OpenAI claims lower customer acquisition cost and higher new-customer rates (no numbers).
25. | OpenAI (search) | Building advertising for the way people use AI | https://openai.com/index/new-chatgpt-ads-format-and-measurement/ | 2026-10-05 | SNIPPET | Official visual-ad and measurement post.
26. | News (Yahoo/others) | OpenAI Is Putting Visual Ads Next to Your ChatGPT Image Results | https://finance.yahoo.com/media-advertising/articles/openai-putting-visual-ads-next-184547191.html | 2026-10 | SNIPPET | Same news.
27. | News (Winbuzzer) | ChatGPT to Test Visual Ads During Image Generation | https://winbuzzer.com/2026/10/05/chatgpt-to-test-visual-ads-during-image-generation-xcxwbn/ | 2026-10-05 | SNIPPET | Same news.
28. | News (Unite.AI) | OpenAI Tests Sponsored Agents and Rolls Out AI Tools for ChatGPT Ads | https://www.unite.ai/openai-tests-sponsored-agents-and-rolls-out-ai-tools-for-chatgpt-ads/ | 2026-09-16 | FULL | Sponsored Agents (US); AI creative; HubSpot/Shopify; $500 credit offer.
29. | News (PPC Land) | OpenAI lets advertisers run ChatGPT ads from HubSpot and Shopify | https://ppc.land/openai-lets-advertisers-run-chatgpt-ads-from-hubspot-and-shopify/ | 2026-09-16 | FULL | Attribution windows; oCPM GA; HubSpot $750 match; Shopify international Sep 23.
30. | News (Resident) | OpenAI Is Turning ChatGPT Ads Into Conversations | https://resident.com/tech-and-gear/2026/09/29/openai-chatgpt-ads-sponsored-agents-conversations | 2026-09-29 | FULL | Sponsored Agents explained.
31. | News (AIXH) | ChatGPT Ads: attribution, targeting and Sponsored Agents test | https://www.aixh.com/en/news/chatgpt-ads-measurement-sponsored-agents-test/ | 2026-09-17 | FULL | Attribution remains last-touch; impression billing can't be changed after launch.
32. | News (Enterprise DNA) | OpenAI Launches Sponsored Agents Inside ChatGPT | https://enterprisedna.co/resources/news/openai-sponsored-agents-chatgpt-hubspot-shopify-2026/ | 2026-09 | SNIPPET | Same.
33. | News (PYMNTS) | OpenAI Tests Sponsored AI Agents in ChatGPT Ads | https://www.pymnts.com/news/artificial-intelligence/2026/openai-tests-sponsored-ai-agents-in-chatgpt-ads/ | 2026-09 | SNIPPET | Same.
34. | News (PYMNTS) | OpenAI Says Ad Business Reaches $1 Billion Run Rate | https://www.pymnts.com/news/artificial-intelligence/2026/openai-says-ad-business-reaches-1-billion-run-rate/ | 2026-08-31 | FULL | "Tens of thousands" of advertisers; 50+ partners; $2.5B 2026 target.
35. | News (Digiday) | ChatGPT ads business hits $1B run rate as Europe gets self-serve | https://digiday.com/media-buying/openais-chatgpt-ads-business-hits-1-billion-run-rate-as-europe-gets-self-serve-access/ | 2026-08-31 | FULL | About $83M per month; about $330M booked in 8 months; behind its $2.5B goal.
36. | News (MediaPost) | ChatGPT Ads Reaches $1B Annualized in 200 Days | https://www.mediapost.com/publications/article/417561/chatgpt-ads-reaches-1b-annualized/ | 2026-08-31 | FULL | Mixed advertiser feedback (0.6% CTR vs 2% on search); Nate Elliott skeptical.
37. | News (PPC Land) | ChatGPT ads pass $1bn run rate as financial services spend triples | https://ppc.land/chatgpt-ads-pass-1bn-run-rate-as-financial-services-spend-triples/ | 2026-09 | FULL | Sensor Tower: 1,200 US advertisers in August; finance spend share 2% to 13%; carousel on 23% of desktop placements.
38. | OpenAI (search) | A milestone in expanding access to AI | https://openai.com/index/expanding-access-to-ai-with-chatgpt-ads/ | 2026-08-31 | SNIPPET | Official $1B post.
39. | News (SEJ) | 6 Months Into ChatGPT Ads, Advertisers Still Don't Know What 'Good' Looks Like | https://www.searchenginejournal.com/6-months-into-chatgpt-ads-advertisers-still-dont-know-what-good-looks-like/587583/ | 2026-08/09 | FULL | CPC from under $3 to $22 (NZ $22.89, UK $5.10); second-price relevance-weighted auction; no auction insights.
40. | Inc. | ChatGPT Ads Convert 1.5 Times Better, but They Aren't for Every Brand | https://www.inc.com/amy-zwagerman/chatgpt-ads-convert-1-5-times-better-but-they-arent-for-every-brand/91409026 | 2026 | SNIPPET (403) | 1.5x conversion claim (Criteo).
41. | Agency test (Grow My Ads) | Should You Advertise on ChatGPT? Our Honest Take After $1,000 | https://growmyads.com/chatgpt-ads-review/ | 2026-08 | FULL | $1.2k spend, 92 clicks, $13 CPC, 0 conversions (B2B).
42. | Agency test (Scopic) | We Tested ChatGPT Ads in 2026 | https://scopicstudios.com/blog/ads-in-chatgpt | 2026-08-27 | FULL | 17 days at $25/day; $2.74 CPC; 0.86% CTR; ROI unproven.
43. | Agency test (Cleverly) | We Tested ChatGPT Ads | https://www.cleverly.co/blog/chatgpt-ads | 2026-09-08 | FULL | 57 platform clicks vs under 20 GA sessions; 0 conversions; paused.
44. | Agency test (Symphonic Digital) | We Ran a ChatGPT Ad Campaign | https://www.symphonicdigital.com/blog/chatgpt-ads-test-results | 2026-08 | FULL | 53 clicks / 35 sessions; about $9 CPC (effective bid about $12); 0 leads.
45. | Agency test CA (Choice OMG) | ChatGPT Ads in 2026, Updated August | https://choice.marketing/blog/chatgpt-ads-2026-field-guide/ | 2026-08 | FULL | ON/AB test: 0.65% CTR, CA$4.42–4.88 CPC, 0 qualified leads; sub-country geo-targeting US-only.
46. | Agency test CA (Falia) | ChatGPT Ads: our Canada test | https://falia.co/en/insights/paid-advertising/chatgpt-ads-test-canada/ | 2026 (spring test) | FULL | B2B conversion rate 0.9% vs 5.95% on Google; advises French creative and Law 25 consent.
47. | Agency (Index Web Marketing, CA) | ChatGPT Ads Cost in Canada: Formats and Rates | https://www.indexwebmarketing.com/en/chatgpt-ads-cost-formats/ | 2026-07-11 | FULL | Estimates CPC CA$4–7 (retail) and CA$11–25 (software/finance), CPM CA$35–85.
48. | Agency (Zigma, CA) | ChatGPT Ads Canada | https://zigma.ca/services/chatgpt-ads-canada/ | 2026 | FULL | Toronto agency managing ChatGPT ads; CPM about $45 with a $20 floor (agency claim).
49. | Agency (Gerber Media, CA) | ChatGPT ads are now available to advertise in Canada | https://www.gerbermedia.ca/blog/chatgpt-ads-are-now-available-to-advertise-in-canada | ~May 27, 2026 | FULL | No province, city or postal targeting in Canada.
50. | Blog (Trek, CA) | ChatGPT Ads in Canada: What Canadians Should Watch For | https://trek.ca/chatgpt-ads-in-canada-what-canadians-should-watch-for/ | 2026-03-12 | FULL | OUTDATED (pre-launch); recommends bilingual copy.
51. | DSP (StackAdapt) | How to advertise on ChatGPT | https://www.stackadapt.com/resources/blog/how-to-advertise-on-chatgpt | 2026 | FULL | StackAdapt is a partner access route besides self-serve.
52. | Blog (Digital Applied) | ChatGPT Ads Arrive in AU, NZ, Canada: Agency Primer | https://www.digitalapplied.com/blog/chatgpt-ads-australia-new-zealand-canada-primer | ~Apr 2026 | FULL | Canada is 5.4% of weekly active users; country-level geo only; outdated $50k minimum.
53. | Blog (Deeploy, CA) | ChatGPT Ads 2026: What It Is and How It Works | https://deeploy.ca/chatgpt-ads-2026/ | ~Jul 2026 | FULL | Claims Canadian ad exposure of 53.6% vs 51.0% in the US (July).
54. | News (Media in Canada) | ChatGPT Ads builds out its performance capabilities | https://mediaincanada.com/2026/08/13/chatgpt-ads-builds-out-its-performance-capabilities/ | 2026-08-13 | SNIPPET (fetch empty) | Canadian trade coverage of the oCPC and measurement build-out.
55. | News (BI via ZoomBangla) | ChatGPT's sponsored Instagram posts climbed as OpenAI built new ad tools | https://inews.zoombangla.com/chatgpt-influencer-posts-openai-ad-tools/ | 2026-09-25 | FULL | HypeAuditor: ChatGPT-tagged IG partner posts went 61 (Jun), 122 (Jul), 141 (Aug).
56. | Agency (Oriana Solutions, QC) | Publicité dans ChatGPT | https://orianasolutions.ca/publicite-chatgpt | 2026 | FULL | Quebec agency: $500 setup and $750/month management; French reporting.

### B. French-language ChatGPT ads content (Quebec + France)
57. | Agency blog QC (Altitude Stratégies) | Les publicités arrivent dans ChatGPT au Canada | https://www.altitudestrategies.ca/les-publicites-arrivent-dans-chatgpt-au-canada/ | 2026 | FULL | Canada live; three objectives (views, clicks, conversions); a "discovery channel".
58. | Agency blog QC (Cinetic) | Publicité ChatGPT : la nouvelle place où vos clients magasinent déjà | https://cinetic.ca/publicite-chatgpt-la-nouvelle-place-ou-vos-clients-magasinent-deja/ | 2026 | FULL | Quebec agency pitch; repeats the $100M-in-6-weeks figure.
59. | Agency blog QC (JB Impact) | Publicités ChatGPT ads : comment elles ciblent les utilisateurs | https://www.jbimpact.com/post/publicit%C3%A9s-chatgpt-comment-elles-ciblent-les-utilisateurs-et-quels-impacts-pour-les-marques | 2026-09-25 | FULL | Claimed Canadian results: CA$1.32 CPC, 1.26% CTR, CA$14.86 CPM, conversion rate 3.2x Google (unverified).
60. | OpenAI Help fr-CA | Les pubs dans ChatGPT | https://help.openai.com/fr-ca/articles/20001047-les-pubs-dans-chatgpt | rolling | SNIPPET (403) | Official French-Canadian help page exists; ads for Free and Go users.
61. | Blog (La Fusée) | ChatGPT Ads : tout ce que vous devez savoir sur la pub dans l'IA en 2026 | https://lafusee.net/chatgpt-ads/ | 2026 | FULL | Minimums went from $200k to $50k (Apr) to none (Aug); access via Criteo, Equativ, MiQ or agencies like Digitad.
62. | Grenier aux nouvelles (QC) | Publicités dans ChatGPT, Google Ads et SEO : trois mises à jour… | https://www.grenier.qc.ca/actualites/57032/publicites-dans-chatgpt-google-ads-et-seo-trois-mises-a-jour-a-surveiller-cet-ete | summer 2026 | FULL | Ad dismissal rate down 50% (Two Octobers data).
63. | Blog du Modérateur | ChatGPT va afficher des publicités en France à partir de la fin août | https://www.blogdumoderateur.com/chatgpt-publicites-france-fin-aout/ | 2026-07/08 | FULL | EU launch Aug 24 through 6 agency groups; non-personalized at launch.
64. | Blog du Modérateur | ChatGPT : l'Ads Manager est disponible en libre-service en France | https://www.blogdumoderateur.com/chagpt-ads-manager-disponible-libre-service-france/ | 2026-08-31 | FULL | EU self-serve; no minimum; EU version lacks CRM connectors.
65. | Siècle Digital | Après les États-Unis, ChatGPT s'apprête à lancer la publicité en France | https://siecledigital.fr/2026/07/09/apres-les-etats-unis-chatgpt-sapprete-a-lancer-la-publicite-en-france/ | 2026-07-09 | SNIPPET (403) | Early signal of the France launch.
66. | Adevweb | Publicité ChatGPT : libre-service en France | https://www.adevweb.com/ressources/publicite-chatgpt-france | 2026-09-02 | FULL | €65 per campaign minimum observed on a live account (conflicts with €15/day elsewhere).
67. | Orange Business La Fabrique | ChatGPT Ads est disponible en France | https://lafabrique.orange-business.com/actualite/83/25-chatgpt-ads-est-disponible-en-france-tout-savoir-avant-de-se-lancer.htm | 2026-09 | FULL | €15/day minimum; 50/100-character copy; 256px image; auto-translation.
68. | 1144.fr | ChatGPT Ads : le guide complet pour annoncer en France | https://1144.fr/chatgpt-ads | 2026-09 | FULL | Live test: €31.99 spend, 1.20% CTR, €0.94 CPC, €11.75 CPM; 14.4% of ads off-topic; "contextual display, not search".
69. | Journal du Net (Kalyvox) | ChatGPT Ads : la bataille ne se jouera pas sur le CPC | https://www.journaldunet.com/adtech/1554643-chatgpt-ads-la-bataille-ne-se-jouera-pas-sur-le-cpc/ | 2026-09-14 | FULL | France: €0.16 CPC, 4.83% CTR. US: €3.33 CPC, 0.56% CTR. Cheap clicks with low engagement.
70. | Digital Boost | Baromètre ChatGPT Ads France : prix et CPM 2026 | https://digital-boost.co/barometre-chatgpt-ads-france/ | 2026-09 | FULL | France CPM €10–12, CPC €0.16–2; new accounts capped at €50/day and €175/week.
71. | Rossel Conseil Médias | ChatGPT Ads en France : ce que vaut vraiment cette offre… | https://rosselconseilmedias.fr/ressources-raf/chatgpt-ads-france-communication-comparatif-google-ads-presse-locale/ | 2026-09 | FULL | French test: 752 clicks, 0 conversions; national geo only (publisher-biased source).
72. | Stride Up | ChatGPT Ads en France : coûts, ciblage et mesure | https://www.stride-up.fr/blog/chatgpt-ads-france-cout-ciblage-mesure | 2026-09 | FULL | GDPR: personalization needs consent; no query report.
73. | franceinfo | La pub arrive sur ChatGPT : trois questions… | https://www.franceinfo.fr/internet/intelligence-artificielle/la-pub-arrive-sur-chatgpt-trois-questions-pour-comprendre-ce-qui-change_8158454.html | 2026-08-24 | FULL | Mainstream consumer explainer for the EU launch.
74. | Dataconomy FR | OpenAI va tester des publicités visuelles dans ChatGPT Images | https://fr.dataconomy.com/2026/10/06/openai-va-tester-des-publicites-visuelles-dans-chatgpt-images-aux-etats-unis | 2026-10-06 | FULL | French coverage of the visual-ad test (US).
75. | Génération-NT | ChatGPT : la publicité s'invite avec vos images | https://www.generation-nt.com/actualites/openai-chatgpt-publicite-visuelle-image-monetisation-2082290 | 2026-10 | SNIPPET | Same.
76. | Protégez-Vous (QC) | ChatGPT : la publicité débarque au Canada, voici comment la désactiver | https://www.protegez-vous.ca/nouvelles/technologie/chatgpt-la-publicite-debarque-au-canada-voici-comment-la-desactiver | 2026 (Apr?) | SNIPPET (403) | Quebec consumer angle: how to turn ads off.
77. | Geek Tonic / Entreprisma / SEO Monkey / Natural-Net / Transacts / Waisso / Valetudo / Studeria / Effinity / Nabis / AgencePulsi (cluster) | Various FR guides on ChatGPT Ads | e.g. https://www.geek-tonic.com/ads/publicites-dans-chatgpt-en-france-ce-qui-change-des-la-fin-aout-2026-pour-les-annonceurs/ | 2026-07 to 09 | SNIPPET only | French SEO/agency guides; counted as one entry (titles seen only).

### C. Microsoft Copilot
78. | Microsoft Advertising blog | Less busywork, more growth: What's new this September | https://about.ads.microsoft.com/en/blog/post/september-2026/less-busywork-more-growth-what-new-in-microsoft-advertising-this-september | 2026-09 | FULL | HubSpot integration; Experiments GA; no new Copilot formats.
79. | Microsoft Advertising blog | Win across all three eras of the web | https://about.ads.microsoft.com/en/blog/post/april-2026/win-across-all-three-eras-of-the-web | 2026-04 | FULL | Offer Highlights (retail, English, US live); Brand Agents about 2x conversion lift; Copilot Checkout at 500k merchants.
80. | PPC News Feed | Microsoft Advertising Tests Copilot Audience Generation | https://ppcnewsfeed.com/ppc-news/2026-09/microsoft-advertising-tests-copilot-audience-generation/ | 2026-09 | FULL | Closed beta US/CA/UK/AU.
81. | Agency (Grünberg Digital) | Ads in Microsoft Copilot 2026: showroom ads… | https://www.gruenberg-digital.de/en/ki-blog/advertising-in-microsoft-copilot-2026-showroom-ads-offer-highlights.html | 2026-09 | FULL | Copilot is a placement, not a campaign type; EN/FR/DE markets; Showroom ads still a pilot.
82. | WebFX | Inside Microsoft's Copilot Search Ads | https://www.webfx.com/blog/ai/copilot-search-ads/ | 2025-06-04 (older) | FULL | Copilot placements via PMax; Microsoft claims of 25% better results.
83. | Thrad | How to Advertise on Microsoft Copilot in 2026 | https://www.thrad.ai/content/how-to-advertise-on-microsoft-copilot | 2026-06-25 | FULL | 73% higher CTR, 16% higher conversion rate, 194% more likely to convert (Microsoft data).
84. | Stackmatix | Microsoft Advertising and Copilot Strategy in 2026 | https://www.stackmatix.com/blog/microsoft-advertising-copilot-strategy-2026 | 2026-09-03 | FULL | Claims CPCs 30–50% below Google; 400M monthly Copilot users.
85. | New Public Media | Microsoft AI Max for Copilot Search Ads: 2026 Guide | https://www.newpublicmedia.company/blog/microsoft-ai-max-for-copilot-search-ads | 2026 | FULL | AI Max open May 20 in US/UK/CA/AU; agency CPC benchmarks (low confidence).
86. | Sprites | Microsoft Ads Guide 2026 | https://www.sprites.ai/blog/microsoft-ads | 2026 | FULL | Can't opt out of Copilot; no Copilot-specific reporting; about $5/month minimum.
87. | Equimedia | Microsoft Enhances Copilot With Showroom Ads | https://www.equimedia.co.uk/resources/blog/microsoft-enhances-copilot-showroom-ads | 2025-06-02 (older) | FULL | Copilot ads live in EN/FR/DE.
88. | Adweek | Microsoft Lures Brands to Advertise in Copilot… | https://www.adweek.com/media/microsoft-copilot-ai-ads-branded-ai-agents/ | 2025 (older) | FULL | Showroom, Brand Agents, Ad Voice; CTR "doubling" claim.
89. | Génération-NT (FR) | Copilot : votre prochain écran publicitaire ? | https://www.generation-nt.com/actualites/copilot-microsoft-advertising-publicite-showroom-virtuel-2056271 | 2025-03 (older) | FULL | French coverage; francophone markets included.
90. | Grailstar | Conversational Ads in 2026: ChatGPT, Google AI Mode, Copilot | https://grailstar.com/blog/conversational-ads-landscape-2026 | 2026-09/10 | FULL | Cross-platform status; "an announcement is not a media plan".
91. | The Ad Spend / Spaceads / ALM Corp / PCWorld (cluster) | Copilot guides and news | https://theadspend.com/blog/ai-assistant-advertising-playbook | 2026 | SNIPPET (429/empty) | Snippet: live markets as of July 2026 include US, CA, AU, NZ, UK.

### D. Google AI Overviews / AI Mode / Gemini
92. | Google Ads Help | About ads and AI Overviews | https://support.google.com/google-ads/answer/16297775?hl=en | current | FULL | AIO ads in English in 12 countries including Canada; can show above or below AIO in 200+ markets.
93. | SERoundtable | Google Expands Ads In AI Overviews To More Countries | https://www.seroundtable.com/google-expands-ads-in-ai-overviews-40629.html | 2025-12-22 | FULL | Canada added; sensitive verticals excluded.
94. | Common Thread Co | Every Google Ads Change in 2026 | https://commonthreadco.com/blogs/coachs-corner/google-ads-changes-2026 | updated weekly to Oct 2026 | FULL | Aug 31 Shopping ads in AI Mode; Sep 9 exact/phrase match eligible in AI Mode; Oct 3 Loyalty Customer Match in AI Mode (14 countries incl. CA).
95. | David Tamachi (CA) | Google AI Mode Ads: 5 New Formats From GML 2026 | https://davidtamachi.ca/blog-google-ai-mode-ad-formats | 2026-06-01 | FULL | Formats are US-only; requires AI Max/PMax readiness.
96. | TechWyse | Google Marketing Live 2026 | https://www.techwyse.com/news/business/google-marketing-live-2026-ask-advisor-ai-mode-ads-ucp | 2026-05-20 | FULL | US first, Canada and Australia "planned".
97. | Google blog | New ad formats built with Gemini coming to Google Search | https://blog.google/products/ads-commerce/google-marketing-live-search-ads/ | 2026-05-20 | FULL | Official list of formats and Direct Offers expansion.
98. | Browser Media | Ads in AI Mode and GML 2026 highlights | https://browsermedia.agency/blog/ads-in-ai-mode-and-gml-2026-highlights/ | 2026-06-11 | FULL | AI Mode ads are US-only.
99. | HoneyB | AI Overviews Ads: What Is Confirmed, What Is Not | https://www.honeyb.ai/blog/ai-overviews-ads | 2026-07-20 | FULL | No opt-out; reported as Top ads; AI Mode not outside the US.
100. | Keywords Everywhere | Google AI Mode Tracker 2026 | https://keywordseverywhere.com/news/google-ai-mode/ | Oct 2026 | FULL (first 100k chars) | Oct 2 loyalty in AI Mode/Gemini (US); Sep 22 Shopify checkout (US); AI Mode in 200+ countries.
101. | Digital Applied | Google AI Mode: 75M Users, Ads in 25% of AI Results | https://www.digitalapplied.com/blog/google-ai-mode-75m-users-ads-in-ai-results-2026 | 2026 | FULL | Ads in about 25.5% of AI results (third-party).
102. | PPC Land | Google unveils shopping ads in AI Mode | https://ppc.land/google-unveils-shopping-ads-in-ai-mode-doubling-down-on-conversational-commerce/ | 2026-02-11 | FULL | AI Mode shopping ads; US.
103. | Arfadia | AI Overviews Don't Answer in French Yet | https://www.arfadia.com/blog/why-google-ai-overviews-dont-speak-french-canada/ | 2026 | FULL | AIO is English-only in Canada; AI Mode supports French; ChatGPT used by 84% of Quebec AI users.
104. | Search results (cluster) | AIO/AI Mode CTR studies (searchinfluence, authoritytech, smartmarketingtips, SE Ranking via CTC) | various | 2026 | SNIPPET | Paid CTR drops when AIO is present; only 1.28% overlap between Shopping carousel and AI Mode.
105. | AI Tool Discovery | Gemini Ads in 2026: What Google Denied, Then Confirmed | https://www.aitooldiscovery.com/guides/gemini-ads | 2026-06 | FULL | Gemini app has no ads; the new formats are in AI Mode only.
106. | LeapBuzz | Does Gemini have ads? | https://leapbuzz.com/blog/does-gemini-have-ads/ | 2026-08-14 | FULL | No ads in the Gemini app as of Aug 14; Schindler "open-minded".
107. | SEJ / SEL / PPC Land / Media in Canada (cluster) | Google denies ads coming to Gemini in 2026 | https://mediaincanada.com/2025/12/12/google-denies-ads-in-gemini/ | 2025-12 | SNIPPET | Dan Taylor denial.

### E. Perplexity
108. | Brafton | Does Perplexity Show Ads? (2026 Update) | https://www.brafton.com/blog/paid-search-blog/perplexity-ads/ | 2026 | FULL | No ads; abandoned February 2026.
109. | Moon Sauce | Can You Advertise on Perplexity in 2026? | https://www.moonsauceagency.com/blog/can-you-advertise-on-perplexity/ | 2026 | FULL | No self-serve, no managed buy, no waitlist; ads were under 0.1% of revenue.
110. | MacRumors / Campaign / SQ / ADSX / Aragil / GetAIRefs (cluster) | Perplexity abandons ads; Comet "not on roadmap" | https://www.macrumors.com/2026/02/18/perplexity-abandons-ai-advertising/ | 2026-02 to 09 | SNIPPET | Consistent: no Perplexity ads in 2026; publisher program and Comet Plus instead.

### F. Meta AI
111. | Dataslayer | Meta AI Ads Targeting: How Chatbot Data Shapes Your Ads | https://www.dataslayer.ai/blog/meta-will-use-ai-conversations-to-personalize-ads | 2026 | FULL | Meta AI chats used for targeting since Dec 16, 2025 (excludes EU/UK/KR, so Canada is included); no ads inside Meta AI (yet).
112. | AdsUploader | Meta Ads Updates (Sept 2026) | https://adsuploader.com/blog/meta-ads-updates | 2026-09 | FULL | Muse for SMB (US/CA, Sep 29); Meta One subscription; AI campaign analysis.
113. | iPhone in Canada | Meta Launches Muse for Small Business in Canada | https://www.iphoneincanada.ca/2026/09/29/meta-launches-muse-for-small-business-in-canada/ | 2026-09-29 | FULL | Available in Canada; agent for campaigns, not an ad placement.
114. | Blog du Modérateur | Meta dévoile Muse for Small Business | https://www.blogdumoderateur.com/meta-muse-for-small-business-agent-ia-petites-entreprises/ | 2026-09-29 | FULL | US/CA only; $20 and $100 per month plans; 3M downloads.
115. | Motley Fool | Meta Q2 2026 Earnings Call Transcript | https://www.fool.com/earnings/call-transcripts/2026/08/07/meta-meta-q2-2026-earnings-call-transcript/ | 2026-08-07 | FULL | No ads in Meta AI disclosed; 1M+ businesses using business agents weekly; Advantage+ at a $75B run rate.
116. | PPC Land / CNN / Ad Age (cluster) | Meta to use AI chats for ad targeting | https://ppc.land/meta-plans-to-use-ai-chat-data-for-ad-targeting-starting-december/ | 2025-10 to 12 | SNIPPET | Background on chat-signal targeting.

### G. YouTube videos (YT-META: title and channel confirmed via oEmbed; date approximate; NOT watched, no transcript)
Within roughly the last 90 days (Jul 9 to Oct 7, 2026):
117. | YouTube | ChatGPT Ads tutoriel (pub sur ChatGPT formation), StrategeMarketing | https://www.youtube.com/watch?v=bKJiMyXRVUA | ~2026-09-13 | YT-META + snippet ("formation complète de ChatGPT Ads en 16 minutes") | French 16-minute setup tutorial.
118. | YouTube | Je teste ChatGPT Ads : le guide complet (Formation 2026), Paul BRC – Google Ads | https://www.youtube.com/watch?v=OsjrRtIMjvU | ~2026-09-15 | YT-META + snippet ("ChatGPT Ads est arrivé en France") | French hands-on test and guide.
119. | YouTube | ChatGPT Ads : la publicité va-t-elle biaiser nos réponses ?, Le Centre de gravité | https://www.youtube.com/watch?v=9qUeEpNV0Ao | ~2026-08-25 | YT-META + snippet (31 European countries) | French commentary on bias.
120. | YouTube | ChatGPT Ads arrive : faut-il se lancer maintenant ?, Ad's up Consulting | https://www.youtube.com/watch?v=zdnUQikzBWY | ~2026-09-02 | YT-META + snippet | French "should you start now".
121. | YouTube | ChatGPT Ads Tutorial 2026: Full Setup, Every Setting, Anand Iyer | https://www.youtube.com/watch?v=h3aDJrLt_aE | ~2026-09-25 | YT-META + snippet ("live and self-serve") | Full Ads Manager walkthrough.
122. | YouTube | «ChatGPT Ads Manager: guía para anunciarse en ChatGPT desde España», INFORMA D&B | https://www.youtube.com/watch?v=Lo_nJp7O4b0 | ~2026-09-18 | YT-META + snippet | Spanish guide (EU launch).
123. | YouTube | I Ran Ads on ChatGPT: Real Results (₹3,634 Spent), Sanskar Tiwari | https://www.youtube.com/watch?v=rm2ZwNtuq9w | ~2026-10-02 | YT-META (title only) | India test; results not readable.
124. | YouTube Shorts | How I run ads with ChatGPT, Higgsfield AI | https://www.youtube.com/shorts/zMg6uWJv_f8 | ~2026-10-02 | YT-META | Off-topic: using ChatGPT to make ads, not ads in ChatGPT.
125. | YouTube | ChatGPT Ads are LIVE! $100m Opportunity, Kamil Sattar | https://www.youtube.com/watch?v=nVsq8wwraqE | ~2026-07-25 | YT-META + snippet | Hype and opportunity framing for e-commerce and agencies.
126. | YouTube | Latest AI — Aug 31, 2026 — ChatGPT Ads Hit $1B…, SYNVUM | https://www.youtube.com/watch?v=5SyYGbCMvOI | 2026-08-31 | YT-META + snippet | News recap of the $1B run rate.
127. | YouTube | OpenAI Introduces Sponsored Agents as ChatGPT Expands Into AI-Powered Advertising, Astha La Vista | https://www.youtube.com/watch?v=nWOyBj79DqA | ~mid/late Sep 2026 | YT-META + snippet | Sponsored Agents explainer.
128. | YouTube | ChatGPT ads are about to talk back, Arivu Idhazh (Tamil) | https://www.youtube.com/watch?v=q63w09ddfhQ | ~Sep 2026 | YT-META | Sponsored Agents (Tamil).
129. | YouTube Shorts | OpenAI Turns ChatGPT Ads Into Conversational Sales Agents, FounderSignalAI | https://www.youtube.com/shorts/vcN0kIxca_I | ~Sep 2026 | YT-META | Sponsored Agents short.
130. | YouTube | OpenAI Introduces Sponsored Agents: A New Advertising Model, AI Applied (Audio) | https://www.youtube.com/watch?v=_A_Wnr-Cwr0 | ~Sep 2026 | YT-META | Sponsored Agents.
131. | YouTube Shorts | OpenAI expands ChatGPT ads with Shopify and HubSpot, TechPulse Daily | https://www.youtube.com/shorts/S2go1mOPNGU | ~Sep 2026 | YT-META | Integrations news.
132. | YouTube | OpenAI Turns Ads Into Branded AI Agents, GEOforge | https://www.youtube.com/watch?v=YTqd3oyNIig | ~Sep 2026 | YT-META | Sponsored Agents and GEO angle.
133. | YouTube | ChatGPT Ads Can Now Talk to Customers — Here's What It Means, Inna I Chaos to Growth | https://www.youtube.com/watch?v=wh_WYXcRemg | ~Sep 2026 | YT-META | Sponsored Agents for SMBs.
134. | YouTube Shorts | ChatGPT Ads Manager Plugin launched, Thomas Eccel | https://www.youtube.com/shorts/jOjWoot9geE | ~Sep 2026 | YT-META | Ads Manager plugin (Sep 3).
135. | YouTube | ChatGPT Ads Custom Audiences (Easy 2026 Tutorial), Ben Sulka | https://www.youtube.com/watch?v=iCnce66hs3w | ~Jul–Sep 2026 | YT-META | Custom audiences tutorial.
136. | YouTube | Reklamy ChatGPT Ads w Polsce…, Maciej Sadłowski (Polish) | https://www.youtube.com/watch?v=S92J7_V7KfU | ~Aug–Sep 2026 | YT-META | EU-launch tutorial.
137. | YouTube | ChatGPT-Anzeige schalten: So funktioniert der NEUE Ads Manager, Jannis Gerlinger (German) | https://www.youtube.com/watch?v=Wnie4ufWPZ0 | ~Sep 2026 | YT-META | EU-launch tutorial.
138. | YouTube | Cómo Hacer Publicidad en ChatGPT Ads (Tutorial Paso a Paso), Cyberclick | https://www.youtube.com/watch?v=iCL0ZWFxlTc | ~2026 | YT-META | Spanish tutorial.
Older than about 90 days, or date unknown (listed for completeness):
139. | YouTube | How to Run ChatGPT Ads: The Complete Tutorial, HubSpot Marketing | https://www.youtube.com/watch?v=Dg3yC82J7To | ~2026-06-23 | YT-META + snippet | "Biggest paid media opportunity of 2026."
140. | YouTube | ChatGPT Just Added Ads (What Free Users Need to Know), Aspiration | https://www.youtube.com/watch?v=ZlmN15liAEo | ~2026-06 | YT-META | Consumer angle.
141. | YouTube | How to Advertise in ChatGPT: OpenAI Ads Tutorial, Scott Redgate | https://www.youtube.com/watch?v=fammyH5_K4o | ~2026-05 | YT-META | Tutorial.
142. | YouTube | How To RUN ADS on ChatGPT…, ZoCo Marketing | https://www.youtube.com/watch?v=UMofZiTBQE0 | ~2026-06 | YT-META | Tutorial.
143. | YouTube | How to ADVERTISE on CHATGPT Ads (Full Tutorial), Brad Smith | https://www.youtube.com/watch?v=jtV3hL7Xrf8 | ~2026-05 | YT-META | Tutorial.
144. | YouTube | ChatGPT Ads Manager Account Setup Guide, RA Insights | https://www.youtube.com/watch?v=BkR0PUUM5zs | ~2026-06 | YT-META | Tutorial.
145. | YouTube | ChatGPT Ads Manager Revealed: Step by Step, AdWolf AI | https://www.youtube.com/watch?v=16TlHseU7ms | ~2026-06 | YT-META | Tutorial.
146. | YouTube | BREAKING: ChatGPT Ads Just Launched…, Sean Standberry | https://www.youtube.com/watch?v=DbH1-8B17pA | ~2026-02 | YT-META | Launch hype.
147. | YouTube | ChatGPT Ads: Complete Beginner's Guide (2026), Michelle Kop | https://www.youtube.com/watch?v=YfOStV3OpLc | 2026 (unknown) | YT-META | Beginner guide.
148. | YouTube | How to Advertise on ChatGPT in 2026, Henry Purchase | https://www.youtube.com/watch?v=-Mz7THiWDU8 | 2026 (unknown) | YT-META | Tutorial.
149. | YouTube | ChatGPT Ads Expansion: Ads Manager, CPC Bidding…, CosmoX | https://www.youtube.com/watch?v=Xj9so5yNxj8 | ~May 2026 | YT-META | May self-serve and CPC news.
150. | YouTube | ChatGPT Ads Are HERE: Criteo Partners With OpenAI!, AdTech Pulse | https://www.youtube.com/watch?v=Tmh2YrvvVdw | 2026 | YT-META | Criteo partnership.
151. | YouTube Shorts | ChatGPT Ads Just Launched, Neil Patel | https://www.youtube.com/shorts/bGIv7X_zpnw | 2026 | YT-META | Short.
152. | YouTube | ChatGPT Ads Have Arrived, Joel Comm | https://www.youtube.com/watch?v=d8jr0xU4L_c | 2026 | YT-META | Commentary.
153. | YouTube | ChatGPT ads: what to know before your first campaign, Daniel Agrici | https://www.youtube.com/watch?v=ggQOTOMtLio | 2026 | YT-META | Pre-launch checklist.
154. | YouTube | ChatGPT Ads (Agora Você Pode Anunciar…), Mateus Dias (PT-BR) | https://www.youtube.com/watch?v=3N6WsLVOZLk | 2026 | YT-META | Brazil.
155. | YouTube | Publicité dans ChatGPT et d'autres sujets… Debrief EP1, Agence Indexel (FR) | https://www.youtube.com/watch?v=0HW3nX2D094 | 2026 (unknown) | YT-META | French agency debrief.
156. | YouTube Shorts | Les pubs arrivent dans ChatGPT !, Numerama (FR) | https://www.youtube.com/shorts/B8fa_fVhXb0 | early 2026 | YT-META | French news short.
157. | YouTube Shorts | Publicité dans ChatGPT : Must-See !, Renaud Dékode (FR) | https://www.youtube.com/shorts/U_yX_ClxwzA | 2026 | YT-META | French short.
158. | YouTube | ChatGPT bientôt envahi par la pub ?!, Renaud Dékode (FR) | https://www.youtube.com/watch?v=glTIs6lO8EU | early 2026 | YT-META | French commentary (pre-launch).
159. | YouTube | Bientôt de la pub sur ChatGPT, BFM Business (FR) | https://www.youtube.com/watch?v=q8yY7vQAQfY | early 2026 | YT-META | French TV segment.
160. | YouTube | Chat GPT : La pub débarque alors que le PDG… avait promis…, BFM Business (FR) | https://www.youtube.com/watch?v=W5DswB9JVaI | 2026 | YT-META | French TV segment.
161. | YouTube Shorts | ChatGPT va maintenant avoir de la publicité…, Léo - TechMaker (FR) | https://www.youtube.com/shorts/RuDMPs_d11c | early 2026 | YT-META | French short.
162. | YouTube | La pub dans ChatGPT | McKinsey licencie…, Silicon Carne (FR) | https://www.youtube.com/watch?v=9rCtVjEyqDA | 2026 | YT-META | French tech podcast.
163. | YouTube | Bientôt des pubs dans ChatGPT : «Ça augure très mal…», dit Francis Gosselin, QUB radio (QUÉBEC) | https://www.youtube.com/watch?v=iInOnV-poIs | early 2026 (pre-launch) | YT-META | The only clearly Quebec-made video found; a critical economist's view.
164. | YouTube | Google Ads 2026: How to rank in AI Overviews & AI Mode, Smarter Ecommerce | https://www.youtube.com/watch?v=f_1NM6m6L9U | 2026 | YT-META | Google AI surfaces webinar.
165. | YouTube Shorts | AI Mode meets Google Ads with "Direct Offers", Thomas Eccel | https://www.youtube.com/shorts/dL6C2jj9KUg | 2026 | YT-META | Direct Offers.
166. | YouTube Shorts | Ads are coming to AI Mode, Aaron Young / Define Digital Academy | https://www.youtube.com/shorts/9IifkI7KojI | 2026 | YT-META | AI Mode ads.
167. | YouTube | ChatGPT Ads Explained: Why You See Sponsored Results…, (oEmbed failed) | https://www.youtube.com/watch?v=DqNPmTT6EI0 | 2026 | SNIPPET (title only) | Consumer explainer.

### H. Instagram (IG-SNIPPET only; no reels could be opened, Instagram returned 429; Google indexes almost no IG reels for this topic)
168. | Instagram | Jen Peterson (@slaysocialwithjen) | https://www.instagram.com/slaysocialwithjen/ | n/a | IG-SNIPPET (profile bio: "done-for-you Meta and ChatGPT ads") | US SMM now selling ChatGPT ads management.
169. | Instagram | AdsGPT (@adsgpt_ai) | https://www.instagram.com/adsgpt_ai/ | n/a | IG-SNIPPET | AI ad tool, not ChatGPT Ads (keyword noise).
170. | Instagram | OpenAI (@openai) | https://www.instagram.com/openai/ | n/a | IG-SNIPPET | Official account; no ad-product reel found via search.
171. | Instagram | QuitGPT (@quitgpt) | https://www.instagram.com/quitgpt/ | n/a | IG-SNIPPET | 238k-follower boycott account (backlash signal).
172. | Instagram | @chatgptricks / @chatgptmastery / @yourchatgptguide / @mavgpt / @taki.gpt (cluster) | e.g. https://www.instagram.com/chatgptricks/ | n/a | IG-SNIPPET | Big ChatGPT-tips accounts; no ChatGPT Ads reels surfaced in search.
(See also #55: Business Insider/HypeAuditor data on 141 ChatGPT-tagged sponsored Instagram posts in August 2026. That is OpenAI's own influencer marketing, not content about advertising in ChatGPT.)

---

## 3. Source count by platform
- Web articles, news, blogs and official pages: **116** entries (#1–#116). About 92 were read in full via WebFetch; the rest are snippet-only, or clusters where only titles or snippets were seen.
  - ChatGPT (English): 56
  - French-language ChatGPT: 21 (6 Quebec/Canada, 15 France)
  - Microsoft Copilot: 14
  - Google AIO/AI Mode/Gemini: 16
  - Perplexity: 3 (plus cluster)
  - Meta AI: 6
- YouTube: **51** videos (#117–#167). Title and channel were confirmed for 50 via oEmbed; none were watched or transcribed. About 22 fall within the last 90 days. 20 are in French, and 1 is from Quebec (QUB).
- Instagram: **5** profile-level hits (#168–#172), snippet only. **No reels or posts about ChatGPT Ads could be retrieved.**
- **Total distinct items logged: 172** (clusters counted once).

## 4. Caveats
- Data that conflicts:
  - Canada launch date: Apr 16 vs Apr 17 vs "March".
  - Canada's first self-serve date: May (US-only beta) vs "original nine" markets.
  - France minimum: €15/day vs €65 per campaign vs "none".
  - Treat OpenAI's help pages (Canada available, CA$25/day) as authoritative. They were seen via snippet only because of a 403.
- All performance figures from Microsoft, OpenAI partners and agencies are self-reported.
- YouTube and Instagram content could not be consumed beyond titles and snippets from this environment.
