#!/usr/bin/env python3
"""Rend la version allegee d'une fiche et mesure le premier ecran a 375 px.

La page est chargee une seule fois, puis on RETIRE dans le DOM exactement les
noeuds proposes a la coupe (aucun texte n'est ajoute ni reformule : les seules
operations sont supprimer un noeud, supprimer des phrases entieres d'un noeud,
ne garder que les N premiers enfants).

Usage: apres.py URL fichier_ops.json prefixe_sortie
"""
import json
import re
import sys

from playwright.sync_api import sync_playwright

url, ops_path, prefix = sys.argv[1], sys.argv[2], sys.argv[3]
VP_H = 667
spec = json.load(open(ops_path, encoding="utf-8"))
ops = spec["coupes"] if isinstance(spec, dict) else spec
variante = spec.get("variante", []) if isinstance(spec, dict) else []

APPLY = """(ops) => {
  const journal = [];
  const norm = (s) => (s || '').replace(/\\s+/g, ' ').trim();
  for (const op of ops) {
    const els = Array.from(document.querySelectorAll(op.sel));
    if (op.op === 'remove') {
      let n = 0;
      els.forEach((el) => {
        if (op.contient && !norm(el.textContent).includes(op.contient)) return;
        if (op.sansTexte && norm(el.textContent).includes(op.sansTexte)) return;
        el.remove(); n++;
      });
      journal.push(['remove', op.sel, op.contient || '', n]);
    } else if (op.op === 'garder_debut') {
      els.forEach((el) => {
        const t = norm(el.textContent);
        const i = t.indexOf(op.jusqua);
        if (i >= 0) { el.textContent = t.slice(0, i + op.jusqua.length); }
        journal.push(['garder_debut', op.sel, el.textContent.slice(0, 60), i]);
      });
    } else if (op.op === 'retirer_phrase') {
      els.forEach((el) => {
        const avant = norm(el.textContent);
        const apres = avant.split(op.phrase).join('').replace(/\\s+/g, ' ').trim();
        if (avant !== apres) { el.textContent = apres; journal.push(['retirer_phrase', op.sel, op.phrase, 1]); }
      });
    } else if (op.op === 'garder_n_enfants') {
      els.forEach((el) => {
        const enfants = Array.from(el.children);
        enfants.slice(op.n).forEach((c) => c.remove());
        journal.push(['garder_n_enfants', op.sel, enfants.length + '->' + op.n, 1]);
      });
    } else if (op.op === 'garder_lignes_tableau') {
      els.forEach((tb) => {
        Array.from(tb.querySelectorAll('tr')).forEach((tr, i) => {
          const t = norm(tr.textContent);
          const garde = i === 0 || op.libelles.some((l) => t.startsWith(l));
          if (!garde) tr.remove();
        });
        journal.push(['garder_lignes_tableau', op.sel, op.libelles.join('|'), 1]);
      });
    } else if (op.op === 'style') {
      els.forEach((el) => { el.style.setProperty(op.propriete, op.valeur); });
      journal.push(['style', op.sel, op.propriete + ':' + op.valeur, els.length]);
    } else if (op.op === 'deplacer_apres') {
      const a = document.querySelector(op.sel);
      const b = document.querySelector(op.apres);
      if (a && b) { b.parentNode.insertBefore(a, b.nextSibling); journal.push(['deplacer_apres', op.sel, op.apres, 1]); }
    }
  }
  return journal;
}"""

MESURE = """(vph) => {
  const out = [];
  document.querySelectorAll('body *').forEach((el) => {
    const tag = el.tagName.toLowerCase();
    if (['script', 'style', 'svg', 'path', 'br'].includes(tag)) return;
    const cls = (el.className || '').toString().trim().split(/\\s+/).filter(Boolean).slice(0, 3).join('.');
    const interessant = el.children.length === 0
      || /^(h1|h2|h3|img|button|bq-product-price|bq-product-price-label|table)$/.test(tag)
      || /evx-(carte|sous|hero|h1|depot|micro|duree|prix)/.test(cls)
      || /booqable/.test(cls);
    if (!interessant) return;
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) return;
    const top = Math.round(r.top + window.scrollY);
    if (top > 2600) return;
    out.push({label: tag + (cls ? '.' + cls : ''), top, hauteur: Math.round(r.height),
              premierEcran: top < vph,
              texte: (el.innerText || el.textContent || '').replace(/\\s+/g, ' ').trim().slice(0, 90)});
  });
  out.sort((a, b) => a.top - b.top || b.hauteur - a.hauteur);
  const main = document.querySelector('main') || document.body;
  const clone = main.cloneNode(true);
  clone.querySelectorAll('header, footer, nav, .evenox-chat-fenetre, script, style').forEach((e) => e.remove());
  const texte = (clone.innerText || '').replace(/\\u00a0/g, ' ');
  return {hauteurPage: document.documentElement.scrollHeight, blocs: out, texte};
}"""

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path="/usr/bin/google-chrome-stable")
    page = browser.new_page(viewport={"width": 375, "height": VP_H}, device_scale_factor=2,
                            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) "
                                       "AppleWebKit/605.1.15 (KHTML, like Gecko) "
                                       "Version/17.0 Mobile/15E148 Safari/604.1")
    page.goto(url, wait_until="load", timeout=90000)
    page.wait_for_timeout(7000)
    def mesurer(suffixe, journal):
        page.wait_for_timeout(1200)
        page.screenshot(path=prefix + suffixe + ".png")
        page.screenshot(path=prefix + suffixe + "_full.png", full_page=True)
        data = page.evaluate(MESURE, VP_H)
        with open(prefix + suffixe + ".json", "w", encoding="utf-8") as fh:
            json.dump({"journal": journal, **data}, fh, ensure_ascii=False, indent=1)
        with open(prefix + suffixe + "_texte.txt", "w", encoding="utf-8") as fh:
            fh.write(data["texte"])
        mots = len(re.findall(r"\S+", data["texte"]))
        print(f"=== {prefix}{suffixe} === journal :")
        for j in journal:
            print("  ", j)
        print("hauteurPage", data["hauteurPage"], "| mots (main, texte visible)", mots)
        for b in data["blocs"]:
            marque = "PREMIER" if b["premierEcran"] else "       "
            print(f"{b['top']:>6} h={b['hauteur']:>4} {marque} {b['label'][:40]:<40} {b['texte'][:58]}")

    mesurer("", page.evaluate(APPLY, ops))
    if variante:
        mesurer("_variante", page.evaluate(APPLY, variante))
    browser.close()
