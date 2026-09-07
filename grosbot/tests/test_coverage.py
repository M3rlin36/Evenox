from grosbot.coverage import (
    coverage_line,
    coverage_of,
    draft_is_not_received,
    is_send_go,
    still_owed,
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
    assert "Parti" in line
    clean = coverage_line(coverage_of(queued=0, undelivered_drafts=0, sent=4))
    assert clean.startswith("Couverture : 0 en attente")


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
