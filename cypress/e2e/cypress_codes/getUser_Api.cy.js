describe("Test Suite for Api test",()=>{

    it("Test the Get method",()=>{

          cy.request({

              method:"GET",
              url:"https://gorest.co.in/public/v2/users",
              headers:{

                'authorization' : "Bearer be36e0957957cc12cf6eb3bdda5dabd9ba93be494dda16f115404b6d42c5c03b"
              }

          }).then((response)=>{

            expect(response.status).to.eq(200);
            expect(response.body[1].name).to.contain("Sarvin Reddy")
          })

    })

    it("verify get request",()=>{

       cy.request("https://reqres.in/api/users/2").then((response=>{

        expect(response.status).to.eq(200)
        expect(response.body.data.first_name).to.eq("Janet")
       // expect(response.body[1].country).to.contain("Brazil")

       // expect(response.body.data.id).to.have.property(2)

       }))
    })

    it.only("verify get request",()=>{

      cy.request("https://reqres.in/api/users/2").its('status').should('eq',200);

      })

})