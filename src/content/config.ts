import { defineCollection, z } from 'astro:content';

const tours = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string(),
    eventDate: z.string(),
    duration: z.string(),
    season: z.string(),
    price: z.string().optional(),
    image: z.string(),
    imageAlt: z.string(),
    gallery: z.array(z.object({ src: z.string(), alt: z.string() })),
    keywords: z.array(z.string()),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })),
    relatedTours: z.array(z.string()).default([]),
    relatedBlogs: z.array(z.string()).default([]),
    externalLink: z
      .object({ anchor: z.string(), url: z.string() })
      .optional(),
    publishDate: z.string(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string(),
    date: z.string(),
    readTime: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    keywords: z.array(z.string()),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })),
    relatedTours: z.array(z.string()).default([]),
    relatedBlogs: z.array(z.string()).default([]),
    publishDate: z.string(),
  }),
});

const hotels = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string(),
    starRating: z.number(),
    district: z.string(),
    address: z.string(),
    priceUSD: z.string(),
    priceAMD: z.string(),
    distanceRepublicSquare: z.string(),
    distanceCascade: z.string(),
    amenities: z.array(z.string()),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    image: z.string(),
    imageAlt: z.string(),
    gallery: z.array(z.object({ src: z.string(), alt: z.string() })),
    keywords: z.array(z.string()),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })),
    relatedTours: z.array(z.string()).default([]),
    publishDate: z.string(),
  }),
});

export const collections = { tours, blog, hotels };
