import { test } from '@playwright/test';
import { validUrl, validTitle, validQuantityBadge } from '../utils/commands';

import Login from '../pages/login/index';
import Product from '../pages/product/index';
import Cart from '../pages/cart/index';

import dataLogin from '../fixtures/dataLogin.json';
import dataCart from '../fixtures/dataCart.json';
import dataProduct from '../fixtures/dataProduct.json';

let login: Login;
let product: Product;
let cart: Cart;

test.describe('Suite de testes de checkout', () => {
	test.beforeEach(async ({ page }) => {
		login = new Login(page);
		product = new Product(page);
		cart = new Cart(page);

		await login.visitPage(dataLogin.url);
		await validUrl(page, dataLogin.url);
		await validTitle(page, dataLogin.title);

		await login.writeUserInput(dataLogin.user);
		await login.writePasswordInput(dataLogin.password);

		await login.clickLoginButton();
		await validTitle(page, dataLogin.title);
		await validUrl(page, dataProduct.urlPage);

		await validQuantityBadge(page, 0);
		await product.addProductToBadge(0);
		await validQuantityBadge(page, 1);
		await product.addProductToBadge(1);
		await validQuantityBadge(page, 2);
		await product.addProductToBadge(4);
		await validQuantityBadge(page, 3);

		await product.goToCart();
		await validUrl(page, dataCart.urlPage);

		await cart.clickCheckoutButton();
	});

	test('Finaliza uma compra', async ({ page }) => {});
});
