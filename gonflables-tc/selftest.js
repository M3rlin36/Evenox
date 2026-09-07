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

const htmlPath = path.resolve(__dirname, "..", "test-gonflables-tc.html");
const html = fs.readFileSync(htmlPath, "utf8");
const dom = new JSDOM(html, {
  runScripts: "dangerously",
  url: "https://evenox.ca/gonflables-tc/",
  pretendToBeVisual: true,
});

const { window } = dom;
if (!window.EVX_JG) {
  console.error("ECHEC window.EVX_JG absent");
  process.exit(1);
}

const checks = [
  { theme: "fille", mid: "jeu-gonflable-mini-princesse", prix: 120 },
  { theme: "garcon", mid: "jeux-gonflable-chateau-du-prince", prix: 100 },
  { theme: "mixte", mid: "jeux-gonflable-forteresse", prix: 100 },
];

for (const c of checks) {
  window.EVX_JG.etat.theme = c.theme;
  window.EVX_JG.etat.type = "anniversaire";
  window.EVX_JG.prescrire();
  const m = window.EVX_JG.choisirChateau();
  if (m.id !== c.mid || m.prix !== c.prix) {
    console.error("ECHEC jsdom", c.theme, "->", m.id, m.prix, "attendu", c.mid, c.prix);
    process.exit(1);
  }
  console.log("OK jsdom", c.theme, "->", m.id, m.prix + "$");
}

const src = fs.readFileSync(path.resolve(__dirname, "payload.txt"), "utf8");
if (src.includes("&&")) {
  console.error("ECHEC payload &&");
  process.exit(1);
}

console.log("OK jsdom prescriptions genre");
process.exit(0);
