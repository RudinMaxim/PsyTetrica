import React from 'react';
import style from '../PsyNeed.module.scss';
import Image from 'next/image';
import { tg2, vk2, YM2 } from '@/assets/image/image';
import Link from 'next/link';

export default function SocialLinksCard(): React.JSX.Element {
	return (
		<ul className={style.SocialLinksCard}>
			<Link href='https://t.me/Psyrega_bot'>
				<Image src={tg2} alt='tg' />
				<p>
					Мы есть в <span>Telegram</span>
				</p>
			</Link>
			<Link href={'https://vk.com/psytetrica'}>
				<Image src={vk2} alt='vk' />
				<p>
					Мы есть в <span>ВКонтакте</span>
				</p>
			</Link>
			<li>
				<Image src={YM2} alt='YM' />
				<p>
					Наши подкасты в <span>Яндекс Музыке</span>
				</p>
			</li>
		</ul>
	);
}
