'use strict';

const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;
const {
  ouvrirJw,
  choisirCategorie,
  ajouterProduit,
  remplirCoordonnees,
  continuer,
} = require('./helpers');

async function axeSansGrave(page) {
  await page.locator('.jw-step.jw-on').waitFor();
  await page.waitForTimeout(500);
  const results = await new AxeBuilder({ page }).include('#assistant-jeux').analyze();
  const graves = results.violations.filter((v) => v.impact === 'critical' || v.impact === 'serious');
  expect(graves, JSON.stringify(graves, null, 2)).toEqual([]);
}

async function debordeHorizontal(page) {
  return page.evaluate(() => {
    const root = document.documentElement;
    return root.scrollWidth > root.clientWidth + 1;
  });
}

async function ciblesTropPetites(page) {
  return page.evaluate(() => {
    const sel = [
      '#jwBox button',
      '#jwBox a',
      '#jwBox input',
      '.jw-cat',
      '.jw-tab',
      '.jw-mode',
      '.jw-qte button',
      '.jw-nav button',
    ].join(',');
    const els = Array.prototype.slice.call(document.querySelectorAll(sel));
    return els
      .filter((el) => {
        const r = el.getBoundingClientRect();
        const st = window.getComputedStyle(el);
        if (r.width === 0 || r.height === 0) return false;
        if (st.visibility === 'hidden' || st.display === 'none') return false;
        return r.width < 44 || r.height < 44;
      })
      .map((el) => {
        const r = el.getBoundingClientRect();
        return {
          id: el.id,
          cls: el.className,
          w: Math.round(r.width),
          h: Math.round(r.height),
        };
      });
  });
}

test.describe('jw mobile 375 px + a11y', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test('375 px : pas de débordement, cibles ≥ 44 px, panier/total atteignables', async ({ page }) => {
    await ouvrirJw(page);
    expect(await debordeHorizontal(page)).toBe(false);
    expect(await ciblesTropPetites(page)).toEqual([]);

    await choisirCategorie(page, 'gonflables');
    expect(await debordeHorizontal(page)).toBe(false);
    expect(await ciblesTropPetites(page)).toEqual([]);
    await expect(page.locator('#jwMini')).toBeVisible();

    await ajouterProduit(page, 'Moyen Bouncer');
    await continuer(page);
    expect(await debordeHorizontal(page)).toBe(false);

    await page.locator('#jwCP').fill('J7E');
    await continuer(page);
    await remplirCoordonnees(page);
    await continuer(page);
    await expect(page.locator('#jwTotal')).toBeVisible();
    await page.locator('#jwTotal').scrollIntoViewIfNeeded();
    expect(await debordeHorizontal(page)).toBe(false);
    const totalInView = await page.locator('#jwTotal').evaluate((el) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    });
    expect(totalInView).toBe(true);
  });

  test('clavier + sémantique (labels, tablist, aria-live, erreurs)', async ({ page }) => {
    await ouvrirJw(page);
    await page.locator('.jw-cat[data-cat="gonflables"]').focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#jwStep-selection')).toBeVisible();
    await expect(page.locator('#jwTabs')).toHaveAttribute('role', 'tablist');
    await expect(page.locator('#jwTabs [role="tab"]').first()).toHaveAttribute('aria-selected', 'true');
    await expect(page.locator('#jwGroupes')).toHaveAttribute('role', 'tabpanel');

    await page.locator('#jwSuiv').click();
    await expect(page.locator('#jwErr')).toContainText('Ajoute au moins un jeu');
    await expect(page.locator('#jwErr')).toHaveAttribute('role', 'alert');

    await ajouterProduit(page, 'Moyen Bouncer');
    await continuer(page);
    await expect(page.locator('label[for="jwCP"]')).toBeVisible();
    await continuer(page);
    await expect(page.locator('label[for="jwNom"]')).toBeVisible();
    await expect(page.locator('label[for="jwCourriel"]')).toBeVisible();
    await page.locator('#jwSuiv').click();
    await expect(page.locator('#jwErr')).toContainText('nom');

    await remplirCoordonnees(page);
    await continuer(page);
    await expect(page.locator('#jwTotal')).toHaveAttribute('aria-live', 'polite');
  });

  test('axe-core : aucune violation serious/critical', async ({ page }) => {
    await ouvrirJw(page);
    await axeSansGrave(page);

    await choisirCategorie(page, 'gonflables');
    await axeSansGrave(page);

    await ajouterProduit(page, 'Moyen Bouncer');
    await continuer(page);
    await axeSansGrave(page);

    await page.locator('#jwCP').fill('J7E');
    await continuer(page);
    await axeSansGrave(page);

    await remplirCoordonnees(page);
    await continuer(page);
    await expect(page.locator('#jwTotal')).toBeVisible();
    await axeSansGrave(page);
  });
});
