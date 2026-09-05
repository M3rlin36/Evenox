from grosbot.classify import Decision, Kind, classify
from grosbot.nate import HABITS, NATE_TO_EVENOX, VIDEO_URL
from grosbot.queries import LABEL_BILLING, LABEL_SOUMISSION, LABEL_URGENT
from grosbot.report import VEILLE_FAILED, veille_line, waiting_vs_done, weekly_from_label_stats
from grosbot.filters import FILTER_SPECS, gmail_ui_recipe


def test_alarm_is_ignored():
    result = classify(
        sender="notifications@alarm.com",
        subject="Alarm.com - Porte du garage",
    )
    assert result.decision is Decision.IGNORE
    assert result.kind is Kind.IGNORE


def test_github_noise_is_ignored():
    result = classify(
        sender="notifications@github.com",
        subject="Re: [M3rlin36/Evenox] Pipeline evenoxpos (PR #11)",
    )
    assert result.decision is Decision.IGNORE


def test_hydro_quebec_promo_is_ignored():
    result = classify(
        sender="hydro-quebec@communications.hydro.qc.ca",
        subject="Votre facture est disponible",
    )
    assert result.decision is Decision.IGNORE


def test_google_ads_and_shopsante_are_ignored():
    ads = classify(
        sender="ads-noreply@google.com",
        subject="Augmentez les conversions avec AI Max",
    )
    shop = classify(
        sender="info@shopsante.ca",
        subject="Une commande 4025112 est en cours!",
    )
    assert ads.decision is Decision.IGNORE
    assert shop.decision is Decision.IGNORE


def test_newsletter_is_ignored():
    result = classify(
        sender="CostcoNews@digital.costco.ca",
        subject="Découvrez les économies de la semaine",
    )
    assert result.decision is Decision.IGNORE


def test_wordpress_lead_is_queued_as_quote():
    result = classify(
        sender="wordpress@evenox.ca",
        subject="Nouveau lead — Client Test (2026-09-23)",
        snippet="Client Test evenement 2026-09-23 tables",
    )
    assert result.decision is Decision.QUEUE
    assert result.queue_label == "Grok-File"
    assert result.kind is Kind.QUOTE
    assert result.type_label == LABEL_SOUMISSION


def test_wordpress_password_reset_is_ignored():
    result = classify(
        sender="wordpress@evenox.ca",
        subject="[Évenox] Mot de passe réinitialisé",
    )
    assert result.decision is Decision.IGNORE


def test_abandoned_quote_is_queued():
    result = classify(
        sender="vente@evenox.ca",
        subject="Devis abandonne 0 $ - Client Test",
        snippet="Un devis de 0 $ vient d etre abandonne.",
    )
    assert result.decision is Decision.QUEUE
    assert result.kind is Kind.QUOTE


def test_weddingwire_lead_is_queued():
    result = classify(
        sender="support@weddingwire.ca",
        subject="New Lead from WeddingWire",
        snippet="Melanie Test has contacted your business through WeddingWire",
    )
    assert result.decision is Decision.QUEUE
    assert result.kind is Kind.QUOTE
    assert result.queue_label == "Grok-File"


def test_client_deposit_reply_is_emergency_or_billing():
    result = classify(
        sender="client@example.com",
        subject="RE: TR: Votre devis Evenox — 1822",
        snippet="Parfait j'attends le lien pour le dépôt. Pour les heures 11 h à 15 h.",
    )
    assert result.decision is Decision.QUEUE
    assert result.kind in (Kind.EMERGENCY, Kind.BILLING)
    assert result.type_label in (LABEL_URGENT, LABEL_BILLING)


def test_already_processed_is_not_requeued():
    result = classify(
        sender="client@example.com",
        subject="RE: Votre devis Evenox — 1822",
        snippet="Merci pour le devis",
        label_names=["NOX-Processed"],
    )
    assert result.decision is Decision.ALREADY_HANDLED


def test_nate_mapping_covers_six_kinds():
    assert set(NATE_TO_EVENOX) == {
        "Emergency",
        "Needs you",
        "Quote",
        "Schedule",
        "Billing",
        "Ignore (vendors / SEO / promo)",
    }
    assert NATE_TO_EVENOX["Emergency"] == LABEL_URGENT
    assert "draft" in " ".join(HABITS).lower()
    assert "catch-up" in " ".join(HABITS).lower()
    assert "pas faite" in " ".join(HABITS).lower()
    assert VIDEO_URL.endswith("4hKJ9X6rGFo")


def test_filter_recipes_skip_inbox_for_alarm():
    alarm = next(s for s in FILTER_SPECS if "alarm" in s.name)
    recipe = gmail_ui_recipe(alarm)
    assert "Skip Inbox" in recipe
    assert "NOX-Spam" in recipe


def test_weekly_report_uses_label_totals_not_unread_scan():
    stats = weekly_from_label_stats(
        [
            {"name": "Grok-File", "threadsTotal": 11, "threadsUnread": 2},
            {"name": "NOX-À-traiter", "threadsTotal": 10, "threadsUnread": 2},
            {"name": "NOX-Processed", "threadsTotal": 100, "threadsUnread": 0},
            {"name": "INBOX", "threadsTotal": 20000, "threadsUnread": 20000},
        ]
    )
    assert "INBOX" not in stats
    summary = waiting_vs_done(stats)
    assert summary["waiting"] == 11
    assert summary["done"] == 100


def test_veille_line_is_one_line_no_ids():
    assert veille_line([]) == "Veille : 0 oublié."
    assert veille_line(["", "  "]) == "Veille : 0 oublié."
    line = veille_line(["Jacqueline", "Dahlia"])
    assert line == "Veille : 2 rattrapé(s). Jacqueline, Dahlia."
    assert "ID" not in line


def test_veille_line_failed_is_never_empty_ok():
    assert veille_line(ok=False) == VEILLE_FAILED
    assert veille_line(["Mélanie"], ok=False) == "Veille : pas faite."
    assert veille_line(ok=False) != "Veille : 0 oublié."
