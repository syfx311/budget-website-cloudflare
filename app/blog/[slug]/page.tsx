import type { Metadata } from 'next'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { BlogPostLayout } from '@/components/blog-post-layout'
import { Footer } from '@/components/contact'
import { getBlogPostBySlug, getRelatedPosts } from '@/lib/blog-posts'
import { blogPostContent } from '@/lib/blog-content'

// Generate static pages for all blog posts
export function generateStaticParams() {
  // This will be populated as we add more posts
  return [
    { slug: 'cash-stuffing-for-beginners-guide' },
  ]
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(params.slug)

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.featuredImage,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author,
      image: post.authorImage,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mommy Louise Budget PH',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mommylouisebudgetph.com/images/logo.png',
      },
    },
    wordCount: post.wordCount,
    articleBody: post.content,
    keywords: post.tags.join(', '),
    mainEntity: {
      '@type': 'Article',
      about: post.primaryKeyword,
    },
  }

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema),
        }}
      />
      <main className="min-h-screen">
        <Header />
        <div className="pt-20">
          <BlogPostLayout post={post} relatedPosts={relatedPosts}>
            <div
              dangerouslySetInnerHTML={{
                __html: blogPostContent[post.slug] || post.content,
              }}
            />
          </BlogPostLayout>
        </div>
        <Footer />
      </main>
    </>
  )
}
