'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Clock, ArrowRight, Search } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { BlogPost, getAllBlogPosts } from '@/lib/blog-posts'
import { formatBlogDate } from '@/lib/date-utils'

interface BlogHomeProps {
  posts?: BlogPost[]
}

export function BlogHome({ posts: initialPosts }: BlogHomeProps) {
  const posts = initialPosts || getAllBlogPosts()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(posts.map((p) => p.category)))

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )

    const matchesCategory =
      selectedCategory === null || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pb-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Hero Breadcrumb */}
            <div className="flex justify-center mb-8">
              <span className="text-sm font-medium text-primary/70 tracking-widest uppercase">Resources</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              Money Tips & Insights
            </h1>
            <p className="text-xl md:text-2xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Expert budgeting strategies, cash stuffing guides, and financial planning advice tailored for Filipino families.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-border bg-background placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border"></div>

      {/* Category Filter */}
      <section className="py-8 md:py-10 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-4">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg transition-colors font-medium text-sm ${
                selectedCategory === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-white dark:bg-slate-950 border border-border text-foreground hover:border-primary/50'
              }`}
            >
              All Articles
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors font-medium text-sm ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-white dark:bg-slate-950 border border-border text-foreground hover:border-primary/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="space-y-12 md:space-y-16">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="flex flex-col gap-6">
                      {/* Image */}
                      <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 shadow-md">
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>

                      {/* Content */}
                      <div>
                        {/* Category & Date */}
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-widest">
                            {post.category}
                          </span>
                          <span className="text-xs text-muted-foreground font-medium">
                            {formatBlogDate(post.publishedAt, 'short')}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-foreground/85 leading-relaxed mb-6">
                          {post.description}
                        </p>

                        {/* Meta & CTA */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 border-t border-border">
                          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4 sm:mb-0">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              {post.readingTime} min read
                            </div>
                            <div className="hidden sm:block">•</div>
                            <div>{post.wordCount.toLocaleString()} words</div>
                          </div>
                          <button className="text-primary font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                            Read Article
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                No articles found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory(null)
                }}
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-primary/5 border-t border-border">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Ready to Transform Your Budget?
            </h2>
            <p className="text-lg text-foreground/85 mb-8 leading-relaxed">
              Browse our collection of customizable budget templates and start your cash stuffing journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Shop Templates
              </Link>
              <Link
                href="/"
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-semibold"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
