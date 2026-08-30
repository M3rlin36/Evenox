'use strict';

/**
 * Vérifie les 4 règles §4 sur un payload.txt déjà assemblé.
 *
 * Usage :
 *   node scripts/lint-payload.js assistant-jeux/payload.txt
 *   node scripts/lint-payload.js assistant-jeux
 *   node scripts/lint-payload.js assistant-evenement/payload.txt --assert-length=49289
 */

const fs = require('fs');
const { parseArgs, verifierPayload, formaterErreurs, resoudrePayloadPath } = require('./lib-payload');

function usage() {
  console.error(
    'Usage : node scripts/lint-payload.js <payload.txt|dossier> [--assert-length=N]'
  );
}

function main(argv) {
  const args = parseArgs(argv);
  if (args.erreur) {
    console.error(args.erreur);
    usage();
    process.exit(1);
  }
  if (args.positionnels.length !== 1) {
    usage();
    process.exit(1);
  }

  const cible = resoudrePayloadPath(args.positionnels[0]);
  if (cible.erreur) {
    console.error(cible.erreur);
    process.exit(1);
  }
  if (!cible.existe) {
    console.error(`ÉCHEC : ${cible.rel} introuvable. Rien n'a été inventé.`);
    process.exit(1);
  }

  const payload = fs.readFileSync(cible.abs, 'utf8');
  const erreurs = verifierPayload(payload, {
    fichier: cible.rel,
    assertLength: args.assertLength,
  });
  if (erreurs.length) {
    console.error(`ÉCHEC du lint ${cible.rel} : ${erreurs.length} règle(s) §4 violée(s)\n`);
    console.error(formaterErreurs(erreurs));
    process.exit(1);
  }

  const extra = args.assertLength != null ? `, longueur ${payload.length}` : '';
  console.log(`OK : ${cible.rel} — ${payload.length} caractères, règles §4 respectées${extra}`);
  process.exit(0);
}

main(process.argv.slice(2));
