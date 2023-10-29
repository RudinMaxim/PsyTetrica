import React from 'react';
import Link from 'next/link';
import style from './Footer.module.scss';
import { getCurrentYear } from '@/lib/utils';

export default function Footer() {
	const year = getCurrentYear().toString();
	const start = '2023';
	return (
		<footer className={style.Footer}>
			&copy; {year == start ? `${year}` : `${start} - ${year}`}, Все права
			защищены,
			<Link href={'/'}> PsyTetrica</Link>
		</footer>
	);
}
