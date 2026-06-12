'use client'

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

export function AppWhyCreated() {
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
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <DecorativeBow className="w-8 h-8 text-primary opacity-50" />
            <p className="text-primary font-medium">Our Story</p>
            <DecorativeBow className="w-8 h-8 text-primary opacity-50 scale-x-[-1]" />
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-noto-sans text-foreground mb-4 text-balance">
            Built from Real Budgeting Experience
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <motion.p variants={fadeInUp} className="text-base text-foreground leading-relaxed">
            At Mommy Louise Budget PH, we've helped thousands of people learn practical budgeting strategies.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-base text-foreground leading-relaxed">
            One challenge we consistently heard was the need for a simple, organized, and accessible budgeting tool.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-base text-foreground leading-relaxed font-medium">
            Louise ExpenseDesk was created to solve that problem by bringing budgeting, expense tracking, cash envelope management, and reporting together in one easy-to-use platform.
          </motion.p>

          <motion.div variants={fadeInUp} className="bg-white/50 border-2 border-primary/20 rounded-2xl p-8 text-center mt-8">
            <p className="text-foreground font-medium mb-3">Our goal is simple:</p>
            <p className="text-base text-foreground leading-relaxed">
              Help individuals, families, teams, and businesses build better financial habits and make confident money decisions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
