
describe('template spec', () => {
  it('Add item and accessory', () => {
    cy.visit('https://www.emag.ro/')
    cy.get('button[class*="js-accept"]').click()
    // Do a search after an item
    cy.get('[name="query"]').click().type("Televizor")
    cy.get('button[class="btn btn-default searchbox-submit-button"]').click()
    // Add to cart the first element TV
    cy.get('button[type="submit"]:eq(1)').click()
    // cy.get('[class="modal-header"]').should('be.visible');
    // cy.get('[aria-label="Inchide"]').click()
    // Add accesory based on manufacturer and to have minimum 3 stars
  })
 
})

// Application under test: use any shopping site
// Scenario: Add to cart the following items: a TV and an accessory for the TV (your choice). Both
// the TV and accessory should have: the same manufacturer, a rating of minimum 3 stars. The TV
// should be the most expensive one from the category you selected (LED, OLED, LCD, etc). The
// accessory should have the minimum price from the category you selected.