describe("Alert PopUps Test Suite",()=>{

    it("Alert properties", () => {


            cy.visit("https://www.letskodeit.com/practice")
          ///  cy.get("#alertbtn").click()
            cy.on("window:alert",alerttext=>{

                expect(alerttext).to.eql("Hello , share this practice page and share your knowledge")
            })

            cy.get("#alertbtn").click()

         })

  
         it.only("Alerts and confirm Herokuapp",()=>{

            cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
            cy.contains("Click for JS Alert").click()
            cy.on("window:alert",alextmsg=>{

                expect(alextmsg).to.eql("I am a JS Alert")

            })

            //To assert for confirm popup

            cy.xpath('//button[@onclick="jsConfirm()"]').click()
            cy.on("window:confirm",confirmmsg=>{

                expect(confirmmsg).to.eql("I am a JS Confirm")
                
            })


           //To assert and click on cancel button

            cy.on("window:confirm",confirmmsg=>{
            
                return false
                
            })
            cy.xpath('//button[@onclick="jsConfirm()"]').click()
            cy.xpath('//p[@id="result"]').should("have.text","You clicked: Cancel")
         

             //To assert prompts

             cy.window().then(p=>{

                cy.stub(p,"prompt").returns("Computer technologies")
                cy.xpath('//button[@onclick="jsPrompt()"]').click()
                cy.get('p[id="result"]').contains("You entered: Computer technologies")
             })

    })
  
})
