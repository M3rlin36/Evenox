#!/usr/bin/env python3
"""Franchit le defi JavaScript du pare-feu Hostinger avec un vrai navigateur,
puis exporte le cookie obtenu pour que la suite du releve se fasse en HTTP simple
(une requete par page, aucune ressource annexe).
"""
import json
import sys

from playwright.sync_api import sync_playwright

CIBLE = sys.argv[1] if len(sys.argv) > 1 else "https://evenox.ca/"
SORTIE_COOKIES = "/tmp/evenox_cache/cookies.txt"
SORTIE_UA = "/tmp/evenox_cache/ua.txt"

# Ressources inutiles au releve : on les bloque pour ne pas multiplier les
# requetes vers l'hebergeur.
BLOQUES = {"image", "font", "media", "stylesheet"}


def main():
    with sync_playwright() as p:
        nav = p.chromium.launch(channel="chrome", headless=True,
                                args=["--no-sandbox", "--disable-dev-shm-usage"])
        ctx = nav.new_context(locale="fr-CA")
        ctx.route("**/*", lambda route: route.abort()
                  if route.request.resource_type in BLOQUES else route.continue_())
        page = ctx.new_page()
        ua = page.evaluate("() => navigator.userAgent")

        print(f"UA navigateur : {ua}", file=sys.stderr)
        rep = page.goto(CIBLE, wait_until="domcontentloaded", timeout=90000)
        print(f"1er passage : {rep.status if rep else '?'} - {page.title()!r}", file=sys.stderr)

        # Le defi se resout tout seul puis redirige ; on lui laisse le temps.
        for _ in range(30):
            if "Checking your browser" not in page.title():
                break
            page.wait_for_timeout(2000)

        print(f"apres defi : {page.title()!r} - {page.url}", file=sys.stderr)

        cookies = ctx.cookies()
        # Format Netscape pour curl -b/-c
        lignes = ["# Netscape HTTP Cookie File"]
        for c in cookies:
            dom = c["domain"]
            lignes.append("\t".join([
                dom,
                "TRUE" if dom.startswith(".") else "FALSE",
                c.get("path", "/"),
                "TRUE" if c.get("secure") else "FALSE",
                str(int(c.get("expires", 0)) if c.get("expires", -1) > 0 else 0),
                c["name"],
                c["value"],
            ]))
        with open(SORTIE_COOKIES, "w") as f:
            f.write("\n".join(lignes) + "\n")
        with open(SORTIE_UA, "w") as f:
            f.write(ua)

        print(json.dumps([c["name"] for c in cookies]), file=sys.stderr)
        nav.close()


if __name__ == "__main__":
    main()
