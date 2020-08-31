// define markdown-it option in one place and use it
// for both md library and filter
const markdownItAttrs = require('markdown-it-attrs');
const markdownIt = require('markdown-it')({
	html: true,
	breaks: true,
	linkify: true,
	typographer: true,
});

markdownIt.use(markdownItAttrs, {
	// my old blog used kramdown syntax for additional attribute
	// https://kramdown.gettalong.org/syntax.html#attribute-list-definitions
	leftDelimiter: '{:',
	rightDelimiter: '}',
	allowedAttributes: [], // empty array = all attributes are allowed
});

module.exports = {
	library: markdownIt,
	filter: function markdown(value) {
		return markdownIt.render(value);
	},
};
