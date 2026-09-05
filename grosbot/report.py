"""Cheap weekly label counts. Nate's Friday sheet, without scanning 20k threads.

`list_labels` already returns threadsTotal. That is the report.
"""

from __future__ import annotations

from grosbot.queries import (
    LABEL_DRAFT_IA,
    LABEL_FILE,
    LABEL_FILE_ALIAS,
    LABEL_IN_PROGRESS,
    LABEL_PROCESSED,
    LABEL_SPAM,
    REPORT_LABELS,
)


def weekly_from_label_stats(labels: list[dict]) -> dict[str, dict[str, int]]:
    """Build Nate's breakdown from list_labels. No thread bodies. No is:unread."""
    wanted = {name.lower(): name for name in REPORT_LABELS}
    out: dict[str, dict[str, int]] = {}
    for row in labels:
        name = (row.get("name") or "").strip()
        if name.lower() not in wanted:
            continue
        canon = wanted[name.lower()]
        out[canon] = {
            "threads": int(row.get("threadsTotal") or row.get("threads_total") or 0),
            "unread": int(row.get("threadsUnread") or row.get("threads_unread") or 0),
        }
    return out


def waiting_vs_done(stats: dict[str, dict[str, int]]) -> dict[str, int]:
    file_n = stats.get(LABEL_FILE, {}).get("threads", 0)
    alias_n = stats.get(LABEL_FILE_ALIAS, {}).get("threads", 0)
    # Dual-write means the same threads may sit on both labels. Report the max.
    waiting = max(file_n, alias_n)
    return {
        "waiting": waiting,
        "in_progress": stats.get(LABEL_IN_PROGRESS, {}).get("threads", 0),
        "drafts": stats.get(LABEL_DRAFT_IA, {}).get("threads", 0),
        "done": stats.get(LABEL_PROCESSED, {}).get("threads", 0),
        "spam": stats.get(LABEL_SPAM, {}).get("threads", 0),
    }


VEILLE_OK_EMPTY = "Veille : 0 oublié."
VEILLE_FAILED = "Veille : pas faite."


def veille_line(names: list[str] | None = None, *, ok: bool = True) -> str:
    """One line for Alexandre after catch-up. No IDs.

    Failed search must never look like a clean empty inbox. A fake
    `0 oublié` is how a client stays forgotten when Gmail is down.
    """
    if not ok:
        return VEILLE_FAILED
    clean = [n.strip() for n in (names or []) if n and n.strip()]
    if not clean:
        return VEILLE_OK_EMPTY
    shown = clean[:8]
    return f"Veille : {len(clean)} rattrapé(s). {', '.join(shown)}."
