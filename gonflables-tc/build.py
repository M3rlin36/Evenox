#!/usr/bin/env python3
"""Assemble le calculateur jeux gonflables (squelette tables-chaises)."""
from __future__ import annotations

import json
import pathlib
import re

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent


def one_line(text: str) -> str:
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    text = re.sub(r"\n+", " ", text)
    text = re.sub(r"[ \t]{2,}", " ", text)
    return text.strip()


def inject_js() -> str:
    cat = json.loads((HERE / "catalogue.json").read_text(encoding="utf-8"))
    zones = json.loads((HERE / "zones.json").read_text(encoding="utf-8"))
    core = (HERE / "jg-core.js").read_text(encoding="utf-8")
    wiz = (HERE / "jg-wizard.js").read_text(encoding="utf-8")
    core = core.replace(
        "/*INJ_CATALOGUE*/",
        json.dumps(cat["produits"], ensure_ascii=False, separators=(",", ":")),
    )
    core = core.replace(
        "/*INJ_ZONES*/",
        json.dumps(zones, ensure_ascii=False, separators=(",", ":")),
    )
    core = core.replace("/*INJ_SIMULE*/", "true")
    return "<script>" + one_line(core) + one_line(wiz) + "</script>"


def css_block() -> str:
    css = (HERE / "jg-styles.css").read_text(encoding="utf-8")
    return "<style>" + one_line(css) + "</style>"


def html_block() -> str:
    return one_line((HERE / "jg-section.html").read_text(encoding="utf-8"))


def fallback_page(inner: str) -> str:
    css = (HERE / "tc-fallback.css").read_text(encoding="utf-8")
    return (
        "<!doctype html><html lang=\"fr\"><head><meta charset=\"utf-8\">"
        "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">"
        "<title>Calculateur jeux gonflables — Évenox</title>"
        "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">"
        "<link href=\"https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800&display=swap\" rel=\"stylesheet\">"
        f"<style>{one_line(css)}</style></head>"
        f"<body><div class=\"tc-page\">{inner}</div></body></html>"
    )


def main() -> None:
    inner = css_block() + html_block() + inject_js()
    page = fallback_page(inner)
    (ROOT / "test-gonflables-tc.html").write_text(page, encoding="utf-8")
    payload = one_line(inner)
    (HERE / "payload.txt").write_text(payload, encoding="utf-8")
    print("ecrit", ROOT / "test-gonflables-tc.html")
    print("ecrit", HERE / "payload.txt")
    print("taille_payload", len(payload))


if __name__ == "__main__":
    main()
