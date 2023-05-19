import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    draft: z.boolean(),
    author: z.string(),
  }),
});

export const collections = { blog };
