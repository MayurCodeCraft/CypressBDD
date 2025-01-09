Feature: OrangeHRM Login Test

Scenario Outline: Login to Orange HRM App with valid credentials by parameterization

  Given Launch Orange HRM application url
  When User enter the valid userName "<username>"
  And User enter the valid password "<password>"
  Then click on the login button
  And verify login is successful

  Examples:
  | username | password |
  |Admin     | admin123 |
  |Admin1    | admin123 |
