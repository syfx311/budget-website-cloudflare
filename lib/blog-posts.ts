export interface BlogPost {
  id: string
  slug: string
  title: string
  description: string
  content: string
  author: string
  authorImage: string
  publishedAt: string
  updatedAt?: string
  category: string
  tags: string[]
  featuredImage: string
  readingTime: number
  wordCount: number
  primaryKeyword: string
  relatedPosts?: string[] // slugs of related posts
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'cash-stuffing-for-beginners-guide',
    title: 'Cash Stuffing for Beginners: Complete Step-by-Step Guide',
    description: 'Learn the proven cash stuffing budgeting method from scratch. This complete guide covers everything Filipino families need to know to get started with budget envelopes and take control of their finances.',
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-15',
    category: 'Budgeting',
    tags: ['cash stuffing', 'budgeting', 'money management', 'family finances', 'personal finance Philippines'],
    author: 'Mommy Louise',
    authorImage: '/images/mommy-louise.jpg',
    featuredImage: '/images/blog-cash-stuffing-beginners.jpg',
    readingTime: 14,
    wordCount: 3000,
    primaryKeyword: 'cash stuffing method',
    relatedPosts: [],
    content: '', // Content loaded from blog-content.ts
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}

export function getRelatedPosts(slug: string): BlogPost[] {
  const post = getBlogPostBySlug(slug)
  if (!post?.relatedPosts) return []
  return post.relatedPosts
    .map((relatedSlug) => getBlogPostBySlug(relatedSlug))
    .filter((p): p is BlogPost => p !== undefined)
}
