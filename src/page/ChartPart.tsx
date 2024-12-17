import React, { forwardRef } from "react";
import Handchart from "../assets/handchart.png";
import "../App.css";

const TokenomicsHand = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<div
			ref={ref}
			className="w-full grid grid-cols-2 pt-[80px] max-[1166px]:flex flex-col max-[1166px]:justify-center max-[1166px]:gap-[20px] max-[400px]:gap-[10px] sm:pl-[200px]">
			<div className="flex flex-col gap-[20px] pl-[200px] max-[1166px]:px-[20px] max-[1166px]:items-center max-[1166px]:text-center sm:pl-0">
				<h1 className="text-[55px] titlegreen leading-[75px] font-[400] sm:text-[70px]">
					TOKENOMICS
				</h1>
				<p className="text-[16px] leading-[20px] font-[400] text-[#C5DED1] inter-uniquifier sm:text-[14px] sm:pr-20">
					A transparent and balanced allocation designed to support EvilKermit's
					growth and stability:
				</p>
				<div className="flex items-center space-x-3 inter-uniquifier">
					<div className="w-4 h-4 rounded-sm bg-gradient-to-t from-red-600 via-red-700 to-red-800"></div>
					<span className="text-[#C5DED1] text-[18px] font-[400] leading-[20px] sm:text-[14px]">
						30% Airdrop
					</span>
				</div>
				<div className="flex items-center space-x-3 inter-uniquifier">
					<div className="w-4 h-4 rounded-sm bg-gradient-to-t from-green-500 via-green-600 to-green-700"></div>
					<span className="text-[#C5DED1] text-[18px] font-[400] leading-[20px] sm:text-[14px]">
						70% Staking Rewards
					</span>
				</div>
				<div className="mt-4 max-w-xl inter-uniquifier">
					<h2 className="text-[24px] leading-[24px] font-bold text-white mb-3 sm:text-[18px]">
						Burn Mechanism
					</h2>
					<p className="text-[16px] leading-[20px] font-[400] text-[#C5DED1] sm:text-[14px] sm:pr-20">
						EvilKermit uses a 1% burn per transaction, which means every trade
						slightly reduces the total supply, creating scarcity over time. This
						mechanism rewards holders by gradually increasing the value of
						remaining tokens, incentivizing long-term holding and engagement
						with the community.
					</p>
				</div>
			</div>
			<div className="flex justify-center max-w-[520px]: max-[400px]:w-[80%] max-[1166px]:w-full">
				<img
					src={Handchart}
					alt="Tokenomics Chart"
					className="max-w-full h-auto"
				/>
			</div>
		</div>
	);
});

export default TokenomicsHand;
