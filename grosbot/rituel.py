"""Two modes. Alexandre does not watch.

WATCH (timer) : unstick + draft RAPIDE. Quote only if already in the
thread. Slack « N à valider. Dis envoie. » Never send_message.

GO (`envoie`) : leftover drafts + send + 1 retry, same turn.

Hold Sylvie is still 0 send.
"""

from __future__ import annotations

from grosbot.coverage import is_reply_all, is_send_go, is_unstick
from grosbot.queries import RITUEL_MAGIC, TIMER_MARKER, TIMER_MARKERS
from grosbot.queue import MAX_SENDS_PER_RUN
from grosbot.sweep import draft_cap_this_run

WATCH_STEPS = (
    "release_stuck En-cours",
    "veille CATCHUP_QUERY",
    "filet LEAD_NET_QUERY",
    "filet UNANSWERED_QUERY",
    "close_interne n8n",
    "claim + brouillon RAPIDE (0 Booqable, 0 Drive, 0 PDF)",
    "devis seulement si déjà dans le fil",
    "0 send_message",
    "Slack : N à valider. Dis envoie.",
    "coverage_line",
)

GO_STEPS = (
    "release_stuck En-cours",
    "veille + filets + close_interne",
    "claim + brouillon RAPIDE (0 Booqable, 0 Drive, 0 PDF)",
    "SEND_QUERY + send_message + prove_sent",
    "retry Pas parti une fois",
    "coverage_line",
)

# Old names — tests + older docs.
RITUEL_STEPS = GO_STEPS
TIMER_STEPS = WATCH_STEPS

SLACK_EVENNOX = "U0996M8QRFT"
SLACK_VALIDATE_CHANNEL = "D0996M8TJ0H"


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
    """Cheap 3×/day watch. Drafts only. Never send."""
    raw = text or ""
    if TIMER_MARKER in raw.casefold():
        return True
    blob = raw.casefold()
    return any(marker in blob for marker in TIMER_MARKERS)


def is_full_rituel(text: str) -> bool:
    """Legacy aliases still flush + send. Advertised word is envoie."""
    if is_timer_run(text):
        return False
    if _matches(text, RITUEL_MAGIC):
        return True
    return is_reply_all(text) or is_unstick(text)


def should_auto_send(text: str) -> bool:
    """Only a human GO. Timer is always locked."""
    if is_timer_run(text):
        return False
    return is_send_go(text) or is_full_rituel(text)


def should_retry_pas_parti(text: str) -> bool:
    return should_auto_send(text)


def send_cap_this_run(text: str = "") -> int:
    if is_timer_run(text) or not should_auto_send(text):
        return 0
    return MAX_SENDS_PER_RUN


def slack_ready_line(n_drafts: int) -> str:
    """Watch ping. One word back."""
    if n_drafts <= 0:
        return "0 à valider."
    return f"{n_drafts} à valider. Dis `envoie`."


def rituel_steps(text: str) -> tuple[str, ...]:
    if is_timer_run(text):
        return WATCH_STEPS
    if should_auto_send(text):
        return GO_STEPS
    return WATCH_STEPS


def rituel_line(text: str, *, drafted: int, sent_ok: int, sent_fail: int) -> str:
    """One line. Never claim send on a watch run."""
    cap = draft_cap_this_run(text)
    if is_timer_run(text):
        return (
            f"Veille : {drafted} brouillon(s) / cap {cap}. "
            f"{slack_ready_line(drafted)} 0 envoi."
        )
    if should_auto_send(text):
        return f"{sent_ok} Parti., {sent_fail} Pas parti."
    return f"{drafted} brouillon(s) / cap {cap}. Dis `envoie`."
