import GenericFunctions from '../utils/genericFunctions';

describe('template spec', () => {
  it('Scenario 1', () => {
    cy.visit('https://airportlabs.com/')
    // Validate Software as a Service solution section
    GenericFunctions.assertTextValue('[class="w-layout-grid homepage-feature-1"] h2', 'Software as a Service solution incorporating latest cloud based technologies')
    GenericFunctions.assertTypeCssStyle('[class="w-layout-grid homepage-feature-1"] h2', 'font-size', '40px')
    GenericFunctions.assertTypeCssStyle('[class="w-layout-grid homepage-feature-1"] h2', 'color', 'rgb(255, 255, 255)')
  })
  it('Scenario 2', () => {
    cy.visit('https://airportlabs.com/')
    // Validate Activity in numbers section from the landing page 200k
    GenericFunctions.validateElementContainsText('[class="h2 green"]:eq(0)', 'text', '200k')
    GenericFunctions.assertTypeCssStyle('[class="h2 green"]:eq(0)', 'font-size', '40px')
    GenericFunctions.assertTypeCssStyle('[class="h2 green"]:eq(0)', 'color', 'rgb(82, 206, 147)')
  })
  it('Scenario 3', () => {
    cy.visit('https://airportlabs.com/')
    // Verify that you can use Get in touch section page "Contact" 
    cy.get('a[href="/other/contact"]:eq(1)').click()
    cy.url().should('eq', 'https://www.airportlabs.com/other/contact');
    // Complete the form
    cy.get('[data-name="Your Name"]').type('My name for Testing');
    cy.get('[data-name="Company Name"]').type('My Company is Testing Ionut');
    cy.get('[data-name="Email"]').type('test@gmail.com');
    cy.get('[data-name="Message"]').type('teeeest the message');
    cy.get('label [id="checkbox"]').scrollIntoView();
    cy.get('[class="button cookie w-inline-block"]').click()
    cy.get('input[type="checkbox"]').click({force: true});
    // cy.get('[class="button w-button"]').click()
    // Validate that the submit contact is working properly
    // I suggest that this selector / message to be hidden until the form is succesfully 
    GenericFunctions.assertTextValue('[aria-label="Contact Form success"]', 'Thanks for getting in contact with us!Our team is currently reviewing the details you have shared and respond to your inquiry promptly.')
  })
  it('Scenario 4', () => {
    cy.visit('https://airportlabs.com/')
    // Verify that social media links are redirecting correctly
    // Click SkyCore AODB
    cy.get('[id="w-tabs-0-data-w-pane-0"] a[href="/product-tours/skycore-aodb"]').click()
    cy.url().should('eq', 'https://www.airportlabs.com/product-tours/skycore-aodb');
    cy.get('[aria-label="home"]').click()
    
    // Click Community APP
    cy.get('[id="w-tabs-0-data-w-pane-0"] a[href="/product-tours/airport-community-app"]').click()
    cy.url().should('eq', 'https://www.airportlabs.com/product-tours/airport-community-app');
    cy.get('[aria-label="home"]').click()
  })
  it('Scenario 5', () => {
    cy.visit('https://airportlabs.com/')
    // Validate AirportLabs logo
    cy.get('img[src="https://uploads-ssl.webflow.com/621780e23ce4730dbde38ef2/6218c570693ffd35d9005f03_AL_Logo_White_Horizontal.svg"]').should('be.visible');
    GenericFunctions.assertTypeCssStyle('img[src="https://uploads-ssl.webflow.com/621780e23ce4730dbde38ef2/6218c570693ffd35d9005f03_AL_Logo_White_Horizontal.svg', 'width', '140px')
    GenericFunctions.assertTypeCssStyle('img[src="https://uploads-ssl.webflow.com/621780e23ce4730dbde38ef2/6218c570693ffd35d9005f03_AL_Logo_White_Horizontal.svg', 'height', '39.609375px')
  })
})

//  Application under test: https://airportlabs.com/
// Done - Scenario 1: Verify that the title from a section of your choosing from the landing page is correct (e.g. value, font size, style)
// Done - Scenario 2: Verify that the statistic from the Our Activity in numbers section from the landing page is correct (e.g. value, font size, style) (statistic is for example: 200k Users worldwide) This scenario is optional
// Done - Scenario 3: Verify that you can use Get in touch section
// Done - Scenario 4: Verify that social media links are redirecting user to the correct pages
// Done - Scenario 5: Verify that an image with the AirportLabs logo exists (or other image of your choice from the list of projects) Verify the following properties for the selected image: size, width and height. This scenario is optional
