import { ORPCError, type ORPCErrorCode } from "@orpc/client";
import { os } from "@orpc/server";
import { triedAsync, tryAsync } from "@/lib/tools";
import type { StaticContextORPC } from "./context";

export const getError = (
	code: ORPCErrorCode = "INTERNAL_SERVER_ERROR",
	message?: string,
	cause?: unknown,
) => {
	cause && console.error(cause);
	return new ORPCError(code, {
		message: message ?? "Something wrong",
		cause,
	});
};

export const handleError = (error: Error, message: string = "1") => {
	return getError(
		"INTERNAL_SERVER_ERROR",
		`INTERNAL_SERVER_ERROR - ${message}`,
		error,
	);
};

export const tryAPI = async <D>(tag: string, promise: Promise<D>) => {
	const { error, data } = await triedAsync(promise, tag);
	if (error) throw handleError(error, tag);
	return data;
};

export const publicProcedure = os.$context<StaticContextORPC>();

export const protectedProcedure = publicProcedure.use(
	async ({ context, next }) => {
		const [error, session] = await tryAsync(
			context.auth.api.getSession({
				headers: context.req.headers,
			}),
		);

		if (error)
			throw getError("INTERNAL_SERVER_ERROR", "Failed to retrieve session");

		if (!session?.user)
			throw getError(
				"UNAUTHORIZED",
				"You are not authorized to access this action",
			);

		return next({
			context: {
				session: session,
				user: session.user,
			},
		});
	},
);
