import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
      description: z.string(),
      publishedAt: z.date().default(() => new Date()),
    }),
});

export const collections = {
  posts: postCollection,
};
