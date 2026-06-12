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

const screenshots = [
  {
    title: 'Analytics Dashboard',
    description: 'Visual insights and comprehensive spending analysis',
    color: 'from-pink-300 to-pink-400',
    icon: '📊'
  },
  {
    title: 'Cash Envelopes',
    description: 'Digital envelope budgeting system',
    color: 'from-orange-300 to-orange-400',
    icon: '💰'
  },
  {
    title: 'Income Tracking',
    description: 'Monitor all income sources',
    color: 'from-green-300 to-green-400',
    icon: '💵'
  },
  {
    title: 'Expense Tracking',
    description: 'Quick and easy expense logging',
    color: 'from-blue-300 to-blue-400',
    icon: '💳'
  },
  {
    title: 'Budget Reports',
    description: 'Detailed financial summaries',
    color: 'from-purple-300 to-purple-400',
    icon: '📋'
  },
  {
    title: 'Goal Tracking',
    description: 'Monitor your financial goals',
    color: 'from-rose-300 to-rose-400',
    icon: '🎯'
  }
]

export function AppScreenshots() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              See Louise ExpenseDesk in Action
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
              Explore our premium gallery layout showcasing all key features
            </motion.p>
          </div>

          {/* Screenshot gallery */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -12 }}
                className="relative overflow-hidden rounded-2xl aspect-[9/16] cursor-pointer group"
              >
                {/* Screen content */}
                <div className={`bg-gradient-to-br ${screenshot.color} w-full h-full flex flex-col items-center justify-center relative`}>
                  {/* Screen gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4 px-6 text-center">
                    <div className="text-4xl">{screenshot.icon}</div>
                    <div className="text-white text-lg font-bold">{screenshot.title}</div>
                    <p className="text-white/90 text-sm leading-relaxed max-w-xs">
                      {screenshot.description}
                    </p>
                  </div>
                </div>

                {/* Phone frame border */}
                <div className="absolute inset-0 rounded-2xl shadow-lg border-8 border-gray-800/20 pointer-events-none" />

                {/* Hover effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 flex items-center justify-center z-20 rounded-2xl backdrop-blur-sm"
                >
                  <div className="text-white text-center">
                    <p className="text-base font-semibold">{screenshot.title}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
