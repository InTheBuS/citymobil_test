import React from 'react';
import styles from './Error.module.css';

export const Error = React.memo(props => {
	return (
		<div className={styles.error}>
			Произошла ошибка. Попробуйте перезагрузить страницу!
		</div>
	);
});

