# -*- coding: utf-8 -*-
"""Génère les fichiers d'import Google Ads Editor pour Évenox.

Usage : python3 -I build_google_ads.py
Sortie : ../google-ads-editor/*.csv  (UTF-16 LE avec BOM, séparateur tabulation =
format « Unicode Text » recommandé par l'aide Google Ads Editor ; importables via
Google Ads Editor > Compte > Importer > À partir d'un fichier). En-têtes et valeurs
selon https://support.google.com/google-ads/editor/answer/57747 (CSV file columns).
0_import_complet.csv regroupe tout (une ligne = une entité, voir answer/56368).

Version 2 (7 oct. 2026) : prix et forfaits relevés sur evenox.ca le 7 oct. 2026
(/nos-forfaits-tout-inclus, /location-photobooth-montreal, /lettres-lumineuses,
/faq). Toute promesse d'annonce doit exister sur la page de destination.
Tout est importé EN PAUSE : on active après le test du faux lead (PLAN, section 4).
"""
import csv
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "google-ads-editor")
os.makedirs(OUT, exist_ok=True)

# ---------------------------------------------------------------- CONFIG
# GRILLE DE PRIX — si les prix du site changent, inscrire ici
# "ancien texte": "nouveau texte" (FR et EN), puis relancer le script.
# Ex. : "799 $": "849 $", "$799": "$849". Les plus longs passent en premier.
PRIX = {
}

# Montants affichés sur evenox.ca (relevé du 7 oct. 2026). Toute somme en $ dans
# une annonce, un lien annexe ou une accroche doit figurer ici (sinon : erreur).
PRIX_SITE = {1195, 1995, 2495, 899, 1449, 599, 799, 999, 1798, 380, 500, 240, 210}

URL = {
    "home": "https://evenox.ca/",
    "forfaits": "https://evenox.ca/nos-forfaits-tout-inclus",
    "lettres": "https://evenox.ca/lettres-lumineuses/",
    "photobooth": "https://evenox.ca/location-photobooth-montreal",
    "teambuilding": "https://evenox.ca/team-building-activitecorpo/",
    "mariage": "https://evenox.ca/mariage/",
}

C_MARQUE = "S-FR | Marque"
C_CORPO = "S-FR | Corporatif & Fêtes"
C_PRIVES = "S-FR | Événements privés"
C_EN = "S-EN | Corporate Montréal"
C_QC = "S-FR | Québec-Lévis (test)"

# Budget plafond ($ CAD/jour) et CPC max. (Max. clics au lancement).
CAMPAGNES = {
    C_MARQUE: dict(budget=10, cpc="2.50", lancement=True),
    C_CORPO: dict(budget=170, cpc="4.00", lancement=True),
    C_PRIVES: dict(budget=120, cpc="3.00", lancement=True),
    C_EN: dict(budget=30, cpc="5.00", lancement=False),   # validation Loi 96
    C_QC: dict(budget=20, cpc="3.00", lancement=False),   # grille de transport
}

LIMITS = dict(h=30, d=90, path=15, sl=25, sld=35, co=25)

# Pas de colonne « Languages » : le ciblage linguistique n'existe plus en
# Search depuis le 30 sept. 2026 (la langue de l'annonce et de la page décide).


def px(texte):
    """Applique la grille PRIX à un texte."""
    for ancien in sorted(PRIX, key=len, reverse=True):
        texte = texte.replace(ancien, PRIX[ancien])
    return texte


