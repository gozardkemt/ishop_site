
export default function toggleElements(elements, action) {
	let display = '';
	if (action) { display = 'block' } else { display = 'none'}
	[].forEach.call( elements,  function(element) { element.style.display = display;});
}
