#!/usr/bin/env python3
"""Compte les mots d'une fiche AVANT et APRES, avec la meme methode.

Applique hors ligne, sur le HTML enregistre, exactement les memes coupes que
tools/apres.py, puis compte les mots du contenu principal (sans en-tete, sans
pied de page, sans menu) dans les deux etats.

Usage: compter.py fichier.html fichier_ops.json [--texte sortie.txt]
"""
import json
import re
import sys

from bs4 import BeautifulSoup

html_path, ops_path = sys.argv[1], sys.argv[2]
sortie = None
if "--texte" in sys.argv:
    sortie = sys.argv[sys.argv.index("--texte") + 1]

spec = json.load(open(ops_path, encoding="utf-8"))
ops = spec["coupes"] if isinstance(spec, dict) else spec


def norm(s):
    return re.sub(r"\s+", " ", s).strip()


def charger():
    soup = BeautifulSoup(open(html_path, encoding="utf-8", errors="replace").read(), "lxml")
    for tag in soup(["script", "style", "noscript", "svg", "template"]):
        tag.decompose()
    for sel in ["header", "footer", "nav"]:
        for tag in soup.select(sel):
            tag.decompose()
    return soup, soup.select_one("main") or soup.select_one(".site-main") or soup.body


def texte(racine):
    lignes = [norm(x) for x in racine.get_text("\n").split("\n")]
    lignes = [x for x in lignes if x]
    out = []
    for x in lignes:
        if out and out[-1] == x:
            continue
        out.append(x)
    return "\n".join(out)


def mots(t):
    return len(re.findall(r"\S+", t))


soup, racine = charger()
avant = texte(racine)

soup, racine = charger()
journal = []
for op in ops:
    kind = op["op"]
    els = soup.select(op["sel"])
    if kind == "remove":
        n = 0
        for el in els:
            if op.get("contient") and op["contient"] not in norm(el.get_text(" ")):
                continue
            el.decompose()
            n += 1
        journal.append(("remove", op["sel"], op.get("contient", ""), n))
    elif kind == "garder_debut":
        for el in els:
            t = norm(el.get_text(""))
            i = t.find(op["jusqua"])
            if i >= 0:
                el.clear()
                el.append(t[: i + len(op["jusqua"])])
        journal.append(("garder_debut", op["sel"], op["jusqua"], len(els)))
    elif kind == "retirer_phrase":
        n = 0
        for el in els:
            t = norm(el.get_text(""))
            if op["phrase"] in t:
                el.clear()
                el.append(norm(t.replace(op["phrase"], "")))
                n += 1
        journal.append(("retirer_phrase", op["sel"], op["phrase"][:40], n))
    elif kind == "garder_n_enfants":
        for el in els:
            for c in el.find_all(recursive=False)[op["n"]:]:
                c.decompose()
        journal.append(("garder_n_enfants", op["sel"], op["n"], len(els)))
    elif kind == "garder_lignes_tableau":
        for el in els:
            for i, tr in enumerate(el.select("tr")):
                t = norm(tr.get_text(" "))
                if i == 0 or any(t.startswith(l) for l in op["libelles"]):
                    continue
                tr.decompose()
        journal.append(("garder_lignes_tableau", op["sel"], op["libelles"], len(els)))

apres = texte(racine)
for j in journal:
    print("  ", j)
ma, mp = mots(avant), mots(apres)
print(f"AVANT {ma} mots | APRES {mp} mots | retire {ma - mp} mots = {100 * (ma - mp) / ma:.0f} %")
if sortie:
    with open(sortie, "w", encoding="utf-8") as fh:
        fh.write(apres)
    print("texte allege ecrit dans", sortie)
