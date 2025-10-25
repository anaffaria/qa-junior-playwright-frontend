import { expect, Page } from '@playwright/test';
import elements from '../utils/elements';

export async function validUrl(page: Page, url: string) {
	await expect(page).toHaveURL(url);
}

export async function validTitle(page: Page, title: string) {
	await expect(page).toHaveTitle(title);
}

export async function validQuantityBadge(page: Page, quantity: number) {
	const cartBadge = page.locator(elements.cartBadge);

	if (quantity === 0) {
		await expect(cartBadge).toHaveCount(0);
	} else {
		await expect(cartBadge).toHaveText(quantity.toString());
	}
}
