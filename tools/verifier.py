#!/usr/bin/env python3
"""Verifie qu'aucune phrase de la version allegee n'a ete reecrite.

Chaque phrase de plus de trois mots du texte allege doit se retrouver, au mot,
dans le texte de la page d'origine. Une seule operation est autorisee : couper.

Usage: verifier.py page.html texte_allege.txt
"""
import re
import sys

from bs4 import BeautifulSoup

html_path, apres_path = sys.argv[1], sys.argv[2]

soup = BeautifulSoup(open(html_path, encoding="utf-8", errors="replace").read(), "lxml")
for tag in soup(["script", "style", "noscript", "svg", "template"]):
    tag.decompose()
avant = re.sub(r"\s+", " ", soup.get_text(""))

texte = open(apres_path, encoding="utf-8").read()
phrases = []
for ligne in texte.split("\n"):
    for p in re.split(r"(?<=[.!?»])\s+", ligne.strip()):
        p = re.sub(r"\s+", " ", p).strip(" ‹›|")
        if len(p.split()) > 3:
            phrases.append(p)

manquantes = [p for p in phrases if p not in avant]
print(f"{apres_path} : {len(phrases)} phrases de plus de trois mots verifiees")
if manquantes:
    print(f"  {len(manquantes)} A VERIFIER A LA MAIN (jointure de coupe ou reecriture) :")
    for p in manquantes:
        print("   -", p)
else:
    print("  toutes presentes au mot dans la page d'origine")
