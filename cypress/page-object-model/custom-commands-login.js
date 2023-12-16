class CustomCommandsLogin{
    get userNameField(){
        return cy.get('input[data-qa="login-email"]') // Field değişti ise direk buradan müdahile edilebilir
    }
    get passwordField(){
        return cy.get('input[name="password"]')
    }
    get loginBtn(){
        return cy.get('button[data-qa="login-button"]')
    }
}

export default new CustomCommandsLogin() 