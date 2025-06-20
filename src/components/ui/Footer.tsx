import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#343434] text-white text-xs sm:text-xs md:text-lg w-full">
      <div className="flex justify-center gap-4 py-6 [font-family:'Noto_Sans_JP-Regular',Helvetica] sm:gap-2 sm:py-4 md:gap-6">
        <Link to="/">TOP</Link>
        <Link to="/privacy-policy">プライバシーポリシー</Link>
      </div>
      <div className="bg-[#141414] text-center py-1 text-xs [font-family:'Geologica-Regular',Helvetica]">
        ©2025 ankh agency
      </div>
    </footer>
  );
};

export default Footer;
