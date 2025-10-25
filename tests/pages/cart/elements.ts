export type elementsType = {
	itemProductList: string;
	nameItemProductList: string;
	checkoutButton: string;
};

export const elements: elementsType = {
	itemProductList: '.cart_item button.cart_button',
	nameItemProductList: '.cart_item .inventory_item_name',
	checkoutButton: '#checkout'
};

export default elements;
