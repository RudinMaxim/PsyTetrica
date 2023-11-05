'use client';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import style from '../PsyNeed.module.scss';
import { Teg } from '@/UI/exportUI';
import { PsyNeedCard } from '@/lib/constants';
import { FaArrowRight } from 'react-icons/fa6';

export default function PsyNeedGrid() {
	const isMobile: boolean = useMediaQuery({ maxWidth: 768 });
	return (
		<div className={style.PsyNeedGrid}>
			<div className={style.Title}>
				<Teg text='Наши услуги' color='primary' />
				<h2>Все что нужно психологу в одной подписке</h2>
			</div>
			{PsyNeedCard.map((item, index) => (
				<div key={index} className={`${style.card} ${style.card}${index + 1}`}>
					<div className={style.cardTitle}>
						<h3>{item.title}</h3>
						{isMobile &&
							(item.url !== null ? (
								<Link href={`${item.url}`}>
									<FaArrowRight className={style.icons} />
								</Link>
							) : (
								<div>В разработке...</div>
							))}
					</div>
					<ul>
						{item.text.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
					{!isMobile &&
						(item.url !== null ? (
							<Link className={style.More} href={`${item.url}`}>
								<span>Узнать больше</span>

								<FaArrowRight className={style.icons} />
							</Link>
						) : (
							<div className={style.More}>В разработке...</div>
						))}
				</div>
			))}
		</div>
	);
}
