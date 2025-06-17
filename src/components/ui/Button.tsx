import button_img from "../../assets/line-button.png";

const Button: React.FC = () => {
	return (
		<a
			href="https://s.lmes.jp/landing-qr/2007556903-QWyp2W5v?uLand=IGMpMv"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img alt="Image" src={button_img} className="w-full" />
		</a>
	);
};

export default Button;
