import { Page, test } from '@playwright/test'
import path from 'path'

test('create image teeds', async ({ page }) => {
    await page.goto('')
    await page.getByRole('link', { name: 'new-teed' }).click()

    await page
        .getByRole('textbox', { name: 'tee-description' })
        .fill('tee description')
    await uploadFile(page, 'main-image-file', 'images/fake-one.png')
    await uploadFile(page, 'no-image-file', 'images/fake-one.png')
    await uploadFile(page, 'yes-image-file', 'images/fake-one.png')
    await uploadFile(page, 'sure-image-file', 'images/fake-one.png')

    await page.getByRole('button', { name: 'add-tee' }).click()
    await page.getByTestId('tee-cup')
    await page
        .getByRole('textbox', { name: 'tee-description' })
        .fill('tee description')
    await uploadFile(page, 'main-image-file', 'images/fake-two.png')
    await uploadFile(page, 'no-image-file', 'images/fake-two.png')
    await uploadFile(page, 'yes-image-file', 'images/fake-two.png')
    await uploadFile(page, 'sure-image-file', 'images/fake-two.png')

    await page.getByRole('button', { name: 'add-tee' }).click()
    await page.getByRole('button', { name: 'complete' }).click()

    await page.route('**/api/fetch_data', (route) =>
        route.fulfill({
            status: 200,
            body: JSON.stringify({}),
        })
    )
})

async function uploadFile(page: Page, testId: string, filePath: string) {
    const fileChooserPromise = page.waitForEvent('filechooser')
    const __dirname = process.env.PWD ?? ''
    await page.getByTestId(testId).click()

    const fileChooser = await fileChooserPromise
    await fileChooser.setFiles(
        path.join(__dirname, 'integration/fixtures/', filePath)
    )
}
