from grosbot.intake import draft_price_line, has_ready_quote
from grosbot.queries import LABEL_DRAFT_IA


def test_quote_only_when_already_in_gmail():
    assert has_ready_quote(snippet="voir evenox.booqable.com/orders/1") is True
    assert has_ready_quote(labels=[LABEL_DRAFT_IA]) is True
    assert has_ready_quote(subject="RE: devis #1840") is True
    assert has_ready_quote(subject="Nouveau lead", snippet="10 tables") is False


def test_price_line_never_invents():
    assert "0 clic" in draft_price_line(snippet="https://evenox.booqable.com/x")
    assert draft_price_line(subject="Nouveau lead") == "[PRIX À CONFIRMER]"
