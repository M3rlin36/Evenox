'use strict';

const { test, expect } = require('@playwright/test');
const { ouvrirJw } = require('./helpers');

test('8 — jw ?jeux=gonflables présélectionne la catégorie', async ({ page }) => {
  await ouvrirJw(page, 'jeux=gonflables');
  await expect(page.locator('#jwStep-selection')).toBeVisible();
  await expect(page.locator('#jwTabs .jw-tab.jw-on')).toContainText(/gonflables/i);
  await expect(page.locator('.jw-item-nom').filter({ hasText: 'Moyen Bouncer' })).toBeVisible();
});
