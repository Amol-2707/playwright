import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

const loginData = require ('../testData/loginData.json')

test('test', async ({ page }) => {

    const Login = new LoginPage(page);
    
    await Login.goToLoginPage()
    await Login.login(loginData.username, loginData.password);
});