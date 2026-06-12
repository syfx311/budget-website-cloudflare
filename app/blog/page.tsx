import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { BlogHome } from '@/components/blog-home'
import { Contact, Footer } from '@/components/contact'
import { getAllBlogPosts } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: 'Budget Tips & Money Management Blog - Mommy Louise',
  description: 'Learn budgeting strategies, cash stuffing tips, and financial planning advice for Filipino families. Master personal finance with expert money management insights.',
  keywords: ['budget blog', 'money management tips', 'budgeting advice', 'cash stuffing guide', 'personal finance Philippines'],
  openGraph: {
    title: 'Budget Tips & Money Management Blog - Mommy Louise',
    description: 'Learn budgeting strategies, cash stuffing tips, and financial planning advice for Filipino families.',
    type: 'website',
    images: [
      {
        url: '/images/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Budget Tips & Money Management Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Budget Tips & Money Management Blog - Mommy Louise',
    description: 'Learn budgeting strategies, cash stuffing tips, and financial planning advice for Filipino families.',
  },
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <BlogHome posts={posts} />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
