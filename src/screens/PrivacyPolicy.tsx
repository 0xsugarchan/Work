import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";

function PrivacyPolicy() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <Header title="プライバシーポリシー" />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default PrivacyPolicy;
