describe('Hizli text yazdırma', () => {
    beforeEach(()=>{
        cy.visit('https://automationexercise.com/contact_us')
    })
    it('normal text yazdırma', () => {
        
        cy.get('#message').should('be.visible').type('Get the most recent updates fromour site and be updated your self... Get the most recent updates fromour site and be updated your self... Get the most recent updates fromour site and be updated your self... Get the most recent updates fromour site and be updated your self...Get the most recent updates fromour site and be updated your self... Get the most recent updates fromour site and be updated your self... ')
    });
    it('hızlı text yazdırma', () => {
        cy.get('#message').should('be.visible').type('Get the most recent updates fromour site and be updated your self... Get the most recent updates fromour site and be updated your self... Get the most recent updates fromour site and be updated your self... Get the most recent updates fromour site and be updated your self... Get the most recent updates fromour site and be updated your self... Get the most recent updates fromour site and be updated your self...',{delay:0})
    });
})