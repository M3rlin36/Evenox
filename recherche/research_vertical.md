# Evenox: vertical research (ChatGPT Ads + GEO for premium turnkey event rental, Quebec)
Compiled 2026-10-07. Numbers in [brackets] point to the source log at the end.

---
## 1. What Evenox sells and how the site captures leads

**Company.** Évenox (EVENOX INC.) was founded in July 2022 by Alexandre Séguin. It started with inflatables. Warehouse: 215 boul. René-A.-Robert, Sainte-Thérèse QC J7E 4L1. Phone 514-559-1893. Email: evenox.ca@gmail.com [1][6]. The site claims "1 000+ événements depuis 2022", Google 4.8/5 (52 reviews), and client logos for RBC, PwC, Desjardins, Polytechnique Montréal and several municipalities [1].

**Catalogue.** Giant, inflatable, table and arcade games; decor (floral arches and walls, marquee letters and neons, red carpet, balloons); furniture (tables, chairs, linens, dishware); tents of 10x10 to 30x30 ft; candy machines; AV; photobooth and 360 videobooth [1][9][19]. Corporate pages cover office parties, team building, galas, product launches, graduations, congresses and municipal events [1][7].

**Price signals** [2][3][4][15][16]
- Corporate packages: 5 à 7 d'équipe $1,195. Party de bureau $1,995. Gala Signature $2,495 (75–150 people, photobooth with attendant).
- Wedding and event packages: Décor WOW $899. Soirée Signature $1,449. Wedding tiers: Essentiel from $599, Premium from $999, Royal custom.
- City landing pages: Ambiance $995 / Spectaculaire $1,895 / Prestige $3,495.
- Furniture: $6.25/person for 48 h. Chairs $2–3, tables $10, photobooth $500–599.
- Delivery: $100 for the first 10 km, then $7/km up to 40 km. Downtown Montreal is quoted case by case. Installation $50/h.
- Delivery minimum is $200. Pickup has no minimum.
- Payment: 20% deposit (credit if cancelled 14+ days out, nothing back within 7 days). Corporate clients get net-30 with no deposit.

**Lead capture.**
1. Quote form "Obtenir ma soumission gratuite", answered within 24 h. Fields: name, email, phone, date, address, message [2].
2. Self-serve Booqable shop, open 24/7 with no minimum [8].
3. A "Monter ma liste" configurator with live prices. It sends anything over $1,000 to the phone [5].
4. Phone and Gmail.

**Weaknesses that hurt both paid conversational traffic and GEO**
- **The form doesn't qualify leads.** There are no fields for budget, guest count, event type, company vs. private, or decision timeline. A $200 birthday bounce-house and a $5k gala come through the same funnel [2][7].
- **The positioning is blurred.** The site calls itself "premium / clé en main" but its catalogue is heavy on children's inflatables (Princess, Spiderman, Mickey bouncers) and it advertises $2 chairs. Self-serve booking has no minimum [8][1]. An LLM summarising the brand will read it as a budget family party-rental company, not a premium corporate supplier.
- **Gmail address and Facebook "people" profile.** The schema sameAs points to facebook.com/people/…, a personal profile rather than a Business Page. Both are weak trust and entity signals [crawl, 1].
- **Inconsistent facts across pages.** Pages variously claim 4.8 vs 4.9 stars, 500+ vs 1,000+ events, photobooth $500 vs $599, chairs $2 vs $3. Animated counters also render as "0+ Événements" in crawled text (seen in llms.txt) [crawl]. LLMs downweight entities whose facts contradict each other.
- **Templated city pages.** 6 cities × 4 services (événement clé en main, photobooth, équipement mariage, party de Noël) use near-identical copy with only the city name swapped. That is a doorway-page risk, and these pages carry no testimonials [crawl][19].
- **The address isn't the same everywhere.** WeddingWire lists Évenox in "Laval" with 0 reviews, while the site says Sainte-Thérèse [17][18]. Engines can't find the brand by name: web searches for "Évenox" return Evenko or nothing [10][11]. The brand also sits outside every "Three Best Rated" list that ChatGPT cites (Laval, Montreal, Longueuil) [41][42][43].
- **Schema gaps.** The schema (Yoast + custom) has Organization+LocalBusiness, areaServed and Offers. It is missing aggregateRating and Review, uses inLanguage fr-FR instead of fr-CA, and has no FAQPage on service pages [crawl].
- **Tracking is client-side only.** GA4/gtag, Meta pixel and TikTok are present with the WP Consent API, but consent_type is empty. Law 25 compliance should be verified [crawl][70][71]. There is no call tracking and no offline-conversion loop.
- **Strengths.** OAI-SearchBot and Bing are not blocked in robots.txt. llms.txt exists. The ~25 blog posts are question-style ("Combien coûte…", "Et s'il pleut?") [9]. Packages are priced publicly, which is rare in this market and gives LLMs good material to quote.

