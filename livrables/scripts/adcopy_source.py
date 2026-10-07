# -*- coding: utf-8 -*-
"""Evenox RSA copy + assets with programmatic character-limit checks.
Run: python3 -I r7_adcopy.py > r7_adcopy.md
Limits (Google Ads Help): headline 30, description 90, path 15, sitelink text 25,
sitelink description lines 35, callout 25, structured snippet value 25,
price header 25, price description 25, lead form headline 30.
"""
import sys

LIM = dict(h=30, d=90, path=15, sl=25, sld=35, co=25, ss=25, ph=25, pd=25)
errors = []

def chk(kind, s, where):
    n = len(s)
    if n > LIM[kind]:
        errors.append(f"{where}: '{s}' = {n} > {LIM[kind]}")
    if "%" in s:
        errors.append(f"{where}: contains % -> brand rule")
    low = s.lower()
    if "à partir de" in low or "a partir de" in low or "starting at" in low or "from $" in low:
        errors.append(f"{where}: contains 'à partir de'/'starting at' -> brand rule")
    if "!" in s and kind == "h":
        errors.append(f"{where}: '!' in headline -> Google editorial")
    return n

AG = []  # list of dicts

# ---------------------------------------------------------------- 1
AG.append(dict(
 name="Lettres lumineuses corporatif",
 url="evenox.ca/ (page lettres lumineuses - corporatif)",
 path_fr=("lettres", "corporatif"), path_en=("marquee", "corporate"),
 pins_fr={1: "H1 ou H2 pour pinning partiel : H1 'Lettres lumineuses 4 pi' (pos. 1)"},
 h_fr=[
  "Lettres lumineuses 4 pi",
  "Location lettres géantes",
  "Votre marque en lumière",
  "Pour galas et lancements",
  "Location haut de gamme",
  "Installation clé en main",
  "Montréal, Laval, Rive-Nord",
  "Événements d'entreprise",
  "Soumission en 24 h",
  "Note Google 4,8/5",
  "Plus de 1 000 événements",
  "Activations de marque",
  "Un décor qui fait parler",
  "Service premium sans tracas",
  "Réservez vos lettres 4 pi",
 ],
 d_fr=[
  "Lettres lumineuses de 4 pi livrées et installées par notre équipe. Soumission en 24 h.",
  "Galas, lancements, fêtes de fin d'année : mettez votre marque en lumière, clé en main.",
  "Montréal, Laval, Rive-Nord, Laurentides et Québec. Plus de 1 000 événements réalisés.",
  "Location haut de gamme pour entreprises exigeantes. Surclassement offert selon forfait.",
 ],
 h_en=[
  "4-ft Marquee Letters",
  "Light-Up Letter Rental",
  "Put your brand in lights",
  "For galas and launches",
  "Premium event rentals",
  "Turnkey installation",
  "Montréal, Laval, North Shore",
  "Corporate events",
  "Quote within 24 hours",
  "Rated 4.8/5 on Google",
  "1,000+ events delivered",
  "Brand activations",
  "A backdrop people remember",
  "Premium, stress-free service",
  "Book your marquee letters",
 ],
 d_en=[
  "4-ft illuminated letters delivered and installed by our crew. Quote within 24 hours.",
  "Galas, launches and holiday parties: put your brand in lights with turnkey service.",
  "Serving Montréal, Laval, the North Shore, Laurentians and Québec City. 1,000+ events.",
  "Premium rentals for demanding corporate teams. Free upgrade on select packages.",
 ],
))

