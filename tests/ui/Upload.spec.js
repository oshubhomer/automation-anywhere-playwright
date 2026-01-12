const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { AutomationPage } = require('../../pages/AutomationPage');
const { FormPage } = require('../../pages/FormPage');

test('Create Form with File Upload', async ({ page }) => {
  const formName = 'Upload Form';

  // Login
  await page.goto('https://community.cloud.automationanywhere.digital/');
  const login = new LoginPage(page);
  await login.login(process.env.AA_USERNAME, process.env.AA_PASSWORD);

  await expect(page.getByRole('link', { name: 'Automation', exact: true }))
    .toBeVisible({ timeout: 60000 });

  // Go to Create → Form
  const automation = new AutomationPage(page);
 await automation.openFormCreation();


  // Form actions
  const form = new FormPage(page);
  await form.createForm(formName);
  await form.dragElements();

  // Upload a file
  await form.fillFormAndUpload('../../uploads/sample.pdf');

  await form.saveForm();

  // Validation
  await expect(page.getByRole('link', { name: formName }))
    .toBeVisible({ timeout: 60000 });
});
