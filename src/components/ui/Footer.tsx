import { Link } from "react-router-dom";

const Footer: React.FC = () => {
	return (
		<footer className="bg-[#343434] text-white text-sm">
			<div className="flex justify-center gap-8 py-4 [font-family:'Noto_Sans_JP-Regular',Helvetica]">
				<Link to="/" className="hover:underline">
					TOP
				</Link>
				<Link to="/privacy-policy" className="hover:underline">
					プライバシーポリシー
				</Link>
				<Link to="/terms" className="hover:underline">
					利用規約
				</Link>
			</div>
			<div className="bg-[#141414] text-center py-2 text-sm [font-family:'Geologica-Regular',Helvetica]">
				©2025 ankh agency
			</div>
		</footer>
	);
};

export default Footer;