# ---------------------------------------------------------------- 2
AG.append(dict(
 name="Lettres lumineuses mariage",
 url="evenox.ca/ (page lettres lumineuses - mariage)",
 path_fr=("lettres", "mariage"), path_en=("marquee", "wedding"),
 pins_fr={1: "H1 'Lettres lumineuses mariage' (pos. 1) en pinning partiel"},
 h_fr=[
  "Lettres lumineuses mariage",
  "Lettres géantes de 4 pi",
  "Vos initiales en lumière",
  "LOVE, MR & MRS, vos initiales",
  "Location haut de gamme",
  "Installation clé en main",
  "Montréal, Laval, Laurentides",
  "Un décor de mariage élégant",
  "Soumission en 24 h",
  "Note Google 4,8/5",
  "Plus de 1 000 événements",
  "Réservez votre date",
  "Photos de mariage mémorables",
  "Livrées, montées, reprises",
  "Service premium sans tracas",
 ],
 d_fr=[
  "Lettres lumineuses de 4 pi pour votre mariage, livrées et installées par notre équipe.",
  "Initiales, LOVE ou MR & MRS : un décor élégant qui sublime vos photos de mariage.",
  "Les samedis d'été partent vite. Vérifiez la disponibilité de votre date dès aujourd'hui.",
  "Clé en main à Montréal, Laval, Rive-Nord, Laurentides et Québec. Soumission en 24 h.",
 ],
 h_en=[
  "Wedding Marquee Letters",
  "4-ft light-up letters",
  "Your initials in lights",
  "LOVE, MR & MRS, initials",
  "Premium event rentals",
  "Turnkey installation",
  "Montréal, Laval, Laurentians",
  "An elegant wedding backdrop",
  "Quote within 24 hours",
  "Rated 4.8/5 on Google",
  "1,000+ events delivered",
  "Check your date",
  "Unforgettable wedding photos",
  "Delivered, set up, picked up",
  "Premium, stress-free service",
 ],
 d_en=[
  "4-ft illuminated letters for your wedding, delivered and installed by our crew.",
  "Initials, LOVE or MR & MRS: an elegant backdrop that makes your wedding photos shine.",
  "Summer Saturdays book up fast. Check availability for your wedding date today.",
  "Turnkey service in Montréal, Laval, North Shore, Laurentians and Québec. 24-hour quote.",
 ],
))

# ---------------------------------------------------------------- 3
AG.append(dict(
 name="Party de Noël corporatif",
 url="evenox.ca/ (page fêtes de fin d'année / corporatif)",
 path_fr=("fetes", "entreprise"), path_en=("holiday-party", "corporate"),
 pins_fr={1: "H1 'Fête de Noël d'entreprise' (pos. 1); H2 libre"},
 h_fr=[
  "Fête de Noël d'entreprise",
  "Réception des Fêtes",
  "Décor des Fêtes corporatif",
  "Lettres lumineuses et lounge",
  "Photobooth pour vos employés",
  "Forfait gala 2 900 $",
  "Mobilier cocktail et lounge",
  "Décembre se réserve tôt",
  "Réservez votre date",
  "Soumission en 24 h",
  "Montréal, Laval, Rive-Nord",
  "Note Google 4,8/5",
  "Installation par nos équipes",
  "Une soirée à votre image",
  "Surclassement offert",
 ],
 d_fr=[
  "Lettres lumineuses, photobooth et mobilier lounge pour votre fête de Noël d'entreprise.",
  "Les vendredis de décembre partent vite. Réservez tôt votre décor des Fêtes clé en main.",
  "Forfaits lounge 850 $, cocktail 1 100 $ à 1 400 $ et gala 2 900 $. Soumission en 24 h.",
  "Livraison, installation et reprise par notre équipe. Surclassement offert selon forfait.",
 ],
 h_en=[
  "Corporate Holiday Parties",
  "Turnkey holiday party decor",
  "Marquee letters and lounge",
  "Photo booth for your team",
  "Gala package $2,900",
  "Cocktail and lounge furniture",
  "December books up early",
  "Reserve your date",
  "Quote within 24 hours",
  "Montréal, Laval, North Shore",
  "Rated 4.8/5 on Google",
  "Installed by our crew",
  "An evening on brand",
  "Free upgrade available",
  "Premium event rentals",
 ],
 d_en=[
  "Marquee letters, photo booth and lounge furniture for your corporate holiday party.",
  "December Fridays book up fast. Reserve your turnkey holiday party decor early.",
  "Lounge $850, cocktail $1,100 to $1,400, gala $2,900. Detailed quote within 24 hours.",
  "Delivery, setup and pickup handled by our crew. Free upgrade on select packages.",
 ],
))

