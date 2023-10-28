import React from 'react';
import Image from 'next/image';
import style from './Logo.module.scss';
import Link from 'next/link';
export default function Logo() {
	return (
		<Link href={'/'} className={style.Logo}>
			<Image src={'/logo.svg'} alt='Logo' width={40} height={40} />
			<p className={style.textLogo}>PsyTetrica</p>
		</Link>
	);
}
