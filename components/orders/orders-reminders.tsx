'use client'

import { motion } from 'framer-motion'
import { AlertCircle, Check } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const reminders = [
  'Review your order details carefully.',
  'Double-check product quantities and selections.',
  'Make sure your contact information is correct.',
  'Provide accurate delivery or pickup information if applicable.',
  'Wait for confirmation after submission.',
  'Contact our team if you need assistance with your order.'
]

export function OrdersReminders() {
  return (
    <section className="orders-reminders py-16 md:py-24 bg-accent">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-8">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <h3 className="text-2xl font-noto-sans font-semibold text-foreground">
                Before Submitting Your Order
              </h3>
            </div>

            {/* Reminders list */}
            <ul className="space-y-3">
              {reminders.map((reminder, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground leading-relaxed">{reminder}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