---
## 2. ChatGPT Ads: state of play (Oct 2026) and how it applies to event rental

**Timeline**
- Jan 16 2026: OpenAI announces ad principles [24][25].
- Feb 9: US pilot on the Free and Go tiers [21][22].
- Mar 26 / Apr 16: ads go live for users in **Canada**, Australia and NZ [26][27][28].
- May 5: self-serve Ads Manager beta in the US with CPC bidding. The $50k minimum is removed and the daily minimum is $25 [20][29][30].
- Jul 15: location and audience exclusions [33]. Geo targeting goes to state/DMA/ZIP in the US [34].
- Jul 24: oCPC conversion bidding [55].
- Aug 24–31: Europe and India; self-serve expands to EU/MENA/India [35][36][37].
- Late Sep: "Sponsored Agents" alpha, where clicking an ad opens a chat with the brand [62][63].
- Revenue: about $1B annualised run rate [36].

**Canada self-serve is ambiguous.**
- OpenAI's help-centre availability page, in the search snippet, lists Canada as "available" for Ads Manager. The rule is that the billed legal entity must be based in an available country [38].
- Some Canadian commentators (chatgpt.ca, TechWyse in April) say Canada self-serve isn't open and buying goes through partners [31][27].
- Action: sign up at ads.openai.com with the Quebec entity to confirm. Fallback is OpenAI's agency and technology partners (Adobe, Criteo, StackAdapt and others) [20].
- French-language ad support for Quebec isn't documented. France got Ads Manager in Aug 2026, so French creative is technically supported [39][40].

**Format and targeting**
- A "Sponsored" card under the answer: advertiser name, favicon, short headline (~16 chars) and description (~32 chars), image and link [29][30].
- Matching is contextual. Advertisers write natural-language "context hints" rather than keywords. The system also weighs the landing-page content, recent chat history and past ad interactions [29][26].
- Ads don't change the answer and never appear on Plus, Pro, Business or Enterprise, or for under-18s [24].
- Implication for B2B: many corporate event planners use ChatGPT Business or Enterprise at work, so they **won't see ads** [31][54]. Free/Go users, meaning couples, families and SMB office managers on personal accounts, will.

**Costs and benchmarks** (early and vendor-reported, so treat with caution)
- CPC: recommended bids of $3–5. CPM has fallen from $60 to about $25 [30][68].
- Local and personal services: CTR 0.8–1.5%, conversion 6–10% [57][68].
- A B2B case study saw a $0.76 CPC but only 0.8% conversion, and Google Ads leads closed better [56]. Lead quality is not guaranteed.
- AI-referred organic traffic converts 1.5–5x better than Google organic in several studies [69][77].

**Policies.** Local services and travel/entertainment are eligible categories. Alcohol is disallowed, so open-bar and cocktail-machine creative must be avoided or kept off the landing page [64][65].

**Event and wedding examples**
- The Knot is in the ChatGPT ads pilot and buys category pages ("florists in Boston") rather than single vendors [45]. It also has a ChatGPT app covering 24 vendor categories that uses guest count, budget and location [46][47].
- 36% of couples use AI for planning [44][48].
- Independent hoteliers have used Ads Manager since June with a $25/day minimum [49].
- Applied to Evenox: run context hints around "planning a holiday office party for 50 employees in Laval" or "wedding decor rental Rive-Nord". Send clicks to dedicated, qualified landing pages, not the homepage [34].

---
## 3. Top prompts to target (organic + context hints)
Quebec context: 52% of Quebec internet users have used generative AI, ChatGPT is the most used, and 54% use it weekly [50][51]. Prompts will be mostly French with some English (West Island and corporate).

**Corporate (highest value; Q4 party season starts now)**
1. « Idées de party de bureau / party des Fêtes clé en main pour 50–150 employés à Laval / Rive-Nord / Montréal »
2. « Fournisseur clé en main pour un gala corporatif à Montréal (décor, photobooth, mobilier) »
3. « Activité team building avec jeux géants à Montréal, livrée au bureau »
4. « Budget par personne pour un party des Fêtes d'entreprise au Québec » (budget is $75–300/person) [66][67]
5. "Turnkey corporate holiday party rentals Montreal: photobooth, giant games, popcorn machine"
6. « Location photobooth 360 pour événement corporatif / lancement de produit Montréal »

