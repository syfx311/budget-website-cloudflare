'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'
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

// Bow SVG component matching the logo style
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

export function AppHero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-32 md:pb-32 overflow-hidden hero-section" style={{
      backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F64760a9914d14ea2ab9d9fb5e2717772?format=webp&width=2400&height=3600)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* Strong fading white transparency mask across entire hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.15) 60%, rgba(255,255,255,0.02) 85%, transparent 100%)'
        }}
      />

      {/* Extended fading white transparency mask - stronger left, fades right */}
      <div
        className="absolute left-0 top-0 bottom-0 pointer-events-none"
        style={{
          width: '100%',
          background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.65) 20%, rgba(255,255,255,0.35) 45%, rgba(255,255,255,0.08) 70%, transparent 100%)'
        }}
      />

      {/* Decorative bows */}
      <motion.div
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 0.3, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-32 left-10 hidden lg:block"
      >
        <DecorativeBow className="w-16 h-16 text-primary" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, rotate: 20 }}
        animate={{ opacity: 0.3, rotate: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute top-48 right-16 hidden lg:block"
      >
        <DecorativeBow className="w-12 h-12 text-primary" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-20 left-1/4 hidden lg:block"
      >
        <DecorativeBow className="w-10 h-10 text-primary" />
      </motion.div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left relative z-20 rounded-2xl px-6 md:px-8 py-8 md:py-12 backdrop-blur-md md:backdrop-blur-none"
            style={{
              background: 'linear-gradient(90deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.08) 100%)',
              backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.08) 100%)'
            }}
          >
            {/* Badge */}
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border-2 border-primary/20 shadow-sm mb-6"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="h-4 w-4 text-primary" />
              </motion.div>
              <span className="text-sm text-primary font-medium">New App Launch</span>
            </motion.div>

            {/* Heading - using font-noto-adlam like Home page */}
            <motion.h1
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-6xl font-noto-adlam text-foreground leading-tight mb-6 text-balance drop-shadow-lg"
            >
              Budget Smarter<br />
              with<br />
              <span className="text-primary font-signature text-4xl md:text-5xl lg:text-7xl drop-shadow-md">Louise ExpenseDesk</span>
            </motion.h1>

            {/* Subheading - matching Home page style */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-md"
            >
              Take control of your finances with a flexible budgeting platform designed for individuals, families, teams, businesses, and enterprises.
            </motion.p>

            {/* Supporting text */}
            <motion.p 
              variants={fadeInUp}
              className="text-base text-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Created by Mommy Louise Budget PH to help you organize finances, track spending, manage budgets, and achieve financial confidence.
            </motion.p>

            {/* CTA Buttons - matching Home page button style */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 rounded-full"
                >
                  <a href="#facebook-cta">Get Free Access</a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild 
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary/30 text-primary hover:bg-primary/5 px-8 rounded-full"
                >
                  <a href="https://www.facebook.com/mommylouisebudgetph" target="_blank" rel="noopener noreferrer">
                    Message Us on Facebook
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
