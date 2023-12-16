describe('Custom Commands', () => {
    beforeEach(()=>{
        cy.visit("https://automationexercise.com/login")
    })
    it('Custom commands kullanim örneği -invalid', () => {
        cy.login('deneme@abc.com', 'deneme')
    });
    it('Custom commands kullanim örneği -valid', () => {
        cy.login('deneme@gmail.com', 'deneme')
    });
})