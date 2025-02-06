describe("Test Suite for Api test",()=>{

    it("Test the Get method",()=>{

          cy.request({

              method:"PUT",
              url:"https://gorest.co.in/public/v2/users/7648852",
              headers:{

                'authorization' : "Bearer 16ad955d9ecdb9a727c05b3a365baea1b29cc8e0dcfc1aa864ec70dd84eb9210"
              },
              body:{

                "name":"Kevin",
                "email":"kevin@test.com"
              }

          }).then((response)=>{

            expect(response.status).to.eq(200);
            expect(response.body).has.property("name","Kevin")
          })

    })

})