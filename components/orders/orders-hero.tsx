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

export function OrdersHero() {
  const handleStartOrdering = () => {
    const element = document.getElementById('order-form')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="orders-hero relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-32 left-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-noto-sans font-bold text-foreground mb-6 text-balance"
          >
            Place Your Order Online
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Submit your order quickly and conveniently through our online ordering system. Complete the form below and our team will review your request.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
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
