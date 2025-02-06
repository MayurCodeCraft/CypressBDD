const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    //specPattern: "cypress/e2e/*.{feature,cy.js}"
  specPattern: [
      "cypress/e2e/**/*.feature",    // Include all .feature files in e2e folder
      "cypress/e2e/cypress_codes/**/*.cy.js" // Include all .cy.js files in the 'cypress_codes' subfolder
    ],
  
  },

  
});
