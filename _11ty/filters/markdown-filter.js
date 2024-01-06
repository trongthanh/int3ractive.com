// define markdown-it option in one place and use it
// for both md library and filter
const markdownItAttrs = require('markdown-it-attrs');
// const markdownItTitle = require('markdown-it-title-extract');
const markdownIt = require('markdown-it')({
	html: true,
	breaks: false,
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

// markdownIt.use(markdownItTitle);

module.exports = {
	library: markdownIt,
	filter: function markdown(value) {
		return markdownIt.render(value);
	},
};
