// define markdown-it option in one place and use it
// for both md library and filter
const markdownIt = require('markdown-it')({
	html: true,
	breaks: true,
	linkify: true,
	typographer: true,
});

module.exports = {
	library: markdownIt,
	filter: function markdown(value) {
		return markdownIt.render(value);
	},
};
