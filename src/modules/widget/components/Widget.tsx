import { cn } from "@/src/common/components/cn";

type Props = {
	apiKey: string;
};

export const Widget = (p: Props) => {
	return (
		<div
			className={cn(
				//
				"bg-secondary text-primary",
				{ dark: true },
				{ "fixed inset-0": false },
			)}
		>
			<div className="flex items-center justify-between gap-4">
				<h2 className="flex items-center gap-2">{"Widget"}</h2>
				<span className="font-mono text-xs">{`Key: ${p.apiKey}`}</span>
			</div>
		</div>
	);
};
