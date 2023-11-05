import React from 'react';
import Link from 'next/link';
import style from './SocialLinks.module.scss';
import { tg, vk, YM } from '@/assets/image/image';
import Image from 'next/image';

export default function SocialLinks(): React.JSX.Element {
	return (
		<ul className={style.SocialLinks}>
			<li>
				<Link href={'https://t.me/Psyrega_bot'}>
					<Image src={tg} alt='TG' />
				</Link>
			</li>
			<li>
				<Link href={'https://vk.com/psytetrica'}>
					<Image src={vk} alt='VK' />
				</Link>
			</li>
		</ul>
	);
}
