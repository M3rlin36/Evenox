# -*- coding: utf-8 -*-
"""Génère les fichiers d'import Google Ads Editor pour Évenox (300 $/jour).

Usage : python3 -I build_google_ads.py
Sortie : ../google-ads-editor/*.csv  (UTF-16 LE avec BOM, séparateur tabulation =
format « Unicode Text » recommandé par l'aide Google Ads Editor ; importables via
Google Ads Editor > Compte > Importer > À partir d'un fichier). En-têtes et valeurs
selon https://support.google.com/google-ads/editor/answer/57747 (CSV file columns).
0_import_complet.csv regroupe tout (une ligne = une entité, voir answer/56368).

Tout ce qui doit être confirmé avant lancement est dans CONFIG.
"""
import csv
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "google-ads-editor")
os.makedirs(OUT, exist_ok=True)

# Textes d'annonces vérifiés (agent créatif) : on réutilise la liste AG.
_src = open(os.path.join(HERE, "adcopy_source.py"), encoding="utf-8").read()
_src = _src.split("# ----------------------------------------------------------- render")[0]
# GRILLE DE PRIX — si la grille confirmée diffère de celle des annonces,
# inscrire ici "ancien texte": "nouveau texte" (FR et EN), puis relancer.
# Ex. : "650 $": "799 $", "$650": "$799", "650 $ à 1 495 $": "799 $ à 1 499 $"
# Les plus longs remplacements sont appliqués en premier.
PRIX = {
}


def px(texte):
    """Applique la grille PRIX à un texte."""
    for ancien in sorted(PRIX, key=len, reverse=True):
        texte = texte.replace(ancien, PRIX[ancien])
    return texte

_ns = {}
exec(_src, _ns)
AG = {g["name"]: g for g in _ns["AG"]}

# ---------------------------------------------------------------- CONFIG
# Pages de destination : URL existantes aujourd'hui. Remplacer par les pages
# dédiées dès qu'elles sont en ligne (voir PLAN, section Pages).
URL = {
    "home": "https://evenox.ca/",
    "corpo": "https://evenox.ca/nos-forfaits-tout-inclus",
    "lettres": "https://evenox.ca/lettres-lumineuses/",
    "photobooth": "https://evenox.ca/location-photobooth-montreal",
    "mobilier": "https://evenox.ca/nos-forfaits-tout-inclus",
    "mariage": "https://evenox.ca/mariage/",
    "teambuilding": "https://evenox.ca/team-building-activitecorpo",
}

BUDGET = {  # $ CAD / jour — total actif = 300
    "S-FR | Marque": 10,
    "S-FR | Corporatif & Fêtes": 165,
    "S-FR | Produits vedettes": 80,
    "S-FR | Mariage": 45,
    # Préparées en pause (budget pris sur Corporatif à l'activation)
    "S-EN | Corporate Montréal": 30,
    "S-FR | Québec-Lévis (test)": 20,
}
PAUSED = {"S-EN | Corporate Montréal", "S-FR | Québec-Lévis (test)"}

LIMITS = dict(h=30, d=90, path=15, sl=25, sld=35, co=25)

# Pas de colonne « Languages » : le ciblage linguistique n'existe plus en
# Search depuis le 30 sept. 2026 (la langue de l'annonce et de la page décide).

# Liens annexes : chaque lien doit mener à une page différente (politique
# « Sitelink asset requirements »). Même ordre que SITELINKS_FR / SITELINKS_EN.
SITELINK_URLS = [
    "https://evenox.ca/lettres-lumineuses/",           # Lettres lumineuses 4 pi
    URL["photobooth"],                                 # Forfaits photobooth
    "https://evenox.ca/nos-forfaits-tout-inclus",      # Mobilier lounge et gala
    "https://evenox.ca/team-building-activitecorpo/",  # Événements d'entreprise
    "https://evenox.ca/mariage/",                      # Mariages
    "https://evenox.ca/a-propos/",                     # Réalisations
    "https://evenox.ca/contact/",                      # Demander une soumission
    "https://evenox.ca/faq/",                          # Zones desservies (FAQ livraison)
]

