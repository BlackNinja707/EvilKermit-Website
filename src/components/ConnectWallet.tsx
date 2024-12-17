import React from "react";
import "../App.css";

interface ConnectWalletProps {
	walletIcon: string;
	walletTitle: string;
	walletText: string;
	onConnect: () => void;
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({
	walletIcon,
	walletTitle,
	walletText,
	onConnect,
}) => {
	return (
		<div className="flex flex-col gap-[30px] sm:gap-[20px] p-[16px] sm:p-[20px] items-center max-w-[350px] mx-auto">
			{/* Wallet Icon */}
			<div className="wallet-icon cursor-pointer" onClick={onConnect}>
				<img src={walletIcon} alt="Wallet Icon" className="w-[100px]" />
			</div>

			{/* Wallet Info Section */}
			<div className="flex flex-col gap-[8px] font-[400] text-[14px] sm:text-[16px] leading-[22px] text-[#C5DED1] text-center inter-uniquifier">
				{/* Title */}
				<div className="text-[18px] sm:text-[20px] font-[700] text-[#ffffff] leading-[18px]">
					{walletTitle}
				</div>

				{/* Description Text */}
				<div className="text-[16px] sm:text-[18px]">{walletText}</div>
			</div>
		</div>
	);
};

export default ConnectWallet;
