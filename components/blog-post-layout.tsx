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
      <section className="pt-24 pb-8 md:pb-12 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-medium"
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

            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 text-balance leading-tight">
              {post.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance leading-relaxed max-w-2xl">
              {post.description}
            </p>

            {/* Meta Information */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-muted-foreground border-t border-border pt-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="font-medium">{post.author}</span>
              </div>
              <span className="hidden sm:block">•</span>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatBlogDate(post.publishedAt, 'long')}</span>
              </div>
              <span className="hidden sm:block">•</span>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 md:py-16 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
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
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:font-serif prose-headings:font-bold
              prose-h2:text-4xl md:prose-h2:text-5xl prose-h2:mt-24 md:prose-h2:mt-32 prose-h2:mb-8 md:prose-h2:mb-10 prose-h2:text-foreground
              prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mt-16 md:prose-h3:mt-20 prose-h3:mb-6 md:prose-h3:mb-8 prose-h3:text-foreground prose-h3:font-semibold
              prose-p:text-lg md:prose-p:text-xl prose-p:text-foreground/85 prose-p:leading-relaxed md:prose-p:leading-loose prose-p:mb-6 md:prose-p:mb-8
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-primary prose-a:no-underline prose-a:font-medium hover:prose-a:underline
              prose-li:text-foreground/85 prose-li:leading-relaxed md:prose-li:leading-loose prose-li:mb-3
              prose-ul:my-8 prose-ol:my-8 prose-ul:space-y-3 prose-ol:space-y-3
              prose-code:bg-primary/10 prose-code:text-primary prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
              prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-pre:border prose-pre:border-primary/20 prose-pre:p-6 prose-pre:rounded-lg prose-pre:overflow-x-auto
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground/75 prose-blockquote:my-8
              prose-img:rounded-lg prose-img:shadow-lg prose-img:my-10 md:prose-img:my-12
              prose-hr:my-16 md:prose-hr:my-20 prose-hr:border-border"
          >
            {children}
          </motion.div>
        </div>
      </article>

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
