import React from 'react';
import style from './PsySection.module.scss';
import Link from 'next/link';
import { Button } from '@/UI/exportUI';
import { FaArrowRight } from 'react-icons/fa6';
import { ConnectLink } from '@/components/exportComponents';

export default function PsyHomeSection(): React.JSX.Element {
	return (
		<section className={style.PsyHomeSection}>
			<div className='continer'>
				<div className={style.TopBare}>
					{/* <div className={style.Info}>
						<h1>
							Cтаньте частью профессионального сообщества психологов PsyTetrica
						</h1>
						<ConnectLink to='/' text='Присоединиться' />
					</div> */}
				</div>
			</div>
		</section>
	);
}
