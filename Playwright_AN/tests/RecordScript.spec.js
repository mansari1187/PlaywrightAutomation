import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.guru99.com/test/guru99home/');
//   await page.locator('#rt-header').getByRole('link', { name: 'QTP' }).click();
  await expect(page.getByText('THIS IS A DEMO PAGE FOR')).toBeVisible();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('iframe[name="a077aa5e"]').contentFrame().getByRole('link').click();
  const page1 = await page1Promise;
  await expect(page1.getByRole('heading', { name: 'Selenium Live Project for' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).fill('abc@gmail.com');

await   page.pause()
});