import React from 'react';
import style from './PsySection.module.scss';

export default function PsyDifferences(): React.JSX.Element {
	return (
		<section className={style.PsyDifferences}>
			<h2>
				Чем мы <span>отличаемся</span> от других?
			</h2>

			<div className={style.Grids}>
				<div className={`${style.Grid1} ${style.Grid}`}>
					<span>1</span>
					<h3>Lorem ipsum </h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore{' '}
					</p>
				</div>
				<div className={`${style.Grid2} ${style.Grid}`}>
					<span>2</span>
					<h3>Не мешаем вам работать</h3>
					<p>
						Вы работаете с клиентом на своей территории по своим правилам. Вы
						сами договариваетесь о первой сессии и способе оплаты своих услуг.
					</p>
				</div>
				<div className={`${style.Grid3} ${style.Grid}`}>
					<span>3</span>
					<h3>Развитие </h3>
					<p>
						Постоянно развиваем наш сервис, добавляем новые услуги и слушаем
						ваши идеи.
					</p>
				</div>
				<div className={`${style.Grid4} ${style.Grid}`}>
					<span>4</span>
					<div>
						<h3>Повышаем вашу узнаваемость</h3>
						<p>
							Мы приглашаем наших психологов в качестве гостей и экспертов в
							подкасты, для написания статей и проведения семинаров. Так
							специалисты сервиса могут повысить собственную узнаваемость и
							заявить о себе на широкую аудиторию.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
