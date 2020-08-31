/**
 * Prepend a string to input value
 * @param  {string} input input string
 * @param  {string} value value to be prepend
 * @return {string}       new string with value prepended
 * @example
 * 	{ 'images/favicon.png' | prepend(site.url) }
 */
module.exports = function prepend(input = '', value = '') {
	return value + input;
};