# ---------------------------------------------------------------- 4
AG.append(dict(
 name="Mobilier lounge/cocktail événement",
 url="evenox.ca/ (page mobilier événementiel / forfaits)",
 path_fr=("mobilier", "forfaits"), path_en=("furniture", "packages"),
 pins_fr={2: "H2 = une ligne de prix ('Forfait lounge 850 $' ou 'Cocktail 1 100 $ à 1 400 $') en pinning partiel pour filtrer"},
 h_fr=[
  "Mobilier lounge événementiel",
  "Forfait lounge 850 $",
  "Cocktail 1 100 $ à 1 400 $",
  "Forfait gala 2 900 $",
  "Location mobilier cocktail",
  "Livraison et installation",
  "Forfaits clés en main",
  "Galas, cocktails, lancements",
  "Mobilier haut de gamme",
  "Soumission en 24 h",
  "Montréal, Laval, Rive-Nord",
  "Note Google 4,8/5",
  "Plus de 1 000 événements",
  "Un lounge à votre image",
  "Réservez votre forfait",
 ],
 d_fr=[
  "Forfaits lounge 850 $, cocktail 1 100 $ à 1 400 $ et gala 2 900 $, clés en main.",
  "Mobilier haut de gamme livré, installé et repris par notre équipe. Soumission en 24 h.",
  "Cocktails dînatoires, galas, lancements et mariages : un décor complet, sans tracas.",
  "Montréal, Laval, Rive-Nord, Laurentides et Québec. Surclassement offert selon forfait.",
 ],
 h_en=[
  "Event Lounge Furniture",
  "Lounge package $850",
  "Cocktail $1,100 to $1,400",
  "Gala package $2,900",
  "Cocktail furniture rental",
  "Delivery and setup",
  "Turnkey packages",
  "Galas, cocktails, launches",
  "Premium event furniture",
  "Quote within 24 hours",
  "Montréal, Laval, North Shore",
  "Rated 4.8/5 on Google",
  "1,000+ events delivered",
  "A lounge that fits your brand",
  "Reserve your package",
 ],
 d_en=[
  "Lounge $850, cocktail $1,100 to $1,400 and gala $2,900 packages, fully turnkey.",
  "Premium furniture delivered, set up and picked up by our crew. Quote within 24 hours.",
  "Cocktail receptions, galas, launches and weddings: a complete look, zero hassle.",
  "Montréal, Laval, North Shore, Laurentians, Québec City. Free upgrade on select packages.",
 ],
))

# ---------------------------------------------------------------- 5
AG.append(dict(
 name="Photobooth corporatif",
 url="evenox.ca/ (page photobooth - corporatif)",
 path_fr=("photobooth", "entreprise"), path_en=("photo-booth", "corporate"),
 pins_fr={2: "H2 = 'Forfaits 650 $ à 1 495 $' (pinning partiel, filtre budget)"},
 h_fr=[
  "Photobooth corporatif",
  "Borne photo pour entreprise",
  "Forfaits 650 $ à 1 495 $",
  "Photos à l'image de la marque",
  "Votre logo sur chaque photo",
  "Galas, congrès, Noël",
  "Activations de marque",
  "Partage numérique instantané",
  "Installation clé en main",
  "Soumission en 24 h",
  "Montréal, Laval, Rive-Nord",
  "Note Google 4,8/5",
  "Plus de 1 000 événements",
  "Forfait Legend 1 495 $",
  "Réservez votre photobooth",
 ],
 d_fr=[
  "Photobooth Signature 650 $, Prestige 825 $, Iconic 1 095 $ ou Legend 1 495 $.",
  "Votre logo et vos couleurs sur chaque photo. Idéal pour galas, congrès et fêtes de Noël.",
  "Livraison, installation et préposé inclus selon forfait. Soumission détaillée en 24 h.",
  "Montréal, Laval, Rive-Nord, Laurentides et Québec. Accessoire bonus offert selon forfait.",
 ],
 h_en=[
  "Corporate Photo Booth",
  "Branded photo booth rental",
  "Packages $650 to $1,495",
  "Your logo on every photo",
  "Galas, conferences, holidays",
  "Brand activations",
  "Instant digital sharing",
  "Turnkey installation",
  "Quote within 24 hours",
  "Montréal, Laval, North Shore",
  "Rated 4.8/5 on Google",
  "1,000+ events delivered",
  "Legend package $1,495",
  "Premium event rentals",
  "Book your photo booth",
 ],
 d_en=[
  "Photo booth packages: Signature $650, Prestige $825, Iconic $1,095, Legend $1,495.",
  "Your logo and colours on every photo. Ideal for galas, conferences and holiday parties.",
  "Delivery, setup and attendant included per package. Detailed quote within 24 hours.",
  "Montréal, Laval, North Shore, Laurentians, Québec City. Bonus add-on on select packages.",
 ],
))

