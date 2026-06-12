'use client'

import Link from 'next/link'
import { Facebook } from 'lucide-react'
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
      delayChildren: 0.1
    }
  }
}

export function AppCTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-background to-rose-100 pointer-events-none" />

      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute top-10 left-10 text-4xl opacity-20"
      >
        💖
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          {/* Headline */}
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Your Financial Journey Starts Here
          </motion.h2>

          {/* Description */}
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Take control of your finances, improve your budgeting habits, and build a stronger financial future with Louise ExpenseDesk.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeInUp} className="mb-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 gap-2">
              <a href="https://www.facebook.com/mommylouisebudgetph" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5" />
                Message Us on Facebook
              </a>
            </Button>
          </motion.div>

          {/* Supporting text */}
          <motion.p variants={fadeInUp} className="text-lg text-foreground font-medium">
            Your financial clarity starts here. 💖
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
