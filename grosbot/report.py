"""Cheap weekly label counts. Nate's Friday sheet, without scanning 20k threads.

`list_labels` already returns threadsTotal. That is the report.
"""

from __future__ import annotations

from grosbot.queries import REPORT_LABELS


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
    file_n = stats.get("GROS-File", {}).get("threads", 0)
    alias_n = stats.get("NOX-À-traiter", {}).get("threads", 0)
    # Dual-write means the same threads may sit on both labels. Report the max.
    waiting = max(file_n, alias_n)
    return {
        "waiting": waiting,
        "in_progress": stats.get("GROS-En-cours", {}).get("threads", 0),
        "drafts": stats.get("Brouillon IA", {}).get("threads", 0),
        "done": stats.get("NOX-Processed", {}).get("threads", 0),
        "spam": stats.get("NOX-Spam", {}).get("threads", 0),
    }
