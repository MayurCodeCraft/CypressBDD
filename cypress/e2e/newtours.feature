Feature: New Tours App

Background: 

Given open newtours application

Scenario: Home Page 

#Given open newtours application
#When provide valid 'mercury' and 'mercury'
When I login in as following
| userName | password |
| mercury  | mercury  |
Then click on submit button

@regression
Scenario: App Page 

When I login in as following
| userName | password |
| mercury  | mercury  |
Then click on submit button










And verify title of the webpage
