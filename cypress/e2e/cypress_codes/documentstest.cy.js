describe("Documents Test Suite",()=>{

    it("Document Test commands - Title properties",()=>{

        //Documents Properties

        cy.visit("https://www.letskodeit.com/practice")
    
        cy.document().should(value => {

            const titletext =  value.title
            expect(titletext).to.eq("Practice Page")
             
        })

       })

       it("cypress Test commands - Title properties",()=>{

        //Documents Properties

        cy.visit("https://www.letskodeit.com/practice")
    
        cy.title().should(value => {

            expect(value).to.eq("Practice Page")
             
        })

       })

       it.only("cypress Test commands - Cookies properties",()=>{

        //Cookies Properties

        cy.visit("https://www.letskodeit.com/practice")
    
        cy.setCookie("username","Max")
        cy.getCookie("username")
        cy.setCookie("username","Maxyam")
        cy.getCookie("username")
        cy.clearCookie("username")

    

       })

    })


