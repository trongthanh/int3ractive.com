import { minify } from 'html-minifier-terser';

export default async function htmlMinTransform(value, outputPath) {
	if (outputPath.indexOf('.html') > -1) {
		let minified = await minify(value, {
			useShortDoctype: true,
			removeComments: true,
			collapseWhitespace: true,
			minifyCSS: true,
		});
		return minified;
	}
	return value;
}