# ---------------------------------------------------------------- COPIES
def copy_from(name, lang="fr"):
    g = AG[name]
    return dict(h=list(g[f"h_{lang}"]), d=list(g[f"d_{lang}"]),
                path=g[f"path_{lang}"])

LETTRES_GEN = dict(
    h=["Location lettres lumineuses", "Lettres géantes de 4 pi",
       "Votre message en lumière", "Initiales, logo, chiffres",
       "Location haut de gamme", "Installation clé en main",
       "Montréal, Laval, Rive-Nord", "Mariages et entreprises",
       "Soumission en 24 h", "Note Google 4,8/5", "Plus de 1 000 événements",
       "Livrées, montées, reprises", "Un décor qui fait parler",
       "Service premium sans tracas", "Réservez vos lettres 4 pi"],
    d=["Lettres lumineuses de 4 pi livrées et installées par notre équipe. Soumission en 24 h.",
       "Initiales, logo, LOVE ou chiffres : un décor lumineux pour mariages et galas.",
       "Montréal, Laval, Rive-Nord, Laurentides et Québec. Plus de 1 000 événements réalisés.",
       "Location haut de gamme, sans tracas. Surclassement offert selon forfait."],
    path=("lettres", "lumineuses"),
)
PHOTOBOOTH_GEN = dict(
    h=["Location photobooth", "Borne photo à louer", "Forfaits 650 $ à 1 495 $",
       "Impressions personnalisées", "Partage numérique instantané",
       "Mariages, galas, fêtes", "Installation clé en main",
       "Préposé inclus selon forfait", "Soumission en 24 h",
       "Montréal, Laval, Rive-Nord", "Note Google 4,8/5",
       "Plus de 1 000 événements", "Forfait Legend 1 495 $",
       "Un photobooth élégant", "Réservez votre photobooth"],
    d=["Photobooth Signature 650 $, Prestige 825 $, Iconic 1 095 $ ou Legend 1 495 $.",
       "Impressions personnalisées et partage numérique pour mariages, galas et fêtes.",
       "Livraison, installation et préposé inclus selon forfait. Soumission détaillée en 24 h.",
       "Montréal, Laval, Rive-Nord, Laurentides et Québec. Accessoire bonus offert selon forfait."],
    path=("photobooth", "forfaits"),
)
TEAMBUILDING = dict(
    h=["Team building clé en main", "Activités team building",
       "Jeux géants pour entreprise", "Animation selon forfait",
       "Montréal, Laval, Rive-Nord", "Livraison et installation",
       "Soumission en 24 h", "Note Google 4,8/5", "Plus de 1 000 événements",
       "Idéal pour vos 5 à 7", "Activité d'équipe sur place",
       "Facturation net 30", "Réservez votre date",
       "Service premium sans tracas", "Votre équipe, mobilisée"],
    d=["Activités team building clés en main : livraison, installation et reprise incluses.",
       "Jeux géants, photobooth et lounge pour vos 5 à 7, fêtes de bureau et journées d'équipe.",
       "Montréal, Laval, Rive-Nord et Laurentides. Facturation net 30 pour les entreprises.",
       "Plus de 1 000 événements réalisés, note Google 4,8/5. Soumission détaillée en 24 h."],
    path=("team-building", "entreprise"),
)
MOBILIER_MARIAGE = copy_from("Mobilier lounge/cocktail événement")
MOBILIER_MARIAGE["h"][7] = "Lounge pour votre mariage"
MOBILIER_MARIAGE["h"][13] = "Cocktail de mariage élégant"
MOBILIER_MARIAGE["path"] = ("mobilier", "mariage")

# Épinglage partiel : {index du titre (0-based): position}
PIN_H1 = {0: 1}
PIN_PRICE2 = {2: 2}   # 3e titre (ligne de prix) en position 2
PIN_LOUNGE = {1: 2}   # "Forfait lounge 850 $" en position 2

# ---------------------------------------------------------------- KEYWORDS
# (texte, type) ; P = expression, E = exact
def P(*k): return [(x, "Phrase") for x in k]
def E(*k): return [(x, "Exact") for x in k]

