import pytest

from grosbot.queries import (
    LABEL_AUTO_REPLIED,
    LABEL_DRAFT_IA,
    LABEL_FILE,
    LABEL_FILE_ALIAS,
    LABEL_IN_PROGRESS,
    LABEL_IN_PROGRESS_ALIAS,
    LABEL_PROCESSED,
    LABEL_SENT,
    LABEL_SOUMISSION,
    LABEL_SPAM,
    LABEL_URGENT,
)
from grosbot.queue import (
    MAX_DRAFTS_PER_RUN,
    QueueError,
    SentProof,
    Thread,
    claim_next,
    finish,
    is_unproven_send_claim,
    mark_sent,
    promised_threads,
    prove_sent,
    start,
    triage_action,
)


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
    assert LABEL_FILE_ALIAS in client.add_labels
    assert LABEL_SPAM in alarm.add_labels


def test_triage_dual_writes_quote_label_on_wordpress_lead():
    action = triage_action(
        _t(
            "lead",
            sender="wordpress@evenox.ca",
            subject="Nouveau lead — Client Test (2026-09-23)",
            snippet="Client Test evenement 2026-09-23 tables",
        )
    )
    assert LABEL_FILE in action.add_labels
    assert LABEL_FILE_ALIAS in action.add_labels
    assert LABEL_SOUMISSION in action.add_labels


def test_already_queued_alias_gets_canonical_file_label():
    action = triage_action(
        _t(
            "1",
            labels=(LABEL_FILE_ALIAS,),
            sender="wordpress@evenox.ca",
            subject="Nouveau lead — Client Test (2026-09-23)",
            snippet="tables",
        )
    )
    assert LABEL_FILE in action.add_labels


def test_claim_prefers_in_progress():
    queued = [_t("new", labels=(LABEL_FILE,))]
    current = [_t("live", labels=(LABEL_IN_PROGRESS,))]
    picked = claim_next(queued, current)
    assert picked.id == "live"


def test_claim_prefers_urgent_over_new_quote():
    queued = [
        _t("lead", labels=(LABEL_FILE, LABEL_SOUMISSION)),
        _t("urgent", labels=(LABEL_FILE, LABEL_URGENT)),
    ]
    picked = claim_next(queued, [])
    assert picked.id == "urgent"


def test_claim_refuses_second_draft_same_run():
    queued = [_t("new", labels=(LABEL_FILE,))]
    with pytest.raises(QueueError, match="cap atteint"):
        claim_next(queued, [], already_drafted_this_run=MAX_DRAFTS_PER_RUN)


def test_finish_draft_marks_processed_and_clears_aliases():
    action = finish(_t("1", labels=(LABEL_IN_PROGRESS,)), drafted=True)
    assert LABEL_PROCESSED in action.add_labels
    assert LABEL_IN_PROGRESS in action.remove_labels
    assert LABEL_IN_PROGRESS_ALIAS in action.remove_labels
    assert LABEL_FILE in action.remove_labels
    assert LABEL_FILE_ALIAS in action.remove_labels


def test_start_moves_both_file_labels_to_both_in_progress():
    action = start(_t("1", labels=(LABEL_FILE, LABEL_FILE_ALIAS)))
    assert LABEL_IN_PROGRESS in action.add_labels
    assert LABEL_IN_PROGRESS_ALIAS in action.add_labels
    assert LABEL_FILE in action.remove_labels
    assert LABEL_FILE_ALIAS in action.remove_labels


def test_finish_draft_is_not_a_send():
    action = finish(_t("1", labels=(LABEL_IN_PROGRESS,)), drafted=True)
    assert LABEL_DRAFT_IA in action.add_labels
    assert LABEL_SENT not in action.add_labels
    assert "Pas parti" in action.reason


def _live_thread(**sent_overrides):
    sent = {
        "id": "msg-sent-1",
        "sender": "evenox.ca@gmail.com",
        "toRecipients": ["client@example.com"],
        "date": "2026-09-04T22:44:56Z",
        "labelIds": ["SENT"],
        "threadId": "thread-1",
        "subject": "RE: Votre devis Evenox",
        "plaintextBody": "Bonjour,\nVoici le lien de dépôt.\n",
    }
    sent.update(sent_overrides)
    return {
        "id": "thread-1",
        "messages": [
            {
                "id": "msg-in-1",
                "sender": "client@example.com",
                "toRecipients": ["evenox.ca@gmail.com"],
                "date": "2026-09-01T23:42:57Z",
                "labelIds": ["INBOX"],
                "threadId": "thread-1",
            },
            sent,
        ],
    }


