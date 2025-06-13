import 確定画像 from "../assets/確定.png";
import Button from "../components/Button";

function LandingPage() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-[400px]">
          <img src={確定画像} alt="バナー" className="w-full" />
          <div className="absolute top-115 left-4 w-[90%] flex justify-center">
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
