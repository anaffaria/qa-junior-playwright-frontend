import { Page, expect } from '@playwright/test';
import { elements } from './elements.ts';

class Login {
	constructor(private page: Page) {}

	async visitPage(url: string) {
		await this.page.goto(url);
	}

	async writeUserInput(value: string) {
		const input = this.page.locator(elements.userInput);

		await input.waitFor({ state: 'visible' });
		await input.fill(value);
		await expect(input).toHaveValue(value);
	}

	async writePasswordInput(value: string) {
		const input = this.page.locator(elements.passwordInput);

		await input.waitFor({ state: 'visible' });
		await input.fill(value);
		await expect(input).toHaveValue(value);
	}

	async clickLoginButton() {
		const button = this.page.locator(elements.loginButton);
		await button.waitFor({ state: 'visible' });
		await button.click();
	}

	async messageError(message: string) {
		const errorMessage = this.page.locator(elements.dataError);
		await expect(errorMessage).toBeVisible();
		await expect(errorMessage).toHaveText(message);
	}
}

export default Login;
