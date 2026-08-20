#!/usr/bin/env python3
"""Extrait le texte visible d'une fiche produit Evenox et compte les mots.

Usage: extract.py fichier.html [--main]
Sans --main : tout le body. Avec --main : le contenu principal de la fiche
(on retire header, nav, footer, aside) pour approcher le compte de mots
annonce pour la fiche de reference.
"""
import re
import sys

from bs4 import BeautifulSoup

path = sys.argv[1]
main_only = "--main" in sys.argv

with open(path, encoding="utf-8", errors="replace") as fh:
    soup = BeautifulSoup(fh.read(), "lxml")

for tag in soup(["script", "style", "noscript", "svg", "template"]):
    tag.decompose()

root = soup.body or soup
if main_only:
    for sel in ["header", "footer", "nav"]:
        for tag in root.select(sel):
            tag.decompose()
    candidate = root.select_one("main") or root.select_one(".site-main") or root
    root = candidate

text = root.get_text("\n")
lines = [re.sub(r"\s+", " ", ln).strip() for ln in text.split("\n")]
lines = [ln for ln in lines if ln]
out = []
for ln in lines:
    if out and out[-1] == ln:
        continue
    out.append(ln)
body = "\n".join(out)
words = len(re.findall(r"[^\s]+", body))
sys.stderr.write(f"{path} main_only={main_only} mots={words}\n")
print(body)
