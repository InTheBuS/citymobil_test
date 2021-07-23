import styles from './Button.module.css';
import React from 'react';

function Button({text, onClick, value}) {
	const onClickHandler = () => {
		onClick(value);
	}

	return (
		<button className={styles.button} onClick={onClickHandler}>{text}</button>
	);
}

export default Button;
