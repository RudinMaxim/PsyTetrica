'use client';
import React from 'react';
import style from '../Header.module.scss';
import { useSession, signIn, signOut } from 'next-auth/react';
import { FaSignOutAlt, FaBorderAll } from 'react-icons/fa';
import { ProfileButton } from '@/components/exportComponents';
import Link from 'next/link';

export default function ButtonList(): React.JSX.Element {
	const { data: session } = useSession();

	return (
		<div className={style.authButtonList}>
			{session?.user ? (
				<>
					{session?.user.username && (
						<button onClick={() => signOut({ callbackUrl: '/' })}>
							<ProfileButton
								name={session?.user.username}
								image={session.user.image}
							/>
						</button>
					)}
					<Link href={'/chat'}>Чаты</Link>
				</>
			) : <button onClick={() => signIn()}>Войти</button>}
		</div>
	);
}
