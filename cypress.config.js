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
<<<<<<< HEAD
      // implement node event listeners here
=======
      require('cypress-grep/src/plugin')(config);
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
>>>>>>> 2b818a78790f2df27881dd60147bc288ac179fc7
    },
  },
};