STRUCTURE = [
  # ------------------------------------------------------------ MARQUE
  dict(campaign="S-FR | Marque", adgroup="Marque Évenox", url=URL["home"],
       copy=copy_from("Brand Évenox"), pins=PIN_H1,
       kw=E("evenox", "évenox", "evenox location", "evenox sainte-thérèse",
            "evenox photobooth", "evenox lettres lumineuses")
          + P("evenox", "évenox")),
  # ------------------------------------------------------- CORPORATIF
  dict(campaign="S-FR | Corporatif & Fêtes", adgroup="Fête de Noël d'entreprise",
       url=URL["corpo"], copy=copy_from("Party de Noël corporatif"), pins=PIN_H1,
       kw=P("party de noël entreprise", "party de bureau", "party des fêtes entreprise",
            "fête de noël entreprise", "party de noël corporatif",
            "décoration party de bureau", "location party de bureau",
            "animation party de bureau", "décor party de noël",
            "réception des fêtes entreprise", "party de noël employés")
          + E("party de bureau montréal", "party de bureau laval",
              "party de noël entreprise", "décoration party de bureau")),
  dict(campaign="S-FR | Corporatif & Fêtes", adgroup="Lettres lumineuses corporatif",
       url=URL["lettres"], copy=copy_from("Lettres lumineuses corporatif"), pins=PIN_H1,
       kw=P("lettres lumineuses corporatif", "lettres lumineuses entreprise",
            "lettres lumineuses logo", "lettres géantes événement corporatif",
            "location lettres lumineuses gala", "décoration gala corporatif",
            "décor événement corporatif", "décor activation de marque",
            "décoration lancement de produit")
          + E("lettres lumineuses entreprise", "décoration gala corporatif")),
  dict(campaign="S-FR | Corporatif & Fêtes", adgroup="Photobooth corporatif",
       url=URL["photobooth"], copy=copy_from("Photobooth corporatif"), pins=PIN_PRICE2,
       kw=P("photobooth corporatif", "photobooth entreprise",
            "location photobooth événement corporatif", "photobooth party de bureau",
            "borne photo entreprise", "photobooth activation de marque",
            "photobooth gala", "photobooth party de noël")
          + E("photobooth corporatif", "photobooth entreprise")),
  dict(campaign="S-FR | Corporatif & Fêtes", adgroup="Mobilier corporatif",
       url=URL["mobilier"], copy=copy_from("Mobilier lounge/cocktail événement"),
       pins=PIN_LOUNGE,
       kw=P("location mobilier événement corporatif", "location mobilier lounge corporatif",
            "location mobilier cocktail entreprise", "location tables hautes cocktail",
            "location mobilier 5 à 7", "location mobilier gala",
            "location mobilier lancement de produit", "location mobilier congrès")
          + E("location mobilier événement corporatif")),
  dict(campaign="S-FR | Corporatif & Fêtes", adgroup="Team building",
       url=URL["teambuilding"], copy=TEAMBUILDING, pins=PIN_H1,
       kw=P("team building montréal", "team building laval", "team building rive-nord",
            "activité team building", "activité team building entreprise",
            "team building entreprise", "jeux géants team building",
            "location jeux géants corporatif", "activité 5 à 7 entreprise")
          + E("team building montréal", "team building laval")),
  # -------------------------------------------------------- PRODUITS
  dict(campaign="S-FR | Produits vedettes", adgroup="Lettres lumineuses",
       url=URL["lettres"], copy=LETTRES_GEN, pins=PIN_H1,
       kw=P("location lettres lumineuses", "lettres lumineuses à louer",
            "location lettres géantes", "location lettres géantes lumineuses",
            "location chiffres lumineux", "lettres lumineuses 4 pieds",
            "location lettres lumineuses montréal", "location lettres lumineuses laval")
          + E("location lettres lumineuses", "location lettres géantes")),
  dict(campaign="S-FR | Produits vedettes", adgroup="Photobooth",
       url=URL["photobooth"], copy=PHOTOBOOTH_GEN, pins=PIN_PRICE2,
       kw=P("location photobooth", "photobooth à louer", "location borne photo",
            "location photobooth montréal", "location photobooth laval",
            "location photobooth rive-nord", "prix location photobooth", "photobooth")
          + E("location photobooth", "location photobooth montréal",
              "location photobooth laval")),
  dict(campaign="S-FR | Produits vedettes", adgroup="Mobilier lounge et cocktail",
       url=URL["mobilier"], copy=copy_from("Mobilier lounge/cocktail événement"),
       pins=PIN_LOUNGE,
       kw=P("location mobilier événementiel", "location mobilier lounge",
            "location mobilier événement", "location mobilier cocktail",
            "location sofa événement", "location mobilier réception")
          + E("location mobilier lounge", "location mobilier événementiel")),
  # --------------------------------------------------------- MARIAGE
  dict(campaign="S-FR | Mariage", adgroup="Lettres lumineuses mariage",
       url=URL["lettres"], copy=copy_from("Lettres lumineuses mariage"), pins=PIN_H1,
       kw=P("lettres lumineuses mariage", "location lettres lumineuses mariage",
            "location lettres love", "location lettres mr et mrs",
            "initiales lumineuses mariage", "lettres géantes mariage",
            "décoration lumineuse mariage")
          + E("lettres lumineuses mariage", "location lettres love")),
  dict(campaign="S-FR | Mariage", adgroup="Photobooth mariage",
       url=URL["photobooth"], copy=copy_from("Photobooth mariage"), pins=PIN_PRICE2,
       kw=P("photobooth mariage", "location photobooth mariage", "borne photo mariage",
            "location borne photo mariage", "photobooth mariage prix")
          + E("photobooth mariage", "location photobooth mariage")),
  dict(campaign="S-FR | Mariage", adgroup="Mobilier lounge mariage",
       url=URL["mariage"], copy=MOBILIER_MARIAGE, pins=PIN_LOUNGE,
       kw=P("location mobilier lounge mariage", "location lounge mariage",
            "location mobilier mariage", "location décor lounge mariage",
            "location mobilier cocktail mariage")
          + E("location lounge mariage")),
  # ------------------------------------------- EN (PAUSE — Loi 96)
  dict(campaign="S-EN | Corporate Montréal", adgroup="Holiday party (EN)",
       url=URL["corpo"], copy=copy_from("Party de Noël corporatif", "en"), pins=PIN_H1,
       kw=P("office holiday party rentals", "corporate holiday party montreal",
            "office christmas party decor", "corporate event rentals montreal")
          + E("corporate event rentals montreal")),
  dict(campaign="S-EN | Corporate Montréal", adgroup="Marquee letters (EN)",
       url=URL["lettres"], copy=copy_from("Lettres lumineuses corporatif", "en"),
       pins=PIN_H1,
       kw=P("marquee letter rental montreal", "light up letters rental",
            "marquee letters rental", "giant light up letters rental")),
  dict(campaign="S-EN | Corporate Montréal", adgroup="Photo booth (EN)",
       url=URL["photobooth"], copy=copy_from("Photobooth corporatif", "en"),
       pins=PIN_PRICE2,
       kw=P("photo booth rental montreal", "corporate photo booth",
            "photo booth rental laval", "branded photo booth rental")),
  dict(campaign="S-EN | Corporate Montréal", adgroup="Lounge furniture (EN)",
       url=URL["mobilier"], copy=copy_from("Mobilier lounge/cocktail événement", "en"),
       pins=PIN_LOUNGE,
       kw=P("lounge furniture rental montreal", "cocktail furniture rental",
            "event furniture rental montreal", "corporate furniture rental event")),
  # ------------------------------------- QUÉBEC-LÉVIS (PAUSE — test)
  dict(campaign="S-FR | Québec-Lévis (test)", adgroup="Corporatif Québec",
       url=URL["corpo"], copy=copy_from("Party de Noël corporatif"), pins=PIN_H1,
       kw=P("party de bureau québec", "party de noël entreprise québec",
            "location photobooth québec", "location lettres lumineuses québec",
            "location mobilier événement québec", "party de bureau lévis")),
]

