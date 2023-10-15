const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
const WEBSOCKET_URL =
	process.env.NEXT_PUBLIC_WEBSOCKET_URL || 'ws://127.0.0.1:8080';
export { API_URL, WEBSOCKET_URL };

const CLIENT_ROLE_ID = 1;
const PSYCHOLOGIST_ROLE_ID = 2;
const ADMIN_ROLE_ID = 3;
const SUPPORT_ROLE_ID = 4;
export { CLIENT_ROLE_ID, PSYCHOLOGIST_ROLE_ID, ADMIN_ROLE_ID, SUPPORT_ROLE_ID };

export const NavLink = [
	{
		url: '/#about',
		title: 'О нас',
	},
	{
		url: '/Materials',
		title: 'Материалы',
	},
	{
		url: '/TestPsy',
		title: 'Тесты',
	},
	{
		url: '/ForPsy',
		title: 'Для психологов',
	},
];
