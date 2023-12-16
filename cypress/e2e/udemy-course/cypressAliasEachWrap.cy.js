describe('Alias, Then, Each, Wrap', () => {
    it('Kullanim Örneği', () => {
        let itemLength
        cy.visit("https://shopist.io/")
        cy.get('.navbar-section a').should('be.visible').as('NavbarMenus')

        cy.get('@NavbarMenus').then(($el) => {
            itemLength = $el.length
        }).each(($el, index) => {
            cy.log('Navbar Menu - ' + index + ' : ' + $el.text())
            if($el.text().includes('Cart')){
                cy.wrap($el).click()
            }
        })
    });
})