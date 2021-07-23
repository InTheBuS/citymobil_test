import CityMobilCarsAPI from '../../API/CarsApi';
import { CarsActionTypes } from '../Constants/CarsActionTypes';
import { remakeCarsResponse } from '../../utils/remakeCarsRepsonse';

export const fetchCarsStart = () => ({
	type: CarsActionTypes.FETCH_CARS_START,
});

export const fetchCarsSuccess = (data) => ({
	type: CarsActionTypes.FETCH_CARS_SUCCESS,
	data,
});

export const fetchCarsFailure = () => ({
	type: CarsActionTypes.FETCH_CARS_FAILURE,
});

export const sortCarsByType = (sortType, sortToCeil) => ({
	type: CarsActionTypes.SORT_BY_TYPE,
	sortType,
	sortToCeil,
});

export function fetchCars () {
	return (dispatch) => {
		dispatch(fetchCarsStart());
		return new CityMobilCarsAPI()
			.getCars()
			.then((response) => {
				dispatch(fetchCarsSuccess(remakeCarsResponse(response.data)))
			})
			.catch((error) => {
				console.error(error)
				dispatch(fetchCarsFailure())
			});
	};
}

export const filterCars = (text) => ({
	type: CarsActionTypes.FILTER_BY_INPUT_TEXT,
	text,
});


