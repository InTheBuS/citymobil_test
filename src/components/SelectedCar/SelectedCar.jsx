import React from 'react';
import styles from './SelectedCar.module.css';

export const SelectedCar = React.memo(props => {
	const isSelected = props.selectedCar ? `Выбран автомобиль ${props.selectedCar} года выпуска` : 'Автомобиль не выбран';
	return (
		<div className={styles.selectedCar}>{isSelected}</div>
	);
});

