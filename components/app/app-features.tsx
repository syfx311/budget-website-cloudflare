'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Wallet, 
  BarChart3, 
  LineChart, 
  Target, 
  Users, 
  Activity, 
  FileText,
  GitBranch,
  Lock
} from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

const features = [
  {
    icon: TrendingUp,
    title: 'Expense Tracking',
    description: 'Quickly record and monitor income and expenses.'
  },
  {
    icon: Wallet,
    title: 'Cash Envelope Budgeting',
    description: 'Digitally manage spending categories using a proven envelope budgeting system.'
  },
  {
    icon: BarChart3,
    title: 'Budget Planning',
    description: 'Create and manage budgets with ease.'
  },
  {
    icon: LineChart,
    title: 'Analytics Dashboard',
    description: 'Visual reports and insights to help you understand spending patterns.'
  },
  {
    icon: Target,
    title: 'Savings Goal Tracking',
    description: 'Monitor progress toward financial goals.'
  },
  {
    icon: Users,
    title: 'Multi-User Access',
    description: 'Collaborate with family members, teams, or departments.'
  },
  {
    icon: Activity,
    title: 'Team Budget Management',
    description: 'Track shared budgets and spending activities.'
  },
  {
    icon: FileText,
    title: 'Reporting & Insights',
    description: 'Generate meaningful financial summaries and reports.'
  },
  {
    icon: GitBranch,
    title: 'Department Budget Tracking',
    description: 'Ideal for businesses and organizations managing multiple budgets.'
  },
  {
    icon: Lock,
    title: 'Secure & Private',
    description: 'Keep your financial information protected and organized.'
  }
]

export function AppFeatures() {
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
            <p className="text-primary font-medium">Features</p>
            <DecorativeBow className="w-8 h-8 text-primary opacity-50 scale-x-[-1]" />
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-noto-sans text-foreground mb-4 text-balance">
            Everything You Need to Manage Your Finances
          </h2>
        </motion.div>

        {/* Features grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="rounded-2xl bg-white/50 border-2 border-primary/10 p-6 text-center hover:border-primary/30 hover:shadow-md transition-all"
              >
                <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="text-sm font-noto-sans text-foreground mb-2 font-medium">
                  {feature.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
