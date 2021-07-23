import React from 'react';
import styles from './TableHeadItem.module.css';

export const TableHeadItem = React.memo(({clickHandler, text}) => {
	return (
		<th className={styles.tableHeadItem}
				onClick={clickHandler}>
			{text}
		</th>
	);
});
