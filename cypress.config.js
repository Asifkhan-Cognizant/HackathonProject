module.exports = {
  "reporter": "cypress-mochawesome-reporter",
  "defaultCommandTimeout": 30000,
  "retries": {
    "runMode": 1,
    "openMode": 1
  },
  "video": true,
  "scrollBehavior": "nearest",
  "chromeWebSecurity": false,
  env:{
    grepFilterSpecs : true
  },
  e2e: {
    "testIsolation" : false,
    setupNodeEvents(on, config) {
      require('cypress-grep/src/plugin')(config);
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
};