from grosbot.notify import prove_slack_notify, validation_message
from grosbot.stock import can_create_official_quote


def test_validation_message_starts_with_lock_screen_line():
    text = validation_message(
        drafts=2,
        products=("Table cocktail",),
        quote_ready=False,
    )
    assert text.startswith("À valider. Dis `envoie`.")
    assert "Table cocktail" in text
    assert "Rien n’est parti" in text


def test_slack_proof_requires_message_link():
    ok = prove_slack_notify(
        {"message_link": "https://alexandresguin.slack.com/archives/D099/p1"}
    )
    assert ok.slack_ok is True
    assert "Notif Slack + Grok" in ok.line()
    fail = prove_slack_notify({})
    assert fail.slack_ok is False
    assert "Pas de notif" in fail.line()
    assert can_create_official_quote() is False
