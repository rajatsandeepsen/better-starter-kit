import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { type SchemaType, schema } from "./schema";

export const createDB = (connectionString: string) => {
	const client = postgres(connectionString, { prepare: false });
	return drizzle(client, { schema });
};

export type DATABASE = PostgresJsDatabase<SchemaType>;
export type CreatedDB = ReturnType<typeof createDB>;
