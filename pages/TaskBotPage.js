const { expect } = require('@playwright/test');

class TaskBotPage {
  constructor(page) {
    this.page = page;

    // Create Task Bot dialog
    this.nameField = page.getByRole('textbox', { name: 'Name' });
    this.createBtn = page.getByRole('button', { name: /Create & edit|Create/i });

    // Editor toolbar (appears only after editor loads)
    this.editorToolbar = page.getByRole('button', { name: /Task Bot/i });

    // Action search (inside editor)
    this.actionSearch = page.locator('input[placeholder*="Search"], input[type="search"]');

    this.messageBoxAction = page.getByText('Message Box', { exact: true });

    this.saveBtn = page.getByRole('button', { name: 'Save' });
    this.successToast = page.getByText(/saved/i);
  }

  async createTaskBot(botName) {
    await expect(this.nameField).toBeVisible({ timeout: 60000 });
    await this.nameField.fill(botName);

    await expect(this.createBtn).toBeEnabled();
    await this.createBtn.click();
  }

  async waitForEditor() {
    // Editor is ready when toolbar appears
    await expect(this.editorToolbar).toBeVisible({ timeout: 60000 });
  }

  async addMessageBox() {
    await this.waitForEditor();

    await expect(this.actionSearch).toBeVisible({ timeout: 60000 });
    await this.actionSearch.fill('Message Box');

    await expect(this.messageBoxAction).toBeVisible({ timeout: 60000 });
    await this.messageBoxAction.dblclick();
  }

  async saveBot() {
    await expect(this.saveBtn).toBeEnabled({ timeout: 60000 });
    await this.saveBtn.click();

    await expect(this.successToast).toBeVisible({ timeout: 60000 });
  }
}

module.exports = { TaskBotPage };
