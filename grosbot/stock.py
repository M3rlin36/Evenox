"""Find products on the Evenox / Booqable catalog. Never invent a price.

The cloud agent has no BOOQABLE_API_TOKEN. The storefront on evenox.ca
is Booqable-backed (`data-id` + Woo). Lookup there. Official order
creation stays n8n until a token is on the agent.
"""

from __future__ import annotations

from dataclasses import dataclass
from html import unescape
from urllib.error import URLError
from urllib.parse import quote_plus
from urllib.request import Request, urlopen
import json
import os
import re

CATALOG_URL = "https://evenox.ca/wp-json/wc/store/v1/products"
BOOQABLE_HOST = "https://evenox.booqable.com"

_ITEM = re.compile(
    r"\b(?:tables?|chaises?|nappes?|photobooth|chapiteau|gonflable|"
    r"tapis|poteaux?|stanchions?|cocktail|popcorn|arche|ballons?|"
    r"marquee|fleurs?|nappes?)\b",
    re.IGNORECASE,
)


@dataclass(frozen=True)
class CatalogHit:
    name: str
    url: str
    price_cad: str | None
    slug: str = ""


def has_clear_products(text: str) -> bool:
    return bool(_ITEM.search(text or ""))


def extract_needles(text: str) -> tuple[str, ...]:
    seen: list[str] = []
    for match in _ITEM.finditer(text or ""):
        word = match.group(0).casefold()
        if word not in seen:
            seen.append(word)
    return tuple(seen)


def cents_to_cad(raw: object, *, minor: int = 2) -> str | None:
    if raw in (None, ""):
        return None
    try:
        n = int(str(raw)) / (10**minor)
    except (TypeError, ValueError):
        return None
    return f"{n:.2f} $".replace(".", ",")


def parse_store_products(payload: object) -> tuple[CatalogHit, ...]:
    rows = payload if isinstance(payload, list) else []
    hits: list[CatalogHit] = []
    for row in rows:
        if not isinstance(row, dict):
            continue
        name = unescape(str(row.get("name") or "")).strip()
        url = str(row.get("permalink") or "").strip()
        if not name or not url:
            continue
        prices = row.get("prices") if isinstance(row.get("prices"), dict) else {}
        hits.append(
            CatalogHit(
                name=name,
                url=url,
                price_cad=cents_to_cad(
                    prices.get("price"),
                    minor=int(prices.get("currency_minor_unit") or 2),
                ),
                slug=str(row.get("slug") or ""),
            )
        )
    return tuple(hits)


def booqable_token() -> str:
    return (os.environ.get("BOOQABLE_API_TOKEN") or "").strip()


def can_create_official_quote() -> bool:
    return bool(booqable_token())


def search_catalog(query: str, *, limit: int = 3) -> tuple[CatalogHit, ...]:
    """Live Woo/Booqable catalog. Empty on network failure — never invent."""
    q = (query or "").strip()
    if not q:
        return ()
    url = f"{CATALOG_URL}?search={quote_plus(q)}&per_page={limit}"
    req = Request(url, headers={"User-Agent": "Evenox-Grokbot/1"})
    try:
        with urlopen(req, timeout=8) as resp:
            payload = json.loads(resp.read().decode("utf-8"))
    except (URLError, TimeoutError, json.JSONDecodeError, OSError):
        return ()
    return parse_store_products(payload)


def format_hits(hits: tuple[CatalogHit, ...]) -> tuple[str, ...]:
    """Nom + prix catalogue + lien. Jamais un chiffre inventé."""
    lines: list[str] = []
    for hit in hits:
        price = hit.price_cad or "prix catalogue manquant"
        lines.append(f"{hit.name} — {price} — {hit.url}")
    return tuple(lines)


def lookup_products(text: str) -> tuple[CatalogHit, ...]:
    """Search catalog for each product word found in the mail."""
    hits: list[CatalogHit] = []
    seen: set[str] = set()
    for needle in extract_needles(text):
        for hit in search_catalog(needle, limit=2):
            if hit.url in seen:
                continue
            seen.add(hit.url)
            hits.append(hit)
    return tuple(hits)
