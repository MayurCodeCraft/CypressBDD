describe("Dynamic Dropdown",()=>{

it("Test Dynamic Dropdown",()=>{

    cy.visit("https://paytm.com/", {  headers: { "Accept-Encoding": "gzip, deflate" } })

    cy.get('span[id="srcCode"]').click()//
    cy.get('#text-box').clear()


    })
})
