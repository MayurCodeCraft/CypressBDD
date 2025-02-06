describe("Test Suite for Api test", () => {

    it("Using custom commands", () => {

        let payload = {
            "name": "Max",
            "email": "max454@gmail.com",
            "gender": "male",
            "status": "active"

        }


        cy.postAPI(payload).then((response) => {

            expect(response.status).to.eq(201)

            let userId = response.body.id


            cy.getAPI(userId).then((response)=>{

                expect(response.status).to.eq(200)
            })

            cy.putAPI(userId).then((response) => {

                expect(response.status).to.eq(200)

            })

            cy.deleteAPI(userId).then((response) => {

                expect(response.status).to.eq(204)

            })


        })
    })

})