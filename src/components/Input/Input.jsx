import styles from './Input.module.css';
import React from 'react';

function Input({placeholder, value, onChangeSetter, onKeyPress}) {
	const onChangeHandler = (event) => {
		onChangeSetter(event.target.value);
	}
	return (
		<input onKeyPress={onKeyPress}
					 placeholder={placeholder}
					 className={styles.input}
					 value={value}
					 onChange={onChangeHandler}/>
	);
}

export default Input;
