import Link from 'next/link';
import React from 'react';
import style from './ConnectLink.module.scss';
import { FaArrowRight } from 'react-icons/fa6';
interface ILink {
	to: string;
	text?: string;
	background:
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'fourthly'
		| 'fifth'
		| 'none';

	arrowColor:
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'fourthly'
		| 'fifth'
		| 'none';
	[key: string]: any;
}

export default function ConnectLink({
	to,
	text,
	background = 'primary',
	arrowColor = 'primary',
	...rest
}: ILink) {
	const backgroundClasses = {
		primary: style.Primary,
		secondary: style.Secondary,
		tertiary: style.Tertiary,
		fourthly: style.Fourthly,
		fifth: style.Fifth,
		none: style.None,
	};
	let backgroundClass = backgroundClasses[background] || style.Primary;

	const arrowClasses = {
		primary: style.arrowPrimary,
		secondary: style.arrowSecondary,
		tertiary: style.arrowTertiary,
		fourthly: style.arrowFourthly,
		fifth: style.arrowFifth,
		none: style.arrowNone,
	};
	let arrowClass = arrowClasses[arrowColor] || style.Primary;

	return (
		<Link
			href={to}
			className={`${style.ConnectLink} ${backgroundClass} ${arrowClass}`}
			{...rest}>
			<span>{text}</span>
			<FaArrowRight />
		</Link>
	);
}
