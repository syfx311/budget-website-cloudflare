'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, Star, Sparkles, Gift, ArrowRight } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

export function BinderCollectionPreview() {
  const benefits = [
    {
      icon: CheckCircle2,
      title: 'Premium Quality',
      description: 'Handcrafted budget binders with premium materials designed to last'
    },
    {
      icon: Sparkles,
      title: 'Beautiful Designs',
      description: 'Aesthetic templates and layouts that make budgeting enjoyable'
    },
    {
      icon: Gift,
      title: 'Complete System',
      description: 'Everything you need for cash stuffing and financial organization'
    },
    {
      icon: Star,
      title: 'Trusted by 100+',
      description: 'Join Filipino families transforming their finances'
    }
  ]

  const features = [
    'Customizable monthly budget pages',
    'Envelope allocation templates',
    'Expense tracking sheets',
    'Savings goal trackers',
    'Bill payment organizer',
    'Financial notes section',
    'Inspiring motivational pages',
    'Premium binding and materials'
  ]

  return (
    <section className="binder-collection-section py-12 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="mb-12 md:mb-16 text-center max-w-3xl mx-auto"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-noto-sans font-bold text-foreground mb-4"
          >
            <span className="text-primary">Premium Budget Binder Collection</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed"
          >
            Master cash stuffing and budgeting with our handcrafted premium budget binders, designed specifically for Filipino families who want aesthetic organization combined with powerful financial tracking tools.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20"
        >
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-card rounded-xl p-6 border-2 border-primary/10 hover:border-primary/30 transition-colors"
              >
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2 text-lg">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="bg-card rounded-2xl p-8 md:p-12 border-2 border-primary/10 mb-16 md:mb-20"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-noto-sans font-bold text-foreground mb-8 text-center"
          >
            What&apos;s Included in Our Budget Binders
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-base">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="prose prose-lg dark:prose-invert max-w-none mb-16 md:mb-20 text-foreground"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-foreground mb-6"
          >
            Why Choose Our Budget Binder Collection?
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-lg text-muted-foreground leading-relaxed mb-6"
          >
            Our budget binder collection is more than just pretty pages—it&apos;s a complete system designed to help Filipino families master cash stuffing and transform their financial lives. Each binder combines aesthetic beauty with practical functionality, making budgeting enjoyable rather than a burden.
          </motion.p>

          <motion.h3 
            variants={fadeInUp}
            className="text-xl md:text-2xl font-bold text-foreground mt-8 mb-4"
          >
            Perfect for Cash Stuffing
          </motion.h3>

          <motion.p 
            variants={fadeInUp}
            className="text-lg text-muted-foreground leading-relaxed mb-6"
          >
            Our budget binders are specifically designed to complement the cash stuffing method. With dedicated envelope allocation pages, spending trackers, and financial planning sections, you can organize your entire budget system in one beautiful place. Track which envelopes need refilling, monitor spending patterns, and celebrate your savings progress.
          </motion.p>

          <motion.h3 
            variants={fadeInUp}
            className="text-xl md:text-2xl font-bold text-foreground mt-8 mb-4"
          >
            Aesthetic Design You&apos;ll Love Using
          </motion.h3>

          <motion.p 
            variants={fadeInUp}
            className="text-lg text-muted-foreground leading-relaxed mb-6"
          >
            We believe budgeting should be beautiful. That&apos;s why our collection features handcrafted designs, premium materials, and thoughtful layouts. When your budget binder looks and feels amazing, you&apos;ll actually want to use it daily. Choose from multiple color options and sizes to match your personal style.
          </motion.p>

          <motion.h3 
            variants={fadeInUp}
            className="text-xl md:text-2xl font-bold text-foreground mt-8 mb-4"
          >
            Built for Filipino Families
          </motion.h3>

          <motion.p 
            variants={fadeInUp}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Our budget binders are designed with Filipino family finances in mind. Templates accommodate extended family support, seasonal expenses, irregular income, and cultural financial priorities. Whether managing a single household or supporting multiple family members, our binders provide the flexibility and organization you need.
          </motion.p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="bg-primary/10 border-2 border-primary/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-foreground mb-4"
          >
            Ready to Master Cash Stuffing?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Explore our complete budget binder collection and start your journey to financial freedom today. Premium quality, beautiful design, and complete organization—all in one system.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Shop Budget Binders
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link 
              href="/budget-binder-philippines"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="mt-16 md:mt-20 text-center"
        >
          <motion.p 
            variants={fadeInUp}
            className="text-muted-foreground mb-4"
          >
            Trusted by 100+ Filipino families achieving financial freedom
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center gap-1"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </motion.div>
          <motion.p 
            variants={fadeInUp}
            className="text-foreground font-semibold mt-2"
          >
            5 Stars from Real Users
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
