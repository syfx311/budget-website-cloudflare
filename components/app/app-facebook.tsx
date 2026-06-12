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

export function AppFacebook() {
  return (
    <section id="facebook-cta" className="py-20 md:py-28 bg-card relative overflow-hidden" style={{ backgroundColor: 'rgba(255, 222, 222, 1)' }}>
      {/* Decorative bows */}
      <div className="absolute top-20 left-10 opacity-10">
        <DecorativeBow className="w-16 h-16 text-primary" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 scale-x-[-1]">
        <DecorativeBow className="w-20 h-20 text-primary" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <DecorativeBow className="w-8 h-8 text-primary opacity-50" />
              <p className="text-primary font-medium">Get Started</p>
              <DecorativeBow className="w-8 h-8 text-primary opacity-50 scale-x-[-1]" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-noto-sans text-foreground mb-4 text-balance">
              Get Your FREE Access Link
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Interested in trying Louise ExpenseDesk? Simply send us a message on Facebook and we'll provide your FREE access link along with instructions to get started.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
            className="rounded-2xl p-8 text-center border-2 border-primary/20 bg-white/30"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="mb-8"
            >
              <Facebook className="h-12 w-12 text-primary mx-auto" />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mb-6">
              <Button 
                asChild 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-full w-full sm:w-auto"
              >
                <a href="https://www.facebook.com/mommylouisebudgetph" target="_blank" rel="noopener noreferrer">
                  Message Us on Facebook
                </a>
              </Button>
            </motion.div>

            <p className="text-sm text-muted-foreground">
              Limited launch promotion available while access slots remain open.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
