import {categoriesAll} from './startApp.js';

export function getTechCategory(product) {
	let category = getCategoryName(product);
	return `<div class="category ${category.toLowerCase()}"> Kategória produktu: ${category}</div>`;
}

function getCategoryName(product) {

	let name = '';

	categoriesAll.forEach( function(category) {

		if (category.id === product.categoryId)
		{
			name = category.name;
		}
	})

	return name;
}
