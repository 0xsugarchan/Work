import button_img from "../../assets/line-button.png";

const Button: React.FC = () => {
  return (
    <div className="fixed w-[282px] h-[73px]">
      <img alt="Image" src={button_img} />
    </div>
  );
};

export default Button;
