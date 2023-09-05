import GenericFunctions from "../utils/genericFunctions";

describe('template spec', () => {
  it('Add item and accessory', () => {
    cy.visit('https://www.emag.ro/');
    cy.get('button[class*="js-accept"]').click();
    // cy.get('[data-section="loading"]').should('be.visible');

    // Do a search after an item
    cy.get('[name="query"]').type("Televizor");
    cy.get('[data-section="loading"]').should('be.visible');
    cy.get('button[class="btn btn-default searchbox-submit-button"]').click();
    cy.url().should('eq', 'https://www.emag.ro/search/Televizor?ref=effective_search');
    cy.get('[class="card-v2-content"] button:eq(1)').click();

    
    // cy.get('[data-zone="thumbnail"]:eq(1)').click();
    // cy.get('[class="main-product-form"] button:eq(0)').click();

    // cy.contains('Adauga in Cos').click()
    // GenericFunctions.validateElementContainsText('[class="title-phrasing title-phrasing-xl"]','text', '"Televizor"');
   cy.wait(5000)
    // Add to cart the first element TV
    // cy.get('[type="submit"][data-offer-id="102545610"]').click();
    // GenericFunctions.validateElementContainsText('h4[class="mrg-sep-none"]','text', 'Produsul a fost adaugat in cos');

    
  });
});

// ce spec file