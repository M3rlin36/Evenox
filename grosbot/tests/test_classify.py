from grosbot.classify import Decision, classify


def test_alarm_is_ignored():
    result = classify(
        sender="notifications@alarm.com",
        subject="Alarm.com - Porte du garage",
    )
    assert result.decision is Decision.IGNORE


def test_wordpress_lead_is_queued():
    result = classify(
        sender="wordpress@evenox.ca",
        subject="Nouveau lead — Client Test (2026-09-23)",
        snippet="Client Test evenement 2026-09-23 tables",
    )
    assert result.decision is Decision.QUEUE
    assert result.queue_label == "GROS-File"


def test_wordpress_password_reset_is_ignored():
    result = classify(
        sender="wordpress@evenox.ca",
        subject="[Évenox] Mot de passe réinitialisé",
    )
    assert result.decision is Decision.IGNORE


def test_client_quote_reply_is_queued():
    result = classify(
        sender="client@example.com",
        subject="RE: TR: Votre devis Evenox — 1822",
        snippet="Parfait j'attends le lien pour le dépôt. Pour les heures 11 h à 15 h.",
    )
    assert result.decision is Decision.QUEUE


def test_already_processed_is_not_requeued():
    result = classify(
        sender="client@example.com",
        subject="RE: Votre devis Evenox — 1822",
        snippet="Merci pour le devis",
        label_names=["NOX-Processed"],
    )
    assert result.decision is Decision.ALREADY_HANDLED


def test_github_noise_is_ignored():
    result = classify(
        sender="notifications@github.com",
        subject="Re: [M3rlin36/Evenox] Pipeline evenoxpos (PR #11)",
    )
    assert result.decision is Decision.IGNORE


def test_newsletter_is_ignored():
    result = classify(
        sender="CostcoNews@digital.costco.ca",
        subject="Découvrez les économies de la semaine",
    )
    assert result.decision is Decision.IGNORE


def test_abandoned_quote_is_queued():
    result = classify(
        sender="vente@evenox.ca",
        subject="Devis abandonne 0 $ - Client Test",
        snippet="Un devis de 0 $ vient d etre abandonne.",
    )
    assert result.decision is Decision.QUEUE
