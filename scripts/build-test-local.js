'use strict';

/**
 * Assemble assistant-jeux/test-local.html : widget jw inliné, ouvrable en file://.
 * Aucun serveur. Les fetch de leads sont simulés dans la page (marqueur TEST).
 * assistant-evenement et calculateur-fete sont absents : on ne les invente pas.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function main() {
  const dir = path.join(ROOT, 'assistant-jeux');
  const htmlPath = path.join(dir, 'jw-widget.html');
  const cssPath = path.join(dir, 'jw-widget.css');
  const jsPath = path.join(dir, 'jw-widget.js');
  if (!fs.existsSync(htmlPath) || !fs.existsSync(cssPath) || !fs.existsSync(jsPath)) {
    console.error('ÉCHEC : sources jw-widget.* introuvables. Rien n\'a été inventé.');
    process.exit(1);
  }

  const html = fs.readFileSync(htmlPath, 'utf8');
  const css = fs.readFileSync(cssPath, 'utf8');
  const js = fs.readFileSync(jsPath, 'utf8');

  const envoiPath = path.join(ROOT, 'lib', 'evx-envoi.js');
  let envoi = '';
  if (fs.existsSync(envoiPath)) {
    envoi = fs.readFileSync(envoiPath, 'utf8').replace(/\s+$/, '') + '\n';
  }

  const stub = [
    '<script>',
    'window.evx_test = true;',
    'window.evx_nonce = \'TEST\';',
    'window.evx_ajax = \'https://evenox.test/wp-admin/admin-ajax.php\';',
    'window.evxSimulerReseau = { mode: (function(){ try { return sessionStorage.getItem(\'evx_mode\') || \'ok\'; } catch (e) { return \'ok\'; } })(), envois: [] };',
    'window.__evxFetches = [];',
    'window.__evxMailto = [];',
    '(function(){',
    '  var origFetch = window.fetch;',
    '  function lireBody(init){',
    '    if (!init || !init.body) return { TEST: true, test: \'TEST\', marqueur: \'TEST\' };',
    '    if (typeof FormData !== \'undefined\' && init.body instanceof FormData) {',
    '      var o = { TEST: true, test: \'TEST\', marqueur: \'TEST\' };',
    '      init.body.forEach(function(v, k){ o[k] = v; });',
    '      if (!o.marqueur) o.marqueur = \'TEST\';',
    '      if (!o.test) o.test = \'TEST\';',
    '      return o;',
    '    }',
    '    return { raw: String(init.body), TEST: true, test: \'TEST\', marqueur: \'TEST\' };',
    '  }',
    '  window.fetch = function(input, init){',
    '    var url = (typeof input === \'string\') ? input : (input && input.url);',
    '    var u = String(url || \'\');',
    '    var estLead = u.indexOf(\'admin-ajax\') !== -1 || u.indexOf(\'evenox.test\') !== -1;',
    '    if (!estLead) {',
    '      if (origFetch) return origFetch.apply(this, arguments);',
    '      return Promise.reject(new Error(\'TEST: requete bloquee\'));',
    '    }',
    '    var body = lireBody(init);',
    '    var rec = { url: u, method: (init && init.method) || \'GET\', body: body, TEST: true, test: \'TEST\' };',
    '    for (var k in body) { if (Object.prototype.hasOwnProperty.call(body, k)) rec[k] = body[k]; }',
    '    window.evxSimulerReseau.envois.push(rec);',
    '    window.__evxFetches.push(rec);',
    '    if (window.evxSimulerReseau.mode === \'echec\') {',
    '      return Promise.reject(new Error(\'TEST reseau coupe\'));',
    '    }',
    '    return Promise.resolve({',
    '      ok: true,',
    '      json: function(){ return Promise.resolve({ success: true, TEST: true }); },',
    '      text: function(){ return Promise.resolve(\'{"success":true,"TEST":true}\'); }',
    '    });',
    '  };',
    '})();',
    '</script>',
  ].join('\n');

  const out = [
    '<!DOCTYPE html>',
    '<html lang="fr">',
    '<head>',
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    '<title>Assistant jeux — test local (pas de reseau)</title>',
    '<style>',
    css.replace(/\s+$/, ''),
    '</style>',
    '</head>',
    '<body>',
    html.replace(/\s+$/, ''),
    stub,
    '<script>',
    envoi + js.replace(/\s+$/, ''),
    '</script>',
    '</body>',
    '</html>',
    '',
  ].join('\n');

  const dest = path.join(dir, 'test-local.html');
  fs.writeFileSync(dest, out, 'utf8');
  console.log('OK : assistant-jeux/test-local.html — ' + out.length + ' caractères');
}

main();
