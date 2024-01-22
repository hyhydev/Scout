import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { pusherServerClient } from "~/server/common/pusher";

export const pusherRouter = createTRPCRouter({
  setDisplayText: publicProcedure.mutation(async () => {
    await pusherServerClient.trigger(`scout`, "set-display-text", {
      text: "hello world",
    });
  }),
});
