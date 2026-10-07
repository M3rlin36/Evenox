# -*- coding: utf-8 -*-
"""Campagne saisonnière « Chapiteaux » printemps 2027 — fichiers Google Ads Editor.

Usage : python3 -I build_chapiteaux_2027.py
Sortie : ../google-ads-editor-printemps-2027/*.csv  (même format que
build_google_ads.py : UTF-16 avec BOM, séparateur tabulation, mêmes en-têtes,
0_import_complet.csv = tout en un fichier). Script autonome : ne modifie pas
build_google_ads.py ni ../google-ads-editor/.

Préparé le 7 oct. 2026 pour un import début mars 2027 (voir
../CHAPITEAUX-PRINTEMPS-2027.md). Prix, capacités, livraison et montage relevés
le 7 oct. 2026 sur https://evenox.ca/chapiteaux-structures-evenementielles/ et
https://evenox.ca/faq/. AVANT L'IMPORT : revérifier la grille sur le site et
corriger GRILLE / PRIX ci-dessous si elle a changé, puis relancer.
Tout est importé EN PAUSE.
"""
import csv
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "google-ads-editor-printemps-2027")
os.makedirs(OUT, exist_ok=True)

# ---------------------------------------------------------------- CONFIG
# Grille relevée sur le site le 7 oct. 2026 (format: (capacité assis, prix $)).
GRILLE = {
    "10x10": (10, 300), "10x15": (15, 350), "10x20": (20, 400), "15x15": (20, 400),
    "15x20": (30, 450), "20x20": (40, 500), "15x30": (50, 650), "20x30": (60, 700),
    "20x40": (80, 800), "30x30": (90, 1000),
}
FORFAITS = {"Élégant": (40, 712), "Majestueux": (80, 1224)}  # montage inclus
# Montants autorisés dans les annonces : grille + forfaits + options/livraison du site
# (murs 50 $, montage 50 $/h, livraison 100 $ + 7 $/km, extincteur 25/35 $,
# chauffe-terrasse 100/120 $, son 120 $, bar DEL 150 $, BBQ 160 $, chaises, tables).
MONTANTS_SITE = ({p for _, p in GRILLE.values()} | {p for _, p in FORFAITS.values()}
                 | {50, 100, 7, 10, 25, 35, 120, 150, 160, 2, 3, 4, 5, 8, 15})

# Si les prix du site changent : "ancien texte": "nouveau texte", puis relancer
# (mettre aussi GRILLE / FORFAITS à jour). Les plus longs passent en premier.
PRIX = {
}

URL = {
    "chapiteaux": "https://evenox.ca/chapiteaux-structures-evenementielles/",
    "tables": "https://evenox.ca/location-tables-chaises/",
    "mariage": "https://evenox.ca/mariage/",
    "faq": "https://evenox.ca/faq/",
    "contact": "https://evenox.ca/contact/",
    "apropos": "https://evenox.ca/a-propos/",
}

C_CHAP = "S-FR | Chapiteaux (printemps 2027)"
CAMPAGNES = {C_CHAP: dict(budget=40, cpc="3.00")}

LIMITS = dict(h=30, d=90, path=15, sl=25, sld=35, co=25)


def px(texte):
    for ancien in sorted(PRIX, key=len, reverse=True):
        texte = texte.replace(ancien, PRIX[ancien])
    return texte


# ---------------------------------------------------------------- COPIES
# Le montage est en extra (50 $/h/employé) SAUF dans les forfaits Élégant et
# Majestueux : ne jamais écrire « installation incluse » seul.
LIV_D = "Livraison 100 $ pour les 10 premiers km depuis Sainte-Thérèse, puis 7 $/km à 40 km."

