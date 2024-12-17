import React from "react";
import "../App.css";
import ConnectWallet from "../components/ConnectWallet";
import Metamask from "../assets/Metamask.png";
import SelectEvil from "../assets/SelectEvil.png";
import Confirm from "../assets/confirm.png";
import ArrowDown from "../assets/bxs_down-arrow.png";

const EvilKermitBuy: React.FC = () => {
	return (
		<div className="flex flex-col gap-[40px] sm:gap-[50px] justify-center py-[40px] sm:py-[80px] px-[20px] sm:px-[200px]">
			<div className="flex flex-row gap-[20px] text-[50px] sm:text-[75px] justify-center">
				<span className="titlered">HOW TO </span>
				<span className="titlegreen">BUY</span>
			</div>
			<div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[40px] items-center">
				<ConnectWallet
					walletIcon={Metamask}
					walletTitle={"1.Connect Your Wallet"}
					walletText={
						'Click "Connect Wallet" and select MetaMask or another compatible wallet.'
					}
					onConnect={() => {}}
				/>
				<div className="flex justify-center">
					<img
						src={ArrowDown}
						alt="Arrowdown"
						className="w-[35px] sm:w-[55px] h-[16px] sm:h-[24px]"
					/>
				</div>
				<ConnectWallet
					walletIcon={SelectEvil}
					walletTitle={"2.Select EvilKermit"}
					walletText={
						'Click "Select EvilKermit" to choose the EvilKermit token.'
					}
					onConnect={() => {}}
				/>
				<div className="flex justify-center">
					<img
						src={ArrowDown}
						alt="Arrowdown"
						className="w-[35px] sm:w-[55px] h-[16px] sm:h-[24px]"
					/>
				</div>
				<ConnectWallet
					walletIcon={Confirm}
					walletTitle={"3.Confirm Transaction"}
					walletText={
						'Click "Confirm" to complete the transaction and purchase EvilKermit.'
					}
					onConnect={() => {}}
				/>
			</div>
		</div>
	);
};

export default EvilKermitBuy;
