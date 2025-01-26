import loginPage from '../pageObjects/loginPage';
import inventoryPage from '../pageObjects/inventoryPage';
import checkoutPage from '../pageObjects/checkoutPage';
import basePage from '../core/basePage';

import { Given, When, Then,} from "@wdio/cucumber-framework";
import { expect } from 'chai';

Given('user is signed into the Swag Lab', async () => {
    await basePage.openPage();
    const title = await loginPage.getPageTitle();
    expect(title).to.include('Swag Labs', 'Page title should include "Swag Labs"');
    await loginPage.login('standard_user', 'secret_sauce');
});
    
When('user adds an item to the cart', async () => {
    const itemPrice = await inventoryPage.getItemPrice();
    expect(itemPrice).to.equal('$29.99');
    await inventoryPage.addItemToCart();
});

When('user checks the cart', async () => {
    await inventoryPage.goToCart();
});

When('user removes the item from the cart', async () => {
    await inventoryPage.removeItem();
});
        
        
Then('user should see and an empty cart', async () => {
    expect(await inventoryPage.emptyCartContents.isDisplayed()).to.be.true;
});
        

