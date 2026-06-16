'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { BlogPost } from '@/lib/blog-posts'
import { formatBlogDate } from '@/lib/date-utils'
import { ReadingProgressBar } from './blog/reading-progress-bar'
import { SocialShareButtons } from './blog/social-share-buttons'

interface BlogPostLayoutProps {
  post: BlogPost
  children: React.ReactNode
  relatedPosts?: BlogPost[]
}

export function BlogPostLayout({
  post,
  children,
  relatedPosts = [],
}: BlogPostLayoutProps) {

  return (
    <>
      <ReadingProgressBar />
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pb-16 bg-white dark:bg-slate-950 border-b border-border">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-medium text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Category & Type */}
            <div className="flex justify-start mb-6">
              <span className="text-xs font-medium text-primary/70 tracking-widest uppercase">{post.category}</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              {post.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground/90 mb-10 text-balance leading-relaxed max-w-2xl">
              {post.description}
            </p>

            {/* Meta Information */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm text-muted-foreground border-t border-border/50 pt-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="font-medium">{post.author}</span>
              </div>
              <span className="hidden sm:block text-border/50">•</span>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatBlogDate(post.publishedAt, 'long')}</span>
              </div>
              <span className="hidden sm:block text-border/50">•</span>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 md:py-20 bg-background">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 md:py-24 bg-background">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '720px' }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="blog-editorial-content"
          >
            {children}
          </motion.div>
        </div>
      </article>

      <style jsx>{`
        :global(.blog-editorial-content) {
          font-size: 1.125rem; /* 18px base */
          line-height: 1.75;
          color: var(--color-foreground);
        }

        :global(.blog-editorial-content h2) {
          font-family: var(--font-serif);
          font-size: 2.25rem;
          font-weight: bold;
          margin-top: 6rem;
          margin-bottom: 2rem;
          color: var(--color-foreground);
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        @media (min-width: 768px) {
          :global(.blog-editorial-content h2) {
            font-size: 3rem;
            margin-top: 8rem;
            margin-bottom: 2.5rem;
          }
        }

        :global(.blog-editorial-content h3) {
          font-family: var(--font-serif);
          font-size: 1.875rem;
          font-weight: 600;
          margin-top: 4rem;
          margin-bottom: 1.5rem;
          color: var(--color-foreground);
          line-height: 1.3;
        }

        @media (min-width: 768px) {
          :global(.blog-editorial-content h3) {
            font-size: 2.25rem;
            margin-top: 5rem;
            margin-bottom: 2rem;
          }
        }

        :global(.blog-editorial-content h4) {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: var(--color-foreground);
        }

        :global(.blog-editorial-content p) {
          font-size: 1.125rem;
          line-height: 1.85;
          margin-bottom: 1.5rem;
          color: rgba(var(--color-foreground), 0.85);
        }

        @media (min-width: 768px) {
          :global(.blog-editorial-content p) {
            font-size: 1.25rem;
            line-height: 1.9;
            margin-bottom: 2rem;
          }
        }

        :global(.blog-editorial-content ul),
        :global(.blog-editorial-content ol) {
          margin: 2rem 0;
          padding-left: 1.5rem;
        }

        :global(.blog-editorial-content li) {
          margin-bottom: 0.75rem;
          line-height: 1.75;
          color: rgba(var(--color-foreground), 0.85);
        }

        :global(.blog-editorial-content strong) {
          font-weight: 600;
          color: var(--color-foreground);
        }

        :global(.blog-editorial-content a) {
          color: var(--color-primary);
          text-decoration: none;
          font-weight: 500;
        }

        :global(.blog-editorial-content a:hover) {
          text-decoration: underline;
        }

        :global(.blog-editorial-content blockquote) {
          border-left: 4px solid var(--color-primary);
          padding-left: 1.5rem;
          padding-right: 1rem;
          margin: 2rem 0;
          font-style: italic;
          color: rgba(var(--color-foreground), 0.75);
        }

        :global(.blog-editorial-content code) {
          background-color: rgba(var(--color-primary), 0.1);
          color: var(--color-primary);
          padding: 0.25rem 0.5rem;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          font-family: monospace;
        }

        :global(.blog-editorial-content pre) {
          background-color: rgb(15, 23, 42);
          color: rgb(226, 232, 240);
          padding: 1.5rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 2rem 0;
        }

        :global(.blog-editorial-content img) {
          border-radius: 0.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          margin: 2.5rem 0;
        }

        @media (min-width: 768px) {
          :global(.blog-editorial-content img) {
            margin: 3rem 0;
          }
        }

        :global(.blog-editorial-content hr) {
          margin: 4rem 0;
          border: none;
          border-top: 1px solid var(--color-border);
        }
      `}</style>

      {/* Social Share & Tags */}
      <section className="py-12 md:py-16 bg-white dark:bg-slate-950 border-t border-border">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary/20 transition-colors font-medium"
                >
                  #{tag}
                </Link>
              ))}
            </div>

            {/* Share Buttons */}
            <SocialShareButtons title={post.title} />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12">
              More Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="bg-white dark:bg-slate-950 rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all">
                      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                        <Image
                          src={relatedPost.featuredImage}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-xs text-primary font-medium uppercase tracking-widest mb-3">
                          {relatedPost.category}
                        </p>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-3 text-lg">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-foreground/75 line-clamp-2 mb-4">
                          {relatedPost.description}
                        </p>
                        <div className="flex items-center gap-2 pt-4 border-t border-border text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {relatedPost.readingTime} min read
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-primary/5 border-t border-border">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Get More Money Tips
            </h2>
            <p className="text-lg text-foreground/85 mb-8 leading-relaxed">
              Subscribe for weekly budgeting tips, savings strategies, and financial planning insights tailored for Filipino families.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  )
}
