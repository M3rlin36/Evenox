# Research 2: YouTube Google Ads education (2025-2026), synthesized for a small local lead-gen business

Compiled 2026-10-07. Target business: premium event rental in Quebec with a limited budget.

## How the content was accessed (read this first)

- **YouTube blocked transcript access early on.** The first `youtube-transcript-api` test worked. After that, every YouTube transcript and caption request from this sandbox returned `IpBlocked` / `RequestBlocked` / bot-check (HTTP 429, then a "sign in to confirm you're not a bot" page). A background job retried every 4 minutes for the whole session and never got a transcript back. Third-party transcript sites (youtubetotranscript, tactiq, notegpt, kome, tubetranscript, downsub, glasp, summarize.tech, Invidious caption endpoints) were blocked or returned nothing.
- **What I used instead:**
  - **Full transcripts of the same content from other places:** the creators' podcast feeds, which carry the same episodes as their YouTube videos. These were Jyll Saskin Gales (Buzzsprout transcripts) and Surfside PPC (Transistor transcripts).
  - **Google's Ads Decoded transcripts** on business.google.com. The same episodes are on the Google Ads YouTube channel.
  - **Companion blog posts:** Adalysis, and one Aaron Young transcript on sozai.app.
  - **Video page metadata** for everything else: full description, chapter list and publish date, fetched through an Invidious API mirror and the r.jina.ai page renderer.
- **Access labels used below:**
  - **TRANSCRIPT**: I read the full spoken content.
  - **ARTICLE**: I read the full companion article.
  - **DESC+CH**: I read the video description and chapter list only.
  - **DESC**: I read the description only.
- **What was not counted:**
  - **Ben Heath:** all 8 descriptions I pulled were boilerplate bios with no content, so none are counted. The videos checked were small budget, campaign structure, negative lists, sitelinks, location targeting, leads, click fraud and AI Max setting.
  - **Mike Rhodes:** his own channel's lessons are from 2021, which is outside the date window. The one 2026 interview I found (Grow My Ads, "Claude Will Change Agencies Forever") had only a one-line description, so it is not counted.
  - **"Brendan Hughes":** I could not identify a Google Ads YouTube educator by this name. The only match was the Optily CEO, who covers e-commerce media buying.

**Totals:** 100 pieces of content. 42 are full transcripts or full articles, 3 are partial or summary-only, and 55 are description/chapter-level only.

---

## (a) Content consumed

### Jyll Saskin Gales: Inside Google Ads (YouTube episodes = podcast episodes; transcripts from Buzzsprout)

1. **The $20/Day Google Ads Strategy That Gets HIGH QUALITY Leads (Case Study), Ep100.** Jyll Saskin Gales. https://www.buzzsprout.com/2295853/18318035. Published 2025-12-25. TRANSCRIPT.
   - Takeaway: a 12-step fix of a service business's account, one that books event dates:
     - turned Search Partners off
     - switched from tROAS to Max Conversions
     - replaced broad keywords with 18 exact-match keywords
     - added negatives and dynamic keyword insertion (DKI)
     - rewrote the CTA from "Contact Us" to "Reserve your [ ] date now"
     - added business name, logo and image assets
     - turned off auto-created assets and auto-apply recommendations
     - fixed tracking that counted page views as conversions
   - Result: CTR rose from 4% to 13%, real CVR was 14%, and CPL was $11.71. Works when CPC is $2 or less.
2. **Fix Your Conversion Tracking: Quality vs Quantity, Ep115.** Jyll Saskin Gales. https://www.youtube.com/watch?v=7twmzrtQdpo. Published 2026-04-09. TRANSCRIPT.
   - Primary vs secondary actions. The goal category overrides the primary flag.
   - Check the "All conv." column, segmented by conversion action.
   - Calls from ads and lead-form assets are the spammiest sources.
   - Track completions, not clicks.
   - Use offline conversion tracking (OCT) through lead-tracking software. Her view: "lead gen can't scale without OCT."
   - Use micro-conversions if you get fewer than 10 conversions a month.
3. **Should You Start On Maximize Conversions? Yes!, Ep122.** Jyll Saskin Gales. https://www.youtube.com/watch?v=Q_fB7F-oBVs. Published 2026-05-28. TRANSCRIPT.
   - Start new campaigns on Max Conversions. Under manual bidding or Max Clicks, conversions are accidents.
   - Home-services case after the switch to Max Conversions: CPC went from $1.77 to $10 and CVR from 1.7% to 15%. CPL fell from $121 to $68, and leads went from 6 to 24 in two weeks.
   - Exceptions: tiny local volume and "if it ain't broke."
4. **Google Ads Keyword Research: Your 10 Step Strategy for 2026, Ep123.** Jyll Saskin Gales. https://www.youtube.com/watch?v=LkM4kqidwu4. Published 2026-06-04. TRANSCRIPT.
   - Use Keyword Planner set to your local area, not ChatGPT lists.
   - Put competitor URLs into Keyword Planner to find conquesting terms.
   - Estimate CPC as the average of the low and high top-of-page bids.
   - Build negatives before launch.
   - Use single-theme ad groups (STAGs) of 5-15 keywords.
   - Start on exact match. Add top search terms as broad only once on tCPA.
5. **How to Know When to Increase Your Google Ads Budget, Ep119.** Jyll Saskin Gales. https://www.youtube.com/watch?v=6_yTCeIFsYs. Published 2026-05-07. TRANSCRIPT.
   - A red "limited by budget" warning on tCPA is good news.
   - Raise budget 10-20% when Search impression share lost to budget is 10% or more and CPA is within ±10% of target.
   - At 60-80% impression share, the only growth left is new keywords or geography.
6. **Double Your CTR! Every Google Ads Asset Explained, Ep118.** Jyll Saskin Gales. https://www.youtube.com/watch?v=HfPj1Uk6ve8. Published 2026-04-30. TRANSCRIPT.
   - All 15 asset types.
   - Image assets need a 60-day-old account and 30 days of spend.
   - Keep one business name and logo at account level.
   - Turn off account-level automated assets.
   - Calls from ads skew low quality.
   - Lead-form assets must be piped to a CRM.
7. **Google Ads Learning Period EXPLAINED, Ep114.** Jyll Saskin Gales. https://www.youtube.com/watch?v=m6P6r2yQR3w. Published 2026-04-02. TRANSCRIPT.
   - Moving ads, swapping assets and small budget or keyword changes don't reset learning.
   - Changing the bid strategy or conversion action does.
   - Benchmarks: 15 conversions in 30 days is Google's minimum, 30/30 is Jyll's, 50/30 is Optmyzr's.
8. **3 Steps to Lower Your CPC with Quality Score, Ep132.** Jyll Saskin Gales. https://www.youtube.com/watch?v=GMJBcd83Kdw. Published 2026-08-06. TRANSCRIPT.
   - Fix expected CTR: find your rivals in Auction Insights, read their ads in the Ads Transparency Center, and borrow the strongest elements ("free quote," urgency, benefits, price/promo assets).
   - QS improvements lag by more than a month.
