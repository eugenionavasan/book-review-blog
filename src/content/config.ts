// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const booksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    publishDate: z.date(),
    coverImage: z.string(),
    rating: z.number().min(0).max(5),
    tags: z.array(z.string()).optional(),
    description: z.string(),
    dateRead: z.date(),
    draft: z.boolean().default(false)
  })
});

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    publishDate: z.date(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    description: z.string(),
    draft: z.boolean().optional().default(false)
  })
});

export const collections = {
  'books': booksCollection,
  'articles': articlesCollection
};