"""Weekly 7-day unreplied sweep. Complements the 2-day CATCHUP.

Grokbot's cheap morning pass can miss a client behind 8 newsletters.
This module is the Sunday/Monday filet: last 7 days, classify, decide if
Evenox already answered, group site leads, and build the digest Alexandre
gets in Gmail. Drafts live in Grok (`Grok-File` + `Brouillon IA`).
Never send a client email from here. Digest goes to evenox.ca@gmail.com.
"""

from __future__ import annotations

from dataclasses import dataclass, field
import re

from grosbot.classify import Classification, Decision, classify
from grosbot.queries import ACCOUNT_FROM, SYSTEM_DRAFT, SYSTEM_SENT

EVENOX_OUTBOUND = (
    ACCOUNT_FROM,
    "evenox@mail.booqable.com",
)
INTERNAL_SENDERS = (
    ACCOUNT_FROM,
    "wordpress@evenox.ca",
    "vente@evenox.ca",
    "wordpress@evenox.online",
)
LEAD_SENDERS = (
    "wordpress@evenox.ca",
    "vente@evenox.ca",
    "support@weddingwire.ca",
    "support@booqable.com",
)
SIGNATURE = (
    "Alexandre Séguin\n"
    "Directeur du Service à la Clientèle\n"
    "215 Bd René-A.-Robert, Sainte-Thérèse, QC J7E 4L1\n"
    "514-559-1893\n"
    "www.evenox.ca"
)

# Drafts that must never go to a client as-is.
_INTERNAL_DRAFT = (
    "brouillon interne",
    "hold sylvie",
    "ne pas envoyer",
    "note d'escalade",
    "note d'escalade",
    "⚠️ escalade",
    "escalade —",
    "[brouillon]",
    "[interne]",
)

_EMAIL_RE = re.compile(r"[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,}", re.IGNORECASE)


class Bucket(str):
    CLIENT_WAITING = "CLIENT_WAITING"
    LEAD_NO_FIRST_MAIL = "LEAD_NO_FIRST_MAIL"
    WAITING_ON_CLIENT = "WAITING_ON_CLIENT"
    NOISE = "NOISE"


@dataclass(frozen=True)
class LiveMessage:
    sender: str
    subject: str
    snippet: str = ""
    label_ids: list[str] = field(default_factory=list)
    date: str = ""


@dataclass(frozen=True)
class DigestItem:
    bucket: str
    subject: str
    sender: str
    client: str
    why: str
    draft_status: str
    draft_preview: str = ""
    action: str = ""


def sender_email(raw: str) -> str:
    text = (raw or "").strip().lower()
    found = _EMAIL_RE.search(text)
    return found.group(0).lower() if found else text


def is_evenox_outbound(sender: str, label_ids: list[str] | None = None) -> bool:
    """True only if Evenox wrote to a client. wordpress/vente inbound is not."""
    addr = sender_email(sender)
    labels = {x.upper() for x in (label_ids or [])}
    if addr in (s.lower() for s in EVENOX_OUTBOUND):
        return True
    if SYSTEM_SENT in labels and addr.endswith("@evenox.ca") and "wordpress@" not in addr:
        return addr == ACCOUNT_FROM
    return False


def is_internal_or_lead_sender(sender: str) -> bool:
    addr = sender_email(sender)
    return any(needle in addr for needle in (*INTERNAL_SENDERS, *LEAD_SENDERS))


def last_live_message(messages: list[dict]) -> LiveMessage | None:
    """Skip drafts. Last remaining message is the conversation head."""
    live: list[LiveMessage] = []
    for row in messages or []:
        labels = [str(x) for x in (row.get("labelIds") or row.get("label_ids") or [])]
        if SYSTEM_DRAFT in {x.upper() for x in labels}:
            continue
        live.append(
            LiveMessage(
                sender=str(row.get("sender") or ""),
                subject=str(row.get("subject") or ""),
                snippet=str(row.get("snippet") or row.get("plaintextBody") or ""),
                label_ids=labels,
                date=str(row.get("date") or ""),
            )
        )
    return live[-1] if live else None