9. **You Need Customer Match, Ep125.** Jyll Saskin Gales. https://www.youtube.com/watch?v=h6dYV5SJwmg. Published 2026-06-18. TRANSCRIPT.
   - Upload your customer list even below the $50k spend threshold. It is a Smart Bidding signal and unlocks audience insights.
   - Refresh it monthly.
   - Requires consent and a privacy-policy disclosure.
10. **The Truth About Competitor Targeting, Ep137.** Jyll Saskin Gales. https://www.youtube.com/watch?v=KLiXwqEA8hw. Published 2026-09-10. TRANSCRIPT.
    - Bidding on competitor names is allowed. Putting their name in your headline is misrepresentation.
    - "Us vs them" comparison landing pages plus their own ad group beat the CPA of non-brand campaigns.
11. **Google Ads Management: What to Do (and When to Do Nothing), Ep129.** Jyll Saskin Gales. https://www.youtube.com/watch?v=u-Uctl-VL-M. Published 2026-07-16. TRANSCRIPT.
    - Leave a new campaign alone for 2-3 days, then check CTR (non-brand 5-7%), Search impression share and search terms.
    - When junk terms appear, pause the keyword causing them instead of playing whack-a-mole with negatives.
    - Expensive search terms often hold the conversions.
12. **The Truth About Google's New Target Bidding "Update", Ep130.** Jyll Saskin Gales. https://www.youtube.com/watch?v=hv2uV4hfAQE. Published 2026-07-23. TRANSCRIPT.
    - From Aug 17, 2026, budget-limited tCPA/tROAS campaigns aim at the target rather than beating it.
    - Set the target you actually want, or use Max Conversions on a fixed budget.
13. **Why Your Google Ads Campaign Has Zero Conversions, Ep111.** Jyll Saskin Gales. https://www.buzzsprout.com/2295853/18649332. Published 2026-03-12. TRANSCRIPT.
    - Check root causes in order: tracking, then wrong traffic, then the website.
    - A 75% CTR search term revealed Search Partners was secretly on and eating half the budget under manual CPC.
14. **Top 10 Google Ads Mistakes to Avoid, Ep97.** Jyll Saskin Gales. https://www.buzzsprout.com/2295853/18213766. Published 2025-12-04. TRANSCRIPT.
    - A budget of $1,000 a month or less means exact match, few keywords and a small area.
    - Organize ad groups by intent.
    - If you are negating more than 10% of search terms, fix the root cause instead.
    - Use Presence-only location targeting.
    - Opportunity is not infinite.
15. **When should you use Target vs. Maximize vs. Manual bid strategies?, Ep86.** Jyll Saskin Gales. https://www.buzzsprout.com/2295853/17735709. Published 2025-09-18. TRANSCRIPT.
    - Diagnose low-volume lead gen with impression share and CVR (a form CVR of 10% or more is good; 6% or less is a problem).
    - Judge RSA assets at 100 clicks for CTR and 50 conversions for CVR.
16. **Should you use AI Max for Search Campaigns?, Ep82.** Jyll Saskin Gales. https://www.buzzsprout.com/2295853/17665688. Published 2025-08-21. TRANSCRIPT.
    - AI Max pulls in generic and competitor terms.
    - Not for $20/day exact-match accounts. Only for accounts that have maxed out broad match with smart bidding.
17. **The Google Ads Performance Drop Playbook, Ep106.** Jyll Saskin Gales. https://www.buzzsprout.com/2295853/18540797. Published 2026-02-05. TRANSCRIPT.
    - Don't evaluate daily. Owners should check weekly and change monthly.
    - A 3-5 day drop is noise.
    - Seasonality: lean into it in creative ("book early, we fill up") or reduce budget.
18. **The Branded Search Playbook, Ep113.** Jyll Saskin Gales. https://www.youtube.com/watch?v=sWCkyjaL_q0. Published 2026-03-26. TRANSCRIPT.
    - Bid on your brand only if Auction Insights shows competitors there (Haus data: 82% incremental vs 35%).
    - Use smart bidding on brand campaigns, not manual.
19. **6 Talks in 30 Days: My Newest Google Ads Strategies, Ep138.** Jyll Saskin Gales. https://www.youtube.com/watch?v=y27P-w1HPxU. Published 2026-09-17. TRANSCRIPT.
    - Funnel-stage bidding for low-volume lead gen: start Max Conversions with lead, qualified lead (QL), sales-qualified lead (SQL) and closed-won all set as primary.
    - Drop raw leads first, then move to tCPA at 30-50 conversions.
    - When a deeper stage reaches 25-30 a month, demote the stage above it to secondary.
20. **Google Marketing Live 2026 Recap & Analysis, Ep121.** Jyll Saskin Gales. https://www.youtube.com/watch?v=YBSwn_fFLsk. Published 2026-05-21. TRANSCRIPT.
    - Journey-aware bidding (tCPA, lead gen).
    - Pilots announced: a leads inbox, AI text-message assets, predictive lead scoring.
    - AI Brief.
    - Ginny Marvin: optimize toward quality-lead indicators, not raw form submissions.
21. **Stop Paying $100 Per Click, Ep135.** Jyll Saskin Gales. https://www.youtube.com/watch?v=hCycIoispfk. Published 2026-08-27. PARTIAL: the transcript is a stub because the episode reads an external article.
    - Takeaway: "non-linear targeting" for high-CPC or restricted niches. Concept only.
22. **The New Rules of Google Ads: How to Win in 2026, Ep101.** Jyll Saskin Gales. https://www.youtube.com/watch?v=hjR-ZoaDthU. Published 2026-01-01. SUMMARY ONLY: the episode page was read through WebFetch, which returned an AI summary of the transcript.
    - Search and Shopping first, Search Partners off.
    - PMax needs about $50/day and proven tracking.
    - Google's AI advisors are wrong about half the time.
23. **Why Your Google Ads Leads Aren't Turning Into Sales.** Jyll Saskin Gales. https://www.youtube.com/watch?v=ROs6o7Lllu4. Published 2026-04-08. DESC.
    - Move beyond form/call tracking to OCT through lead-tracking software (WhatConverts).
    - Value-based bidding with proxy, predicted or purchase values.

### Surfside PPC (Corey): Surfside PPC Podcast. Transcripts from Transistor. From Ep16 on, these are video podcasts also posted to YouTube.

24. **Google Ads Negative Keywords Made Easy, Ep30.** Surfside PPC. https://www.youtube.com/watch?v=WfN0hZ6Qupc. Published 2026-09-08. TRANSCRIPT.
    - Negate cost/free/DIY/discount/"for seniors"/jobs/calculator/competitor terms.
    - Keep one shared "account-level" negative list and attach it to every new campaign manually.
    - Account-level negatives (up to 1,000) also cover PMax.
    - Keep a do-not-block word list.
    - Mine search terms weekly, sorted by cost.
25. **Google Ads Assets and Ad Extensions Explained, Ep29.** Surfside PPC. https://www.youtube.com/watch?v=oduIfSQDAUc. Published 2026-09-02. TRANSCRIPT.
    - 6-8 sitelinks selling services, gallery and reviews.
    - Callouts (5-star, 500+ reviews, years in business).
    - Icon-style logo.
    - Avoid lead-form assets.
    - Turning on auto-created assets now opts you into AI Max.
