import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-posts'
import { getLatestProductUpdate } from '@/lib/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mommylouisebudgetph.com'
  
  // Get latest blog post date for blog hub
  const latestBlogDate = blogPosts.length > 0 
    ? blogPosts[0].updatedAt || blogPosts[0].publishedAt
    : new Date().toISOString().split('T')[0]
  
  // Get latest product update date
  const latestProductDate = getLatestProductUpdate()

  // Static pages with their update frequencies
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(latestProductDate),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(latestProductDate),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(latestBlogDate),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/app`,
      lastModified: new Date('2024-06-13'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date('2024-06-13'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/binder-collection`,
      lastModified: new Date('2024-06-13'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cash-stuffing-philippines`,
      lastModified: new Date('2024-06-13'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/budget-binder-philippines`,
      lastModified: new Date('2024-06-13'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/savings-challenge-philippines`,
      lastModified: new Date('2024-06-13'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/budget-envelopes-philippines`,
      lastModified: new Date('2024-06-13'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-mommy-louise`,
      lastModified: new Date('2024-06-13'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Dynamic blog post entries
  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogEntries]
}
