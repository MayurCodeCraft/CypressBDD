import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given("Launch yatra website application url",()=>{

    cy.visit("https://www.yatra.com", {headers: {"Accept-Encoding": "gzip, deflate"}})
})

Given("Launch kodeit website",()=>{

    cy.visit("https://www.letskodeit.com/practice");
})

Given("Launch the apple website and Check the multi-country function",()=>{


    const country_code=['/ae/','/uk/','/in/']

    country_code.forEach((country)=>{

       cy.visit(`https://www.apple.com${country}`)
       cy.url().should('include',country)

  
    })
})

Then("User check the hyperlink",()=>{

    cy.get("#opentab").should("exist")
    .and("have.attr","href","https://www.letskodeit.com/courses")
    
})

//Invoking the 

Then("invoke and remove the target",()=>{

     cy.get("#opentab").invoke("removeAttr","target").click()
   // cy.get("#opentab").invoke("attr","target","_self").click()
    cy.url().should("include",'/courses')
    
})

Then("select the dropdown list",()=>{

    cy.get("#multiple-select-example").select(['apple','peach'])
    cy.screenshot()
    
})

Then("check the elements in the iframe",()=>{

    //cy.frameLoaded("#courses-iframe").should('exist')
    cy.iframe("#courses-iframe").find('a[href^="/courses/javascript"]').click();


  // cy.iframe('#courses-iframe').then($iframe => {
    // Wait for the iframe to load completely
    //cy.wrap($iframe).find('a[href^="/courses/javascript"]').should('be.visible').click();
  //});
})

And("check the footer links",()=>{

    cy.get('.block.footer-style.parrot.zenstyle[data-uniqid="1577353003540"] li a').should("have.length",10)
})

And("check the mouseover event",()=>{

    cy.get("#mousehover").invoke('show')
})

And("check the web table element",()=>{

    cy.get("fieldset>.table-display").should("be.visible")
    cy.contains("td","Python Programming Language")
})

And("check the alert event",()=>{

    cy.get("#alertbtn").click()
    cy.on('window:alert',(str)=>{
        expect(str).to.equal("Hello , share this practice page and share your knowledge");
    })
})

Then("perform the broken links check",()=>{

    let brokenLinks=0;
    let activeLinks=0;

   cy.get('a').each(($link,index)=>{

    const href= $link.attr('href')
    if(href){

        cy.request({url:href,failOnStatusCode:false}).then((response)=>{

             if(response.status>=400){

                cy.log(`***** Link ${index + 1} is Broken Link *** ${href}` )
                brokenLinks++;
             }

             else{

                cy.log(`*** Links ${index + 1} is Active Link ***`)
                activeLinks++;
             }

        })   
    }


   }).then(($links)=>{

    const totalLinks = $links.length
    cy.log(" *** total links *** ${totalLinks}")
    cy.log(" *** broken links *** ${brokenLinks}")
    cy.log(" *** active links *** ${activeLinks}")
   })

})