26. **Google Ads AI Max | How It Works and Best Practices, Ep27.** Surfside PPC. https://www.youtube.com/watch?v=uLl5vNj2pzA. Published 2026-07-22. TRANSCRIPT.
    - AI Max is roughly DSA plus broad match. Use it only with good conversion data, about 30+ conversions a month.
    - Example: it pulled grooming and cleaning searches for a dog trainer.
27. **Google Ads Optimization Strategies For 2026, Ep21.** Surfside PPC. https://share.transistor.fm/s/71db7f48. Published 2026-06-02. TRANSCRIPT.
    - Primary conversion = most qualified action. Spammy forms go to secondary.
    - Account-level "intent killer" negatives.
    - Progression: exact (+manual), then phrase with smart bidding, then broad only at tCPA.
    - 2-3 RSAs per ad group plus landing page tests.
    - Exclude recent converters.
28. **How to use Google Keyword Planner, Ep20.** Surfside PPC. https://share.transistor.fm/s/22cd2237. Published 2026-05-27. TRANSCRIPT.
    - Use top-of-page bids to project cost per 100 clicks and CPL against customer value.
    - Use the forecast tool.
    - Seed with a page URL.
29. **Google Ads Keyword Research Made Easy, Ep19.** Surfside PPC. https://share.transistor.fm/s/5be2ff3c. Published 2026-05-12. TRANSCRIPT.
    - Local formula: service + "near me" and service + city.
    - Prefer specific long-tail terms over head terms.
    - Use AI to theme-group keyword lists.
30. **Google Ads With $20 Per Day, Ep12.** Surfside PPC. https://share.transistor.fm/s/205b400d. Published 2026-03-24. TRANSCRIPT.
    - $20/day works if CPC is $2-6.
    - At high CPC: 3-4 exact keywords on manual CPC, no broad.
    - For long consideration cycles, capture info-seekers into an email nurture.
31. **How To Bid Optimally in Google Ads, Ep15.** Surfside PPC. https://share.transistor.fm/s/a0b58153. Published 2026-04-14. TRANSCRIPT.
    - Never use Target Impression Share.
    - Small local niches struggle to hit 15 conversions a month.
    - Days 30-60: get conversion data, then ask the client whether the leads are good. Loosen match types and move to tCPA, setting the target high at first.
32. **How Do I Launch A New Google Ads Account?, Ep7.** Surfside PPC. https://share.transistor.fm/s/353e2c91. Published 2026-02-17. TRANSCRIPT.
    - Order: a page per service and service area, then tracking (ideally CRM/offline data), then organized Search ad groups, then data, then tCPA.
    - Phrase keywords built as service + location.
33. **Conversion Tracking For Lead Generation, Ep1.** Surfside PPC. https://share.transistor.fm/s/f8c3146b. Published 2026-01-15. TRANSCRIPT.
    - Track calls from ads, website forwarding calls of 60 seconds or more, click-to-call, forms and chat.
    - Use CallRail/WhatConverts to send job values back to Google.
    - Use "pre-conversions" when volume is low.
34. **When Should I Change My Bid Strategy?, Ep3.** Surfside PPC. https://share.transistor.fm/s/20d709c1. Published 2026-01-27. TRANSCRIPT.
    - A tCPA below your actual CPA buys efficiency at the cost of volume. Raise it for volume.
    - Move to Max Conversions at about 5-7 conversions in 1-2 weeks.
    - Move to tCPA 2-4 weeks later.
35. **Should I Use Broad Match Keywords?, Ep4.** Surfside PPC. https://share.transistor.fm/s/5e4a1987. Published 2026-02-03. TRANSCRIPT.
    - Test broad only by adding your top 3-10 keywords as broad, for two weeks, while watching lead quality.
    - Avoid broad on $2-3k/month budgets.
36. **How Do I Lower My Initial CPC?, Ep9.** Surfside PPC. https://share.transistor.fm/s/afd5b5d3. Published 2026-03-03. TRANSCRIPT.
    - Max Conversions with a large budget and no data overbids, sometimes hundreds per click.
    - Start on exact with manual CPC at the top-of-page estimate.
37. **Targeting Google Ads Keywords, Ep16.** Surfside PPC. https://share.transistor.fm/s/2fd5dbd3. Published 2026-04-21. TRANSCRIPT.
    - One ad group per service, each with its own landing page.
    - City ad groups for big cities, "near me" for small towns.
    - Exact match for high-CPC niches, then phrase, then broad.
38. **Split Testing in Google Ads, Ep17.** Surfside PPC. https://share.transistor.fm/s/9a1f8853. Published 2026-04-28. TRANSCRIPT.
    - Small accounts test through 2-3 RSAs per ad group and two landing pages, with and without an offer.
    - Load every relevant asset.
39. **Google Ads Tutorial For Local Service Businesses.** Surfside PPC. https://www.youtube.com/watch?v=ISUHurlpxRM. Published 2026-03-05. DESC+CH (detailed).
    - Keep new accounts at $100/day or less until lead quality is proven.
    - A phone call is worth about 10x a web lead.
    - Presence-only location, Display off, DKI with the city name.
40. **Google Ads Tutorial (EASY) 2026.** Surfside PPC. https://www.youtube.com/watch?v=LoyJP3qxJyY. Published 2026-07-08. DESC+CH.
    - Set up tracking first, counting "one" conversion per lead.
    - Set low-value actions to secondary.
    - Launch on manual CPC, with a budget for 5-10 clicks a day.
    - One ad group per landing page.
    - A/B test by duplicating an ad with a different final URL.
41. **Limited By Budget in Google Ads and What To Do Next, Ep32.** Surfside PPC. https://www.youtube.com/watch?v=SkK1vwNrJyQ. Published 2026-09-24. DESC+CH.
    - On a working campaign: switch to tCPA, then walk the target down within the same budget.
    - On a failing one: a test budget of at least 5-10 clicks a day for two weeks.
42. **Responsive Search Ads: Best Practices, Ep28.** Surfside PPC. https://www.youtube.com/watch?v=jzgtb2X7x4M. Published 2026-08-20. DESC+CH.
    - Headline 1 matches the searched service (6-7 candidates). Headline 2 is the CTA.
    - Test pinned vs unpinned.
    - Ad strength is not an auction input.
43. **Google Ads Conversion Tracking Tutorial For 2026, Ep31.** Surfside PPC. https://www.youtube.com/watch?v=r3rv1qugGYw. Published 2026-09-18. DESC (detailed).
    - Set up 4 actions in Google Tag Manager: form on the thank-you page, calls from ads, website calls of 60s+, click-to-call.
    - Add the conversion linker.
    - Click-to-call overcounts (especially in PMax), so use it in Search only.

### Google Ads (official channel): Ads Decoded

