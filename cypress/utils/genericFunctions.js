
class GenericFunctions {

    /**
  * Validates if an element contains the expected text/value using Cypress assertions.
  *
  * @param {string} element - CSS selector of the element to validate.
  * @param {string} type - Type of validation, either 'text' or 'value'.
  * @param {string} expectedText - The expected text or value.
  */
    async assertTypeCssStyle(element, type, expectedText) {
        switch (type) {
            case 'font-size':
                cy.get(element).should('have.css', 'font-size', expectedText);
                break;
            case 'color':
                cy.get(element).should('have.css', 'color', expectedText);
                break;
            case 'width':
                cy.get(element).should('have.css', 'width', expectedText);
                break;
            case 'height':
                cy.get(element).should('have.css', 'height', expectedText);
                break;
            default:
                throw new Error(
                    'Wrong type provided. Please only use "text" and "value" as parameters.'
                );
        }
    }
    /**
     * Validates if an element contains the expected text/value using Cypress assertions.
     *
     * @param {string} element - CSS selector of the element to validate.
     * @param {string} type - Type of validation, either 'text' or 'value'.
     * @param {string} expectedText - The expected text or value.
     */
    async validateElementContainsText(element, type, expectedText) {
        switch (type) {
            case 'text':
                cy.get(element).should('have.text', expectedText);
                console.log(expectedText)
                break;
            case 'value':
                cy.get(element).should('have.value', expectedText);
                break;
            default:
                throw new Error(
                    'Wrong type provided. Please only use "text" and "value" as parameters.'
                );
        }
    }
}

export default new GenericFunctions();