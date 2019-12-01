
export function getChoosenProducts() {

	const choosenCategory = document.getElementsByClassName('options')[0].value;
	const allProducts = document.getElementsByClassName('product');

	if (choosenCategory === 'all') { showAllElem(allProducts); return }

	const choosenProducts = [].filter.call(allProducts, function(product) {

		let categoryElem = product.getElementsByClassName('category')[0];
		let productCategory = categoryElem.classList[1];

		return productCategory === choosenCategory;
	});

	hideAllElem(allProducts);
	showAllElem(choosenProducts);
}

function hideAllElem(elements) {
	[].forEach.call( elements,  function(element) { element.style.display = 'none';});

}

function showAllElem(elements) {
	[].forEach.call( elements,  function(element) { element.style.display = 'block';});
}
