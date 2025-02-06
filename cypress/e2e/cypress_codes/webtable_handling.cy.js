describe("Webtable Test Suite",()=>{

  
      it("testing webtable functionalities ", () => {

        cy.visit("https://testautomationpractice.blogspot.com")
        cy.get('table[name="BookTable"]').should('be.visible')

        //Any location value
        cy.get('table[name="BookTable"]').contains("td","Learn Selenium").should("be.visible")

        //Specific path value
        cy.get('table[name="BookTable"] tbody tr:nth-child(2) td:nth-child(1)').contains("Learn Selenium") 
        
        cy.get('table[name="BookTable"] tr td:nth-child(2)').each(($el,index,$list)=>{

           const author= $el.text()

           if(author.includes('Amod')){

               cy.get('table[name="BookTable"] tr td:nth-child(1)').eq(index)
               .then(function(name){
 
                 const bookname = name.text()
                 expect(bookname).to.eq("Master In Java")

               })

           }

        })

      })

})