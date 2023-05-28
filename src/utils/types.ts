import z from "zod";

export const postZodType = z.object({
  title: z.string(),
  body: z.string(),
  id: z.string().optional(),
});
