import {categoriesAll} from './startApp.js';

export const setOptions = () => {

	return `<select class='options'><option value='all' selected >Všetko</option>${getOptions()}</select>`;

};

export const getOptions = () => {

	let optionElems = '';

	categoriesAll.forEach(function(category) {
		optionElems =  optionElems + `<option value='${category.name.toLocaleLowerCase()}'>${category.name}</option>`;
	});

	return optionElems;
};
