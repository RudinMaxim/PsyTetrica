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
	return <section className={style.PsyAllNeed}></section>;
}
