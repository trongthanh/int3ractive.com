module.exports = {
	getNextHeadingLevel(currentLevel) {
		return parseInt(currentLevel, 10) + 1;
	},
	getReadingTime(text) {
		const wordsPerMinute = 200;
		const numberOfWords = text.split(/\s/g).length;
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
