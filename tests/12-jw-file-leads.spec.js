'use strict';

const { test, expect } = require('@playwright/test');
const {
  ouvrirJw,
  choisirCategorie,
  ajouterProduit,
  allerAuPrix,
} = require('./helpers');

test('5 — file d\'attente locale si réseau coupé, retry au chargement', async ({ page }) => {
  await ouvrirJw(page);
  await page.evaluate(() => {
    window.evxSimulerReseau.mode = 'echec';
    localStorage.removeItem('evx_file_leads');
  });

  await choisirCategorie(page, 'gonflables');
  await ajouterProduit(page, 'Moyen Bouncer');
  await allerAuPrix(page, { mode: 'ramassage', nom: 'TEST File', courriel: 'test@evenox.test' });

  await page.waitForFunction(() => {
    const raw = localStorage.getItem('evx_file_leads');
    if (!raw) return false;
    const arr = JSON.parse(raw);
    return arr.length >= 1;
  });

  const file = await page.evaluate(() => JSON.parse(localStorage.getItem('evx_file_leads') || '[]'));
  expect(file.length).toBe(1);
  expect((file[0].champs || file[0].lead).email).toBe('test@evenox.test');
  expect((file[0].champs || file[0].lead).marqueur || (file[0].champs || file[0].lead).evx_test).toBeTruthy();

  await page.evaluate(() => {
    try { sessionStorage.removeItem('evx_mode'); } catch (e) {}
  });
  await page.reload();
  await page.locator('#jwBox').waitFor();
  await page.evaluate(() => {
    window.evxSimulerReseau.mode = 'ok';
    if (window.EvxEnvoi) window.EvxEnvoi.rejouer();
  });

  await page.waitForFunction(() => {
    const raw = localStorage.getItem('evx_file_leads');
    const arr = raw ? JSON.parse(raw) : [];
    const n = (window.__evxFetches || []).length;
    return arr.length === 0 && n >= 1;
  });

  const apres = await page.evaluate(() => ({
    file: JSON.parse(localStorage.getItem('evx_file_leads') || '[]'),
    envois: window.__evxFetches || [],
  }));
  expect(apres.file.length).toBe(0);
  expect(apres.envois.length).toBeGreaterThanOrEqual(1);
  expect(apres.envois[0].TEST || apres.envois[0].test).toBeTruthy();
  expect(apres.envois[0].action).toBe('evx_soumission');
});
