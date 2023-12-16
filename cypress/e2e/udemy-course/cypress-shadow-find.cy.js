describe('Shadow Find kullanımı', () => {
    before(() => {
        cy.on('uncaught:exception', (err, runnable) => { return false })
    })
    it('Shadow ve Find Kullanımı', () => { // ! Bu kısmı tekrar et
        cy.visit('https://www.mercedes-benz.co.uk/passengercars.html?group=all&subgroup=see-all&view=BODYTYPE');
        cy.get('cmm-cookie-banner[settings-id="fph8XBqir"]').shadow()
        .find('cmm-buttons-wrapper[class="hydrated"]')
        .find('[data-test="handle-accept-all-button"]')
        .should('be.visible').contains('Agree to all').click()
    });
})