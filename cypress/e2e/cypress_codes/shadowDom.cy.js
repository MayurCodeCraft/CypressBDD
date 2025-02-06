describe("Shadow Dom Test Suite",()=>{

    it("Shadow properties", () => {

        //Shadow Properties

         cy.visit("https://books-pwakit.appspot.com")

          cy.get('book-app').shadow()
          .find('input[aria-label="Search Books"]')
          .type("Software Test") 
        
          //img[src^="images"]

    })

})