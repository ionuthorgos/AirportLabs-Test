const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/spec.cy.js",
    browser: 'chrome',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
