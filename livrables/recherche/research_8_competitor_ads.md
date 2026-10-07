# Research 8: Competitor Google ads (Google Ads Transparency Center)

*Collected 2026-10-07 · Region filter: Canada (code 2124) · Tool: headless Chromium (Playwright) on adstransparency.google.com, plus Google's own ATC RPC endpoints called from inside the page (SearchSuggestions, SearchCreatives, GetCreativeById).*

**How the data was collected.** For each competitor I searched the Transparency Center by advertiser name and by domain, then pulled every creative listed for Canada: format, first and last date shown, and number of days shown. Text ads were rendered locally from Google's own preview files. Most of the copy is archived as images, so those images were downloaded, grouped into contact sheets and read visually. The copy quoted below is verbatim, including the advertisers' own typos.

**Raw data:** `scratchpad/compete_data/atc/`
- `creatives_list.json`, `all_creatives.json`: ad metadata
- `img/`: 378 archived ad images
- `sheets/`: contact sheets
- `jsrender.json` and `jsrender/`: locally rendered text ads
- `notes.md`: transcription notes

**Scripts:** `scratchpad/compete_scripts/`

**Caveat on dates.** "Last shown" is the last date the Transparency Center recorded. Ads with a last-shown date of 2026-10-05 to 10-07 are treated as **currently active**.

---

## (a) Sources (pages analysed successfully)

Transparency Center advertiser and domain pages, all filtered to Canada:

| # | Source | Ads (CA) |
|---|---|---|
| 1 | Les Ballounes, advertiser AR00080143230749900801 | 41 |
| 2 | Domain lesballounes.com. Adds 2 third-party accounts: "7923082 Canada Ltd" (6 ads) and "CP Advertising Network Ltd" (5 ads) | 52 |
| 3 | Abris Crystal Inc., AR07440147915303026689, plus domain abriscrystal.com | 24 CA / 26 all regions |
| 4 | Diva Location, AR16254152170906058753, plus domain divalocation.com | 74 |
| 5 | Locations Festi-Fêtes, AR11382906641532846081, plus domain festifetes.ca | 46 |
| 6 | Domain celebrationsgroup.com, advertiser "Bench & Table Service (1967) Limited" AR05776215221907488769. This is Celebrations Group / Location Gervais Inc. | 48 |
| 7 | Gervais Rentals, AR17106158319610888193, gervaisrentals.com. Checked and **excluded**: it is a Toronto company, not Location Gervais Montréal | 58 |
| 8 | Location de Tentes Michel Laflamme Ltée, AR02262705817981550593. This was the only Transparency Center match for "Loca-Tente" | 3 |
| 9 | Domain spiniko.ca, advertiser "Gabriel Desbiens" AR04436923352476549121 | 14 |
| 10 | Beyond Fun Games, AR03097657991583760385 (beyondfun.ca and lefoamparty.ca) | 49 |
| 11 | Domain cheeesebox.ca, advertiser "Raphael Tixier" AR06800230825087467521 | 6 |
| 12 | Location Marabooth INC, AR01615708164940890113 | 7 |
| 13 | Domain partygonflable.com, advertiser "Agence Marketing Be Wise inc." AR09764967773657628673 | 3 |
| 14 | EVENTUUM Location et evenement, AR07427637483023630337 | 5 |
| 15 | Domain evenox.ca, advertiser "Alexandre Séguin" AR16986025301202960385. **This is Évenox's own account** | 38 (24 text, 7 display, 6 video in CA; the extra 1 outside CA) |
| 16 | Domain locationphotobooth.ca, advertiser "Miroir Magique Photobooth". Found while searching for photobooth competitors | 4 |

**Successfully analysed: 16 Transparency Center pages.** That covers 433 creatives in total, about 375 of them from relevant Quebec competitors.

