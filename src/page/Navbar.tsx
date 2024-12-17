import WalletButton from "../components/WalletConnectButton";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import menuButton from "../assets/menuButton.png";

interface NavbarProps {
	section1Ref: React.RefObject<HTMLDivElement>;
	section2Ref: React.RefObject<HTMLDivElement>;
	section3Ref: React.RefObject<HTMLDivElement>;
	section4Ref: React.RefObject<HTMLDivElement>;
	section5Ref: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({
	section1Ref,
	section2Ref,
	section3Ref,
	section4Ref,
	section5Ref,
}) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<nav className="fixed top-0 left-0 w-full z-10 flex justify-between items-center px-5 py-5 sm:px-[100px] bg-black/50 backdrop-blur-md">
			<div className="flex items-center gap-3">
				<img
					src={logo}
					alt="Evil Kermit Logo"
					className="rounded-full w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]"
				/>
				<span className="text-white font-normal text-[30px] md:text-[35px] lg:text-[40px] leading-[24px] logofont">
					EVILKERMIT
				</span>
			</div>

			<div className="hidden sm:flex items-center gap-2 md:gap-6 lg:gap-[40px] mx-auto leading-[22px] text-[14px] lg:text-[18px] inter-uniquifier">
				<div
					className="text-white hover:text-green-400 focus:text-green-500 cursor-pointer"
					onClick={() => scrollToSection(section1Ref)}>
					Home
				</div>
				<div
					className="text-white hover:text-green-400 focus:text-green-500 cursor-pointer"
					onClick={() => scrollToSection(section2Ref)}>
					Tokenomics
				</div>
				<div
					className="text-white hover:text-green-400 focus:text-green-500 cursor-pointer"
					onClick={() => scrollToSection(section3Ref)}>
					Roadmap
				</div>
				<div
					className="text-white hover:text-green-400 focus:text-green-500 cursor-pointer"
					onClick={() => scrollToSection(section4Ref)}>
					Pre-Sale
				</div>
				<div
					className="text-white hover:text-green-400 focus:text-green-500 cursor-pointer"
					onClick={() => scrollToSection(section5Ref)}>
					Contact Us
				</div>
			</div>
			<div className="hidden sm:flex">
				<WalletButton />
			</div>

			{/* Mobile Dropdown Menu */}
			<div className="sm:hidden flex items-center">
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="text-white focus:outline-none button-background p-[10px]">
					<img src={menuButton} alt="menuButton" className="w-5 h-5"></img>
				</button>

				{isMenuOpen && (
					<div className="absolute top-16 left-0 w-full bg-black/90 text-white flex flex-col items-center py-4">
						<div
							className="py-2 text-lg cursor-pointer hover:text-green-400"
							onClick={() => {
								scrollToSection(section1Ref);
								setIsMenuOpen(false);
							}}>
							Home
						</div>
						<div
							className="py-2 text-lg cursor-pointer hover:text-green-400"
							onClick={() => {
								scrollToSection(section2Ref);
								setIsMenuOpen(false);
							}}>
							Tokenomics
						</div>
						<div
							className="py-2 text-lg cursor-pointer hover:text-green-400"
							onClick={() => {
								scrollToSection(section3Ref);
								setIsMenuOpen(false);
							}}>
							Roadmap
						</div>
						<div
							className="py-2 text-lg cursor-pointer hover:text-green-400"
							onClick={() => {
								scrollToSection(section4Ref);
								setIsMenuOpen(false);
							}}>
							Pre-Sale
						</div>
						<div
							className="py-2 text-lg cursor-pointer hover:text-green-400"
							onClick={() => {
								scrollToSection(section5Ref);
								setIsMenuOpen(false);
							}}>
							Contact Us
						</div>
						<div className="py-2">
							<WalletButton />
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
