const { faker } = require('@faker-js/faker')
import { slowCypressDown } from 'cypress-slow-down'

import 'cypress-slow-down';
import customCommandsLogin from '../../page-object-model/custom-commands-login'
let fakerEmail = faker.internet.email()
let fakerPassword = faker.internet.password()
let fakerName = faker.name.firstName()
slowCypressDown(false)

describe('Slow down kullanımı Kullanımı', () => {
    it('slow down örnek test', () => {
        // cy.slowDown(3000); // ! Reasearch this
        cy.visit('https://automationexercise.com/login')

        customCommandsLogin.userNameField.type(fakerEmail)
        customCommandsLogin.passwordField.type(fakerPassword)
        customCommandsLogin.loginBtn.click()
        // cy.slowDownEnd()
    });
    it('slow down ile örnek test - 2', () => {
        cy.visit('https://automationexercise.com/login')

        customCommandsLogin.userNameField.type(fakerName)
        customCommandsLogin.passwordField.type(fakerPassword)
        customCommandsLogin.loginBtn.click()
        cy.get("input[data-qa='login-email'").invoke("prop", "validationMessage") // ! Research this
            .should('eq', `Lütfen e-posta adresine bir "@" işareti ekleyin. "${fakerName}" adresinde "@" eksik.`)
    });
})