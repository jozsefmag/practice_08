import loginPage from '../pageObjects/loginPage';
import inventoryPage from '../pageObjects/inventoryPage';
import checkoutPage from '../pageObjects/checkoutPage';
import basePage from '../core/basePage';

import { Given, When, Then,} from "@wdio/cucumber-framework";
import { expect } from 'chai';

Given('user is signed in the Swag Lab page', async () => {
    await basePage.openPage();
    const title = await loginPage.getPageTitle();
    expect(title).to.include('Swag Labs', 'Page title should include "Swag Labs"');
    await loginPage.login('standard_user', 'secret_sauce');
});
    
When('user adds a 29.99$ item to the cart', async () => {
    const itemPrice = await inventoryPage.getItemPrice();
    expect(itemPrice).to.equal('$29.99');
    await inventoryPage.addItemToCart();
});

When('user check the cart content', async () => {
    await inventoryPage.goToCart();
});

When('user goes to the checkout', async () => {
    await inventoryPage.proceedToCheckout();
});
        
When('user enters valid personal information', async () => {
    await checkoutPage.fillPersonalInfo("John", "Doe", "4444");
});
        
Then('user should see the items and prices in Checkout: Overview screen', async () => {
    const itemName = await checkoutPage.getItemName();
    expect(itemName).to.equal("Sauce Labs Backpack", "Item name should match the expected value");

    const totalPrice = await checkoutPage.getTotalPrice();
    expect(totalPrice).to.include('$32.39', 'Total price should include $32.39');
});
        
Then('user should finish the shopping process', async () => {
    await checkoutPage.finishShopping();
    await checkoutPage.backToProducts();
    expect(await $('.app_logo').getText()).to.equal("Swag Labs");
});
