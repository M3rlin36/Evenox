#!/usr/bin/env python3
"""Vérifie catalogue, payload WP et prescriptions gonflables."""
from __future__ import annotations

import json
import os
import pathlib
import subprocess
import sys

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent


def fail(msg: str) -> None:
    print("ECHEC", msg)
    sys.exit(1)


def ok(msg: str) -> None:
    print("OK", msg)


def verifier_catalogue() -> dict:
    cat = json.loads((HERE / "catalogue.json").read_text(encoding="utf-8"))
    produits = {p["id"]: p for p in cat["produits"]}
    if len(cat["produits"]) != 30:
        fail(f"catalogue {len(cat['produits'])} produits, 30 attendus")
    attendus = {
        "jeu-gonflable-mini-princesse": 120,
        "jeu-gonflable-spiderman": 120,
        "jeux-gonflable-forteresse": 100,
        "jeux-gonflable-chateau-du-prince": 100,
        "location-jeu-gonflable-mickey-mous": 280,
        "location-jeu-gonflable-licorne": 200,
        "pouf-poire-gonflable": 15,
    }
    for pid, prix in attendus.items():
        if produits[pid]["prix"] != prix:
            fail(f"{pid} doit rester a {prix} $")
    if produits["sucture-gonflable-bunker"]["role"] != "extra":
        fail("bunker doit rester extra, pas un chateau")
    if any(p.get("prix") is None for p in cat["produits"]):
        fail("prix null dans le catalogue")
    ok(f"catalogue {len(cat['produits'])} produits")
    return cat


def verifier_payload() -> None:
    payload = (HERE / "payload.txt").read_text(encoding="utf-8")
    if "&&" in payload:
        fail("payload contient &&")
    if "\n" in payload.rstrip("\n"):
        fail("payload contient des sauts de ligne")
    if "/*INJ_CATALOGUE*/" in payload or "/*INJ_ZONES*/" in payload:
        fail("placeholders non injectes")
    if '"id":"jeu-gonflable-mini-princesse"' not in payload:
        fail("princesses absentes du payload")
    ok(f"payload {len(payload)} chars")


def plus_petit(produits: list, theme: str) -> dict:
    cands = []
    for p in produits:
        if p.get("role") != "chateau":
            continue
        if theme == "mixte":
            if p.get("theme") != "mixte":
                continue
        elif p.get("theme") != theme:
            continue
        cands.append(p)
    return min(cands, key=lambda p: (p["prix"], p["id"]))


def verifier_logique(cat: dict) -> None:
    cases = [
        ("fille", "jeu-gonflable-mini-princesse", 120),
        ("garcon", "jeux-gonflable-chateau-du-prince", 100),
        ("mixte", "jeux-gonflable-forteresse", 100),
    ]
    for theme, mid, prix in cases:
        p = plus_petit(cat["produits"], theme)
        if p["id"] != mid or p["prix"] != prix:
            fail(f"logique {theme} -> {p['id']} {p['prix']} attendu {mid} {prix}")
        ok(f"logique {theme} -> {mid} {prix}$")


def verifier_jsdom() -> None:
    env = dict(os.environ)
    extra = "/tmp/evx-jsdom/node_modules"
    env["NODE_PATH"] = extra + (":" + env["NODE_PATH"] if env.get("NODE_PATH") else "")
    subprocess.check_call(["node", str(HERE / "selftest.js")], env=env)


def main() -> None:
    subprocess.check_call([sys.executable, str(HERE / "build.py")])
    cat = verifier_catalogue()
    verifier_payload()
    verifier_logique(cat)
    verifier_jsdom()
    print("TOUT OK")


if __name__ == "__main__":
    main()
