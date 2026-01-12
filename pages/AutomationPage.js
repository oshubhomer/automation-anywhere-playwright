const { expect } = require('@playwright/test');

class AutomationPage {
  constructor(page) {
    this.page = page;

    this.automationTab = page.getByRole('link', { name: 'Automation', exact: true });
    this.createBtn = page.getByRole('button', { name: 'Create' });

    // Bottom toolbar buttons
    this.taskBotBtn = page.getByRole('button', { name: /Task Bot/i });
  }

  async openTaskBotCreation() {
    // Wait for Control Room
    await expect(this.automationTab).toBeVisible({ timeout: 60000 });
    await this.automationTab.click();

    await expect(this.createBtn).toBeVisible({ timeout: 60000 });
    await this.createBtn.click();

    await expect(this.taskBotBtn).toBeVisible({ timeout: 60000 });
    await this.taskBotBtn.click();
  }

  async openFormCreation() {
  await expect(this.automationTab).toBeVisible({ timeout: 60000 });
  await this.automationTab.click();

  await expect(this.createBtn).toBeVisible({ timeout: 60000 });
  await this.createBtn.click();

  const formBtn = this.page.getByRole('button', { name: /Form/i });
  await expect(formBtn).toBeVisible({ timeout: 60000 });
  await formBtn.click();
}

}

module.exports = { AutomationPage };
