'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const PREFIXES = {
  'assistant-evenement': 'ev',
  'assistant-jeux': 'jw',
};

const ENTITES = {
  rsquo: '\u2019',
  lsquo: '\u2018',
  rdquo: '\u201D',
  ldquo: '\u201C',
  ndash: '\u2013',
  mdash: '\u2014',
  nbsp: '\u00A0',
  quot: '"',
  apos: "'",
  lt: '<',
  gt: '>',
  hellip: '\u2026',
  copy: '\u00A9',
  reg: '\u00AE',
  euro: '\u20AC',
  times: '\u00D7',
  minus: '\u2212',
  deg: '\u00B0',
  laquo: '\u00AB',
  raquo: '\u00BB',
};

function parseArgs(argv) {
  const positionnels = [];
  let assertLength = null;
  let check = false;
  for (const a of argv) {
    if (a.startsWith('--assert-length=')) {
      const n = a.slice('--assert-length='.length);
      if (!/^\d+$/.test(n)) {
        return { erreur: `--assert-length attend un entier, reçu : ${n}` };
      }
      assertLength = Number(n);
    } else if (a === '--check') {
      check = true;
    } else if (a.startsWith('-')) {
      return { erreur: `option inconnue : ${a}` };
    } else {
      positionnels.push(a);
    }
  }
  return { positionnels, assertLength, check };
}

function normaliserDossier(nom) {
  return String(nom || '')
    .replace(/\\/g, '/')
    .replace(/\/+$/, '');
}

function infoWidget(dossier) {
  const cle = normaliserDossier(dossier);
  const prefixe = PREFIXES[cle];
  if (!prefixe) {
    return {
      erreur:
        `dossier inconnu : ${dossier} (attendus : ${Object.keys(PREFIXES).join(', ')})`,
    };
  }
  const rels = {
    html: `${cle}/${prefixe}-widget.html`,
    css: `${cle}/${prefixe}-widget.css`,
    js: `${cle}/${prefixe}-widget.js`,
    payload: `${cle}/payload.txt`,
  };
  return {
    dossier: cle,
    prefixe,
    dir: path.join(ROOT, cle),
    dirExiste: fs.existsSync(path.join(ROOT, cle)),
    rels,
    abs: {
      html: path.join(ROOT, rels.html),
      css: path.join(ROOT, rels.css),
      js: path.join(ROOT, rels.js),
      payload: path.join(ROOT, rels.payload),
    },
  };
}

function fichiersManquants(info) {
  const manquants = [];
  if (!info.dirExiste) {
    return {
      dossierAbsent: true,
      manquants: [info.rels.html, info.rels.css, info.rels.js],
    };
  }
  for (const cle of ['html', 'css', 'js']) {
    if (!fs.existsSync(info.abs[cle])) manquants.push(info.rels[cle]);
  }
  return { dossierAbsent: false, manquants };
}

function itererLignes(texte) {
  const lignes = [];
  let start = 0;
  for (let i = 0; i <= texte.length; i++) {
    if (i === texte.length || texte[i] === '\n') {
      let contentEnd = i;
      if (contentEnd > start && texte[contentEnd - 1] === '\r') contentEnd--;
      lignes.push({
        numero: lignes.length + 1,
        start,
        end: contentEnd,
        texte: texte.slice(start, contentEnd),
      });
      start = i + 1;
    }
  }
  return lignes;
}

function tronquer(s, max) {
  const t = s.replace(/\t/g, '\\t');
  if (t.length <= max) return t;
  return `${t.slice(0, max)}…`;
}

function extraireScripts(payload) {
  const out = [];
  const re = /<script\b[^>]*>/gi;
  let m;
  while ((m = re.exec(payload)) !== null) {
    const start = m.index + m[0].length;
    const endTag = payload.toLowerCase().indexOf('</script>', start);
    if (endTag === -1) {
      out.push({ start, end: payload.length, ouvert: true });
      break;
    }
    out.push({ start, end: endTag, ouvert: false });
    re.lastIndex = endTag + '</script>'.length;
  }
  return out;
}