**Weddings**
7. « Location déco mariage clé en main Rive-Nord / Laval (arche florale, lettres lumineuses) »
8. « Combien coûte la location de tables, chaises et chapiteau pour un mariage de 120 invités au Québec? » (average Quebec wedding costs $20–25k for about 120 guests) [73][74]
9. « Meilleur photobooth / miroir photobooth pour mariage à Montréal »
10. « Mariage extérieur : location de chapiteau 20x40 et mobilier Laurentides »

**Municipal and schools**
11. « Fournisseur jeux gonflables et jeux géants pour fête de quartier / fête nationale municipale »
12. « Location équipement pour bal des finissants (graduation) Laval »

**Comparison / "best" prompts (fan-out adds "best", "top", "avis")** [59][60]
13. « Meilleures entreprises de location d'équipement événementiel à Laval / Montréal / Rive-Nord »
14. « Évenox vs Célébrations vs Omega Design: avis et prix »

---
## 4. GEO checklist (getting recommended organically)

**How ChatGPT finds local businesses**
- It runs a live search, pulls 10–25 candidates and names 3–6 [52].
- Sources include OpenAI's own index, Google results via Bright Data and Oxylabs, Google Maps, **Yelp and TripAdvisor as licensed local partners**, and Microsoft Web IQ [53].
- Yelp appeared in 80% of ChatGPT local answers [76].
- Business websites make up 58% of ChatGPT local sources, mentions 27%, directories 15%. Within directories, **Three Best Rated has a 24% share** [75].
- Bing Places is still widely cited as a pipeline, and its review sources skew to Facebook and Yelp [78][79][80].
- Whitespark 2026: 3 of the top 5 AI-visibility factors are citations and mentions. Dedicated service/location pages rank #2 [81][82].
- Wedding queries: The Knot, Zola and WeddingWire hold about 73% of AI citations, and 84% of vendors have zero share [44].

**Checklist**
1. **Entity fixes**
   - One canonical NAP: "Évenox, 215 boul. René-A.-Robert, local 100, Sainte-Thérèse QC J7E 4L1, 514-559-1893" everywhere. Correct the WeddingWire "Laval" entry.
   - Use a domain email (info@evenox.ca) instead of Gmail.
   - Convert the Facebook personal profile into a Business Page.
   - Disambiguate from "Evenko" (consistent spelling with the accent, and an About page with the founder and NEQ).
2. **Bing Places for Business**: claim it or import from GBP, verify, and use the categories Event rental / Party equipment rental [83][84][85]. Set up **Bing Webmaster Tools** with IndexNow and check the AI Performance report for citations and grounding queries [86].
3. **Google Business Profile**: complete services and products with prices, post weekly, use Q&A, and keep reviews coming. 90-day review recency matters [52]. Goal: 52 reviews to 150+, with reviews that mention "party de bureau", "mariage", "Laval" and so on.
4. **Yelp (Montréal) and TripAdvisor-adjacent**: claim Yelp. It's a licensed ChatGPT local source [53][76]. Seed reviews from corporate clients.
5. **Three Best Rated**: self-nominate for Laval / Montreal / Blainville "event rental" [41][42][43].
6. **Wedding directories**: complete WeddingWire.ca with reviews (Omega Design has 263 reviews at 5.0, Evenox has 0) [17][18][87]. Also Mariages.net/ca and The Knot CA if present.
7. **Corporate directories**: Tourisme Montréal "meet.mtl.org" supplier directory, where ABP, Beyond Fun and Locapaq are listed [12][13][88]. Also CCI Thérèse-De Blainville (1,200+ members) [89], CCI Laval, Pages Jaunes / YellowPages.ca, and Apple Business, the unified 2026 platform behind Siri and Maps [90].
8. **Editorial and earned mentions**: "top 10 in city" lists, Narcity/Noovo Moi, local Rive-Nord papers (Nord Info), wedding blogs. Wikipedia-style or press mentions make up 39% of business-mention sources [75][44].
9. **Reddit and community**: answer r/montreal and r/Quebec threads honestly about wedding and party rentals. Shopping research weighs community content [91].
10. **On-site**
    - Add aggregateRating and Review schema (genuine reviews only), FAQPage on each service page, inLanguage fr-CA, and an Offer per package.
    - Rewrite the city pages with unique local proof (venues served, photos, testimonials by city).
    - Remove the "0+" counters.
    - Settle on one set of facts (rating, events count, prices).
    - Publish a premium "Corporatif" hub with case studies such as RBC and PwC events, with permission.
11. **Crawler access**: keep OAI-SearchBot, Bingbot and Googlebot allowed. Keep llms.txt current [92][93].
12. **Measure**: track ChatGPT referrals (utm_source=chatgpt.com) in GA4. Run a monthly prompt audit of the 14 prompts above in ChatGPT, Copilot, Gemini and Perplexity [59][60].

