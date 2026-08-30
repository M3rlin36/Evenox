'use strict';

/**
 * Porte locale = celle de .github/workflows/tests.yml (`npm run ci`)
 *   node scripts/ci.js
 *   npm run ci
 *
 * Ne build pas ev (sources absentes). Ne déploie rien.
 * Rebuild payload / test-local en --check : refuse un fichier généré périmé.
 */

const { spawnSync } = require('child_process');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function run(cmd, args) {
  console.log('\n$ ' + [cmd, ...args].join(' '));
  const r = spawnSync(cmd, args, {
    cwd: ROOT,
    stdio: 'inherit',
    encoding: 'utf8',
    shell: process.platform === 'win32',
  });
  if (r.status !== 0) {
    process.exit(r.status == null ? 1 : r.status);
  }
}

function main() {
  run('node', ['scripts/verifier-catalogue.js']);
  run('node', ['scripts/test-outils.js']);
  run('node', ['scripts/lint-payload.js', 'assistant-jeux']);
  run('npx', ['playwright', 'test']);
  console.log('\nOK : catalogue + outils + lint jw + Playwright.');
}

main();
