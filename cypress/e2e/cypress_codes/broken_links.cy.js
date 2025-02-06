describe("Broken Links",()=>{

    it("Test the Broken Links",()=>{


        let brokenLinks=0;
        let activeLinks=0;

        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?")
        cy.get('a').each(($link,index)=>{
 


            const href =  $link.attr("href")
            if(href){

                cy.request({

                    url:href,
                    failOnStatusCode:false
                }).then((response)=>{

                    if(response.status>=400){

  
                        cy.log(`** Link ${index+1} is Broken Link ** ${href}`)
                        brokenLinks++;
                    }
                    else{
    
                        cy.log(`** Link ${index+1} is Active Link ** ${href}`)
                        activeLinks++;
                    }

               })

          }
            
 
        }).then(($links)=>{

            const totalLinks=$links.length
            cy.log(`** Total Links ** ${totalLinks}`)
            cy.log(`** Broken Links ** ${brokenLinks}`)
        })

    })

})
