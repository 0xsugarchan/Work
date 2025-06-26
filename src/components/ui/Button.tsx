import button_img from "../../assets/line-button.png";

const Button: React.FC = () => {
	return (
		<div className="w-full mx-auto">
			<a
				href="https://s.lmes.jp/landing-qr/2007556903-QWyp2W5v?uLand=IGMpMv"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img alt="Line Button" src={button_img} className="w-full" />
			</a>
		</div>
	);
};

export default Button;