# ---------------------------------------------------------------- COPIES FR
MARQUE = dict(
    h=["Évenox | Site officiel", "Évenox location événementielle",
       "Location clé en main", "Lettres lumineuses 4 pi",
       "Photobooth et borne photo", "Forfaits corporatifs", "Note Google 4,8/5",
       "Plus de 1 000 événements", "Soumission en 24 h", "Réservation en ligne",
       "Mariages et entreprises", "Montréal, Laval, Rive-Nord",
       "Basés à Sainte-Thérèse", "Service premium sans tracas",
       "Réservez votre date"],
    d=["Location événementielle haut de gamme : lettres lumineuses, photobooth et décor.",
       "Plus de 1 000 événements depuis 2022, note Google de 4,8/5. Soumission en 24 h.",
       "Livraison, installation et reprise par notre équipe. Réservation en ligne.",
       "Montréal, Laval et Rive-Nord. Mariages, entreprises et fêtes privées."],
    path=("location", "evenements"), pins={0: 1},
)
NOEL = dict(
    h=["Fête de Noël d'entreprise", "Party de Bureau 1 995 $",
       "5 à 7 d'équipe 1 195 $", "Gala Signature 2 495 $",
       "Forfaits à prix affiché", "Tout installé et ramassé",
       "Lettres lumineuses et jeux", "Photobooth avec préposé",
       "Net 30 sur approbation", "Décembre se réserve tôt", "Soumission en 24 h",
       "Montréal, Laval, Rive-Nord", "Note Google 4,8/5",
       "Bon de commande accepté", "Réservez votre date"],
    d=["Party de Bureau 1 995 $ : lettres lumineuses, mur floral, 5 jeux géants et popcorn.",
       "5 à 7 d'équipe 1 195 $, Party de Bureau 1 995 $ ou Gala Signature 2 495 $.",
       "Prix affiché, bon de commande et facturation net 30 sur approbation de crédit.",
       "Installation discrète, ramassage par notre équipe. Les vendredis de décembre partent vite."],
    path=("fetes", "entreprise"), pins={0: 1, 1: 2},
)
TEAMBUILDING = dict(
    h=["Team building clé en main", "Consolidation d'équipe",
       "Jeux géants pour entreprise", "Mini tournoi de jeux géants",
       "Montréal, Laval, Rive-Nord", "Livraison et installation",
       "Soumission en 24 h", "Note Google 4,8/5", "Plus de 1 000 événements",
       "Idéal pour vos 5 à 7", "Activité d'équipe sur place",
       "Net 30 sur approbation", "Réservez votre date",
       "Service premium sans tracas", "Votre équipe, mobilisée"],
    d=["Activités de consolidation d'équipe clés en main : livraison, installation et reprise.",
       "Jeux géants, lettres lumineuses et photobooth pour vos 5 à 7 et fêtes de bureau.",
       "Montréal, Laval et Rive-Nord. Bon de commande et net 30 sur approbation de crédit.",
       "Plus de 1 000 événements réalisés, note Google 4,8/5. Soumission détaillée en 24 h."],
    path=("team-building", "entreprise"), pins={0: 1},
)
PHOTOBOOTH_CORPO = dict(
    h=["Photobooth corporatif", "Borne photo pour entreprise",
       "Forfaits 599 $ à 999 $", "Signature 3 h : 799 $",
       "Vidéobooth 360 disponible", "Photos illimitées", "Galas, congrès, Noël",
       "Activations de marque", "Livraison incluse 40 km", "Soumission en 24 h",
       "Montréal, Laval, Rive-Nord", "Note Google 4,8/5",
       "Plus de 1 000 événements", "Installation clé en main",
       "Réservez votre photobooth"],
    d=["Photobooth Essentiel 2 h 599 $, Signature 3 h 799 $ ou Prestige 4 h 999 $.",
       "Photos illimitées pour vos galas, congrès, lancements et fêtes de bureau.",
       "Livraison et installation incluses jusqu'à 40 km. Soumission détaillée en 24 h.",
       "Ajoutez le vidéobooth 360 : vos invités repartent avec leur clip au ralenti."],
    path=("photobooth", "entreprise"), pins={0: 1, 2: 2},
)
LETTRES_CORPO = dict(
    h=["Lettres lumineuses 4 pi", "Le nom de votre entreprise",
       "Votre marque en lumière", "Pour galas et lancements",
       "Forfait Signature 500 $", "Installation sur place",
       "Montréal, Laval, Rive-Nord", "Événements d'entreprise",
       "Soumission en 24 h", "Note Google 4,8/5", "Plus de 1 000 événements",
       "Activations de marque", "Un décor qui fait parler",
       "Net 30 sur approbation", "Réservez vos lettres 4 pi"],
    d=["Lettres lumineuses de 4 pi, livrées et installées. Forfait Signature 500 $, mot au choix.",
       "Galas, lancements, fêtes de fin d'année : le nom de votre entreprise en lumière.",
       "Montréal, Laval et Rive-Nord. Plus de 1 000 événements réalisés, note Google 4,8/5.",
       "Bon de commande accepté et facturation net 30 sur approbation de crédit."],
    path=("lettres", "entreprise"), pins={0: 1},
)
LETTRES = dict(
    h=["Location lettres lumineuses", "Lettres géantes de 4 pi",
       "Forfait Célébration 380 $", "Forfait Signature 500 $",
       "Love : 240 $ les 4 lettres", "Initiales, mots et chiffres",
       "Installation sur place", "Montréal, Laval, Rive-Nord",
       "Mariages et anniversaires", "Soumission en 24 h", "Note Google 4,8/5",
       "Plus de 1 000 événements", "Prix affichés en ligne",
       "Un décor qui fait parler", "Réservez vos lettres 4 pi"],
    d=["Lettres lumineuses de 4 pi : Célébration 380 $ (3 à 4 lettres) ou Signature 500 $.",
       "Initiales, Love, Oui ou chiffres d'anniversaire : composez votre mot, voyez le prix.",
       "Montréal, Laval et Rive-Nord. Plus de 1 000 événements réalisés, note Google 4,8/5.",
       "Livraison, installation et reprise par notre équipe. Soumission détaillée en 24 h."],
    path=("lettres", "lumineuses"), pins={0: 1},
)
LETTRES_MARIAGE = dict(
    h=["Lettres lumineuses mariage", "Love : 240 $ les 4 lettres",
       "Vos initiales en lumière", "Lettres géantes de 4 pi",
       "Forfait Signature 500 $", "Installation sur place",
       "Montréal, Laval, Rive-Nord", "Un décor de mariage élégant",
       "Soumission en 24 h", "Note Google 4,8/5", "Plus de 1 000 événements",
       "Réservez votre date", "Photos de mariage mémorables",
       "Livrées, montées, reprises", "Oui : 210 $ les 3 lettres"],
    d=["Lettres lumineuses de 4 pi pour votre mariage : Love 240 $, Oui 210 $, mot au choix.",
       "Vos initiales ou votre nom en lumière : un décor élégant qui sublime vos photos.",
       "Les samedis d'été partent vite. Vérifiez la disponibilité de votre date dès aujourd'hui.",
       "Livraison et installation par notre équipe à Montréal, Laval et sur la Rive-Nord."],
    path=("lettres", "mariage"), pins={0: 1},
)
PHOTOBOOTH = dict(
    h=["Location photobooth", "Borne photo à louer", "Forfaits 599 $ à 999 $",
       "Signature 3 h : 799 $", "Vidéobooth 360 disponible", "Photos illimitées",
       "Mariages, galas, fêtes", "Installation clé en main",
       "Livraison incluse 40 km", "Soumission en 24 h",
       "Montréal, Laval, Rive-Nord", "Note Google 4,8/5",
       "Plus de 1 000 événements", "Duo Signature 1 798 $",
       "Réservez votre photobooth"],
    d=["Photobooth Essentiel 2 h 599 $, Signature 3 h 799 $ ou Prestige 4 h 999 $.",
       "Photos illimitées pour vos mariages, anniversaires, galas et fêtes d'entreprise.",
       "Livraison et installation incluses jusqu'à 40 km. Soumission détaillée en 24 h.",
       "Duo Signature 1 798 $ : photobooth et vidéobooth 360 pendant 3 heures chacun."],
    path=("photobooth", "forfaits"), pins={0: 1, 2: 2},
)
PHOTOBOOTH_MARIAGE = dict(
    h=["Photobooth mariage", "Borne photo pour mariage", "Forfaits 599 $ à 999 $",
       "Signature 3 h : 799 $", "Prestige 4 h : 999 $",
       "Souvenirs pour vos invités", "Impressions en option",
       "Installation clé en main", "Réservez votre date", "Soumission en 24 h",
       "Montréal, Laval, Rive-Nord", "Note Google 4,8/5",
       "Plus de 1 000 événements", "Album souvenir en option",
       "Vidéobooth 360 disponible"],
    d=["Photobooth Essentiel 2 h 599 $, Signature 3 h 799 $ ou Prestige 4 h 999 $.",
       "Impressions illimitées et album souvenir en option : un souvenir pour chaque invité.",
       "Les samedis d'été partent vite. Vérifiez la disponibilité de votre date dès aujourd'hui.",
       "Livraison et installation incluses jusqu'à 40 km de Sainte-Thérèse. Soumission en 24 h."],
    path=("photobooth", "mariage"), pins={0: 1, 2: 2},
)
DECOR_MARIAGE = dict(
    h=["Décor de mariage clé en main", "Forfaits 899 $ et 1 449 $",
       "Soirée Signature 1 449 $", "Lettres lumineuses géantes",
       "Mur floral pour coin photo", "Étincelles froides",
       "Photobooth avec préposé", "Installation et coordination",
       "Soumission en 24 h", "Montréal, Laval, Rive-Nord", "Note Google 4,8/5",
       "Plus de 1 000 événements", "Réservez votre date",
       "Un décor qui fait parler", "Forfaits à prix affiché"],
    d=["Décor WOW 899 $ : 5 lettres lumineuses géantes, mur floral et étincelles froides.",
       "Soirée Signature 1 449 $ : tout le Décor WOW et un photobooth premium avec préposé.",
       "Installation et coordination du décor par notre équipe à Montréal, Laval et Rive-Nord.",
       "Plus de 1 000 événements réalisés, note Google 4,8/5. Soumission détaillée en 24 h."],
    path=("decor", "mariage"), pins={0: 1, 1: 2},
)
NOEL_QC = dict(NOEL, h=[("Québec et Lévis" if x == "Montréal, Laval, Rive-Nord" else x)
                        for x in NOEL["h"]])

