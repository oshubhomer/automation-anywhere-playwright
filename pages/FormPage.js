const { expect } = require('@playwright/test');

class FormPage {
  constructor(page) {
    this.page = page;

    // Create Form dialog
    this.nameField = page.getByRole('textbox', { name: 'Name' });
    this.createBtn = page.getByRole('button', { name: /Create & edit|Create/i });

    // Left palette
    this.textBoxElement = page.getByText('Textbox', { exact: true });
    this.fileUploadElement = page.getByText('Select File', { exact: true });

    // Canvas (center)
    this.canvas = page.locator('[class*=canvas], [class*=workspace], [class*=designer], [role=main]');

    // Inputs on form
    this.formTextBox = page.locator('input[type="text"]');
    this.fileInput = page.locator('input[type="file"]');

    // Save + confirmation
    this.saveBtn = page.getByRole('button', { name: 'Save' });
    this.successToast = page.getByText(/saved|uploaded|success/i);
  }

  async createForm(name) {
    await expect(this.nameField).toBeVisible({ timeout: 60000 });
    await this.nameField.fill(name);
    await this.createBtn.click();
  }

  async waitForEditor() {
    await expect(this.canvas).toBeVisible({ timeout: 60000 });
  }

  async dragElements() {
    await this.waitForEditor();

    await expect(this.textBoxElement).toBeVisible();
    await this.textBoxElement.dragTo(this.canvas);

    await expect(this.fileUploadElement).toBeVisible();
    await this.fileUploadElement.dragTo(this.canvas);
  }

  async fillFormAndUpload(filePath) {
    await expect(this.formTextBox.first()).toBeVisible({ timeout: 30000 });
    await this.formTextBox.first().fill('Playwright Upload Test');

    await expect(this.fileInput).toBeVisible();
    await this.fileInput.setInputFiles(filePath);
  }

  async saveForm() {
    await expect(this.saveBtn).toBeEnabled({ timeout: 30000 });
    await this.saveBtn.click();

    await expect(this.successToast).toBeVisible({ timeout: 60000 });
  }
}

module.exports = { FormPage };
