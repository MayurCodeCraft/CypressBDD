describe("Assertions",()=>{

    it("Test Assertions",()=>{

        //Implicit Assertions

        cy.visit("https://www.letskodeit.com/practice")
        cy.get("#checkbox-example-div").should("have.class","cen-align")
        cy.get('.collapse.navbar-collapse li[data-id="41189"] a').eq(0).should("have.attr","href","/courses").and("have.attr","target","_self")

       //Explicit Assertions

       cy.get('.collapse.navbar-collapse li[data-id="41189"] a').then(($test)=>{

        expect($test).to.have.attr("href","/courses")
       })

    })

})
