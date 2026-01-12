require('dotenv').config();

module.exports = {
  testDir: './tests',
  use: {
    headless: false,
    baseURL: 'https://community.cloud.automationanywhere.digital'
  }
};
