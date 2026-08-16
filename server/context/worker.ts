import type { GetDefaultExport } from "typeflare";
import type Wrangler from "@/wrangler.json";

type Exports = GetDefaultExport<typeof Wrangler>;

export const { env, waitUntil, withEnv } = {} as Exports;
