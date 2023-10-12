'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import style from '../Header.module.scss';
import Link from 'next/link';

const NavLink = [
	{
		url: '/',
		title: 'Главная',
	},
	{
		url: '/posts',
		title: 'Посты',
	},
];

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
