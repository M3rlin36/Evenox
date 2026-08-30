#!/usr/bin/env python3
"""Assemble la preview autour du module Evenox."""
from pathlib import Path

ROOT = Path(__file__).resolve().parent
MOD = ROOT.parent / "modules"

HEADER = """<!DOCTYPE html>
<html lang="fr-CA">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title}</title>
  <link rel="stylesheet" href="css/chrome.css">
  <script>window.EVENOX_PREVIEW=true;</script>
</head>
<body>
<header class="chrome-header">
  <a class="chrome-logo" href="index.html">
    <img src="https://evenox.ca/wp-content/uploads/2025/01/Creation-sans-titre-13.png" alt="Évenox">
    ÉVENOX
  </a>
  <nav class="chrome-nav">
    <a href="tables.html"{tables}>Tables et chaises</a>
    <a href="index.html">Preview</a>
  </nav>
</header>
<main>
"""

FOOTER = """
</main>
<footer class="chrome-footer">
  <div class="chrome-footer-grid">
    <div>
      <img src="https://evenox.ca/wp-content/uploads/2025/01/Creation-sans-titre-13.png" alt="" width="72" height="72">
      <h4>Évenox</h4>
      <p>Location de matériel événementiel</p>
    </div>
    <div>
      <h4>Contact</h4>
      <p>Téléphone: 514-559-1893<br>Courriel: evenox.ca@gmail.com</p>
    </div>
    <div>
      <h4>Zone</h4>
      <p>Laval, Montréal et la Rive-Nord</p>
    </div>
  </div>
</footer>
</body>
</html>
"""


def write(name, title, body, tables_current=False):
    html = HEADER.format(title=title, tables=' aria-current="page"' if tables_current else "") + body + FOOTER
    (ROOT / name).write_text(html, encoding="utf-8")
    print("wrote", name)


write(
    "tables.html",
    "Location de tables et chaises | Évenox",
    MOD.joinpath("tables-chaises.html").read_text(encoding="utf-8"),
    True,
)

index = """
<div class="chrome-hub">
  <div style="font-weight:700;font-size:11px;letter-spacing:.26em;text-transform:uppercase;color:#5E17EB">Preview</div>
  <h1>Formulaire tables et chaises</h1>
  <p>Même branding Évenox. Wizard une question à la fois. Les envois sont mockés ici — le webhook WordPress n’est pas appelé.</p>
  <a class="chrome-card" href="tables.html"><strong>Tables et chaises</strong><span>Invités, livraison, chaises, tables, nappes, cocktail, contact. Merci seulement après envoi.</span></a>
</div>
"""
write("index.html", "Preview Évenox", index, False)
