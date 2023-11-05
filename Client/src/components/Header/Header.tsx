'use client';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import style from './Header.module.scss';
import Image from 'next/image';
import { burger } from '@/assets/image/image';

import NavBar from './components/NavBat';
import MobailMenu from './components/mobailMenu';
import { Logo } from '../exportComponents';
import { Button } from '@/UI/exportUI';

export default function Header(): React.JSX.Element {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
	const isMobile: boolean = useMediaQuery({ maxWidth: 768 });

	const handleMenuClick = (): void => {
		setMobileMenuOpen((el: boolean) => !el);
	};

	useEffect(() => {
		if (isMobile && isMobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [isMobileMenuOpen, isMobile]);

	return (
		<>
			<header className={style.Header}>
				{!isMobile && (
					<>
						<Logo />
						<NavBar onMenuToggle={handleMenuClick} />
						<Button background='none' shape='square' type='submit'>
							Войти
						</Button>
					</>
				)}
				{isMobile && (
					<>
						<Logo />
						<Image src={burger} alt='burger' onClick={handleMenuClick} />
					</>
				)}
			</header>

			{isMobile && isMobileMenuOpen && (
				<MobailMenu onMenuToggle={handleMenuClick} />
			)}
		</>
	);
}
