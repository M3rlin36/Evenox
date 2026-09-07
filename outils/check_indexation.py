#!/usr/bin/env python3
"""Vérifie en lecture seule les points du relevé INDEXATION-2026-09-06."""

from __future__ import annotations

import re
import subprocess
import sys

UA = "Mozilla/5.0 (compatible; EvenoxIndexationCheck/1.0)"


def curl(url: str) -> tuple[str, str, str]:
    p = subprocess.run(
        [
            "curl",
            "-sL",
            "-A",
            UA,
            "-o",
            "/tmp/evenox_idx_check.html",
            "-w",
            "%{http_code}|%{url_effective}",
            "--max-time",
            "30",
            url,
        ],
        capture_output=True,
        text=True,
    )
    code, final = p.stdout.split("|", 1)
    body = open("/tmp/evenox_idx_check.html", encoding="utf-8", errors="replace").read()
    return code, final, body


def title(body: str) -> str:
    m = re.search(r"<title[^>]*>(.*?)</title>", body, re.I | re.S)
    return re.sub(r"<[^>]+>", "", m.group(1)).strip() if m else ""


def main() -> int:
    checks = []

    code, final, body = curl("https://evenox.ca/shop/")
    checks.append(("shop status", code == "200", code))
    checks.append(("shop title empty", title(body) in ("- Évenox", "- evenox.ca") or len(title(body)) < 12, title(body)))
    checks.append(("shop no desc", "name=\"description\"" not in body.lower() and "name='description'" not in body.lower(), "ok"))
    checks.append(("shop no canon", "rel=\"canonical\"" not in body.lower() and "rel='canonical'" not in body.lower(), "ok"))

    code, final, body = curl("https://evenox.ca/3561-2/")
    checks.append(("3561-2 soft 200", code == "200", code))
    checks.append(("3561-2 empty title", title(body).startswith("-"), title(body)))

    code, final, _ = curl("https://evenox.ca/2476-2/")
    checks.append(("2476-2 is 404", code == "404", f"{code}->{final}"))

    code, final, body = curl("https://evenox.ca/blog/")
    checks.append(("blog wrong title", "mariage" in title(body).lower(), title(body)))

    code, final, body = curl("https://evenox.ca/blogue/")
    checks.append(("blogue ok title", "blogue" in title(body).lower(), title(body)))

    robots = subprocess.check_output(["curl", "-sL", "-A", UA, "https://evenox.ca/robots.txt"], text=True)
    checks.append(("robots blocks add-to-cart", "add-to-cart" in robots, "ok"))

    print("Evenox indexation pre-fix checks (expected BEFORE plugin install):")
    failed = 0
    for name, ok, detail in checks:
        mark = "OK" if ok else "UNEXPECTED"
        if not ok:
            failed += 1
        print(f"  [{mark}] {name}: {detail}")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
