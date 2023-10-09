'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';
import Link from 'next/link';
import { API_URL } from '@/lib/constants';
import { Toaster, toast } from 'sonner';

const schema = z
	.object({
		username: z.string().min(3),
		password: z.string().min(6),
		confirmPassword: z.string().min(6),
		email: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword'],
	});

type FormValues = z.infer<typeof schema>;

export default function RegistrationPage() {
	const { register, handleSubmit } = useForm<FormValues>({
		resolver: zodResolver(schema),
	});

	const onSubmit = async (data: FormValues) => {
		const { confirmPassword, ...NewData } = data;

		try {
			await axios.post(`${API_URL}/registration`, NewData);
			toast.success(`${NewData.username}, вы успешно зарегистрировались!`);
		} catch (error) {
			console.error(error);
			toast.error(`Чтото пошло не так! Ошибка: ${error}`);
		}
	};

	return (
		<>
			<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
						Sign up
					</h2>
				</div>

				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label
								htmlFor='username'
								className='block text-sm font-medium leading-6 text-gray-900'>
								username
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
							</div>
						</div>
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium leading-6 text-gray-900'>
								Email address
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
									Password
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
									confirmPassword
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
							<button
								type='submit'
								className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
								Sign Up
							</button>
						</div>
					</form>
					<Link href={'/login'}>login</Link>
					<Toaster richColors />
				</div>
			</div>
		</>
	);
}
