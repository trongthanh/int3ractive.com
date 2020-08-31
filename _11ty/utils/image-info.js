const { createCanvas, loadImage } = require('canvas');
const FastAverageColor = require('fast-average-color');

const fac = new FastAverageColor();

/**
 * Get size and average color from an image file
 * @param  {string} filename path to file
 * @return {[red, green, blue, width, height, filename]} image data
 */
async function getImageInfo(filename) {
	const img = await loadImage(filename);
	const { width, height } = img;

	const canvas = createCanvas(width, height);
	const ctx = canvas.getContext('2d');
	ctx.drawImage(img, 0, 0);

	const imageData = ctx.getImageData(0, 0, width, height);

	const imageInfo = fac.getColorFromArray4(imageData.data);
	imageInfo.push(width);
	imageInfo.push(height);
	imageInfo.push(filename);

	// console.log(`Filename: ${filename}, size: ${width}×${height}`);
	// console.log(imageInfo);
	// [
	//   48,  // red
	//   49,  // green
	//   53,  // blue
	//   255, // opacity
	//   1399, // width
	//   877, // height
	//   'cli-top.png' // filename
	// ]
	return imageInfo;
}

module.exports = getImageInfo;