# ---------------------------------------------------------------- COPIES EN
EN_HOLIDAY = dict(
    h=["Office Holiday Party Rentals", "Office Party Package $1,995",
       "Team 5 à 7 Package $1,195", "Gala Package $2,495",
       "Posted prices, PO accepted", "Set up and picked up",
       "Marquee letters and games", "Photo booth with attendant",
       "Net 30 on credit approval", "December books up early",
       "Quote within 24 hours", "Montréal, Laval, North Shore",
       "Rated 4.8/5 on Google", "Turnkey corporate events", "Reserve your date"],
    d=["Office Party package $1,995: marquee letters, floral wall, 5 giant games, popcorn.",
       "Team 5 à 7 $1,195, Office Party $1,995 or Gala Signature $2,495, fully installed.",
       "Posted prices, purchase orders and net 30 invoicing on credit approval.",
       "Discreet setup and pickup by our crew. December Fridays book up fast."],
    path=("holiday", "corporate"), pins={0: 1, 1: 2},
)
EN_PHOTOBOOTH = dict(
    h=["Photo Booth Rental", "Corporate Photo Booth", "Packages $599 to $999",
       "Signature 3 h: $799", "360 video booth available", "Unlimited photos",
       "Galas, launches, holidays", "Delivery included 40 km",
       "Quote within 24 hours", "Montréal, Laval, North Shore",
       "Rated 4.8/5 on Google", "1,000+ events delivered", "Turnkey setup",
       "Weddings and corporate", "Book your photo booth"],
    d=["Photo booth Essential 2 h $599, Signature 3 h $799 or Prestige 4 h $999.",
       "Unlimited photos for galas, conferences, launches and office holiday parties.",
       "Delivery and setup included within 40 km. Detailed quote within 24 hours.",
       "Add the 360 video booth: guests leave with their own slow-motion clip."],
    path=("photo-booth", "corporate"), pins={0: 1, 2: 2},
)
EN_LETTERS = dict(
    h=["4-ft Marquee Letters", "Light-Up Letter Rental",
       "Your company name in lights", "Signature package $500",
       "Love: $240 for 4 letters", "Installed on site",
       "Montréal, Laval, North Shore", "Corporate events and galas",
       "Quote within 24 hours", "Rated 4.8/5 on Google",
       "1,000+ events delivered", "Brand activations", "Posted prices online",
       "Net 30 on credit approval", "Reserve your letters"],
    d=["4-ft light-up letters, delivered and installed. Signature package $500, any word.",
       "Galas, launches, holiday parties: put your company name in lights.",
       "Montréal, Laval and North Shore. 1,000+ events delivered, rated 4.8/5 on Google.",
       "Purchase orders accepted and net 30 invoicing on credit approval."],
    path=("marquee", "corporate"), pins={0: 1},
)

