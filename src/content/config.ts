import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const articleCollection = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.mdx' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.coerce.date(),
    lastUpdatedDate: z.coerce.date().optional()
  })
});

export const collections = {
  articles: articleCollection
};
