'use client';
import React from 'react';
import style from '../Header.module.scss';
import { usePathname } from 'next/navigation';
import { NavLink } from '@/lib/constants';
import Link from 'next/link';

export default function NavBar() {
	const currentRoute = usePathname();
	return (
		<nav className={style.NavBar}>
			<ul>
				{NavLink.map((link, index) => (
					<li
						key={index}
						className={
							currentRoute === link.url
								? style.activeStyle
								: style.nonActiveStyle
						}>
						<Link href={link.url}>{link.title}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
