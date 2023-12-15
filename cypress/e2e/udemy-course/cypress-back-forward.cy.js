describe('Back Forward Kullanımı', () => {
    it('We will go to the cypress.io page and learn the back and after commands.', () => {
        cy.visit('https://www.cypress.io/')
        cy.get('nav > div > ul > li:nth-child(5) > a').click()
        cy.title().should('eq', 'Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing')
        cy.go('back') // ana sayfaya dönecek // * 'back' == -1
        cy.title().should('eq','JavaScript Component Testing and E2E Testing Framework | Cypress')
        cy.go('forward') //  pricing // * 'forward' == 1
    });
});