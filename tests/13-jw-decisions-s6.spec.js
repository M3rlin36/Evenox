'use strict';

const { test, expect } = require('@playwright/test');
const {
  ouvrirJw,
  choisirCategorie,
  ajouterProduit,
  remplirCoordonnees,
  continuer,
} = require('./helpers');

async function allerAuTotal(page, cp) {
  await ouvrirJw(page);
  await choisirCategorie(page, 'gonflables');
  await ajouterProduit(page, 'Moyen Bouncer');
  await continuer(page);
  await page.locator('#jwModeLiv').click();
  await page.locator('#jwCP').fill(cp);
  await continuer(page);
  await remplirCoordonnees(page);
  await continuer(page);
}

test.describe('13 — Décisions S6 paramétrables, non tranchées', () => {
  test('constantes exposées, aucun drapeau actif', async ({ page }) => {
    await ouvrirJw(page);
    const d = await page.evaluate(() => window.EvxDecisions);
    expect(d).toBeTruthy();
    expect(d.seuilLivraisonIncluseKit).toBe(449);
    expect(d.seuilLivraisonIncluseSecteur).toBe(500);
    expect(d.seuilLivraisonIncluseActif).toBeNull();
    expect(d.destinationLeads).toBe('');
    expect(d.connect4Jx).toBe(60);
    expect(d.connect4Jw).toBe(80);
    expect(d.connect4Actif).toBeNull();
    expect(d.ajustementSurMesure).toBeNull();
    expect(d.forcerSurMesure).toBe(false);
    expect(d.appliquerPlancherCommande).toBe(false);
    expect(d.plancherCommande).toBe(300);
    expect(d.villesSurMesure).toEqual(['Montréal', 'Longueuil', 'Brossard', 'Gatineau']);
  });

  test('J4W Brossard : sur devis, aucun $ inventé (comportement actuel)', async ({ page }) => {
    await allerAuTotal(page, 'J4W');
    await expect(page.locator('#jwVille')).toContainText('Brossard');
    await expect(page.locator('#jwLiv')).toHaveText('Sur devis');
    await expect(page.locator('#jwTotal')).toContainText('+');
    const liv = await page.locator('#jwLiv').innerText();
    expect(liv).not.toMatch(/\d/);
  });

  test('J4K Longueuil : encore chiffré par km (forcerSurMesure false)', async ({ page }) => {
    await allerAuTotal(page, 'J4K');
    await expect(page.locator('#jwVille')).toContainText('Longueuil');
    await expect(page.locator('#jwLiv')).toHaveText('272 $');
    await expect(page.locator('#jwTotal')).toHaveText('392 $');
  });

  test('forcerSurMesure true : Longueuil passe sur devis sans inventer de $', async ({ page }) => {
    await ouvrirJw(page);
    await page.evaluate(() => {
      window.EvxDecisions.forcerSurMesure = true;
    });
    await choisirCategorie(page, 'gonflables');
    await ajouterProduit(page, 'Moyen Bouncer');
    await continuer(page);
    await page.locator('#jwModeLiv').click();
    await page.locator('#jwCP').fill('J4K');
    await expect(page.locator('#jwVille')).toContainText('Longueuil');
    await continuer(page);
    await remplirCoordonnees(page);
    await continuer(page);
    await expect(page.locator('#jwLiv')).toHaveText('Sur devis');
    const liv = await page.locator('#jwLiv').innerText();
    expect(liv).not.toMatch(/\d/);
    await expect(page.locator('#jwTotal')).toContainText('+');
  });
});
