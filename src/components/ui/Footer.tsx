import { useLocation, useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigateWithScroll = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }, 100);
    }
  };

  return (
    <footer className="bg-[#343434] text-white text-xs sm:text-xs md:text-sm w-full">
      <div className="flex justify-center gap-4 py-6 [font-family:'Noto_Sans_JP-Regular',Helvetica] sm:gap-2 sm:py-4 md:gap-6">
        <button
          onClick={() => handleNavigateWithScroll("/")}
          className="hover:underline"
        >
          TOP
        </button>
        <button
          onClick={() => handleNavigateWithScroll("/privacy-policy")}
          className="hover:underline"
        >
          プライバシーポリシー
        </button>
      </div>
      <div className="bg-[#141414] text-center py-1 text-xs [font-family:'Geologica-Regular',Helvetica]">
        ©2025 ankh agency
      </div>
    </footer>
  );
};

export default Footer;
