const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e:{
    baseUrl: 'https://glovoapp.com/',
    defaultCommandTimeout: 7000,
    setupNodeEvents(on, config) { },
  },
});