import Link from 'next/link';
import React from 'react';
import style from './Link.module.scss';
import { Button } from '@/UI/exportUI';
import { FaArrowRight } from 'react-icons/fa6';
interface ILink {
	to: string;
	text?: string;
	[key: string]: any;
}

export default function ConnectLink({ to, text, ...rest }: ILink) {
	return (
		<span className={style.ConnectLink} {...rest}>
			<Link href={to}>
				<span>{text}</span>
				<Button shape='circle' background='secondary'>
					<FaArrowRight />
				</Button>
			</Link>
		</span>
	);
}
