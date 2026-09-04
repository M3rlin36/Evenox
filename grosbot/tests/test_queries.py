from grosbot.queries import (
    LABEL_FILE,
    LABEL_FILE_ALIAS,
    QUEUE_QUERY,
    TRIAGE_QUERY,
)


def test_queue_query_covers_both_file_labels():
    assert LABEL_FILE in QUEUE_QUERY
    assert LABEL_FILE_ALIAS in QUEUE_QUERY
    assert "is:unread" not in QUEUE_QUERY


def test_triage_query_never_scans_all_unread():
    assert "is:unread" not in TRIAGE_QUERY
    assert "newer_than:3d" in TRIAGE_QUERY
    assert f"-label:{LABEL_FILE}" in TRIAGE_QUERY
    assert f"-label:{LABEL_FILE_ALIAS}" in TRIAGE_QUERY
