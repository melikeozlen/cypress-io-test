describe('Before After Kullanım', () => {
    
    beforeEach(()=>{ // ! describe içinde bulunan her bir it'ten önce
        cy.log("BeforeEach kullanımı cypress test")
       cy.visit("http://localhost:5173/") // yeniden sayfa yükleniyor her it'ten önce
    })
    afterEach(()=>{ // ! describe içinde bulunan her bir it'ten sonra
        cy.log("AfterEach Kullanımı için örnek")
    })
    it('Texti doğrula', () => {
        cy.get('.read-the-docs').should('be.visible').and('contain', 'Click')
    });
    it('Url doğrula', () => {
        cy.url().should('include', '/')
    });
});