exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.userNameInput =  page.locator('[data-test="username"]');
        this.userPasswordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
    }

    async goToLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.userNameInput.fill(username);
        await this.userPasswordInput.fill(password);
        await this.loginButton.click();
    }
}