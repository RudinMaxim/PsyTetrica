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
					<h3>Lorem ipsum </h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore{' '}
					</p>
				</div>
				<div className={`${style.Grid3} ${style.Grid}`}>
					<span>3</span>
					<h3>Lorem ipsum </h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore{' '}
					</p>
				</div>
				<div className={`${style.Grid4} ${style.Grid}`}>
					<span>4</span>
					<h3>Lorem ipsum </h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore{' '}
					</p>
				</div>
			</div>
		</section>
	);
}