GENERIQUE = dict(
    h=["Location de chapiteau", "Chapiteaux 10x10 à 30x30", "Marquise 10x10 : 300 $",
       "Marquise 20x20 : 500 $", "Marquise 20x40 : 800 $", "Forfait Élégant 712 $",
       "Majestueux 1 224 $, 80 invités", "Monté par notre équipe",
       "Laval, Montréal, Rive-Nord", "Réponse en 24 heures",
       "Prix affiché pour 10 formats", "Entrepôt à Sainte-Thérèse",
       "Ajoutez tables et chaises", "Réservez votre chapiteau", "Murs en option : 50 $"],
    d=["10 formats de marquise, de la 10x10 à 300 $ à la 30x30 à 1 000 $. Prix affichés en ligne.",
       "Forfait Élégant 712 $ (40 invités) ou Majestueux 1 224 $ (80) : mobilier et montage.",
       LIV_D,
       "Montage par notre équipe, 50 $ l'heure par employé. Inclus dans nos deux forfaits."],
    path=("chapiteaux", "location"), pins={0: 1},
)
MARIAGE = dict(
    h=["Chapiteau pour mariage", "Location tente mariage", "Majestueux 1 224 $, 80 invités",
       "Forfait Élégant 712 $", "Tables, chaises et nappes", "Montage inclus aux forfaits",
       "Marquise 20x40 : 800 $", "Mariage dans la cour", "Chaises Chiavari en option",
       "Guirlande lumineuse 50 $", "Laval, Montréal, Rive-Nord", "Réponse en 24 heures",
       "Réservez votre date", "Saison des mariages 2027", "Murs en option : 50 $"],
    d=["Majestueux 1 224 $ : marquise 20x40, 80 chaises, 10 tables 8 pi, nappes, montage inclus.",
       "Élégant 712 $ pour 40 invités : marquise 20x20, chaises, tables, nappes et montage.",
       "Chaises Chiavari, guirlandes lumineuses, plancher et chauffage en option, un seul prix.",
       LIV_D],
    path=("chapiteau", "mariage"), pins={0: 1},
)
TAILLE = dict(
    h=["Chapiteau 10x10 : 300 $", "Chapiteau 10x20 : 400 $", "Chapiteau 20x20 : 500 $",
       "Chapiteau 20x30 : 700 $", "Chapiteau 20x40 : 800 $", "Chapiteau 30x30 : 1 000 $",
       "Chapiteau 15x30 : 650 $", "10 formats de marquise", "De 10 à 90 invités assis",
       "Montage de 30 min à 2 h 30", "Trouvez le bon format", "Prix affiché pour 10 formats",
       "Monté par notre équipe", "Laval, Montréal, Rive-Nord", "Réponse en 24 heures"],
    d=["10x10 300 $, 10x20 400 $, 20x20 500 $, 20x30 700 $, 20x40 800 $, 30x30 1 000 $.",
       "Assis à table : 20x20 pour 40 personnes, 20x40 pour 80. Debout, il en entre davantage.",
       "Entrez votre nombre d'invités : le configurateur propose le format et affiche le prix.",
       LIV_D],
    path=("chapiteau", "formats"), pins={},
)
FETE = dict(
    h=["Chapiteau pour fête", "Tente de réception à louer", "Fête de famille dans la cour",
       "5 à 7 sous chapiteau", "Marquise 15x20 : 450 $", "Marquise 20x20 : 500 $",
       "Forfait Élégant 712 $", "Chauffe-terrasse en option", "Son Bluetooth en option",
       "BBQ en option : 160 $", "Monté par notre équipe", "Laval, Montréal, Rive-Nord",
       "Réponse en 24 heures", "Réservez votre chapiteau", "Événement de quartier"],
    d=["Fête de famille, 5 à 7, fête de quartier : marquise de 300 $ à 1 000 $, montée sur place.",
       "Chauffe-terrasse, guirlandes, plancher, son et BBQ en option : un seul prix pour tout.",
       "Forfait Élégant 712 $ : marquise 20x20, 40 chaises, 5 tables, nappes et montage inclus.",
       LIV_D],
    path=("chapiteau", "fete"), pins={0: 1},
)
VILLES = dict(
    h=["Location chapiteau Laval", "Chapiteau à louer Rive-Nord",
       "Location chapiteau Montréal", "Blainville et Boisbriand", "Entrepôt à Sainte-Thérèse",
       "100 $ les 10 premiers km", "7 $/km de 10 à 40 km", "Tout Laval est desservi",
       "Marquise 10x10 : 300 $", "Marquise 20x20 : 500 $", "Forfait Élégant 712 $",
       "Majestueux 1 224 $, 80 invités", "Monté par notre équipe", "Réponse en 24 heures",
       "Réservez votre chapiteau"],
    d=["Sainte-Thérèse, Rosemère, Boisbriand et Blainville : moins de 10 km, livraison 100 $.",
       "Laval, Saint-Eustache, Mirabel, Terrebonne : 100 $ les 10 premiers km, puis 7 $/km.",
       "Marquises de 10x10 à 30x30, de 300 $ à 1 000 $. Montage par notre équipe en extra.",
       "Forfait Élégant 712 $ ou Majestueux 1 224 $ : chapiteau, tables, chaises et montage."],
    path=("chapiteau", "laval"), pins={},
)

