# -*- coding: utf-8 -*-
"""Generate Google Ads Editor CSVs for Evenox (Quebec French)."""
import csv, os

OUT = "/home/user/Evenox/campagnes/google-ads"
BASE = "https://evenox.ca"

C_CORP = "SRCH | Corporatif | FR"
C_MAR = "SRCH | Mariage & privé haut de gamme | FR"
C_BRAND = "SRCH | Marque | FR"

GREATER_MTL = [
    "Montreal,Quebec,Canada", "Laval,Quebec,Canada", "Longueuil,Quebec,Canada",
    "Terrebonne,Quebec,Canada", "Mirabel,Quebec,Canada",
    # MRC Thérèse-De Blainville
    "Sainte-Therese,Quebec,Canada", "Blainville,Quebec,Canada", "Boisbriand,Quebec,Canada",
    "Rosemere,Quebec,Canada", "Lorraine,Quebec,Canada", "Bois-des-Filion,Quebec,Canada",
    "Sainte-Anne-des-Plaines,Quebec,Canada",
    # MRC Deux-Montagnes
    "Saint-Eustache,Quebec,Canada", "Deux-Montagnes,Quebec,Canada",
    "Sainte-Marthe-sur-le-Lac,Quebec,Canada", "Pointe-Calumet,Quebec,Canada",
    "Saint-Joseph-du-Lac,Quebec,Canada", "Oka,Quebec,Canada",
    "Saint-Placide,Quebec,Canada",
]

CAMPAIGNS = [
    dict(name=C_CORP, budget="100.00", bid="Maximize conversions",
         locs=GREATER_MTL,
         note="Passer en tCPA (Target CPA) après 30 conversions sur 30 jours; tCPA initial = CPA moyen observé x 1,1"),
    dict(name=C_MAR, budget="60.00", bid="Maximize conversions",
         locs=GREATER_MTL,
         note="Passer en tCPA après 30 conversions sur 30 jours"),
    dict(name=C_BRAND, budget="10.00", bid="Maximize clicks",
         locs=["Quebec,Canada"],
         note="Plafond CPC max 2,50 $ (Maximize clicks). Couverture Québec entier"),
]

# ---------------------------------------------------------------- ad groups
CORP_COMMON_H = [
    "Forfaits corpo dès 1 195 $",
    "Livré, monté et démonté",
    "Soumission en moins de 24 h",
    "Plus de 1 000 événements",
    "Note 4,8/5 – [N] avis Google",
    "Clients : RBC, PwC, Desjardins",
    "Facturation net 30 jours",
    "Dates de décembre limitées",
    "Laval, Montréal et Rive-Nord",
    "Clé en main, de A à Z",
]
CORP_COMMON_D = [
    "Mobilier, déco, cabine photo et jeux géants livrés, installés et démontés par nos soins.",
    "Forfaits corporatifs à 1 195 $, 1 995 $ et 2 495 $. Facturation net 30 pour entreprises.",
    "Plus de 1 000 événements réalisés à Montréal, Laval et Rive-Nord. Soumission en 24 h.",
]
MAR_COMMON_H = [
    "Forfaits mariage dès 899 $",
    "Mariage Signature à 1 899 $",
    "Livré, monté et démonté",
    "Soumission en moins de 24 h",
    "Plus de 1 000 événements",
    "Note 4,8/5 – [N] avis Google",
    "Entrepôt à Sainte-Thérèse",
    "Été 2027 : dates limitées",
    "Laval, Montréal et Rive-Nord",
    "Installation et démontage",
]
MAR_COMMON_D = [
    "Livraison, installation et démontage par notre équipe. Vous profitez du moment.",
    "Forfaits déco mariage à 899 $, 1 449 $ et 1 899 $ (Signature), ou sur mesure.",
    "Plus de 1 000 événements et une note de 4,8/5 sur Google. Soumission en moins de 24 h.",
]

def kw(*terms):
    return list(terms)

