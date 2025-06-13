import 確定画像 from "../assets/確定.png";
import Button from "../components/Button";

function LandingPage() {
  return (
    <>
      <div className="flex flex-col">
        <img
          src={確定画像}
          alt="キャンペーンバナー"
          className="w-full max-w-[400px]"
        />
        <Button />
      </div>
    </>
  );
}

export default LandingPage;
