'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

export function AppHero() {
  return (
    <section className="relative pt-20 pb-12 md:pt-24 md:pb-16 overflow-hidden">
      {/* Background with gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-background to-orange-50 pointer-events-none" />

      {/* Animated background orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-primary pointer-events-none blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2.5, delay: 0.2 }}
        className="absolute -bottom-40 left-0 w-96 h-96 rounded-full bg-pink-300 pointer-events-none blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-12 md:mb-16"
        >
            {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">✨ NEW APP LAUNCH</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-4">
            Budget Smarter.<br />
            <span className="text-primary">Live Better.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
            Take control of your finances with Louise ExpenseDesk — a flexible budgeting platform designed for individuals, families, teams, businesses, and enterprises.
          </motion.p>

          {/* Supporting text */}
          <motion.p variants={fadeInUp} className="text-base text-muted-foreground max-w-2xl mx-auto mb-8">
            Created by Mommy Louise Budget PH to help people organize their finances, track spending, manage budgets, and achieve financial confidence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
              <a href="#facebook-cta">Get Free Access</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary/30 text-primary hover:bg-primary/5">
              <a href="https://www.facebook.com/mommylouisebudgetph" target="_blank" rel="noopener noreferrer">
                Message Us on Facebook
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Full-width app showcase image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          {/* Highlight frame background */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 to-orange-200/40 rounded-3xl blur-2xl -z-10" />

          {/* Inner glow effect */}
          <div className="absolute inset-0 rounded-3xl border-2 border-primary/20 shadow-2xl" />

          {/* Image container with padding and rounded corners */}
          <div className="relative p-4 md:p-6 rounded-3xl bg-white/50">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F35996ab0b05341159cc5ee44f61b4191?format=webp&width=1400&height=1680"
                alt="Louise ExpenseDesk App - Complete Feature Showcase"
                width={1200}
                height={1440}
                priority
                quality={95}
                className="w-full h-auto"
              />

              {/* Decorative corner accents */}
              <div className="absolute top-4 right-4 w-12 h-12 border-2 border-primary/40 rounded-full" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-primary/30 rounded-full" />
            </motion.div>
          </div>

          {/* Floating decorative elements */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 text-5xl opacity-60"
          >
            💝
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            className="absolute -bottom-6 -left-6 text-4xl opacity-50"
          >
            ✨
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
