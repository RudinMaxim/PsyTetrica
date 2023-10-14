'use client';
import { useSession } from 'next-auth/react';
import { z } from 'zod';
import axios from 'axios';
import { API_URL } from '@/lib/constants';
import { useEffect, useState } from 'react';

const userSchema = z.object({
	role: z.string().optional(),
	date_of_birth: z.string().optional(),
	image: z.string().optional(),
	description: z.string().optional(),
});

type User = z.infer<typeof userSchema>;

export default function ProfileSetup() {
	const { data: session } = useSession();
	const [Role, setRole] = useState(true);

	useEffect(() => {
		try {
			const result = axios.get(`${API_URL}/users/${session?.user.id}/role`);
			if (result === null) {
				setRole(false);
			}
		} catch (error) {
			console.log(error);
		}

		return () => {};
	}, []);

	return (
		<div>
			{Role === false ? (
				<div>
					<h3>Выберите роль</h3>
					<label htmlFor=''>
						<span>я клиент</span>
						<input type='radio' name='role' value={'Я клиент'} />
					</label>
					<label htmlFor=''>
						<span>Я психолог</span>
						<input type='radio' name='role' value={'Я психолог'} />
					</label>
				</div>
			) : null}
		</div>
	);
}
