import React from 'react';
import style from '../PsyNeed.module.scss';
import Image from 'next/image';
import { tg2, vk2, YM2 } from '@/assets/image/image';

export default function SocialLinksCard(): React.JSX.Element {
	return (
		<ul className={style.SocialLinksCard}>
			<li>
				<Image src={tg2} alt='tg' />
				<p>
					Мы есть в <span>Telegram</span>
				</p>
			</li>
			<li>
				<Image src={vk2} alt='vk' />
				<p>
					Мы есть в <span>ВКонтакте</span>
				</p>
			</li>
			<li>
				<Image src={YM2} alt='YM' />
				<p>
					Наши подкасты в <span>Яндекс Музыке</span>
				</p>
			</li>
		</ul>
	);
}
