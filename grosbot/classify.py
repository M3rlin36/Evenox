"""Rule-based inbox triage. No LLM. This is how Grosbot stays cheap."""

from __future__ import annotations

from dataclasses import dataclass
from enum import Enum
import re

_IGNORE_SENDER_NEEDLES = (
    "notifications@alarm.com",
    "alarm.com",
    "notifications@github.com",
    "noreply.github.com",
    "promo@promo.timhortons.ca",
    "timhortons",
    "costconews@",
    "digital.costco.",
    "newsletter@",
    "infolettre@",
    "email.americanexpress.com",
    "email.hm.com",
    "members.wayfair.",
    "marketing.playactivate.com",
    "user.hostinger.com",
    "service.alibaba.com",
    "email.1.asana.com",
    "news@email.",
)

_IGNORE_SUBJECT_NEEDLES = (
    "alarm.com",
    "mot de passe",
    "password reset",
    "privacy statement",
    "weekly offers",
    "unsubscribe",
)

_LEAD_SUBJECT_NEEDLES = (
    "nouveau lead",
    "nouvelle soumission",
    "devis abandonne",
    "devis abandonné",
    "panier",
)

_CLIENT_SUBJECT_NEEDLES = (
    "votre devis",
    "votre soumission",
    "devis evenox",
    "soumission evenox",
)

_LEAD_SENDERS = (
    "wordpress@evenox.ca",
    "vente@evenox.ca",
    "mail.booqable.com",
)


class Decision(str, Enum):
    IGNORE = "IGNORE"
    QUEUE = "QUEUE"
    ALREADY_HANDLED = "ALREADY_HANDLED"


@dataclass(frozen=True)
class Classification:
    decision: Decision
    reason: str
    queue_label: str | None = None


def _norm(value: str | None) -> str:
    return (value or "").strip().lower()


def classify(
    *,
    sender: str,
    subject: str,
    snippet: str = "",
    label_names: list[str] | None = None,
) -> Classification:
    """Classify one thread from headers only. Never fetch the body for triage."""
    labels = {_norm(x) for x in (label_names or [])}
    sender_n = _norm(sender)
    subject_n = _norm(subject)
    snippet_n = _norm(snippet)

    if "nox-processed" in labels or "gros-skip" in labels:
        return Classification(Decision.ALREADY_HANDLED, "already labelled done/skip")
    if "nox-spam" in labels:
        return Classification(Decision.IGNORE, "labelled NOX-Spam")
    if "gros-file" in labels or "gros-en-cours" in labels:
        return Classification(
            Decision.ALREADY_HANDLED,
            "already in Grosbot queue",
            queue_label="GROS-File" if "gros-file" in labels else "GROS-En-cours",
        )

    if any(needle in sender_n for needle in _IGNORE_SENDER_NEEDLES):
        return Classification(Decision.IGNORE, "noise sender")
    if any(needle in subject_n for needle in _IGNORE_SUBJECT_NEEDLES):
        return Classification(Decision.IGNORE, "noise subject")

    if sender_n.startswith("evenox.ca@") or sender_n == "evenox.ca@gmail.com":
        return Classification(Decision.ALREADY_HANDLED, "outbound Evenox")

    if any(needle in sender_n for needle in _LEAD_SENDERS) and any(
        needle in subject_n for needle in _LEAD_SUBJECT_NEEDLES
    ):
        if "mot de passe" in subject_n or "réinitialis" in subject_n:
            return Classification(Decision.IGNORE, "wordpress system mail")
        return Classification(Decision.QUEUE, "site lead / abandoned quote", "GROS-File")

    if any(needle in subject_n for needle in _CLIENT_SUBJECT_NEEDLES):
        return Classification(Decision.QUEUE, "client quote thread", "GROS-File")

    # A human reply sitting in inbox (not a newsletter): has a personal domain
    # and is not a known noise sender. Keep this conservative — queue only if
    # the snippet looks like a client talking, not marketing.
    if _looks_like_client_reply(sender_n, snippet_n, subject_n):
        return Classification(Decision.QUEUE, "client reply in inbox", "GROS-File")

    return Classification(Decision.IGNORE, "not an actionable sales thread")


_CLIENT_SNIPPET = re.compile(
    r"\b(bonjour|merci|devis|soumission|d[ée]p[oô]t|acompte|livraison|"
    r"horaire|tables?|chaises?|photobooth|événement|evenement)\b",
    re.IGNORECASE,
)


def _looks_like_client_reply(sender: str, snippet: str, subject: str) -> bool:
    if sender.endswith("@evenox.ca") or "noreply" in sender or "no-reply" in sender:
        return False
    if sender.endswith("@gmail.com") and "evenox.ca" in sender:
        return False
    promotional = any(
        x in sender
        for x in ("promo@", "newsletter", "marketing@", "news@", "info@", "noreply")
    )
    if promotional:
        return False
    if subject.startswith("re:") or subject.startswith("tr:") or subject.startswith("fw:"):
        return bool(_CLIENT_SNIPPET.search(snippet) or _CLIENT_SNIPPET.search(subject))
    return bool(_CLIENT_SNIPPET.search(snippet) and "@" in sender)
