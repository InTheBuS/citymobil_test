/**
 * Задача данной функции преобразовать ответ, который мы получаем от сервера в более удобный для использования
 */
export const remakeCarsResponse = (resp) => {
	const carsRemake = resp.cars.map((car) => {
		const namesToMatch = [];
		resp.tariffs_list.forEach((tariff) => {
			if (car.tariffs[tariff]) {
				let name = `${car.mark} ${car.model} ${car.tariffs[tariff].year}`.toUpperCase()
				namesToMatch.push(name);
			}
		});

		let simplifiedTariffs = {};

		if (car.hasOwnProperty('tariffs')) {
			for (let tariff in car.tariffs) {
				simplifiedTariffs[tariff] = car.tariffs[tariff].year;
			}
		}

		return {
			...car,
			...car.tariffs,
			namesToMatch: [...namesToMatch],
			...simplifiedTariffs,
		};
	});

	return {
		tariffs_list: resp.tariffs_list,
		cars: [
			...carsRemake,
		],
	};
};