import { Page, test as base } from '@playwright/test';
import { LoginPage } from '@pages/login.page';

export const test = base.extend<{ authenticatedPage: Page; }>({
    authenticatedPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        // Setup: Log in before using the page
        await loginPage.goto();
        await loginPage.login( process.env.E2E_USERNAME!, process.env.E2E_PASSWORD! );

        // Give page to test
        await use(page);
    },
});

export { expect } from '@playwright/test';