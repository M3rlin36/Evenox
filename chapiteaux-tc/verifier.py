#!/usr/bin/env python3
"""Vérifie catalogue, payload WP et prescriptions chapiteaux."""
from __future__ import annotations

import json
import math
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
    if len(cat["produits"]) != 32:
        fail(f"catalogue {len(cat['produits'])} produits, 32 attendus")
    if produits["marq-10x10"]["prix"] != 300:
        fail("marq-10x10 doit rester a 300 $")
    if produits["marq-10x20"]["prix"] != 400:
        fail("marq-10x20 doit rester a 400 $")
    if produits["marq-20x20"]["prix"] != 500:
        fail("marq-20x20 doit rester a 500 $")
    if produits["marq-20x30"]["prix"] != 700:
        fail("marq-20x30 doit rester a 700 $")
    if produits["bar-portatif"]["prix"] != 120:
        fail("bar-portatif doit rester a 120 $")
    if any(p["prix"] == 275 for p in cat["produits"]):
        fail("prix 275 $ encore present")
    if any(p["id"] == "bar-del" for p in cat["produits"]):
        fail("bar DEL ne doit pas exister")
    if any("poids" in p["id"] or "poids" in p["nom"].lower() for p in cat["produits"]):
        fail("poids de chapiteau encore listes")
    ok(f"catalogue {len(cat['produits'])} produits")
    return cat


def verifier_payload() -> str:
    payload = (HERE / "payload.txt").read_text(encoding="utf-8")
    if "&&" in payload:
        fail("payload contient &&")
    if "\n" in payload.rstrip("\n"):
        fail("payload contient des sauts de ligne")
    if "275" in payload:
        fail("275 dans le payload")
    if "bar-del" in payload or "Bar courbe" in payload:
        fail("bar DEL dans le payload")
    if "/*INJ_CATALOGUE*/" in payload or "/*INJ_ZONES*/" in payload:
        fail("placeholders non injectes")
    if '"id":"marq-10x10"' not in payload or '"prix":300' not in payload:
        fail("marq-10x10 300 $ absent du payload")
    ok(f"payload {len(payload)} chars")
    return payload


def besoin_places(n: int, debout: bool) -> int:
    return math.ceil(n / 1.4) if debout else n


def plus_petite(produits: list, need: int) -> dict:
    cands = [p for p in produits if p.get("groupe") == "marquises" and p.get("cap", 0) >= need]
    if not cands:
        cands = [p for p in produits if p.get("groupe") == "marquises"]
    return min(cands, key=lambda p: (p["cap"], p["prix"]))


def verifier_logique(cat: dict) -> None:
    cases = [
        (10, False, "marq-10x10", 300),
        (40, True, "marq-15x20", 450),
        (80, False, "marq-20x40", 800),
    ]
    for n, debout, mid, prix in cases:
        p = plus_petite(cat["produits"], besoin_places(n, debout))
        if p["id"] != mid or p["prix"] != prix:
            fail(f"logique {n} -> {p['id']} {p['prix']} attendu {mid} {prix}")
        ok(f"logique {n} -> {mid} {prix}$")


def verifier_jsdom() -> None:
    env = dict(**{k: v for k, v in __import__("os").environ.items()})
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
