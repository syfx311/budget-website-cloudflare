'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
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

export function AppShowcase() {
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
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <DecorativeBow className="w-8 h-8 text-primary opacity-50" />
            <p className="text-primary font-medium">App Preview</p>
            <DecorativeBow className="w-8 h-8 text-primary opacity-50 scale-x-[-1]" />
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-noto-sans text-foreground mb-4 text-balance">
            See Louise ExpenseDesk in Action
          </h2>
          
          <p className="text-muted-foreground leading-relaxed">
            Experience the full power of our budgeting platform with an intuitive interface designed for simplicity and control.
          </p>
        </motion.div>

        {/* App Image Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Highlight frame background */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 to-orange-200/40 rounded-3xl blur-2xl -z-10" />
          
          {/* Inner glow effect */}
          <div className="absolute inset-0 rounded-3xl border-2 border-primary/20 shadow-2xl" />
          
          {/* Image container */}
          <div className="relative p-4 md:p-6 rounded-3xl bg-white/50">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F35996ab0b05341159cc5ee44f61b4191?format=webp&width=2000&height=2400"
                alt="Louise ExpenseDesk App - Complete Feature Showcase with Analytics Dashboard and Cash Envelopes"
                width={1600}
                height={1920}
                priority
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 800px"
                unoptimized
              />
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
