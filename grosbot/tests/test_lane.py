import pytest

from grosbot.lane import Lane, partition_internes, pick_lane
from grosbot.queries import LABEL_DRAFT_IA, LABEL_FILE
from grosbot.queue import (
    MAX_DRAFTS_PER_RUN,
    MAX_SLOW_DRAFTS_PER_RUN,
    QueueError,
    Thread,
    claim_next,
    close_interne,
)


def test_nouveau_lead_is_rapide_n8n_already_made_the_quote():
    lane = pick_lane(
        sender="wordpress@evenox.ca",
        subject="Nouveau lead — Client Test (2026-09-23)",
        snippet="10 tables cocktail, 12 chaises, photobooth 17h",
    )
    assert lane is Lane.RAPIDE


def test_n8n_internal_triples_are_interne():
    soumission = pick_lane(
        sender="vente@evenox.ca",
        subject="Nouvelle soumission — Client Test",
        snippet="Devis prêt à approuver",
    )
    abandon = pick_lane(
        sender="vente@evenox.ca",
        subject="Devis abandonne 0 $ - Client Test",
        snippet="Un devis de 0 $ vient d etre abandonne.",
    )
    assert soumission is Lane.INTERNE
    assert abandon is Lane.INTERNE


def test_existing_brouillon_ia_is_rapide():
    lane = pick_lane(
        sender="client@example.com",
        subject="RE: Votre devis Evenox — 1822",
        snippet="Merci",
        label_names=[LABEL_DRAFT_IA, LABEL_FILE],
    )
    assert lane is Lane.RAPIDE


def test_existing_booqable_number_is_rapide():
    lane = pick_lane(
        sender="client@example.com",
        subject="RE: Votre devis Evenox — 1836",
        snippet="evenox.booqable.com/orders/abc",
    )
    assert lane is Lane.RAPIDE


def test_deposit_link_is_rapide():
    lane = pick_lane(
        sender="client@example.com",
        subject="RE: Votre devis Evenox",
        snippet="Parfait j'attends le lien pour le dépôt",
    )
    assert lane is Lane.RAPIDE


def test_clear_items_without_quote_is_lent():
    lane = pick_lane(
        sender="marie@example.com",
        subject="Demande pour le 14 novembre 2026",
        snippet="Bonjour, 10 tables, 40 chaises, photobooth pour le 14 novembre 2026",
    )
    assert lane is Lane.LENT


def test_qualification_without_items_is_rapide():
    lane = pick_lane(
        sender="paola@example.com",
        subject="Evenement 14 novembre",
        snippet="J'aimerais visiter vos installations pour un évènement le 14 novembre",
    )
    assert lane is Lane.RAPIDE


def test_weddingwire_is_rapide():
    lane = pick_lane(
        sender="support@weddingwire.ca",
        subject="New Lead from WeddingWire",
        snippet="Melanie Test has contacted your business",
    )
    assert lane is Lane.RAPIDE


def test_webshop_order_is_rapide():
    lane = pick_lane(
        sender="support@booqable.com",
        subject="You have a new webshop order from Sebastien Test",
        snippet="Nintendo Switch Ramassage en magasin",
    )
    assert lane is Lane.RAPIDE


def test_partition_internes_splits_n8n_triples():
    threads = [
        Thread("lead", "wordpress@evenox.ca", "Nouveau lead — A", labels=(LABEL_FILE,)),
        Thread("int", "vente@evenox.ca", "Nouvelle soumission — A", labels=(LABEL_FILE,)),
        Thread("ab", "vente@evenox.ca", "Devis abandonne 0 $ - A", labels=(LABEL_FILE,)),
    ]
    internes, rest = partition_internes(threads)
    assert [t.id for t in internes] == ["int", "ab"]
    assert [t.id for t in rest] == ["lead"]


def test_close_interne_does_not_skip_or_draft():
    action = close_interne(
        Thread("int", "vente@evenox.ca", "Nouvelle soumission — A")
    )
    assert "NOX-Processed" in action.add_labels
    assert "Grok-Skip" not in action.add_labels
    assert "Brouillon IA" not in action.add_labels
    assert "0 mail" in action.reason


def test_three_rapide_drafts_allowed():
    assert MAX_DRAFTS_PER_RUN == 3
    queued = [
        Thread(f"t{i}", "wordpress@evenox.ca", f"Nouveau lead — {i}", labels=(LABEL_FILE,))
        for i in range(4)
    ]
    third = claim_next(queued, [], already_drafted_this_run=2)
    assert third.id == "t0"
    with pytest.raises(QueueError, match="cap atteint"):
        claim_next(queued, [], already_drafted_this_run=MAX_DRAFTS_PER_RUN)


def test_second_lent_is_skipped_for_a_rapide():
    assert MAX_SLOW_DRAFTS_PER_RUN == 1
    lent = Thread(
        "lent",
        "marie@example.com",
        "Demande pour le 14 novembre 2026",
        snippet="10 tables, 40 chaises, photobooth pour le 14 novembre 2026",
        labels=(LABEL_FILE,),
    )
    rapide = Thread(
        "rapide",
        "wordpress@evenox.ca",
        "Nouveau lead — Paola",
        snippet="visite showroom",
        labels=(LABEL_FILE,),
    )
    picked = claim_next(
        [lent, rapide],
        [],
        already_slow_this_run=1,
    )
    assert picked.id == "rapide"


def test_only_lent_left_after_slow_cap_stops():
    lent = Thread(
        "lent2",
        "marie@example.com",
        "Demande pour le 5 décembre 2026",
        snippet="12 tables cocktail et photobooth le 5 décembre 2026",
        labels=(LABEL_FILE,),
    )
    with pytest.raises(QueueError, match="voie lente"):
        claim_next([lent], [], already_slow_this_run=1)
