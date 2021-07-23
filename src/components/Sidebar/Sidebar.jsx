import React from 'react';
import styles from './Sidebar.module.css';

export const Sidebar = React.memo(props => {
	return (
		<div className={styles.aside}>Sidebar</div>
	);
});