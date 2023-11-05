import React from 'react';
import Link from 'next/link';
import style from './Footer.module.scss';
import { getCurrentYear } from '@/lib/utils';
import { Logo, SocialLinks } from '../exportComponents';
import NavBar from '../Header/components/NavBat';

export default function Footer() {
	const year = getCurrentYear().toString();
	const start = '2023';
	return (
		<footer className={style.Footer}>
			<div className='continer'>
				<div className={style.FooterHead}>
					<Logo />
					<NavBar />
					<SocialLinks />
				</div>

				<div className={style.Copyright}>
					Copyright &copy; {year == start ? `${year}` : `${start} - ${year}`},
					Все права защищены,
					<Link href={'/'}> PsyTetrica</Link>
				</div>
			</div>
		</footer>
	);
}
