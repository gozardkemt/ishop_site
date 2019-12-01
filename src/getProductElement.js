import {getTechNameDiv} from './getTechNameDiv.js';
import {getTechPriceDiv} from './getTechPriceDiv.js';
import {getTechPicElement} from './getTechPicElement.js';
import {getTechCategory} from './getTechCategory.js';

export const getProductElement = tech =>
{
	return `<div class='product'>
			${getTechNameDiv(tech)}
			${getTechPriceDiv(tech)}
			${getTechCategory(tech)}
			${getTechPicElement(tech)}
			</div>`;
};
