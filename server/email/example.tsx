import { Preview, Section, Text } from "@react-email/components";
import { Button } from "./components";
import { EmailLayout } from "./layout";

interface EmailProps {
	username: string;
}

const Email = ({ username }: EmailProps) => (
	<EmailLayout>
		<Preview>Hi</Preview>

		<Text className="text-3xl">Hi</Text>

		<Section className="text-center">
			<Text className="text-left text-lg">Hey {username}!</Text>

			<Button>Hi</Button>
		</Section>
	</EmailLayout>
);

Email.PreviewProps = {
	username: "username",
} satisfies EmailProps;

export default Email;
