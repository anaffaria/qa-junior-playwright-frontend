export type elementsType = {
	itemProductList: string;
	cartBadge: string;
};

export const elements: elementsType = {
	itemProductList: '.inventory_item button.btn_inventory',
	cartBadge: '[data-test="shopping-cart-badge"]'
};

export default elements;
