const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/e2e/**",
    browser: 'firefox',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
