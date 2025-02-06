describe("Test Bad Request",()=>{

    it("Test Bad Request ",()=>{

        cy.request({

            method:'GET',
            url:'https://reqres.in/api/unknown/23',
            failOnStatusCode:false
        }).then((response)=>{

            expect(response.status).to.eq(404)
        })

    })
})
