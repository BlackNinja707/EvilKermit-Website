import React, { useState, useEffect } from "react";
import "../App.css";

interface PresaleStatusProps {
	currentValue: number;
	maxValue: number;
}

const PresaleStatus: React.FC<PresaleStatusProps> = ({
	currentValue,
	maxValue,
}) => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const progressPercentage = (currentValue / maxValue) * 100;
		setProgress(progressPercentage);
	}, [currentValue, maxValue]);

	return (
		<div>
			<div className="text-center text-[40px] leading-[40px] font-normal logofont">
				PRESALE STATUS
			</div>
			<div className="presale-status flex mt-4">
				<div className="progress-bar">
					<div className="progress-fill" style={{ width: `${progress}%` }} />
				</div>
				<div className="text-center absolute font-[700] inter-uniquifier text-[18px] leading-[18px] ">
					{currentValue.toLocaleString()} / {maxValue.toLocaleString()} EVLK{" "}
				</div>
			</div>
		</div>
	);
};

export default PresaleStatus;
