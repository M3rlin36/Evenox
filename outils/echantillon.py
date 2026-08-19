#!/usr/bin/env python3
"""Tirage de l'echantillon de 60 adresses.

Methode : pour chaque famille, la liste des URL du plan de site est triee par
ordre alphabetique (donc stable et reproductible), puis on preleve des adresses
regulierement espacees sur toute la longueur de la liste (tirage systematique,
indice = round(i * (N-1) / (n-1))). Aucun tirage aleatoire, aucun choix a la main
en dehors de la page d'accueil, ajoutee d'office parce qu'elle est la porte
d'entree du site.

Repartition : 20 pages / 34 fiches produits / 6 articles = 60.
Les fiches produits sont surrepresentees parce que c'est la famille la plus
nombreuse et la seule ou l'on peut comparer prix JSON-LD et prix affiche.
"""
import re
import sys

sys.path.insert(0, "/workspace/outils")
from collecte import lire  # noqa: E402

REPARTITION = {"page": 20, "product": 34, "post": 6}
ACCUEIL = "https://evenox.ca/"


def urls_du_plan(famille):
    _, corps = lire(f"https://evenox.ca/{famille}-sitemap.xml")
    return sorted(set(re.findall(r"<loc>(.*?)</loc>", corps)))


def systematique(liste, n):
    N = len(liste)
    if n >= N:
        return list(liste)
    return [liste[round(i * (N - 1) / (n - 1))] for i in range(n)]


def tirer():
    resultat = []
    for famille, n in REPARTITION.items():
        toutes = urls_du_plan(famille)
        if famille == "page":
            # La page d'accueil d'office, le reste par tirage systematique.
            reste = [u for u in toutes if u != ACCUEIL]
            choisies = [ACCUEIL] + systematique(reste, n - 1)
        else:
            choisies = systematique(toutes, n)
        for u in choisies:
            resultat.append((famille, u))
    return resultat


if __name__ == "__main__":
    for famille, u in tirer():
        print(f"{famille}\t{u}")
