import React, { ReactNode } from 'react';

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className='bg-sky-950'>{children}</div>;
}
