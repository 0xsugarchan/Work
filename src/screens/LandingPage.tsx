import jobRevenue from "../assets/job-revenue.png";
import aboutCompanyImg from "../assets/about-company.png";
import letsBeginImg from "../assets/lets-begin.png";
import stepImg from "../assets/step.png";
import reviewImg from "../assets/review.png";
import footerImg from "../assets/footer.png";
import Button from "../components/ui/Button";
import concernCommitImg from "../assets/concern-commit.png";
import heroImg from "../assets/hero.png";

function LandingPage() {
	return (
		<div className="flex flex-col items-center">
			<div className="relative w-full">
				<img src={heroImg} alt="heroImg" className="w-full" />
				<div
					className="absolute top-[81%] left-1/2 -translate-x-1/2 z-50 
                  w-[80%]"
				>
					<Button />
				</div>
			</div>
			<div className="w-full">
				<img src={concernCommitImg} alt="concernCommitImg" className="w-full" />
			</div>
			<div className="w-full bg-white">
				<img src={jobRevenue} alt="jobRevenue" className="w-full" />
			</div>
			<div className="w-full">
				<img src={stepImg} alt="stepImg" className="w-full" />
			</div>
			<div className="w-full">
				<img src={reviewImg} alt="reviewImg" className="w-full" />
			</div>
			<div className="w-full">
				<img src={letsBeginImg} alt="letsBegin" className="w-full" />
			</div>
			<div className="w-full">
				<img src={aboutCompanyImg} alt="aboutCompany" className="w-full" />
			</div>
			<div className="w-full">
				<img src={footerImg} alt="footer" className="w-full" />
			</div>
		</div>
	);
}

export default LandingPage;
