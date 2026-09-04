"""Grosbot inbox queue — cheap, durable, one email at a time."""

from grosbot.classify import Decision, classify
from grosbot.queue import (
    MAX_CLAIMS_PER_RUN,
    MAX_DRAFTS_PER_RUN,
    QueueError,
    claim_next,
    finish,
    promised_threads,
)

__all__ = [
    "Decision",
    "MAX_CLAIMS_PER_RUN",
    "MAX_DRAFTS_PER_RUN",
    "QueueError",
    "claim_next",
    "classify",
    "finish",
    "promised_threads",
]
