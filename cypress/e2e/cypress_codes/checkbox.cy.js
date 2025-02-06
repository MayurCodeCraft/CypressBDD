describe("Checkbox Test Suite",{viewportHeight:1280,viewportWidth:800},()=>{

    it("checkbox tests", () => {

          cy.visit("https://www.letskodeit.com/practice")
          cy.get("#bmwcheck").check()
          cy.get("div#checkbox-example-div label input").check(["benz","honda"])

    })

})