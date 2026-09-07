from grosbot.intake import (
    Arrival,
    decide_arrival,
    draft_price_line,
    has_ready_quote,
    needs_alex_validate,
)
from grosbot.queries import LABEL_DRAFT_IA


def test_quote_only_when_already_in_gmail():
    assert has_ready_quote(snippet="voir evenox.booqable.com/orders/1") is True
    assert has_ready_quote(labels=[LABEL_DRAFT_IA]) is False
    assert has_ready_quote(subject="RE: devis #1840") is True
    assert has_ready_quote(subject="Nouveau lead", snippet="10 tables") is False


def test_price_line_never_invents():
    assert "0 clic" in draft_price_line(snippet="https://evenox.booqable.com/x")
    assert draft_price_line(subject="Nouveau lead") == "[PRIX À CONFIRMER]"
    assert "catalogue" in draft_price_line(snippet="10 tables cocktail")


def test_arrival_is_draft_then_validate_never_send():
    spam = decide_arrival(
        sender="notifications@github.com",
        subject="[Evenox] push",
    )
    interne = decide_arrival(
        sender="vente@evenox.ca",
        subject="Nouvelle soumission — 12",
    )
    quoted = decide_arrival(
        sender="wordpress@evenox.ca",
        subject="Nouveau lead",
        snippet="voir evenox.booqable.com/orders/9",
    )
    plain = decide_arrival(
        sender="client@example.com",
        subject="RE: Votre devis Evenox",
        snippet="Bonjour, merci pour le devis",
    )
    assert spam is Arrival.SPAM
    assert interne is Arrival.INTERNE
    lookup = decide_arrival(
        sender="client@example.com",
        subject="RE: Votre devis Evenox",
        snippet="Bonjour, 10 tables cocktail et un photobooth",
    )
    assert quoted is Arrival.DRAFT_QUOTE
    assert lookup is Arrival.LOOKUP
    assert plain is Arrival.DRAFT
    assert needs_alex_validate(quoted) is True
    assert needs_alex_validate(lookup) is True
    assert needs_alex_validate(plain) is True
    assert needs_alex_validate(spam) is False
