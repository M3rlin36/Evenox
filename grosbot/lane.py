"""Voie RAPIDE vs LENT. Headers only. No LLM.

Grokbot was slow because it opened Booqable + Drive + Pipeline
before showing a Gmail draft. Most Evenox threads already have an
n8n quote. Those must never block on PDF.
"""

from __future__ import annotations

from enum import Enum
import re

from grosbot.queries import LABEL_DRAFT_IA


class Lane(str, Enum):
    RAPIDE = "RAPIDE"
    LENT = "LENT"
    INTERNE = "INTERNE"


_N8N_INTERNAL_SUBJECTS = (
    "nouvelle soumission",
    "devis abandonne",
    "devis abandonné",
)

_N8N_QUOTE_ALREADY_MADE = (
    "nouveau lead",
    "webshop order",
    "new webshop order",
)

_QUOTE_REF = re.compile(
    r"(?:#\s*\d{3,5}|evenox\.booqable\.com|booqable\.com/orders)",
    re.IGNORECASE,
)

_CLEAR_ITEMS = re.compile(
    r"\b(?:tables?|chaises?|nappes?|photobooth|chapiteau|gonflable|"
    r"tapis|poteaux?|stanchions?|cocktail|popcorn)\b",
    re.IGNORECASE,
)

_DATEISH = re.compile(
    r"\b(?:\d{1,2}\s*(?:janv|févr|mars|avr|mai|juin|juill|août|sept|oct|nov|déc)"
    r"|\d{4}-\d{2}-\d{2}|20\d{2})\b",
    re.IGNORECASE,
)

_FAST_NEEDLES = (
    "dépôt",
    "depot",
    "acompte",
    "horaire",
    "livraison",
    "ramassage",
    "lien",
    "visite",
    "showroom",
    "confirmer",
    "disponible",
)


def _norm(value: str | None) -> str:
    return (value or "").strip().lower()


def pick_lane(
    *,
    sender: str = "",
    subject: str = "",
    snippet: str = "",
    label_names: list[str] | None = None,
) -> Lane:
    """Choose the speed lane from headers. Default is RAPIDE."""
    subject_n = _norm(subject)
    snippet_n = _norm(snippet)
    sender_n = _norm(sender)
    labels = {_norm(x) for x in (label_names or [])}
    blob = f"{subject_n} {snippet_n}"

    if any(needle in subject_n for needle in _N8N_INTERNAL_SUBJECTS):
        return Lane.INTERNE

    if LABEL_DRAFT_IA.lower() in labels:
        return Lane.RAPIDE
    if _QUOTE_REF.search(blob):
        return Lane.RAPIDE
    if any(needle in subject_n for needle in _N8N_QUOTE_ALREADY_MADE):
        return Lane.RAPIDE
    if "weddingwire" in sender_n or "theknot" in sender_n:
        return Lane.RAPIDE
    if any(needle in blob for needle in _FAST_NEEDLES):
        return Lane.RAPIDE

    if (
        _CLEAR_ITEMS.search(blob)
        and _DATEISH.search(blob)
        and not _QUOTE_REF.search(blob)
        and "nouveau lead" not in subject_n
    ):
        return Lane.LENT

    return Lane.RAPIDE


def partition_internes(threads: list) -> tuple[list, list]:
    """Split n8n internal triples (no client mail) from real dossiers."""
    internes: list = []
    rest: list = []
    for thread in threads:
        lane = pick_lane(
            sender=getattr(thread, "sender", ""),
            subject=getattr(thread, "subject", ""),
            snippet=getattr(thread, "snippet", ""),
            label_names=list(getattr(thread, "labels", ()) or ()),
        )
        if lane is Lane.INTERNE:
            internes.append(thread)
        else:
            rest.append(thread)
    return internes, rest
