import ボタン from "../assets/ボタン.png";

const Button: React.FC = () => {
  return (
    <div className="w-[282px] h-[73px]" data-model-id="1010:201-frame">
      <img
        className="fixed w-[294px] h-[85px] top-0 left-0"
        alt="Image"
        src={ボタン}
      />
    </div>
  );
};

export default Button;
