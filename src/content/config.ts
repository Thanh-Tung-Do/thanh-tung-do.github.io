import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    organisation: z.string().optional(),
    category: z.enum([
      'analytics-visualization',
      'data-science-ml',
      'side-projects',
    ]),
    description: z.string(),
    tags: z.array(z.string()),
    thumbnail: z.string().optional(),
    github: z.string().url().optional(),
    live: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    startDate: z.string(),
    endDate: z.string().default('Present'),
    order: z.number(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    category: z.enum([
      'data-tutorial',
      'career-journey',
      'project-writeup',
      'personal',
    ]),
    thumbnail: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, experience, blog };
