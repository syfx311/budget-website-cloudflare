'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

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

const testimonials = [
  {
    quote: 'This app helped me finally stay consistent with my monthly budget.',
    author: 'Community Member',
    rating: 5
  },
  {
    quote: 'I love how simple and organized everything feels.',
    author: 'Community Member',
    rating: 5
  },
  {
    quote: 'Perfect for managing both family and business expenses.',
    author: 'Community Member',
    rating: 5
  }
]

export function AppTestimonials() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              What Our Community Says
            </motion.h2>
          </div>

          {/* Testimonials grid */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 hover:border-primary/30 transition-colors flex flex-col"
              >
                {/* Star rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-foreground font-medium mb-6 flex-1">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <p className="text-sm text-muted-foreground">
                  — {testimonial.author}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
