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
};
