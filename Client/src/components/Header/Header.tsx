'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

export default function Header() {
	const { data: session } = useSession();

	return (
		<div className='bg-gradient-to-b from-cyan-50 to-cyan-200 p-2 flex gap-5 '>
			<div className='ml-auto flex gap-2'>
				<p>{session?.user.username}</p>
				{session?.user ? (
					<button className='text-red-500' onClick={() => signOut()}>
						Sign Out
					</button>
				) : (
					<button onClick={() => signIn()} className='text-green-600'>
						Sign In
					</button>
				)}
			</div>
		</div>
	);
}
