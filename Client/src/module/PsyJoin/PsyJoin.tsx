import React from 'react';
import style from './PsyJoin.module.scss';
import { Teg } from '@/UI/exportUI';
import { ConnectLink } from '@/components/exportComponents';
import { checkmark } from '@/assets/image/image';
import Image from 'next/image';
export default function PsyJoin() {
	return (
		<div className='continer'>
			<section className={style.PsyJoin}>
				<div className={style.PsyJoinInner}>
					<div className={`${style.colum} ${style.colum1}`}>
						<Teg text='полезно' color='primary' />
						<h2>Как присоединиться к сообществу?</h2>
						<p className={style.text}>
							Всего два шага отделяют вас от того чтобы стать частью сервиса
							PsyTetrica, присоединить к 100+ психологам, найти клиентов, стать
							узнаваемым психологом и повысить свою экспертность на максимум.
						</p>
						<ConnectLink
							to='/'
							text='Зарегистрироваться'
							background='primary'
							arrowColor='primary'
						/>
					</div>
					<div className={style.colum}>
						<article>
							<b>1</b>
							<h3>Зарегистрируйтесь на сайте</h3>
							<p className={style.text}>
								Пройдите короткую регистрацию и заполните анкету, в течении 2
								дней при одобрении анкеты вы получите ссылку на оплату.
							</p>
						</article>
						<article>
							<b>2</b>
							<h3>Получите доступ</h3>
							<p className={style.text}>
								После оплаты вы мгновенно получите доступ ко всем действующим
								услугам сервиса и сможете записаться на все мероприятия
							</p>
						</article>
					</div>
				</div>

				<div className={style.bgPsy2}></div>

				<div className={style.under}>
					<div className={style.colum}>
						<h2>
							Нам важно серьезное отношение к делу, а также бережность и
							этичность
						</h2>
						<p>
							Поэтому мы выдвигаем особые требования к психологам позволяющие
							нам быть более уверенными в их компетентности (только для
							психологов которые хотят выложить анкету)
						</p>
					</div>
					<div className={style.colum}>
						<ul className={style.ListCheckMark}>
							<li>
								<Image src={checkmark} alt='checkmark' />
								<p>
									Высшее образование по психологии или переподготовка от 500
									часов
								</p>
							</li>
							<li>
								<Image src={checkmark} alt='checkmark' />
								<p>обучение от 30 часов как минимум одному подходу</p>
							</li>
							<li>
								<Image src={checkmark} alt='checkmark' />
								<p>
									Ваше образование не должно содеражть эзотерических практик и
									ненаучных подходв
								</p>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}
