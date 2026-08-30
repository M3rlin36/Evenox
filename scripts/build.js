'use strict';

/**
 * Génère payload.txt pour un assistant (HTML une ligne + <style> + <script> inlinés).
 *
 * Usage :
 *   node scripts/build.js assistant-jeux
 *   node scripts/build.js assistant-jeux --check
 *   node scripts/build.js assistant-evenement --assert-length=49289
 *
 * Préfixes : assistant-evenement → ev, assistant-jeux → jw.
 *
 * Transformations appliquées (règles §4) :
 *   1. HTML (et CSS inliné) écrasés sur une seule ligne
 *   2. lignes vides / blanches retirées du <script>
 *   3. entités HTML décodées en unicode (aucun & littéral dans le payload) ;
 *      un & dans le CSS/JS source fait échouer le build (ligne fautive),
 *      sans réécriture automatique — String.fromCharCode(38) à l'exécution
 *   4. --assert-length=N refuse tout écart
 *
 * Les sources jw-widget.* ne sont pas modifiées. assistant-evenement/ev-widget
 * est absent de ce dépôt : le build échoue clairement, sans créer de faux fichiers.
 * On ne peut donc pas reproduire le payload 49 289 caractères.
 */

const fs = require('fs');
const {
  parseArgs,
  infoWidget,
  fichiersManquants,
  lireLibsWidget,
  assembler,
  verifierPayload,
  formaterErreurs,
} = require('./lib-payload');

function jsAvecFilet(jsWidget, relWidget) {
  const libs = lireLibsWidget();
  if (!libs.js) return { js: jsWidget, relsJs: relWidget };
  return {
    js: libs.js + jsWidget,
    relsJs: libs.rels.join(' + ') + ' + ' + relWidget,
  };
}

function usage() {
  console.error(
    'Usage : node scripts/build.js <assistant-evenement|assistant-jeux> [--assert-length=N] [--check]'
  );
}

function messageManquants(info, manquants, dossierAbsent) {
  const lignes = [
    `ÉCHEC : impossible de builder ${info.dossier} (préfixe ${info.prefixe}).`,
    '',
  ];
  if (dossierAbsent) {
    lignes.push(`Dossier absent : ${info.dossier}`);
  }
  lignes.push('Fichiers manquants :');
  for (const f of manquants) lignes.push(`  - ${f}`);
  lignes.push('');
  lignes.push(
    `Aucun ${info.prefixe}-widget fictif n'a été créé. Pas de payload inventé sans les sources.`
  );
  return lignes.join('\n');
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

  const info = infoWidget(args.positionnels[0]);
  if (info.erreur) {
    console.error(info.erreur);
    process.exit(1);
  }

  const { manquants, dossierAbsent } = fichiersManquants(info);
  if (manquants.length) {
    console.error(messageManquants(info, manquants, dossierAbsent));
    process.exit(1);
  }

  const html = fs.readFileSync(info.abs.html, 'utf8');
  const css = fs.readFileSync(info.abs.css, 'utf8');
  const jsWidget = fs.readFileSync(info.abs.js, 'utf8');
  const { js, relsJs } = jsAvecFilet(jsWidget, info.rels.js);

  const { payload, erreurs: errAssemble } = assembler({
    html,
    css,
    js,
    rels: Object.assign({}, info.rels, { js: relsJs }),
  });
  if (errAssemble.length) {
    console.error(`ÉCHEC du build ${info.dossier} : règle §4 violée dans les sources\n`);
    console.error(formaterErreurs(errAssemble));
    process.exit(1);
  }

  const errPayload = verifierPayload(payload, {
    fichier: info.rels.payload,
    assertLength: args.assertLength,
  });
  if (errPayload.length) {
    console.error(`ÉCHEC du build ${info.dossier} : ${errPayload.length} règle(s) §4 violée(s)\n`);
    console.error(formaterErreurs(errPayload));
    process.exit(1);
  }

  if (args.check) {
    if (!fs.existsSync(info.abs.payload)) {
      console.error(`ÉCHEC --check : ${info.rels.payload} introuvable.`);
      process.exit(1);
    }
    const actuel = fs.readFileSync(info.abs.payload, 'utf8');
    if (actuel !== payload) {
      console.error(
        `ÉCHEC --check : ${info.rels.payload} n'est plus aligné sur les sources (${actuel.length} car. commités, ${payload.length} car. rebuild). Relancer sans --check puis committer.`
      );
      process.exit(1);
    }
    console.log(`OK --check : ${info.rels.payload} aligné — ${payload.length} caractères`);
    process.exit(0);
  }

  fs.writeFileSync(info.abs.payload, payload, 'utf8');
  console.log(`OK : ${info.rels.payload} — ${payload.length} caractères`);
  process.exit(0);
}

main(process.argv.slice(2));
