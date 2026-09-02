import { Container } from "@/components/container";

export const dynamic = "force-static";

export default function ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Container className="markdown lg:w-lg xl:w-xl 2xl:w-2xl">
			{children}
		</Container>
	);
}
