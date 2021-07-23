import React from 'react';
import styles from './Footer.module.css';

export const Footer = React.memo(props => {
	return (
		<div className={styles.footer}>Footer</div>
	);
});
