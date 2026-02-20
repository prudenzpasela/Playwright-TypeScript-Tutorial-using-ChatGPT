import { test, expect } from '../../fixtures/auth.fixture';

test('Dashboard loads for logged-in user', async ({ authenticatedPage }) => {
    await expect(authenticatedPage.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});