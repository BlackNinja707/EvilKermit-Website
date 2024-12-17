// components/Button.tsx
import React from "react";
import classNames from "clsx"; // Consider installing clsx for better class management
import "../App.css";

interface ButtonProps {
	variant: "primary" | "secondary" | "danger" | "connect"; // Button variants
	children: React.ReactNode; // Content inside the button
	onClick?: React.MouseEventHandler<HTMLButtonElement>; // Optional click handler with correct typing
	className?: string; // Optional additional classes
	ariaLabel?: string; // Optional aria-label for accessibility
}

const Button: React.FC<ButtonProps> = ({
	variant,
	children,
	onClick,
	className = "", // Default to empty string for custom classes
	ariaLabel, // Optional aria-label for accessibility
}) => {
	const baseStyles =
		"px-[20px] py-[10px] rounded-[10px] transition-transform hover:scale-105 logofont text-[20px]";

	const variants: Record<ButtonProps["variant"], string> = {
		primary:
			"bg-green-500 hover:bg-green-600 text-black shadow-[0_0_20px_rgba(0,255,0,0.3)] button-background",
		secondary:
			"bg-yellow-500 hover:bg-yellow-600 text-black yellow-button-background",
		danger: "bg-red-600 hover:bg-red-700 text-black red-button-background",
		connect: "bg-green-500 hover:bg-green-600 text-black button-background",
	};

	return (
		<button
			className={classNames(baseStyles, variants[variant], className)} // Using clsx for class management
			onClick={onClick}
			aria-label={ariaLabel} // For accessibility, if needed
		>
			{children}
		</button>
	);
};

export default Button;
