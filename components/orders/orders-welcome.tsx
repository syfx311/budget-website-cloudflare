'use client'

import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export function OrdersWelcome() {
  return (
    <section className="orders-welcome py-16 md:py-24 bg-secondary">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-noto-sans font-bold text-foreground mb-8">
            Welcome to Our Online Ordering Page
          </h2>

          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              Thank you for choosing Mommy Louise Budget PH.
            </p>

            <p>
              This page allows you to conveniently submit your order online. Simply complete the order form below with your selected products and details, and our team will review your request.
            </p>

            <p>
              We are committed to providing quality products, reliable service, and a smooth ordering experience for every customer.
            </p>

            <p>
              Whether you're placing a new order or reordering, we've made the process simple, fast, and hassle-free.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
