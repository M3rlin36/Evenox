#!/usr/bin/env python3
"""Vérifie les règles dures du formulaire Evenox."""
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
MOD = ROOT / "modules"
fail = []


def read(name):
    return (MOD / name).read_text(encoding="utf-8")


form = read("tables-chaises.html")

if "alert(" in form:
    fail.append("alert() interdit — erreur inline seulement")
if "display:none" not in form or "evx-merci" not in form:
    fail.append("tables: #evx-merci doit être caché")
for step in ("evx-step-invites", "evx-step-mode", "evx-step-chaises", "evx-step-tables", "evx-step-coord"):
    if step not in form:
        fail.append("tables: étape manquante " + step)
if "evx-estime" not in form:
    fail.append("tables: estimation manquante")
if "evx_soumission" not in form:
    fail.append("tables: webhook evx_soumission manquant")
if "EVENOX_PREVIEW" not in form:
    fail.append("tables: drapeau preview manquant")
if "#5E17EB" not in form:
    fail.append("tables: couleur Évenox manquante")
if "#0E2C4F" in form or "#1088B5" in form:
    fail.append("tables: couleurs Locabris ne doivent pas être copiées")
if "Pliante blanche" not in form or "Rectangulaire 6 pi" not in form:
    fail.append("tables: catalogue Evenox manquant")
if "J7E" not in form or "Sainte-Thérèse" not in form:
    fail.append("tables: zones de livraison manquantes")
if "hooks.zapier.com" in form:
    fail.append("tables: ne pas inventer un Zapier")

plug = ROOT / "plugin" / "evenox-formulaire" / "evenox-formulaire.php"
if not plug.is_file():
    fail.append("plugin PHP manquant")
else:
    php = plug.read_text(encoding="utf-8")
    if "location-tables-chaises" not in php:
        fail.append("plugin: slug de page manquant")
    if "evenoxRunScripts" not in php or "evenox-form-src" not in php:
        fail.append("plugin: le JS du module doit être relancé après injection")
    if "#main-content .et_builder_inner_content" not in php:
        fail.append("plugin: doit remplacer #main-content .et_builder_inner_content")
    if php.find('querySelector("#calculateur")') != -1 and php.find('querySelector("#calculateur")') < php.find("#main-content .et_builder_inner_content"):
        fail.append("plugin: ne pas injecter dans #calculateur avant le contenu Divi")
    if ".evenox-form-tables #main-content .et_builder_inner_content{visibility:hidden}" not in php:
        fail.append("plugin: cacher le contenu Divi jusqu'au remplacement")
    if "1.0.1" not in php:
        fail.append("plugin: version 1.0.1 attendue")

zpath = ROOT / "plugin" / "evenox-formulaire.zip"
if not zpath.is_file() or zpath.stat().st_size < 1000:
    fail.append("zip plugin manquant")

if fail:
    print("FAIL")
    for f in fail:
        print(" -", f)
    sys.exit(1)
print("OK", 1, "module + plugin")
