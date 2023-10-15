'use client';

import { Button } from '@/UI/exportUI';
import { signIn } from 'next-auth/react';
import React from 'react';

export default function HomeSection() {
	return <Button onClick={() => signIn()}>Тут будет вход для клиентов</Button>;
}
