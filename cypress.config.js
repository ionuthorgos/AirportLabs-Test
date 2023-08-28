const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/spec.cy.js",
    browser: 'firefox',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
