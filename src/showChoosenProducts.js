import toggle from './toggleElements.js'

export function showChoosenProducts() {

	const choosenCategory = document.getElementsByClassName('options')[0].value;
	const allProducts = document.getElementsByClassName('product');

	if (choosenCategory === 'all') { toggle(allProducts, true); return }

	const choosenProducts = [].filter.call(allProducts, function(product) {

		let categoryElem = product.getElementsByClassName('category')[0];
		let productCategory = categoryElem.classList[1];

		return productCategory === choosenCategory;
	});

	toggle(allProducts, false);
	toggle(choosenProducts, true);
}
