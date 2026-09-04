"""Rule-based inbox triage. No LLM. This is how Grokbot stays cheap.

Nate Herk kinds (Emergency / Quote / Schedule / Billing / Needs you / Ignore)
are mapped onto Evenox labels. Classification uses headers only.
"""

from __future__ import annotations

from dataclasses import dataclass
from enum import Enum
import re

from grosbot.queries import (
    LABEL_BILLING,
    LABEL_FILE,
    LABEL_SCHEDULE,
    LABEL_SOUMISSION,
    LABEL_URGENT,
)

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
    "communications.hydro.qc.ca",
    "hydro-quebec@",
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

_BILLING_NEEDLES = (
    "dépôt",
    "depot",
    "acompte",
    "paiement",
    "facture",
    "invoice",
    "lien pour le dépôt",
    "lien de dépôt",
)

_SCHEDULE_NEEDLES = (
    "livraison",
    "ramassage",
    "horaire",
    "heure",
    "11 h",
    "setup",
)

_URGENT_NEEDLES = (
    "urgent",
    "j'attends",
    "j attends",
    "aujourd'hui",
    "aujourd hui",
    "demain",
    "en colère",
    "en colere",
    "pas reçu",
    "pas recu",
    "toujours pas",
)


class Decision(str, Enum):
    IGNORE = "IGNORE"
    QUEUE = "QUEUE"
    ALREADY_HANDLED = "ALREADY_HANDLED"


class Kind(str, Enum):
    """Nate Herk customer categories, Evenox names."""

    EMERGENCY = "EMERGENCY"
    QUOTE = "QUOTE"
    SCHEDULE = "SCHEDULE"
    BILLING = "BILLING"
    NEEDS_YOU = "NEEDS_YOU"
    IGNORE = "IGNORE"


KIND_TYPE_LABEL = {
    Kind.EMERGENCY: LABEL_URGENT,
    Kind.QUOTE: LABEL_SOUMISSION,
    Kind.SCHEDULE: LABEL_SCHEDULE,
    Kind.BILLING: LABEL_BILLING,
    Kind.NEEDS_YOU: None,
    Kind.IGNORE: None,
}


@dataclass(frozen=True)
class Classification:
    decision: Decision
    reason: str
    queue_label: str | None = None
    kind: Kind | None = None
    type_label: str | None = None


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
    blob = f"{subject_n} {snippet_n}"

    if "nox-processed" in labels or "gros-skip" in labels:
        return Classification(Decision.ALREADY_HANDLED, "already labelled done/skip")
    if "nox-spam" in labels:
        return Classification(Decision.IGNORE, "labelled NOX-Spam", kind=Kind.IGNORE)
    if (
        "gros-file" in labels
        or "gros-en-cours" in labels
        or "nox-à-traiter" in labels
        or "nox-en-cours" in labels
    ):
        kind = _kind_from_labels(labels, blob)
        queue = "GROS-File" if "gros-file" in labels or "nox-à-traiter" in labels else "GROS-En-cours"
        return Classification(
            Decision.ALREADY_HANDLED,
            "already in Grokbot queue",
            queue_label=queue,
            kind=kind,
            type_label=KIND_TYPE_LABEL.get(kind) if kind else None,
        )

    if any(needle in sender_n for needle in _IGNORE_SENDER_NEEDLES):
        return Classification(Decision.IGNORE, "noise sender", kind=Kind.IGNORE)
    if any(needle in subject_n for needle in _IGNORE_SUBJECT_NEEDLES):
        return Classification(Decision.IGNORE, "noise subject", kind=Kind.IGNORE)

    if sender_n.startswith("evenox.ca@") or sender_n == "evenox.ca@gmail.com":
        return Classification(Decision.ALREADY_HANDLED, "outbound Evenox")

    if any(needle in sender_n for needle in _LEAD_SENDERS) and any(
        needle in subject_n for needle in _LEAD_SUBJECT_NEEDLES
    ):
        if "mot de passe" in subject_n or "réinitialis" in subject_n:
            return Classification(Decision.IGNORE, "wordpress system mail", kind=Kind.IGNORE)
        return Classification(
            Decision.QUEUE,
            "site lead / abandoned quote",
            "GROS-File",
            kind=Kind.QUOTE,
            type_label=LABEL_SOUMISSION,
        )

    if any(needle in subject_n for needle in _CLIENT_SUBJECT_NEEDLES) or _looks_like_client_reply(
        sender_n, snippet_n, subject_n
    ):
        kind = _kind_from_text(blob, labels)
        return Classification(
            Decision.QUEUE,
            "client reply in inbox" if kind is not Kind.QUOTE else "client quote thread",
            "GROS-File",
            kind=kind,
            type_label=KIND_TYPE_LABEL[kind],
        )

    return Classification(Decision.IGNORE, "not an actionable sales thread", kind=Kind.IGNORE)


def _kind_from_labels(labels: set[str], blob: str) -> Kind:
    if "nox-urgent" in labels:
        return Kind.EMERGENCY
    if "gros-acompte" in labels:
        return Kind.BILLING
    if "gros-livraison" in labels:
        return Kind.SCHEDULE
    if "soumission" in labels:
        return Kind.QUOTE
    return _kind_from_text(blob, labels)


def _kind_from_text(blob: str, labels: set[str]) -> Kind:
    if "nox-urgent" in labels or any(n in blob for n in _URGENT_NEEDLES):
        return Kind.EMERGENCY
    if any(n in blob for n in _BILLING_NEEDLES):
        return Kind.BILLING
    if any(n in blob for n in _SCHEDULE_NEEDLES):
        return Kind.SCHEDULE
    if any(n in blob for n in _CLIENT_SUBJECT_NEEDLES) or any(
        n in blob for n in _LEAD_SUBJECT_NEEDLES
    ):
        return Kind.QUOTE
    return Kind.NEEDS_YOU


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
