import React from 'react';
import styles from './Header.module.css';

export const Header = React.memo(props => {
	return (
		<div className={styles.header}>Header</div>
	);
});