describe('Before After Kullanım', () => {
    before(()=>{ // ! HER BİR testten önce
        cy.log("Before kullanımı cypress test")
        cy.visit("http://localhost:5173/")
    })
    after(()=>{ // ! HER BİR testten sonra
        cy.log("After Kullanımı için örnek")
    })
    it('Texti doğrula', () => {
        cy.get('.read-the-docs').should('be.visible').and('contain', 'Click')
    });
});