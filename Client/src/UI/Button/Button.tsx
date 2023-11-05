import style from './Button.module.scss';
interface IButton {
	children: React.ReactNode;
	type?: 'button' | 'submit' | 'reset';
	value?: string | string[];
	disabled?: boolean;
	tabIndex?: number;
	background?:
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'fourthly'
		| 'fifth'
		| 'none';
	shape?: 'circle' | 'square';
	[key: string]: any;
}

export function Button({
	children,
	type = 'button',
	value,
	disabled = false,
	tabIndex = 0,
	background = 'primary',
	shape = 'square',
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
		case 'fifth':
			backgroundClass = style.Fifth;
			break;
		case 'none':
			backgroundClass = style.None;
			break;
		default:
			backgroundClass = style.Primary;
	}
	const buttonSquar =
		shape === 'circle' ? style.CircleButton : style.SquareButton;
	return (
		<button
			className={`${style.Button} ${backgroundClass} ${buttonSquar}`}
			type={type}
			value={value}
			disabled={disabled}
			tabIndex={tabIndex}
			{...rest}>
			{children}
		</button>
	);
}
