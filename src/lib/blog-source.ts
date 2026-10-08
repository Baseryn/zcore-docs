import { defineCollections } from 'fumadocs-mdx/macro';
import { z } from 'zod';

export const blog = defineCollections({
  type: 'doc',
  dir: 'content/blog',

  schema: z.object({
    title: z.string(),
    description: z.string().optional(),

    date: z.coerce.date().optional(),

    author: z.string().optional(),
    authorRole: z.string().optional(),
    readTime: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});