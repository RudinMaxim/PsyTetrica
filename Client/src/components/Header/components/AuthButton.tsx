'use client';
import React from 'react';
import style from '../Header.module.scss';
import { useSession, signIn, signOut } from 'next-auth/react';
import { ConnectLink, ProfileButton } from '@/components/exportComponents';
import { Button } from '@/UI/exportUI';

export default function AuthButton(): React.JSX.Element {
	const { data: session } = useSession();

	return (
		<div className={style.AuthButton}>
			{session?.user ? (
				<Button onClick={() => signOut({ callbackUrl: '/' })}>
					{session.user.username}
				</Button>
			) : (
				<ConnectLink
					to='/'
					text='Войти'
					background='none'
					arrowColor='fifth'
					onClick={() => signIn()}
				/>
			)}
		</div>
	);
}