44. **Ads Decoded S1E5, "Beyond the form fill: Mastering lead quality in the AI era."** Google Ads (Ginny Marvin, Mimi Forsythe, Lydia Azaret). https://business.google.com/us/accelerate/podcasts/ads-decoded-s1e5/. Published 2026-03-25. TRANSCRIPT.
    - Map the lead-to-sale journey and bid to the deepest stage that still has enough volume and a short delay.
    - Use proxy values / lead scores.
    - Categorize conversions as qualified/converted lead goals.
    - Use enhanced conversions for leads (ECL), offline conversion import (OCI) through Data Manager, and Google Tag Gateway.
    - Lead-form assets now support Qualifying Questions.
45. **Ads Decoded S1E4, "Budgets, bidding & AI-powered campaigns: Best practices for 2026."** Google Ads (PMs Kristina Park, Carlo Buchmann). https://business.google.com/us/accelerate/podcasts/ads-decoded-s1e4/. Published 2026-03-11. TRANSCRIPT.
    - "Cold start": begin with the bid strategy you want. No manual phase is needed.
    - Wait at least one conversion cycle after a target change.
    - Low-volume SMBs should optimize to a less sparse action.
    - Secondary conversions are not used for bidding.
46. **Ads Decoded S1E2, "Is your Search campaign structure holding back performance?"** Google Ads (Brandon Ervin, Director PM Search Ads). https://business.google.com/us/accelerate/podcasts/ads-decoded-s1e2/. Published 2026-02-11. TRANSCRIPT.
    - Consolidate: split campaigns only for distinct budgets, goals or regions.
    - Ad groups should be clearly distinct themes.
    - Exact match remains for tight control.
    - Use shared budgets and portfolio strategies to pool data.
47. **How to drive better Google Ads lead gen with first-party data.** Google Ads. https://www.youtube.com/watch?v=lJJBKu8zyAs. Published 2026-09-17. DESC+CH plus the companion blog post (summary only).
    - A crawl-walk-run roadmap: Tag Gateway, then enhanced conversions, then a CRM pipeline through Data Manager.
    - Lead Intent Scoring pilot.
    - Journey-aware bidding for sparse closed-won data.
48. **Convert high-value leads in 90 seconds, Rethink ROI 2026.** Google Ads. https://www.youtube.com/watch?v=8jHdbsg9kGw. Published 2026-09-22. DESC+CH.
    - Google's "Search Four" for lead gen: data strength (map the lead journey, offline signals), Smart Bidding toward true KPIs instead of raw lead volume, AI campaigns plus native lead formats, flexible budgets.
49. **Community Q&A: The bidding & budgets special.** Google Ads. https://www.youtube.com/watch?v=eACkWsNT1XA. Published 2026-07-22. DESC+CH (with takeaways).
    - Max Conversions suits fixed budgets. tCPA aligns bidding to business goals.
    - Seasonality adjustments vs Promotion Mode (3-14 day events).
50. **Community Q&A: August 17 bidding update.** Google Ads. https://www.youtube.com/watch?v=tqp-pQkKLT4. Published 2026-08-05. DESC+CH.
    - Budget-limited campaigns that over-perform their target will be pulled back to it.
    - Review the gap between target and actual, and reset targets to business goals.
51. **Community Q&A: Measurement in the AI era & AI Max.** Google Ads. https://www.youtube.com/watch?v=FwCXqaNdGUo. Published 2026-07-29. DESC+CH.
    - Move to data-driven attribution.
    - Judge by conversion quality and profit.
    - Keep Final URL expansion off to restrict AI Max traffic to URL inclusions.
52. **Create effective Search ads: Responsive search ads for success (2026).** Google Ads. https://www.youtube.com/watch?v=BjXDLv5xFuw. Published 2026-08-03. DESC+CH.
    - Supply many unique headlines and descriptions plus images.
    - Pin only essentials.
    - Pair with Smart Bidding.
    - Google claims Poor-to-Excellent ad strength gives +15% clicks/conversions on average.

### Aaron Young (Define Digital Academy)

53. **Google Ads Keyword Research in 2026 (Get Google Ready series).** Aaron Young. https://sozai.app/transcript/google-ads-keyword-research-2026/. Published around Dec 2025. TRANSCRIPT (via sozai.app).
    - Research keyword *themes*.
    - Per ad group: 1-4 long-tail broad keywords plus exact keywords together, since broad uses the ad group's other keywords as signals.
    - Starting budget about 10x CPC.
54. **Starting Your First Google Ads Campaign? Avoid These Mistakes.** Aaron Young. https://www.youtube.com/watch?v=icTs1JUnK24. Published 2026-08-17. DESC+CH.
    - Size the budget for about 30 conversions a month.
    - "Battle-test" the offer and sales process first.
    - Ad and landing page are links in one chain.
    - Expect some conversions in month 1 and break-even in month 2.
55. **Do this BEFORE you start your First Google Ads Campaign.** Aaron Young. https://www.youtube.com/watch?v=-cmTy6zPE6A. Published 2026-08-03. DESC+CH.
    - Start from how the business makes money: break-even numbers, seasons, levers of control.
56. **How Many Google Ads Campaigns Should Start With?** Aaron Young. https://www.youtube.com/watch?v=7ZPGdqiVaGI. Published 2026-06-29. DESC.
    - Default to one campaign and one ad group.
    - Split only for margin, network or location reasons, backed by data thresholds.
57. **How to Optimise Google Ads Search Campaigns [Updated for 2026].** Aaron Young. https://www.youtube.com/watch?v=RCRPj2JmqCY. Published 2026-07-13. DESC+CH.
    - STAB framework: Spending/Segmentation, Targeting, Ads & landing pages, Bidding.
58. **Google Ads Does Not Convert on the First Click.** Aaron Young. https://www.youtube.com/watch?v=7UOLTRHWs68. Published 2026-09-28. DESC.
    - Buyers take multiple touches. Understand how people actually buy before judging a campaign.
59. **How to Write Google Ads Copy that Converts [Updated for 2026].** Aaron Young. https://www.youtube.com/watch?v=bjRR-yfaBlI. Published 2026-06-24. DESC.
    - Write for the customer, not the business. Don't stuff keywords.
    - Covers 4 foundations, ad strength and pinning.
    - Split-test for conversions, not clicks.
60. **How to Get More High Quality Leads from Google Ads.** Aaron Young. https://www.youtube.com/watch?v=QxfBUby7RZ4. Published 2026-06-18. DESC.
    - The three 2026 lead-quality problems: spam, tire-kickers, and conversions drying up.
61. **How to WIN with Google Ads on a Small budget in 2026.** Aaron Young. https://www.youtube.com/watch?v=O0ujCXXkYmg. Published 2026-02-09. DESC.
    - A "small budget" means 10-30 clicks a day ($30-100/day).
    - Five pillars. Reinvest early wins.
62. **Find your BEST Google Ads Bidding Strategy [Updated for 2026].** Aaron Young. https://www.youtube.com/watch?v=w16T-VBCd_c. Published 2026-05-04. DESC.
    - Run a readiness checklist before engaging Smart Bidding. Readiness matters more than which strategy you pick.
