module.exports = {
	getNextHeadingLevel(currentLevel) {
		return parseInt(currentLevel, 10) + 1;
	},
	getReadingTime(text) {
		// as per: https://help.medium.com/hc/en-us/articles/214991667-Read-time
		const wordsPerMinute = 265;
		// copied from https://github.com/johanbrook/eleventy-plugin-reading-time/blob/master/lib/reading-time.js
		const content = text.replace(/(<([^>]+)>)/gi, '');
		const matches = content.match(/[\u0400-\u04FF]+|\S+\s*/g);
		const numberOfWords = matches !== null ? matches.length : 0;
		return Math.ceil(numberOfWords / wordsPerMinute);
	},
	filterPostsByYear(posts, year = NaN) {
		if (!year) {
			return posts;
		}
		const yearNum = Number.parseInt(year, 10);

		return posts.filter((post) => post.date.getFullYear() === yearNum);
	},
	filterUserTags(collections) {
		const tags = Object.keys(collections);
		const ignoredTags = ['all', 'nav', 'post', 'posts', 'tagList', 'postFeed'];
		return tags.filter((tag) => {
			return !ignoredTags.includes(tag);
		});
	},
};
