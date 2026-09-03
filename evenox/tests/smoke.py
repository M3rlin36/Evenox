#!/usr/bin/env python3
"""Le CTA jeux géants doit viser location-jeux-geants, pas tables/chaises."""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
fail: list[str] = []

NEW = "https://evenox.ca/location-jeux-geants/#configurateur"
OLD_NEEDLE = "location-tables-chaises"
PAGE_SLUG = "jeux-geants-interactifs"


def read(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def rewrite_html(html: str, new: str = NEW) -> str:
    """Miroir Python de evenox_cta_jg_rewrite_html()."""

    def repl(m: re.Match[str]) -> str:
        attrs = m.group(1)
        hm = re.search(r'\bhref=("|\')([^"\']*)\1', attrs, flags=re.I)
        if not hm:
            return m.group(0)
        if not re.search(r"location-tables-chaises(/|\?|#|$)", hm.group(2), flags=re.I):
            return m.group(0)
        attrs = re.sub(
            r'(\bhref=)("|\')([^"\']*)\2',
            rf"\1\2{new}\2",
            attrs,
            count=1,
            flags=re.I,
        )
        return "<a" + attrs + ">"

    return re.sub(
        r'<a\b([^>]*\bclass="[^"]*\bevx-fin-1\b[^"]*"[^>]*)>',
        repl,
        html,
        flags=re.I,
    )


plug = ROOT / "plugin" / "evenox-cta-jeux-geants" / "evenox-cta-jeux-geants.php"
if not plug.is_file():
    fail.append("plugin PHP manquant")
    php = ""
else:
    php = read(plug)

if php:
    if PAGE_SLUG not in php:
        fail.append("plugin: slug jeux-geants-interactifs manquant")
    if "is_page(79)" not in php and "EVENOX_CTA_JG_PAGE_ID', 79" not in php and "PAGE_ID', 79" not in php:
        fail.append("plugin: page-id 79 manquant")
    if NEW not in php:
        fail.append("plugin: URL location-jeux-geants/#configurateur manquante")
    if "location-tables-chaises" not in php:
        fail.append("plugin: doit reconnaître l'ancien href tables/chaises")
    dest_defines = re.findall(r"define\('EVENOX_CTA_JG_NEW',\s*'([^']+)'\)", php)
    if dest_defines != [NEW]:
        fail.append("plugin: EVENOX_CTA_JG_NEW doit être " + NEW)
    if "is_page('equipement')" in php or "is_page('jeux-geants')" in php:
        fail.append("plugin: hors scope — /equipement/ et /jeux-geants/ exclus")
    if "evenox_cta_jg_rewrite_html" not in php:
        fail.append("plugin: fonction de réécriture manquante")
    if "a.evx-fin-1" not in php:
        fail.append("plugin: JS footer doit cibler a.evx-fin-1")
    if "1.0.0" not in php:
        fail.append("plugin: version 1.0.0 attendue")
    if "querySelector(\"#main-content .et_builder_inner_content\")" in php:
        fail.append("plugin: ne jamais cibler et_builder_inner_content")

snippet = ROOT / "snippets" / "evx-fin-jeux-geants.html"
if not snippet.is_file():
    fail.append("snippet Divi manquant")
else:
    html = read(snippet)
    if NEW not in html:
        fail.append("snippet: href location-jeux-geants/#configurateur manquant")
    anchors = re.findall(r'<a\b[^>]*\bclass="[^"]*\bevx-fin-1\b[^"]*"[^>]*>', html, flags=re.I)
    if not anchors:
        fail.append("snippet: ancre evx-fin-1 manquante")
    for tag in anchors:
        if "location-tables-chaises" in tag:
            fail.append("snippet: evx-fin-1 ne doit pas viser tables/chaises")
        if NEW not in tag:
            fail.append("snippet: evx-fin-1 doit viser location-jeux-geants/#configurateur")
    if "evx-fin-1" not in html:
        fail.append("snippet: classe evx-fin-1 manquante")
    if "tel:+15145591893" not in html:
        fail.append("snippet: garder le CTA téléphone")

fixture = ROOT / "tests" / "fixtures" / "evx-fin-live.html"
if not fixture.is_file():
    fail.append("fixture live manquante")
else:
    live = read(fixture)
    if 'href="https://evenox.ca/location-tables-chaises/"' not in live:
        fail.append("fixture: doit capturer l'ancien href tables/chaises")
    fixed = rewrite_html(live)
    if NEW not in fixed:
        fail.append("rewrite: le href n'est pas devenu location-jeux-geants/#configurateur")
    if re.search(r'class="evx-fin-1"[^>]*location-tables-chaises', fixed):
        fail.append("rewrite: evx-fin-1 pointe encore vers tables/chaises")
    if "tel:+15145591893" not in fixed:
        fail.append("rewrite: ne pas toucher evx-fin-2")
    already = live.replace(
        "https://evenox.ca/location-tables-chaises/",
        NEW,
    )
    if rewrite_html(already) != already:
        fail.append("rewrite: ne pas modifier un CTA déjà correct")
    other = '<a class="evx-fin-1" href="https://evenox.ca/contact/">Monter mon forfait</a>'
    if rewrite_html(other) != other:
        fail.append("rewrite: ne pas réécrire un href hors tables/chaises")
    tables_page = '<a class="other" href="https://evenox.ca/location-tables-chaises/">x</a>'
    if rewrite_html(tables_page) != tables_page:
        fail.append("rewrite: ne réécrire que evx-fin-1")

zpath = ROOT / "plugin" / "evenox-cta-jeux-geants.zip"
if not zpath.is_file() or zpath.stat().st_size < 400:
    fail.append("zip plugin manquant — lancer plugin/pack.sh")

if fail:
    print("FAIL")
    for item in fail:
        print(" -", item)
    sys.exit(1)
print("OK plugin + snippet + rewrite")
