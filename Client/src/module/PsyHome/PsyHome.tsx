import React from 'react';
import style from './PsyHome.module.scss';
import { ConnectLink } from '@/components/exportComponents';

export default function PsyHome(): React.JSX.Element {
	return (
		<section className={style.PsyHome}>
			<div className='continer'>
				<div className={style.PsyHomeInner}>
					<div className={style.Info}>
						<h1>
							Cтаньте частью профессионального сообщества психологов PsyTetrica
						</h1>
						<ConnectLink
							to='https://t.me/Psyrega_bot'
							text='Присоединиться'
							arrowColor='primary'
							background='none'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
