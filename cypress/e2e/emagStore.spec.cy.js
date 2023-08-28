describe('template spec', () => {
  it('Add item and accessory', () => {
    cy.visit('https://www.emag.ro/');
    cy.get('button[class*="js-accept"]').click();
    // cy.get('[data-section="loading"]').should('be.visible');
    cy.get('[class*="js-dismiss-login-notice-btn"]').click();

    // Do a search after an item
    cy.get('[name="query"]').type("Televizor");
    cy.get('[data-section="loading"]').should('be.visible');
    cy.get('button[class="btn btn-default searchbox-submit-button"]').click();
    cy.url().should('eq', 'https://www.emag.ro/search/Televizor?ref=effective_search');
    cy.get('[type="submit"][data-offer-id="102545610"]').should('be.visible');

    cy.wait(3000)
    // Add to cart the first element TV
    cy.get('[type="submit"][data-offer-id="102545610"]').click();
    
    // // cy.get('[class="modal-header"]').should('be.visible');
  });
  
});
