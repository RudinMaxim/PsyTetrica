import style from './Button.module.scss';
interface IButton {
	children: React.ReactNode;
	type?: 'button' | 'submit' | 'reset';
	value?: string | string[];
	disabled?: boolean;
	tabIndex?: number;
	background?: 'primary' | 'secondary' | 'tertiary' | 'fourthly';
	[key: string]: any;
}

export default function Button({
	children,
	type = 'button',
	value,
	disabled = false,
	tabIndex = 0,
	background = 'primary',
	...rest
}: IButton) {
	let backgroundClass = '';
	switch (background) {
		case 'primary':
			backgroundClass = style.Primary;
			break;
		case 'secondary':
			backgroundClass = style.Secondary;
			break;
		case 'tertiary':
			backgroundClass = style.Tertiary;
			break;
		case 'fourthly':
			backgroundClass = style.Fourthly;
			break;
		default:
			backgroundClass = style.Primary;
	}
	return (
		<button
			className={`${style.Button} ${backgroundClass}`}
			type={type}
			value={value}
			disabled={disabled}
			tabIndex={tabIndex}
			{...rest}>
			{children}
		</button>
	);
}