# ---------------------------------------------------------------- NÉGATIFS
NEG_COMPTE = [
  # Emplois
  "emploi", "emplois", "offre d'emploi", "carrière", "embauche", "salaire", "stage",
  "job d'été", "temps partiel", "recrutement", "job", "jobs", "hiring", "career",
  # Chasseurs d'aubaines
  "pas cher", "pas chère", "moins cher", "bon marché", "aubaine", "rabais", "solde",
  "code promo", "coupon", "gratuit", "gratuite", "liquidation", "prix de gros",
  "cheap", "cheapest", "free", "discount", "groupon",
  # Achat / usagé
  "à vendre", "acheter", "achat", "usagé", "usagée", "d'occasion", "seconde main",
  "kijiji", "marketplace", "lespac", "amazon", "walmart", "costco", "canadian tire",
  "ikea", "dollarama", "fabricant", "grossiste", "for sale", "buy", "used", "wholesale",
  # DIY / informationnel
  "diy", "faire soi-même", "fait maison", "comment faire", "comment monter",
  "bricolage", "tutoriel", "pinterest", "modèle", "gabarit", "à imprimer",
  "c'est quoi", "définition", "wikipedia", "cours", "formation", "pdf", "youtube",
  "how to", "template", "printable",
  # Hors offre (stratégie premium)
  "jeux gonflables", "jeu gonflable", "château gonflable", "structure gonflable",
  "bouncy castle", "bounce house", "costume", "déguisement", "robe", "limousine",
  "location auto", "camion", "outil", "échafaudage", "tente de camping", "camping",
  "location de salle", "salle à louer", "chaise de bureau", "photomaton",
  "passeport", "application", "logiciel", "photographe", "mac", "macbook",
  "télécharger", "download", "windows", "iphone",
  # Géo hors zone (France)
  "france", "paris", "mayenne", "laval france",
]
NEG_PRODUITS = ["entreprise", "corporatif", "corporate", "employés", "party de bureau",
                "mariage", "wedding", "noces", "gala"]       # → vers campagnes dédiées
