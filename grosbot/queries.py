"""Gmail search strings Grokbot must use. Never scan the whole unread inbox.

MCP `search_threads` matches `label:Grok-File` (display name), not `label:Label_19`.
Gmail UI accepts both. Always dual-write Grok-* and NOX-* synonyms.
"""

from __future__ import annotations

# User labels in evenox.ca@gmail.com. IDs stayed Label_19/20/21/24/25 after the
# 4 sept 2026 rename GROS-* → Grok-* (same IDs, new display names).
# Canonical queue STATE = Grok-File. NOX-À-traiter is a synonym. Dual-write both.
# Agent name = Grokbot / Grok. Labels must say Grok, never GROS.
LABEL_FILE = "Grok-File"
LABEL_FILE_ALIAS = "NOX-À-traiter"
LABEL_IN_PROGRESS = "Grok-En-cours"
LABEL_IN_PROGRESS_ALIAS = "NOX-En-cours"
LABEL_SKIP = "Grok-Skip"
LABEL_PROCESSED = "NOX-Processed"
LABEL_SPAM = "NOX-Spam"
LABEL_DRAFT_IA = "Brouillon IA"
LABEL_SOUMISSION = "Soumission"
LABEL_URGENT = "NOX-URGENT"
LABEL_SCHEDULE = "Grok-Livraison"
LABEL_BILLING = "Grok-Acompte"
LABEL_SENT = "Grok-Envoyé"
LABEL_AUTO_REPLIED = "Auto-répondu"

# System Gmail labels. SENT is the only proof an email left. DRAFT means it did not.
SYSTEM_SENT = "SENT"
SYSTEM_DRAFT = "DRAFT"
ACCOUNT_FROM = "evenox.ca@gmail.com"

FILE_LABELS = (LABEL_FILE, LABEL_FILE_ALIAS)
IN_PROGRESS_LABELS = (LABEL_IN_PROGRESS, LABEL_IN_PROGRESS_ALIAS)

# Existing Gmail label IDs (evenox.ca@gmail.com). Tests must not depend on live IDs.
LABEL_IDS = {
    LABEL_FILE: "Label_19",
    LABEL_FILE_ALIAS: "Label_22",
    LABEL_IN_PROGRESS: "Label_20",
    LABEL_IN_PROGRESS_ALIAS: "Label_23",
    LABEL_SKIP: "Label_21",
    LABEL_PROCESSED: "Label_5",
    LABEL_SPAM: "Label_4",
    LABEL_DRAFT_IA: "Label_17",
    LABEL_SOUMISSION: "Label_2",
    LABEL_URGENT: "Label_15",
    LABEL_SCHEDULE: "Label_24",
    LABEL_BILLING: "Label_25",
    LABEL_SENT: "Label_26",
    LABEL_AUTO_REPLIED: "Label_6",
}

# Cheap intake: last 2 days only (Nate: do not clean the old unread pile).
# Grokbot must NOT use `is:unread` alone (20k+ threads).
TRIAGE_QUERY = (
    "in:inbox newer_than:2d "
    f"-label:{LABEL_PROCESSED} -label:{LABEL_SPAM} "
    f"-label:{LABEL_FILE} -label:{LABEL_FILE_ALIAS} "
    f"-label:{LABEL_IN_PROGRESS} -label:{LABEL_IN_PROGRESS_ALIAS} "
    f"-label:{LABEL_SKIP}"
)

# Morning catch-up: SAME query. Must run even when Grok-File is not empty,
# otherwise yesterday's unlabeled client mail is literally forgotten.
CATCHUP_QUERY = TRIAGE_QUERY

# Work queue. Gmail is the only list Grokbot may promise replies from.
QUEUE_QUERY = (
    f"{{label:{LABEL_FILE} label:{LABEL_FILE_ALIAS}}} "
    f"-label:{LABEL_PROCESSED} "
    f"-label:{LABEL_IN_PROGRESS} -label:{LABEL_IN_PROGRESS_ALIAS}"
)

IN_PROGRESS_QUERY = (
    f"{{label:{LABEL_IN_PROGRESS} label:{LABEL_IN_PROGRESS_ALIAS}}} "
    f"-label:{LABEL_PROCESSED}"
)

# Nate habit 1: emergency watch on NEW mail only. Headers, not bodies.
# Empty result = no actions. Never escalate to a 20k unread scan.
URGENT_QUERY = (
    "in:inbox newer_than:2d "
    f"label:{LABEL_URGENT} "
    f"-label:{LABEL_PROCESSED} -label:{LABEL_SPAM} "
    f"-label:{LABEL_IN_PROGRESS} -label:{LABEL_IN_PROGRESS_ALIAS}"
)

# WordPress / site leads that must enter the queue (n8n may also create a Booqable draft).
LEAD_QUERY = (
    "in:inbox newer_than:14d "
    "(from:wordpress@evenox.ca OR from:vente@evenox.ca) "
    "(subject:\"Nouveau lead\" OR subject:\"Nouvelle soumission\" "
    "OR subject:\"Devis abandonne\") "
    f"-label:{LABEL_PROCESSED} -label:{LABEL_SPAM} -label:{LABEL_SKIP}"
)

# Nate weekly report: list_labels totals only. Never scan threads for analytics.
REPORT_LABELS = (
    LABEL_FILE,
    LABEL_FILE_ALIAS,
    LABEL_IN_PROGRESS,
    LABEL_URGENT,
    LABEL_SOUMISSION,
    LABEL_SCHEDULE,
    LABEL_BILLING,
    LABEL_SENT,
    LABEL_DRAFT_IA,
    LABEL_SPAM,
    LABEL_PROCESSED,
)
