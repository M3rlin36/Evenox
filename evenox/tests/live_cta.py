#!/usr/bin/env python3
"""Curl the live catalog CTA. Does not change evenox.ca."""
from __future__ import annotations

import re
import sys
import urllib.request

URL = "https://evenox.ca/jeux-geants-interactifs/"
UA = "EvenoxCtaCheck/1.0 (+https://github.com/M3rlin36/Evenox)"


def main() -> int:
    req = urllib.request.Request(URL, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as resp:
        html = resp.read().decode("utf-8", "replace")
        status = resp.status
    match = re.search(r'<a class="evx-fin-1"[^>]*>.*?</a>', html, flags=re.I | re.S)
    print("status", status)
    print("url", URL)
    if not match:
        print("CTA evx-fin-1 introuvable")
        return 2
    print("cta", match.group(0))
    if "location-tables-chaises" in match.group(0):
        print("LIVE_STILL_WRONG")
        return 0
    if "location-jeux-geants" in match.group(0):
        print("LIVE_FIXED")
        return 0
    print("LIVE_UNEXPECTED")
    return 0


if __name__ == "__main__":
    sys.exit(main())
