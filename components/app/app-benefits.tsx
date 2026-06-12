'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

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

const benefits = [
  'Stay Organized',
  'Gain Financial Clarity',
  'Save Time',
  'Make Better Decisions',
  'Reach Financial Goals',
  'Scale As You Grow'
]

const benefitDescriptions: Record<string, string> = {
  'Stay Organized': 'Keep all your financial information in one place.',
  'Gain Financial Clarity': 'Understand exactly where your money goes.',
  'Save Time': 'Simplify budgeting and reporting.',
  'Make Better Decisions': 'Use real insights to improve spending habits.',
  'Reach Financial Goals': 'Stay focused on what matters most.',
  'Scale As You Grow': 'Perfect for individuals, families, teams, businesses, and enterprises.'
}

export function AppBenefits() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Why Users Love Louise ExpenseDesk
            </motion.h2>
          </div>

          {/* Benefits grid */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ x: 8 }}
                className="flex gap-4 p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors group"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{benefit}</h3>
                  <p className="text-sm text-muted-foreground">
                    {benefitDescriptions[benefit]}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
