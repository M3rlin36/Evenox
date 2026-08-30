'use strict';

const { test, expect } = require('@playwright/test');
const {
  ouvrirJw,
  choisirCategorie,
  ajouterProduit,
  allerAuPrix,
} = require('./helpers');

/*
 * Chantier 5 — filet file://, réseau coupé (route.abort + stub mode echec).
 * File localStorage, réessai, mailto dernier recours. Payloads TEST.
 */

test.describe('Chantier 5 — filet webhook jw', () => {
  test('file persistante + réessai + mailto', async ({ page }) => {
    await ouvrirJw(page);
    await page.evaluate(() => {
      sessionStorage.setItem('evx_mode', 'echec');
      localStorage.setItem('evx_mode', 'echec');
      window.evxSimulerReseau.mode = 'echec';
    });

    await choisirCategorie(page, 'arcade');
    await ajouterProduit(page, 'Air hockey');
    await allerAuPrix(page, { mode: 'ramassage', nom: 'Alex Filet', courriel: 'filet@evenox.test' });

    await page.waitForFunction(() => window.EvxEnvoi && window.EvxEnvoi.lireFile().length >= 1);
    const file1 = await page.evaluate(() => window.EvxEnvoi.lireFile());
    expect(file1.length).toBe(1);
    var rec = file1[0].champs || file1[0].lead;
    expect(rec.evx_test || rec.marqueur).toBe('TEST');
    expect(rec.details).toMatch(/TEST/);
    await expect(page.locator('#jwStatut')).toContainText('réessaiera');

    await page.evaluate(() => {
      sessionStorage.setItem('evx_mode', 'echec');
      localStorage.setItem('evx_mode', 'echec');
    });
    await page.reload();
    await page.locator('#jwBox').waitFor();
    await page.evaluate(() => {
      if (window.evxSimulerReseau) window.evxSimulerReseau.mode = 'echec';
    });
    await page.waitForFunction(() => window.EvxEnvoi && window.EvxEnvoi.lireFile().length >= 1);
    const file2 = await page.evaluate(() => window.EvxEnvoi.lireFile());
    expect(file2.length).toBeGreaterThanOrEqual(1);
    expect((file2[0].champs || file2[0].lead).email).toBe('filet@evenox.test');

    await page.evaluate(() => {
      var f = window.EvxEnvoi.lireFile();
      f[0].tentatives = window.EvxEnvoi.MAX;
      window.EvxEnvoi.ecrireFile(f);
      window.evxSimulerReseau.mode = 'echec';
      window.EvxEnvoi.rejouer();
    });
    await page.waitForFunction(() => (window.__evxMailto || []).length >= 1);
    const href = await page.evaluate(() => window.__evxMailto[0]);
    expect(href).toMatch(/^mailto:evenox\.ca@gmail\.com/);
    expect(href).toContain('subject=');
    expect(href).toContain('body=');

    await page.evaluate(() => {
      sessionStorage.removeItem('evx_mode');
      localStorage.removeItem('evx_file_leads');
    });
  });
});
