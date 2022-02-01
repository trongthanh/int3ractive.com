const fs = require('fs');
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

// Import filters
const dateFilter = require('./_11ty/filters/date-filter.js');
const yearFilter = require('./_11ty/filters/year-filter.js');
const markdownConfig = require('./_11ty/filters/markdown-filter.js');
const w3DateFilter = require('./_11ty/filters/w3-date-filter.js');
const skipTag = require('./_11ty/filters/skip-tag.js');
const prepend = require('./_11ty/filters/prepend.js');

// Import transforms
const htmlMinTransform = require('./_11ty/transforms/html-min-transform.js');
const parseTransform = require('./_11ty/transforms/parse-transform.js');

// Import data files
const site = require('./_data/site.json');

const prodMode = process.env.ELEVENTY_ENV !== 'development';

module.exports = function (config) {
	// revert options changed since 1.0
	config.setDataDeepMerge(false);
	config.setLiquidOptions({ strictFilters: false, dynamicPartials: false });

	config.setLibrary('md', markdownConfig.library);
	// Filters
	config.addFilter('dateFilter', dateFilter);
	config.addFilter('yearFilter', yearFilter);
	config.addFilter('markdownFilter', markdownConfig.filter);
	config.addFilter('w3DateFilter', w3DateFilter);
	config.addFilter('skipTag', skipTag);
	config.addFilter('prepend', prepend);

	// Layout aliases
	config.addLayoutAlias('home', 'layouts/home.njk');
	config.addLayoutAlias('post', 'layouts/post.njk');
	config.addLayoutAlias('page', 'layouts/page.njk');
	config.addLayoutAlias('archive', 'layouts/archive.njk');

	// Transforms
	config.addTransform('parse', parseTransform);
	if (prodMode) config.addTransform('htmlmin', htmlMinTransform);

	// Passthrough copy
	config.addPassthroughCopy('./_redirects');
	config.addPassthroughCopy('./fonts');
	config.addPassthroughCopy('./images');
	config.addPassthroughCopy('./js');
	config.addPassthroughCopy('./robots.txt');
	config.addPassthroughCopy('node_modules/nunjucks/browser/nunjucks-slim.js');
	// submodule pass through
	config.addPassthroughCopy('./slides');

	const now = new Date();

	// Custom collections
	const livePosts = (post) => post.date <= now && !post.data.draft;
	config.addCollection('posts', (collection) => {
		return [
			...collection.getFilteredByGlob('./posts/**/*.{md,html}').filter(livePosts),
		].reverse();
	});

	config.addCollection('postFeed', (collection) => {
		return [...collection.getFilteredByGlob('./posts/**/*.{md,html}').filter(livePosts)]
			.reverse()
			.slice(0, site.maxPostsPerPage);
	});

	// Plugins
	config.addPlugin(rssPlugin);
	config.addPlugin(syntaxHighlight);

	// 404
	config.setBrowserSyncConfig({
		callbacks: {
			ready: function (err, browserSync) {
				const content_404 = fs.readFileSync('_site/404.html');

				browserSync.addMiddleware('*', (req, res) => {
					// Provides the 404 content without redirect.
					res.write(content_404);
					res.end();
				});
			},
		},
	});

	return {
		dir: {
			input: '.',
			output: '_site',
		},
		passthroughFileCopy: true,
	};
};
