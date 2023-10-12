import React from 'react';
import style from './ProfileButton.module.scss';
import Image from 'next/image';
import { getFirstLetters } from '../../lib/utils';

interface IProfileButton {
	name: string;
	image?: string;
}

export default function ProfileButton({
	name,
	image,
}: IProfileButton): React.JSX.Element {
	let initials: string = '';

	if (!image || image === undefined || image === null) {
		getFirstLetters(name);
	}

	return (
		<div className={style.ProfileButton}>
			{image ? (
				<Image src={`/${image}`} alt={``} width={20} height={20} />
			) : (
				<span className={style.initials}>{initials}</span>
			)}

			<div className={style.info}>
				<span>{name}</span>
			</div>
		</div>
	);
}
