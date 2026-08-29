#!/usr/bin/env python3
"""Assemble les pages preview autour des modules Divi."""
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
  <script>window.LOCABRIS_PREVIEW=true;</script>
</head>
<body>
<header class="chrome-header">
  <a class="chrome-logo" href="index.html">
    <img src="https://locabris.ca/wp-content/uploads/2024/09/cropped-COnfort-et-Protection-quelques-soient-les-conditions-2.png" alt="Locabris">
    LOCABRIS
  </a>
  <nav class="chrome-nav">
    <a href="soumission.html"{soumission}>Soumission Rapide</a>
    <a href="contact.html"{contact}>Contact</a>
    <a href="shop.html"{shop}>Boutique</a>
    <a href="product.html"{product}>Fiche abri</a>
    <a href="privacy.html"{privacy}>Confidentialité</a>
  </nav>
</header>
<main>
"""

FOOTER = """
</main>
<footer class="chrome-footer">
  <div class="chrome-footer-grid">
    <div>
      <img src="https://locabris.ca/wp-content/uploads/2024/09/cropped-COnfort-et-Protection-quelques-soient-les-conditions-2.png" alt="" width="72" height="72">
      <h4>Nos réseaux sociaux</h4>
      <p>Facebook</p>
    </div>
    <div>
      <h4>Catégories</h4>
      <p><a href="shop.html">Tempo Simple</a><br><a href="shop.html">Tempo Double</a><br><a href="shop.html">Accessoires</a></p>
    </div>
    <div>
      <h4>Contact / Ressource</h4>
      <p><a href="contact.html">Contact</a><br>Téléphone: 438-439-0201<br>Courriel: locabris.ca@gmail.com</p>
    </div>
  </div>
</footer>
</body>
</html>
"""


def flags(active):
    keys = ("soumission", "contact", "shop", "product", "privacy")
    return {k: ' aria-current="page"' if k == active else "" for k in keys}


def write(name, title, body, active):
    html = HEADER.format(title=title, **flags(active)) + body + FOOTER
    (ROOT / name).write_text(html, encoding="utf-8")
    print("wrote", name)


write(
    "soumission.html",
    "Soumission rapide | Locabris",
    MOD.joinpath("soumission.html").read_text(encoding="utf-8"),
    "soumission",
)
write(
    "contact.html",
    "Parlons de votre entrée | Locabris",
    MOD.joinpath("contact.html").read_text(encoding="utf-8"),
    "contact",
)
write(
    "privacy.html",
    "Politique de confidentialité | Locabris",
    MOD.joinpath("privacy.html").read_text(encoding="utf-8"),
    "privacy",
)
write(
    "product.html",
    "Abri hivernal 11 x 24 usagé | Locabris",
    MOD.joinpath("product-abri.html").read_text(encoding="utf-8").replace("[add_to_cart]", ""),
    "product",
)

shop_copy = MOD.joinpath("shop-description.html").read_text(encoding="utf-8")
shop_body = f"""
<div style="max-width:1080px;margin:0 auto;padding:40px clamp(17px,2.3vw,31px) 72px;font-family:Raleway,sans-serif">
  <div style="font-weight:600;color:#7A8B95;font-size:14px;margin-bottom:12px">Accueil / Nos abris Tempo à vendre</div>
  <h1 style="font-weight:800;font-size:32px;margin:0 0 16px">Nos abris Tempo à vendre</h1>
  {shop_copy}
  <p style="font-weight:600;color:#35454E">Affichage de 1–9 sur 33 résultats — plus de CSS dumpé sous le titre.</p>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;margin-top:28px">
    <a class="chrome-card" href="product.html"><strong>Abri hivernal 11 x 12</strong><span>300 $ · usagé vérifié</span></a>
    <a class="chrome-card" href="product.html"><strong>Abri hivernal 11 x 16</strong><span>250 $ · usagé vérifié</span></a>
    <a class="chrome-card" href="product.html"><strong>Abri hivernal 11 x 24</strong><span>400 $ · usagé vérifié</span></a>
  </div>
</div>
"""
write("shop.html", "Nos abris Tempo à vendre | Locabris", shop_body, "shop")

index = """
<div class="chrome-hub">
  <div style="font-weight:700;font-size:11px;letter-spacing:.26em;text-transform:uppercase;color:#1088B5">Preview</div>
  <h1>Correctifs Locabris</h1>
  <p>Même branding. Wizard, contact, boutique, fiche et politique. Les envois sont mockés ici — Zapier n’est pas appelé.</p>
  <a class="chrome-card" href="soumission.html"><strong>Soumission</strong><span>Wizard en 2 étapes, validation inline, merci seulement après envoi.</span></a>
  <a class="chrome-card" href="contact.html"><strong>Contact</strong><span>Plus de « Message envoyé » au chargement.</span></a>
  <a class="chrome-card" href="shop.html"><strong>Boutique</strong><span>Description propre, plus de CSS en texte.</span></a>
  <a class="chrome-card" href="product.html"><strong>Fiche abri</strong><span>Photo, prix, inclus, bouton soumission.</span></a>
  <a class="chrome-card" href="privacy.html"><strong>Confidentialité</strong><span>Texte Loi 25, voix Locabris.</span></a>
</div>
"""
write("index.html", "Preview Locabris", index, "")
