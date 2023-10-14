'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';
import Link from 'next/link';
import { API_URL, PSYCHOLOGIST_ROLE_ID, CLIENT_ROLE_ID } from '@/lib/constants';
import { Toaster, toast } from 'sonner';

const schema = z
	.object({
		username: z.string().min(2),
		password: z.string().min(8),
		confirmPassword: z.string().min(8),
		email: z.string().email(),
		role_id: z.coerce.number().default(CLIENT_ROLE_ID),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword'],
	});

type FormValues = z.infer<typeof schema>;

export default function RegistrationPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
		mode: 'onBlur',
	});

	const onSubmit = async (data: FormValues) => {
		const { confirmPassword, ...sendInfo } = data;
		try {
			await axios.post(`${API_URL}/registration`, sendInfo);
			toast.success(`${sendInfo.username}, вы успешно зарегистрировались!`);
		} catch (error) {
			toast.error(`Чтото пошло не так! Ошибка: ${error}`);
		}
	};

	return (
		<>
			<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
						Зарегистрироваться
					</h2>
				</div>

				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label
								htmlFor='username'
								className='block text-sm font-medium leading-6 text-gray-900'>
								Ваше имя
							</label>
							<div className='mt-2'>
								<input
									{...register('username')}
									id='username'
									name='username'
									type='name'
									autoComplete='username'
									required
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
								<p>{errors.username && <div>Ошибка имения</div>}</p>
							</div>
						</div>
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium leading-6 text-gray-900'>
								Электронная почта
							</label>
							<div className='mt-2'>
								<input
									{...register('email')}
									id='email'
									name='email'
									type='email'
									autoComplete='email'
									required
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
						<div>
							<div className='flex items-center justify-between'>
								<label
									htmlFor='password'
									className='block text-sm font-medium leading-6 text-gray-900'>
									Пароль
								</label>
							</div>
							<div className='mt-2'>
								<input
									{...register('password')}
									id='password'
									name='password'
									type='password'
									autoComplete='current-password'
									required
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
						<div>
							<div className='flex items-center justify-between'>
								<label
									htmlFor='confirmPassword'
									className='block text-sm font-medium leading-6 text-gray-900'>
									Подтвердить пароль
								</label>
							</div>
							<div className='mt-2'>
								<input
									{...register('confirmPassword')}
									id='confirmPassword'
									name='confirmPassword'
									type='password'
									autoComplete='current-password'
									required
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
						<div>
							<div className='flex items-center justify-between'>
								<label className='block text-sm font-medium text-gray-700'>
									Ваша роль
								</label>
							</div>

							<div className='mt-4'>
								<div className='flex items-center'>
									<input
										{...register('role_id')}
										id='role_id_1'
										value={CLIENT_ROLE_ID}
										name='role_id'
										type='radio'
										className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
									/>
									<label
										htmlFor='role_id_1'
										className='ml-3 block text-sm font-medium text-gray-700'>
										Мне нужна помощь! Я Клиент
									</label>
								</div>

								<div className='flex items-center mt-4'>
									<input
										{...register('role_id')}
										id='role_id_2'
										name='role_id'
										value={PSYCHOLOGIST_ROLE_ID}
										type='radio'
										className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
									/>
									<label
										htmlFor='role_id_2'
										className='ml-3 block text-sm font-medium text-gray-700'>
										Я помогаю! Я психолог
									</label>
								</div>
							</div>
							<div>{errors.role_id && <p>{errors.role_id.message}</p>}</div>
						</div>

						<div>
							<button
								type='submit'
								className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
								Зарегистрироваться!
							</button>
						</div>
					</form>
					<div>
						<span>Вы уже зарегистрировались? </span>
						<Link href={'/api/auth/login'} className=' text-gray-700'>
							Войти
						</Link>
					</div>
					<Toaster richColors />
				</div>
			</div>
		</>
	);
}
