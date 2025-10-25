import { test } from '@playwright/test';
import { validUrl, validTitle } from '../utils/commands';

import Login from '../pages/login/index';
import dataLogin from '../fixtures/dataLogin.json';
import dataProduct from '../fixtures/dataProduct.json';

let login: Login;

test.describe('Suite de testes da tela de login', () => {
	test.beforeEach(async ({ page }) => {
		login = new Login(page);
		await login.visitPage(dataLogin.url);
		await validTitle(page, dataLogin.title);
	});

	test('Realiza login com sucesso', async ({ page }) => {
		await login.writeUserInput(dataLogin.user);
		await login.writePasswordInput(dataLogin.password);

		await login.clickLoginButton();
		await validTitle(page, dataLogin.title);
		await validUrl(page, dataProduct.urlPage);
	});

	test('Tentativa de login com usuário inválido', async () => {
		await login.writeUserInput(dataLogin.userInvalid);
		await login.writePasswordInput(dataLogin.password);
		await login.clickLoginButton();

		await login.messageError(dataLogin.messageErrorInvalidUser);
	});

	test('Tentativa de login com senha inválida', async () => {
		await login.writeUserInput(dataLogin.user);
		await login.writePasswordInput(dataLogin.passwordInvalid);
		await login.clickLoginButton();

		await login.messageError(dataLogin.messageErrorInvalidUser);
	});

	test('Tentativa de login com usuário bloqueado', async () => {
		await login.writeUserInput(dataLogin.userLocked);
		await login.writePasswordInput(dataLogin.password);
		await login.clickLoginButton();

		await login.messageError(dataLogin.messageErrorLockedUser);
	});

	test('Tentativa de login sem informar usuário', async () => {
		await login.writeUserInput('');
		await login.writePasswordInput(dataLogin.password);
		await login.clickLoginButton();

		await login.messageError(dataLogin.messageErrorUserNameRequired);
	});

	test('Tentativa de login sem informar senha', async () => {
		await login.writeUserInput(dataLogin.user);
		await login.writePasswordInput('');
		await login.clickLoginButton();

		await login.messageError(dataLogin.messageErrorPassordRequired);
	});
});
