import {
	Body,
	Column,
	Container,
	Head,
	Html,
	Img,
	Link,
	pixelBasedPreset,
	Row,
	Section,
	Tailwind,
} from "@react-email/components";
import { socials } from "@/lib/social";
import { getBaseURL } from "@/lib/web";

type LayoutProps = {
	children: React.ReactNode;
	title?: string;
};

export const EmailLayout = ({ children, title }: LayoutProps) => (
	<Html>
		<Head>
			<title>{title ?? "Example"}</title>
		</Head>
		<Tailwind
			config={{
				presets: [pixelBasedPreset],
				theme: {
					extend: {
						fontFamily: {
							fmc: "Impact",
						},
						color: {
							p: "#7C35FF",
							y: "#F1CC7E",
							i: "#5D05FF",
							s: "#DAC3FF",
							b: "#111015",
							background: "#F9F8FC",
							foreground: "#111015",
							border: "#E5E7EB",
							card: "#FFFFFF",
						},
						tracking: {
							normal: "1px",
						},
					},
				},
			}}
		>
			<Body
				className={`m-0 bg-background text-foreground tracking-normal bg-[url('${getBaseURL("/assets/background.png")}')] bg-center bg-cover font-fmc uppercase`}
			>
				<Container className="mx-auto max-w-[480px] p-5">
					<Section className="rounded-md border border-border bg-card p-6">
						<Img
							src={getBaseURL("/logos/with-bg.png")}
							width="60"
							height="60"
							alt="Logo"
						/>
						{children}
					</Section>
					<Section className="mt-5 rounded-md bg-foreground p-6 text-card">
						<Footer />
					</Section>
				</Container>
			</Body>
		</Tailwind>
	</Html>
);

const Footer = () => (
	<>
		<Row>
			<Column>
				<Link
					className="text-inherit"
					href={socials.domain}
					target="_blank"
					rel="noreferrer"
				>
					<Img
						alt="logo"
						width="60"
						height="60"
						src={getBaseURL("/logos/white.png")}
					/>
				</Link>
			</Column>
		</Row>
	</>
);
