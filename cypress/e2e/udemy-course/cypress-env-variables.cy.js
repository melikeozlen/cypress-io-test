describe('Cypress Env Variables', () => { 
    it('Ortam değişkenlerinin kullanım örneği', () => {
        cy.visit(Cypress.env('amazon'))
    });
 })