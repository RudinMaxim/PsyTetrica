import React from 'react';
import Link from 'next/link';
import style from './SocialLinks.module.scss';
import { FaYandex, FaTelegram, FaVk } from 'react-icons/fa6';

export default function SocialLinks(): React.JSX.Element {
	return (
		<ul className={style.SocialLinks}>
			<li>
				<Link href={'#'}>
					<FaYandex />
				</Link>
			</li>
			<li>
				<Link href={'#'}>
					<FaTelegram />
				</Link>
			</li>
			<li>
				<Link href={'#'}>
					<FaVk />
				</Link>
			</li>
		</ul>
	);
}
