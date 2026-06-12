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
    <section className="py-20 md:py-28 bg-card relative overflow-hidden">
      {/* Decorative bows */}
      <div className="absolute top-10 left-10 opacity-10">
        <DecorativeBow className="w-20 h-20 text-primary" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 scale-x-[-1]">
        <DecorativeBow className="w-16 h-16 text-primary" />
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
            <p className="text-primary font-medium">Testimonials</p>
            <DecorativeBow className="w-8 h-8 text-primary opacity-50 scale-x-[-1]" />
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-noto-sans text-foreground mb-4 text-balance">
            What Our Community Says
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="rounded-2xl bg-white/50 border-2 border-primary/10 p-8 hover:border-primary/30 hover:shadow-md transition-all"
            >
              {/* Star rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-base text-foreground font-medium mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <p className="text-sm text-muted-foreground">
                — {testimonial.author}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
