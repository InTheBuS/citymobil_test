import { SelectCarActionType } from '../Constants/SelectCarActionTypes';

export const selectCar = (carMarkModel, carYear) => ({
	type: SelectCarActionType.SELECT_CAR,
	carMarkModel,
	carYear,
});