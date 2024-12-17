import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import "../App.css";

const WalletButton = () => {
	return (
		<ConnectButton.Custom>
			{({
				account,
				chain,
				openAccountModal,
				openChainModal,
				openConnectModal,
				authenticationStatus,
				mounted,
			}) => {
				// Check if the app is ready and if the user is authenticated
				const ready = mounted && authenticationStatus !== "loading";
				const connected =
					ready &&
					account &&
					chain &&
					(!authenticationStatus || authenticationStatus === "authenticated");

				return (
					<div
						{...(!ready && {
							"aria-hidden": true,
							style: {
								opacity: 0,
								pointerEvents: "none",
								userSelect: "none",
							},
						})}>
						{(() => {
							if (!connected) {
								return (
									<button
										onClick={openConnectModal}
										type="button"
										className="bg-green-500 hover:bg-green-600 text-black button-background px-[16px] sm:px-[20px] py-[8px] sm:py-[10px] rounded-[8px] sm:rounded-[10px] transition-transform hover:scale-105 logofont text-[16px] sm:text-[20px]">
										Connect Wallet
									</button>
								);
							}

							if (chain.unsupported) {
								return (
									<button
										onClick={openChainModal}
										type="button"
										className="bg-red-500 hover:bg-red-600 text-white button-background px-[12px] sm:px-[16px] py-[6px] sm:py-[8px] rounded-[8px] sm:rounded-[10px] transition-transform hover:scale-105 logofont text-[14px] sm:text-[16px]">
										Wrong network
									</button>
								);
							}

							return (
								<div className="flex flex-col sm:flex-row gap-[10px] sm:gap-[12px] items-center">
									<button
										onClick={openChainModal}
										style={{ display: "flex", alignItems: "center" }}
										type="button"
										className="bg-gray-800 text-white px-[12px] sm:px-[16px] py-[6px] sm:py-[8px] rounded-[8px] sm:rounded-[10px] text-[14px] sm:text-[16px] transition-transform hover:scale-105">
										{chain.name}
									</button>
									<button
										onClick={openAccountModal}
										type="button"
										className="bg-green-500 hover:bg-green-600 text-black button-background px-[16px] sm:px-[20px] py-[8px] sm:py-[10px] rounded-[8px] sm:rounded-[10px] transition-transform hover:scale-105 logofont text-[16px] sm:text-[20px]">
										{account.displayName}
										{account.displayBalance
											? ` (${account.displayBalance})`
											: ""}
									</button>
								</div>
							);
						})()}
					</div>
				);
			}}
		</ConnectButton.Custom>
	);
};

export default WalletButton;
