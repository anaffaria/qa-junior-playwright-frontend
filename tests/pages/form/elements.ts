export type elementsType = {
	firstName: string;
	lastName: string;
	zipCode: string;
	continueButton: string;
	cancelButton: string;
};

export const elements: elementsType = {
	firstName: '#first-name',
	lastName: '#last-name',
	zipCode: '#postal-code',
	continueButton: '#continue',
	cancelButton: '#cancel'
};

export default elements;
