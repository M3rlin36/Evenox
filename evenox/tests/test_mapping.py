#!/usr/bin/env python3
"""Vérifie le mapping CTA et la réécriture HTML, sans WordPress."""

from __future__ import annotations

import json
import re
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MAP_PATH = ROOT / "plugin" / "evenox-cta-calculateurs" / "mapping.json"
PHP_PATH = ROOT / "plugin" / "evenox-cta-calculateurs" / "evenox-cta-calculateurs.php"

WRONG_DEFAULT = "https://evenox.ca/location-tables-chaises/"

SAMPLE = (
    '<section class="evx-fin"><div class="evx-large">'
    "<h2>Monte ton forfait</h2>"
    '<div class="evx-fin-actions">'
    f'<a class="evx-fin-1" href="{WRONG_DEFAULT}">Monter mon forfait</a>'
    '<a class="evx-fin-2" href="tel:+15145591893">Aime mieux qu\'on s\'en occupe</a>'
    "</div></div></section>"
)


def rewrite_html(html: str, target: str) -> str:
    safe = (
        target.replace("&", "&amp;")
        .replace('"', "&quot;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
    )
    return re.sub(
        r'(<a\b[^>]*\bclass="[^"]*\bevx-fin-1\b[^"]*"[^>]*\bhref=")[^"]*(")',
        rf"\1{safe}\2",
        html,
        count=1,
        flags=re.I,
    )


class MappingTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.mapping = json.loads(MAP_PATH.read_text(encoding="utf-8"))
        cls.php = PHP_PATH.read_text(encoding="utf-8")

    def test_required_catalogs_present(self) -> None:
        required = {
            "jeux-geants-interactifs",
            "location-jeux-gonflable",
            "jeux-geants",
            "jeux-et-activites",
            "location-jeux-exterieur",
            "jeux-de-table",
            "location-jeux-techno",
            "decoration",
            "decoration-lettres-neons",
            "equipement",
        }
        self.assertTrue(required.issubset(self.mapping.keys()), required - set(self.mapping))

    def test_jeux_geants_page_uses_jeux_calculator(self) -> None:
        self.assertEqual(
            self.mapping["jeux-geants-interactifs"],
            "/location-jeux-geants/#configurateur",
        )
        self.assertEqual(
            self.mapping["jeux-geants"],
            "/location-jeux-geants/#configurateur",
        )

    def test_gonflable_page_uses_gonflables_calculator(self) -> None:
        self.assertEqual(
            self.mapping["location-jeux-gonflable"],
            "/location-jeux-gonflables/#configurateur",
        )

    def test_games_pages_do_not_keep_tables_default(self) -> None:
        games = [
            "jeux-geants-interactifs",
            "jeux-et-activites",
            "jeux-geants",
            "location-jeux-gonflable",
            "location-jeux-exterieur",
            "jeux-de-table",
            "location-jeux-techno",
        ]
        for slug in games:
            target = self.mapping[slug]
            self.assertNotIn(
                "location-tables-chaises",
                target,
                f"{slug} still points at tables/chaises",
            )

    def test_decoration_keeps_on_page_anchor(self) -> None:
        self.assertEqual(self.mapping["decoration"], "#calculateur")

    def test_php_loads_mapping_json(self) -> None:
        self.assertIn("mapping.json", self.php)
        self.assertIn("evx-fin-1", self.php)
        self.assertIn("evenox_cta_calc_rewrite_html", self.php)

    def test_rewrite_replaces_wrong_href(self) -> None:
        out = rewrite_html(SAMPLE, "https://evenox.ca/location-jeux-geants/#configurateur")
        self.assertIn(
            'href="https://evenox.ca/location-jeux-geants/#configurateur"',
            out,
        )
        self.assertNotIn(WRONG_DEFAULT, out)
        self.assertIn("Monter mon forfait", out)
        self.assertIn("evx-fin-2", out)

    def test_rewrite_leaves_phone_cta(self) -> None:
        out = rewrite_html(SAMPLE, "https://evenox.ca/location-jeux-gonflables/#configurateur")
        self.assertIn('href="tel:+15145591893"', out)

    def test_every_target_looks_like_a_calculator(self) -> None:
        allowed = (
            "/location-jeux-geants/",
            "/location-jeux-gonflables/",
            "/location-jeux-exterieurs/",
            "/location-arcade/",
            "/location-decoration-evenementielle/",
            "/decoration/",
            "/lettres-lumineuses/",
            "/location-tables-chaises/",
            "/configurateur/",
            "#calculateur",
        )
        for slug, target in self.mapping.items():
            self.assertTrue(
                any(target == a or target.startswith(a) for a in allowed),
                f"{slug} -> {target} is not a known calculator",
            )


if __name__ == "__main__":
    suite = unittest.defaultTestLoader.loadTestsFromModule(sys.modules[__name__])
    result = unittest.TextTestRunner(verbosity=2).run(suite)
    sys.exit(0 if result.wasSuccessful() else 1)
