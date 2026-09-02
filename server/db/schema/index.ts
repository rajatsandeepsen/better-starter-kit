import { account, session, user, verification } from "./auth";

export const schema = {
	user,
	account,
	verification,
	session,
} as const;

export type SchemaType = typeof schema;
