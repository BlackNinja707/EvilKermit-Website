import React from "react";
import Evil from "../assets/Group 34460.png";
import ETH from "../assets/image 276.png";
import Swap from "../assets/swap.png";
import EVLK from "../assets/presale-mark.png";
import USDT from "../assets/USDT.png";

const Presale = () => {
	return (
		<div>
			{/* Button */}
			<button className="px-[16px] py-[8px] sm:px-[20px] sm:py-[10px] rounded-[10px] transition-transform scale-[1.01] inter-uniquifier text-[16px] sm:text-[19px] bg-green-500 hover:bg-green-600 text-black shadow-[0_0_20px_rgba(0,255,0,0.3)] button-background font-semibold w-full">
				BUY IN PRE SALE: 1 $EVLK = $0.0027 ETH USDT
			</button>

			{/* Contact Form */}
			<div className="flex flex-col rounded-b-[30px] mt-[-10px] px-[20px] sm:px-[26px] pt-[30px] sm:pt-[36px] pb-[12px] sm:pb-[14px] contact-form border border-[#056B03] default_cursor_cs">
				{/* First Section (You Pay) */}
				<div className="flex flex-col gap-[15px] sm:gap-[20px]">
					<div className="flex items-center gap-[8px] sm:gap-[10px]">
						<div>
							<img src={Evil} alt="Evil" />
						</div>
						<div className="text-[20px] sm:text-[26px]">You Pay</div>
					</div>
					<div className="flex justify-between gap-[8px] sm:gap-[10px]">
						<div className="flex gap-[8px] sm:gap-[10px] p-[8px] sm:p-[10px] items-center rounded-[12px] bg-[#000000]">
							<div>
								<img src={ETH} alt="" />
							</div>
							<select className="bg-[#000000] text-[#ffffff] font-[400] text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] inter-uniquifier">
								<option selected>ETH</option>
								<option>USDT</option>
							</select>
						</div>
						<div className="flex flex-col items-end">
							<div className="text-[20px] sm:text-[23px] inter-uniquifier">
								15,468.124
							</div>
							<div className="text-[12px] sm:text-[13px] inter-uniquifier">
								Enter Amount
							</div>
						</div>
					</div>
				</div>

				{/* Divider with Swap Button */}
				<div className="flex text-[#7E8FAA] text-xs items-center bg-none mt-[15px] sm:mt-[20px]">
					<div className="h-px flex flex-1 bg-[#315737]"></div>
					<button className="flex flex-col gap-[8px] sm:gap-[10px] items-center">
						<img src={Swap} alt="" />
					</button>
					<div className="h-px flex flex-1 bg-[#315737]"></div>
				</div>

				{/* Second Section (You Get) */}
				<div className="flex flex-col gap-[15px] sm:gap-[20px]">
					<div className="flex items-center gap-[8px] sm:gap-[10px]">
						<div className="rotate-90">
							<img src={Evil} alt="" />
						</div>
						<div className="text-[20px] sm:text-[26px]">You Get</div>
					</div>
					<div className="flex justify-between gap-[8px] sm:gap-[10px]">
						<div className="flex gap-[8px] sm:gap-[10px] p-[8px] sm:p-[10px] items-center rounded-[12px] bg-[#000000]">
							<div>
								<img src={EVLK} alt="" />
							</div>
							<select className="bg-[#000000] text-[#ffffff] font-[400] text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] inter-uniquifier">
								<option selected>EVLK</option>
								<option>USDT</option>
							</select>
						</div>
						<div className="flex flex-col items-end">
							<div className="text-[20px] sm:text-[23px] inter-uniquifier">
								15,468.124
							</div>
							<div className="text-[12px] sm:text-[13px] inter-uniquifier">
								Enter Get
							</div>
						</div>
					</div>
				</div>

				{/* Action Buttons (Buy with USDT, Buy with ETH) */}
				<div className="flex gap-[16px] sm:gap-[20px] mt-[30px] sm:mt-[36px] flex-wrap sm:flex-nowrap">
					<button className="bg-[#0EDB0E] px-[40px] py-[16px] rounded-[10px] flex items-center hover:bg-green-600 duration-300 w-full sm:w-auto">
						<img
							src={USDT}
							alt="USDT"
							className="w-[30px] sm:w-[34px] h-[30px] sm:h-[34px] mr-2"
						/>
						<span className="text-[14px] sm:text-[17px] inter-uniquifier text-black font-semibold">
							Buy with USDT
						</span>
					</button>
					<button className="bg-black px-[40px] py-[16px] rounded-[10px] flex items-center border border-green-600 hover:bg-[#0EDB0E] duration-300 text-[#0EDB0E] hover:text-[#000000] w-full sm:w-auto">
						<img
							src={ETH}
							alt="ETH"
							className="w-[30px] sm:w-[34px] h-[30px] sm:h-[34px] mr-2"
						/>
						<span className="text-[14px] sm:text-[17px] inter-uniquifier font-semibold">
							Buy with ETH
						</span>
					</button>
				</div>

				{/* Footer Text */}
				<div className="text-[13px] sm:text-[15px] font-semibold mt-[16px] sm:mt-[20px] inter-uniquifier flex gap-[4px] sm:gap-[6px] justify-center">
					<span className="opacity-60">Embrace Your Inner Evil</span>
					<span className="text-[#0EDB0E]">Invest In EvilKermit.</span>
				</div>
			</div>
		</div>
	);
};

export default Presale;
