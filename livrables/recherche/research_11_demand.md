# Research 11: Search demand and seasonality in Quebec for Évenox keywords

Prepared 2026-10-07. Scope: Google Trends (geo CA-QC, 5 years and 12 months), keyword volume and CPC estimates, Quebec event-market data, and a monthly budget for Oct 2026 – Sep 2027 at about $9,100/month.

Raw data: `scratchpad/trends_data/` holds 58 Trends JSON pulls, `seasonality_table.txt`, `seasonality_summary.json`, `composite_indices.json` and the ISQ PDFs. Scripts: `scratchpad/trends_scripts/` (`gt.py`, `gt_geo.py`, `season.py`, `composite.py`, `trends.js`, `kwtools.js`, `ahrefs.js`).

---

## 0. Method and access notes (read first)

- **Google Trends.** The explore page opened in headless Chromium returned **HTTP 429 (Too Many Requests)**. The internal widget API (`/trends/api/explore` and then `/trends/api/widgetdata/multiline`) **did work** after an NID cookie was set by an ordinary page visit. No captcha appeared and none was bypassed. I made 58 pulls: one series per keyword for 5 years (weekly, 2021-10 → 2026-10) and for 12 months; comparison sets that put FR and EN terms on one scale; and multi-geo sets (CA-QC vs US / CA / CA-ON) used to calibrate volumes. The monthly seasonality index is the mean of the weekly values for each calendar month over 5 years, rescaled so the highest month is 100.
- **Low-volume caveat.** In Quebec, several transactional keywords are below Google's privacy threshold. "location photobooth", "location mobilier", "photo booth rental", "marquee letters" and "photobooth mariage" show 0 in more than 95% of weeks, and "lettres lumineuses" returns no data at all. Their single-keyword indices are noise. For those product lines I used proxies (a broader term in Quebec, or the same term at Canada level), and the tables say so.
- **Google Trends data break.** Every 5-year series is very low in late 2021 (photobooth averaged 9 in 2021 vs 36–60 later). This matches Google's data-collection change of 1 Jan 2022, so 2021 levels should not be read as real growth.
- **Free keyword tools.** Ahrefs Keyword Generator showed a **captcha**, so I stopped (not bypassed). Ubersuggest requires a login. Keywordtool.io hides volumes behind its Pro plan. The WordStream free tool needs a form plus email. Google Keyword Planner was not available. Absolute volumes are therefore **estimated**, not read from Keyword Planner (see §c).
- **Search budget.** The session's WebSearch limit (200 calls per turn, shared) ran out near the end. A few planned lookups were not done: Zola 2026, the Retail Council/Léger 2025 holiday spend, and FR vs EN CPC in Quebec. They are listed as gaps.

---

## (a) Sources (numbered)

Status codes: **F** = fetched and read · **P** = PDF downloaded and parsed · **S** = search-result content used (snippet) · **X** = tried but blocked or empty (counted only as a check of access) · **T** = Google Trends API pull.

