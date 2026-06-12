'use client'

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

export function AppWhyCreated() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          {/* Section heading */}
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Built from Real Budgeting Experience
          </motion.h2>

          {/* Content */}
          <motion.div variants={fadeInUp} className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              At Mommy Louise Budget PH, we've helped thousands of people learn practical budgeting strategies.
            </p>

            <p>
              One challenge we consistently heard was the need for a simple, organized, and accessible budgeting tool.
            </p>

            <p className="font-medium text-foreground">
              Louise ExpenseDesk was created to solve that problem by bringing budgeting, expense tracking, cash envelope management, and reporting together in one easy-to-use platform.
            </p>
          </motion.div>

          {/* Goal statement */}
          <motion.div variants={fadeInUp} className="mt-10 bg-gradient-to-r from-pink-100/50 to-orange-100/50 border border-primary/20 rounded-2xl p-8">
            <p className="text-lg font-semibold text-foreground mb-4">Our goal is simple:</p>
            <p className="text-base text-muted-foreground">
              Help individuals, families, teams, and businesses build better financial habits and make confident money decisions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
