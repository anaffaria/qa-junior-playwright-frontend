import { Page } from '@playwright/test';
import { elements } from './elements.ts';

class Product {
	constructor(private page: Page) {}

	async addProductToBadge(position: number) {
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
}

export default Product;