63. **Scale Google Ads with the Bottom-Up Funnel (w/ Aaron Young), PPC Mastery Ep35.** Miles McNair with Aaron Young. https://www.youtube.com/watch?v=LMlUH-ebpxs. Published 2025-03-12. DESC+CH.
    - Start at the highest-intent bottom of the funnel, then expand upward.
    - Lead gen and e-commerce need different evaluation.

### Adalysis (Brad Geddes)

64. **When to pause exact match and rely on broad match instead.** Adalysis / Brad Geddes. https://www.youtube.com/watch?v=8KY-WuaTAsY. Published 2026-02-11. ARTICLE (companion blog post).
    - By default, a converting search term should become an exact keyword.
    - Exception: high-volume generic terms that convert under broad but bleed once made exact. Pause the exact keyword and let broad with tCPA handle them.
65. **RSA testing: turn your ad data into a competitive advantage.** Adalysis / Brad Geddes. https://www.youtube.com/watch?v=k4mHDdtekn0. Published 2026-09-28/29. ARTICLE ("How to find real insights hiding in your RSA data").
    - Ads are the remaining edge.
    - Aggregated tests across ad groups: no-DKI beat DKI, price headlines underperformed, "free quote" beat "affordable."
    - When CTR and CVR disagree, judge by conversions per impression.
66. **When should you switch from Max to Target bidding?** Adalysis. https://adalysis.com/blog/when-should-you-switch-max-target-bidding/. Published 2025-11-18. ARTICLE (no matching video confirmed).
    - Across 16,825 campaigns, those with more than 30 conversions a month are more likely to use tCPA.
    - Keep brand separate.
67. **How to use n-grams to speed up search term analysis.** Adalysis. https://www.youtube.com/watch?v=9Hz88qRDNQI. Published 2026-03-26. DESC.
    - Split search terms into 1-5 word patterns to find wasted spend and negatives at scale.
68. **How to create effective AI Max text guidelines.** Adalysis. https://www.youtube.com/watch?v=efig_3usUPE. Published 2026-04-22. DESC.
    - Text guidelines steer auto-created assets. Most useful for busy advertisers.

### Andrew Lolk (Savvy Revenue). All e-commerce focused; the bidding principles transfer.

69. **The Biggest Google Ads Mistakes I See After 50+ Audits.** Andrew Lolk. https://www.youtube.com/watch?v=_cGYaD_zFr4. Published 2026-05-12. DESC+CH.
    - In-platform data treated as the truth.
    - Over-segmentation starves Smart Bidding.
    - Brand and non-brand blended together.
    - Splits that don't reflect real performance.
70. **Phrase Match vs Broad Match: You're Using Broad Wrong.** Andrew Lolk. https://www.youtube.com/watch?v=oFhRfESBpio. Published 2026-04-21. DESC+CH.
    - Broad takes credit for exact/phrase search terms in reports.
    - Phrase is the better starting point. Broad is a lever, not a foundation.
71. **Google Killed Broad Match with Phrase Match + AI Max.** Andrew Lolk. https://www.youtube.com/watch?v=N4gPv7R9Bwo. Published 2026-05-19. DESC+CH.
    - Phrase plus AI Max gives reach with relevance.
    - Exclude out-of-stock or irrelevant URLs.
72. **6 Smart Bidding Mistakes That Are Costing You Money.** Andrew Lolk. https://www.youtube.com/watch?v=IAGGFHf9QzQ. Published 2026-04-14. DESC+CH.
    - Running limited by budget, campaign-only targets, static targets, ignoring projected ROAS, over-tinkering.
73. **How Often to Make Smart Bidding Changes (and How Much).** Andrew Lolk. https://www.youtube.com/watch?v=6YxajP9Xxgo. Published 2026-06-16. DESC+CH.
    - Weekly cadence.
    - Change sizes: nudge 10%, act 20%, urgent 30%+.
    - Anchor changes to projected performance.
74. **Stop Relying on Ad Strength: The RSA Testing Framework That Works.** Andrew Lolk. https://www.youtube.com/watch?v=5OvsC1BK8j8. Published 2026-01-19. DESC+CH.
    - Use headline-level data.
    - A CTR × CVR quadrant matrix to cut losers and iterate.
    - Repeat quarterly.
75. **Smart Bidding Changes Aug 17: Your 4 Options, Ranked.** Andrew Lolk. https://www.youtube.com/watch?v=-Yk4O9RizlA. Published 2026-08-11. DESC.
    - The impact is smaller than feared.
    - Options include adjusting targets or using Max Conversion Value.
76. **The New Rules of Smart Bidding (and What Stays the Same).** Andrew Lolk. https://www.youtube.com/watch?v=sNZ9SpapS_M. Published 2026-10-05. DESC+CH.
    - The "death-spiral" trick is dead.
    - Raise budgets faster when limited.
    - Max bid limits still matter.
    - Manual bidding still has a place for new accounts.

### Paid Media Pros

77. **What to Do When Conversions Break in Google Ads.** Paid Media Pros. https://www.youtube.com/watch?v=qeSz9MqJRMI. Published 2025-12-16. DESC+CH.
    - A technical checklist first, then performance shifts, then action.
78. **Google Ads Search Term Word Performance.** Paid Media Pros. https://www.youtube.com/watch?v=R5tSdwJ_FAk. Published 2025-11-06. DESC+CH.
    - The new Searches/Words card shows single-word performance and lets you negate from it.
79. **Google Ads Smart Bidding Exploration.** Paid Media Pros. https://www.youtube.com/watch?v=6WlJGksZCCc. Published 2025-10-23. DESC+CH.
    - tROAS-only feature, and probably not a fit for most advertisers.
80. **Google Ads Investment Strategies.** Paid Media Pros. https://www.youtube.com/watch?v=Q-Ac1AiJlV8. Published 2025-10-27. DESC+CH.
    - Recommended Investment Strategies forecast what extra spend would do for budget-capped campaigns.
81. **Google Ads AI Max Locations of Interest.** Paid Media Pros. https://www.youtube.com/watch?v=HozW85Avfhg. Published 2025-08-27. DESC+CH.
    - AI Max geo controls work differently from regular location targeting.

### Optmyzr (Frederick Vallaeys)

82. **8 PPC Experts Predict 2026: Automation, AI, and What Really Wins.** Optmyzr (with Jyll Saskin Gales, Kirk Williams and others). https://www.youtube.com/watch?v=2TdOEFcS2bg. Published 2026-02-04. DESC+CH.
    - Best practices aren't enough anymore. Data quality, creative and business context drive results.
83. **How to Protect Your CPA and ROAS From Google's August 17 Bidding Change.** Optmyzr. https://www.youtube.com/watch?v=4ewEj-ycg14. Published 2026-07-31. DESC.
    - Ease targets toward actual performance only where budget is the constraint and the campaign has consistently beaten target over 7, 30 and 90 days.
84. **3 Ways to Stop AI From Going Off the Rails in Google Ads.** Optmyzr / Fred Vallaeys. https://www.youtube.com/watch?v=QSLDxZpoMOo. Published 2026-09-10. DESC+CH.
    - Ground AI in real data.
    - Policy checks (e.g., never move a bid more than 10%).
    - A human approves every change.

### Solutions 8

