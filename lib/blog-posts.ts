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
    featuredImage: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F46357f548a264ba5a729604c058e5f6d?format=webp&width=800&height=1200',
    readingTime: 14,
    wordCount: 3000,
    primaryKeyword: 'cash stuffing method',
    relatedPosts: ['create-your-family-budget-planner-guide', 'budget-categories-custom-system', '100k-savings-challenge-complete-guide'],
    content: '', // Content loaded from blog-content.ts
  },
  {
    id: '2',
    slug: 'create-your-family-budget-planner-guide',
    title: 'Create Your Family Budget Planner: Step-by-Step Guide',
    description: 'Master the art of creating a personalized family budget planner. This comprehensive guide includes templates, tracking systems, and proven strategies to help Filipino families plan budgets effectively and reach their financial goals.',
    publishedAt: '2024-02-20',
    updatedAt: '2024-02-20',
    category: 'Budgeting',
    tags: ['budget planner', 'family budget', 'budget template', 'monthly budget', 'budget planning', 'financial planning'],
    author: 'Mommy Louise',
    authorImage: '/images/mommy-louise.jpg',
    featuredImage: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Ffea2c50759cf4c368a8e6725f40b2106?format=webp&width=800&height=1200',
    readingTime: 15,
    wordCount: 2800,
    primaryKeyword: 'family budget planner',
    relatedPosts: ['cash-stuffing-for-beginners-guide', 'budget-categories-custom-system', '100k-savings-challenge-complete-guide'],
    content: '', // Content loaded from blog-content.ts
  },
  {
    id: '3',
    slug: 'budget-categories-custom-system',
    title: 'Budget Categories: Build Your Custom System',
    description: 'Learn how to create the perfect budget category system for your Filipino family. Discover common spending categories, allocation percentages, and expert tips to customize a budget structure that matches your unique financial needs.',
    publishedAt: '2024-03-05',
    updatedAt: '2024-03-05',
    category: 'Money Management',
    tags: ['budget categories', 'spending categories', 'budget allocation', 'personal finance', 'money management Philippines'],
    author: 'Mommy Louise',
    authorImage: '/images/mommy-louise.jpg',
    featuredImage: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F231150ace25048838aaff4ef77434ad2?format=webp&width=800&height=1200',
    readingTime: 14,
    wordCount: 2750,
    primaryKeyword: 'budget categories',
    relatedPosts: ['create-your-family-budget-planner-guide', 'cash-stuffing-for-beginners-guide', '100k-savings-challenge-complete-guide'],
    content: '', // Content loaded from blog-content.ts
  },
  {
    id: '4',
    slug: '100k-savings-challenge-complete-guide',
    title: 'The 100k Savings Challenge: Complete Guide',
    description: 'Start your 100k savings challenge today! This complete guide walks you through setting goals, creating a timeline, finding extra money to save, and maintaining motivation throughout your savings journey to reach 100,000 pesos.',
    publishedAt: '2024-03-18',
    updatedAt: '2024-03-18',
    category: 'Savings',
    tags: ['savings challenge', '100k challenge', 'savings goal', 'savings plan', 'emergency fund', 'money goals'],
    author: 'Mommy Louise',
    authorImage: '/images/mommy-louise.jpg',
    featuredImage: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F8a5286783a644c539143b94115dc171c?format=webp&width=800&height=1200',
    readingTime: 14,
    wordCount: 2900,
    primaryKeyword: 'savings challenge',
    relatedPosts: ['create-your-family-budget-planner-guide', 'budget-categories-custom-system', 'cash-stuffing-for-beginners-guide'],
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