# ---------------------------------------------------------------- KEYWORDS
def P(*k): return [(x, "Phrase") for x in k]
def E(*k): return [(x, "Exact") for x in k]

STRUCTURE = [
  dict(campaign=C_MARQUE, adgroup="Marque Évenox", url=URL["home"], copy=MARQUE,
       kw=E("evenox", "évenox", "evenox location", "evenox sainte-thérèse",
            "evenox photobooth", "evenox lettres lumineuses") + P("evenox", "évenox")),
  # ------------------------------------------------------- CORPORATIF
  dict(campaign=C_CORPO, adgroup="Fête de Noël d'entreprise", url=URL["forfaits"], copy=NOEL,
       kw=P("party de noël entreprise", "party de bureau", "party des fêtes entreprise",
            "fête de noël entreprise", "party de noël corporatif",
            "décoration party de bureau", "location party de bureau",
            "animation party de bureau", "décor party de noël",
            "réception des fêtes entreprise", "party de noël employés",
            "forfait party de bureau", "party des fêtes")
          + E("party de bureau montréal", "party de bureau laval",
              "party de noël entreprise", "décoration party de bureau")),
  dict(campaign=C_CORPO, adgroup="Team building", url=URL["teambuilding"], copy=TEAMBUILDING,
       kw=P("team building montréal", "team building laval", "team building rive-nord",
            "activité team building", "activité team building entreprise",
            "team building entreprise", "jeux géants team building",
            "location jeux géants corporatif", "activité 5 à 7 entreprise",
            "consolidation d'équipe")
          + E("team building montréal", "team building laval")),
  dict(campaign=C_CORPO, adgroup="Photobooth corporatif", url=URL["photobooth"],
       copy=PHOTOBOOTH_CORPO,
       kw=P("photobooth corporatif", "photobooth entreprise",
            "location photobooth événement corporatif", "photobooth party de bureau",
            "borne photo entreprise", "photobooth activation de marque",
            "photobooth gala", "photobooth party de noël", "photobooth 5 à 7",
            "photobooth noël")
          + E("photobooth corporatif", "photobooth entreprise")),
  dict(campaign=C_CORPO, adgroup="Lettres lumineuses corporatif", url=URL["lettres"],
       copy=LETTRES_CORPO,
       kw=P("lettres lumineuses corporatif", "lettres lumineuses entreprise",
            "lettres géantes événement corporatif", "location lettres lumineuses gala",
            "décoration gala corporatif", "décor événement corporatif",
            "décor activation de marque", "décoration lancement de produit")
          + E("lettres lumineuses entreprise", "décoration gala corporatif")),
  # --------------------------------------------------- ÉVÉNEMENTS PRIVÉS
  dict(campaign=C_PRIVES, adgroup="Lettres lumineuses", url=URL["lettres"], copy=LETTRES,
       kw=P("location lettres lumineuses", "lettres lumineuses à louer",
            "location lettres géantes", "location lettres géantes lumineuses",
            "location chiffres lumineux", "lettres lumineuses 4 pieds",
            "location lettres lumineuses montréal", "location lettres lumineuses laval")
          + E("location lettres lumineuses", "location lettres géantes")),
  dict(campaign=C_PRIVES, adgroup="Lettres lumineuses mariage", url=URL["lettres"],
       copy=LETTRES_MARIAGE,
       kw=P("lettres lumineuses mariage", "location lettres lumineuses mariage",
            "location lettres love", "location lettres mr et mrs",
            "initiales lumineuses mariage", "lettres géantes mariage",
            "décoration lumineuse mariage", "lettres love")
          + E("lettres lumineuses mariage", "location lettres love")),
  dict(campaign=C_PRIVES, adgroup="Photobooth", url=URL["photobooth"], copy=PHOTOBOOTH,
       kw=P("location photobooth", "photobooth à louer", "location borne photo",
            "location photobooth montréal", "location photobooth laval",
            "location photobooth rive-nord", "prix location photobooth", "photobooth",
            "location vidéobooth 360", "photobooth 360")
          + E("location photobooth", "location photobooth montréal",
              "location photobooth laval")),
  dict(campaign=C_PRIVES, adgroup="Photobooth mariage", url=URL["photobooth"],
       copy=PHOTOBOOTH_MARIAGE,
       kw=P("photobooth mariage", "location photobooth mariage", "borne photo mariage",
            "location borne photo mariage", "photobooth mariage prix")
          + E("photobooth mariage", "location photobooth mariage")),
  dict(campaign=C_PRIVES, adgroup="Décor mariage", url=URL["forfaits"], copy=DECOR_MARIAGE,
       kw=P("décoration mariage clé en main", "location décoration mariage",
            "forfait décoration mariage", "décoration réception mariage",
            "location mur floral", "location mur de fleurs", "décor mariage location")
          + E("location décoration mariage", "décoration mariage clé en main")),
  # ------------------------------------------- EN (PAUSE — Loi 96)
  dict(campaign=C_EN, adgroup="Holiday party (EN)", url=URL["forfaits"], copy=EN_HOLIDAY,
       kw=P("office holiday party rentals", "corporate holiday party montreal",
            "office christmas party decor", "corporate event rentals montreal")
          + E("corporate event rentals montreal")),
  dict(campaign=C_EN, adgroup="Photo booth (EN)", url=URL["photobooth"], copy=EN_PHOTOBOOTH,
       kw=P("photo booth rental montreal", "corporate photo booth",
            "photo booth rental laval", "branded photo booth rental")),
  dict(campaign=C_EN, adgroup="Marquee letters (EN)", url=URL["lettres"], copy=EN_LETTERS,
       kw=P("marquee letter rental montreal", "light up letters rental",
            "marquee letters rental", "giant light up letters rental")),
  # ------------------------------------- QUÉBEC-LÉVIS (PAUSE — test)
  dict(campaign=C_QC, adgroup="Corporatif Québec", url=URL["forfaits"], copy=NOEL_QC,
       kw=P("party de bureau québec", "party de noël entreprise québec",
            "location photobooth québec", "location lettres lumineuses québec",
            "party de bureau lévis")),
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
  "location de salle", "salle à louer", "chaise de bureau", "passeport",
  "application", "app", "apps", "logiciel", "photographe", "mac", "macbook",
  "télécharger", "download", "windows", "iphone",
  # Géo hors zone (France)
  "france", "paris", "mayenne", "laval france",
]
NEG_CORPO = ["virtuel", "virtuelle", "en ligne", "escape", "zoom", "idées", "idée",
             "restaurant", "restaurants", "salle", "cadeau", "cadeaux", "déductible",
             "impôt", "impôts", "menu", "hache", "karting", "cuisine", "quiz",
             "mariage", "mariages", "wedding", "noces", "anniversaire", "baby shower",
             "enfant", "enfants"]
