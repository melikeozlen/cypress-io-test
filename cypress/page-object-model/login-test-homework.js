class loginTestWithObject {
    navigate() {
        cy.visit('https://automationexercise.com/login');
    }
    get loginBtn() {
        return cy.get("button[data-qa='login-button']")
    }
    get emailInput() {
        return cy.get("input[data-qa='login-email']")
    }
    get passwordInput() {
        return cy.get("button[data-qa='login-button']")
    }
    isError(){
        cy.wait(3000)
        cy.get('div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > p:nth-child(4)').should('be.visible').should('have.text', 'Your email or password is incorrect!');

    }

}
export default new loginTestWithObject()