#!/usr/bin/env python3
"""Ouvre une fiche a 375 x 667 et rapporte ce qui tient dans le premier ecran.

Usage: premier_ecran.py URL prefixe_sortie
Ecrit prefixe_sortie.png (premier ecran), prefixe_sortie_full.png (page
entiere) et prefixe_sortie.json (geometrie verticale, ligne par ligne, du
haut de page jusqu'au lien des conditions).
"""
import json
import sys

from playwright.sync_api import sync_playwright

url, prefix = sys.argv[1], sys.argv[2]
VP_H = 667
LIMITE = 2600

JS = """(args) => {
  const [vph, limite] = args;
  const out = [];
  const push = (label, el) => {
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) return;
    const top = Math.round(r.top + window.scrollY);
    if (top > limite) return;
    out.push({label,
              top,
              hauteur: Math.round(r.height),
              premierEcran: top < vph,
              texte: (el.innerText || el.textContent || '').replace(/\\s+/g, ' ').trim().slice(0, 100)});
  };
  document.querySelectorAll('body *').forEach((el) => {
    const tag = el.tagName.toLowerCase();
    if (['script', 'style', 'svg', 'path', 'br', 'head'].includes(tag)) return;
    const cls = (el.className || '').toString().trim().split(/\\s+/).filter(Boolean).slice(0, 3).join('.');
    const feuille = el.children.length === 0;
    const interessant = feuille
      || /^(h1|h2|h3|img|button|bq-product-price|bq-product-price-label|table)$/.test(tag)
      || /evx-(carte|sous|hero|h1|depot|micro|duree|source)/.test(cls)
      || /booqable/.test(cls);
    if (!interessant) return;
    push(tag + (cls ? '.' + cls : ''), el);
  });
  out.sort((a, b) => a.top - b.top || b.hauteur - a.hauteur);
  return {hauteurPage: document.documentElement.scrollHeight, blocs: out};
}"""

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path="/usr/bin/google-chrome-stable")
    page = browser.new_page(viewport={"width": 375, "height": VP_H},
                            device_scale_factor=2,
                            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) "
                                       "AppleWebKit/605.1.15 (KHTML, like Gecko) "
                                       "Version/17.0 Mobile/15E148 Safari/604.1")
    page.goto(url, wait_until="load", timeout=90000)
    page.wait_for_timeout(7000)
    page.screenshot(path=prefix + ".png")
    page.screenshot(path=prefix + "_full.png", full_page=True)
    data = page.evaluate(JS, [VP_H, LIMITE])
    with open(prefix + ".json", "w", encoding="utf-8") as fh:
        json.dump(data, fh, ensure_ascii=False, indent=1)
    print("hauteurPage", data["hauteurPage"])
    for b in data["blocs"]:
        marque = "PREMIER" if b["premierEcran"] else "       "
        print(f"{b['top']:>6} h={b['hauteur']:>4} {marque} {b['label'][:42]:<42} {b['texte'][:62]}")
    browser.close()