def thread_has_evenox_sent(messages: list[dict]) -> bool:
    for row in messages or []:
        labels = {str(x).upper() for x in (row.get("labelIds") or row.get("label_ids") or [])}
        if SYSTEM_SENT in labels and is_evenox_outbound(
            str(row.get("sender") or ""), list(labels)
        ):
            return True
    return False


def extract_client_email(body: str) -> str:
    """First non-Evenox address in a site-lead body. Empty if none."""
    for match in _EMAIL_RE.finditer(body or ""):
        addr = match.group(0).lower()
        if addr.endswith("@evenox.ca") or addr.endswith("@evenox.online"):
            continue
        if "noreply" in addr or "no-reply" in addr:
            continue
        return addr
    return ""


def draft_is_internal(subject: str, body: str, to_recipients: list[str] | None = None) -> bool:
    blob = f"{subject or ''} {body or ''}".lower()
    if any(needle in blob for needle in _INTERNAL_DRAFT):
        return True
    tos = [sender_email(x) for x in (to_recipients or [])]
    if tos and all(t == ACCOUNT_FROM or t.endswith("@evenox.ca") for t in tos):
        return True
    return False


def bucket_thread(
    *,
    sender: str,
    subject: str,
    snippet: str = "",
    label_names: list[str] | None = None,
    messages: list[dict] | None = None,
    classification: Classification | None = None,
) -> str:
    """Decide if this thread is an unreplied client, a first-contact lead, or noise."""
    decision = classification or classify(
        sender=sender,
        subject=subject,
        snippet=snippet,
        label_names=label_names,
    )
    last = last_live_message(messages or [])
    last_sender = last.sender if last else sender
    last_labels = last.label_ids if last else []

    if decision.decision == Decision.IGNORE:
        return Bucket.NOISE

    if any(needle in sender_email(sender) for needle in LEAD_SENDERS) or any(
        needle in sender_email(last_sender) for needle in LEAD_SENDERS
    ):
        if thread_has_evenox_sent(messages or []):
            return Bucket.WAITING_ON_CLIENT
        return Bucket.LEAD_NO_FIRST_MAIL

    if is_evenox_outbound(last_sender, last_labels):
        return Bucket.WAITING_ON_CLIENT

    if decision.decision in (Decision.QUEUE, Decision.ALREADY_HANDLED):
        if is_internal_or_lead_sender(last_sender) and not is_evenox_outbound(
            last_sender, last_labels
        ):
            return Bucket.LEAD_NO_FIRST_MAIL
        return Bucket.CLIENT_WAITING

    return Bucket.NOISE


def group_leads_by_client(items: list[DigestItem]) -> list[DigestItem]:
    """One row per client email. Keep the first (usually the lead, not the clone)."""
    seen: dict[str, DigestItem] = {}
    leftovers: list[DigestItem] = []
    for item in items:
        key = sender_email(item.client) if "@" in item.client else ""
        if not key:
            leftovers.append(item)
            continue
        if key not in seen:
            seen[key] = item
    return list(seen.values()) + leftovers


def digest_subject(n_waiting: int, n_leads: int) -> str:
    total = n_waiting + n_leads
    return f"[GROK] Non répondus 7 jours — {total} dossier(s)"


