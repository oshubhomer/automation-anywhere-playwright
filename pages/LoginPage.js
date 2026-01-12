const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;

    // Target real inputs inside the control
    this.username = page.locator('input[aria-label="Username"], input[name="username"]');
    this.password = page.locator('input[aria-label="Password"], input[name="password"]');
    this.loginBtn = page.getByRole('button', { name: 'Log in' });
  }

  async login(username, password) {
    await expect(this.username).toBeVisible({ timeout: 30000 });
    await this.username.click();
    await this.username.fill(username);

    await expect(this.password).toBeVisible();
    await this.password.click();
    await this.password.fill(password);

    await expect(this.loginBtn).toBeEnabled();
    await this.loginBtn.click();
  }
}

module.exports = { LoginPage };
