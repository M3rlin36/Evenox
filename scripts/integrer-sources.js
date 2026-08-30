'use strict';

/**
 * Relance le pipeline dès que ev-widget / calculateur-fete sont dans le clone.
 * N'invente aucun fichier. Exit 2 si les sources persona manquent encore.
 *
 *   node scripts/integrer-sources.js
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');

const REQUIS_EV = [
  'assistant-evenement/ev-widget.js',
  'assistant-evenement/ev-widget.css',
  'assistant-evenement/ev-widget.html',
];
const OPTIONNELS = [
  'assistant-evenement/payload.txt',
  'calculateur-fete.html',
  'calculateur-secteur-v2.html',
];

function existe(rel) {
  return fs.existsSync(path.join(ROOT, rel));
}

function run(cmd, args) {
  console.log('\n$ ' + [cmd, ...args].join(' '));
  const r = spawnSync(cmd, args, { cwd: ROOT, stdio: 'inherit', encoding: 'utf8' });
  if (r.status !== 0) {
    process.exit(r.status == null ? 1 : r.status);
  }
}

function main() {
  const manquantsEv = REQUIS_EV.filter((f) => !existe(f));
  const optionnelsPresents = OPTIONNELS.filter(existe);
  const optionnelsAbsents = OPTIONNELS.filter((f) => !existe(f));

  console.log('Evenox — intégration des sources manquantes\n');
  if (manquantsEv.length) {
    console.log('Sources persona encore absentes :');
    for (const f of manquantsEv) console.log('  - ' + f);
    if (optionnelsAbsents.length) {
      console.log('Optionnels absents :');
      for (const f of optionnelsAbsents) console.log('  - ' + f);
    }
    console.log('\nRien n\'a été inventé. Copier depuis C:\\Users\\Admin\\Evenox');
    console.log('puis relancer. Checklist : DROP-IN.md');
    console.log('Recherches déjà faites : RAPPORT-RECHERCHE.md');
    process.exit(2);
  }

  console.log('ev-widget.js/.css/.html présents.');
  if (optionnelsPresents.length) {
    console.log('Aussi présents : ' + optionnelsPresents.join(', '));
  }
  if (optionnelsAbsents.length) {
    console.log('Toujours absents (non inventés) : ' + optionnelsAbsents.join(', '));
  }

  run('node', ['scripts/extraire-catalogue.js']);
  run('node', ['scripts/verifier-catalogue.js']);
  run('node', ['scripts/build.js', 'assistant-evenement', '--assert-length=49289']);
  run('node', ['scripts/lint-payload.js', 'assistant-evenement', '--assert-length=49289']);
  run('node', ['scripts/build-test-local.js']);
  run('npx', ['playwright', 'test']);
  console.log('\nOK : pipeline ev passé. Tests 1–5 restent skip tant que les scénarios DOM ne sont pas écrits (DROP-IN.md).');
  console.log('§6 toujours ouvert (zones, seuil 449/500, destination des leads, conflits de prix).');
}

main();