NEG_PRIVES = ["entreprise", "entreprises", "corporatif", "corporative", "corporate",
              "employés", "party de bureau", "party des fêtes", "fête de noël",
              "party de noël", "noël", "5 à 7", "team building", "gala", "congrès"]
# Hors zone de livraison (40 km de Sainte-Thérèse) : villes, pas « québec » seul,
# qui bloquerait les requêtes visant la province.
NEG_HORS_ZONE = ["ville de québec", "québec city", "quebec city", "lévis", "levis",
                 "sainte-foy", "charlesbourg", "beauport", "trois-rivières",
                 "sherbrooke", "gatineau", "saguenay", "drummondville", "granby",
                 "saint-hyacinthe"]
NEG_MARQUE = ["evenox", "évenox"]

# ---------------------------------------------------------------- ÉLÉMENTS
# Liens annexes : une page différente par lien (politique Google).
SITELINKS_FR = [
    ("Lettres lumineuses 4 pi", "Célébration 380 $", "Signature 500 $, mot au choix",
     "https://evenox.ca/lettres-lumineuses/"),
    ("Forfaits photobooth", "Essentiel, Signature, Prestige", "599 $, 799 $ ou 999 $",
     URL["photobooth"]),
    ("Forfaits corporatifs", "5 à 7, Party de Bureau, Gala", "De 1 195 $ à 2 495 $",
     "https://evenox.ca/nos-forfaits-tout-inclus"),
    ("Team building", "Jeux géants en mini tournoi", "Pour vos 5 à 7 et fêtes",
     "https://evenox.ca/team-building-activitecorpo/"),
    ("Mariages", "Lettres, photobooth, décor", "Réservez votre date",
     "https://evenox.ca/mariage/"),
    ("À propos d'Évenox", "Plus de 1 000 événements", "Entreprise de Sainte-Thérèse",
     "https://evenox.ca/a-propos/"),
    ("Demander une soumission", "Réponse rapide", "Soumission détaillée en 24 h",
     "https://evenox.ca/contact/"),
    ("Livraison et zones", "Montréal, Laval, Rive-Nord", "Jusqu'à 40 km de Sainte-Thérèse",
     "https://evenox.ca/faq/"),
]
SITELINKS_EN = [
    ("4-ft Marquee Letters", "Célébration package $380", "Signature $500, any word",
     "https://evenox.ca/lettres-lumineuses/"),
    ("Photo Booth Packages", "Essential, Signature, Prestige", "$599, $799 or $999",
     URL["photobooth"]),
    ("Corporate Packages", "5 à 7, Office Party, Gala", "From $1,195 to $2,495",
     "https://evenox.ca/nos-forfaits-tout-inclus"),
    ("Team Building", "Giant games mini tournament", "For team events and parties",
     "https://evenox.ca/team-building-activitecorpo/"),
    ("Weddings", "Letters, photo booth, decor", "Reserve your date",
     "https://evenox.ca/mariage/"),
    ("About Évenox", "1,000+ events delivered", "Based in Sainte-Thérèse",
     "https://evenox.ca/a-propos/"),
    ("Request a Quote", "Fast reply", "Detailed quote within 24 hours",
     "https://evenox.ca/contact/"),
    ("Delivery and Areas", "Montréal, Laval, North Shore", "Up to 40 km from Ste-Thérèse",
     "https://evenox.ca/faq/"),
]
CALLOUTS_FR = ["Installation clé en main", "Soumission en 24 h", "Note Google 4,8/5",
               "Plus de 1 000 événements", "Prix affichés en ligne",
               "Bon de commande accepté", "Net 30 sur approbation", "Réservation en ligne"]
