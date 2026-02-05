import { test } from '@playwright/test';
import { LoginPage } from '@pages/login.page';
import { ErrorType, loginNegativeCases } from '@test-data/login.data';

test.describe.serial('login - negative test cases', () => {
    for (const tc of loginNegativeCases) {
        
        test(tc.title, { tag: '@smoke' }, async ({page}) => {
            const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(tc.username, tc.password);
        await loginPage.assertError(tc.error, tc.type);
    
    });
        }
});