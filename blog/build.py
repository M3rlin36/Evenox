#!/usr/bin/env python3
"""Génère les articles de blogue Évenox (HTML prêt à coller dans WordPress).

Usage : python3 blog/build.py
Sortie : blog/dist/<slug>.html (contenu de l'article) et blog/dist/<slug>.json (métadonnées).
Le gabarit reprend exactement les classes .evx-* des articles déjà en ligne sur evenox.ca.
"""
import html
import importlib
import json
import pathlib
import sys

ROOT = pathlib.Path(__file__).parent
SRC = ROOT / "src"
DIST = ROOT / "dist"
SITE = "https://evenox.ca"

CSS = """<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
.evx-blog{font-family:'Poppins',sans-serif!important;color:#1a1a2e;line-height:1.75;font-size:1.02rem}
.evx-blog h2{font-family:'Poppins',sans-serif!important;font-size:1.7rem;font-weight:800;color:#1a1a2e;margin:44px 0 16px}
.evx-blog h3{font-family:'Poppins',sans-serif!important;font-size:1.15rem;font-weight:700;margin:0 0 6px}
.evx-blog p{margin:0 0 16px}
.evx-badge{display:inline-block;background:#5E17EB;color:#fff;font-size:.78rem;font-weight:700;letter-spacing:.08em;padding:6px 14px;border-radius:999px;margin-bottom:14px;text-transform:uppercase}
.evx-answer{background:#faf9ff;border-left:5px solid #5E17EB;border-radius:0 16px 16px 0;padding:22px 26px;margin:0 0 28px;font-size:1.08rem}
.evx-answer strong{color:#5E17EB}
.evx-img{width:100%;aspect-ratio:16/9;height:auto;object-fit:cover;border-radius:20px;margin:8px 0 28px}
.evx-cards{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin:20px 0 28px}
.evx-card{background:#fff;border:1px solid #f0eef5;border-radius:16px;padding:20px 22px;box-shadow:0 4px 18px rgba(94,23,235,.06)}
.evx-price-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin:20px 0 28px}
.evx-price{background:#fff;border:1px solid #f0eef5;border-radius:16px;padding:22px;text-align:center;box-shadow:0 4px 18px rgba(94,23,235,.06)}
.evx-price.pop{border:2px solid #5E17EB;position:relative}
.evx-price.pop::before{content:'POPULAIRE';position:absolute;top:-11px;left:50%;transform:translateX(-50%);background:#5E17EB;color:#fff;font-size:.65rem;font-weight:700;letter-spacing:.06em;padding:3px 12px;border-radius:999px}
.evx-price .amt{display:block;font-size:1.9rem;font-weight:800;color:#5E17EB;margin:6px 0 2px}
.evx-price .per{font-size:.85rem;color:#666}
.evx-check{list-style:none;padding:0;margin:14px 0 26px}
.evx-check li{padding:7px 0 7px 34px;position:relative}
.evx-check li::before{content:'✓';position:absolute;left:0;top:6px;width:24px;height:24px;background:#5E17EB;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:700}
.evx-blog table{width:100%;border-collapse:collapse;margin:16px 0 28px;font-size:.95rem}
.evx-blog th,.evx-blog td{border:1px solid #f0eef5;padding:10px 12px;text-align:left;vertical-align:top}
.evx-blog th{background:#faf9ff;font-weight:700}
.evx-faq{margin:18px 0 30px}
.evx-faq details{background:#fff;border:1px solid #f0eef5;border-radius:14px;margin-bottom:10px;overflow:hidden}
.evx-faq summary{cursor:pointer;font-weight:700;padding:16px 20px;list-style:none;position:relative;padding-right:44px}
.evx-faq summary::after{content:'+';position:absolute;right:18px;top:50%;transform:translateY(-50%);color:#5E17EB;font-size:1.4rem;font-weight:600}
.evx-faq details[open] summary::after{content:'–'}
.evx-faq details p{padding:0 20px 16px;margin:0;color:#444}
.evx-cta{background:#5E17EB;border-radius:22px;padding:40px 32px;text-align:center;margin:40px 0 10px}
.evx-cta h2{color:#fff;margin:0 0 8px;font-size:1.6rem}
.evx-cta p{color:#e9e0ff;margin:0 0 20px}
.evx-btn{display:inline-block;background:#fff;color:#5E17EB!important;font-weight:700;padding:14px 30px;border-radius:999px;text-decoration:none!important;margin:0 6px 8px}
.evx-btn.ghost{background:transparent;color:#fff!important;border:2px solid #fff}
@media(max-width:767px){.evx-cards,.evx-price-grid{grid-template-columns:1fr}}
.et_post_meta_wrapper > img,#left-area img.wp-post-image{display:none!important}
#left-area h1.entry-title,#main-content h1.entry-title{font-family:'Poppins',sans-serif!important;font-weight:800!important;font-size:2.2rem!important;color:#1a1a2e!important;line-height:1.25!important;text-transform:none!important;text-align:center!important}
#left-area .post-meta,#main-content .post-meta{font-family:'Poppins',sans-serif!important;font-size:.9rem!important;text-align:center!important;display:block}
#sidebar{display:none!important}
#left-area{width:100%!important;padding-right:0!important;float:none!important}
#main-content .container:before{display:none!important}
#comment-wrap .comment-reply-title,#comment-wrap #reply-title{font-family:'Poppins',sans-serif!important;font-weight:800!important;font-size:1.5rem!important;color:#1a1a2e!important}
#commentform textarea,#commentform input[type=text],#commentform input[type=email],#commentform input[type=url]{border:1px solid #f0eef5!important;border-radius:12px!important;background:#faf9ff!important;font-family:'Poppins',sans-serif!important}
#commentform .form-submit .submit,#commentform input[type=submit]{background:#5E17EB!important;color:#fff!important;border:none!important;border-radius:999px!important;padding:12px 30px!important;font-family:'Poppins',sans-serif!important;font-weight:700!important;cursor:pointer}
#comment-wrap .form-submit .submit:hover{background:#4A11C0!important}
#comment-wrap p,#comment-wrap label{font-family:'Poppins',sans-serif!important}
@media(max-width:767px){.evx-blog .evx-btn{display:flex!important;width:100%!important;max-width:280px!important;min-height:44px!important;padding:11px 16px!important;font-size:.9rem!important;align-items:center!important;justify-content:center!important;box-sizing:border-box!important;margin:0 auto 10px!important;}.evx-blog .evx-cta{padding:30px 18px!important;}.evx-blog .evx-cta h2{font-size:1.35rem!important;}.evx-blog h2{font-size:1.4rem!important;}.evx-blog .evx-answer{padding:18px 18px!important;font-size:1rem!important;}.evx-blog .evx-img{border-radius:14px!important;}}
.evx-related{background:#faf9ff;border-left:5px solid #5E17EB;border-radius:0 16px 16px 0;padding:18px 24px;margin:28px 0}.evx-related b{display:block;margin-bottom:8px;color:#1a1a2e}.evx-related ul{margin:0;padding-left:20px}.evx-related li{margin:5px 0}.evx-related a{color:#5E17EB;font-weight:600}
.evx-next{font-family:'Poppins',sans-serif;background:linear-gradient(150deg,#0d0a1a 0%,#2a1063 60%,#5E17EB 100%);color:#fff;border-radius:18px;padding:38px 32px;margin:48px 0 12px;text-align:center}
.evx-next .evx-next-eyebrow{display:inline-block;font-size:12px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#d7c6ff;margin-bottom:14px}
.evx-next h3{font-family:'Poppins',sans-serif!important;color:#fff!important;font-size:1.5rem;font-weight:800;line-height:1.25;margin:0 0 12px!important}
.evx-next p{color:#e3d8ff!important;font-size:1rem;line-height:1.6;max-width:560px;margin:0 auto 24px!important}
.evx-next .evx-next-btn{display:inline-block;background:#fff;color:#5E17EB!important;font-weight:700;font-size:.98rem;padding:15px 34px;border-radius:99px;text-decoration:none!important;transition:transform .15s ease}
.evx-next .evx-next-btn:hover{transform:translateY(-2px)}
@media(max-width:600px){.evx-next{padding:30px 20px;margin:36px 0 10px}.evx-next h3{font-size:1.25rem}}
</style>
"""


