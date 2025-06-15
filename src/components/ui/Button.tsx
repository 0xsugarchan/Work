import button_img from "../../assets/line-button.png";

const Button: React.FC = () => {
	return (
		<div>
			<img alt="Image" src={button_img} className="w-full" />
		</div>
	);
};

export default Button;
