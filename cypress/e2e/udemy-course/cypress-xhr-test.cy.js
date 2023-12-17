describe('XHR Test', () => {
    it.only('cy.request - 1', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(500)
            expect(response).to.have.property('headers')
        })
    });

    it('cy.request - 2', () => {
        cy.request({
            url: 'https://jsonplaceholder.cypress.io/comments',
            method: 'GET'
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(500)
            expect(response).to.have.property('headers')
        })
    });
    it('cy.request - 3', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments')
            // .its('headers')
            // .its('content-type')
            // .should('include','application/json')
            .its('status')
            .should('eq', 200)
    });

    it('cy.intercept kullanımı', () => {
        cy.intercept('GET', 'https://jsonplaceholder.cypress.io/comments').as('abc') //Method , Url
        // cy.visit('') // URL
        // cy.get('#loginbutton').click()
        // cy.get('#username').type('deneme')
        // cy.get('#password').type('test')
        // cy.get('#btn').click()
        // cy.wait('@abc')
    });
})