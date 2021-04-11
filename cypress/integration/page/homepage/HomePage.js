var elements = require('./elements')
class HomePage {
  clickPamperTreats() {
    return cy.get(elements.HOMEPAGE.PamperTreats).click();
  }
  }
  export default HomePage;