CALLOUTS_EN = ["Turnkey installation", "Quote within 24 hours", "Rated 4.8/5 on Google",
               "1,000+ events delivered", "Posted prices online", "Purchase orders accepted",
               "Net 30 on approval", "Book online"]

# ---------------------------------------------------------------- BUILD
errors = []
BANNED = re.compile(r"%|à partir de|starting at|\bfrom \$|dès\s*\d", re.I)

for _s in STRUCTURE:
    c = _s["copy"]
    _s["copy"] = dict(c, h=[px(x) for x in c["h"]], d=[px(x) for x in c["d"]])


MONTANT = re.compile(r"(\d{1,3}(?:[ \u00a0]\d{3})*)\s?\$(?!\d)|\$(\d{1,3}(?:,\d{3})*)")


def check_montants(where, textes):
    for t in textes:
        for m in MONTANT.finditer(t):
            v = int(re.sub(r"\D", "", m.group(1) or m.group(2)))
            if v not in PRIX_SITE:
                errors.append(f"{where}: montant absent du site ({v} $) : {t}")


def check_copy(where, c):
    check_montants(where, c["h"] + c["d"])
    if len(c["h"]) != 15 or len(set(c["h"])) != 15:
        errors.append(f"{where}: 15 titres uniques requis")
    if len(c["d"]) != 4:
        errors.append(f"{where}: 4 descriptions requises")
    for s in c["h"]:
        if len(s) > LIMITS["h"]:
            errors.append(f"{where}: titre trop long ({len(s)}) {s}")
        if re.search(r"\b[A-Z]{4,}\b", s):
            errors.append(f"{where}: majuscules excessives : {s}")
    for s in c["d"]:
        if len(s) > LIMITS["d"]:
            errors.append(f"{where}: description trop longue ({len(s)}) {s}")
    for s in c["path"]:
        if len(s) > LIMITS["path"]:
            errors.append(f"{where}: chemin trop long {s}")
    for s in c["h"] + c["d"]:
        if BANNED.search(s):
            errors.append(f"{where}: règle de marque violée : {s}")
    for i in c["pins"]:
        if i >= len(c["h"]):
            errors.append(f"{where}: épinglage hors limites")


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
for c, cfg in CAMPAGNES.items():
    # Tout en pause à l'import : activation manuelle après le test du faux lead.
    campaigns.append([c, "Search", "Google Search", f"{cfg['budget']:.2f}",
                      "Maximize clicks", cfg["cpc"], "Paused"])
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
        row += [s["copy"]["h"][i], str(s["copy"]["pins"].get(i, ""))]
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

