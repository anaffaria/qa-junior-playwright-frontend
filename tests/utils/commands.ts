import { expect, Page } from '@playwright/test';

export async function validUrl(page: Page, url: string) {
	await expect(page).toHaveURL(url);
}

export async function validTitle(page: Page, title: string) {
	await expect(page).toHaveTitle(title);
}
