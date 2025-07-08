import { defineCollection, z } from 'astro:content';
import { MAX_TAGS_PER_POST } from '../consts';
import { isValidTagId } from '../data/tags';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
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

export const collections = { blog };
