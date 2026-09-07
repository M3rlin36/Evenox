"""Incoming mail → draft now. Quote only if Booqable already left it.

Alexandre does not watch. The timer labels + drafts. A devis is used
only when the thread already has a Booqable link or a live Brouillon IA.
Never open Booqable. Never invent a price. Never send. He validates.
"""

from __future__ import annotations

from enum import Enum

from grosbot.classify import Decision, classify
from grosbot.lane import Lane, pick_lane
from grosbot.queries import LABEL_DRAFT_IA

QUOTE_MARKERS = (
    "booqable.com",
    "evenox.booqable",
    "devis #",
    "quote #",
)


def has_ready_quote(
    *,
    labels: list[str] | tuple[str, ...] = (),
    subject: str = "",
    snippet: str = "",
) -> bool:
    """True only when the quote is already in Gmail, not in our head."""
    names = {x.casefold() for x in labels}
    if LABEL_DRAFT_IA.casefold() in names:
        return True
    blob = f"{subject} {snippet}".casefold()
    return any(marker in blob for marker in QUOTE_MARKERS)


def draft_price_line(
    *,
    labels: list[str] | tuple[str, ...] = (),
    subject: str = "",
    snippet: str = "",
) -> str:
    """What the Gmail draft may say about money."""
    if has_ready_quote(labels=labels, subject=subject, snippet=snippet):
        return "devis déjà dans le fil — 0 clic Booqable"
    return "[PRIX À CONFIRMER]"


class Arrival(str, Enum):
    """What to do the second a mail lands. Send is never here."""

    SPAM = "spam"
    INTERNE = "interne"
    DRAFT_QUOTE = "draft_quote"
    DRAFT = "draft"


def decide_arrival(
    *,
    sender: str = "",
    subject: str = "",
    snippet: str = "",
    labels: list[str] | tuple[str, ...] = (),
) -> Arrival:
    """Courriel entre → brouillon. Devis seulement si déjà là. 0 envoi."""
    result = classify(
        sender=sender,
        subject=subject,
        snippet=snippet,
        label_names=list(labels),
    )
    if result.decision is Decision.IGNORE:
        return Arrival.SPAM
    if (
        pick_lane(
            sender=sender,
            subject=subject,
            snippet=snippet,
            label_names=list(labels),
        )
        is Lane.INTERNE
    ):
        return Arrival.INTERNE
    if has_ready_quote(labels=labels, subject=subject, snippet=snippet):
        return Arrival.DRAFT_QUOTE
    return Arrival.DRAFT


def needs_alex_validate(arrival: Arrival) -> bool:
    return arrival in {Arrival.DRAFT, Arrival.DRAFT_QUOTE}
