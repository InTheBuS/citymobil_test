import { mark } from '../constants/constants';

export let sort = (sortToCeil, arrayToSort, sortByType) => {
	if (sortByType === mark) {
		return sortByStringType(sortToCeil, arrayToSort, sortByType);
	}
	return sortByNumberType(sortToCeil, arrayToSort, sortByType);
}

function sortByStringType(sortToCeil, arrayToSort, sortByType) {
	if (sortToCeil) {
		return arrayToSort.sort((a, b) => {
			if (a[sortByType] < b[sortByType]) {
				return -1;
			}
			if (a[sortByType] > b[sortByType]) {
				return 1;
			}
			return 0;
		})
	}

	return arrayToSort.sort((a, b) => {
		if (a[sortByType] > b[sortByType]) {
			return -1;
		}
		if (a[sortByType] < b[sortByType]) {
			return 1;
		}
		return 0;
	});
}

function sortByNumberType(sortToCeil, arrayToSort, sortByType) {
	if (!sortToCeil) {
		return arrayToSort.sort((a, b) => {
			const aHas = typeof a[sortByType] !== 'undefined';
			const bHas = typeof b[sortByType] !== 'undefined';
			return (bHas - aHas) || (aHas === true && a[sortByType] - b[sortByType]) || 0;
		});
	}
	return arrayToSort.sort((a, b) => {
		const aHas = typeof a[sortByType] !== 'undefined';
		const bHas = typeof b[sortByType] !== 'undefined';
		return (bHas - aHas) || (aHas === true && b[sortByType] - a[sortByType]) || 0;
	});

}