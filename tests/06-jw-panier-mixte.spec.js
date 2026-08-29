'use strict';

/*
 * Prix jw-widget.js (jamais inventés) : Moyen Bouncer 120, Pac-Man 100, Connect 4 80.
 * Flipper absent. Fast & Furious = 140 $ (pas 200). Air hockey = 120 $ (pas 150).
 * Pas de stock 2 — majQte plafonne à 20.
 */
const { test, expect } = require('@playwright/test');
const {
  ouvrirJw,
  choisirCategorie,
  ajouterProduit,
  ongletCategorie,
} = require('./helpers');

test('6 — jw panier mixte (gonflables + arcade + géants)', async ({ page }) => {
  await ouvrirJw(page);
  await choisirCategorie(page, 'gonflables');
  await expect(page.locator('#jwStep-selection')).toBeVisible();

  await ajouterProduit(page, 'Moyen Bouncer');
  await ongletCategorie(page, 'arcade');
  await ajouterProduit(page, 'Pac-Man');
  await ongletCategorie(page, 'extérieurs');
  await ajouterProduit(page, 'Connect 4 géant');

  await expect(page.locator('#jwMini')).toContainText('3 articles');
  await expect(page.locator('.jw-item.jw-choisi')).toHaveCount(1);
  await ongletCategorie(page, 'gonflables');
  await expect(page.locator('.jw-item.jw-choisi').filter({ hasText: 'Moyen Bouncer' })).toHaveCount(1);
  await ongletCategorie(page, 'arcade');
  await expect(page.locator('.jw-item.jw-choisi').filter({ hasText: 'Pac-Man' })).toHaveCount(1);
});
