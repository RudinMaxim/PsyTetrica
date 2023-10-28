'use client';
import React from 'react';

import style from './Header.module.scss';
import { Logo } from '../exportComponents';
import NavBar from './components/NavBat';
import ButtonList from './components/ButtonList';

import { useMediaQuery } from 'react-responsive';
import { FaBars } from 'react-icons/fa6';

export default function Header(): React.JSX.Element {
	const isMobile: boolean = useMediaQuery({ maxWidth: 954 });
	return (
		<div className='continer'>
			<header className={style.Header}>
				{!isMobile ? (
					<>
						<Logo />
						<NavBar />
						<ButtonList />
					</>
				) : (
					<>
						<Logo />
						<FaBars onClick={console.log('a')} />
					</>
				)}
			</header>
		</div>
	);
}
