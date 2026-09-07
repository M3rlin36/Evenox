"""One trigger runs the whole inbox ritual.

Alexandre should not type four phrases. A human rituel word =
unstick → draft → send → retry Pas parti → coverage, same turn.

The cheap timer never send_message. It drafts, then Slack-pings
so a later `envoie` can fire. Hold Sylvie is still 0 send.
"""

from __future__ import annotations

from grosbot.coverage import is_reply_all, is_send_go, is_unstick
from grosbot.queries import RITUEL_MAGIC, TIMER_MARKER, TIMER_MARKERS
from grosbot.queue import MAX_SENDS_PER_RUN
from grosbot.sweep import draft_cap_this_run

RITUEL_STEPS = (
    "release_stuck En-cours",
    "veille CATCHUP_QUERY",
    "filet LEAD_NET_QUERY",
    "filet UNANSWERED_QUERY",
    "close_interne n8n",
    "claim + brouillon RAPIDE (0 Booqable, 0 Drive, 0 PDF)",
    "SEND_QUERY + send_message + prove_sent",
    "retry Pas parti une fois",
    "coverage_line",
)

TIMER_STEPS = (
    "release_stuck En-cours",
    "veille CATCHUP_QUERY",
    "filet LEAD_NET_QUERY",
    "filet UNANSWERED_QUERY",
    "close_interne n8n",
    "claim + brouillon RAPIDE (0 Booqable, 0 Drive, 0 PDF)",
    "0 send_message",
    "Slack DM Evenox : slack_ready_line",
    "coverage_line",
)

SLACK_EVENNOX = "U0996M8QRFT"


def _blob(text: str) -> str:
    return (text or "").strip().casefold()


def _matches(text: str, magics: tuple[str, ...]) -> bool:
    blob = _blob(text)
    if not blob:
        return False
    return any(
        blob == m or blob.startswith(m + " ") or blob.startswith(m + "\n")
        for m in magics
    )


def is_timer_run(text: str) -> bool:
    """Cheap 3×/day sweep. Drafts only. Never send."""
    raw = text or ""
    if TIMER_MARKER in raw.casefold():
        return True
    blob = raw.casefold()
    return any(marker in blob for marker in TIMER_MARKERS)


def is_full_rituel(text: str) -> bool:
    """One human phrase = the whole pipeline, including send."""
    if is_timer_run(text):
        return False
    if _matches(text, RITUEL_MAGIC):
        return True
    return is_reply_all(text) or is_unstick(text)


def should_auto_send(text: str) -> bool:
    """Send in this same turn. Timer is always locked."""
    if is_timer_run(text):
        return False
    return is_send_go(text) or is_full_rituel(text)


def should_retry_pas_parti(text: str) -> bool:
    """Retry failed sends once in the same turn."""
    return should_auto_send(text)


def send_cap_this_run(text: str = "") -> int:
    """Always the hard send cap. Timer sends 0."""
    if is_timer_run(text) or not should_auto_send(text):
        return 0
    return MAX_SENDS_PER_RUN


def slack_ready_line(n_drafts: int) -> str:
    """Timer / leftover drafts. One exact reply from Alexandre."""
    if n_drafts <= 0:
        return "0 brouillon en attente. Rien à envoyer."
    return (
        f"{n_drafts} brouillon(s) prêt(s). "
        "Réponds `envoie les brouillons` (un mot : envoie)."
    )


def rituel_steps(text: str) -> tuple[str, ...]:
    if is_timer_run(text):
        return TIMER_STEPS
    return RITUEL_STEPS


def rituel_line(text: str, *, drafted: int, sent_ok: int, sent_fail: int) -> str:
    """One line after the pipeline. Never claim send on a timer."""
    cap = draft_cap_this_run(text)
    if is_timer_run(text):
        return (
            f"Timer : {drafted} brouillon(s) / cap {cap}. "
            f"{slack_ready_line(drafted)}. 0 envoi."
        )
    if should_auto_send(text):
        return (
            f"Rituel : {drafted} brouillon(s), "
            f"{sent_ok} Parti., {sent_fail} Pas parti. "
            f"Cap send {MAX_SENDS_PER_RUN}."
        )
    return (
        f"Brouillons : {drafted} / cap {cap}. "
        "Pas d’envoi (dis `envoie` ou `fais le rituel`)."
    )
