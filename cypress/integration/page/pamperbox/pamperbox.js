
var elements = require('./elements')
class pamperbox {
  clickAddToCart() {
    return cy.get(elements.pamperbox.CartButton).click();
  }
  verifyPamperAdded() {
        //matches partial text of result string
        return cy.get(elements.pamperbox.CartText).first().text().then(value => {
          cy.log("Text is :", value);
          expect(value).to.include("Pamper");
        });
      }
  }
  export default pamperbox;
