from grosbot.queries import (
    LABEL_BILLING,
    LABEL_FILE,
    LABEL_FILE_ALIAS,
    LABEL_IDS,
    LABEL_IN_PROGRESS,
    LABEL_SKIP,
    LABEL_SCHEDULE,
    LABEL_URGENT,
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
