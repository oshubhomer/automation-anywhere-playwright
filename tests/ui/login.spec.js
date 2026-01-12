const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

test('Login to Automation Anywhere', async ({ page }) => {
  await page.goto('https://community.cloud.automationanywhere.digital/');

  const loginPage = new LoginPage(page);
  await loginPage.login(
    process.env.AA_USERNAME,
    process.env.AA_PASSWORD
  );

  await expect(
    page.getByRole('link', { name: 'Automation', exact: true })
  ).toBeVisible({ timeout: 60000 });
});
