export function getFirstLetters(str: string) {
	const firstLetters = str
		.split(' ')
		.map((word) => word.charAt(0))
		.join('');

	return firstLetters;
}