NEG_CORPO = ["virtuel", "virtuelle", "en ligne", "escape", "zoom", "idées gratuites"]
NEG_HORS_QUEBEC_VILLE = ["québec", "quebec city", "lévis", "levis"]
NEG_MARQUE = ["evenox", "évenox"]

# ---------------------------------------------------------------- BUILD
for _s in STRUCTURE:
    _s["copy"] = dict(_s["copy"], h=[px(x) for x in _s["copy"]["h"]],
                      d=[px(x) for x in _s["copy"]["d"]])

errors = []

def check_copy(where, c):
    if len(c["h"]) != 15 or len(set(c["h"])) != 15:
        errors.append(f"{where}: 15 titres uniques requis")
    if len(c["d"]) != 4:
        errors.append(f"{where}: 4 descriptions requises")
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
        low = s.lower()
        if "%" in s or "à partir de" in low or re.search(r"dès\s*\d", low) or "starting at" in low:
            errors.append(f"{where}: règle de marque violée : {s}")

def write(name, header, rows):
    path = os.path.join(OUT, name)
    # UTF-16 (BOM) + tabulations : format « Unicode Text » recommandé par Google
    # (answer/56368) et identique aux exports CSV de Google Ads Editor.
    with open(path, "w", newline="", encoding="utf-16") as f:
        w = csv.writer(f, delimiter="\t")
        w.writerow(header)
        w.writerows(rows)
    return path

campaigns = []
for c, b in BUDGET.items():
    is_brand = "Marque" in c
    campaigns.append([
        c, "Search", "Google Search", f"{b:.2f}",
        "Maximize clicks" if is_brand else "Maximize conversions",
        "2.50" if is_brand else "",
        "Paused" if c in PAUSED else "Enabled",
    ])
H_CAMP = ["Campaign", "Campaign Type", "Networks", "Campaign Daily Budget",
          "Bid Strategy Type", "Maximum CPC bid limit", "Campaign Status"]
write("1_campagnes.csv", H_CAMP, campaigns)

adgroups, keywords, ads = [], [], []
for s in STRUCTURE:
    check_copy(s["adgroup"], s["copy"])
    adgroups.append([s["campaign"], s["adgroup"], "Enabled"])
    for kw, mt in s["kw"]:
        keywords.append([s["campaign"], s["adgroup"], kw, mt, "Enabled"])
    row = [s["campaign"], s["adgroup"], s["url"],
           s["copy"]["path"][0], s["copy"]["path"][1]]
    for i in range(15):
        row += [s["copy"]["h"][i], str(s["pins"].get(i, ""))]
    row += s["copy"]["d"]
    row += ["Enabled"]
    ads.append(row)