def test_prove_sent_ok_on_live_gmail_shape():
    send_result = {
        "id": "msg-sent-1",
        "threadId": "thread-1",
        "labelIds": ["SENT"],
    }
    proof = prove_sent(send_result=send_result, thread=_live_thread())
    assert proof.ok is True
    assert proof.line().startswith("Parti.")
    assert "À : client@example.com" in proof.line()
    assert "Objet : RE: Votre devis Evenox" in proof.line()
    assert "Voici le lien de dépôt." in proof.line()
    assert "ID :" not in proof.line()


def test_prove_sent_accepts_nested_send_message_and_snake_case():
    send_result = {"message": {"id": "msg-sent-1", "thread_id": "thread-1"}}
    thread = {
        "id": "thread-1",
        "messages": [
            {
                "id": "msg-sent-1",
                "sender": "Evenox <evenox.ca@gmail.com>",
                "to_recipients": ["client@example.com"],
                "date": "2026-09-04T22:44:56Z",
                "label_ids": ["SENT"],
                "thread_id": "thread-1",
                "subject": "RE: Votre devis Evenox",
                "plaintext_body": "Bonjour,\nVoici le lien.",
            }
        ],
    }
    proof = prove_sent(send_result=send_result, thread=thread)
    assert proof.ok is True


def test_prove_sent_fails_without_send_id():
    proof = prove_sent(send_result={}, thread=_live_thread())
    assert proof.ok is False
    assert proof.line() == "Pas parti. Le brouillon est encore là."


def test_prove_sent_fails_when_get_thread_omits_draft():
    send_result = {"id": "msg-new-draft", "threadId": "thread-1"}
    proof = prove_sent(send_result=send_result, thread=_live_thread())
    assert proof.ok is False
    assert "brouillon" in proof.line().casefold()


def test_prove_sent_old_sent_is_not_proof_of_new_send():
    """Alexandre's bug: bot says j'envoie, Gmail already had an older SENT."""
    send_result = {"id": "msg-not-actually-sent", "labelIds": ["SENT"]}
    proof = prove_sent(send_result=send_result, thread=_live_thread())
    assert proof.ok is False
    assert "Parti." not in proof.line()


def test_prove_sent_fails_without_sent_label():
    send_result = {"id": "msg-sent-1", "threadId": "thread-1"}
    proof = prove_sent(
        send_result=send_result,
        thread=_live_thread(labelIds=["INBOX"]),
    )
    assert proof.ok is False
    assert "SENT" in proof.reason


def test_mark_sent_refuses_without_proof():
    with pytest.raises(QueueError, match="Pas parti"):
        mark_sent(_t("thread-1"), SentProof(ok=False, reason="get_thread manquant."))


def test_mark_sent_stamps_grok_envoye_after_proof():
    proof = prove_sent(
        send_result={"id": "msg-sent-1", "threadId": "thread-1", "labelIds": ["SENT"]},
        thread=_live_thread(),
    )
    action = mark_sent(_t("thread-1", labels=(LABEL_IN_PROGRESS, LABEL_DRAFT_IA)), proof)
    assert LABEL_SENT in action.add_labels
    assert LABEL_PROCESSED in action.add_labels
    assert LABEL_AUTO_REPLIED in action.add_labels
    assert LABEL_DRAFT_IA in action.remove_labels
    assert LABEL_IN_PROGRESS in action.remove_labels


def test_j_envoie_without_proof_block_is_banned():
    assert is_unproven_send_claim("j'envoie Jacqueline") is True
    assert is_unproven_send_claim("c'est parti") is True
    proven = (
        "Parti.\n"
        "À : client@example.com\n"
        "Objet : RE: Votre devis Evenox\n"
        "\n"
        "Bonjour,\nVoici le lien de dépôt."
    )
    assert is_unproven_send_claim(proven) is False