**Searched with no result in the Transparency Center (by name and by guessed domains).** These count as findings, not sources:
- **Bravo Location.** No advertiser found under the names "Bravo Location" or "Bravo Location Rentals", nor on bravolocation.com or bravolocation.ca.
- **Omega Design Events.** Nothing for "Omega Design" or "Omega Design Events", nor for the domains omegadesign.ca or omegadesignevents.com.
- **Loca-Tente.** Nothing under that exact name, nor on locatente.com or loca-tente.com. The only match was Michel Laflamme (#8).
- **Louevie.** Nothing for louevie.com or louevie.ca.
- **Vianney Photobooth.** Nothing under that name, nor on vianneyphotobooth.com or .ca.
- **Iboo.** Nothing for "iboo", "Iboo Solutions", iboo.ca or iboophotobooth.com.
- **Glam Location.** Nothing for glamlocation.com or .ca.
- **Location Gervais.** It has no Transparency Center entry under its own name. Its ads run under Celebrations Group (#6).

A caveat on these: if one of them uses an unexpected domain or a personal name as its advertiser name, the Transparency Center cannot find it by brand. This is exactly how Évenox (listed as "Alexandre Séguin"), Spiniko ("Gabriel Desbiens") and CheeeseBOX ("Raphael Tixier") appear. So "not found" means **probably not advertising, not proven absent**.

**Supporting web searches.** These were used only to identify businesses and domains; they are not ad data:
- weddingwire.ca, Bravo Location Rentals: https://www.weddingwire.ca/event-rentals/bravo-location-rentals--e6746
- pagesjaunes.ca, Omega Design: https://www.pagesjaunes.ca/bus/Quebec/Saint-Leonard/Omega-Design/100758834.html
- weddingwire.ca, Vianneyphotobooth (packages from $450): https://www.weddingwire.ca/photobooth/vianneyphotobooth--e69791
- weddingwire.ca, Location Gervais: https://weddingwire.ca/event-rentals/location-gervais--e26957

**Google search results pages (SERPs): 0 analysed, all blocked.** I tried four searches on google.ca (hl=fr, gl=ca):
- "location photobooth laval"
- "party de bureau montréal décoration"
- "location lettres lumineuses"
- "location mobilier lounge montréal"

All four redirected immediately to google.com/sorry ("Nos systèmes ont détecté un trafic exceptionnel…"). I did not try to get around the captcha. Screenshots are in `compete_data/serp/`.

**Other blocks.**
- Loading many creative-detail pages in parallel triggered a Transparency Center **HTTP 429** (rate limit). I switched to lighter methods instead: a single listing request per advertiser, plus direct downloads of the archived images and preview files.
- A few creatives (for example one Diva ad) have a "429 error" screenshot stored in Google's own archive. That is a problem on Google's side and was not caused by my scraping.

---

## (b) Findings per competitor (verbatim copy)

### Summary table

| Competitor | Advertising? | Ads (CA) | Formats | Dates (first → last shown) | Status 2026-10-07 | Prices in ads? |
|---|---|---|---|---|---|---|
| **Diva Location** (Laval) | Yes | 74 | 100% text (Search + local) | 2023-03-28 → 2026-10-07 | **Active**. Many ads have run 1,000+ days | No ("Meilleurs Prix", "Petit Prix", "Save Money") |
| **Festi-Fêtes** (Laval) | Yes | 46 | 100% text | 2023-09-20 → 2026-06-11 | **Stopped since mid-June 2026** | No ("Bas Prix") |
| **Celebrations Group / Location Gervais** | Yes | 48 | 16 text, 32 display | 2025-01-08 → 2026-10-06 | **Active** | No |
| **Les Ballounes** | Yes | 41 own + 11 from agency accounts | 29 text, 12 display (own) | 2025-06-06 → 2026-10-06 | Own account paused since 2026-04-30; **agency accounts active** | No |
| **Abris Crystal** | Yes | 26 | 22 text, 3 image, 1 video | 2025-10-15 → 2026-10-06 | **Active** | **Yes**: tents from $120, pop-up $450+, 20x20 marquee tent from $2,850, car shelters $475 to $850 |
| **Beyond Fun** | Yes | 49 | 43 text, 4 image, 2 video | 2023-08-25 → 2026-10-07 | **Active** | Only a promo: "25 $CA de réduction" (foam party) |
| **Spiniko** | Yes | 14 | text | 2023-09-14 → 2026-10-06 | **Active**, Christmas-party ads already launched | No |
| **Marabooth** | Yes | 7 | 3 text, 2 image, 2 video | 2023-01-31 → 2026-10-06 | **Active** | No ("Pas de location à l'heure") |
| **CheeeseBOX** | Yes | 6 | text | 2025-09-26 → 2026-10-05 | **Active** | No |
| **Eventuum** (Laval) | Yes | 5 | text | 2023-03-23 → 2026-10-06 | **Active** (2 new ads since July 2026) | No |
| **Party Gonflable** | Yes (lapsed) | 3 | text, image, video | 2025-08-22 → 2025-11-03 | Inactive | No |
| **Michel Laflamme tents** (possibly not "Loca-Tente") | Yes | 3 | text | 2025-04-14 → 2026-08-07 | Inactive since August | No |
| **Miroir Magique** (locationphotobooth.ca) | Yes | 4 | 2 text, 2 display | 2025-05-31 → 2026-10-05 | **Active** | No |
| Bravo Location, Omega Design, Loca-Tente, Louevie, Vianney Photobooth, Iboo, Glam Location | **Not found** | 0 | – | – | – | – |
| **Évenox** (for reference) | Yes | 38 | 25 text, 7 display, 6 video | 2025-04-10 → **2026-09-23** | **Nothing shown since 2026-09-23** | **Yes**: chairs from $1.50, inflatable from $100, inflatable bundle from $499, photobooth from $599, 2-hour package from $650, price extension "à partir de 70,00 $CA" |

Regions: every advertiser above shows ads only in Canada. Ad copy targets Laval, Montréal, Rive-Nord, Blainville, St-Joseph-du-Lac and Mascouche. Celebrations also covers Québec and Ottawa, and Spiniko advertises "partout au Québec".

**Notable fact.** Diva Location and Festi-Fêtes have the **same address** in their local ads: 2575 Boul. le Corbusier, Laval. They also reuse identical copy: "Le plus grand choix de décorations, tables, chaises et vaisselle. Appelez-nous!" They are almost certainly one operator with two brands. Festi-Fêtes stopping in June probably means the budget moved to Diva.

### Diva Location: 74 text ads, active, running since 2023

Bilingual FR/EN. The ads use location assets: Laval, Boul. le Corbusier, 4.5★ from 104 to 107 reviews. They show sitelinks, image assets and Call / Directions buttons. Most of these ads have run continuously for 600 to 1,200 days.

**Wedding (FR)**
- "Location Vaisselles de Mariage - Le Meilleur Service et Prix" / "Location de Vaisselles pour votre Mariage. Spécialiste Location d'Accessoires de Mariage. Plus de 1000 Évènements Organisés. Aucun Achat Minimum…"
- "Location Mobilier pour Mariage - Épatez vos Invités"
- "Décorations de Mariage - 1000+ Clients Satisfaits" / "Décorations de Mariage en Location. Organisez un Mariage Spectaculaire. Meilleur Prix. Diva Location Mariage. Accessoires et Mobiliers. Aucun Achat Minimum. Estimation Gratuite. Grand Choix et Petit Prix. Conception sur Mesure. Offres Exclusives."
- "Équipement de Mariage à Louer - Estimation en Ligne Gratuite"
- "Location Tables de Mariage - Estimation en Ligne Gratuite"
- "Location de Nappes de Mariage - Le Meilleur Service et Prix"

**Tents and furniture (FR)**
- "Chapiteau et Tentes à Louer - 1000+ Clients Satisfaits" / "…Meilleurs Prix. Aucun Achat Minimum. 10 000+ Produits. Soumission en Ligne Rapide…"
- "Location Mobilier Evenementiel - 1000+ Clients Satisfaits"
- "No.1 au Québec - La Plus Grande Sélection - Meilleur Prix" / "Location Accessoires pour votre Événement. 1000+ Évènements Organisés. Meilleurs Prix."
- "Location de Tables et Chaises - Grand choix et meilleurs prix" / "Besoin de fournitures de fête? Louez et économisez. Obtenez votre devis gratuit."
- "Diva Location - Tables, chaises et vaisselle" / "Louez et économisez. Qualité supérieure, bons prix. Obtenez votre devis gratuit."
- "Contacter Diva Location - Le meilleur service et prix" / "Le plus grand choix de décorations, tables, chaises et vaisselle. Appelez-nous!"

**English**
- "Best Tent Rentals Montreal - Save Money and Great Service" / "Wide Selection, Fast Delivery, Best Prices. Your Local One Stop Shop. Call Now!…"
- "Montreal Party Rentals - We Bring the Fun To Your Party" / "…Package Discounts."
- "Party Table and Chair Rentals - 1000+ Satisfied Clients" / "Large Selection of Table and Chair Rental. Save Money On Your Party. Throw the Best Party! Amaze your Guests…"
- "Best Table Centerpieces - Save Money and Great Service" / "Top Quality Table Centrepieces. Package Discounts Available. Call Now and Save!… Visit our Renovated Showroom…"
- "Wedding Tent Rentals Montreal - Save Money…" / "Huge Selection of Wedding Tents. Fast Pickup. Get a Free Quote Now!"

**Sitelinks:** Matériels Décorations, Centres De Table, Canapés & Salon, Banquettes & Trônes, Bars & Étagères, Équipements Traiteur, Coutellerie, Verrerie, Plateaux Pour Gâteau, Sous-Assiettes, Party Chair Rentals, Wedding Decoration Rental, Best Party Tent Rentals.

**Offers and calls to action (CTAs):** "Aucun Achat Minimum", "Estimation/Soumission en Ligne Gratuite", "Offres Exclusives", "Package Discounts", "Call Now". **There is not one dollar figure in any ad.**

### Festi-Fêtes: 46 text ads, stopped 2026-06-11

Laval, 4.5★ from 65 to 73 reviews. Every ad follows the same formula: "Louez et Économisez / 1000+ Clients Satisfaits / Aucun Achat Minimum / Devis Gratuit en Ligne / Service d'Installation Disponible".
- "Louer Tables et Chaises - Location de Chaises et Tables" / "Besoin de Louer des Tables et Chaises? Spécialiste Location d'Accessoires de Réception,=. Tous pour vos Évènements. 1000+ Clients. Aucun Achat Minimum. Devis Gratuit en Ligne." (the stray "=" is in the original)
- "Location Jeux Gonflables Laval - Bas Prix, Livraison Disponible"
- "Louer des Jeux Gonflables - Le meilleur service et prix" / "Le plus grand choix de Gonflables. Livraison rapide…"
- "Location Chapiteau - Chapiteau et Tente Extérieure" / "…Service Rapide. Location Sans Tracas…"
- "Location de chapiteaux - Choisissez Festi-Fêtes"
- "Festi-Fêtes Location - Intervention rapide" / "…Conception sur mesure."
- "Location de Vaisselle"
- "Louer Barbecue Propane - Équipement de BBQ en Location"
- "Location Machine Barbe à Papa", "Location Machine à Popcorn"
- Local ads (EN): "Barbeque Near Me", "Party Tents, Chairs, Tables, Linens & Event Rentals. Get Your Free Quote Now!"

### Celebrations Group / Location Gervais: 48 ads (two thirds display), active

Advertiser "Bench & Table Service (1967) Limited". Ads cover Montréal (4001 Boul. Côte-Vertu O.), Québec and Ottawa; local rating 4.3 to 4.4★ (79 to 84). Heritage and "haut de gamme" positioning, with a corporate and caterer angle.

**Text ads**
- "Event & Party Rentals - Celebrations Group…" / "Celebrations Group has been serving the industry since 1919. We Have One Of The Largest…" (sitelinks Tables | Decor & Carpet | Catering Equipment)
- "Tables Rondes et Rectangles - Obtenez une Soumission" / "Equipement de location haut de gamme et service hors pair." (new, 2026-08-24 → 10-04)
- "Service Cle en Main - Montreal, Quebec, Ottawa" / same description
- "Location Célébrations" / "Nous desservons, corporations, traiteurs et organisateurs"
- "Rent Tables, Chairs, Linens" / "We Serve Private Functions, Major Corporations, Event Planners, Caterers, Charities."
- "Location de Chaises et Nappes" / "Faites de votre événement un moment heureux et inoubliable"
- "Location de nappes de table" / "Location de nappes, housses de chaises, serviettes…"

**Display**
- "Since 1919 — We Have One Of The Largest And Most Comprehensive Inventories Ever Assembled."
- "Event Planning Solutions — Your go-to place for exceptional event planning and logistics."
- "Why Celebrations rentals? — Our knowledgeable staff, over 100 years of event rental"
- "Celebrations — private parties, social and corporate functions."
- "Montreal Wedding Rentals"
- "Location de Nappes — Location pour événement depuis 1919"
- "Location pour Mariage — Louez nos matériels pour tous vos événements"
- "Vaisselles, Coutellerie — Vous cherchez à planifier une fête de quartier qui doit être spectaculaire?"
- Map-style ads for "Location Gervais Inc.": "Wedding Equipment Rentals - Celebrations since 1919", "Party Rental Supplier - Montreal since 1919", "One Stop Party Rentals". Shows "Montréal OPEN 8:30AM-5PM · Delivery".

### Les Ballounes: own account paused, but still advertising through agencies

**Own account:** 41 ads, 2025-06-06 → 2026-04-30. Inflatables. Covers St-Joseph-du-Lac, Laurentides, Blainville and Laval. Local ad: 5.0★ (82), "Ouvert 24h/24".
- "Location De Jeux Gonflables" / "Nos jeux sont toujours nettoyés avant chaque location"
- "Jeux Gonflables à Louer" / "Réserve ton jeu gonflable près de St-Joseph-du-Lac"
- "Blainville et environs - Fête d'enfants inoubliable" / "Qualité pro : jeux récents, inspectés et nettoyés après chaque utilisation."
- "Location pour vos fêtes" / "Louez vos jeux gonflables en ligne en quelques clics"
- "Mascottes & jeux thématiques - Location pour vos fêtes"
- "Location de Jeux Gonflables - Jeux Gonflables à Laval" / "Location facile, rapide et abordable"
- "Call (514) 546-3118" / "Réservez Dès Maintenant Nos jeux sont toujours nettoyés avant chaque location"
- **Franchise recruitment** (Jan to Feb 2026): "Démarrez un business rentable - Ouvrez votre business de jeux" / "Nous gérons le marketing, les réservations et le service client. Vous gérez l'opération."
- Display: "Réserve ton Jeu Gonflable", "Blainville et environs — Nos jeux sont toujours nettoyés avant chaque location", "Gros inventaire à louer en ligne facilement"

**Agency accounts still active** (ads on lesballounes.com shown up to 2026-10-06):
- "7923082 Canada Ltd":
  - "Location de Jeux Gonflables - Réservation en Ligne 24/7" / "Trouve LE jeu gonflable pour ton événement et fais de ta fête un moment inoubliable!… Jeux de Qualité. Propreté & Sécurité. Prix…"
  - "Location de Jeux Gonflables - Machine Barbe à Papa, Pop Corn" (sitelinks La Triple Glissade | Le Lego | Les Dauphins)
  - "Location Lasertag" / "Organisez une partie de Lasertag directement à votre domicile."
  - "Équipement Événementiel" / "Créez une ambiance unique avec nos équipements événementiels. Réservez!"
- "CP Advertising Network Ltd":
  - "Location Châteaux Gonflables - Idéal pour Fête d'Enfant" / "Amuse-toi à fond avec nos modules gonflables, structures aquatiques & cinéma extérieur! Disponibles à Laval et sur la Rive-Nord…"
  - "Jeux Gonflables à Mascouche - Réservation en Ligne 24/7"
  - "Jeux Gonflables à Laval - Cet Hiver, On joue dehors !" (sitelinks Idéal pour Fête d'Enfant | **Pour Party d'Entreprise**)

### Abris Crystal: 26 ads, active, the only competitor with real prices

**Event tents**
- "Dès 120 $ Tous Formats - Tous Types Disponibles" / "Dès 120 $ pour pop-up jusqu'aux grandes structures. **Sans frais cachés.** Location de chapiteaux professionnels. Équipe bilingue, soumission en 24 h. Types: Pop-Up, Marquise, Pôle, Structure." (2026-06-01 → 09-11)
- "Location, installation incluse - Soumission gratuite 24h" / "En location : installation et démontage inclus… 15 ans d'expérience, plus de 320 avis Google. Distributeur officiel."
- "Chapiteaux à Vendre — Montréal - Chapiteau à Vendre au Québec" / "Marquise 20x20 dès 2 850$. Installation pro disponible."
- Sitelinks: "Pop-Up — 450$+ Montage rapide en 5 minutes Idéal marchés et promotions"; "Soumission Gratuite — Réponse en moins de 48h Aucun engagement requis"
- Display: "Soumission gratuite 24h — Chapiteaux et marquises pour mariages, événements et corporatif à Laval et Montréal."

**Car shelters** (the bulk of current spend; seasonal):
- "Installations dès le 15 oct - Simple 11 × 20 : 475 $ - Installation incluse" / "Simple 11 × 20 : 475 $ par saison. Monopente 11 × 20 : 525 $ / saison. Double 18 × 20 : 850 $ / saison."
- "Livré chez vous le 11 octobre - Commandez jusqu'au 9 octobre" (deadline urgency)
- "Abri de type Tempo à Laval - Prix affichés en ligne"

### Beyond Fun: 49 ads, active, corporate team-building leader

Montréal, 5.0★ (128 to 130). Bilingual.
- "Activité Team Building Unique" / "Jeux géants pour vos événement de team building, cohésion d'équipe et événement corporatif"
- "#1 en Team Building Rive-Sud - Team Building #1 à Montréal" / "…Party de Bureau, BBQ d'entreprises. 5 Étoiles Sur Google."
- "Team Building #1 à Montréal - + de 25 Jeux Uniques au Québec"
- "Activités Uniques de Groupes - + de 25 Jeux Uniques au Québec" (/teambuilding/laval) / "…Clé en main. Intérieur/Extérieur."
- "More Than 25 Activities in MTL - Unique Team Building Montreal" / "Escape the ordinary—host a team building event your coworkers will actually love."
- "Where Work Meets Fun"
- "Best Team Building Activities - Boost Morale & Team Spirit"
- "Beyond Fun - Expériences uniques à Montréal - Livraison et Installation"
- "Le Foam Party - Party Mousse - Réservez Maintenant", with a promotion asset: "25 $CA de réduction sur un party mousse"
- "Costume de Sumo - Location Costume de Sumo"
- "Jeux Géants Pour Kermesse", "Atelier de Tufting à Montréal" (sitelinks Team Building Laval | Team Building Rive-Sud)

### Spiniko: 14 text ads, active, office parties and Christmas

- **Launched 2026-09-08:** "Idée de party d'entreprise - Activité corpo originale 2026" / "Party de Noël clé en main. Laissez-nous vous amuser. Contactez-nous pour décembre 2026"
- "Activités délirantes & uniques - Enfin du Team building fun" / "Organisation et gestion d'événements clé en main… BBQ - Party de bureau - Noel - Traiteur - Bar etc. bref on fait tout !"
- "Jeux Spin devient Spiniko - Location de Jeux - Service d'animation inclus" / "Pour : Partys de bureau, Team Building, Fêtes, Festivals, Activations marketing…"
- "Jeux Géants À Louer - Jeux Géants Au Québec" / "…Installation, démontage et livraison inclus. Service d'animation disponible…"
- "Corporate Games That Work - Fun Corporate Events" / "50+ original games. No boredom allowed…"
- "Book a Christmas Party - Giant Games For Office Party" / "We have a specific department dedicated to organizing corporate Christmas parties…"
- "We outshine bouncy castles - Life Size & Giant Games"
- "On vous présente Las Olas - Traiteur événementiel à Montréal"

### Photobooth competitors

**Marabooth** (7 ads, active)
- "Location de Photobooth à Laval - Sans limite de temps" / "Louez votre Photobooth à Laval (Rive Nord) pour la durée de votre événement Pas de location à l'heure. Impressions instantanées. Installation 30 minutes." This ad has run for 1,340 days.
- Sitelinks: Location pour Mariage | Pas de Location à l'Heure | **Photobooth pour Noel** | Demande de soumission
- "**Alternative à Lebooth** - Louez un photobooth à Montréal". This targets a competitor's brand name.
- "Affordable Photobooth Rental - Photo Booth…" (EN)
- Display: "Pack Mariage Disponible — Le Photobooth c'est souvent l'attraction de la soirée. Accessoires inclus et impression"

**CheeeseBOX** (6 ads, active; 4.8★, 72 reviews)
- "Louez votre photobooth - Un photobooth clé en main" / "Proposez à vos invités ou collègues une expérience photo simple et mémorable." (sitelinks …| Mur mosaïque)
- "CheeeseBOX Québec — Photobooth & Activation de marque" / "Choisissez le bon photobooth pour mariage, soirée privée ou événement d'entreprise."
- "Location de photobooth - Location de borne photobooth" / "…Découvrez nos forfaits clé en main!"

**Miroir Magique** (4 ads, active)
- "Location Photo Booth" / "La location du Photo Booth Miroir Magic est idéale pour toutes les occasions"

### Smaller players

**Eventuum** (Laval, active)
- "Salle de Réception à Laval - Anniversaires et Mariages" / "Anniversaires, mariages, événements corporatifs. Stationnement gratuit inclus… jusqu'à 150 invités."
- "Location Château Gonflable - Devis Gratuit en Ligne" / "…Châteaux gonflables, glissades et jeux pour enfants. Livraison incluse."

**Party Gonflable** (lapsed Nov. 2025)
- "Call (450) 523-5389" / "Service clé en main pour écoles, CPE et événements corporatifs… Des structures sécuritaires, inspectées…"

**Michel Laflamme** (inactive since August)
- "Chapiteaux Laflamme - Location de chapiteaux" / "Location de chapiteaux et de grandes tentes pour évènements en tous genres"

### Évenox: what ran (38 ads, 2025-04-10 → 2026-09-23; nothing shown since)

**Ran most recently (to Sept. 2026)**
- "Montréal Laval Rive-Nord - Pas de Surprise Sur la Facture" / "Tables cheap = événement cheap. Nos clients nous choisissent parce qu'ils remarquent…" (sitelinks Location Tables & Chaises | Voir Nos 200+ Produits)
- "Learn more | Location Photobooth Montreal - Soumission Gratuite 24h" / "3 fournisseurs appelés, aucun rappel? Chez Évenox on répond en 24h. Photobooth clé en main". **"Learn more |" is an English prefix inserted automatically.**
- "Location Tables & Chaises - Soumission 24h Pas 3 Jours" / "Installation incluse et matériel inspecté pour des événements réussis."
- "Évenox" / "La Référence en Location d'Équipement & Décoration"

**Spring and summer 2026**
- "Location Photobooth Montreal - Soumission Gratuite 24h" / "À partir de 599$. Photos illimitées, livraison et installation. Un appel et c'est régler." (typo: "régler" should be "réglé")
- "Gonflable + Jeux Dès 499$ - Offre Limitée | Réservez Tôt" / "Gonflable XL + 2 jeux géants + slush + popcorn. Tout inclus dès 499$. On livre dans 20 km"
- "Personne Se Souvient pas Photo - Animateur Dédié pour la Soirée" / "Forfait 2h dès 650$: photos illimitées, impression HD, galerie QR, backdrop et animateur."
- Display: "Montréal Laval Rive-Nord — Devis gratuit en 24h. Location de gonflables dès 100$."; "Personne Se Souvient pas Photo — Les samedis d'été partent vite. Vidéobooth 360° boomerang + photobooth classique."; "Installation Complète Incluse — Plus de 500 événements réussis… Professionnel depuis 2022."

**2025 to early 2026**
- "Location de jeux gonflables - Rabais 10$ Code EVENOX10"
- "Réservez dès maintenant — …10 % de rabais pour votre prochain événement" (display ad with the lit marquee letters "SOFIA")
- "Location de tables et chaises - Réservation en ligne 24/7", with sitelink "Louez vos chaises dès 1,50 $"
- "Chaises de Party à Louer - Évenox - Sainte-Thérèse"
- "Location Photobooth Bal - Clé en Main – Sans Stress"
- "Zéro stress, tout est inclus - Photobooth avec animation"
- "Marché—Location Jeux Montreal - Réservation en ligne 24/7" / "Location jeux &amp; activités… Service municipal approuvé. Prix transparent." (**the raw HTML code "&amp;" is displayed instead of "&"**)
- "Location de chaises pliantes à Mirabel, Laval et Rive-Nord | Évenox" / "Location de Marquee Letter : des décorations lumineuses…" (**the headline and description don't match**)
- Single-product ads: generator, soft-serve ice cream machine, axe throwing, laser tag, 10x10 tent. Price extension: "Afficher 4 prix à partir de 70,00 $CA".
- 6 YouTube video ads (2025-07 → 2026-03); no text could be extracted.

---

## (c) Gaps and angles Évenox can exploit

1. **Évenox is currently dark, and the season is moving.** Évenox's last impression was 2026-09-23. Spiniko has been running "Party de Noël clé en main… décembre 2026" since **Sept. 8**. Marabooth has a "Photobooth pour Noel" sitelink. Beyond Fun and Celebrations are running every day. Corporate Christmas-party bookings are being decided now, so restarting immediately with a Christmas office-party campaign is the top priority.

2. **Nobody advertises lit letters, lounge furniture or "ambiance" décor for office parties.** Across 375+ Quebec competitor ads:
   - There is **zero** ad for "lettres lumineuses" or "marquee letters". The only one is Évenox's own mismatched description.
   - There is **zero** ad for "mobilier lounge" as a premium corporate product. Diva has only a "Canapés & Salon" sitelink.
   - Nobody sells **"party de bureau: décor + ambiance"**. Corporate ads are about *activities* (Spiniko and Beyond Fun: games, team building) or *basic equipment* (Celebrations: "Tables Rondes et Rectangles", serving "corporations, traiteurs"). "Décor, lit letters, lounge, photobooth for your office party, turnkey" is an open position. My searches for "party de bureau montréal décoration" and "location lettres lumineuses" were blocked, so I could not confirm the live results page. The advertiser-side evidence still says the space is uncontested.

3. **Price transparency is a near-empty lane in event rental.**
   - Diva (74 ads) and Festi-Fêtes (46 ads) say "Meilleurs Prix", "Bas Prix", "Petit Prix", "Save Money" without one number.
   - Celebrations, Marabooth, CheeeseBOX and Ballounes publish no prices either.
   - Only Abris Crystal shows prices ("Dès 120 $", "Sans frais cachés", "Prix affichés en ligne"), and its spend is mostly on car shelters.

   Évenox's "Pas de Surprise Sur la Facture", "dès 599$" and "chaises dès 1,50 $" are already unique, so push this harder: every product ad should carry a "dès X $" figure, use price assets, and say "prix affichés en ligne / sans frais cachés". One problem to fix: Évenox's own numbers conflict ("gonflables dès 100$" vs "Dès 499$" vs "à partir de 70,00 $CA"). Make them consistent.

4. **Premium vs. discount.** The largest local advertiser (Diva together with its sister brand Festi-Fêtes) positions on *cheap and huge selection*: "Louez et économisez", "1000+ clients", "10 000+ produits", "Aucun achat minimum". Celebrations owns *heritage and high-end*: "depuis 1919", "haut de gamme, service hors pair". Its base is Montréal / Côte-Vertu, and its copy doesn't speak to the Rive-Nord.

   Évenox can own **"premium Rive-Nord, transparent prices, response in 24h"**. "Tables cheap = événement cheap" is the right instinct, but it reads as an insult. Reframe it as a premium promise, for example "Matériel inspecté, installé par nous, prix affiché".

5. **Weddings: Diva is the incumbent, but its copy is stale.** Diva has run near-identical wedding ads for about three years: vaisselle, nappes, mobilier, chapiteaux, "Épatez vos Invités". Its ads show no prices, no pictures of styled setups and no packages.

   Évenox's opening: **wedding packages with a price** (lit letters + lounge + photobooth, "dès X $"), styled imagery, and a Rive-Nord / Laurentides angle. Ballounes and Eventuum show nearby venues and families are reachable there. Marabooth's "Pack Mariage" is the only package-style wedding ad, and it covers photobooth only.

6. **Corporate: fight over décor, not games.** Beyond Fun (5.0★, 49 ads) and Spiniko own "team building" and "jeux géants". Don't bid head-on for team building. Instead:
   - Bid on "party de bureau", "party de Noël entreprise", "décor événement corporatif", "location mobilier lounge" and "photobooth entreprise".
   - Write copy aimed at office managers and HR: invoice, insurance, installation and teardown, weeknight delivery.
   - CheeeseBOX's "Activation de marque" and Spiniko's "Activations marketing" show that brand-activation demand exists. A "lettres lumineuses au nom de votre entreprise" angle is unused.

7. **Photobooth messaging.** Competitors use "Sans limite de temps / Pas de location à l'heure" (Marabooth), "clé en main" (everyone) and "Mur mosaïque" (CheeeseBOX). Nobody else publishes a price; Évenox's "dès 599$" and "2h dès 650$" are unique.

   Gap: combined bundles ("photobooth + lettres lumineuses + backdrop"). Also, Marabooth's "Alternative à Lebooth" shows that bidding on competitor brand names is accepted practice in this market.

8. **Reviews and proof.** Competitors' local ads show their ratings: Diva 4.5★ (106), Beyond Fun 5.0★ (130), CheeeseBOX 4.8★ (72), Ballounes 5.0★ (82), Abris "plus de 320 avis Google". Évenox's ads show "500 événements réussis" but no rating or review count. Link the Business Profile (location assets) and quote the review count in descriptions.

9. **Fix Évenox's ad hygiene before relaunch.**
   - Remove the automatic "Learn more |" headline prefix.
   - Fix the "c'est régler" typo.
   - Fix the raw "&amp;" in the "Marché" ad.
   - Fix the chairs headline that runs under a marquee-letter description.
   - Rethink the awkward "Personne Se Souvient pas Photo".
   - Recheck "Service municipal approuvé", which looks like an unsupported claim.

   Diva and Festi-Fêtes have similar sloppiness ("Réception,=", "d&#39;"), so clean copy is a cheap way to stand out.

10. **English-language ads.** Diva, Beyond Fun, Spiniko, Celebrations and Marabooth all run English ads ("Party Rentals Montreal", "Tent Rentals Montreal", "Corporate Games"). Évenox runs French only. A small English campaign (Montréal West Island, corporate) is low-competition upside.

11. **Inflatables are crowded.** Ballounes runs through two agency accounts in Laval, Rive-Nord and Mascouche ("Réservation en Ligne 24/7"). Eventuum, Festi-Fêtes, Party Gonflable and Diva are also present. Ballounes owns "nettoyés avant chaque location" and "Fête d'enfants". Évenox's "Gonflable XL + 2 jeux géants + slush + popcorn dès 499$" bundle is differentiated, but this is the category where Évenox has the least premium edge. Put budget into décor, lit letters, lounge, photobooth and corporate instead.
