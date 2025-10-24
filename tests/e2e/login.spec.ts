import { test, expect } from '@playwright/test';
import Login from '../pages/login/index';
import data from '../fixtures/dataLogin.json';

let login: Login;

test.describe('Suite de testes da tela de login', () => {
	test.beforeEach(async ({ page }) => {
		login = new Login(page);
		await login.visitPage(data.url);
		await login.validTitlePage(data.title);
	});

	test('Realiza login com sucesso', async () => {
		await login.writeUserInput(data.user);
		await login.writePasswordInput(data.password);

		await login.clickLoginButton();
		await login.validTitlePage(data.title);
		await login.validUrl(data.urlProduct);
	});

	test('Tentativa de login com usuário inválido', async () => {
		await login.writeUserInput(data.userInvalid);
		await login.writePasswordInput(data.password);
		await login.clickLoginButton();

		await login.messageError(data.messageErrorInvalidUser);
	});

	test('Tentativa de login com senha inválida', async () => {
		await login.writeUserInput(data.user);
		await login.writePasswordInput(data.passwordInvalid);
		await login.clickLoginButton();

		await login.messageError(data.messageErrorInvalidUser);
	});

	test('Tentativa de login com usuário bloqueado', async () => {
		await login.writeUserInput(data.userLocked);
		await login.writePasswordInput(data.password);
		await login.clickLoginButton();

		await login.messageError(data.messageErrorLockedUser);
	});

	test('Tentativa de login sem informar usuário', async () => {
		await login.writeUserInput('');
		await login.writePasswordInput(data.password);
		await login.clickLoginButton();

		await login.messageError(data.messageErrorUserNameRequired);
	});

	test('Tentativa de login sem informar senha', async () => {
		await login.writeUserInput(data.user);
		await login.writePasswordInput('');
		await login.clickLoginButton();

		await login.messageError(data.messageErrorPassordRequired);
	});
});
