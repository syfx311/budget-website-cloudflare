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

// Bow SVG component
function DecorativeBow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M30 25C30 25 15 15 10 20C5 25 10 35 15 35C20 35 30 25 30 25Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
      />
      <path 
        d="M30 25C30 25 45 15 50 20C55 25 50 35 45 35C40 35 30 25 30 25Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
      />
      <path 
        d="M30 25C30 25 25 35 27 45" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
      />
      <path 
        d="M30 25C30 25 35 35 33 45" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
      />
      <circle cx="30" cy="25" r="3" fill="currentColor" />
    </svg>
  )
}

export function AppPromotion() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative bows */}
      <div className="absolute top-10 right-10 opacity-10">
        <DecorativeBow className="w-24 h-24 text-primary" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <DecorativeBow className="w-20 h-20 text-primary" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mb-4">
            <DecorativeBow className="w-8 h-8 text-primary opacity-50" />
            <p className="text-primary font-medium">Launch Promotion</p>
            <DecorativeBow className="w-8 h-8 text-primary opacity-50 scale-x-[-1]" />
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl lg:text-4xl font-noto-sans font-bold text-foreground mb-8 text-balance">
            Louise ExpenseDesk Launch Promotion
          </motion.h2>

          <motion.div variants={staggerContainer} className="space-y-6 mb-10">
            <motion.p variants={fadeInUp} className="text-base text-foreground leading-relaxed">
              We're excited to officially launch Louise ExpenseDesk to the Mommy Louise Budget PH community.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-base text-foreground leading-relaxed">
              For a limited time, we're offering FREE access links to users who would like to explore the platform and experience its budgeting features.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-base text-foreground leading-relaxed font-medium">
              Whether you're managing your home budget, running a business, or leading a team, Louise ExpenseDesk can help you stay financially organized and in control.
            </motion.p>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 rounded-full"
              >
                <a href="#facebook-cta">Claim My Free Access Link</a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
