'use strict';

/**
 * Contrats des outils Node (hors Playwright, hors ev-widget inventé) :
 *   - lint §4 refuse vraiment & / ligne vide / HTML multi-lignes / mauvaise longueur
 *   - build ev et integrer échouent tant que les sources PC manquent
 *   - payload jw + test-local restent alignés sur les sources
 *
 *   node scripts/test-outils.js
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const { ROOT, verifierPayload } = require('./lib-payload');

let nOk = 0;

function ok(msg) {
  nOk += 1;
  console.log('OK  ' + msg);
}

function fail(msg) {
  console.error('ÉCHEC : ' + msg);
  process.exit(1);
}

function run(args) {
  return spawnSync('node', args, {
    cwd: ROOT,
    encoding: 'utf8',
    env: process.env,
  });
}

function fixture(nom) {
  return fs.readFileSync(path.join(ROOT, 'tests', 'fixtures', 'payload', nom), 'utf8');
}

function aRegle(erreurs, n) {
  return erreurs.some((e) => e.regle === n);
}

function main() {
  const errAmp = verifierPayload(fixture('amp.txt'), { fichier: 'amp.txt' });
  if (!aRegle(errAmp, 3)) fail('règle 3 (& littéral) non signalée sur amp.txt');
  ok('lint refuse & littéral (règle 3)');

  const errVide = verifierPayload(fixture('empty-script.txt'), { fichier: 'empty-script.txt' });
  if (!aRegle(errVide, 2)) fail('règle 2 (ligne vide dans <script>) non signalée');
  ok('lint refuse ligne vide dans <script> (règle 2)');

  const errHtml = verifierPayload(fixture('html-2lines.txt'), { fichier: 'html-2lines.txt' });
  if (!aRegle(errHtml, 1)) fail('règle 1 (HTML une ligne) non signalée');
  ok('lint refuse HTML multi-lignes (règle 1)');

  const jw = fs.readFileSync(path.join(ROOT, 'assistant-jeux', 'payload.txt'), 'utf8');
  const errLen = verifierPayload(jw, {
    fichier: 'assistant-jeux/payload.txt',
    assertLength: jw.length + 1,
  });
  if (!aRegle(errLen, 4)) fail('règle 4 (longueur) non signalée');
  ok('lint refuse écart de longueur (règle 4)');

  const buildEv = run(['scripts/build.js', 'assistant-evenement', '--assert-length=49289']);
  if (buildEv.status !== 1) fail('build ev doit exit 1 (sources absentes), reçu ' + buildEv.status);
  if (!/Aucun ev-widget fictif/.test(buildEv.stderr || '')) {
    fail('build ev doit dire qu\'aucun ev-widget fictif n\'a été créé');
  }
  ok('build ev exit 1, rien inventé');

  const integrer = run(['scripts/integrer-sources.js']);
  if (integrer.status !== 2) fail('integrer doit exit 2 tant que ev manque, reçu ' + integrer.status);
  ok('integrer exit 2 (ev absent)');

  const lintEv = run(['scripts/lint-payload.js', 'assistant-evenement']);
  if (lintEv.status !== 1) fail('lint ev doit exit 1 (payload absent), reçu ' + lintEv.status);
  ok('lint ev exit 1 (payload absent)');

  const buildCheck = run(['scripts/build.js', 'assistant-jeux', '--check']);
  if (buildCheck.status !== 0) {
    fail('payload jw désaligné :\n' + (buildCheck.stderr || buildCheck.stdout || ''));
  }
  ok('payload jw aligné sur les sources (--check)');

  const localCheck = run(['scripts/build-test-local.js', '--check']);
  if (localCheck.status !== 0) {
    fail('test-local jw désaligné :\n' + (localCheck.stderr || localCheck.stdout || ''));
  }
  ok('test-local jw aligné sur les sources (--check)');

  console.log('\nOK : ' + nOk + ' contrats outils.');
}

main();
