from grosbot.queue import MAX_CLAIMS_PER_RUN, MAX_DRAFTS_PER_RUN
from grosbot.sweep import draft_cap_this_run, may_say_queue_empty


def test_normal_run_caps_at_three_rapide():
    assert draft_cap_this_run("") == MAX_DRAFTS_PER_RUN
    assert draft_cap_this_run("fais la file") == MAX_DRAFTS_PER_RUN


def test_reponds_a_tous_uses_claim_cap():
    assert draft_cap_this_run("réponds à tous") == MAX_CLAIMS_PER_RUN
    assert draft_cap_this_run("vide la file") == MAX_CLAIMS_PER_RUN


def test_queue_vide_forbidden_while_any_hole_remains():
    assert may_say_queue_empty(0, 0, 0) is True
    assert may_say_queue_empty(1, 0, 0) is False
    assert may_say_queue_empty(0, 4, 0) is False
    assert may_say_queue_empty(0, 0, 2) is False
