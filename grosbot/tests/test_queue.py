import pytest

from grosbot.queue import (
    MAX_DRAFTS_PER_RUN,
    QueueError,
    Thread,
    claim_next,
    finish,
    promised_threads,
    start,
    triage_action,
)
from grosbot.queries import LABEL_FILE, LABEL_IN_PROGRESS, LABEL_PROCESSED, LABEL_SPAM


def _t(tid: str, **kwargs) -> Thread:
    defaults = dict(
        sender="client@example.com",
        subject="RE: Votre devis Evenox — 1",
        snippet="Bonjour, j'attends le lien de dépôt",
        labels=(),
    )
    defaults.update(kwargs)
    return Thread(id=tid, **defaults)


def test_promised_but_not_queued_are_forgotten():
    missing = promised_threads(
        said_ids=["a", "b", "c"],
        queued_ids=["a"],
    )
    assert missing == ["b", "c"]


def test_triage_queues_client_and_spams_alarm():
    client = triage_action(_t("1"))
    alarm = triage_action(
        _t(
            "2",
            sender="notifications@alarm.com",
            subject="Alarm.com",
            snippet="",
        )
    )
    assert LABEL_FILE in client.add_labels
    assert LABEL_SPAM in alarm.add_labels


def test_claim_prefers_in_progress():
    queued = [_t("new", labels=(LABEL_FILE,))]
    current = [_t("live", labels=(LABEL_IN_PROGRESS,))]
    picked = claim_next(queued, current)
    assert picked.id == "live"


def test_claim_refuses_second_draft_same_run():
    queued = [_t("new", labels=(LABEL_FILE,))]
    with pytest.raises(QueueError, match="cap atteint"):
        claim_next(queued, [], already_drafted_this_run=MAX_DRAFTS_PER_RUN)


def test_finish_draft_marks_processed():
    action = finish(_t("1", labels=(LABEL_IN_PROGRESS,)), drafted=True)
    assert LABEL_PROCESSED in action.add_labels
    assert LABEL_IN_PROGRESS in action.remove_labels


def test_start_moves_file_to_in_progress():
    action = start(_t("1", labels=(LABEL_FILE,)))
    assert LABEL_IN_PROGRESS in action.add_labels
    assert LABEL_FILE in action.remove_labels
