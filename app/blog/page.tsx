import type { Metadata } from 'next'
import Script from 'next/script'
import { Header } from '@/components/header'
import { BlogHome } from '@/components/blog-home'
import { Contact, Footer } from '@/components/contact'
import { getAllBlogPosts } from '@/lib/blog-posts'
import { getCanonicalMetadata } from '@/lib/canonical'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Budget Tips, Cash Stuffing & Money Management Blog | Mommy Louise',
  description: 'Expert budgeting strategies, cash stuffing guides, and financial planning advice for Filipino families. Learn to save more with proven money management tips.',
  keywords: ['budget blog', 'cash stuffing guide', 'money management tips', 'budgeting advice', 'savings tips Philippines', 'personal finance'],
  ...getCanonicalMetadata('/blog'),
  openGraph: {
    title: 'Budget Tips, Cash Stuffing & Money Management Blog | Mommy Louise',
    description: 'Expert budgeting strategies, cash stuffing guides, and financial planning advice for Filipino families.',
    type: 'website',
    url: 'https://mommylouisebudgetph.com/blog',
    images: [
      {
        url: 'https://mommylouisebudgetph.com/images/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Budget Tips & Cash Stuffing Guide Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Budget Tips, Cash Stuffing & Money Management Blog | Mommy Louise',
    description: 'Expert budgeting strategies and cash stuffing guides for Filipino families.',
  },
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen">
        <Header />
        <div className="pt-20">
          <BlogHome posts={posts} />
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  )
}
