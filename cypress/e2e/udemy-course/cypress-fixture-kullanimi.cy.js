describe('Cypress Fixture Kullanimi', () => {
    beforeEach(() => {
        cy.visit("https://automationexercise.com/login")
        cy.fixture('loginData').as("credentials")  // * direk fizture klasörü içinde olduğu için bu şekilde kullanılabilir. Olmasaydı uzantıyı yazmamız gerekirdi
    })
    it('Cypress Fixture data kullanim örneği -invalid', () => {
        cy.get('@credentials').then((data) => {
            cy.login(data.inValidEmail, data.inValidPassword)
        })

    });
    it('Cypress Fixture data kullanim örneği -valid', () => {
        cy.get('@credentials').then((data) => {
            cy.login(data.validEmail, data.validPassword)
        })
    });
})