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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-background to-cream-50 pointer-events-none" />
      
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary pointer-events-none blur-3xl"
      />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left content */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">✨ NEW APP LAUNCH</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              Budget Smarter.<br />
              <span className="text-primary">Live Better.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Take control of your finances with Louise ExpenseDesk — a flexible budgeting platform designed for individuals, families, teams, businesses, and enterprises.
            </motion.p>

            {/* Supporting text */}
            <motion.p variants={fadeInUp} className="text-base text-muted-foreground">
              Created by Mommy Louise Budget PH to help people organize their finances, track spending, manage budgets, and achieve financial confidence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
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

          {/* Right - App showcase image */}
          <motion.div
            variants={fadeInUp}
            className="relative h-full min-h-[500px] md:min-h-[600px] flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative w-full max-w-lg"
            >
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F35996ab0b05341159cc5ee44f61b4191?format=webp&width=800&height=1200"
                alt="Louise ExpenseDesk App Mockup - Analytics Dashboard and Cash Envelopes"
                width={400}
                height={600}
                priority
                className="w-full h-auto drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
