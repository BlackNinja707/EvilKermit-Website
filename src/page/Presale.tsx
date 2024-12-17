import React, { forwardRef } from "react";
import CountdownTimer from "../components/Countdown";
import PresaleStatus from "../components/ProgressBar";

// Separate PresaleTerms for better readability and maintainability
const PresaleTerms = () => {
	return (
		<div className="text-center flex flex-col gap-[10px]">
			<span className="text-[24px] font-bold inter-uniquifier leading-[24px]">
				Presale Terms
			</span>
			<div className="text-[16px] text-[#C5DED1] font-normal inter-uniquifier leading-[24px]">
				1. Max Purchase per Wallet: [Specify limit, e.g., 5,000 EVLK]
			</div>
			<div className="text-[16px] text-[#C5DED1] font-normal inter-uniquifier leading-[24px]">
				2. Refund Policy: No refunds post-purchase (unless otherwise noted)
			</div>
			<div className="text-[16px] text-[#C5DED1] font-normal inter-uniquifier leading-[24px]">
				3. Transaction Fees: Participants are responsible for standard
				transaction fees.
			</div>
		</div>
	);
};

const PresaleCountDown = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<div
			ref={ref}
			className="py-[80px] px-[16px] sm:px-[200px] flex flex-col gap-[50px]">
			<div className="w-full text-center">
				<div className="text-[50px] sm:text-[75px] leading-[75px] titlegreen">
					<span className="titlered">PRESALE</span> COUNTDOWN TIMER
				</div>
			</div>

			{/* Countdown Timer */}
			<CountdownTimer days={3} hours={21} minutes={45} seconds={7} />

			{/* Presale Progress */}
			<PresaleStatus currentValue={175000} maxValue={1000000} />

			{/* Presale Terms */}
			<PresaleTerms />
		</div>
	);
});

export default PresaleCountDown;
