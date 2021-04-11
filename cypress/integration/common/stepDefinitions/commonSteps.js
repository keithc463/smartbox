import { Given } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../page/homepage/HomePage';
import pamperbox from '../../page/pamperbox/pamperbox';

const homePage = new HomePage();
const pamperPage = new pamperbox();
Given('I open the smartbox url', () => {
              cy.visit('https://www.smartbox.com/ie/');
});

Then( 'I verify title of web page as {string}', (title) => {
      cy.title().should('include', title);
} );

When( 'I click on the PamperTreats box', () => {
      homePage.clickPamperTreats();
} );

And( 'I click on the pamperbox add to cart button', () => {
      pamperPage.clickAddToCart();
} );

Then( 'I verify pamperbox added to cart', () => {
      pamperPage.verifyPamperAdded();
} );
