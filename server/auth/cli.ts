import { createAuth } from "@/server/auth";
import { createDB } from "@/server/db";

const db = createDB({} as Parameters<typeof createDB>[0]);
const auth = createAuth(db, "", () => {});

export default auth;
