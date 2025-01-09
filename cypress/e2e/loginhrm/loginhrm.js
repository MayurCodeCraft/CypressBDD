import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("Launch Orange HRM application url", () => {
  console.log("Step definition executed for: Launch Orange HRM application url");
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});

When("User enter the valid userName", () => {
  cy.get('input[name="username"]').type("Admin");
});

And("User enter the valid password", () => {
  cy.get('input[name="password"]').type("admin123");
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

And("verify login the error message {string}",(errormessage)=>{

  cy.contains(errormessage)

})


//Login check using fixtures file

When("User enter the credentials and click on login button",()=>{

   cy.fixture("loginData").then((data)=>{
    cy.get('input[name="username"]').type(data.username);
    cy.get('input[name="password"]').type(data.password);
    cy.get('button[type="submit"]').should('be.visible').click();

  })

})

//Login check using the commands folder

When("User enter the credentials and click on login button through commands",()=>{

  cy.wait(5000)
  cy.fixture("loginData").then((data)=>{

    cy.login(data.username,data.password);
  })

})

  //Login check using cypress xpath

  When("User enter the valid xpath userName {string}",(username)=>{
   
    cy.xpath('//input[@name="username"]').type(username)

  })

  And("User enter the valid xpath password {string}",(password)=>{

    cy.xpath('//input[@name="password"]').type(password)

  })







