#!/usr/bin/env python3
"""Collecte sequentielle des pages evenox.ca via un vrai navigateur.

Le pare-feu de l'hebergeur (Hostinger hcdn) analyse l'empreinte du client :
curl est renvoye en 403 (defi JavaScript) ou 429, un vrai Chrome passe. On pilote
donc Chrome, mais on bloque TOUTES les ressources annexes (images, styles,
scripts, polices) : chaque page ne coute qu'une seule requete au serveur, celle
du document HTML lui-meme. Le corps enregistre est la reponse brute du serveur,
donc exactement ce que Google recoit.

Rythme : une requete a la fois, jamais en parallele, DELAI secondes entre deux.
Un 403 ou un 429 interrompt tout : on s'arrete, on n'insiste pas.
"""
import hashlib
import json
import os
import sys
import time

from playwright.sync_api import sync_playwright

CACHE = "/tmp/evenox_cache"
DELAI = 3.0
JOURNAL = os.path.join(CACHE, "journal.jsonl")
os.makedirs(CACHE, exist_ok=True)


class Interdit(Exception):
    """403 ou 429 : arret immediat, sans reprise en boucle."""


def chemin(url):
    return os.path.join(CACHE, hashlib.sha256(url.encode()).hexdigest() + ".body")


def deja(url):
    return os.path.exists(chemin(url) + ".meta")


def _noter(url, code, corps):
    with open(chemin(url), "w", encoding="utf-8") as f:
        f.write(corps)
    with open(chemin(url) + ".meta", "w") as f:
        json.dump({"url": url, "code": code, "octets": len(corps),
                   "horodatage": time.time()}, f)
    with open(JOURNAL, "a") as f:
        f.write(json.dumps({"url": url, "code": code, "octets": len(corps),
                            "horodatage": time.time()}) + "\n")


def lire(url):
    with open(chemin(url) + ".meta") as f:
        meta = json.load(f)
    with open(chemin(url), encoding="utf-8", errors="replace") as f:
        return meta["code"], f.read()


def collecter(urls):
    """Recupere en serie les URL absentes du cache."""
    a_faire = [u for u in urls if not deja(u)]
    if not a_faire:
        print("rien a recuperer, tout est en cache", file=sys.stderr)
        return
    print(f"{len(a_faire)} URL a recuperer", file=sys.stderr)

    with sync_playwright() as p:
        nav = p.chromium.launch(channel="chrome", headless=True,
                                args=["--no-sandbox", "--disable-dev-shm-usage"])
        ctx = nav.new_context(locale="fr-CA")
        # Seul le document est laisse passer : une requete reseau par page.
        ctx.route("**/*", lambda r: r.continue_()
                  if r.request.resource_type == "document" else r.abort())
        page = ctx.new_page()
        try:
            for i, url in enumerate(a_faire, 1):
                time.sleep(DELAI)
                try:
                    rep = page.goto(url, wait_until="commit", timeout=60000)
                    code = rep.status if rep else 0
                    corps = rep.text() if rep else ""
                except Exception as exc:  # noqa: BLE001
                    code, corps = -1, f"__ERREUR__ {exc}"
                _noter(url, code, corps)
                print(f"  {i}/{len(a_faire)} [{code}] {len(corps):>7} o  {url}",
                      file=sys.stderr)
                if code in (403, 429):
                    raise Interdit(
                        f"{code} recu sur {url} - arret immediat, aucune reprise.")
        finally:
            nav.close()


if __name__ == "__main__":
    cibles = sys.argv[1:]
    if len(cibles) == 1 and os.path.exists(cibles[0]):
        cibles = [l.strip() for l in open(cibles[0]) if l.strip()]
    collecter(cibles)
