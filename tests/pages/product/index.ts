import { Page, expect } from '@playwright/test';
import { elements } from './elements.ts';

class Product {
	constructor(private page: Page) {}

	async addProductToCart(position: number) {
		const productButton = this.page
			.locator(elements.itemProductList)
			.nth(position);
		await productButton.waitFor({ state: 'visible' });
		await productButton.click();
	}

	async goToCart() {
		const cartBadge = this.page.locator(elements.cartBadge);
		await cartBadge.waitFor({ state: 'visible' });
		await cartBadge.click();
	}

	//Validations
	async validQuantityCart(quantity: number) {
		const cartBadge = this.page.locator(elements.cartBadge);

		if (quantity === 0) {
			await expect(cartBadge).toHaveCount(0);
		} else {
			await expect(cartBadge).toHaveText(quantity.toString());
		}
	}
}

export default Product;
