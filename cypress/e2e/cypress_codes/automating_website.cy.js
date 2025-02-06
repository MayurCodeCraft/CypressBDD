//import testdata from "cypress\fixtures";

describe("Automation Testing Practice Suite",()=>{


    let testdata;

    beforeEach(()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")

    })

       
    it("Testing the webpage title and url",()=>{

         cy.url().should('include','https://testautomationpractice.blogspot.com/')
         cy.xpath('//h1[@class="title"]').contains("Automation Testing Practice")
     
    })


    it("Testing the search box",()=>{

        cy.get(".wikipedia-search-input").should("exist")
        cy.get(".wikipedia-search-button").click().then((response)=>{

            cy.xpath('//div[@id="Wikipedia1_wikipedia-search-results"]').contains("Please enter text to search.")
        })

        cy.get(".wikipedia-search-input").type("Google")
        cy.get(".wikipedia-search-button").click()
    })

    
    it("Validate the GUI Elements ",()=>{

        cy.get('input[id="singleFileInput"]').selectFile("C:\\Users\\Ujwal\\Desktop\\test.txt")

    })

    it("Validate the shadow element",()=>{


        cy.get(".foot.section #shadow_host").should("be.visible")
        cy.get(".foot.section #shadow_host").shadow().find('input[type="file"]').selectFile("C:\\Users\\Ujwal\\Desktop\\test.txt")
    })

    it("Validate the Drag-Drop functionality",()=>{


        cy.get('div[id="draggable"]').drag('div[id="droppable"]',{ force: true })
        cy.get('div[id="droppable"]').contains("Dropped!").should('have.css','color','rgb(119, 118, 32)')

    })

    it("Validate the Scroll functionality",()=>{


        cy.contains("Item 2").scrollIntoView().should('be.visible')

    })

    it.only("Validate the Mouseover functionality",()=>{


        cy.get('button[class="dropbtn"]').trigger('mouseover')
        cy.get('button[class="dropbtn"]').invoke('show')

    })


    it("Validate the Popups functionality",()=>{


        cy.get('button[id="alertBtn"]').click()
        cy.on("window:alert",((response)=>{

            expect(response).to.eq("I am an alert box!")
       }))

       cy.xpath('//button[@id="confirmBtn"]').click()
       cy.on("window:confirm",confirmmsg=>{

        expect(confirmmsg).to.eql("Press a button!")

       })

       cy.window().then(p=>{

        cy.stub(p,"prompt").returns("Harry Potter")
        cy.get('button[id="promptBtn"]').click()
        cy.get('p[id="demo"]').contains("Hello Harry Potter! How are you today?")
       })

    })


    it("Validate the Footer Links ",()=>{

        let brokenLinks = 0;
        let activeLinks = 0;

        cy.get("div.widget.PageList .widget-content ul a").should("exist")
        cy.get("div.widget.PageList .widget-content ul a").each(($el,index,$list)=>{



             const href =  $el.attr("href")

             if(href){

                cy.request({

                   url:href,
                   failOnStatusCode:false
                }).then((response)=>{

                    if(response.status>=400){

                        cy.log(`** Link ${index+1} is broken ${href}`)
                        brokenLinks++

                    }else{

                        cy.log(`Links is ${index+1} is active ${href}`)
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

    it("Validate the Broken Links ",()=>{

        let brokenLinks = 0;
        let activeLinks = 0;

        cy.get("#broken-links a").should("exist")
        cy.get("#broken-links a").each(($el,index,$list)=>{



             const href =  $el.attr("href")

             if(href){

                cy.request({

                   url:href,
                   failOnStatusCode:false
                }).then((response)=>{

                    if(response.status>=400){

                        cy.log(`** Link ${index+1} is broken ${href}`)
                        brokenLinks++

                    }else{

                        cy.log(`Links is ${index+1} is active ${href}`)
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




    it.skip("Validate the GUI Elements ",()=>{

     /*   cy.fixture('login.json').then((value)=>{

            testdata=value;
        }) */

        cy.get('input[placeholder="Enter Name"]').type("Max")
        cy.get('input[placeholder="Enter EMail"]').type("max@gks.com")
        cy.get('input[placeholder="Enter Phone"]').type("987654321")
        cy.get('#textarea').type("Mumbai")
        cy.get('.form-check-input[type="radio"]').eq(0).check()
        cy.get('.form-check.form-check-inline input[type="checkbox"]').check(['Sunday','Monday'])



   })

})