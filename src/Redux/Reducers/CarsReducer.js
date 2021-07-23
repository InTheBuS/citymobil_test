import { CarsActionTypes } from '../Constants/CarsActionTypes';
import { sort } from '../../utils/sort';
import { filter } from '../../utils/filter';

const initialState = {
	isFetching: false,
	error: false,
	cars: [],
	tariffs_list: [],
	sortedCars: [],
	sortType: '',
	sortToCeil: true,
	sortFilterName: '',
};

const CarsReducer = (state = initialState, action) => {
	switch(action.type) {
		case CarsActionTypes.SORT_BY_TYPE: {
			let sortedByType = sort(!action.sortToCeil, state.sortedCars, action.sortType);
			return {
				...state,
				sortType: action.sortType,
				sortToCeil: action.sortToCeil,
				sortedCars: [...sortedByType],
			};
		}

		case CarsActionTypes.FILTER_BY_INPUT_TEXT: {
			let textToMatch = action.text.replace(/\s\s+/g, ' ').trim().toUpperCase();

			/**
			 * Так как все данные хранятся на фронте, то я решил немного оптимизировать поиск
			 * */

			/**
			 * Если Предыдущий поисковый запрос совпадает с текущим, то мы просто возвращаем наше текущее состояние
			 */

			if (textToMatch === state.sortFilterName) {
				return {
					...state
				};
			}

			/**
			 * Если текст предыдущего поискового запроса является подстрокой текущего поискового запроса,
			 * то мы для фильтрации будем использовать отфильтрованный массив с меньшим количеством машин
			 */

			if (textToMatch.includes(state.sortFilterName) && state.sortFilterName !== '') {
				let filtered = filter(state.sortedCars, textToMatch);
				return {
					...state,
					sortedCars: [...filtered],
					sortFilterName: textToMatch,
				};
			}

			/**
			 * Обычная фильтрация массива машин
			 */

			let filtered = filter(state.cars, textToMatch)
			return {
				...state,
				sortedCars: [...filtered],
				sortFilterName: textToMatch,
			};
		}

		case CarsActionTypes.FETCH_CARS_START: {
			return {
				...state,
				isFetching: true,
				error: false,
			};
		}

		case CarsActionTypes.FETCH_CARS_FAILURE: {
			return {
				...state,
				isFetching: false,
				error: true,
			};
		}

		case CarsActionTypes.FETCH_CARS_SUCCESS: {
			const cars = action.data.cars;
			return {
				...state,
				cars: [...cars],
				sortedCars: [...cars],
				tariffs_list: action.data.tariffs_list,
				isFetching: false,
				error: false,
			};
		}

		default: {
			return state;
		}
	}
};

export default CarsReducer;