AD_GROUPS = [
    # ------------------------------------------------ CORPORATIF
    dict(c=C_CORP, ag="Party des Fêtes / fête de bureau", url="/corporatif/party-des-fetes",
         p1="Corporatif", p2="Party-des-Fêtes",
         kws=kw("party des fêtes entreprise", "party de bureau", "party de noël entreprise",
                "fête de bureau", "party des fêtes clé en main", "organisation party de bureau",
                "location party de noël", "party de noël bureau laval", "party des fêtes montréal"),
         h=["Party des Fêtes clé en main", "Votre party de bureau réglé", "Fête de bureau sans stress",
            "Réservez votre party des Fêtes", "Déco, jeux et cabine photo"],
         d="Party des Fêtes livré, monté et démonté. Réservez tôt : décembre se remplit vite."),
    dict(c=C_CORP, ag="5 à 7 corporatif", url="/corporatif/5-a-7",
         p1="Corporatif", p2="5-à-7",
         kws=kw("5 à 7 corporatif", "5 à 7 entreprise", "organiser un 5 à 7", "5 à 7 d'équipe",
                "location 5 à 7", "5 à 7 bureau", "cocktail d'entreprise", "5 a 7 corporatif montréal"),
         h=["5 à 7 corporatif clé en main", "Forfait 5 à 7 à 1 195 $", "Mange-debout et déco lounge",
            "Un 5 à 7 prêt en 1 appel", "Ambiance lounge livrée"],
         d="Forfait 5 à 7 d'équipe à 1 195 $ : mobilier lounge et déco installés par notre équipe."),
    dict(c=C_CORP, ag="Gala & soirée d'entreprise", url="/corporatif/gala",
         p1="Corporatif", p2="Gala",
         kws=kw("gala d'entreprise", "soirée d'entreprise", "organisation gala corporatif",
                "location équipement gala", "soirée corporative", "gala reconnaissance employés",
                "décor gala entreprise", "soirée corporative laval", "gala corporatif montréal"),
         h=["Gala d'entreprise clé en main", "Forfait Gala dès 2 495 $", "Gala de 75 à 150 invités",
            "Décor de gala haut de gamme", "Cabine photo avec préposé"],
         d="Forfait Gala Signature : décor, mobilier et cabine photo avec préposé, 75 à 150 invités."),
    dict(c=C_CORP, ag="Team building / jeux géants corporatif", url="/corporatif/team-building",
         p1="Corporatif", p2="Team-building",
         kws=kw("team building", "activité team building", "jeux géants location",
                "location jeux géants", "activité consolidation d'équipe", "team building laval",
                "team building montréal", "jeux géants corporatif", "activité d'équipe entreprise"),
         h=["Jeux géants pour entreprises", "Consolidation d'équipe animée", "Team building clé en main",
            "Activité d'équipe livrée", "Jeux montés sur votre site"],
         d="Jeux géants et activités d'équipe livrés et montés au bureau, au parc ou en salle."),
    dict(c=C_CORP, ag="Photobooth 360 corporatif", url="/corporatif/photobooth-360",
         p1="Corporatif", p2="Photobooth-360",
         kws=kw("photobooth 360", "location photobooth 360", "photobooth entreprise",
                "cabine photo 360", "location cabine photo", "photobooth corporatif",
                "photobooth 360 montréal", "photobooth 360 laval", "cabine photo événement"),
         h=["Cabine photo 360 à louer", "Cabine photo avec préposé", "Vidéos 360 à votre image",
            "Habillage à vos couleurs", "Partage instantané des vidéos"],
         d="Cabine photo 360 avec préposé, habillage à vos couleurs et partage instantané."),
    dict(c=C_CORP, ag="Lancement / activation de marque", url="/corporatif/activation-de-marque",
         p1="Corporatif", p2="Activation",
         kws=kw("activation de marque", "lancement de produit événement", "événement promotionnel",
                "location équipement événement corporatif", "lancement d'entreprise",
                "kiosque événementiel", "événement de lancement", "activation marketing événement"),
         h=["Activation de marque livrée", "Lancement de produit réussi", "Décor à vos couleurs",
            "Kiosque et mobilier fournis", "Cabine photo 360 brandée"],
         d="Lancement ou activation : décor de marque, mobilier, son et cabine photo 360 brandée."),
    dict(c=C_CORP, ag="Fournisseur événementiel clé en main", url="/corporatif",
         p1="Corporatif", p2="Clé-en-main",
         kws=kw("fournisseur événementiel", "location équipement événementiel",
                "événement corporatif clé en main", "location matériel événement",
                "organisation événement corporatif", "location événementielle laval",
                "location événementielle rive-nord", "location mobilier événement corporatif",
                "événement d'entreprise clé en main"),
         h=["Fournisseur événementiel", "Un fournisseur pour tout", "Mobilier, déco, son et jeux",
            "Événements corporatifs", "Équipe de montage dédiée"],
         d="Un seul fournisseur pour le mobilier, la déco, le son, les chapiteaux et les jeux."),
    # ------------------------------------------------ MARIAGE & PRIVÉ
    dict(c=C_MAR, ag="Location déco mariage", url="/mariage/decoration",
         p1="Mariage", p2="Décoration",
         kws=kw("location déco mariage", "location décoration mariage", "décoration mariage",
                "déco mariage clé en main", "location décor mariage", "décoration salle mariage",
                "déco mariage laval", "décoration mariage rive-nord", "location déco mariage montréal"),
         h=["Déco mariage clé en main", "Décor de mariage haut de gamme", "Votre salle transformée",
            "Montage le jour même", "Centres de table et éclairage"],
         d="Arches, centres de table, éclairage et mobilier installés avant l'arrivée des invités."),
    dict(c=C_MAR, ag="Arche / lettres lumineuses", url="/mariage/arche-lettres-lumineuses",
         p1="Mariage", p2="Arche-Lettres",
         kws=kw("location arche mariage", "arche de mariage", "location lettres lumineuses",
                "lettres lumineuses géantes", "location lettres géantes", "arche florale location",
                "lettres lumineuses mariage", "lettres lumineuses laval", "love lumineux location"),
         h=["Arches de mariage à louer", "Lettres lumineuses géantes", "Arche florale installée",
            "Vos initiales en lumière", "Décor photo spectaculaire"],
         d="Arche florale et lettres lumineuses géantes livrées, installées et reprises par nous."),
    dict(c=C_MAR, ag="Chapiteau mariage", url="/mariage/chapiteau",
         p1="Mariage", p2="Chapiteau",
         kws=kw("location chapiteau mariage", "chapiteau mariage", "location chapiteau",
                "location chapiteau laval", "location tente mariage", "chapiteau 20x40",
                "location chapiteau rive-nord", "location chapiteau montréal", "mariage extérieur chapiteau"),
         h=["Chapiteaux de mariage à louer", "Chapiteau monté et démonté", "Mariage extérieur serein",
            "Chapiteau et éclairage fournis", "Montage par nos équipes"],
         d="Chapiteau, éclairage et mobilier montés par notre équipe pour votre mariage extérieur."),
    dict(c=C_MAR, ag="Mobilier mariage", url="/mariage/mobilier",
         p1="Mariage", p2="Mobilier",
         kws=kw("location mobilier mariage", "location chaises mariage", "location tables mariage",
                "chaises chiavari location", "location chaise mariage laval", "location mobilier réception",
                "location mobilier lounge", "location table et chaise mariage"),
         h=["Mobilier de mariage à louer", "Chaises Chiavari et lounge", "Tables et nappes assorties",
            "Mobilier livré et placé", "Salon lounge pour invités"],
         d="Chaises Chiavari, tables et salons lounge livrés, placés selon votre plan et repris."),
    dict(c=C_MAR, ag="Photobooth mariage", url="/mariage/photobooth",
         p1="Mariage", p2="Photobooth",
         kws=kw("photobooth mariage", "location photobooth mariage", "cabine photo mariage",
                "photobooth 360 mariage", "location cabine photo mariage", "photobooth mariage laval",
                "photobooth mariage montréal", "borne photo mariage"),
         h=["Cabine photo de mariage", "Cabine photo 360 pour mariage", "Souvenirs pour vos invités",
            "Préposé sur place", "Cabine photo dès 599 $"],
         d="Cabine photo ou 360 avec préposé, accessoires et galerie en ligne pour vos invités."),
    dict(c=C_MAR, ag="Événement privé clé en main", url="/evenement-prive",
         p1="Événement", p2="Privé",
         kws=kw("anniversaire 50 ans", "fête 40 ans adulte", "organisation anniversaire 50 ans",
                "location déco anniversaire adulte", "événement privé clé en main",
                "fête privée location équipement", "anniversaire 60 ans organisation",
                "soirée privée location", "fête 40 ans déco"),
         h=["Fête privée clé en main", "Vos 40, 50 ou 60 ans", "Réception privée haut de gamme",
            "Déco, mobilier et cabine photo", "Soirée chic à domicile"],
         d="Anniversaire 40, 50 ou 60 ans, réception à domicile : décor livré, monté et repris."),
]

