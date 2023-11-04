const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
const WEBSOCKET_URL =
	process.env.NEXT_PUBLIC_WEBSOCKET_URL || 'ws://127.0.0.1:8080';
export { API_URL, WEBSOCKET_URL };

const CLIENT_ROLE_ID = 1;
const PSYCHOLOGIST_ROLE_ID = 2;
const ADMIN_ROLE_ID = 3;
const SUPPORT_ROLE_ID = 4;
export { CLIENT_ROLE_ID, PSYCHOLOGIST_ROLE_ID, ADMIN_ROLE_ID, SUPPORT_ROLE_ID };

interface INavLink {
	url: string;
	title: string;
}
export const NavLink: INavLink[] = [
	{
		url: '/',
		title: 'Главная',
	},
	{
		url: '/ForPsy',
		title: 'Для психологов',
	},
];

interface IPsyNeedCard {
	title: string;
	text: Array<string>;
	url: string | null;
}
export const PsyNeedCard: IPsyNeedCard[] = [
	{
		title: 'Супервизии',
		text: [
			'Бесплатные',
			'Два раза в неделю',
			'Выдаем сертификаты',
			'Наши супервизоры - члены',
			'международых ассоциаций И ОППЛ',
		],
		url: '/ForPsy',
	},
	{
		title: 'Клиенты',
		text: [
			'без комиссий',
			'клиент платит лично вам',
			'работаете на своей территории',
			'сами договариваетесь о сессиях',
		],
		url: 'http://localhost:3000/ForPsy',
	},
	{
		title: 'Групповая терапия',
		text: [
			'бесплатно',
			'два раза в неделю',
			'выдаем сертификат',
			'помогаем накопить часы',
		],
		url: 'http://localhost:3000/ForPsy',
	},
	{
		title: 'Интервизии',
		text: [
			'бесплатно',
			'раз в неделю',
			'выдаем сертификат',
			'повышаем рейтинг анкеты на сайте',
		],
		url: 'http://localhost:3000/ForPsy',
	},
	{
		title: 'Обучение',
		text: [
			'сертификат с международной аккредитацией',
			'спикеры с зарубежным образованием',
			'вы выбираете спикеров',
			'доступная цена',
		],
		url: 'http://localhost:3000/ForPsy',
	},
	{
		title: 'Подкасты',
		text: [
			'приглашаем вас как экспертов',
			'постпродакшн, дизайн оплачиваем мы',
			'публикация на Яндекс.музыке',
			'от вас нужен только материал',
		],
		url: null,
	},
	{
		title: 'База знаний',
		text: [
			'эксклюзивные материалы',
			'переводы статей',
			'полезные техники',
			'шпаргалки',
			'редкие книги',
		],
		url: null,
	},
];
export interface IFAQ {
	question: string;
	answer: string;
}
export const FAQ: IFAQ[] = [
	{
		question:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore?',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
	},
	{
		question:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore?',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
	},
	{
		question:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore?',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
	},
];
