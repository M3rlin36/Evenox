from grosbot.queries import LABEL_BILLING, LABEL_FILE, LABEL_SOUMISSION, LABEL_URGENT
from grosbot.queue import Thread, sort_queue


def test_sort_queue_billing_before_plain_file():

    ordered = sort_queue(
        [
            _t("quote", LABEL_SOUMISSION),
            _t("bill", LABEL_BILLING),
            _t("urgent", LABEL_URGENT),
        ]
    )
    assert [t.id for t in ordered] == ["urgent", "bill", "quote"]


def _t(tid: str, extra: str) -> Thread:
    return Thread(
        id=tid,
        sender="client@example.com",
        subject="RE: Votre devis Evenox — 1",
        snippet="Bonjour",
        labels=(LABEL_FILE, extra),
    )