function estEtCommercial(code) {
  return code === 38;
}

function decoderEntitesHtml(html, fichier) {
  const erreurs = [];
  const lignes = itererLignes(html);

  function signaler(offset, message) {
    const ligne = lignes.find((l) => offset >= l.start && offset <= l.end) || lignes[0];
    erreurs.push({
      regle: 3,
      fichier,
      ligne: ligne ? ligne.numero : 1,
      texte: ligne ? ligne.texte : '',
      message,
    });
  }

  let out = '';
  let i = 0;
  while (i < html.length) {
    const amp = html.indexOf('&', i);
    if (amp === -1) {
      out += html.slice(i);
      break;
    }
    out += html.slice(i, amp);
    const suite = html.slice(amp);
    const nommee = suite.match(/^&([a-zA-Z][a-zA-Z0-9]+);/);
    const dec = suite.match(/^&#(\d+);/);
    const hex = suite.match(/^&#x([0-9a-fA-F]+);/i);
    if (nommee) {
      const nom = nommee[1];
      const cle = nom.toLowerCase();
      if (cle === 'amp') {
        signaler(amp, 'entité &amp; interdite (produirait un & littéral)');
        out += nommee[0];
      } else if (ENTITES[cle]) {
        out += ENTITES[cle];
      } else {
        signaler(amp, `entité HTML inconnue : ${nommee[0]}`);
        out += nommee[0];
      }
      i = amp + nommee[0].length;
    } else if (dec) {
      const code = Number(dec[1]);
      if (estEtCommercial(code)) {
        signaler(amp, 'entité &#38; interdite (c\'est un & littéral)');
        out += dec[0];
      } else {
        out += String.fromCharCode(code);
      }
      i = amp + dec[0].length;
    } else if (hex) {
      const code = parseInt(hex[1], 16);
      if (estEtCommercial(code)) {
        signaler(amp, 'entité &#x26; interdite (c\'est un & littéral)');
        out += hex[0];
      } else {
        out += String.fromCharCode(code);
      }
      i = amp + hex[0].length;
    } else {
      signaler(amp, '& littéral (pas une entité HTML complète)');
      out += '&';
      i = amp + 1;
    }
  }
  return { html: out, erreurs };
}

function uneLigne(texte) {
  return texte.replace(/\r\n|\r|\n/g, '');
}

function jsSansLignesVides(js) {
  return itererLignes(js)
    .filter((l) => l.texte.trim() !== '')
    .map((l) => l.texte)
    .join('\n');
}

function verifierAmpSource(texte, fichier) {
  const erreurs = [];
  for (const l of itererLignes(texte)) {
    const col = l.texte.indexOf('&');
    if (col !== -1) {
      erreurs.push({
        regle: 3,
        fichier,
        ligne: l.numero,
        texte: l.texte,
        message: `& littéral colonne ${col + 1} — utiliser String.fromCharCode(38) à l'exécution`,
      });
    }
  }
  return erreurs;
}

function assembler({ html, css, js, rels }) {
  const erreurs = [];
  erreurs.push(...verifierAmpSource(css, rels.css));
  erreurs.push(...verifierAmpSource(js, rels.js));

  const decode = decoderEntitesHtml(html, rels.html);
  erreurs.push(...decode.erreurs);

  if (erreurs.length) {
    return { payload: null, erreurs };
  }

  const htmlUne = uneLigne(decode.html);
  const cssUne = uneLigne(css);
  const style = `<style>${cssUne}</style>`;
  let htmlAvecStyle;
  const finSection = htmlUne.lastIndexOf('</section>');
  if (finSection !== -1) {
    htmlAvecStyle = htmlUne.slice(0, finSection) + style + htmlUne.slice(finSection);
  } else {
    htmlAvecStyle = htmlUne + style;
  }

  const jsCompact = jsSansLignesVides(js);
  const payload = `${htmlAvecStyle}\n<script>\n${jsCompact}\n</script>\n`;
  return { payload, erreurs: [] };
}

function verifierPayload(payload, opts) {
  const erreurs = [];
  const lignes = itererLignes(payload);
  const fichier = (opts && opts.fichier) || 'payload.txt';

  const idxScript = payload.search(/<script\b/i);
  const htmlPart =
    idxScript === -1 ? payload.replace(/(?:\r?\n)$/, '') : payload.slice(0, idxScript);
  if (/[\r\n]/.test(htmlPart.replace(/(?:\r?\n)$/, ''))) {
    const extra = lignes.find((l, i) => i > 0 && l.start < (idxScript === -1 ? payload.length : idxScript));
    erreurs.push({
      regle: 1,
      fichier,
      ligne: extra ? extra.numero : 2,
      texte: extra ? extra.texte : '',
      message: 'le HTML du payload doit tenir sur une seule ligne',
    });
  }

  const scripts = extraireScripts(payload);
  if (!scripts.length) {
    erreurs.push({
      regle: 2,
      fichier,
      ligne: 1,
      texte: lignes[0] ? lignes[0].texte : '',
      message: 'aucun <script> dans le payload',
    });
  }
  for (const s of scripts) {
    for (const l of lignes) {
      const vide = l.texte.trim() === '';
      if (!vide) continue;
      const dansCorps = l.end <= l.start
        ? s.start <= l.start && l.start < s.end
        : l.start >= s.start && l.end <= s.end;
      if (dansCorps) {
        erreurs.push({
          regle: 2,
          fichier,
          ligne: l.numero,
          texte: l.texte,
          message: 'ligne vide dans <script> (blanche ou espaces seuls)',
        });
      }
    }
  }

  for (const l of lignes) {
    const col = l.texte.indexOf('&');
    if (col !== -1) {
      erreurs.push({
        regle: 3,
        fichier,
        ligne: l.numero,
        texte: l.texte,
        message: `& littéral colonne ${col + 1} — utiliser String.fromCharCode(38) à l'exécution`,
      });
    }
  }

  if (opts && opts.assertLength != null) {
    if (payload.length !== opts.assertLength) {
      const ecart = payload.length - opts.assertLength;
      const signe = ecart > 0 ? '+' : '';
      erreurs.push({
        regle: 4,
        fichier,
        ligne: null,
        texte: '',
        message: `longueur ${payload.length} ≠ ${opts.assertLength} (écart ${signe}${ecart})`,
      });
    }
  }

  return erreurs;
}

function formaterErreurs(erreurs) {
  const lignes = [];
  for (const e of erreurs) {
    const ou = e.ligne != null ? `${e.fichier}:${e.ligne}` : e.fichier;
    lignes.push(`Règle ${e.regle} — ${e.message}`);
    lignes.push(`  ${ou}`);
    if (e.texte) lignes.push(`  ${tronquer(e.texte, 160)}`);
  }
  return lignes.join('\n');
}

function resoudrePayloadPath(cible) {
  if (!cible) return { erreur: 'chemin de payload manquant' };
  const brut = normaliserDossier(cible);
  const abs = path.isAbsolute(cible) ? path.resolve(cible) : path.join(ROOT, brut);
  if (fs.existsSync(abs) && fs.statSync(abs).isDirectory()) {
    const fichier = path.join(abs, 'payload.txt');
    const rel = path.relative(ROOT, fichier).replace(/\\/g, '/');
    return { abs: fichier, rel, existe: fs.existsSync(fichier) };
  }
  if (PREFIXES[brut]) {
    const fichier = path.join(ROOT, brut, 'payload.txt');
    return { abs: fichier, rel: `${brut}/payload.txt`, existe: fs.existsSync(fichier) };
  }
  const rel = path.isAbsolute(cible) ? abs : brut;
  return { abs, rel: String(rel).replace(/\\/g, '/'), existe: fs.existsSync(abs) };
}

module.exports = {
  ROOT,
  PREFIXES,
  parseArgs,
  infoWidget,
  fichiersManquants,
  assembler,
  verifierPayload,
  formaterErreurs,
  resoudrePayloadPath,
  itererLignes,
};