### Web sources
1. ISQ, "Nombre de mariages célébrés demeure faible (2025)", communiqué (EN/FR), statistique.quebec.ca/en/communique/nombre-mariages-celebres-demeure-faible-2025 (F)
2. ISQ, same communiqué FR version, statistique.quebec.ca/fr/communique/nombre-mariages-celebres-demeure-faible-2025 (S)
3. ISQ, "Les mariages au Québec en 2025" bulletin PDF, statistique.quebec.ca/fr/fichier/mariages-quebec-2025.pdf (P)
4. ISQ, "Les mariages au Québec en 2024", Bulletin sociodémographique vol. 29 no 3 (P)
5. ISQ, "Les mariages au Québec en 2023", vol. 28 no 3 (P)
6. ISQ, "Le mariage demeure peu fréquent – portrait nuptialité 2024", communiqué (F)
7. ISQ, "Diminution de moitié du nombre de mariages au Québec en 2020", communiqué (F)
8. Statistics Canada 91-209-X, Report on the Demographic Situation, article 11788 (Marriages) (F)
9. Statistics Canada 91-209-X fig. 8 data table, marriages by month, Canada 2008 (desc08-eng.htm) (F)
10. Noovo, "Les Québécois continuent de se marier très peu" (F)
11. CTV News Montreal, "Number of Quebec marriages fluctuates little" (headline only; body not rendered) (F)
12. Noovo, "Oui je le veux: le mariage est moins fréquent en 2024 au Québec" (S)
13. Robert Half/OfficeTeam Canada press release, 2018-11-01, holiday parties (F)
14. Robert Half Canada press release, 2017-11-02 "Fa La La La Blah" (S)
15. Robert Half Canada press release, 2012-11-27 holiday parties (S)
16. HR Reporter, "Less than one-half of Canadians expecting holiday party" (H&R Block 2013) (F)
17. HR Reporter, "Nearly 4 in 10 firms not having holiday party" (HRPA 2011, provincial split) (F)
18. HR Reporter, "Majority of workers want office holiday party" (OfficeTeam 2014) (F)
19. HR Reporter, "Many execs expect employees to attend holiday party" (S)
20. HR Reporter, "Most Canadians love family gatherings… only 55% enjoy office parties" / CareerBuilder 68% (S)
21. Challenger, Gray & Christmas, 2023 Holiday Party Survey report (F)
22. Challenger, Gray & Christmas, 2024 Holiday Party Survey (challengergray.com/?p=24109) (F)
23. Challenger/Fortune 2018, "fewest holiday parties since the recession" (90% in 2007 → 64% in 2024) (S)
24. ezCater 2025 holiday party survey via Stacker, "82% of workers RSVPing yes" (F)
25. The Peak, "Is the office holiday party going extinct?" (F)
26. Tripleseat holiday party survey via SalesTechStar (January parties) (F)
27. Venuescanner, "2026 UK Christmas party booking trends" (F)
28. Instantprint UK, work Christmas party guide (date preferences) (S)
29. EY Canada Tax Alert 2023-01, CRA policy on social events and gifts (F)
30. Akler Browning, "Changes in tax treatment of employee holiday celebrations" (S)
31. Private Club Marketing, "Fall private events sales window" (holiday booking window Jun–Sep) (F)
32. Tastet, "Où réserver une salle privée pour votre party de Noël" (F)
33. Noovo, "La demande est féroce pour les party de Noël au Saguenay" (bookings mostly Sep–Oct) (S)
34. Noovo, "Inflation: plusieurs partys de Noël d'employés annulés en 2023" (S)
35. Noovo, "Achats des fêtes: les Québécois prévoient dépenser 20% de moins" (Léger/RCC) (S)
36. BAnQ press archive, office-party trend article (–20% parties, –30% spend) (S)
37. Narcity FR, "Voici combien un mariage vide les poches des Québécois" (Wealthsimple survey, n=682 QC) (F)
38. BMO Newsroom 2026-07-08, "Til Debt Do Us Part" (Ipsos, n=2,503) (F)
39. WeddingWire.ca, "How much does the average wedding cost in Canada" (F)
40. The Knot 2025 Real Weddings Study (via BusinessWire/financialcontent) (S)
41. The Knot 2023 Real Weddings Study, entertainment/photo booth share (S)
42. Weddingbells / Mariage Québec readers survey ($17,060 per ~100 guests) (S)
43. Intel Market Research, Photo Booth Market report (F)
44. MarketIntelo, Photo Booth Market Research Report 2034 (S)
45. Palais des congrès de Montréal, "Business tourism 2025: a remarkable performance" (F)
46. Retail Insider, "Tourism sector in Montreal drives economy in 2025" (F)
47. The Main, "Montreal business tourism 2025 – $438M" (S)
48. Palais des congrès de Montréal, Rapport annuel 2024-2025 (S)
49. Gouvernement du Québec, Plan d'action pour le tourisme d'affaires 2023-2026 (S)
50. Destination Canada Business Events, Legacy & Impact (F) + national business-events impact figures (S)
51. Destination Vancouver, Economic impact of events 2024 (S)
52. Events Industry Council / Oxford Economics, 2026 Economic Significance of Business Events (S)
53. Business Travel News Europe, Amex GBT Meetings & Events Forecast 2026 (S)
54. BizBash, "Costs are up, but so is confidence: Amex GBT forecast" (F)
55. ISED Canadian Industry Statistics, NAICS 56192 Convention & trade show organizers (F)
56. IBISWorld, Trade Show & Event Planning in Canada (S)
57. CFIB/FCEI, "Rapport PME" March 2026 (Quebec business demographics) (P)
58. ISQ, "Nombre d'entreprises actives, Québec" (S)
59. ISQ, "Naissances, décès, migrations: comment la population du Québec évolue en 2025" (F)
60. OQLF / Quebec.ca, linguistic characteristics of Quebec 2021 (Census) (S)
61. Statistics Canada, Census 2021 language reference guide (S)
62. RankHero keyword pages: photo-booth-rental, event-rental, marquee-letters, photobooth, photo-booth, tent-rental, party-rental, light-up-letters (curl) (F)
63. Exploding Topics, "Letter marquee" (F)
64. Accio, "Trending marquee letters 2025" (S)
65. Keyword snippet for "photo booth rental" cluster (avg 36,550/mo, CPC $2.82; brand activation $12.84; corporate event photo booth $11.47; party photo booths $1.73) via seojuice/iSpionage results (S); seojuice page itself showed no table (X)
66. LocaliQ, Search Advertising Benchmarks 2026 (F)
67. Search Engine Land / WordStream 2025 Google Ads benchmarks (CPC $5.26–5.42) (S)
68. TwoMinuteReports, Google Ads benchmarks (Events, Weddings & Celebrations CTR 3.16%) (S)
69. CheckCherry, "Photo booth owners – December is #2" (booking shares by month) (F)
70. Flashquotes, "When is peak season? How event businesses can prepare" (F)
71. Rentopian, event rental software and seasonal demand (300–400% peak) (S)
72. Cater-event.com (Catersource), "Seasonality and how it can affect your offerings" (F)
73. Photobooth Supply Co., "Starting a photobooth business during wedding season" (holiday = 4–5x events) (S)
74. PartyBooth.ca / Thumbtack CA, photo booth rental cost ranges in Canada (S)
75. WeddingWire.ca, Évenox listing (prices, services) (F)
76. WeddingWire.ca, Sorriso Photobooth (from $500) (S)
77. WeddingWire.ca, Québec Photobooth (from $499) / Le Fotobooth (from $750) (S)
78. EventPlanner, Deco Marquee (marquee letters Toronto/Montreal) (S)
79. Festivals et Événements Québec / EAQ "Portrait financier des festivals" (51% in deficit) (S)
80. WealthNorth, "Average wedding cost in Canada 2026" (no Quebec data; checked) (F)
81. Ahrefs Free Keyword Generator, tried with country=CA (captcha, stopped) (X)
82. Ubersuggest (login wall) (X)
83. Keywordtool.io (volumes paywalled) (X)
84. WordStream Free Keyword Tool (form/email needed) (X)
85. Google Trends explore UI in headless Chromium (HTTP 429) (X)

