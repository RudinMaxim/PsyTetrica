import React from 'react';
import style from './Input.module.scss';
interface IputProps {
	label?: string;
	register?: any;
	placeholder?: string;
	error?: any;
	type: 'text' | 'email';
}

export function Input({
	label,
	register,
	error,
	placeholder,
	type = 'text',
}: IputProps) {
	return (
		<div className={style.Input}>
			<label>{label}</label>
			<input {...register} placeholder={placeholder} type={type} />

			<span>{error && error.message}</span>
		</div>
	);
}
