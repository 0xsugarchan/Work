interface HeaderProps {
	title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
	return (
		<header className="bg-[#ee8104] w-full">
			<div>
				<h2 className="text-white font-bold text-center py-6 [font-family:'Noto_Sans_JP',Helvetica]">
					{title}
				</h2>
			</div>
		</header>
	);
};

export default Header;
