from grosbot.queries import (
    CATCHUP_QUERY,
    LABEL_AUTO_REPLIED,
    LABEL_BILLING,
    LABEL_FILE,
    LABEL_FILE_ALIAS,
    LABEL_IDS,
    LABEL_IN_PROGRESS,
    LABEL_SENT,
    LABEL_SKIP,
    LABEL_SCHEDULE,
    LABEL_URGENT,
    LEAD_NET_QUERY,
    QUEUE_QUERY,
    TRIAGE_QUERY,
    URGENT_QUERY,
)


def test_queue_query_covers_both_file_labels():
    assert LABEL_FILE in QUEUE_QUERY
    assert LABEL_FILE_ALIAS in QUEUE_QUERY
    assert "is:unread" not in QUEUE_QUERY


def test_triage_query_never_scans_all_unread():
    assert "is:unread" not in TRIAGE_QUERY
    assert "newer_than:2d" in TRIAGE_QUERY
    assert f"-label:{LABEL_FILE}" in TRIAGE_QUERY
    assert f"-label:{LABEL_FILE_ALIAS}" in TRIAGE_QUERY


def test_urgent_query_is_new_mail_only():
    assert "newer_than:2d" in URGENT_QUERY
    assert "is:unread" not in URGENT_QUERY
    assert LABEL_URGENT in URGENT_QUERY


def test_queue_labels_are_grok_gmail_names():
    assert LABEL_FILE == "Grok-File"
    assert LABEL_IN_PROGRESS == "Grok-En-cours"
    assert LABEL_SKIP == "Grok-Skip"
    assert LABEL_SCHEDULE == "Grok-Livraison"
    assert LABEL_BILLING == "Grok-Acompte"
    assert "GROS-File" not in QUEUE_QUERY
    assert LABEL_FILE in QUEUE_QUERY
    assert LABEL_IDS[LABEL_FILE] == "Label_19"
    assert LABEL_IDS[LABEL_IN_PROGRESS] == "Label_20"
    assert LABEL_IDS[LABEL_SKIP] == "Label_21"
    assert LABEL_IDS[LABEL_SCHEDULE] == "Label_24"
    assert LABEL_IDS[LABEL_BILLING] == "Label_25"
    assert LABEL_SENT == "Grok-Envoyé"
    assert LABEL_IDS[LABEL_SENT] == "Label_26"
    assert LABEL_IDS[LABEL_AUTO_REPLIED] == "Label_6"


def test_catchup_is_the_triage_window_not_the_unread_pile():
    assert CATCHUP_QUERY == TRIAGE_QUERY
    assert "newer_than:2d" in CATCHUP_QUERY
    assert "is:unread" not in CATCHUP_QUERY
    assert f"-label:{LABEL_FILE}" in CATCHUP_QUERY


def test_lead_net_finds_unlabeled_leads_behind_newsletter_noise():
    assert "is:unread" not in LEAD_NET_QUERY
    assert "newer_than:14d" in LEAD_NET_QUERY
    assert "wordpress@evenox.ca" in LEAD_NET_QUERY
    assert "weddingwire" in LEAD_NET_QUERY
    assert f"-label:{LABEL_FILE}" in LEAD_NET_QUERY
    assert f"-label:{LABEL_FILE_ALIAS}" in LEAD_NET_QUERY
