// define markdown-it option in one place and use it
// for both md library and filter
import markdownItAttrs from 'markdown-it-attrs';
import MarkdownIt from 'markdown-it';

const markdownIt = new MarkdownIt({
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

export const library = markdownIt;

export function filter(value) {
	return markdownIt.render(value);
}
