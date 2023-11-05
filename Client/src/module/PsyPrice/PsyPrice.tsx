import React from 'react';
import style from './PsyPrice.module.scss';
import { Teg } from '@/UI/exportUI';
import PriceSwiper from './components/PriceSwiper';
export default function PsyPrice() {
	return (
		<div className='continer'>
			<section className={`${style.PsyPrice}`}>
				<div className={style.Head}>
					<Teg color='primary' text='гибкая подписка' />
					<h2 className={style.Title}>Прайс на подписку</h2>
					<p className={style.subTitle}>
						Развивайтесь, получайте сертификаты и повышайте квалификацию по
						минимальной цене.
					</p>
				</div>
				<PriceSwiper />
			</section>
		</div>
	);
}
