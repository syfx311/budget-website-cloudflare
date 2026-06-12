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

export function AppAbout() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
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
            Meet Louise ExpenseDesk
          </motion.h2>

          {/* Main description */}
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed mb-6">
            Louise ExpenseDesk is a modern budgeting and expense management platform designed to simplify financial tracking for everyday users and growing organizations.
          </motion.p>

          {/* Secondary description */}
          <motion.p variants={fadeInUp} className="text-base text-muted-foreground leading-relaxed mb-8">
            Built with simplicity and efficiency in mind, the platform helps users stay organized, gain financial visibility, and make smarter spending decisions.
          </motion.p>

          {/* Highlight */}
          <motion.div variants={fadeInUp} className="bg-white/50 border border-primary/20 rounded-2xl p-8 backdrop-blur-sm">
            <p className="text-base text-foreground leading-relaxed">
              Whether you're managing household expenses, coordinating team budgets, or monitoring business finances, Louise ExpenseDesk provides the tools you need to stay in control.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
