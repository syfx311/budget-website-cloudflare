'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, FileText, Send, CheckCircle } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
}

const steps = [
  {
    icon: ShoppingCart,
    title: 'Select Your Products',
    description: 'Choose the products you would like to order.',
    number: '1'
  },
  {
    icon: FileText,
    title: 'Complete the Order Form',
    description: 'Fill in your contact information and order details accurately.',
    number: '2'
  },
  {
    icon: Send,
    title: 'Submit Your Order',
    description: 'Send your order through the online ordering system.',
    number: '3'
  },
  {
    icon: CheckCircle,
    title: 'Wait for Confirmation',
    description: 'Our team will review your submission and contact you if additional information is needed.',
    number: '4'
  },
]

export function OrdersProcess() {
  return (
    <section className="orders-process py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-noto-sans font-bold text-foreground mb-4">
            How Ordering Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A simple, four-step process to get your order placed and confirmed
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                variants={scaleIn}
                className="process-card relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/3 w-8 h-1 bg-gradient-to-r from-primary/50 to-transparent" />
                )}

                <div className="bg-card border border-border/50 rounded-2xl p-8 h-full hover:border-primary/30 transition-colors">
                  {/* Step number circle */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 pt-4">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-noto-sans font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