85. **Buyer Intent Keywords: How to Find the Ones That Actually Drive Sales.** Solutions 8. https://www.youtube.com/watch?v=KT0zCmuwH10. Published 2026-07-21. DESC+CH.
    - Volume is not intent. Read the SERP for buying signals.
    - "best/review/vs" are mid-intent.
    - A bad landing page kills good keywords.
86. **Conversion Challenges Solved: Elevate Your Lead Generation Impact.** Solutions 8. https://www.youtube.com/watch?v=1qOgGByjK8g. Published 2026-01-16. DESC+CH.
    - Message match.
    - Fast mobile landing pages.
    - Reduce form friction.
    - Reviews and testimonials as trust signals.
    - Use behavioral data to find bottlenecks.
87. **How Much Should You Spend on Google Ads? (And When to Stop).** Solutions 8. https://www.youtube.com/watch?v=27AhFIJNI8M. Published 2026-05-19. DESC+CH.
    - Set financial break-even before choosing a budget.
    - Use a smart starting budget and watch for warning signs of overspend.
88. **Are You Using Too Many Keywords in Google Ads?** Solutions 8. https://www.youtube.com/watch?v=VnNDa9yV_Ok. Published 2026-09-01. DESC+CH.
    - There is no magic keyword count. Structure, intent and relevance matter more.
    - Split bloated ad groups by intent.
89. **How to Get Conversions with Effective Ad Copy (Winning Words).** Solutions 8. https://www.youtube.com/watch?v=n5jgt3y63s0. Published 2026-01-30. DESC+CH.
    - Lead with the buyer's job.
    - Specifics over fluff.
    - Address objections.
    - "You + outcome + when" formula.
    - Result-oriented CTAs and reassuring microcopy.

### Kirk Williams (ZATO)

90. **Survival of the Strategic: Rethinking Growth in Search Marketing (SMX Berlin keynote).** Kirk Williams. https://www.youtube.com/watch?v=y8Vdn_av22A. Published 2025-10-22. DESC+CH.
    - Paid search captures demand rather than creating it.
    - Find your "efficiency plateau."
    - Diagnose business problems vs channel problems.

### Miles McNair / Bob Meijer (PPC Mastery)

91. **How he grew his Google Ads agency with CRO and AI w/ Seth Gorton.** PPC Mastery. https://www.youtube.com/watch?v=XCiCA4_f-7E. Published 2026-09-01. DESC+CH (podcast RSS show notes).
    - Own the path from click to conversion.
    - CRO: find the drop-off, then find why.
    - "Grandmother test" for landing pages.
    - A site rebuild lifted CVR 40%.
92. **+77% Google Ads conversions with irresistible offers (w/ Lol Lowe), EP39.** PPC Mastery. https://www.youtube.com/watch?v=YB1ClZdOPjI. Published 2025-05-30. DESC+CH.
    - Offer and ad changes gave CVR +77%, CTR +67% and CPA -55%.
93. **An unofficial Google Rep's take on what drives REAL Google Ads Results, EP30.** PPC Mastery. https://www.youtube.com/watch?v=CvrMWykigvE. Published 2025-02-06. DESC+CH.
    - Fundamentals before advanced tactics.
    - Auto-created assets.
    - Experimentation.
94. **Real Google Ads case studies for Ecom & Lead Gen (w/ Ramial Aqeel), EP31.** PPC Mastery. https://www.youtube.com/watch?v=smyFSkuvXLs. Published 2025-02-12. DESC+CH.
    - Includes an "Event and Hospitality" case study chapter.
    - Landing-page importance.
    - Simplicity in campaign structure.

### Local / lead-gen focused channels

95. **6 Ways to Get Higher Quality Leads from Google Ads in 2026.** StubGroup (John Horn). https://www.youtube.com/watch?v=bHqdnXGzHGU. Published 2025-10-18. DESC+CH.
    - Usual culprits: Display, Search Partners, PMax.
    - Clear ads and landing pages to qualify visitors.
    - Form captures to filter spam.
    - Add friction to qualify.
    - Call tracking, OCI, and uploading "bad leads" to diagnose.
96. **How To ACTUALLY Run Google Ads 2026 (Home Service Businesses).** Daniel Dimsey. https://www.youtube.com/watch?v=TvtCWgaq7lE. Published 2026-03-14. DESC.
    - A Search campaign on high-intent "near me" keywords.
    - Copy-able structure, keywords and bidding for local services.
97. **How I'd Run Google Ads for a Local Business in 2026.** Ammar (Google Ads For Leads). https://www.youtube.com/watch?v=ZVK7XlWQdyI. Published 2025-09-21. DESC+CH.
    - Connect the Google Business Profile.
    - Auto-apply recommendations off.
    - Account structure, local keyword research, negatives, tracking, top 5 tips.
98. **How To Optimise Your Google Ads For Leads In 2026.** Luke O'Herlihy (Precision Leads). https://www.youtube.com/watch?v=uEZ9YoQQjbU. Published 2026-04-15. DESC+CH.
    - Optimization order: search terms, ad group structure, budget/bid, ads, keywords, match types, QS, assets, Auction Insights, bidding, landing pages, tracking, negatives.
99. **The Google Ads Strategy That's Working For Local Services In 2026.** Adrian Harrison. https://www.youtube.com/watch?v=fcOssddEeqc. Published 2025-12-25. DESC.
    - "First Page Local Intent" strategy: own page one for high-intent local searches and optimize for conversations, not clicks.
100. **Google Ads for Party Rentals.** Alex Does Digital. https://www.youtube.com/watch?v=lxcRCPetVN4. Published 2025-01-21. DESC (thin).
     - Rental-specific campaign setup and conversion tracking for filling a booking calendar. The description gives little detail.

*Not counted, description had no usable content:* Event Hawk "How to Get More Bookings with Google Ads for Your Party Rental Business" (jhB2RbqbjXk, 2026-04-23; webinar promo only), Behruz "Google Ads for Local Business (Updated Setup for 2026)" (KFdZsSkUSmA), Ammar "How to IMPROVE Lead Quality" (qSunIGDsFFk), Compete Now "Google Ads Tips for Event Rental Companies" (aw6oVSaEGHM), the 8 Ben Heath videos, Kirk's MAKROZ video (2023).

---

## (b) Synthesis: the 18 most repeated and valuable tactics for a small, premium, local lead-gen business (event rental, Quebec)

Each item notes who said it and how often it came up. Disagreements between experts are flagged. Items marked **[my addition]** are not from the videos.

### Foundations: do these before spending

**1. Conversion tracking comes first, and only real leads count as primary.** This was the most repeated point overall: Jyll in Ep97, 100, 111, 115 and 122; Surfside in Ep1, 7, 21 and 31; Google in S1E4/5; Aaron Young; StubGroup.
- Set up these conversion actions:
  - completed quote/booking form, fired on the thank-you page, counted "one" per click
  - calls from ads
  - website calls of 60 seconds or more through a Google forwarding number
