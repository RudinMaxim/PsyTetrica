import React from 'react';
import style from './PsyNeed.module.scss';
import SocialLinksCard from './components/SocialLinksCard';
import PsyNeedGrid from './components/PsyNeedGrid';

export default function PsyNeed(): React.JSX.Element {
	return (
		<section className={style.PsyNeed}>
			<div className={style.PsyNeedTopBar}>
				<h3>PsyTetrica это сервис объединивший 100+ психологов</h3>
				<p className={style.text}>
					Помогаем психологам набрать часы супервизии, терапии, повысить свою
					экспертность и найти клиентов. Крупнейшая платформа для психологов на
					базе Telegram. Целый спектр услуг в одной подписке.
				</p>
				<SocialLinksCard />
			</div>
			<div className='continer'>
				<PsyNeedGrid />
			</div>
		</section>
	);
}
