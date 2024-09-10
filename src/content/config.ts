import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image().refine((img: any) => img.width >= 1080, {
        message: "Cover image must be at least 1080 pixels wide!",
      }),
      description: z.string(),
      publishedAt: z.date().default(() => new Date()),
    }),
});

export const collections = {
  posts: postCollection,
};
