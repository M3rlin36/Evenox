"""Nate Herk (Grokbot video) mapped onto Evenox Gmail.

Source: https://www.youtube.com/watch?v=4hKJ9X6rGFo
Nate's inbox agent (Summit HVAC demo) is the pattern. We do not rebuild n8n.
Cerveau / Grokbot is the dedicated email agent. n8n stays the Booqable canal.
"""

from __future__ import annotations

from grosbot.queries import (
    LABEL_BILLING,
    LABEL_FILE,
    LABEL_SCHEDULE,
    LABEL_SOUMISSION,
    LABEL_SPAM,
    LABEL_URGENT,
)

# Nate's six customer labels → Evenox labels already in evenox.ca@gmail.com.
NATE_TO_EVENOX = {
    "Emergency": LABEL_URGENT,  # NOX-URGENT
    "Needs you": LABEL_FILE,  # Grok-File (queue). Dual-written with NOX-À-traiter.
    "Quote": LABEL_SOUMISSION,
    "Schedule": LABEL_SCHEDULE,  # Grok-Livraison
    "Billing": LABEL_BILLING,  # Grok-Acompte
    "Ignore (vendors / SEO / promo)": LABEL_SPAM,
}

# Nate: three habits. Evenox cadence is cheaper than his 30-min watch.
HABITS = (
    "Watch only NEW mail for emergencies. Empty check = QUEUE VIDE / no actions.",
    "Everything else waits on a short weekday list (3×/jour, not every 15 min).",
    "Draft easy replies from Drive docs. Never send until Alexandre says envoie.",
    "Never say j'envoie. After send_message, get_thread same turn. SENT or PAS PARTI.",
)

# Nate: highest value is not cleaning 5k/20k unread. Next emergency must not sit.
SKIP_OLD_PILE = True

# Nate: leave threads unread so the human still sees them.
LEAVE_UNREAD = True

# Nate: drafts until trust. Evenox lock is explicit until 10 Sep 2026.
DRAFTS_ONLY_UNTIL = "2026-09-10"

VIDEO_URL = "https://www.youtube.com/watch?v=4hKJ9X6rGFo"
VIDEO_ID = "4hKJ9X6rGFo"
