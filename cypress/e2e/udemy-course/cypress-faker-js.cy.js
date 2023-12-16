const {faker} = require('@faker-js/faker')

let fakerEmail = faker.internet.email()
let fakerPassword = faker.internet.password()
let fakerName = faker.name.firstName()

import customCommandsLogin from '../../page-object-model/custom-commands-login'
describe('FakerJs Kullanımı', () => {
    it('Fakerjs örnek', () => {
        cy.visit('https://automationexercise.com/login')

        customCommandsLogin.userNameField.type(fakerEmail)
        customCommandsLogin.passwordField.type(fakerPassword)
        customCommandsLogin.loginBtn.click()
    });
    it('Fakerjs örnek wrong mail type', () => {
        cy.visit('https://automationexercise.com/login')

        customCommandsLogin.userNameField.type(fakerName)
        customCommandsLogin.passwordField.type(fakerPassword)
        customCommandsLogin.loginBtn.click()
        cy.get("input[data-qa='login-email'").invoke("prop", "validationMessage") // ! Research this
        .should('eq', `Lütfen e-posta adresine bir "@" işareti ekleyin. "${fakerName}" adresinde "@" eksik.`)
    });
})