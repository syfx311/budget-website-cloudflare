'use client'

import { motion } from 'framer-motion'
import { Home, User, Briefcase, Users, Building2 } from 'lucide-react'

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

const useCases = [
  {
    icon: Home,
    title: 'Home & Family Budgeting',
    description: 'Manage household expenses, savings goals, groceries, bills, and family budgets in one place.'
  },
  {
    icon: User,
    title: 'Personal Finance',
    description: 'Track income and spending habits while staying accountable to your financial goals.'
  },
  {
    icon: Briefcase,
    title: 'Small Business Management',
    description: 'Monitor business expenses, categorize transactions, and gain better visibility into cash flow.'
  },
  {
    icon: Users,
    title: 'Teams & Organizations',
    description: 'Collaborate with team members, monitor spending, and manage budgets more effectively.'
  },
  {
    icon: Building2,
    title: 'Enterprise & Corporate Use',
    description: 'Support larger organizations with centralized budget tracking, reporting, expense monitoring, and financial oversight.'
  }
]

export function AppUseCase() {
  return (
    <section className="py-20 md:py-28 bg-secondary/50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
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
              One Platform. Multiple Use Cases.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
              Whether you're managing your own finances or overseeing multiple departments, Louise ExpenseDesk adapts to your budgeting needs.
            </motion.p>
          </div>

          {/* Use cases grid */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 hover:border-primary/30 transition-colors group"
                >
                  <div className="mb-4">
                    <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
