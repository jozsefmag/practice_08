Feature: User interacts with items
 
 @add_item
 Scenario: User adds item to a cart and finishes the shopping
  Given user is signed in the Swag Lab page
  When user adds a 29.99$ item to the cart
  And user check the cart content
  And user goes to the checkout
  And user enters valid personal information
  Then user should see the items and prices in Checkout: Overview screen
  And user should finish the shopping process
 
 @remove_item
 Scenario: User removes item from a cart
  Given user is signed into the Swag Lab
  When user adds an item to the cart
  And user checks the cart
  And user removes the item from the cart
  Then user should see and an empty cart