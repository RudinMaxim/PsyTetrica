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

export const PsyAllNeedCard = [
	{
		title: 'Супервизии',
		text: 'Бесплатные супервизии от ведущих специалистов. Супервизии проходят несколько раз в неделю, у вас есть возможность выбрать подходящую группу. Выдается сертификат при посещении 10+ часов',
		url: 'http://localhost:3000/ForPsy',
	},
	{
		title: 'Интервизии',
		text: 'Возможность предоставить кейс в кругу равных и получить обратную связь от коллег. Еженедельное мероприятие позволяющие получить сертификат для повышения лояльности клиентов и возможность получить пятизвездочную анкету в вашей анкете',
		url: 'http://localhost:3000/ForPsy',
	},
	{
		title: 'Доступ к каналу',
		text: 'Доступ к эксклюзивному каналу с материалами, включающие в себя вебинары, курсы, шпаргалки, техники, редкие книги и переводы статей',
		url: 'http://localhost:3000/ForPsy',
	},
	{
		title: 'Подкасты',
		text: 'У каждого психолога есть возможность подать заявку на участие в подкасте. Несмотря на то что один эпизод подкаста стоит от 15 тысяч рублей, психологам нашего сообщества мы даем возможность сделать подкаст совершенно бесплатно, от вас нужны только материалы. Наша команда возьмет всю работу на себя ',
		url: 'http://localhost:3000/ForPsy',
	},
	{
		title: 'Групповая терапия',
		text: 'В нашем сообществе несколько раз в неделю проводится бесплатная групповая терапия, благодаря которой вы можете не только развиваться и самосовершенствоваться, но и набрать недостающие часы терапии',
		url: 'http://localhost:3000/ForPsy',
	},
	{
		title: 'Обучение',
		text: 'При подписке на сервис у вас есть возможность пройти обучение у опытных психологов обучавшихся на зарубежных программах, показываших высокую эффективность в работе с клиентами, а также у психологов получивших аккредитацию в “Международной ассоциации психологов” что дает им возможность выпускать аккредитованные курсы и вебинары.',
		url: null,
	},
	{
		title: 'Клиенты',
		text: 'После окончания разработки сайта мы будем активно развивать сферу заявок для психологов. Подключившись к сервису сейчас. У вас есть возможность закрепить за собой стоимость подписки, после развития сферы заявок планируется значительное повышение цен. Но мы все еще не будем брать с вас комиссию за клиентов',
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
