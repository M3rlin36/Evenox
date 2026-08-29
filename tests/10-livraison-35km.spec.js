'use strict';

const { test, expect } = require('@playwright/test');
const {
  ouvrirJw,
  choisirCategorie,
  ajouterProduit,
  remplirCoordonnees,
  continuer,
} = require('./helpers');

test.describe('10 — Livraison à l\'unité, 35 km', () => {
  test('jw — 100 $ + 7 $/km au-delà de 10 km (catalogue, J4P = 35 km)', async ({ page }) => {
    await ouvrirJw(page);
    await choisirCategorie(page, 'gonflables');
    await ajouterProduit(page, 'Moyen Bouncer');
    await continuer(page);
    await page.locator('#jwModeLiv').click();
    await page.locator('#jwCP').fill('J4P');
    await expect(page.locator('#jwVille')).toContainText('Saint-Lambert');
    await continuer(page);
    await remplirCoordonnees(page);
    await continuer(page);

    await expect(page.locator('#jwSousTotal')).toHaveText('120 $');
    await expect(page.locator('#jwLiv')).toHaveText('275 $');
    await expect(page.locator('#jwTotal')).toHaveText('395 $');
  });

  // Portion ev (Gatineau / Brossard / Longueuil / Montréal) : §6.1.
  // assistant-evenement absent — relancer quand ev-widget.js arrive.
  // Ne pas inventer d'ajustement de transport.
  test('ev — 35 km / zones §6.1', async () => {
    test.skip(true, 'assistant-evenement absent — relancer quand ev-widget.js arrive (§6.1)');
  });
});
