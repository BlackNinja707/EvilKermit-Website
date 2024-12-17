import React, { useState, useEffect } from "react";
import "../App.css";

interface CountdownTimerProps {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
	days,
	hours,
	minutes,
	seconds,
}) => {
	const [timeLeft, setTimeLeft] = useState<CountdownTimerProps>({
		days,
		hours,
		minutes,
		seconds,
	});

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeLeft((prevState) => {
				let newSeconds = prevState.seconds - 1;
				let newMinutes = prevState.minutes;
				let newHours = prevState.hours;
				let newDays = prevState.days;

				if (newSeconds < 0) {
					newSeconds = 59;
					newMinutes--;
				}

				if (newMinutes < 0) {
					newMinutes = 59;
					newHours--;
				}

				if (newHours < 0) {
					newHours = 23;
					newDays--;
				}

				return {
					days: newDays,
					hours: newHours,
					minutes: newMinutes,
					seconds: newSeconds,
				};
			});
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex justify-center items-start gap-[5px] flex-row sm:flex-row sm:gap-[30px]">
			{/* Days */}
			<div className="flex flex-col justify-center gap-[10px]">
				<div className="logofont bg-[#191919] border border-[#000000] shadow-[0px_4px_0px_0px_#254b2533_inset] rounded-[10px] sm:rounded-[5px] pt-[22px] sm:pt-[12px] pb-[14px] sm:pb-[12px] px-[10px] w-[80px] sm:w-[160px] h-[80px] sm:h-[160px] flex items-center justify-center">
					<span className="text-[63px] sm:text-[120px] leading-[40px] sm:leading-[120px] font-normal">
						{timeLeft.days.toString().padStart(2, "0")}
					</span>
				</div>
				<span className="inter-uniquifier text-[13px] sm:text-[18px] leading-[18px] sm:leading-[24px] font-[400] text-[#C5DED1] text-center">
					DAYS
				</span>
			</div>

			{/* Separator */}
			<div className="text-[52px] sm:text-[80px] mt-[8px] sm:mt-[13px] logofont">
				:
			</div>

			{/* Hours */}
			<div className="flex flex-col justify-center gap-[10px]">
				<div className="logofont bg-[#191919] border border-[#000000] shadow-[0px_4px_0px_0px_#254b2533_inset] rounded-[10px] sm:rounded-[5px] pt-[22px] sm:pt-[12px] pb-[14px] sm:pb-[12px] px-[10px] w-[80px] sm:w-[160px] h-[80px] sm:h-[160px] flex items-center justify-center">
					<span className="text-[63px] sm:text-[120px] leading-[40px] sm:leading-[120px] font-normal">
						{timeLeft.hours.toString().padStart(2, "0")}
					</span>
				</div>
				<span className="inter-uniquifier text-[13px] sm:text-[18px] leading-[18px] sm:leading-[24px] font-[400] text-[#C5DED1] text-center">
					HOURS
				</span>
			</div>

			{/* Separator */}
			<div className="text-[52px] sm:text-[80px] mt-[8px] sm:mt-[13px] logofont">
				:
			</div>

			{/* Minutes */}
			<div className="flex flex-col justify-center gap-[10px]">
				<div className="logofont bg-[#191919] border border-[#000000] shadow-[0px_4px_0px_0px_#254b2533_inset] rounded-[10px] sm:rounded-[5px] pt-[22px] sm:pt-[12px] pb-[14px] sm:pb-[12px] px-[10px] w-[80px] sm:w-[160px] h-[80px] sm:h-[160px] flex items-center justify-center">
					<span className="text-[63px] sm:text-[120px] leading-[40px] sm:leading-[120px] font-normal">
						{timeLeft.minutes.toString().padStart(2, "0")}
					</span>
				</div>
				<span className="inter-uniquifier text-[13px] sm:text-[18px] leading-[18px] sm:leading-[24px] font-[400] text-[#C5DED1] text-center">
					MINUTES
				</span>
			</div>

			{/* Separator */}
			<div className="text-[52px] sm:text-[80px] mt-[8px] sm:mt-[13px] logofont">
				:
			</div>

			{/* Seconds */}
			<div className="flex flex-col justify-center gap-[10px]">
				<div className="logofont bg-[#191919] border border-[#000000] shadow-[0px_4px_0px_0px_#254b2533_inset] rounded-[10px] sm:rounded-[5px] pt-[22px] sm:pt-[12px] pb-[14px] sm:pb-[12px] px-[10px] w-[80px] sm:w-[160px] h-[80px] sm:h-[160px] flex items-center justify-center">
					<span className="text-[63px] sm:text-[120px] leading-[40px] sm:leading-[120px] font-normal">
						{timeLeft.seconds.toString().padStart(2, "0")}
					</span>
				</div>
				<span className="inter-uniquifier text-[13px] sm:text-[18px] leading-[18px] sm:leading-[24px] font-[400] text-[#C5DED1] text-center">
					SECONDS
				</span>
			</div>
		</div>
	);
};

export default CountdownTimer;
