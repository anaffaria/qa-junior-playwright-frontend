export type elementsType = {
	userInput: string;
	passwordInput: string;
	loginButton: string;
	dataError: string;
};

export const elements: elementsType = {
	userInput: '#user-name',
	passwordInput: '#password',
	loginButton: '#login-button',
	dataError: '[data-test="error"]'
};

export default elements;
