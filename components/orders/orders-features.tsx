'use client'

import { motion } from 'framer-motion'
import { Smartphone, Award, Headphones, Star } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const scaleHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.03, y: -8 }
}

const features = [
  {
    icon: Smartphone,
    title: 'Easy Online Ordering',
    description: 'Place orders conveniently from any device.'
  },
  {
    icon: Award,
    title: 'Quality Products',
    description: 'Products offered with a focus on value and customer satisfaction.'
  },
  {
    icon: Headphones,
    title: 'Reliable Service',
    description: 'A smooth ordering process supported by responsive customer service.'
  },
  {
    icon: Star,
    title: 'Trusted Experience',
    description: 'Committed to providing a dependable and customer-friendly experience.'
  },
]

export function OrdersFeatures() {
  return (
    <section className="orders-features py-20 md:py-28 bg-secondary">
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
            Why Choose Mommy Louise Budget PH
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're dedicated to making your ordering experience smooth, trustworthy, and rewarding
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial="rest"
                whileHover="hover"
                variants={scaleHover}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  variants={fadeInUp}
                  className="features-card h-full bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-colors"
                >
                  {/* Icon */}
                  <div className="mb-6 p-4 w-fit rounded-xl bg-primary/10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-noto-sans font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