BRAND = dict(c=C_BRAND, ag="Evenox – Marque", url="/", p1="Location", p2="Événements",
             kws=kw("evenox", "évenox", "evenox location", "evenox.ca", "location evenox",
                    "evenox sainte-thérèse", "evenox avis"),
             h=["Evenox – Site officiel", "Evenox | Location d'événement", "Evenox – Clé en main",
                "Forfaits corpo dès 1 195 $", "Forfaits mariage dès 899 $", "Livré, monté et démonté",
                "Soumission en moins de 24 h", "Plus de 1 000 événements", "Note 4,8/5 – [N] avis Google",
                "Entrepôt à Sainte-Thérèse", "Clients : RBC, PwC, Desjardins", "Facturation net 30 jours",
                "Laval, Montréal et Rive-Nord", "Mobilier, déco et chapiteaux", "Cabine photo et jeux géants"],
             dd=["Evenox : location d'équipement événementiel haut de gamme, livré et monté pour vous.",
                 "Corporatif, mariage ou réception privée : forfaits clé en main et soumission en 24 h.",
                 "Plus de 1 000 événements à Montréal, Laval et Rive-Nord. Note de 4,8/5 sur Google.",
                 "Mobilier, déco, chapiteaux, cabine photo et jeux géants. Installation et démontage."])

