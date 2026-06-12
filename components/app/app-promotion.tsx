'use client'

import Link from 'next/link'
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

export function AppPromotion() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-background to-orange-50 pointer-events-none" />

      {/* Decorative elements */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-10 right-10 text-6xl opacity-10"
      >
        🎉
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-semibold text-primary">🎉 Launch Promotion</span>
          </motion.div>

          {/* Headline */}
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8">
            Louise ExpenseDesk Launch Promotion
          </motion.h2>

          {/* Content */}
          <motion.div variants={staggerContainer} className="space-y-6 mb-10">
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
              We're excited to officially launch Louise ExpenseDesk to the Mommy Louise Budget PH community.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
              For a limited time, we're offering FREE access links to users who would like to explore the platform and experience its budgeting features.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-base text-foreground font-medium">
              Whether you're managing your home budget, running a business, or leading a team, Louise ExpenseDesk can help you stay financially organized and in control.
            </motion.p>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={fadeInUp}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
              <a href="#facebook-cta">Claim My Free Access Link</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
