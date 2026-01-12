import { test } from '@playwright/test';

test('Launch Automation Anywhere', async ({ page }) => {
  await page.goto('/');
});
