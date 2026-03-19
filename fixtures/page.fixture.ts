import {test as base } from '@fixtures/base.fixture';
import { LoginPage } from '@pages/login.page';

type Pages = { 
    loginPage: LoginPage; 
};

export const test = base.extend<Pages>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    }
});