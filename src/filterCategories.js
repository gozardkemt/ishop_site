import {getChoosenProducts} from './getChoosenProducts.js';

export function addCategoriesFilter() {
	const options = document.getElementsByClassName('options')[0];
	options.addEventListener('change', getChoosenProducts);
}
