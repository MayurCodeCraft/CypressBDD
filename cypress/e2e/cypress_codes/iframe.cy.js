describe("iframe Test Suite",()=>{

    it("iframe properties", () => {


            cy.visit("https://www.letskodeit.com/practice")
            cy.get('#courses-iframe').then((iframedata)=>{

            cy.wrap(iframedata.contents().find('body')).as('iframe')
            cy.get('@iframe').find('.form-control[id="search"]').type("Cypress.io")
            cy.get('@iframe').find('.find-course').click()


           //OR


           // const idata = iframedata.contents().find('body')
           // cy.wrap(idata).as('iframe')

         })

        })


    it.only("check the ifrajme for heroku app",()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.get('div[aria-label="Close"]').click()
        cy.get('#mce_0_ifr').then(($iframe)=>{
        const iframebody = $iframe.contents().find('body') 

          cy.wrap(iframebody).type("Checking Iframe")
        })
      })
    })

