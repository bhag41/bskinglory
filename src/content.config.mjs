// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'


// 2. Import loader(s)
//import { glob } from 'astro/loaders'

// 3. Define your collection(s)
const projects = defineCollection({
  //loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
  }),
})

const blog = defineCollection({
  //loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    pubDate: z.string(), // ISO 8601 format e.g. "2025-04-13"
    description: z.string(),
    tags: z.array(z.string()).optional(),
  }),
})

export const collections = {
  projects,
  blog,
}


// // 4. Export a single `collections` object to register you collection(s)
// export const collections = { projects }
