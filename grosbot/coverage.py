"""Coverage: every client mail is answered AND received.

A Gmail draft is not a reply. Received = Grok-Envoyé + prove_sent Parti.
"""

from __future__ import annotations

from dataclasses import dataclass

from grosbot.queries import (
    ACCOUNT_FROM,
    LABEL_DRAFT_IA,
    LABEL_SENT,
    LABEL_SKIP,
    LABEL_SPAM,
    REPLY_ALL_MAGIC,
    SEND_MAGIC,
    UNSTICK_MAGIC,
)


@dataclass(frozen=True)
class Coverage:
    queued: int
    undelivered: int
    sent: int
    unlabeled: int = 0

    @property
    def holes(self) -> int:
        return self.queued + self.undelivered + self.unlabeled


def coverage_of(
    *,
    queued: int,
    undelivered_drafts: int,
    sent: int,
    unlabeled: int = 0,
) -> Coverage:
    return Coverage(
        queued=queued,
        undelivered=undelivered_drafts,
        sent=sent,
        unlabeled=unlabeled,
    )


def coverage_line(cov: Coverage) -> str:
    """One line for Alexandre. Never claim everyone got mail without SENT."""
    if cov.holes == 0:
        return (
            "Couverture : 0 trou. Tous les courriels client ont un brouillon, "
            "un Parti., ou skip."
        )
    bits = []
    if cov.unlabeled:
        bits.append(f"{cov.unlabeled} pas étiquetés")
    if cov.queued:
        bits.append(f"{cov.queued} sans brouillon")
    if cov.undelivered:
        bits.append(f"{cov.undelivered} brouillon(s) pas reçu(s)")
    return (
        "Couverture : "
        + " + ".join(bits)
        + f" ({cov.holes} restant(s)). Pas fini. Prochain sweep."
    )


def sweep_closed(cov: Coverage) -> bool:
    """QUEUE VIDE only when every hole is gone."""
    return cov.holes == 0


def is_reply_all(text: str) -> bool:
    """Alexandre wants the whole file drafted this run (up to claim cap)."""
    blob = (text or "").strip().casefold()
    if not blob:
        return False
    return any(blob == m or blob.startswith(m + " ") for m in REPLY_ALL_MAGIC)


def needs_reply(*, last_sender: str, labels: list[str] | tuple[str, ...] = ()) -> bool:
    """Last message from a client, not already sent / skip / spam."""
    names = {x.casefold() for x in labels}
    if names & {
        LABEL_SENT.casefold(),
        LABEL_SKIP.casefold(),
        LABEL_SPAM.casefold(),
        "nox-processed",
    }:
        return False
    sender = (last_sender or "").strip().casefold()
    if not sender:
        return True
    if sender == ACCOUNT_FROM or sender.endswith("@evenox.ca"):
        return False
    return True


def is_unstick(text: str) -> bool:
    """Stop waiting on Booqable / Drive / a stuck En-cours."""
    blob = (text or "").strip().casefold()
    if not blob:
        return False
    return any(blob == m or blob.startswith(m + " ") for m in UNSTICK_MAGIC)


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
