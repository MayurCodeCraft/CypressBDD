describe("iframe Test Suite",()=>{


  before(()=>{

    cy.visit("https://www.letskodeit.com/practice")

  })


    it("iframe properties", () => {


           
            cy.get('#courses-iframe').then((iframedata)=>{

            cy.wrap(iframedata.contents().find('body')).as('iframe')
            cy.get('@iframe').find('.form-control[id="search"]').type("Cypress.io")
            cy.get('@iframe').find('.find-course').click()


           //OR

           // const idata = iframedata.contents().find('body')
           // cy.wrap(idata).as('iframe')

         })

       })
    Cypress._.times(2,(k)=>{

      it.only("iframe properties via plugin", () => {

        cy.frameLoaded("#courses-iframe")  
        cy.iframe().find('//h4[contains(text(),"Cypress.io")]').click()

       })

    })


  })


      

