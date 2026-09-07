"""Validation ping on Slack AND Grok. A draft is not a ping.

First Slack line is the lock-screen notification. Then the same
line in the Grok chat. Proof = Slack message link. No link = failed.
"""

from __future__ import annotations

from dataclasses import dataclass

SLACK_ALEX = "U0996M8QRFT"


@dataclass(frozen=True)
class NotifyProof:
    slack_ok: bool
    slack_url: str = ""
    grok_line: str = ""

    def line(self) -> str:
        if self.slack_ok and self.slack_url:
            return f"Notif Slack + Grok. {self.slack_url}"
        return "Pas de notif Slack. Relancer."


def validation_message(
    *,
    drafts: int,
    products: tuple[str, ...] = (),
    quote_ready: bool = False,
) -> str:
    """Slack + Grok. First line shows on the phone."""
    first = "À valider. Dis `envoie`."
    bits = [first, f"{drafts} brouillon(s)."]
    if quote_ready:
        bits.append("Devis déjà dans le fil.")
    if products:
        bits.append("Booqable : " + ", ".join(products[:4]))
    bits.append("Rien n’est parti.")
    return "\n".join(bits)


def prove_slack_notify(send_result: object) -> NotifyProof:
    data = send_result if isinstance(send_result, dict) else {}
    url = str(
        data.get("message_link")
        or (data.get("message_context") or {}).get("channel_id")
        or ""
    )
    if isinstance(data.get("message_context"), dict) and data.get("message_link"):
        url = str(data["message_link"])
    ok = bool(data.get("message_link"))
    grok = "À valider. Dis `envoie`." if ok else "Pas de notif Slack."
    return NotifyProof(slack_ok=ok, slack_url=url, grok_line=grok)