---
## 5. Competitors (premium Quebec event rental) and AI presence

| Competitor | Base | Positioning | AI-cited surfaces observed |
|---|---|---|---|
| Celebrations Group / Location Gervais / Luxe Rentals | Montreal (6999 Victoria), Québec City, Toronto | Since 1919; 4–8k items, 50k+ sq ft; the premium wedding/corporate leader | Three Best Rated Montreal #1 (4.8), WeddingWire, Canadian Rental Service press [42][94][95][96] |
| Omega Design Events / Nite Mix | Saint-Léonard | Since 1998, 2,500+ events, turnkey rental + DJ; photobooth from $800 | WeddingWire 5.0 (263 reviews), TBR Montreal #3, PagesJaunes [87][42][97] |
| ABP Location | Pointe-aux-Trembles | 35 yrs, furniture, stages, tents; National Bank Open | meet.mtl.org, WeddingWire [88][98] |
| La Nouvelle Tablée | Longueuil | Since 1996, bistro furniture; weddings, corporate, festivals | TBR Longueuil #1 (4.7) [41] |
| Bravo Location, Location Cité Fêtes, Locaparty, Fiesta Location, Casa D'Eramo | Montreal / South Shore | Full-line rentals and decor | WeddingWire, TBR lists [41][42][99] |
| Abris Crystal, Diva Location, Glam Location & Décor | Laval | Tents; staged decor; turnkey wedding decor | TBR Laval #1–3, **the directory Evenox should break into** [43] |
| DX | Québec City + Anjou | Event furniture/decor, ~$7M revenue, GPS/SMS delivery tracking | Québec-Cité tourism directory [10][100] |
| Beyond Fun, JeuxSPIN, Teamland | Montreal | Giant-game team building | mtl.org, meet.mtl.org [12][13][101] |
| Fotobo, Snaptique, Le Fotobooth, Sorriso, Marabooth | Montreal / Laval | Photobooth specialists (Fotobo: Airbus, Desjardins) | Eventective, WeddingWire, Vistek [102][103][104] |

**Takeaways**
- The incumbents win AI answers through decades of directory reviews (WeddingWire), Three Best Rated badges and tourism-board directories.
- None combines decor, games, photobooth, furniture and candy with **public package pricing** and a Rive-Nord base. That one-supplier, priced-package angle is Evenox's opening.
- AI answers for "Laval" and "Rive-Nord" are winnable. The current set (Abris Crystal, Diva, Glam) is thin.

