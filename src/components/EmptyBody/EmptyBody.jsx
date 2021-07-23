import React from 'react';
import styles from './EmptyBody.module.css';
import rowStyles from './../CarsTableContainer/CarsTableContainer.module.css'

export const EmptyBody = React.memo(props => {
	return (
		<tr className={rowStyles.tableRow}>
			<td className={styles.emptyBody}>
				Не удалось ничего найти, попробуйте ещё раз!
			</td>
		</tr>

	);
});