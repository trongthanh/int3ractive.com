export default function yearFilter(value) {
	const dateObject = new Date(value);

	return `${dateObject.getFullYear()}`;
}
