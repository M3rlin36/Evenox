#!/usr/bin/env python3
"""Publie les articles de blog/dist sur evenox.ca en BROUILLON via l'API REST WordPress.

Prérequis : un mot de passe d'application WordPress (Utilisateurs > Profil > Mots de passe d'application).
Usage :
  export WP_USER="ton_identifiant"
  export WP_APP_PASSWORD="xxxx xxxx xxxx xxxx xxxx xxxx"
  python3 blog/publish.py                 # publie tous les articles en brouillon
  python3 blog/publish.py <slug>          # un seul article
  python3 blog/publish.py --status publish # met en ligne directement (à éviter sans relecture)

Un article déjà existant avec le même slug est mis à jour, jamais dupliqué.
"""
import base64
import json
import os
import pathlib
import sys
import urllib.request
import urllib.error

SITE = "https://evenox.ca"
DIST = pathlib.Path(__file__).parent / "dist"
CATEGORY_GUIDES = 274  # catégorie "Guides" (id vérifié via /wp-json/wp/v2/categories)


def api(method, path, data=None, auth=None):
    req = urllib.request.Request(f"{SITE}/wp-json/wp/v2{path}", method=method)
    req.add_header("Content-Type", "application/json; charset=utf-8")
    if auth:
        req.add_header("Authorization", "Basic " + base64.b64encode(auth.encode()).decode())
    body = json.dumps(data).encode("utf-8") if data is not None else None
    try:
        with urllib.request.urlopen(req, body, timeout=60) as r:
            return json.loads(r.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        print("ERREUR", e.code, e.read().decode("utf-8")[:500])
        raise


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    status = "publish" if "--status" in sys.argv and "publish" in sys.argv else "draft"
    user, pw = os.environ.get("WP_USER"), os.environ.get("WP_APP_PASSWORD")
    if not user or not pw:
        sys.exit("Définis WP_USER et WP_APP_PASSWORD (mot de passe d'application WordPress).")
    auth = f"{user}:{pw}"
    metas = json.loads((DIST / "index.json").read_text(encoding="utf-8"))
    if args:
        metas = [m for m in metas if m["slug"] in args]
    for m in metas:
        content = (DIST / f"{m['slug']}.html").read_text(encoding="utf-8")
        payload = {
            "title": m["title"],
            "slug": m["slug"],
            "content": content,
            "excerpt": m["excerpt"],
            "status": status,
            "categories": [CATEGORY_GUIDES],
            "comment_status": "open",
        }
        existing = api("GET", f"/posts?slug={m['slug']}&status=any&_fields=id,link", auth=auth)
        if existing:
            post = api("POST", f"/posts/{existing[0]['id']}", payload, auth=auth)
            print(f"MIS À JOUR  {post['id']}  {post['link']}")
        else:
            post = api("POST", "/posts", payload, auth=auth)
            print(f"CRÉÉ ({status})  {post['id']}  {post['link']}")
        print(f"   Yoast > méta description à coller : {m['meta_description']}")
        print(f"   Yoast > mot-clé principal : {m['focus_keyword']}")
        print(f"   Image mise en avant à ajouter, alt : {m['image_alt']}")


if __name__ == "__main__":
    main()
