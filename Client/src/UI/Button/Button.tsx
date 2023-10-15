import React, { Children } from 'react';
import style from './Button.module.scss';
interface IButton {
	children: React.ReactNode;
	type?: 'button' | 'submit' | 'reset';
	value?: string | string[];
	disabled?: boolean;
	tabIndex?: number;
	[key: string]: any;
}

export default function Button({
	children,
	type = 'button',
	value,
	disabled = false,
	tabIndex = 0,
	...rest
}: IButton) {
	return (
		<button
			className={`${style.Button}`}
			type={type}
			value={value}
			disabled={disabled}
			tabIndex={tabIndex}
			{...rest}>
			{children}
		</button>
	);
}
