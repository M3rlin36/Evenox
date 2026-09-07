"""Zero-hole sweep. Every client mail is labelled, drafted, then sent.

A run may cap at 3 RAPIDE drafts. The *system* is not done while
Coverage.holes > 0. Next timer (9h / 12h / 16h) continues.
"""

from __future__ import annotations

from grosbot.coverage import coverage_of, is_reply_all, sweep_closed
from grosbot.queue import MAX_CLAIMS_PER_RUN, MAX_DRAFTS_PER_RUN

SWEEP_ORDER = (
    "veille CATCHUP_QUERY",
    "filet LEAD_NET_QUERY",
    "filet UNANSWERED_QUERY (14j, max 20, classify)",
    "fermer En-cours",
    "close_interne n8n",
    "claim_next RAPIDE/LENT",
    "SEND_QUERY si envoie",
    "coverage_line — interdit QUEUE VIDE s'il reste un trou",
)


def draft_cap_this_run(user_text: str = "") -> int:
    """réponds à tous = vider jusqu'au cap claims. Sinon 3 RAPIDE."""
    if is_reply_all(user_text):
        return MAX_CLAIMS_PER_RUN
    return MAX_DRAFTS_PER_RUN


def may_say_queue_empty(unlabeled: int, queued: int, undelivered: int) -> bool:
    return sweep_closed(
        coverage_of(
            queued=queued,
            undelivered_drafts=undelivered,
            sent=0,
            unlabeled=unlabeled,
        )
    )
