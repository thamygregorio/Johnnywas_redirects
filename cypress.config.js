const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

async function setupNodeEvents(on, config) {
  allureWriter(on, config);
  return config;
}

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  chromeWebSecurity: true,
  experimentalStudio: true,
  experimentalWebKitSupport: true,
  video: false,
  reports: false,
  screenshots: false,
  projectId: "45uhqs",
  e2e: {
    setupNodeEvents,
    baseUrl: "https://mcstaging2.johnnywas.com/",
  },
});
