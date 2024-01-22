import { queueRouter } from "~/server/api/routers/queue";
import { createTRPCRouter } from "~/server/api/trpc";
import { pusherRouter } from "./routers/pusher";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  queue: queueRouter,
  pusher: pusherRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
