describe('Cypress Locator', () => {
    it('Html element locate', () => {
        cy.visit("http://localhost:5173/")
        cy.get('.card');
        cy.url().should('contain', 'loc')
        cy.title().should('include', 'Vite')
        cy.get('.read-the-docs').should('be.visible').and('contain', 'Click').and('have.text', 'Click on the Vite and React logos to learn more')
        // ! Research this -- start!
        // cy.get('.read-the-docs').its('length').and('eq', 47);
        // cy.get('.read-the-docs').should('be.visible').should('have.length', '47')
        // ! Research this -- end!
        cy.get('#root > div:nth-child(1) > a:nth-child(1)').should('have.attr', 'href', 'https://vitejs.dev') // * Implicit assertions

    });
});