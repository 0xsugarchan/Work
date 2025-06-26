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
  const { heroRef } = useLandingPage();

  return (
    <div className="w-full flex justify-center">
      <div className="w-full sm:max-w-[390px] mx-auto">
        <div ref={heroRef} className="relative">
          <img
            src={heroImg}
            alt="heroImg"
            loading="eager"
            width={393}
            height={550}
            className="w-full h-auto block"
          />
          <div className="fixed bottom-[38%] left-1/2 -translate-x-1/2 z-50 w-[282px] h-[73px]">
            <Button />
          </div>
        </div>
        <img
          src={concernCommitImg}
          alt="concernCommitImg"
          loading="lazy"
          width={425}
          height={1176}
          className="w-full h-auto block"
        />
        <div className="bg-white pt-5">
          <img
            src={jobRevenueImg}
            alt="jobRevenue"
            loading="lazy"
            width={391}
            height={550}
            className="w-full h-auto block"
          />
        </div>
        <img
          src={stepImg}
          alt="stepImg"
          loading="lazy"
          width={390}
          height={446}
          className="w-full h-auto block"
        />
        <img
          src={reviewImg}
          alt="reviewImg"
          loading="lazy"
          width={390}
          height={625}
          className="w-full h-auto block"
        />
        <img
          src={letsBeginImg}
          alt="letsBegin"
          loading="lazy"
          width={392}
          height={505}
          className="w-full h-auto block"
        />
        <img
          src={aboutCompanyImg}
          alt="aboutCompany"
          loading="lazy"
          width={390}
          height={250}
          className="w-full h-auto block"
        />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
