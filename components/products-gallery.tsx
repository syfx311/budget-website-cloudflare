'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Sparkles, Heart, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const products = [
  {
    id: 1,
    title: 'Budget Envelope Inserts',
    description: 'Beautiful pink gingham cash envelopes with custom categories for every budget need',
    image: '/images/budget-inserts.png',
    features: ['Customizable Categories', 'Premium Cardstock', 'Gingham Design'],
    badge: 'Best Seller',
  },
  {
    id: 2,
    title: 'Premium Budget Binders',
    description: 'Elegant leather binders in multiple colors with gold ring mechanisms and card slots',
    image: '/images/budget-binders.png',
    features: ['Multiple Colors', 'Card Pockets', 'Gold Rings'],
    badge: 'Premium',
  },
]

// Decorative Bow SVG
function Bow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" className={className} fill="none">
      <path
        d="M50 30 C30 10, 5 15, 10 30 C15 45, 35 40, 50 30"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M50 30 C70 10, 95 15, 90 30 C85 45, 65 40, 50 30"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M50 30 C30 10, 5 15, 10 30 C15 45, 35 40, 50 30"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M50 30 C70 10, 95 15, 90 30 C85 45, 65 40, 50 30"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="50" cy="30" r="6" fill="currentColor" />
      <path d="M46 36 Q50 55, 48 58" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M54 36 Q50 55, 52 58" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  )
}

export function ProductsGallery() {
  return (
    <section id="products" className="py-20 md:py-28 relative overflow-hidden">
      {/* Gingham Background */}
      <div className="absolute inset-0 gingham-pattern opacity-30" />
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 text-primary/20"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Bow className="w-20 h-12" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-10 text-primary/20"
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Bow className="w-24 h-14" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Bow className="w-12 h-8 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Handcrafted With Love
            </span>
            <Bow className="w-12 h-8 text-primary transform scale-x-[-1]" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            Our Finished Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Each piece is thoughtfully designed and crafted to help you achieve your financial goals with style
          </p>
        </motion.div>

        {/* Featured Products - Two Column */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="bg-card rounded-3xl border-2 border-primary/20 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.2, type: 'spring' }}
                    className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium"
                  >
                    <Sparkles className="w-3 h-3" />
                    {product.badge}
                  </motion.span>
                </div>

                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Decorative corner bow */}
                  <Bow className="absolute top-0 right-4 w-10 h-6 text-primary/30 -translate-y-1/2" />
                  
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, i) => (
                      <motion.span
                        key={feature}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        <Heart className="w-3 h-3 fill-primary" />
                        {feature}
                      </motion.span>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary"
                  >
                    <Link href="#contact">Inquire Now</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Collection Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-card rounded-3xl border-2 border-primary/20 overflow-hidden shadow-xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-6 text-center border-b border-primary/10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Full Collection
                </span>
                <Star className="w-5 h-5 text-primary fill-primary" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                Browse Our Complete Design Library
              </h3>
            </div>

            {/* Large Image */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
              <Image
                src="/images/products-grid.png"
                alt="Complete collection of budget templates and designs"
                fill
                className="object-cover hover:scale-[1.02] transition-transform duration-700"
              />
              {/* Decorative overlay corners */}
              <div className="absolute top-4 left-4">
                <Bow className="w-16 h-10 text-white/50" />
              </div>
              <div className="absolute top-4 right-4">
                <Bow className="w-16 h-10 text-white/50 transform scale-x-[-1]" />
              </div>
              <div className="absolute bottom-4 left-4">
                <Bow className="w-16 h-10 text-white/50 transform scale-y-[-1]" />
              </div>
              <div className="absolute bottom-4 right-4">
                <Bow className="w-16 h-10 text-white/50 transform scale-[-1]" />
              </div>
            </div>

            {/* Footer CTA */}
            <div className="p-6 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-foreground font-medium">
                  50+ unique designs available
                </p>
                <p className="text-muted-foreground text-sm">
                  Custom orders welcome - tell us your budget categories!
                </p>
              </div>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Order Custom Design
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {[
            { label: 'Designs Available', value: '50+' },
            { label: 'Happy Customers', value: '100+' },
            { label: 'Custom Orders', value: '200+' },
            { label: 'Binder Colors', value: '4+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/20 p-4 text-center"
            >
              <div className="font-serif text-2xl md:text-3xl text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
