import React, { forwardRef } from "react";
import "../App.css";
import Telegram from "../assets/Telegram.png";
import Discode from "../assets/Discode.png";
import Twitter from "../assets/Twitter.png";
import Footimage1 from "../assets/Footimage1.png";

const Community = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<div
			ref={ref}
			className="flex flex-col gap-[30px] items-center justify-center pt-[40px] px-[20px] sm:px-[50px] md:px-[200px]">
			<div className="text-[48px] sm:text-[75px] leading-[48px] sm:leading-[75px] font-normal titlegreen text-center">
				<span className="titlered">COMMUNITY</span> & CONTACT US
			</div>
			<div className="flex flex-col sm:flex-row gap-[30px] sm:gap-[100px] w-full">
				<div className="flex flex-col justify-between max-w-[100%] sm:max-w-[580px]">
					<div className="flex flex-col gap-[20px] sm:gap-[30px]">
						<div className="flex flex-col gap-[10px]">
							<div className="text-center font-bold text-[24px] sm:text-[28px] leading-[30px] sm:leading-[36px] inter-uniquifier">
								Connect with Us
							</div>
							<div className="text-center font-normal text-[16px] sm:text-[18px] leading-[20px] sm:leading-[24px] inter-uniquifier text-[#C5DED1]">
								Stay updated and join the conversation!
								<br />
								Follow us on our official channels:
							</div>
						</div>
						<div className="justify-center flex gap-[15px] sm:gap-[20px]">
							<a
								href="https://t.me/EvilKermit"
								target="_blank"
								rel="noreferrer">
								<img
									src={Telegram}
									alt="Telegram"
									className="w-[50px] sm:w-[70px]"
								/>
							</a>
							<a href="@Discode" target="_blank" rel="noreferrer">
								<img
									src={Discode}
									alt="Discord"
									className="w-[50px] sm:w-[70px]"
								/>
							</a>
							<a
								href="https://www.x.com/EvilKermit"
								target="_blank"
								rel="noreferrer">
								<img
									src={Twitter}
									alt="Twitter"
									className="w-[50px] sm:w-[70px]"
								/>
							</a>
						</div>
					</div>
					<div className="flex flex-col gap-[20px] sm:gap-[30px] mt-16">
						<div className="flex flex-col gap-[10px] text-center">
							<div className="font-bold text-[24px] sm:text-[28px] leading-[30px] sm:leading-[36px] inter-uniquifier">
								Newsletter Signup
							</div>
							<div className="font-normal text-[16px] sm:text-[18px] leading-[20px] sm:leading-[24px] text-[#C5DED1]">
								Never miss an update! Sign up for our newsletter to receive the
								latest news on EvilKermit, including roadmap milestones, presale
								alerts, and community events. Enter your email to join the
								EvilKermit community!
							</div>
						</div>
						<div className="flex flex-col gap-[10px] sm:gap-[20px]">
							<input
								type="text"
								className="bg-[#007D3A1A] border border-[#155E0F] rounded-[10px] px-[15px] sm:px-[20px] py-[8px] sm:py-[10px] placeholder-[#C5DED1] placeholder:text-[16px] sm:placeholder:text-[18px]"
								placeholder="Enter your email address"
							/>
							<button className="px-[15px] sm:px-[20px] py-[8px] sm:py-[10px] button-background font-[700] text-[18px] sm:text-[20px] leading-[24px] sm:leading-[27px] text-[#0F0F0F]">
								Subscribe
							</button>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-[30px] sm:gap-[50px] p-[20px] sm:p-[50px] contact-form border rounded-[30px] sm:rounded-[50px] border-[#056B03] w-full">
					<form className="flex flex-col justify-between gap-[20px] sm:gap-[29px]">
						<div className="text-center flex flex-col gap-[10px]">
							<div className="text-[32px] sm:text-[40px] leading-[24px] sm:leading-[32px] font-[700] inter-uniquifier">
								Contact Form
							</div>
							<div className="text-[16px] sm:text-[18px] leading-[20px] sm:leading-[24px] font-[400] inter-uniquifier">
								Have questions or need support? Reach out to us directly! Fill
								out the contact form below, and we’ll get back to you as soon as
								possible.
							</div>
						</div>
						<div className="flex flex-col gap-[10px] sm:gap-[10px]">
							<input
								type="text"
								className="bg-[#007D3A1A] border border-[#155E0F] rounded-[10px] px-[15px] sm:px-[20px] py-[8px] sm:py-[10px] placeholder-[#C5DED1] placeholder:text-[16px] sm:placeholder:text-[18px]"
								placeholder="Enter your name"
							/>
							<input
								type="email"
								className="bg-[#007D3A1A] border border-[#155E0F] rounded-[10px] px-[15px] sm:px-[20px] py-[8px] sm:py-[10px] placeholder-[#C5DED1] placeholder:text-[16px] sm:placeholder:text-[18px]"
								placeholder="Enter your email address"
							/>
							<input
								className="bg-[#007D3A1A] border border-[#155E0F] rounded-[10px] px-[15px] sm:px-[20px] pt-[8px] pb-20 sm:pt-[10px] sm:pb-20 placeholder-[#C5DED1] placeholder:text-[16px] sm:placeholder:text-[18px] placeholder:text-wrap break-words"
								placeholder="Enter your message (e.g., inquiries, support requests, or feedback)"></input>
						</div>
						<div>
							<button className="button-background px-[15px] sm:px-[20px] py-[8px] sm:py-[10px] w-full font-[700] text-[20px] sm:text-[24px] leading-[24px] sm:leading-[27px] text-[#0F0F0F]">
								Send Message
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className="w-full h-auto justify-center">
				<img
					src={Footimage1}
					alt="Footimage1"
					className="hidden sm:flex sm:max-w-full sm:mx-auto"
				/>
			</div>
		</div>
	);
});

export default Community;
