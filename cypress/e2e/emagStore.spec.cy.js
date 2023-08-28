describe('template spec', () => {
  it('Add item and accessory', () => {
    cy.visit('https://www.emag.ro/');
    cy.get('button[class*="js-accept"]').click();
    
    // Do a search after an item
    cy.get('[name="query"]').click().type("Televizor");
    cy.get('button[class="btn btn-default searchbox-submit-button"]').click();
    cy.wait(3000)
    // Add to cart the first element TV
     cy.get('[type="submit"][data-offer-id="102545610"]').click();
    
    // // cy.get('[class="modal-header"]').should('be.visible');
    // // cy.get('[aria-label="Inchide"]').click();
  });
  
});
