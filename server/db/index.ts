import { type DrizzleD1Database, drizzle } from "drizzle-orm/d1";
import type { D1Database } from "typeflare";
import { type SchemaType, schema } from "./schema";

export const createDB = (db: D1Database) => drizzle(db, { schema });

export type DATABASE = DrizzleD1Database<SchemaType>;
export type CreatedDB = ReturnType<typeof createDB>;
