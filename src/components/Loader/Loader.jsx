import React from 'react';
import styles from './Loader.module.css';

export const Loader = React.memo(props => {
	return (
		<div className={styles.loader}>
			Идет загрузка, пожалуйста подождите!
		</div>
	);
});