# ---------------------------------------------------------------- 6
AG.append(dict(
 name="Photobooth mariage",
 url="evenox.ca/ (page photobooth - mariage)",
 path_fr=("photobooth", "mariage"), path_en=("photo-booth", "wedding"),
 pins_fr={2: "H2 = 'Forfaits 650 $ à 1 495 $' (pinning partiel)"},
 h_fr=[
  "Photobooth mariage",
  "Borne photo pour mariage",
  "Forfaits 650 $ à 1 495 $",
  "Forfait Signature 650 $",
  "Forfait Prestige 825 $",
  "Souvenirs pour vos invités",
  "Impressions personnalisées",
  "Installation clé en main",
  "Réservez votre date",
  "Soumission en 24 h",
  "Montréal, Laval, Laurentides",
  "Note Google 4,8/5",
  "Plus de 1 000 événements",
  "Un photobooth élégant",
  "Accessoire bonus offert",
 ],
 d_fr=[
  "Photobooth Signature 650 $, Prestige 825 $, Iconic 1 095 $ ou Legend 1 495 $.",
  "Impressions à vos noms et à votre date : un souvenir élégant pour chacun de vos invités.",
  "Les samedis d'été partent vite. Vérifiez la disponibilité de votre date dès aujourd'hui.",
  "Livraison et installation par notre équipe à Montréal, Laval, Rive-Nord et Laurentides.",
 ],
 h_en=[
  "Wedding Photo Booth",
  "Elegant photo booth rental",
  "Packages $650 to $1,495",
  "Signature package $650",
  "Prestige package $825",
  "Keepsakes for your guests",
  "Custom wedding prints",
  "Turnkey installation",
  "Check your date",
  "Quote within 24 hours",
  "Montréal, Laval, Laurentians",
  "Rated 4.8/5 on Google",
  "1,000+ events delivered",
  "Premium event rentals",
  "Bonus add-on available",
 ],
 d_en=[
  "Photo booth packages: Signature $650, Prestige $825, Iconic $1,095, Legend $1,495.",
  "Prints with your names and date: an elegant keepsake for every one of your guests.",
  "Summer Saturdays book up fast. Check availability for your wedding date today.",
  "Delivered and installed by our crew in Montréal, Laval, North Shore and Laurentians.",
 ],
))

# ---------------------------------------------------------------- 7
AG.append(dict(
 name="Brand Évenox",
 url="evenox.ca/",
 path_fr=("location", "evenements"), path_en=("rentals", "events"),
 pins_fr={1: "H1 'Évenox | Site officiel' pin en position 1 (protection de marque)"},
 h_fr=[
  "Évenox | Site officiel",
  "Évenox location événementielle",
  "Location clé en main",
  "Lettres lumineuses 4 pi",
  "Photobooth et borne photo",
  "Mobilier lounge et cocktail",
  "Note Google 4,8/5",
  "Plus de 1 000 événements",
  "Soumission en 24 h",
  "Réservation en ligne 24/7",
  "Mariages et entreprises",
  "Montréal, Laval, Rive-Nord",
  "Basés à Sainte-Thérèse",
  "Service premium sans tracas",
  "Réservez votre date",
 ],
 d_fr=[
  "Location événementielle haut de gamme : lettres lumineuses, photobooth et mobilier.",
  "Plus de 1 000 événements depuis 2022, note Google de 4,8/5. Soumission en 24 h.",
  "Livraison, installation et reprise par notre équipe. Réservation en ligne en tout temps.",
  "Montréal, Laval, Rive-Nord, Laurentides, Québec et Lévis. Mariages et entreprises.",
 ],
 h_en=[
  "Évenox | Official Site",
  "Évenox Event Rentals",
  "Turnkey event rentals",
  "4-ft Marquee Letters",
  "Photo booth rentals",
  "Lounge and cocktail furniture",
  "Rated 4.8/5 on Google",
  "1,000+ events delivered",
  "Quote within 24 hours",
  "Book online 24/7",
  "Weddings and corporate",
  "Montréal, Laval, North Shore",
  "Based in Sainte-Thérèse",
  "Premium, stress-free service",
  "Reserve your date",
 ],
 d_en=[
  "Premium event rentals: marquee letters, photo booths and lounge furniture.",
  "1,000+ events since 2022 and a 4.8/5 Google rating. Quote within 24 hours.",
  "Delivery, setup and pickup by our crew. Book online anytime, day or night.",
  "Montréal, Laval, North Shore, Laurentians, Québec City and Lévis.",
 ],
))