### Google Trends API pulls (T, geo CA-QC unless noted; files in `trends_data/`)
T1–T12, 5 years: party de bureau · party de noël · photobooth · location photobooth · lettres lumineuses (no data) · location chapiteau · location mobilier · mariage · lounge · team building · event rental · photo booth rental
T13–T24, 12 months: the same 12 keywords
T25 cmp_fr_en_booth (photobooth / photo booth / location photobooth / photo booth rental) · T26 cmp_party (party de bureau / party de noël / team building / office party / christmas party) · T27 cmp_rental (location chapiteau / location mobilier / event rental / tent rental / lettres lumineuses) · T28 cmp_letters (lettres lumineuses / marquee letters / lettres géantes / location photobooth)
T29–T32, 5 years: photo booth · marquee letters · location salle · christmas party
T33 anchor set (mariage / photobooth / team building / location chapiteau / party de bureau)
T34–T40, 5 years: party des fêtes (no data) · location tente · photobooth mariage · robe de mariée · salle de réception · événement corporatif · party de noël entreprise (no data)
T41–T47, Canada 5 years: photo booth rental · marquee letters · event rental · tent rental · furniture rental · office christmas party · light up letters
T48 photobooth montreal · T49–T50 "all time" (2004–2026 monthly): photobooth, party de bureau
T51–T58 multi-geo calibration sets: geo_booth, geo_rental, geo_letters, geo_party, geo_party2, geo_misc, geo_ca_vs_us, geo_ca_en

**Count: 80 web sources with content (1–80) + 5 access checks (81–85) + 58 Trends pulls = 143 items in total, 138 of which returned data.**

---

## (b) Monthly seasonality by product line (index 0–100, 100 = peak month)

### b1. Raw Google Trends indices, Quebec (CA-QC), 5-year average by calendar month

| Keyword (CA-QC, 5y) | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec | Reliability |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| photobooth | 77 | 70 | 77 | 76 | 85 | 91 | 69 | 97 | **100** | 90 | 82 | 67 | Good (21/262 zero weeks) |
| photo booth (EN spelling) | 79 | 67 | 68 | **100** | 83 | 93 | 82 | 86 | 77 | 80 | 96 | 77 | Fair |
| party de bureau | 0 | 5 | 0 | 0 | 5 | 0 | 6 | 4 | 25 | 47 | **100** | 97 | Fair (peak weeks only) |
| party de noël | 0 | 0 | 0 | 5 | 0 | 6 | 5 | 0 | 13 | 9 | 85 | **100** | Fair |
| christmas party (QC) | 4 | 4 | 0 | 1 | 1 | 0 | 0 | 1 | 5 | 23 | 69 | **100** | Fair |
| team building | 75 | 90 | 86 | 89 | 87 | **100** | 72 | 80 | 96 | 87 | 84 | 53 | Good |
| location chapiteau | 13 | 20 | 22 | 32 | 72 | **100** | 92 | 86 | 13 | 0 | 0 | 0 | Fair |
| location tente | 5 | 14 | 25 | 17 | 52 | 89 | **100** | 26 | 7 | 0 | 0 | 0 | Fair |
| mariage | 62 | 63 | 66 | 65 | 75 | 85 | 94 | **100** | 82 | 65 | 52 | 51 | Excellent |
| robe de mariée | **100** | 91 | 97 | 85 | 79 | 83 | 92 | 95 | 75 | 90 | 72 | 60 | Good |
| salle de réception | 64 | 81 | 81 | 56 | 58 | 75 | 41 | 88 | 98 | **100** | 82 | 40 | Fair |
| location salle | 80 | 82 | 85 | 75 | 65 | 58 | 58 | 76 | **100** | 95 | 86 | 60 | Good |
| lounge | 82 | 84 | 86 | 85 | 91 | 97 | **100** | 97 | 86 | 79 | 85 | 84 | Good but generic (bars, airports) |
| event rental (QC) | 33 | 97 | **100** | 66 | 27 | 91 | 44 | 15 | 41 | 2 | 59 | 34 | Poor (230/262 zero weeks) |
| événement corporatif | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 67 | 53 | 69 | **100** | Poor |
| location photobooth / location mobilier / photo booth rental / marquee letters / photobooth mariage / lettres lumineuses | below threshold (≥ 98% zero weeks) | | | | | | | | | | | | Unusable |