- Make click-to-call taps, page views, "contact" button clicks and newsletter signups **secondary**. Click-to-call overcounts badly in PMax.
- Before launch, audit with **All conv. + segment by conversion action**. Several case studies traced "great" results to page views counted as conversions; one showed a 93% CVR.
- Install Google Tag Manager with the conversion linker. Turn on enhanced conversions for leads and Google Tag Gateway (Google S1E5).

**2. Feed lead quality back to Google: offline conversions.** Jyll called it "lead gen can't scale without it." Repeated by Jyll in Ep115, 138 and ROs6o7Lllu4, Google S1E5 and the first-party data episode, Surfside Ep1/7, StubGroup and GML 2026.
- Log every lead in a CRM or lead tracker. WhatConverts and CallRail were the most named; a spreadsheet plus Data Manager also works.
- Mark *qualified lead* (real date, real budget, in the service area) and *booked/deposit paid* with a value.
- Import those stages using the Qualified lead / Converted lead goal categories.
- Low-volume progression (Jyll Ep138):
  - Start Max Conversions with lead, qualified and booked all set as primary. The intentional multi-counting works like pseudo value bidding.
  - Drop raw leads first, which removes the spam.
  - Move to tCPA at about 30-50 conversions (over 2-3 months is fine).
  - When bookings reach about 25-30 a month, demote "qualified" to secondary.
- Upload past customers as a Customer Match list too, refreshed monthly. Even at small spend it is a bidding signal (Jyll Ep125).

**3. Size the budget to clicks, not to a round number.** Repeated by Jyll Ep100/97, Surfside Ep12/32 and the LoyJP3qxJyY tutorial, Aaron Young (icTs, O0uj, keyword video).
- In Keyword Planner, set the location to Montreal/Quebec City or wherever you serve. Average the low and high top-of-page bids to estimate CPC.
- Budget for at least **10 clicks a day**. Surfside's minimum is 5-10; Aaron uses about 10x CPC.
- $20/day only works when CPC is $2 or less. Expect month 1 to bring "some conversions" and month 2 to reach break-even (Aaron).
- Surfside caps new local accounts at about $100/day until lead quality is proven.

**4. Settings hygiene on day one.** Repeated by Jyll Ep97/100/111/129, Surfside ISUHurlpxRM, Ammar, StubGroup.
- Search Partners **off**. Display **off**.
- Location set to **Presence** (people in your area), not "presence or interest."
- **Auto-apply recommendations off.**
- Account-level automatically created assets off (sitelinks/callouts). Turning these on now also opts you into AI Max (Surfside Ep29).
- Re-check these monthly. Jyll's cases repeatedly found Search Partners "mysteriously" back on.

### Structure and keywords

**5. Lean structure: one Search campaign, a few intent-themed ad groups.** Repeated by Google S1E2 (Brandon Ervin), Aaron Young (7ZPG), Jyll Ep97/123, Solutions 8 (VnND), Andrew Lolk (over-segmentation), Surfside Ep16.
- Start with one Search campaign.
- Build ad groups by service intent, roughly 5-15 keywords each, each with its own matching landing page. For an event rental that could be: wedding rentals, corporate/gala event rentals, tent & structure rentals, furniture/lounge & décor, tableware/linen.
- Split into separate campaigns only for different budgets or goals.
- **[my addition]** Run separate French and English campaigns (language targeting plus fully localized ads and landing pages), because Quebec's Bill 96 French-language rules apply to commercial ads. Don't add PMax, Demand Gen or AI Max until Search is converting with clean data. Jyll Ep82, Surfside Ep27 and Jyll Ep101 (PMax needs about $50/day plus proven tracking) all say the same.

**6. Match types: start tight, loosen only with data.** Strong consensus for small budgets.
- Jyll: on $1,000/month or less, use exact on 10-20 high-intent keywords.
- Surfside: exact, then phrase, then broad, and avoid broad on $2-3k/month budgets.
- Andrew Lolk: phrase is the better foundation; broad is a lever.
- Aaron Young is the outlier: long-tail broad plus exact in the same ad group.
- Adalysis: converting search terms become exact keywords, with the exception that some generic terms work better left to broad under tCPA.
- Plan:
  - Start exact plus a few phrase keywords: "location chapiteau mariage," "location mobilier événement Montréal," "[service] near me / près de moi."
  - Once on tCPA with clean data, add your top converting search terms as broad and test for two weeks (Jyll Ep123, Surfside Ep4).

**7. Proactive and ongoing negatives, without whack-a-mole.** Repeated by Surfside Ep30/21, Jyll Ep97/123/129, Adalysis n-grams, Paid Media Pros word report.
- Build a shared account-level list before launch, about 50 terms:
  - free/gratuit
  - DIY
  - jobs/emploi/salaire
  - à vendre / for sale, used/usagé
  - cheap/pas cher, if premium positioning
  - kids' bounce houses, if not offered
  - wholesale, cost calculators
- Attach the list to every new campaign; it is not automatic.
- Review search terms weekly, sorted by cost, using the word/n-gram views.
- If you are negating more than 10% of terms, or junk keeps coming, find the keyword or bid strategy causing it and pause it (Jyll).
- Keep a "never block" list: location, rental, mariage, événement, corporate.
- Note: Jyll Ep138, crediting Andrew Lolk, suggests that mature smart-bidding accounts *test removing* legacy negatives such as competitor names and near-synonyms. That is not for launch.

### Bidding progression (where the experts disagree)

