import {Given, When, Then, And , Before, After} from "cypress-cucumber-preprocessor/steps";

Before(()=>{

    cy.reload()
})

After(()=>{

    cy.reload()
    
})

Given("open newtours application",()=>{

    cy.visit("https://demo.guru99.com/test/newtours/");
})

/*When("provide valid {string} and {string}",(userName,password)=>{



    cy.get('input[name="userName"]').type("userName")
    cy.get('input[name="password"]').type("password")
})*/

When("I login in as following", (datatable)=>{
      datatable.hashes().forEach(element => {
        cy.get('input[name="userName"]').type(element.userName)
        cy.get('input[name="password"]').type(element.password)
    });
})

Then("click on submit button",()=>{

    cy.get('input[name="submit"]').click()

    
})

And("verify title of the webpage",()=>{

    cy.title().should('eq','Welcome: Mercury Tours')

})