# ---------------------------------------------------------------- KEYWORDS
def P(*k): return [(x, "Phrase") for x in k]
def E(*k): return [(x, "Exact") for x in k]

STRUCTURE = [
  dict(campaign=C_CHAP, adgroup="Location chapiteau générique", url=URL["chapiteaux"],
       copy=GENERIQUE,
       kw=P("location chapiteau", "location de chapiteau", "chapiteau à louer",
            "location tente réception", "location tente événement",
            "location tente événementielle", "location chapiteau installation",
            "prix location chapiteau", "location marquise", "location chapiteau extérieur",
            "louer un chapiteau", "louer une tente")
          + E("location chapiteau", "location de chapiteau", "chapiteau à louer",
              "location tente réception", "prix location chapiteau")),
  dict(campaign=C_CHAP, adgroup="Chapiteau mariage", url=URL["chapiteaux"], copy=MARIAGE,
       kw=P("chapiteau mariage", "location chapiteau mariage", "location tente mariage",
            "tente de mariage", "tente mariage", "chapiteau pour mariage",
            "tente réception mariage", "location tente mariage prix",
            "chapiteau mariage extérieur")
          + E("location chapiteau mariage", "location tente mariage", "chapiteau mariage")),
  dict(campaign=C_CHAP, adgroup="Chapiteau par taille (10x10 à 30x30)", url=URL["chapiteaux"],
       copy=TAILLE,
       kw=P("location chapiteau 10x10", "location chapiteau 10x20", "location chapiteau 15x15",
            "location chapiteau 20x20", "location chapiteau 20x30", "location chapiteau 20x40",
            "location chapiteau 30x30", "location tente 10x20", "location tente 20x20",
            "location tente 20x40", "chapiteau 20x20", "chapiteau 20x40",
            "chapiteau 50 personnes", "chapiteau 80 personnes", "chapiteau pour 50 personnes",
            "chapiteau 40 personnes")
          + E("location chapiteau 20x20", "location chapiteau 20x40",
              "location chapiteau 10x10", "location chapiteau 10x20")),
  dict(campaign=C_CHAP, adgroup="Chapiteau fête et réception", url=URL["chapiteaux"],
       copy=FETE,
       kw=P("chapiteau fête", "location chapiteau fête", "tente pour fête extérieure",
            "location tente fête", "chapiteau anniversaire", "location chapiteau anniversaire",
            "chapiteau party", "location tente party", "chapiteau fête de famille",
            "location chapiteau réception", "chapiteau pour réception",
            "chapiteau fête de quartier", "chapiteau graduation")
          + E("location chapiteau fête", "location tente fête", "location chapiteau réception")),
  dict(campaign=C_CHAP, adgroup="Chapiteau par ville (Laval, Rive-Nord, Montréal)",
       url=URL["chapiteaux"], copy=VILLES,
       kw=P("location chapiteau laval", "location chapiteau montréal",
            "location chapiteau rive-nord", "location chapiteau rive nord",
            "location chapiteau blainville", "location chapiteau sainte-thérèse",
            "location chapiteau boisbriand", "location chapiteau rosemère",
            "location chapiteau saint-eustache", "location chapiteau mirabel",
            "location chapiteau terrebonne", "location chapiteau saint-jérôme",
            "location tente laval", "location tente montréal", "location tente rive-nord",
            "chapiteau à louer laval", "chapiteau à louer montréal")
          + E("location chapiteau laval", "location chapiteau montréal",
              "location chapiteau rive-nord", "location tente laval",
              "location chapiteau blainville")),
]

