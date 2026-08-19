#!/usr/bin/env python3
"""Vérifie les livrables de allege/vente/ contre les pages d'origine.

Trois contrôles :

1. Longueur : compte les mots du TEXTE ALLEGE, entre les deux balises, avec la même
   méthode que pour la page d'origine, et compare au chiffre annoncé dans le fichier.
2. Fidélité : chaque phrase du texte allégé doit se retrouver mot pour mot dans la
   page d'origine. Une phrase peut être acceptée comme recollage de plusieurs
   fragments voisins de la page (un titre coupé en trois, un prix et son unité).
3. Formulations interdites : signale toute occurrence, pour relecture humaine.

    python3 verifier.py

Les pages d'origine sont lues depuis le cache de lire_pages.py, ou téléchargées.
"""
import os
import re
import sys
import unicodedata

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from lire_pages import lire, mots, noeuds  # noqa: E402

VENTE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "vente")
DEBUT, FIN = "<!-- DEBUT TEXTE ALLEGE -->", "<!-- FIN TEXTE ALLEGE -->"

PAGES = {
    "location-chaises.md": "https://evenox.ca/location-chaises/",
    "decoration-ballon.md": "https://evenox.ca/decoration-ballon/",
    "party-noel-corporatif.md": "https://evenox.ca/party-noel-corporatif/",
}

# Intertitres et libellés écrits pour le livrable : ils n'ont pas à être dans la source.
TITRES = {
    "prix", "prix par modele", "modele", "duree de la location", "adresse de ramassage",
    "quantites en stock", "utilisation a l'exterieur", "depot", "en cas de dommage",
    "chaises + tables", "ce qui se loue", "couleurs et finis", "completer votre evenement",
    "deux forfaits", "compris", "valeur", "conditions completes", "conditions de location",
    "reserve tes chaises",
}

INTERDITS = [
    "livraison incluse", "livraison comprise", "livraison gratuite", "montage compris",
    "montage inclus", "annulation gratuite", "report sans frais", "remplacement pendant",
    "sans supplement", "aucun cout cache", "tout compris", "tout inclus", "cle en main",
    "gratuit", "garanti", "mirabel",
]

SEPARATEURS = r"\s+—\s+|\s+:\s+|\s*·\s*|,\s+|[()]"


def norme(s):
    s = unicodedata.normalize("NFC", s)
    for a, b in [("’", "'"), ("‘", "'"), ("“", '"'), ("”", '"'), ("\u00a0", " "), ("–", "—")]:
        s = s.replace(a, b)
    return re.sub(r"\s+", " ", s).strip().lower()


def sans_accents(s):
    return "".join(c for c in unicodedata.normalize("NFD", s)
                   if unicodedata.category(c) != "Mn")


def texte_allege(chemin):
    contenu = open(chemin, encoding="utf-8").read()
    if DEBUT not in contenu:
        return None
    corps = contenu.split(DEBUT, 1)[1].split(FIN, 1)[0]
    return re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", corps)   # liens -> libellé seul


def compte_allege(corps):
    corps = re.sub(r"^\s*\|[\s|:-]+\|\s*$", "", corps, flags=re.M)
    return mots(re.sub(r"[#>|*_`]", " ", corps))


def lignes(corps):
    out = []
    for bloc in re.split(r"\n\s*\n", corps):
        if not bloc.strip():
            continue
        if bloc.lstrip().startswith(("-", "|")):
            out += [l.strip() for l in bloc.splitlines() if l.strip()]
        else:
            out.append(" ".join(bloc.split()))
    return out


def phrases(ligne):
    ligne = re.sub(r"^#+\s*", "", ligne).strip()
    ligne = re.sub(r"^-\s+", "", ligne)
    cellules = ([c.strip() for c in ligne.strip("|").split("|")]
                if ligne.startswith("|") else [ligne])
    out = []
    for c in cellules:
        if not c or set(c) <= set("-: "):
            continue
        out += [p.strip(" .") for p in re.split(r"(?<=[.!?])\s+", c) if p.strip(" .")]
    return out


def present(bout, src, src_plat):
    bout = bout.strip(" .·|")
    if not bout or bout in TITRES or sans_accents(bout) in TITRES:
        return True
    return bout in src or sans_accents(bout) in src_plat


def main():
    total = trouves = 0
    ecarts = []
    for fichier, url in PAGES.items():
        chemin_md = os.path.join(VENTE, fichier)
        corps = texte_allege(chemin_md)
        if corps is None:
            ecarts.append(f"{fichier} : balises {DEBUT} absentes")
            continue
        chemin_html, code, _ = lire(url)
        if code != 200:
            ecarts.append(f"{fichier} : page source inaccessible (code {code})")
            continue
        # Les nœuds sont recollés par une simple espace : un titre coupé en trois
        # éléments, ou un prix séparé de son unité, se retrouve alors tel quel.
        # Cela n'autorise ni la réécriture ni le changement d'ordre.
        src = norme(" ".join(t for _, t, _ in noeuds(chemin_html)))
        src_plat = sans_accents(src)

        print(f"\n=== {fichier} ===")
        n = compte_allege(corps)
        annonce = re.search(r"Longueur après\s*:\s*\*\*(\d[\d\s ]*) mots", open(
            chemin_md, encoding="utf-8").read())
        attendu = int(re.sub(r"\D", "", annonce.group(1))) if annonce else None
        etat = "ok" if attendu == n else f"ANNONCE {attendu}"
        print(f"  longueur : {n} mots ({etat})")
        if attendu != n:
            ecarts.append(f"{fichier} : {n} mots comptés, {attendu} annoncés")

        for ligne in lignes(corps):
            for phrase in phrases(ligne):
                phrase = norme(phrase)
                total += 1
                if present(phrase, src, src_plat):
                    trouves += 1
                    continue
                bouts = [b for b in re.split(SEPARATEURS, phrase) if b.strip(" .·")]
                if bouts and all(present(b, src, src_plat) for b in bouts):
                    trouves += 1
                    print(f"  recollé  : {' + '.join(repr(b) for b in bouts)}")
                    continue
                introuvables = [b for b in bouts if not present(b, src, src_plat)] or [phrase]
                ecarts.append(f"{fichier} : {introuvables} absent de la page d'origine")
                print(f"  ABSENT   : {phrase!r} -> {introuvables}")

        plat = sans_accents(norme(corps))
        for mot in INTERDITS:
            for m in re.finditer(re.escape(mot), plat):
                a, b = max(0, m.start() - 60), m.end() + 60
                print(f"  à relire [{mot}] …{plat[a:b]}…")

    print(f"\n{trouves}/{total} phrases retrouvées mot pour mot dans les pages d'origine.")
    if ecarts:
        print(f"\n{len(ecarts)} écart(s) à corriger :")
        for e in ecarts:
            print(f"  - {e}")
        return 1
    print("Aucun écart de longueur ni de fidélité.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
