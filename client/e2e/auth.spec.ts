import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Yapper/i);
});

test('login form is visible', async ({ page }) => {
    await page.goto('/');

    // Check for the "Resume Uplink" heading instead of just title
    await expect(page.getByRole('heading', { name: /Resume Uplink/i })).toBeVisible();

    await expect(page.getByPlaceholder('pilot@yapper.app')).toBeVisible();
    await expect(page.getByPlaceholder('••••••••')).toBeVisible();
    await expect(page.getByRole('button', { name: /Connect/i })).toBeVisible();
});
