import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Aether/);
});

test('login form is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByPlaceholder('pilot@aether.net')).toBeVisible();
    await expect(page.getByPlaceholder('••••••••')).toBeVisible();
    await expect(page.getByRole('button', { name: /Connect/i })).toBeVisible();
});