# ---------------------------------------------------------------- NÉGATIFS
# Liste du compte (même idée que build_google_ads.py, recopiée pour que ce
# script reste autonome) + négatifs propres aux chapiteaux.
NEG_COMPTE = [
  "emploi", "emplois", "offre d'emploi", "carrière", "embauche", "salaire", "stage",
  "job d'été", "temps partiel", "recrutement", "job", "jobs", "hiring", "career",
  "pas cher", "pas chère", "moins cher", "bon marché", "aubaine", "rabais", "solde",
  "code promo", "coupon", "gratuit", "gratuite", "liquidation", "prix de gros",
  "cheap", "cheapest", "free", "discount", "groupon",
  "à vendre", "acheter", "achat", "usagé", "usagée", "d'occasion", "seconde main",
  "kijiji", "marketplace", "lespac", "amazon", "walmart", "costco", "canadian tire",
  "ikea", "dollarama", "fabricant", "grossiste", "for sale", "buy", "used", "wholesale",
  "diy", "faire soi-même", "fait maison", "comment faire", "comment monter",
  "bricolage", "tutoriel", "pinterest", "modèle", "gabarit", "à imprimer",
  "c'est quoi", "définition", "wikipedia", "cours", "formation", "pdf", "youtube",
  "how to", "template", "printable",
  "jeux gonflables", "jeu gonflable", "château gonflable", "structure gonflable",
  "bouncy castle", "bounce house", "costume", "déguisement", "robe", "limousine",
  "location auto", "camion", "outil", "échafaudage", "tente de camping", "camping",
  "location de salle", "salle à louer", "chaise de bureau", "passeport",
  "application", "app", "apps", "logiciel", "photographe",
  "télécharger", "download",
  "france", "paris", "mayenne", "laval france",
]
NEG_CHAPITEAU = [
  # Abris d'auto / garage
  "abri d'auto", "abri d'autos", "abris d'auto", "abri tempo", "abris tempo", "tempo",
  "carport", "abri de garage", "garage temporaire", "abri d'hiver", "abri hiver",
  "toile de remplacement", "toile d'abri", "pièces", "réparation",
  # Camping / plein air / cirque
  "tente roulotte", "tente-roulotte", "roulotte", "tente prospecteur", "tente dôme",
  "tente de toit", "tente de plage", "abri soleil", "pêche", "chasse", "sépaq",
  "cirque", "école de cirque", "trampoline", "tente gonflable",
  # Détaillants / achat
  "rona", "home depot", "réno-dépôt", "princess auto", "sail", "latulippe",
  "decathlon", "bureau en gros", "fabrication", "prix d'achat", "neuf", "neuve",
  # Hors zone de livraison
  "ottawa", "trois-rivières", "sherbrooke", "gatineau", "ville de québec",
  "québec city", "quebec city", "lévis", "levis", "saguenay", "drummondville",
  "granby", "saint-hyacinthe", "rimouski", "mont-tremblant", "tremblant",
  # Marque (campagne Marque séparée)
  "evenox", "évenox",
]
NEG = {C_CHAP: NEG_COMPTE + NEG_CHAPITEAU}

# ---------------------------------------------------------------- ÉLÉMENTS
# Une page différente par lien, et jamais la page de destination des annonces.
SITELINKS = [
    ("Tables et chaises", "Livrées et ramassées", "Placées selon votre plan de salle",
     URL["tables"]),
    ("Mariages", "Chapiteau, mobilier, décor", "Réservez votre date", URL["mariage"]),
    ("Questions fréquentes", "Format selon vos invités", "Livraison, montage, météo",
     URL["faq"]),
    ("Demander une soumission", "Réponse en 24 heures", "Sans engagement", URL["contact"]),
    ("À propos d'Évenox", "Entreprise de Sainte-Thérèse", "Livré et monté par notre équipe",
     URL["apropos"]),
]
CALLOUTS = ["Monté par notre équipe", "Réponse en 24 heures", "Prix affichés en ligne",
            "10 formats de marquise", "Murs en option : 50 $", "Montage inclus (forfaits)",
            "Entrepôt à Sainte-Thérèse", "Sans engagement"]

