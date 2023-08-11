describe('Primeiro Teste', () => {

    beforeEach(() => {
        cy.visit('https://www.google.com/maps');
    });

    it('should search for a location on Google Maps', () => {

        // Accept cookies
        cy.get('div.VtwTSb form:nth-child(2)', { timeout: 5000 }).find('button').click();

        // Search for a location
        cy.get('#searchboxinput', { timeout: 5000 }).type('Dublin, Irlanda');
        cy.get('#searchbox-searchbutton').click();

        // Click on the directions button
        cy.get('.google-symbols.Cw1rxd', { timeout: 20000 }).first().click({ force: true });

        // Wait for the headline
        cy.get('input[aria-label="Destino Dublin, Irlanda"]').should('exist');

        // Assertion
        cy.get('input[aria-label="Destino Dublin, Irlanda"]').should('have.value', 'Dublin, Irlanda');
    });
});
