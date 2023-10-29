'use client';
import React, { useEffect, useState } from 'react';

import style from './Header.module.scss';
import { Logo } from '../exportComponents';
import NavBar from './components/NavBat';
import ButtonList from './components/ButtonList';

import { useMediaQuery } from 'react-responsive';
import { FaBars, FaMinus } from 'react-icons/fa6';
import Link from 'next/link';

export default function Header(): React.JSX.Element {
	const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
	const isMobile: boolean = useMediaQuery({ maxWidth: 768 });

	const handleMenuClick = (): void => {
		setMenuOpen((el: boolean) => !el);
	};

	useEffect(() => {
		if (isMobile === true) {
			document.body.style.overflow = isMenuOpen ? 'hidden' : 'visible';
		}
		return () => {
			document.body.style.overflow = 'visible';
		};
	}, [isMenuOpen, isMobile]);

	return (
		<>
			<div className='continer'>
				<header className={style.Header}>
					{!isMobile ? (
						<>
							<Logo />
							<NavBar onMenuToggle={handleMenuClick} />
							<ButtonList />
						</>
					) : (
						<>
							<Logo />
							<FaBars
								onClick={handleMenuClick}
								className={style.menuIconMobil}
							/>
						</>
					)}
				</header>
			</div>

			{isMobile && isMenuOpen && (
				<div className={style.mobileMenu}>
					<FaMinus className={style.closeIcon} onClick={handleMenuClick} />
					<NavBar onMenuToggle={handleMenuClick} />
					<ButtonList />
				</div>
			)}
		</>
	);
}