# ------------------------------------------------ account / campaign assets
SITELINKS_FR = [
 ("Lettres lumineuses 4 pi", "Initiales, logo, LOVE, chiffres", "Livrées et installées"),
 ("Forfaits photobooth", "Signature, Prestige, Iconic", "Legend : 650 $ à 1 495 $"),
 ("Mobilier lounge et gala", "Lounge 850 $, gala 2 900 $", "Cocktail 1 100 $ à 1 400 $"),
 ("Événements d'entreprise", "Galas, lancements, congrès", "Fêtes de fin d'année"),
 ("Mariages", "Décor, photobooth, lettres", "Réservez votre date"),
 ("Réalisations", "Plus de 1 000 événements", "Voyez nos décors en photos"),
 ("Demander une soumission", "Réponse en moins de 24 h", "Conseiller dédié"),
 ("Zones desservies", "Montréal, Laval, Rive-Nord", "Laurentides, Québec, Lévis"),
]
SITELINKS_EN = [
 ("4-ft Marquee Letters", "Initials, logos, LOVE, numbers", "Delivered and installed"),
 ("Photo Booth Packages", "Signature, Prestige, Iconic", "Legend: $650 to $1,495"),
 ("Lounge and Gala Furniture", "Lounge $850, gala $2,900", "Cocktail $1,100 to $1,400"),
 ("Corporate Events", "Galas, launches, conferences", "Holiday parties"),
 ("Weddings", "Decor, photo booth, letters", "Reserve your date"),
 ("Our Work", "1,000+ events delivered", "See our setups in photos"),
 ("Request a Quote", "Reply within 24 hours", "Dedicated event advisor"),
 ("Service Areas", "Montréal, Laval, North Shore", "Laurentians, Québec, Lévis"),
]
CALLOUTS_FR = [
 "Installation clé en main", "Soumission en 24 h", "Note Google 4,8/5",
 "Plus de 1 000 événements", "Conseiller dédié", "Réservation en ligne 24/7",
 "Surclassement offert", "Livraison aux forfaits",
]
CALLOUTS_EN = [
 "Turnkey installation", "Quote within 24 hours", "Rated 4.8/5 on Google",
 "1,000+ events delivered", "Dedicated event advisor", "Book online 24/7",
 "Free upgrade available", "Delivery with packages",
]
SNIPPETS_FR = {
 "Types (Types)": ["Lettres lumineuses", "Photobooth", "Mobilier lounge", "Mobilier cocktail", "Décor de gala", "Chapiteaux"],
 "Catalogue de services (Service catalog)": ["Livraison", "Installation", "Démontage", "Préposé photobooth", "Conception de décor", "Conseiller dédié"],
 "Styles (Styles)": ["Corporatif", "Mariage", "Gala", "Cocktail dînatoire", "Fêtes de fin d'année"],
}
SNIPPETS_EN = {
 "Types": ["Marquee letters", "Photo booths", "Lounge furniture", "Cocktail furniture", "Gala decor", "Tents"],
 "Service catalog": ["Delivery", "Installation", "Teardown", "Booth attendant", "Decor design", "Dedicated advisor"],
 "Styles": ["Corporate", "Wedding", "Gala", "Cocktail reception", "Holiday party"],
}
# price assets: (header, description, price, unit) ; qualifier = AUCUN (no "From")
PRICE_FR = {
 "Photobooth - type: Niveaux de service": [
  ("Photobooth Signature", "Forfait d'entrée de gamme", "650 $", ""),
  ("Photobooth Prestige", "Impressions sur mesure", "825 $", ""),
  ("Photobooth Iconic", "Expérience améliorée", "1 095 $", ""),
  ("Photobooth Legend", "Notre forfait complet", "1 495 $", ""),
 ],
 "Mobilier - type: Niveaux de service": [
  ("Forfait lounge", "Salon lounge clé en main", "850 $", ""),
  ("Forfait cocktail", "Tables hautes et lounge", "1 100 $", ""),
  ("Forfait cocktail plus", "Version bonifiée", "1 400 $", ""),
  ("Forfait gala", "Décor de gala complet", "2 900 $", ""),
 ],
}
PRICE_EN = {
 "Photo booth - type: Service tiers": [
  ("Signature Photo Booth", "Essential package", "$650", ""),
  ("Prestige Photo Booth", "Custom prints", "$825", ""),
  ("Iconic Photo Booth", "Enhanced experience", "$1,095", ""),
  ("Legend Photo Booth", "Our most complete package", "$1,495", ""),
 ],
 "Furniture - type: Service tiers": [
  ("Lounge Package", "Turnkey lounge setup", "$850", ""),
  ("Cocktail Package", "High tops and lounge", "$1,100", ""),
  ("Cocktail Plus Package", "Upgraded version", "$1,400", ""),
  ("Gala Package", "Complete gala decor", "$2,900", ""),
 ],
}

