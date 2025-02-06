describe("Read-Write Files",()=>{

    it("write in a file",()=>{

        cy.writeFile("firstTest.txt","My Cypress Data \n");
        cy.writeFile("firstTest.txt","Hello to the world of cypress",{flag:"a+"});

        cy.writeFile("test.json",{name:"Messi",city:"Mumbai"})
        cy.writeFile("cypress/fixtures/testFile.json",{name:"Messi",city:"Mumbai"})

    })

    
    it.only("Read a file",()=>{

        cy.readFile("firstTest.txt").then((data)=>{

            cy.log("Data available is " + data)
        })

        cy.readFile("firstTest.txt").should('exist').and("contain","cypress");

    })
})