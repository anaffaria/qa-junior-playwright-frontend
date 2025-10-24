import { test } from '@playwright/test';
import Login from '../pages/login/index';
import Product from '../pages/product/index';
import dataLogin from '../fixtures/dataLogin.json';

let login: Login;
let product: Product;

test.describe('Suite de testes de produtos', () => {
	test.beforeEach(async ({ page }) => {
		login = new Login(page);
		product = new Product(page);
		await login.visitPage(dataLogin.url);
		await login.validTitlePage(dataLogin.title);

		await login.writeUserInput(dataLogin.user);
		await login.writePasswordInput(dataLogin.password);

		await login.clickLoginButton();
		await login.validTitlePage(dataLogin.title);
		await login.validUrl(dataLogin.urlProduct);
	});

	test('Remove produto do carrinho', async () => {
		await product.validQuantityCart(0);
		await product.addProductToCart(0);
		await product.validQuantityCart(1);
		await product.addProductToCart(1);
		await product.validQuantityCart(2);
	});
});
