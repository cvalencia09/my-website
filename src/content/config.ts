import { defineCollection, z } from "astro:content";

const albums = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      cover: image(),
      description: z.string().optional(),
    }),
});

export const collections = {
  albums,
};