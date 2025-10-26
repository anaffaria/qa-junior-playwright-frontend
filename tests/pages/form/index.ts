import { Page, expect } from '@playwright/test';
import { elements } from './elements.ts';

class Form {
	constructor(private page: Page) {}

	async writeFirstNameInput(value: string) {
		const input = this.page.locator(elements.firstName);

		await input.waitFor({ state: 'visible' });
		await input.fill(value);
		await expect(input).toHaveValue(value);
	}

	async writeLastNameInput(value: string) {
		const input = this.page.locator(elements.lastName);

		await input.waitFor({ state: 'visible' });
		await input.fill(value);
		await expect(input).toHaveValue(value);
	}

	async writeZipCodeInput(value: string) {
		const input = this.page.locator(elements.zipCode);

		await input.waitFor({ state: 'visible' });
		await input.fill(value);
		await expect(input).toHaveValue(value);
	}

	async clickButton(action: string) {
		let button;

		if (action === 'Continue') {
			button = this.page.locator(elements.continueButton);
		} else {
			button = this.page.locator(elements.continueButton);
		}

		await button.waitFor({ state: 'visible' });
		await button.click();
	}
}

export default Form;
