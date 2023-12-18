import loginTestWithObject from "../../page-object-model/login-test-homework";

describe('Page Object Model Yapısınını kullanarak bir login sayfası testi', () => {

    beforeEach(()=>{
        cy.visit("https://automationexercise.com/login")
    })
    it('Alanlar sayfada doğru bir şekilde render edildi mi?', () => {
        loginTestWithObject.emailInput.should('be.visible')
        loginTestWithObject.passwordInput.should('be.visible')
        loginTestWithObject.loginBtn.should('be.visible').click()
        cy.get("input[data-qa='login-email'").invoke("prop", "validationMessage")
        .should('eq', `Lütfen bu alanı doldurun.`)
    });

    it('inValid LogOut', () => {
        loginTestWithObject.emailInput.should('be.visible').type('melike@gmail.com')
        loginTestWithObject.passwordInput.should('be.visible').type('1234')
        loginTestWithObject.loginBtn.should('be.visible').click()
        loginTestWithObject.isError()
    });

})