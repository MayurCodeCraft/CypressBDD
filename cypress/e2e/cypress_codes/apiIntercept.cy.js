describe("Intercept Api",()=>{

    it("Test Api with Intercept stubbing",()=>{

        cy.visit("https://jsonplaceholder.typicode.com/")
        cy.intercept({

           path: "/posts"

        }).as("posts")

        cy.get('table:nth-of-type(1) a[href="/posts"]').click()

        cy.wait('@posts').then(response=>{

            cy.log(JSON.stringify(response))
        })

    })

    it("Mocking with Intercept test",()=>{

            cy.visit("https://jsonplaceholder.typicode.com/")
            cy.intercept('GET','/posts',{totalpost:5}).as("posts")
    
            cy.get('table:nth-of-type(1) a[href="/posts"]').click()
    
           
    })

    it.only("Mocking Ap test",()=>{

        cy.visit("https://dummyapi.io/explorer")
        cy.intercept({

            path:"data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10"
        }).as('comments')

        cy.contains("Comments List").click()
        cy.wait('@comments',{ timeout: 10000 }).then(intercept=>{

            expect(intercept.response.body.limit).equal(10)
        })
    })
})