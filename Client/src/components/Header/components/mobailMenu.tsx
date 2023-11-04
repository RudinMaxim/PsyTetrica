import React from 'react';
import Image from 'next/image';
import style from '../Header.module.scss';
import NavBar from './NavBat';
import AuthButton from './AuthButton';
import { Logo, SocialLinks } from '@/components/exportComponents';
import { burger } from '@/assets/image/image';

interface IMobailMenu {
	onMenuToggle: () => void;
}

export default function MobailMenu({ onMenuToggle }: IMobailMenu) {
	return (
		<div className={style.mobileMenu}>
			<div className={style.TopBarMenu}>
				<Logo />
				<Image src={burger} alt='burger' onClick={onMenuToggle} />
			</div>
			<div>
				<NavBar onMenuToggle={onMenuToggle} />
				<SocialLinks />
				<AuthButton />
			</div>
		</div>
	);
}