Canada-level series used as proxies (5y):

| Keyword (CA, 5y) | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| photo booth rental | 72 | 95 | **100** | 62 | 72 | 99 | 90 | 98 | 92 | 71 | 98 | 53 |
| event rental | 88 | 90 | 99 | 92 | 93 | **100** | 96 | 93 | 87 | 73 | 74 | 60 |
| tent rental | 49 | 48 | 59 | 63 | 82 | **100** | **100** | 91 | 63 | 46 | 37 | 28 |
| furniture rental | 72 | 80 | 89 | 97 | 94 | **100** | 85 | 82 | 75 | 68 | 68 | 55 |
| marquee letters (noisy) | 0 | 49 | 39 | **100** | 64 | 72 | 39 | 64 | 33 | 5 | 0 | 16 |
| office christmas party | 4 | 2 | 1 | 1 | 0 | 1 | 0 | 0 | 1 | 6 | 28 | **100** |

**Last 12 months (Oct 2025 – Sep 2026, CA-QC):** photobooth peaked in **Aug 2026 (100) and Sep (97)**, with a low in Jun (64). Party de bureau: Oct 74, **Nov 100, Dec 100**, near zero from January to August. Mariage: Jul 98, **Aug 100**, Nov 51. Team building: peaks in Feb (99) and Jun (100).

**Trend over time (yearly average of the 5y index; 2021 discounted because of the data break):** photobooth 36 (2022) → 44 → 45 → 52 → **60 (2026 YTD)**, so demand is growing about 13% per year. Team building 34 → 46 (2026). Lounge 58 → 75. Mariage is flat (64 → 59). Location chapiteau is falling (27 → 12). Party de bureau as a search term is falling (10 → 2), which suggests a vocabulary shift toward "party des fêtes", "christmas party" and "party de Noël".

### b2. Composite seasonality index per Évenox product line (used for budgeting)

| Product line | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec | Source / build |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Photobooth / 360** | 76 | 85 | 91 | 71 | 81 | 97 | 82 | **100** | 98 | 83 | 92 | 62 | Mean of QC "photobooth" (T3) and CA "photo booth rental" (T41) |
| **Party de bureau / Noël (corporate)** | 1 | 2 | 0 | 2 | 2 | 2 | 4 | 1 | 13 | 21 | 72 | **100** | Mean of QC "party de bureau" (T1), "party de noël" (T2), CA "office christmas party" (T46) |
| **Team building (corporate, rest of year)** | 75 | 90 | 86 | 89 | 87 | **100** | 72 | 80 | 96 | 87 | 84 | 53 | QC "team building" (T10) |
| **Chapiteaux / tentes** | 9 | 18 | 24 | 26 | 65 | 98 | **100** | 58 | 10 | 0 | 0 | 0 | Mean of QC "location chapiteau" (T6) and "location tente" (T35) |
| **Mobilier lounge / tables-chaises** (proxy) | 90 | 92 | 98 | 89 | 84 | 84 | 82 | 90 | **100** | 90 | 86 | 64 | Mean of CA "event rental" (T43) and QC "location salle" (T31) |
| **Lettres lumineuses** (proxy) | 49 | 66 | 65 | 85 | 80 | 91 | 87 | **100** | 75 | 53 | 41 | 45 | 70% QC "mariage" (T8) + 30% CA "marquee letters" (T42) |
| Mariage, search interest | 62 | 63 | 66 | 65 | 75 | 85 | 94 | **100** | 82 | 65 | 52 | 51 | QC "mariage" (T8) |
| Weddings actually held (event date) | 13 | 17 | 17 | 18 | 40 | 51 | 65 | **100** | 51 | 40 | 20 | 19 | StatCan, Canada 2008 shares (2.8% Jan … 22.2% Aug) [9]. ISQ 2025: Jul–Oct = 54% of weddings and Oct > Jun [3]; 2024: Jun–Sep = 57% [4] |

