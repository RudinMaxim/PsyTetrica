'use client';
import React from 'react';
import style from '../Header.module.scss';
import { useSession, signIn, signOut } from 'next-auth/react';
import { ProfileButton } from '@/components/exportComponents';
import { Button } from '@/UI/exportUI';

export default function ButtonList(): React.JSX.Element {
	const { data: session } = useSession();

	return (
		<div className={style.authButtonList}>
			{session?.user ? (
				<Button onClick={() => signOut({ callbackUrl: '/' })}>
					<ProfileButton
						name={session?.user.username}
						image={session.user.image}
					/>
				</Button>
			) : (
				<Button onClick={() => signIn()} background='primary'>
					Войти
				</Button>
			)}
		</div>
	);
}
