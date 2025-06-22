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
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[390] px-4">
        <div ref={heroRef} className="relative">
          <img
            src={heroImg}
            alt="heroImg"
            loading="lazy"
            width={390}
            height={550}
            className="w-full h-auto block"
          />
          <div
            className={`${
              isFixed ? "fixed bottom-[20%]" : "absolute top-[78%] md:top-[80%]"
            } left-1/2 -translate-x-1/2 z-50
              w-[280px] h-[60px] md:w-[320px] md:h-[64px]
              transition-all duration-500 ease-in-out
              ${
                isFixed
                  ? "opacity-100 translate-y-0"
                  : "opacity-100 translate-y-4"
              }
            `}
          >
            <Button />
          </div>
        </div>
        <img
          src={concernCommitImg}
          alt="concernCommitImg"
          loading="lazy"
          width={390}
          height={1176}
          className="w-full h-auto block"
        />
        <div className="bg-white pt-5">
          <img
            src={jobRevenueImg}
            alt="jobRevenue"
            loading="lazy"
            width={390}
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
          width={390}
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
