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
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

export function AppFacebook() {
  return (
    <section id="facebook-cta" className="py-20 md:py-28 bg-secondary/50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          {/* Heading */}
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Get Your FREE Access Link
          </motion.h2>

          {/* Content */}
          <motion.div variants={staggerContainer} className="space-y-6 mb-10">
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground">
              Interested in trying Louise ExpenseDesk?
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
              Simply send us a message on Facebook and we'll provide your FREE access link along with instructions to get started.
            </motion.p>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={fadeInUp} className="mb-8">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 gap-2">
              <a href="https://www.facebook.com/mommylouisebudgetph" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5" />
                Message Us on Facebook
              </a>
            </Button>
          </motion.div>

          {/* Secondary text */}
          <motion.p variants={fadeInUp} className="text-sm text-muted-foreground">
            Limited launch promotion available while access slots remain open.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
