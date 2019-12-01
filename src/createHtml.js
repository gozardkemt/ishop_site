import {productsAll} from './startApp.js';
import {getProductElement} from './getProductElement.js';
import {setHeadline} from './setHeadline.js';
import {setOptions} from './setOptions.js';

/**
 * startApp - description
 *
 */
export function createHTML() {

	const content = `<div id="content"></div>`;
	document.body.innerHTML = setHeadline() + setOptions() + content;

	let products = '';
	productsAll.forEach( function(tech) {
		products = products + getProductElement(tech);
	});

	document.getElementById('content').innerHTML = products;
}
