'use client';
import React, { useState } from 'react';
import style from './PsyFAQ.module.scss';
import Link from 'next/link';
import { FAQ, IFAQ } from '@/lib/constants';
import { FaMinus, FaPlus } from 'react-icons/fa6';

export default function PsyFAQ() {
	const [isOpen, setIsOpen] = useState<boolean[]>(
		Array(FAQ.length).fill(false)
	);

	const toggleCollapse = (index: number) => {
		setIsOpen((prev) => {
			const newState = [...prev];
			newState[index] = !newState[index];
			return newState;
		});
	};
	return (
		<div className='continer'>
			<section className={style.PsyFAQ}>
				<h2>FAQ</h2>
				<div className={style.text}>
					<p className={style.subTitleFAQ}>
						Мы собрали часто задаваемые в одном блоке чтобы вы могли найти для
						себя ответы. Если ответа на ваш вопрос здесь нет, пишите напрямую
						создателю сервиса <Link href={''}>@Stag159</Link> в личные сообщения
						в Telegram
					</p>
				</div>
				<ul>
					{FAQ.map((question: IFAQ, index: number) => (
						<li key={index}>
							<div
								className={style.title}
								onClick={() => toggleCollapse(index)}>
								<span>{isOpen[index] ? <FaMinus /> : <FaPlus />}</span>
								<p>{question.question}</p>
							</div>
							{isOpen[index] && (
								<p className={style.answer}>{question.answer}</p>
							)}
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}
