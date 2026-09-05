"""Gmail filter specs Nate would use. MCP create_filter is 403 on this agent.

These are free (Gmail-side). Grokbot still triages cheaply if a filter is missing.
Alexandre can paste them in Gmail → Settings → Filters.
"""

from __future__ import annotations

from dataclasses import dataclass

from grosbot.queries import LABEL_FILE, LABEL_SOUMISSION, LABEL_SPAM


@dataclass(frozen=True)
class FilterSpec:
    name: str
    from_addr: str | None
    subject: str | None
    add_labels: tuple[str, ...]
    skip_inbox: bool
    reason: str


# Nate: vendors / SEO / promo get ignored. Evenox: skip inbox + NOX-Spam.
# Leads: auto-file so the weekday list sees them without a 20k scan.
FILTER_SPECS: tuple[FilterSpec, ...] = (
    FilterSpec(
        "alarm.com → spam",
        "notifications@alarm.com",
        None,
        (LABEL_SPAM,),
        True,
        "Nate ignore vendors. Alarm.com is noise.",
    ),
    FilterSpec(
        "github → spam",
        "notifications@github.com",
        None,
        (LABEL_SPAM,),
        True,
        "Nate ignore vendors. GitHub is not a client.",
    ),
    FilterSpec(
        "tim hortons promo → spam",
        "promo@promo.timhortons.ca",
        None,
        (LABEL_SPAM,),
        True,
        "Nate ignore promotional.",
    ),
    FilterSpec(
        "costco news → spam",
        "costconews@digital.costco.ca",
        None,
        (LABEL_SPAM,),
        True,
        "Nate ignore promotional.",
    ),
    FilterSpec(
        "wordpress lead → file + quote",
        "wordpress@evenox.ca",
        "Nouveau lead",
        (LABEL_FILE, LABEL_SOUMISSION),
        False,
        "Nate Quote label. Stay in inbox. Dual-write Grok-File in the agent.",
    ),
    FilterSpec(
        "wordpress soumission → file + quote",
        "wordpress@evenox.ca",
        "Nouvelle soumission",
        (LABEL_FILE, LABEL_SOUMISSION),
        False,
        "Nate Quote label.",
    ),
    FilterSpec(
        "abandoned quote → file",
        "vente@evenox.ca",
        "Devis abandonne",
        (LABEL_FILE, LABEL_SOUMISSION),
        False,
        "Nate Quote / needs you.",
    ),
    FilterSpec(
        "weddingwire lead → file + quote",
        "support@weddingwire.ca",
        "New Lead",
        (LABEL_FILE, LABEL_SOUMISSION),
        False,
        "Marketplace lead. CATCHUP cap 8 can hide this behind newsletters.",
    ),
)


def gmail_ui_recipe(spec: FilterSpec) -> str:
    """Human recipe for Gmail Settings. MCP cannot create these (403)."""
    bits = []
    if spec.from_addr:
        bits.append(f"from:({spec.from_addr})")
    if spec.subject:
        bits.append(f"subject:({spec.subject})")
    action = "Apply label " + " + ".join(spec.add_labels)
    if spec.skip_inbox:
        action += ", Skip Inbox"
    return f"{' '.join(bits)} → {action}"
