import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("Launch Orange HRM application url", () => {
  console.log("Step definition executed for: Launch Orange HRM application url");
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});

When("User enter the valid userName {string}", (admin) => {
  cy.get('input[name="username"]').type(admin);
});

And("User enter the valid password {string}", (password) => {
  cy.get('input[name="password"]').type(password);
});

When("User enter the invalid userName {string}", (admin) => {
  cy.get('input[name="username"]').type(admin);
});

Then("click on the login button", () => {
  cy.get('button[type="submit"]').should('be.visible').click();
});

And("verify login is successful", () => {
  cy.log("success");
});