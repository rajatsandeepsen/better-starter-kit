import { sql } from "drizzle-orm";
import {
	type AnyPgColumn,
	type SubqueryWithSelection,
	text,
	timestamp,
} from "drizzle-orm/pg-core";
import type { CreatedDB } from ".";

export const Increment = (column: AnyPgColumn, value = 1) => {
	return sql`${column} + ${value}`;
};

export const Decrement = (column: AnyPgColumn, value = 1) => {
	return sql`${column} - ${value}`;
};

export const Multipy = (column: AnyPgColumn, value = 1) => {
	return sql`${column} * ${value}`;
};

export const AddToArray = <T extends AnyPgColumn>(column: T, data: any) => {
	return sql`${column} || ${[data]}`; // Append userId to the array
};

export const createdAt = (name = "created_at") =>
	timestamp(name, { withTimezone: false }).default(sql`now()`).notNull();

export const updatedAt = (name = "updated_at") =>
	timestamp(name, { withTimezone: false })
		.default(sql`now()`)
		.$onUpdate(() => new Date())
		.notNull();

export const id = (name: string) => text(name).notNull();
export const generateId = (name: string) =>
	text(name).default(sql`gen_random_uuid()`).notNull();

export async function enableTrigramExtension(db: CreatedDB) {
	await db.execute(sql`CREATE EXTENSION IF NOT EXISTS pg_trgm`);
}

export const getSubQueryTableColumns = <
	T extends SubqueryWithSelection<any, string>,
>(
	table: T,
) => table._.selectedFields;
