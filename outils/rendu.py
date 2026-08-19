#!/usr/bin/env python3
"""Rendu JavaScript des fiches produits, pour lire le PRIX AFFICHE au visiteur.

Sur la plupart des fiches, aucun prix n'est ecrit dans le HTML : il est injecte
apres coup par le widget tiers Booqable. Pour comparer honnetement le prix
annonce par le JSON-LD au prix reellement affiche, il faut donc rendre la page.

Menagement du serveur : evenox.ca ne recoit qu'UNE requete par fiche, celle du
document. Toutes ses autres ressources sont bloquees. Seuls les hotes Booqable
(booqable.com et evenox.booqableshop.com), qui portent le widget et son API,
sont laisses passer. Les mouchards publicitaires et statistiques sont bloques
pour ne pas fausser les mesures d'audience du client.

Une fiche a la fois, DELAI secondes entre deux. Un 403 ou un 429 arrete tout.
"""
import json
import os
import sys
import time
from urllib.parse import urlparse

from playwright.sync_api import sync_playwright

SORTIE = "/tmp/evenox_cache/rendu.jsonl"
DELAI = 3.0
HOTES_AUTORISES = ("booqable.com", "booqableshop.com")


def _filtre(route):
    req = route.request
    hote = urlparse(req.url).netloc
    if hote.endswith("evenox.ca"):
        return route.continue_() if req.resource_type == "document" else route.abort()
    if any(hote.endswith(h) for h in HOTES_AUTORISES):
        return route.abort() if req.resource_type in ("image", "font", "media") \
            else route.continue_()
    return route.abort()


def rendre(urls):
    deja = set()
    if os.path.exists(SORTIE):
        with open(SORTIE) as f:
            for l in f:
                try:
                    deja.add(json.loads(l)["url"])
                except Exception:  # noqa: BLE001
                    pass
    a_faire = [u for u in urls if u not in deja]
    print(f"{len(a_faire)} fiches a rendre", file=sys.stderr)
    if not a_faire:
        return

    with sync_playwright() as p:
        nav = p.chromium.launch(channel="chrome", headless=True,
                                args=["--no-sandbox", "--disable-dev-shm-usage"])
        ctx = nav.new_context(locale="fr-CA")
        ctx.route("**/*", _filtre)
        page = ctx.new_page()
        try:
            for i, url in enumerate(a_faire, 1):
                time.sleep(DELAI)
                fiche = {"url": url}
                try:
                    rep = page.goto(url, wait_until="domcontentloaded", timeout=60000)
                    fiche["code"] = rep.status if rep else 0
                    prix = duree = None
                    for _ in range(20):
                        page.wait_for_timeout(1000)
                        prix = page.evaluate(
                            "() => {const e=document.querySelector('.bq-price');"
                            "return e ? e.innerText.trim() : null;}")
                        if prix:
                            break
                    duree = page.evaluate(
                        "() => {const e=document.querySelector('.bq-duration');"
                        "return e ? e.innerText.trim() : null;}")
                    fiche["prix_widget"] = prix
                    fiche["duree_widget"] = duree
                    fiche["widget_present"] = page.evaluate(
                        "() => !!document.querySelector('.booqable-product-button')")
                except Exception as exc:  # noqa: BLE001
                    fiche["code"] = -1
                    fiche["erreur"] = str(exc)
                with open(SORTIE, "a") as f:
                    f.write(json.dumps(fiche, ensure_ascii=False) + "\n")
                print(f"  {i}/{len(a_faire)} [{fiche.get('code')}] "
                      f"{str(fiche.get('prix_widget')):>10}  {url}", file=sys.stderr)
                if fiche.get("code") in (403, 429):
                    raise SystemExit(f"{fiche['code']} recu - arret immediat.")
        finally:
            nav.close()


if __name__ == "__main__":
    cibles = sys.argv[1:]
    if len(cibles) == 1 and os.path.exists(cibles[0]):
        cibles = [l.strip() for l in open(cibles[0]) if l.strip()]
    rendre(cibles)