def format_digest(
    *,
    waiting: list[DigestItem],
    leads: list[DigestItem],
    waiting_on_client: list[DigestItem],
    failed: bool = False,
) -> tuple[str, str]:
    """Return (plain, html) for Alexandre. No client send. No IDs required."""
    if failed:
        plain = (
            "Grok n'a pas pu lire Gmail. Pas un 0. Relance la veille.\n\n"
            + SIGNATURE
        )
        return plain, f"<p>{plain.replace(chr(10), '<br/>')}</p>"

    waiting = group_leads_by_client(waiting)
    leads = group_leads_by_client(leads)

    def block(title: str, rows: list[DigestItem]) -> str:
        if not rows:
            return f"{title}\nAucun.\n"
        lines = [title]
        for i, row in enumerate(rows, 1):
            lines.append(f"{i}. {row.client} — {row.subject}")
            lines.append(f"   Pourquoi : {row.why}")
            lines.append(f"   Brouillon Grok : {row.draft_status}")
            if row.draft_preview:
                lines.append("   Réponse prête :")
                for line in row.draft_preview.strip().splitlines():
                    lines.append(f"   {line}")
            if row.action:
                lines.append(f"   Toi : {row.action}")
            lines.append("")
        return "\n".join(lines) + "\n"

    plain = (
        "Grok — filet 7 jours. Rien n'est parti aux clients. "
        "Dis « envoie » pour un dossier, je l'envoie.\n\n"
        + block(
            f"1. Client a écrit, Evenox n'a pas répondu ({len(waiting)})",
            waiting,
        )
        + block(
            f"2. Leads site / WeddingWire sans premier courriel ({len(leads)})",
            leads,
        )
        + block(
            f"3. On a répondu — on attend le client ({len(waiting_on_client)})",
            waiting_on_client,
        )
        + "Règle : dual-write Grok-File + NOX-À-traiter. "
        "Pas d'envoi client sans « envoie ».\n\n"
        + SIGNATURE
    )

    def html_block(title: str, rows: list[DigestItem]) -> str:
        if not rows:
            return f"<h2>{title}</h2><p>Aucun.</p>"
        parts = [f"<h2>{title}</h2>"]
        for row in rows:
            preview = ""
            if row.draft_preview:
                escaped = (
                    row.draft_preview.replace("&", "&amp;")
                    .replace("<", "&lt;")
                    .replace(">", "&gt;")
                )
                preview = f"<pre style='white-space:pre-wrap;background:#f6f3ff;padding:12px;border-radius:8px'>{escaped}</pre>"
            extra = f"<p><b>Toi :</b> {row.action}</p>" if row.action else ""
            parts.append(
                "<div style='margin:0 0 24px;padding:0 0 16px;border-bottom:1px solid #eee'>"
                f"<p><b>{row.client}</b> — {row.subject}<br/>"
                f"Pourquoi : {row.why}<br/>"
                f"Brouillon Grok : {row.draft_status}</p>"
                f"{preview}{extra}</div>"
            )
        return "".join(parts)

    html = (
        "<div style='font-family:Arial,sans-serif;color:#1a1a2e'>"
        "<p>Grok — filet 7 jours. Rien n'est parti aux clients. "
        "Dis <b>envoie</b> pour un dossier, je l'envoie.</p>"
        + html_block(
            f"1. Client a écrit, Evenox n'a pas répondu ({len(waiting)})",
            waiting,
        )
        + html_block(
            f"2. Leads site / WeddingWire sans premier courriel ({len(leads)})",
            leads,
        )
        + html_block(
            f"3. On a répondu — on attend le client ({len(waiting_on_client)})",
            waiting_on_client,
        )
        + "<p>Règle : dual-write Grok-File + NOX-À-traiter. "
        "Pas d'envoi client sans « envoie ».</p>"
        f"<p>{SIGNATURE.replace(chr(10), '<br/>')}</p></div>"
    )
    return plain, html


def client_preview(body: str, *, internal: bool) -> str:
    """Strip Alex-only notes so the digest shows what would actually go out."""
    if internal:
        return ""
    lines = []
    for line in (body or "").splitlines():
        low = line.strip().lower()
        if low.startswith("⚠️") or low.startswith("⚠️ alex") or low.startswith("alex —"):
            break
        if low.startswith("note d'escalade") or low.startswith("note d’escalade"):
            return ""
        lines.append(line)
    return "\n".join(lines).strip()
