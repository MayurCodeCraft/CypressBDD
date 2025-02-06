const testValue= require ('../fixtures/login.json')
describe("Login Automation",()=>{

    let data;
    cy.fixture('login').then((value)=>{

        data=value;
    })

it("Login into application",()=>{

    cy.visit("https://the-internet.herokuapp.com/login")
    cy.url().should('include','/login')

    cy.get('input[name="username"]').type()
    cy.get('input[name="password"]').type()

})

})