import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { isValidTagId } from '../data/tags';
import { MAX_TAGS_PER_POST } from '../consts';

const articleCollection = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.mdx' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.coerce.date(),
    lastUpdatedDate: z.coerce.date().optional(),
    tags: z
      .array(
        z.string().refine(isValidTagId, {
          message: 'Invalid tag ID. Please use a valid tag ID from tags.ts'
        })
      )
      .max(MAX_TAGS_PER_POST)
      .optional()
      .default([])
  })
});

export const collections = {
  articles: articleCollection
};
