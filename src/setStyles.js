
export function setStyles() {

	const content = document.querySelector('#content').style;
	const products = document.querySelectorAll('.product');

	content.display = 'grid';
	content.gridTemplateColumns = 'repeat(3, 1fr)';

	products.forEach(function(product) {

		let style = product.style;
		style.border = '10px solid rgba(90,90,90,0.3)';
		style.margin = '5px';

	});
}
