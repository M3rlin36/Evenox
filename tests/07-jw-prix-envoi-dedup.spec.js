'use strict';

const { test, expect } = require('@playwright/test');
const {
  ouvrirJw,
  choisirCategorie,
  ajouterProduit,
  remplirCoordonnees,
  continuer,
  nbEnvois,
} = require('./helpers');

test('7 — jw prix affiché : envoi auto + dédup par hash', async ({ page }) => {
  await ouvrirJw(page);
  await choisirCategorie(page, 'gonflables');
  await ajouterProduit(page, 'Moyen Bouncer');
  await continuer(page);
  await page.locator('#jwModeLiv').click();
  await page.locator('#jwCP').fill('J7E');
  await continuer(page);
  await remplirCoordonnees(page);
  await continuer(page);

  await expect(page.locator('#jwStep-prix')).toBeVisible();
  await expect(page.locator('#jwTotal')).not.toHaveText('–');
  await expect(page.locator('#jwTotal')).not.toHaveText('');

  await page.waitForFunction(() => {
    return window.evxSimulerReseau && window.evxSimulerReseau.envois.length >= 1;
  });
  expect(await nbEnvois(page)).toBe(1);

  const premier = await page.evaluate(() => window.evxSimulerReseau.envois[0]);
  expect(premier.TEST).toBe(true);
  expect(premier.body.TEST).toBe(true);
  expect(premier.body.marqueur).toBe('TEST');
  expect(premier.body.action).toBe('evx_soumission');

  await page.locator('#jwModifier').click();
  await expect(page.locator('#jwStep-selection')).toBeVisible();
  await continuer(page);
  await continuer(page);
  await continuer(page);
  await expect(page.locator('#jwStep-prix')).toBeVisible();
  await page.waitForTimeout(400);
  expect(await nbEnvois(page)).toBe(1);
});
