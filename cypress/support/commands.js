// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('cypress-xpath');
require('cypress-iframe');
require('@4tw/cypress-drag-drop')

Cypress.Commands.add("login", (username, password) => {

    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').should('be.visible').click();
})

Cypress.Commands.add('verifyCountry', (country_code) => {

    switch (country_code) {

        case '/in/':

            return 'India'

        case '/uk/':

            return "United Kingdom"

        case '/ae/':

            return 'United Arab Emirates'

        case '/ca/':

            return 'Canada (English)'

        default:

            return 'United Arab Emirates'


    }
})


Cypress.Commands.add('getAPI', (pathparam) => {

    cy.request({

             method:"GET",
             url:"https://gorest.co.in/public/v2/users/" + pathparam,
             headers:{
                'authorization' : "Bearer 16ad955d9ecdb9a727c05b3a365baea1b29cc8e0dcfc1aa864ec70dd84eb9210"
               }

    })

})

Cypress.Commands.add('postAPI',(payload)=>{

    cy.request({

        method:"POST",
        url:"https://gorest.co.in/public/v2/users",
        headers:{
            'authorization' : "Bearer 16ad955d9ecdb9a727c05b3a365baea1b29cc8e0dcfc1aa864ec70dd84eb9210"
           },
        body:payload,
        failOnStatusCode:false
    })
})

Cypress.Commands.add('putAPI',(pathparam)=>{

    cy.request({

        method:"PUT",
        url:"https://gorest.co.in/public/v2/users/" + pathparam,
        headers:{
            'authorization' : "Bearer 16ad955d9ecdb9a727c05b3a365baea1b29cc8e0dcfc1aa864ec70dd84eb9210"
           }
    })
})

Cypress.Commands.add('deleteAPI',(pathparam)=>{

    cy.request({

        method:"DELETE",
        url:"https://gorest.co.in/public/v2/users/" + pathparam,
        headers:{
            'authorization' : "Bearer 16ad955d9ecdb9a727c05b3a365baea1b29cc8e0dcfc1aa864ec70dd84eb9210"
           }
    })
})