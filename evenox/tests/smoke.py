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
    if "add_action" in php or "add_filter" in php:
        fail.append("plugin: doit rester inerte (aucun hook front)")
    if "evenox-form-src" in php or "evenoxRunScripts" in php or "evenoxInject" in php:
        fail.append("plugin: ne plus injecter le wizard")
    if "querySelector" in php and "et_builder_inner_content" in php:
        fail.append("plugin: ne jamais cibler et_builder_inner_content")
    if 'querySelector("#calculateur")' in php or 'querySelector(".tc-calc")' in php:
        fail.append("plugin: ne pas remplacer #calculateur / .tc-calc")
    if "visibility:hidden" in php:
        fail.append("plugin: ne plus cacher le contenu Divi")
    if "1.0.3-restore" not in php:
        fail.append("plugin: version 1.0.3-restore attendue")

zpath = ROOT / "plugin" / "evenox-formulaire.zip"
if not zpath.is_file() or zpath.stat().st_size < 1000:
    fail.append("zip plugin manquant")

if fail:
    print("FAIL")
    for f in fail:
        print(" -", f)
    sys.exit(1)
print("OK", 1, "module + plugin")
