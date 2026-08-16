import type { TypeFlareHono } from "typeflare";
import type { AUTH } from "@/server/auth";
import type { CreatedDB } from "@/server/db";
import type Wrangler from "@/wrangler.json";

export type WaitUntil = (p: Promise<unknown>) => void;

export type HonoType = TypeFlareHono<
	typeof Wrangler,
	{
		auth: AUTH;
		db: CreatedDB;
		waitUntil: WaitUntil;
	}
>;
