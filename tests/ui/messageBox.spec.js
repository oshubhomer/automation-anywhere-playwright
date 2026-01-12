const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { AutomationPage } = require('../../pages/AutomationPage');
const { TaskBotPage } = require('../../pages/TaskBotPage');

test('Create Message Box Task Bot', async ({ page }) => {
  const botName = 'Message Box Task';

  // 1. Login
  await page.goto('https://community.cloud.automationanywhere.digital/');
  const login = new LoginPage(page);
  await login.login(process.env.AA_USERNAME, process.env.AA_PASSWORD);

  // Verify login success
  await expect(page.getByRole('link', { name: 'Automation', exact: true }))
    .toBeVisible({ timeout: 60000 });

  // 2. Navigate to Automation → Create → Task Bot
  const automation = new AutomationPage(page);
  await automation.openTaskBotCreation();

  // 3. Create Task Bot
  const taskBot = new TaskBotPage(page);
  await taskBot.createTaskBot(botName);

  // 4. Add Message Box
  await taskBot.addMessageBox();

  // 5. Save configuration
  await taskBot.saveBot();

  // 6. Final Functional Validation
  await expect(page.getByRole('link', { name: botName }))
    .toBeVisible({ timeout: 60000 });
});
