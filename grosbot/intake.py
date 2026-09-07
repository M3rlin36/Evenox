"""Incoming mail → draft now. Quote only if Booqable already left it.

Alexandre does not watch. The timer labels + drafts. A devis is used
only when the thread already has a Booqable link or a live Brouillon IA.
Never open Booqable. Never invent a price. Never send. He validates.
"""

from __future__ import annotations

from enum import Enum

from grosbot.classify import Decision, classify
from grosbot.lane import Lane, pick_lane

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
    body: str = "",
) -> bool:
    """True only when Booqable already left a quote in Gmail."""
    del labels  # labels never prove a devis; only a link / n° does
    blob = f"{subject} {snippet} {body}".casefold()
    return any(marker in blob for marker in QUOTE_MARKERS)


def draft_price_line(
    *,
    labels: list[str] | tuple[str, ...] = (),
    subject: str = "",
    snippet: str = "",
    body: str = "",
) -> str:
    """What the Gmail draft may say about money."""
    if has_ready_quote(
        labels=labels, subject=subject, snippet=snippet, body=body
    ):
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
    body: str = "",
    labels: list[str] | tuple[str, ...] = (),
) -> Arrival:
    """Courriel entre → brouillon. Devis seulement si déjà dans Booqable. 0 envoi."""
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
    if has_ready_quote(
        labels=labels, subject=subject, snippet=snippet, body=body
    ):
        return Arrival.DRAFT_QUOTE
    return Arrival.DRAFT


def needs_alex_validate(arrival: Arrival) -> bool:
    return arrival in {Arrival.DRAFT, Arrival.DRAFT_QUOTE}
