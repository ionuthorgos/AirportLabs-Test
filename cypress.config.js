const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/.js",
    browser: 'firefox',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
