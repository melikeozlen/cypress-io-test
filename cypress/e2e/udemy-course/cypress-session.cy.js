describe('Session', () => { 
    beforeEach(()=>{
        const userName = "deneme@gmail.com"
        const password = 'deneme123'
        cy.loginWidthSession(userName, password)
    })
    it('Makale ekle', () => {
        cy.visit('...')
        cy.contains('New Post').click()
    });
 })