# ----------------------------------------------------------- render
out = []
P = out.append

def table_h(title, items, kind, prefix):
    P(f"\n**{title}**\n")
    P("| # | Texte | Car. |")
    P("|---|---|---|")
    for i, s in enumerate(items, 1):
        n = chk(kind, s, f"{prefix}#{i}")
        P(f"| {i} | {s} | {n}/{LIM[kind]} |")

for g in AG:
    assert len(g["h_fr"]) == 15 and len(g["h_en"]) == 15, g["name"]
    assert len(g["d_fr"]) == 4 and len(g["d_en"]) == 4, g["name"]
    if len(set(g["h_fr"])) != 15 or len(set(g["h_en"])) != 15:
        errors.append(f"{g['name']}: duplicate headline")
    P(f"\n### Groupe d'annonces : {g['name']}\n")
    P(f"- URL finale : {g['url']}")
    for p in g["path_fr"] + g["path_en"]:
        chk("path", p, g["name"] + " path")
    P(f"- Chemins FR : /{g['path_fr'][0]}/{g['path_fr'][1]}  |  Chemins EN : /{g['path_en'][0]}/{g['path_en'][1]}")
    for k, v in g["pins_fr"].items():
        P(f"- Pinning suggéré : {v} (tout le reste non épinglé)")
    table_h("Titres FR (Québec) - 15", g["h_fr"], "h", g["name"] + " H-FR")
    table_h("Descriptions FR - 4", g["d_fr"], "d", g["name"] + " D-FR")
    table_h("Headlines EN (corporate Montréal) - 15", g["h_en"], "h", g["name"] + " H-EN")
    table_h("Descriptions EN - 4", g["d_en"], "d", g["name"] + " D-EN")

P("\n### Liens annexes (sitelinks) - compte/campagne\n")
for lab, data in (("FR", SITELINKS_FR), ("EN", SITELINKS_EN)):
    P(f"\n**Sitelinks {lab}** (texte <=25, lignes de description <=35)\n")
    P("| # | Texte | Car. | Description 1 | Car. | Description 2 | Car. |")
    P("|---|---|---|---|---|---|---|")
    for i, (t, d1, d2) in enumerate(data, 1):
        a = chk("sl", t, f"SL-{lab}#{i}"); b = chk("sld", d1, f"SL-{lab}#{i}d1"); c = chk("sld", d2, f"SL-{lab}#{i}d2")
        P(f"| {i} | {t} | {a} | {d1} | {b} | {d2} | {c} |")

for lab, data in (("FR", CALLOUTS_FR), ("EN", CALLOUTS_EN)):
    table_h(f"Accroches (callouts) {lab} - 8 (<=25)", data, "co", f"CO-{lab}")

for lab, data in (("FR", SNIPPETS_FR), ("EN", SNIPPETS_EN)):
    P(f"\n**Extraits structurés {lab}** (valeur <=25, min. 3, idéal 4+)\n")
    for hdr, vals in data.items():
        for v in vals:
            chk("ss", v, f"SS-{lab}-{hdr}")
        P(f"- En-tête **{hdr}** : " + " ; ".join(f"{v} ({len(v)})" for v in vals))

for lab, data in (("FR", PRICE_FR), ("EN", PRICE_EN)):
    P(f"\n**Composants Prix {lab}** (en-tête <=25, description <=25, qualificatif : AUCUN - ne pas choisir « À partir de »/« From »)\n")
    for grp, rows in data.items():
        P(f"\n*{grp}*\n")
        P("| En-tête | Car. | Description | Car. | Prix |")
        P("|---|---|---|---|---|")
        for (h, d, pr, u) in rows:
            a = chk("ph", h, f"PR-{lab}"); b = chk("pd", d, f"PR-{lab}")
            P(f"| {h} | {a} | {d} | {b} | {pr} |")

print("\n".join(out))
if errors:
    sys.stderr.write("ERRORS:\n" + "\n".join(errors) + "\n")
    sys.exit(1)
sys.stderr.write("ALL LIMITS OK\n")
