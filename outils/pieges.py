#!/usr/bin/env python3
"""Depouillement des trois pieges connus.

Le classement distingue les affirmations reelles des mentions qui, en contexte,
disent l'inverse. Exemple : « Livraison et installation incluses ? Non, en
supplement par defaut » contient les mots « incluses » mais enonce la bonne
regle ; ce n'est pas une fausse promesse. Chaque occurrence est donc examinee
dans sa fenetre de texte avant d'etre comptee.
"""
import json
import re
import sys

sys.path.insert(0, "/workspace/outils")
from analyse import texte_visible  # noqa: E402
from collecte import lire  # noqa: E402

ADRESSE_EXACTE = re.compile(
    r"215[,\s]+(?:boulevard|boul\.?|bd)\s+Ren[ée]-?A\.?-?Robert", re.I)
MIRABEL = re.compile(r"mirabel", re.I)

# Formulations qui affirment la gratuite ou l'inclusion de la livraison.
AFFIRMATIONS = re.compile(
    r"livraison\s+(?:et\s+installation\s+)?(?:est\s+|sont\s+)?"
    r"(?:gratuite?s?|offerte?s?|incluse?s?|comprise?s?|sans\s+frais)"
    r"|livraison\s+gratuite"
    r"|frais\s+de\s+livraison\s+(?:offerts?|gratuits?|inclus|nuls?)",
    re.I)

# Marqueurs qui, dans la fenetre, retournent le sens de l'affirmation.
DEMENTIS = re.compile(r"\?\s*Non\b|\bNon,|en\s+suppl[ée]ment|\bpas\s+incluse",
                      re.I)


def classer_livraison(txt):
    vraies, dementies = [], []
    for m in AFFIRMATIONS.finditer(txt):
        fenetre = txt[max(0, m.start() - 90): m.end() + 120]
        (dementies if DEMENTIS.search(fenetre) else vraies).append({
            "expression": m.group(0),
            "contexte": fenetre.strip(),
        })
    return vraies, dementies


def examiner(url):
    _, html = lire(url)
    txt = texte_visible(html)
    from analyse import analyser  # import tardif : evite un cycle
    f = analyser("?", url)
    desc = f["desc"] or ""
    titre = f["titre"] or ""

    vraies_d, dementies_d = classer_livraison(desc)
    vraies_c, dementies_c = classer_livraison(txt)

    return {
        "url": url,
        "mirabel_desc": bool(MIRABEL.search(desc)),
        "mirabel_titre": bool(MIRABEL.search(titre)),
        "mirabel_corps": [txt[max(0, m.start() - 90):m.end() + 90]
                          for m in MIRABEL.finditer(txt)],
        "adresse_exacte_presente": bool(ADRESSE_EXACTE.search(txt)),
        "livraison_fausse_desc": vraies_d,
        "livraison_fausse_corps": vraies_c,
        "livraison_dementie_corps_nb": len(dementies_c),
        # Le perimetre annonce, a confronter a la regle reelle (jusqu'a 40 km).
        "rayons_annonces": sorted(set(
            m.group(0) for m in re.finditer(r"rayon\s+de\s+\d+\s*km", txt, re.I))),
    }


def main():
    urls = [l.rstrip("\n").split("\t")[1] for l in open("/tmp/echantillon.tsv") if l.strip()]
    urls += [l.strip() for l in open("/tmp/urls_grappes.txt") if l.strip()]
    vus, ordonne = set(), []
    for u in urls:
        if u not in vus:
            vus.add(u)
            ordonne.append(u)
    res = [examiner(u) for u in ordonne]
    json.dump(res, open("/tmp/evenox_cache/pieges.json", "w"),
              ensure_ascii=False, indent=1)
    print(f"{len(res)} URL examinees -> /tmp/evenox_cache/pieges.json")


if __name__ == "__main__":
    main()
