import { test, expect } from '@playwright/test';

test('multi-user E2EE messaging flow', async ({ browser }) => {
    // 1. Setup two separate browser contexts to simulate two different users
    const contextA = await browser.newContext();
    const contextB = await browser.newContext();

    const pageA = await contextA.newPage();
    const pageB = await contextB.newPage();

    const userA = `alice_${Date.now()}`;
    const userB = `bob_${Date.now()}`;
    const password = 'Password123!';

    // 2. User A Signup
    await pageA.goto('/');
    await pageA.getByRole('button', { name: /Initialize/i }).click();
    await pageA.getByPlaceholder('Orbit').fill(userA);
    await pageA.getByPlaceholder('pilot@yapper.app').fill(`${userA}@test.com`);
    await pageA.getByPlaceholder('••••••••').fill(password);
    await pageA.getByRole('button', { name: /Register/i }).click();

    // Wait for login to complete and show the main UI
    // We look for the username in the bottom left sidebar area
    await expect(pageA.locator(`text=${userA}`)).toBeVisible({ timeout: 30000 });
    console.log(`[Test] User A: Signup successful, ${userA} visible`);

    // 3. User B Signup
    await pageB.goto('/');
    await pageB.getByRole('button', { name: /Initialize/i }).click();
    await pageB.getByPlaceholder('Orbit').fill(userB);
    await pageB.getByPlaceholder('pilot@yapper.app').fill(`${userB}@test.com`);
    await pageB.getByPlaceholder('••••••••').fill(password);
    await pageB.getByRole('button', { name: /Register/i }).click();

    // Use a regex to match the start of the username to handle potential truncation in UI
    const userBRegex = new RegExp(`^${userB.slice(0, 12)}`);
    await expect(pageB.getByText(userBRegex)).toBeVisible({ timeout: 15000 });

    // Wait for User B's profile and keys to be available in User A's view
    console.log(`[Test] Waiting for data propagation...`);
    await pageA.waitForTimeout(5000);

    // 4. User A starts DM with User B
    // Click Home button (🌌) if not already there
    await pageA.getByText('🌌').click();
    await pageA.waitForTimeout(1000);

    // Use a more specific locator for the button and click it
    await pageA.locator('button:has-text("Start Conversation")').click({ force: true });

    const dmInput = pageA.locator('input[placeholder="Username..."]');
    await expect(dmInput).toBeVisible({ timeout: 10000 });

    await dmInput.fill(userB);
    await dmInput.press('Enter');

    // Wait for thread to appear in sidebar
    await pageA.waitForTimeout(3000);

    // Verify DM thread is active.
    await expect(pageA.getByText(/Private Message/i)).toBeVisible({ timeout: 15000 });

    // 5. User A sends an encrypted message
    const secretMessage = "Hello from the Void, encryption works!";
    await pageA.getByPlaceholder(/Message #/i).fill(secretMessage);
    await pageA.keyboard.press('Enter');

    // 6. User B receives the message
    await pageB.getByText('🌌').click();
    // User B should see the new DM thread appearing
    const dmThread = pageB.getByText(/User/i).first(); // It might show "User [ID]..."
    await dmThread.click();

    // Verify the decrypted content is visible to Bob
    await expect(pageB.getByText(secretMessage)).toBeVisible({ timeout: 10000 });

    // 7. User B replies
    const replyMessage = "Loud and clear, User A!";
    await pageB.getByPlaceholder(/Message #/i).fill(replyMessage);
    await pageB.keyboard.press('Enter');

    // 8. User A verifies the reply
    await expect(pageA.getByText(replyMessage)).toBeVisible({ timeout: 10000 });

    // Cleanup
    await contextA.close();
    await contextB.close();
});
