from grosbot.queries import (
    ACCOUNT_FROM,
    DIGEST_TO,
    WEEKLY_CRON_UTC,
    WEEKLY_DRAFT_QUERY,
    WEEKLY_INBOX_QUERY,
    WEEKLY_LEAD_QUERY,
    WEEKLY_WINDOW,
)
from grosbot.weekly import (
    Bucket,
    DigestItem,
    bucket_thread,
    client_preview,
    digest_subject,
    draft_is_internal,
    extract_client_email,
    format_digest,
    group_leads_by_client,
    is_evenox_outbound,
    last_live_message,
    thread_has_evenox_sent,
)


def test_weekly_query_is_seven_days_not_unread_pile():
    assert WEEKLY_WINDOW == "newer_than:7d"
    assert "newer_than:7d" in WEEKLY_INBOX_QUERY
    assert "is:unread" not in WEEKLY_INBOX_QUERY
    assert "wordpress@evenox.ca" in WEEKLY_LEAD_QUERY
    assert "in:draft" in WEEKLY_DRAFT_QUERY
    assert "is:unread" not in WEEKLY_DRAFT_QUERY
    assert DIGEST_TO == ACCOUNT_FROM
    assert WEEKLY_CRON_UTC == "0 13 * * 1"


def test_last_live_skips_drafts():
    last = last_live_message(
        [
            {"sender": "client@example.com", "subject": "Devis", "labelIds": ["INBOX"]},
            {"sender": ACCOUNT_FROM, "subject": "Re: Devis", "labelIds": ["DRAFT"]},
        ]
    )
    assert last is not None
    assert last.sender == "client@example.com"


def test_evenox_outbound_is_not_wordpress():
    assert is_evenox_outbound(ACCOUNT_FROM, ["SENT"])
    assert not is_evenox_outbound("wordpress@evenox.ca", ["INBOX"])
    assert not is_evenox_outbound("vente@evenox.ca", ["INBOX"])


def test_client_waiting_when_last_is_the_client():
    bucket = bucket_thread(
        sender="info@studio.example",
        subject="Tapis brun pour un tapis rouge",
        snippet="Bonjour, nous cherchons un tapis beige pour un événement.",
        messages=[
            {
                "sender": "info@studio.example",
                "subject": "Tapis brun pour un tapis rouge",
                "snippet": "Bonjour, nous cherchons un tapis beige pour un événement.",
                "labelIds": ["INBOX"],
            }
        ],
    )
    assert bucket == Bucket.CLIENT_WAITING


def test_waiting_on_client_when_evenox_already_sent():
    bucket = bucket_thread(
        sender="client@example.com",
        subject="Re: Votre devis Evenox",
        snippet="Merci pour la soumission",
        messages=[
            {
                "sender": "client@example.com",
                "subject": "Re: Votre devis Evenox",
                "labelIds": ["INBOX"],
            },
            {
                "sender": ACCOUNT_FROM,
                "subject": "Re: Votre devis Evenox",
                "labelIds": ["SENT"],
            },
        ],
    )
    assert bucket == Bucket.WAITING_ON_CLIENT


def test_site_lead_without_sent_is_first_contact():
    bucket = bucket_thread(
        sender="wordpress@evenox.ca",
        subject="Nouveau lead — Client Test (2026-09-26)",
        snippet="Client Test\nclient@example.com\nEvenement : 2026-09-26",
        messages=[
            {
                "sender": "wordpress@evenox.ca",
                "subject": "Nouveau lead — Client Test (2026-09-26)",
                "snippet": "Client Test client@example.com Evenement",
                "labelIds": ["INBOX"],
            }
        ],
    )
    assert bucket == Bucket.LEAD_NO_FIRST_MAIL
    assert not thread_has_evenox_sent(
        [{"sender": "wordpress@evenox.ca", "labelIds": ["INBOX"]}]
    )


def test_noise_stays_noise():
    bucket = bucket_thread(
        sender="notifications@alarm.com",
        subject="Porte du garage",
        snippet="Alerte capteur",
    )
    assert bucket == Bucket.NOISE


def test_extract_client_email_skips_evenox():
    body = "wordpress@evenox.ca\nJoelle\njoelle@radio-canada.ca\nEvenement : 2026-09-21"
    assert extract_client_email(body) == "joelle@radio-canada.ca"


def test_internal_draft_detection():
    assert draft_is_internal(
        "[BROUILLON] Si Joëlle ne répond pas",
        "BROUILLON INTERNE — ne pas envoyer à un client.",
        [ACCOUNT_FROM],
    )
    assert draft_is_internal(
        "Votre demande — Evenox",
        "NOTE D'ESCALADE — ZONE ROUGE\nAucune réponse client rédigée.",
        ["melanie@example.com"],
    )
    assert not draft_is_internal(
        "Votre demande — Evenox",
        "Bonjour Joëlle,\n\nMerci pour votre demande.",
        ["joelle@radio-canada.ca"],
    )


def test_group_leads_keeps_one_row_per_client():
    a = DigestItem(
        Bucket.LEAD_NO_FIRST_MAIL,
        "Nouveau lead",
        "wordpress@evenox.ca",
        "a@example.com",
        "lead",
        "prêt",
    )
    clone = DigestItem(
        Bucket.LEAD_NO_FIRST_MAIL,
        "Nouvelle soumission",
        "wordpress@evenox.ca",
        "a@example.com",
        "clone",
        "prêt",
    )
    grouped = group_leads_by_client([a, clone])
    assert len(grouped) == 1
    assert grouped[0].subject == "Nouveau lead"


def test_digest_never_looks_like_zero_when_gmail_failed():
    plain, _html = format_digest(
        waiting=[], leads=[], waiting_on_client=[], failed=True
    )
    assert "Pas un 0" in plain
    assert "0 dossier" not in plain


def test_digest_lists_unreplied_and_ready_reply():
    waiting = [
        DigestItem(
            Bucket.CLIENT_WAITING,
            "Tapis brun",
            "info@studio.example",
            "Studio",
            "dernier message = cliente",
            "prêt dans Grok",
            "Bonjour Vanessa,\nOn a le rouge classique.",
            "envoie pour partir",
        )
    ]
    plain, html = format_digest(
        waiting=waiting, leads=[], waiting_on_client=[]
    )
    assert digest_subject(1, 0) == "[GROK] Non répondus 7 jours — 1 dossier(s)"
    assert "Tapis brun" in plain
    assert "Bonjour Vanessa" in plain
    assert "envoie" in plain
    assert "Studio" in html


def test_client_preview_strips_alex_notes():
    body = "Bonjour Laura,\n\nMerci.\n\n⚠️ Alex — Type E : créer devis."
    assert "Merci" in client_preview(body, internal=False)
    assert "Type E" not in client_preview(body, internal=False)
    assert client_preview("NOTE D'ESCALADE — ZONE ROUGE", internal=False) == ""
    assert client_preview("Bonjour", internal=True) == ""