Reading the table (search month is not booking month or event month):
- **Weddings** are booked 6–12 months ahead [70]. Searches for wedding vendors run all year at a high base (index 60+ from January to September), and "robe de mariée" peaks in January as engagement season ends. Wedding *events* in Quebec now spread from June into **October** (ISQ 2025 [3]). Photobooth and letters therefore need steady search coverage from January to September, not only in summer.
- **Corporate holiday parties**: searches start in Sep (13), climb in Oct (21) and peak in Nov–Dec. Venue decisions happen June–September [31], with Quebec bookings "mostly September–October" [33]. Part of the parties move to January [26]. Oct–Nov is therefore the window for paid search, which matters because today is Oct 7.
- **Photobooth** has two peaks: wedding season (Aug–Sep) and the holiday season (CA "photo booth rental" Nov = 98). Industry booking data puts May at 13.4% of bookings, Dec at 11.9% (#2), Jun at 11.3% and Jan at 4.7% (lowest) [69]. Holiday weeks bring 4–5x more events than average weeks [73].
- **Chapiteaux** are strongly seasonal: from May to August, and zero from October to December.

### b3. FR vs EN relative interest in Quebec (same-scale comparisons, 5y mean)

| Comparison set | Result |
|---|---|
| photobooth (FR/neutral) vs photo booth (EN) vs location photobooth vs photo booth rental | **45 : 27 : 0.1 : 0.4**. The single-word brand-style query dominates. Modifier queries ("location", "rental") are tiny in Quebec. In EN, "photo booth rental" in QC is ~4% of the US per-capita share, while Ontario is ~46% [T58]. |
| party de bureau vs party de noël vs team building vs office party vs christmas party | **2.7 : 1.3 : 17.3 : 3.3 : 9.3**. EN "christmas party" outscores FR "party de bureau" in Quebec, but much of it is informational (songs, ideas). Team building is the largest corporate term all year. |
| location chapiteau vs location mobilier vs event rental vs tent rental vs lettres lumineuses | **17 : 0.2 : 6.2 : 0.7 : 0.0**. FR "location chapiteau" is ~24x EN "tent rental". |
| lettres lumineuses vs marquee letters vs lettres géantes | All < 1. The category has almost no generic search demand in Quebec, so it is a visual/social and add-on product rather than a search-led one. |
| Language base | 77.5% of Quebecers speak mostly French at home and 10.4% English. In the Montreal CMA it is 63.8% French and 16.3% English [60] |

**Implication:** about 80–85% of search-led revenue potential is in French or neutral terms ("photobooth", "location chapiteau", "party de Noël", "team building"). EN campaigns are worth a small, geo-targeted slice (West Island, Montreal core, Laval anglophone areas) at about 10–15% of spend.

---

## (c) Keyword volume and CPC estimates (Quebec unless noted)

**Method.** Keyword Planner and Ahrefs were not accessible (captcha or login). Volumes are calibrated as follows: (Trends share of the keyword in CA-QC ÷ share of an anchor keyword in the US over the same 12 months) × the anchor's US monthly volume (RankHero [62]: "photo booth rental" 60,500, "party rental" 60,500) × the population ratio QC/US (9.03 M / ~342 M ≈ 0.026). This assumes searches per person are similar in both countries and that RankHero's figures are US Google Ads volumes. **Expect ±50–100% error.** CPCs come from RankHero US CPCs [62], keyword-cluster snippets [65] and LocaliQ 2026 industry benchmarks [66] (Arts & Entertainment $1.63, Personal Services $7.17, Business Services $5.87, all-industry $5.42). They are converted to CAD (×1.38) and discounted for Quebec's less crowded French search results. **The discount is an assumption, not measured.**

| Keyword | Est. monthly searches, QC (avg; peak month) | Est. CPC (CAD) | Confidence | Notes |
|---|---|---|---|---|
| photobooth (head term) | ~7,500 (5k–10k); peak Aug–Sep ~+20% | 0.80–2.00 | Low–medium | Includes the Apple "Photo Booth" app and DIY searches. Use phrase/exact match with modifiers or negatives |
| photo booth (EN spelling) | ~4,400 | 0.80–2.00 | Low | Same caveat |
| location photobooth | ~20–100 | 1.50–3.50 | **Low** | Below the Trends threshold in 98% of weeks, so real volume is small. The likely real-world pattern is "photobooth + city" or "photobooth mariage" |
| photobooth mariage | < 50 | 1.00–2.50 | Low | Below threshold |
| photobooth montreal / photo booth montreal | ~50–300 | 2.00–4.50 | Low | Trends calibration unreliable (anchor too small) |
| photo booth rental (QC, EN) | ~70 | 2.50–5.50 | Low–medium | Two independent calibrations both gave 67–68/mo. Canada-wide ≈ 4,000/mo, Ontario ≈ 1,300/mo |
| photo booth rental Montreal | ~30–90 | 3.00–5.50 | Low | US CPC $4 [62]; "corporate event photo booth" US CPC $11.47 [65] |
| location lettres lumineuses / lettres lumineuses | < 20 | 0.50–1.50 | Low | No Trends data at all in QC. US "marquee letters" 12,100/mo at CPC $1, "light up letters" 6,600 at $0 [62]; Exploding Topics "letter marquee" 9.9K, peaked [63] |
| marquee letters rental (QC/Montreal) | < 20 | 0.75–2.00 | Low | CA-ON "marquee letters" ≈ 70/mo; QC = 0 in Trends |
| party de bureau | ~800 avg; ~2,500–3,500 in Nov–Dec | 0.50–1.50 | Low–medium | Mostly informational (ideas, etiquette). Commercial terms include "salle party de bureau" and "animation party de bureau" |
| party de noël | ~500 avg; peak Dec | 0.50–1.50 | Low | Mixed intent |
| team building | ~8,000 (5k–10k) | 1.50–4.00 | Low–medium | Broad and partly informational. Peaks Jun, Sep, Feb |
| location chapiteau | ~90 avg; ~250 in June | 1.00–2.50 | Medium | Clear transactional intent. US "tent rental" CPC ≈ $1 [62] |
| location tente | ~115 avg; ~300 in July | 0.80–2.00 | Medium | Includes camping searches. Use negatives |
| location mobilier / location mobilier lounge | < 30 | 1.00–3.00 | Low | Below threshold. Demand is spread over "location tables chaises", "location mobilier événement" and "lounge" |
| event rental Montreal | ~100–300 | 1.50–3.50 | Low | QC "event rental" ≈ 300/mo, but erratic (brand-name noise). US "event rental" 27,100/mo at CPC $2 [62] |
| location salle | ~12,000 | 1.00–3.00 | Low–medium | Adjacent intent (venues). Useful for audience/remarketing, not a core keyword |

Benchmarks for planning: Events/Weddings/Celebrations median CTR 3.16% [68]. All-industry average CPC rose to US$5.42 in 2025 (+16% YoY), and CVR averages 8.18% [66][67]. Arts & Entertainment has the lowest CPC of the industries (US$1.63, CPL US$26.84) [66].

**Bottom line on volume:** total *transactional* Quebec search demand for Évenox's exact services is small, probably a few hundred to about 1,500 searches a month outside the head terms. At realistic CPCs of $1.5–3.5, a $9,100/month budget will **run out of exact-intent queries** in most months. The extra spend has to go to broader match types, head terms with modifiers, Performance Max or Demand Gen, and remarketing. Évenox's own Keyword Planner and Search Terms data should replace these estimates as soon as possible.

---

## (d) Quebec market numbers

**Weddings (ISQ)**
- About **22,700 weddings in 2025** (provisional; –1.5% vs **23,066 in 2024**; 22,700 in 2023). The number has been stable at 22,000–23,500 a year since the early 2000s, apart from 2020 (11,326) and 2021 (14,708) [1][3][4][6].
- Seasonality: in 2024, **57% of weddings fell in June–September** [4]. In 2025, **July–October = 54%**, and **October now has slightly more weddings than June** [3]. The most popular days are the last three Saturdays of August and the first Saturday of September (peak: **624 weddings on Sat 6 Sep 2025**; **742 on Sat 24 Aug 2024**) [3][4].
- Saturday share is falling: 78–80% in 2004–2012 → 65% (2024) → **63% (2025)**. Friday has risen to 13% (7% in 2004) [3][4]. Évenox's weekday and Friday inventory is becoming more valuable.
- Canada, by month (2008): Aug 22.2%, Jul 14.4%, Jun and Sep 11.4% each, May and Oct 8.8%, Nov 4.5%, Dec 4.3%, Apr 4.1%, Feb and Mar 3.7%, Jan 2.8% [9]. WeddingWire Canada: September is the top month (20%) [39]. The Knot (US): October 17% [40].
- 47% of 2025 couples include at least one person born abroad. Same-sex weddings: 777 in 2025 (3%) [1][3]. Average age at first marriage: 33.2 (men) and 31.7 (women) [1].
- Budgets: Quebec couples spend less than the Canadian average. **47% spent under $10,000 and 72% under $20,000** (Wealthsimple, n=682 QC), but 40% of newly engaged couples plan $20,000+ [37]. Canada averages: $29,450 for 154 guests (WeddingWire) [39]; BMO/Ipsos 2026: average $19,000, of which **decorations $1,713 and entertainment $1,603** [38]. Weddingbells/Mariage Québec: $17,060 for about 100 guests [42]. The Knot: 46% of couples add guest entertainment and **61% of those rent a photo booth** [41].
- Rough wedding photobooth market in Quebec: 22,700 weddings × ~25–30% booking a booth (assumption based on [41]) ≈ **5,700–6,800 booth bookings a year**, × $500–1,500 [74][76][77] ≈ **$3–10 M a year**.

**Corporate holiday parties**
- Canada: **93%** of senior managers said their company would host year-end festivities (OfficeTeam/Robert Half 2018, n=600+): 58% off-site, 42% on-site, 25% raising budget, 10% cutting [13]. The older HRPA 2011 survey found **Quebec 64%** hosting vs Ontario 56%, Alberta 50% and Atlantic 47%, so Quebec was the highest [17]. Only 44% of Canadian employees expected a party in 2013 (H&R Block) [16]. No 2024–2026 Canada-specific employer survey from Robert Half, Léger, Ipsos or Angus Reid was found in this session (gap).
- US reference: Challenger 2024: **64%** of companies holding parties (flat vs 2023). 17% planned to cut spending (vs 8% in 2023), 4.5% went virtual, and 2% cancelled [22]. In 2023: 64.4% in-person, 58% during the workday, 57% serving alcohol, 32% on company premises [21]. The long-term decline is 90% (2007) → 64% (2024) [23]. ezCater 2025: expected attendance **82%** (vs 70% in 2024), **51% of decision-makers raising budgets, by +13% on average** [24].
- Budget per employee: the CRA allows **up to $150 per person (incl. tax, spouse counted) for up to 6 events a year** without a taxable benefit, which in practice works as the budget ceiling for Quebec SMEs [29][30]. An older survey surfaced in the HR Reporter/PlanSponsor search results gave a median of $70/person ($26,000 per party); the date and country are unverified. UK 2026 benchmark: about £101 per head and 208 guests per high-value booking [27].
- Timing: bookings are made **June–September** (prime Thu/Fri/Sat dates locked by late August) [31]; in the Saguenay, mostly Sep–Oct [33]. UK: 42% of bookings are made before September, and Sep–Oct are the busiest enquiry months; Friday has 35.9% of enquiries and Thursday 30.3% [27]. A sizeable share of parties shift to **January** (popular: Jan 6 and 13; Dec 16 and 23) [26]. Quebec headwinds: in 2023 the City of Montreal and others cancelled parties because of inflation [34], and holiday spending intentions fell 20% (Léger/RCC) [35].
- Target base: **278,278 Quebec employer businesses** (2023); 12.7% have 20–99 employees (~35,300) and 2.3% have 100+ (~6,400) [57]. ISQ Dec 2025: 278,816 employer businesses [58]. That gives about **41,700 firms with 20+ employees**; at ~64–90% hosting, roughly **27,000–37,000 corporate holiday events a year** in Quebec.

**Event industry size**
- Montreal business tourism 2025: **477 events, more than 1 M visitors, $438 M in economic spinoffs** (Palais des congrès alone: 281 events, 940,000 participants, $277 M) [45][46][47]. In 2018-19, the Palais and the Centre des congrès de Québec hosted 563 events and 1.3 M participants [49].
- Canada: business events equal about 40% of tourism spending, with CAD 47 B direct impact and 242,000 jobs [50]. Trade show & event planning industry: $3.1 B revenue, 1,156 businesses and 12,529 employees (2024) [56]. NAICS 56192 average revenue $633.7 k [55].
- Global: business events generated US$1.3 T in direct spending and US$3.1 T in total sales in 2025 [52]. Amex GBT 2026: cost per attendee up about 6%, and North American planners are 93% optimistic [53][54].
- Photo booth market: global US$95 M (2025) → US$260 M (2034), CAGR 15.3%. North America is the largest region and short-term event rentals dominate [43][44].
- Festivals: 51% of Quebec festivals run a deficit (EAQ) [79].
- Population: 9.03 M (1 Jan 2026), down 0.1% in 2025 after strong growth in 2022–24 [59].

---

## (e) Implications: monthly Google Ads budget by product line, Oct 2026 – Sep 2027 (~$9,100/month, $109,200/year)

Principles behind the allocation:
1. **Fund the lead time, not the event date.** Corporate spend goes from Aug to Dec, with the peak in **Oct–Nov** while searches climb (Sep 13 → Oct 21 → Nov 72 → Dec 100) and last-minute and January parties are still being booked. Wedding product lines (photobooth, letters, mobilier) start in **January**, when couples book 6–12 months ahead, and stay steady through September. Chapiteaux run **Mar–Jul** ahead of the May–August search peak.
2. **Photobooth is the year-round backbone.** It has the highest volume, it is growing about 13% a year, and it has two peaks (wedding Aug–Sep and holiday Nov–Dec).
3. **Lettres lumineuses and mobilier lounge have almost no search demand of their own.** Sell them as add-ons in photobooth, wedding and corporate ads, and through remarketing, Demand Gen and Performance Max (visual).
4. **Brand and remarketing** get 8–15%, with more in Dec–Feb when booking intent is high but generic searches are lower.

### e1. Flat $9,100/month (as requested)

| Mois | Corporatif (party de bureau + team building) | Photobooth / 360 | Lettres lumineuses & décor | Chapiteaux / tentes | Mobilier lounge / tables-chaises | Marque + remarketing | Total |
|---|---|---|---|---|---|---|---|
| Oct 26 | 4,095 $ (45%) | 2,275 $ (25%) | 728 $ (8%) | 182 $ (2%) | 1,092 $ (12%) | 728 $ (8%) | 9,100 $ |
| Nov 26 | 4,550 $ (50%) | 2,002 $ (22%) | 728 $ (8%) | 0 $ (0%) | 1,092 $ (12%) | 728 $ (8%) | 9,100 $ |
| Dec 26 | 3,458 $ (38%) | 2,548 $ (28%) | 1,092 $ (12%) | 0 $ (0%) | 1,092 $ (12%) | 910 $ (10%) | 9,100 $ |
| Jan 27 | 1,365 $ (15%) | 2,912 $ (32%) | 1,638 $ (18%) | 455 $ (5%) | 1,365 $ (15%) | 1,365 $ (15%) | 9,100 $ |
| Feb 27 | 1,365 $ (15%) | 2,730 $ (30%) | 1,638 $ (18%) | 910 $ (10%) | 1,365 $ (15%) | 1,092 $ (12%) | 9,100 $ |
| Mar 27 | 1,365 $ (15%) | 2,548 $ (28%) | 1,547 $ (17%) | 1,365 $ (15%) | 1,365 $ (15%) | 910 $ (10%) | 9,100 $ |
| Apr 27 | 1,092 $ (12%) | 2,457 $ (27%) | 1,365 $ (15%) | 2,002 $ (22%) | 1,274 $ (14%) | 910 $ (10%) | 9,100 $ |
| May 27 | 910 $ (10%) | 2,457 $ (27%) | 1,183 $ (13%) | 2,548 $ (28%) | 1,274 $ (14%) | 728 $ (8%) | 9,100 $ |
| Jun 27 | 1,092 $ (12%) | 2,457 $ (27%) | 1,092 $ (12%) | 2,548 $ (28%) | 1,183 $ (13%) | 728 $ (8%) | 9,100 $ |
| Jul 27 | 1,365 $ (15%) | 2,548 $ (28%) | 1,183 $ (13%) | 2,002 $ (22%) | 1,274 $ (14%) | 728 $ (8%) | 9,100 $ |
| Aug 27 | 2,275 $ (25%) | 2,548 $ (28%) | 1,183 $ (13%) | 1,092 $ (12%) | 1,274 $ (14%) | 728 $ (8%) | 9,100 $ |
| Sep 27 | 3,185 $ (35%) | 2,457 $ (27%) | 1,092 $ (12%) | 546 $ (6%) | 1,092 $ (12%) | 728 $ (8%) | 9,100 $ |
| **Total 12 mois** | **26,117 $** (24%) | **29,939 $** (27%) | **14,469 $** (13%) | **13,650 $** (12%) | **14,742 $** (14%) | **10,283 $** (9%) | **109,200 $** |

From January to June, the "Corporatif" line is mainly **team building** (Trends peaks Feb 90, Jun 100, Sep 96), summer corporate parties and "5 à 7" events. From September to December it is party de bureau and party des fêtes.

### e2. Optional seasonal flex (same $109,200 per year; moves money to the corporate rush)

| Mois | Total | Corporatif | Photobooth | Lettres | Chapiteaux | Mobilier | Marque/RMK |
|---|---|---|---|---|---|---|---|
| Oct 26 | 10,800 $ | 4,860 | 2,700 | 864 | 216 | 1,296 | 864 |
| Nov 26 | 11,600 $ | 5,800 | 2,552 | 928 | 0 | 1,392 | 928 |
| Dec 26 | 9,200 $ | 3,496 | 2,576 | 1,104 | 0 | 1,104 | 920 |
| Jan 27 | 7,600 $ | 1,140 | 2,432 | 1,368 | 380 | 1,140 | 1,140 |
| Feb 27 | 8,000 $ | 1,200 | 2,400 | 1,440 | 800 | 1,200 | 960 |
| Mar 27 | 8,400 $ | 1,260 | 2,352 | 1,428 | 1,260 | 1,260 | 840 |
| Apr 27 | 8,900 $ | 1,068 | 2,403 | 1,335 | 1,958 | 1,246 | 890 |
| May 27 | 9,400 $ | 940 | 2,538 | 1,222 | 2,632 | 1,316 | 752 |
| Jun 27 | 9,500 $ | 1,140 | 2,565 | 1,140 | 2,660 | 1,235 | 760 |
| Jul 27 | 8,600 $ | 1,290 | 2,408 | 1,118 | 1,892 | 1,204 | 688 |
| Aug 27 | 8,900 $ | 2,225 | 2,492 | 1,157 | 1,068 | 1,246 | 712 |
| Sep 27 | 8,300 $ | 2,905 | 2,241 | 996 | 498 | 996 | 664 |

### e3. Tactical implications
- **Now (Oct 7, 2026):** corporate holiday campaigns should be live immediately. Quebec searches for "party de bureau" reach 47% of peak in October and 100% in November, while the best Thu/Fri/Sat December dates are mostly booked by late August–October [31][33]. Push **January party** dates and weekday slots. Use the CRA $150/person rule as a selling point ("forfait photobooth + lounge sous 150 $/pers.") [29].
- **FR first:** about 85% of budget in French or neutral ad groups. EN goes only to Montreal West Island and core areas plus "photo booth rental" terms, because Quebec EN search for these terms is ~4% of the US per-capita share and ~9% of Ontario's.
- **Expect a volume ceiling:** exact-intent queries ("location photobooth", "location lettres lumineuses", "location mobilier lounge") are below Trends thresholds. Budget headroom should flow to (i) "photobooth" plus modifiers in phrase match with strong negatives (app, Mac, Windows, gratuit, DIY), (ii) Performance Max or Demand Gen with visual assets for letters and lounge, and (iii) remarketing.
- **Weddings are spreading out:** October weddings now exceed June [3], and the Friday share is rising [3]. Keep wedding photobooth and letters ads running through September and promote Friday and off-peak pricing.
- **Chapiteaux:** turn off from October to January (index 0), restart in March and peak May–July.
- **Validate within 30 days:** replace the §c estimates with Évenox's Google Ads Keyword Planner (Quebec, FR+EN) and Search Terms data. The calibration error is ±50–100%.

### Gaps (not covered in this session)
- No 2024–2026 Canada-specific holiday-party survey (Robert Half, Léger, Ipsos or Angus Reid) was found. The latest Canada-wide employer figure is 2018 (93%), and the latest Quebec split is from 2011 (64%).
- ISQ monthly counts of weddings (the 12-month table) were not reachable. The monthly shape uses StatCan Canada 2008 plus ISQ 2024–2025 text statements.
- Real Keyword Planner volumes and CPCs were not available (Ahrefs captcha, other tools behind logins or paywalls).
- Search budget ran out before checking Zola 2026, Léger/RCC 2025 holiday spend, and measured FR vs EN CPC differences in Quebec.
