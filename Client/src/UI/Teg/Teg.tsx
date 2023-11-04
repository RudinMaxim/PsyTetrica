import React, { Children } from 'react';
import style from './Teg.module.scss';

interface ITeg {
	color?: 'primary' | 'secondary' | 'tertiary' | 'fourthly';
	text?: string;
	[key: string]: any;
}

export function Teg({ color = 'primary', text, ...rest }: ITeg) {
	let backgroundClass = '';
	switch (color) {
		case 'primary':
			backgroundClass = style.Primary;
			break;
		case 'secondary':
			backgroundClass = style.Secondary;
			break;
		case 'tertiary':
			backgroundClass = style.Tertiary;
			break;
		case 'fourthly':
			backgroundClass = style.Fourthly;
			break;
		default:
			backgroundClass = style.Primary;
	}
	return (
		<article className={`${style.teg} ${backgroundClass}`} {...rest}>
			<span className={style.point}></span>
			{text}
		</article>
	);
}
