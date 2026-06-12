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
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-noto-sans font-bold text-foreground mb-4">
              Budget Tips & Money Management Insights
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Learn budgeting strategies, money-saving tips, and financial planning advice tailored for Filipino families. Master the cash stuffing method and take control of your finances.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border-2 border-primary/20 bg-card placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-primary/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-primary/20 text-foreground hover:border-primary/50'
              }`}
            >
              All Articles
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-primary/20 text-foreground hover:border-primary/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="space-y-8">
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
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
                      {/* Image */}
                      <div className="md:col-span-1 relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 shadow-md">
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="md:col-span-2 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                              {post.category}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {formatBlogDate(post.publishedAt, 'short')}
                            </span>
                          </div>
                          <h2 className="text-xl md:text-2xl font-noto-sans font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-3">
                            {post.title}
                          </h2>
                          <p className="text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                            {post.description}
                          </p>
                        </div>

                        {/* Meta & CTA */}
                        <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {post.readingTime} min read
                            </div>
                            <div>{post.wordCount.toLocaleString()} words</div>
                          </div>
                          <button className="text-primary font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                            Read More
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
      <section className="py-16 md:py-20 bg-card">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-noto-sans font-bold text-foreground mb-3">
              Ready to Transform Your Budget?
            </h2>
            <p className="text-muted-foreground mb-6">
              Browse our collection of customizable budget templates and start your cash stuffing journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-medium"
              >
                Shop Templates
              </Link>
              <Link
                href="/"
                className="px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-colors font-medium"
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
