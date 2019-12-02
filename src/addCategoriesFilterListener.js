import {showChoosenProducts} from './showChoosenProducts.js';

export function addCategoriesFilterListener() {
	const options = document.getElementsByClassName('options')[0];
	options.addEventListener('change', showChoosenProducts);
}
