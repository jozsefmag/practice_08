Feature: User removes an item
 Scenario: User removes item from a cart
  Given user is signed into the Swag Lab
  When user adds an item to the cart
  And user checks the cart
  And user removes the item from the cart
  Then user should see and an empty cart