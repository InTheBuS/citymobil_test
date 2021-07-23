import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import CarsReducer from './Reducers/CarsReducer';
import SelectCarReducer from './Reducers/SelectCarReducer';

const rootReducer = combineReducers({
	carsReducer: CarsReducer,
	selectCarReducer: SelectCarReducer,
});

export default function configureStore() {
	return createStore(rootReducer, applyMiddleware(thunk));
};

