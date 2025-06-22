import jobRevenueImg from "../assets/job-revenue.png";
import aboutCompanyImg from "../assets/about-company.png";
import letsBeginImg from "../assets/lets-begin.png";
import stepImg from "../assets/step.png";
import reviewImg from "../assets/review.png";
import Button from "../components/ui/Button";
import concernCommitImg from "../assets/concern-commit.png";
import heroImg from "../assets/hero.png";
import { useLandingPage } from "../hooks/useLandingPage";
import Footer from "../components/ui/Footer";

function LandingPage() {
  const { heroRef, isFixed } = useLandingPage();

  return (
    <div className="flex flex-col items-center">
      <div ref={heroRef} className="relative w-full">
        <img
          src={heroImg}
          alt="heroImg"
          loading="lazy"
          width={390}
          height={550}
          className="w-full block"
        />
        <div
          className={`${
            isFixed ? "fixed bottom-[20%]" : "absolute top-[78%] md:top-[80%]"
          } left-1/2 -translate-x-1/2 z-50 w-[80%] sm:w-[60%] md:w-[40%] lg:w-[50%]
          transition-all duration-500 ease-in-out
    ${isFixed ? "opacity-100 translate-y-0" : "opacity-100 translate-y-4"}
`}
        >
          <Button />
        </div>
      </div>
      <div className="w-full">
        <img
          src={concernCommitImg}
          alt="concernCommitImg"
          className="w-full block"
        />
      </div>
      <div className="w-full bg-white">
        <img src={jobRevenueImg} alt="jobRevenue" className="w-full block" />
      </div>
      <div className="w-full">
        <img src={stepImg} alt="stepImg" className="w-full block" />
      </div>
      <div className="w-full">
        <img src={reviewImg} alt="reviewImg" className="w-full block" />
      </div>
      <div className="w-full">
        <img src={letsBeginImg} alt="letsBegin" className="w-full block" />
      </div>
      <div className="w-full">
        <img
          src={aboutCompanyImg}
          alt="aboutCompany"
          className="w-full block"
        />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
