#!/usr/bin/env python3
"""Controle des fiches minces : mots, interdits, style/script, variants."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path("/workspace/livraisons/fiches-minces")

INTERDITS = [
    "livraison incluse",
    "livraison gratuite",
    "montage compris",
    "annulation gratuite 7 jours",
    "report sans frais en cas de pluie",
    "remplacement pendant l'événement",
    "remplacement pendant l'evenement",
    "livré, placé, ramassé",
    "livre, place, ramasse",
]

STYLE_SCRIPT = re.compile(r"<(style|script)\b[^>]*>(.*?)</\1>", re.I | re.S)
HTML_BLOCK = re.compile(r"```html\n(.*?)```", re.S)
TAGS = re.compile(r"<[^>]+>")
NBSP = "\u00a0"

VARIANTS = {
    "slush": [
        "forfait-cle-en-main-slush-50-personnes",
        "forfait-cle-en-main-slush-100-personnes",
        "forfait-cle-en-main-slush-500-personnes",
    ],
    "popcorn": [
        "forfait-cle-en-main-popcorn-50-personnes",
        "forfait-cle-en-main-popcorn-100-personnes",
        "machine-a-popcorn-avec-grain",
    ],
    "tapis": [
        "forfait-tapis-rouge-10-pieds-poteaux",
        "forfait-tapis-rouge-20-pieds-poteaux",
        "forfait-tapis-rouge-40-pieds-poteaux",
        "forfait-tapis-rouge-60-pieds-poteaux",
    ],
    "etincelle": [
        "forfait-cle-en-main-2-machine-a-etincelle",
        "forfait-cle-en-main-4-machine-a-etincelle",
    ],
    "demande": [
        "la-demande-originale",
        "la-demande-ultime",
        "neon-marry-me",
    ],
}


def visible_words(html: str) -> list[str]:
    txt = TAGS.sub(" ", html)
    txt = txt.replace(NBSP, " ").replace("&nbsp;", " ").replace("&times;", "×")
    txt = re.sub(r"\s+", " ", txt).strip()
    return [w for w in txt.split(" ") if w]


def jaccard(a: list[str], b: list[str]) -> float:
    sa, sb = set(w.lower() for w in a), set(w.lower() for w in b)
    if not sa or not sb:
        return 0.0
    return len(sa & sb) / len(sa | sb)


def main() -> None:
    skip = {"RAPPORT.md", "README.md"}
    files = sorted(p for p in ROOT.glob("*.md") if p.name not in skip)
    print(f"fichiers md: {len(files)}")
    laissees, enrichies = [], []
    for p in files:
        text = p.read_text(encoding="utf-8")
        m = HTML_BLOCK.search(text)
        if not m:
            laissees.append(p.stem)
            if "Laissée telle quelle" not in text and "Laissee telle quelle" not in text:
                print(f"  ? {p.name}: pas de HTML, pas marquee laissee")
            continue
        html = m.group(1)
        words = visible_words(html)
        n = len(words)
        enrichies.append((p.stem, n, html, words, text))
        flag = "OK" if 350 <= n <= 500 else ("COURT" if n < 350 else "LONG")
        print(f"  {flag:5} {n:4}  {p.stem}")

        low = html.lower()
        for phrase in INTERDITS:
            if phrase in low:
                print(f"    INTERDIT: {phrase}")

        for sm in STYLE_SCRIPT.finditer(html):
            inner = sm.group(2)
            if "\n\n" in inner or inner.startswith("\n") or inner.endswith("\n\n"):
                print(f"    PIEGE lignes vides dans <{sm.group(1)}>")
            if "\n\n" in inner:
                print(f"    PIEGE double newline dans <{sm.group(1)}>")

        # empty lines inside the html block
        if "\n\n" in html:
            print("    NOTE: ligne vide dans le HTML a coller")

        # prices other than established delivery
        for pm in re.finditer(r"(\d[\d\s]*,\d{2}\s*\$)", html):
            val = pm.group(1).replace("\xa0", " ").strip()
            if val not in {"100,00 $", "7,00 $", "100,00&nbsp;$", "7,00&nbsp;$"}:
                # allow nbsp variants
                compact = val.replace(" ", "").replace("\xa0", "")
                if compact not in {"100,00$", "7,00$"}:
                    print(f"    PRIX: {pm.group(1)!r}")

        if "bq-product-price" in text and not re.search(r"<bq-product-price[\s>]", text):
            print("    PIEGE: bq-product-price non borne")

    print(f"\nenrichies: {len(enrichies)}  laissees: {len(laissees)}")
    print("laissees:", ", ".join(laissees))

    print("\n--- jaccard variantes ---")
    by = {stem: words for stem, _n, _h, words, _t in enrichies}
    for family, slugs in VARIANTS.items():
        print(f" {family}")
        for i, a in enumerate(slugs):
            for b in slugs[i + 1 :]:
                if a in by and b in by:
                    print(f"   {a} × {b}: {jaccard(by[a], by[b]):.2%}")


if __name__ == "__main__":
    main()
