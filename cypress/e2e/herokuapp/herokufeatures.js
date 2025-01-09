import {Given, When, Then ,And} from "cypress-cucumber-preprocessor/steps"

Given('Visit the Heroku website',()=>{

    cy.visit("https://www.hyrtutorials.com/p/frames-practice.html")
})

Then("Fill the details",()=>{
    
    cy.get('.tox-notification__dismiss').click()
    cy.frameLoaded('.example')
})