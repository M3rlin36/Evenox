"""Durable queue state machine. Memory is not the queue — Gmail labels are.

Nate: label first, one at a time, emergencies before the morning pile,
drafts until the human says send, never clean the old unread mountain.
"""

from __future__ import annotations

from dataclasses import dataclass
from enum import Enum

from grosbot.classify import Classification, Decision, classify
from grosbot.queries import (
    FILE_LABELS,
    IN_PROGRESS_LABELS,
    LABEL_BILLING,
    LABEL_DRAFT_IA,
    LABEL_FILE,
    LABEL_IN_PROGRESS,
    LABEL_PROCESSED,
    LABEL_SCHEDULE,
    LABEL_SKIP,
    LABEL_SOUMISSION,
    LABEL_SPAM,
    LABEL_URGENT,
)

# Hard caps so a run cannot chew tokens on 20k unread threads.
MAX_CLAIMS_PER_RUN = 8
MAX_DRAFTS_PER_RUN = 1
MAX_IN_FLIGHT = 1

# Nate: Emergency → money/billing → schedule → quotes → the rest.
KIND_PRIORITY = {
    LABEL_URGENT: 0,
    LABEL_BILLING: 1,
    LABEL_SCHEDULE: 2,
    LABEL_SOUMISSION: 3,
}


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
    """Threads Grokbot said it would handle that are not in the durable queue.

    If this returns anything, Grokbot already forgot them — claim them before
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


def _dedupe(labels: tuple[str, ...]) -> tuple[str, ...]:
    seen: set[str] = set()
    out: list[str] = []
    for name in labels:
        if name and name not in seen:
            seen.add(name)
            out.append(name)
    return tuple(out)


def triage_action(thread: Thread) -> QueueAction:
    """Turn a classification into label mutations. Cheap. No body fetch.

    Dual-writes GROS-File + NOX-À-traiter so the split synonyms stay one queue.
    Nate type labels (URGENT / Soumission / Livraison / Acompte) ride along.
    Never marks UNREAD as read.
    """
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
        state = QueueState.QUEUED if (LABEL_FILE in labels or "NOX-À-traiter" in labels) else QueueState.DONE
        if LABEL_IN_PROGRESS in labels or "NOX-En-cours" in labels:
            state = QueueState.IN_PROGRESS
        if LABEL_SKIP in labels:
            state = QueueState.SKIPPED
        if LABEL_PROCESSED in labels:
            state = QueueState.DONE
        extra: tuple[str, ...] = ()
        if state is QueueState.QUEUED:
            extra = _missing_file_aliases(labels)
            if result.type_label and result.type_label not in labels:
                extra = extra + (result.type_label,)
        return QueueAction(thread.id, extra, (), state, result.reason)
    add = FILE_LABELS
    if result.type_label:
        add = add + (result.type_label,)
    return QueueAction(
        thread.id,
        _dedupe(add),
        (),
        QueueState.QUEUED,
        result.reason,
    )


def _missing_file_aliases(labels: set[str]) -> tuple[str, ...]:
    return tuple(name for name in FILE_LABELS if name not in labels)


def sort_queue(queued: list[Thread]) -> list[Thread]:
    """Nate: emergencies and money fights before new quotes."""

    def key(thread: Thread) -> tuple[int, str]:
        labels = set(thread.labels)
        rank = 9
        for name, prio in KIND_PRIORITY.items():
            if name in labels:
                rank = min(rank, prio)
        return (rank, thread.id)

    return sorted(queued, key=key)


def claim_next(
    queued: list[Thread],
    in_progress: list[Thread],
    *,
    already_drafted_this_run: int = 0,
) -> Thread:
    """Pick the single thread Grokbot may draft now.

    In-flight work always wins. Never start a second dossier while one is
    labelled GROS-En-cours. Never draft more than MAX_DRAFTS_PER_RUN per run.
    """
    if already_drafted_this_run >= MAX_DRAFTS_PER_RUN:
        raise QueueError(
            f"cap atteint : {MAX_DRAFTS_PER_RUN} brouillon(s) par run. "
            "Le reste reste dans GROS-File."
        )
    live = [
        t
        for t in in_progress
        if LABEL_PROCESSED not in t.labels
    ]
    if len(live) > MAX_IN_FLIGHT:
        raise QueueError(
            "plus d’un fil GROS-En-cours. Termine ou skip avant d’en ouvrir un autre."
        )
    if live:
        return live[0]
    ordered = sort_queue(queued)
    if not ordered:
        raise QueueError("file vide")
    return ordered[0]


def start(thread: Thread) -> QueueAction:
    return QueueAction(
        thread.id,
        IN_PROGRESS_LABELS,
        FILE_LABELS,
        QueueState.IN_PROGRESS,
        "claimed for this run",
    )


def finish(thread: Thread, *, drafted: bool) -> QueueAction:
    if drafted:
        return QueueAction(
            thread.id,
            (LABEL_PROCESSED, LABEL_DRAFT_IA),
            FILE_LABELS + IN_PROGRESS_LABELS,
            QueueState.DRAFTED,
            "draft ready, waiting for Alexandre envoie",
        )
    return QueueAction(
        thread.id,
        (LABEL_SKIP, LABEL_PROCESSED),
        FILE_LABELS + IN_PROGRESS_LABELS,
        QueueState.SKIPPED,
        "skipped",
    )


def cap_triage(threads: list[Thread]) -> list[Thread]:
    return threads[:MAX_CLAIMS_PER_RUN]


def empty_run_message() -> str:
    """Nate: if nothing fits, do nothing. Evenox says QUEUE VIDE."""
    return "QUEUE VIDE"
