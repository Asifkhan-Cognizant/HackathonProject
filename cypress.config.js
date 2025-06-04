const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "reporter": "cypress-mochawesome-reporter",
  "defaultCommandTimeout": 30000,
  "retries": {
    "runMode": 1,
    "openMode": 1
  },
 
  "video": true,
  "scrollBehavior": "nearest",
   "chromeWebSecurity":false,
  e2e: {
    pageLoadTimeout: 1200000,
    defaultCommandTimeout: 30000,
    responseTimeout: 30000,
  //  testIsolation: false,

    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);
      return config;
      

    },
  },
});
