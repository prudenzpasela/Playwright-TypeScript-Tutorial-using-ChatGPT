import { test } from '@playwright/test';
import { LoginPage } from '@pages/login.page';
import { ErrorType, loginNegativeCases } from '@utils/login.data';





test.describe('Login - negative scenarios', () => {

    test('Should show error for empty username',  {tag: ['@smoke', '@auth']}, async ({page}) => {

        const loginPage = new LoginPage(page);
        
        await loginPage.goto();
        await loginPage.login('', 'admin123');
        await loginPage.assertError('Required', 'field');

    });

    test('Should show error for empty password', {tag: ['@smoke', '@auth']}, async ({page}) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('Admin', '');
        await loginPage.assertError('Required', 'field');


    });

    test('Should show error for invalid password', {tag: ['@regression', '@auth']}, async ({page}) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('Admin', 'wrongpass');
        await loginPage.assertError('Invalid credentials', 'alert');


    });

    test('Should show error for invalid username', {tag: ['@regression', '@auth']}, async ({page}) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('wronguser', 'admin123');
        await loginPage.assertError('Invalid credentials', 'alert');


    });

});

    // for (const tc of loginNegativeCases) {
        
    //     test(tc.title, { tag: '@smoke' }, async ({page}) => {
    //         const loginPage = new LoginPage(page);

    //     await loginPage.goto();
    //     await loginPage.login(tc.username, tc.password);
    //     await loginPage.assertError(tc.error, tc.type);
    
    // });
    // }
