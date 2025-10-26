export type elementsType = {
	finishButton: string;
	cancelButton: string;
	messageOrder: string;
};

export const elements: elementsType = {
	finishButton: '#finish',
	cancelButton: '#cancel',
	messageOrder: '[data-test="complete-header"]'
};

export default elements;
