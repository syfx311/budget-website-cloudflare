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
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
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
              Everything You Need to Manage Your Finances
            </motion.h2>
          </div>

          {/* Features grid */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-colors text-center group"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {feature.description}
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
