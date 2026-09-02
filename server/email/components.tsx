import { type ButtonProps, Button as EButton } from "@react-email/components";
import cn from "cnfast";

export const Button = ({
	varient,
	className,
	...props
}: ButtonProps & { varient?: "secondary" | "default" }) => (
	<EButton
		{...props}
		className={cn(
			"rounded-xl px-4 py-3 text-card",
			varient === "secondary" ? "bg-s" : "bg-p",
			className,
		)}
	/>
);
