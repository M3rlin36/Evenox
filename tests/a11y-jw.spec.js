'use strict';

const { test, expect } = require('@playwright/test');
const { ouvrirJw } = require('./helpers');

/*
 * Complément clavier (flèches / Escape). L'audit axe + 375 px est dans
 * tests/11-jw-a11y-mobile.spec.js.
 * assistant-evenement et calculateur-fete absents — pas d'audit inventé.
 */

test('jw : flèches d\'onglets + Escape', async ({ page }) => {
  await ouvrirJw(page);
  await page.locator('.jw-cat[data-cat="arcade"]').focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#jwStep-selection.jw-on')).toBeVisible();
  await page.locator('#jwTab-arcade').focus();
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('#jwTab-exterieurs')).toHaveAttribute('aria-selected', 'true');
  await page.keyboard.press('ArrowLeft');
  await expect(page.locator('#jwTab-arcade')).toHaveAttribute('aria-selected', 'true');
  await page.keyboard.press('Escape');
  await expect(page.locator('#jwStep-type.jw-on')).toBeVisible();
});

test.describe('a11y ev / calculateur (absents)', () => {
  test.skip('a11y assistant-evenement', async () => {
    // assistant-evenement absent — relancer quand ev-widget.js arrive
  });

  test.skip('a11y calculateur-fete.html', async () => {
    // calculateur-fete.html absent — ne pas inventer
  });
});