# ---------------------------------------------------------------- negatives
SHARED_NEG_NAME = "Evenox – Négatifs universels"
SHARED_NEG = [
    # prix / qualité
    "gratuit", "gratuite", "gratuitement", "free", "pas cher", "pas chère", "pas cher montréal",
    "moins cher", "le moins cher", "bon marché", "cheap", "à rabais", "liquidation", "aubaine",
    "prix de gros", "en gros", "wholesale", "1 $", "dollar",
    # achat / usagé
    "usagé", "usagée", "usagés", "usagées", "seconde main", "d'occasion", "à vendre", "a vendre",
    "vendre", "vente", "achat", "acheter", "achète", "for sale", "kijiji", "marketplace",
    "lespac", "amazon", "walmart", "costco", "dollarama", "ikea", "canadian tire", "home depot",
    "rona", "party city", "temu", "aliexpress", "magasin",
    # emploi
    "emploi", "emplois", "job", "jobs", "carrière", "carrières", "embauche", "salaire", "stage",
    "offre d'emploi", "recrutement", "indeed", "jobillico", "guichet emplois", "bénévole",
    # DIY / informationnel
    "diy", "fait maison", "soi-même", "soi même", "tutoriel", "tuto", "comment fabriquer",
    "bricolage", "imprimable", "gabarit", "template", "pdf", "coloriage", "clipart", "png",
    "image", "images", "wikipedia", "définition", "cours", "formation", "recette", "poème",
    "discours", "texte", "paroles", "chanson", "playlist", "film", "jeu vidéo", "jeux vidéo",
    "jeu en ligne", "carte de souhait", "invitation gratuite",
    # Evenko / billetterie / spectacles
    "evenko", "billet", "billets", "billetterie", "spectacle", "spectacles", "concert",
    "concerts", "festival", "festivals", "ticketmaster", "admission", "centre bell", "osheaga",
    "heavy montréal", "île soniq", "place bell",
    # autres locations hors offre
    "location voiture", "location auto", "location camion", "location remorque",
    "location appartement", "location chalet", "location maison", "location outils",
    "location de salle", "salle à louer", "location bateau", "location vélo",
    # abris / camping (hors offre haut de gamme)
    "abri tempo", "tempo", "abri d'auto", "abri auto", "tente de camping", "tente camping",
    "camping", "gazebo à vendre", "pop up", "tente pop up",
    # divers hors cible
    "déguisement", "costume", "mascotte", "piscine", "sans fil", "jouet", "jouets",
    "horoscope", "prière",
]

