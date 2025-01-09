
describe("Intercept Api",()=>{


    it.only("check page redirect on click by removing attribute",()=>{

        cy.visit("https://www.letskodeit.com/practice")
        cy.get("#opentab").invoke("removeAttr","target").click()
        cy.url().should('include','/courses')
       // cy.get("#opentab").invoke("attr","target","_blank").click()
    })


    it("page redirect",()=>{

        cy.visit("https://the-internet.herokuapp.com/redirector")
        cy.get('a[id="redirect"]').invoke('removeAttr','href').click({force:true})


        })
    })