---
## 6. Lead-quality filtering for high-ticket rentals from conversational AI ads
- **Expect mixed intent.** Free/Go users skew consumer. CPCs are low but conversion can be poor (0.8% in one case) [56]. ChatGPT has no firmographic targeting [54].
- **Filter in the ad itself.** Use context hints scoped to corporate, wedding and gala, and put the price anchor in the copy ("Forfaits corpo dès 1 195 $"). Use negative or exclusion guidance (children's birthday, DIY, cheap, "gratuit"), location exclusions outside 40 km, and audience exclusions for past bookers [33][58][34].
- **Filter on the landing page.**
  - Use dedicated corporate and wedding pages showing "à partir de" prices and a stated minimum. Suggested minimums: $750 for weddings, $1,000 for corporate packages, delivery minimum raised from $200 [61][72].
  - Use a multi-step form asking: event type, organisation type (entreprise / municipalité / école / privé), date, city, guest count, budget band (<1k, 1–2.5k, 2.5–5k, 5k+), services wanted, decision role and timeline. Route budgets under $1k to the Booqable self-serve shop and send budgets of $2.5k+ to a phone callback [61][72][107].
- **Measurement and feedback loop.**
  - Pixel plus Conversions API firing only on qualified submits (budget ≥ threshold), not every form view.
  - Call tracking (dynamic numbers) so phone bookings feed oCPC.
  - Upload offline "booked / deposit paid" events [55][32].
  - Law 25: consent-gated pixels [70][71].
- **Test budget.** $25/day minimum. Run a 60–90 day test at $1.5–3k/month, focused on Oct–Dec office parties and Jan–Apr wedding booking season. Don't scale before 20–30 qualified conversions [32][20][34].

---
## Source log (numbered)
1. Évenox homepage, https://evenox.ca : catalogue, 1,000+ events, 4.8★/52 reviews, client logos, Booqable link.
2. Évenox Contact, https://evenox.ca/contact/ : quote form has name/email/phone/date/address/details; no budget or guest count; 24 h reply.
3. Évenox Forfaits tout inclus, https://evenox.ca/nos-forfaits-tout-inclus/ : corporate $1,195–2,495, decor $899–1,449, furniture $6.25/person.
4. Évenox FAQ, https://evenox.ca/faq/ : $200 delivery minimum, 20% deposit, net-30 corporate, $100 + $7/km.
5. Évenox Configurateur, https://evenox.ca/configurateur/ : live prices; Booqable checkout; phone for >$1,000.
6. Évenox À propos, https://evenox.ca/a-propos/ : founded July 2022 by Alexandre Séguin; started with inflatables.
7. Évenox Gala corporatif, https://evenox.ca/gala-corporatif/ : no prices or testimonials; generic form.
8. Évenox Booqable shop, https://evenox.booqableshop.com/ : kids' themed inflatables dominate; no visible minimum.
9. Évenox Blogue, https://evenox.ca/blogue/ : ~25 question-style posts suitable for AI.
10. Québec-Cité – DX, https://www.quebec-cite.com/fr/entreprises/dx : DX furniture/decor since 2006.
11. Wikipedia – Evenko, https://en.wikipedia.org/wiki/Evenko : name collision; search for "Evenox" returns Evenko.
12. MTL.org – Beyond Fun, https://www.mtl.org/fr/quoi-faire/activites/beyond-fun : tourism board lists a giant-games competitor.
13. meet.mtl.org – Beyond Fun, https://meet.mtl.org/en/plan/suppliers/beyond-fun : Tourisme Montréal planner supplier directory.
14. Évenox llms.txt, https://evenox.ca/llms.txt : exists; exposes templated city pages and "0+" counters.
15. Évenox Mariage, https://evenox.ca/mariage/ : wedding tiers $599/$999/custom; 3 testimonials.
16. Évenox Événement clé en main Montréal, https://evenox.ca/evenement-cle-en-main-montreal/ : templated; $995/$1,895/$3,495; no testimonials.
17. WeddingWire – Évenox, https://www.weddingwire.ca/event-rentals/evenox--e76012 : listed as Laval; 0 reviews; chairs $2, photobooth $599.
18. WeddingWire – Event Rentals Quebec, https://www.weddingwire.ca/event-rentals/quebec : Omega 5.0 (263); Évenox unrated, mid-list.
19. Évenox robots.txt/homepage crawl (curl) : OAI-SearchBot allowed; LocalBusiness schema; fr-FR; no aggregateRating; FB "people" URL; Gmail.
20. EasyInsights – OpenAI self-serve Ads Manager, https://easyinsights.ai/blog/openai-launches-self-serve-ads-manager-for-chatgpt/ : May 5 beta; $50k minimum removed.
21. AI Weekly – ChatGPT ads public with Best Buy, Lowe's, https://aiweekly.co/alerts/openai-opens-chatgpt-ads-publicly-with-best-buy-and-lowes : named early advertisers.
22. Segwise – ChatGPT Ads 2026 guide, https://segwise.ai/blog/chatgpt-ads-2026-guide.md : timeline overview.
23. IT Brief – self-serve manager, https://itbrief.news/story/openai-expands-chatgpt-ads-with-self-serve-manager : SMB access.
24. PPC Land – ChatGPT opens ads to 700M users, https://ppc.land/chatgpt-opens-ads-to-700m-users-heres-what-marketers-need-to-know/ : five ad principles; no ads near health/politics.
25. Shelly Palmer – Ads in ChatGPT, https://shellypalmer.com/2026/01/ads-in-chatgpt/ : Jan 2026 announcement commentary.
26. Abmatic – ChatGPT Ads explained 2026, https://abmatic.ai/blog/chatgpt-ads-explained-2026 : sponsored cards, context hints, $3–5 CPC, US/CA/AU/NZ.
27. TechWyse – Ads live in Canada/AU/NZ, https://www.techwyse.com/news/ai-search/chatgpt-ads-canada-australia-new-zealand-openai : Canada live Apr 16; country-level targeting at launch.
28. Shopifreaks – expansion to CA/AU/NZ, https://www.shopifreaks.com/openai-expands-chatgpt-ads-to-canada-australia-and-new-zealand-after-u-s-pilot-tops-100m-in-annualized-revenue/ : $100M annualised in 6 weeks.
29. PPC Land – Ads Manager to all US businesses with CPC, https://ppc.land/openai-opens-chatgpt-ads-manager-to-all-us-businesses-with-cpc-bidding/ : context hints, second-price auction, CAPI.
30. TryLapis – self-serve SMB guide, https://trylapis.com/resources/chatgpt-self-serve-ads-small-business-guide : $25/day minimum; location targeting; CPM $18–65.
31. ChatGPT.ca – ChatGPT ads (Canada view), https://chatgpt.ca/blog/chatgpt-ads : Canada self-serve uncertain; partner route; Enterprise users unreachable.
32. Adventure Media – ChatGPT ads for local business, https://adventuremedia.ai/blog/how-to-use-chatgpt-ads-for-local-business-advertising-in-2026 : hyper-local landing pages, $500–2k test, call tracking.
33. SE Roundtable – location & audience exclusions, https://seroundtable.com/chatgpt-ads-location-audience-exclusion-41693.html : Jul 15 2026 exclusions.
34. Marketing4ecommerce – daily budgets, geo-targeting, CTAs, https://marketing4ecommerce.net/en/updates-to-chatgpt-ads-daily-budgets-geographic-targeting-and-dynamic-ctas/ : state/DMA/ZIP geo (US).
35. Unite.AI – self-service to India & Europe, https://www.unite.ai/openai-expands-chatgpt-ads-self-service-access-to-india-and-europe/ : Aug 31 self-serve expansion.
36. Tbreak – ChatGPT ads $1B run rate, https://tbreak.com/openai-chatgpt-ads-billion/ : $1B annualised.
37. Relevant Audience – 41 markets, https://www.relevantaudience.com/ai/chatgpt-ads-41-markets-india-launch/ : 32 markets in 5 days.
38. OpenAI Help – Ads Manager availability, https://help.openai.com/en/articles/20001245-ads-manager-availability : snippet lists Canada available; billed entity must be in a listed country.
39. Ads-Up – ChatGPT Ads in France, https://ads-up.fr/en/publications/ia/chatgpt-ads-is-available-in-france-what-advertisers-need-to-know/ : French market launch Aug 2026.
40. Ecommerce Nation – Ads Manager en France, https://www.ecommerce-nation.fr/chatgpt-ads-manager-arrive-en-france/ : French self-serve.
41. Three Best Rated – Longueuil event rental, https://threebestrated.ca/fr-entreprises-de-location-d'événements-in-longueuil-qc : La Nouvelle Tablée, Locaparty, Cité Fêtes; self-nomination possible.
42. Three Best Rated – Montreal event rental, https://threebestrated.ca/event-rental-companies-in-montreal-qc : Celebrations, Casa D'Eramo, Omega.
43. Three Best Rated – Laval event rental, https://threebestrated.ca/event-rental-companies-in-laval-qc : Abris Crystal, Diva, Glam; no Évenox.
44. 5W – Wedding Industry AI Visibility Index 2026, https://www.5wpr.com/research/wedding-industry-ai-visibility-index-2026/ : Knot/Zola/WW hold 73%; 84% of vendors have zero share.
45. Chief Marketer – The Knot in ChatGPT ads pilot, https://www.chiefmarketer.com/the-knot-says-i-do-to-chatgpt-ads-pilot : category-page ads; learning-agenda KPIs.
46. Chain Store Age – Knot integrates with ChatGPT, https://chainstoreage.com/knot-integrates-wedding-planning-services-chatgpt : ChatGPT app.
47. LetsDataScience – Knot pilots ads and app, https://www.letsdatascience.com/news/the-knot-pilots-ads-and-app-within-chatgpt-3667966f : 24 categories; guest count and budget inputs.
48. BusinessWire – 36% couples use AI, https://www.businesswire.com/news/home/20260218045442/en : AI adoption in wedding planning.
49. Hospitality-On – sponsored links for independent hoteliers, https://hospitality-on.com/en/distribution/chatgpt-opens-its-sponsored-links-independent-hoteliers : $25/day minimum; open since June.
50. ULaval – 52% of Quebec internet users use gen AI, https://nouvelles.ulaval.ca/2026/03/19/plus-de-la-moitie-des-internautes-du-quebec-utilisent-un-outil-dintelligence-artificielle-generative-592272b3-7325-49a4-ba10-2493f8815200 : ChatGPT #1; 54% weekly.
51. NETendances PDF, https://transformation-numerique.ulaval.ca/wp-content/uploads/2026/03/netendances25-intelligence-artificielle-generative.pdf : Quebec AI usage data.
52. Lovable insight – ChatGPT local recommendations 2026, https://s10500.lovable.app/insights/chatgpt-local-business-recommendations-2026 : 10–25 candidates, 3–6 named; 4 signals.
53. Peec – ChatGPT search result providers, https://docs.peec.ai/research/chatgpt-search-result-providers : Yelp/TripAdvisor licensed; Google Maps; Web IQ.
54. Adriel – honest B2B framework, https://www.adriel.com/blog/should-you-advertise-on-chatgpt-an-honest-b2b-decision-framework-2026 : no firmographic targeting.
55. Invoca – conversion bidding, https://www.invoca.com/blog/new-chatgpt-ads-features-conversion-bidding : oCPC Jul 24; feed offline/call conversions.
56. StubGroup – ChatGPT Ads case study, https://stubgroup.com/case-study/chatgpt-ads-case-study/ : $0.76 CPC but 0.8% conversion; Google leads better.
57. TryLapis – conversion benchmarks, https://trylapis.com/resources/chatgpt-ads-conversion-rate-benchmarks : local services 6–10% conversion.
58. Single Grain – ChatGPT Ads weekly optimisation, https://www.singlegrain.com/?p=77075 : negative targeting guidance.
59. Peec – fan-outs per prompt, https://docs.peec.ai/research/fanouts-per-prompt-by-engine : fan-out volume by engine.
60. Ahrefs – query fan-out, https://www.ahrefs.com/blog/query-fan-out/ : hidden sub-queries.
61. GatherMonk – quote/lead templates, https://www.gathermonk.com/?p=22546 : event type, guest count, budget band fields.
62. SE Roundtable – Sponsored Agents, https://www.seroundtable.com/openai-chatgpt-sponsored-agents-42104.html : chat-with-brand ad alpha.
63. Resident – ChatGPT ads become conversations, https://resident.com/tech-and-gear/2026/09/29/openai-chatgpt-ads-sponsored-agents-conversations : Sept 2026 format.
64. OpenAI – Ad policies, https://openai.com/policies/ad-policies/ : alcohol disallowed; end-to-end landing consistency.
65. Abmatic – OpenAI ads policy guide, https://abmatic.ai/blog/openai-ads-policy-approval-guide-2026 : approval rules.
66. Wearespin – corporate event budgeting, https://wearespin.com/how-do-you-budget-for-corporate-events-with-catering-and-entertainment-included/ : entertainment 15–25% of budget.
67. Wearespin – 2026 company party ideas, https://wearespin.com/what-are-the-most-popular-company-party-ideas-for-2026/ : interactive, short-format trend.
68. Top Growth Marketing – ChatGPT ads cost, https://topgrowthmarketing.com/how-much-do-chatgpt-ads-cost/ : CPC $3–5; CTR by vertical.
69. DemandLocal – AI referral conversion stats, https://www.demandlocal.com/blog/ai-referral-traffic-conversion-rate-statistics/ : 45% use AI to find local businesses.
70. RCGT – Loi 25 et témoins, https://www.rcgt.com/fr/conseils/avis-d-experts/loi-25-gestion-temoins-comment-conformer-loi/ : consent for tracking.
71. SecurePrivacy – Loi 25 guide 2026, https://secureprivacy.ai/fr/blog/loi-25-au-quebec-guide-complet-de-conformite-pour-les-entreprises-2026 : pixels blocked until consent.
72. Zion Springs – wedding vendor minimums, https://www.zionsprings.com/blog/wedding-vendor-minimums/ : minimums are industry-standard.
73. Narcity – coût mariage Québec, https://www.narcity.com/fr/cout-mariage-quebec-invites-wealthsimple : $20–25k for about 120 guests.
74. Desjardins – coût d'un mariage, https://www.desjardins.com/fr/conseils/cout-mariage.html : budget planning.
75. BrightLocal – ChatGPT search sources, https://www.brightlocal.com/research/uncovering-chatgpt-search-sources/ : websites 58%; Three Best Rated 24% of directories.
76. BrightLocal – AI directory sources, https://www.brightlocal.com/resources/ai-directory-sources/ : Yelp in 80% of ChatGPT local answers.
77. Carrot – AI referrals convert, https://carrot.com/blog/carrotlabs-ai-website-referrals-convert-31-percent/ : higher conversion from AI referrals.
78. Local Falcon – ChatGPT local data sources, https://www.localfalcon.com/blog/chatgpt-local-search-data-sources-where-does-business-info-come-from : Bing Places, chambers, niche directories.
79. Whitespark – review sites for ChatGPT, https://whitespark.ca/blog/want-to-rank-in-chatgpt-focus-on-these-review-sites-new-research/ : Facebook and Yelp lead Bing Places review sources.
80. Near Media – Bing Places & AIO, https://www.nearmedia.co/bing-places-aio-love-no-google-killer-wheres-the-decision/ : Bing Places relevance.
81. Reputation.com – Whitespark 2026 insights, https://reputation.com/resources/articles/whitespark-2026-three-insights-every-brand-should-know : citations drive AI visibility.
82. Custplace – Whitespark 2026 (FR), https://fr.custplace.com/business/referencement-local-en-2026/ : service/location pages #2 for AI.
83. Bing Blog – new Bing Places, https://blogs.bing.com/search/October-2025/Introducing-the-New-Bing-Places-for-Business-Built-for-Business-Owners,-Powered-by-Research : improved GBP import.
84. BrightLocal – claim Bing Places, https://www.brightlocal.com/learn/how-to-add-or-claim-a-bing-places-for-business-listing/ : how-to.
85. Whitespark – Bing Places guide, https://whitespark.ca/guides/the-ultimate-guide-to-your-bing-places-listing/ : optimisation guide.
86. Search Influence – Bing AI Performance report, https://www.searchinfluence.com/blog/bing-ai-performance-report-copilot-citations/ : citations and grounding queries.
87. WeddingWire – Omega Design Events, https://www.weddingwire.ca/event-rentals/omega-design-events--e1966 : 5.0/263 reviews; photobooth from $800.
88. meet.mtl.org – ABP, https://meet.mtl.org/en/plan/suppliers/abp : 35 yrs; National Bank Open.
89. QCNA – CCITB, https://qcna.qc.ca/tag/ccitb/ : largest Laurentides chamber, 1,200+ members.
90. PinMeTo – Apple Business, https://www.pinmeto.com/glossary/apple-business/ : Apple Business unified 2026; Siri/Maps.
91. Hypotenuse – ChatGPT shopping research, https://www.hypotenuse.ai/blog/chatgpt-shopping-research-and-ai-assisted-shopping : Reddit and editorial weighted.
92. OpenAI – crawlers (GPTBot/OAI-SearchBot), https://developers.openai.com/docs/gptbot : allow OAI-SearchBot to appear in search.
93. NexterWP – OAI-SearchBot on WordPress, https://nexterwp.com/blog/oai-searchbot-wordpress/ : WP crawler setup.
94. WeddingWire – Celebrations, https://www.weddingwire.ca/event-rentals/celebrations--e17022 : largest Montreal rental, 4,000+ items.
95. Canadian Rental Service – Luxe & Gervais join forces, https://www.canadianrentalservice.com/luxe-rentals-and-location-gervais-join-forces-2623/ : 100k sq ft combined.
96. WeddingWire – Location Gervais, https://www.weddingwire.ca/event-rentals/location-gervais--e26957 : since 1919.
97. PagesJaunes – Omega Design, https://www.pagesjaunes.ca/bus/Quebec/Saint-Leonard/Omega-Design/100758834.html : directory citation.
98. WeddingWire – ABP Location, https://weddingwire.ca/event-rentals/abp-location--e19589 : high-end rentals.
99. WeddingWire – Bravo Location, https://weddingwire.ca/event-rentals/bravo-location-rentals--e6746 : 25+ yrs, 4.9.
100. Datanyze – DX, https://www.datanyze.com/companies/dx/546948422 : ~$7.2M revenue.
101. Teamland Montreal, https://www.teamland.com/locations/montreal : team-building competitor.
102. Eventective – Fotobo, https://www.eventective.com/montreal-qc/fotobo-803774.html : 7 booth formats; Airbus, Desjardins.
103. Snaptique Montreal, https://www.snaptique.ca/montreal : photobooth since 2014.
104. WeddingWire – Le Fotobooth (Laval), https://www.weddingwire.ca/photobooth/le-fotobooth--e15236 : Laval photobooth competitor.
105. WeddingWire – Location Luxe Rentals, https://www.weddingwire.ca/event-rentals/location-luxe-rentals--e57350 : luxury furniture.
106. Journal du Net – critères GEO local, https://www.journaldunet.com/intelligence-artificielle/1550723-quels-sont-les-criteres-de-visibilite-dans-l-ia-propres-au-geo-local/ : local GEO criteria (FR).
107. WeddingPro – inquiry qualification, https://pros.weddingpro.com/?p=38610 : capture date, venue, guest count and budget.
108. Birdeye – ChatGPT local map knowledge panel, https://birdeye.com/blog/chatgpts-new-local-map-knowledge-panel-experience-what-it-is-and-how-to-show-up-well/ : map + panel built on 3rd-party data.
109. Webtonic – Montreal ChatGPT ads, https://www.webtonic.io/locations/montreal-chatgpt-ads : Quebec agencies already selling the channel.
110. OQLF – fête de bureau, https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8360369/fete-de-bureau : use both "party de bureau" (popular) and "fête de bureau" (official) in copy.
111. Gend.co – ChatGPT advertising Canada, https://www.gend.co/en-ca/blog/chapgpt-advertising-access-privacy : early Canadian privacy framing.
112. Mediapost – first ChatGPT ads identified, https://mediapost.com/publications/article/412887/marketers-starting-to-identify-first-chatgpt-ads.html : early creative examples.

Total distinct sources: 112 (some are search-snippet level, notably #38, #49, #54 and #81, where the fetch was blocked).
