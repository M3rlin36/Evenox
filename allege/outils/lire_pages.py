#!/usr/bin/env python3
"""Lit des pages publiques d'evenox.ca et compte leurs mots.

Lecture seule. Une requête à la fois, jamais en parallèle, 2,5 s d'attente minimum
entre deux, arrêt immédiat au premier 403 : le pare-feu de l'hébergeur bannit les
adresses IP trop bavardes.

    python3 lire_pages.py urls.txt          # lit, met en cache, classe par longueur
    python3 lire_pages.py --dump page.html  # affiche le texte de la page, dans l'ordre

Dépendances : beautifulsoup4, lxml (pip install beautifulsoup4 lxml).
"""
import os
import re
import subprocess
import sys
import time
import unicodedata

from bs4 import BeautifulSoup, CData, Comment, Doctype, NavigableString, ProcessingInstruction

UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
CACHE = os.environ.get("EVENOX_CACHE", "/tmp/evenox-html")
DELAI = 2.5
FIN_DE_PAGE = "Nos Réseaux Sociaux"   # premier nœud du pied de page du site
NON_TEXTE = ["script", "style", "noscript", "svg", "iframe", "template", "select", "option"]


# --- lecture ---------------------------------------------------------------

def fichier_cache(url):
    return os.path.join(CACHE, (url.rstrip("/").split("/")[-1] or "accueil") + ".html")


def lire(url):
    """Retourne (chemin, code_http, deja_en_cache)."""
    os.makedirs(CACHE, exist_ok=True)
    chemin = fichier_cache(url)
    if os.path.exists(chemin) and os.path.getsize(chemin) > 500:
        return chemin, 200, True
    time.sleep(DELAI)
    r = subprocess.run(
        ["curl", "-sS", "-A", UA, "-H", "Accept-Language: fr-CA,fr;q=0.9",
         "--max-time", "45", "-w", "%{http_code}", "-o", chemin, url],
        capture_output=True, text=True)
    code = r.stdout.strip()[-3:]
    return chemin, int(code) if code.isdigit() else 0, False


# --- extraction du texte ---------------------------------------------------

def noeuds(chemin):
    """Tous les nœuds de texte visibles du corps, dans l'ordre d'affichage.

    Retourne une liste de (balise, texte, lien). Les commentaires HTML sont exclus :
    le constructeur de pages en laisse plusieurs dizaines par page, et les compter
    gonflerait le total de plusieurs centaines de mots.
    """
    with open(chemin, encoding="utf-8", errors="replace") as f:
        soup = BeautifulSoup(f.read(), "lxml")
    for t in soup(NON_TEXTE):
        t.decompose()
    sortie = []
    for n in (soup.body or soup).descendants:
        if isinstance(n, (Comment, Doctype, CData, ProcessingInstruction)):
            continue
        if not isinstance(n, NavigableString):
            continue
        texte = " ".join(str(n).split())
        if not texte or texte in {"|", "·", "—", "-"}:
            continue
        parent = n.parent
        lien = parent if parent is not None and parent.name == "a" else None
        if lien is None and parent is not None:
            lien = parent.find_parent("a")
        sortie.append((parent.name if parent else "?", texte,
                       lien.get("href", "") if lien else ""))
    return sortie


def mots(texte):
    return len(re.findall(r"[0-9A-Za-zÀ-ÖØ-öø-ÿ'’$%°]+", texte))


def zones(chemin):
    """Découpe la page en (menu, zone éditoriale, pied de page)."""
    rows = noeuds(chemin)
    i = 0
    while i < len(rows) and rows[i][0] == "a":   # le menu du site est une suite de liens
        i += 1
    j = next((k for k, (_, t, _) in enumerate(rows) if t == FIN_DE_PAGE), len(rows))
    return rows[:i], rows[i:j], rows[j:]


def compter(chemin):
    menu, corps, pied = zones(chemin)
    return {n: sum(mots(t) for _, t, _ in z)
            for n, z in (("menu", menu), ("editorial", corps), ("pied", pied))}


# --- programme -------------------------------------------------------------

def main():
    if sys.argv[1:2] == ["--dump"]:
        for balise, texte, lien in noeuds(sys.argv[2]):
            print(f"[{balise}]{' -> ' + lien if lien else ''} {texte}")
        c = compter(sys.argv[2])
        print(f"\nmenu {c['menu']} · zone éditoriale {c['editorial']} · pied {c['pied']} "
              f"· total {sum(c.values())}")
        return 0

    urls = [l.strip() for l in open(sys.argv[1], encoding="utf-8") if l.strip()]
    resultats = []
    for url in urls:
        chemin, code, en_cache = lire(url)
        print(f"{code} {'cache' if en_cache else 'reseau'} {url}", flush=True)
        if code == 403:
            print("403 reçu : arrêt immédiat, on ne réessaie pas.", file=sys.stderr)
            return 2
        if code != 200:
            print(f"code inattendu {code}, page ignorée", file=sys.stderr)
            continue
        c = compter(chemin)
        resultats.append((sum(c.values()), c["editorial"], url))
    print("\ntotal  éditorial  page")
    for total, editorial, url in sorted(resultats, reverse=True):
        print(f"{total:6d}  {editorial:9d}  {url}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
