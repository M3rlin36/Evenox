"""Gmail search strings Grosbot must use. Never scan the whole unread inbox."""

from __future__ import annotations

# User labels created in evenox.ca@gmail.com (IDs are Gmail-side; names are stable).
# Canonical queue = GROS-File. NOX-À-traiter is a synonym created the same day.
LABEL_FILE = "GROS-File"
LABEL_FILE_ALIAS = "NOX-À-traiter"
LABEL_IN_PROGRESS = "GROS-En-cours"
LABEL_IN_PROGRESS_ALIAS = "NOX-En-cours"
LABEL_SKIP = "GROS-Skip"
LABEL_PROCESSED = "NOX-Processed"
LABEL_SPAM = "NOX-Spam"
LABEL_DRAFT_IA = "Brouillon IA"
LABEL_SOUMISSION = "Soumission"

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
}

# Cheap intake: only the last 3 days, skip already labelled noise/done.
# Grosbot must NOT use `is:unread` alone (20k+ threads).
TRIAGE_QUERY = (
    "in:inbox newer_than:3d "
    f"-label:{LABEL_PROCESSED} -label:{LABEL_SPAM} "
    f"-label:{LABEL_FILE} -label:{LABEL_FILE_ALIAS} "
    f"-label:{LABEL_IN_PROGRESS} -label:{LABEL_IN_PROGRESS_ALIAS} "
    f"-label:{LABEL_SKIP}"
)

# Work queue. Gmail is the only list Grosbot may promise replies from.
QUEUE_QUERY = (
    f"{{label:{LABEL_FILE} label:{LABEL_FILE_ALIAS}}} "
    f"-label:{LABEL_PROCESSED} "
    f"-label:{LABEL_IN_PROGRESS} -label:{LABEL_IN_PROGRESS_ALIAS}"
)

IN_PROGRESS_QUERY = (
    f"{{label:{LABEL_IN_PROGRESS} label:{LABEL_IN_PROGRESS_ALIAS}}} "
    f"-label:{LABEL_PROCESSED}"
)

# WordPress / site leads that must enter the queue (n8n may also create a Booqable draft).
LEAD_QUERY = (
    "in:inbox newer_than:14d "
    "(from:wordpress@evenox.ca OR from:vente@evenox.ca) "
    "(subject:\"Nouveau lead\" OR subject:\"Nouvelle soumission\" "
    "OR subject:\"Devis abandonne\") "
    f"-label:{LABEL_PROCESSED} -label:{LABEL_SPAM} -label:{LABEL_SKIP}"
)
