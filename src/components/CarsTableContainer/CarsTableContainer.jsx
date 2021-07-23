import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { TableHeadItem } from '../TableItems/TableHeadItem/TableHeadItem';
import { TableBodyItem } from '../TableItems/TableBodyItem/TableBodyItem';
import styles from './CarsTableContainer.module.css';
import { selectCar } from '../../Redux/Actions/SelectCarActions';
import { sortCarsByType } from '../../Redux/Actions/CarsActions';
import { EmptyBody } from '../EmptyBody/EmptyBody';
import { carMarkAndModel, mark, arrowUp, arrowDown } from '../../constants/constants';


const CarsTableContainer = ({sortedCars, tariffsList, selectCar, sortCars, sortType, sortToCeil}) => {
	/** Указатель направления сортировки */
	const sortSide = useMemo(() => sortToCeil ? arrowUp : arrowDown, [sortToCeil]);

	/** Создание шапки таблицы */
	const tableHead = useMemo(() => {

		const sortCarHandler = (name, sortToCeil) => {
			sortCars(name, sortToCeil);
		};

		/** Массив элементов строки шапки */
		return [mark, ...tariffsList].map((name, index) => {
			let thName = '';
			if (name === mark) {
				thName = name === sortType ? `${carMarkAndModel} ${sortSide}` : carMarkAndModel;
			} else {
				thName = name === sortType ? `${name} ${sortSide}` : name;
			}
			return(
				<TableHeadItem
					clickHandler={() => {sortCarHandler(name, !sortToCeil)}}
					text={thName}
					key={index}/>
				);
		});
	}, [tariffsList, sortType, sortToCeil, sortCars, sortSide]);

	/** Создание тела таблицы */
	const tableBody = useMemo(() => {

		/** Проверка на наличие машин после поиска */
		if (!sortedCars.length) {
			return (
				<EmptyBody />
			);
		}
		return sortedCars.map((car, index) => {

			/** Массив элементов строки тела машины */
			const carTableElements = [];

			/** Функция выбора машины */
			const setSelectedCar = (carMarkModel, carYear) => {
				selectCar(carMarkModel, carYear);
			};

			/** Создание первого поля марки и модели машины */
			const carMarkModel = `${car.mark} ${car.model}`;
			carTableElements.push(
				<TableBodyItem
					text={carMarkModel}
					key={carMarkModel}/>
			);

			/** Создание остальных полей, которые являются годами машин по тарифам */
			tariffsList.forEach((tariff, index) => {
				const [year, withClick] = car.tariffs[tariff]
					/** Проверка на необходимость клик метода */
					? [car.tariffs[tariff].year, () => {
						setSelectedCar(carMarkModel, year)
					}]
					: ['-', false];
				carTableElements.push(
					<TableBodyItem
						text={year}
						withClick={withClick}
						key={index}
						center={true}/>
				);
			});

			return (
				<tr key={index} className={styles.tableRow}>
					{carTableElements}
				</tr>
			)
		})
	}, [sortedCars, tariffsList, selectCar]);

	return (
		<div className={styles.tableFixed}>
			<table className={styles.table}>
				<thead className={styles.tableHead}>
				<tr className={styles.tableRow}>
					{tableHead}
				</tr>
				</thead>
				<tbody className={styles.tableBody}>
					{tableBody}
				</tbody>
			</table>
		</div>
	);
};

const mapStateToProps = (state) => ({
	sortedCars: state.carsReducer.sortedCars,
	tariffsList: state.carsReducer.tariffs_list,
	sortType: state.carsReducer.sortType,
	sortToCeil: state.carsReducer.sortToCeil,
});

const mapDispatchToProps = (dispatch) => ({
	selectCar: (carMarkModel, carYear) => dispatch(selectCar(carMarkModel, carYear)),
	sortCars: (type, sortToCeil) => dispatch(sortCarsByType(type, sortToCeil)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CarsTableContainer);