import axios from 'axios';

class CityMobilCarsAPI {
	baseUrl = 'https://city-mobil.ru/api/cars';

	async getCars() {
		return axios.get(this.baseUrl);
	};
}

export default CityMobilCarsAPI;