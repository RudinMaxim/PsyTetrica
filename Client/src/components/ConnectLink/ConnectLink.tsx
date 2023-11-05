import Link from 'next/link';
import React from 'react';
import style from './ConnectLink.module.scss';
import { Button } from '@/UI/exportUI';
import { FaArrowRight } from 'react-icons/fa6';
interface ILink {
	to: string;
	text?: string;
	background?:
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'fourthly'
		| 'fifth'
		| 'none';
	arrowColor?:
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
	...rest
}: ILink) {
	let backgroundClass = '';
	switch (background) {
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
		case 'fifth':
			backgroundClass = style.Fifth;
			break;
		case 'none':
			backgroundClass = style.None;
			break;
		default:
			backgroundClass = style.Primary;
	}
	return (
		<span className={`${style.ConnectLink} ${backgroundClass}`} {...rest}>
			<Link href={to}>
				<span>{text}</span>
				<Button shape='circle' background='secondary'>
					<FaArrowRight />
				</Button>
			</Link>
		</span>
	);
}
