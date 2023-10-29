import React from 'react';
import style from './PsySection.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { startingPsy } from '@/assets/image/image';
import { SocialLinks } from '@/components/exportComponents';
import FormHomePsy from './Components/FormHomePsy';

export default function PsyHomeSection(): React.JSX.Element {
	return (
		<section className={style.PsyHomeSection}>
			<div className={style.TopBare}>
				<div className={style.Info}>
					<h1>
						Cтаньте частью профессионального сообщества психологов{' '}
						<span>PsyTetrica</span>
					</h1>
					<FormHomePsy />
					<p>
						Связаться с создателем сервиса в Telegram{' '}
						<Link href={''}>@Stag159</Link>
					</p>
					<SocialLinks />
				</div>
				<Image src={startingPsy} height={550} width={650} alt='startingPsy' />
			</div>
			<div className={style.UnderBare}>
				<h3>PsyTetrica это сервис объединивший 90+ психологов</h3>
				<div className={style.UnderColum}>
					<p>Крупнейшая платформа для психологов на базе Telegram</p>
					<p>Целый спектр услуг в одной подписке</p>
					<p>Самый обширный информационный ресурс</p>
				</div>
			</div>
		</section>
	);
}
