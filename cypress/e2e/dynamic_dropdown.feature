Feature: kodeit application Check

Scenario: Visiting the kodeit site to check the app

  Given Launch kodeit website
  Then User check the hyperlink
  Then invoke and remove the target
  #And verify login is successful

#Given Launch kodeit  website application url
#When Perform the dropdown selection check

Scenario:Visit the apple site

Given Launch the apple website and Check the multi-country function
#Then Check the multi-country function


Scenario: Visiting the kodeit site to check the broken links

Given Launch kodeit website
#Then perform the broken links check
Then select the dropdown list
And check the footer links
And check the mouseover event
And check the web table element
And check the alert event

#Then check the elements in the iframe

