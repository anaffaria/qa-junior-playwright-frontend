import { Page, expect } from '@playwright/test';
import { elements } from '../cart/elements';

class Cart {
	constructor(private page: Page) {}

	async removeProductToCart(position: number) {
		const removeButton = this.page
			.locator(elements.itemProductList)
			.nth(position);
		await removeButton.waitFor({ state: 'visible' });
		await removeButton.click();
	}

	async validProductRemoved(productName: string) {
		const nameProductItem = this.page.locator(elements.nameItemProductList);

		await expect(nameProductItem).not.toHaveText(productName);
	}

	async clickCheckoutButton() {
		const button = this.page.locator(elements.checkoutButton);
		await button.waitFor({ state: 'visible' });
		await button.click();
	}
}

export default Cart;
