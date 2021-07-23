export const filter = (array, textToMatch) => {
	const spitTextToMatch = textToMatch.split(' ');
	return array.filter((car) => {
		return car.namesToMatch.some((name) => {
			return spitTextToMatch.every((text) => {
				return name.includes(text)
			})
		});
	});
};