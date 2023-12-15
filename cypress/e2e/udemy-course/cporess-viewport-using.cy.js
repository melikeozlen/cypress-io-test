describe('Vieport Kullanımı', () => {

    // * config ekranından defauld ayar eklenebilir 
    
    it('viewport with number', () => {
        cy.viewport(1200,1000 );
        cy.visit('https://shopist.io/');
    });

    it('viewport with string', () => {
        cy.viewport('macbook-16');  
        // cy.viewport(3840, 2160); // * 4K
        // cy.viewport(1920, 1080, 'fullHD');
        cy.visit('https://shopist.io/');
    });
});