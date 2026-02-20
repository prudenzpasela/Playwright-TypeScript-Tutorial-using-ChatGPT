import { chromium, FullConfig } from '@playwright/test';
import { LoginPage } from '@pages/login.page';
import { ENV } from '../env'

async function globalSetup(config: FullConfig) {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    const login = new LoginPage(page);
    await login.goto();
    await login.login(ENV.E2E_USERNAME, ENV.E2E_PASSWORD);


// Verify login succeeded
await page.waitForURL('**/dashboard');

// Save aut state
await page.context().storageState({ path: 'storage/auth.json'});

await browser.close();
}

export default globalSetup;