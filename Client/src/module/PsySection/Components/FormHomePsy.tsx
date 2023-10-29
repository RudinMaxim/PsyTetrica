'use client';
import React from 'react';
import style from '../PsySection.module.scss';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, Input } from '@/UI/exportUI';

const schema = z.object({
	email: z.string().email('Неверный формат email'),
});
type FormValues = z.infer<typeof schema>;
export default function FormHomePsy() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: FormValues) => {
		console.log(data);
	};
	return (
		<form className={style.FormHomePsy}>
			<Input
				register={register}
				error={errors.email}
				type='email'
				placeholder='Ваш e-mail'
			/>
			<Button background='fourthly' onClick={handleSubmit(onSubmit)}>
				Начать
			</Button>
		</form>
	);
}
