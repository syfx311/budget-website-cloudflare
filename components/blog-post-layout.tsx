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
      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-noto-sans font-bold text-foreground mb-4 text-balance">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6 text-balance">
              {post.description}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground border-t border-b border-primary/10 py-4">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {formatBlogDate(post.publishedAt, 'long')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} min read</span>
              </div>
              <div className="text-xs">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-lg"
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
      <article className="py-16 md:py-20 bg-gradient-to-b from-transparent via-primary/2 to-transparent">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '720px' }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none
              prose-headings:font-noto-sans prose-headings:font-bold
              prose-h2:text-3xl md:prose-h2:text-4xl lg:prose-h2:text-5xl prose-h2:mt-20 md:prose-h2:mt-24 prose-h2:mb-6 md:prose-h2:mb-8 prose-h2:text-foreground
              prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mt-16 md:prose-h3:mt-20 prose-h3:mb-5 md:prose-h3:mb-6 prose-h3:text-foreground prose-h3:font-semibold
              prose-p:text-lg md:prose-p:text-xl prose-p:text-foreground/85 prose-p:leading-relaxed md:prose-p:leading-loose prose-p:mb-6 md:prose-p:mb-8
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-primary prose-a:no-underline prose-a:font-medium hover:prose-a:underline
              prose-li:text-foreground/85 prose-li:leading-relaxed md:prose-li:leading-loose prose-li:mb-3
              prose-ul:my-8 prose-ol:my-8 prose-ul:space-y-3 prose-ol:space-y-3
              prose-code:bg-primary/10 prose-code:text-primary prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
              prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-pre:border prose-pre:border-primary/20 prose-pre:p-6 prose-pre:rounded-lg prose-pre:overflow-x-auto
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground/75 prose-blockquote:my-8
              prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8 md:prose-img:my-10
              prose-hr:my-12 md:prose-hr:my-16 prose-hr:border-primary/10"
          >
            {children}
          </motion.div>
        </div>
      </article>

      {/* Social Share & Tags */}
      <section className="py-12 bg-card/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary/20 transition-colors"
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
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-noto-sans font-bold text-foreground mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="bg-card rounded-lg border border-primary/10 overflow-hidden hover:border-primary/30 transition-all">
                      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                        <Image
                          src={relatedPost.featuredImage}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-xs text-primary font-medium mb-2">
                          {relatedPost.category}
                        </p>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedPost.description}
                        </p>
                        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-primary/10 text-xs text-muted-foreground">
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-noto-sans font-bold text-foreground mb-3">
              Learn More Money Management Tips
            </h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for weekly budgeting tips, savings strategies, and financial planning insights tailored for Filipino families.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-primary/20 bg-card placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-medium"
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
