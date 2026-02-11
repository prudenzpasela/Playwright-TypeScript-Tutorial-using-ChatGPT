import { test, expect } from '@playwright/test'
import { LoginPage } from '@pages/login.page'
import { ENV } from '../../env'

test.describe('Login - Positive', () => {

    test('Should be able to login', {tag: ['@smoke', '@regression']}, async ({page}) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(ENV.USERNAME, ENV.PASSWORD); 
        await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();

    });

    test('Environment sanity check', async () => {
        console.log(`environment name: ${ENV.ENV_NAME}`);
    })
});
