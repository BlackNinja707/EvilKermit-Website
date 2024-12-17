import React from "react";
import Footimage from "../assets/Footimage.png";
import Footlogo from "../assets/Foot-logo.png";
import Telegram from "../assets/Telegram-mini.png";
import Discode from "../assets/Discode-mini.png";
import Twitter from "../assets/Twitter-mini.png";
import "../App.css";

const FootPage: React.FC = () => {
	return (
		<div className="realtive">
			<div className="flex justify-center mt-[35px] z-[-1] mx-auto">
				<img src={Footimage} alt="Footimage" className="max-w-full sm:hidden" />
			</div>
			<div className="absolute bottom-0 left-0 h-auto w-full">
				<div className="flex flex-col items-center justify-center backdrop-blur-3xl footerbackground border-t border-t-[#C5DED140]">
					<div className="flex flex-col justify-center sm:flex-row mt-[20px] mb-[40px] px-[16px] sm:px-[200px] gap-[30px] sm:gap-[50px] sm:mt-[40px]">
						{/* Logo and Text Section */}
						<div className="flex flex-col gap-[10px] sm:w-[342px] text-center sm:text-left">
							<div className="flex items-center gap-[10px] justify-center sm:justify-start">
								<img
									src={Footlogo}
									alt="logo"
									className="w-[50px] sm:w-[40px] xs:w-[35px]"
								/>
								<div className="font-[400] text-[28px] sm:text-[30px] leading-[24px] logofont xs:text-[24px]">
									EvilKermit
								</div>
							</div>
							<div className="leading-[36px] text-[24px] sm:text-[24px] font-bold xs:text-[16px]">
								Embrace Your Inner Evil
							</div>
							<div className="text-[14px] leading-[17px] font-bold inter-uniquifier">
								Disclaimer
							</div>
							<div
								className="text-[12px] sm:text-[12px] leading-[14px] sm:leading-[17px] font-[400] inter-uniquifier text-[#C5DED1] px-8 sm:px-0"
								style={{ fontStyle: "italic" }}>
								EvilKermit is a community-driven, meme-inspired project and
								should be considered a high-risk investment. Always do your own
								research.
							</div>
						</div>
						<div className="flex flex-row justify-between items-start px-[50px] sm:px-0 sm:gap-[50px]">
							{/* Quick Links Section */}
							<div className="flex flex-col gap-[20px] text-start sm:text-left sm:w-[116px]">
								<div className="text-[14px] leading-[17px] font-bold">
									Quick Links
								</div>
								<div className="flex flex-col gap-[12px]">
									<div className="text-[14px] font-[400] leading-[17px] text-[#C5DED1]">
										Home
									</div>
									<div className="text-[14px] font-[400] leading-[17px] text-[#C5DED1]">
										Tokenomics
									</div>
									<div className="text-[14px] font-[400] leading-[17px] text-[#C5DED1]">
										Roadmap
									</div>
									<div className="text-[14px] font-[400] leading-[17px] text-[#C5DED1]">
										Pre-Sale
									</div>
									<div className="text-[14px] font-[400] leading-[17px] text-[#C5DED1]">
										Contact Us
									</div>
								</div>
							</div>

							{/* Community Section */}
							<div className="flex flex-col gap-[20px] text-start items-start sm:text-left sm:w-[164px]">
								<div className="text-[14px] leading-[17px] font-bold">
									Community
								</div>
								<div className="flex gap-[10px] items-center justify-center sm:justify-start">
									<div>
										<img
											src={Telegram}
											alt="Telegram"
											className="w-[26px] sm:w-[24px] xs:w-[22px]"
										/>
									</div>
									<a
										href="https://t.me/EvilKermit"
										target="_blank"
										rel="noreferrer">
										<div className="text-[14px] font-[400] text-[#C5DED1]">
											@EvirkermitTG
										</div>
									</a>
								</div>
								<div className="flex gap-[10px] items-center justify-center sm:justify-start">
									<div>
										<img
											src={Discode}
											alt="Discord"
											className="w-[26px] sm:w-[24px] xs:w-[22px]"
										/>
									</div>
									<a href="#" target="_blank" rel="noreferrer">
										<div className="text-[14px] font-[400] text-[#C5DED1]">
											@EvirkermitDiscord
										</div>
									</a>
								</div>
								<div className="flex gap-[10px] items-center justify-center sm:justify-start">
									<div>
										<img
											src={Twitter}
											alt="Twitter"
											className="w-[26px] sm:w-[24px] xs:w-[22px]"
										/>
									</div>
									<a
										href="https://www.x.com/EvilKermit"
										target="_blank"
										rel="noreferrer">
										<div className="text-[14px] font-[400] text-[#C5DED1]">
											@Evirkermitofficial
										</div>
									</a>
								</div>
							</div>
						</div>
						<div className="sm:w-[268px] flex flex-col gap-[20px] text-center sm:text-start">
							<div className="text-[14px] leading-[17px] font-bold">
								Contact Us
							</div>
							<div className="text-[16px] sm:[16px] font-[400] leading-[21px] text-[#C5DED1] px-10 sm:px-0">
								For inquiries or support, please reach out via our Contact Form
								or email us at{" "}
								<span className=" text-[#2EA92E]">
									<a href="mailto:support@evilKermit.com">
										support@evilKermit.com
									</a>
								</span>
							</div>
						</div>
					</div>

					{/* Footer Text */}
					<div className="text-center text-[15px] sm:text-[14px] font-semibold mt-[16px] sm:mt-[20px] mb-[20px] text-[#C5DED1]">
						© 2024 EvilKermit. All rights reserved.
					</div>
				</div>
			</div>
		</div>
	);
};

export default FootPage;
