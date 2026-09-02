import { relations } from "drizzle-orm";
import {
	account,
	accountRelations,
	session,
	sessionRelations,
	user,
	verification,
} from "./auth";

const userRelations = relations(user, ({ many, one }) => ({
	sessions: many(session),
	accounts: many(account),
}));

export const schema = {
	user,
	account,
	verification,
	session,
	userRelations,
	sessionRelations,
	accountRelations,
} as const;

export type SchemaType = typeof schema;
