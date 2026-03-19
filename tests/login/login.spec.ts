import { test, expect } from '@playwright/test'
import { LoginPage } from '@pages/login.page';


test.describe('Login - Positive', () => {

    test('User lands on dashboard after login', {tag: ['@smoke', '@regression']}, async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('Admin', 'admin123');
        await expect(loginPage.dashboardHeader).toBeVisible({ timeout: 10000});

    });
});
