#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

let JSDOM;
try {
  JSDOM = require("jsdom").JSDOM;
} catch (err) {
  console.log("NOTE jsdom absent:", err.message);
  process.exit(0);
}

const htmlPath = path.resolve(__dirname, "..", "test-chapiteaux-tc.html");
const html = fs.readFileSync(htmlPath, "utf8");
const dom = new JSDOM(html, {
  runScripts: "dangerously",
  resources: "usable",
  url: "https://evenox.ca/chapiteaux-tc/",
  pretendToBeVisual: true,
});

const { window } = dom;
if (!window.EVX_CH) {
  console.error("ECHEC window.EVX_CH absent");
  process.exit(1);
}

const checks = [
  { n: 10, service: "assis", type: "enfants", mid: "marq-10x10", prix: 300 },
  { n: 40, service: "debout", type: "corpo", mid: "marq-15x20", prix: 450 },
  { n: 80, service: "assis", type: "mariage", mid: "marq-20x40", prix: 800 },
];

for (const c of checks) {
  window.document.getElementById("tcGuests").value = String(c.n);
  window.EVX_CH.etat.type = c.type;
  window.EVX_CH.etat.service = c.service;
  window.EVX_CH.prescrire();
  const m = window.EVX_CH.choisirMarquise();
  if (m.id !== c.mid || m.prix !== c.prix) {
    console.error("ECHEC jsdom", c.n, "->", m.id, m.prix, "attendu", c.mid, c.prix);
    process.exit(1);
  }
  console.log("OK jsdom", c.n, c.type, "->", m.id, m.prix + "$");
}

const wedding = window.EVX_CH.etat.panier;
if (!wedding["guirlande"] || wedding["guirlande"] !== 2) {
  console.error("ECHEC mariage sans 2 guirlandes", wedding);
  process.exit(1);
}
if (!wedding["son"]) {
  console.error("ECHEC mariage sans son", wedding);
  process.exit(1);
}
if (wedding["bar-portatif"]) {
  console.error("ECHEC mariage ne doit pas forcer le bar", wedding);
  process.exit(1);
}

window.document.getElementById("tcGuests").value = "40";
window.EVX_CH.etat.type = "corpo";
window.EVX_CH.etat.service = "debout";
window.EVX_CH.prescrire();
const corpo = window.EVX_CH.etat.panier;
if (!corpo["bar-portatif"]) {
  console.error("ECHEC corpo sans bar portatif", corpo);
  process.exit(1);
}

console.log("OK jsdom prescriptions mariage/corpo");
process.exit(0);