neg_by_camp = {}
for c in CAMPAGNES:
    lst = list(NEG_COMPTE)
    if c != C_MARQUE:
        lst += NEG_MARQUE
    if c == C_CORPO:
        lst += NEG_CORPO
    if c == C_PRIVES:
        lst += NEG_PRIVES
    if c != C_QC:
        lst += NEG_HORS_ZONE
    neg_by_camp[c] = lst
negs = [[c, k, "Campaign Negative Phrase"] for c, lst in neg_by_camp.items() for k in lst]
H_NEG = ["Campaign", "Keyword", "Criterion Type"]
write("5_mots_cles_negatifs.csv", H_NEG, negs)

# Contrôle : aucun négatif (expression) ne doit bloquer un mot-clé de sa campagne.
for c, ag, kw, mt, _ in keywords:
    toks = kw.lower().split()
    for n in neg_by_camp[c]:
        nt = n.lower().split()
        if any(toks[i:i + len(nt)] == nt for i in range(len(toks) - len(nt) + 1)):
            errors.append(f"Conflit : « {n} » bloque « {kw} » ({c} / {ag})")

sl = []
for c in CAMPAGNES:
    data = SITELINKS_EN if c == C_EN else SITELINKS_FR
    for t, d1, d2, u in data:
        t, d1, d2 = px(t), px(d1), px(d2)
        check_montants(f"{c} / lien annexe", [t, d1, d2])
        if len(t) > LIMITS["sl"] or max(len(d1), len(d2)) > LIMITS["sld"]:
            errors.append(f"{c}: lien annexe trop long : {t} / {d1} / {d2}")
        sl.append([c, t, d1, d2, u])
