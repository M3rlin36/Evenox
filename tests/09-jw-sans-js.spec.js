'use strict';

const { test, expect } = require('@playwright/test');
const { urlJw, bloquerReseau } = require('./helpers');

test.use({ javaScriptEnabled: false });

test('9 — jw sans JS : 3 cartes-liens vers les configurateurs', async ({ page }) => {
  await bloquerReseau(page);
  await page.goto(urlJw());

  const cartes = page.locator('.jw-cat');
  await expect(cartes).toHaveCount(3);
  await expect(cartes.nth(0)).toHaveAttribute('href', 'https://evenox.ca/location-jeux-gonflables/');
  await expect(cartes.nth(1)).toHaveAttribute('href', 'https://evenox.ca/location-arcade/');
  await expect(cartes.nth(2)).toHaveAttribute('href', 'https://evenox.ca/location-jeux-geants/');
  await expect(page.locator('#jwStep-type')).toBeVisible();
  await expect(page.locator('#jwNav')).toBeHidden();
});
