import { test as base } from '@fixtures/page.fixture';
import { users } from '@utils/test-data';
import { Page } from '@playwright/test';

type AuthFixtures = {
    authPage: Page;
};

export const test = base.extend<AuthFixtures>({
    
    authPage: async ({ page, loginPage }, use) => {

        // Step 1: Go to login page
        await loginPage.goto();

        // Step 2: Perform login using your page object
        await loginPage.login(
            users.admin.username,
            users.admin.password
        );

        // Step 3:Give the logged-in page to the test
        await use(page);
    },
});

export { expect } from '@playwright/test';