**8. Bidding: conversion-based as soon as tracking is trustworthy, then a target.**
- **Camp A** (Jyll Ep122/114/86, Google S1E4 "cold start"): start on **Max Conversions** on day one if tracking is solid. Manual CPC buys "cheap clicks nobody else wanted," and switching later triggers relearning. In her home-services case, CPC went up about 5x while CPL roughly halved.
- **Camp B** (Surfside Ep3/9/12/15, the LoyJ and ISUH tutorials): start **manual CPC or Max Clicks on exact** to avoid Max Conversions over-bidding with zero data, then switch at about 5-7 conversions in 1-2 weeks.
- **Recommended path for a limited budget:**
  - Launch Max Conversions with a modest budget and verified tracking.
  - Fall back to Max Clicks, capped at your top-of-page CPC estimate, only if it fails to spend after a week or CPCs blow past 2-3x the Keyword Planner estimate (Jyll's own exception).
  - Move to **tCPA at roughly 30 conversions/month**. Adalysis's 16,825-campaign data shows tCPA dominates above 30 conversions a month. Set the target at about your trailing 30-day CPA.
  - Then walk the target down 10-20% at a time, changing no more than weekly and waiting at least one conversion cycle (Surfside Ep32, Andrew Lolk, Google S1E4).
  - Never use Target Impression Share (Surfside, Jyll).

**9. Budget-limit logic after Aug 17, 2026.** Repeated by Jyll Ep119/130, Google Q&A, Optmyzr, Andrew Lolk, Surfside Ep32.
- Max Conversions is always "limited by budget" by design. Ignore the yellow warning.
- On tCPA, a red "limited by budget" warning plus lost impression share (budget) of 10% or more plus CPA on target means raise the budget 10-20%.
- Since Aug 17, 2026, budget-limited tCPA campaigns aim *at* the target instead of beating it. So set the target you actually want; don't rely on overshoot.
- **Don't judge daily.** Check weekly, change monthly, and account for conversion lag. Event leads may take days to qualify (Jyll Ep106, Google S1E4).

### Ads and assets

**10. RSA copy: match the search, sell benefits, give a specific CTA.** Repeated by Surfside Ep28, Jyll Ep100/132, Aaron Young (bjRR), Solutions 8 (n5jg), Adalysis RSA article, Google RSA video.
- **Headline 1** mirrors the service searched, e.g. "Location de chapiteaux pour mariage."
- **Headline 2** is a specific CTA. The best example in the research fits a date-based rental exactly: **"Reserve your [event] date now."** Generic "Contact us" underperforms.
- Add benefits and proof: "Premium tents & lounge furniture," "Delivery & setup included," "500+ 5-star reviews," "Since 20XX."
- Address objections: weather plans, permits, setup and teardown.
- Use 2-3 RSAs per ad group so messages can be compared.
- Ad strength is not an auction factor (Surfside, Andrew Lolk). Judge assets at about 100 clicks for CTR (Jyll).
- **Test, don't assume:** DKI helped in Jyll's exact-match case but lost in Adalysis's aggregated test. Price-in-headline lost in Adalysis's test. "Free quote" beat "affordable."

**11. Fill every relevant asset.** Repeated by Jyll Ep118, Surfside Ep29, Google RSA video, Surfside Ep17.
- Sitelinks, 4-8: Weddings, Corporate events, Tents, Furniture & décor, Gallery/Realisations, Reviews, Request a quote.
- Callouts, 25 characters max: Delivery & setup, Bilingual team, Insured, Serving Greater Montreal.
- Structured snippets: Services / Types, e.g. Tents, Lounge furniture, Dance floors, Lighting.
- Business name and an icon-style logo.
- Image assets of real installs, once the account is 60 days old with 30 days of spend.
- A location asset through a linked Google Business Profile, which also gives Maps visibility.
- A call asset scheduled to business hours.
- Price assets ("Packages from $X") if you want to pre-qualify on budget. **Test it**, given Adalysis's price-headline result.
- Skip lead-form assets unless you use the new Qualifying Questions and pipe leads to your CRM. Jyll, Surfside, StubGroup and Google all flag them as low-quality or low-volume by default.

### Landing pages and lead quality

**12. Dedicated, fast, trust-heavy landing pages with message match.** Repeated by Surfside Ep7/16/17 and LoyJ, Solutions 8 (1qOg, KT0z), PPC Mastery/Seth Gorton, Aaron Young (icTs), Jyll Ep132.
- One page per service theme, with the headline matching the ad.
- Above-the-fold proof: a gallery of your installs, Google reviews, logos of venues or corporate clients.
- Clear packages and process.
- Mobile speed checked in PageSpeed Insights.
- One clear CTA, plus a visible phone number tracked with a forwarding number.
- Test landing pages by duplicating an ad with only the final URL changed (Surfside).
- Find the drop-off before redesigning (Seth Gorton).
- Benchmarks: Jyll expects an **8-10% form CVR** for a good small service business; her $20/day client hit 14%. **Non-brand CTR 5-7%**, or 3-4% where Local Services Ads show.

**13. Filter lead quality at the form and in targeting.** Repeated by StubGroup, Google S1E5 (Qualifying Questions), Jyll Ep115/111, Aaron Young (QxfB/Y8Tw), Surfside Ep1.
- Add light, purposeful friction to the quote form: event date, event type, guest count, venue/city, budget range ("packages typically start at $X"), and a required phone or email.
- Use a CAPTCHA or honeypot for spam.
- Calls from ads and lead-form assets skip your website and skew lower quality. Treat them cautiously or give them a lower value.
- When junk appears, check in order: Search Partners/Display, then click-based bidding, then broad/AI Max/PMax.
- StubGroup's advanced move: upload "bad leads" to diagnose patterns.

### Diagnosing and growing

**14. Diagnose with root causes and benchmarks, not reactions.** Repeated by Jyll Ep97/111/129/106, Adalysis "spend up, conversions down," Paid Media Pros "conversions break," Kirk Williams.
- A CPA rise comes from CPC rising or CVR falling. Check which, then look for causes: bids, QS, competition, demand, search-term matching, ad changes.
- Metrics that are too good (75% CTR, 93% CVR) are as suspicious as metrics that are too bad.
- High CPCs aren't the enemy; low-quality traffic is. Sort search terms by CPC; expensive terms often carry the conversions.
- Don't revert to manual bidding or add bid caps as a band-aid (Jyll).

**15. Quality Score through expected CTR.** Repeated by Jyll Ep132/97, Surfside Ep9.
- Look at your auction competitors' ads in the Ads Transparency Center, plus premium rental companies in other cities.
- Borrow the strongest elements (free quote, urgency, benefits, assets) without copying.
- Aim for keyword QS of 6 or higher. Improvements show after a month or more.

**16. Brand and competitor terms: only if needed, done compliantly.** Repeated by Jyll Ep113/137, Andrew Lolk (keep brand separate).
- Run a brand campaign only if Auction Insights shows rivals bidding on your name. Test it for a month.
- To target competitors, never put their name in a headline. Build an honest "Us vs [competitor]" comparison page and a dedicated ad group.

**17. Plan around seasonality explicitly.** Repeated by Jyll Ep106, Google S1E4/Q&A, Aaron Young (-cmT).
- Wedding and outdoor-event demand peaks in spring and summer; corporate and holiday parties in Nov-Dec. **[my addition: Quebec specifics]**
- Lean into it in creative: "Summer 2027 dates are booking now — reserve early."
- Lower the budget off-season rather than forcing results.
- Use seasonality adjustments only for short, known spikes. Smart Bidding already learns recurring seasons.

**18. Scale only when the funnel is proven: expand, don't just raise budget.** Repeated by Jyll Ep119/86/97, Surfside Ep4/32, Aaron Young (bottom-up funnel, "break-even by month 2").
- Once impression share on core terms is high (60%+) and CPA is on target, growth means more keywords, a wider geography (Quebec City, Ottawa-Gatineau, Laurentians/Eastern Townships venues), or phrase-to-broad tests.
- Only after that consider AI Max, with brand exclusions and URL exclusions, or Demand Gen and YouTube for awareness.
- Repeated warning: AI Max and PMax on thin data spend on irrelevant or brand traffic.

### Bottom-line launch recipe

1. Tracking: thank-you-page forms and 60s+ calls as primary, everything else secondary, plus CRM qualification stages ready for import.
2. One Search campaign per language with 3-5 intent ad groups and dedicated landing pages.
3. 10-20 exact plus a few phrase keywords, with a pre-built negative list.
4. Search Partners, Display, auto-apply and auto-assets off. Presence-only location.
5. Max Conversions on a budget for at least 10 clicks a day, falling back to capped Max Clicks only if it stalls.
6. Weekly search-term and asset review. Monthly changes.
7. Import qualified and booked events as soon as possible.
8. tCPA at about 30 conversions a month, then move the optimization goal down-funnel.
