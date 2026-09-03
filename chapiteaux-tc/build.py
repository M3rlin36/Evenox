#!/usr/bin/env python3
"""Assemble le calculateur chapiteaux (squelette tables-chaises)."""
from __future__ import annotations

import json
import pathlib
import re

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent
WIN_SOURCE = pathlib.Path(r"C:\Users\Admin\Evenox\page-tables-chaises.html")


def one_line(text: str) -> str:
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    text = re.sub(r"\n+", " ", text)
    text = re.sub(r"[ \t]{2,}", " ", text)
    return text.strip()


def inject_js() -> str:
    cat = json.loads((HERE / "catalogue.json").read_text(encoding="utf-8"))
    zones = json.loads((HERE / "zones.json").read_text(encoding="utf-8"))
    core = (HERE / "ch-core.js").read_text(encoding="utf-8")
    wiz = (HERE / "ch-wizard.js").read_text(encoding="utf-8")
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
    css = (HERE / "ch-styles.css").read_text(encoding="utf-8")
    return "<style>" + one_line(css) + "</style>"


def html_block() -> str:
    return one_line((HERE / "ch-section.html").read_text(encoding="utf-8"))


def js_block() -> str:
    return inject_js()


def fallback_page(inner: str) -> str:
    css = (HERE / "tc-fallback.css").read_text(encoding="utf-8")
    return (
        "<!doctype html><html lang=\"fr\"><head><meta charset=\"utf-8\">"
        "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">"
        "<title>Calculateur chapiteaux — Évenox</title>"
        "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">"
        "<link href=\"https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800&display=swap\" rel=\"stylesheet\">"
        f"<style>{one_line(css)}</style></head>"
        f"<body><div class=\"tc-page\">{inner}</div></body></html>"
    )


def wrap_in_source(source: str, inner: str) -> str:
    m = re.search(r'(<div[^>]+id=["\']kit-wizard["\'][\s\S]*?</div>\s*)(?=<script|</body>|$)', source, re.I)
    if not m:
        m = re.search(r'(<section[^>]+class=["\'][^"\']*kit-wizard[\s\S]*?</section>)', source, re.I)
    if m:
        return source[: m.start()] + inner + source[m.end() :]
    return fallback_page(inner)


def main() -> None:
    inner = css_block() + html_block() + js_block()
    if WIN_SOURCE.exists():
        page = wrap_in_source(WIN_SOURCE.read_text(encoding="utf-8", errors="replace"), inner)
    else:
        page = fallback_page(inner)
    (ROOT / "test-chapiteaux-tc.html").write_text(page, encoding="utf-8")
    payload = one_line(inner)
    (HERE / "payload.txt").write_text(payload, encoding="utf-8")
    print("ecrit", ROOT / "test-chapiteaux-tc.html")
    print("ecrit", HERE / "payload.txt")
    print("taille_payload", len(payload))


if __name__ == "__main__":
    main()
