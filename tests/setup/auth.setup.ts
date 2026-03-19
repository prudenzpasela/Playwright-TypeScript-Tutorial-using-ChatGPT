import { chromium } from '@playwright/test';
import { LoginPage } from '@pages/login.page';
import { requireEnv } from '@utils/env';

const authFile = 'playwright/.auth/user.json';

async function globalSetup(){

    const browser = await chromium.launch();
    const page = await browser.newPage();

    const loginPage = new LoginPage(page);

    const baseURL = requireEnv('E2E_BASE_URL');
    const username = requireEnv('E2E_USERNAME');
    const password = requireEnv('E2E_PASSWORD');

    console.log('BASE_URL:', baseURL);

    await page.goto(`${baseURL}/web/index.php/auth/login`);

    await loginPage.login(username, password);

    await page.context().storageState({ path: authFile });

    await browser.close();
}

export default globalSetup;