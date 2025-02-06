//import payload from '../config/payload.json'
import payload from '../../config/payload.json'

describe("Test Suite for Api test",()=>{

function generateEmail(){

    const randomString = Math.random().toString(36).substring(2,10)
    const email=randomString+"@dispostable.com"

    return email;
}

    it("Test the Post method",()=>{

        let emailaddress = generateEmail()

        cy.log("*** Email Address is *** " + emailaddress)

          cy.request({

              method:"POST",
              url:"https://gorest.co.in/public/v2/users",
              headers:{

                'authorization' : "Bearer 16ad955d9ecdb9a727c05b3a365baea1b29cc8e0dcfc1aa864ec70dd84eb9210"
              },
              body:{

                        "name": "Max",
                        "email": emailaddress,
                        "gender": "male",
                        "status":"active"
              },failOnStatusCode: false

          }).then((response)=>{

            expect(response.status).to.eq(201);
            expect(response.body).has.property("name", "Max")
          //  expect(response.body).has.property("email","max1112@gmail.com")
            expect(response.body.id).to.not.be.null
          })

    })

    it("Test the Post method - Passing payload from outside",()=>{

            let emailaddress = generateEmail()

            let payload = {
    
                "name": "Max",
                "email": emailaddress,
                "gender": "male",
                "status":"active"
      }
    
            cy.log("*** Email Address is *** " + emailaddress)
    
              cy.request({
    
                  method:"POST",
                  url:"https://gorest.co.in/public/v2/users",
                  headers:{
    
                    'authorization' : "Bearer 16ad955d9ecdb9a727c05b3a365baea1b29cc8e0dcfc1aa864ec70dd84eb9210"
                  },
                  body:payload,
                  failOnStatusCode: false
    
              }).then((response)=>{
    
                expect(response.status).to.eq(201);
                expect(response.body).has.property("name", "Max")
              //  expect(response.body).has.property("email","max1112@gmail.com")
                expect(response.body.id).to.not.be.null
              })
    })


    it("Test the Post method - Passing data from fixtures",()=>{

        cy.log("Test by Passing data from fixtures")

               // let emailaddress = generateEmail()
       
                  cy.fixture('users').then((responseObject)=>{

                    responseObject.email = generateEmail()

                cy.log("*** Email Address is *** " + responseObject.email)
                  

                  cy.request({
        
                      method:"POST",
                      url:"https://gorest.co.in/public/v2/users",
                      headers:{
        
                        'authorization' : "Bearer 16ad955d9ecdb9a727c05b3a365baea1b29cc8e0dcfc1aa864ec70dd84eb9210"
                      },
                      body:responseObject,
                      failOnStatusCode: false
        
                  }).then((response)=>{
        
                    expect(response.status).to.eq(201);
                    expect(response.body).has.property("name", "Max")
                    expect(response.body.id).to.not.be.null
                  })

            })
     })

   it("Test the Post method - Passing data from config file",()=>{

        cy.log("Test by Passing data from config file")

               // let emailaddress = generateEmail()
       
            payload.email = generateEmail()

                cy.log("*** Email Address is *** " + payload.email)
                  

                  cy.request({
        
                      method:"POST",
                      url:"https://gorest.co.in/public/v2/users",
                      headers:{
        
                        'authorization' : "Bearer 16ad955d9ecdb9a727c05b3a365baea1b29cc8e0dcfc1aa864ec70dd84eb9210"
                      },
                      body:payload,
                      failOnStatusCode: false
        
                  }).then((response)=>{
        
                    expect(response.status).to.eq(201);
                    expect(response.body).has.property("name", "Max")
                    expect(response.body.id).to.not.be.null

                    let id = response.body.id

                    //Verifying data is created or not
                    cy.request({

                        method:'GET',
                        url:"https://gorest.co.in/public/v2/users/" + id,
                        headers:{
          
                          'authorization' : "Bearer 16ad955d9ecdb9a727c05b3a365baea1b29cc8e0dcfc1aa864ec70dd84eb9210"
                        },
                    }).then((response)=>{

                        expect(response.status).to.eq(200)
                        expect(response.body).has.property("name", "Max")
                        expect(response.body).has.property("gender","male")
                        expect(response.body.id).to.not.be.null

                        cy.log("*** Request checked successfully ***")
                    })
                  })

            })

    it("Test the Post method - for Negative Case || WRONG HEADER",()=>{

                cy.log("Test by Passing wrong header")
        
                       // let emailaddress = generateEmail()
               
                    payload.email = generateEmail()
        
                        cy.log("*** Email Address is *** " + payload.email)
                          
        
                          cy.request({
                
                              method:"POST",
                              url:"https://gorest.co.in/public/v2/users",
                              headers:{
                
                                'authorization' : "Bearer"
                              },
                              body:payload,
                              failOnStatusCode: false
                
                          }).then((response)=>{
                
                            expect(response.status).to.eq(401);
  
                          })
        
                    })

    it.only("Test the Post method - for Negative Case || WRONG Data",()=>{

                        cy.log("Test by Passing wrong data")
                
                               // let emailaddress = generateEmail()
                       
                            payload.email = null
                
                                cy.log("*** Email Address is *** " + payload.email)
                                  
                
                                  cy.request({
                        
                                      method:"POST",
                                      url:"https://gorest.co.in/public/v2/users",
                                      headers:{
                        
                                        'authorization' : "Bearer 16ad955d9ecdb9a727c05b3a365baea1b29cc8e0dcfc1aa864ec70dd84eb9210"
                                      },
                                      body:payload,
                                      failOnStatusCode: false
                        
                                  }).then((response)=>{
                        
                                    expect(response.status).to.eq(422);
          
                                  })
                
                            })
     })
    



    
