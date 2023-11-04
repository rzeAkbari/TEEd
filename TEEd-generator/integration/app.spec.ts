import { test, expect } from '@playwright/test'

test('navigation', async ({ page }) => {
    await page.goto('')

    expect(page.getByTestId('dashboard')).toBeDefined()

    page.getByRole('link', { name: 'new-teed' }).click()
    expect(page.getByTestId('new-teed')).toBeDefined()

    page.getByRole('link', { name: 'teeds-list' }).click()
    expect(page.getByTestId('teeds-list')).toBeDefined()

    page.getByRole('link', { name: 'settings' }).click()
})
