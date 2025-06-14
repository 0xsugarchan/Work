import kakutei_img from "../assets/landing-visual.png";
import Button from "../components/ui/Button";

function LandingPage() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-[400px]">
          <img src={kakutei_img} alt="バナー" className="w-full" />
          <div className="absolute top-[457px] left-4 w-[90%] flex justify-center">
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
