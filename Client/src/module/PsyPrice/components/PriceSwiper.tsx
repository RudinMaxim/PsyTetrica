'use client';
import React from 'react';
import style from '../PsyPrice.module.scss';
import { useMediaQuery } from 'react-responsive';
import TariffCard from './TariffCard';
import { Tariff } from '@/lib/constants';

import 'swiper/css';
import { SwiperSlide, Swiper } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

export default function PriceSwiper() {
	const isMobile: boolean = useMediaQuery({ maxWidth: 768 });
	return (
		<Swiper
			slidesPerView={isMobile ? 1 : 4}
			spaceBetween={15}
			initialSlide={2}
			centeredSlides={true}
			freeMode={true}
			pagination={{
				clickable: true,
			}}
			modules={[FreeMode, Pagination]}
			className={style.mySwiper}>
			{Tariff.map((item) => (
				<SwiperSlide key={item.name}>
					<TariffCard {...item} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}