H_AG = ["Campaign", "Ad Group", "Ad Group Status"]
H_KW = ["Campaign", "Ad Group", "Keyword", "Criterion Type", "Status"]
write("2_groupes_annonces.csv", H_AG, adgroups)
write("3_mots_cles.csv", H_KW, keywords)
# Pas de colonne « Ad type » (absente de la liste officielle) : Editor reconnaît
# l'annonce responsive aux colonnes Headline 1-15 / Description 1-4.
hdr = ["Campaign", "Ad Group", "Final URL", "Path 1", "Path 2"]
for i in range(1, 16):
    hdr += [f"Headline {i}", f"Headline {i} position"]
hdr += [f"Description {i}" for i in range(1, 5)] + ["Status"]
write("4_annonces_rsa.csv", hdr, ads)

negs = []
for c in BUDGET:
    for k in NEG_COMPTE:
        negs.append([c, k, "Campaign Negative Phrase"])
    if "Marque" not in c:
        for k in NEG_MARQUE:
            negs.append([c, k, "Campaign Negative Phrase"])
    if c == "S-FR | Corporatif & Fêtes":
        for k in NEG_CORPO:
            negs.append([c, k, "Campaign Negative Phrase"])
    if c == "S-FR | Produits vedettes":
        for k in NEG_PRODUITS:
            negs.append([c, k, "Campaign Negative Phrase"])
    if "Québec-Lévis" not in c:
        for k in NEG_HORS_QUEBEC_VILLE:
            negs.append([c, k, "Campaign Negative Phrase"])
# Négatifs de campagne : type « Campaign negative » + correspondance (answer/57747)
H_NEG = ["Campaign", "Keyword", "Criterion Type"]
write("5_mots_cles_negatifs.csv", H_NEG, negs)

# Éléments (assets) : liens annexes, accroches
sl = []
for c in BUDGET:
    data = _ns["SITELINKS_EN"] if c.startswith("S-EN") else _ns["SITELINKS_FR"]
    for (t, d1, d2), u in zip(data, SITELINK_URLS):
        t, d1, d2 = px(t), px(d1), px(d2)
        if len(t) > LIMITS["sl"] or max(len(d1), len(d2)) > LIMITS["sld"]:
            errors.append(f"{c}: lien annexe trop long : {t}")
        sl.append([c, t, d1, d2, u])
if len(set(SITELINK_URLS)) != len(SITELINK_URLS):
    errors.append("Liens annexes : URL en double")
H_SL = ["Campaign", "Link Text", "Description Line 1", "Description Line 2", "Final URL"]
write("6_liens_annexes.csv", H_SL, sl)
co = []
for c in BUDGET:
    data = _ns["CALLOUTS_EN"] if c.startswith("S-EN") else _ns["CALLOUTS_FR"]
    for t in data:
        if len(t) > LIMITS["co"]:
            errors.append(f"{c}: accroche trop longue : {t}")
        co.append([c, t])
H_CO = ["Campaign", "Callout text"]
write("7_accroches.csv", H_CO, co)

# Fichier unique : chaque ligne décrit une seule entité, colonnes non pertinentes
# vides (exemple officiel mots-clés + annonces dans un même fichier, answer/56368).
# « Description Line 1/2 » est un alias de « Description 1/2 » (answer/57747) :
# dans le fichier unique, les descriptions de liens annexes vont dans ces colonnes.
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
if len(set(ALL)) != len(ALL):
    errors.append("Fichier unique : colonnes en double")

# Résumé
n_kw = len(keywords)
print(f"Campagnes : {len(campaigns)} | Groupes : {len(adgroups)} | Mots-clés : {n_kw} "
      f"| Annonces : {len(ads)} | Négatifs : {len(negs)}")
active = sum(b for c, b in BUDGET.items() if c not in PAUSED)
print(f"Budget actif : {active} $/jour")
if active != 300:
    errors.append(f"Budget actif = {active}, attendu 300")
if errors:
    print("ERREURS :\n" + "\n".join(errors))
    sys.exit(1)
print("OK : limites de caractères et règles de marque respectées")