# ---------------------------------------------------------------- BUILD
errors = []
BANNED = re.compile(r"%|à partir de|starting at|\bfrom \$|dès\s*\d|\bdès\b", re.I)
MONTANT = re.compile(r"(?<![\dx])(\d{1,3}(?: \d{3})?) \$")

for _s in STRUCTURE:
    c = _s["copy"]
    _s["copy"] = dict(c, h=[px(x) for x in c["h"]], d=[px(x) for x in c["d"]])


def check_text(where, s):
    if BANNED.search(s):
        errors.append(f"{where}: règle de marque violée : {s}")
    if re.search(r"\b[A-ZÀ-Ý]{4,}\b", s):
        errors.append(f"{where}: majuscules excessives : {s}")
    for m in MONTANT.findall(s):
        if int(m.replace(" ", "")) not in MONTANTS_SITE:
            errors.append(f"{where}: montant absent de la grille du site ({m} $) : {s}")
    # Le montage n'est inclus que dans les forfaits Élégant / Majestueux.
    if re.search(r"(installation|montage)[^.]*inclus|inclus[^.]*(installation|montage)", s, re.I) \
            and not re.search(r"forfait|Élégant|Majestueux", s):
        errors.append(f"{where}: « montage inclus » hors forfait : {s}")


def check_copy(where, c):
    if len(c["h"]) != 15 or len(set(c["h"])) != 15:
        errors.append(f"{where}: 15 titres uniques requis")
    if len(c["d"]) != 4 or len(set(c["d"])) != 4:
        errors.append(f"{where}: 4 descriptions uniques requises")
    for s in c["h"]:
        if len(s) > LIMITS["h"]:
            errors.append(f"{where}: titre trop long ({len(s)}) {s}")
    for s in c["d"]:
        if len(s) > LIMITS["d"]:
            errors.append(f"{where}: description trop longue ({len(s)}) {s}")
    for s in c["path"]:
        if len(s) > LIMITS["path"]:
            errors.append(f"{where}: chemin trop long {s}")
    for s in c["h"] + c["d"]:
        check_text(where, s)
    for i in c["pins"]:
        if i >= len(c["h"]):
            errors.append(f"{where}: épinglage hors limites")


def write(name, header, rows):
    path = os.path.join(OUT, name)
    with open(path, "w", newline="", encoding="utf-16") as f:
        w = csv.writer(f, delimiter="\t")
        w.writerow(header)
        w.writerows(rows)
    return path


campaigns = [[c, "Search", "Google Search", f"{cfg['budget']:.2f}", "Maximize clicks",
              cfg["cpc"], "Paused"] for c, cfg in CAMPAGNES.items()]
H_CAMP = ["Campaign", "Campaign Type", "Networks", "Campaign Daily Budget",
          "Bid Strategy Type", "Maximum CPC bid limit", "Campaign Status"]
write("1_campagnes.csv", H_CAMP, campaigns)

adgroups, keywords, ads = [], [], []
seen_kw = {}
for s in STRUCTURE:
    check_copy(s["adgroup"], s["copy"])
    adgroups.append([s["campaign"], s["adgroup"], "Enabled"])
    for kw, mt in s["kw"]:
        if len(kw) > 80 or len(kw.split()) > 10:
            errors.append(f"Mot-clé trop long : {kw}")
        key = (s["campaign"], kw.lower(), mt)
        if key in seen_kw:
            errors.append(f"Mot-clé en double : « {kw} » [{mt}] ({seen_kw[key]} / {s['adgroup']})")
        seen_kw[key] = s["adgroup"]
        keywords.append([s["campaign"], s["adgroup"], kw, mt, "Enabled"])
    row = [s["campaign"], s["adgroup"], s["url"], s["copy"]["path"][0], s["copy"]["path"][1]]
    for i in range(15):
        row += [s["copy"]["h"][i], str(s["copy"]["pins"].get(i, ""))]
    row += s["copy"]["d"] + ["Enabled"]
    ads.append(row)

