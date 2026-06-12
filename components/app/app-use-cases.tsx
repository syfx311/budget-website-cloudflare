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

const useCases = [
  {
    icon: Home,
    title: 'Home & Family Budgeting',
    description: 'Manage household expenses, savings goals, groceries, bills, and family budgets in one place.',
    color: 'bg-pink-100 border-pink-300',
  },
  {
    icon: User,
    title: 'Personal Finance',
    description: 'Track income and spending habits while staying accountable to your financial goals.',
    color: 'bg-rose-100 border-rose-300',
  },
  {
    icon: Briefcase,
    title: 'Small Business Management',
    description: 'Monitor business expenses, categorize transactions, and gain better visibility into cash flow.',
    color: 'bg-amber-100 border-amber-300',
  },
  {
    icon: Users,
    title: 'Teams & Organizations',
    description: 'Collaborate with team members, monitor spending, and manage budgets more effectively.',
    color: 'bg-emerald-100 border-emerald-300',
  },
  {
    icon: Building2,
    title: 'Enterprise & Corporate Use',
    description: 'Support larger organizations with centralized budget tracking, reporting, expense monitoring, and financial oversight.',
    color: 'bg-blue-100 border-blue-300',
  }
]

export function AppUseCase() {
  return (
    <section className="py-20 md:py-28 bg-card relative overflow-hidden">
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
            <p className="text-primary font-medium">Use Cases</p>
            <DecorativeBow className="w-8 h-8 text-primary opacity-50 scale-x-[-1]" />
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-noto-sans text-foreground mb-4 text-balance">
            One Platform. Multiple Use Cases.
          </h2>
          
          <p className="text-muted-foreground leading-relaxed">
            Whether you're managing your own finances or overseeing multiple departments, Louise ExpenseDesk adapts to your budgeting needs.
          </p>
        </motion.div>

        {/* Use cases grid - matching About section card style */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`rounded-2xl border-2 p-8 shadow-sm ${useCase.color} hover:shadow-md transition-shadow`}
              >
                <Icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-noto-sans text-foreground mb-2">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
