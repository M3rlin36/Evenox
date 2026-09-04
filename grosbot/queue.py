"""Durable queue state machine. Memory is not the queue — Gmail labels are."""

from __future__ import annotations

from dataclasses import dataclass
from enum import Enum

from grosbot.classify import Classification, Decision, classify
from grosbot.queries import (
    LABEL_DRAFT_IA,
    LABEL_FILE,
    LABEL_IN_PROGRESS,
    LABEL_PROCESSED,
    LABEL_SKIP,
    LABEL_SPAM,
)

# Hard caps so a run cannot chew tokens on 20k unread threads.
MAX_CLAIMS_PER_RUN = 8
MAX_DRAFTS_PER_RUN = 1
MAX_IN_FLIGHT = 1


class QueueError(ValueError):
    pass


class QueueState(str, Enum):
    NEW = "NEW"
    QUEUED = "QUEUED"
    IN_PROGRESS = "IN_PROGRESS"
    DRAFTED = "DRAFTED"
    SKIPPED = "SKIPPED"
    SPAM = "SPAM"
    DONE = "DONE"


@dataclass(frozen=True)
class Thread:
    id: str
    sender: str
    subject: str
    snippet: str = ""
    labels: tuple[str, ...] = ()


@dataclass(frozen=True)
class QueueAction:
    thread_id: str
    add_labels: tuple[str, ...]
    remove_labels: tuple[str, ...]
    state: QueueState
    reason: str


def promised_threads(said_ids: list[str], queued_ids: list[str]) -> list[str]:
    """Threads Grosbot said it would handle that are not in the durable queue.

    If this returns anything, Grosbot already forgot them — claim them before
    drafting, or they will vanish when the context window fills.
    """
    queued = set(queued_ids)
    missing = []
    seen: set[str] = set()
    for tid in said_ids:
        if not tid or tid in seen:
            continue
        seen.add(tid)
        if tid not in queued:
            missing.append(tid)
    return missing


def triage_action(thread: Thread) -> QueueAction:
    """Turn a classification into label mutations. Cheap. No body fetch."""
    result: Classification = classify(
        sender=thread.sender,
        subject=thread.subject,
        snippet=thread.snippet,
        label_names=list(thread.labels),
    )
    labels = set(thread.labels)
    if result.decision is Decision.IGNORE:
        if LABEL_SPAM in labels:
            return QueueAction(thread.id, (), (), QueueState.SPAM, result.reason)
        return QueueAction(
            thread.id, (LABEL_SPAM,), (), QueueState.SPAM, result.reason
        )
    if result.decision is Decision.ALREADY_HANDLED:
        state = QueueState.QUEUED if LABEL_FILE in labels else QueueState.DONE
        if LABEL_IN_PROGRESS in labels:
            state = QueueState.IN_PROGRESS
        if LABEL_SKIP in labels:
            state = QueueState.SKIPPED
        if LABEL_PROCESSED in labels:
            state = QueueState.DONE
        return QueueAction(thread.id, (), (), state, result.reason)
    return QueueAction(
        thread.id,
        (LABEL_FILE,),
        (),
        QueueState.QUEUED,
        result.reason,
    )


def claim_next(
    queued: list[Thread],
    in_progress: list[Thread],
    *,
    already_drafted_this_run: int = 0,
) -> Thread:
    """Pick the single thread Grosbot may draft now.

    In-flight work always wins. Never start a second dossier while one is
    labelled GROS-En-cours. Never draft more than MAX_DRAFTS_PER_RUN per run.
    """
    if already_drafted_this_run >= MAX_DRAFTS_PER_RUN:
        raise QueueError(
            f"cap atteint : {MAX_DRAFTS_PER_RUN} brouillon(s) par run. "
            "Le reste reste dans GROS-File."
        )
    live = [t for t in in_progress if LABEL_PROCESSED not in t.labels]
    if len(live) > MAX_IN_FLIGHT:
        raise QueueError(
            "plus d’un fil GROS-En-cours. Termine ou skip avant d’en ouvrir un autre."
        )
    if live:
        return live[0]
    if not queued:
        raise QueueError("file vide")
    return queued[0]


def start(thread: Thread) -> QueueAction:
    return QueueAction(
        thread.id,
        (LABEL_IN_PROGRESS,),
        (LABEL_FILE,),
        QueueState.IN_PROGRESS,
        "claimed for this run",
    )


def finish(thread: Thread, *, drafted: bool) -> QueueAction:
    if drafted:
        return QueueAction(
            thread.id,
            (LABEL_PROCESSED, LABEL_DRAFT_IA),
            (LABEL_FILE, LABEL_IN_PROGRESS),
            QueueState.DRAFTED,
            "draft ready, waiting for Alexandre envoie",
        )
    return QueueAction(
        thread.id,
        (LABEL_SKIP, LABEL_PROCESSED),
        (LABEL_FILE, LABEL_IN_PROGRESS),
        QueueState.SKIPPED,
        "skipped",
    )


def cap_triage(threads: list[Thread]) -> list[Thread]:
    return threads[:MAX_CLAIMS_PER_RUN]