H_AG = ["Campaign", "Ad Group", "Ad Group Status"]
H_KW = ["Campaign", "Ad Group", "Keyword", "Criterion Type", "Status"]
write("2_groupes_annonces.csv", H_AG, adgroups)
write("3_mots_cles.csv", H_KW, keywords)
hdr = ["Campaign", "Ad Group", "Final URL", "Path 1", "Path 2"]
for i in range(1, 16):
    hdr += [f"Headline {i}", f"Headline {i} position"]
hdr += [f"Description {i}" for i in range(1, 5)] + ["Status"]
write("4_annonces_rsa.csv", hdr, ads)

negs = []
for c, lst in NEG.items():
    if len({n.lower() for n in lst}) != len(lst):
        errors.append(f"{c}: négatif en double")
    negs += [[c, k, "Campaign Negative Phrase"] for k in lst]
H_NEG = ["Campaign", "Keyword", "Criterion Type"]
write("5_mots_cles_negatifs.csv", H_NEG, negs)

# Aucun négatif (expression) ne doit bloquer un mot-clé de sa campagne.
for c, ag, kw, mt, _ in keywords:
    toks = kw.lower().split()
    for n in NEG[c]:
        nt = n.lower().split()
        if any(toks[i:i + len(nt)] == nt for i in range(len(toks) - len(nt) + 1)):
            errors.append(f"Conflit : « {n} » bloque « {kw} » ({c} / {ag})")

sl = []
for c in CAMPAGNES:
    for t, d1, d2, u in SITELINKS:
        t, d1, d2 = px(t), px(d1), px(d2)
        if len(t) > LIMITS["sl"] or max(len(d1), len(d2)) > LIMITS["sld"]:
            errors.append(f"{c}: lien annexe trop long : {t} / {d1} / {d2}")
        for x in (t, d1, d2):
            check_text("Lien annexe", x)
        sl.append([c, t, d1, d2, u])
urls = [x[3] for x in SITELINKS]
if len(set(urls)) != len(urls):
    errors.append("Liens annexes : URL en double")
if any(u in {s["url"] for s in STRUCTURE} for u in urls):
    errors.append("Liens annexes : URL identique à la page de destination")
H_SL = ["Campaign", "Link Text", "Description Line 1", "Description Line 2", "Final URL"]
write("6_liens_annexes.csv", H_SL, sl)
co = []
for c in CAMPAGNES:
    for t in CALLOUTS:
        t = px(t)
        if len(t) > LIMITS["co"]:
            errors.append(f"{c}: accroche trop longue : {t}")
        check_text("Accroche", t)
        co.append([c, t])
if len(set(CALLOUTS)) != len(CALLOUTS):
    errors.append("Accroches en double")
H_CO = ["Campaign", "Callout text"]
write("7_accroches.csv", H_CO, co)

ALIAS = {"Description Line 1": "Description 1", "Description Line 2": "Description 2"}
H_SL_ALL = [ALIAS.get(x, x) for x in H_SL]
ALL = []
for h in (H_CAMP, H_AG, H_KW, hdr, H_NEG, H_SL_ALL, H_CO):
    ALL += [x for x in h if x not in ALL]
combined = []
for h, rows in ((H_CAMP, campaigns), (H_AG, adgroups), (H_KW, keywords), (hdr, ads),
                (H_NEG, negs), (H_SL_ALL, sl), (H_CO, co)):
    for r in rows:
        d = dict(zip(h, r))
        combined.append([d.get(x, "") for x in ALL])
write("0_import_complet.csv", ALL, combined)

print(f"Campagnes : {len(campaigns)} | Groupes : {len(adgroups)} | Mots-clés : "
      f"{len(keywords)} | Annonces : {len(ads)} | Négatifs : {len(negs)} | "
      f"Liens annexes : {len(sl)} | Accroches : {len(co)}")
print(f"Budget : {CAMPAGNES[C_CHAP]['budget']:.2f} $/jour, CPC max {CAMPAGNES[C_CHAP]['cpc']} "
      f"(importé en pause)")
if errors:
    print("ERREURS :\n" + "\n".join(errors))
    sys.exit(1)
print("OK : limites, règles de marque, majuscules, montants du site, montage hors forfait, "
      "doublons, liens distincts, 0 conflit négatif/mot-clé")
