"""Durable queue state machine. Memory is not the queue — Gmail labels are.

Nate: label first, one at a time, emergencies before the morning pile,
drafts until the human says send, never clean the old unread mountain.
"""

from __future__ import annotations

from dataclasses import dataclass
from enum import Enum

from grosbot.classify import Classification, Decision, classify
from grosbot.queries import (
    ACCOUNT_FROM,
    FILE_LABELS,
    IN_PROGRESS_LABELS,
    LABEL_AUTO_REPLIED,
    LABEL_BILLING,
    LABEL_DRAFT_IA,
    LABEL_FILE,
    LABEL_IN_PROGRESS,
    LABEL_PROCESSED,
    LABEL_SCHEDULE,
    LABEL_SENT,
    LABEL_SKIP,
    LABEL_SOUMISSION,
    LABEL_SPAM,
    LABEL_URGENT,
    SYSTEM_DRAFT,
    SYSTEM_SENT,
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
    SENT = "SENT"
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


@dataclass(frozen=True)
class SentProof:
    """Same-turn send proof. Chat is not proof. Gmail SENT is.

    Alexandre sees the mail itself (who / subject / body). Never an ID.
    """

    ok: bool
    message_id: str = ""
    thread_id: str = ""
    to: str = ""
    subject: str = ""
    body: str = ""
    sent_at: str = ""
    reason: str = ""

    def line(self) -> str:
        if not self.ok:
            return "Pas parti. Le brouillon est encore là."
        bits = ["Parti.", f"À : {self.to}"]
        if self.subject:
            bits.append(f"Objet : {self.subject}")
        text = (self.body or "").strip()
        if text:
            bits.append("")
            bits.append(text)
        return "\n".join(bits)


# Future-tense claims that made Alexandre wait on Gmail. Banned unless
# prove_sent already returned Parti. in THIS turn.
UNPROVEN_SEND_PHRASES = (
    "j'envoie",
    "j’envoie",
    "je vais envoyer",
    "je l'envoie",
    "je l’envoie",
    "c'est parti",
    "c’est parti",
    "je viens d'envoyer",
    "je viens d’envoyer",
)


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

    Dual-writes Grok-File + NOX-À-traiter so the split synonyms stay one queue.
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
    labelled Grok-En-cours. Never draft more than MAX_DRAFTS_PER_RUN per run.
    """
    if already_drafted_this_run >= MAX_DRAFTS_PER_RUN:
        raise QueueError(
            f"cap atteint : {MAX_DRAFTS_PER_RUN} brouillon(s) par run. "
            "Le reste reste dans Grok-File."
        )
    live = [
        t
        for t in in_progress
        if LABEL_PROCESSED not in t.labels
    ]
    if len(live) > MAX_IN_FLIGHT:
        raise QueueError(
            "plus d’un fil Grok-En-cours. Termine ou skip avant d’en ouvrir un autre."
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
            "brouillon prêt. Pas parti.",
        )
    return QueueAction(
        thread.id,
        (LABEL_SKIP, LABEL_PROCESSED),
        FILE_LABELS + IN_PROGRESS_LABELS,
        QueueState.SKIPPED,
        "skipped",
    )


def mark_sent(thread: Thread, proof: SentProof) -> QueueAction:
    """Stamp Grok-Envoyé only after prove_sent.ok. Never on a promise."""
    if not proof.ok:
        raise QueueError(
            "Pas parti. Pas de preuve SENT. Grok-Envoyé interdit."
        )
    return QueueAction(
        thread.id,
        (LABEL_SENT, LABEL_PROCESSED, LABEL_AUTO_REPLIED),
        FILE_LABELS + IN_PROGRESS_LABELS + (LABEL_DRAFT_IA,),
        QueueState.SENT,
        "gmail SENT proven",
    )


def _as_dict(obj: object) -> dict:
    if isinstance(obj, dict):
        return obj
    return {}


def _unwrap_message(obj: object) -> dict:
    data = _as_dict(obj)
    inner = data.get("message")
    if isinstance(inner, dict) and (inner.get("id") or inner.get("labelIds") or inner.get("label_ids")):
        return inner
    return data


def _field(obj: dict, *names: str) -> object:
    for name in names:
        if name in obj and obj[name] not in (None, ""):
            return obj[name]
    return None


def _id_of(obj: dict) -> str:
    return str(_field(obj, "id", "messageId", "message_id") or "")


def _thread_id_of(obj: dict) -> str:
    return str(_field(obj, "threadId", "thread_id", "id") or "")


def _labels_of(obj: dict) -> tuple[str, ...]:
    raw = _field(obj, "labelIds", "label_ids") or []
    if isinstance(raw, str):
        return (raw,)
    if isinstance(raw, (list, tuple)):
        return tuple(str(x) for x in raw if x)
    return ()


def _sender_of(msg: dict) -> str:
    return str(_field(msg, "sender", "from", "From") or "").lower()


def _to_of(msg: dict) -> str:
    recips = _field(msg, "toRecipients", "to_recipients", "to", "To") or []
    if isinstance(recips, str):
        return recips
    if isinstance(recips, (list, tuple)):
        return ", ".join(str(x) for x in recips if x)
    return str(recips)


def _date_of(msg: dict) -> str:
    return str(_field(msg, "date", "Date", "internalDate", "internal_date") or "")


def _subject_of(msg: dict) -> str:
    return str(_field(msg, "subject", "Subject") or "").strip()


def _body_of(msg: dict) -> str:
    raw = _field(
        msg,
        "plaintextBody",
        "plaintext_body",
        "plainText",
        "body",
        "snippet",
    ) or ""
    return str(raw).strip()


def _messages_of(thread: object) -> list[dict]:
    data = _as_dict(thread)
    messages = data.get("messages")
    if isinstance(messages, list):
        return [m for m in messages if isinstance(m, dict)]
    threads = data.get("threads")
    if isinstance(threads, list) and threads:
        first = threads[0]
        if isinstance(first, dict) and isinstance(first.get("messages"), list):
            return [m for m in first["messages"] if isinstance(m, dict)]
    return []


def prove_sent(
    *,
    send_result: object | None,
    thread: object | None,
    expected_thread_id: str | None = None,
) -> SentProof:
    """Prove a client send in THIS turn.

    Both required:
    1. send_message returned an id
    2. get_thread shows that same id, from evenox.ca@gmail.com, with SENT

    get_thread omits drafts. If the mail is still a draft, the new message
    is missing → PAS PARTI. An older SENT on the same thread is not proof.
    """
    send_msg = _unwrap_message(send_result)
    sid = _id_of(send_msg)
    if not sid:
        return SentProof(ok=False, reason="send_message n’a pas d’id.")

    send_labels = set(_labels_of(send_msg))
    if SYSTEM_DRAFT in send_labels and SYSTEM_SENT not in send_labels:
        return SentProof(
            ok=False,
            message_id=sid,
            thread_id=_thread_id_of(send_msg),
            reason="send_message a encore DRAFT.",
        )

    messages = _messages_of(thread)
    if not messages:
        return SentProof(
            ok=False,
            message_id=sid,
            thread_id=_thread_id_of(send_msg),
            reason="get_thread manquant.",
        )

    match = next((m for m in messages if _id_of(m) == sid), None)
    if match is None:
        return SentProof(
            ok=False,
            message_id=sid,
            thread_id=_thread_id_of(_as_dict(thread)) or _thread_id_of(send_msg),
            reason="id send_message absent du fil (les brouillons sont cachés).",
        )

    labels = set(_labels_of(match))
    if SYSTEM_SENT not in labels:
        return SentProof(
            ok=False,
            message_id=sid,
            thread_id=_thread_id_of(match) or _thread_id_of(send_msg),
            to=_to_of(match),
            sent_at=_date_of(match),
            reason="Gmail n’a pas SENT.",
        )

    if ACCOUNT_FROM not in _sender_of(match):
        return SentProof(
            ok=False,
            message_id=sid,
            thread_id=_thread_id_of(match),
            to=_to_of(match),
            sent_at=_date_of(match),
            reason="pas parti de evenox.ca@gmail.com.",
        )

    tid = _thread_id_of(match) or _thread_id_of(send_msg) or _thread_id_of(_as_dict(thread))
    if expected_thread_id and tid and expected_thread_id != tid:
        return SentProof(
            ok=False,
            message_id=sid,
            thread_id=tid,
            to=_to_of(match),
            sent_at=_date_of(match),
            reason="mauvais fil.",
        )

    return SentProof(
        ok=True,
        message_id=sid,
        thread_id=tid,
        to=_to_of(match),
        subject=_subject_of(match),
        body=_body_of(match),
        sent_at=_date_of(match),
        reason="gmail SENT",
    )


def is_unproven_send_claim(text: str) -> bool:
    """True if chat claims a send without the Parti. block (À + the mail)."""
    if not text:
        return False
    if text.startswith("Parti.") and "À :" in text:
        return False
    if "ENVOYÉ" in text and "À :" in text:
        return False
    lowered = text.casefold()
    return any(phrase in lowered for phrase in UNPROVEN_SEND_PHRASES)


def cap_triage(threads: list[Thread]) -> list[Thread]:
    return threads[:MAX_CLAIMS_PER_RUN]


def empty_run_message() -> str:
    """Nate: if nothing fits, do nothing. Evenox says QUEUE VIDE."""
    return "QUEUE VIDE"
