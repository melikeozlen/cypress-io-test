/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
import customCommandsLogin from "../page-object-model/custom-commands-login"

Cypress.Commands.add('login', (usename, password) => {

    customCommandsLogin.userNameField.type(usename)
    customCommandsLogin.passwordField.type(password)
    customCommandsLogin.loginBtn.click()

})

Cypress.Commands.add('loginWidthSession', (userName, password) => {
    cy.session([userName, password]) //browserı kapatıp açmadığın sürece hep geçerli olacak
    cy.visit('')
    cy.contains('Sign in').click() // Sign in varsa tıklşa
    cy.get('email').type(userName) // sayfada ki alanlara eriş 
    cy.get('password').type(password)
    cy.get('btn').click() // giriş butonuna eriş ve tıkla
})