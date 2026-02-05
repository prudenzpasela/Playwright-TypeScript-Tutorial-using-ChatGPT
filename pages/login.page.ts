import { Page, Locator, expect } from '@playwright/test';


type ErrorType = 'alert' | 'field';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly alertError: Locator;
    readonly fieldError: Locator;

    
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });

        // two different error patterns
        this.alertError = page.getByRole('alert');
        this.fieldError = page.locator('.oxd-input-field-error-message');

    
    
    }

    async goto() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        
    }

    async assertError(expected: string, type: ErrorType) {
        if (type === 'alert') {
            await this.alertError.waitFor({state: 'visible', timeout: 10_000});
            await expect(this.alertError).toHaveText(expected);
        }
        else {
            await this.fieldError.waitFor({state: 'visible', timeout: 10_000});
            await expect(this.fieldError).toContainText(expected);
        }
    }

}




