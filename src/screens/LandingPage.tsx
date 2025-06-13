import Hero from "../components/Hero";
import Concern from "../components/Concern";

function LandingPage() {
  return (
    <>
      <div className="flex flex-col">
        <Hero />
        <Concern />
      </div>
    </>
  );
}

export default LandingPage;
