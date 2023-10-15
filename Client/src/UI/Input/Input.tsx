import React from 'react';
import style from './Input.module.scss';
interface IputProps {
	label: string;
	register: any;
	error: any;
}

export function Input({ label, register, error }: IputProps) {
	return (
		<div className={style.Input}>
			<label>
				<span>{label}</span>
				<input {...register} />
			</label>
			{error && error.message}
		</div>
	);
}
export function RadioInput({
	name,
	value,
	checked,
	onChange,
	label,
	error,
}: IputProps) {
	return (
		<div className={style.RadioInput}>
			<label>
				<span>{label}</span>
				<input
					name={name}
					value={value}
					checked={checked}
					onChange={onChange}
					type='radio'
				/>
			</label>
			{error && error.message}
		</div>
	);
}
