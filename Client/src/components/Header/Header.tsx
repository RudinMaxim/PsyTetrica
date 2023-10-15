import React from 'react';
import style from './Header.module.scss';
import { Logo } from '../exportComponents';
import NavBar from './components/NavBat';
import ButtonList from './components/ButtonList';

export default function Header() {
	return (
		<header className={style.Header}>
			<div className={style.HeaderInner}>
				<Logo />
				<div className={style.HeaderRightSide}>
					<NavBar />
					<ButtonList />
				</div>
			</div>
		</header>
	);
}
