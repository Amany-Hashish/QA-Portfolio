import { test, expect } from '@playwright/test';

test('WebAutomation', async ({ page }) => {
 
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
 // await expect(page.locator('#app')).toContainText('(47) Records Found');
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByText('-- Select --').first().click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('p');
  await page.getByText('-- Select --').click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('Amany');
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('Amany24');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('Amany24');
  await page.getByRole('button', { name: 'Save' }).click();
  //await expect(page.locator('#app')).toContainText('(48) Records Found');
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Amany');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
  await page.getByRole('button', { name: ' Yes, Delete' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
  //await expect(page.locator('#app')).toContainText('(47) Records Found');
  
});


