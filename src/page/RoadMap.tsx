import React, { forwardRef } from "react";
import RoadmapCharacter from "../assets/RoadmapCharacter.png";
import ArrowUp from "../assets/bxs_up-arrow.png";
import ArrowDown from "../assets/bxs_down-arrow.png";

const TokenomicsHand = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<div
			ref={ref}
			className="w-full pt-[80px] px-[200px] max-[1166px]:px-[0px]">
			<div className="text-center">
				<h1 className="text-[60px] sm:text-[75px] titlegreen font-bold bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text mb-4">
					RoadMap
				</h1>
			</div>
			<div className="flex justify-center items-center gap-28 max-[1166px]:flex-col max-[1166px]:gap-0">
				<div className="order-2 sm:order-1 min-w-[400px] flex justify-center max-[1166px]:">
					<img src={RoadmapCharacter} alt="RoadmapCharacter" />
				</div>
				<div className="order-1 sm:order-2 min-w-[420px] flex flex-col gap-[40px] my-[48px] ml-[50px] max-[1166px]:my-[0px] max-[1166px]:ml-[0px] max-[1166px]:items-center">
					<div className="flex flex-col gap-[10px] max-[1166px]:items-center">
						<div className="text-[40px] leading-[50px] flex items-center gap-[10px]">
							<div className="w-[24px] h-[24px]">
								<img src={ArrowUp} alt="Arrowup" />
							</div>
							<div className="titlered">Q1, 2024</div>
						</div>
						<div className="text-center sm:text-start text-[#C5DED1] pl-[9px] text-[16px] leading-[24px] font-[400]">
							<li>Launch EvilKermit Token</li>
							<li>Initial Marketing Campaigns</li>
							<li>Presale and Community Building</li>
						</div>
					</div>
					<div className="flex flex-col gap-[10px]">
						<div className="text-[40px] leading-[40px] font-[400] flex items-center gap-[10px]">
							<div className="w-[24px] h-[24px]">
								<img src={ArrowDown} alt="Arrowup" />
							</div>
							<div className="titlegreen">Q2, 2024</div>
						</div>
						{/* <div className='text-[#C5DED1] pl-[9px]'>
                        <li>EvilKermit will launch on the Ethereum Mainnet</li>
                    </div> */}
					</div>
					<div className="flex flex-col gap-[10px]">
						<div className="text-[40px] leading-[40px] font-[400] flex items-center gap-[10px]">
							<div className="w-[24px] h-[24px]">
								<img src={ArrowDown} alt="Arrowup" />
							</div>
							<div className="titlegreen">Q3, 2024</div>
						</div>
						{/* <div className='text-[#C5DED1] pl-[9px]'>
                        <li>EvilKermit will launch on the Ethereum Mainnet</li>
                    </div> */}
					</div>
					<div className="flex flex-col gap-[10px]">
						<div className="text-[40px] leading-[40px] font-[400] flex items-center gap-[10px]">
							<div className="w-[24px] h-[24px]">
								<img src={ArrowDown} alt="Arrowup" />
							</div>
							<div className="titlegreen">Q4, 2024</div>
						</div>
						{/* <div className='text-[#C5DED1] pl-[9px]'>
                        <li>EvilKermit will launch on the Ethereum Mainnet</li>
                    </div> */}
					</div>
				</div>
			</div>
		</div>
	);
});

export default TokenomicsHand;
