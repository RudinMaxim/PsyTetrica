import { Button, Input, RadioInput } from '@/UI/exportUI';
import React from 'react';
import { CLIENT_ROLE_ID, PSYCHOLOGIST_ROLE_ID } from '@/lib/constants';
export default function RegistrationForm({
	onSubmit,
	register,
	errors,
	texts,
}) {
	return (
		<form onSubmit={onSubmit}>
			<h1>{texts.title}</h1>

			<Input
				label={texts.usernameLabel}
				register={register('username')}
				error={errors.username}
			/>
			<Input
				label={texts.emailLabel}
				register={register('email')}
				error={errors.email}
			/>
			<Input
				label={texts.passwordLabel}
				register={register('password')}
				error={errors.password}
			/>
			<Input
				label={texts.confirmPasswordLabel}
				register={register('confirmPassword')}
				error={errors.password}
			/>
			<RadioInput
				name='role'
				value={CLIENT_ROLE_ID}
				label='Мне нужна помощь! Я Клиент'
			/>
			<RadioInput />
			<Button type='submit'>{texts.submitButtonText}</Button>
		</form>
	);
}
