describe("Multi-Country Application",()=>{

    const country_code = ['/ae/','/uk/','/ca/','/in/']

    it("Test application behaviour for multi-country",()=>{

   
        country_code.forEach((country)=>{

            cy.visit(`https://www.apple.com${country}`)
            cy.url().should('include',country)


            //Verifying the country name in the footer
            cy.verifyCountry(country).then((text)=>{

                cy.get('[title="Choose your country or region"]').should('have.text',text)
            })

        })

  
    })
})