CORP_NEG = [
    "enfant", "enfants", "fête d'enfant", "fete enfant", "fête enfant", "anniversaire enfant",
    "anniversaire garçon", "anniversaire fille", "jeux gonflables enfants", "jeux gonflables",
    "jeu gonflable", "château gonflable", "chateau gonflable", "structure gonflable",
    "glissade gonflable", "bébé", "baby shower", "dévoilement sexe", "garderie", "piñata",
    "princesse", "licorne", "pat patrouille", "spiderman", "mickey", "mariage", "mariages",
    "noces", "fiançailles", "shower",
]
MAR_NEG = [
    "enfant", "enfants", "fête d'enfant", "fete enfant", "anniversaire enfant",
    "jeux gonflables enfants", "jeux gonflables", "château gonflable", "chateau gonflable",
    "structure gonflable", "glissade gonflable", "princesse", "licorne", "pat patrouille",
    "party de bureau", "party des fêtes", "fête de bureau", "5 à 7", "team building",
    "corporatif", "gala d'entreprise", "robe de mariée", "robe", "bague", "alliance",
    "faire-part", "officiant", "gâteau", "coiffure", "maquillage", "smoking", "location habit",
    "photographe", "vidéaste", "lune de miel",
]
# brand sculpting: keep brand queries in the brand campaign
BRAND_SCULPT = ["evenox", "évenox", "evenox.ca"]
BRAND_NEG = ["evenko", "evenko billets", "evenko spectacle", "evenko emploi"]

# ---------------------------------------------------------------- writers
def write(name, header, rows):
    path = os.path.join(OUT, name)
    with open(path, "w", newline="", encoding="utf-8-sig") as f:
        w = csv.writer(f)
        w.writerow(header)
        for r in rows:
            w.writerow([r.get(h, "") for h in header])
    return path

