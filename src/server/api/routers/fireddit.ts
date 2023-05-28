import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { postZodType } from "~/utils/types";

export const fireRedditRouter = createTRPCRouter({
  createSub: protectedProcedure
    .input(postZodType)
    .mutation(({ input: { body, title, id }, ctx }) => {
      const createPost = ctx.prisma.subreddit.create({
        data: {
          name: title,
          description: body,
        },
      });
      return createPost;
    }),

  createPostInSub: protectedProcedure
    .input(postZodType)
    .mutation(({ ctx, input }) => {
      const { body, title, id } = input;
      ctx.prisma.subreddit.update({
        data: {
          posts: {
            create: {
              title,
              body,
            },
          },
        },
        where: {
          id,
        },
      });
    }),
});
