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

# Inventaire live 2026-09-03 : pages avec <a class="evx-fin-1"> (pas seulement le CSS).
LIVE_CTA_SLUGS = {
    "jeux-geants-interactifs",
    "jeux-et-activites",
    "jeux-geants",
    "location-jeux-gonflable",
    "location-jeux-exterieur",
    "jeux-de-table",
    "location-jeux-techno",
    "location-jeu-interieur",
    "decoration",
    "decoration-cle-en-main",
    "decoration-de-ballons",
    "decoration-decor-de-table",
    "decoration-tapis-accueil",
    "decoration-lettres-neons",
    "mur-decoratif",
    "friandises-confiseries",
    "equipement",
    "equipement-technique",
    "location-chaise-pliante",
    "location-tables-rive-nord",
    "ustensile-et-vaiselle",
}

FURNITURE_SLUGS = {
    "equipement",
    "location-chaise-pliante",
    "location-tables-rive-nord",
    "ustensile-et-vaiselle",
}

SAMPLE = (
    '<section class="evx-fin"><div class="evx-large">'
    "<h2>Monte ton forfait</h2>"
    '<div class="evx-fin-actions">'
    f'<a class="evx-fin-1" href="{WRONG_DEFAULT}">Monter mon forfait</a>'
    '<a class="evx-fin-2" href="tel:+15145591893">Aime mieux qu\'on s\'en occupe</a>'
    "</div></div></section>"
)

# Même ordre que evenox_cta_calc_infer() dans le PHP.
INFER_RULES = (
    ("gonflable", "/location-jeux-gonflables/#configurateur"),
    ("jeux-exterieur", "/location-jeux-exterieurs/#assistant-jeux"),
    ("jeux-techno", "/location-arcade/#configurateur"),
    ("arcade", "/location-arcade/#configurateur"),
    ("friandise", "/machines-gourmandises/#configurateur"),
    ("confiserie", "/machines-gourmandises/#configurateur"),
    ("gourmandise", "/machines-gourmandises/#configurateur"),
    ("lettres-neon", "/lettres-lumineuses/#configurateur"),
    ("lettres-lumin", "/lettres-lumineuses/#configurateur"),
    ("chiffres-lumin", "/lettres-lumineuses/#configurateur"),
    ("ballon", "/decoration/#calculateur"),
    ("mur-decoratif", "/location-decoration-evenementielle/#configurateur"),
    ("decoration", "/location-decoration-evenementielle/#configurateur"),
    ("equipement-technique", "/configurateur/"),
    ("jeux", "/location-jeux-geants/#configurateur"),
    ("jeu", "/location-jeux-geants/#configurateur"),
    ("table", "/location-tables-chaises/#calculateur"),
    ("chaise", "/location-tables-chaises/#calculateur"),
    ("ustensile", "/location-tables-chaises/#calculateur"),
    ("vaiselle", "/location-tables-chaises/#calculateur"),
    ("equipement", "/location-tables-chaises/#calculateur"),
)


def infer_target(slug: str) -> str:
    slug = slug.lower()
    for needle, target in INFER_RULES:
        if needle in slug:
            return target
    return ""


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
        flags=re.I,
    )


class MappingTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.mapping = json.loads(MAP_PATH.read_text(encoding="utf-8"))
        cls.php = PHP_PATH.read_text(encoding="utf-8")

    def test_every_live_cta_catalog_is_mapped(self) -> None:
        missing = LIVE_CTA_SLUGS - set(self.mapping)
        self.assertFalse(missing, f"catalogues live sans mapping: {missing}")

    def test_jeux_geants_page_uses_jeux_calculator(self) -> None:
        self.assertEqual(
            self.mapping["jeux-geants-interactifs"],
            "/location-jeux-geants/#configurateur",
        )
        self.assertEqual(
            self.mapping["jeux-geants"],
            "/location-jeux-geants/#configurateur",
        )
        self.assertEqual(
            self.mapping["location-jeu-interieur"],
            "/location-jeux-geants/#configurateur",
        )

    def test_gonflable_page_uses_gonflables_calculator(self) -> None:
        self.assertEqual(
            self.mapping["location-jeux-gonflable"],
            "/location-jeux-gonflables/#configurateur",
        )

    def test_candy_page_uses_machines_calculator(self) -> None:
        self.assertEqual(
            self.mapping["friandises-confiseries"],
            "/machines-gourmandises/#configurateur",
        )

    def test_wall_page_uses_decoration_calculator(self) -> None:
        self.assertEqual(
            self.mapping["mur-decoratif"],
            "/location-decoration-evenementielle/#configurateur",
        )

    def test_games_and_deco_do_not_keep_tables_default(self) -> None:
        for slug, target in self.mapping.items():
            if slug in FURNITURE_SLUGS:
                continue
            self.assertNotIn(
                "location-tables-chaises",
                target,
                f"{slug} still points at tables/chaises",
            )

    def test_furniture_pages_use_tables_calculator(self) -> None:
        for slug in FURNITURE_SLUGS:
            self.assertEqual(
                self.mapping[slug],
                "/location-tables-chaises/#calculateur",
                slug,
            )

    def test_decoration_keeps_on_page_anchor(self) -> None:
        self.assertEqual(self.mapping["decoration"], "#calculateur")

    def test_php_loads_mapping_json(self) -> None:
        self.assertIn("mapping.json", self.php)
        self.assertIn("evx-fin-1", self.php)
        self.assertIn("evenox_cta_calc_rewrite_html", self.php)
        self.assertIn("evenox_cta_calc_infer", self.php)
        self.assertIn("et_builder_render_layout", self.php)

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

    def test_infer_covers_city_pages_without_exact_slug(self) -> None:
        self.assertEqual(infer_target("jeux-laval"), "/location-jeux-geants/#configurateur")
        self.assertEqual(
            infer_target("location-jeux-gonflables-laval"),
            "/location-jeux-gonflables/#configurateur",
        )
        self.assertEqual(
            infer_target("decoration-montreal"),
            "/location-decoration-evenementielle/#configurateur",
        )
        self.assertEqual(
            infer_target("location-jeux-arcade-laval"),
            "/location-arcade/#configurateur",
        )
        self.assertEqual(
            infer_target("location-tables-laval"),
            "/location-tables-chaises/#calculateur",
        )
        self.assertEqual(infer_target("photobooth"), "")

    def test_php_infer_needles_match_python(self) -> None:
        for needle, target in INFER_RULES:
            self.assertIn(needle, self.php, needle)
            self.assertIn(target, self.php, target)

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
            "/machines-gourmandises/",
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