def strip_tags(s: str) -> str:
    import re
    return html.unescape(re.sub(r"<[^>]+>", "", s)).strip()


def render(a: dict) -> str:
    url = f"{SITE}/{a['slug']}/"
    faq_html = "\n".join(
        f"<details>\n<summary>{q}</summary>\n<p>{ans}</p>\n</details>" for q, ans in a["faq"]
    )
    related_html = "\n".join(f'<li><a href="{SITE}{href}">{label}</a></li>' for label, href in a["related"])
    faq_ld = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": strip_tags(q), "acceptedAnswer": {"@type": "Answer", "text": strip_tags(ans)}}
            for q, ans in a["faq"]
        ],
    }
    crumb_ld = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Accueil", "item": f"{SITE}/"},
            {"@type": "ListItem", "position": 2, "name": "Blogue", "item": f"{SITE}/blogue/"},
            {"@type": "ListItem", "position": 3, "name": strip_tags(a["title"]), "item": url},
        ],
    }
    article_ld = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": strip_tags(a["title"]),
        "description": a["meta_description"],
        "inLanguage": "fr-CA",
        "author": {"@type": "Organization", "name": "Évenox"},
        "publisher": {"@type": "Organization", "name": "Évenox", "url": SITE},
        "mainEntityOfPage": url,
    }
    dump = lambda d: json.dumps(d, ensure_ascii=False, separators=(",", ":"))
    cta_buttons = "".join(
        f'<a class="evx-btn{" ghost" if i else ""}" href="{SITE}{href}">{label}</a>' for i, (label, href) in enumerate(a["cta"]["buttons"])
    )
    return f"""{CSS}
<div class="evx-blog">
<span class="evx-badge">{a['badge']}</span>
<div class="evx-answer"><strong>{a['answer_strong']}</strong> {a['answer_rest']}</div>
<!-- IMAGE À AJOUTER : {a['image_alt']} (format 16:9, classe evx-img) -->
{a['body'].strip()}
<h2>Questions fréquentes</h2>
<div class="evx-faq">
{faq_html}
</div>
<div class="evx-related"><b>Pour aller plus loin</b>
<ul>
{related_html}
</ul>
</div>
<div class="evx-cta">
<h2>{a['cta']['title']}</h2>
<p>{a['cta']['text']}</p>
<p>{cta_buttons}</p>
</div>
<div class="evx-next">
<span class="evx-next-eyebrow">La suite logique</span>
<h3>{a['next']['title']}</h3>
<p>{a['next']['text']}</p>
<p><a class="evx-next-btn" href="{SITE}{a['next']['href']}">{a['next']['label']}</a></p>
</div>
</div>
<script type="application/ld+json" data-evx="1">{dump(faq_ld)}</script>
<script type="application/ld+json" data-evx="1">{dump(crumb_ld)}</script>
<script type="application/ld+json" data-evx="1">{dump(article_ld)}</script>
"""


def main():
    sys.path.insert(0, str(SRC))
    DIST.mkdir(exist_ok=True)
    mods = sorted(p.stem for p in SRC.glob("*.py") if not p.stem.startswith("_"))
    index = []
    for m in mods:
        a = importlib.import_module(m).ARTICLE
        out = render(a)
        (DIST / f"{a['slug']}.html").write_text(out, encoding="utf-8")
        meta = {
            "title": a["title"],
            "slug": a["slug"],
            "excerpt": a["excerpt"],
            "meta_description": a["meta_description"],
            "focus_keyword": a["focus_keyword"],
            "category": "Guides",
            "image_alt": a["image_alt"],
            "words": len(strip_tags(a["body"]).split()),
        }
        (DIST / f"{a['slug']}.json").write_text(json.dumps(meta, ensure_ascii=False, indent=2), encoding="utf-8")
        index.append(meta)
        print(f"OK  {a['slug']}  ({meta['words']} mots, {len(a['faq'])} FAQ)")
    (DIST / "index.json").write_text(json.dumps(index, ensure_ascii=False, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
