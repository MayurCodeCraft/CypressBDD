Feature: OrangeHRM Login Test

Background: 

Given Launch Orange HRM application url

Scenario: Login to Orange HRM App with valid credentials

  When User enter the valid userName
  And User enter the valid password
  Then click on the login button
  And verify login is successful

Scenario: Login to Orange HRM App with valid credentials by parameterization
  #Given Launch Orange HRM application url
  When User enter the valid userName "Admin"
  And User enter the valid password "admin123"
  Then click on the login button
  And verify login is successful

  
Scenario: Login to Orange HRM App with Invalid credentials by parameterization
  #Given Launch Orange HRM application url
  When User enter the invalid userName "Adm"
  And User enter the valid password "admin123"
  Then click on the login button
  And verify login the error message "Invalid credentials"

Scenario: Login to Orange HRM App with fixtures

  When User enter the credentials and click on login button
  And verify login is successful

Scenario: Login to Orange HRM App with commands files

  When User enter the credentials and click on login button through commands
  And verify login is successful

Scenario: Login to Orange HRM App with xpath 

  When User enter the valid xpath userName "Admin" 
  And User enter the valid xpath password "admin123"
  Then click on the login button
  And verify login is successful