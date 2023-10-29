'use client';
import React from 'react';
import style from './PsySection.module.scss';
import { PsyAllNeedCard } from '@/lib/constants';
import { Button } from '@/UI/exportUI';
import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

export default function PsyAllNeed(): React.JSX.Element {
	const isMobile: boolean = useMediaQuery({ maxWidth: 768 });
	return (
		<section className={style.PsyAllNeed}>
			<h2>Все что нужно психологу в одном месте</h2>

			<ul className={style.CardList}>
				{PsyAllNeedCard.map((item, index) => (
					<li key={index}>
						<div className={style.Card}>
							<h3>{item.title}</h3>
							{isMobile && <p>{item.text}</p>}
							<span>
								{item.url == null ? (
									<p>В разработке...</p>
								) : (
									<Link href={item.url}>
										<span>Узнать больше</span>
										<Button shape='circle' background='fourthly'>
											<FaArrowRightLong />
										</Button>
									</Link>
								)}
							</span>
						</div>

						{!isMobile && <p className={style.text}>{item.text}</p>}
					</li>
				))}
			</ul>
		</section>
	);
}