for data in (SITELINKS_FR, SITELINKS_EN):
    if len({x[3] for x in data}) != len(data):
        errors.append("Liens annexes : URL en double")
H_SL = ["Campaign", "Link Text", "Description Line 1", "Description Line 2", "Final URL"]
write("6_liens_annexes.csv", H_SL, sl)
co = []
for c in CAMPAGNES:
    for t in (CALLOUTS_EN if c == C_EN else CALLOUTS_FR):
        if len(t) > LIMITS["co"]:
            errors.append(f"{c}: accroche trop longue : {t}")
        co.append([c, t])
H_CO = ["Campaign", "Callout text"]
write("7_accroches.csv", H_CO, co)

# Fichier unique : chaque ligne décrit une seule entité, colonnes non pertinentes
# vides (answer/56368). « Description Line 1/2 » est un alias de « Description 1/2 »
# (answer/57747) : dans ce fichier, les descriptions de liens vont dans ces colonnes.
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

# Résumé
print(f"Campagnes : {len(campaigns)} | Groupes : {len(adgroups)} | Mots-clés : "
      f"{len(keywords)} | Annonces : {len(ads)} | Négatifs : {len(negs)}")
lanc = sum(cfg["budget"] for cfg in CAMPAGNES.values() if cfg["lancement"])
print(f"Budget plafond des campagnes de lancement : {lanc} $/jour (tout importé en pause)")
if lanc != 300:
    errors.append(f"Budget de lancement = {lanc}, attendu 300")
if errors:
    print("ERREURS :\n" + "\n".join(errors))
    sys.exit(1)
print("OK : limites, règles de marque, majuscules, prix = site, liens distincts, 0 conflit négatif/mot-clé")
