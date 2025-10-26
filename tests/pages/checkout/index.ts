import { Page, expect } from '@playwright/test';
import { elements } from './elements.ts';

class Form {
	constructor(private page: Page) {}

	async clickButton(action: string) {
		let button;

		if (action === 'Finish') {
			button = this.page.locator(elements.finishButton);
		} else {
			button = this.page.locator(elements.cancelButton);
		}

		await button.waitFor({ state: 'visible' });
		await button.click();
	}

	async orderCompleted(message: string) {
		const errorMessage = this.page.locator(elements.messageOrder);
		await expect(errorMessage).toBeVisible();
		await expect(errorMessage).toHaveText(message);
	}
}

export default Form;
