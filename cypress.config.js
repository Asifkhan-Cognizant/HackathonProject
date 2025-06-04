const { defineConfig } = require("cypress");

module.exports = defineConfig({
   "chromeWebSecurity":false,
  e2e: {
    pageLoadTimeout: 1200000,
    defaultCommandTimeout: 30000,
    responseTimeout: 30000,
  //  testIsolation: false,

    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});
