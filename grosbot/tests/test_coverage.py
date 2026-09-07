from grosbot.coverage import (
    coverage_line,
    coverage_of,
    draft_is_not_received,
    is_reply_all,
    is_send_go,
    needs_reply,
    still_owed,
    sweep_closed,
)
from grosbot.queries import LABEL_DRAFT_IA, LABEL_SENT, SEND_QUERY
from grosbot.queue import Thread, finish


def test_send_query_finds_drafts_that_never_left():
    assert "Brouillon IA" in SEND_QUERY
    assert "Grok-Envoyé" in SEND_QUERY
    assert "is:unread" not in SEND_QUERY


def test_draft_finish_is_not_processed_and_not_sent():
    action = finish(Thread("1", "client@example.com", "RE: devis"), drafted=True)
    assert LABEL_DRAFT_IA in action.add_labels
    assert "NOX-Processed" not in action.add_labels
    assert LABEL_SENT not in action.add_labels
    assert "rien reçu" in action.reason


def test_coverage_line_counts_undelivered_drafts():
    line = coverage_line(coverage_of(queued=10, undelivered_drafts=7, sent=2))
    assert "10 sans brouillon" in line
    assert "7 brouillon(s) pas reçu(s)" in line
    assert "Pas fini" in line
    clean = coverage_line(coverage_of(queued=0, undelivered_drafts=0, sent=4))
    assert "0 trou" in clean
    open_ = coverage_line(
        coverage_of(queued=2, undelivered_drafts=1, sent=0, unlabeled=4)
    )
    assert "4 pas étiquetés" in open_
    assert "Pas fini" in open_
    assert sweep_closed(coverage_of(queued=0, undelivered_drafts=0, sent=3)) is True
    assert sweep_closed(coverage_of(queued=0, undelivered_drafts=0, sent=0, unlabeled=1)) is False


def test_send_go_batch_words():
    assert is_send_go("envoie") is True
    assert is_send_go("envoie les brouillons") is True
    assert is_send_go("envoie tout") is True
    assert is_send_go("tu peux les envoyer") is True
    assert is_send_go("skip") is False
    assert is_send_go("fais la soumission") is False


def test_promised_without_sent_are_still_owed():
    assert still_owed(["a", "b", "c"], ["a"]) == ["b", "c"]


def test_brouillon_ia_without_envoye_is_not_received():
    assert draft_is_not_received([LABEL_DRAFT_IA, "NOX-Processed"]) is True
    assert draft_is_not_received([LABEL_DRAFT_IA, LABEL_SENT]) is False


def test_needs_reply_skips_our_last_mail_and_closed_labels():
    assert needs_reply(last_sender="client@example.com") is True
    assert needs_reply(last_sender="evenox.ca@gmail.com") is False
    assert needs_reply(last_sender="ops@evenox.ca") is False
    assert needs_reply(last_sender="client@example.com", labels=[LABEL_SENT]) is False
    assert needs_reply(last_sender="client@example.com", labels=["NOX-Spam"]) is False


def test_reply_all_magic():
    assert is_reply_all("réponds à tous") is True
    assert is_reply_all("vide la file") is True
    assert is_reply_all("envoie") is False