def build():
    os.makedirs(OUT, exist_ok=True)
    # campaigns.csv
    hdr = ["Campaign", "Campaign Type", "Networks", "Campaign Daily Budget", "Budget type",
           "Languages", "Bid Strategy Type", "Target CPA", "Max CPC Bid Limit", "Targeting method",
           "Exclusion method", "Ad rotation", "Campaign Status", "Location", "Comment"]
    rows = []
    for c in CAMPAIGNS:
        rows.append({"Campaign": c["name"], "Campaign Type": "Search", "Networks": "Google search",
                     "Campaign Daily Budget": c["budget"], "Budget type": "Daily", "Languages": "fr",
                     "Bid Strategy Type": c["bid"],
                     "Max CPC Bid Limit": "2.50" if c["name"] == C_BRAND else "",
                     "Targeting method": "Location of presence",
                     "Exclusion method": "Location of presence", "Ad rotation": "Optimize",
                     "Campaign Status": "Paused", "Comment": c["note"]})
        for loc in c["locs"]:
            rows.append({"Campaign": c["name"], "Location": loc})
    write("campaigns.csv", hdr, rows)

    # ad groups (status) + keywords.csv
    groups = AD_GROUPS + [BRAND]
    write("ad_groups.csv", ["Campaign", "Ad Group", "Ad Group Type", "Ad Group Status"],
          [{"Campaign": g["c"], "Ad Group": g["ag"], "Ad Group Type": "Standard",
            "Ad Group Status": "Enabled"} for g in groups])
    hdr = ["Campaign", "Ad Group", "Keyword", "Criterion Type", "Final URL", "Status"]
    rows = []
    for g in groups:
        for k in g["kws"]:
            for mt in ("Phrase", "Exact"):
                rows.append({"Campaign": g["c"], "Ad Group": g["ag"], "Keyword": k,
                             "Criterion Type": mt, "Status": "Enabled"})
    write("keywords.csv", hdr, rows)

    # negatives.csv (campaign-level) + negatives_shared_list.csv
    hdr = ["Campaign", "Ad Group", "Keyword", "Criterion Type"]
    rows = []
    for k in CORP_NEG:
        rows.append({"Campaign": C_CORP, "Keyword": k, "Criterion Type": "Campaign Negative Phrase"})
    for k in MAR_NEG:
        rows.append({"Campaign": C_MAR, "Keyword": k, "Criterion Type": "Campaign Negative Phrase"})
    for camp in (C_CORP, C_MAR):
        for k in BRAND_SCULPT:
            rows.append({"Campaign": camp, "Keyword": k, "Criterion Type": "Campaign Negative Phrase"})
    for k in BRAND_NEG:
        rows.append({"Campaign": C_BRAND, "Keyword": k, "Criterion Type": "Campaign Negative Phrase"})
    write("negatives.csv", hdr, rows)
    write("negatives_shared_list.csv", ["Shared Set Name", "Shared Set Type", "Keyword", "Criterion Type"],
          [{"Shared Set Name": SHARED_NEG_NAME, "Shared Set Type": "Negative keywords",
            "Keyword": k, "Criterion Type": "Negative Phrase"} for k in SHARED_NEG])
    write("negatives_shared_list_links.csv", ["Campaign", "Shared Set Name", "Shared Set Type"],
          [{"Campaign": c["name"], "Shared Set Name": SHARED_NEG_NAME,
            "Shared Set Type": "Negative keywords"} for c in CAMPAIGNS])

    # rsa_ads.csv
    hdr = (["Campaign", "Ad Group", "Ad type"] + [f"Headline {i}" for i in range(1, 16)]
           + ["Headline 1 position"] + [f"Description {i}" for i in range(1, 5)]
           + ["Path 1", "Path 2", "Final URL", "Status"])
    rows = []
    for g in AD_GROUPS:
        common_h = CORP_COMMON_H if g["c"] == C_CORP else MAR_COMMON_H
        common_d = CORP_COMMON_D if g["c"] == C_CORP else MAR_COMMON_D
        hs = g["h"] + common_h  # specific first (H1 pinned = ad group theme)
        ds = [g["d"]] + common_d
        rows.append(rsa_row(g, hs, ds))
    rows.append(rsa_row(BRAND, BRAND["h"], BRAND["dd"]))
    write("rsa_ads.csv", hdr, rows)

    # assets
    build_assets()

def rsa_row(g, hs, ds):
    r = {"Campaign": g["c"], "Ad Group": g["ag"], "Ad type": "Responsive search ad",
         "Path 1": g["p1"], "Path 2": g["p2"], "Final URL": BASE + g["url"], "Status": "Enabled",
         "Headline 1 position": "1"}
    for i, h in enumerate(hs, 1):
        r[f"Headline {i}"] = h
    for i, d in enumerate(ds, 1):
        r[f"Description {i}"] = d
    return r

