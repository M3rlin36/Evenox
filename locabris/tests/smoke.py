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
simples = read("simples.html")
doubles = read("doubles.html")

if 'split("").join(" ")' in soum or "split('').join(' ')" in soum:
    fail.append("soumission: split/join encore présent")
if "display:none" not in soum or "loca-merci" not in soum:
    fail.append("soumission: #loca-merci doit être caché")
if "loca-step-choix" not in soum or "loca-step-abri" not in soum or "loca-step-coord" not in soum:
    fail.append("soumission: calculateur incomplet")
if "loca-estime" not in soum or "loca-step-achat" not in soum:
    fail.append("soumission: estimation ou étape pose manquante")
if "loca-panier" not in soum or "loca-step-qte" not in soum or "loca-qty" not in soum:
    fail.append("soumission: kit Evenox (panier, quantité) manquant")
if "Montez votre kit" not in soum or "Voir mon prix" not in soum:
    fail.append("soumission: en-tête kit ou bouton prix manquant")
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
if "loca-modele" not in simples or 'data-w="11"' not in simples or 'data-w="12"' not in simples:
    fail.append("simples: deux fiches 11 et 12 pieds manquantes")
if simples.count("loca-chip") < 10:
    fail.append("simples: longueurs manquantes")
if "en location" in simples.lower():
    fail.append("simples: vocabulaire location")
if doubles.count('class="loca-modele"') != 3:
    fail.append("doubles: trois fiches de largeur attendues")
if 'data-w="16"' not in doubles or 'data-w="18"' not in doubles or 'data-w="20"' not in doubles:
    fail.append("doubles: cartes 16, 18 et 20 pieds manquantes")
if doubles.count("loca-chip") < 8:
    fail.append("doubles: longueurs ou toits manquants")
if "en location" in doubles.lower():
    fail.append("doubles: vocabulaire location")
if "loca-on" not in doubles or "soumission-location-tempo" not in doubles:
    fail.append("doubles: sélection ou CTA soumission manquant")

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
    if "locabris_fix_strip_home_navy_tile" not in php or "litespeed_buffer_after" not in php or "is_front_page" not in php:
        fail.append("plugin: retrait de la tuile navy accueil manquant")
    if "locabrisRunScripts" not in php or "locabris-correctifs-src" not in php:
        fail.append("plugin: le JS des modules doit être relancé après injection")
    if "location-abri-simple" not in php or "simples.html" not in php:
        fail.append("plugin: page abris simples manquante")
    if "abri-double" not in php or "doubles.html" not in php:
        fail.append("plugin: page abris doubles manquante")
    if "1.4.0" not in php:
        fail.append("plugin: version 1.4.0 manquante")
zpath = Path(__file__).resolve().parents[1] / "plugin" / "locabris-correctifs.zip"
if not zpath.is_file() or zpath.stat().st_size < 1000:
    fail.append("zip plugin manquant")

if fail:
    print("FAIL")
    for f in fail:
        print(" -", f)
    sys.exit(1)
print("OK", len([soum, ctc, priv, shop, fiche, simples, doubles]), "modules + plugin")
