from grosbot.queries import RITUEL_MAGIC, TIMER_MARKER
from grosbot.queue import MAX_SENDS_PER_RUN
from grosbot.rituel import (
    RITUEL_STEPS,
    TIMER_STEPS,
    is_full_rituel,
    is_timer_run,
    rituel_line,
    rituel_steps,
    send_cap_this_run,
    should_auto_send,
    should_retry_pas_parti,
    slack_ready_line,
)
from grosbot.sweep import draft_cap_this_run


def test_timer_never_sends_even_if_prompt_says_vide_la_file():
    text = f"{TIMER_MARKER} vide la file et envoie les brouillons"
    assert is_timer_run(text) is True
    assert is_full_rituel(text) is False
    assert should_auto_send(text) is False
    assert should_retry_pas_parti(text) is False
    assert send_cap_this_run(text) == 0
    assert rituel_steps(text) == TIMER_STEPS


def test_human_rituel_sends_same_turn():
    for phrase in (
        "fais le rituel",
        "automatise",
        "automatise la file",
        "vide la file",
        "réponds à tous",
        "voie rapide",
        "débloque",
        "envoie les brouillons",
        "envoie-les",
    ):
        assert should_auto_send(phrase) is True, phrase
        assert send_cap_this_run(phrase) == MAX_SENDS_PER_RUN
        assert should_retry_pas_parti(phrase) is True


def test_long_question_is_not_a_send_trigger():
    text = "comment que toi tu peux automatiser cela"
    assert is_full_rituel(text) is False
    assert should_auto_send(text) is False
    assert send_cap_this_run(text) == 0


def test_ok_and_go_still_do_not_send():
    assert should_auto_send("ok") is False
    assert should_auto_send("go") is False
    assert should_auto_send("fais la soumission") is False


def test_rituel_magic_is_exact_or_prefix():
    assert "fais le rituel" in RITUEL_MAGIC
    assert is_full_rituel("fais le rituel maintenant") is True
    assert is_full_rituel("on verra") is False


def test_slack_ready_asks_for_envoie():
    assert "envoie les brouillons" in slack_ready_line(3)
    assert slack_ready_line(0).startswith("0 brouillon")


def test_rituel_line_never_claims_timer_send():
    timer = rituel_line(TIMER_MARKER, drafted=2, sent_ok=0, sent_fail=0)
    assert "0 envoi" in timer
    assert "2 brouillon" in timer
    human = rituel_line("vide la file", drafted=3, sent_ok=2, sent_fail=1)
    assert "2 Parti." in human
    assert "1 Pas parti" in human
    idle = rituel_line("salut", drafted=1, sent_ok=0, sent_fail=0)
    assert "Pas d’envoi" in idle


def test_vide_la_file_still_raises_draft_cap():
    assert draft_cap_this_run("vide la file") > draft_cap_this_run("")
    assert "send_message" in " ".join(RITUEL_STEPS)
    assert "0 send_message" in TIMER_STEPS
