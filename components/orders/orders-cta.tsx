'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

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

export function OrdersCTA() {
  const handleStartOrdering = () => {
    const element = document.getElementById('order-form')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="orders-cta relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-primary/5 pointer-events-none" />

      {/* Decorative circle */}
      <div className="absolute -bottom-40 right-10 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-noto-sans font-bold text-foreground mb-6"
          >
            Ready to Place Your Order?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            Submit your order today using our secure online ordering system.
          </motion.p>

          <motion.div
            variants={fadeInUp}
          >
            <Button
              onClick={handleStartOrdering}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 text-base font-semibold inline-flex items-center gap-2 cursor-pointer"
            >
              Start Ordering
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
