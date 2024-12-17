import React, { forwardRef } from "react";
import Button from "../components/Button";
import EvilKermitHero from "../assets/KermitHero.png";
import EvilKermitBackground from "../assets/backgroundimage.png";
import Cloud from "../assets/Frame 34463.png";
import "../App.css";
import Presale from "../components/Presale";

const EvilKermitLanding = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<div ref={ref}>
			<div className="relative grid grid-rows-[auto_1fr]">
				{/* Hero Image Section (Background) */}
				<div className="col-start-1 row-start-1">
					<img
						className="w-full h-[100%] object-cover object-bottom"
						src={EvilKermitBackground}
						alt="Hero"
					/>
				</div>
				<div className="col-start-1 row-start-1 flex flex-col items-center justify-around">
					{/* Title Section */}
					<div className="text-center mt-24 px-4 sm:px-16">
						<div
							className="text-[80px] sm:text-[140px] font-bold text-green-500 logofont"
							style={{
								filter: "drop-shadow(0 0 10px rgba(0,255,0,0.3))",
							}}>
							EVILKERMIT
						</div>

						<div className="text-xl sm:text-2xl font-[600] text-gray-200 -mt-4 sm:mt-[-35px] leading-[24px] px-14 inter-uniquifier">
							Embrace Your Inner Evil, Invest in EvilKermit.
						</div>
						
					</div>
					{/* Buttons Section */}
					<div className="flex gap-6 mb-16 mt-10 px-4 min-[2880px]:mb-[250px]">
						<Presale />
					</div>
					{/* Hero Image Section (Kermit Character) */}
					<div className="flex justify-center">
						<img
							src={EvilKermitHero}
							alt="Evil Kermit Character"
							className="w-full sm:w-[1200px] mt-auto object-cover"
						/>
					</div>
				</div>

				{/* Cloud Image (Overlay) */}
				<div className="col-start-1 row-start-1 flex pointer-events-none">
					<img className="w-full mt-auto" src={Cloud} alt="Cloud" />
				</div>
			</div>

			{/* Bottom Content Section */}
			<div className="flex flex-col sm:gap-[20px] px-[16px] sm:px-[200px] text-center pb-[80px]">
				<h2 className="flex text-center flex-col sm:flex-row text-[50px] sm:text-[75px] mx-auto font-normal">
					<span className="text-red-600 titlered">WHY</span>{" "}
					<span className="text-green-500 titlegreen">EVILKERMIT?</span>
				</h2>

				<p className="text-[#C5DED1] text-[16px] sm:text-[18px] leading-[24px] font-normal inter-uniquifier">
					EvilKermit isn't your typical token—it's a community-driven project
					with a twist! Embrace the power of a token that rewards holders and
					keeps things interesting with a built-in burn mechanism. Every
					transaction fuels the fire, with a 1% burn per transaction, decreasing
					supply over time and increasing value for those who stay loyal.
				</p>

				<p className="text-[#C5DED1] text-[16px] sm:text-[18px] leading-[24px] font-normal inter-uniquifier">
					Whether you're here for the memes or the long game, EvilKermit is
					designed to be fun, engaging, and rewarding. Join a community of
					like-minded enthusiasts ready to embrace their inner 'evil' and make a
					mark in the token space!
				</p>
			</div>
		</div>
	);
});

export default EvilKermitLanding;
