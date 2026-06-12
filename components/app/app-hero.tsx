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

          {/* Right - Phone mockups */}
          <motion.div
            variants={fadeInUp}
            className="relative h-full min-h-[500px] md:min-h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Main phone mockup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative z-20 mx-auto"
              >
                <div className="bg-white rounded-3xl shadow-2xl p-3 border-8 border-gray-800 max-w-xs">
                  <div className="bg-gradient-to-br from-pink-100 to-orange-50 rounded-2xl overflow-hidden aspect-[9/16] relative">
                    {/* Phone screen content */}
                    <div className="p-4 h-full flex flex-col gap-2">
                      <div className="flex items-center justify-between text-xs font-semibold mb-2">
                        <span>Louise</span>
                        <span>9:12</span>
                      </div>
                      
                      {/* Analytics Dashboard preview */}
                      <div className="bg-pink-300 rounded-lg p-3 space-y-2">
                        <div className="text-xs font-bold text-white">Analytics</div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-pink-500 rounded h-8 flex items-center justify-center text-white text-xs font-bold">₱34,501</div>
                          <div className="bg-orange-400 rounded h-8 flex items-center justify-center text-white text-xs font-bold">₱18,750</div>
                        </div>
                      </div>

                      {/* Monthly Cashflow */}
                      <div className="bg-white/80 rounded-lg p-2 space-y-1 flex-1">
                        <div className="text-xs font-bold">Monthly Cashflow</div>
                        <div className="h-12 bg-pink-200 rounded" />
                      </div>

                      {/* Income by category */}
                      <div className="bg-white/80 rounded-lg p-2">
                        <div className="text-xs font-bold mb-1">Income by Category</div>
                        <div className="h-6 bg-pink-300 rounded w-1/2" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Secondary phone mockup - offset */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -right-8 top-20 z-10 max-w-xs"
              >
                <div className="bg-white rounded-3xl shadow-xl p-3 border-8 border-gray-800">
                  <div className="bg-gradient-to-br from-blue-100 to-green-50 rounded-2xl overflow-hidden aspect-[9/16] relative">
                    {/* Phone screen content */}
                    <div className="p-4 h-full flex flex-col gap-2">
                      <div className="flex items-center justify-between text-xs font-semibold mb-2">
                        <span>10:22</span>
                      </div>
                      
                      {/* Envelopes list */}
                      <div className="space-y-2 flex-1">
                        <div className="bg-pink-400 rounded-lg h-10 flex items-center px-2 text-white text-xs font-bold">
                          Groceries
                        </div>
                        <div className="bg-orange-400 rounded-lg h-10 flex items-center px-2 text-white text-xs font-bold">
                          Transportation
                        </div>
                        <div className="bg-purple-400 rounded-lg h-10 flex items-center px-2 text-white text-xs font-bold">
                          Entertainment
                        </div>
                        <div className="bg-green-400 rounded-lg h-10 flex items-center px-2 text-white text-xs font-bold">
                          Savings
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-0 left-0 text-pink-300 opacity-40 text-6xl"
              >
                💝
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