SITELINKS = {
    C_CORP: [
        ("Party des Fêtes", "Forfait party de bureau 1 995 $", "Dates de décembre limitées", "/corporatif/party-des-fetes"),
        ("5 à 7 d'équipe", "Forfait clé en main à 1 195 $", "Mobilier lounge et déco", "/corporatif/5-a-7"),
        ("Gala Signature", "Forfait dès 2 495 $", "75 à 150 invités, avec préposé", "/corporatif/gala"),
        ("Cabine photo 360", "Habillage à vos couleurs", "Préposé et partage instantané", "/corporatif/photobooth-360"),
        ("Jeux géants", "Consolidation d'équipe", "Livrés et montés sur place", "/corporatif/team-building"),
        ("Demander une soumission", "Réponse en moins de 24 h", "Facturation net 30 disponible", "/soumission"),
    ],
    C_MAR: [
        ("Forfaits mariage", "Décor dès 899 $ ou sur mesure", "Livré, monté et démonté", "/mariage"),
        ("Arches et lettres", "Arche florale et lettres géantes", "Installées par notre équipe", "/mariage/arche-lettres-lumineuses"),
        ("Chapiteaux", "Chapiteaux montés et démontés", "Plancher et éclairage en option", "/mariage/chapiteau"),
        ("Mobilier de mariage", "Chaises Chiavari et lounge", "Placé selon votre plan de salle", "/mariage/mobilier"),
        ("Fêtes privées", "Anniversaires 40, 50 ou 60 ans", "Décor livré, monté et repris", "/evenement-prive"),
        ("Demander une soumission", "Réponse en moins de 24 h", "Été 2027 : dates limitées", "/soumission"),
    ],
    C_BRAND: [
        ("Forfaits corporatifs", "Dès 1 195 $", "Facturation net 30", "/corporatif"),
        ("Forfaits mariage", "Décor dès 899 $ ou sur mesure", "Livré, monté et démonté", "/mariage"),
        ("Réalisations", "Plus de 1 000 événements", "Photos de vrais montages", "/realisations"),
        ("Demander une soumission", "Réponse en moins de 24 h", "Montréal, Laval et Rive-Nord", "/soumission"),
    ],
}
CALLOUTS = {
    C_CORP: ["Service clé en main", "Installation et démontage", "Facturation net 30",
             "Soumission en 24 h", "Plus de 1 000 événements", "Note 4,8/5 sur Google",
             "Équipe de montage dédiée", "Entrepôt à Sainte-Thérèse"],
    C_MAR: ["Service clé en main", "Installation et démontage", "Forfaits sur mesure",
            "Soumission en 24 h", "Plus de 1 000 événements", "Note 4,8/5 sur Google",
            "Décor haut de gamme", "Entrepôt à Sainte-Thérèse"],
    C_BRAND: ["Service clé en main", "Installation et démontage", "Soumission en 24 h",
              "Note 4,8/5 sur Google"],
}
SNIPPETS = {
    C_CORP: [("Services", ["Party des Fêtes", "5 à 7 corporatif", "Gala d'entreprise",
                           "Consolidation d'équipe", "Activation de marque", "Cabine photo 360"])],
    C_MAR: [("Types", ["Arches de mariage", "Lettres lumineuses", "Chapiteaux", "Mobilier lounge",
                       "Chaises Chiavari", "Cabine photo 360"])],
    C_BRAND: [("Services", ["Mobilier", "Décor", "Chapiteaux", "Cabine photo 360", "Jeux géants",
                            "Son et éclairage"])],
}

def build_assets():
    combined = []
    sl, co, sn = [], [], []
    for camp, items in SITELINKS.items():
        for t, d1, d2, u in items:
            r = {"Asset type": "Sitelink", "Campaign": camp, "Link Text": t,
                 "Description Line 1": d1, "Description Line 2": d2, "Final URL": BASE + u}
            sl.append(r); combined.append(r)
    for camp, items in CALLOUTS.items():
        for t in items:
            r = {"Asset type": "Callout", "Campaign": camp, "Callout text": t}
            co.append(r); combined.append(r)
    for camp, items in SNIPPETS.items():
        for header, vals in items:
            r = {"Asset type": "Structured snippet", "Campaign": camp, "Header": header,
                 "Snippet Values": ";".join(vals)}
            sn.append(r); combined.append(r)
    write("assets.csv", ["Asset type", "Campaign", "Link Text", "Description Line 1",
                         "Description Line 2", "Final URL", "Callout text", "Header",
                         "Snippet Values"], combined)
    write("assets_sitelinks.csv", ["Campaign", "Link Text", "Description Line 1",
                                   "Description Line 2", "Final URL"], sl)
    write("assets_callouts.csv", ["Campaign", "Callout text"], co)
    write("assets_structured_snippets.csv", ["Campaign", "Header", "Snippet Values"], sn)

if __name__ == "__main__":
    build()
    print("written to", OUT)
