/**
 * This filter is used to skip current tag to list only other tags
 * @param  {Array<string>} tags       all tags
 * @param  {string}        currentTag current tag
 * @return {Array<string>}            new array
 */
module.exports = function skipTag(tags, currentTag) {
	return tags.filter((tag) => tag !== currentTag);
};
