import React from 'react';
import style from '../PsyPrice.module.scss';
import { ITariff } from '@/lib/constants';
import { Button, Teg } from '@/UI/exportUI';
import { FaArrowRight } from 'react-icons/fa6';
import { checkmark, uncheckmark } from '@/assets/image/image';
import Image from 'next/image';

export default function TariffCard({
	name,
	price,
	options,
	color,
}: ITariff): React.JSX.Element {
	return (
		<div className={style.TariffCard}>
			<div className={style.TariffHead}>
				<Teg text={name} color={color} />
				<h4 className={style.Price}>{price}&#8381;</h4>
				<p className={style.subTitle}>в месяц</p>
			</div>

			<ul className={style.TariffBody}>
				{options.map((el) => (
					<li key={el.name}>
						{el.active ? (
							<p style={{ opacity: 1 }}>
								<Image alt={el.name} src={checkmark} />
								<span>{el.name}</span>
							</p>
						) : (
							<p style={{ opacity: 0.8 }}>
								<Image alt={el.name} src={uncheckmark} />
								<span>{el.name}</span>
							</p>
						)}
					</li>
				))}
			</ul>

			<div className={style.TariffFooter}>
				<p>Рекомендуем, если подписка окупается за 2 - 3 сессии у вас.</p>
				<Button shape='circle' background={color}>
					<FaArrowRight />
				</Button>
			</div>
		</div>
	);
}
