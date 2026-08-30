#!/usr/bin/env python3
"""Vérifie les règles dures du méga-prompt sur les modules."""
from pathlib import Path
import re
import sys

MOD = Path(__file__).resolve().parents[1] / "modules"
fail = []


def read(name):
    return (MOD / name).read_text(encoding="utf-8")


soum = read("soumission.html")
ctc = read("contact.html")
priv = read("privacy.html")
shop = read("shop-description.html")
fiche = read("product-abri.html")

if 'split("").join(" ")' in soum or "split('').join(' ')" in soum:
    fail.append("soumission: split/join encore présent")
if "display:none" not in soum or "loca-merci" not in soum:
    fail.append("soumission: #loca-merci doit être caché")
if "loca-step-choix" not in soum or "loca-step-achat" not in soum:
    fail.append("soumission: wizard incomplet")
if "window.location.href='/shop/'" in soum:
    fail.append("soumission: les cartes ne doivent plus naviguer")
if "alert(" in soum or "alert(" in ctc:
    fail.append("alert() interdit — erreur inline seulement")
if "Message envoyé" in ctc and "display:none" not in ctc:
    fail.append("contact: succès doit être display:none")
# la colonne succès permanente n'a plus le check SVG hors #ctc-ok
if ctc.count("Message envoyé") != 1:
    fail.append("contact: un seul bloc succès")
if "Loi 25" not in priv or "Zapier" not in priv:
    fail.append("privacy: Loi 25 / Zapier manquant")
if ".et_pb_section" in shop:
    fail.append("shop description ne doit plus contenir de CSS footer")
if "en location" in fiche.lower() or "Abris Hivernale" in fiche:
    fail.append("fiche: vocabulaire location / faute")
if "400 $" not in fiche or "Demander une soumission" not in fiche:
    fail.append("fiche: prix ou CTA manquant")
if "hooks.zapier.com/hooks/catch/16509085/udt0i4j" not in soum:
    fail.append("soumission: webhook Zapier manquant")
if "#0E2C4F" not in soum or "#1088B5" not in soum:
    fail.append("soumission: couleurs branding manquantes")

plug = Path(__file__).resolve().parents[1] / "plugin" / "locabris-correctifs" / "locabris-correctifs.php"
if not plug.is_file():
    fail.append("plugin PHP manquant")
else:
    php = plug.read_text(encoding="utf-8")
    if "soumission-location-tempo" not in php or "wp_redirect" not in php:
        fail.append("plugin: slugs ou 301 manquants")
    if "abri-hivernal-11-x-12" not in php or "accessoires" not in php:
        fail.append("plugin: 301 slugs produits / accessoires manquants")
    if "Abri hivernal" not in php or "Panier | Locabris" not in php:
        fail.append("plugin: titres produits ou Woo FR manquants")
    if "woocommerce_checkout_redirect_empty_cart" not in php:
        fail.append("plugin: checkout ne doit plus renvoyer au panier vide")
    if "background: #0E2C4F" not in php or "is_front_page" not in php:
        fail.append("plugin: masque de la tuile navy accueil manquant")
zpath = Path(__file__).resolve().parents[1] / "plugin" / "locabris-correctifs.zip"
if not zpath.is_file() or zpath.stat().st_size < 1000:
    fail.append("zip plugin manquant")

if fail:
    print("FAIL")
    for f in fail:
        print(" -", f)
    sys.exit(1)
print("OK", len([soum, ctc, priv, shop, fiche]), "modules + plugin")
