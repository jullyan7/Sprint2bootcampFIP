import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://pddtestev2.gerenciatiunifip.opalstacked.com/login/');
  await page.getByRole('textbox', { name: 'Email institucional' }).click();
  await page.getByRole('textbox', { name: 'Email institucional' }).fill('jullyanbrl@gmail.com');
  await page.getByRole('textbox', { name: 'Senha' }).click();
  await page.getByRole('textbox', { name: 'Senha' }).fill('Jully9708+)');
  await page.getByRole('textbox', { name: 'Senha' }).press('Enter');
  await page.getByRole('button', { name: 'Entrar' }).click();
  await page.getByRole('button', { name: 'Confirmar' }).click();
  await page.getByRole('textbox', { name: 'Email institucional' }).click();
  await page.getByRole('textbox', { name: 'Email institucional' }).fill('jullyanbrl@gmail.com');
  await page.getByRole('textbox', { name: 'Senha' }).click();
});