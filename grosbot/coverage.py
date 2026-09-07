"""Coverage: every client mail is answered AND received.

A Gmail draft is not a reply. Received = Grok-Envoyé + prove_sent Parti.
"""

from __future__ import annotations

from dataclasses import dataclass

from grosbot.queries import LABEL_DRAFT_IA, LABEL_SENT, SEND_MAGIC


@dataclass(frozen=True)
class Coverage:
    queued: int
    undelivered: int
    sent: int

    @property
    def holes(self) -> int:
        return self.queued + self.undelivered


def coverage_of(*, queued: int, undelivered_drafts: int, sent: int) -> Coverage:
    return Coverage(queued=queued, undelivered=undelivered_drafts, sent=sent)


def coverage_line(cov: Coverage) -> str:
    """One line for Alexandre. Never claim everyone got mail without SENT."""
    if cov.holes == 0:
        return "Couverture : 0 en attente. Les dossiers traités ont Parti."
    bits = []
    if cov.queued:
        bits.append(f"{cov.queued} sans brouillon")
    if cov.undelivered:
        bits.append(f"{cov.undelivered} brouillon(s) pas reçu(s)")
    return "Couverture : " + " + ".join(bits) + ". Pas encore Parti."


def is_send_go(text: str) -> bool:
    """Alexandre authorizes send. One word or a batch."""
    blob = (text or "").strip().casefold()
    if not blob:
        return False
    for magic in SEND_MAGIC:
        if blob == magic or blob.startswith(magic + " ") or blob.startswith(magic + "\n"):
            return True
    return False


def still_owed(said_ids: list[str], sent_ids: list[str]) -> list[str]:
    """Promised replies that the client has not received."""
    sent = set(sent_ids)
    out: list[str] = []
    seen: set[str] = set()
    for tid in said_ids:
        if not tid or tid in seen:
            continue
        seen.add(tid)
        if tid not in sent:
            out.append(tid)
    return out


def draft_is_not_received(labels: list[str] | tuple[str, ...]) -> bool:
    names = {x.casefold() for x in labels}
    return LABEL_DRAFT_IA.casefold() in names and LABEL_SENT.casefold() not in names
